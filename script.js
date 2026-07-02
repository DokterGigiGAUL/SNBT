const userList = document.getElementById("userList");

// Membuat daftar akun dari users.js
users.forEach((user, index) => {

    const label = document.createElement("label");
    label.className = "user-option";

    label.innerHTML = `
    <input
        type="radio"
        name="user"
        value="${user.id}"
        ${index === 0 ? "checked" : ""}
    >

    <div class="user-info">
        <span>${user.nama}</span>

        <small>Pilihan fakultas: <input
            type="text"
            class="target-input"
            id="target-${user.id}"
            value="${user.target}"
        >
        </small>
    </div>
`;

    userList.appendChild(label);

});

// Login
document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const selectedUser =
    document.querySelector('input[name="user"]:checked').value;

const target =
    document.getElementById(`target-${selectedUser}`).value;

localStorage.setItem("activeUser", selectedUser);
localStorage.setItem(`target_${selectedUser}`, target);

window.location.href = "pages/dashboard.html";

});
