// set year to be handled
let year = 2020;
// Set first and last week to be printed within the calendar
let weeksToShow = [23, 37];

// Set to empty to disable watermark
let watermark = "";

let trafficDays = [
    {
        type: 'steam', legend: 'Dag med Ångloks- och rälsbusstrafik',
        caption: 'Noradagarna 1-4  juli samt lördagar 27 juni - 22 aug',
        dates: ['2020-07-01', '2020-07-02', '2020-07-03', '2020-07-04',
            '2020-06-27', '2020-07-11', '2020-07-18', '2020-07-25', '2020-08-01', '2020-08-01', '2020-08-08',
            '2020-08-15', '2020-08-22']
    },
    {
        type: 'railbus', legend: 'Dag med Rälsbusstrafik',
        caption: 'Onsdagar och fredagar i Juli',
        dates: ['2020-07-08', '2020-07-10', '2020-07-15', '2020-07-17', '2020-07-22', '2020-07-24', '2020-07-29', '2020-07-31']
    },
    {
        type: 'special', legend: "Dag med specialtidtabell, se&nbsp;www.nbvj.se",
        caption: '',
        dates: ['2020-06-13', '2020-06-19', '2020-08-29', '2020-08-30']
    },
];
