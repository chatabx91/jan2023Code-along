// Accordion Displays collapsible content panels for presenting 
// information in a limited amount of space
// $('#twd').accordion({});


$(document).ready(function(){

    $('#twd').accordion({
        active: false,
        collapsible: true,
        // speed up animation
        animate: 1000,
        // mouseover instead of clicking
        event: 'mouseover'
    })
    
    // Setter
    // $('#twd').accordion('option','event','click');

    // Getter
    let event = $('#twd').accordion('option','animate')
    // have a popup with info we want
    alert('speed of animation in milliseconds ' + event)
})




// CHALLENGE

// How do we start get the third panel to be open when page loads?
// $('#twd').accordion({
//     // third panel opens when page loads (number is index based)
//     active : 2
// })

// What if we do not want any of the panels to be open when page loads?
// $('#twd').accordion({
//     active: false,
//     collapsible: true
// });
// How would we speed up the animation effect of the panels opening?
// $('#twd').accordion({
//     active: false,
//     collapsible: true,
//     animate: 8000
// })
// What do we need to do to have panels open when mouse hovers over instead of clicking on panels?
// $('#twd').accordion({
//     active: false,
//     collapsible: true,
//     // speed up animation
//     animate: 1000,
//     // mouseover instead of clicking
//     event: 'mouseover'
// })
// How do we get the accordion to be 50% of the page width and auto margins? HINT: styles.css file
// margin: 0 auto, width: 50%


// --------------------------------------- //

// sortable() Reorder elements in a list or grid using the mouse.
// $("#cast").sortable();


// CHALLENGE

// How do we allow sorting only on the 'y' axis?
// $('#cast').sortable({
//     axis: 'y',
// })
// How do we change our cursor to the 'grab' hand when we sort?
// $('#cast').sortable({
//     axis: 'y',
//     cursor: 'grab'
// })
// What if we only wanted the even items to be sortable?
// $('#cast').sortable({
//     axis: 'y',
//     cursor: 'grab',
//     items: '>li:nth-of-type(even)'
// })
// How do we add a placeholder?
$('#cast').sortable({
    // sort on y axis only
    axis: 'y',
    // change cursor to grab hand
    cursor: 'grab',
    // only sort even li's
    items: '>li:nth-of-type(even)',
    // add placeholder
    placeholder: "sortable-placeholder"
})

// --------------------------------------- //

// draggable() Allow elements to be moved using the mouse.
// $('#innerDiv1').draggable();

// How do we contain the smaller box inside the bigger box?
// $('#innerDiv1').draggable({
//     containment: "parent"
// })
// What if we wanted the blue box to revert back to its starting position?
// $('#innerDiv1').draggable({
//     containment: "parent",
//     revert: true
// })
// You are going on vacation. What method would you use to 'disable' the ability to drag?
$('#innerDiv1').draggable('disable')

