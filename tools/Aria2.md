# Contents
* [windows](#windows)
* [CentOS6](#CentOS6)
* [百度网盘](#百度网盘)
## windows
1. [官网](https://github.com/aria2/aria2/releases)下载本体
* 新建三个文件
aria2.conf, Aria2.log, aria2.session
* aria2.conf基本配置如下（参考acgotaku的[博客](https://blog.icehoney.me/posts/2015-01-31-Aria2-download)），更多配置关aria2官网
```
    dir=D:\project\download
    log=D:\project\download\aria2\aria2.log
    input-file=D:\project\download\aria2\aria2.session
    save-session=D:\project\download\aria2\aria2.session
    save-session-interval=60
    #用户名
    #rpc-user=user
    #密码
    #rpc-passwd=passwd
    #上面的认证方式不建议使用,建议使用下面的token方式
    #设置加密的密钥
    #rpc-secret=token
    #允许rpc
    enable-rpc=true
    #允许所有来源, web界面跨域权限需要
    rpc-allow-origin-all=true
    #允许外部访问，false的话只监听本地端口
    rpc-listen-all=true
    #RPC端口, 仅当默认端口被占用时修改
    #rpc-listen-port=6800
    #最大同时下载数(任务数), 路由建议值: 3
    max-concurrent-downloads=1
    #断点续传
    continue=true
    #同服务器连接数
    max-connection-per-server=5
    #最小文件分片大小, 下载线程数上限取决于能分出多少片, 对于小文件重要
    min-split-size=10M
    #单文件最大线程数, 路由建议值: 5
    split=10
    #下载速度限制
    max-overall-download-limit=0
    #单文件速度限制
    max-download-limit=0
    #上传速度限制
    max-overall-upload-limit=0
    #单文件速度限制
    max-upload-limit=0
    #断开速度过慢的连接
    #lowest-speed-limit=0
    #验证用，需要1.16.1之后的release版本
    #referer=*
    #文件缓存, 使用内置的文件缓存, 如果你不相信Linux内核文件缓存和磁盘内置缓存时使用, 需要1.16及以上版本
    #disk-cache=0
    #另一种Linux文件缓存方式, 使用前确保您使用的内核支持此选项, 需要1.15及以上版本(?)
    #enable-mmap=true
    #文件预分配, 能有效降低文件碎片, 提高磁盘性能. 缺点是预分配时间较长
    #所需时间 none < falloc ? trunc << prealloc, falloc和trunc需要文件系统和内核支持
    file-allocation=prealloc

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
## 百度网盘
[参考文章](https://github.com/hokein/Wiki/wiki/%E4%BD%BF%E7%94%A8aria2%E7%AA%81%E7%A0%B4%E7%99%BE%E5%BA%A6%E4%BA%91%E7%9B%98%E9%99%90%E9%80%9F)
1. 安装Chrome的扩展[百度网盘助手](https://github.com/acgotaku/BaiduExporter)  
crx无法导入则以"加载已解压的扩展程序"导入release文件夹
2. 在百度云盘上选中文件，会多出一个导出下载的选项。选项里面有Aria2 RPC和导出下载两种方式：
* ARIA RPC方式  
执行aria2c --conf-path=aria2.conf --rpc-secret=百度盘的cookie  
cookie查看见[issue](https://github.com/acgotaku/BaiduExporter/issues/547)  
