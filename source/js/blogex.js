// var full_page = document.getElementsByClassName("full_page");
// if (full_page.length != 0) {
//   full_page[0].style.background = "transparent";
// }


function checkOpen() {}
checkOpen.toString = function () {
  this.opened = true;
};

// //封面纯色
// function coverColor() {
//   var path = document.getElementById("post-cover")?.src;
//   // console.log(path);
//   if (path !== undefined) {
//     var httpRequest = new XMLHttpRequest(); //第一步：建立所需的对象
//     httpRequest.open('GET', path + '?imageAve', true); //第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
//     httpRequest.send(); //第三步：发送请求  将请求参数写在URL中
//     /**
//      * 获取数据后的处理程序
//      */
//     httpRequest.onreadystatechange = function () {
//       if (httpRequest.readyState == 4 && httpRequest.status == 200) {
//         var json = httpRequest.responseText; //获取到json字符串，还需解析
//         var obj = eval('(' + json + ')');
//         var value = obj.RGB;
//         value = "#" + value.slice(2)
//         // console.log(value);
//         //   document.getElementById('page-header').style.backgroundColor=value;
//         // document.styleSheets[0].addRule('#page-header:before','background: '+ value +'!important');

//         if (getContrastYIQ(value) == "light") {
//           value = LightenDarkenColor(colorHex(value), -40)
//         }

//         document.styleSheets[0].addRule(':root', '--heo-main:' + value + '!important');
//         document.styleSheets[0].addRule(':root', '--heo-main-op:' + value + '23!important');
//         document.styleSheets[0].addRule(':root', '--heo-main-op-deep:' + value + 'dd!important');
//         document.styleSheets[0].addRule(':root', '--heo-main-none:' + value + '00!important');
//         heo.initThemeColor()
//         document.getElementById("coverdiv").classList.add("loaded");
//       }
//     };
//   } else {
//     // document.styleSheets[0].addRule('#page-header:before','background: none!important');
//     document.styleSheets[0].addRule(':root', '--heo-main: var(--heo-theme)!important');
//     document.styleSheets[0].addRule(':root', '--heo-main-op: var(--heo-theme-op)!important');
//     document.styleSheets[0].addRule(':root', '--heo-main-op-deep:var(--heo-theme-op-deep)!important');
//     document.styleSheets[0].addRule(':root', '--heo-main-none: var(--heo-theme-none)!important');
//     heo.initThemeColor()
//   }
// }

// //RGB颜色转化为16进制颜色
// function colorHex(str) {
//   var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
//   var that = str;
//   if (/^(rgb|RGB)/.test(that)) {
//     var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
//     var strHex = "#";
//     for (var i = 0; i < aColor.length; i++) {
//       var hex = Number(aColor[i]).toString(16);
//       if (hex === "0") {
//         hex += hex;
//       }
//       strHex += hex;
//     }
//     if (strHex.length !== 7) {
//       strHex = that;
//     }
//     return strHex;
//   } else if (reg.test(that)) {
//     var aNum = that.replace(/#/, "").split("");
//     if (aNum.length === 6) {
//       return that;
//     } else if (aNum.length === 3) {
//       var numHex = "#";
//       for (var i = 0; i < aNum.length; i += 1) {
//         numHex += (aNum[i] + aNum[i]);
//       }
//       return numHex;
//     }
//   } else {
//     return that;
//   }
// }

// //16进制颜色转化为RGB颜色
// function colorRgb(str) {
//   var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
//   var sColor = str.toLowerCase();
//   if (sColor && reg.test(sColor)) {
//     if (sColor.length === 4) {
//       var sColorNew = "#";
//       for (var i = 1; i < 4; i += 1) {
//         sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
//       }
//       sColor = sColorNew;
//     }
//     //处理六位的颜色值
//     var sColorChange = [];
//     for (var i = 1; i < 7; i += 2) {
//       sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
//     }
//     return "rgb(" + sColorChange.join(",") + ")";
//   } else {
//     return sColor;
//   }
// }

// //变暗变亮主方法
// function LightenDarkenColor(col, amt) {
//   var usePound = false;

//   if (col[0] == "#") {
//     col = col.slice(1);
//     usePound = true;
//   }

//   var num = parseInt(col, 16);

//   var r = (num >> 16) + amt;

//   if (r > 255) r = 255;
//   else if (r < 0) r = 0;

//   var b = ((num >> 8) & 0x00FF) + amt;

//   if (b > 255) b = 255;
//   else if (b < 0) b = 0;

//   var g = (num & 0x0000FF) + amt;

//   if (g > 255) g = 255;
//   else if (g < 0) g = 0;


