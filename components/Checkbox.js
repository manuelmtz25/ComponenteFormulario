Vue.component('Checkbox', {
    data() {
        return {
            details:{
                title: 'Checkbox',
                counter: 1,
                array:[]
            }            
        }
    },

    methods:{
        addItem(){
            this.details.counter++;                    
        },

        updateItem(value){                    
            this.details.array.push(value)
            this.$emit('change-parent-checkbox', this.details)
        },

        dropItem(value){
            this.details.array = arrayRemove(this.details.array, value);
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
            {{details.array}}
        </div>
    `
})

function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele != value; 
    });
} 