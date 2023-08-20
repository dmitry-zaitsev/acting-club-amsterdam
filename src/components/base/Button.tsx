import { colors } from '@/src/style/colors';
import { bebas } from '@/src/style/fonts';
import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  container: {
    ...bebas.style,
    fontSize: 20,
    cursor: 'pointer',
  },
  variantRed: {
    color: colors.white,
    background: colors.red,
  },
  variantBlue: {
    color: colors.black,
    background: colors.blue,
  },
};

type Variant = 'red' | 'blue';

type ButtonProps = {
  text: string;
  href?: string;
  className?: string;
  variant?: Variant;
  openInNewTab?: boolean;
};

export const Button = ({
  text,
  href,
  className,
  variant,
  openInNewTab,
}: ButtonProps) => {
  const variantStyle =
    variant === 'blue' ? styles.variantBlue : styles.variantRed;

  return (
    <a
      href={href}
      target={openInNewTab ? '_blank' : '_self'}
      className={`block w-fit pt-0.5 pb-0.5 ps-3 pe-3 ${className}`}
      style={{ ...styles.container, ...variantStyle }}
    >
      {text}
    </a>
  );
};
