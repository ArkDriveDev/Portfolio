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
          '--background': '#111522ff',
          '--ion-background-color': '#052c3bff' 
        }}
      >
        <div className="avatar-status-container">
          <div className="avatar-wrapper">
            <Avatar />
            <div className="status-card-wrapper">
              <Status />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;