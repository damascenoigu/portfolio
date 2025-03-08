import React from 'react';

interface TimelineItemProps {
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description }) => {
  return (
    <div className="relative pl-8 border-l-2 border-[#9380DB]/30 hover:border-[#9380DB] transition-colors">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#9380DB]">
        <div className="absolute inset-0 rounded-full bg-[#9380DB] animate-ping"></div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#9380DB]">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default TimelineItem;