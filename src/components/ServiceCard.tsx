import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass glass-hover p-8 rounded-3xl flex flex-col items-start gap-6 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-500" />
      
      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <Icon size={28} />
      </div>
      
      <div className="space-y-3">
        <h3 className="text-xl font-heading font-bold">{title}</h3>
        <p className="text-white/60 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      <Button variant="ghost" className="p-0 text-primary hover:bg-transparent group/btn">
        Learn More <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
      </Button>
    </motion.div>
  );
};
