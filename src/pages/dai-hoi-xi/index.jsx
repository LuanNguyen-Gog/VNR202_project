import { motion } from "framer-motion";
import {
  ScrollText,
  Landmark,
  Scale,
  Users2,
  Factory,
  Palette,
  Shield,
  Handshake,
  Vote,
  Gavel,
  Building,
  GraduationCap,
  FlaskConical,
  Leaf,
  BookMarked,
  HandHeart,
} from "lucide-react";
import PageShell from "../../components/layout/PageShell";
import Section from "../../components/layout/Section";
import Card from "../../components/ui/Card";
import { KineticSubline, MarqueeStrip } from "../../components/ui/KineticText";
import { getNeighbors } from "../../config/pages";

const dacTrung = [
  "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
  "Do nhân dân làm chủ",
  "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ phù hợp",
  "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
  "Con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện",
  "Các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển",
  "Có Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo",
  "Có quan hệ hữu nghị và hợp tác với các nước trên thế giới",
];

const phuongHuong = [
  { icon: Factory, text: "Đẩy mạnh CNH, HĐH gắn với phát triển kinh tế tri thức, bảo vệ tài nguyên, môi trường" },
  { icon: Scale, text: "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa" },
  { icon: Palette, text: "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc; nâng cao đời sống nhân dân" },
  { icon: Shield, text: "Bảo đảm vững chắc quốc phòng và an ninh quốc gia, trật tự, an toàn xã hội" },
  { icon: Handshake, text: "Đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị; chủ động hội nhập quốc tế" },
  { icon: Vote, text: "Xây dựng nền dân chủ XHCN, đại đoàn kết toàn dân tộc, mở rộng mặt trận dân tộc thống nhất" },
  { icon: Gavel, text: "Xây dựng Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân" },
  { icon: Landmark, text: "Xây dựng Đảng trong sạch, vững mạnh" },
];

const dotPha = [
  {
    num: "01",
    title: "Hoàn thiện thể chế",
    text: "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN, trọng tâm là tạo lập môi trường cạnh tranh bình đẳng và cải cách hành chính.",
  },
  {
    num: "02",
    title: "Nguồn nhân lực",
    text: "Phát triển nhanh nguồn nhân lực, nhất là nhân lực chất lượng cao; đổi mới căn bản, toàn diện nền giáo dục quốc dân, gắn với khoa học - công nghệ.",
  },
  {
    num: "03",
    title: "Kết cấu hạ tầng",
    text: "Xây dựng hệ thống kết cấu hạ tầng đồng bộ với một số công trình hiện đại, tập trung vào giao thông và hạ tầng đô thị lớn.",
  },
];

