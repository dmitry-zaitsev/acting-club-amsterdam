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
    color: colors.red,
    lineHeight: 1.1,
  },
  description: {
    ...actor.style,
    fontSize: 17,
  },
};

export const UpcomingProductions = () => {
  return (
    <div
      className={`flex flex-col mt-12 ${tailwindStyles.pageComponent}`}
      style={styles.container}
    >
      <span style={styles.title}>Upcoming Productions</span>

      <p style={styles.description}>
        New productions are coming soon!{' '}
        <a href={newsletterUrl}>Sign up to our newsletter</a> to be the first to
        know when we announce them.
      </p>

      <Button
        text="Subscribe"
        href={newsletterUrl}
        variant="red"
        className="mt-4"
      />
    </div>
  );
};
