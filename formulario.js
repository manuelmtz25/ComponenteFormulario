$(document).ready(function(){
    var elem = document.querySelector('#sw-required');
    var init = new Switchery(elem);
});

var app = new Vue({
    el: '#app',
    data: {
        question:{
            title:'',
            typeSelected:'',                        
            required:true
        },
        jsonData:'',
        jsonObj:null,                    
    },

    methods:{
        getData(){
            this.jsonData=JSON.stringify(this.question)
            this.jsonObj=JSON.parse(this.jsonData)
        },
    },

    computed:{
        information(){
            return `
                ${this.question.title}
                ${this.question.typeSelected}
                ${this.question.required}                        
            `
        }
    }
})