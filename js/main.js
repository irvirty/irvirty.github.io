// Main.js v.1.3.4

if (confD == undefined) { var confD = "/"; }

// Settings, config
var conf = [];

conf["confGoogleAnalyticsId"] = "G-RQJTJG7DF9";
conf["confUsername"] = "irvirty"; // only in some places
conf["confWebsiteUrl"] = "irvirty.github.io";

conf["confCookieDesc"] = `
- This is necessary to improve the site. (for ads services, statistics).
- Auto: Browser settings are used.
- Site used Functionality cookies.
- Some services still collect visit information if cookie off.

- Other:
<a class="brand inlineBlock padding" target="blank" href="https://www.google.com/policies/privacy/partners/">Google's Privacy & Terms</a>
<a class="brand inlineBlock padding" target="blank" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement#our-use-of-cookies-and-tracking-technologies">GitHub General Privacy Statement</a>
`;

conf["confCookieDescPopup"] = `
Other:
<a class="brand inlineBlock padding" target="blank" href="https://www.google.com/policies/privacy/partners/">Google's Privacy & Terms</a>
<a class="brand inlineBlock padding" target="blank" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement#our-use-of-cookies-and-tracking-technologies">GitHub General Privacy Statement</a>
`;


// wrapper size for navigation, number in px from your CSS
conf["confWrapperNavWidth"] = 900;
conf["confMenuItemAverageWidth"] = 120;
conf["confMenuItemAverageWidth"] = 70;

conf["confDomainNameInTitleStatus"] = "off"; // on, off
conf["confDomainName"] = String((location.hostname).split('.')[0]);
if (conf["confDomainName"][0] != undefined){
conf["confDomainName"] = conf["confDomainName"][0].toUpperCase() + conf["confDomainName"].slice(1);
} else { conf["confDomainName"] = ''; }
conf["confDomainNameInTitle"] = ' / ' + conf["confDomainName"];


//IndexedDB, DB list for clear (comma)
conf["confDbList"] = "example-todo-db";

conf["confSymbolForSplit"] = "SYMBOLFORSPLIT";
conf["confTagListLimit"] = 38;
conf["confLinkExtList"] = "index.html,.html,index.php,.php";
conf["confIdEmbedScript"] = "footer";

if (fuMComVar == undefined){ var fuMComVar = ""; }

var confData = [
{
"confTitle":"Allow Cookies For Third Parties?",
"confDescription":`${conf["confCookieDesc"]}`,
"confName":"confDataCollection",
"confValueDefault":"not selected",
"confValueVariant":["on", "off", "auto", "not selected"],
},
{
"confTitle":"Background picture",
"confDescription":"Background picture.",
"confName":"confBg",
"confValueDefault":"on",
"confValueVariant":["on", "off"],
},
];

// generate var: conf['confName'];
confData.forEach((val) => {
conf[val.confName] = localStorage.getItem(val.confName);

if (conf[val.confName] == null||conf[val.confName] == undefined){
localStorage.setItem(val.confName, val.confValueDefault);
conf[val.confName] = val.confValueDefault; 
}

});
// generate var: conf['confName'];



// Device 1.0.0
conf["confDevice"] = 'none';
/*if (conf["confDataCollection"] != 'on'){
conf["confDevice"] = '(disabled, privacy)';
} else {}*/
if (navigator.userAgent.search("iPhone|Android|Mobile|Lumia|Phone") != -1){ conf["confDevice"] = 'mobile';  }
if (navigator.userAgent.search("PlayStation|Xbox|TV|Roku|SmartTV|BRAVIA") != -1){ conf["confDevice"] = 'tv';  }
if (conf["confDevice"] == 'none'){ conf["confDevice"] = 'pc'; }


conf["confPrivacyLinks"] = `

<a class="brand inlineBlock padding" target="blank" href="https://www.google.com/policies/privacy/partners/">Google's Privacy & Terms</a><br>
<a class="brand inlineBlock padding" target="blank" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement#our-use-of-cookies-and-tracking-technologies">GitHub General Privacy Statement</a><br>
`;


