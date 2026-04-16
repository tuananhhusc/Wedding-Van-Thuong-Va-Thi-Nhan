"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SacredUnityCross } from "@/components/CatholicOrnaments";
import type { BankAccount } from "@/lib/types";
import { fadeUpVariants, getEnterDistance, motionTokens, staggerContainer } from "@/lib/motion";
import { withBase } from "@/lib/basepath";

function CopyIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const fallbackAccounts: BankAccount[] = [
  {
    id: 1,
    role: "bride",
    account_holder: "PHAM THI NHAN",
    account_number: "8840769381",
    bank_name: "BIDV",
    qr_code_url: withBase("/image/nganhangcodau.jpg"),
  },
  {
    id: 2,
    role: "groom",
    account_holder: "NGUYỄN VĂN THƯỜNG",
    account_number: "000000000",
    bank_name: "Không có",
  },
];

export default function GiftSection() {
  const prefersReducedMotion = useReducedMotion();
  const enterDistance = getEnterDistance(Boolean(prefersReducedMotion), true);

  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedQr, setSelectedQr] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const { supabase } = await import("@/lib/supabase");
        const { data, error } = await supabase
          .from("bank_accounts")
          .select("*")
          .order("role", { ascending: true });

        if (error) throw error;
        if (data && data.length > 0) {
          setAccounts(data);
        } else {
          setAccounts(fallbackAccounts);
        }
      } catch {
        setAccounts(fallbackAccounts);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  const handleCopy = async (account: BankAccount) => {
    try {
      const cleanNumber = account.account_number.replace(/\s/g, "");
      await navigator.clipboard.writeText(cleanNumber);
      setCopiedId(account.id ?? null);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = account.account_number.replace(/\s/g, "");
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedId(account.id ?? null);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const renderCard = (
    account: BankAccount,
    label: string,
    index: number
  ) => (
    <motion.div 
      key={account.id} 
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: motionTokens.duration.base, delay: index * 0.12 }}
      className="gift-card border border-border-light/40 p-5 md:p-10 rounded-sm shadow-[0_10px_40px_rgba(27,42,74,0.03)] text-center relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 opacity-40"></div>
      
      {/* Label */}
      <div className="mb-7 md:mb-10">
        <p className="text-gold-muted text-[10px] tracking-[0.4em] uppercase font-bold mb-2">
          Hộp Thư {label}
        </p>
        <div className="w-10 h-px bg-gold-muted/30 mx-auto"></div>
      </div>

      {/* QR Code with Click-to-Zoom */}
      <div className="mb-10 relative inline-block group/qr">
        <div 
          className="p-3 md:p-4 bg-white border border-gold-pale/30 rounded-sm shadow-inner group-hover/qr:border-gold/30 transition-colors cursor-pointer"
          onClick={() => setSelectedQr(account.qr_code_url || "/image/qr_code_placeholder.png")}
        >
          <img
            src={account.qr_code_url || "/image/qr_code_placeholder.png"}
            alt={`QR Code - ${account.bank_name}`}
            className="w-40 h-40 md:w-48 md:h-48 object-contain transition-transform duration-300 group-hover/qr:scale-105"
          />
        </div>
        {/* Decorative brackets */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-gold/40"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-gold/40"></div>
      </div>

      {/* Bank details */}
      <div className="space-y-6 pt-4">
        <div>
          <p className="text-[10px] text-gold-muted tracking-[0.2em] uppercase mb-2 font-bold">
            Chủ tài khoản
          </p>
          <p className="font-serif text-navy text-xl font-medium">
            {account.account_holder}
          </p>
        </div>

        <div>
          <p className="text-[10px] text-gold-muted tracking-[0.2em] uppercase mb-2 font-bold">
            Số tài khoản
          </p>
          <p className="font-serif text-navy text-xl md:text-2xl tracking-[0.08em] md:tracking-[0.1em] font-light">
            {account.account_number}
          </p>
        </div>

        <div className="pb-8">
          <p className="text-[10px] text-gold-muted tracking-[0.2em] uppercase mb-2 font-bold">
            Ngân hàng
          </p>
          <p className="font-serif text-navy text-lg italic">
            {account.bank_name}
          </p>
        </div>
      </div>

      {/* Copy button */}
      <motion.button
        whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleCopy(account)}
        className={`copy-btn w-full flex items-center justify-center gap-3 py-4 rounded-sm transition-all duration-300 border border-transparent shadow-sm ${
          copiedId === account.id 
            ? "bg-[#6e151e] text-white" 
            : "bg-[#8a1827] text-white hover:bg-[#6e151e]"
        }`}
      >
        {copiedId === account.id ? (
          <>
            <CheckIcon />
            <span className="text-[10px] tracking-widest font-bold">ĐÃ SAO CHÉP</span>
          </>
        ) : (
          <>
            <CopyIcon />
            <span className="text-[10px] tracking-widest font-bold uppercase">Sao chép số tài khoản</span>
          </>
        )}
      </motion.button>
    </motion.div>
  );

  return (
    <section
      id="mung-cuoi"
      className="section-padding text-center relative overflow-hidden section-bg-nenphu section-bg-nenmobile"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-4xl mx-auto px-4 relative z-10"
      >
        {/* Heading */}
        <motion.div
           variants={fadeUpVariants(enterDistance)}
           className="mb-10 md:mb-16 flex flex-col items-center"
        >
          <SacredUnityCross size={32} className="text-gold mb-6" />
          <h2 className="font-serif text-navy text-3xl md:text-5xl font-normal tracking-[0.08em] md:tracking-wider mb-3 uppercase">
            Mừng Cưới
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="font-serif text-sm md:text-base italic mt-6 md:mt-8 mb-9 md:mb-12 max-w-lg mx-auto leading-relaxed opacity-80">
            &ldquo;Sự hiện diện của quý khách là niềm vinh hạnh và hạnh phúc lớn lao nhất
            của gia đình chúng tôi.&rdquo;
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="w-8 h-8 border-2 border-gold/20 border-t-gold rounded-full animate-spin"></div>
          </div>
        ) : (
          <motion.div variants={fadeUpVariants(enterDistance)} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {accounts.length > 0
              ? accounts.map((a, i) => renderCard(a, a.role === "bride" ? "CÔ DÂU" : "CHÚ RỂ", i))
              : fallbackAccounts.map((a, i) => renderCard(a, a.role === "bride" ? "CÔ DÂU" : "CHÚ RỂ", i))
            }
          </motion.div>
        )}

        <motion.div 
          variants={fadeUpVariants(enterDistance)}
          className="mt-20 pt-10 border-t border-gold-pale/30"
        >
          <p className="text-navy text-[10px] tracking-[0.2em] uppercase italic">
            Ad Majorem Dei Gloriam
          </p>
        </motion.div>
      </motion.div>

      {/* QR Code Zoom Modal */}
      <AnimatePresence>
        {selectedQr && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedQr(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-navy/80 backdrop-blur-sm p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: prefersReducedMotion ? 1 : 0.9, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: prefersReducedMotion ? 1 : 0.92, y: prefersReducedMotion ? 0 : 20 }}
              transition={{ duration: motionTokens.duration.base, ease: motionTokens.easing.soft }}
              className="bg-white p-8 md:p-12 rounded-sm shadow-2xl relative max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedQr(null)}
                className="absolute top-4 right-4 text-charcoal hover:text-gold transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedQr}
                alt="QR Code Zoom"
                className="w-full h-auto object-contain mt-4"
              />
              <p className="text-center text-gold-muted text-[10px] tracking-widest uppercase mt-8 font-bold">
                Quét mã để chuyển khoản
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

