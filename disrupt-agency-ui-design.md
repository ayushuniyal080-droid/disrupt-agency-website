import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";

export function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(0);

  const services = [
    {
      title: "Strategy",
      subtitle: "Foundation for Market Disruption",
      items: [
        "Content Strategy",
        "Brand Messaging",
        "Growth Strategy",
        "Market Positioning",
        "Competitive Analysis",
      ],
      description:
        "We dive deep into your market landscape, audience behavior, and competitive positioning. Our strategic frameworks are designed to identify untapped opportunities and create actionable roadmaps that drive sustainable growth.",
      image: "https://images.unsplash.com/photo-1752154344437-44bd7480e8ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJ1c2luZXNzJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzczNTA3NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Creative",
      subtitle: "Execution That Demands Attention",
      items: [
        "Content Systems",
        "Campaign Concepts",
        "Visual Storytelling",
        "Brand Identity",
        "Creative Direction",
      ],
      description:
        "Bold creative that breaks through the noise. We build comprehensive content systems and campaign concepts that tell your story in a way that resonates, engages, and converts across every touchpoint.",
      image: "https://images.unsplash.com/photo-1758873268364-15bef4162221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nJTIwbW9kZXJuJTIwb2ZmaWNlfGVufDF8fHx8MTc3MzUwNzUxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Performance",
      subtitle: "Data-Driven Growth Engine",
      items: [
        "Paid Media Campaigns",
        "Conversion Funnels",
        "Analytics and Optimization",
        "Performance Tracking",
        "ROI Modeling",
      ],
      description:
        "Precision-engineered campaigns that drive measurable results. We combine strategic media buying, conversion optimization, and continuous testing to ensure every dollar works harder and delivers quantifiable business growth.",
      image: "https://images.unsplash.com/photo-1686634369724-6fedf791a8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzM1MDc1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
            className="max-w-5xl"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium mb-8 tracking-tight leading-[0.95]" style={{ fontWeight: 500 }}>
              Our
              <br />
              <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 max-w-3xl" style={{ fontWeight: 400 }}>
              We combine strategic thinking, creative excellence, and performance optimization to engineer attention shifts that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="pb-32">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border border-border rounded-2xl overflow-hidden bg-background"
              >
                <button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="w-full px-8 md:px-12 py-8 md:py-10 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                >
                  <div>
                    <div className="flex items-baseline gap-4 mb-2">
                      <span className="text-4xl md:text-5xl font-medium tracking-tight" style={{ fontWeight: 500 }}>
                        {service.title}
                      </span>
                      <span className="text-sm text-foreground/50 tracking-widest uppercase">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="text-lg text-foreground/60" style={{ fontWeight: 400 }}>
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-8">
                    {expandedService === index ? (
                      <Minus className="w-8 h-8 text-primary" />
                    ) : (
                      <Plus className="w-8 h-8" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedService === index ? "auto" : 0,
                    opacity: expandedService === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-8 md:px-12 pb-10 border-t border-border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
                      <div>
                        <h4 className="text-sm tracking-widest uppercase mb-6 text-foreground/50">
                          What's Included
                        </h4>
                        <ul className="space-y-4 mb-8">
                          {service.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-lg" style={{ fontWeight: 400 }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-lg leading-relaxed text-foreground/70" style={{ fontWeight: 400 }}>
                          {service.description}
                        </p>
                      </div>

                      <div className="aspect-[4/3] rounded-xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-48 bg-[#121212] text-[#FAF7F3]">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-7xl font-medium mb-8 tracking-tight" style={{ fontWeight: 500 }}>
              Let's Build Something
              <br />
              <span className="text-primary">Remarkable</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-[#E5E5E5]" style={{ fontWeight: 400 }}>
              Ready to engineer attention and drive growth?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105"
            >
              <span className="text-lg">Start the Conversation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
