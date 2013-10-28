<?php
/**
 *
 */
	
	require_once('connection.php');
	
	$v_open = ora_open($conn) or die ('Could not connect.'.ora_error());
	$v_parse = ora_Parse($v_open, "SELECT * FROM TBLNEWS ORDER BY substr(TBLNEWS.RELEASEDATE, -2, 2) DESC") or die ('select '.ora_error());
	$v_execute = ora_Exec($v_open) or die ('Execution not made.'.ora_error());	

	$curYear = '';
	$curMonth = '';

	while(Ora_Fetch($v_open)){

		$string = ora_getcolumn($v_open, 5);

		$Ystring = substr($string, 7, 2);

		if ($Ystring != $curYear){
			
			echo '<h3>20' . $Ystring . '</h3>';
			
			$curYear = $Ystring;	
			
			$arr = array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	
			$ct = 0;
						
			foreach ($arr as $value){
 				
				$ct++;
 				
				// limit the month display if greater than August 2009 (no archives beyond that date.
				if (!(($Ystring == "09") && ( $ct > 8))) { 
					
					// only print out the bar after the first item.
					if ($ct > 1) {
						echo ' | ';
					}
					
					echo '<a href="stories-brief.php?month=' . $value . '&year=' . $Ystring . '">' . $value . '</a>';					
				}
			}
			echo '<br /><br />';

		}
	}



?>