const kompetensiList =
document.getElementById("kompetensiList");

const subkompetensiList =
document.getElementById("subkompetensiList");

let activeKompetensi = null;

init();

function init(){

    renderKompetensi();

    if(blueprint.length > 0){

        pilihKompetensi(
            blueprint[0].id
        );

    }

}

function renderKompetensi(){

    kompetensiList.innerHTML="";

    blueprint.forEach((kompetensi)=>{

        const button =
        document.createElement("button");

        button.className =
        "kompetensi-button";

        button.textContent =
        kompetensi.nama;

        button.onclick=()=>{

            pilihKompetensi(
                kompetensi.id
            );

        };

        button.id=
        "btn-"+kompetensi.id;

        kompetensiList.appendChild(button);

    });

}

function pilihKompetensi(id){

    activeKompetensi=id;

    document
    .querySelectorAll(".kompetensi-button")
    .forEach(btn=>{

        btn.classList.remove("active");

    });

    document
    .getElementById("btn-"+id)
    .classList.add("active");

    const data=
    blueprint.find(k=>k.id===id);

    renderSubkompetensi(data);

}

function renderSubkompetensi(data){

    subkompetensiList.innerHTML="";

    if(data.subkompetensi.length===0){

        subkompetensiList.innerHTML=
        "<p class='placeholder'>Materi belum tersedia.</p>";

        return;

    }

    data.subkompetensi.forEach(item=>{

        const card=
        document.createElement("div");

        card.className=
        "subkompetensi-card";

        card.innerHTML=`

        <strong>${item.id}</strong>

        <p>${item.nama}</p>

        `;

        card.onclick=()=>{

            pilihSubkompetensi(item);

        };

        subkompetensiList.appendChild(card);

    });

}

function pilihSubkompetensi(item){

    localStorage.setItem(
        "activeMateri",
        item.id
    );

    alert(
        item.id+
        "\n"+
        item.nama+
        "\n\nSiap menuju Ringkasan Materi."
    );

    // window.location.href="ringkasan.html";

}
