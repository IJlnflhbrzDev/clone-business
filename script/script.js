$('.carousel').carousel({
     interval: 1000 * 10
});

// animation scroll vanilla javascript
const navbar = document.querySelector('.navbar'); // membuat variabel const untuk menangkap element yg akan di jadikan animasi scroll nya
window.onscroll = function () {  // window onscroll ini artinya jika window di sedang di scroll  =  lalu meng inisiliasasikan sebuah function tanpa nama dan  tanpa argument
     var top_Windows_ScrollY = window.scrollY; //membuat variabel top_Windows_ScrollY dan mengisi dengan nilai dari tinggi window ketika di scroll jika ingin melakukan animation scroll ketika di tinggi window tertentu maka tampilkan lah variabel top_Windows_ScrollY pada console
     if (top_Windows_ScrollY >= 100) { //jadi jika  si var top_Windows_ScrollY lebih besar dari sama dengan 600 maka
          navbar.classList.add('scrolling_active'); // navbar yg awal nya mengambil dom class pada  class .navbar  akan menambah kan class baru yaitu scrolling_active
     } else {
          navbar.classList.remove('scrolling_active')  //jika tidak terpenuhi maka class scrolling_active akan di remove
     }
}

// animation icont navbar
const bxIconsSpin = document.querySelector('.bxs-radiation');
bxIconsSpin.addEventListener('click', function () {
     bxIconsSpin.classList.toggle('bx-spin')
});

// animation icont  ketika di click pada button show accordion
$(document).ready(function () {
     $('.collapse.show').each(function () {
       $(this).prev('.card-header').find('.far').addClass(' fa-minus-square').removeClass(' fa-plus-square');
     });
     $('.collapse').on('show.bs.collapse' , function () {
       $(this).prev('.card-header').find('.far').removeClass(' fa-plus-square').addClass(' fa-minus-square');
     }).on('hide.bs.collapse',function () {
       $(this).prev('.card-header').find('.far').removeClass('fa-minus-square').addClass('fa-plus-square');
     });
   });
// end animation icont accordion


//  handleButtonSubmitForm  Contact
const handleButtonSubmitForm = document.querySelector('form'); // mengambil dom button clicked html
handleButtonSubmitForm.addEventListener('submit',function (e) {
     e.preventDefault()
     var exampleInputUsername = document.getElementById('exampleInputUsername') //next buat validasi nama
     var exampleInputEmail = document.getElementById('exampleInputEmail');  //sama seperti di aatas
     swal(`Terimakasih Telah Memberi Komentar!  `, `Sampai Jumpa Kembali`, `success`); //validation succes alert
     this.reset('') // mereset semua isi form ketika user telah melakukan submit form
})