//   return (usePound ? "#" : "") + String("000000" + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
// }
// //判断是否为亮色
// function getContrastYIQ(hexcolor) {
//   var colorrgb = colorRgb(hexcolor);
//   var colors = colorrgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
//   var red = colors[1];
//   var green = colors[2];
//   var blue = colors[3];
//   var brightness;
//   brightness = (red * 299) + (green * 587) + (blue * 114);
//   brightness = brightness / 255000;
//   if (brightness >= 0.5) {
//     return "light";
//   } else {
//     return "dark";
//   }
// }

//导航栏文章
function navTitle() {
  var titlevalue = document.title;
  var simptitle = titlevalue.replace(' | 张洪Heo', '')
  document.getElementById("page-name-text").innerHTML = simptitle;
}

window.onload = function () {
  var copybtnlist = document.getElementsByClassName("copybtn")
  for (var i = 0; i < copybtnlist.length; i++) {
    document.getElementsByClassName("copybtn")[i].addEventListener("click", function () {
      showcopy();
    });
  }
  heo.initThemeColor();
}

function showcopy() {
  if (GLOBAL_CONFIG.Snackbar !== undefined) {
    btf.snackbarShow(GLOBAL_CONFIG.copy.success)
  } else {
    const prevEle = ctx.previousElementSibling
    prevEle.innerText = GLOBAL_CONFIG.copy.success
    prevEle.style.opacity = 1
    setTimeout(() => {
      prevEle.style.opacity = 0
    }, 700)
  }
}

//导航栏上显示标题
// var OriginTitile = document.title;
// var titleTime;
// document.addEventListener('visibilitychange', function () {
//     if (document.hidden) {
//         // $('[rel="shortcut icon"]').attr('href', "https://cdn.jsdelivr.net/gh/Akilarlxh/Akilarlxh.github.io@v3.3.3_3/img/siteicon/favicon.png");
//         document.title = '张洪Heo';
//         clearTimeout(titleTime);
//     }
//     else {
//         // $('[rel="shortcut icon"]').attr('href', "https://cdn.jsdelivr.net/gh/Akilarlxh/Akilarlxh.github.io@v3.3.3_3/img/siteicon/favicon.png");
//         document.title = OriginTitile;
//         // titleTime = setTimeout(function () {
//         //     document.title = OriginTitile;
//         // }, 2000);
//     }
// });

// 早上好问好
// 获取时间
var getTimeState = () => {
  // 获取当前时间
  var timeNow = new Date();
  // 获取当前小时
  var hours = timeNow.getHours();
  // 设置默认文字
  var text = ``;
  // 判断当前时间段
  if (hours >= 0 && hours <= 5) {
    text = `晚安`;
  } else if (hours > 5 && hours <= 10) {
    text = `早上好`;
  } else if (hours > 10 && hours <= 14) {
    text = `中午好`;
  } else if (hours > 14 && hours <= 18) {
    text = `下午好`;
  } else if (hours > 18 && hours <= 24) {
    text = `晚上好`;
  }
  //    console.log(`hours >>>>>`, hours);
  //    console.log(`text >>>>`, text);
  // 返回当前时间段对应的状态
  return text;
};

function fly_to_top() {
  document.getElementById("guli_top").classList.add("open_wing");
  setTimeout(function () {
    document.getElementById("guli_top").classList.add("flying");
    btf.scrollToDest(0, 300);
  }, 300);
  setTimeout(function () {
    // 这里就是处理的事件
    document.getElementById("guli_top").classList.remove("flying");
    document.getElementById("guli_top").classList.remove("open_wing");
    document.getElementById("guli_top").style.cssText = "opacity: ''; transform: ''";
  }, 600)
}

//深色模式切换
var navFn = {
  switchDarkMode: () => { // Switch Between Light And Dark Mode
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
      activateDarkMode()
      saveToLocal.set('theme', 'dark', 2)
      GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night, false, 2000)
    } else {
      activateLightMode()
      saveToLocal.set('theme', 'light', 2)
      GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day, false, 2000)
    }
    // handle some cases
    typeof utterancesTheme === 'function' && utterancesTheme();
    typeof FB === 'object' && window.loadFBComment();
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)

    //统计图
    let color = document.documentElement.getAttribute('data-theme') === 'light' ? '#363636' : '#F7F7FA'
    if (document.getElementById('posts-chart')) {
      let postsOptionNew = postsOption
      postsOptionNew.textStyle.color = color
      postsOptionNew.title.textStyle.color = color
      postsOptionNew.xAxis.axisLine.lineStyle.color = color
      postsOptionNew.yAxis.axisLine.lineStyle.color = color
      postsChart.setOption(postsOptionNew)
    }
    if (document.getElementById('tags-chart')) {
      let tagsOptionNew = tagsOption
      tagsOptionNew.textStyle.color = color
      tagsOptionNew.title.textStyle.color = color
      tagsOptionNew.xAxis.axisLine.lineStyle.color = color
      tagsOptionNew.yAxis.axisLine.lineStyle.color = color
      tagsChart.setOption(tagsOptionNew)
    }
    if (document.getElementById('categories-chart')) {
      let categoriesOptionNew = categoriesOption
      categoriesOptionNew.textStyle.color = color
      categoriesOptionNew.title.textStyle.color = color
      categoriesOptionNew.legend.textStyle.color = color
      categoriesChart.setOption(categoriesOptionNew)
    }
  }
}

