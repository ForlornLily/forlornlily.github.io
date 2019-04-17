# contents
* [软件官网](#软件官网)
* 配置
  * [PotPlayer](#PotPlayer)
  * [LAV](#LAV)
  * [madVR](#madVR)
# 软件官网
* [potplayer](http://potplayer.daum.net)  
* [LAVFilters](https://github.com/Nevcairiel/LAVFilters/releases)
* [madVR](http://madvr.com/)
* [XySubFilter](https://github.com/Cyberbeing/xy-VSFilter/releases)
# 配置
[参考文章](https://vcb-s.com/archives/7228)  
* 均以管理员身份运行  
* 均安装64位
## PotPlayer
打开任意视频，右键-选项
### 基本页（个人喜好）
* 相似文件策略
* 多重处理方式
* 自动更新
### 播放页（个人喜好）
* 取消多线程打开文件
* 取消鼠标显示缩略图。
* 取消鼠标在进度条上显示时间
### 关联（个人喜好）
* 图标：PotIconsNew
### 滤镜页（必须）
* 激活条件：不使用
* 取消内置视频编码器
* 内置声音处理滤镜全部都取消
#### 源滤镜/分离器
1. 点击滤镜/解码器管理→搜索后添加→确定
2. 回到源滤镜/分离器管理，全部选*LAV，下拉面板无就用默认
#### 视频解码器
同源滤镜/分离器
#### 音频解码器
同源滤镜/分离器
#### 个人滤镜优先权
1. 添加系统滤镜
2. 选XySubFilter，XySubFilterAutoLoader并确定
3. 选中XySubFilter，切换优先顺序为“按优先级使用”
4. 选中XySubFilterAutoLoader，切换优先顺序为“强制使用”
5. 关闭内置字幕插件：右键-字幕-隐藏字幕
### 视频页
* （必须）视频渲染器改为Mashi（即madVR: madshi Video Renderer）
#### 色彩空间/属性
*  YCbCr<->RGB改为自动选择
### 声音页
* 默认输出设备改为WASAPI
#### 规格化/混响
* 取消“播放时开启规格化”
## LAV
PotPlayer设置完毕后关闭，
打开任意视频，右键-属性
### LAV Video
* Output Format 勾选除了 AYUV 以外的所有选项
* RGB Output Levels选 PC
* Dithering Mode 选 Random
### LAV Audio
1. 切换到Mixing
2. 勾选 Enable Mixing
3. Output Speaker Configuration改为Stereo
## madVR
[参考文章](https://vcb-s.com/archives/5610)  
[不明觉厉包](https://pan.baidu.com/s/1nvtoQMX)





