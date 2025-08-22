import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Avatar from '../components/Avatar';
import Status from '../components/Status';
import '../CSS/Home.css';

const Home: React.FC = () => {
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
          <div className="watch-face">
            <div className="hand hour"></div>
            <div className="hand minute"></div>
            <div className="hand second"></div>
          </div>
        </div>

        <div className="avatar-status-container">
          <div className="avatar-wrapper">
            <Avatar />
            <div className="status-card-wrapper">
              <Status />
            </div>
          </div>
        </div>

        <div className="footer">
          <p>© 2023 Arky Roel U. Balaga. All Rights Reserved</p>
        </div>
      </IonContent>


    </IonPage>
  );
};

export default Home;