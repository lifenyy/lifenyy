# 标签页标题自定义 / Custom Browser Tab Title

一个轻量的 Tampermonkey / 油猴脚本，可快速修改浏览器标签页标题，防止网页闪现或恢复原标题。

A lightweight Tampermonkey userscript that customizes browser tab titles and keeps restoring the preferred title.

[安装脚本 / Install userscript](https://raw.githubusercontent.com/lifenyy/lifenyy/main/tab-title-customizer.user.js)

## 中文介绍

- 精确网址优先：可为指定页面设置独立标题。
- 域名通用规则：同一网站使用统一标题。
- 尽早运行：脚本在 document-start 阶段执行。
- 持续保护：网页修改标题后会自动恢复。
- 无需额外权限。

安装：

1. 安装 Tampermonkey。
2. 点击上方安装链接。
3. 在脚本中修改 exactUrlMap 和 domainTitleMap。

配置示例：

~~~js
const exactUrlMap = {
  'https://example.com/video/1': '我的视频'
};
const domainTitleMap = {
  'bilibili.com': '小破站',
  'chatgpt.com': 'GPT'
};
~~~

匹配规则：先按网址前缀匹配；没有匹配时，再按域名包含匹配。

## English Introduction

This Tampermonkey userscript customizes browser tab titles with two rule types:

- Exact URL rules are checked first.
- Domain rules are used as a fallback.
- It runs at document-start and restores the custom title if the website changes it.
- No special permissions are required.

Installation:

1. Install Tampermonkey.
2. Open the install link above.
3. Edit exactUrlMap and domainTitleMap in the script.

Matching: exact URLs use prefix matching; domain rules use hostname substring matching.

## Files

- tab-title-customizer.user.js: userscript source.
- README.md: Chinese and English documentation.
