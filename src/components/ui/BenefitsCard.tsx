import type { JSX } from "react";
import "./../styles/BenefitsCard.css";

interface Benefit {
  icon?: JSX.Element;
  emoji?: string;
  title: string;
  description: string;
  badges?: string[];
  theme?: 'cream' | 'default' | undefined;
  watermark ?: string; // color for the watermark.
}

export default function BenefitsCard ( { icon, title, description, badges, theme, emoji, watermark }: Benefit) {


  return (
    <div  className={`relative overflow-hidden shadow-md w-full lg:max-w-[350px] flex flex-col items-start py-[36px] px-[28px] shadow-xl rounded-3xl gap-6 benefit-card ${theme === 'cream' ? 'bg-(--cream2)' : 'bg-[#ffffff08]'}`}>

      {watermark && (
        <div className={`absolute -top-15 -right-15 w-40 h-40 ${watermark} opacity-30 rounded-full`}></div>
      )}

      {icon && (
        <div className={`icon-bg-emerald max-w-[52px] h-[52px] w-full rounded-2xl flex items-center justify-center p-[12px]`}>
          {icon}
        </div>
      )}

      {emoji && (
        <div>
          <span className="text-5xl">{emoji}</span>
        </div>
      )}

      <h2 className={`font-[Playfair_Display] text-xl font-semibold ${theme === 'cream' ? 'text-black' : 'text-white'}`}>{title}</h2>
    
      <p className={`benefit-desc text-start text-sm ${theme === 'cream' ? 'text-(--muted)' : 'text-gray-400'}`}>{description}</p>

      {badges && (
        <div className="flex gap-2 items-center flex-wrap justify-start">
          {badges.map((badge, index) => (
            <span key={index} className="bg-(--lavender)/20 text-(--purple) text-xs px-3 py-1.5 rounded-full border border-(--lavender)/20 flex">
              {badge}
            </span>
          ))}
        </div>
      ) }
    </div>
  )
}