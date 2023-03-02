import React from "react";

let state = {
    content: {
        postsData: [
            {id: '1', message: 'Hi, my name is.', level: 1},
            {id: '2', message: 'Im Frontend Developer', level: 30},
            {id: '3', message: 'Im love a beautiful girls. You love a girls? --> Like!!!', level: 100},
        ]
    },
    messages: {
        usersMessage: [
            {id: '1', message: 'Hi brother!'},
            {id: '2', message: 'Hi man!'},
            {id: '3', message: 'How are you?'},
            {id: '4', message: 'На девятов этаже('},
            {id: '2', message: 'Что там делаешь?'},
            {id: '5', message: 'Хочу выйти...'},
        ],
        dialogsData: [
            {id: '1', name: 'Nik Filman'},
            {id: '2', name: 'Mich Filman'},
            {id: '3', name: 'Vera Filmana'},
            {id: '4', name: 'Vik Prigozin'},
        ],
    },
    sidebarRight: {
        favorites: [
            {id: '1', personName: 'Kathy Pacheco'},
            {id: '2', personName: 'Rodger Struck'},
            {id: '3', personName: 'Alex Buckmaster'},
        ]
    }
};

export default state;