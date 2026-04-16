"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SacredUnityCross } from "@/components/CatholicOrnaments";

type PageLoaderProps = {
  visible: boolean;
};

export default function PageLoader({ visible }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
          className="fixed inset-0 z-[250] flex items-center justify-center bg-cream"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center px-5"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-center mb-4"
            >
              <SacredUnityCross size={56} className="text-gold" />
            </motion.div>
            <p className="!font-script text-navy text-3xl md:text-5xl">Văn Thường ❤️ Thị Nhàn</p>
            <p className="mt-2 text-gold-muted text-[10px] tracking-[0.2em] uppercase">Bắt đầu hành trình yêu thương</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
