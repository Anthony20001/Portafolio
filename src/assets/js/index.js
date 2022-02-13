window.onload = () => {
    var nav = document.getElementById("bg-nav");

    window.onscroll = (e) => {
        if(document.body.scrollTo > 15 || document.documentElement.scrollTop > 15){
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.920)';
        }else{
            nav.style.backgroundColor = '';
        }
    } 
}