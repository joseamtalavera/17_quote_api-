/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/script.js":
/*!**************************!*\
  !*** ./public/script.js ***!
  \**************************/
/***/ (() => {

eval("const fetchAllButton = document.getElementById('fetch-quotes');\nconst fetchRandomButton = document.getElementById('fetch-random');\nconst fetchByAuthorButton = document.getElementById('fetch-by-author');\n\nconst quoteContainer = document.getElementById('quote-container');\nconst quoteText = document.querySelector('.quote');\nconst attributionText = document.querySelector('.attribution');\n\n\n\n\n\nconst resetQuotes = () => {\n  quoteContainer.innerHTML = '';\n}\n\n\n\n\nconst renderError = response => {\n  quoteContainer.innerHTML = `<p>Your request returned an error from the server: </p>\n<p>Code: ${response.status}</p>\n<p>${response.statusText}</p>`;\n}\n\n\n\n\nconst renderQuotes = (quotes = []) => {\n  resetQuotes();\n  if (quotes.length > 0) {\n    //console.log('Quote to display:', quotes[0]);\n    quotes.forEach(quote => {\n\n\n      //console.log('Rendering quote:', quote);\n\n      const newQuote = document.createElement('div');\n      newQuote.className = 'single-quote';\n      newQuote.innerHTML = `<div class=\"quote-text\">${quote.quote}</div>\n      <div class=\"attribution\">- ${quote.person}</div>`;\n      quoteContainer.appendChild(newQuote);\n\n      //console.log('Quote append to container:', newQuote);\n\n    });\n  } else {\n    quoteContainer.innerHTML = '<p>Your request returned no quotes.</p>';\n  }\n}\n\n\n\n\nfetchAllButton.addEventListener('click', () => {\n  fetch('/api/quotes')\n  .then(response => {\n    if (response.ok) {\n      return response.json();\n    } else {\n      renderError(response);\n    }\n  })\n  .then(response => {\n    renderQuotes(response.quotes);\n  });\n});\n\nfetchRandomButton.addEventListener('click', () => {\n  \n  fetch('/api/quotes/random')\n  .then(response => {\n    if (response.ok) {\n      return response.json();\n    } else {\n      renderError(response);\n    }\n  })\n  .then(response => {\n    //console.log('Response from server:', response);\n    renderQuotes([response]); //herer we modify response.quote to response and it works!\n    //console.log('Quote displayed', response.quote);\n  });\n});\n\n\n\n\nfetchByAuthorButton.addEventListener('click', () => {\n  const author = document.getElementById('author').value;\n  fetch(`/api/quotes?person=${author}`)\n  .then(response => {\n    if (response.ok) {\n      return response.json();\n    } else {\n      renderError(response);\n    }\n  })\n  .then(response => {\n    renderQuotes(response.quotes);\n  });\n});\n\n\n//# sourceURL=webpack://quote-api/./public/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/script.js"]();
/******/ 	
/******/ })()
;