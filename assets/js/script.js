var now = moment().format("dddd, MMMM Do")  // get day of week month and date from moment.js
var nowHour = moment().format('H') // get current hour from moment.js

$(document).ready(function() {
    $('#currentDay').text(now) // set today's date
    // create rows
    for (var i = 0; i <= 8; i++) {
        var toInsert = (i < 3) ? `${i + 9} AM` : ((i == 3) ? "12 PM" : `${i - 3} PM`)
        var classInsert = ((i + 9) > nowHour) ? 'future' : ((i + 9) == nowHour ? 'present' : 'past')
        $('.container').append(`<div class="row">
                                    <div class="hour">${toInsert}</div>
                                    <div class="description ${classInsert}">
                                        <textarea data-hour="${i + 9}"></textarea>
                                    </div>
                                    <div class="saveBtn" data-hour="${i + 9}"><i class="fa fa-solid fa-lock"></i></div>
                                </div>`)
    }

    // get data from localStorage and display in the calendar
    for (var i = 9; i <= 17; i++) {
        if (localStorage[i]) {
            console.log(localStorage[i])
            $('textarea').eq(i - 9).val(localStorage[i])
        }
    }

    // save data to localStorage when button clicked
    $('.saveBtn').on('click', function() {
        var buttonNumber = $(this).data('hour')
        var areaValue = $('textarea').eq(buttonNumber - 9).val()
        localStorage.setItem(buttonNumber, areaValue)
    })
    
})