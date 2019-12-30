let version = 'Preliminär 2019-12-29';

let trains = [
    {
        nr: 12,
        days: 'railbus',
        type: 'railbus',
        name: 'Kaffetåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '10:00'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '10:20'}, {sign: 'fr J', time: '10:25'},
            {sign: 'Tp', time: '10:29'}, {sign: 't Lt', time: '10:38'}]
    }, {
        nr: 13,
        days: 'railbus',
        type: 'railbus',
        name: 'Kaffetåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '11:30'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '11:10'}, {sign: 'fr J', time: '11:00'},
            {sign: 'Tp', time: '10:56'}, {sign: 't Lt', time: '10:47'}]
    }, {
        nr: 21,
        days: 'railbus',
        type: 'railbus',
        name: 'Gruvtåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '11:50'}, {sign: 'Phn', time: 'x'}, {sign: 'Ph', time: '|'},
            {sign: 't Phö', time: '12:06'}]
    }, {
        nr: 22,
        days: 'railbus',
        type: 'railbus',
        name: 'Gruvtåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '12:31'}, {sign: 'Phn', time: 'x'}, {sign: 'Ph', time: '|'},
            {sign: 't Phö', time: '12:15'}]
    }, {
        nr: 14,
        days: 'railbus',
        type: 'railbus',
        name: 'Fikatåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '13:20'}, {sign: 'Sm', time: 'x'}, {sign: 'Lm', time: '|'},
            {sign: 't J', time: '13:40'}, {sign: 'fr J', time: '13:45'}, {sign: 'Tp', time: '13:49'},
            {sign: 't Lt', time: '13:58'}]
    }, {
        nr: 15,
        days: 'railbus',
        type: 'railbus',
        name: 'Fikatåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '14:45'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '14:25'}, {sign: 'fr J', time: '14:20'},
            {sign: 'Tp', time: '14:16'}, {sign: 't Lt', time: '14:07'}]
    }, {
        nr: 27,
        days: 'railbus',
        type: 'railbus',
        name: 'Utflykttåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '15:00'}, {sign: 'Phn', time: 'x'}, {sign: 'Ph', time: '|'},
            {sign: 't Phö', time: '15:16'}]
    }, {
        nr: 28,
        days: 'railbus',
        type: 'railbus',
        name: 'Utflykttåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '15:46'}, {sign: 'Phn', time: 'x'}, {sign: 'Ph', time: '|'},
            {sign: 't Phö', time: '15:30'}]
    },
    { // Helgtrafik
        nr: 102,
        days: 'steam',
        type: 'steam',
        name: 'Kaffetåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '10:00'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '10:20'}]
    }, {
        nr: 103,
        days: 'steam',
        type: 'steam',
        name: 'Kaffetåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '11:30'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '11:10'}]
    }, {
        nr: 19,
        days: 'steam',
        type: 'railbus',
        name: 'Badtåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '10:10'}, {sign: 'Gt', time: '10:21'}, {sign: 'Kä', time: '10:22'},
            {sign: 'Bt', time: 'x'}, {sign: 'Vk', time: '10:41'}, {sign: 'Nvk', time: '10:46'}]
    }, {
        nr: 20,
        days: 'steam',
        type: 'railbus',
        name: 'Badtåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '11:33'}, {sign: 'Pgn', time: 'x'}, {sign: 'Gt', time: '11:21'},
            {sign: 'Kä', time: '11:20'}, {sign: 'Bt', time: 'x'}, {sign: 'Vk', time: 'x'}, {sign: 'Nvk', time: '11:00'}]
    }, {
        nr: 23,
        days: 'steam',
        type: 'railbus',
        name: 'Gruvtåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '11:50'}, {sign: 'Phn', time: 'x'}, {sign: 'Ph', time: '|'},
            {sign: 't Phö', time: '12:06'}, {sign: 'fr Phö', time: '12:15'}, {sign: 'Gt', time: '12:18'},
            {sign: 'Kä',time: '12:19'}]
    }, {
        nr: 24,
        days: 'steam',
        type: 'railbus',
        name: 'Gruvtåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '12:50'}, {sign: 'Phn', time: 'x'}, {sign: 'Ph', time: '|'},
            {sign: 'Gt', time: '12:46'}, {sign: 'Kä', time: '12:45'}]
    }, {
        nr: 104,
        days: 'steam',
        type: 'steam',
        name: 'Lunchtåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '12:00'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '12:20'}]
    }, {
        nr: 105,
        days: 'steam',
        type: 'steam',
        name: 'Lunchtåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '13:30'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '13:10'}]
    }, {
        nr: 25,
        days: 'steam',
        type: 'railbus',
        name: 'Utflykts-\ntåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '14:00'}, {sign: 'Gt', time: '14:11'}, {sign: 'Kä', time: 'x'},
            {sign: 'Bt', time: 'x'}, {sign: 'Vk', time: '14:31'}, {sign: 'Nvk', time: '14:36'}]
    }, {
        nr: 26,
        days: 'steam',
        type: 'railbus',
        name: 'Utflykts-\ntåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '15:46'}, {sign: 'fr Phö', time: '15:23'}, {sign: 't Phö', time: '15:30'},
            {sign: 'Gt', time: '15:20'}, {sign: 'Kä', time: '15:19'}, {sign: 'Bt', time: 'x'},
            {sign: 'Vk', time: '14:50'}, {sign: 'Nvk', time: '14:45'}]
    }, {
        nr: 106,
        days: 'steam',
        type: 'steam',
        name: 'Eftermiddags\nångan',
        reversed: false,
        tdb: [{sign: 'fr N', time: '14:30'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '14:50'}]
    }, {
        nr: 107,
        days: 'steam',
        type: 'steam',
        name: 'Eftermiddags\nångan',
        reversed: true,
        tdb: [{sign: 'fr N', time: '16:00'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '15:40'}]
    },
];
