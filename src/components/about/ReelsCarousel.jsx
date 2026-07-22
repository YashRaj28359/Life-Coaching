import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const reels = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    views: '12.4K',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    views: '8.2K',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    views: '15.1K',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    views: '24.5K',
  }
];

export default function ReelsCarousel() {
  // Duplicate the array to create a seamless infinite scroll effect
  const duplicatedReels = [...reels, ...reels];

  return (
    <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)]">
      
      <motion.div 
        className="flex w-max gap-4 py-4 lg:gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {duplicatedReels.map((reel, index) => (
          <div
            key={`${reel.id}-${index}`}
            className="relative h-[400px] w-[240px] shrink-0 overflow-hidden rounded-3xl shadow-xl lg:h-[450px] lg:w-[280px]"
          >
            <img 
              src={reel.image}
              alt="Reel placeholder"
              className="h-full w-full object-cover"
            />
            {/* Reel Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70 pointer-events-none" />
            

          </div>
        ))}
      </motion.div>
    </div>
  );
}
