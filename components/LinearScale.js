Vue.component('LinearScale', {
    data(){
        return{
            title: 'LinearScale',
            lowerValue: 1,
            upperValue: 2,
            lowerValueDescription:'',
            upperValueDescription:'',
        }
    },
    methods:{

    },
    template:`
    <div>
        <h1 id="h1">{{title}}</h1>

        <div class="row">
            <div class="col-md-6">
                <div>
                    Valor mínimo:
                </div>
                <div>
                    <select v-model="lowerValue" data-placeholder="Tipo de pregunta" id="upper-select" class="selectpicker">
                        <option value=1 selected disabled>1</option>
                    </select>
                </div>
                <div>                    
                    <input v-model="lowerValueDescription" type="text" class="form-control" placeholder="Etiqueta de valor mínimo">                    
                </div>
                <div>
                    {{lowerValue}} : {{lowerValueDescription}}
                </div>
            </div>
            <div class="col-md-6">
                <div>
                    Valor máximo:
                </div>
                <div>
                    <select v-model="upperValue" data-placeholder="Tipo de pregunta" id="upper-select" class="selectpicker">
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
                    <input v-model="upperValueDescription" type="text" class="form-control" placeholder="Etiqueta de valor máximo">
                </div>
                <div>
                    {{upperValue}} : {{upperValueDescription}}
                </div>
            </div>
        </div>
    </div>  
    `
})