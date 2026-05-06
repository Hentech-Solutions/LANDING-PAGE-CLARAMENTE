'use client';

import { whatsappIcon } from "../FakeSVGIcons";
import { motion } from "framer-motion";

interface WhatsappButtonProps {
  label?: string;
  className?: string;
  phoneNumber: string;
  message?: string;
}

export default function FloaterButton({ 
  label = "Agendar pelo WhatsApp", 
  className,
  phoneNumber,
  message = "Olá! Gostaria de mais informações."
}: WhatsappButtonProps) {
  
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      // Animação de entrada na página
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      // Interatividade
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        group
        fixed
        bottom-6
        right-6
        z-[9999]
        overflow-hidden
        flex
        items-center
        gap-3
        rounded-full
        bg-green-300
        p-4
        text-sm
        font-medium
        text-black
        cursor-pointer
        shadow-xl
        transition-all
        duration-300
        ${className || ''}
      `}
    >
      {/* Background Overlay que "preenche" no hover */}
      <span
        className="
          absolute
          inset-0
          bg-green-400
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Container do Ícone */}
      <div
        className="
          relative
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:text-white
        "
      >
        <svg
          className="w-[18px] h-[18px]"
          viewBox={whatsappIcon.viewBox}
          fill="currentColor" // Usei currentColor para respeitar o group-hover:text-white
        >
          <path d={whatsappIcon.d} />
        </svg>
      </div>

      {/* Texto/Label */}
      <span
        className="
          relative
          transition-all
          duration-500
          group-hover:tracking-wider
          group-hover:text-white
        "
      >
        {label}
      </span>
    </motion.a>
  );
}