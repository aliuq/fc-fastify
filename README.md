# FC Fastify Template

## 配置Funcraft

[配置](https://help.aliyun.com/document_detail/146702.html)

## 使用方式

```shell
fun init -n custom-fastify https://github.com/liuqian1996/fc-fastify
# Or
fun init -n custom-fastify gh:liuqian1996/fc-fastify
# Typescript
fun init -n custom-fastify-ts gh:liuqian1996/fc-fastify --var lang=ts
```

## 开发

**本地**

```shell
# 安装依赖
npm install
# Development
npm run dev
# Build (Only Typescript)
npm run build
# Test
npm run test
```

**FC**

```shell
# 安装依赖
fun install
# Development
fun local start Domain
# Build
fun build
# Deploy
fun deploy
```

## 注意事项

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
