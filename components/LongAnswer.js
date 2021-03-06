Vue.component('LongAnswer', {
    data() {
        return {
            details:{
                title: 'LongAnswer',
                placeholder:''
            }
            
        }
    },
    methods:{
        updateDataToParent(){
            this.$emit('change-parent-longanswer', this.details)
        }

    },
    template:`
    <div>
        <h2 class="mar-no pad-btm">{{details.title}}</h2>
        <input v-model="details.placeholder" v-on:change="updateDataToParent" type="text" class="form-control" placeholder="Placeholder (Texto informativo)...">        
    </div>
    `
})