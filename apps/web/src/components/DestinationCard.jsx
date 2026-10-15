import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

function DestinationCard({ image, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default DestinationCard;