import React, { useState } from 'react';
import { IonAvatar } from '@ionic/react';
import '../CSS/Avatar.css';
import Avatarpic from './images/Avatar.jpg';
import CodingOutlineIcon from './images/Codingoutline.png';
import IonicIcon from './images/Ionic.png';
import NodeJsIcon from './images/Nodejs.png';
import ReactIcon from './images/React.png';
import SupabaseIcon from './images/Supabase.png';

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
      <div className="flower-wrapper">
        {/* Elegant flower pattern with icons */}
        <div className="elegant-flower">
          <div className="petal p1">
            <img src={CodingOutlineIcon} alt="Coding" className="petal-icon" />
          </div>
          <div className="petal p2">
            <img src={IonicIcon} alt="Ionic" className="petal-icon" />
          </div>
          <div className="petal p3">
            <img src={NodeJsIcon} alt="Node.js" className="petal-icon" />
          </div>
          <div className="petal p4">
            <img src={ReactIcon} alt="React" className="petal-icon" />
          </div>
          <div className="petal p5">
            <img src={SupabaseIcon} alt="Supabase" className="petal-icon" />
          </div>
          <div className="flower-center-ring"></div>
        </div>

        {/* Avatar centered inside flower */}
        <IonAvatar
          className={`${sizeClass} ${pulseClass} ${glowingClass} ${className}`}
          onClick={onClick}
        >
          <img
            src={imageUrl}
            alt={altText}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = Avatarpic;
            }}
          />
        </IonAvatar>
      </div>

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