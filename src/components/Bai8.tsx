import React from 'react'

export default function Bai8() {
    const getCurrentSeason = (): string => {
        const month = new Date().getMonth();
        
        if (month >= 1 && month <= 3) {
          return 'Mùa Xuân';
        } else if (month >= 4 && month <= 6) {
          return 'Mùa Hạ';
        } else if (month >= 7 && month <= 9) {
          return 'Mùa Thu';
        } else {
          return 'Mùa Đông';
        }
    };
    const currentSeason = getCurrentSeason();
  return (
    <div>Bai8
         <h1>Hiện tại là {currentSeason}</h1>
    </div>
  )
}
