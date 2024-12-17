"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const FloatingElement = ({ emoji, className }: { emoji: string; className: string }) => (
  <motion.div
    className={`absolute text-5xl ${className} opacity-60`}
    animate={{
      y: [0, -20, 0],
      rotate: [-5, 5, -5],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {emoji}
  </motion.div>
);

const GradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`bg-gradient-to-r from-[#cc3535] via-[#b82a2a] to-[#2a8f2a] text-transparent bg-clip-text ${className}`}>
    {children}
  </span>
);

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F5] via-[#FFF0F0] to-[#F0FFF4] dark:from-[#1a0f0f] dark:via-[#201515] dark:to-[#152015] overflow-hidden relative">
      {/* Floating Background Elements */}
      <FloatingElement emoji="🎄" className="top-20 left-[10%] blur-[0.3px]" />
      <FloatingElement emoji="❄️" className="top-40 right-[15%] blur-[0.3px]" />
      <FloatingElement emoji="🎁" className="bottom-20 left-[20%] blur-[0.3px]" />
      <FloatingElement emoji="⭐" className="top-32 left-[80%] blur-[0.3px]" />
      <FloatingElement emoji="🕯️" className="bottom-40 right-[25%] blur-[0.3px]" />

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 flex items-center justify-center min-h-screen">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            // Envelope Closed State
            <motion.div
              key="envelope"
              className="cursor-pointer w-[90vw] max-w-[400px]"
              onClick={() => setIsOpen(true)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                {/* Envelope Body */}
                <motion.div 
                  className="w-full aspect-[1.43/1] bg-gradient-to-br from-[#f8e5e5] to-[#fff0f0] dark:from-[#2a1515] dark:to-[#1f1414] rounded-xl shadow-2xl flex items-center justify-center border-2 border-[#e4c1c1] dark:border-[#3a2020]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Envelope Flap */}
                  <div className="absolute -top-[50%] left-0 w-full h-[50%] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-t from-[#f8e5e5] to-[#fff0f0] dark:from-[#2a1515] dark:to-[#1f1414] transform origin-bottom rotate-180 rounded-b-[140px] border-2 border-[#e4c1c1] dark:border-[#3a2020]" />
                  </div>
                  
                  {/* Decorative Seal - Moved inside envelope body */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#cc3535] to-[#b82a2a] dark:from-[#8f2424] dark:to-[#6b1c1c] rounded-full flex items-center justify-center shadow-lg border-2 border-[#e4c1c1] dark:border-[#3a2020]">
                      <span className="text-2xl sm:text-3xl">❤️</span>
                    </div>
                  </div>

                  {/* Text content moved below */}
                  <div className="text-2xl sm:text-3xl font-playfair text-[#9d3535] dark:text-[#ff9898] relative z-10 mt-4">
                    For Lia ❤️
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            // Redesigned Letter Content
            <motion.div
              key="content"
              className="w-[95vw] max-w-6xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-br from-[#fff9f9] to-[#fff4f4] dark:from-[#1f1414] dark:to-[#251818] p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl border-2 border-[#e4c1c1] dark:border-[#3a2020]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left Column - Image and Title */}
                  <motion.div 
                    className="flex flex-col items-center space-y-6 sm:space-y-8 lg:space-y-10"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#e4c1c1] dark:border-[#3a2020] transform hover:scale-[1.02] transition-transform duration-300"
                    >
                      <Image
                        src="/lia.jpg"
                        alt="Lia"
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>

                    <motion.div
                      className="text-center space-y-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-wide">
                        <GradientText>Maligayang Pasko,</GradientText>
                      </h1>
                      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-[#9d3535] dark:text-[#ff9898] tracking-tight">
                        Lia!
                      </h2>
                    </motion.div>
                  </motion.div>

                  {/* Right Column - Content */}
                  <motion.div 
                    className="flex flex-col justify-between space-y-6 sm:space-y-8"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="space-y-6 sm:space-y-8">
                      <p className="text-xl sm:text-2xl font-playfair text-[#9d3535] dark:text-[#ff9898] italic tracking-wide">
                        Nawa'y mapuno ng kagalakan at pagpapala ang iyong Pasko!
                      </p>
                      
                      <div className="space-y-4 sm:space-y-6 font-sans">
                        <p className="text-base sm:text-lg leading-relaxed text-[#4a3333] dark:text-[#e4c1c1] first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-playfair first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-[#9d3535]">
                          To a beautiful soul whose gentle presence brightens every room she enters. Though we haven't met, your Asian heritage speaks of rich traditions and deep cultural values that make you uniquely special.
                        </p>
                        
                        <p className="text-base sm:text-lg leading-relaxed text-[#4a3333] dark:text-[#e4c1c1]">
                          I imagine you as someone with a kind heart, carrying the warmth of Filipino hospitality, and blessed with that distinctive Asian grace that makes every gesture meaningful. Your name, Lia, sounds like a melody - short, sweet, and memorable.
                        </p>

                        <p className="text-base sm:text-lg leading-relaxed text-[#4a3333] dark:text-[#e4c1c1] font-medium">
                          May this Christmas season paint your world with colors of joy and fill your heart with precious moments. Like the stars that guide us on Christmas Eve, may your path be illuminated with endless possibilities and beautiful surprises.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-[#e4c1c1] dark:border-[#3a2020] flex flex-col items-center text-center"
                        >
                          <span className="text-3xl sm:text-4xl mb-2">🎄</span>
                          <span className="text-sm sm:text-base font-playfair font-medium text-[#4a3333] dark:text-[#e4c1c1]">
                            Pagmamahal at Pagpapala
                          </span>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-[#e4c1c1] dark:border-[#3a2020] flex flex-col items-center text-center"
                        >
                          <span className="text-3xl sm:text-4xl mb-2">✨</span>
                          <span className="text-sm sm:text-base font-playfair font-medium text-[#4a3333] dark:text-[#e4c1c1]">
                            Masaganang Bagong Taon
                          </span>
                        </motion.div>
                      </div>

                      <div className="bg-white/20 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-[#e4c1c1] dark:border-[#3a2020] text-center">
                        <p className="text-lg sm:text-xl font-playfair text-[#9d3535] dark:text-[#ff9898] italic mb-2 sm:mb-3 tracking-wide">
                          "Ang bawat sandali ay isang regalo, tulad mo - isang blessing sa aming lahat"
                        </p>
                        <p className="text-sm sm:text-base text-[#4a3333] dark:text-[#e4c1c1] font-medium">
                          (Every moment is a gift, just like you - a blessing to us all)
                        </p>
                      </div>

                      <div className="flex justify-center text-2xl sm:text-3xl gap-3 sm:gap-4">
                        🎄 ❄️ 🎁 ⭐ 🕯️
                      </div>

                      <motion.button
                        onClick={() => setIsOpen(false)}
                        className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#cc3535] to-[#b82a2a] text-white text-base sm:text-lg font-medium tracking-wide rounded-full hover:from-[#b82a2a] hover:to-[#a32424] transition-colors shadow-xl border border-[#e4c1c1] dark:border-[#3a2020]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Close Letter
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
