function main(){
    var colorClass = '' 
    $('.select-color').on('click', function(){
        var selectedColor =$(this).attr('class'); //Save selection here upon user click; .attr() returns the "class" attributes on the HTML element we clicked.
        switch (selectedColor) { //set a color on the boxes in the grid.
        case 'select-color cyan not-selected':
            colorClass = 'cyan';
            break;
        case 'select-color yellow not-selected':
            colorClass = 'yellow';
            break;
        case 'select-color green not-selected':
            colorClass = 'green';
            break;
        case 'select-color red not-selected':
            colorClass = 'red';
            break;
        }
        $(this).removeClass('not-selected')
        $(this).siblings().addClass('not-selected');
    })
}

$(document).ready(main) //Declare the document ready jQuery function to allow the script to load when the page is ready and loaded