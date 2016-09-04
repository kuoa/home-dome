const reddit = new snoowrap(reddit_auth_data);

function print_threads(threads){

    for (var i = 0; i < threads.length; i++){
        var thread = threads[i];

        var html_code = '<li class="list-group-item">' +
            '<span class="badge">' + thread.ups + '</span>' +
            '<span class="thread">[' + thread.subreddit.display_name + ']</span> | ' +
            '<a target="_blank" href="' + thread.url + '">' + thread.title + '</a>' +
            '</li>';

        $('#reddit-panel').append(html_code);
    }

    remove_loading('reddit-loading');
    $('#reddit-panel').show('slow');
}

function display_reddit(config){

    display_loading('reddit-loading', 'reddit-name');

    reddit.get_hot(config)
        .then(print_threads);
}