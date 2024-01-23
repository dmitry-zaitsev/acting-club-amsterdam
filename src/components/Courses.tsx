'use client';

import { CSSProperties } from 'react';
import { actor, bebas } from '../style/fonts';
import { tailwindStyles } from '../style/styles';
import { colors } from '../style/colors';
import { Button } from './base/Button';
import ImageGallery from 'react-image-gallery';

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
  red: {
    color: colors.red,
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

        <p>This season we are offering 2 different courses:</p>

        <h2 style={{ ...styles.h2, ...styles.red }}>Beginners Course</h2>

        <p>Throughout the course you will:</p>

        <ul className="list-disc ps-4">
          <li>
            Practice and perform a few small plays in a safe and supportive
            environment.
          </li>
          <li>
            Learn how to “be” a character instead of simply memorising the
            lines.
          </li>
          <li>Develop your voice and build a stage presence.</li>
          <li>
            Do a lot of improv and practice the famous “Yes, and...” rule.
          </li>
          <li>
            Forget about the mundane, have fun and meet a lot of likeminded
            people!
          </li>
        </ul>

        <h2 style={styles.h2}>how does it work</h2>

        <ul className="list-disc ps-4">
          <li>Location: Cliffordstudio, Amsterdam</li>
          <li>8 lessons, one lesson per week</li>
          <li>Groups from 6 to 10 people</li>
          <li>Tuesdays, from March 12th to April 30th</li>
          <li>2 hour classes, from 19:30 until 21:30</li>
        </ul>

        <h2 style={styles.h2}>price</h2>

        <ul className="list-disc ps-4">
          <li>220 Euro for the full course (incl. BTW)</li>
          <li>
            Not sure whether it is for you? Join the first trial lesson for just
            20 Euro.
          </li>
        </ul>

        <h2 style={{ ...styles.h2, ...styles.red }}>Intermediate Course</h2>

        <p>
          Are you ready to polish your acting skills and shine bright on stage?
        </p>
        <p>
          This 8-weeks intermediate course aims to combine multiple acting
          techniques as well as psychological tools to equip you with skills to:
        </p>

        <ul className="list-disc ps-4">
          <li>Analyze scripts & read between the lines,</li>
          <li>Build memorable characters in your authentic way,</li>
          <li>Develop your voice and build a stage presence.</li>
          <li>
            Find out things about yourself through your character’s journey
          </li>
        </ul>

        <h2 style={styles.h2}>how does it work</h2>

        <ul className="list-disc ps-4">
          <li>Location: Cliffordstudio, Amsterdam</li>
          <li>8 lessons, one lesson per week</li>
          <li>Groups from 6 to 10 people</li>
          <li>Mondays, from March 18th to May 6th</li>
          <li>2 hour classes, from 19:00 until 21:00</li>
        </ul>

        <h2 style={styles.h2}>price</h2>

        <ul className="list-disc ps-4">
          <li>220 Euro for the full course (incl. BTW)</li>
          <li>
            Not sure whether it is for you? Join the first trial lesson for just
            20 Euro.
          </li>
        </ul>

        <h2 style={{ ...styles.h2, ...styles.red }}>join now</h2>

        <p>
          Does that all sound interesting? Just fill out the form and we will
          reach back to you in no time!
        </p>

        <Button
          text="Sign me up!"
          openInNewTab={true}
          href={'https://forms.gle/DiHodSst2Mto1JEp9'}
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
