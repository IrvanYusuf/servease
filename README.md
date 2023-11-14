# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Cara menjalankan Project
Jika belum mempunyai json-server silahkan install terlebih dahulu dengan perintah npm i -g json-server.
Setelah itu masuk atau buat terminal baru ketik perintah berikut ini:
- cd src
- cd data
- json-server --watch banners.json atau jika gagal gunakan perintah npx json-server --watch banners.json

### Untuk menjalankan file json selanjutnya buat terminal baru dan tambahkan perintah --port angka port nya
seperti ini:
- cd src
- cd data
- json-server --watch categories.json --port 3001

begitu proses berikutnya untuk menjalankan masing-masing file json
## Port masing-masing file json
- banners = --port 3000 atau tidak perlu ditulis  (defaultnya port 3000)
- categories = --port 3001
- videos = --port 3002
- services = --port 3003
- ratings = --port 3004
- users = --port 3005
