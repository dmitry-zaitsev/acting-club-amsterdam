'use client';

import { CSSProperties } from 'react';
import { actor, bebas } from '../style/fonts';
import { tailwindStyles } from '../style/styles';
import { colors } from '../style/colors';
import { Button } from './base/Button';
import ImageGallery from 'react-image-gallery';
import { coursesWaitlist } from '../config/constants';

const styles: { [key: string]: CSSProperties } = {
  h1: {
    ...bebas.style,
    fontSize: 48,
    color: colors.red,
  },
  h2: {
    ...bebas.style,
    fontSize: 32,
    color: colors.white,
    marginBottom: -16,
  },
  container: {
    ...actor.style,
    maxWidth: 814,
  },
};

export const Courses = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`flex flex-col gap-6 ${tailwindStyles.pageComponent}`}
        style={styles.container}
      >
        <h1 style={styles.h1}>Acting Courses</h1>

        <p>
          Acting Club Amsterdam organises acting and improv classes for complete
          beginners and intermediate levels. All lessons are led by actors who
          actually perform on stage (if you follow our productions, you might
          have seen them play!).
        </p>

        <h2 style={styles.h2}>Next course</h2>

        <p>
          Our October course is already full, but we are planning to start a new
          one in 2024! Sign up to our waitlist to be the first to know when we
          open the registrations.
        </p>

        <Button
          text="Join the waitlist"
          openInNewTab={true}
          variant="blue"
          href={coursesWaitlist}
        />
      </div>

      <div className="flex flex-col mt-12 justify-center">
        <ImageGallery
          items={[
            {
              original: '/course/course1.jpg',
              thumbnail: '/course/course1.jpg',
            },
            {
              original: '/course/course2.jpg',
              thumbnail: '/course/course2.jpg',
            },
            {
              original: '/course/course3.jpg',
              thumbnail: '/course/course3.jpg',
            },
            {
              original: '/course/course4.jpg',
              thumbnail: '/course/course4.jpg',
            },
            {
              original: '/course/course5.jpg',
              thumbnail: '/course/course5.jpg',
            },
          ]}
        />
      </div>
    </div>
  );
};