// fu sorting v.1.0.0
function fuMSort(textOrArr, delimiter, mode){
//https://stackoverflow.com/questions/2802341/natural-sort-of-alphanumerical-strings-in-javascript
var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
//return textOrArr.sort(collator.compare);

if (mode == 'text'){
let result = textOrArr.split(delimiter);
result.sort(collator.compare)
return result.join(delimiter);
}

if (mode == 'arr'){
var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
return textOrArr.sort(collator.compare);
}

}
//alert(fuMSort(["772", " 3",  "6",  "7", "77"], "", "arr"));


// domain name in titile
if (conf["confDomainNameInTitleStatus"] == 'on'&&String(window.location.pathname) != "/"){
if (document.getElementsByTagName('title')[0] != null){
document.getElementsByTagName('title')[0].innerHTML += conf["confDomainNameInTitle"];
}
}

// css theme fix if save page
if (String(window.location.href).slice(0, 4) != 'http'){
document.getElementById('theme').id = 'themeDisable';
}


// Navigation JS part v.2.3.0

if (conf === undefined){
var conf = [];
// wrapper size for navigation, number in px from your CSS
conf["confWrapperNavWidth"] = 900;
conf["confMenuItemAverageWidth"] = 120;
}

// count links
//var countMenuItem = document.querySelectorAll('.countMenuItem');
if (document.getElementById("topNav") != null){
//var countMenuItem = document.querySelectorAll('.countMenuItem');
var countMenuItem = document.getElementById("topNav").querySelectorAll('a');
} else {
var countMenuItem = 2;
}
if (document.getElementsByTagName("nav")[0] != null){

var mNavItemsAverageWidth = conf["confMenuItemAverageWidth"];
// Average item width: 66px
//var mNavItemsCount = (countMenuItem.length / 2);
var mNavItemsCount = ((countMenuItem.length + 2) / 2);
// /2 - dublicate items (links)
var mNavWhenDropdownWidth = (mNavItemsAverageWidth * mNavItemsCount) / 2;
// /2 - for 2 rows links
// auto based on item
var cssMedia = `@media(width <= ${mNavWhenDropdownWidth}px)`;
var cssMedia2 = `@media(width > ${mNavWhenDropdownWidth}px)`;

// if nav (items) more width then wrapper (forece dropdown)
if ((mNavWhenDropdownWidth) >= conf["confWrapperNavWidth"]){
cssMedia = '@media(width >= 1px)';
// cancel
cssMedia2 = `@media(width <= 0px)`; 
}

// embed style
//document.getElementsByTagName("nav")[0].innerHTML += `
document.head.insertAdjacentHTML("beforeend", `

<style>
${cssMedia} {
.navMenu {
display: none;
}
.topNav .dropdownMenuButton { display: inline-block; }
}

/* when dynamic change*/
${cssMedia2} {
.dropdownMenu, .dropdownMenuCotent, .showDropdownMenu {
display: none !important;
}
}
</style>

`);

}

// button
var dropdownButton = document.getElementById("dropdownMenuButton");
var dropdownMenu = document.getElementById("dropdownMenu");
var topNav = document.getElementById("topNav");

//https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/
if (topNav != undefined&&topNav.querySelectorAll("a")[0] != undefined){
let topNavAllLinks = topNav.querySelectorAll("a");
topNavAllLinks.forEach((item, index) => {
topNav.querySelectorAll("a")[index].tabIndex = 0;
});
}

