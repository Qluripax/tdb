
function initPage() {
    $('span.year').html(year);
    if (watermark) {
    $('p#wm-text').html(watermark);
    }
    initCalendar();
    setTrafficDays();
    viewLegend();
    viewPrices();
    initTimeTable('tdb-1', 'railbus');
    initTimeTable('tdb-2', 'steam');
    initTimeTable('tdb-3', 'railbus', true);
    initTimeTable('tdb-4', 'steam', true);
    viewExplanation();
}

function initTimeTable(tdb, dayType, direction = false) {

    let caption = '';
    let _trains = [];
    $.each(trafficDays, function (i, day) {
        if (day.type === dayType) {
            caption = day.caption;
        }
    });
    $.each(trains, function (i, train) {
        if (train.days === dayType && train.reversed === direction) {
            _trains.push(train);
        }
    });
    let timeTable = '<table class="tdb"><thead><tr><th class="center border-bottom" colspan="' + (_trains.length + 2) + '">' +
        caption + '</th></tr></thead><tbody><tr class="trainName"><td></td><td>&nbsp;</td>';

    $.each(_trains, function (i, train) {
        timeTable += '<td class="rotate train">' + train.name + '</td>';
    });
    timeTable += '</tr><tr><td></td><td class="small float-right">tågnummer:</td>';
    $.each(_trains, function (i, train) {
        timeTable += '<td class="center">' + train.nr + '</td>';
    });
//    timeTable += '</tr><tr><td></td><td></td>';
    timeTable += '</tr><tr><td class="small pre km border-bottom">Km</td><td class="small border-bottom">' +
        'Stationer/hållplatser</td>';

    $.each(_trains, function (i, train) {
        timeTable += '<td class="center"><img src="assets/' + train.type + '.png" style="max-width:50px;max-height:18px;"></td>';
    });

//    timeTable += '</tr><tr><td class="small pre km border-bottom">Km</td><td class="small border-bottom">' +
//        'Stationer/hållplatser</td><td class="border-bottom" colspan="' + _trains.length + '" </tr>';

    // loop through each place
    if (!direction) {
        $.each(trafficPlaces, function (i, trafficPlace) {
            let border = (trafficPlace.class.indexOf('border-bottom') >= 0) ? 'border-bottom' : '';

            timeTable += '<tr><td class="small right km ' + border + '">' + trafficPlace.km +
                '</td><td class="small ' + trafficPlace.class + '">' + trafficPlace.name + '</td>';
            timeTable += _getTimeforPlace(_trains, trafficPlace.sign, border + ' ' + dayType) + '</tr>';
        });
    } else {
        let i = trafficPlaces.length;
        while (i--) {
            let trafficPlace = trafficPlaces[i];
            let border = (trafficPlace.class.indexOf('border-bottom') >= 0) ? 'border-bottom' : '';
            let place = trafficPlace.name.replace('fr ', 'from ').replace('t ', 'to ');
            timeTable += '<tr><td class="small right km ' + border + '">' + trafficPlace.km +
                '</td><td class="small ' + trafficPlace.class + '">' + place.replace('from ', 't ')
                    .replace('to ', 'fr ').replace('Fr ', 'T ') + '</td>';
            timeTable += _getTimeforPlace(_trains, trafficPlace.sign, border + ' ' + dayType) + '</tr>';
        }

    }
    timeTable += '</tbody></table>';
    if (tdb === 'tdb-3') {
        timeTable += '<div class="pre">Km = avstånd på NBJ från Ervalla.</div>';
    } else if (tdb === 'tdb-4'){
        timeTable += '<div class="pre small right">Med reservation för ändring från t ex ånglok till diesellok ' +
            'pga brandfara el dyl.</div>'
    }
    $('#' + tdb).html(timeTable);
}

function _getTimeforPlace(trains, place, classes) {
    let placeInfo = '';
    $.each(trains, function (i, train) {
        let trainInfo = '<td class="center ' + classes + '"></td>';
        $.each(train.tdb, function (ix, stop) {
            if (stop.sign === place) {
                trainInfo = '<td class="small center ' + classes + '">' + stop.time + '</td>';
            }
        });
        placeInfo += trainInfo;
    });
    return placeInfo;
}

function setTrafficDays() {
    $.each(trafficDays, function (i, trafficDay) {
        $.each(trafficDay.dates, function (ix, date) {
            let tDate = moment(date).dayOfYear();
            $('td#' + tDate).addClass(trafficDay.type);
        })
    });
}

function viewPrices() {
    let priceList = '<ul class="pre list-unstyled">';
    $.each(prices, function (i, price) {
        priceList += '<li>' + price + '</li>';
    });
    $('#priceList').html(priceList);

}

