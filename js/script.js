const btn = document.getElementById("btnTambah");
const list = document.getElementById("list");
const totalText = document.getElementById("total");

// state (data disimpan di sini)
let activities = [];

btn.addEventListener("click", function () {
    const activityInput = document.getElementById("activity");
    const durationInput = document.getElementById("duration");

    const name = activityInput.value;
    const duration = parseInt(durationInput.value);

    // validasi
    if (name === "" || isNaN(duration)) {
        alert("Input tidak valid!");
        return;
    }

    // simpan ke array
    activities.push({
        name: name,
        duration: duration
    });

    render();

    // reset input
    activityInput.value = "";
    durationInput.value = "";
});

// fungsi render (inti dari aplikasi)
function render() {
    list.innerHTML = "";

    let total = 0;

    activities.forEach((item) => {
        total += item.duration;

        const li = document.createElement("li");
        li.textContent = item.name + " - " + item.duration + " menit";

        list.appendChild(li);
    });

    totalText.textContent =
        "Total: " + total + " Menit (" + activities.length + " Aktivitas)";
}