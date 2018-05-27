const postcss = require('postcss');
const skins = require('skins');

module.exports = postcss.plugin('revolutionize', function revolutionize(options) {
  return function (css) {
    options = options || {};
    const theme = options.theme;
    
    css.walkRules(function (rule) {
      // a rule has been encountered
      // get all keys from the conf object
      Object.keys(options.selectors).forEach(type=>{
        // get replacement configuration data
        const selectors = options.selectors[type];
        if(selectors) selectors.forEach(selector=>{
          
          // if the selectors are the same, load the properties needing to be injected into this rule
          if(rule.selector == selector){  
            try {
              
              // grab rules from a specified skin for the selector defined by Object.keys(options.selectors).
              const response = skins({theme, type});
              // append the properties found under the rule in the theme being injected.
              rule.append(response);
              
            } catch(err){
              console.log(err)
            }
            
          } // if rule matches selector
          
        }) // for each selector
      }) // all keys in options.selectors
    }); // walk rules
    
  }
});
