<?php
	
	// Convert date to more presentable format
	function dateTransform($date) {
			list($day, $month, $year) = split("-", $date);
			//convert month
			switch ($month) {
				case 'JAN':
					$month = '1';
					break;
				case 'FEB':
					$month = '2';
					break;
				case 'MAR':
					$month = '3';
					break;
				case 'APR':
					$month = '4';
					break;
				case 'MAY':
					$month = '5';
					break;
				case 'JUN':
					$month = '6';
					break;
				case 'JUL':
					$month = '7';
					break;
				case 'AUG':
					$month = '8';
					break;
				case 'SEP':
					$month = '9';
					break;
				case 'OCT':
					$month = '10';
					break;
				case 'NOV':
					$month = '11';
					break;
				case 'DEC':
					$month = '12';
					break;
					default:
					$month = '1';
					break;
				}	
    		return $date = date('F d, Y', mktime(0, 0, 0, $month, $day, $year));
	}

/* $v is validation routine
  empty means no validation (default) */
function sanitize($s, $v = '') {
  if( isset( $_GET[$s] ) ) {
    switch($v) {
      case 'email':
        // check if it's a real email
      break;
      default:
        return stripslashes( $_GET[$s] );
      break;
    }
  } else if( isset( $_POST[$s] ) ) {
    switch($v) {
      case 'email':
        // check if it's a real email
      break;
      default:
        return stripslashes( $_POST[$s] );
      break;
    }
  } else {
    return '';
  }
}



?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>S.U. NEWS</title>
<meta name="description" content="" />
<meta name="keywords" content="" />
<meta name="robots" content="noindex, follow" />
<link rel="stylesheet" type="text/css" href="css/reset.css" media="screen" />
<link rel="stylesheet" type="text/css" href="/css/global.css" media="screen" />
<link rel="stylesheet" type="text/css" href="css/modules.css" media="screen" />
<link rel="stylesheet" type="text/css" href="css/templates.css" media="screen" />
<!--all sifr files
<script src="sifr/sifr.js" type="text/javascript"></script>
<script src="sifr/sifr-config.js" type="text/javascript"></script>
<link rel="stylesheet" href="sifr/sIFR-screen.css" type="text/css" media="screen" />
<link rel="stylesheet" href="sifr/sIFR-print.css" type="text/css" media="print" />  -->
<!--conditional compilation for IE -->
<!--[if IE 7.0]><link href="css/patch/ie7.css" type="text/css" media="screen" rel="stylesheet" /><![endif]-->
<!--[if IE 6.0]><link href="css/patch/ie6.css" type="text/css" media="screen" rel="stylesheet" /><![endif]-->
<link rel="stylesheet" type="text/css" href="css/patch/safari.css" media="screen" />
<link rel="stylesheet" href="css/print.css" type="text/css" media="print" />

<script type="text/javascript" src="js/jquery-1.2.6.js"></script>
<script type="text/javascript" src="js/ui.core.js"></script><!--for tabs; dependency -->
<script type="text/javascript" src="js/ui.tabs.js"></script><!--for tabs -->
<script type="text/javascript">
            //for tabs to change on mouseover
			$(function() {
                $('#tab-container-over > ul#switch').tabs({ event: 'mouseover', fx: { opacity: 'toggle' }}) ;     
            });
</script>

</head>
<body>
<div id="container-header">
<h1 id="logo"><a href="../index.html" shape="rect">Syracuse University</a></h1>
	<div id="header">
        <div id="bg-top"></div>

           
<div id="utilitynav">
<ul class="nav-utility"> 
    <li><a href="../directories/index.html">Directories</a></li>
    <li><a href="http://myslice.syr.edu/" target="new">MySlice</a></li>
    <li class="last"><a href="../contact/index.html">Contact</a></li>
</ul>
</div>

        <div id="searchbox">
