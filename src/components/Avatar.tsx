// Avatar.tsx
import React from 'react';
import { IonAvatar } from '@ionic/react';
import Avatarpic from './images/Avatar.jpg';

interface AvatarProps {
  imageUrl?: string;
  altText?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
  imageUrl =  Avatarpic, // Default image
  altText = 'User avatar',
  size = 'medium',
  className = '',
  onClick
}) => {
  // Size classes built into Ionic
  const sizeClass = size === 'small' ? 'ion-avatar-small' : 
                   size === 'large' ? 'ion-avatar-large' : '';

  return (
    <IonAvatar
      className={`${sizeClass} ${className}`}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : {}}
    >
      <img
        src={imageUrl}
        alt={altText}
        onError={(e) => {
          // Fallback to default avatar if image fails to load
          const target = e.target as HTMLImageElement;
          target.src = 'assets/images/Avatar.png';
        }}
      />
    </IonAvatar>
  );
};

export default Avatar;