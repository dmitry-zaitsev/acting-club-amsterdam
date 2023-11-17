import { CSSProperties } from 'react';
import { tailwindStyles } from '../style/styles';
import { actor, bebas } from '../style/fonts';
import { colors } from '../style/colors';
import { Button } from './base/Button';
import { newsletterUrl, ticketUrls } from '../config/constants';

const styles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: 814,
  },
  pageTitle: {
    ...bebas.style,
    fontSize: 48,
    color: colors.white,
  },
  playTitle: {
    ...bebas.style,
    fontSize: 32,
    color: colors.red,
  },
  playSubtitle: {
    ...bebas.style,
    fontSize: 18,
    color: colors.white,
  },
  description: {
    ...actor.style,
    fontSize: 17,
  },
  content: {
    marginTop: 24,
  },
};

export const TicketsDateSelector = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className={`flex flex-col ${tailwindStyles.pageComponent}`}
        style={styles.container}
      >
        <span style={styles.pageTitle}>Tickets</span>

        <p>
          We do not have any scheduled performances at this moment. Join our
          newsletter to be the first to know when we have something new!
        </p>

        <Button
          text="Subscribe"
          variant="blue"
          className="mt-4"
          href={newsletterUrl}
        />
      </div>

      <div className="w-full mt-6">
        <img
          src="/skinOfOurTeeth/img3.wide.jpg"
          alt="The Skin of Our Teeth photo"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
