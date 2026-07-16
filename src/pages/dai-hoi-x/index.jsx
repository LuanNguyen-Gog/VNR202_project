import { motion } from "framer-motion";
import {
  Users,
  Landmark,
  Anchor,
  Scale,
  Wheat,
  ShieldCheck,
  SearchCheck,
  Building2,
  HardHat,
  Sparkles,
  GraduationCap,
  Globe2,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import PageShell from "../../components/layout/PageShell";
import Section from "../../components/layout/Section";
import Card from "../../components/ui/Card";
import { KineticSubline, MarqueeStrip } from "../../components/ui/KineticText";
import { getNeighbors } from "../../config/pages";

const lessons = [
  {
    num: "01",
    title: "Kiên định mục tiêu",
    text: "Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội trên nền tảng chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh.",
  },
  {
    num: "02",
    title: "Đổi mới toàn diện",
    text: "Đổi mới toàn diện, đồng bộ, có kế thừa, có bước đi, hình thức và cách làm phù hợp.",
  },
  {
    num: "03",
    title: "Vì dân, dựa vào dân",
    text: "Đổi mới phải vì lợi ích của nhân dân, dựa vào nhân dân, phát huy vai trò chủ động, sáng tạo của nhân dân, xuất phát từ thực tiễn.",
  },
  {
    num: "04",
    title: "Nội lực + Ngoại lực",
    text: "Phát huy cao độ nội lực, ra sức khai thác ngoại lực, kết hợp sức mạnh dân tộc với sức mạnh thời đại trong điều kiện mới.",
  },
  {
    num: "05",
    title: "Nâng cao năng lực Đảng",
    text: "Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, đổi mới hệ thống chính trị, hoàn thiện nền dân chủ XHCN, bảo đảm quyền lực thuộc về nhân dân.",
  },
];

const resolutions = [
  {
    icon: Anchor,
    code: "NQ 09-NQ/TW (2/2007)",
    title: "Chiến lược biển Việt Nam đến 2020",
    text: "Lần đầu tiên ban hành chiến lược biển toàn diện: phấn đấu kinh tế biển đóng góp 53-55% GDP, trở thành quốc gia mạnh về biển, làm giàu từ biển.",
  },
  {
    icon: Scale,
    code: "NQ 21-NQ/TW (1/2008)",
    title: "Hoàn thiện thể chế kinh tế thị trường",
    text: "Vận dụng đúng quy luật khách quan của kinh tế thị trường, gắn tăng trưởng kinh tế với tiến bộ, công bằng xã hội, giữ vững định hướng XHCN.",
  },
  {
    icon: Wheat,
    code: "Hội nghị TW 7 (8/2008)",
    title: "Nông nghiệp - Nông dân - Nông thôn",
    text: "Lần đầu đưa ra quyết sách đồng bộ về 'tam nông' — vị trí chiến lược trong CNH, HĐH, xây dựng và bảo vệ Tổ quốc.",
  },
  {
    icon: ShieldCheck,
    code: "NQ 04-NQ/TW (8/2006)",
    title: "Phòng, chống tham nhũng, lãng phí",
    text: "Đảng lãnh đạo chặt chẽ, phát huy sức mạnh cả hệ thống chính trị; gắn phòng chống tham nhũng với xây dựng, chỉnh đốn Đảng.",
  },
  {
    icon: SearchCheck,
    code: "NQ 14-NQ/TW (7/2007)",
    title: "Kiểm tra, giám sát của Đảng",
    text: "Kiểm tra, giám sát là nội dung rất quan trọng; giám sát mở rộng, kiểm tra có trọng tâm trọng điểm, kết hợp xây và chống, lấy xây là chính.",
  },
  {
    icon: Building2,
    code: "NQ 17-NQ/TW (8/2007)",
    title: "Đẩy mạnh cải cách hành chính",
    text: "Nâng cao hiệu lực, hiệu quả quản lý bộ máy nhà nước; phân công, phân cấp rõ ràng, phục vụ tốt nhất cho nhân dân.",
  },
  {
    icon: HardHat,
    code: "NQ 20-NQ/TW (2008)",
    title: "Xây dựng giai cấp công nhân",
    text: "Giai cấp công nhân lãnh đạo cách mạng thông qua đội tiên phong là Đảng, đại diện phương thức sản xuất tiên tiến, đi đầu trong CNH, HĐH.",
  },
  {
    icon: Sparkles,
    code: "NQ 25-NQ/TW (7/2008)",
    title: "Công tác thanh niên thời kỳ mới",
    text: "Thanh niên là rường cột của nước nhà, chủ nhân tương lai của đất nước, lực lượng xung kích trong xây dựng và bảo vệ Tổ quốc.",
  },
  {
    icon: GraduationCap,
    code: "NQ 27-NQ/TW (8/2008)",
    title: "Xây dựng đội ngũ trí thức",
    text: "'Hiền tài là nguyên khí quốc gia' — đầu tư xây dựng đội ngũ trí thức là đầu tư cho phát triển bền vững, nâng tầm trí tuệ dân tộc.",
  },
];

const DaiHoiXPage = () => {
  const neighbors = getNeighbors("/dai-hoi-x");

  return (
    <PageShell {...neighbors}>
      {/* SECTION 1: HERO / BỐI CẢNH */}
      <Section className="items-center justify-center pt-32 pb-20 border-b border-brown/20 bg-beige min-h-screen">
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center z-10 relative">
          <div className="space-y-6 lg:col-span-3">
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-brown text-beige border border-brown">
              <span className="w-2 h-2 bg-current rounded-full animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-widest">
                Phần c • Hà Nội, 18-25/4/2006
              </span>
            </div>

            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="font-display font-bold text-4xl md:text-6xl uppercase text-brown leading-tight"
            >
              Đại hội <span className="text-red-muted">X</span> của Đảng
            </motion.h1>

            <KineticSubline className="max-w-2xl text-brown/80 text-lg font-medium border-l-4 border-red-muted pl-4 ml-2">
              Diễn ra khi đất nước đã trải qua 20 năm đổi mới (1986-2006),
              đạt những thành tựu to lớn có ý nghĩa lịch sử. Thế và lực, uy
              tín quốc tế tăng lên nhiều; nhưng tình hình quốc tế diễn biến
              nhanh chóng, phức tạp, khó lường.
            </KineticSubline>

            <div className="grid grid-cols-3 gap-4 pt-4 max-w-xl">
              {[
                { num: "1.176", label: "Đại biểu dự Đại hội" },
                { num: "3,1tr", label: "Đảng viên cả nước" },
                { num: "160", label: "Ủy viên TW chính thức" },
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
              Đồng chí <strong>Nông Đức Mạnh</strong> được bầu lại làm Tổng Bí
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
              className="p-8 border-2 border-brown shadow-hard-md -rotate-1 hover:rotate-0 transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="text-red-muted" size={28} />
                <span className="font-mono text-xs uppercase tracking-widest text-brown/60">
                  Chủ đề Đại hội X
                </span>
              </div>
              <blockquote className="font-display text-xl font-bold text-brown leading-relaxed italic">
                “Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng, phát
                huy sức mạnh toàn dân tộc, đẩy mạnh toàn diện công cuộc đổi
                mới, sớm đưa nước ta ra khỏi tình trạng kém phát triển.”
              </blockquote>
              <div className="h-1 w-12 bg-red-muted mt-6"></div>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* SECTION 2: 5 BÀI HỌC */}
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
              className="inline-block bg-brown border border-brown rounded-xl px-6 py-2 transform rotate-1 shadow-sm"
            >
              <span className="font-mono font-bold uppercase tracking-widest text-sm text-beige">
                Tổng kết 20 năm đổi mới
              </span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brown uppercase">
              5 Bài học <span className="text-red-muted">lớn</span>
            </h2>
            <KineticSubline className="text-center max-w-3xl mx-auto text-brown">
              Sau khi đánh giá thành tựu, khuyết điểm, yếu kém của quá trình
              đổi mới, Đại hội X chỉ ra những bài học để tiếp tục hoàn thiện
              đường lối trong những năm tiếp theo.
            </KineticSubline>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((l, idx) => (
              <motion.div
                key={l.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Card
                  variant="flat"
                  hoverEffect
                  className="p-6 border-l-4 border-l-red-muted bg-white flex flex-col h-full shadow-sm hover:shadow-md"
                >
                  <div className="w-14 h-14 bg-red-muted/10 rounded-lg flex items-center justify-center mb-4 border border-red-muted">
                    <span className="font-display font-bold text-2xl text-red-muted">
                      {l.num}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 text-brown">
                    {l.title}
                  </h3>
                  <p className="text-brown/80 grow">{l.text}</p>
                  <div className="h-1 w-12 bg-red-muted mt-4"></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 3: ĐIỂM MỚI NỔI BẬT */}
      <Section
        scrollable={true}
        className="items-center justify-center px-4 md:px-10 bg-beige"
      >
        <div className="max-w-screen-2xl mx-auto w-full py-16 pt-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brown uppercase mb-4">
              Điểm mới <span className="text-red-muted">nổi bật</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <Card
              variant="flat"
              className="p-8 md:p-10 bg-white border-2 border-brown shadow-hard-md flex flex-col"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-muted text-red-muted font-mono text-xs uppercase tracking-widest w-max mb-6">
                Bổ sung 2 đặc trưng mới của CNXH
              </div>
              <blockquote className="font-body text-lg text-brown leading-relaxed italic mb-6">
                “Dân giàu, nước mạnh, công bằng, dân chủ, văn minh” và “có
                Nhà nước pháp quyền xã hội chủ nghĩa” — so với Cương lĩnh năm
                1991, đồng thời diễn đạt lại các đặc trưng khác.
              </blockquote>
              <p className="font-body text-base text-brown/80 leading-relaxed grow">
                Đại hội X cũng làm sáng tỏ bản chất của Đảng: Đảng Cộng sản
                Việt Nam là đội tiên phong của giai cấp công nhân, đồng thời
                là đội tiên phong của nhân dân lao động và của dân tộc Việt
                Nam. Nhiệm vụ <strong>then chốt</strong> là xây dựng, chỉnh
                đốn Đảng — thành tố đầu tiên của chủ đề Đại hội.
              </p>
            </Card>

            <div className="flex flex-col gap-6">
              <Card
                variant="flat"
                hoverEffect
                className="p-8 bg-white border-2 border-brown shadow-hard flex-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-red-muted/10 flex items-center justify-center border border-red-muted rounded-xl shrink-0">
                    <Users className="text-red-muted" size={26} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-brown mb-2">
                      Đảng viên được làm kinh tế tư nhân
                    </h3>
                    <p className="text-brown/80">
                      Quan điểm mới nổi bật: cho phép đảng viên làm kinh tế tư
                      nhân, kể cả tư bản tư nhân, nhưng phải tuân thủ Điều lệ
                      Đảng, nghị quyết của Đảng và pháp luật, nêu cao tính
                      tiên phong gương mẫu.
                    </p>
                  </div>
                </div>
              </Card>

              <Card
                variant="flat"
                hoverEffect
                className="p-8 bg-white border-2 border-brown shadow-hard flex-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-red-muted/10 flex items-center justify-center border border-red-muted rounded-xl shrink-0">
                    <HeartHandshake className="text-red-muted" size={26} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-brown mb-2">
                      Phát huy sức mạnh toàn dân tộc
                    </h3>
                    <p className="text-brown/80">
                      Xóa bỏ mọi mặc cảm, định kiến, phân biệt đối xử về quá
                      khứ, thành phần giai cấp; tôn trọng những ý kiến khác
                      nhau không trái với lợi ích của dân tộc; đề cao truyền
                      thống nhân nghĩa, khoan dung.
                    </p>
                  </div>
                </div>
              </Card>

              <Card
                variant="flat"
                hoverEffect
                className="p-8 bg-white border-2 border-brown shadow-hard flex-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-red-muted/10 flex items-center justify-center border border-red-muted rounded-xl shrink-0">
                    <TrendingUp className="text-red-muted" size={26} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-brown mb-2">
                      Đẩy mạnh toàn diện công cuộc đổi mới
                    </h3>
                    <p className="text-brown/80">
                      Hoàn thiện thể chế kinh tế thị trường định hướng XHCN;
                      đẩy mạnh CNH, HĐH gắn với phát triển kinh tế tri thức;
                      chủ động, tích cực hội nhập kinh tế quốc tế.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 4: CÁC NGHỊ QUYẾT TW KHÓA X */}
      <Section
        scrollable={true}
        className="items-center justify-center px-4 md:px-10 bg-cream border-y border-brown/20"
      >
        <div className="max-w-screen-2xl mx-auto w-full py-16 pt-28">
          <div className="text-center mb-14 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brown uppercase">
              Thực hiện <span className="text-red-muted">Nghị quyết</span> Đại
              hội X
            </h2>
            <KineticSubline className="text-center max-w-3xl mx-auto text-brown">
              Các Hội nghị Trung ương khóa X đã thảo luận và quyết định nhiều
              vấn đề quan trọng trên mọi lĩnh vực.
            </KineticSubline>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resolutions.map((r, idx) => (
              <motion.div
                key={r.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.08 }}
              >
                <Card
                  variant="flat"
                  hoverEffect
                  className="p-6 bg-white border-t-4 border-t-red-muted h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <r.icon className="text-red-muted shrink-0" size={24} />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-brown/60">
                      {r.code}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-brown mb-2">
                    {r.title}
                  </h3>
                  <p className="text-brown/80 text-sm grow">{r.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-brown/60 font-body text-sm mt-10 max-w-3xl mx-auto">
            Ngoài ra: Nghị quyết 15-NQ/TW về đổi mới phương thức lãnh đạo của
            Đảng, Nghị quyết 22-NQ/TW về tổ chức cơ sở đảng, Nghị quyết
            16-NQ/TW về công tác tư tưởng - lý luận - báo chí, mở rộng địa
            giới hành chính Thủ đô Hà Nội (1/8/2008), Cuộc vận động “Học tập
            và làm theo tấm gương đạo đức Hồ Chí Minh” (11/2006)...
          </p>
        </div>
      </Section>

      {/* SECTION 5: WTO & THÀNH TỰU */}
      <Section
        scrollable={true}
        className="items-center justify-center px-4 md:px-10 bg-brown text-beige"
      >
        <div className="max-w-screen-2xl mx-auto w-full py-16 pt-28">
          <div className="text-center mb-14 space-y-4">
            <div className="w-16 h-16 bg-red-muted mx-auto flex items-center justify-center border border-beige rounded-2xl">
              <Globe2 className="w-8 h-8 text-beige" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase">
              Hội nhập & <span className="text-gold">Thành tựu</span>
            </h2>
            <p className="font-body text-beige/80 max-w-3xl mx-auto text-lg">
              Tháng 11/2006, sau hơn 10 năm đàm phán, Việt Nam chính thức trở
              thành thành viên thứ 150 của Tổ chức Thương mại thế giới (WTO)
              — dấu mốc quan trọng trên con đường hội nhập kinh tế quốc tế.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "150",
                label: "Thành viên WTO thứ 150 (11/2006); đăng cai APEC 14",
              },
              {
                num: "7%",
                label: "Tốc độ tăng GDP bình quân 5 năm 2006-2010",
              },
              {
                num: "101,6 tỷ USD",
                label: "GDP năm 2010, gấp 3,28 lần năm 2000",
              },
              {
                num: "1.168 USD",
                label:
                  "GDP bình quân đầu người 2010 — năm 2008 ra khỏi nhóm nước nghèo, vào nhóm thu nhập trung bình",
              },
            ].map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-beige/10 border-2 border-beige/30 rounded-2xl p-6 text-center hover:border-gold transition-colors"
              >
                <div className="font-display font-bold text-3xl md:text-4xl text-gold mb-3">
                  {s.num}
                </div>
                <p className="text-beige/80 text-sm font-body">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            <div className="bg-beige/5 border border-beige/20 rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-gold mb-3 uppercase">
                Đối ngoại 2006 - 2010
              </h3>
              <p className="text-beige/80 font-body">
                Quan hệ thương mại - đầu tư với 230 nước và vùng lãnh thổ;
                hoàn thành phân giới cắm mốc trên đất liền với Trung Quốc
                (31/12/2008); phát triển quan hệ đặc biệt với Lào, hợp tác
                toàn diện với Campuchia; kiều hối đạt 8 tỷ USD năm 2010.
              </p>
            </div>
            <div className="bg-beige/5 border border-beige/20 rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-gold mb-3 uppercase">
                Ngoại giao văn hóa
              </h3>
              <p className="text-beige/80 font-body">
                Nhiều công trình được công nhận là di sản văn hóa thế giới:
                Kinh đô Huế, Thánh địa Mỹ Sơn, Hoàng thành Thăng Long, Vịnh
                Hạ Long, không gian văn hóa cồng chiêng Tây Nguyên, nhã nhạc
                cung đình Huế, quan họ Bắc Ninh...
              </p>
            </div>
          </div>

          <div className="mt-12">
            <MarqueeStrip
              text="Cuộn tiếp — Đại hội XI (2011) & Cương lĩnh bổ sung, phát triển"
              speed={28}
              tone="dark"
              className="bg-transparent text-beige/50 font-display font-bold uppercase tracking-widest text-xl border-none"
            />
          </div>
        </div>
      </Section>
    </PageShell>
  );
};

export default DaiHoiXPage;
