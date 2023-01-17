var now = moment().format("dddd, MMMM Do")
var nowHour = moment().format('H')

console.log(nowHour)

$(document).ready(function() {
    $('#currentDay').text(now)
    for (var i = 0; i <= 8; i++) {
        var toInsert = (i < 3) ? `${i + 9} AM` : ((i == 3) ? "12 PM" : `${i - 3} PM`)
        var classInsert = ((i + 9) > nowHour) ? 'future' : ((i + 9) == nowHour ? 'present' : 'past')
        $('.container').append(`<div class="row">
                                    <div class="hour">${toInsert}</div>
                                    <div class="description ${classInsert}">
                                        <textarea>Hello, World!</textarea>
                                    </div>
                                    <div class="saveBtn"><i class="fa fa-solid fa-lock"></i></div>
                                </div>`)
    }
})