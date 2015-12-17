(function(window, undefined) {
  var dictionary = {
    "cadcdbd5-d639-4865-b840-0c142b724760": "Menu screen",
    "eb1f9ccc-75bc-428f-bb55-6947f890d024": "Menu screen2",
    "12f95033-51c0-4a0b-bb64-c80c715ca252": "Error screen",
    "aea2b918-1626-47cc-a6e1-d0a7bb299fc9": "DenunciaNew screen",
    "f9124979-4710-42e8-b8e8-33532527b15f": "DenunciaView screen",
    "1432c19d-c891-4d09-9d9e-a0e9b91f9494": "login screen",
    "8a4897e9-b064-4cfa-b08e-6f61f2d8ba02": "Splash screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);