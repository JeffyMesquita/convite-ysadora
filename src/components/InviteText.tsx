import { motion } from "framer-motion";

export default function InviteText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="text-center"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-pink-600">
        Você está convidado para uma festa no meu Quartel-General!
      </h2>
      <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-4 text-pink-700 font-semibold">
        Venha celebrar conosco e deixe suas emoções à flor da pele!
      </p>
      <div className="text-xs sm:text-sm md:text-base text-rose-800">
        <p className="font-bold">Data: 15 de Janeiro de 2025</p>
        <p className="font-bold">Hora: 19:00</p>
        <p className="font-bold">Local: Balão Mágico</p>
      </div>
      <motion.a
        className="mt-4 sm:mt-6 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-2 px-4 rounded-full block mx-auto text-sm sm:text-base w-fit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        target="_blank"
        href="https://wa.me/5517991971306?text=Olá%2C%20Ysadora!%20Eu%20confirmo%20minha%20presença%20na%20sua%20festa%20de%20aniversário!"
      >
        Confirmar Presença
      </motion.a>

      <p className="text-xs sm:text-sm md:text-base mt-4 sm:mt-6 text-pink-700 italic font-extrabold">
        *Obs: Este é um convite apenas para as crianças
      </p>
    </motion.div>
  );
}