function viewLegend() {
    let legend = '<table class="legend "><tbody><tr><td class="pre date border">1</td><td class="pre text">Dag utan trafik</td></tr>';
    $.each(trafficDays, function (i, trafficDay) {
        legend += '<tr><td class="pre date ' + trafficDay.type + '">' + moment(trafficDay.dates[0]).format('D') +
            '</td><td class="pre text">' + trafficDay.legend + '</td></tr>';
    });

    legend += '</tbody></table>';
    $('#legend').html(legend);

}

function viewExplanation() {
    let exp = '<h3>Förklaringar</h3><table class="exp"><tbody><tr>' +
        '<td class="center">x</td><td class="text">Stannar endast för av- eller påstigande passagerare.\n' +
        'Lokföraren stannar tåget om det syns att du vill stiga på.\n' +
        'Säg till konduktören i god tid om du vill stiga av på en hållplats.</td></tr>' +
        '<tr><td class="center">|</td><td class="text">Inget uppehåll / Ingen anslutning</td></tr>' +
        '<tr><td class="center"><img src="assets/steam.png" style="max-width:50px;max-height:18px;"></td>' +
        '<td class="text">Tåget dras normalt av ånglok</td></tr>' +
        '<tr><td class="center"><img src="assets/railbus.png" style="max-width:50px;max-height:18px;"></td>' +
        '<td class="text">Tåget utgörs normalt av rälsbusståg</td></tr>' +

        '</tbody></table><div class="small" id=""version"><i>Tdb, ' + version + '</i></div>';

    $('#explanation').html(exp);

    $('#logo').html('<img src="assets/nbvj-logo.png" class="img-fluid">');



}
function initCalendar() {
    let calendar = '<table class="cal"><thead><tbody><tr><th class="weekday"></th>';

    moment.locale('sv');
    //let firstDate = moment().year(year).week(weeksToShow[0]).day('monday');
    let firstDate = moment({y:year}).add(weeksToShow[0]-1, 'weeks').startOf('week');
    let lastDate = moment({y:year}).add(weeksToShow[1]-1, 'weeks').endOf('week');
    let numberOfWeeks = (weeksToShow[1] - weeksToShow[0]);
    let allMonthsInPeriod = [];
    let colspansInPeriod = [];
    let startDate = moment(firstDate.format("YYYY-MM-01"));
    while (startDate.isBefore(lastDate)) {
        let colSpan;
        // set first month
        if (startDate.format("YYYY-MM-DD") <= firstDate.format("YYYY-MM-DD")) {
            let firstDay = moment(firstDate).format("D");
            let lastDay = moment(firstDate).endOf('month').format('D');
            colSpan = Math.floor((lastDay - firstDay) / 7);
        } else if (startDate.format("YYYY-MM") >= lastDate.format("YYYY-MM")) {
            // set last month
            let firstDay = moment(startDate).format("D");
            let lastDay = moment(lastDate).format('D');
            colSpan = Math.floor((lastDate.day() + lastDay) / 7);
            colSpan = (colSpan >= numberOfWeeks) ? numberOfWeeks : colSpan;
        } else {
            // set all other months
            colSpan = Math.round((startDate.day() + moment(startDate).daysInMonth()) / 7);
        }
        numberOfWeeks = numberOfWeeks - colSpan;
        colspansInPeriod.push(colSpan);
        allMonthsInPeriod.push(startDate.format("YYYY-MM"));

        startDate = startDate.add(1, "month");
    }

    //let _cal = new Object;
    let _cal = {
        startDate: firstDate,
        endDate: lastDate,
        firstDayNumber: firstDate.dayOfYear(),
        numberOfWeeks: (weeksToShow[1] - weeksToShow[0]),
        allMonthsInPeriod: allMonthsInPeriod,
        colSpansInPeriod: colspansInPeriod,
    };
    $.each(allMonthsInPeriod, function (i, month) {
        let date = moment(month);
        let colSpan = _cal.colSpansInPeriod[i];
        let lang = (colSpan > 2) ? moment(date).locale('sv').format('MMMM') : '';
        if (colSpan) {
            calendar += '<th scope="colgroup" colspan="' + colSpan + '" class="calMonths">' + lang + '</th>';
        }
    });
    calendar += '</tr>';

    let dayNumber = _cal.firstDayNumber;
    moment.locale('sv');
    $.each(moment.weekdays(true), function (i, weekday) {
        calendar += '<tr><td class="weekday">' + weekday + '</td>';

        for (let colspanNumber = 0, l = _cal.numberOfWeeks; colspanNumber < l; colspanNumber++) {
            let day = dayNumber + i + (colspanNumber * 7);
            let printDate = moment().year(year).dayOfYear(day);
            let printDay = moment(printDate).locale('sv').format('D');
            calendar += '<td id="' + day + '">' + printDay + '</td>';
        }
        calendar += '</tr>';
    });
    calendar += '</tbody></table>';
    $('#cal').html(calendar);
}


$(document).ready(function () {
    initPage();
});
