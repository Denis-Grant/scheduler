const weekOf = document.getElementById('week-of');
// Media Query
let mq = window.matchMedia('(min-width: 920px)');

// DYNAMICALLY INSERT ID'S
let allClasses = document.getElementsByClassName('topbar');
let all = [...allClasses]
all.forEach((classy, i)=>{
    classy.id = `id-${i}`
});
document.querySelector('body').style.marginBottom = '200px';

// DEVELOPER MODE - Prevents mobile ver on lg screen
if (mq.matches){
    document.querySelector('#mobile').style.display = 'none'; 
}

// JS MEDIA QUERIES
window.addEventListener('resize', ()=>{

    if (mq.matches){
        document.querySelector('#mobile').style.display = 'none';
        document.querySelector('#desktop').style.display = 'block';
    } else {
        document.querySelector('#desktop').style.display = 'none';
        document.querySelector('#mobile').style.display = 'block';
    }
});
