/* 
* @author Bedrich Rios
* @version 1.0
* @website www.br86.com
* 
* This script hides and shoes an specified element when another specified element is toggled.
* 1. <meta name="menu_toggle" content="[toggler] [togglee] ..." />
* 2. jQuery should be downloaded and inserted into the code. 
*/
jQuery(document).ready(function() 
{
	var content = [".banner-title",".banner-info"];
	if (content)
	{
		if(content.length == 2)
		{
			var toggler = content[0];
			var togglee = content[1];
			menuToggler(toggler,togglee);
		}
		else alert("Too many togglers or togglees, check your meta tag content.");
	}
	else alert("Nothing to toggle");
});
	
function menuToggler(toggler, togglee)
{
	var original_text = jQuery(toggler).text();
	jQuery(togglee).hide();
	jQuery(toggler).toggle(
	function()
	{
		jQuery(toggler).text("[ - ]");
		jQuery(togglee).show("fast");
	},
	function()
	{
		jQuery(togglee).hide("fast");
		jQuery(toggler).text(original_text);
	});
}

