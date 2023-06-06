import { colors } from "@/src/style/colors";
import { bebas } from "@/src/style/fonts";
import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
    container: {
        ...bebas.style,
        fontSize: 20,
        color: colors.white,
        background: colors.red,
        cursor: 'pointer',
    }
}

type ButtonProps = {
    text: string;
    href?: string;
}

export const Button = ({text, href} : ButtonProps) => {
    return (
        <a href={href} className="block w-fit pt-0.5 pb-0.5 ps-3 pe-3" style={styles.container}>
            {text}
        </a>
    )
}