const materiKode =
document.getElementById("materiKode");

const materiNama =
document.getElementById("materiNama");

init();

function init(){

    const activeMateri =
    localStorage.getItem(
        "activeMateri"
    );

    if(!activeMateri){

        window.location.href =
        "materi.html";

        return;

    }

    let materi = null;

    blueprint.forEach(k=>{

        const hasil =
        k.subkompetensi.find(
            item=>item.id===activeMateri
        );

        if(hasil){

            materi = hasil;

        }

    });

    if(!materi){

        window.location.href =
        "materi.html";

        return;

    }

    materiKode.textContent =
    materi.id;

    materiNama.textContent =
    materi.nama;

}
