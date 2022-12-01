function loadHistButtons() {

    var cMedicalSpecialistsPostedTimesButton = document.getElementsByClassName("c_medical_specialists_posted_times_button");

    window.onload = function(){
        
       
            const medicalPostedSourcesArticle = document.querySelector(".c_medical_specialists_posted_times_sources_button");
            const medicalPostedHistoryArticle = document.querySelector(".c_medical_specialists_posted_times_history_button");

            
            medicalPostedSourcesArticle.addEventListener("click", ()=> {

                var x = document.querySelector(".c_article_sources_div");

                if (x.style.display === "none") {
                x.style.display = "block";
                } 
                
                else {
                x.style.display = "none";
                }

            });

            

            medicalPostedHistoryArticle.addEventListener("click", ()=> {

                var x = document.querySelector(".c_article_history_div");

                if (x.style.display === "none") {
                x.style.display = "block";
                } 
                
                else {
                x.style.display = "none";
                }

            });
    
    };
}
loadHistButtons();


