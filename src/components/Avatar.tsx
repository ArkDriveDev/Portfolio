import React, { useState, useEffect } from 'react';
import { IonAvatar } from '@ionic/react';
import '../CSS/Avatar.css';

// Icons
import Avatarpic from './images/Avatar.jpg';
import CodingOutlineIcon from './images/Codingoutline.png';
import IonicIcon from './images/Ionic.png';
import NodeJsIcon from './images/Nodejs.png';
import ReactIcon from './images/React.png';
import SupabaseIcon from './images/Supabase.png';

const petalIcons = [
  { src: CodingOutlineIcon, alt: 'Coding' },
  { src: IonicIcon, alt: 'Ionic' },
  { src: NodeJsIcon, alt: 'Node.js' },
  { src: ReactIcon, alt: 'React' },
  { src: SupabaseIcon, alt: 'Supabase' }
];

const Avatar: React.FC = () => {
  const [petals, setPetals] = useState(petalIcons);

  // Rotate petals clockwise every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setPetals((prev) => {
        const last = prev[prev.length - 1];
        const rest = prev.slice(0, -1);
        return [last, ...rest]; // shift right = clockwise
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="avatar-container">
      <div className="flower-wrapper">
        <div className="elegant-flower">
          {petals.map((icon, i) => (
            <div key={i} className={`petal p${i + 1}`}>
              <img src={icon.src} alt={icon.alt} className="petal-icon" />
            </div>
          ))}
        </div>

        {/* Avatar in center */}
        <IonAvatar className="avatar medium">
          <img src={Avatarpic} alt="User avatar" />
        </IonAvatar>
      </div>
    </div>
  );
};

export default Avatar;