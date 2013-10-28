<?php
	require_once('header.php');
	require_once('connection.php');

	echo "<div class=\"lg-article\">";

/* google search as backup
echo <<<SEARCH
<form action="http://www.google.com/u/syracuse" class="search clearfix">
<fieldset>
<label class="hidden" for="search">search</label>
<input class="search-text" id="search" name="q" type="text" value=""/>
<input alt="search" class="btn-search" name="sa" " type="submit"/>
<input name="domains" type="hidden" value="www.syr.edu/sunews"/>
</fieldset>
</form>

SEARCH;
*/


echo <<<SEARCH
<h3>News Archive Search</h3>


<h4>Search for news stories published January 2000 &#151; August 2009</h4>
<form action="search.php" class="search clearfix">
	<fieldset>
	<label class="hidden" for="search">search</label>
	<input class="search-text" id="search" name="search" type="text" value=""/>
	<input alt="search" class="btn-search" name="submit"  src="/images/btn_search.gif" type="image"/>
	</fieldset>
</form>

<h4>Search for news stories published since September 2009</h4>
<form action="http://www.syr.edu/search/search-results.html" id="cse-search-box"  class="search clearfix">
	<fieldset>
		<input name="cx" value="000608849472313352920:jua3rrojyo8" type="hidden">
		<input name="cof" value="FORID:11" type="hidden">
		<input name="ie" value="UTF-8" type="hidden">
	
		<input class="search-text" id="search" name="q" type="text">

		<input class="btn-search" name="sa" src="/images/btn_search.gif" value="Search" type="image">
	  </fieldset>
	</form>

SEARCH;


echo "</div>";

	require_once('footer.php');
?>
