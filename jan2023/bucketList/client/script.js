// target 'ul' on click
// pass 'li' as argument
// 'this' refers to li now instead of 'ul'
// we target the ul because if we target the li, when deleting it would not work properly
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
})


// Delete
// target "ul" on click
// pass the span as argument 
// "this" refers to span now instead of "ul"
$('ul').on('click','span',function(){
    // when clicking on span target the parent of the span and remove it
    // the parent of the span is the "li"
    $(this).parent().remove();
})

// Create
// "this" refers to the input
// target input tag with keypress method
// pass in event to interact with
$("input").keypress(function (event) {
    // if the enter key is pressed and a value exist 
    if (event.which === 13 && $(this).val()) {
        // store user input, only store first 30 chars
        let listItem = $(this).val().substring(0, 30);
        // target "ul" and prepend input to beginning of the list as an li
        $("ul").prepend(
            // need the "li", the input, and the span
            `<li>${listItem}<span><i class='fa-solid fa-delete-left'></i></span></li>`
        );  
        // clear the input field 
        $(this).val("");
    }
});