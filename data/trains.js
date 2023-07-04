let version = '2023-07-01';

let trains = [
    {
        nr: 49,
        days: 'railbus',
        type: 'railbus',
        name: '',
        reversed: false,
        tdb: [{sign: 'fr N', time: '09:55'}, {sign: 'Pgn', time: 'x'}, {sign: 't Phö', time: '10:10'}]
    }, {
        nr: 50,
        days: 'railbus',
        type: 'railbus',
        name: '',
        reversed: true,
        tdb: [{sign: 'fr N', time: '10:44'}, {sign: 'Pgn', time: 'x'}, {sign: 't Phö', time: '10:30'}]
    },    {
        nr: 51,
        days: 'railbus',
        type: 'railbus',
        name: '',
        reversed: false,
        tdb: [{sign: 'fr N', time: '11:00'}, {sign: 'Pgn', time: 'x'}, {sign: 't Phö', time: '11:15'}]
    }, {
        nr: 52,
        days: 'railbus',
        type: 'railbus',
        name: '',
        reversed: true,
        tdb: [{sign: 'fr N', time: '11:40'}, {sign: 'Pgn', time: 'x'}, {sign: 't Phö', time: '11:25'}]
    },    {
        nr: 53,
        days: 'railbus',
        type: 'railbus',
        name: '',
        reversed: false,
        tdb: [{sign: 'fr N', time: '11:50'}, {sign: 'Pgn', time: 'x'}, {sign: 't Phö', time: '12:06'}]
    }, {
        nr: 54,
        days: 'railbus',
        type: 'railbus',
        name: '',
        reversed: true,
        tdb: [{sign: 'fr N', time: '12:35'}, {sign: 'Pgn', time: 'x'}, {sign: 't Phö', time: '12:20'}]
    },    {
        nr: 55,
        days: 'railbus',
        type: 'railbus',
        name: '',
        reversed: false,
        tdb: [{sign: 'fr N', time: '13:55'}, {sign: 'Pgn', time: 'x'}, {sign: 't Phö', time: '14:10'}]
    }, {
        nr: 56,
        days: 'railbus',
        type: 'railbus',
        name: '',
        reversed: true,
        tdb: [{sign: 'fr N', time: '14:30'}, {sign: 'Pgn', time: 'x'}, {sign: 't Phö', time: '14:15'}]
    },    {
        nr: 57,
        days: 'railbus',
        type: 'railbus',
        name: '',
        reversed: false,
        tdb: [{sign: 'fr N', time: '14:55'}, {sign: 'Pgn', time: 'x'}, {sign: 't Phö', time: '15:10'}]
    }, {
        nr: 58,
        days: 'railbus',
        type: 'railbus',
        name: '',
        reversed: true,
        tdb: [{sign: 'fr N', time: '15:45'}, {sign: 'Pgn', time: 'x'}, {sign: 't Phö', time: '15:30'}]
    },    {
        nr: 59,
        days: 'railbus',
        type: 'railbus',
        name: '',
        reversed: false,
        tdb: [{sign: 'fr N', time: '16:00'}, {sign: 'Pgn', time: 'x'}, {sign: 't Phö', time: '16:15'}]
    }, {
        nr: 60,
        days: 'railbus',
        type: 'railbus',
        name: '',
        reversed: true,
        tdb: [{sign: 'fr N', time: '16:40'}, {sign: 'Pgn', time: 'x'}, {sign: 't Phö', time: '16:25'}]
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
