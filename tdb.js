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
    {type: 'special', legend: "Dag med specialtidtabell,<br/>se www.nbvj.se",
        dates: ['2020-06-13', '2020-06-19', '2020-08-29', '2020-08-30']},
];


function initPage() {
    $('span.year').html(year);
    initCalendar();
    setTrafficDays();
    viewLegend();
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
        console.log('Colspan: ', numberOfWeeks, colSpan);
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
    console.log(_cal);

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
