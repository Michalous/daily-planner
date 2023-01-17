var now = moment().format("dddd, MMMM Do")

$(document).ready(function() {
    $('#currentDay').text(now)
    for (var i = 0; i <= 8; i++) {
        $('.container').append(`<div class="hour">${i + 9}</div>`)
    }
})