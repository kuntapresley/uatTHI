
//create an onload event that won't display the menu navaigation shortcut bar on page load

// try {
//    window.onload = function() {
//       const cMenuOptions = document.querySelector(".c_menu_options");
//       cMenuOptions.style.marginLeft = "100%";


//       console.log("c_menu_options document object manupulation is working.");
//    }

//    var checkBotton;
//    checkBotton = document.querySelector(".checkbotton").addEventListener("click", function(){
      
//       const cMenuOptions = document.querySelector(".c_menu_options");
//       cMenuOptions.style.marginLeft = "0%";
//       console.log("checkbottonClicked");
//    });

// }


// catch(err){
//    document.querySelector("header").innerHTML = err.message;
// }
























//some document items changes when window scroll

// window.onscroll = function() {

   
   // var cShareButtonContainer = document.querySelector(".c_share_button_container");

   // var cSocialIconsShareLinkA = document.querySelector(".c_facebook_share_link i");
   // var cSocialIconsShareLinkB = document.querySelector(".c_twitter_share_link i");
   // var cSocialIconsShareLinkC = document.querySelector(".c_linkedin_share_link i");
   // var cSocialIconsShareLinkD = document.querySelector(".c_whatsapp_share_link i");

   // cShareButtonContainer.style.height = "0.8cm";

   // cSocialIconsShareLinkA.style.fontSize = "22px";
   // cSocialIconsShareLinkB.style.fontSize = "22px";
   // cSocialIconsShareLinkC.style.fontSize = "22px";
   // cSocialIconsShareLinkD.style.fontSize = "22px";

//    console.log("Working");

// }












































/**
 * 
 * 
 *https://www.facebook.com/sharer.php?u=[post-url]
 * 
 * 
 * https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]
 * 
 * 

 https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
 * 



 https://api.whatsapp.com/send?text=[post-title] [post-url]
 */


 function shareContentOrArticlesLinkToSocailMedia() {

   var facebookButton = document.querySelector(".c_facebook_sharing_link")

   var linkedinButton = document.querySelector(".c_linkedin_sharing_link")

   var twitterButton = document.querySelector(".c_twitter_sharing_link")

   var whatsAppButton = document.querySelector(".c_whatsapp_sharing_link")


   function init(){
      var socialLinkImages = document.querySelector(".c_share_social_image");
      var postURL = document.location.href;
      var postTitle = "Hi Everyone, please check this out";
      var postImg = encodeURI(socialLinkImages.src);

      facebookButton.setAttribute("href", `https://www.facebook.com/sharer.php?u=${postURL}`);

      linkedinButton.setAttribute("href", `https://www.linkedin.com/shareArticle?url=${postURL}&title=${postTitle}`);

      twitterButton.setAttribute("href", `https://twitter.com/share?url=${postURL}&text=${postTitle}`);

      whatsAppButton.setAttribute("href", `https://api.whatsapp.com/send?text=${postTitle} ${postURL}`);
   }

   init();

 }
 shareContentOrArticlesLinkToSocailMedia();





function openTableOfContentModal() {
   var cTableOfContent = document.querySelector(".c_table_of_content_button");
   var cTableOfContentModal = document.querySelector(".c_table_of_content_modal");
   cTableOfContent.addEventListener("click", ()=>{
      document.querySelector(".c_table_of_content_container").style.display="block";
      cTableOfContent.style.display = "none";
      cTableOfContent.style.transitionProperty = "all";
      cTableOfContent.style.transitionDuration = "2s";
      cTableOfContent.style.transitionTimingFunction = "ease-in-out";
      
   });
}
openTableOfContentModal();

function closeTableOfContentModal() {
   
   var closeTableOfContent = document.querySelector(".c_table_of_content_close_button");
   var cTableOfContent = document.querySelector(".c_table_of_content_button");
   closeTableOfContent.addEventListener("click", ()=>{
      document.querySelector(".c_table_of_content_container").style.display="none";
      cTableOfContent.style.display = "flex";
      cTableOfContent.style.transitionProperty = "all";
      cTableOfContent.style.transitionDuration = "2s";
      cTableOfContent.style.transitionTimingFunction = "ease-in-out";
      
   });
}
closeTableOfContentModal();


