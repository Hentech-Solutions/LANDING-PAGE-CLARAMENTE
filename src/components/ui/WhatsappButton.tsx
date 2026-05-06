import { whatsappIcon } from "../FakeSVGIcons";

interface WhatsappButtonProps {
  label ?: string;  
  className ?: string;
}

export default function WhatsappButton({ label = "Falar pelo WhatsApp", className}: WhatsappButtonProps ) {
  return (
    <button
      className={`
        group
        relative
        overflow-hidden
        flex
        items-center
        gap-3
        rounded-full
        bg-green-300
        px-[32px]
        py-[16px]
        text-sm
        text-black
        cursor-pointer
        ${className || ''}
      `}
    >
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
          style={{ width: "18px", height: "18px" }}
          viewBox={whatsappIcon.viewBox}
          fill={whatsappIcon.fill}
        >
          <path d={whatsappIcon.d} />
        </svg>
      </div>

      <span
        className="
          relative
          transition-all
          duration-500
          group-hover:tracking-wide
          group-hover:text-white
        "
      >
        {label}
      </span>
    </button>
  );
}