# Contents
* [村网通](#村网通)
  * [Google Cloud](#GC)
* [putty](#putty)
* [待折腾](#待折腾)
## 村网通
```
wget --no-check-certificate -O shadowsocks.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks.sh
chmod +x shadowsocks.sh
./shadowsocks.sh 2>&1 | tee shadowsocks.log
```
* 启动：```/etc/init.d/shadowsocks start```
* 停止：```/etc/init.d/shadowsocks stop```
* 重启：```/etc/init.d/shadowsocks restart```
* 状态：```/etc/init.d/shadowsocks status```
* 编辑（编辑后需重启）: ```nano /etc/shadowsocks-libev/config.json```
### BBR
```
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
```
[参考文章](https://zoomyale.com/2016/vultr_and_ss/)
### GC
#### 修改防火墙
【网络】 –> 【防火墙规则】 –> 【创建防火墙规则】  
IP 地址范围：0.0.0.0/0
#### 获取静态IP
【网络】–> 【外部 IP 地址】 –> 【保留静态 IP】  
[参考文章](http://godjose.com/2017/06/14/new-article/)
## putty
### 生成秘钥
用PuTTYgen
### 添加公钥到服务器
以Google Cloud Platform为例  
* 复制PuTTYgen Generate生成后的公钥，取名foo
* 进入 控制台 - Compute Engine - 元数据 - SSH密钥 - 修改 - 添加一项 ，粘贴保存
### 私钥连接
打开 putty.exe  
* 从左侧进入 Connection - SSH - Auth, 选择保存的私钥
* Host Name填写foo@ip
### 保存设置
Saved Sessions处给此配置起名，然后点Save
[参考文章](https://www.vdazhang.com/wenzhang-2025.html)
## 待折腾
[搭建ipv6](https://www.polarxiong.com/archives/%E6%90%AD%E5%BB%BAipv6-VPN-%E8%AE%A9ipv4%E4%B8%8Aipv6-%E4%B8%8B%E8%BD%BD%E9%80%9F%E5%BA%A6%E6%8F%90%E5%8D%87%E5%88%B0100M.html)

