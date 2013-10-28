/**
 *
 * 
 * http://spritespin.ginie.eu/examples.html
 * 
 */

var historyFact = new Object();
var decades = new Object();
var ht = 0;
var dc = 0;

var decade_html = "";
var rd = 0;


		$(function(){

	  			// 
	  			var custom = {
  				    mousedown  : function(e){ 
  				    	//$("#historyspinner").spritespin("animate", true, true);
  	  				    return false; 
  	  				},
  				    mousemove  : function(e){ return false; },
  				    mouseup    : function(e){ 
  				    	
				        rd =((rd+1) < ht) ? (rd+1) : 0;
					    gospin(rd);
  				    	
  	  				    return false; },
  				    mouseenter : function(e){ return false; },
  				    
  				    mouseover  : function(e){ 
  				      
  				      return false; 
  				    },
  				    
  				    mouseleave : function(e){ 
  				     	return false; 
  				    },
  				    
  				    dblclick   : function(e){ 
	  				    	stopSpinner();
	    				    return false; 
  	  				    },
  				    onFrame : function(e, frame){ return false; }
  				  }

				     
	  		    $("#historyspinner").spritespin({
	  		      width     : 400,
	  		      height    : 287,
	  		      frames    : 3,
	  		      resolutionX: 1200,
	  		      resolutionY: 287,
	  		      image     : "/_assets/images/historyspinner.jpg",
	  		      loop      : false,
	  		      
	  		      behavior:custom
	  		    });

	  			$("#historyspinner").wrap('<div id="historywrapper">');
	  			$("#historyspinner").after('<div id="prev"><a href="javascript:prevEvent();">prev</a></div>');
	  			$("#historyspinner").after('<div id="next"><a href="javascript:nextEvent();">next</a></div>');
	  			$("#historyspinner").after('<div id="spinme"><a href="javascript:spinme();">Spin me</a></div><div id="historyfact"><img src="/_assets/images/historyinstructions.jpg" border="0"></div>');
	  			
	  			$("#historyspinner").after('<div id="decades">decades</div>');
	  			loadTimeline();
	  			
	  			
	  		
					
					
	  			$('#spinme a').click(function() {
	  	        	spinme(); 
	  	         }); //close click(
	  			
	  			
	  		  });
			
			
			function gospin(in_rd) {
				
				$("#historyfact").hide();
	  	        $("#historyspinner").spritespin("animate", true, true);
 				window.setTimeout(stopSpinner, 800);
				$("#historyfact").fadeOut('fast').html("<div class='hisDate'>"+historyFact[in_rd].yr+"</div><div class='hisFact'>"+historyFact[in_rd].fact+"</div>");
	  	            
			}
			

			function prevEvent() {
				 if (rd > 0) {
			     	rd = ((rd-1) > 0) ? rd-1 : ht;
			     } else if (rd == 0) {
			     	rd = ht-1;
			     }
				 gospin(rd);
			}
				
				
			function nextEvent() {
				 rd =((rd+1) < ht) ? (rd+1) : 0;
				 gospin(rd);    
			}	
			  	    
	  	    function spinme() {
	  	    	 rd =Math.floor(Math.random()*ht);
				 gospin(rd);   
	  	    }
	  	    
 	  	    function stopSpinner() {
				  $("#historyspinner").spritespin("animate", false, true);
				  $("#historyspinner").spritespin("frame", 0);
				  $("#historyfact").fadeIn('slow');
			}
			
			function gotoDecade(inDecade) {
				 i=0;
	             if (inDecade > 1870) {
		             while 	(historyFact[i].yr < inDecade) {
		             	i++;
		             }
				 } else {
				 	rd = 0;
				 }
				 
				 rd = i;

	 		     gospin(rd);
			}
			
			
			function loadTimeline() {
				
				slider = '<div id="slider" style="width:400px; height:20px;"></div>';

				$.ajax({
	  	                 type: "GET",
	  	                 url: "/_assets/xml/timeline.xml",
	  	                 dataType: "xml",
	  	                 success: function(xml) {
		                     $(xml).find('item').each(function(){
		                         var year_text = $(this).attr('year');
		                         var fact_text = $(this).attr('text');
							     //$('<li></li>').html(year_text + ' (' + fact_text + ')').appendTo('#historyfact');
							     historyFact[ht] = {
										yr:year_text,
										fact:fact_text
							     };
							     
							     ht++;
		                     }); //close each(
		                     	
		                     rd =Math.floor(Math.random()*ht);
		                     
		                     decade_html = "";	
		                     decade_div = "";
		                     $(xml).find('decade').each(function(){
		                     		var decade_text = $(this).attr('decade');
		                     		dc++;
		                     		decades[dc] = {
		                     			decade:decade_text
		                     		};
		                     		decade_html += "<li><a href='javascript:gotoDecade("+decade_text+");'>"+decade_text+"</a></li>";
		                     		//decade_html += "<li><a href='#dec-"+dc+"'>"+decade_text+"</a></li>";
		                     		//onclick='javascript:gotoDecade("+decade_text+");'
		                     		//decade_div += "<div id='dec-"+dc+"'></div>";
		                     });	
                             
                             
                             //decade_html = "<ul>"+decade_html+"</ul>"+decade_div;
                             decade_html = "<ul>"+decade_html+"</ul>";
                             $("#decades").html(decade_html);
                             //$("#decades").before(slider);
                             
							 
		                     
		                 }
	  	                 
	  	             }); //close $.ajax(
	  	            
	  	            /* 	
	  	            $( "#decades" ).tabs({
						select: function( event, ui ) {
							alert('hi');
							console.log(event);
							//gotoDecade("+decade_text+");
						}
					});
					$( "#slider" ).slider({
						min: 0,
						max: $( "#decades" ).tabs( "length" ) - 1,
						slide: function( event, ui ) {
							$( "#decades" ).tabs( "select", ui.value );
						}
					});
					*/
			}
			
			
