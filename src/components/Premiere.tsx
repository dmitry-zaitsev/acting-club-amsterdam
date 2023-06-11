import { CSSProperties } from "react"
import { bebas } from "../style/fonts"
import { colors } from "../style/colors"
import { Button } from "./base/Button"
import { tailwindStyles } from "../style/styles"

const styles: { [key: string]: CSSProperties } = {
    container: {
        ...bebas.style,
        minHeight: 450,
    },
    subtitle: {
        fontSize: 20,
    },
    title: {
        fontSize: 109,
        lineHeight: 1,
        paddingTop: 4,
        color: colors.red,
    }
}

export const Premiere = () => {
    return (
        <div className={`flex justify-center items-center ${tailwindStyles.pageComponent}`} style={styles.container}>
            <div className="w-fit h-fit flex flex-col">
                <div style={styles.subtitle}>
                    July 16th. badhuistheater, AMSTERDAM
                </div>

                <div style={styles.title}>
                    The Skin of Our Teeth
                </div>

                <Button 
                    text="Get Tickets" 
                    openInNewTab={true}
                    href="https://www.eventbrite.nl/e/tickets-the-skin-of-our-teeth-by-aca-645011716407" 
                />
            </div>
        </div>
    )
}
