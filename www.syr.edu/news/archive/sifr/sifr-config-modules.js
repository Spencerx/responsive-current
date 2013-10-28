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
        selector: '#module-container-lg h2'
        ,wmode: 'transparent'
	    ,css: [
            '.sIFR-root { color:#f47321;  }'
	    ]
    });
    

  sIFR.replace(sifr, {
        selector: '#module-container-sm h3:not(.h3-logo)'
        ,wmode: 'transparent'
	    ,css: [
            '.sIFR-root { color:#a62315;  }'
	    ]
    });