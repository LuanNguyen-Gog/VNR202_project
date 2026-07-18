// Danh sách hiện vật trưng bày trong bảo tàng 3D — ảnh tư liệu thật (public/images/museum/).
// slot đánh số theo trục z (0 = sâu nhất, gần tường cuối); vị trí thực tính trong Museum.jsx
// theo số tranh trên mỗi tường. Thứ tự "trái → phải" khi đứng đối diện từng bức tường:
//  - Tường trái: trái = phía cửa vào  → slot lớn trước
//  - Tường phải: trái = phía tường cuối → slot nhỏ trước
const BASE = "/images/museum";

export const exhibits = [
  // Tường trái — Gian I: Đại hội X (5 tranh, trái → phải)
  {
    id: "x-kinh-te-bien",
    img: `${BASE}/x-kinh-te-bien.jpg`,
    wall: "left",
    slot: 4,
    title: "Đại hội X — nơi đề ra chủ trương phát triển kinh tế biển, tiền đề của Chiến lược biển Việt Nam",
  },
  {
    id: "x-apec-hoi-nghi",
    img: `${BASE}/x-apec-hoi-nghi.jpg`,
    wall: "left",
    slot: 3,
    title: "Hội nghị Cấp cao APEC Việt Nam 2006 tại Hà Nội",
  },
  {
    id: "x-toancanh",
    img: `${BASE}/x-toancanh.jpg`,
    wall: "left",
    slot: 2,
    title: "Toàn cảnh Đại hội đại biểu toàn quốc lần thứ X (4/2006)",
  },
  {
    id: "x-dang-vien",
    img: `${BASE}/x-dang-vien.jpg`,
    wall: "left",
    slot: 1,
    title: "1.176 đại biểu — đại diện cho hơn 3,1 triệu đảng viên cả nước",
  },
  {
    id: "x-wto",
    img: `${BASE}/x-wto.jpg`,
    wall: "left",
    slot: 0,
    title: "Lễ kết nạp Việt Nam vào WTO (7/11/2006) — hội nhập kinh tế quốc tế sâu rộng",
  },
  // Tường phải — Gian II (4 tranh, trái → phải; vị trí số 10 đã bỏ vì không có ảnh)
  {
    id: "xi-apec-vi-the",
    img: `${BASE}/xi-apec-vi-the.jpg`,
    wall: "right",
    slot: 0,
    title: "APEC 2006 — nâng cao vị thế đối ngoại của Việt Nam",
  },
  {
    id: "xi-toancanh",
    img: `${BASE}/xi-toancanh.jpg`,
    wall: "right",
    slot: 1,
    title: "Toàn cảnh Đại hội đại biểu toàn quốc lần thứ XI (1/2011)",
  },
  {
    id: "xi-cuong-linh",
    img: `${BASE}/xi-cuong-linh.jpg`,
    wall: "right",
    slot: 2,
    title: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (bổ sung, phát triển năm 2011)",
  },
  {
    id: "xi-hien-phap",
    img: `${BASE}/xi-hien-phap.jpg`,
    wall: "right",
    slot: 3,
    title: "Lễ ký chứng thực Hiến pháp năm 2013",
  },
  // Tường cuối — 2 tranh kết (trái → phải)
  {
    id: "end-hoa-ky",
    img: `${BASE}/end-hoa-ky.jpg`,
    wall: "end",
    slot: 0,
    title: "Việt Nam – Hoa Kỳ xác lập Quan hệ Đối tác toàn diện (2013)",
  },
  {
    id: "end-nhat-ban",
    img: `${BASE}/end-nhat-ban.jpg`,
    wall: "end",
    slot: 1,
    title: "Việt Nam – Nhật Bản nâng cấp quan hệ lên Đối tác chiến lược sâu rộng (2014)",
  },
];

// Kích thước sảnh trưng bày
export const HALL = {
  width: 12, // x: -6..6
  length: 40, // z: -20..20
  height: 5,
};
