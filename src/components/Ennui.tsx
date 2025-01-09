import { motion } from "framer-motion";
import Image from "next/image";

export default function Ennui() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-indigo-300 to-indigo-500 flex items-center justify-center shadow-lg p-2 shadow-indigo-500">
        <Image
          src="/images/ennui.png"
          alt="Tédio"
          width={50}
          height={50}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <p className="text-center font-bold text-indigo-600 mt-1 text-xs sm:text-sm sm:mt-2">
        Tédio
      </p>
    </motion.div>
  );
}
