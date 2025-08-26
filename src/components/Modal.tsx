import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl'; // Added size prop
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, size = 'md' }) => {
  if (!isOpen) return null;

  // Size classes
  const sizeClasses = {
    sm: 'w-1/4',
    md: 'w-1/2',
    lg: 'w-3/4',
    xl: 'w-5/6'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`bg-[#23112b] rounded-lg p-6 relative ${sizeClasses[size]} max-h-[90vh] overflow-y-auto`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl font-bold z-10"
          aria-label="Close modal"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;