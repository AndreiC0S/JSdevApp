const { createApp } = Vue;

let vm = createApp({
    data(){
        return {
            fname: 'Ion',
            lname: 'Lee',
            address: 'Brasov',
            message: 'Hello',
        }
    },
    methods: {
        myName: function(){
            return `Eu ma numesc ${this.fname} ${this.lname} si sunt din ${this.address}`
        }
    }
}).mount('#app')