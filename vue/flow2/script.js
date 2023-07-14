function bandeira(pais){
    return '<img src="./'+pais+'.png" />';
}

let app = new Vue({
    el:'#app',
    data:{
        pais:'',
        argentina: bandeira('argentina'),
        brazil: bandeira('brazil'),
        china: bandeira('china'),
        uk: bandeira('uk'),
        usa: bandeira('usa')
    },
    methods: {
        paises: function (){
            return [
                {bandeira:this.argentina,continente: 'América do Sul'},
                {bandeira: this.brazil,continente: 'América do Sul'},
                {bandeira:this.china,continente:'Ásia'},
                {bandeira:this.uk,continente:'Europa'},
                {bandeira:this.usa,continente:'América do Norte'}
            ]
        }
    }
})

app.pais = 'brazil'