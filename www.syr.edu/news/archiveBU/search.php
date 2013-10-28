<?php
/**
 * @author Greg Milby gcmilby@syr.edu
 * @copyright 2008
 */
require_once('header.php');
require_once('connection.php');

$string = str_replace("'", "\'", $_GET['search']);

	 $v_parse = ora_Parse($v_open, "SELECT * FROM TBLNEWS WHERE TEASER LIKE ('%$string%')") or die ('select '.ora_error());

	//$v_parse = ora_Parse($v_open, "SELECT TBLNEWS.ID, TBLNEWS.TITLE, TBLNEWS.TEASER, TBLNEWS.RELEASEDATE FROM TBLNEWS WHERE  TBLNEWS.TEASER LIKE ('%$string%') ORDER BY TBLNEWS.RELEASEDATE DESC") or die ('select '.ora_error());
	
	$v_execute = ora_Exec($v_open) or die ('Execution not made.'.ora_error());	


echo "<div class=\"archive\">";
echo "<div class=\"sort-content-holder\">";
echo "<ul>";
echo "<li class=\"first\">";
echo "<div class=\"sort-date\">DATE</div>";
echo "<div class=\"sort-content\">TITLE</div>";
echo "</li>";

$switch = "even";
			while (Ora_Fetch($v_open)) {
			
			$date = dateTransform(ora_getcolumn($v_open, 3));
			
			// echo '<p><hr>' . ora_getcolumn($v_open, 1) . '<a href="story.php?id=' . ora_getcolumn($v_open, 0) . '">' . '   ' . 'read more<small><b>>></b></small></a><br /><br />';

			 echo "<li class=\"$switch\"><div class=\"sort-date\">$date</div><div class=\"sort-content\"><span>" . substr(ora_getcolumn($v_open, 1), 0, 125) . '</span> ... <a href="story.php?id=' . ora_getcolumn($v_open, 0) . '">' . '   ' . 'read&nbsp;more <small><b>>></b></small></a></div></li>';
			
			if ($switch == "even"){
					$switch = "odd";
						} else {
					$switch = "even";
				}
			}
echo "</ul>";
echo "</div>";	
echo "</div>";
require_once('footer.php');

?>