// Danh sách hiện vật trưng bày trong bảo tàng 3D — ảnh tư liệu thật (public/images/museum/).
// slot đánh số theo trục z (0 = sâu nhất, gần tường cuối); vị trí thực tính trong Museum.jsx
// theo số tranh trên mỗi tường. Thứ tự "trái → phải" khi đứng đối diện từng bức tường:
//  - Tường trái: trái = phía cửa vào  → slot lớn trước
//  - Tường phải: trái = phía tường cuối → slot nhỏ trước
const BASE = "/images/museum";

export const exhibits = [
  // Tường trái — Gian I: Đại hội X (5 tranh, trái → phải)
  { id: "x-kinh-te-bien", img: `${BASE}/x-kinh-te-bien.jpg`, wall: "left", slot: 4 }, // 1. Đại hội X — đề ra chủ trương kinh tế biển
  { id: "x-apec-hoi-nghi", img: `${BASE}/x-apec-hoi-nghi.jpg`, wall: "left", slot: 3 }, // 2. Hội nghị Cấp cao APEC Việt Nam 2006
  { id: "x-toancanh", img: `${BASE}/x-toancanh.jpg`, wall: "left", slot: 2 }, // 3. Toàn cảnh Đại hội X
  { id: "x-dang-vien", img: `${BASE}/x-dang-vien.jpg`, wall: "left", slot: 1 }, // 4. Đại diện hơn 3,1 triệu đảng viên
  { id: "x-wto", img: `${BASE}/x-wto.jpg`, wall: "left", slot: 0 }, // 5. Gia nhập WTO — hội nhập kinh tế quốc tế
  // Tường phải — Gian II (4 tranh, trái → phải; vị trí số 10 đã bỏ vì không có ảnh)
  { id: "xi-apec-vi-the", img: `${BASE}/xi-apec-vi-the.jpg`, wall: "right", slot: 0 }, // 6. APEC 2006 — nâng cao vị thế đối ngoại
  { id: "xi-toancanh", img: `${BASE}/xi-toancanh.jpg`, wall: "right", slot: 1 }, // 7. Toàn cảnh Đại hội XI
  { id: "xi-cuong-linh", img: `${BASE}/xi-cuong-linh.jpg`, wall: "right", slot: 2 }, // 8. Cuốn Cương lĩnh 2011
  { id: "xi-hien-phap", img: `${BASE}/xi-hien-phap.jpg`, wall: "right", slot: 3 }, // 9. Lễ ký chứng thực Hiến pháp 2013
  // Tường cuối — 2 tranh kết (trái → phải)
  { id: "end-hoa-ky", img: `${BASE}/end-hoa-ky.jpg`, wall: "end", slot: 0 }, // Việt Nam - Hoa Kỳ xác lập Đối tác toàn diện
  { id: "end-nhat-ban", img: `${BASE}/end-nhat-ban.jpg`, wall: "end", slot: 1 }, // Việt Nam - Nhật Bản: Đối tác chiến lược sâu rộng
];

// Kích thước sảnh trưng bày
export const HALL = {
  width: 12, // x: -6..6
  length: 40, // z: -20..20
  height: 5,
};
