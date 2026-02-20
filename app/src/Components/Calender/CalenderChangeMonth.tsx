interface Props {
  children: React.ReactNode;
  viewYear: number;
  viewMonth: number;
  setViewYear: (y: number) => void;
  setViewMonth: (m: number) => void;
}

const CalenderChangeMonth = ({
  children,
  viewYear,
  viewMonth,
  setViewYear,
  setViewMonth,
}: Props) => {
  const handlePrev = () => {
    if (viewMonth === 0) {
      setViewYear(viewYear - 1);
      setViewMonth(11);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const handleNext = () => {
    if (viewMonth === 11) {
      setViewYear(viewYear + 1);
      setViewMonth(0);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-gray-50 rounded-xl">
      <button
        onClick={handlePrev}
        className="p-2 hover:bg-white hover:shadow-sm rounded-full transition-all text-gray-600"
      >
        이전
      </button>

      {children}

      <button
        onClick={handleNext}
        className="p-2 hover:bg-white hover:shadow-sm rounded-full transition-all text-gray-600"
      >
        이후
      </button>
    </div>
  );
};

export default CalenderChangeMonth;
