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

const petalIcons = [
  {
    src: CodingOutlineIcon,
    alt: 'Coding',
    label: 'Coding is life',
    color: '#FFA500' // Orange
  },
  {
    src: NodeJsIcon,
    alt: 'Node.js',
    label: 'Npm install',
    color: '#40E0D0' // Turquoise
  },
  {
    src: IonicIcon,
    alt: 'Ionic',
    label: 'Ionic start',
    color: '#075ef5ff' // Ionic Blue
  },
  {
    src: ReactIcon,
    alt: 'React',
    label: 'Dynamic Rendering',
    color: '#87CEEB' // Skyblue
  },
  {
    src: SupabaseIcon,
    alt: 'Supabase',
    label: 'Activate RLS',
    color: '#3ECF8E' // Supabase Light Green
  }
];

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
  const [rotationProgress, setRotationProgress] = useState(0);
  const sizeClass = `avatar ${size}`;
  const pulseClass = pulse ? 'pulse' : '';
  const glowingClass = glowing ? 'glowing' : '';
  const statusClass = status ? `status-${status}` : '';

  // Calculate which petal is at the top based on rotation progress
  useEffect(() => {
    const interval = setInterval(() => {
      // Update rotation progress counter-clockwise (0 to 1)
      setRotationProgress(prev => (prev - 0.001 + 1) % 1);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // Calculate active index based on rotation (each petal gets 72 degrees = 0.2 of rotation)
  const activeIndex = Math.floor(rotationProgress * 5) % 5;

  return (
    <div
      className="avatar-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flower-wrapper">
        <div className="elegant-flower">
         // Inside your return statement
          {petalIcons.map((icon, i) => (
            <div key={i} className={`petal p${i + 1}`}>
              <div className="petal-content">
                <img src={icon.src} alt={icon.alt} className="petal-icon" />
                <div
                  className={`petal-label ${i === activeIndex ? 'visible' : ''}`}
                  style={{ color: icon.color }} // Apply color to text instead of background
                >
                  {icon.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Avatar in center */}
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