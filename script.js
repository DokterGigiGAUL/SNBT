const userList = document.getElementById("userList");

// Membuat daftar akun dari users.js
users.forEach((user, index) => {

    const label = document.createElement("label");
    label.className = "user-option";

    label.innerHTML = `
<div class="user-header">

<input
type="radio"
name="user"
value="${user.id}"
${index===0 ? "checked" : ""}
>

<span>${user.nama}</span>

</div>

<input
type="text"
class="target-input"
placeholder="Pilihan Fakultas & Universitas"
id="target-${user.id}"
>
`;
    

    userList.appendChild(label);

});

// Login
document
.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const radio =
    document.querySelector('input[name="user"]:checked');

    const id = radio.value;

    const target =
    document.getElementById(`target-${id}`).value;

    localStorage.setItem("activeUser", id);
    localStorage.setItem("targetPilihan", target);

    window.location.href="dashboard.html";

});
