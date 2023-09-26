'use client';

import Image from 'next/image';
import { tailwindStyles } from '../style/styles';
import { CSSProperties } from 'react';
import { actor, bebas } from '../style/fonts';
import { colors } from '../style/colors';
import ImageGallery from 'react-image-gallery';

const styles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: 814,
  },
  title: {
    ...bebas.style,
    fontSize: 20,
    color: colors.red,
  },
  description: {
    ...actor.style,
    fontSize: 17,
  },
  photo: {
    maxWidth: 360,
  },
};

const SkinOfOurTeeth = () => {
  return (
    <div className={'flex flex-col'}>
      <div className={`flex flex-row flex-wrap md:flex-nowrap gap-14`}>
        <Image
          className="h-fit mt-2"
          src="/poster_skin_of_our_teeth.jpg"
          alt="Skin of our teeth"
          width={255}
          height={378}
        />

        <div className="flex flex-col gap-2">
          <span style={styles.title}>The Skin of Our Teeth</span>

          <span style={styles.description}>
            The Ice Age, plagues, wars, earthquakes and dinosaurs - humanity
            will persevere through it all, even if only by the skin of our
            teeth. At least that is what Thornton Wilder, three times winner of
            the Pulitzer Prize, wants you to believe in his absurd comedic work
            “The Skin of Our Teeth”.
            <br />
            <br />
            The theatrical play follows the story of a typical American family,
            the Antrobuses from New Jersey, as they live their daily lives
            through world-shattering cataclysmic events. You know, the usual
            life.
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-8 justify-center">
        <ImageGallery
          items={[
            {
              original: '/skinOfOurTeeth/img2.thumb.jpg',
              thumbnail: '/skinOfOurTeeth/img2.thumb.jpg',
            },
            {
              original: '/skinOfOurTeeth/img3.thumb.jpg',
              thumbnail: '/skinOfOurTeeth/img3.thumb.jpg',
            },
            {
              original: '/skinOfOurTeeth/img4.thumb.jpg',
              thumbnail: '/skinOfOurTeeth/img4.thumb.jpg',
            },
            {
              original: '/skinOfOurTeeth/img5.thumb.jpg',
              thumbnail: '/skinOfOurTeeth/img5.thumb.jpg',
            },
            {
              original: '/skinOfOurTeeth/img7.thumb.jpg',
              thumbnail: '/skinOfOurTeeth/img7.thumb.jpg',
            },
            {
              original: '/skinOfOurTeeth/img8.thumb.jpg',
              thumbnail: '/skinOfOurTeeth/img8.thumb.jpg',
            },
            {
              original: '/skinOfOurTeeth/img9.thumb.jpg',
              thumbnail: '/skinOfOurTeeth/img9.thumb.jpg',
            },
            {
              original: '/skinOfOurTeeth/img6.thumb.jpg',
              thumbnail: '/skinOfOurTeeth/img6.thumb.jpg',
            },
          ]}
        />
      </div>
      <div className="mt-4 mb-12">
        Photos are a courtesy of{' '}
        <a href="https://www.instagram.com/yuphotolife/" target="_blank">
          @yuphotolife
        </a>
      </div>
    </div>
  );
};

export const ProductionsList = () => {
  return (
    <div
      className={`flex flex-col mb-auto ${tailwindStyles.pageComponent}`}
      style={styles.container}
    >
      <SkinOfOurTeeth />
    </div>
  );
};
