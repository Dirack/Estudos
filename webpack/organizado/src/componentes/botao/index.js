import './style.css';

class Botao {

    constructor(){
        this.title = '';
        this.callback = function(){};
    }

    setTitle(t){
        this.title = t;
    }

    setClick(f){
        this.callback = f;
    }

    render(){
        let b = document.createElement('button');
        b.classList.add('botao');
        b.innerHTML = this.title;
        b.addEventListener('click',this.callback);

        return b;
    }

}

export default Botao;