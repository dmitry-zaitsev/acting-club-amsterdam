import { CSSProperties } from "react"
import { tailwindStyles } from "../style/styles"
import { actor, bebas } from "../style/fonts"
import { colors } from "../style/colors"
import { Button } from "./base/Button"

const styles: { [key: string]: CSSProperties } = {
    container: {
        maxWidth: 814,
        minHeight: 250,
    },
    title: {
        ...bebas.style,
        color: colors.blue,
        fontSize: 71,
        lineHeight: 1.1,
    },
    subtitle: {
        ...bebas.style,
        color: colors.white,
        fontSize: 20,
        lineHeight: 1.1,
    }
}

export const JoinNewsletter = () => {
    return (
        <div className={`flex flex-col gap-2 mt-20 ${tailwindStyles.pageComponent}`} style={styles.container}>

            <span style={styles.title}>Join our newsletter</span>

            <span style={styles.subtitle}>We won't spam you, pinky swear.</span>

            <Button text="Subscribe" variant="blue" className="mt-12" href="http://eepurl.com/itaOA2" />
        </div>
    )
}
