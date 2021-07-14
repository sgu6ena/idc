// * * кнопки тэги

const pageButtonTag = document.querySelectorAll('.page-button-tag');
pageButtonTag.forEach(item => item.addEventListener('click',() =>{
    pageButtonTag.forEach(item => item.classList.remove('active'));
    item.classList.toggle('active');
}))