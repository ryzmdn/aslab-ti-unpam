'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ThumbnailProps {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Thumbnail({
  src,
  alt,
  width = 200,
  height = 150,
  className = '',
}: ThumbnailProps) {
  const [imgSrc, setImgSrc] = useState(src || '/images/placeholder.jpg');
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc('/images/placeholder.jpg');
    }
  };

  // Generate placeholder jika tidak ada gambar
  if (!src) {
    return (
      <div className={`relative bg-gradient-to-br from-gray-200 to-gray-300 ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        onError={handleError}
        unoptimized={true} // Nonaktifkan optimization untuk sementara
      />
    </div>
  );
}