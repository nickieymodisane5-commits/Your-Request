import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface InsightCardProps {
  category: string;
  title: string;
  image: string;
  index: number;
}

export const InsightCard: React.FC<InsightCardProps> = ({ category, title, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer relative overflow-hidden rounded-3xl"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-deep-black via-deep-black/40 to-transparent group-hover:via-deep-black/60 transition-all duration-500" />
      </div>
      
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <span className="text-primary text-xs font-bold tracking-widest uppercase block mb-3">
          {category}
        </span>
        <h3 className="text-2xl font-heading font-bold text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <div className="mt-6 flex items-center gap-2 text-white/50 group-hover:text-white transition-colors overflow-hidden">
          <span className="text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">Read Article</span>
          <ArrowRight size={16} className="-translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};
