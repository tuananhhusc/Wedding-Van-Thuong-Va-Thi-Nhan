"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { fadeUpVariants, getEnterDistance, motionTokens, staggerContainer } from "@/lib/motion";
import {
  SacredUnityCross,
  OliveBranch,
  CrossDivider,
} from "@/components/CatholicOrnaments";

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const enterDistance = getEnterDistance(Boolean(prefersReducedMotion), true);

  return (
    <footer className="py-20 text-center relative overflow-hidden section-bg-nenphu section-bg-nenmobile">
      {/* Subtle olive branches */}
      <div className="absolute left-4 bottom-4 opacity-[0.1]">
        <OliveBranch className="w-36 text-sage" />
      </div>
      <div className="absolute right-4 bottom-4 opacity-[0.1]">
        <OliveBranch flip className="w-36 text-sage" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-lg mx-auto relative z-10 px-6"
      >
        {/* Cross */}
        <motion.div
          variants={fadeUpVariants(enterDistance)}
        >
          <SacredUnityCross size={48} className="text-gold mx-auto mb-10" />

          {/* Blessing */}
          <p className="!font-script text-gold text-3xl md:text-4xl mb-6">
            Lời Chúc Phúc
          </p>

          <blockquote className="font-serif text-navy text-base md:text-lg italic leading-[2] max-w-md mx-auto">
            &ldquo;Xin Chúa chúc lành và gìn giữ anh chị em. Xin Chúa tươi nét
            mặt nhìn đến anh chị em và dủ lòng thương. Xin Chúa ghé mắt nhìn
            anh chị em và ban bình an.&rdquo;
          </blockquote>
          <p className="text-gold-muted text-[10px] tracking-[0.2em] mt-4 uppercase font-bold">
            — Sách Dân Số 6, 24–26
          </p>
        </motion.div>

        {/* Cross divider */}
        <motion.div variants={fadeUpVariants(enterDistance)}>
          <CrossDivider className="my-10 opacity-50" />
        </motion.div>

        {/* Gratitude */}
        <motion.div
          variants={fadeUpVariants(enterDistance)}
          transition={{ duration: motionTokens.duration.slow, delay: 0.1 }}
        >
          <p className="font-serif text-charcoal text-sm md:text-base leading-relaxed italic">
            Với tất cả lòng biết ơn và yêu thương,
            <br />
            xin cảm ơn quý khách đã đến chung vui
            <br />
            cùng gia đình chúng tôi.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
            <OliveBranch className="w-16 text-sage opacity-50 hidden md:block" />
            <div className="!font-script text-navy text-3xl md:text-5xl px-3 leading-snug md:leading-relaxed flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3">
              <span className="whitespace-nowrap">Giuse Nguyễn Văn Thường</span>
              <span className="text-[#8a1827] font-serif italic text-2xl md:text-4xl my-2 md:my-0">&amp;</span>
              <span className="whitespace-nowrap">Terexa Phạm Thị Nhàn</span>
            </div>
            <OliveBranch flip className="w-16 text-sage opacity-50 hidden md:block" />
          </div>

          {/* Very bottom */}
          <div className="mt-12 pt-8 border-t border-gold-pale/20">
            <p className="text-charcoal-light text-[8px] tracking-[0.15em] mt-2 uppercase opacity-50 font-bold">
              © 2026 — Designer by NTABLP. All rights reserved.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
