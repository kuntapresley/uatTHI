






    function mycBarFunction(x) {
        x.classList.toggle("change");
    };

    window.onscroll = function() {myFunction()};

    var navbar = document.querySelector(".c_header_navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
    if (window.pageYOffset > 10 && window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.style.borderTop = "10px solid #f6921e";
        navbar.style.transitionProperty = "all";
        navbar.style.transitionDuration = "2s";
        navbar.style.transitionTimingFunction = "ease-in-out";
    } else {
        navbar.classList.remove("sticky");
        navbar.style.borderTop = "none";
    }
    };













//date update start

    const updatedTime = document.querySelector('.date');
    const newTime = new Date();
    const newShortTime = newTime.getFullYear();
    updatedTime.innerHTML = newShortTime;
    
//date update ends

















//load more articles function
var cArticlesColumn = document.querySelectorAll(".c_articles_column");
var cArticlesColumnButton = document.querySelector(".c_articles_load_button");

var currentimg = 3;

cArticlesColumnButton.addEventListener("click", function(){
    for(var i = currentimg; i < currentimg + 3; i++){
        if(cArticlesColumn[i]) {
            cArticlesColumn[i].style.display = "block";
        }
    }

    currentimg += 3;
});











//search articles functions
function myFunction(){

    
    var cSearchmMyInput, filter, articlesList, articlesContents, a, i, txtValue;

    cSearchmMyInput = document.querySelector(".c_search_2_myInput");
    filter = cSearchmMyInput.value.toUpperCase();
    articlesList = document.querySelector(".c_articles_row");
    articlesContents = articlesList.querySelectorAll(".c_articles_column");
    for (i = 0; i < articlesContents.length; i++) {
        a = articlesContents[i].querySelector("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            articlesContents[i].style.display = "";
        } else {
            articlesContents[i].style.display = "none";
        }
    }

};

// document.querySelector("#c_desktop_view").style.display = "none";








                //website loading event

//get website element by creating variables
var headerLoading = document.querySelector("header"), 
mainLoading = document.querySelector("main"), cMenuOptions = document.querySelector(".c_menu_options"),
footerLoading = document.querySelector("footer");



headerLoading.style.display="none";
mainLoading.style.display="none";
footerLoading.style.display="none";



var overlay = document.getElementById("overlay");
window.addEventListener('load', function(){
overlay.style.display="none";
headerLoading.style.display="block";
mainLoading.style.display="block";
footerLoading.style.display="block";
});

//website loading event



