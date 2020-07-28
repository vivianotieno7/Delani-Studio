//toggle
$(document).ready(function(){
    $(".single").click(function() {
      
      // Reset all images
      $(".single img.alt").hide();
      $(".single img.orig").show();
      
      // Now toggle the ones in this .single
      $("img", this).toggle();
     });
  });
  
  
  //hover on my portfolio//
  $(document).ready(function(){
    $('.part5').hover(function () {
      $(this).stop().animate({
          opacity: .4
      }, 200);
      $('.text').removeClass('hide');
  }, function () {
      $(this).stop().animate({
          opacity: 1
      }, 500);
      $('.text').addClass('hide');
     });
  });
  
  
  //pop-up to notify message recieved//
  $(document).ready(function(){
    $(".part6").submit(function(e) {
      e.preventDefault();
      alert("Recieved");
     });
  });
  
  
  
  //mailchimp email tracking//
  $(document).ready(function(){
    $('#subscribe-form').MailChimpForm({
     url:'//jqueryscript.us6.list-manage.com/subscribe/post?u=d4d8a0f45ce17e5ef2708771f&amp;id=06a33bc6c9',
      fields:'0:Name,1:Email',
      submitSelector:'#submit-form'
      });    
  });