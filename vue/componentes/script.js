function bandeira(pais){
    return '<img src="./'+pais+'.png" />';
}

Vue.component("pais",{
    props: ['nome','continente'],
    template: '<div><p v-html="nome"></p><p v-html="continente"></p></div>'
})

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