interface Props {
  setDisplayMode: (mode: 'kr' | 'en' | 'cn' | 'enFull') => void;
}

const CalenderFormat = ({ setDisplayMode }: Props) => {
  return (
    <div className="group relative">
      <button className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">언어설정</button>
      <div className="hidden group-hover:flex flex-col absolute top-full right-0 bg-white shadow-lg border rounded z-10 w-20">
        <button onClick={() => setDisplayMode('kr')} className="p-1 hover:bg-gray-50 border-b">
          한글
        </button>
        <button onClick={() => setDisplayMode('en')} className="p-1 hover:bg-gray-50 border-b">
          English
        </button>
        <button onClick={() => setDisplayMode('enFull')} className="p-1 hover:bg-gray-50 border-b">
          English Full
        </button>
        <button onClick={() => setDisplayMode('cn')} className="p-1 hover:bg-gray-50">
          漢字
        </button>
      </div>
    </div>
  );
};

export default CalenderFormat;
