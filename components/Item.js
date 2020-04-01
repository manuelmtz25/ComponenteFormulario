Vue.component('Item', {
    data(){
        return{
            itemContent:'',
            enabled:'auto',
            deleted:false,
            color:''
        }
    },
    methods:{
        changeItem(){
            this.enabled='none'
            this.color='efefef'
            this.$emit('change-item', this.itemContent)
        },

        deleteItem(){
            this.deleted=true
            this.$emit('delete-item', this.itemContent)
        }
    },
    template:`
        <div  v-if="deleted==false">
            <div class="input-group mar-btm">
                <input v-model="itemContent" v-on:change="changeItem" type="text" class="form-control" placeholder="Item component..." :style="{'pointer-events': enabled, 'background-color': '#'+ color}">
                <span class="input-group-btn">
                    <button v-on:click="deleteItem" class="btn btn-rojo btn-rounded" type="button">BORRAR</button>
                </span>
            </div>
        </div>
    `
})