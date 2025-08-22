import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Avatar from '../components/Avatar';
import Status from '../components/Status';
import '../CSS/Home.css';

const Home: React.FC = () => {
  const dayText = "Friday August 22";
  const yearText = "2025";

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

            {/* Clock hands */}
            <div className="hand hour"></div>
            <div className="hand minute"></div>
            <div className="hand second"></div>
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