import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import LandingPage from "./components/pages/LandingPage";
import BiodataDiri from "./components/pages/BiodataDiri";
import RiwayatPemesanan from "./components/pages/RiwayatPemesanan";
import DaftarAlamat from "./components/pages/DaftarAlamat";
import DaftarService from "./components/pages/DaftarService";
import DetailService from "./components/pages/DetailService";
import NotFound from "./components/pages/NotFound";
import LayoutProfile from "./components/layout/LayoutProfile";
import LayoutPage from "./components/layout/LayoutPage";
import Ulasan from "./components/pages/Ulasan";
import MitraBeranda from "./components/pages//mitra/MitraBeranda";
import RatingProgressBar2 from "./components/pages/tes";
import LayoutMitra from "./components/layout/LayoutMitra";
import PenilaianPage from "./components/pages/mitra/PenilaianPage";
import ProfilLayanan from "./components/pages/mitra/ProfilLayanan";
import GaleriMedia from "./components/pages/mitra/GaleriMedia";
import AlamatSayaMitra from "./components/pages/mitra/AlamatSayaMitra";
import TransaksiSayaMitra from "./components/pages/mitra/TransaksiSayaMitra";
import PengaturanAkunMitra from "./components/pages/mitra/PengaturanAkunMitra";
import DetailOrderMitra from "./components/pages/mitra/DetailOrderMitra";
import { AuthProvider } from "./context/authContext";
import RegisterPageMitra from "./components/pages/mitra/RegisterPageMitra";
import Tes from "./Tes";
import CreateInvoice from "./components/pages/mitra/CreateInvoice";
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="/tesaja" element={<Tes />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="/mitra/register" element={<RegisterPageMitra />} />
          <Route path="tes" element={<RatingProgressBar2 />} />
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<LandingPage />} />
            <Route
              path="daftar-service/:idCategory"
              element={<DaftarService />}
            />
            <Route path="detail/:idMitra" element={<DetailService />} />
            <Route path="mitra-beranda/:idMitra" element={<MitraBeranda />} />
            <Route path="/profile/" element={<LayoutProfile />}>
              <Route index element={<BiodataDiri />} />
              <Route path="riwayat-pemesanan" element={<RiwayatPemesanan />} />
              <Route path="daftar-alamat" element={<DaftarAlamat />} />
              <Route path="ulasan" element={<Ulasan />} />
            </Route>
            <Route path="/mitra/" element={<LayoutMitra />}>
              <Route index element={<PenilaianPage />} />
              <Route path="profil-layanan" element={<ProfilLayanan />} />
              <Route path="galeri-media" element={<GaleriMedia />} />
              <Route path="alamat" element={<AlamatSayaMitra />} />
              <Route path="pengaturan" element={<PengaturanAkunMitra />} />
              <Route path="transaksi" element={<TransaksiSayaMitra />} />
              <Route
                path="transaksi-detail/:idTransaksi"
                element={<DetailOrderMitra />}
              />
              <Route
                path="transaksi-invoice/:idTransaksi"
                element={<CreateInvoice />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
