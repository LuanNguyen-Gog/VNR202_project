import { motion } from "framer-motion";
import { Network, MousePointerClick, Quote } from "lucide-react";
import PageShell from "../../components/layout/PageShell";
import Section from "../../components/layout/Section";
import Card from "../../components/ui/Card";
import { KineticSubline, MarqueeStrip } from "../../components/ui/KineticText";
import { getNeighbors } from "../../config/pages";
import MindMap from "./MindMap";

const MindmapPage = () => {
  const neighbors = getNeighbors("/mindmap");

  return (
    <PageShell {...neighbors}>
      {/* SECTION 1: MINDMAP */}
      <Section
        scrollable={true}
        className="items-center justify-center px-4 md:px-10 bg-beige"
      >
        <div className="max-w-screen-2xl mx-auto w-full py-16 pt-28">
          <div className="text-center mb-10 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-brown border border-brown px-6 py-2 transform rotate-1 shadow-sm"
            >
              <span className="font-mono font-bold uppercase tracking-widest text-sm text-beige inline-flex items-center gap-2">
                <Network size={16} /> Tổng kết nội dung
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brown uppercase">
              Mindmap <span className="text-red-muted">Đại hội X & XI</span>
            </h2>
            <KineticSubline className="text-center max-w-3xl mx-auto text-brown">
              Toàn bộ nội dung 3.2.2 (phần c & d) được tóm tắt trong sơ đồ tư
              duy dưới đây.
            </KineticSubline>
            <p className="inline-flex items-center gap-2 text-brown/60 font-mono text-xs uppercase tracking-widest">
              <MousePointerClick size={14} />
              Bấm vào các nhánh để thu gọn / mở rộng — kéo ngang để xem toàn bộ
            </p>
          </div>

          <MindMap />
        </div>
      </Section>

      {/* SECTION 2: KẾT LUẬN */}
      <Section className="items-center justify-center bg-brown text-beige">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#F5E6C8 1px, transparent 1px), linear-gradient(to right, #F5E6C8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
          <div className="w-16 h-16 bg-red-muted mx-auto flex items-center justify-center border border-beige">
            <Quote className="w-8 h-8 text-beige" strokeWidth={3} />
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase">
            Kết luận
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Hai giai đoạn liên tiếp",
                text: "Đại hội X và Đại hội XI là hai giai đoạn phát triển liên tiếp trong tiến trình đổi mới của Việt Nam.",
              },
              {
                title: "Từ tổng kết đến lý luận",
                text: "Đại hội X tổng kết 20 năm đổi mới, hoàn thiện mô hình KTTT định hướng XHCN; Đại hội XI phát triển sâu hơn về lý luận với Cương lĩnh 2011 và 3 đột phá chiến lược.",
              },
              {
                title: "Nâng cao vị thế",
                text: "Hai Đại hội góp phần hoàn thiện đường lối phát triển đất nước, đẩy mạnh CNH, HĐH, hội nhập quốc tế và nâng cao vị thế Việt Nam trên trường quốc tế.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-beige/10 border-2 border-beige/30 p-6 hover:border-gold transition-colors"
              >
                <h3 className="font-display text-xl font-bold text-gold mb-3 uppercase">
                  {c.title}
                </h3>
                <p className="text-beige/85 font-body text-sm leading-relaxed">
                  {c.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="py-6">
            <MarqueeStrip
              text="Thank You! — Q & A — VNR202 Group 6"
              speed={30}
              tone="dark"
              className="bg-transparent text-beige/50 font-display font-bold uppercase tracking-widest text-xl border-none"
            />
          </div>
        </div>
      </Section>
    </PageShell>
  );
};

export default MindmapPage;
