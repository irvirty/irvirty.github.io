// Search v.2.0.6

var lQButtonPrint = ``;

var geturl = location.href;
var url = new URL(geturl);
var q = url.searchParams.get("q");
var q2 = url.searchParams.get("q2");


//test delme if (q == null){ q = ""; }
if (q2 == null){ q2 = ""; }

var qPrint = "";

let sUrlText = String(url);
const myArray = sUrlText.split("q=");
sUrlText = myArray[0];

if (q != ''&&q != null&&q != undefined){
document.getElementById("q").value = q;
document.getElementsByTagName('title')[0].innerText = q + " - Search / keepirty - Neocities page";
}

if (q == ''&&q != 'null'){ q = ''; } // ?
//if (q2 == "l"){ q = q + " l"; }
if (q2 != ""){ q = q + " " + q2; }
//if (q == ""){ q = "q"; }

// web redirect
if (q != ""&&q != undefined&&q != "undefined"&&q != 'null'&&q != null&&sUrlText.indexOf("cache") == -1){


q = q.trim();

var urlList = [];

// for the command at the end of the search query
let qTmpNoPlus = q.replaceAll('%23', '+', ' ');
var strArray = qTmpNoPlus.split(" ");
var qCom = strArray[strArray.length - 1] + "#";
var q3 = q + "#";

switch (qCom) {

case 'l#':  case 'll#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.google.com/search?btnI=1&q=site:*.neocities.org " + q,
//"https://www.google.com/search?btnI=1&q=" + q,
//url = "https://you.com/search?q=!" + q;
//url = "https://duckduckgo.com/?q=! " + q;
];
if (q == ''){
urlList = [
"https://www.google.com/search?q=site:neocities.org",
//"https://www.google.com/search?btnI=1",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;

location.href = sRedirectUrl;
location.href = location.href + '#!StopRedirect'; 
break;


case 'goo#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.google.com/search?q=" + q + " site:neocities.org",
];
if (q == ''){
urlList = [
"https://www.google.com/search?q=site:neocities.org",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;

location.href = sRedirectUrl;
location.href = location.href + '#!StopRedirect';
break;


case 'bin#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.bing.com/search?q=" + q + " site:neocities.org&form=somesite",
];
if (q == ''){
urlList = [
"https://www.bing.com/search?q=site:neocities.org&form=somesite",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;

location.href = sRedirectUrl;
location.href = location.href + '#!StopRedirect';
break;


case 'sez#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://search.seznam.cz/?q=" + q + " site:neocities.org",
];
if (q == ''){
urlList = [
"https://search.seznam.cz/?q=site:neocities.org",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;

location.href = sRedirectUrl;
location.href = location.href + '#!StopRedirect';
break;


case 'mar#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://marginalia-search.com/search?query=" + q + " site:neocities.org",
];
if (q == ''){
urlList = [
"https://marginalia-search.com/search?query=site:neocities.org",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;

location.href = sRedirectUrl;
location.href = location.href + '#!StopRedirect';
break;


case 'moj#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.mojeek.com/search?q=" + q + " site:neocities.org",
];
if (q == ''){
urlList = [
"https://www.mojeek.com/search?q=site:neocities.org",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;

location.href = sRedirectUrl;
location.href = location.href + '#!StopRedirect';
break;


case 'glo#':
case 'q#':
case 'qq#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://www.google.com/search?q=" + q,
"https://www.bing.com/search?q=" + q + "&form=somesite",
//"?q=" + q + " o",
];
if (q == ''){
urlList = [
"https://www.google.com/",
"https://www.bing.com/",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;

location.href = sRedirectUrl;
location.href = location.href + '#!StopRedirect'; 
break;


case 'neo#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://neocities.org/browse/search?q=" + q,
];
if (q == ''){
urlList = [
"https://neocities.org/browse",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;

location.href = sRedirectUrl;
location.href = location.href + '#!StopRedirect'; 
break;

case 'qr#':
case 'rse#':
q = q3.replace(qCom, '');
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://neocities.org/browse/search?q=" + q,
"https://www.google.com/search?q=" + q + " site:neocities.org",
"https://www.bing.com/search?q=" + q + " site:neocities.org&&form=somesite",
//"https://marginalia-search.com/search?query=" + q + " site:neocities.org",
//"https://search.seznam.cz/?q=" + q + " site:neocities.org",
//"https://www.mojeek.com/search?q=" + q + " site:neocities.org",
];
if (q == ''){
urlList = [
//"https://neocities.org/browse/search",
"https://neocities.org/browse",
"https://www.google.com/search?q=site:neocities.org",
"https://www.bing.com/search?q=site:neocities.org&form=somesite",
//"https://marginalia-search.com/search?query=site:neocities.org",
//"https://search.seznam.cz/?q=site:neocities.org",
//"https://www.mojeek.com/search?q=site:neocities.org",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;

location.href = sRedirectUrl;
location.href = location.href + '#!StopRedirect'; 
break;


default:
/*q = q3.replace(qCom, '');*/
q = q.trim();
q = encodeURIComponent(q);

urlList = [
"https://neocities.org/browse/search?q=" + q,
"https://www.google.com/search?q=" + q + " site:neocities.org",
"https://www.bing.com/search?q=" + q + " site:neocities.org&form=somesite",
//"https://marginalia-search.com/search?query=" + q + " site:neocities.org",
//"https://search.seznam.cz/?q=" + q + " site:neocities.org",
];
if (q == ''){
urlList = [
//"https://neocities.org/browse/search",
"https://neocities.org/browse",
"https://www.google.com/search?q=site:neocities.org",
"https://www.bing.com/search?q=site:neocities.org&form=somesite",
"https://marginalia-search.com/search?query=site:neocities.org",
"https://search.seznam.cz/?q=site:neocities.org",
];
}
random = urlList[fuMRandom(0, urlList.length - 1)];
url = random;
sRedirectUrl = url;

location.href = sRedirectUrl;
location.href = location.href + '#!StopRedirect'; 

}

}



if (q != ""&&q != null){
qPrint = encodeURIComponent(q);
}



lQButtonPrint = `

<div class="wrapper tCenter small" style="margin-top: 7px;">
<div class="autoColumn notUnderline">
<!--<span class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op">Tag:</span>-->
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?tag=${qPrint}">Special</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=random&tag=${qPrint}">Random</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=most_followed&tag=${qPrint}">Followers</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=last_updated&tag=${qPrint}">Update</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=views&tag=${qPrint}">Views</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=tipping_enabled&tag=${qPrint}">Tipping</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=newest&tag=${qPrint}">New</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=oldest&tag=${qPrint}">Old</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/activity?tag=${qPrint}">Activity</a>
<!--<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/">Profile</a>-->
</div>
</div>

`;

document.getElementById("seachButtons").innerHTML = `${lQButtonPrint}`;


if (document.getElementById("q") != null){

const input = document.getElementById("q");
input.addEventListener("input", updateValueButton);

function updateValueButton(e) {

qPrint = e.target.value;
qPrint = qPrint.trim();
//q = q.replaceAll(' ', '');
//document.getElementById("q").value = qPrint.trim();

qPrint = encodeURIComponent(qPrint);

lQButtonPrint = `

<div class="wrapper tCenter small" style="margin-top: 7px;">
<div class="autoColumn notUnderline">
<!--<span class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op">Tag:</span>-->
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?tag=${qPrint}">Special</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=random&tag=${qPrint}">Random</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=most_followed&tag=${qPrint}">Followers</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=last_updated&tag=${qPrint}">Update</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=views&tag=${qPrint}">Views</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=tipping_enabled&tag=${qPrint}">Tipping</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=newest&tag=${qPrint}">New</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/browse?sort_by=oldest&tag=${qPrint}">Old</a>
<a class="autoColumnItem keepTag2 itemHeight light2 border3 borderRadius2 op" title="tag" href="https://neocities.org/activity?tag=${qPrint}">Activity</a>
</div>
</div>

`;

document.getElementById("seachButtons").innerHTML = `${lQButtonPrint}`;

}

}



// Google search result
/*if (q != ""&&q2 == "goo"){

// v.1.1.0

var script = document.createElement('script');
script.type='text/javascript';
script.async = true;
script.charset = 'utf-8';
script.src = 'https://cse.google.com/cse.js?cx=a3a8da84c5ed74909';      
document.getElementsByTagName('head')[0].appendChild(script);

fuMSetTheme('rand-l');
fuMBg("light");
}*/
// end Google search result

/*// to top form
if (conf["confDevice"] == 'mobile'){
if (document.getElementById('q') != null&&document.getElementById('form') != null){
var getclick2 = document.getElementById('q');
document.addEventListener('click', function(event) {
if (getclick2.contains(event.target)) {
//document.getElementById('topSearchWrapper').style.display = 'none';
document.getElementById('searchPage').classList.remove('contentCenter');
document.getElementById('searchPage').classList.add('content');
} else {
//document.getElementById('topSearchWrapper').style.display = 'block';
document.getElementById('searchPage').classList.remove('content');
document.getElementById('searchPage').classList.add('contentCenter');
}
});
}
}*/

/*if (String(location.href).indexOf("/search/") != -1){
fuMBg("light");
}*/


// hide top header if mobile
if (conf["confDevice"] == 'mobile'){
var getclick2 = document.getElementById('form');
if (getclick2 != null&&document.getElementById('topHeader') != null){
document.addEventListener('click', function(event) {
if (getclick2.contains(event.target)) {
document.getElementById('topHeader').style.display = 'none';
if (document.getElementById('searchPage') != null){
document.getElementById('searchPage').classList.remove("contentCenter");
}
} else {
document.getElementById('topHeader').style.display = 'block';
if (document.getElementById('searchPage') != null){
document.getElementById('searchPage').classList.add("contentCenter");
}
}
});
}
}
