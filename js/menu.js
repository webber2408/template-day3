jQuery(document).ready(function($){
    $("#menu").click(function(){ 
    	// $("#main-top2").animate({width: 'toggle'});
     //   $("#main-top").animate({width: 'toggle'});
       $("#main-top").slideToggle(1000);
       $("#main-top2").slideToggle(1000);     
        
   });

    $("#login").click(function(){
         /*console.log("hello");*/
         // $("#b-r-bottom-login").animate({width: 'toggle'});
         // $("#b-r-bottom-register").animate({width: 'toggle'});

         $('#b-r-bottom-register').fadeOut('fast', function(){
            $('#b-r-bottom-login').fadeIn('fast');
        });
    });

    $("#register").click(function(){
         // $("#b-r-bottom-register").animate({width: 'toggle'});
         // $("#b-r-bottom-login").animate({width: 'toggle'});
         $('#b-r-bottom-login').fadeOut('fast', function(){
            $('#b-r-bottom-register').fadeIn('fast');
        });
    	
    });
});