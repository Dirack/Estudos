export default class Pagination{
	constructor(elementId){
		this.container = this.getElement(elementId);
		this.currentPage = 1;
		this.numberOfPages = 4;
		this.numberOfActivePages = 4;
		this.labelsArray = ['Previous','1','2','3','4','Next'];

		let divcontainer = document.createElement("div");
		divcontainer.classList.add("container");

		let ul = document.createElement("ul");
		ul.classList.add("pagination");
		ul.classList.add("justify-content-center");
		for(let i=0; i < this.labelsArray.length; i++){
			let label = document.createTextNode(this.labelsArray[i]);
			let a = document.createElement("a");
			a.classList.add("page-link");
			a.setAttribute("href","#");
			a.setAttribute("data-label",this.labelsArray[i].toLowerCase());
			a.appendChild(label);
			a.addEventListener("click",(e)=>{
				this.updatePagination(e.target.getAttribute('data-label'));
			});
			let li = document.createElement("li");
			li.classList.add("page-item");
			li.appendChild(a);
			ul.appendChild(li);
		}

		let paginationlabels = ul.querySelectorAll("li");
		paginationlabels[0].classList.add("disabled");
		paginationlabels[1].classList.add("active");

		for(let i=this.numberOfActivePages+1; i<this.numberOfPages+1;i++)
			paginationlabels[i].classList.add("disabled");

		divcontainer.appendChild(ul);

		this.container.appendChild(divcontainer);
	}

	getCurrentPage(){
		return this.currentPage;
	}

	setCurrentPage(n){
		if(n > this.numberOfActivePages || n < 1)
			return;
		this.currentPage = n;
	}

	updateActivePaginationNumber(){
		this.container.querySelector("li.active").classList.remove("active");
		this.container.querySelectorAll("li")[this.currentPage].classList.add("active");
	}

	updateNextPreviousLabels(){
		let next = this.container.querySelectorAll("li")[this.labelsArray.length-1];
		let prev = this.container.querySelectorAll("li")[0];
		if(this.currentPage >= this.numberOfActivePages){
			next.classList.add("disabled");
		}else{
			next.classList.remove("disabled");
		}

		if(this.currentPage <= 1){
			prev.classList.add("disabled");
		}else{
			prev.classList.remove("disabled");
		}
	}

	updatePagination(e){
		if(e === 'next'){
			this.setCurrentPage(this.currentPage+1);
		}else if(e === 'previous'){
			this.setCurrentPage(this.currentPage-1);
		}else{
			this.setCurrentPage(parseInt(e));
		}

		this.updateActivePaginationNumber();
		this.updateNextPreviousLabels();
	}

	updatePaginationNumber(){
		let paginationlabels = this.container.querySelectorAll("li");
		for(let i=1; i < this.numberOfActivePages+1; i++)
			paginationlabels[i].classList.remove("disabled");
		for(let i=this.numberOfActivePages+1; i<this.numberOfPages+1;i++)
			paginationlabels[i].classList.add("disabled");
	}

	setNumberOfActivePages(n){
		if(n > this.numberOfPages || n < 1)
			return;

		this.numberOfActivePages = n;
		this.currentPage = 1;
		this.updateActivePaginationNumber();
		this.updatePaginationNumber();
		this.updateNextPreviousLabels();
	}

	getElement(element) {
		const foundElement = document.getElementById(element);
		return foundElement;
	}
}


