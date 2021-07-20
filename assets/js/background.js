
defaultFilters = [
    "*://*.inspiredot.net/*",
    "*://*.zedo.com/*",
    "*://*.Bidgear.com/*",
    "*://*.sportspotters.com/*",
    "*://*.cloudvideosa.com/*",
    "*://*.wedgeenclosed.com/*",
    "*://*.welcomeadnepal.com/*",
    "*://*.yinyangsearch.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details){return {cancel:true}},
    {urls:defaultFilters},
    ["blocking"]
)
