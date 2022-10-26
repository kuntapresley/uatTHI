
try {



    //run some program
    // function cOpenndClosecheckbox() {
    //     console.log("Shop");
    //     var cCheckboxOpen = document.querySelectorAll(".c_checkbox_open");
    //     var cCheckboxClose = document.querySelectorAll(".c_checkbox_close");

    //     cCheckboxOpen.addEventListener("click", ()=> {
    //     var cTableOfContentModal = document.querySelectorAll(".c_table_of_content_modal");
    //     cTableOfContentModal.style.display = "none";
    //     });

    //     cCheckboxClose.addEventListener("click", ()=> {
    //         var cTableOfContentModal = document.querySelectorAll(".c_table_of_content_modal");
    //         cTableOfContentModal.style.display = "block";
    //         });
    // }
    // cOpenndClosecheckbox();


    //accordion programming starts
    var accordion = document.querySelectorAll(".c_menu_accordion");
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
    //accordion programming ends






//this function changes short cut menu bar
// function mycBarFunction(x) {
//     x.classList.toggle("c_checkboxToggle");
// };



//shortcut menu display change
// function mycBarFunction(x) {

//     const cCheckbox = document.querySelector(".c_checkbox");

//     if (cCheckbox.active) {
        
//      const websiteBody = document.querySelector("body");
//      websiteBody.style.overflow = " hidden";
//     }

//     else {
//         websiteBody.style.overflow = " auto";
//     }

// };
//shortcut menu display change



//sticky header/navigation

var navbar = document.querySelectorAll(".c_header_navbar");
var sticky = navbar.offsetTop;

window.onscroll = function myFunction() {
    for(i = 0; i < navbar.length; i++) {
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
    }

};



// window.onscroll = function() {myFunction()};
// const navbar = document.querySelectorAll("header .c_header_navbar");
// const sticky = navbar.offsetTop;
//     function myFunction() {
//             if (window.pageYOffset > 10 && window.pageYOffset >= sticky) {
//                 navbar.classList.add("sticky");
//                 navbar.style.borderTop = "10px solid #f6921e";
//                 navbar.style.transitionProperty = "all";
//                 navbar.style.transitionDuration = "2s";
//                 navbar.style.transitionTimingFunction = "ease-in-out";
//             } 
//             else {
//                 navbar.classList.remove("sticky");
//                 navbar.style.borderTop = "none";
//             }
//     };

    
// const navbar = document.querySelectorAll(".c_header_navbar");
// const sticky = navbar.offsetTop;
// window.addEventListener("scroll", ()=> {
//             if (window.pageYOffset > 10 && window.pageYOffset >= sticky) {
//                 for(i = 0; i < navbar.length; i++){
//                 navbar[i].classList.add("sticky");
//                 navbar[i].style.borderTop = "10px solid #f6921e";
//                 navbar[i].style.transitionProperty = "all";
//                 navbar[i].style.transitionDuration = "2s";
//                 navbar[i].style.transitionTimingFunction = "ease-in-out";
//                 }
//             } 
//             else {
//                 navbar[i].classList.remove("sticky");
//                 navbar[i].style.borderTop = "none";
//             }   

// });

//sticky header/navigation
// var accordion = document.querySelectorAll(".c_menu_accordion");
// for (i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     const panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//     panel.style.display = "none";
//     } else {
//     panel.style.display = "block";
//     }
// });
// }










//date update start

const updatedTime = document.querySelectorAll('.date');
const newTime = new Date();
const newShortTime = newTime.getFullYear();
updatedTime.innerHTML = newShortTime;

//date update ends

















//load more articles function
// var cArticlesColumn = document.querySelectorAll(".c_articles_column");
// var cArticlesColumnButton = document.querySelectorAll(".c_articles_load_button");

// var currentimg = 3;

// cArticlesColumnButton.addEventListener("click", function () {
//     for (var i = currentimg; i < currentimg + 3; i++) {
//         if (cArticlesColumn[i]) {
//             cArticlesColumn[i].style.display = "block";
//         }
//     }

//     currentimg += 3;
// });















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









//website loading event

//get website element by creating variables


    // var headerLoading = document.querySelectorAll(".c_header"),
    // mainLoading = document.querySelectorAll("main"),
    // footerLoading = document.querySelectorAll("footer");



    // headerLoading.style.display = "none";
    // mainLoading.style.display = "none";
    // footerLoading.style.display = "none";



    // var overlay = document.querySelectorAll(".overlay");
    // window.addEventListener('load', function () {
    //     overlay.style.display = "none";
    //     headerLoading.style.display = "block";
    //     mainLoading.style.display = "block";
    //     footerLoading.style.display = "block";
    // });


//website loading event


























































}
catch(err) {

    document.querySelector("body").innerHTML = `<p class="c_error_message"> Dear Users/ Customers,` + "<br>"+ "<br>"  + `Thank you for visiting our website!` + "<br>" +  "<br>" + "<br>" + "&nbsp" + "&nbsp" +  "&nbsp" +  ` 
    'This could be a website syntax, type, object, event, date or any javaScript/ programmed software engine error which can easily be resolved, please kindly contact our developers and engineers on <a href="tel:+2347052223261">+234 705 222 3261 </a> or email at support@timobhealthinternational.com to resolve this error quickly, Thank you!. In the mean time you can always contact <a href="">+234 803 576 8694</a>, <a href="">+234 803 576 8694</a>, <a href="">+234 741 723 4205</a> or email <a href="">info@timobhealthinternational.com</a> or <a href="">support@timobhealthinternational.com</a> for any medical advise, medical support or emergencies.  We deeply apologize for every inconviences this may have caused. Thank you for your understanding, It is very much apperciated.'

    `  + "<br>" 
    
    + "<br>" + "&nbsp" + "&nbsp" +  "&nbsp" 
    
    + "We found some computer error clue, some computer errors are : " +  "&nbsp" + err.name +  "&nbsp" + err.message +  "&nbsp" + err.stack + "<br>" + "Thank you and Best Wishes" + "</p>"
     ; 
}