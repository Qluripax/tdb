// set year to be handled
let year = 2021;
// Set first and last week to be printed within the calendar
let weeksToShow = [23, 37];

// Set to empty to disable watermark
let watermark = "";

let trafficDays = [
    {
        type: 'steam', legend: 'Dag med Ångloks- och rälsbusstrafik',
        caption: 'Ångtåg Nora - Järle',
        dates: ['2021-07-03', '2021-07-07', '2021-07-08', '2021-07-09', '2021-07-10', '2021-07-16', '2021-07-17',
            '2021-07-23', '2021-07-24', '2021-07-30', '2021-07-31', '2021-08-07',
            '2021-08-14', '2021-08-21']
    },
    {
        type: 'railbus', legend: 'Dag med Rälsbusstrafik',
        caption: 'Rälsbuss Nora - Pershyttan, Gyttorp och Vikersvik',
        dates: []
    },
    {
        type: 'special', legend: "Dag med specialtidtabell, se&nbsp;www.ångtågetutinora.se",
        caption: '',
        dates: ['2021-08-28', '2021-08-29']
    },
];
