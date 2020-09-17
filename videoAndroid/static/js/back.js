import { Toast } from 'vant';
      document.addEventListener('plusready', function () {
        var first = null;
        var webview = plus.webview.currentWebview();
        plus.key.addEventListener('backbutton', function () {
            webview.canBack(function (e) {
                if (e.canBack) {
                    webview.back(-1); //返回上一页  
                } else {                   
                    //首次按键，提示‘再按一次退出应用’  
                            if (!first) {
                                first = new Date().getTime(); //获取第一次点击的时间戳  
                                Toast('再次点击退出', 1000);
                                setTimeout(function () {
                                first = null;
                                }, 1000);
                            } else {
                                // 获取第二次点击的时间戳, 两次之差 小于 1000ms 说明1s点击了两次, 
                                if (new Date().getTime() - first < 1000) {  
                               // plus.runtime.quit(); //退出应用 
                                webview.close(); //关闭应用   
                        }
                    }
                }
            })
        });
    })