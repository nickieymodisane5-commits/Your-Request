import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionHeaderProps {
  pretitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader = ({
  pretitle,
  title,
  description,
  centered = false,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn('max-w-3xl space-y-4 mb-16', centered && 'mx-auto text-center', className)}>
      {pretitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary text-xs font-bold tracking-[0.2em] uppercase block"
        >
          {pretitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-heading font-extrabold text-white"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg md:text-xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
