const tombol = document.getElementById("tombol");

tombol.addEventListener("click", function () {
    alert("Halo! Selamat datang di website latihanmu 🎉");
});
function simpanCatatan(){

let isi = document.getElementById("catatan").value;

localStorage.setItem("catatanSaya", isi);

document.getElementById("status").innerHTML =
"✅ Catatan berhasil disimpan";
}

window.onload = function(){

let data = localStorage.getItem("catatanSaya");

if(data){
document.getElementById("catatan").value = data;
}

}
