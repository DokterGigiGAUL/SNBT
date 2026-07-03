// ======================================================
// AI Tutor SNBT
// Blueprint Database
// Sprint 1.1
// ======================================================

const blueprint = [

    {
        id: "PU",
        nama: "Penalaran Umum",

        kategori:[

        {
            kode:"L",
            nama:"Logika"
        },

        {
            kode:"A",
            nama:"Analitik"
        },

        {
            kode:"D",
            nama:"Diagram"
        },

        {
            kode:"I",
            nama:"Informasi"
        }
    ],

    subkompetensi:[

            { id: "PU-L01", nama: "Logika Dasar" },
            { id: "PU-L02", nama: "Silogisme" },
            { id: "PU-L03", nama: "Implikasi dan Ekuivalensi" },
            { id: "PU-L04", nama: "Kontradiksi dan Kontraposisi" },
            { id: "PU-L05", nama: "Pernyataan Majemuk" },
            { id: "PU-L06", nama: "Penalaran Deduktif" },
            { id: "PU-L07", nama: "Penalaran Induktif" },
            { id: "PU-L08", nama: "Logika Kuantor" },
            { id: "PU-L09", nama: "Logika Campuran" },

            { id: "PU-A01", nama: "Analogi" },
            { id: "PU-A02", nama: "Hubungan Sebab Akibat" },
            { id: "PU-A03", nama: "Analisis Argumen" },
            { id: "PU-A04", nama: "Kesimpulan" },
            { id: "PU-A05", nama: "Asumsi" },
            { id: "PU-A06", nama: "Penguatan Argumen" },
            { id: "PU-A07", nama: "Pelemahan Argumen" },
            { id: "PU-A08", nama: "Evaluasi Argumen" },
            { id: "PU-A09", nama: "Penalaran Analitik Campuran" },

            { id: "PU-D01", nama: "Diagram Venn" },
            { id: "PU-D02", nama: "Diagram Alur" },
            { id: "PU-D03", nama: "Diagram Tabel" },
            { id: "PU-D04", nama: "Diagram Posisi" },
            { id: "PU-D05", nama: "Diagram Relasi" },
            { id: "PU-D06", nama: "Diagram Kombinasi" },
            { id: "PU-D07", nama: "Diagram Campuran" },

            { id: "PU-I01", nama: "Interpretasi Tabel" },
            { id: "PU-I02", nama: "Interpretasi Grafik" },
            { id: "PU-I03", nama: "Interpretasi Diagram" },
            { id: "PU-I04", nama: "Perbandingan Data" },
            { id: "PU-I05", nama: "Analisis Data" },
            { id: "PU-I06", nama: "Prediksi Data" },
            { id: "PU-I07", nama: "Evaluasi Informasi" },
            { id: "PU-I08", nama: "Informasi Campuran" }

        ]
    },

    {
        id:"PM",
        nama:"Penalaran Matematika",

        kategori:[

        {
            kode:"A",
            nama:"Aljabar"
        },

        {
            kode:"G",
            nama:"Geometri"
        },

        {
            kode:"S",
            nama:"Statistika"
        },

        {
            kode:"P",
            nama:"Peluang"
        }
    ],

    subkompetensi:[]
    },

    {
        id: "LI",
        nama: "Literasi Bahasa Indonesia",
        
        kategori:[

        {
            kode:"T",
            nama:"Teks"
        },

        {
            kode:"B",
            nama:"Bahasa"
        }

        ],
    subkompetensi: []
    },

    {
        id: "LB",
        nama: "Literasi Bahasa Inggris",

        kategori:[

        {
            kode:"T",
            nama:"Teks"
        },

        {
            kode:"B",
            nama:"Bahasa"
        }
    ],
        
    subkompetensi: []
    },

    {
        id: "PI",
        nama: "Penalaran Ilmiah",

        kategori:[

    {
        kode:"B",
        nama:"Biologi"
    },

    {
        kode:"K",
        nama:"Kimia"
    },

    {
        kode:"F",
        nama:"Fisika"
    }
    ],
        subkompetensi: []
    }

];
