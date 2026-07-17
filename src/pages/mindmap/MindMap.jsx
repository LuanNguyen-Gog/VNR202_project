import { useMemo, useState } from "react";
import { motion } from "framer-motion";

// Kích thước layout (mỗi mindmap giờ chỉ có 3 cấp: gốc → nhánh → chi tiết)
const COL_W = [280, 250, 360];
const COL_GAP = 80;
const ROW_H = 78;
const NODE_H = [110, 68, 62];

const nodeX = (depth) => {
  let x = 0;
  for (let d = 0; d < depth; d++) x += COL_W[Math.min(d, COL_W.length - 1)] + COL_GAP;
  return x;
};

// Tính layout cây: gán hàng cho lá, node cha nằm giữa các con
const layoutTree = (node, collapsed, depth = 0, state = { row: 0 }) => {
  const isCollapsed = collapsed.has(node.id);
  const children =
    !isCollapsed && node.children
      ? node.children.map((c) => layoutTree(c, collapsed, depth + 1, state))
      : [];

  let y;
  if (children.length > 0) {
    y = (children[0].y + children[children.length - 1].y) / 2;
  } else {
    y = state.row * ROW_H;
    state.row += 1;
  }

  return {
    ...node,
    depth,
    x: nodeX(depth),
    y,
    w: COL_W[Math.min(depth, COL_W.length - 1)],
    h: NODE_H[Math.min(depth, NODE_H.length - 1)],
    hasChildren: Boolean(node.children?.length),
    isCollapsed,
    childNodes: children,
  };
};

const flatten = (node, acc = []) => {
  acc.push(node);
  node.childNodes.forEach((c) => flatten(c, acc));
  return acc;
};

// Kiểu node theo vai trò: gốc / nhánh / lá
const nodeStyles = (n) => {
  if (n.depth === 0)
    return "bg-brown text-beige border-2 border-ink shadow-hard rounded-2xl font-display font-bold text-base md:text-lg";
  if (n.hasChildren || n.depth === 1)
    return "bg-red-muted text-white border-2 border-ink shadow-hard-sm rounded-2xl font-display font-bold text-sm md:text-base";
  return "bg-white text-brown border border-brown shadow-sm rounded-xl text-sm";
};

const MindMap = ({ data }) => {
  const [collapsed, setCollapsed] = useState(new Set());

  const toggle = (id) => {
    setCollapsed((old) => {
      const next = new Set(old);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const { nodes, width, height } = useMemo(() => {
    const tree = layoutTree(data, collapsed);
    const all = flatten(tree);
    const maxDepth = Math.max(...all.map((n) => n.depth));
    const w = nodeX(maxDepth) + COL_W[Math.min(maxDepth, COL_W.length - 1)];
    const h = Math.max(...all.map((n) => n.y)) + NODE_H[0] + 20;
    return { nodes: all, width: w, height: h };
  }, [data, collapsed]);

  const PAD = 24;

  return (
    <div className="w-full overflow-auto border-2 border-brown bg-paper shadow-hard-md rounded-2xl">
      <div
        className="relative mx-auto"
        style={{ width: width + PAD * 2, height: height + PAD * 2 }}
      >
        {/* Đường nối */}
        <svg
          className="absolute inset-0 pointer-events-none"
          width={width + PAD * 2}
          height={height + PAD * 2}
        >
          {nodes.map((n) =>
            n.childNodes.map((c) => {
              const x1 = PAD + n.x + n.w;
              const y1 = PAD + n.y + n.h / 2;
              const x2 = PAD + c.x;
              const y2 = PAD + c.y + c.h / 2;
              const mx = (x1 + x2) / 2;
              return (
                <motion.path
                  key={`${n.id}-${c.id}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    d: `M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`,
                  }}
                  transition={{ duration: 0.3 }}
                  d={`M ${x1} ${y1} C ${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`}
                  fill="none"
                  stroke="#6b4f3a"
                  strokeWidth={c.depth <= 1 ? 3 : 1.5}
                  strokeOpacity={0.55}
                />
              );
            }),
          )}
        </svg>

        {/* Node */}
        {nodes.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              left: PAD + n.x,
              top: PAD + n.y,
            }}
            transition={{ duration: 0.3 }}
            style={{ width: n.w, height: n.h, position: "absolute" }}
            className={`flex items-center justify-center text-center px-3 py-2 leading-snug select-none ${nodeStyles(n)} ${
              n.hasChildren ? "cursor-pointer hover:-translate-y-0.5 transition-transform" : ""
            }`}
            onClick={() => n.hasChildren && toggle(n.id)}
            title={n.hasChildren ? "Bấm để thu gọn / mở rộng" : undefined}
          >
            <span className="line-clamp-3">{n.label}</span>
            {n.hasChildren && (
              <span
                className={`absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-[11px] font-mono font-bold border border-ink rounded-full ${
                  n.isCollapsed ? "bg-gold text-ink" : "bg-white text-brown"
                }`}
              >
                {n.isCollapsed ? "+" : "−"}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MindMap;
