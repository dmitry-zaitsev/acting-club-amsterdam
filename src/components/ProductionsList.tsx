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
            Absurd Farce in English by Thornton Wilder. The play, features the
            eccentric Antrobus family in an Ice Age , Modernity and World Wars.
            <br />
            <br />
            Performed first in 1942. America was on the verge of War. Thornton
            Wilder created an Absurd and Comic reality on Stage. During The
            First Act , a block of ice is making its way from Canada, marking
            the beginning of an imminent ice age. This sets the stage for stress
            and brings the arrival of refugees needing safety. Wilder introduces
            the audience to George Antrobus and his wife Maggie, their children
            Henry and Gladys, and their attractive maid Lily Sabina Fairweather
            in a middle-class New Jersey town called Excelsior. George is an
            inventor. The characters get lost in their Absurd realities.
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
