'use client';

import { useState, useEffect } from 'react';

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
}

export const useCurrentWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = '9df98ed4dc635d08af9f709291a75a30';
  const CITY = 'Seoul';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=kr`,
        );
        const data = await response.json();

        if (data.cod === 200) {
          setWeather({
            temp: Math.round(data.main.temp), // 소수점 반올림
            description: data.weather[0].description, // "맑음", "흐림" 등
            icon: data.weather[0].icon, // 아이콘 코드
          });
        }
      } catch (error) {
        console.error('날씨 데이터 호출 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { weather, loading };
};
