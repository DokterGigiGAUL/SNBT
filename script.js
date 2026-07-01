document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const selectedUser = document.querySelector('input[name="user"]:checked').value;

    localStorage.setItem("activeUser", selectedUser);

    window.location.href = "pages/dashboard.html";

});
