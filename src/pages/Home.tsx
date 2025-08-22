import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import Avatar from '../components/Avatar';
import Status from '../components/Status';
import '../CSS/Home.css';

const Home: React.FC = () => {
  const dayText = "Friday August 22";
  const yearText = "2025";
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        hours: now.getHours() % 12,
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
      });
    };

    // Update time immediately
    updateTime();

    // Set up interval to update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Calculate rotation angles for hands
  const hourRotation = (time.hours * 30) + (time.minutes * 0.5); // 30 degrees per hour, 0.5 degrees per minute
  const minuteRotation = (time.minutes * 6) + (time.seconds * 0.1); // 6 degrees per minute, 0.1 degrees per second
  const secondRotation = time.seconds * 6; // 6 degrees per second

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Status: Freelancing On Students Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        fullscreen
        style={{
          '--background': '#23112bff',
          '--ion-background-color': '#052c3bff'
        }}
      >
        {/* Elegant Pocket Watch */}
        <div className="pocket-watch">
          {/* Outer ring for date display */}
          <div className="outer-ring">
            {/* Top curved date (month and day) */}
            <div className="date-top">
              {dayText.split("").map((char, i) => (
                <span key={i} style={{ transform: `rotate(${i * 10 - 60}deg)` }}>{char}</span>
              ))}
            </div>
            
            {/* Bottom year text (not curved) */}
            <div className="year-bottom">
              {yearText}
            </div>
          </div>
          
          {/* Inner circle for clock face */}
          <div className="watch-face">
            {/* Clock numbers */}
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`number number${i + 1}`}>{i + 1}</div>
            ))}

            {/* Clock hands with real-time rotation */}
            <div 
              className="hand hour" 
              style={{ transform: `translate(-50%, -100%) rotate(${hourRotation}deg)` }}
            ></div>
            <div 
              className="hand minute" 
              style={{ transform: `translate(-50%, -100%) rotate(${minuteRotation}deg)` }}
            ></div>
            <div 
              className="hand second" 
              style={{ transform: `translate(-50%, -100%) rotate(${secondRotation}deg)` }}
            ></div>
          </div>
        </div>

        {/* Avatar & Status */}
        <div className="avatar-status-container">
          <div className="avatar-wrapper">
            <Avatar />
            <div className="status-card-wrapper">
              <Status />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>© 2023 Arky Roel U. Balaga. All Rights Reserved</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;