import { CSSProperties } from "react"
import { bebas } from "../style/fonts"
import { tailwindStyles } from "../style/styles"
import Image from "next/image"

const styles: { [key: string]: CSSProperties } = {
    container: {
        ...bebas.style,
        fontSize: 20,
        height: 85,
    }
}

export const Footer = () => {
    return (
        <div className={`flex flew-row items-center ${tailwindStyles.pageComponent}`} style={styles.container}>
            <Image
                src="Logo.svg"
                alt="Acting Club Amsterdam"
                width={72}
                height={37}
            />

            <div className="flex-grow" />

            <a>
                Who we are
            </a>
        </div>
    )
}