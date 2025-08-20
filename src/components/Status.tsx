// Status.tsx
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/react';

const Status: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle style={{ textAlign: 'center' }}>Status Open</IonCardTitle>
      </IonCardHeader>
      
      <IonCardContent>
        <IonGrid>
          <IonRow>
            {/* Left Side */}
            <IonCol>
              <div>Appearance: A rank</div>
              <div>Stamina: S rank</div>
              <div>Energy: A rank</div>
            </IonCol>
            
            {/* Right Side */}
            <IonCol>
              <div>Coding: B rank</div>
              <div>Diligence: A rank</div>
              <div>Creativity: B rank</div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default Status;