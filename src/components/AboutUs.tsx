import { CSSProperties } from 'react';
import { tailwindStyles } from '../style/styles';
import { colors } from '../style/colors';
import { actor, bebas } from '../style/fonts';

const styles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: 814,
  },
  title: {
    ...bebas.style,
    fontSize: 48,
    color: colors.red,
  },
  description: {
    ...actor.style,
    fontSize: 17,
  },
};

export const AboutUs = () => {
  return (
    <div
      className={`flex flex-col ${tailwindStyles.pageComponent}`}
      style={styles.container}
    >
      <span style={styles.title}>Who We Are</span>

      <p style={styles.description}>
        We are Acting Club Amsterdam (or ACA for short), a group of actors and
        actresses from over 6 different nationalities united by their love for
        acting and theatre. Despite Amsterdam being such a diverse and
        multicultural city, we noticed that the English theatre was
        underrepresented. We decided to change that by founding our own theatre
        group in 2022, focusing on bringing you more theatre and, hopefully,
        eventually reviving this form of art in the Netherlands.
      </p>

      <img
        src="/groupPhoto.jpeg"
        alt="Acting Club Amsterdam group photo"
        className="w-full h-auto mt-8"
      />

      <div className="h-16" />

      <span style={styles.title}>Follow Us</span>

      <span style={styles.description}>
        <a
          className="link"
          target="_blank"
          href="https://www.instagram.com/actingclubamsterdam/"
        >
          Follow us on Instagram
        </a>{' '}
        to stay up to date with our latest news and productions.
      </span>

      <div className="h-16" />

      <span style={styles.title}>Contact Us</span>

      <p style={styles.description}>
        For any questions or inquiries, please{' '}
        <a className="link" href="mailto:contact@actingclubamsterdam.nl">
          contact us vis Email
        </a>
      </p>
    </div>
  );
};
