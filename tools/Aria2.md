# Contents
* [windows](#windows)
* [CentOS6](#CentOS6)
## windows
1. [官网](https://github.com/aria2/aria2/releases)下载本体
* 新建三个文件
aria2.conf, Aria2.log, aria2.session
* aria2.conf配置如下
```
dir=D:\Download\

log=D:\aria2\Aria2.log

input-file=D:\aria2\aria2.session

save-session=D:\aria2\aria2.session

save-session-interval=60

force-save=true

log-level=error

# see --split option

max-concurrent-downloads=5

continue=true

max-overall-download-limit=0

max-overall-upload-limit=50K

max-upload-limit=20

# Http/FTP options

connect-timeout=120

lowest-speed-limit=10K

max-connection-per-server=10

max-file-not-found=2

min-split-size=1M

split=5

check-certificate=false

http-no-cache=true

# FTP Specific Options

# BT/PT Setting

bt-enable-lpd=true

#bt-max-peers=55

follow-torrent=true

enable-dht6=false

bt-seed-unverified

rpc-save-upload-metadata=true

bt-hash-check-seed

bt-remove-unselected-file

bt-request-peer-speed-limit=100K

seed-ratio=0.0

# Metalink Specific Options

# RPC Options

enable-rpc=true

pause=false

rpc-allow-origin-all=true

rpc-listen-all=true

rpc-save-upload-metadata=true

rpc-secure=false

# Advanced Options

daemon=true

disable-ipv6=true

enable-mmap=true

file-allocation=falloc 

max-download-result=120

#no-file-allocation-limit=32M

force-sequential=true

parameterized-uri=true

```
* 启动
进入Aria2.exe所在的文件夹，敲入命令
```
aria2c --conf-path=aria2.conf
```
2. 下载可视化网页[webui-aria2](https://github.com/ziahamza/webui-aria2)，减少敲命令的操作
* 启动
```
node node-server.js
```
* 访问http://localhost:8888/
## CentOS6
* 安装
```
yum install aria2
```
* 命令行下载
```aria2c xxx```