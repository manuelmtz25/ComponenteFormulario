Vue.component('Radiobutton', {
    data() {
        return {
            details:{
                title: 'Radiobutton',
                counter: 1,
                items:[]
            }            
        }
    },

    methods:{
        addItem(){
            this.details.counter++;                    
        },

        updateItem(value){                    
            this.details.items.push(value)
            this.$emit('change-parent-radio', this.details)
        },

        dropItem(value){
            this.details.items = itemsRemove(this.details.items, value);
        },    },

    template:`
        <div>
            <h1 id="h1">{{details.title}}</h1>        
            <div class="mar-btm">
                <button v-on:click="addItem" class="btn btn-default btn-rounded">AGREGAR ITEM</button>
            </div>       

            <div v-for="index in details.counter">
                <item v-on:change-item="updateItem" v-on:delete-item="dropItem"></item>
            </div>        
            {{details.items}}
        </div>
    `
})

function itemsRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele != value; 
    });
} 