// 移除赞赏蒙版
function RemoveRewardMask() {
  $('.reward-main').attr('style', 'display: none');
  $('#quit-box').attr('style', 'display: none');
}

//添加赞赏蒙版
function AddRewardMask() {
  $('.reward-main').attr('style', 'display: flex');
}

//监听蒙版关闭
document.addEventListener('touchstart', e => {
  RemoveRewardMask()
}, false)

//监听ctrl+C
$(document).unbind('keydown').bind('keydown', function (e) {
  if ((e.ctrlKey || e.metaKey) && (e.keyCode == 67) && (selectTextNow != '')) {
    btf.snackbarShow('复制成功，复制和转载请标注本文地址');
    rm.rightmenuCopyText(selectTextNow);
    return false;
  }
})

//判断国内国外
// var foreignTips = (function () {
//   var fetchUrl = "https://api.ooomn.com/api/ip"
//   fetch(fetchUrl)
//     .then(res => res.json())
//     .then(json =>{
//       var country = json.country;
//       console.log(country);
//       if (country != '中国'){
//         btf.snackbarShow('使用国外网络访问可能无法访问文章图片，敬请谅解。Blog pictures only serve mainland China.')
//       }
//     })
// });

//颜色
document.addEventListener('scroll', btf.throttle(function () {
  heo.initThemeColor()
}, 200))

//友链随机传送
function travelling() {
  var fetchUrl = "https://moments.zhheo.com/randomfriend"
  fetch(fetchUrl)
    .then(res => res.json())
    .then(json => {
      var name = json.name;
      var link = json.link;
      var msg = "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」";
      document.styleSheets[0].addRule(':root', '--heo-snackbar-time:' + 8000 + 'ms!important');
      Snackbar.show({
        text: msg,
        duration: 8000,
        pos: 'top-center',
        actionText: '前往',
        onActionClick: function (element) {
          //Set opacity of element to 0 to close Snackbar
          $(element).css('opacity', 0);
          window.open(link, '_blank');
        }
      });
    })
}

//前往黑洞
function toforeverblog() {
  var msg = "点击前往按钮进入「十年之约」项目中的成员博客，不保证跳转网站的安全性和可用性";
  Snackbar.show({
    text: msg,
    duration: 8000,
    pos: 'top-center',
    actionText: '前往',
    onActionClick: function (element) {
      //Set opacity of element to 0 to close Snackbar
      $(element).css('opacity', 0);
      window.open(link, 'https://www.foreverblog.cn/go.html');
    }
  });
}

//前往开往项目
function totraveling() {
  btf.snackbarShow('即将跳转到「开往」项目的成员博客，不保证跳转网站的安全性和可用性', false, 5000);
  setTimeout(function () {
    window.open('https://www.travellings.cn/go.html');
  }, "5000");
}

// 移除加载动画
function removeLoading() {
  setTimeout(function () {
    preloader.endLoading();
  }, 3000)
}

//移除pwa
navigator.serviceWorker.getRegistrations().then(function (registrations) {
  for (let registration of registrations) {
    registration.unregister()
  }
})

function addFriendLink() {
  var input = document.getElementsByClassName('el-textarea__inner')[0];
  let evt = document.createEvent('HTMLEvents');
  evt.initEvent('input', true, true);
  input.value = '昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n';
  input.dispatchEvent(evt);
  heo.scrollTo("#post-comment");
  input.focus();
  input.setSelectionRange(-1, -1);
}

//从一个给定的数组arr中,随机返回num个不重复项
function getArrayItems(arr, num) {
  //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
  var temp_array = new Array();
  for (var index in arr) {
    temp_array.push(arr[index]);
  }
  //取出的数值项,保存在此数组
  var return_array = new Array();
  for (var i = 0; i < num; i++) {
    //判断如果数组还有可以取出的元素,以防下标越界
    if (temp_array.length > 0) {
      //在数组中产生一个随机索引
      var arrIndex = Math.floor(Math.random() * temp_array.length);
      //将此随机索引的对应的数组元素值复制出来
      return_array[i] = temp_array[arrIndex];
      //然后删掉此索引的数组元素,这时候temp_array变为新的数组
      temp_array.splice(arrIndex, 1);
    } else {
      //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
      break;
    }
  }
  return return_array;
}

