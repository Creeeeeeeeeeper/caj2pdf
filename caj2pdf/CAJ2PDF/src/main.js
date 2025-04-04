const { invoke } = window.__TAURI__.core;
const { resolve } = window.__TAURI__.path;

let Files = null;
let converting = false;
let converted = false;

async function greet() {
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

async function spaqn_exe(path) {
  let result = await invoke("spawn_exe", { name: path });
  console.log(result);
  if (result.includes("No such file or directory")) {
    return "找不到源文件";
  } else if (result.includes("operable program or batch file")) {
    return "找不到源文件";
  } else if (result.includes("Unknown file type.")) {
    return "请检查文件格式";
  } else if (result == '' || result == ' ') {
    return true;
  } else {
    return "发生未知错误"
  }
}

async function dd() {
  let result = await invoke("get_files");
  Files = convertMultilineTextToArray(result);
  for (let index = 0; index < Files.length; index++) {
    const element = Files[index];
    console.log(element);
    renderFileList(element);
  }
}

function convertMultilineTextToArray(text) {
  return text.split('\n');
}


window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('demo').addEventListener('click', async function () {
    if (converting) {
      invoke("converting")
      return;
    }
    document.getElementById('fileList').innerHTML = '';
    dd();
  });

  document.getElementById('convert').addEventListener('click', async function () {
    if (converting) {
      invoke("converting")
      return;
    }
    if (Files === null) {
      return;
    }
    convert();
  });

});

async function convert() {
  converting = true;
  for (let index = 0; index < Files.length; index++) {
    const element = Files[index];
    let res = await spaqn_exe(element);
    if (res === true) {
      console.log(element + " 转换成功");
      getNthElement("fileList", index).querySelector(".status").innerHTML = `<span style="color: green;">转换成功</span>`;
      getNthElement("fileList", index).querySelector(".svgg").innerHTML = `<svg t="1743751462206" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="67757" width="22" height="22"><path d="M666.272 472.288l-175.616 192a31.904 31.904 0 0 1-23.616 10.4h-0.192a32 32 0 0 1-23.68-10.688l-85.728-96a32 32 0 1 1 47.744-42.624l62.144 69.6 151.712-165.888a32 32 0 1 1 47.232 43.2m-154.24-344.32C300.224 128 128 300.32 128 512c0 211.776 172.224 384 384 384 211.68 0 384-172.224 384-384 0-211.68-172.32-384-384-384" fill="#35bc00" p-id="67758" data-spm-anchor-id="a313x.search_index.0.i11.9c5f3a81l3cfMV" class="selected"></path></svg>`
      getNthElement("fileList", index).querySelector(".svgg").title = "转换成功";
    } else {
      console.log(element + " 转换失败：" + res);
      getNthElement("fileList", index).querySelector(".status").innerHTML = `<span style="color: red;">${res}</span>`;
      getNthElement("fileList", index).querySelector(".svgg").innerHTML = `<svg t="1743751153370" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="66684" width="16" height="16"><path d="M512 0C229.248 0 0 229.1968 0 512c0 282.752 229.248 512 512 512 282.8032 0 512-229.248 512-512C1024 229.1968 794.8032 0 512 0z m32.7936 761.0624h-76.8v-76.8h76.8v76.8z m0-135.7568h-76.8l-10.24-358.4h97.3056l-10.2656 358.4z" fill="#E94E4C" p-id="66685"></path></svg>`
      getNthElement("fileList", index).querySelector(".svgg").title = "转换失败：" + res
    }
  }
  converting = false;
  converted = true;
}

function getNthElement(parentId, n) {
  const parentElement = document.getElementById(parentId);
  if (!parentElement) {
    console.error("找不到父元素");
    return null;
  }
  if (n < 0 || n >= parentElement.children.length) {
    console.error("n 超出范围");
    return null;
  }
  return parentElement.children[n];
}

