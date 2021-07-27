## Fastify {{ typeof lang !== 'undefined' && (lang === 'ts' || lang === 'typescript') ? "Typescript " : "" }}Template for Custom Runtime

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```
<% if (typeof lang !== 'undefined' && (lang === 'ts' || lang === 'typescript')) { %>
### Build

```bash
$ npm run build
```
<% } %>
### Deploy

```bash
$ fun install
# Preview apis with same environment as serverless
$ fun local start Domain
$ fun build
$ fun deploy
```
