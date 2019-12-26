// set year to be handled
let year = 2020;
// Set first and last week to be printed within the calendar
let weeksToShow = [24, 37];

let trafficDays = [
    {type: 'steam', legend: 'Dag med Ångloks- och rälsbusstrafik',
        dates: ['2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04', '2020-07-08', '2020-07-15', '2020-07-22',
            '2020-07-29', '2020-06-27', '2020-07-11', '2020-07-18', '2020-07-25', '2020-08-01', '2020-08-01', '2020-08-08',
            '2020-08-15', '2020-08-22']},
    {type: 'railbus', legend: 'Dag med Rälsbusstrafik',
        dates: ['2020-07-10', '2020-07-17', '2020-07-24', '2020-07-31']},
    {type: 'special', legend: "Dag med specialtidtabell, se&nbsp;www.nbvj.se",
        dates: ['2020-06-13', '2020-06-19', '2020-08-29', '2020-08-30']},
];

let trains = [
    {type: 'railbus', nr: 2, name: 'Kaffetåget', tdb: [{sign: 'N', time: '10:30'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 'J', time: '10:50'}]},
];

let trafficPlaces = [
    {km: '17,6', sign: 'N', name: 'Fr Nora', class: 'font-weight-bold'},
    {km: '14,0', sign: 'Kh', name: 'Källarhalsen', class: 'float-right'},
    {km: '12,6', sign: 'Sm', name: 'Stora Mon', class: 'float-right'},
    {km: '10,2', sign: 'lm', name: 'Lilla Mon', class: 'float-right'},
    {km: '8,2', sign: 'J', name: 't Järle', class: 'font-weight-bold border-bottom'},
    {km: '8,2', sign: 'J', name: 'fr Järle', class: 'font-weight-bold'},
    {km: '8,2', sign: 'Tp', name: 'Torpa', class: 'float-right'},
    {km: '8,2', sign: 'Tp', name: 't Löth', class: 'font-weight-bold border-bottom'},
    {km: '19,5', sign: 'Phn', name: 'Pershyttevägen', class: 'float-right'},
    {km: '20,9', sign: 'Ph', name: 'Pershyttan', class: 'float-right'},
    {km: '22,9', sign: 'Phö', name: 't Pershyttan Övre', class: 'font-weight-bold'},
    {km: '22,9', sign: 'Phö', name: 'fr Pershyttan Övre', class: 'font-weight-bold'},
    {km: '22,6', sign: 'Gt', name: 't Gyttorp', class: 'font-weight-bold'},
    {km: '23,5', sign: 'Kt', name: 'Käppsta (badtåg)', class: 'float-right'},
    {km: '25,8', sign: 'Kp', name: 'Knapptorp', class: 'float-right'},
    {km: '28,0', sign: 'Bt', name: 'Bengtstorp', class: 'float-right'},
    {km: '30,7', sign: 'Vk', name: 'Vikersvik', class: 'float-right'},
    {km: '33,7', sign: 'Nvk', name: 'Vikerskolorna', class: 'font-weight-bold'},
];

function initPage() {
    $('span.year').html(year);
    initCalendar();
    setTrafficDays();
    viewLegend();
    initTimeTable('tdb-1');
}

function initTimeTable(tdb) {

    let timeTable = '<table class="tdb"><thead><tr><th colspan="2">Fredagar</th></tr></thead>';
    timeTable += '<tbody><tr><td></td><td>&nbsp;</td><td class="rotate">Kaffetåget</td></tr>';
    timeTable += '<tr><td></td><td class="small float-right">tågnummer:</td><td>2</td></tr>';

    timeTable += '<tr><td class="small pre">Km</td><td class="small">Stationer/hållplatser</td></tr>';
    $.each(trafficPlaces, function (i, trafficPlace) {
        let border = (trafficPlace.class.indexOf('border-bottom') >= 0) ? 'border-bottom' :'';

        timeTable += '<tr><td class="small right ' + border +'">' + trafficPlace.km +
            '</td><td class="small ' + trafficPlace.class +'">' + trafficPlace.name + '</td></tr>';
    });
    timeTable += '</tbody></table>';
    $('#tdb-1').html(timeTable);
}

function setTrafficDays() {
    $.each(trafficDays, function (i, trafficDay) {
        $.each(trafficDay.dates, function (ix, date) {
            let tDate = moment(date).dayOfYear();
            $('td#'+tDate).addClass(trafficDay.type);
        })
    });
}

function viewLegend() {
    let legend = '<table class="legend "><tbody><tr><td class="date border">1</td><td class="text">Dag utan trafik</td></tr>';
    $.each(trafficDays, function (i, trafficDay) {
        legend += '<tr><td class="date ' + trafficDay.type + '">' + moment(trafficDay.dates[0]).format('D') +
            '</td><td class="text">' + trafficDay.legend + '</td></tr>'
    });

    legend += '</tbody></table>';
    $('#legend').html(legend);

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
            colSpan = (colSpan >= numberOfWeeks) ? numberOfWeeks: colSpan;
        } else {
            // set all other months
            colSpan = Math.round((startDate.day() + moment(startDate).daysInMonth()) / 7);
        }
        numberOfWeeks = numberOfWeeks- colSpan;
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
        calendar += '<tr><td scope="rowgroup" class="weekday">' + weekday + '</td>';

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
