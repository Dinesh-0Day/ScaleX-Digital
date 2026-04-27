import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechVision India",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "ScaleX transformed our gaming platform completely. Their expertise in Unreal Engine and seamless API integration helped us launch 3 months ahead of schedule. Highly recommended!"
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director, GrowthHub",
    image: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    text: "The 360° marketing campaign they created for us generated 300% ROI in just 2 months. Their Telegram Euro cabinet ads strategy was game-changing for our European market expansion."
  },
  {
    name: "Amit Patel",
    role: "Founder, PayFast Solutions",
    image: "https://i.pravatar.cc/150?img=33",
    rating: 5,
    text: "Best payment gateway integration I've experienced. ScaleX handled everything from Razorpay to Stripe with zero downtime. Their technical team is outstanding!"
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager, GameStudio",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    text: "Working with ScaleX on our Unity mobile game was incredible. They delivered stunning graphics, smooth gameplay, and helped us reach 1M+ downloads in the first month."
  },
  {
    name: "Vikram Singh",
    role: "CTO, DataFlow Inc",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    text: "Their API development and integration skills are top-notch. ScaleX built a robust REST API infrastructure that handles 10K+ requests per second flawlessly."
  },
  {
    name: "Neha Gupta",
    role: "Brand Manager, FashionForward",
    image: "https://i.pravatar.cc/150?img=25",
    rating: 5,
    text: "The social media marketing campaign exceeded all expectations. Our engagement increased by 450% and we gained 50K+ genuine followers in 3 months. Amazing work!"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-[#030712] border-t border-white/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold tracking-wide uppercase mb-6"
          >
            <Quote size={14} /> Client Success Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Don't just take our word for it - hear from the businesses we've helped grow and succeed
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-[320px] flex-shrink-0"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <Quote className="text-indigo-400/30 mb-3" size={28} />

                  {/* Text */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-4">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full border-2 border-indigo-500/30"
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-slate-400 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
