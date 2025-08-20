// Avatar.tsx
import React from 'react';
import { IonAvatar } from '@ionic/react';
import '../CSS/Avatar.css';
import Avatarpic from './images/Avatar.jpg';

interface AvatarProps {
  imageUrl?: string;
  altText?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
  status?: 'online' | 'offline' | 'busy' | 'away';
  pulse?: boolean;
  glowing?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  imageUrl = Avatarpic,
  altText = 'User avatar',
  size = 'medium',
  className = '',
  onClick,
  status,
  pulse = false,
  glowing = false
}) => {
  const sizeClass = `avatar ${size}`;
  const pulseClass = pulse ? 'pulse' : '';
  const glowingClass = glowing ? 'glowing' : '';
  const statusClass = status ? `status-${status}` : '';

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <IonAvatar
        className={`${sizeClass} ${pulseClass} ${glowingClass} ${className}`}
        onClick={onClick}
        style={onClick ? { cursor: 'pointer' } : {}}
      >
        <img
          src={imageUrl}
          alt={altText}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'assets/images/Avatar.png';
          }}
        />
      </IonAvatar>
      
      {status && (
        <div className={`status-indicator ${statusClass}`} />
      )}
    </div>
  );
};

export default Avatar;