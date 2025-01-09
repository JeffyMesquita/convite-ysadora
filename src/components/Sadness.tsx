import { motion } from "framer-motion";
import Image from "next/image";

export default function Sadness() {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 flex items-center justify-center shadow-lg p-2 shadow-blue-500">
        <Image
          src="/images/sadness.png"
          alt="Tristeza"
          width={50}
          height={50}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <p className="text-center font-bold text-blue-500 text-xs mt-1 sm:text-sm sm:mt-2">
        Tristeza
      </p>
    </motion.div>
  );
}
