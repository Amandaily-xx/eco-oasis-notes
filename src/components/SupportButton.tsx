import { useState } from "react";
import { Coffee, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SupportButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-5 py-3 rounded-full shadow-lg font-body text-sm font-medium transition-all hover:scale-105 active:scale-95"
        style={{
          background: "linear-gradient(135deg, hsl(174 40% 92%), hsl(35 60% 95%))",
          color: "hsl(174 30% 30%)",
          border: "1px solid hsl(174 30% 82%)",
        }}
      >
        <Coffee className="w-4 h-4" />
        Support
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md rounded-2xl shadow-2xl p-8 text-center"
              style={{
                background: "linear-gradient(160deg, hsl(174 35% 96%), hsl(35 50% 97%) 60%, hsl(340 40% 97%))",
                border: "1px solid hsl(174 30% 88%)",
              }}
            >
              <h2 className="font-display text-xl font-bold mb-3" style={{ color: "hsl(174 30% 25%)" }}>
                You've increased my Marginal Utility! 📈
              </h2>
              <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "hsl(174 15% 35%)" }}>
                Thank you so much for supporting the Oasis. Your contribution helps cover server costs and keeps these notes free, accurate, and updated for everyone. Happy studying! — Amanda
              </p>

              <button
                onClick={() => setOpen(false)}
                className="px-6 py-2.5 rounded-xl font-body text-sm font-medium transition-all hover:opacity-90"
                style={{
                  background: "hsl(174 35% 45%)",
                  color: "white",
                }}
              >
                Close
              </button>

              {/* Animated Heart */}
              <div className="mt-4 flex justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.25, 1],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Heart className="w-6 h-6 fill-red-400 text-red-400" />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SupportButton;
