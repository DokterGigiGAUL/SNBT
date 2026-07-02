const materiList =
document.getElementById("materiList");

blueprint.forEach((kompetensi) => {

    const card =
    document.createElement("div");

    card.className =
    "kompetensi-card";

    card.innerHTML = `

        <h3>${kompetensi.nama}</h3>

        <p>
            ${kompetensi.subkompetensi.length}
            Subkompetensi
        </p>

    `;

    materiList.appendChild(card);

});
