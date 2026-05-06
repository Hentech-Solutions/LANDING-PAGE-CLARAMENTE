interface BadgeProps {
  label: string;
  icon?: React.ReactNode;
}

export default function Badge({ label, icon }: BadgeProps) {
  return (
    <div className="bg-(--white) border-gray-400 text-gray-500 text-sm px-4 py-1 rounded-full w-max flex items-center gap-2 border border-gray-400/30">
      {icon}
      <p>{label}</p>
    </div>
  );
}