
 $(document).ready(function() {
      $("#slideshow-content").addClass("large-image"); 
	  var imglength=$("#thumb-carousel").children().length;
	  loadimages(imglength);
});

function loadimages(j)
{
	for(var i=2; i<=j; i++)
	{
		var c = ".image"+i;		
		$(c).hide();
	}
}

$(function()
{
    $("#thumb-carousel a").click(function()
        {
       		var imageClass = $(this).children("img").attr("class");
          	var j= $("#thumb-carousel").children().length; 
		  	hidedivs(j);
		  	showImage(imageClass);
		 	
			var activeThumb = $("ul#thumb-carousel li a.active");
			if (activeThumb != null) {
				activeThumb.removeClass("active");	
			}
			$(this).addClass("active");//adds class once clicked; need to remove it then
			
          	return false;
        });
});

function hidedivs(count)
{
	
	for(var i=1; i<=count; i++)
	{
		var c = ".image"+i;		
		$(c).hide();
	}
}
function showImage(imageClass)
{
		var i= ".image"+imageClass;		
		$(i).show();                                                           
}