<form action="http://www.syr.edu/search/search-results.html" class="search clearfix" id="cse-search-box">

  <fieldset>
    <input name="cx" type="hidden" value="000608849472313352920:dzkn5vu9mty"/>
    <input name="cof" type="hidden" value="FORID:11"/>
    <input name="ie" type="hidden" value="UTF-8"/>
    <input class="search-text" id="search" name="q" onClick="this.value=''" size="25" type="text" value="Search"/>
    <input class="btn-search" name="sa" src="images/btn_search.gif" type="image" value="Search"/>
  </fieldset>
</form>
<div id="searchoptions">
<ul>

<li><a href="http://suds.syr.edu/suds/suds.pl">People Search</a></li>
<li><a href="../search/index.html">Advanced</a></li>
</ul>
</div>
</div>

<!-- <div id="container-header">
	<a href=""><img src="images/logo-with-seal.png" alt="SYRACUSE UNIVERSITY" width="310" height="94" border="0" id="logo"/></a>
    <img id="print-logo" src="images/print-logo.jpg" alt="SYRACUSE UNIVERSITY" width="421" height="56" border="0" />
	<div id="header" class="dark">
    	<div id="bg-top"></div>        
        <ul class="nav-utility">
            <li></li>
        </ul>
        <div id="searchbox">
<form action="http://www.syr.edu/search/search-results.html" class="search clearfix" id="cse-search-box">
  <fieldset>

    <input name="cx" type="hidden" value="000608849472313352920:dzkn5vu9mty"/>
    <input name="cof" type="hidden" value="FORID:11"/>
    <input name="ie" type="hidden" value="UTF-8"/>
    <input class="search-text" id="search" name="q" onClick="this.value=''" size="25" type="text" value="Search"/>
    <input class="btn-search" name="sa" src="images/btn_search.gif" type="image" value="Search"/>
  </fieldset>
</form>
<div id="searchoptions">
<ul>
<li><a href="http://suds.syr.edu/suds/suds.pl">People Search</a></li>

<li><a href="search/index.html">Advanced</a></li>
</ul>
</div>
</div>

<form action="search.php" class="search clearfix" method="get">
<fieldset>
<label class="hidden" for="search">search</label>
<input class="search-text" id="search" name="search" type="text" value=""/>
<input type="image" src="images/btn_search.gif" width="25" class="btn-search" name="submit" />
</fieldset>
</form> -->
        <div class="nav-topical-box">
			<!-- nav-topical starts here -->
			<ul id="nav-topical">
				<li><a href="http://syr.edu/news">SU News Home</a></li>
				<li><a href="index.php">SU News Archive Home</a></li>

			</ul>
			<!-- nav-topical ends here -->
		</div>
	</div><!-- header ends here -->
</div><!-- container-header ends here -->
	
<div id="container"> 
    <div id="col-container" class="with-sub">		
		<div id="col-tertiary">
			<div class="nav-audience">
				<ul>
					<li><a href="/news/about/news-contacts-2.html">About SU News</a></li>
					<li><a href="http://suevents.syr.edu" target="new" title="Calendar: SU Events">Calendar</a></li>
					<li><a href="/news/about/media.html">For the Media</a></li>
				</ul>
			</div>
            
            <?php
			$callingURL = $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'];
			if ($callingURL != ('syr.edu/news/archives/search-form.php' ||  'www.syr.edu/news/archives/search-form.php')) {
			?>
            <div class="sm-textImageVert">
            <h3>Search News</h3>
            <form action="http://www.syr.edu/search/search-results.html" id="cse-search-box">
              <fieldset>
                <input name="cx" value="000608849472313352920:jua3rrojyo8" type="hidden">
                <input name="cof" value="FORID:11" type="hidden">
                <input name="ie" value="UTF-8" type="hidden">
            
                <input class="search-text" id="search" name="q" type="text">
                <input class="btn-search" name="sa" src="../images/btn_search.gif" value="Search" type="image">
              </fieldset>
            </form>
            </div>
            <?php
			}
			?>
            
        </div>	
<!-- /col-tertiary -->
	
		<div id="col-main">

          
            <div class="pageTitle">SU News Archive</div>  

<br />
<br />      