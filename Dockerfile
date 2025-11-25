FROM ubuntu:22.04

# Prevent interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install supervisor and dependencies (without systemd for simplicity)
RUN apt-get update && apt-get install -y \
    supervisor \
    curl \
    unzip \
    ca-certificates \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* bun.lockb* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy application files
COPY . .

# Create log directory
RUN mkdir -p /var/log/supervisor

# Create supervisord configuration
RUN printf '[supervisord]\n\
nodaemon=true\n\
user=root\n\
logfile=/var/log/supervisor/supervisord.log\n\
pidfile=/var/run/supervisord.pid\n\
loglevel=info\n\
\n\
[program:toonstream-api]\n\
command=/root/.bun/bin/bun run index.js\n\
directory=/app\n\
autostart=true\n\
autorestart=true\n\
startretries=3\n\
stderr_logfile=/var/log/toonstream-api.err.log\n\
stdout_logfile=/var/log/toonstream-api.out.log\n\
environment=NODE_ENV="production",PORT="3030"\n\
user=root\n' > /etc/supervisor/conf.d/toonstream-api.conf

# Create systemctl wrapper script for compatibility
RUN printf '#!/bin/bash\n\
\n\
SERVICE="$2"\n\
ACTION="$1"\n\
\n\
if [ "$SERVICE" != "toonstream-api" ] && [ "$SERVICE" != "toonstream-api.service" ]; then\n\
    echo "Unknown service: $SERVICE"\n\
    exit 1\n\
fi\n\
\n\
case "$ACTION" in\n\
    start)\n\
        supervisorctl start toonstream-api\n\
        ;;\n\
    stop)\n\
        supervisorctl stop toonstream-api\n\
        ;;\n\
    restart)\n\
        supervisorctl restart toonstream-api\n\
        ;;\n\
    status)\n\
        supervisorctl status toonstream-api\n\
        ;;\n\
    enable|disable)\n\
        echo "Service is managed by supervisor (always enabled)"\n\
        ;;\n\
    *)\n\
        echo "Usage: systemctl {start|stop|restart|status|enable|disable} toonstream-api"\n\
        exit 1\n\
        ;;\n\
esac\n' > /usr/local/bin/systemctl && chmod +x /usr/local/bin/systemctl

# Expose port
EXPOSE 3030

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3030

# Start supervisor
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]
