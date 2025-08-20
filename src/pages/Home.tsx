import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Avatar from '../components/Avatar';
import Status from '../components/Status';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Status: Freelancing On Students Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          paddingTop: '20px' 
        }}>
         <Avatar/>
         <Status/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;