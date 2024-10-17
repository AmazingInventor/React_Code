import React, { useState, useEffect } from 'react';
import MyImage from '../assets/skyport.png';



const weatherConfigs = {
    sunny: { 
        background: MyImage, // url() 제거
        textColor: '#ffffff'
      },
      rainy: { 
        background: MyImage, 
        textColor: '#ffffff'
      },
      cloudy: { 
        background: MyImage, 
        textColor: '#ffffff'
      },
      snowy: { 
        background: MyImage, 
        textColor: '#ffffff'
      },
};

export default function Component() {
  const [weather, setWeather] = useState('sunny');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [temperature, setTemperature] = useState(20);

  useEffect(() => {
    const weathers = ['sunny', 'rainy', 'cloudy', 'snowy'];
    const randomWeather = weathers[Math.floor(Math.random() * weathers.length)];
    setWeather(randomWeather);

    const now = new Date();
    setDate(now.toLocaleDateString('ko-KR', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }));
    // setTime(now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

    setTemperature(Math.floor(Math.random() * 30) - 5);
  }, []);

  useEffect(() => {
    // 1초마다 시간 업데이트
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000); // 1초마다 업데이트
        // 컴포넌트 언마운트 시 interval 정리
        return () => clearInterval(interval);
    }, []);

  const config = weatherConfigs[weather];


  return (
    <div style={styles.container}>
      <div style={styles.frame}>
        <img src={config.background} alt="Weather background" style={styles.image} />
        <div style={styles.overlay}>
          {/* 아이콘 삭제하고 텍스트만 표시 */}
          <p style={{ ...styles.additionalText, color: config.textColor }}>서울시 | 동작구 | 숭실대입구</p>
          <p style={{ ...styles.dateTime, color: config.textColor }}>{date}</p>
          <p style={{ ...styles.time, color: config.textColor }}>{time}</p>
          <p style={{ ...styles.temperature, color: config.textColor }}>{temperature}°C</p>
        </div>
      </div>
      <div style={styles.dock} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ffffff',
  },
  frame: {
    width: '80vw',
    maxWidth: '400px',
    height: '120vw',
    maxHeight: '600px',
    borderRadius: '30px',
    borderTopLeftRadius: '40vw',
    borderTopRightRadius: '40vw',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative' as const,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },
  overlay: {
    position: 'absolute' as const,
    bottom: '20px',
    left: '20px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
  },
  additionalText: {
    fontSize: '15px',
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#FFFFFF',
    WebkitTextStroke: '0.3px black',
  },
  dateTime: {
    fontSize: '25px',
    fontWeight: 'bold',
    margin: '0px',
    color: '#ffffff',
    WebkitTextStroke: '0.3px black',
  },
  time: {
    fontSize: '15px',
    fontWeight: 'bold',
    margin: '2px',
    color: '#ffffff',
    WebkitTextStroke: '0.3px black',
  },
  temperature: {
    fontSize: '30px',
    fontWeight: 'bold',
    margin: '5px',
    color: '#ffffff',
    WebkitTextStroke: '0.3px black',
  },
  dock: {
    width: '20px',
    height: '5px',
    backgroundColor: '#333',
    marginTop: '10px',
    borderRadius: '2.5px',
  },
};
