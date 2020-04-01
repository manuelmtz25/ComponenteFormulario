Vue.component('Radiobutton', {
    data() {
        return {
            title: 'Radiobutton',
            counter: 1,
            array:[]                 
        }
    },

    methods:{
        addItem(){
            this.counter++;                    
        },

        updateItem(value){                    
            this.array.push(value)
        },

        dropItem(value){
            this.array = arrayRemove(this.array, value);
        }
    },

    template:`
        <div>
            <h1 id="h1">{{title}}</h1>        
            <div class="mar-btm">
                <button v-on:click="addItem" class="btn btn-default btn-rounded">AGREGAR ITEM</button>
            </div>       

            <div v-for="index in counter">
                <item v-on:change-item="updateItem" v-on:delete-item="dropItem"></item>
            </div>        
            {{array}}
        </div>
    `
})

function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele != value; 
    });
} 