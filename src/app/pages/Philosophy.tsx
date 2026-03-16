import { motion } from "motion/react";

export function Philosophy() {
  const principles = [
    {
      label: "Purpose",
      title: "Create Market Shifts, Not Marketing Noise",
      content:
        "We exist to help brands break through the predictable patterns of traditional marketing. Our purpose is to create meaningful market shifts through strategic positioning and calculated pressure, not by adding to the noise.",
    },
    {
      label: "Vision",
      title: "Lead a New Generation of Brands",
      content:
        "To lead a new generation of brands that don't follow markets — they move them. We envision a future where bold positioning and strategic thinking replace volume-based marketing approaches.",
    },
    {
      label: "Mission",
      title: "Engineer Attention into Growth",
      content:
        "We engineer positioning, content, and performance campaigns that pressure markets and convert attention into growth. Every action we take is designed to shift perception and drive measurable business results.",
    },
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-32 md:py-48">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium mb-8 tracking-tight leading-[0.95]" style={{ fontWeight: 500 }}>
              Our
              <br />
              <span className="text-primary">Philosophy</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 max-w-3xl mx-auto" style={{ fontWeight: 400 }}>
              The principles that guide our work and define how we create impact for the brands we partner with.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="pb-32">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-32 md:mb-48"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
                <div className="md:col-span-3">
                  <div className="text-sm tracking-widest uppercase text-foreground/40 mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-xl tracking-widest uppercase text-primary" style={{ fontWeight: 500 }}>
                    {principle.label}
                  </div>
                </div>

                <div className="md:col-span-9">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8 tracking-tight leading-tight" style={{ fontWeight: 500 }}>
                    {principle.title}
                  </h2>
                  <p className="text-xl md:text-2xl leading-relaxed text-foreground/70 max-w-4xl" style={{ fontWeight: 400 }}>
                    {principle.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 md:py-48 bg-secondary">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <blockquote className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight max-w-5xl mx-auto" style={{ fontWeight: 500 }}>
              "Markets don't move because of more marketing{" "}
              <span className="text-primary">noise</span> — they move because of bold{" "}
              <span className="text-primary">positioning</span> and calculated{" "}
              <span className="text-primary">pressure</span>."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-32">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[21/9] rounded-2xl overflow-hidden"
          >
            <img
              src={philosophyImage}
              alt="Minimal workspace"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="pb-32 md:pb-48">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-medium mb-24 tracking-tight" style={{ fontWeight: 500 }}
          >
            What We Believe
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {[
              {
                title: "Strategy Over Tactics",
                description:
                  "Sustainable growth comes from deep strategic thinking, not trendy tactics. We invest the time to understand your market before we launch campaigns.",
              },
              {
                title: "Quality Over Volume",
                description:
                  "One piece of exceptional content will always outperform a hundred mediocre posts. We focus on creating work that demands attention.",
              },
              {
                title: "Results Over Activity",
                description:
                  "We measure success by business outcomes, not campaign metrics. Every initiative is tied directly to your growth objectives.",
              },
              {
                title: "Partnerships Over Transactions",
                description:
                  "We're not a vendor, we're an extension of your team. We succeed when you succeed, and we're invested in your long-term growth.",
              },
            ].map((belief, index) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight" style={{ fontWeight: 500 }}>
                  {belief.title}
                </h3>
                <p className="text-lg leading-relaxed text-foreground/70" style={{ fontWeight: 400 }}>
                  {belief.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
