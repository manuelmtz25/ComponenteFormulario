Vue.component('LongAnswer', {
    data() {
        return {
            title: 'LongAnswer',
            placeholder:''
        }
    },
    methods:{

    },
    template:`
    <div>
        <h1 id="h1">{{title}}</h1>
        <input v-model="placeholder" type="text" class="form-control" placeholder="Texto informativo">
        {{placeholder}}
    </div>
    `
})