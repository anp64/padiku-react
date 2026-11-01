### dokumentasi tugas minggu 6

<img width="975" height="548" alt="image" src="https://github.com/user-attachments/assets/de010811-58ae-47f3-b69d-83ae137bc676" />
<img width="1917" height="966" alt="image" src="https://github.com/user-attachments/assets/1a2cb690-4b76-4176-9932-bd0153e90747" />
<img width="1917" height="963" alt="image" src="https://github.com/user-attachments/assets/2f9f1059-69fd-49d0-9bbf-3fabeac4e7b1" />
<img width="1917" height="972" alt="image" src="https://github.com/user-attachments/assets/206e3c48-a200-4272-894e-702d53855618" />
<img width="1917" height="960" alt="image" src="https://github.com/user-attachments/assets/1c2d5967-f198-4176-8d33-d751ec858f1e" />
<img width="1917" height="965" alt="image" src="https://github.com/user-attachments/assets/dccf5725-8426-4cd2-a91f-7efb92591dd1" />
<img width="1917" height="963" alt="image" src="https://github.com/user-attachments/assets/250f6007-c68c-45c4-afb3-b03ac9c2c75c" />
<img width="1861" height="976" alt="image" src="https://github.com/user-attachments/assets/4e77395f-c78c-4fe4-a9e2-fc7f34d2dda5" />


### tugas minggu 7

### 01
kondisi awal
<img width="1917" height="915" alt="image" src="https://github.com/user-attachments/assets/99a697e7-f360-43fc-82fb-8e4cc11e6cac" />

kondisi tambah data
<img width="1917" height="916" alt="image" src="https://github.com/user-attachments/assets/05e0af9d-6b78-4a7b-931b-b16f40e9e9aa" />
<img width="948" height="533" alt="image" src="https://github.com/user-attachments/assets/8e027137-e12a-439b-95fa-f235e6e1aa4e" />

### 02
kondisi awal saat wifi nyala
<img width="1917" height="916" alt="image" src="https://github.com/user-attachments/assets/05e0af9d-6b78-4a7b-931b-b16f40e9e9aa" />

loading
<img width="1917" height="941" alt="image" src="https://github.com/user-attachments/assets/32ff8314-72e0-42bc-bf28-e55733c94d40" />

wifi mati
<img width="1917" height="911" alt="image" src="https://github.com/user-attachments/assets/7db35410-fa3f-45a5-87b3-90da428d842b" />

### 03

1. untuk pengetesan MockAPI saya menggunakan MockAPI.io itu pengetesan API bohongan karena di website ini hanya melakukan pengetesan sebelum masuk back end dan implementasi API secara langsung

2. jadi implementasinya itu ada di file halamanartikel disana ada function halaman artikel yang isi codenya seperti ini
<img width="715" height="597" alt="image" src="https://github.com/user-attachments/assets/5d282e90-21ba-405e-a1ef-484efee22aae" />
<img width="782" height="472" alt="image" src="https://github.com/user-attachments/assets/6ec39022-a653-4dee-9f68-67ba123b6bb5" />
<img width="1147" height="725" alt="image" src="https://github.com/user-attachments/assets/aca3d1b6-21c2-4959-8cde-164da9159afb" />

jadi di kode ini ada sebuah perkondisian dimana ada setloading dan seterror terus ada .then((response) => {
            if (!response.ok) throw new Error('Gagal mengambil data');
            return response.json();
        }) jika gagal respone maka gagal mengambil data itu terjadi saat kondisi dimana wifi sedang tidak menyala jika kondisi wifinya menyala maka ketika menambahkan data di baru artikel maka datanya akan muncul di tampilan website dan juga akan muncul di mockAPI.io yang akan muncul di tampilan website saat menambahakan data adalah return dimana ada loading &&, error && !loading &&, !loading && !error && sesuai gambar ketiga 










