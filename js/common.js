
function display_loading(bar_id, panel_id){
    var html_code = '<div class="progress center-block" id="' + bar_id + '">' +
        '<div class="progress-bar progress-bar-striped active" role="progressbar"' +
        ' aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:100%">' +
        '</div></div>';

    $('#' + panel_id).append(html_code);
}

function remove_loading(panel_id){
    $('#' + panel_id).remove();
}
