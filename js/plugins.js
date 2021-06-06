// JavaScript Document
// nice scroll
$("document").ready(function() {
 


$("html").niceScroll();    

 

// show color option div when check on the gear
$(".gear-check").click(function()
{
	
	$(".color-option").fadeToggle();
	
});

// change theme color on click
var colorLi = $(".color-option ul li");
colorLi
  .eq(0).css("backgroundColor","#F00").end()
  .eq(1).css("backgroundColor","#e91e63").end()
  .eq(2).css("backgroundColor","#8e24aa").end()
  .eq(3).css("backgroundColor","#00695c").end()
  .eq(4).css("backgroundColor","#ffeb3b");
 colorLi.click(function()
   {
	 $("link[href*='theme']").attr("href",$(this).attr("data-value"));
	// console .log ($(this).attr("data-value"))
	 
	 });


		 
	 // Loading screen
	 
	
	 var scrollButton = $("#scroll-top");
	 
     $("window").scroll(function()
	 {
		  console.log( $(this).scrollTop() );
		 if( $(this).scrollTop() >=300 )
		 {
			
		 scrollButton.show();
		 }
		 else 
		 {
			 scrollButton.hide();
		 }
		 
		 });


	 
	 });