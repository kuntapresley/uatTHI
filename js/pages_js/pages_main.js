//some document items changes when window scroll

window.onscroll = function() {

   
   var cShareButtonContainer = document.querySelector(".c_share_button_container");

   var cSocialIconsShareLinkA = document.querySelector(".c_facebook_share_link i");
   var cSocialIconsShareLinkB = document.querySelector(".c_twitter_share_link i");
   var cSocialIconsShareLinkC = document.querySelector(".c_linkedin_share_link i");
   var cSocialIconsShareLinkD = document.querySelector(".c_whatsapp_share_link i");

   cShareButtonContainer.style.height = "0.8cm";

   cSocialIconsShareLinkA.style.fontSize = "22px";
   cSocialIconsShareLinkB.style.fontSize = "22px";
   cSocialIconsShareLinkC.style.fontSize = "22px";
   cSocialIconsShareLinkD.style.fontSize = "22px";

   console.log("Working");

}












































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


 var facebookButton = document.querySelector(".c_facebook_share_link")

 var linkedinButton = document.querySelector(".c_linkedin_share_link")

 var twitterButton = document.querySelector(".c_twitter_share_link")

 var whatsAppButton = document.querySelector(".c_whatsapp_share_link")


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




