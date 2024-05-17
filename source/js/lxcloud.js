/**
 * 解决IOS设备表单input聚焦时页面放大问题
 */
// 获取视口对象
const viewport = document.querySelector('meta[name="viewport"]');

// 设置视口属性
viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no');

function LxDOMReady() {
  // 如果当前页有评论就执行函数
  if (document.getElementById('post-comment')) owoBig();
  // 表情放大
  function owoBig() {
    let flag = 1, // 设置节流阀
      owo_time = '', // 设置计时器
      m = 3; // 设置放大倍数
    // 创建盒子
    let div = document.createElement('div'),
      body = document.querySelector('body');
    // 设置ID
    div.id = 'owo-big';
    // 插入盒子
    body.appendChild(div)

    // 构造observer
    let observer = new MutationObserver(mutations => {

      for (let i = 0; i < mutations.length; i++) {
        let dom = mutations[i].addedNodes,
          owo_body = '';
        if (dom.length == 2 && dom[1].className == 'OwO-body') owo_body = dom[1];
        // 如果需要在评论内容中启用此功能请解除下面的注释
        else if (dom.length == 1 && dom[0].className == 'tk-comment') owo_body = dom[0];
        else continue;

        // 禁用右键（手机端长按会出现右键菜单，为了体验给禁用掉）
        if (document.body.clientWidth <= 768) owo_body.addEventListener('contextmenu', e => e.preventDefault());
        // 鼠标移入
        owo_body.onmouseover = (e) => {
          if (flag && e.target.tagName == 'IMG') {
            flag = 0;
            // 移入300毫秒后显示盒子
            owo_time = setTimeout(() => {
              let height = e.target.clientHeight * m, // 盒子高 2023-02-16更新
                width = e.target.clientWidth * m, // 盒子宽 2023-02-16更新
                left = (e.x - e.offsetX) - (width - e.target.clientWidth) / 2, // 盒子与屏幕左边距离 2023-02-16更新
                top = e.y - e.offsetY; // 盒子与屏幕顶部距离

              if ((left + width) > body.clientWidth) left -= ((left + width) - body.clientWidth + 10); // 右边缘检测，防止超出屏幕
              if (left < 0) left = 10; // 左边缘检测，防止超出屏幕
              // 设置盒子样式
              div.style.cssText = `display:flex; height:${height}px; width:${width}px; left:${left}px; top:${top}px;`;
              // 在盒子中插入图片
              div.innerHTML = `<img src="${e.target.src}">`
            }, 300);
          }
        };
        // 鼠标移出隐藏盒子
        owo_body.onmouseout = () => { div.style.display = 'none', flag = 1, clearTimeout(owo_time); }
      }

    })
    observer.observe(document.getElementById('post-comment'), { subtree: true, childList: true }) // 监听的 元素 和 配置项
  }
}

LxDOMReady() //打开网站之后先执行一次函数
document.addEventListener("pjax:complete", LxDOMReady) //pjax加载完成之后执行上面函数

// 消除控制台打印
var HoldLog = console.log;
console.log = function () { }
  ;
let now1 = new Date();
queueMicrotask(() => {
  const Log = function () {
    HoldLog.apply(console, arguments);
  };
  //在恢复前输出日志
  const grt = new Date("06/18/2017 00:00:00");
  //此处修改你的建站时间或者网站上线时间
  now1.setTime(now1.getTime() + 250);
  const days = (now1 - grt) / 1000 / 60 / 60 / 24;
  const dnum = Math.floor(days);
  const ascll = [`欢迎光临凉心's Blog`, `我的故事只讲给你听.`, `
        
██╗     ██╗  ██╗ ██████╗██╗      ██████╗ ██╗   ██╗██████╗ 
██║     ╚██╗██╔╝██╔════╝██║     ██╔═══██╗██║   ██║██╔══██╗
██║      ╚███╔╝ ██║     ██║     ██║   ██║██║   ██║██║  ██║
██║      ██╔██╗ ██║     ██║     ██║   ██║██║   ██║██║  ██║
███████╗██╔╝ ██╗╚██████╗███████╗╚██████╔╝╚██████╔╝██████╔╝
╚══════╝╚═╝  ╚═╝ ╚═════╝╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝                                                                           
        
        `, "已上线", dnum, "天", "©2024 By 凉心 V4.13.0",];
  const ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为【小笨蛋】.`, `Photo captured: `, `🤪`];

  setTimeout(Log.bind(console, `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`, "color:#425AEF", "", "color:#425AEF", "color:#425AEF", "", "color:#425AEF", ""));
  setTimeout(Log.bind(console, `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}\n`, "color:white; background-color:#4fd953", "", "", 'background:url("https://npm.elemecdn.com/sticker-heo@2022.7.5/Sticker-100/%E5%93%88%E5%A3%AB%E5%A5%87.png") no-repeat;font-size:450%'));

  setTimeout(Log.bind(console, "%c WELCOME %c 你好，小笨蛋.", "color:white; background-color:#4f90d9", ""));

  setTimeout(console.warn.bind(console, "%c ⚡ Powered by 凉心 %c 你正在访问 凉心's Blog.", "color:white; background-color:#f0ad4e", ""));

  setTimeout(Log.bind(console, "%c W23-12 %c 你已打开控制台.", "color:white; background-color:#4f90d9", ""));

  setTimeout(console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中.", "color:white; background-color:#d9534f", ""));
}
);
