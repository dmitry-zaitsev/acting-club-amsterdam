import { CSSProperties } from "react"
import { tailwindStyles } from "../style/styles"
import { actor, bebas } from "../style/fonts"
import { colors } from "../style/colors"
import { Button } from "./base/Button"
import { ticketUrls } from "../config/constants"

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
    }
}

export const TicketsDateSelector = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className={`flex flex-col ${tailwindStyles.pageComponent}`} style={styles.container}>
                <span style={styles.pageTitle}>
                    Tickets
                </span>

                <div className="flex flex-col mt-6 gap-3">
                    <span style={styles.playTitle}>
                        The Skin of Our Teeth
                    </span>

                    <span style={styles.playSubtitle}>
                        badhuistheater, AMSTERDAM
                    </span>

                    <Button 
                        text="November 4th, 19:30" 
                        openInNewTab={true}
                        href={ticketUrls.skinOfOurTeeth.november.fourth}
                    />

                    <Button 
                        text="November 5th, 19:30" 
                        openInNewTab={true}
                        href={ticketUrls.skinOfOurTeeth.november.fifth}
                    />
                </div>
            </div>

            <div className="w-full mt-6">
                <img 
                    src="/skinOfOurTeeth/img3.wide.jpg" 
                    alt="The Skin of Our Teeth photo" 
                    className="w-full h-auto" />
            </div>
        </div>
    )
}