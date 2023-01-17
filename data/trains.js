let version = 'Prel 2023-01-12';

let trains = [
    {
        nr: 21,
        days: 'railbus',
        type: 'railbus',
        name: 'Badtåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '09:55'}, {sign: 'Gt', time: '10:07'}, {sign: 'Kä', time: 'x'},
            {sign: 'Bt', time: 'x'}, {sign: 'Vk', time: '10:27'}, {sign: 'Nvk', time: '10:32'}]
    }, {
        nr: 22,
        days: 'railbus',
        type: 'railbus',
        name: 'Badtåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '11:40'}, {sign: 't Phö', time: '11:25'}, {sign: 'fr Phö', time: '11:15'}, {sign: 'Gt', time: '11:02'},
            {sign: 'Kä', time: 'x'}, {sign: 'Bt', time: 'x'}, {sign: 'Vk', time: '10:45'}, {sign: 'Nvk', time: '10:40'}]
    },    {
        nr: 23,
        days: 'railbus',
        type: 'railbus',
        name: 'Gruvtåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '11:50'}, {sign: 't Phö', time: '12:05'}]
    }, {
        nr: 24,
        days: 'railbus',
        type: 'railbus',
        name: 'Gruvtåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '12:30'}, {sign: 't Phö', time: '12:15'}]
    },    {
        nr: 25,
        days: 'railbus',
        type: 'railbus',
        name: 'Återtåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '13:55'}, {sign: 't Phö', time: '14:10'}]
    }, {
        nr: 26,
        days: 'railbus',
        type: 'railbus',
        name: 'Återtåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '14:30'}, {sign: 't Phö', time: '14:15'}]
    },   {
        nr: 27,
        days: 'railbus',
        type: 'railbus',
        name: 'Utflyktståget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '14:55'}, {sign: 'Gt', time: '15:07'}, {sign: 'Kä', time: 'x'},
            {sign: 'Bt', time: 'x'}, {sign: 'Vk', time: '15:27'}, {sign: 'Nvk', time: '15:32'}]
    }, {
        nr: 28,
        days: 'railbus',
        type: 'railbus',
        name: 'Utflyktståget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '16:36'}, {sign: 'Pgn', time: '|'}, {sign: 't Phö', time: '16:20'}, {sign: 'fr Phö', time: '16:15'}, {sign: 'Gt', time: '16:02'},
            {sign: 'Kä', time: 'x'}, {sign: 'Bt', time: 'x'}, {sign: 'Vk', time: '15:45'}, {sign: 'Nvk', time: '15:40'}]
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
        tdb: [{sign: 'fr N', time: '14:00'}, {sign: 'Kh', time: 'X'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '13:40'}]
    }, {
        nr: 106,
        days: 'steam',
        type: 'steam',
        name: 'Eftermiddags\nångan',
        reversed: false,
        tdb: [{sign: 'fr N', time: '15:00'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '15:20'}]
    }, {
        nr: 107,
        days: 'steam',
        type: 'steam',
        name: 'Eftermiddags\nångan',
        reversed: true,
        tdb: [{sign: 'fr N', time: '16:30'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '16:10'}]
    },
];
