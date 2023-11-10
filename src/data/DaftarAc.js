const allDaftar =[
    {
        id:1,
        nama_kang_service:"Agus",
        title_service:"Memperbaiki AC",
        jarak: "2Km",
        gambar_service:
            "https://media.istockphoto.com/id/1215430465/id/foto/perbaikan-ac-oleh-teknisi.jpg?s=612x612&w=0&k=20&c=bqgxv3mqZbLTuKhzIBCU1bOtWO-FuY3gmokmkStrUVk="

    },
    {
        id:2,
        nama_kang_service:"irvan",
        title_service:"Instalasi AC Baru",
        jarak: "500m",
        gambar_service:
            "data:image/jpeg;base64,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"

    },
    {
        id:3,
        nama_kang_service:"Josep",
        title_service:"Pembersihan dan Perawatan AC",
        jarak: "1Km",
        gambar_service:
            "https://www.abangbenerin.com/blog/wp-content/uploads/2021/08/service-ac-1200x675.jpg"

    },
    {
        id:4,
        nama_kang_service:"Suga",
        title_service:"Service Rutin AC",
        jarak: "300m",
        gambar_service:
            "https://rajawaliutama.co.id/wp-content/uploads/2020/05/24-1.jpg"

    },
    {
        id:5,
        nama_kang_service:"Asep",
        title_service:"Troubleshooting AC",
        jarak: "3Km",
        gambar_service:
            "https://i0.wp.com/www.malilipos.com/wp-content/uploads/2019/12/Jasa-Service-AC-Palopo.png?fit=687%2C412&ssl=1"

    },
    {
        id:6,
        nama_kang_service:"Ninggen",
        title_service:"Perbaikan Unit AC Portabel",
        jarak: "1,5Km",
        gambar_service:
            "https://www.ukmgo.id/web/wp-content/uploads/2022/02/ukmgo-digital-service-ac.jpg"

    },
    {
        id:7,
        nama_kang_service:"Entah siapa ini",
        title_service:"Isi Gas Refrigen AC",
        jarak: "4Km",
        gambar_service:
            "https://cuciac.co.id/wp-content/uploads/2023/03/1100-x-800-1024x745.webp"

    },
    
];

export default allDaftar;