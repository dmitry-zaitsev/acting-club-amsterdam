import { CSSProperties } from 'react';
import { actor, bebas } from '../style/fonts';
import { tailwindStyles } from '../style/styles';
import { colors } from '../style/colors';
import { Button } from './base/Button';

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

        <h2 style={styles.h2}>WHAT IS IT ALL ABOUT</h2>

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
          <li>
            After completing the course you can decide whether to take more
            classes or, if you are ready, join one of the Acting Club Amsterdam
            productions as an actor!
          </li>
        </ul>

        <h2 style={styles.h2}>when</h2>

        <p>Several starting dates are available:</p>

        <ul className="list-disc ps-4">
          <li>October 23rd (Monday), from 19:30 to 21:30</li>
          <li>October 24rd (Tuesday), from 19:00 to 21:00</li>
        </ul>

        <h2 style={styles.h2}>price</h2>

        <ul className="list-disc ps-4">
          <li>180 Euro for the full course</li>
          <li>
            Not sure whether it is for you? Join the first trial lesson for just
            20 Euro.
          </li>
        </ul>

        <h2 style={styles.h2}>join now</h2>

        <p>
          Does that all sound interesting? Just fill out the form and we will
          reach back to you in no time!
        </p>

        <Button
          text="Sign me up!"
          openInNewTab={true}
          href={'https://forms.gle/yKEzusjHEsLfui1r5'}
        />
      </div>
    </div>
  );
};
