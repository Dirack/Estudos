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
    }
})

app.pais = 'brazil'