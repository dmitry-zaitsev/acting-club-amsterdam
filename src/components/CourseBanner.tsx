import { CSSProperties } from 'react';
import { tailwindStyles } from '../style/styles';
import { colors } from '../style/colors';
import { actor, bebas } from '../style/fonts';
import { Button } from './base/Button';
import { newsletterUrl } from '../config/constants';

const styles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: 814,
  },
  title: {
    ...bebas.style,
    fontSize: 71,
    color: colors.blue,
    lineHeight: 1.1,
  },
  description: {
    ...actor.style,
    fontSize: 17,
  },
};

export const CourseBanner = () => {
  return (
    <div
      className={`flex flex-col mt-12 ${tailwindStyles.pageComponent}`}
      style={styles.container}
    >
      <span style={styles.title}>Acting Courses</span>

      <p style={styles.description}>
        Always dreamed about being on stage but didn't know where to start?
        Acting Club Amsterdam offers acting and improv courses for various
        levels: from complete beginners to more experienced actors who want to
        shake off the rust.
      </p>

      <Button
        text="More info"
        href="/courses"
        variant="blue"
        className="mt-4"
      />
    </div>
  );
};