function renderFileList(path) {

  converted = false;

  let fileListContainer = document.getElementById('fileList')

  const fileElement = document.createElement('div');
  fileElement.classList.add('fileElement')
  const fl1 = document.createElement('div');
  const fl2 = document.createElement('div');
  const fl3 = document.createElement('div');
  const fl4 = document.createElement('div');
  const fl5 = document.createElement('div');
  const fl6 = document.createElement('div');
  const fl7 = document.createElement('div');
  const fl8 = document.createElement('div');

  fl1.classList.add('fl1')
  fl3.classList.add('fl1')
  fl4.classList.add('fl4')
  fl5.classList.add('fl5')
  fl6.classList.add('fl4')
  fl7.classList.add('fl5')
  fl7.classList.add('status')
  fl2.classList.add('fl2')
  fl8.classList.add('fl8')

  fl2.innerHTML = `<svg t="1743747851147" class="icon" viewBox="0 0 1194 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10926" width="16" height="16"><path d="M814.378667 821.76a375.296 375.296 0 0 1-221.44 68.096 393.642667 393.642667 0 0 1-30.933334-1.578667c-4.138667-0.426667-8.405333-1.066667-12.544-1.621333a246.784 246.784 0 0 1-38.144-7.082667 336.213333 336.213333 0 0 1-22.784-5.845333c-3.584-1.066667-7.082667-2.389333-10.666666-3.584a417.877333 417.877333 0 0 1-25.6-9.344l-5.589334-2.56a381.013333 381.013333 0 0 1-28.8-13.824l-1.194666-0.682667a377.685333 377.685333 0 0 1-86.016-64.426666l-1.194667-1.28a359.936 359.936 0 0 1-22.528-24.832l-4.394667-5.717334a376.405333 376.405333 0 0 1-82.944-235.733333H319.146667L159.317333 272.938667 0 511.872h99.584c0 104.661333 32.682667 201.856 88.149333 282.112l1.877334 3.498667c5.717333 8.234667 12.117333 15.701333 18.261333 23.594666l6.826667 8.789334c9.045333 11.093333 18.645333 21.333333 28.629333 31.488l2.816 2.901333c33.322667 33.365333 70.912 61.44 111.872 83.882667l3.328 1.877333c11.861333 6.4 23.893333 12.117333 36.266667 17.450667l9.045333 4.138666c10.538667 4.394667 21.333333 8.106667 32.256 11.733334 5.12 1.706667 10.282667 3.584 15.488 5.205333 9.472 2.773333 19.2 5.205333 29.056 7.466667 6.528 1.450667 12.928 3.2 19.626667 4.394666l7.978666 1.877334c9.216 1.578667 18.517333 2.517333 27.733334 3.584l10.026666 1.322666c16.512 1.621333 33.194667 2.688 49.706667 2.688 101.205333 0 199.850667-30.933333 284.672-90.282666a59.690667 59.690667 0 0 0 14.677333-83.2 60.074667 60.074667 0 0 0-83.498666-14.677334z m280.832-309.888c0-104.405333-32.554667-201.344-87.722667-281.472l-2.304-4.010667c-6.784-9.728-14.378667-18.901333-21.717333-28.16l-2.688-3.285333a492.8 492.8 0 0 0-185.728-139.605333l-5.845334-2.688c-11.477333-4.778667-23.210667-8.917333-35.072-12.8-4.266667-1.450667-8.405333-2.901333-12.8-4.266667a489.813333 489.813333 0 0 0-31.317333-7.978667c-5.888-1.322667-11.605333-2.816-17.621333-4.010666l-8.533334-1.877334c-7.850667-1.28-15.744-1.962667-23.594666-2.901333-5.461333-0.682667-10.794667-1.621333-16.256-2.133333-13.226667-1.237333-26.410667-1.749333-39.466667-2.005334l-7.082667-0.426666-1.322666 0.170666a494.08 494.08 0 0 0-284.288 89.856 59.690667 59.690667 0 1 0 68.565333 97.877334 375.850667 375.850667 0 0 1 252.928-66.56l9.984 1.322666c8.96 1.066667 17.877333 2.432 26.666667 4.138667 3.84 0.810667 7.722667 1.706667 11.477333 2.688 8.661333 2.005333 17.194667 4.010667 25.6 6.528l7.978667 2.645333c9.6 3.2 19.072 6.528 28.416 10.410667l2.816 1.194667a379.733333 379.733333 0 0 1 142.506666 106.965333l0.682667 0.896A377.514667 377.514667 0 0 1 975.445333 512h-99.584l159.36 238.933333L1194.666667 511.872h-99.456z" p-id="10927" fill="#8a8a8a"></path></svg>`
  fl2.title = "待转换"
  fl2.classList.add('svgg')

  fl4.innerHTML = `文件：${splitByLastBackslash(path)[1]}`
  fl4.title = splitByLastBackslash(path)[1]
  fl5.innerHTML = `路径：${splitByLastBackslash(path)[0]}`
  fl5.title = splitByLastBackslash(path)[0]

  fl6.innerHTML = `文件：${splitByLastBackDot(splitByLastBackslash(path)[1])[0]}.pdf`
  fl6.title = `${splitByLastBackDot(splitByLastBackslash(path)[1])[0]}.pdf`
  fl7.innerHTML = `状态：未转换`

  fl1.appendChild(fl4)
  fl1.appendChild(fl5)
  fl2.appendChild(fl8)
  fl3.appendChild(fl6)
  fl3.appendChild(fl7)
  fileElement.appendChild(fl1)
  fileElement.appendChild(fl2)
  fileElement.appendChild(fl3)
  fileListContainer.appendChild(fileElement)
}

function splitByLastBackslash(path) {
  const lastBackslashIndex = path.lastIndexOf('\\');
  if (lastBackslashIndex === -1) {
    return [path, ''];
  }
  const prefix = path.slice(0, lastBackslashIndex);
  const suffix = path.slice(lastBackslashIndex + 1);
  return [prefix, suffix];
}

function splitByLastBackDot(path) {
  const lastBackslashIndex = path.lastIndexOf('.');
  if (lastBackslashIndex === -1) {
    return [path, ''];
  }
  const prefix = path.slice(0, lastBackslashIndex);
  const suffix = path.slice(lastBackslashIndex + 1);
  return [prefix, suffix];
}