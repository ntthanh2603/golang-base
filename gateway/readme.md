```
docker run \
  --name tyk_gateway \
  --network keycloak \
  -p 8081:8080 \
  -v $(pwd)/tyk.standalone.conf:/opt/tyk-gateway/tyk.conf \
  -v $(pwd)/apps:/opt/tyk-gateway/apps \
  docker.tyk.io/tyk-gateway/tyk-gateway:latest
```
