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

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hourRotation = (time.hours * 30) + (time.minutes * 0.5);
  const minuteRotation = (time.minutes * 6) + (time.seconds * 0.1);
  const secondRotation = time.seconds * 6;

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
          '--background': '#23112b',
          '--ion-background-color': '#052c3b'
        }}
      >
        <div className="home-content-wrapper">
          {/* Left Sidebar / Label */}
          <div className="left-label">
            <h2>Greetings, I'm Arky Roel U. Balaga</h2>
            <p>Exploring web technologies is my addiction</p>
            <p>IT Student & Web Enthusiast</p>
            <p>Student at Northern Bukidnon State College with a passion for web technologies. Enjoys creating projects and occasional freelance work.</p>
          </div>

          {/* Main content */}
          <div className="main-content">
            {/* Elegant Pocket Watch */}
            <div className="pocket-watch">
              <div className="outer-ring">
                <div className="date-top">
                  {dayText.split("").map((char, i) => (
                    <span key={i} style={{ transform: `rotate(${i * 10 - 60}deg)` }}>{char}</span>
                  ))}
                </div>
                <div className="year-bottom">{yearText}</div>
              </div>

              <div className="watch-face">
                {/* Numbers 1–12 */}
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`number number${i + 1}`}>{i + 1}</div>
                ))}

                {/* Minute/second ticks */}
                {[...Array(60)].map((_, i) => (
                  <div
                    key={`tick-${i}`}
                    className="tick"
                    style={{ transform: `rotate(${i * 6}deg)` }}
                  />
                ))}

                {/* Clock hands */}
                <div className="hand hour" style={{ transform: `translate(-50%, -100%) rotate(${hourRotation}deg)` }}></div>
                <div className="hand minute" style={{ transform: `translate(-50%, -100%) rotate(${minuteRotation}deg)` }}></div>
                <div className="hand second" style={{ transform: `translate(-50%, -100%) rotate(${secondRotation}deg)` }}></div>
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
