 parseSelector.pseudoClasses = {
  'not': function(nodes, selector) {
    var result = [];
    each: for(var i = 0, node; i < nodes.length; i++) {
      node = nodes[i];
      var ignore = parseSelector(selector, node.parentNode);
      for(var j = 0; j < ignore.length; j++) {
        if(ignore[j] == node) continue each;
      }
      result.push(node);
    }
    return result;
  }
}
 
  var sifr = {
    src: '/sifr/sifr.swf'
    
  };

  sIFR.activate(sifr);

  sIFR.replace(sifr, {
        selector: '#col-container-large h2, #col-container-medium h2, #col-container-small h2, #col-container h2, .lg-article h1, .sample-form h3'
        ,wmode: 'transparent'
	    ,css: [
            '.sIFR-root { color:#f47321;  }'
	    ]
    });
    

  sIFR.replace(sifr, {
        selector: '#col-container-large h3:not(.h3-logo, .featured-event-callout h3), #col-container-medium h3:not(.h3-logo, .featured-event-callout h3), #col-container-small h3:not(.h3-logo, .featured-event-callout h3), #col-container h3:not(.h3-logo, .featured-event-callout h3)'
        ,wmode: 'transparent'
	    ,css: [
            '.sIFR-root { color:#a62315;  }'
	    ]
    });
    
sIFR.replace(sifr, {
        selector: '.search-results div.pageTitle'
        ,wmode: 'transparent'
	    ,css: [
            '.sIFR-root { color:#f47321; text-transform:uppercase; }'
	    ]
    });
    
sIFR.replace(sifr, {
        selector: 'div.pageTitle'
        ,wmode: 'transparent'
	    ,css: [
            '.sIFR-root { color:#A62315; text-transform:uppercase; }'
	    ]
    });
    
