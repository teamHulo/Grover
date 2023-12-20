$(()=>{
       let itemLength = $('.SizeSwatchList .HorizontalList__Item').length;
    let NoAvailableItemLength = $('.SizeSwatchList .HorizontalList__Item.no-available').length;
    //$('.cant-find-size').css('display','none');
    if(NoAvailableItemLength > 0){
       $('a#BIS_trigger').css('display','block');
    }
    
    
      /* 
         if(itemLength === NoAvailableItemLength){
           $(this).css('display','block');
           }
 */
   console.log( $('button#BIS_trigger').length);
  function callback(mutations,observer){
          
          console.log(itemLength,NoAvailableItemLength,mutations)
           if(itemLength === NoAvailableItemLength){
             console.log( $('button#BIS_trigger').length);
              //$('button#BIS_trigger').css('display','block');
            $('button#BIS_trigger').addClass('active');
         
           }
  }
  $('button#BIS_trigger').remove();
 $('iframe#BIS_frame').remove();
  const targetEl = document.querySelector('body')    
  const observer = new MutationObserver(callback);  
   observer.observe(targetEl,{
     childList:1,
     attributes: true,
     characterData:true
   });
});


  $(document).ready(function(){

      
      $('.ProductListWrapper .Grid__Cell').each(function(){
       if ($(this).find('.ProductItem__Label').length > 0) {
           $(this).find('.ProductItem').addClass('opacityImage');
          console.log('22asdasdasdasd;')
          $(this).find('.ProductItem__Price').text('Join the waitlist');
          $(this).find('.ProductItem__Price').addClass('new-price-custom');
         
        }
      })
  

    
  });