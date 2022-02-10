// set year to be handled
let year = 2022;
// Set first and last week to be printed within the calendar
let weeksToShow = [23, 37];

// Set to empty to disable watermark
let watermark = "";

let trafficDays = [
    {
        type: 'steam', legend: 'Dag med Ångloks- och rälsbusstrafik',
        caption: 'Ångtåg Nora - Järle',
        dates: ['2022-07-02', '2022-07-06', '2022-07-07', '2022-07-08', '2022-07-09', '2022-07-15', '2022-07-16',
            '2022-07-22', '2022-07-23', '2022-07-29', '2022-07-30', '2022-08-06',
            '2022-08-13', '2022-08-20']
    },
    {
        type: 'railbus', legend: 'Dag med Rälsbusstrafik',
        caption: 'Rälsbuss Nora - Pershyttan, Gyttorp och Vikersvik',
        dates: []
    },
    {
        type: 'special', legend: "Dag med specialtidtabell, se&nbsp;www.ångtågetutinora.se",
        caption: '',
        dates: ['2022-06-24', '2022-08-27', '2022-08-28']
    },
];
