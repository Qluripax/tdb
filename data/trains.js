let version = 'Preliminär 2019-12-27';

let trains = [
    {
        days: 'railbus',
        type: 'railbus',
        nr: 2,
        name: 'Kaffetåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '10:00'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '10:20'}, {sign: 'fr J', time: '10:25'},
            {sign: 'Tp', time: '10:29'}, {sign: 't Lt', time: '10:38'}]
    }, {
        days: 'railbus', type: 'railbus', nr: 3, name: 'Kaffetåget', reversed: true,
        tdb: [{sign: 'fr N', time: '11:30'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '11:10'}, {sign: 'fr J', time: '11:00'},
            {sign: 'Tp', time: '10:56'}, {sign: 't Lt', time: '10:47'}]
    }, {
        days: 'railbus', type: 'railbus', nr: 21, name: 'Gruvtåget', reversed: false,
        tdb: [{sign: 'fr N', time: '11:50'}, {sign: 'Phn', time: 'x'}, {sign: 'Ph', time: '|'},
            {sign: 't Phö', time: '12:06'}]
    }, {
        days: 'railbus', type: 'railbus', nr: 22, name: 'Gruvtåget', reversed: true,
        tdb: [{sign: 'fr N', time: '12:36'}, {sign: 'Phn', time: 'x'}, {sign: 'Ph', time: '|'},
            {sign: 't Phö', time: '12:20'}]
    }, {
        days: 'railbus', type: 'railbus', nr: 23, name: 'Utflykttåget', reversed: false,
        tdb: [{sign: 'fr N', time: '11:50'}, {sign: 'Phn', time: 'x'}, {sign: 'Ph', time: '|'},
            {sign: 't Phö', time: '12:06'}]
    }, {
        days: 'railbus', type: 'railbus', nr: 24, name: 'Utflykttåget', reversed: true,
        tdb: [{sign: 'fr N', time: '15:40'}, {sign: 'Phn', time: 'x'}, {sign: 'Ph', time: '|'},
            {sign: 't Phö', time: '15:24'}]
    }, {
        days: 'railbus', type: 'railbus', nr: 4, name: 'Fikatåget', reversed: false,
        tdb: [{sign: 'fr N', time: '13:20'}, {sign: 'Sm', time: 'x'}, {sign: 'Lm', time: '|'},
            {sign: 't J', time: '13:40'}, {sign: 'fr J', time: '13:45'}, {sign: 'Tp', time: '13:49'},
            {sign: 't Lt', time: '13:58'}]
    }, {
        days: 'railbus', type: 'railbus', nr: 5, name: 'Fikatåget', reversed: true,
        tdb: [{sign: 'fr N', time: '14:45'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '14:25'}, {sign: 'fr J', time: '14:20'},
            {sign: 'Tp', time: '14:16'}, {sign: 't Lt', time: '14:07'}]
    }, {
        days: 'steam', type: 'steam', nr: 202, name: 'Kaffetåget', reversed: false,
        tdb: [{sign: 'fr N', time: '10:00'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '10:20'}]
    }, {
        days: 'steam', type: 'steam', nr: 203, name: 'Kaffetåget', reversed: true,
        tdb: [{sign: 'fr N', time: '11:30'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '11:10'}]
    }, {
        days: 'steam', type: 'railbus', nr: 19, name: 'Badtåget', reversed: false,
        tdb: [{sign: 'fr N', time: '10:10'}, {sign: 'Gt', time: '10:21'}, {sign: 'Kä', time: '10:22'},
            {sign: 'Bt', time: 'x'}, {sign: 'Vk', time: '10:41'}, {sign: 'Nvk', time: '10:46'}]
    }, {
        days: 'steam', type: 'railbus', nr: 20, name: 'Badtåget', reversed: true,
        tdb: [{sign: 'fr N', time: '11:30'}, {sign: 'Gt', time: '11:20'}, {sign: 'Kä', time: '11:19'},
            {sign: 'Bt', time: 'x'}, {sign: 'Vk', time: '11:00'}, {sign: 'Nvk', time: '10:55'}]
    }, {
        days: 'steam',
        type: 'railbus',
        nr: 23, name: 'Gruvtåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '11:50'}, {sign: 'Phn', time: 'x'}, {sign: 'Ph', time: '|'},
            {sign: 't Phö', time: '12:06'}, {sign: 'fr Phö', time: '12:15'}, {sign: 'Gt', time: '12:18'},
            {sign: 'Kä',time: '12:19'}]
    }, {
        days: 'steam',
        type: 'railbus',
        nr: 24, name: 'Gruvtåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '12:50'}, {sign: 'Phn', time: 'x'}, {sign: 'Ph', time: '|'},
            {sign: 'Gt', time: '12:46'}, {sign: 'Kä', time: '12:45'}]
    }, {
        days: 'steam',
        type: 'steam',
        nr: 204, name: 'Lunchtåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '12:00'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '12:20'}]
    }, {
        days: 'steam',
        type: 'steam',
        nr: 205, name: 'Lunchtåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '13:30'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '13:10'}]
    }, {
        days: 'steam',
        type: 'railbus',
        nr: 25, name: 'Utflykts-\ntåget',
        reversed: false,
        tdb: [{sign: 'fr N', time: '14:00'}, {sign: 'Gt', time: '14:11'}, {sign: 'Kä', time: 'x'},
            {sign: 'Bt', time: 'x'}, {sign: 'Vk', time: '14:31'}, {sign: 'Nvk', time: '14:36'}]
    }, {
        days: 'steam',
        type: 'railbus',
        nr: 26, name: 'Utflykts-\ntåget',
        reversed: true,
        tdb: [{sign: 'fr N', time: '15:46'}, {sign: 'fr Phö', time: '15:30'}, {sign: 't Phö', time: '15:23'},
            {sign: 'Gt', time: '15:20'}, {sign: 'Kä', time: '15:19'}, {sign: 'Bt', time: 'x'},
            {sign: 'Vk', time: '14:50'}, {sign: 'Nvk', time: '14:45'}]
    }, {
        days: 'steam',
        type: 'steam',
        nr: 206, name: 'Eftermiddags\nångan',
        reversed: false,
        tdb: [{sign: 'fr N', time: '14:30'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '14:50'}]
    }, {
        days: 'steam',
        type: 'steam',
        nr: 207, name: 'Eftermiddags\nångan',
        reversed: true,
        tdb: [{sign: 'fr N', time: '16:00'}, {sign: 'Kh', time: 'x'}, {sign: 'Sm', time: 'x'},
            {sign: 'Lm', time: 'x'}, {sign: 't J', time: '15:40'}]
    },
];
