import { CSSProperties } from "react"
import { bebas } from "../style/fonts"
import { tailwindStyles } from "../style/styles"
import { colors } from "../style/colors"
import { Button } from "./base/Button"

const styles: { [key: string]: CSSProperties } = {
    container: {
        maxWidth: 814,
    },
    title: {
        ...bebas.style,
        color: colors.red,
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

const Item = ({title, subtitle} : {title: string, subtitle: string}) => {
    return (
        <div className="flex flex-col gap-2">
            <span style={styles.title}>{title}</span>

            <span style={styles.subtitle}>{subtitle}</span>
        </div>
    )
}

export const WhereWhen = () => {
    return (
        <div className={`flex flex-col gap-12 pt-14 pb-14 ${tailwindStyles.pageComponent}`} style={styles.container}>
            <Item title="Where" subtitle="badhuistheater, Amsterdam" />

            <Item title="When" subtitle="JULY 16th 2023. 19:30 - 22:30" />

            <Button 
                text="Get Tickets" 
                openInNewTab={true}
                href="https://www.eventbrite.nl/e/tickets-the-skin-of-our-teeth-by-aca-645011716407" 
            />
        </div>
    )
}