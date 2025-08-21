import React, { useState } from 'react';
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
  showHoverPrompt?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  imageUrl = Avatarpic,
  altText = 'User avatar',
  size = 'medium',
  className = '',
  onClick,
  status,
  pulse = false,
  glowing = false,
  showHoverPrompt = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const sizeClass = `avatar ${size}`;
  const pulseClass = pulse ? 'pulse' : '';
  const glowingClass = glowing ? 'glowing' : '';
  const statusClass = status ? `status-${status}` : '';

  return (
    <div 
      className="avatar-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IonAvatar
        className={`${sizeClass} ${pulseClass} ${glowingClass} ${className}`}
        onClick={onClick}
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
      
      {showHoverPrompt && !isHovered && (
        <div className="hover-popover">
          Hover me
        </div>
      )}
    </div>
  );
};

export default Avatar;