//manupulate the fontsize of icons in the index .html document






//create function to display c_mobile_view on media size and hide c_desktop_view on media size

function displayScreen() {

    
    console.log("Boy, Girl, Pinky and Brain")
}

displayScreen();

















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
mainLoading = document.querySelector("main"), 
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



