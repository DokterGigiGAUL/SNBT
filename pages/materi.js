const kompetensiTabs =
document.getElementById("kompetensiTabs");

const kategoriTabs =
document.getElementById("kategoriTabs");

const subkompetensiList =
document.getElementById("subkompetensiList");

let activeKompetensi = null;
let activeKategori = null;


init();

function init(){

    renderKompetensi();

    if(blueprint.length){

        pilihKompetensi(
            blueprint[0].id
        );

    }

}

function renderKompetensi(){

    kompetensiTabs.innerHTML="";

    blueprint.forEach(k=>{

        const btn=document.createElement("button");

        btn.textContent=k.nama;

        btn.className="tab-button";

        btn.id="kom-"+k.id;

        btn.onclick=()=>pilihKompetensi(k.id);

        kompetensiTabs.appendChild(btn);

    });

}

function pilihKompetensi(id){

    activeKompetensi=id;

    document
    .querySelectorAll("#kompetensiTabs .tab-button")
    .forEach(b=>b.classList.remove("active"));

    document
    .getElementById("kom-"+id)
    .classList.add("active");

    const data=
    blueprint.find(k=>k.id===id);

    renderKategori(data);

}

function renderKategori(data){

    kategoriTabs.innerHTML="";

    const grup={};

    data.subkompetensi.forEach(item=>{

        const parts = item.id.split("-");
        const kode = parts[parts.length - 1][0];

        if(!grup[kode]){

            grup[kode]=[];

        }

        grup[kode].push(item);

    });

    const keys=
    Object.keys(grup);

    if(keys.length===0){

        subkompetensiList.innerHTML=
        "<p class='placeholder'>Materi belum tersedia.</p>";

        return;

    }

    keys.forEach(k=>{

        const btn=
        document.createElement("button");

        btn.className="tab-button";

        const kategori =
        data.kategori.find(
        item => item.kode === k
        );

        btn.textContent =
        kategori
        ? kategori.nama
        : k;

        btn.id="kat-"+k;

        btn.onclick=()=>{

            pilihKategori(
                k,
                grup[k]
            );

        };

        kategoriTabs.appendChild(btn);

    });

    pilihKategori(
        keys[0],
        grup[keys[0]]
    );

}

function pilihKategori(kode,list){

    activeKategori=kode;

    document
    .querySelectorAll("#kategoriTabs .tab-button")
    .forEach(b=>b.classList.remove("active"));

    document
    .getElementById("kat-"+kode)
    .classList.add("active");

    renderSubkompetensi(list);

}

function renderSubkompetensi(list){

    subkompetensiList.innerHTML="";

    list.forEach(item=>{

        const card=
        document.createElement("div");

        card.className=
        "subkompetensi-card";

        card.innerHTML=`

        <strong>${item.id}</strong>

        <p>${item.nama}</p>

        `;

        card.onclick=()=>{

            localStorage.setItem(
                "activeMateri",
                item.id
            );

            window.location.href =
            "subkompetensi.html";

        };

        subkompetensiList.appendChild(card);

    });

}
