let bola = {
    template:`
        <div class="bola"></div>
    `
}

Vue.component('sinal',{
    components:{
        bola
    },
    template:`
        <div class="sinal">
            <bola />
            <bola />
            <bola />
        </div>
    `
})

let app = new Vue({
    el:'#app',
    data:{

    }
})