// 检测按键
window.onkeydown = function (e) {
  if (e.keyCode === 123) {
    btf.snackbarShow('开发者模式已打开，请遵循GPL协议', false, 3000)
  }
}

// 阻止搜索滚动
// document.querySelector('#algolia-search').addEventListener('wheel', (e) => {
//   e.preventDefault()
// })
// document.querySelector('#console').addEventListener('wheel', (e) => {
//   e.preventDefault()
// })
// document.querySelector('#loading-box').addEventListener('wheel', (e) => {
//   e.preventDefault()
// })

//自动调整即刻短文尺寸
window.addEventListener('resize', function () {
  if (document.querySelector('#waterfall')) {
    heo.reflashEssayWaterFall();
  }
});

//首页大卡片恢复显示
$(".topGroup").hover(function () {
  // console.log("卡片悬浮");
}, function () {
  hoverOnCommentBarrage = false;
  document.getElementById("todayCard").classList.remove('hide');
  document.getElementById('todayCard').style.zIndex = 1;
  // console.log("卡片停止悬浮");
});

//评论增加放大功能
// 如果当前页有评论就执行函数
if (document.getElementById('post-comment')) owoBig();

function owoBig() {
  // 监听dom插入
  document.getElementById('post-comment').addEventListener('DOMNodeInserted', (dom) => {
    // 如果有class且值为OwO-body
    if (dom.target.classList && dom.target.classList.value == 'OwO-body') {
      let owo_body = dom.target
      if (owo_body) {
        let owo_time = ''
        let flag = true;
        // 创建盒子
        let div = document.createElement('div')
        div.id = 'owo-big'
        document.querySelector('body').appendChild(div)

        // 禁用右键（手机端长按会出现右键菜单，为了体验给禁用掉）
        owo_body.addEventListener('contextmenu', e => e.preventDefault())

        // 鼠标移入
        owo_body.addEventListener('mouseover', (e) => {
          if (e.target.tagName == 'LI' && flag) {
            flag = false;
            // 移入300毫秒后显示盒子
            owo_time = setTimeout(() => {
              let m = 3 // 设置倍数
              let height = e.path[0].clientHeight * m // 盒子高
              let width = e.path[0].clientWidth * m // 盒子宽
              let left = (e.x - e.offsetX) - (width - e.path[0].clientWidth) / 2 // 盒子与屏幕左边距离
              let top = e.y - e.offsetY // 盒子与屏幕顶部距离

              div.style.height = height + 'px'
              div.style.width = width + 'px'
              div.style.left = left + 'px'
              div.style.top = top + 'px'
              div.style.display = 'flex'
              div.innerHTML = `<img src="${e.target.querySelector('img').src}">`
            }, 300);
          }
        })

        // 鼠标移出
        owo_body.addEventListener('mouseout', (e) => {
          div.style.display = 'none';
          flag = true
          clearTimeout(owo_time)
        })
      }
    }
  });
}

//文章页面上一篇下一篇
document.addEventListener('scroll', btf.throttle(function () {
  //滚动条高度+视窗高度 = 可见区域底部高度
  var visibleBottom = window.scrollY + document.documentElement.clientHeight;
  //可见区域顶部高度
  var visibleTop = window.scrollY;
  // 获取翻页按钮容器
  var pagination = document.getElementById('pagination');
  // 获取位置监测容器，此处采用评论区
  var eventlistner = document.getElementById('post-tools');
  if (eventlistner && pagination) {
    var centerY = eventlistner.offsetTop + (eventlistner.offsetHeight / 2);
    if (document.body.clientWidth > 1300) {
      if (centerY < visibleBottom) {
        pagination.classList.add("show-window");
      } else {
        pagination.classList.remove("show-window");
      }
    }
  }
}, 200))

//注入函数
document.addEventListener('pjax:send', function () {
  console.clear();
  Pace.restart();
  heo.showLoading();
  $(window).prop("keydown",null).off("keydown");
})

document.addEventListener('pjax:complete', function () {
  coverColor()
  addRightMenuClickEvent()
  navTitle()
  percent()
  heo.topPostScroll()
  heo.topCategoriesBarScroll()
  heo.sayhi()
  heo.addTag()
  heo.stopImgRightDrag()
  heo.addFriendLinksInFooter()
  heo.qrcodeCreate()
  heo.hidecookie()
  heo.onlyHome()
  heo.addNavBackgroundInit()
  heo.initIndexEssay()
  heo.changeTimeInEssay()
  heo.reflashEssayWaterFall()
  heo.addMediumInEssay()
  heo.darkModeStatus()
  heo.categoriesBarActive()
  heo.initThemeColor()
  heo.hideLoading()
  heo.tagPageActive()
  heo.removeBodyPaceClass()
})