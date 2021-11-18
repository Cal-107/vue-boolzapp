const root = new Vue ({
    el: '#root',
    data: {
        user: {
            name: 'Calogero',
            lastname: 'Bonito',
            avatar: '_5',
            visible: true,
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },    {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },    {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        chatAnswers: ['Ma stai scherzando?', 'In che senso?', 'Per me è no', 'Sicuramente', 'Non saprei', 'Sono in riunione'],
        userActive: 0,
        newMess: '',
        newSearch: '',
        dropDown: false,
        chatActive: null,
    },
    methods: {
        
        // for get the index
        userClick(index) {
            this.userActive = index;
            this.scrollToEnd();
            this.chatActive = null
        },

        // input send message
        sendMess() {
            if(this.newMess !== '') {
                this.contacts[this.userActive].messages.push({
                    date: this.getDate(),
                    text: this.newMess,
                    status: 'sent',
                });
                this.scrollToEnd()

                // reset input
                this.newMess = '';

                // set bot answers
                setTimeout(() => {
                    this.contacts[this.userActive].messages.push({
                        date: this.getDate(),
                        text: this.chatAnswers[this.randNum(this.chatAnswers.length)],
                        status: 'received',
                    });
                    this.scrollToEnd()
                }, 1000);
            };
        },

        // set auto scroll bottom
        scrollToEnd() {
            setTimeout(() => {
                let container = document.querySelector(".scroll");
                let scrollHeight = container.scrollHeight;
                container.scrollTop = scrollHeight;
            }, 1);
        },

        // create date
        getDate() {
            const nowDate = dayjs().format('DD/MM/YYYY HH:mm:ss');
            return nowDate
        },

        // create rand number for array
        randNum(num) {
            return Math.floor(Math.random() * num);
        },

        // input search
        inputSearch() {
            this.contacts.forEach( element => {
                if (!element.name.toLowerCase().includes(this.newSearch.toLowerCase())) {
                    element.visible = false;
                } else {
                   element.visible = true; 
                }
            });
        },

        // show dropdown
        showDropDown(index) {
            if (this.chatActive === index) {
                this.chatActive = null;
            } else {
                this.chatActive = index;
            }
        },

        // delete message
        deleteMess(index) {
            this.contacts[this.userActive].messages.splice(index, 1)
        }
    }
})
