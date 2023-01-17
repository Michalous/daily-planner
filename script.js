var now = moment().format("dddd, MMMM Do")

$(document).ready(function() {
    $('#currentDay').text(now)
    for (var i = 0; i <= 8; i++) {
        $('.container').append(`<div class="row">
                                    <div class="hour">${i + 9}</div>
                                    <div class="description future">
                                        <textarea>Hello, World!</textarea>
                                    </div>
                                    <div class="saveBtn"><i class="fa fa-solid fa-lock"></i></div>
                                </div>`)
    }
})