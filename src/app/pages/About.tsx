import { motion } from "motion/react";
import logo from "figma:asset/e5168fe02a41a56fdcdd6743929bb237315164ad.png";
import chartImage from "figma:asset/6147caf0d4c249abd2108bbbb207b6476e6fb3d3.png";
import brandsImage from "figma:asset/6519b28043fa2c61595480cbc788ec8f1a9dc742.png";
import aboutUsImage from "figma:asset/674c18a91619e46536ec2aa70e9ac3d9900faa2f.png";

export function About() {
  return (
    <div className="bg-background">
      {/* Hero Section with Logo */}
      <section className="py-32 md:py-48">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-24"
          >
            <img src={logo} alt="DISRUPT" className="h-32 md:h-48 w-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-12 tracking-tight leading-tight text-center" style={{ fontWeight: 500 }}>
              Strategy-first.
              <br />
              <span className="text-primary">Results-driven.</span>
            </h1>

            <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-foreground/80 text-center" style={{ fontWeight: 400 }}>
              <p>
                Disrupt is a strategy-first media agency built for brands that refuse to grow the traditional way.
                We believe markets don't move because of more marketing noise — they move because of bold positioning and calculated pressure.
              </p>
              <p>
                Our work focuses on engineering attention shifts that turn into measurable business growth. Through a combination of strategy, creative execution, and performance media, we help brands break predictable patterns and compete at a higher level.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-32 md:py-48 bg-secondary">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-background"
            >
              <img
                src={chartImage}
                alt="Brand Strategy Accelerating Business Growth"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-background"
            >
              <img
                src={brandsImage}
                alt="Global brand recognition and strategy"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 md:py-48">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-medium mb-24 tracking-tight text-center" style={{ fontWeight: 500 }}
          >
            Our Approach
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Strategic Thinking",
                description: "We start with deep market analysis and positioning strategy before any campaign launches.",
              },
              {
                title: "Creative Excellence",
                description: "Bold ideas executed flawlessly across every touchpoint and channel.",
              },
              {
                title: "Measurable Impact",
                description: "Every campaign is built to shift attention and deliver quantifiable business growth.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <h3 className="text-3xl font-medium mb-4 tracking-tight" style={{ fontWeight: 500 }}>
                  {value.title}
                </h3>
                <p className="text-lg leading-relaxed text-foreground/70" style={{ fontWeight: 400 }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Image */}
      <section className="pb-32">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[21/9] rounded-2xl overflow-hidden"
          >
            <img
              src={aboutUsImage}
              alt="About Us"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}