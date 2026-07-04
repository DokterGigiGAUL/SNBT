const frame =
document.getElementById("materiFrame");

const activeMateri =
localStorage.getItem("activeMateri");

if(
    activeMateri &&
    resources[activeMateri]
){

    frame.src =
    resources[activeMateri].ringkasan;

}
