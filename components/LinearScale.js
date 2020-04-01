Vue.component('LinearScale', {
    data(){
        return{
            details:{
                title: 'LinearScale',
                lowerValue: 1,
                upperValue: 2,
                lowerValueDescription:'',
                upperValueDescription:'',
            }            
        }
    },
    methods:{
        updateDataToParent(){
            this.$emit('change-parent-linearscale', this.details)
        }
    },
    template:`
    <div>
        <h1 id="h1">{{details.title}}</h1>

        <div class="row">
            <div class="col-md-6">
                <div>
                    Valor mínimo:
                </div>
                <div>
                    <select v-model="details.lowerValue" v-on:change="updateDataToParent" data-placeholder="Tipo de pregunta" id="lower-select" class="selectpicker">
                        <option value=1 selected disabled>1</option>
                    </select>
                </div>
                <div>                    
                    <input v-model="details.lowerValueDescription" v-on:change="updateDataToParent" type="text" class="form-control" placeholder="Etiqueta de valor mínimo">                    
                </div>
                <div>
                    {{details.lowerValue}} : {{details.lowerValueDescription}}
                </div>
            </div>
            <div class="col-md-6">
                <div>
                    Valor máximo:
                </div>
                <div>
                    <select v-model="details.upperValue" v-on:change="updateDataToParent" data-placeholder="Tipo de pregunta" id="upper-select" class="selectpicker">
                        <option value=2 selected>2</option>
                        <option value=3>3</option>
                        <option value=4>4</option>
                        <option value=5>5</option>
                        <option value=6>6</option>
                        <option value=7>7</option>
                        <option value=8>8</option>
                        <option value=9>9</option>
                        <option value=10>10</option>
                    </select>
                </div>
                <div>                    
                    <input v-model="details.upperValueDescription" v-on:change="updateDataToParent" type="text" class="form-control" placeholder="Etiqueta de valor máximo">
                </div>
                <div>
                    {{details.upperValue}} : {{details.upperValueDescription}}
                </div>
            </div>
        </div>
    </div>  
    `
})