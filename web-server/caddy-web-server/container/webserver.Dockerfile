FROM caddy:2.0.0
COPY ./caddy/Caddyfile /etc/caddy/Caddyfile
EXPOSE 80 443 