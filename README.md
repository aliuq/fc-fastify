# FC Fastify Template

[Fastify](https://github.com/fastify/fastify) 是一个高度专注于以最少的开销和强大的插件架构为开发人员提供最佳开发体验的 Web 框架，借助 Fastify 及其生态，我们可以更加专注于产品业务逻辑的开发，[快速使用](https://www.fastify.cn/docs/latest/Getting-Started/)

[Fun](https://github.com/alibaba/funcraft) 是一个用于支持 Serverless 应用部署的工具，能帮助您便捷地管理函数计算、API 网关、日志服务等资源。它通过一个资源配置文件（template.yml），协助您进行开发、构建、部署操作，[相关配置](https://help.aliyun.com/document_detail/146702.html)

[函数计算](https://help.aliyun.com/document_detail/52895.html) 是事件驱动的全托管计算服务。使用函数计算，您无需采购与管理服务器等基础设施，只需编写并上传代码。函数计算为您准备好计算资源，弹性地、可靠地运行任务，并提供日志查询、性能监控和报警等功能

## 功能

+ 交互式命令使用
+ 自定义node环境 
+ typescript 支持
+ http trigger 触发器默认配置
+ custom domain 自定义域名默认配置

## 使用

```shell
fun init https://github.com/liuqian1996/fc-fastify
# Or
fun init gh:liuqian1996/fc-fastify
# 指定项目名称
fun init gh:liuqian1996/fc-fastify -n <Project Name>
```

更多方式

```shell
fun init gh:liuqian1996/fc-fastify --var <option1>=<value1> --var <option2>=<value2>
```

相关示例

1. 指定项目名称为 custom-fastify
    ```shell
    fun init gh:liuqian1996/fc-fastify -n custom-fastify
    ```
3. 使用 Typescript 模板
    ```shell
    fun init gh:liuqian1996/fc-fastify --var lang=ts
    ```
4. 指定 node 环境为 LTS 版本
    ```shell
    fun init gh:liuqian1996/fc-fastify --var runtime=14.17.4
    ```

## 可选项

1. `runtime`：`{string}`，自定义node环境，默认为函数计算容器内自带的环境，可通过命令自定义一个版本。运行成功后，通过`/hello`路由查看node版本信息
2. `registry`：`{string}`，`runtime`不为空时有效，通过选择`Taobao`（npm.taobao.org）或`official`（nodejs.org）来下载node安装包
3. `httpTrigger`：`{boolean}`，是否添加默认 http trigger 触发器
4. `customDomain`：`{boolean}`，是否添加默认 custom domain 自定义域名

## 开发

**本地**

```shell
# 安装依赖
npm install
# 开发环境
npm run dev
# 编译 (仅支持Typescript)
npm run build
# 测试
npm run test
```

**Fun**

```shell
# FC 安装依赖
fun install
# FC 开发环境
fun local start Domain
# FC 编译
fun build
# FC 部署
fun deploy
```

## 注意事项

1. 在使用过程中，如果经常出现一些看不出问题所在的报错信息，而在使用`npm run dev`等本地开发命令却正常的情况下，可以尝试删除`.fun`文件夹、停止正在运行的容器、清掉冗余的`fun-cache-<UUID>`镜像，通常情况下，可以解决掉问题，接下来，提供在Windows上快速清空冗余镜像的命令
    ```powershell
   # 停止正在运行的容器
   docker stop $(docker ps -q)
   # 删除所有fun-cache-<UUID>镜像
   docker rmi $(docker images -af reference="fun-cache-*" -q) -f
   # 删除所有空状态的镜像
   docker image prune
   # 彻底删除所有<none>的镜像，依赖grep
   docker rmi $(docker image ls -a | grep "<none>" | where {($_ -match " \w{12} ")} | select {$matches[0].trim()} | select -ExpandProperty *) -f
    ```
2. 如果Funfile文件中使用了`fun-install`命令，在funcraft内部执行的语句是`npm install -q --no-audit --production`，这意味着，`devDependencies`中的包将不会被安装，所以，如果需要在Funfile中执行编译构建等行为的话，就不能使用`fun-install`命令来安装依赖，推荐使用`npm install -qs --no-audit --loglevel error`来安装依赖
3. 函数计算容量以压缩包大小为限制，默认在50M以内，超过限制就只能存放在oss和nas上，50~100M放在oss上，100M以上放在nas上。通常来说，如果需要添加自定义环境或者语言模型等，极容易超过限制，这里推荐使用nas，funcraft也提供了一个极简的[配置](https://developer.aliyun.com/article/712693) ,在template.yml文件中的`<ServiceName>/<Properties>`中增加一行`NasConfig: Auto`，这里需要注意的是，根据fun命令行提示，也有可能配置不成功，前提是需要给全足够的权限

## 常见问题

**1. 如果出现以下错误，undefined, 请不要使用temp文件夹或在.funignore中出现的文件夹名称，或确保Funfile文件中有复制`package.json`文件**

```bash
build function using image: fun-cache-af0ac9c8-2cf0-48e3-8c63-bdd9ca06ee28
running task: flow NpmTaskFlow
running task: CopySource
undefined
```

**2. 如果出现以下错误，"Cannot read property 'stop' of null"，先删除.fun文件夹再重新执行fun install**

```bash
skip pulling image aliyunfc/runtime-custom:1.9.17...
reloading success, stop old container background...
Cannot read property 'stop' of null
stopping old container successfully
```

**3. 如果出现“/usr/bin/env: ‘bash\r’: No such file or directory”错误**

以bootstrap文件为例
+ Windows上解决
  1. 使用git bash打开目标脚本，执行vim bootstrap，Shift + : 呼出输入框
  2. :set ff 然后回车，重新设置文件格式
  3. :set ff=unix 设置文件格式为unix
  4. :wq! 保存退出

+ Linux上解决
  1. 用vim打开bootstrap脚本
  2. :set ff 然后回车，重新设置文件格式
  3. :set ff=unix 设置文件格式为unix
  4. :wq! 保存退出

**4. 如果部署后出现以下错误，先查看项目根目录下的`node_modules/.bin`文件夹下是否有文件，如果没有，先删除`package-lock.json`文件，再重新安装依赖`npm install`，`fun install`，`fun build`。多尝试几次**

```json
{
   "ErrorCode": "CAFileNotFound",
   "ErrorMessage": "The CA process cannot be started due to missing files:ContainerStartDuration:100000000. CA process cannot be started due to missing file: invalid header field value \"oci runtime error: container_linux.go:247: starting container process caused \\\"exec: \\\\\\\"/code/bootstrap\\\\\\\": stat /code/bootstrap: no such file or directory\\\"\\n\"Error response from daemon: invalid header field value \"oci runtime error: container_linux.go:247: starting container process caused \\\"exec: \\\\\\\"/code/bootstrap\\\\\\\": stat /code/bootstrap: no such file or directory\\\"\\n\""
}
```

**5. 执行`fun build`出现以下错误，先关闭正在运行的容器，再重试build**

```bash
EPERM: operation not permitted, lstat 'D:\XXX\XXX\XXX\.fun\build\artifacts\XXX\XXX\bootstrap'
```

**6. 执行`fun local start`出现以下问题，先删除容器，再重新执行**

```bash
Fun Error:  
Error: (HTTP code 409) container stopped/paused - Container 54073aa5b605de11856af856b6af127c30cbdcd1006a0cc22d96ccb315a1cde7 is not running
    at C:\scoop_soft\persist\nodejs-lts\bin\node_modules\@alicloud\fun\node_modules\docker-modem\lib\modem.js:315:17
    at getCause (C:\scoop_soft\persist\nodejs-lts\bin\node_modules\@alicloud\fun\node_modules\docker-modem\lib\modem.js:345:7)
    at Modem.buildPayload (C:\scoop_soft\persist\nodejs-lts\bin\node_modules\@alicloud\fun\node_modules\docker-modem\lib\modem.js:314:5)
    at IncomingMessage.<anonymous> (C:\scoop_soft\persist\nodejs-lts\bin\node_modules\@alicloud\fun\node_modules\docker-modem\lib\modem.js:286:14)
    at IncomingMessage.emit (events.js:412:35)
    at IncomingMessage.emit (domain.js:470:12)
    at endReadableNT (internal/streams/readable.js:1317:12)
    at processTicksAndRejections (internal/process/task_queues.js:82:21) {
  reason: 'container stopped/paused',
  statusCode: 409,
  json: {
    message: 'Container 54073aa5b605de11856af856b6af127c30cbdcd1006a0cc22d96ccb315a1cde7 is not running'
  }
}

```

**7. 如果出现`permission denied, mkdir XXX`等权限问题，使用`sudo`权限安装依赖**

```shell
sudo npm install
```
