// This file is also used by ångtågetutinora.se

// set year to be handled
let year = 2023;
// Set first and last week to be printed within the calendar
let weeksToShow = [20, 36];

// Set to empty to disable watermark
let watermark = "";

let trafficDays = [
    {
        type: 'steam', legend: 'Dag med Ångloks- och rälsbusstrafik',
        caption: 'Ångtåg Nora - Järle',
        dates: ['2023-07-01', '2023-07-06', '2023-07-08', '2023-07-14', '2023-07-15', '2023-07-18', '2023-07-21',
            '2023-07-22', '2023-07-25', '2023-07-28', '2023-07-29', '2023-08-05',
            '2023-08-12', '2023-08-19']
    },
    {
        type: 'railbus', legend: 'Dag med Rälsbusstrafik',
        caption: 'Rälsbuss Nora - Pershyttan, Gyttorp och Vikersvik',
        dates: []
    },
    {
        type: 'special', legend: "Dag med specialtidtabell, se&nbsp;www.ångtågetutinora.se",
        caption: '',
        dates: ['2023-06-23', '2023-07-07', '2023-08-26', '2023-08-27']
    },
];