function fuMDropdownButton(){
//https://stackoverflow.com/questions/64487640/javascript-show-hide-div-onclick
if (dropdownMenu.style.display === "block"){
dropdownMenu.style.display = "none";
if (dropdownButton != null){
dropdownButton.innerHTML = `☰ Menu`;
}
} else {
dropdownMenu.style.display = "block";
if (dropdownButton != null){
dropdownButton.innerHTML = `☶ Menu`;

//https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/
if (dropdownMenu.querySelectorAll("a")[0] != undefined){
let dropdownMenuAllLinks = dropdownMenu.querySelectorAll("a");
dropdownMenuAllLinks.forEach((item, index) => {
if (index == 0){
dropdownMenu.querySelectorAll("a")[index].tabIndex = 0;
dropdownMenu.querySelectorAll("a")[index].focus();
} else {
dropdownMenu.querySelectorAll("a")[index].tabIndex = 0;
}
});
}

//https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
topNav.addEventListener("keydown", fuMDropdownButtonLogKey);
function fuMDropdownButtonLogKey(e) {
//console.log(`${e.code}`);
if (e.code == "Escape"){
dropdownMenu.style.display = "none";
if (dropdownButton != null){
dropdownButton.innerHTML = `☰ Menu`;
}
dropdownButton.tabIndex = 0;
dropdownButton.focus();
}

}

}

//https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
//dropdownMenu.classList.toggle("showDropdownMenu");
}
}

if (topNav != null){
// out area click
//https://stackoverflow.com/questions/36695438/detect-click-outside-div-using-javascript
window.addEventListener('click', function(e){
dropdownMenu = document.getElementById("dropdownMenu");
if (topNav.contains(e.target) == true){
// Clicked in box
} else {
dropdownMenu.style.display = "none";
//dropdownMenu.classList.remove("showDropdownMenu");
if (dropdownButton != null){
dropdownButton.innerHTML = `☰ Menu`;
}
}
});
}

function fuMDropdownButtonClose(){
dropdownMenu.style.display = "none";
//dropdownMenu.classList.remove("showDropdownMenu");
if (dropdownButton != null){
dropdownButton.innerHTML = `☰ Menu`;
dropdownButton.tabIndex = 0;
dropdownButton.focus();
}
}

// end Navigation JS part


// footer

var fDesc = '';
var fDescTitle = '';
var fDescTags = '';
var fDescTagsLimit = 17;
var fDescLength = '';
if (document.getElementsByName("keywords")[0] != null){
fDescTags = document.getElementsByName("keywords")[0].content;
fDescTags = fDescTags.replaceAll("\n", " ");
fDescTags = fDescTags.replaceAll("\r", " ");
fDescTags = fDescTags.replaceAll("\r\n", " ");
fDescTags = fDescTags.replaceAll("\n\r", " ");

var fDescArr = fDescTags.split(",");
fDescArr = fuMSort(fDescArr, "", "arr");
fDescTags = '';
var fDescTagsLimitCounter = 0;
fDescArr.forEach((tag) => {
if ((tag.trim()) != ''&&fDescTagsLimitCounter <= fDescTagsLimit){
tag = tag.trim();
tag = tag.replaceAll(" ", "_");
fDescTags += `<a class="inlineBlock padding brand light border2 borderRadius2" href="/search/?tag=${tag}">#${tag}</a> `;
}
fDescTagsLimitCounter++;
});
if (fDescTagsLimit < fDescTagsLimitCounter){
fDescTags += `<div class="inlineBlock padding">...</div>`;
}

fDescTags = `
<br><b class="block padding2List small">Tags (keywords):</b><div class="irvTagList small left">` + fDescTags + '</div>';
}

fDescTags = ""; // disabled

if (document.getElementsByName("description")[0] != null){
fDescLength = document.getElementsByName("description")[0].content.length;
fDesc = `<b class="block padding2List small">Description or summary:</b>` + document.getElementsByName("description")[0].content.trim() + fDescTags;

if (fDescLength > 160){
fDescTitle = `<span class="inlineBlock borderBottomRed xSmall">Description: ${fDescLength} of 160</span>`;
} else if (fDescLength < 25){
fDescTitle = `<span class="inlineBlock borderBottomOrange xSmall">Description: <span class="xSmall">${fDescLength} of 160</span>`;
} else {
fDescTitle = `<span class="inlineBlock xSmall">Description: <span class="xSmall">${fDescLength} of 160</span>`;
}
}

