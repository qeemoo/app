interface CalenderYearProps {
  viewYear: number;
}

const CalenderYear = ({ viewYear }: CalenderYearProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-2">
      <span className="text-sm font-bold text-gray-400 tracking-tighter">{viewYear}</span>
    </div>
  );
};

export default CalenderYear;
