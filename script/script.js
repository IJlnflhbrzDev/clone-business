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