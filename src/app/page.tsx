"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import Joy from "../components/Joy";
import Sadness from "../components/Sadness";
import Anger from "../components/Anger";
import Disgust from "../components/Disgust";
import Fear from "../components/Fear";
import Embarrassment from "../components/Embarrassment";
import Anxiety from "../components/Anxiety";
import Envy from "../components/Envy";
import Ennui from "../components/Ennui";

import InviteText from "../components/InviteText";

export default function DivertidamenteConvite() {
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/images/inside-out-background.webp')" }}
    >
      <motion.div
        className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg p-1 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl shadow-[0_0_20px_rgba(255,0,255,0.5),0_0_30px_rgba(255,0,255,0.5),0_0_40px_rgba(255,0,255,0.5)]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="bg-white/40 rounded-lg p-4 sm:p-6 md:p-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <Joy />
            <Sadness />
            <Anger />
            <Disgust />
            <Fear />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center mb-4 sm:mb-6 text-purple-600 text-balance">
            A Festa das Emoções da Ysadora
          </h1>

          <InviteText />

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
            <Embarrassment />
            <Anxiety />
            <Envy />
            <Ennui />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
