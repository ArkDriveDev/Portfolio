// Status.tsx
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/react';
import '../CSS/Status.css';

const Status: React.FC = () => {
  return (
    <IonCard className="status-card">
      <IonCardHeader className="status-header">
        <IonCardTitle className="status-title">Status Open</IonCardTitle>
      </IonCardHeader>
      
      <IonCardContent className="status-content">
        <IonGrid>
          <IonRow>
            {/* Left Side */}
            <IonCol>
              <div className="stat-item">Appearance: <span className="rank">A rank</span></div>
              <div className="stat-item">Stamina: <span className="rank">S rank</span></div>
              <div className="stat-item">Energy Level: <span className="rank">A rank</span></div>
            </IonCol>
            
            {/* Right Side */}
            <IonCol>
              <div className="stat-item">Programming skills: <span className="rank">B rank</span></div>
              <div className="stat-item">Learning Skills: <span className="rank">A rank</span></div>
              <div className="stat-item">Creativity: <span className="rank">B rank</span></div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default Status;