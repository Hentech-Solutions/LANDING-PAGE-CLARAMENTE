import './../styles/SpecCard.css';

interface SpecCardProps {
  icon ?: React.ReactNode;
  title ?: string;
  description ?: string;
  theme ?: 'purple' | 'sage';
}

export default function SpecCard({ icon, title, description, theme }: SpecCardProps) {

  const bg = theme || 'purple';



  return (
    <div className={`flex gap-4 py-6 px-8 rounded-3xl bg-${bg} items-start`}>
      {icon && (
        <span className={`bg-(--${bg}) text-white p-2.5 rounded-xl max-w-max max-h-max`}>
          {icon}
        </span>
      )}

      <div className="flex flex-col items-start gap-2">
        {title && <h2 className="text-md font-semibold">{title}</h2>}

        {description && <p className="text-xs text-gray-500 text-start">{description}</p>}
      </div>
    </div>
  )
}