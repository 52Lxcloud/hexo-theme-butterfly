//评论区表情包放大
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

//控制台输出网站信息
console.log(`Welcome to:\n%c凉心's Blog:%c https://www.lxink.cn%c\n我的故事只讲给你听·%c晚点晚安%c\n该网站已稳定运行 %c${Math.round((new Date().getTime() - new Date('2017/06/18 00:00:00').getTime()) / 86400000)} %c天`,
  'border:1px #888 solid;border-right:0;border-radius:5px 0 0 5px;padding: 5px 10px;color:white;background:#99CC99;margin:10px 0',
  'border:1px #888 solid;border-left:0;border-radius:0 5px 5px 0;padding: 5px 10px;', '', 'color:#49b1f5', '', 'color:#49b1f5', '');
