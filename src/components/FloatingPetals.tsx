"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// Định nghĩa cánh hoa dạng hình lá hoặc đốm sáng
const PETAL_COLORS = ["#6e151e", "#a32836", "#dfb12c", "#c4961b", "#ffffff"]; // Navy (Burgundy), Gold, and White

interface Petal {
  id: number;
  x: number;
  radius: number;
  delay: number;
  duration: number;
  color: string;
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Chỉ render trên client để tránh lỗi hydration
    const generatePetals = () => {
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 12 : 25; // Ít cánh hoa hơn trên mobile để đỡ rối mắt
      
      const newPetals = Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // Phần trăm vị trí X
        radius: Math.random() * 6 + 3, // Kích thước từ 3px đến 9px
        delay: Math.random() * 5, // Độ trễ rơi
        duration: Math.random() * 8 + 10, // Rơi từ 10s đến 18s
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)]
      }));
      setPetals(newPetals);
    };

    generatePetals();
    window.addEventListener("resize", generatePetals);
    return () => window.removeEventListener("resize", generatePetals);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-[-20px] rounded-[50%_0_50%_50%] opacity-40 blur-[1px]"
          style={{
            left: `${petal.x}%`,
            width: petal.radius,
            height: petal.radius * 1.5,
            backgroundColor: petal.color,
            boxShadow: `0 0 ${petal.radius}px ${petal.color}`,
          }}
          initial={{ y: -50, rotate: 0, opacity: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [0, 180, 360],
            x: [0, petal.radius * 3, -petal.radius * 2, petal.radius * 4, 0], // Lắc lư theo gió dích dắc
            opacity: [0, 0.4, 0.6, 0.2, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
