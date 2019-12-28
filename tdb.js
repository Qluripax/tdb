// set year to be handled
let year = 2020;
// Set first and last week to be printed within the calendar
let weeksToShow = [23, 37];

let trafficDays = [
    {
        type: 'steam', legend: 'Dag med Ångloks- och rälsbusstrafik',
        caption: 'Lördagar 27 juni - 22 aug, onsdagar i Juli',
        dates: ['2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-08', '2020-07-15', '2020-07-22',
            '2020-07-29', '2020-06-27', '2020-07-11', '2020-07-18', '2020-07-25', '2020-08-01', '2020-08-01', '2020-08-08',
            '2020-08-15', '2020-08-22']
    },
    {
        type: 'railbus', legend: 'Dag med Rälsbusstrafik',
        caption: 'Fredagar 10, 17, 24 & 31 juni',
        dates: ['2020-07-10', '2020-07-17', '2020-07-24', '2020-07-31']
    },
    {
        type: 'special', legend: "Dag med specialtidtabell, se&nbsp;www.nbvj.se",
        caption: '',
        dates: ['2020-06-13', '2020-06-19', '2020-08-29', '2020-08-30']
    },
];

let trafficPlaces = [
    {km: '17,6', sign: 'fr N', name: 'Fr Nora', class: 'font-weight-bold'},
    {km: '14,0', sign: 'Kh', name: 'Källarhalsen', class: 'float-right'},
    {km: '12,6', sign: 'Sm', name: 'Stora Mon', class: 'float-right'},
    {km: '10,2', sign: 'lm', name: 'Lilla Mon', class: 'float-right'},
    {km: '8,2', sign: 't J', name: 't Järle', class: 'font-weight-bold border-bottom'},
    {km: '8,2', sign: 'fr J', name: 'fr Järle', class: 'font-weight-bold'},
    {km: '6,4', sign: 'Tp', name: 'Torpa', class: 'float-right'},
    {km: '2,8', sign: 't Lt', name: 't Löth', class: 'font-weight-bold border-bottom'},
    {km: '19,5', sign: 'Phn', name: 'Pershyttevägen', class: 'float-right'},
    {km: '20,9', sign: 'Ph', name: 'Pershyttan', class: 'float-right'},
    {km: '22,9', sign: 't Phö', name: 't Pershyttan Övre', class: 'font-weight-bold'},
    {km: '22,9', sign: 'fr Phö', name: 'fr Pershyttan Övre', class: 'font-weight-bold'},
    {km: '22,6', sign: 'Gt', name: 't Gyttorp', class: 'font-weight-bold'},
    {km: '23,5', sign: 'Kä', name: 'Käppsta (badtåg)', class: 'float-right'},
    {km: '25,8', sign: 'Kp', name: 'Knapptorp', class: 'float-right'},
    {km: '28,0', sign: 'Bt', name: 'Bengtstorp', class: 'float-right'},
    {km: '30,7', sign: 'Vk', name: 'Vikersvik', class: 'float-right'},
    {km: '32,6', sign: 'Nvk', name: 'Vikerskolorna', class: 'font-weight-bold'},
];

function initPage() {
    $('span.year').html(year);
    initCalendar();
    setTrafficDays();
    viewLegend();
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

function viewLegend() {
    let legend = '<table class="legend "><tbody><tr><td class="pre date border">1</td><td class="pre text">Dag utan trafik</td></tr>';
    $.each(trafficDays, function (i, trafficDay) {
        legend += '<tr><td class="pre date ' + trafficDay.type + '">' + moment(trafficDay.dates[0]).format('D') +
            '</td><td class="pre text">' + trafficDay.legend + '</td></tr>'
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

    let firstDate = moment().year(year).week(weeksToShow[0]).day('monday');
    let lastDate = moment().year(year).week(weeksToShow[1]).day('sunday');
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
