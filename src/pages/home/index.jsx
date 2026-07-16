import { motion } from "framer-motion";
import { ArrowRight, Quote, Landmark, Flag, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageShell from "../../components/layout/PageShell";
import Section from "../../components/layout/Section";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import { KineticSubline, MarqueeStrip } from "../../components/ui/KineticText";
import { getNeighbors } from "../../config/pages";

const HomePage = () => {
  const navigate = useNavigate();
  const neighbors = getNeighbors("/");
  const featurePills = [
    "Đẩy mạnh công nghiệp hóa, hiện đại hóa",
    "Hoàn thiện kinh tế thị trường định hướng XHCN",
    "Chủ động hội nhập quốc tế",
  ];

  const timeline = [
    { year: "1986", label: "Đại hội VI — Khởi xướng Đổi mới" },
    { year: "1996", label: "Đẩy mạnh CNH, HĐH đất nước" },
    { year: "2006", label: "Đại hội X — Tổng kết 20 năm đổi mới" },
    { year: "2011", label: "Đại hội XI — Cương lĩnh 2011" },
  ];

  return (
    <PageShell {...neighbors}>
      {/* SECTION 1: HERO */}
      <Section className="items-center justify-center pt-32 pb-20 border-b border-brown/20 bg-beige min-h-screen">
        <div className="absolute inset-0 opacity-[0.02] font-display uppercase text-[12rem] leading-none break-all overflow-hidden pointer-events-none select-none text-red-muted">
          Lich su Dang Cong san Viet Nam
        </div>

        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10 relative">
          <div className="absolute -left-10 top-0 bottom-0 w-px bg-brown/10 hidden lg:block"></div>
          <div className="absolute -right-10 top-0 bottom-0 w-px bg-brown/10 hidden lg:block"></div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-brown text-beige border border-brown hover:border-red-muted hover:text-red-muted transition-colors">
              <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-widest">
                VNR202 • Chương 3 • Nhóm 6
              </span>
            </div>

            <div className="relative">
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="font-display font-bold text-4xl md:text-6xl uppercase text-brown leading-tight tracking-normal"
              >
                Đổi mới &
              </motion.h1>
              <motion.h1
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                className="font-display font-bold text-4xl md:text-6xl uppercase text-red-muted leading-tight tracking-normal"
              >
                Hội nhập quốc tế
              </motion.h1>
            </div>

            <KineticSubline className="max-w-xl text-brown/80 text-lg font-medium border-l-4 border-red-muted pl-4 ml-2">
              3.2.2 — Tiếp tục công cuộc đổi mới, đẩy mạnh công nghiệp hoá,
              hiện đại hoá và hội nhập quốc tế (từ năm 1996 đến nay): Đại hội
              X, Đại hội XI của Đảng và quá trình thực hiện Nghị quyết.
            </KineticSubline>

            <div className="flex flex-wrap gap-3 pt-4">
              {featurePills.map((pill, idx) => (
                <motion.div
                  key={pill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="px-4 py-2 border border-brown bg-white text-brown font-body text-xs font-medium uppercase hover:bg-red-muted hover:text-white hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer"
                >
                  {pill}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-8 w-max">
              <Button
                variant="danger"
                size="lg"
                onClick={() => navigate("/dai-hoi-x")}
                className="gap-2 hover:shadow-md hover:translate-x-1 transition-all"
              >
                Bắt đầu khám phá <ArrowRight size={20} strokeWidth={3} />
              </Button>
            </div>
          </div>

          {/* Hero right: chapter plaque */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <Card
              variant="paper"
              className="p-10 border-2 border-brown shadow-hard-md rotate-1 hover:rotate-0 transition-transform"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Landmark className="text-red-muted" size={32} />
                  <span className="font-mono text-xs uppercase tracking-widest text-brown/60">
                    Chương 3 (1975 - 2018)
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold text-brown uppercase leading-snug">
                  Đảng lãnh đạo cả nước quá độ lên chủ nghĩa xã hội và tiến
                  hành công cuộc đổi mới
                </h2>
                <div className="h-px bg-brown/20" />
                <ul className="space-y-3 font-body text-brown/80">
                  <li className="flex gap-3">
                    <Flag size={18} className="text-red-muted mt-1 shrink-0" />
                    3.2 — Lãnh đạo công cuộc đổi mới, đẩy mạnh công nghiệp
                    hóa, hiện đại hóa và hội nhập quốc tế (1986 - nay)
                  </li>
                  <li className="flex gap-3">
                    <BookOpen
                      size={18}
                      className="text-red-muted mt-1 shrink-0"
                    />
                    Phần c — Đại hội X của Đảng và quá trình thực hiện Nghị
                    quyết Đại hội
                  </li>
                  <li className="flex gap-3">
                    <BookOpen
                      size={18}
                      className="text-red-muted mt-1 shrink-0"
                    />
                    Phần d — Đại hội XI của Đảng bổ sung, phát triển Cương
                    lĩnh năm 1991
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 2: TIMELINE + OVERVIEW */}
      <Section
        scrollable={true}
        className="items-center justify-center px-4 md:px-10 bg-beige"
      >
        <div className="max-w-screen-2xl mx-auto w-full py-16 pt-28">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brown uppercase">
              Hành trình <span className="text-red-muted">Đổi mới</span>
            </h2>
            <KineticSubline className="text-center max-w-3xl mx-auto text-brown">
              Từ Đại hội VI (1986) khởi xướng đường lối đổi mới, Đảng liên tục
              tổng kết thực tiễn, phát triển lý luận qua từng kỳ Đại hội.
            </KineticSubline>
          </div>

          {/* Timeline strip */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card
                  variant="flat"
                  hoverEffect
                  className="p-6 border-t-4 border-t-red-muted h-full"
                >
                  <div className="font-display font-bold text-4xl text-red-muted mb-2">
                    {item.year}
                  </div>
                  <p className="text-brown/80 font-body">{item.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Two main topics */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card
              variant="flat"
              hoverEffect
              className="p-8 border-l-4 border-l-red-muted bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate("/dai-hoi-x")}
            >
              <div className="w-16 h-16 bg-red-muted/10 rounded-lg flex items-center justify-center mb-6 border border-red-muted">
                <span className="font-display font-bold text-3xl text-red-muted">
                  X
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-brown">
                Đại hội X (4/2006)
              </h3>
              <p className="text-lg text-brown/80 mb-6 grow">
                Tổng kết 20 năm đổi mới, bổ sung hai đặc trưng mới của chủ
                nghĩa xã hội, cho phép đảng viên làm kinh tế tư nhân, gia nhập
                WTO — dấu mốc đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước.
              </p>
              <div className="flex items-center gap-2 text-red-muted font-bold uppercase text-sm">
                Khám phá <ArrowRight size={16} />
              </div>
            </Card>

            <Card
              variant="flat"
              hoverEffect
              className="p-8 border-l-4 border-l-red-muted bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate("/dai-hoi-xi")}
            >
              <div className="w-16 h-16 bg-red-muted/10 rounded-lg flex items-center justify-center mb-6 border border-red-muted">
                <span className="font-display font-bold text-3xl text-red-muted">
                  XI
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-brown">
                Đại hội XI (1/2011)
              </h3>
              <p className="text-lg text-brown/80 mb-6 grow">
                Thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ
                lên chủ nghĩa xã hội (bổ sung, phát triển năm 2011) với 8 đặc
                trưng, 8 phương hướng và Chiến lược phát triển kinh tế - xã
                hội 2011-2020 với 3 đột phá chiến lược.
              </p>
              <div className="flex items-center gap-2 text-red-muted font-bold uppercase text-sm">
                Khám phá <ArrowRight size={16} />
              </div>
            </Card>
          </div>

          <div className="mt-16">
            <MarqueeStrip
              text="ĐẠI HỘI X & ĐẠI HỘI XI • ĐẨY MẠNH TOÀN DIỆN CÔNG CUỘC ĐỔI MỚI • HỘI NHẬP QUỐC TẾ"
              speed={26}
              tone="dark"
              className="font-display font-bold uppercase tracking-widest text-xl border-2 border-ink shadow-hard"
            />
          </div>
        </div>
      </Section>

      {/* SECTION 3: QUOTE */}
      <Section className="items-center justify-center bg-brown text-beige border-b border-brown/80">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#F5E6C8 1px, transparent 1px), linear-gradient(to right, #F5E6C8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
          <div className="w-16 h-16 bg-red-muted mx-auto flex items-center justify-center border border-beige">
            <Quote className="w-8 h-8 text-beige" strokeWidth={3} />
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-normal"
          >
            “Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, phát huy
            sức mạnh toàn dân tộc, đẩy mạnh toàn diện công cuộc đổi mới,{" "}
            <span className="text-brown bg-beige px-2 box-decoration-clone">
              sớm đưa nước ta ra khỏi tình trạng kém phát triển
            </span>
            ”
          </motion.blockquote>

          <p className="font-mono text-sm uppercase tracking-widest text-beige/60">
            — Chủ đề Đại hội X của Đảng (2006)
          </p>

          <div className="py-8">
            <MarqueeStrip
              text="Cuộn xuống để tiếp tục hành trình — Đại hội X (2006)"
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

export default HomePage;
