// Danh sách hiện vật trưng bày trong bảo tàng 3D.
// Thay `img` bằng ảnh tư liệu thật (đặt trong public/images/museum/) khi có.
const BASE = "/images/museum";

export const exhibits = [
  // Tường trái — Gian I: Đại hội X
  { id: "x-toancanh", img: `${BASE}/x-toancanh.svg`, wall: "left", slot: 0 },
  { id: "x-chude", img: `${BASE}/x-chude.svg`, wall: "left", slot: 1 },
  { id: "x-wto", img: `${BASE}/x-wto.svg`, wall: "left", slot: 2 },
  { id: "x-apec", img: `${BASE}/x-apec.svg`, wall: "left", slot: 3 },
  { id: "x-bien", img: `${BASE}/x-bien.svg`, wall: "left", slot: 4 },
  // Tường phải — Gian II: Đại hội XI
  { id: "xi-toancanh", img: `${BASE}/xi-toancanh.svg`, wall: "right", slot: 0 },
  { id: "xi-cuonglinh", img: `${BASE}/xi-cuonglinh.svg`, wall: "right", slot: 1 },
  { id: "xi-dotpha", img: `${BASE}/xi-dotpha.svg`, wall: "right", slot: 2 },
  { id: "xi-hienphap", img: `${BASE}/xi-hienphap.svg`, wall: "right", slot: 3 },
  { id: "xi-doingoai", img: `${BASE}/xi-doingoai.svg`, wall: "right", slot: 4 },
  // Tường cuối — Kết luận
  { id: "end-banner", img: `${BASE}/end-banner.svg`, wall: "end", slot: 0 },
  { id: "end-ketluan", img: `${BASE}/end-ketluan.svg`, wall: "end", slot: 1 },
];

// Kích thước sảnh trưng bày
export const HALL = {
  width: 12, // x: -6..6
  length: 40, // z: -20..20
  height: 5,
};
