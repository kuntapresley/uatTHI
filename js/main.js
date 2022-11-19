
try {

async function cLandingPageAlert() {
    alert("We recommend you use google chrome browser!");
        
    //     function cLandingPageConfirm() {
    //     let text;

    //     if (confirm() == true) {
    //       text = "You are using google chrome browser!";
    //     } 
        
    //     else {
    //       text = "You are not using google chrome browser, please use google chrome for a better experience!";
    //     }
    //     document.querySelector(".c_browser_verification").innerHTML = text;
    // }
    
    // );
}
cLandingPageAlert();

//website landing page slide show
function c_slideShows() {

    //get the slides containers
    let slides = document.querySelectorAll('.c_slide_container');
    let index = 0;

    //get the slides buttons
    // document.querySelector('#c_prev').addEventListener('click',previousSlide);
    // document.querySelector('#c_next').addEventListener('click',nextSlide);

    //next function 
    function nextSlide() {
        slides[index].classList.remove('active');
        index = (index + 1 ) % slides.length;
        slides[index].classList.add('active');
    }

    //previous function 
    function previousSlide() {
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active');
    }

    setInterval(nextSlide, 7000);
    
}
c_slideShows();


//website loading event
//get website element by creating variables
function websitePageOnload() {

    var headerLoading = document.querySelector("header"),
    mainLoading = document.querySelector("main"),
    footerLoading = document.querySelector("footer");


    headerLoading.style.display = "none";
    mainLoading.style.display = "none";
    footerLoading.style.display = "none";




    var overlay = document.querySelector(".overlay");
    window.addEventListener('load', function () {
        overlay.style.display = "none";
        headerLoading.style.display = "block";
        mainLoading.style.display = "block";
        footerLoading.style.display = "block";
    });

}
websitePageOnload();

//website loading event


//accordion programming starts

function c_Accordion_Function(e) {

    function accordionLoading(website) {

        var accordion = document.querySelectorAll(".c_menu_accordion");

        if(website.matches) {

            for (i = 0; i < accordion.length; i++) {
                accordion[i].addEventListener("click", function() {
                this.classList.toggle("active");
                const panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                panel.style.display = "none";
                } else {
                panel.style.display = "block";
                }
            });
            }
            
        }   

    }

    const accordionLoad = window.matchMedia("(max-width: 850px)");

    accordionLoading(accordionLoad);

    accordionLoad.addListener(accordionLoading);
}
c_Accordion_Function();
    
//accordion programming ends


function disableNavBarHREF() {

    function navbarHref(website) {

    if(!website.matches) {
        document.querySelector(".c_menu_acordion_panel").style.display= "none";
    }    
    else {
        document.querySelector(".c_menu_options_items").href="javascript:void(0)";
    }
    }

    const hrefLink = window.matchMedia("(max-width: 850px)");

    navbarHref(hrefLink);

    hrefLink.addListener(navbarHref);

}
disableNavBarHREF();




//sticky header/navigation

function websiteHeaderRemainSticky() {
    const navbar = document.querySelector(".c_header_navbar");
    const sticky = navbar.offsetTop;
     document.addEventListener("scroll", function(){
        if (window.pageYOffset > 10 && window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            navbar.style.borderTop = "10px solid #f6921e";
            navbar.style.transitionProperty = "all";
            navbar.style.transitionDuration = "2s";
            navbar.style.transitionTimingFunction = "ease-in-out";
        } 
        else {
            navbar.classList.remove("sticky");
            navbar.style.borderTop = "none";
        }
    
     });   
}
websiteHeaderRemainSticky();

//sticky header/navigation









//date update start

function upDateWebsiteDateYear() {

    const updatedTime = document.querySelector('.date');
    const newTime = new Date();
    const newShortTime = newTime.getFullYear();
    updatedTime.innerHTML = newShortTime;

}
upDateWebsiteDateYear();

//date update ends




//load more articles function
    
function loadMoreArticlesFunction() {
    
    var cArticlesColumn = document.querySelectorAll(".c_articles_column");
    var cArticlesColumnButton = document.querySelector(".c_articles_load_button");

    var currentimg = 3;
    cArticlesColumnButton?.addEventListener("click", function () {
        for (var i = currentimg; i < currentimg + 3; i++) {
            if (cArticlesColumn[i]) {
                cArticlesColumn[i].style.display = "block";
            }
        }

        currentimg += 3;
    });
       
}
loadMoreArticlesFunction();

//load more articles function











//search articles functions
// function myFunction() {


//     var cSearchmMyInput, filter, articlesList, articlesContents, a, i, txtValue;

//     cSearchmMyInput = document.querySelector(".c_search_2_myInput");
//     filter = cSearchmMyInput.value.toUpperCase();
//     articlesList = document.querySelector(".c_articles_row");
//     articlesContents = articlesList.querySelectorAll(".c_articles_column");
//     for (i = 0; i < articlesContents.length; i++) {
//         a = articlesContents[i].querySelector("p")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             articlesContents[i].style.display = "";
//         } else {
//             articlesContents[i].style.display = "none";
//         }
//     }

// };



































































}

catch(err) {

    document.querySelector("body").innerHTML = `<p class="c_error_message"> Dear Users/ Customers,` + "<br>"+ "<br>"  + `Thank you for visiting our website!` + "<br>" +  "<br>" + "<br>" + "&nbsp" + "&nbsp" +  "&nbsp" +  ` 
    'This could be a website syntax, type, object, event, date or any javaScript/ programmed software engine error which can easily be resolved, please kindly contact our developers and engineers on <a href="tel:+2347052223261">+234 705 222 3261 </a> or email at support@timobhealthinternational.com to resolve this error quickly, Thank you!. In the mean time you can always contact <a href="">+234 803 576 8694</a>, <a href="">+234 803 576 8694</a>, <a href="">+234 741 723 4205</a> or email <a href="">info@timobhealthinternational.com</a> or <a href="">support@timobhealthinternational.com</a> for any medical advise, medical support or emergencies.  We deeply apologize for every inconviences this may have caused. Thank you for your understanding, It is very much apperciated.'

    `  + "<br>" 
    
    + "<br>" + "&nbsp" + "&nbsp" +  "&nbsp" 
    
    + "We found some computer error clue, some computer errors are : " +  "&nbsp" + err.name +  "&nbsp" + err.message +  "&nbsp" + err.stack + "<br>" + "Thank you and Best Wishes" + "</p>"
     ; 
}