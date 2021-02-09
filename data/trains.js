let version = '2021-02-09';

let trains = [
    {
        nr: 19,
        days: 'railbus',
        type: 'railbus',
        name: 'Badtåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '09:45'}, {sign: 'Gt', time: '09:56'}, {sign: 'Kä', time: 'x'},
            {sign: 'Bt', time: 'x'}, {sign: 'Vk', time: '10:16'}, {sign: 'Nvk', time: '10:18'}]
    }, {
        nr: 20,
        days: 'railbus',
        type: 'railbus',
        name: 'Badtåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '11:08'}, {sign: 'Pgn', time: '|'}, {sign: 'Gt', time: '11:00'},
            {sign: 'Kä', time: 'x'}, {sign: 'Bt', time: 'x'}, {sign: 'Vk', time: '10:40'}, {sign: 'Nvk', time: '10:35'}]
    },    {
        nr: 23,
        days: 'railbus',
        type: 'railbus',
        name: 'Gruvtåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '11:30'}, {sign: 't Phö', time: '11:46'}, {sign: 'fr Phö', time: '11:50'},
            {sign: 'Gt', time: '11:58'}, {sign: 'Kä', time: '12:05'}]
    }, {
        nr: 24,
        days: 'railbus',
        type: 'railbus',
        name: 'Gruvtåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '13:06'}, {sign: 't Phö', time: '12:50'}, {sign: 'fr Phö', time: '12:45'},
            {sign: 'Gt', time: 'x'}, {sign: 'Kä', time: '12:30'}]
    },   {
        nr: 25,
        days: 'railbus',
        type: 'railbus',
        name: 'Utflyktståget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '14:00'}, {sign: 'Gt', time: '14:11'}, {sign: 'Kä', time: 'x'},
            {sign: 'Bt', time: 'x'}, {sign: 'Vk', time: '14:31'}, {sign: 'Nvk', time: '14:33'}]
    }, {
        nr: 26,
        days: 'railbus',
        type: 'railbus',
        name: 'Utflyktståget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '15:46'}, {sign: 'Pgn', time: '|'}, {sign: 't Phö', time: '15:30'}, {sign: 'fr Phö', time: '15:20'}, {sign: 'Gt', time: '15:07'},
            {sign: 'Kä', time: 'x'}, {sign: 'Bt', time: 'x'}, {sign: 'Vk', time: '14:50'}, {sign: 'Nvk', time: '14:45'}]
    },
    { // Ångtåg på Järle
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
        nr: 132,
        days: 'steam',
        type: 'steam',
        name: 'Extratåg, går ej alla dagar',
        reversed: false,
        tdb: [{sign: 'fr N', time: '10:30'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '10:50'}]
    }, {
        nr: 133,
        days: 'steam',
        type: 'steam',
        name: 'Extratåg, går ej alla dagar',
        reversed: true,
        tdb: [{sign: 'fr N', time: '11:55'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '11:35'}]
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
        nr: 134,
        days: 'steam',
        type: 'steam',
        name: 'Extratåg, går ej alla dagar',
        reversed: false,
        tdb: [{sign: 'fr N', time: '12:30'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '12:50'}]
    }, {
        nr: 135,
        days: 'steam',
        type: 'steam',
        name: 'Extratåg, går ej alla dagar',
        reversed: true,
        tdb: [{sign: 'fr N', time: '14:25'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '14:05'}]
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
