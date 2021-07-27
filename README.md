# FC Fastify Template

**如果出现以下错误，undefined, 请不要使用temp文件夹或在.funignore中出现的文件夹名称**
```bash
build function using image: fun-cache-af0ac9c8-2cf0-48e3-8c63-bdd9ca06ee28
running task: flow NpmTaskFlow
running task: CopySource
undefined
```

**如果出现以下错误，"Cannot read property 'stop' of null"，先删除.fun文件夹再重新执行fun install**
```bash
skip pulling image aliyunfc/runtime-custom:1.9.17...
reloading success, stop old container background...
Cannot read property 'stop' of null
stopping old container successfully
```
