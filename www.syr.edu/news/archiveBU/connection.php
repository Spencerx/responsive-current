<?php
/**
 * @author Greg Milby gcmilby@syr.edu
 * @copyright 2008
 */
	$user='syr_sunews_web2';
	$pass='go_sunews2';
	$db='DB50093';
	$conn = ora_plogon($user.'@'.$db, $pass) or die ('error'.ora_error());
	$v_open = ora_open($conn) or die ('Could not connect.'.ora_error());
?>
