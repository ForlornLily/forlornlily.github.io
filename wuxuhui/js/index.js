(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
var eventUtil = {
    addHanlder: function(element, type, handler) {
        element.addEventListener(type, handler, false);
    },
    removeHander: function(element, type, handler) {
        element.removeEventListener(type, handler, false);
    }
}
var requestAjax = function(options, hanlder) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                hanlder(xhr.responseText);
                xhr = null;
            } else {
                alert("error: " + xhr.status);
            }
        }
    }
    xhr.open(options.type, options.url, false);
    xhr.send(options.data || null);
    return xhr;
}
var openDiscuss = {
    click: function(target) {
        var id = target.currentTarget.getAttribute("data-id"),
            url = openDiscuss.addUrlParam("discussion.html", "id", id);
        window.open("./"+url);
    },
    addUrlParam: function(url, name, value) {
        url += (url.indexOf("?") == -1)? "?": "&";
        url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
        return url;
    },
    bind: function() {
        var target = document.querySelectorAll(".user-info");
            length = target.length;
        for(var i=length-1;i--;) {
            var element = target[i];
            eventUtil.addHanlder(element, "click", openDiscuss.click);
        }
    }
}
openDiscuss.bind();