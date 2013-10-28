      $(function() {
      	//mobile menu click event
	    var check = true;
	    $(".nav-topical-box").on('click', '.pull', function (elf) {
	        //$('#nav-topical').toggle(400); // Standard up/down
	        $('#container, #container-header').toggleClass("menu-out"); // Off canvas slide-out
	        // $('').toggleClass("menu-out"); // Off canvas slide-out
	        // $('#nav-topical').toggle(200);
	        // if (check) {
	        //     $('.pull').text("close");
	        // } else {
	        //     $('.pull').text("menu");
	        // }
	        check = !check;
	        return false;
	    }); //end mobile menu click 
	    
          $('#tab-container-over ul#switch').tabs({ event: 'mouseover', fx: { opacity: 'toggle' }}).tabs('rotate', 10000); 
          $('.slide').innerfade({ speed: 'slow', timeout: 20000, type: 'sequence', containerheight: '370px' });
          $('.lgslide').innerfade({ speed: 'slow', timeout: 20000, type: 'sequence', containerheight: '470px' });
          $('.subtopical').hide();
          $('.topicalcol').hide();
		  
		  
	      var megaConfig = {
	         interval: 150,
	         sensitivity: 7,
	         over: addMega,
	         timeout: 700,
	         out: removeMega
	      };
		  
	      $("#nav-topical li").hoverIntent(megaConfig);
     });
	 
     function addMega(){        
        $(this).find('.subtopical').slideToggle("fast").find('.topicalcol').fadeIn(200);	
		navwidth = $('#nav-topical').outerWidth();
		
		menupos = $(this).position();
		submenupos = $(this).find('.subtopical').position();
		linkwidth = $(this).outerWidth();

		if (menupos.left > 200) {
			$(this).find('.subtopical').css({"left": ((menupos.left-380)+linkwidth)+"px"});
		} else {
			$(this).find('.subtopical').css({"left": menupos.left+"px"});	
		}	
     }

     function removeMega(){        
	 	$(this).find('.subtopical').slideToggle("fast");
		$(this).find('.topicalcol').fadeOut("slow");
     }