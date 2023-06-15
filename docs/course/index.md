# notes



```bash
# step 1
http GET "https://github.com/login/oauth/authorize?client_id=c759502d42a22933c26f"

# step 2
GITHUB_CODE=a89baf2c164e197a8c75
http POST localhost:3333 code=$GITHUB_CODE --json
```

### references

1. https://github.com/wpcodevo/google-github-oauth2-nodejs/blob/master/src/controllers/auth.controller.ts
2. https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps
3. https://codevoweb.com/how-to-implement-github-oauth-in-reactjs/