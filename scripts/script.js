'use strict'

let $searchform = $('#search-form');
$searchform.on("submit", function(event){
    event.preventDefault();
    let query = $(this).find('[name="scrh-term"]').val().replace(/\s/g, "+");

    getBooks(query);
});

function getBooks (query) {
    let server = "https://www.googleapis.com/books/v1/volumes";

    $.ajax({
        url: server,
        method: "GET",
        data: `q=$(query) `
    }).done(function(response) {
        console.log(response);
    }).fail(function (error) {
        console.log(error);
    })
}
