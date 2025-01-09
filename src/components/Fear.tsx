import { motion } from "framer-motion";
import Image from "next/image";

export default function Fear() {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-300 to-purple-500 flex items-center justify-center shadow-lg p-2 shadow-purple-500">
        <Image
          src="/images/fear.webp"
          alt="Medo"
          width={50}
          height={50}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <p className="text-center font-bold text-purple-500 mt-1 text-xs sm:text-sm sm:mt-2">
        Medo
      </p>
    </motion.div>
  );
}
