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
        <div className="w-full h-full mt-12 mb-12 flex justify-center bg-cover bg-blend-overlay bg-gray-700 bg-center bg-[url('/skinOfOurTeeth/mainWide.jpg')]">
            <div className={`flex flex-col gap-12 pt-14 pb-14 ${tailwindStyles.pageComponent}`} style={styles.container}>
                <Item title="Where" subtitle="badhuistheater, Amsterdam" />

                <Item title="When" subtitle="NOVEMBER 4th and NOVEMBER 5th 2023, 19:30" />

                <Button 
                    text="Get tickets" 
                    href="/tickets" 
                />
            </div>
        </div>
    )
}