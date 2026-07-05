// ======================================================
// AI Tutor SNBT
// Blueprint Database
// Sprint 1.1
// ======================================================

const blueprint = [

{
    id: "TPS-KPU",
    nama: "Kemampuan Penalaran Umum",

    kategori: [

        {
            kode: "A",
            nama: "Penalaran Induktif"
        },

        {
            kode: "B",
            nama: "Penalaran Deduktif"
        },

        {
            kode: "C",
            nama: "Penalaran Kuantitatif"
        }

    ],

    subkompetensi: [

        // =========================
        // Penalaran Induktif
        // =========================

        {
            id: "TPS-KPU-A01",
            nama: "Kesesuaian Pernyataan Berdasarkan Data/Grafik/Tabel"
        },

        {
            id: "TPS-KPU-A02",
            nama: "Pola Barisan Angka"
        },

        {
            id: "TPS-KPU-A03",
            nama: "Pola Barisan Huruf"
        },

        {
            id: "TPS-KPU-A04",
            nama: "Analisis Pola Gambar"
        },

        // =========================
        // Penalaran Deduktif
        // =========================

        {
            id: "TPS-KPU-B01",
            nama: "Silogisme"
        },

        {
            id: "TPS-KPU-B02",
            nama: "Modus Ponens"
        },

        {
            id: "TPS-KPU-B03",
            nama: "Modus Tollens"
        },

        {
            id: "TPS-KPU-B04",
            nama: "Analisis Kondisi Bersyarat"
        },

        {
            id: "TPS-KPU-B05",
            nama: "Penalaran Analitis"
        },

        // =========================
        // Penalaran Kuantitatif
        // =========================

        {
            id: "TPS-KPU-C01",
            nama: "Estimasi dan Aproksimasi"
        },

        {
            id: "TPS-KPU-C02",
            nama: "Operasi Aritmetika Kontekstual"
        },

        {
            id: "TPS-KPU-C03",
            nama: "Efek Perubahan Variabel"
        }

    ]
},

{
    id: "TPS-PPU",
    nama: "Pengetahuan dan Pemahaman Umum",

    kategori: [

        {
            kode: "A",
            nama: "Memahami Ide Pokok & Informasi Kontekstual"
        },

        {
            kode: "B",
            nama: "Analisis Struktur & Hubungan Wacana"
        },

        {
            kode: "C",
            nama: "Kebahasaan dan Makna Kata"
        }

    ],

    subkompetensi: [

        // =========================
        // Memahami Ide Pokok & Informasi Kontekstual
        // =========================

        {
            id: "TPS-PPU-A01",
            nama: "Ide Pokok Paragraf"
        },

        {
            id: "TPS-PPU-A02",
            nama: "Simpulan Teks"
        },

        // =========================
        // Analisis Struktur & Hubungan Wacana
        // =========================

        {
            id: "TPS-PPU-B01",
            nama: "Hubungan Antarparagraf"
        },

        {
            id: "TPS-PPU-B02",
            nama: "Sikap Penulis"
        },

        {
            id: "TPS-PPU-B03",
            nama: "Nada (Tone) Penulis"
        },

        {
            id: "TPS-PPU-B04",
            nama: "Tujuan Penulis"
        },

        // =========================
        // Kebahasaan dan Makna Kata
        // =========================

        {
            id: "TPS-PPU-C01",
            nama: "Makna Kata Berdasarkan Konteks"
        },

        {
            id: "TPS-PPU-C02",
            nama: "Sinonim Kontekstual"
        },

        {
            id: "TPS-PPU-C03",
            nama: "Antonim Kontekstual"
        },

        {
            id: "TPS-PPU-C04",
            nama: "Kata Bentukan"
        },

        {
            id: "TPS-PPU-C05",
            nama: "Kata Serapan"
        },

        {
            id: "TPS-PPU-C06",
            nama: "Idiom"
        }

    ]
},
{
    id: "TPS-PBM",
    nama: "Kemampuan Memahami Bacaan dan Menulis",

    kategori: [

        {
            kode: "A",
            nama: "Pemahaman Isi Teknis Bacaan"
        },

        {
            kode: "B",
            nama: "Penalaran & Perbaikan Struktur Kalimat"
        },

        {
            kode: "C",
            nama: "Mekanisme & Tata Bahasa"
        }

    ],

    subkompetensi: [

        // =========================
        // Pemahaman Isi Teknis Bacaan
        // =========================

        {
            id: "TPS-PBM-A01",
            nama: "Informasi Tersurat"
        },

        {
            id: "TPS-PBM-A02",
            nama: "Informasi Tersirat"
        },

        {
            id: "TPS-PBM-A03",
            nama: "Klasifikasi Isi Teks"
        },

        // =========================
        // Penalaran & Perbaikan Struktur Kalimat
        // =========================

        {
            id: "TPS-PBM-B01",
            nama: "Kalimat Tidak Efektif"
        },

        {
            id: "TPS-PBM-B02",
            nama: "Kalimat Ambigu"
        },

        {
            id: "TPS-PBM-B03",
            nama: "Kalimat Tidak Logis"
        },

        {
            id: "TPS-PBM-B04",
            nama: "Pleonasme"
        },

        {
            id: "TPS-PBM-B05",
            nama: "Ketidaksejajaran Struktur"
        },

        // =========================
        // Mekanisme & Tata Bahasa
        // =========================

        {
            id: "TPS-PBM-C01",
            nama: "Huruf Kapital"
        },

        {
            id: "TPS-PBM-C02",
            nama: "Huruf Miring"
        },

        {
            id: "TPS-PBM-C03",
            nama: "Huruf Tebal"
        },

        {
            id: "TPS-PBM-C04",
            nama: "Tanda Baca"
        },

        {
            id: "TPS-PBM-C05",
            nama: "Konjungsi"
        },

        {
            id: "TPS-PBM-C06",
            nama: "Judul Teks"
        }

    ]
},
    
{
    id: "TPS-PK",
    nama: "Pengetahuan Kuantitatif",

    kategori: [

        {
            kode: "A",
            nama: "Aljabar dan Bilangan"
        },

        {
            kode: "B",
            nama: "Geometri dan Pengukuran"
        },

        {
            kode: "C",
            nama: "Statistika dan Peluang"
        },

        {
            kode: "D",
            nama: "Analisis Data & Logika Kecukupan Data"
        }

    ],

    subkompetensi: [

        // =========================
        // Aljabar dan Bilangan
        // =========================

        {
            id: "TPS-PK-A01",
            nama: "Operasi Bilangan"
        },

        {
            id: "TPS-PK-A02",
            nama: "Pecahan"
        },

        {
            id: "TPS-PK-A03",
            nama: "Desimal"
        },

        {
            id: "TPS-PK-A04",
            nama: "Eksponen"
        },

        {
            id: "TPS-PK-A05",
            nama: "Akar"
        },

        {
            id: "TPS-PK-A06",
            nama: "Logaritma Dasar"
        },

        {
            id: "TPS-PK-A07",
            nama: "Sistem Persamaan Linear"
        },

        {
            id: "TPS-PK-A08",
            nama: "Sistem Pertidaksamaan Linear"
        },

        {
            id: "TPS-PK-A09",
            nama: "Persamaan Kuadrat"
        },

        {
            id: "TPS-PK-A10",
            nama: "Pertidaksamaan Kuadrat"
        },

        {
            id: "TPS-PK-A11",
            nama: "Fungsi Komposisi"
        },

        {
            id: "TPS-PK-A12",
            nama: "Fungsi Invers"
        },

        {
            id: "TPS-PK-A13",
            nama: "Grafik Fungsi"
        },

        // =========================
        // Geometri dan Pengukuran
        // =========================

        {
            id: "TPS-PK-B01",
            nama: "Luas Bangun Datar"
        },

        {
            id: "TPS-PK-B02",
            nama: "Keliling Bangun Datar"
        },

        {
            id: "TPS-PK-B03",
            nama: "Sudut Bangun Datar"
        },

        {
            id: "TPS-PK-B04",
            nama: "Volume Bangun Ruang"
        },

        {
            id: "TPS-PK-B05",
            nama: "Luas Permukaan Bangun Ruang"
        },

        {
            id: "TPS-PK-B06",
            nama: "Teorema Pythagoras"
        },

        {
            id: "TPS-PK-B07",
            nama: "Koordinat Kartesius"
        },

        // =========================
        // Statistika dan Peluang
        // =========================

        {
            id: "TPS-PK-C01",
            nama: "Mean"
        },

        {
            id: "TPS-PK-C02",
            nama: "Median"
        },

        {
            id: "TPS-PK-C03",
            nama: "Modus"
        },

        {
            id: "TPS-PK-C04",
            nama: "Kuartil"
        },

        {
            id: "TPS-PK-C05",
            nama: "Permutasi"
        },

        {
            id: "TPS-PK-C06",
            nama: "Kombinasi"
        },

        {
            id: "TPS-PK-C07",
            nama: "Peluang"
        },

        // =========================
        // Analisis Data & Logika Kecukupan Data
        // =========================

        {
            id: "TPS-PK-D01",
            nama: "Kecukupan Data"
        },

        {
            id: "TPS-PK-D02",
            nama: "Perbandingan Dua Kuantitas (P dan Q)"
        }

    ]
},
    {
    id: "LBI",
    nama: "Literasi Bahasa Indonesia",

    kategori: [

        {
            kode: "A",
            nama: "Mengambil Informasi (Retrieve Information)"
        },

        {
            kode: "B",
            nama: "Mengintegrasikan & Menginterpretasikan Isi (Interpret & Integrate)"
        },

        {
            kode: "C",
            nama: "Mengevaluasi & Merefleksikan (Evaluate & Reflect)"
        }

    ],

    subkompetensi: [

        // =========================
        // Retrieve Information
        // =========================

        {
            id: "LBI-A01",
            nama: "Mengidentifikasi Fakta"
        },

        {
            id: "LBI-A02",
            nama: "Menemukan Detail Informasi"
        },

        {
            id: "LBI-A03",
            nama: "Menemukan Data dalam Teks"
        },

        {
            id: "LBI-A04",
            nama: "Referensi Pronomina"
        },

        // =========================
        // Interpret & Integrate
        // =========================

        {
            id: "LBI-B01",
            nama: "Inferensi"
        },

        {
            id: "LBI-B02",
            nama: "Hubungan Antarbagian Teks"
        },

        {
            id: "LBI-B03",
            nama: "Sebab Akibat dalam Teks"
        },

        {
            id: "LBI-B04",
            nama: "Merangkum Teks"
        },

        {
            id: "LBI-B05",
            nama: "Parafrasa"
        },

        // =========================
        // Evaluate & Reflect
        // =========================

        {
            id: "LBI-C01",
            nama: "Validitas Argumen"
        },

        {
            id: "LBI-C02",
            nama: "Keandalan Informasi"
        },

        {
            id: "LBI-C03",
            nama: "Akurasi Informasi"
        },

        {
            id: "LBI-C04",
            nama: "Fakta dan Opini"
        },

        {
            id: "LBI-C05",
            nama: "Prediksi Dampak"
        }

    ]
},
    {
    id: "LBE",
    nama: "Literasi Bahasa Inggris",

    kategori: [

        {
            kode: "A",
            nama: "Mengambil Informasi (Retrieve Information)"
        },

        {
            kode: "B",
            nama: "Mengintegrasikan & Menginterpretasikan Isi (Interpret & Integrate)"
        },

        {
            kode: "C",
            nama: "Mengevaluasi & Merefleksikan (Evaluate & Reflect)"
        }

    ],

    subkompetensi: [

        // =========================
        // Retrieve Information
        // =========================

        {
            id: "LBE-A01",
            nama: "Identifying Facts"
        },

        {
            id: "LBE-A02",
            nama: "Finding Specific Information"
        },

        {
            id: "LBE-A03",
            nama: "Finding Data in Text"
        },

        {
            id: "LBE-A04",
            nama: "Pronoun Reference"
        },

        // =========================
        // Interpret & Integrate
        // =========================

        {
            id: "LBE-B01",
            nama: "Inference"
        },

        {
            id: "LBE-B02",
            nama: "Relationship Between Text Sections"
        },

        {
            id: "LBE-B03",
            nama: "Cause and Effect"
        },

        {
            id: "LBE-B04",
            nama: "Summarizing Text"
        },

        {
            id: "LBE-B05",
            nama: "Paraphrasing"
        },

        // =========================
        // Evaluate & Reflect
        // =========================

        {
            id: "LBE-C01",
            nama: "Argument Validity"
        },

        {
            id: "LBE-C02",
            nama: "Information Reliability"
        },

        {
            id: "LBE-C03",
            nama: "Information Accuracy"
        },

        {
            id: "LBE-C04",
            nama: "Fact and Opinion"
        },

        {
            id: "LBE-C05",
            nama: "Predicting Impacts"
        }

    ]
},

    {
    id: "PM",
    nama: "Penalaran Matematika",

    kategori: [

        {
            kode: "A",
            nama: "Quantity"
        },

        {
            kode: "B",
            nama: "Change and Relationships"
        },

        {
            kode: "C",
            nama: "Space and Shape"
        },

        {
            kode: "D",
            nama: "Uncertainty and Data"
        }

    ],

    subkompetensi: [

        // =========================
        // Quantity
        // =========================

        {
            id: "PM-A01",
            nama: "Untung dan Rugi"
        },

        {
            id: "PM-A02",
            nama: "Diskon"
        },

        {
            id: "PM-A03",
            nama: "Bunga Tunggal"
        },

        {
            id: "PM-A04",
            nama: "Bunga Majemuk"
        },

        {
            id: "PM-A05",
            nama: "Perbandingan Senilai"
        },

        {
            id: "PM-A06",
            nama: "Perbandingan Berbalik Nilai"
        },

        {
            id: "PM-A07",
            nama: "Skala"
        },

        {
            id: "PM-A08",
            nama: "Kecepatan"
        },

        {
            id: "PM-A09",
            nama: "Debit"
        },

        // =========================
        // Change and Relationships
        // =========================

        {
            id: "PM-B01",
            nama: "Model Matematika"
        },

        {
            id: "PM-B02",
            nama: "Persamaan Linear"
        },

        {
            id: "PM-B03",
            nama: "Pertidaksamaan"
        },

        {
            id: "PM-B04",
            nama: "Barisan Aritmetika"
        },

        {
            id: "PM-B05",
            nama: "Deret Aritmetika"
        },

        {
            id: "PM-B06",
            nama: "Barisan Geometri"
        },

        {
            id: "PM-B07",
            nama: "Deret Geometri"
        },

        {
            id: "PM-B08",
            nama: "Pertumbuhan"
        },

        {
            id: "PM-B09",
            nama: "Peluruhan"
        },

        // =========================
        // Space and Shape
        // =========================

        {
            id: "PM-C01",
            nama: "Estimasi Jarak"
        },

        {
            id: "PM-C02",
            nama: "Posisi"
        },

        {
            id: "PM-C03",
            nama: "Navigasi"
        },

        {
            id: "PM-C04",
            nama: "Optimasi Ruang"
        },

        {
            id: "PM-C05",
            nama: "Trigonometri Kontekstual"
        },

        // =========================
        // Uncertainty and Data
        // =========================

        {
            id: "PM-D01",
            nama: "Interpretasi Infografis"
        },

        {
            id: "PM-D02",
            nama: "Interpretasi Diagram Batang"
        },

        {
            id: "PM-D03",
            nama: "Interpretasi Diagram Lingkaran"
        },

        {
            id: "PM-D04",
            nama: "Analisis Tren Data"
        },

        {
            id: "PM-D05",
            nama: "Keputusan Berbasis Risiko"
        },

        {
            id: "PM-D06",
            nama: "Teori Peluang Kontekstual"
        }

    ]
},

    
];
