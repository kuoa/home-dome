
function display_goodreads_loading(){
    var html_code = '<div class="progress center-block" id="goodreads-loading">' +
        '<div class="progress-bar progress-bar-striped active" role="progressbar"' +
        ' aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:100%">' +
        '</div></div>'

    $('#goodreads-name').append(html_code);
}

function remove_goodreads_loading(){
    $('#goodreads-loading').remove()
}

function display_goodreads() {

    display_goodreads_loading();

    $.ajax({
        url: 'http://www.goodreads.com/review/list/' + goodreads_auth_data.user_id + '.xml',
        data: {
            key: goodreads_auth_data.api_key,
            v: '2',
            shelf: 'currently-reading',
            sort: 'date_started',
            order: 'd',
            page: '1',
            per_page: 20
        },
        crossDomain: true,
        dataType: 'xml',

        success: display_books
    })
}

function display_books(data) {
   $(data).find('book').each(function(){
       display_book(this)
   })

    remove_goodreads_loading();
    $('#goodreads-panel').show('slow')
}


function display_book(book){

    var html_code = '<div class="list-group-item book">' +

        '<h5>' + $(book).find("title").text().substring(0, 30) + '</h5>' +
        '<h6>' + $(book).find("name").text().substring(0, 10) + '</h6>' +
        '<a href="' + ($(book).find("link").first().text()) + '"><img src="' + $(book).find("image_url").first().text() + '" class="img-rounded"/></a>' +
        '</div>'

    $('#goodreads-panel').append(html_code);
}



