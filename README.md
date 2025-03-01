hasil api 🔥: https://api-cekid-711e00e2ad61.herokuapp.com
Wajib WA ke wa.me/+6287719167254 agar kalo ada update script ga ketinggalan


Berikut cara mendapatkan Supabase URL dan Anon Key:

**Langkah 1: Buat Akun/Login Supabase**
1. Buka [supabase.com](https://supabase.com/)
2. Klik "Start your project"
3. Login dengan GitHub, GitLab, atau email

**Langkah 2: Buat Project Baru**
1. Setelah login, klik "New project"
2. Isi detail project:
   - **Name**: Nama project Anda
   - **Database Password**: Password untuk database
   - **Region**: Pilih region terdekat (misal: Southeast Asia)
3. Klik "Create new project"

**Langkah 3: Dapatkan URL & Anon Key**
1. Setelah project selesai dibuat, masuk ke dashboard project
2. Pergi ke **Settings** (ikon gir di sidebar kiri)
3. Pilih menu **API**
4. Temukan informasi di bagian **Project URL** dan **anon/public** key:

![Supabase API Keys](https://i.imgur.com/6Jh6DZL.png)

**Contoh Format:**
```javascript
SUPABASE_URL = "https://xxxxxxxxxxxxx.supabase.co"
SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxxx.xxxxxx"
```

**Catatan Penting:**
1. 🔒 **Anon Key** ini aman untuk digunakan di frontend/client-side
2. ❗ Jangan gunakan **service_role secret** di frontend (hanya untuk server)
3. Aktifkan Row Level Security (RLS) untuk keamanan database
4. Simpan credentials di file `.env` dan tambahkan ke `.gitignore`

**Cara Pakai di Kode:**
```javascript
// Di file .env
SUPABASE_URL=your_project_url
SUPABASE_ANON_KEY=your_anon_key

// Di kode JavaScript( index.js atau semacamnya)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);
```

Jika mengalami masalah:
- Pastikan project sudah selesai di-provision (status hijau)
- Cek kembali di menu Settings > API
- Jika key ter-expose, rotate key di menu API Settings

[!] UNTUK MELIHAT LIST GAME DAN PARAMETER APINYA SILAHKAN BUKA ENDPOINT /api
    INSTALL EXTENSI JSON FORMATTER DI BROWSER KALIAN BIAR ENAK DIBACA

## INSTALL DI VPS OR VERCEL
1. Siapkan Hosting Node JS atau vps
2. Jangan Lupa install nodejs, dan pm2
3. Deploy Aplikasi Kamu dengan perintah diterminal, kalo pake hosting sesuaikan aja, kalo pake vercel tutornya ada dibawah
    - npm install
    - node 'index.js' atau 'pm2 start index.js'


Gapunya VPS? Gapunya Hosting Node? Tenang, Bisa hosting Gratisan di vercel
 - Upload scriptnya di github
 - Buka Akun vercel
 - Import Project


udah support heroku ya
cuma perlu buildpak nodejs doang

kalo masih ada pertanyaan/ada bug, silahkan chat, nanti tak bantu install


## Install DI CPANEL NODE (node 18 recomended)
1. upload ke file manager hosting
2. Jalanin node js di cpanel, kalau kurang ngerti bisa google caranya
    - startup file index.js


## CARA UPDATE LIST GAME JIKA ADA PERUBAHAN DARI PROVIDERNYA
1. Wajib dijalanin di computer atau di vps gabisa langsung di cpanel
2. Update Codashop Jalanin perintah dibawah (pastikan sudah berada di directory script gamenya)
    - node update-list-game/codashopUpdate.js
   Update DuniaGames Jalanin perintah dibawah (pastikan sudah berada di directory script gamenya)
    - node update-list-game/duniagamesUpdate.js

Kalo scripntya di cpanel Gimana?
Jalanin dulu cara diatas di pc lokal
lalu pergi ke folder lib
disini kalian copy saja list gamenya dari file codashhop.json atau duniaGames.json
lalu kalian edit file kalian yg di cpanel dengan list game yg baru
