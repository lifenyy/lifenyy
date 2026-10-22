// ==UserScript==
// @name         标签页标题自定义-1
// @namespace    http://tampermonkey.net/
// @version      3.1
// @description  加速标签标题伪装，防止页面闪原标题
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==


(function () {
    'use strict';

    const exactUrlMap = {
        'https://www.bilibili.com/video/av98526993/?p=32': 'nick 大爷',
        'https://www.bilibili.com/video/av604566039/?p=22': 'Linux零基础快速入门到精通'
    };

    const domainTitleMap = {
        'weibo.com': '互联网垃圾站',
        'bilibili.com': '小破站',
        'zhihu.com': '小知',
        'douban.com': '阿豆',
        'chatgpt.com': 'GPT',
    };

    for (const url in exactUrlMap) {
        if (location.href.startsWith(url)) {
            applyTitle(exactUrlMap[url]);
            return;
        }
    }

    for (const domain in domainTitleMap) {
        if (location.hostname.includes(domain)) {
            applyTitle(domainTitleMap[domain]);
            break;
        }
    }

    function applyTitle(customTitle) {
        document.title = customTitle;

        const titleElement = document.querySelector('title');
        if (!titleElement) return;

        const observer = new MutationObserver(() => {
            if (document.title !== customTitle) {
                document.title = customTitle;
            }
        });

        observer.observe(titleElement, { childList: true });
    }
})();
