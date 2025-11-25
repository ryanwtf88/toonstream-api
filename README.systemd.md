# ToonStream API - Systemd-Compatible Docker Setup

This Docker setup uses Supervisor for process management with systemctl-compatible commands.

## Building and Running

### Build the image:
```bash
docker build -t toonstream-api .
```

### Run with docker run:
```bash
docker run -d \
  --name toonstream-api \
  -p 3030:3030 \
  toonstream-api
```

### Or use docker-compose:
```bash
docker-compose up -d
```

## Managing the Service with systemctl-compatible commands

### Check service status:
```bash
docker exec toonstream-api systemctl status toonstream-api
```

### Restart the service:
```bash
docker exec toonstream-api systemctl restart toonstream-api
```

### Stop the service:
```bash
docker exec toonstream-api systemctl stop toonstream-api
```

### Start the service:
```bash
docker exec toonstream-api systemctl start toonstream-api
```

## Using Supervisor directly

### Check all services:
```bash
docker exec toonstream-api supervisorctl status
```

### View logs:
```bash
docker exec toonstream-api tail -f /var/log/toonstream-api.out.log
docker exec toonstream-api tail -f /var/log/toonstream-api.err.log
```

### Restart with supervisor:
```bash
docker exec toonstream-api supervisorctl restart toonstream-api
```

### Stop with supervisor:
```bash
docker exec toonstream-api supervisorctl stop toonstream-api
```

### Start with supervisor:
```bash
docker exec toonstream-api supervisorctl start toonstream-api
```

## Checking Application Logs

### Real-time stdout logs:
```bash
docker exec toonstream-api tail -f /var/log/toonstream-api.out.log
```

### Real-time stderr logs:
```bash
docker exec toonstream-api tail -f /var/log/toonstream-api.err.log
```

### View last 100 lines:
```bash
docker exec toonstream-api tail -n 100 /var/log/toonstream-api.out.log
```

### Container logs:
```bash
docker logs toonstream-api -f
```

## Service Configuration

The service is managed by Supervisor with the following features:
- Automatic restart on failure (up to 3 retries)
- Logs stored in `/var/log/toonstream-api.out.log` and `/var/log/toonstream-api.err.log`
- systemctl-compatible wrapper for familiar commands
- No privileged mode or special volumes required

### Configuration files:
- Supervisor config: `/etc/supervisor/conf.d/toonstream-api.conf`
- Systemd service (for reference): `/etc/systemd/system/toonstream-api.service`

## Healthcheck

The container includes a healthcheck that verifies the API is responding on port 3030.

Check health status:
```bash
docker ps
```

View detailed health:
```bash
docker inspect toonstream-api | grep -A 10 Health
```

## Troubleshooting

### Container not starting:
```bash
docker logs toonstream-api
```

### Service not running:
```bash
docker exec toonstream-api supervisorctl status
docker exec toonstream-api tail -n 50 /var/log/toonstream-api.err.log
```

### Reload configuration after changes:
```bash
docker exec toonstream-api supervisorctl reread
docker exec toonstream-api supervisorctl update
```

### Interactive shell:
```bash
docker exec -it toonstream-api bash
```

## Advantages of this approach

1. **No privileged mode required** - Unlike full systemd, this runs in standard Docker
2. **Familiar systemctl commands** - Wrapper provides systemctl compatibility
3. **Automatic restarts** - Supervisor handles process crashes
4. **Better logs** - Dedicated log files with easy access
5. **Lighter weight** - Less overhead than full systemd
6. **Docker-friendly** - Works with all Docker environments
