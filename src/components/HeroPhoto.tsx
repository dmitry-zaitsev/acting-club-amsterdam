import Image from 'next/image';
import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  container: {
    height: 350,
  },
  image: {
    objectFit: 'cover',
    alignSelf: 'start',
  },
};

export const HeroPhoto = () => {
  return (
    <div className="w-full flex flex-col relative" style={styles.container}>
      <div className="w-full h-full bg-cover bg-blend-darken bg-gray-300 bg-center bg-[url('/skinOfOurTeeth/mainWide.jpg')]"></div>
    </div>
  );
};
