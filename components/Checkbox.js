Vue.component('Checkbox', {
    data() {
        return {
            title: 'Checkbox',
            counter: 1,
            array:[]                 
        }
    },

    methods:{
        addItem(){
            this.counter++;                    
        },

        getItems(){
            this.array=[]
            var a=this.$children.entries()
            for(i of a){
                if(i[1].itemContent!='')
                    this.array.push(i[1].itemContent)
            }                    
        }
    },
    template:`
    <div>
        <h1 id="h1">{{title}}</h1>        
        <button v-on:click="addItem" class="btn btn-default btn-rounded">AGREGAR ITEM</button>
        <button v-on:click="getItems" class="btn btn-default btn-rounded">OBTENER INFO</button>
        <div v-for="index in counter">
            <item></item>
        </div>        
        {{array}}
    </div>
    `
})