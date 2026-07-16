// Thứ tự các trang trong "dashboard" — cuộn hết một trang sẽ
// tự động chuyển sang trang kế tiếp theo thứ tự này.
export const PAGE_ORDER = [
  { path: "/", label: "Trang chủ" },
  { path: "/dai-hoi-x", label: "Đại hội X (2006)" },
  { path: "/dai-hoi-xi", label: "Đại hội XI (2011)" },
  { path: "/mindmap", label: "Mindmap tổng kết" },
];

export const getNeighbors = (path) => {
  const idx = PAGE_ORDER.findIndex((p) => p.path === path);
  const prev = idx > 0 ? PAGE_ORDER[idx - 1] : null;
  const next =
    idx >= 0 && idx < PAGE_ORDER.length - 1 ? PAGE_ORDER[idx + 1] : null;
  return {
    prev: prev?.path,
    prevLabel: prev?.label,
    next: next?.path,
    nextLabel: next?.label,
  };
};
