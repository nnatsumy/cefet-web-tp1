function expand(e){
		console.log('aqui');
		let el = e.currentTarget;
		document.getElementById('imgmodal').src = el.src;
		let img = document.getElementById('imgclose');
		img.style.opacity = 1.0;
        //document.getElementById('imgmodal').src = img.src;
}

function close(e){
		let el = e.currentTarget;
		document.getElementById('imgmodal').src = '';
		el.style.opacity = 0;
}


let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');

let closeimg = document.getElementById('imgclose');

img1.addEventListener('click',expand);
img2.addEventListener('click',expand);
img3.addEventListener('click',expand);
img4.addEventListener('click',expand);
img5.addEventListener('click',expand);

closeimg.addEventListener('click',close);
