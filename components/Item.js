Vue.component('Item', {
    data(){
        return{
            itemContent:''
        }
    },
    methods:{
        
    },
    template:`
        <div>
            <input v-model="itemContent" type="text" class="form-control" placeholder="Item component...">
        </div>
    `
})