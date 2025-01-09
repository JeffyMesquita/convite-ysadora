import { motion } from "framer-motion";
import Image from "next/image";

export default function Anger() {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center shadow-lg p-2 shadow-red-600">
        <Image
          src="/images/anger.png"
          alt="Raiva"
          width={50}
          height={50}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <p className="text-center font-bold text-red-500 mt-1 text-xs sm:text-sm sm:mt-2">
        Raiva
      </p>
    </motion.div>
  );
}
