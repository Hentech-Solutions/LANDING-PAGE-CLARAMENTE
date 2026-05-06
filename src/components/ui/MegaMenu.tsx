import React from 'react';

interface MegaMenuProps {
  title: string;
  className?: string;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ title, className }) => {
  return (
    <div className={`${className || ''} bg-(--purple) p-4 text-xs md:text-sm text-white w-full text-center`}>
      <h2>{title}</h2>
      {/* Add mega menu content here */}
    </div>
  );
};

export default MegaMenu;
