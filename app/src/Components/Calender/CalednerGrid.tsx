interface Props {
  children: React.ReactNode;
}

const CalenderGrid = ({ children }: Props) => {
  return <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg">{children}</div>;
};

export default CalenderGrid;
