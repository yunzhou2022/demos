# 演示前端 cache


## 浏览器缓存状态识别指南

### 强缓存特征
- 状态码：200 (from memory cache) 或 200 (from disk cache)
- 响应头包含：Cache-Control/max-age
- 网络请求显示浅蓝色背景

### 协商缓存特征
- 状态码：304 Not Modified
- 请求头包含：If-None-Match/If-Modified-Since
- 响应头包含：ETag/Last-Modified

### Service Worker缓存特征
- 状态码：200 (from ServiceWorker)
- 开发者工具 → Application → Cache Storage 查看
- Network标签显示"ServiceWorker"来源标识