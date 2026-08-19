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
function tambahTask() {

    let input = document.getElementById("task");
    let tugas = input.value;

    if (tugas === "") {
        alert("Tulis tugas dulu!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="selesaiTask(this)">
            ☐ ${tugas}
        </span>

        <button onclick="hapusTask(this)">
            🗑
        </button>
    `;

    document.getElementById("list").appendChild(li);

    input.value = "";
}

function selesaiTask(element) {

    if (element.innerHTML.startsWith("☐")) {
        element.innerHTML = element.innerHTML.replace("☐", "☑");
    } else {
        element.innerHTML = element.innerHTML.replace("☑", "☐");
    }
}

function hapusTask(button) {
    button.parentElement.remove();
}
