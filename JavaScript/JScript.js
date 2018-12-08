// JQuery for Header
$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  
})
//END JQuery for Header


//Parallax Responsive footer 
$(document).ready(function(){
siteFooter();
$(window).resize(function(){
  siteFooter();
});

function siteFooter(){
  var siteContent = $('#site-content');
  var siteContentHeight = siteContent.height();
  var siteContentWidth = siteContent.width();

var siteFooter = $('#site-footer');
var siteFooterHeight = siteFooter.height();
var siteFooterWidth = siteFooter.width();

console.log('content Height = ' + siteContentHeight + 'px');
console.log('content Width = ' + siteContentWidth + 'px');
console.log('Footer Height = ' + siteFooterHeight + 'px');
console.log('Footer Width = ' + siteFooterWidth + 'px');

siteContent.css({
  "margin-bottom" : siteFooterHeight + 50
});
};

});
//End Parallax Responsive footer