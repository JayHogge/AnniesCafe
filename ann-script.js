document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('hamButton');
    const sidebar = document.getElementById('navbarNav');
    let hamburgerOpen = false;

    menuButton.addEventListener('click', () => {
         if  (!hamburgerOpen) {
            sidebar.classList.add('open');
        }
        else
            sidebar.classList.remove('open');
    });
    
    // Optionally, you can also close the sidebar when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            sidebar.classList.remove('open');
        }
    });


    // for old navbar
    ////
    // window.onscroll = function () { myFunction() };
    
    // var navbar = document.getElementById("navbar");
    // var sticky = navbar.offsetTop;
    
    // function myFunction() {
    //     if (window.scrollY >= sticky) {
    //         navbar.classList.add("sticky")
    //     } else {
    //         navbar.classList.remove("sticky");
    //     }
    // }
    ////

    //debug
    let navs = document.querySelectorAll(".dropdown-item");
    navs.forEach(function(element)
    {
        element.addEventListener("click", function(){
            element.innerHTML = "handed over to vendor!"
            console.log("handed over to vendor")
        });
        
    });


    
});
