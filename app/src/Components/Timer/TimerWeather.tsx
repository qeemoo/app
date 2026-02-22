import { useCurrentWeather } from '@/Hooks/Timer/useCurrentWeather';

const TimerWeather = () => {
  const { weather, loading } = useCurrentWeather();
  return (
    <div className="text-xl font-medium text-gray-500">
      {!loading && weather && (
        <div className="flex items-center gap-1  pl-3 ">
          <span className="text-blue-500 font-bold">{weather.temp}°C</span>
          <span className="text-sm text-gray-400">{weather.description}</span>
        </div>
      )}
    </div>
  );
};

export default TimerWeather;
