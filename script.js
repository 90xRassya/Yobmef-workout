// =========================
// TOMBOL HOME
// =========================

const tombol = document.getElementById("tombol");

if (tombol) {
    tombol.addEventListener("click", function () {
        alert("Halo! Selamat datang di website latihanmu 🎉");
    });
}


// =========================
// CATATAN
// =========================

function simpanCatatan() {

    let kotak = document.getElementById("catatan");

    if (!kotak) return;

    let isi = kotak.value;

    localStorage.setItem("catatanSaya", isi);

    let status = document.getElementById("status");

    if (status) {
        status.innerHTML = "✅ Catatan berhasil disimpan";
    }
}


function muatCatatan() {

    let kotak = document.getElementById("catatan");

    if (!kotak) return;

    let data = localStorage.getItem("catatanSaya");

    if (data) {
        kotak.value = data;
    }
}
// =========================
// TODO LIST
// =========================

function tambahTask() {

    let input = document.getElementById("task");
    let list = document.getElementById("list");

    if (!input || !list) return;

    let tugas = input.value.trim();

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

    list.appendChild(li);

    input.value = "";

    simpanTodo();
}


function selesaiTask(element) {

    if (element.innerHTML.includes("☐")) {

        element.innerHTML =
            element.innerHTML.replace("☐", "☑");

    } else {

        element.innerHTML =
            element.innerHTML.replace("☑", "☐");
    }

    simpanTodo();
}


function hapusTask(button) {

    button.parentElement.remove();

    simpanTodo();
}


function simpanTodo() {

    let list = document.getElementById("list");

    if (!list) return;

    localStorage.setItem("todoSaya", list.innerHTML);
}


function muatTodo() {

    let list = document.getElementById("list");

    if (!list) return;

    let data = localStorage.getItem("todoSaya");

    if (data) {
        list.innerHTML = data;
    }
}
// =========================
// JALANKAN SAAT HALAMAN DIBUKA
// =========================

window.addEventListener("load", function () {

    muatCatatan();
    muatTodo();

});
