export const getCategory = (id_kategori) => {
  let category;
  const map = {
    1: "Service Ac",
    2: "Service Pc",
    3: "Service Lampu",
    4: "Service Mesin Cuci",
    5: "Service Smartphone",
    6: "Service Tv",
    7: "Renovasi Rumah",
  };
  category = map[id_kategori];
  return category;
};