if (document.getElementById("footer") != null){
document.getElementById("footer").innerHTML = `

<div class="padding2 margin2"></div>

<div id="cookiePopup"></div>

<div id="ads2"></div>
<div class="padding"></div>

<nav>
<div class="margin2List small tCenter">

<div class="wrapper2">

<!--
<div class="wrapperSmall right">
<details class="op">
<div id="fDesc" class="block pre tLeft padding2 bg shadow light borderRadius2 margin2List w100" style="margin-left: 0; margin-right: 0;">${fDesc}</div>
<summary class="pointer paddingList marginList brand" title="Description and keywords">${fDescTitle}</summary>
</details>
</div>


<div class="small tLeft">
<span class="gray">nav:</span> <span id="footerNav"></span><hr>
</div>

</div>

<div>
<span class="capitalize brand" title="Theme settings"><a id="fTheme" class="inlineBlock padding brand" href="${confD}pages/themes/">Themes</a></span>
<span id="fEmbedFileUrl"></span>
<span id="fPinButton"></span>
</div>
-->

<a class="brand inlineBlock padding" title="About" href="${confD}pages/about/" style="padding-left: 0;">About</a>

<a class="brand inlineBlock padding" title="Social" href="https://bsky.app/profile/${conf["confUsername"]}.pages.dev">Bluesky</a>

<a class="brand inlineBlock padding" title="Source code (repository)" href="https://github.com/${conf["confUsername"]}/${conf["confWebsiteUrl"]}">Source Code</a>
<!--<a id="fSettings" class="brand inlineBlock padding2" title="Settings" href="${confD}pages/settings/">Settings</a>-->

<span class="gray inlineBlock padding" style="padding-right: 0;">License:</span>
<a class="brand inlineBlock padding" rel="license" title="Main license" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
 
<a id="fPrivacy" class="brand inlineBlock padding" title="Cookie Settings" href="${confD}pages/settings/#confDataCollection">Cookie: ${conf["confDataCollection"]}</a>

<span class="op inlineBlock padding gray" title="update"><!--2024-->2025</span>

<span class="gray inlineBlock padding" style="padding-right: 0;">Powered by </span> <a class="brand inlineBlock padding" style="padding-right: 0;"  href="https://pages.github.com/">GitHub Pages</a>

</div>
</nav>

<!-- First created: 2025 -->

`;
}

 let mFooterNavLinksPrint = `<a class="brand" href="/" title="Home page">home</a> `;
 let mFooterNavLinksUrl = "";
 let mFooterNavLinks = location.href; 
