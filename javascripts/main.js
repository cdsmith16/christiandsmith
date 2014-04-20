var parents = document.getElementsByClassName("parent");

function bounce(index){
	this.parents[index].classList.add('wiggle');
}

function bounce_wrapper(value) {
    return function () {
        bounce(value)
    }
}

for(i=0; i<parents.length; i++){
	setTimeout(bounce_wrapper(i),(i*4000));
}