const nghiQuyetXI = [
  {
    icon: Building,
    code: "HN TW4 (1/2012)",
    title: "Kết cấu hạ tầng đồng bộ",
    text: "Xây dựng hệ thống kết cấu hạ tầng đưa nước ta cơ bản trở thành nước công nghiệp theo hướng hiện đại vào năm 2020.",
  },
  {
    icon: Landmark,
    code: "NQ 12-NQ/TW (1/2012)",
    title: "Xây dựng Đảng cấp bách",
    text: "Ba vấn đề cấp bách: ngăn chặn suy thoái tư tưởng, đạo đức, lối sống; xây dựng đội ngũ cán bộ lãnh đạo; xác định rõ thẩm quyền, trách nhiệm người đứng đầu.",
  },
  {
    icon: Shield,
    code: "TW5 - Ban chỉ đạo PCTN",
    title: "Phòng, chống tham nhũng",
    text: "Thành lập Ban Chỉ đạo Trung ương về phòng, chống tham nhũng trực thuộc Bộ Chính trị, do Tổng Bí thư làm Trưởng ban.",
  },
  {
    icon: Scale,
    code: "HN TW5 (5/2012)",
    title: "Chính sách đất đai",
    text: "Đất đai thuộc sở hữu toàn dân do Nhà nước là đại diện chủ sở hữu và thống nhất quản lý; quyền sử dụng đất là hàng hóa đặc biệt.",
  },
  {
    icon: Users2,
    code: "NQ 25-NQ/TW (6/2013)",
    title: "Công tác dân vận",
    text: "Đổi mới sự lãnh đạo của Đảng đối với công tác dân vận; thể chế hóa cơ chế 'Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ'.",
  },
  {
    icon: Gavel,
    code: "Hiến pháp 2013",
    title: "Sửa đổi Hiến pháp",
    text: "Tiếp thu tối đa ý kiến hợp lý của nhân dân, kiên trì những vấn đề có tính nguyên tắc, làm cơ sở ban hành Hiến pháp năm 2013.",
  },
  {
    icon: FlaskConical,
    code: "NQ 20-NQ/TW (11/2012)",
    title: "Khoa học & Công nghệ",
    text: "Phát triển KH&CN là quốc sách hàng đầu; đến 2020 đạt trình độ nhóm nước dẫn đầu ASEAN.",
  },
  {
    icon: GraduationCap,
    code: "NQ 29-NQ/TW (11/2013)",
    title: "Đổi mới giáo dục & đào tạo",
    text: "Đổi mới căn bản, toàn diện giáo dục; chuyển từ trang bị kiến thức sang phát triển toàn diện năng lực và phẩm chất người học.",
  },
  {
    icon: Palette,
    code: "NQ 33-NQ/TW (6/2014)",
    title: "Văn hóa & Con người",
    text: "Văn hóa là nền tảng tinh thần của xã hội, phải được đặt ngang hàng với kinh tế, chính trị, xã hội.",
  },
  {
    icon: HandHeart,
    code: "HN TW5 (5/2012)",
    title: "Chính sách xã hội 2012-2020",
    text: "Cải thiện đời sống người có công, bảo đảm an sinh xã hội — nhiệm vụ thường xuyên của Đảng, Nhà nước và toàn xã hội.",
  },
  {
    icon: Leaf,
    code: "NQ 24-NQ/TW (6/2013)",
    title: "Ứng phó biến đổi khí hậu",
    text: "Chủ động ứng phó với biến đổi khí hậu, tăng cường quản lý tài nguyên và bảo vệ môi trường.",
  },
  {
    icon: Shield,
    code: "NQ 28-NQ/TW (10/2013)",
    title: "Chiến lược bảo vệ Tổ quốc",
    text: "Kiên định mục tiêu độc lập dân tộc gắn với CNXH; kết hợp chặt chẽ hai nhiệm vụ chiến lược xây dựng và bảo vệ Tổ quốc.",
  },
];

