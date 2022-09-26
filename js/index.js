let textCount=  {
    input   : $('#inputText'),
    label   : $('#labelCountText')
};

const maxText = 10;
const lengthMax = textCount.input.attr('maxlength', maxText);
let lengthPresent = 0;

(function(){ 
    textCount.label.html((lengthPresent) +'/'+ (maxText));
})();	    

textCount.input.keyup(function(e){
    lengthPresent = textCount.input.val().length;
    textCount.label.html((lengthPresent) +'/'+ (maxText));
});