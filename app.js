const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

console.log(open);
// open.onClick = function(){
//     container.classList.add("show-nav")
// }

open.addEventListener('click',()=>{
    container.classList.add('show-nav');
    // container.className += "show-nav"
    console.log('Moji');
})

// function openHandler(){
//     console.log("Moji");
// }

close.onclick = function(){
    console.log("Moji2");
    container.classList.remove('show-nav');
}