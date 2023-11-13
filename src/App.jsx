import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import LayoutPage from "./components/pages/LayoutPage";
import LandingPage from "./components/pages/LandingPage";
import LayoutProfile from "./components/pages/LayoutProfile";
import BiodataDiri from "./components/pages/BiodataDiri";
import RiwayatPemesanan from "./components/pages/RiwayatPemesanan";
import DaftarAlamat from "./components/pages/DaftarAlamat";
import DaftarService from "./components/pages/DaftarService";
import DetailService from "./components/pages/DetailService";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<LandingPage />} />
          <Route path="daftar-service" element={<DaftarService />} />
          <Route path="detail/:idService" element={<DetailService />} />
          <Route path="/profile/" element={<LayoutProfile />}>
            <Route index element={<BiodataDiri />} />
            <Route path="riwayat-pemesanan" element={<RiwayatPemesanan />} />
            <Route path="daftar-alamat" element={<DaftarAlamat />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
