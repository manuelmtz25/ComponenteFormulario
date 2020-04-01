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
        <h1 id="h1">{{details.title}}</h1>
        <input v-model="details.placeholder" v-on:change="updateDataToParent" type="text" class="form-control" placeholder="Texto informativo">
        {{details.placeholder}}
    </div>
    `
})