function clickHamburger(){
    let navbar = document.querySelector(".navbar-side");
    if(navbar.classList.contains("hide")){
        navbar.classList.remove("hide");
    }else{
        navbar.classList.add("hide");
    }
}