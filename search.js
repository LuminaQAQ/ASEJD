//获取元素，搜索框
let search_txt = document.querySelector('.search_txt')
const search_btn = document.querySelector('.search-btn')

let shiyi = document.querySelector('.shiyi')
//检验是否为农业
search_btn.addEventListener('click', function () { //这里为什么说addEventListener无法获取元素啊？？
  if (search_txt.value.includes('农业')) {
    shiyi.innerHTML = '欧尼'
  } else {
    console.error('搜索按钮元素未找到');
  }
})
//是，则显示内容
