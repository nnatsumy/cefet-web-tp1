function expand(img){
		console.log('aqui');
        document.getElementById('imgmodal').src = img.src;
        document.getElementById('modal-background').fadeIn();
        document.getElementById('modal-background').click(function(){
            closeModal();
         });

}

function closeModal(){
  $('#modal-background').fadeOut();
}

let mc = document.getElementById('modal-content');
let mb = document.getElementById('modal-background');
let img = document.getElementById('img1');
img.addEventListener('click',expand(img,mc,mb));

