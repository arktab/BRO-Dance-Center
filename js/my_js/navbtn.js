        window.onscroll = function() {
            scrollFunction()
        };

        function scrollFunction() {
//            if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
//                document.getElementById("myBtn").style.display = "block";
//            } else {
//                document.getElementById("myBtn").style.display = "none";
//            }
   
//            var actual_width = window.innerWidth;
//            if (actual_width < 1360){
//                document.getElementById("navbar").style.display = "block";
//            } else {
//                document.getElementById("navbar").style.display = "none";
//            }
            
             if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750 ) {
                document.getElementById("navbar").style.display = "block";
            } else {
                document.getElementById("navbar").style.display = "none";
            }
        }

        //scroll to the top  
        //scroll to the top  
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }