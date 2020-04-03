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
        },    
    },

    template:`
        <div>
            <h2>{{details.title}}</h2>
            <div class="mar-btm">
                <button v-on:click="addItem" class="btn btn-default btn-rounded">NUEVO ITEM</button>
            </div>       

            <div v-for="index in details.counter">
                <item v-on:change-item="updateItem" v-on:delete-item="dropItem"></item>
            </div>
        </div>
    `
})

function itemsRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele != value; 
    });
} 