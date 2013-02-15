//document.getElementById('output').innerHTML = 'hello';

var rets = [];

function calc(arr) {
 //console.log('arr: ' + arr.length, arr);
 arr.forEach(function(json) {
   if(!json.url) {
       calc(json.children, calc);
       return;
   }
   var domain = calcDomain(json.url);
   if(rets.indexOf(domain) === -1) {
     rets.push(domain);
     console.log(domain);
   }

   //chrome.bookma
  });
}

chrome.bookmarks.getTree(calc);

function calcDomain(url) {
   return url.substring(7, url.indexOf('/', 7));
}







