import { CSSProperties } from "react"
import { bebas } from "../style/fonts"
import { tailwindStyles } from "../style/styles"
import Instagram from "./icons/Instagram"
import Image from "next/image"
import Link from "next/link"

const styles: { [key: string]: CSSProperties } = {
    innerContainer: {
        ...bebas.style,
        fontSize: 20,
        height: 85,
    },
    socialIcon: {
        color: 'white',
    }
}

export const Footer = () => {
    return (
        <div className={`flex flex-col ${tailwindStyles.pageComponent}`}>
            <div className={`flex flew-row items-center`} style={styles.innerContainer}>
                <Link href="/">
                    <Image
                        src="Logo.svg"
                        alt="Acting Club Amsterdam"
                        width={72}
                        height={37}
                    />
                </Link>

                <div className="flex-grow" />

                <Link href="/about">
                    Who we are
                </Link>
            </div>

            <div className="flex flex-row justify-end pb-2">
                <a href="https://www.instagram.com/actingclubamsterdam/">
                    <Instagram size={16} />
                </a>
            </div>
        </div>
    )
}