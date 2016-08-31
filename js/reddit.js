const reddit = new snoowrap(reddit_auth_data)

function display_reddit_loading(){
    var html_code = '<div class="progress center-block" id="reddit-loading">' +
        '<div class="progress-bar progress-bar-striped active" role="progressbar"' +
        ' aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:100%">' +
        '</div></div>'

    $('#reddit-name').append(html_code);
}

function remove_reddit_loading(){
    $('#reddit-loading').remove()
}

function print_threads(threads){

    for (i = 0; i < threads.length; i++){
        var thread = threads[i];

        var html_code = '<li class="list-group-item">' +
            '<span class="badge">' + thread.ups + '</span>' +
            '<span class="thread">[' + thread.subreddit.display_name + ']</span> | ' +
            '<a target="_blank" href="' + thread.url + '">' + thread.title + '</a>' +
            '</li>';

        $('#reddit-panel').append(html_code);
    }

    remove_reddit_loading();
    $('#reddit-panel').show('slow')
}

function display_reddit(config){

    display_reddit_loading();

    reddit.get_hot(config)
        .then(print_threads)
}