//https://stackoverflow.com/questions/2540969/remove-querystring-from-url
mFooterNavLinks = mFooterNavLinks.split(/[?#]/)[0];
mFooterNavLinks = mFooterNavLinks.split('//');
mFooterNavLinks = mFooterNavLinks[1].split('/');

mFooterNavLinks.forEach((mFooterNavLinksItem, mFooterNavLinksIndex) => {
mFooterNavLinks[0] = "";
if (mFooterNavLinks[mFooterNavLinksIndex] != ""){
mFooterNavLinksUrl += `/` + mFooterNavLinks[mFooterNavLinksIndex];

mFooterNavLinksPrint += ` <span class="gray">/</span> <a class="brand" href="${mFooterNavLinksUrl}">${mFooterNavLinks[mFooterNavLinksIndex]}</a>`;
}
});

if (document.getElementById("footerNav") != null){
document.getElementById("footerNav").innerHTML = mFooterNavLinksPrint;
}
if(fuMComVar.indexOf('footer off') != -1){ document.getElementById("footer").innerHTML = ""; }
// end footer




function fuMReload(){ location.reload(true); }


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function fuMRandom(min, max){
//return Math.round(Math.random() * (max - min) + min);
const minCeiled = Math.ceil(min);
const maxFloored = Math.floor(max);
return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function fuMRandomItem(text) {
let randomItemsArrList = [];
let delimiter = ["|", ",", " ", "\r\n", "\r", "\n"];
let items = ""
delimiter.forEach((val) => {
text = String(text.replaceAll(val, "SYMBOLFORSPLIT"));
});

text = text.split("SYMBOLFORSPLIT");
let text2 = "";
text.forEach((val) => {
if (val.trim != ''&&val != undefined&&val != null){
randomItemsArrList.push(val);
}
});

return randomItemsArrList[fuMRandom(0, Number(randomItemsArrList.length - 1))];
}
//console.table(fuMRandomItem(",,,,1 2      ,,,"));



function fuMRandomItem(text){
let randomItemsArrList = [];
let delimiter = ["|", ",", " ", "\r\n", "\r", "\n"];
let items = "";
delimiter.forEach((val) => {
text = String(text.replaceAll(val, "SYMBOLFORSPLIT"));
});

text = text.split("SYMBOLFORSPLIT");
let text2 = "";
text.forEach((val) => {
if (val.trim != ''&&val != undefined&&val != null){
randomItemsArrList.push(val);
}
});

return randomItemsArrList[fuMRandom(0, Number(randomItemsArrList.length - 1))];
}
//console.table(fuMRandomItem(",,,,1 2      ,,,"));



function fuMSplit(text, delimiter){
if (delimiter == null||delimiter == ""){
delimiter = ["|", ",", " ", "\r\n", "\r", "\n"];
} else {
delimiter = [delimiter];
}
delimiter.forEach((val) => {
text = String(text.replaceAll(val, "SYMBOLFORSPLIT"));
});
return text = text.split("SYMBOLFORSPLIT");
}




// CSS
// random bg image (background img with random position)

// fix bg
if (conf["confThemeEmbed"] == undefined){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confThemeEmbed"] = "dark";
}
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
conf["confThemeEmbed"] = "light";
}
}

function fuMBg(com, bgImage){
if (conf["confBg"] == "on"){

bgImage = fuMClearText(bgImage);

if (bgImage == undefined||bgImage == null||bgImage == ""){
let mBg = fuMRandomItem("circle.svg line-chaotic.svg deco-paper.svg wood.png grid.png flower.png flower-2.png");
let mBgDark = fuMRandomItem("circle-d.svg line-chaotic-d.svg deco-paper-d.svg wood-d.png grid-d.png flower-d.png flower-2-d.png");
let mRandBgPos = fuMRandom(0, 100);
let mRandBgPos2 = fuMRandom(0, 100);
if (conf["confThemeEmbed"] == 'light'||com == "light"){
document.head.insertAdjacentHTML("beforeend", `
<style>
/*.reduceLight { filter: brightness(100%); }*/
body{
background-image: url("${confD}img/bg/${mBg}");
background-repeat: repeat;
background-position: ${mRandBgPos}% ${mRandBgPos2}%;
background-attachment: fixed;
}
</style>
`);
} else {
document.head.insertAdjacentHTML("beforeend", `
<style>
/*.reduceLight { filter:brightness(70%); }*/
body{
background-image: url("${confD}img/bg/${mBgDark}");
background-repeat: repeat;
background-position: ${mRandBgPos}% ${mRandBgPos2}%;
background-attachment: fixed;
}
</style>
`);
}
} else {
let reduceBgLight = "";
if (conf["confThemeEmbed"] == 'dark'||com == "dark"){
reduceBgLight = "filter:brightness(60%);";
}
document.head.insertAdjacentHTML("beforeend", `
<style>
body::before {
content: "";
display: block;
position: fixed;
top: 0;
left: 0;
z-index: -1;
overflow: hidden;

width: 100%;
height: 100%;
margin: 0;
padding: 0;
box-sizing: border-box;
${reduceBgLight}
}

body::before {
background-image: url("${bgImage}");
background-attachment: fixed;
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
opacity: .06;
}
</style>
`);
}

}
}
// random bg image
fuMBg(conf["confThemeEmbed"], conf["confBgImg"]);

// CSS



// Cookie (auto) v.2.1.0
if (document.getElementById('fPrivacy') != null){
document.getElementById('fPrivacy').innerHTML = `Cookie: (${conf["confDataCollection"]})`;
}

if (conf["confDataCollection"] == 'auto'){
if (navigator.doNotTrack == 1||navigator.globalPrivacyControl == true){
conf["confDataCollection"] = "off";
}

if (document.getElementById('fPrivacy') != null){
document.getElementById('fPrivacy').innerHTML = `Cookie: auto (${conf["confDataCollection"]})`;
}

}
// end Cookie (auto)



// fu ClearText, fix print, fix input v.1.0.0
function fuMClearText(text){
if (text != undefined){

//text = text.replaceAll("'", '\'');
//text = text.replaceAll('"', '\"');
//text = text.replaceAll("/\\/", "\\\\");

//text = text.replaceAll("/\\/", "&#92;");
text = text.replaceAll("/\\/", "&bsol;");
text = text.replaceAll("<", '&lt;');
text = text.replaceAll(">", '&gt;');
text = text.replaceAll("`", '&#96;'); // Backtick
text = text.replaceAll(/"/g, '&quot;');
text = text.replaceAll(/'/g, '&apos;');
text = text.replaceAll(/'/g, '%27');
text = text.replaceAll('%', '&percnt;');
text = text.replaceAll("+", '&plus;');

return text;
}
}

// fu ClearText2, for click and to URL
function fuMClearText2(text){
if (text != undefined){
text = text.replaceAll(/"/g, '%22');
text = text.replaceAll(/'/g, '%27');
return text;
}
}



// Embed scripts. Script embed v.1.0.0
if (document.getElementById(conf["confIdEmbedScript"]) != null){

function fuMEmbedScript(embedUrl, embedId){

/*
//https://stackoverflow.com/questions/3646036/preloading-images-with-javascript
var link = document.createElement("link");
link.rel = "preload";
link.as = "script";
link.href = embedUrl;
document.head.appendChild(link);*/

let script = document.createElement('script');
script.type='text/javascript';
//script.async = true;
script.defer = true;
script.charset = 'utf-8';
script.src = embedUrl;

if (document.getElementById(embedId) != null){
document.getElementById(embedId).appendChild(script);
} else {
document.getElementsByTagName('head')[0].appendChild(script); 
}

}


// embed and run

if (conf["confDataCollection"] == 'not selected'){
fuMEmbedScript(`${confD}js/cookie-agree-popup.js`, conf["confIdEmbedScript"]);
}

if (conf["confDataCollection"] == 'on'){
fuMEmbedScript(`https://www.googletagmanager.com/gtag/js?id=${conf["confGoogleAnalyticsId"]}`, conf["confIdEmbedScript"]);
}


///////////////////////////
// Run:
//https://stackoverflow.com/questions/39155645/multiple-window-onload-functions-with-only-javascript
window.addEventListener('load', function() {
//https://stackoverflow.com/questions/7559520/determine-if-statically-named-javascript-function-exists-to-prevent-errors


if (conf["confDataCollection"] == 'on'){
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', conf["confGoogleAnalyticsId"]);
}

})

}
// end Embed scripts



// Screen Wake Lock (https only)
//https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API
if (conf["confScreenWakeLock"] == "on"){

async function fuMWakeLock(){
// Create a reference for the Wake Lock.
let mWakeLock = null;

// create an async function to request a wake lock
try {
mWakeLock = await navigator.wakeLock.request("screen");
//console.log("Wake Lock is active!");
} catch (err) {
// The Wake Lock request has failed - usually system related, such as battery.
//console.log(`${err.name}, ${err.message}`);
}

}
fuMWakeLock();
}
