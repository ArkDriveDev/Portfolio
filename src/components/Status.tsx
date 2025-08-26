// Status.tsx
import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import '../CSS/Status.css';

const Status: React.FC = () => {
  return (
    <IonCard className="status-card">
      <IonCardHeader className="status-header">
        <IonCardTitle className="status-title">Status Open</IonCardTitle>
      </IonCardHeader>

      <IonCardContent className="status-content">
        <IonGrid>
          <IonRow className="stats-row">
            {/* Left Side */}
            <IonCol className="stats-col left-col">
              <div className="stat-item">
                <span>Appearance:</span>
                <span className="rank">Good</span>
              </div>
              <div className="stat-item">
                <span>Stamina:</span>
                <span className="rank">High</span>
              </div>
              <div className="stat-item">
                <span>Energy Level:</span>
                <span className="rank">High</span>
              </div>
            </IonCol>

            {/* Right Side */}
            <IonCol className="stats-col right-col">
              <div className="stat-item">
                <span>Programming Skills:</span>
                <span className="rank">Average</span>
              </div>
              <div className="stat-item">
                <span>Diligence:</span>
                <span className="rank">Good</span>
              </div>
              <div className="stat-item">
                <span>Creativity:</span>
                <span className="rank">Average</span>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default Status;
