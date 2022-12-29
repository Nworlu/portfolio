const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('.link')

menuBtn.addEventListener('click', (e)=>{
    const toggle = e.currentTarget
    if(toggle){
        nav.classList.toggle('link')
        console.log(nav);
    }
    // console.log(e.currentTarget)
})