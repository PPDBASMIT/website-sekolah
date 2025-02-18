document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const alamat = document.getElementById('alamat').value;
    const tanggalLahir = document.getElementById('tanggal-lahir').value;
    const jenisKelamin = document.getElementById('jenis-kelamin').value;
    const asalSekolah = document.getElementById('asal-sekolah').value;

    if (nama && email && alamat && tanggalLahir && jenisKelamin && asalSekolah) {
        alert('Terima kasih, ' + nama + '! Pendaftaran Anda berhasil.');
        this.reset(); // Mengosongkan form setelah dikirim
    } else {
        alert('Harap lengkapi semua kolom.');
    }
});
// Fungsi untuk membuat PDF
function generatePDF() {
    // Ambil nilai dari setiap input
    const tanggalPendaftaran = document.getElementById('tanggal-pendaftaran').value || 'Belum Diisi';
    const nomorPendaftaran = document.getElementById('nomor-pendaftaran').value || 'Belum Diisi';

    const nama = document.getElementById('nama').value || 'N/A';
    const email = document.getElementById('email').value || 'N/A';
    const alamat = document.getElementById('alamat').value || 'N/A';
    const tanggalLahir = document.getElementById('tanggal-lahir').value || 'N/A';
    const jenisKelamin = document.getElementById('jenis-kelamin').value || 'N/A';
    const asalSekolah = document.getElementById('asal-sekolah').value || 'N/A';

    const namaAyah = document.getElementById('nama-ayah').value || 'N/A';
    const pekerjaanAyah = document.getElementById('pekerjaan-ayah').value || 'N/A';
    const namaIbu = document.getElementById('nama-ibu').value || 'N/A';
    const pekerjaanIbu = document.getElementById('pekerjaan-ibu').value || 'N/A';
    const noHp = document.getElementById('no-hp').value || 'N/A';

    // Inisialisasi jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Tambahkan konten ke PDF
    doc.setFontSize(16);
    doc.text("Formulir Pendaftaran Siswa Baru", 10, 10);

    doc.setFontSize(12);
    let yPos = 20; // Posisi vertikal awal
    const lineSpacing = 10;

    // Data Pendaftaran
    doc.text(`Tanggal Pendaftaran: ${tanggalPendaftaran}`, 10, yPos);
    yPos += lineSpacing;

    doc.text(`Nomor Pendaftaran: ${nomorPendaftaran}`, 10, yPos);
    yPos += lineSpacing;

    // Data Peserta Didik
    doc.text(`Nama Lengkap: ${nama}`, 10, yPos);
    yPos += lineSpacing;

    doc.text(`Email: ${email}`, 10, yPos);
    yPos += lineSpacing;

    doc.text(`Alamat: ${alamat}`, 10, yPos);
    yPos += lineSpacing;

    doc.text(`Tanggal Lahir: ${tanggalLahir}`, 10, yPos);
    yPos += lineSpacing;

    doc.text(`Jenis Kelamin: ${jenisKelamin}`, 10, yPos);
    yPos += lineSpacing;

    doc.text(`Asal Sekolah: ${asalSekolah}`, 10, yPos);
    yPos += lineSpacing;

    // Jarak Pemisah
    yPos += 10;

    // Data Orang Tua
    doc.text(`Nama Ayah: ${namaAyah}`, 10, yPos);
    yPos += lineSpacing;

    doc.text(`Pekerjaan Ayah: ${pekerjaanAyah}`, 10, yPos);
    yPos += lineSpacing;

    doc.text(`Nama Ibu: ${namaIbu}`, 10, yPos);
    yPos += lineSpacing;

    doc.text(`Pekerjaan Ibu: ${pekerjaanIbu}`, 10, yPos);
    yPos += lineSpacing;

    doc.text(`Nomor HP: ${noHp}`, 10, yPos);

    return doc;
}; // Mengembalikan objek PDF
}
// Event listener untuk tombol "Unduh PDF"
document.getElementById('downloadPdf').addEventListener('click', function() {
    const doc = generatePDF(); // Panggil fungsi untuk membuat PDF
    doc.save('formulir-pendaftaran.pdf'); // Simpan file PDF dengan nama tertentu
});

// Event listener untuk tombol "Cetak PDF"
document.getElementById('printPdf').addEventListener('click', function() {
    const doc = generatePDF(); // Panggil fungsi untuk membuat PDF
    doc.autoPrint(); // Aktifkan mode cetak otomatis
    window.open(doc.output('bloburl'), '_blank'); // Buka PDF di tab baru
});