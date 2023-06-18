# notes

### testing github oauth login

1. in frontend, access the github oauth ""

```bash
get_access_token() {
  GITHUB_CODE=$1
  http POST localhost:3333 code=$GITHUB_CODE --json
}
```

## debugging

### services/app-web

```bash

run_container() {
  local container_name="$1"
  local image_tag="${container_name}:latest"
  local RANDOM_PORT=$RANDOM

  docker build --no-cache -t $image_tag . &&
    docker run  --rm -d --name $container_name -p $RANDOM_PORT:$RANDOM_PORT $image_tag &&
    docker logs -f $container_name
}
run_container abacate
```

### services/app-mobile

### services/server-fastify

# references

1. https://github.com/wpcodevo/google-github-oauth2-nodejs/blob/master/src/controllers/auth.controller.ts
2. https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps
3. https://codevoweb.com/how-to-implement-github-oauth-in-reactjs/
4. https://nodejs.org/api/cli.html#cli_node_options_options
   1. https://nodejs.org/en/docs/guides
5. https://github.com/localstack/localstack-pro-samples
6. https://github.com/flolu/docker-typescript-debug/blob/master/docker-compose.yml
7. https://github.com/kconner/next-js-in-docker-example
8. https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
9. 