const DaiHoiXIPage = () => {
  const neighbors = getNeighbors("/dai-hoi-xi");

  return (
    <PageShell {...neighbors}>
      {/* SECTION 1: HERO / BỐI CẢNH */}
      <Section className="items-center justify-center pt-32 pb-20 border-b border-brown/20 bg-beige min-h-screen">
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center z-10 relative">
          <div className="space-y-6 lg:col-span-3">
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-brown text-beige border border-brown">
              <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-widest">
                Phần d • Hà Nội, 12-19/1/2011
              </span>
            </div>

            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="font-display font-bold text-4xl md:text-6xl uppercase text-brown leading-tight"
            >
              Đại hội <span className="text-red-muted">XI</span> của Đảng
            </motion.h1>

            <KineticSubline className="max-w-2xl text-brown/80 text-lg font-medium border-l-4 border-red-muted pl-4 ml-2">
              Diễn ra khi đất nước đã ra khỏi tình trạng kém phát triển, trở
              thành nước đang phát triển có thu nhập trung bình thấp. Nội
              dung nổi bật: thông qua Cương lĩnh xây dựng đất nước trong thời
              kỳ quá độ lên CNXH (bổ sung, phát triển năm 2011) và Chiến lược
              phát triển kinh tế - xã hội 2011-2020.
            </KineticSubline>

            <div className="grid grid-cols-3 gap-4 pt-4 max-w-xl">
              {[
                { num: "1.377", label: "Đại biểu dự Đại hội" },
                { num: "3,6tr", label: "Đảng viên cả nước" },
                { num: "175", label: "Ủy viên TW chính thức" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white border border-brown rounded-xl p-4 text-center hover:shadow-hard-sm transition-shadow"
                >
                  <div className="font-display font-bold text-2xl md:text-3xl text-red-muted">
                    {s.num}
                  </div>
                  <div className="text-xs text-brown/70 uppercase font-mono tracking-wide">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-brown/70 font-body text-sm pt-2">
              Đồng chí <strong>Nguyễn Phú Trọng</strong> được bầu làm Tổng Bí
              thư của Đảng. Bộ Chính trị gồm 14 đồng chí.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block lg:col-span-2"
          >
            <Card
              variant="paper"
              className="p-8 border-2 border-brown shadow-hard-md rotate-1 hover:rotate-0 transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                <ScrollText className="text-red-muted" size={28} />
                <span className="font-mono text-xs uppercase tracking-widest text-brown/60">
                  Cương lĩnh 2011
                </span>
              </div>
              <p className="font-body text-brown leading-relaxed">
                Không thay thế mà <strong>bổ sung, phát triển</strong> Cương
                lĩnh năm 1991 trên cơ sở tổng kết 20 năm đổi mới. Mục tiêu
                đến <strong>giữa thế kỷ XXI</strong>: xây dựng nước ta trở
                thành một nước công nghiệp hiện đại, theo định hướng xã hội
                chủ nghĩa.
              </p>
              <div className="h-1 w-12 bg-red-muted mt-6"></div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 2: 8 ĐẶC TRƯNG */}
      <Section
        scrollable={true}
        className="items-center justify-center px-4 md:px-10 bg-cream border-y border-brown/20"
      >
        <div className="max-w-screen-2xl mx-auto w-full py-16 pt-28">
          <div className="text-center mb-14 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-brown border border-brown rounded-xl px-6 py-2 transform -rotate-1 shadow-sm"
            >
              <span className="font-mono font-bold uppercase tracking-widest text-sm text-beige">
                Cương lĩnh 2011
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brown uppercase">
              8 Đặc trưng của{" "}
              <span className="text-red-muted">Xã hội XHCN</span>
            </h2>
            <KineticSubline className="text-center max-w-3xl mx-auto text-brown">
              Xã hội xã hội chủ nghĩa mà nhân dân ta xây dựng là một xã hội:
            </KineticSubline>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {dacTrung.map((d, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.08 }}
              >
                <Card
                  variant="flat"
                  hoverEffect
                  className="p-6 bg-white border-l-4 border-l-red-muted h-full flex flex-col"
                >
                  <div className="font-display font-bold text-3xl text-red-muted/30 mb-3">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <p className="text-brown/90 font-body font-medium grow">
                    {d}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 3: 8 PHƯƠNG HƯỚNG + 8 MỐI QUAN HỆ */}
      <Section
        scrollable={true}
        className="items-center justify-center px-4 md:px-10 bg-beige"
      >
        <div className="max-w-screen-2xl mx-auto w-full py-16 pt-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brown uppercase mb-4">
              8 Phương hướng <span className="text-red-muted">cơ bản</span>
            </h2>
            <KineticSubline className="text-center max-w-3xl mx-auto text-brown">
              Con đường xây dựng chủ nghĩa xã hội ở nước ta theo Cương lĩnh
              năm 2011.
            </KineticSubline>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {phuongHuong.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.08 }}
              >
                <Card
                  variant="flat"
                  hoverEffect
                  className="p-6 bg-white border-t-4 border-t-red-muted h-full flex flex-col items-start gap-4"
                >
                  <div className="w-12 h-12 bg-red-muted/10 flex items-center justify-center border border-red-muted rounded-xl">
                    <p.icon className="text-red-muted" size={22} />
                  </div>
                  <p className="text-brown/90 font-body text-sm font-medium">
                    <span className="font-display font-bold text-red-muted mr-1">
                      {idx + 1}.
                    </span>
                    {p.text}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card
            variant="flat"
            className="p-8 bg-white border-2 border-brown shadow-hard"
          >
            <h3 className="font-display text-xl font-bold text-brown uppercase mb-4">
              8 Mối quan hệ lớn cần giải quyết tốt
            </h3>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-2 font-body text-brown/85">
              {[
                "Giữa đổi mới, ổn định và phát triển",
                "Giữa đổi mới kinh tế và đổi mới chính trị",
                "Giữa kinh tế thị trường và định hướng XHCN",
                "Giữa phát triển lực lượng sản xuất và hoàn thiện quan hệ sản xuất XHCN",
                "Giữa tăng trưởng kinh tế và phát triển văn hóa, tiến bộ, công bằng xã hội",
                "Giữa xây dựng CNXH và bảo vệ Tổ quốc XHCN",
                "Giữa độc lập, tự chủ và hội nhập quốc tế",
                "Giữa Đảng lãnh đạo, Nhà nước quản lý, nhân dân làm chủ",
              ].map((m, i) => (
                <div key={i} className="flex gap-3 items-start py-1">
                  <span className="w-2 h-2 bg-red-muted rounded-full mt-2.5 shrink-0"></span>
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* SECTION 4: CHIẾN LƯỢC 2011-2020 & 3 ĐỘT PHÁ */}
      <Section
        scrollable={true}
        className="items-center justify-center px-4 md:px-10 bg-brown text-beige"
      >
        <div className="max-w-screen-2xl mx-auto w-full py-16 pt-28">
          <div className="text-center mb-14 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase">
              Chiến lược 2011-2020 &{" "}
              <span className="text-gold">3 Đột phá chiến lược</span>
            </h2>
            <p className="font-body text-beige/80 max-w-3xl mx-auto text-lg">
              Phát triển nhanh gắn liền với phát triển bền vững là yêu cầu
              xuyên suốt; đổi mới đồng bộ, phù hợp về kinh tế và chính trị vì
              mục tiêu “dân giàu, nước mạnh, dân chủ, công bằng, văn minh”.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dotPha.map((d, idx) => (
              <motion.div
                key={d.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="bg-beige/10 border-2 border-beige/30 rounded-2xl p-8 hover:border-gold transition-colors flex flex-col"
              >
                <div className="font-display font-bold text-5xl text-gold mb-4">
                  {d.num}
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 uppercase">
                  {d.title}
                </h3>
                <p className="text-beige/80 font-body grow">{d.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-beige/5 border border-beige/20 rounded-2xl p-6 text-center">
            <p className="font-body text-beige/80">
              Kết quả 5 năm 2011-2016: tiềm lực kinh tế tăng lên, kinh tế vĩ
              mô cơ bản ổn định, kiểm soát được lạm phát —{" "}
              <span className="text-gold font-bold">GDP tăng bình quân 5,9%</span>
              , thu nhập bình quân{" "}
              <span className="text-gold font-bold">2.109 USD</span>. Đến năm
              2015, Việt Nam thiết lập quan hệ đối tác chiến lược với 15
              nước, đối tác toàn diện với 10 nước.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 5: CÁC NGHỊ QUYẾT TW KHÓA XI */}
      <Section
        scrollable={true}
        className="items-center justify-center px-4 md:px-10 bg-cream border-y border-brown/20"
      >
        <div className="max-w-screen-2xl mx-auto w-full py-16 pt-28">
          <div className="text-center mb-14 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brown uppercase">
              Trung ương khóa XI{" "}
              <span className="text-red-muted">chỉ đạo thực hiện</span>
            </h2>
            <KineticSubline className="text-center max-w-3xl mx-auto text-brown">
              Trong 5 năm 2011-2016, Trung ương Đảng tập trung chỉ đạo những
              vấn đề quan trọng trên tất cả các lĩnh vực.
            </KineticSubline>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {nghiQuyetXI.map((r, idx) => (
              <motion.div
                key={r.code + r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.06 }}
              >
                <Card
                  variant="flat"
                  hoverEffect
                  className="p-5 bg-white border-t-4 border-t-red-muted h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <r.icon className="text-red-muted shrink-0" size={22} />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brown/60">
                      {r.code}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-brown mb-2">
                    {r.title}
                  </h3>
                  <p className="text-brown/80 text-sm grow">{r.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <MarqueeStrip
              text="Cuộn tiếp — Mindmap tổng kết toàn bộ nội dung"
              speed={28}
              tone="dark"
              className="font-display font-bold uppercase tracking-widest text-xl border-2 border-ink shadow-hard"
            />
          </div>
        </div>
      </Section>
    </PageShell>
  );
};

export default DaiHoiXIPage;
