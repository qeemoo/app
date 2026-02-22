'use client';

interface TimerOptionProps {
  is24Hour: boolean;
  setIs24Hour: (v: boolean) => void;
  isEnglish: boolean;
  setIsEnglish: (v: boolean) => void;
  showSeconds: boolean;
  setShowSeconds: (v: boolean) => void;
}

const TimerOption = ({
  is24Hour,
  setIs24Hour,
  isEnglish,
  setIsEnglish,
  showSeconds,
  setShowSeconds,
}: TimerOptionProps) => {
  return (
    <div className="flex gap-2 text-[10px] mb-4">
      {/* 1. 언어 설정 */}
      <button
        onClick={() => setIsEnglish(!isEnglish)}
        className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
      >
        {isEnglish ? 'English' : '한글'}
      </button>

      {/* 2. 시간 체계 */}
      <button
        onClick={() => setIs24Hour(!is24Hour)}
        className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
      >
        {is24Hour ? '24H' : '12H'}
      </button>

      {/* 3. 초 표시 여부 */}
      <button
        onClick={() => setShowSeconds(!showSeconds)}
        className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
      >
        {showSeconds ? '초 켜짐' : '초 꺼짐'}
      </button>
    </div>
  );
};

export default TimerOption;
