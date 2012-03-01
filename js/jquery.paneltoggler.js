(function($){
    $.fn.panelToggler = function(element, options){
    
        var defaults = {
            animateDelay: 300
        };
        
        var options = $.extend(defaults, options); 
        
        return this.each(function(){
            element = $(this);
            o = options;
            toggler = element.find('#toggler-header');
            
            //Add collapsed class
            element.addClass('collapsed');
            
            //Get panel content wrapper width for hidden and show offset
            showPos = element.find('#toggler-content-holder').width();
            hidePos = element.find('#toggler-content-holder').width() * 2;
            
            //Set panel hidden
            element.css('left', showPos - hidePos);
            
            toggler.click(function(){
                if(element.hasClass('collapsed') == true){
                    element.animate({left: 0}, o.animateDelay).removeClass('collapsed');
                
                }else{
                    element.animate({left: showPos - hidePos}, o.animateDelay).addClass('collapsed');
                }
               
                
            }); 
        });
    };
})(jQuery);