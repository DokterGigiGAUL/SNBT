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

        <span>${user.nama}</span>
        <small>Target: ${user.target}</small>
    `;

    userList.appendChild(label);

});

// Login
document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const selectedUser =
        document.querySelector('input[name="user"]:checked').value;

    localStorage.setItem("activeUser", selectedUser);

    window.location.href = "pages/dashboard.html";

});
