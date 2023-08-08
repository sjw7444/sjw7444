// ==UserScript==
// @name         Trello for using as an application styles by Jim
// @version      0.1
// @description  Remove various UI elements for using Trello as a Chrome app (Headers, epxanding side bar, add list)
// @author       Jim Woodroffe, jim.woodroffe@datadoghq.com
// @match        https://trello.com/*
// ==/UserScript==
var css = `
/* Very top black header */
.pr1necVvi4UYAj {display: none !important;}

/* Secondardy header */
.board-header {display: none !important;}

/* Circle button top left */
.L5RRw8qEMnGPLO {display: none !important;}

/* Left side bar */
.pCEkBQkauR_BfD, .oiarmSAgGVRpKl {display: none !important;}

/* Add List option */
.js-add-list {display: none !important;}
`;


insertCss(css);


function insertCss( code ) {
    var style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {
        // IE
        style.styleSheet.cssText = code;
    } else {
        // Other browsers
        style.innerHTML = code;
    }

    document.getElementsByTagName("head")[0].appendChild( style );
}
