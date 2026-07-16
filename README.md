# VNR202 — Lịch sử Đảng Cộng sản Việt Nam

Website thuyết trình **Chương 3 — 3.2.2: Tiếp tục công cuộc đổi mới, đẩy mạnh công nghiệp hoá, hiện đại hoá và hội nhập quốc tế (từ năm 1996 đến nay)** — Đại hội X (2006), Đại hội XI (2011) và Cương lĩnh 2011.

## Tech stack

- ⚛️ **React 19** — xây dựng giao diện
- ⚡ **Vite 7** — dev server & build siêu nhanh
- 🧭 **React Router 7** — điều hướng nhiều trang
- 🎨 **Tailwind CSS 4** — giao diện nhanh, responsive
- 🎬 **Framer Motion** — animation
- ▲ **Vercel** — deploy tự động (đã có `vercel.json` cho SPA rewrite)

## Tính năng nổi bật

- **Scroll-to-navigate**: cuộn hết một trang sẽ tự động chuyển sang trang kế tiếp trong dashboard (Trang chủ → Đại hội X → Đại hội XI → Mindmap); cuộn ngược lên ở đầu trang để quay lại trang trước. Có thanh tiến trình gợi ý khi đang ở mép trang.
- **Snap-scroll** từng section full màn hình, phong cách "vintage document".
- **Mindmap tương tác** tổng kết toàn bộ nội dung — bấm vào nhánh để thu gọn / mở rộng.

## Chạy dự án

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build production vào dist/
npm run preview  # xem thử bản build
```

## Cấu trúc trang

| Route         | Nội dung                                                        |
| ------------- | --------------------------------------------------------------- |
| `/`           | Trang chủ — giới thiệu chương, timeline đổi mới                 |
| `/dai-hoi-x`  | Đại hội X (4/2006) — bối cảnh, chủ đề, 5 bài học, NQ TW, WTO    |
| `/dai-hoi-xi` | Đại hội XI (1/2011) — Cương lĩnh 2011, 8 đặc trưng, 3 đột phá   |
| `/mindmap`    | Mindmap tổng kết + kết luận                                     |

— VNR202 Group 6
