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
IMG_TAG="app-web:latest"

docker build -t $IMG_TAG .
docker run -p 3000:3000 --rm $IMG_TAG
```

### services/app-mobile

### services/server-fastify

# references

1. https://github.com/wpcodevo/google-github-oauth2-nodejs/blob/master/src/controllers/auth.controller.ts
2. https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps
3. https://codevoweb.com/how-to-implement-github-oauth-in-reactjs/