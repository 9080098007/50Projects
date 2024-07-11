const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    //toggle 方法会在元素的类列表中添加或移除指定的类（active）。如果类已经存在，它将被移除；如果类不存在，它将被添加。

})