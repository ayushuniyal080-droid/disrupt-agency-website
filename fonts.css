import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import logo from "figma:asset/e5168fe02a41a56fdcdd6743929bb237315164ad.png";
import { useState } from "react";

export function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / 15;
    const y = (e.clientY - centerY) / 15;
    
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const services = [
    {
      title: "Diagnose",
      description: "We analyze your market, audience, and growth barriers.",
    },
    {
      title: "Design",
      description: "We build a clear positioning strategy and campaign system.",
    },
    {
      title: "Disrupt",
      description: "We launch and optimize campaigns designed to shift attention and drive growth.",
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Attention Signal Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
          {/* Fox Logo Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="absolute right-32 md:right-48 lg:right-64 z-10"
          >
            <img 
              src={logo} 
              alt="" 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-[0.08]"
              style={{
                filter: "brightness(1.1) contrast(0.95)"
              }}
            />
          </motion.div>

          {/* Signal Wave 1 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 2.8, 2.8],
              opacity: [0, 0.08, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0
            }}
            className="absolute right-32 md:right-48 lg:right-64 w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] rounded-full border border-[#D74B3F]"
            style={{
              boxShadow: "0 0 40px rgba(215, 75, 63, 0.1), inset 0 0 40px rgba(215, 75, 63, 0.03)"
            }}
          />

          {/* Signal Wave 2 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 2.8, 2.8],
              opacity: [0, 0.06, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1.75
            }}
            className="absolute right-32 md:right-48 lg:right-64 w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] rounded-full border border-[#D74B3F]"
            style={{
              boxShadow: "0 0 40px rgba(215, 75, 63, 0.08), inset 0 0 40px rgba(215, 75, 63, 0.02)"
            }}
          />

          {/* Signal Wave 3 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 2.8, 2.8],
              opacity: [0, 0.05, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeOut",
              delay: 3.5
            }}
            className="absolute right-32 md:right-48 lg:right-64 w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] rounded-full border border-[#D74B3F]"
            style={{
              boxShadow: "0 0 40px rgba(215, 75, 63, 0.06), inset 0 0 40px rgba(215, 75, 63, 0.015)"
            }}
          />

          {/* Signal Wave 4 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 2.8, 2.8],
              opacity: [0, 0.04, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeOut",
              delay: 5.25
            }}
            className="absolute right-32 md:right-48 lg:right-64 w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] rounded-full border border-[#D74B3F]"
            style={{
              boxShadow: "0 0 40px rgba(215, 75, 63, 0.04), inset 0 0 40px rgba(215, 75, 63, 0.01)"
            }}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"
          />
        </div>

        <div className="relative max-w-[1800px] mx-auto px-8 lg:px-16 py-32">
          {/* Large Watermark Logo in right white space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              x: 0,
              rotateX: mousePosition.y * -0.5,
              rotateY: mousePosition.x * 0.5
            }}
            transition={{ 
              opacity: { duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
              x: { duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
              rotateX: { duration: 0.3, ease: "easeOut" },
              rotateY: { duration: 0.3, ease: "easeOut" }
            }}
            whileHover={{ 
              scale: 1.08,
              opacity: 0.4
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d"
            }}
          >
            <motion.img 
              src={logo} 
              alt="" 
              className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] opacity-25"
              style={{
                filter: "brightness(1.05) contrast(0.9)",
                transformStyle: "preserve-3d"
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl relative"
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-medium mb-8 tracking-tight leading-[0.95] relative z-10"
              style={{ fontWeight: 500 }}
            >
              Attention
              <br />
              <span className="text-primary">Rewired</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl text-foreground/80 relative z-10"
              style={{ fontWeight: 400 }}
            >
              Disrupt is a strategy-first media agency built for brands that refuse to grow the traditional way.
              We believe markets don't move because of more marketing noise — they move because of bold positioning and calculated pressure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105"
              >
                <span className="text-lg">Start the Conversation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 md:py-48 bg-secondary">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-medium mb-6 tracking-tight" style={{ fontWeight: 500 }}>
              What We Do
            </h2>
            <div className="w-24 h-1 bg-primary" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group bg-background p-12 rounded-2xl border border-border hover:border-primary/30 transition-all cursor-pointer"
              >
                <div className="text-6xl font-medium mb-6 text-primary/20 group-hover:text-primary/40 transition-colors" style={{ fontWeight: 500 }}>
                  0{index + 1}
                </div>
                <h3 className="text-3xl font-medium mb-4 tracking-tight" style={{ fontWeight: 500 }}>
                  {service.title}
                </h3>
                <p className="text-lg leading-relaxed text-foreground/70" style={{ fontWeight: 400 }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-32 md:py-48">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-medium mb-8 tracking-tight leading-tight" style={{ fontWeight: 500 }}>
                Markets don't move because of noise
              </h2>
              <p className="text-xl leading-relaxed mb-8 text-foreground/80" style={{ fontWeight: 400 }}>
                They move because of bold positioning and calculated pressure. We engineer attention shifts that turn into measurable business growth.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-primary hover:gap-4 transition-all"
              >
                <span className="text-lg">Learn more about us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1758873268364-15bef4162221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nJTIwbW9kZXJuJTIwb2ZmaWNlfGVufDF8fHx8MTc3MzUwNzUxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative team collaboration"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-48 bg-[#121212] text-[#FAF7F3]">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-medium mb-8 tracking-tight" style={{ fontWeight: 500 }}>
              Ready to Break the Pattern?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-[#E5E5E5] max-w-3xl mx-auto" style={{ fontWeight: 400 }}>
              Tell us about your brand and the growth challenge you're facing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105"
            >
              <span className="text-lg">Start the Conversation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}