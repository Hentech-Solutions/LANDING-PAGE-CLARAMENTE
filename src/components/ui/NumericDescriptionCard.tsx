interface NumericDescriptionCardProps {
  icon?: React.ReactNode;
  number?: string;
  title: string;
  description: string;
  containerClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  numberBoxClass?: string;
  numberClass?: string;
  hoverClass?: string;
}

export default function NumericDescriptionCard({
  number,
  title,
  description,
  icon,
  containerClass = "border-gray-800 bg-white/5",
  titleClass = "text-white",
  descriptionClass = "text-gray-400",
  numberClass = "text-(--lavender) font-[Cormorant_Garamond]",
  hoverClass = "hover:border-(--lavender) hover:bg-white/10"
}: NumericDescriptionCardProps) {
  return (
    <div className={`
      group
      flex items-start gap-6 py-7 px-6 rounded-2xl border transition-all duration-400 ease-in-out
      ${containerClass} ${hoverClass} max-w-[560px]
    `}>
      
      <div className={`rounded-xl p-2 flex items-center justify-center ${numberClass}`}>
        <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 text-[2rem] leading-none ${numberClass}`}>
          {number || icon}
        </div>
      </div>
      

      <div className="flex flex-col gap-2 items-start text-start">
        <h2 className={`text-[0.9rem] font-bold ${titleClass}`}>
          {title}
        </h2>
        <p className={`text-[0.8rem] leading-relaxed ${descriptionClass}`}>
          {description}
        </p>
      </div>
    </div>
  );
}