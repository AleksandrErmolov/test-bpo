
const store = {

    city: [
        { label: 'Москва' },
        { label: 'Питер' },
        { label: 'Волгоград' },
        { label: 'Самара' },
        { label: 'Минск' },
        { label: 'Саратов' },
        { label: 'Вологда' },
    ],

    depature: {

        from: '',
        to: '',
        date: ''
    },


    checkFiltr: [


        {
            id: 0,
            name: 'Без пересадок'
        },

        {
            id: 1,
            name: '1 пересадка'

        },


        {
            id: 2,
            name: '2 пересадки'
        },


        {
            id: 3,
            name: '3 пересадки'
        }

    ],



}


export default store;