import { CSSProperties } from "react"
import { bebas } from "../style/fonts"
import { tailwindStyles } from "../style/styles"
import Link from "next/link"
import Image from "next/image"


type NavbarProps = {
    showLogo?: boolean;
}

const styles: { [key: string]: CSSProperties } = {
    container: {
        fontSize: 20,
        height: 85,
    }
}

export const Navbar = ({ showLogo } : NavbarProps) => {
    return (
        <div className={`flex flex-row gap-4 items-center ${tailwindStyles.pageComponent} ${bebas.className}`} style={styles.container}>
            {showLogo && (
                <Link href="/">
                    <Image
                        src="Logo.svg"
                        alt="Acting Club Amsterdam"
                        width={72}
                        height={37}
                    />
                </Link>
            )}

            <div className="flex-grow" />

            <Link href="/tickets">
                Tickets
            </Link>

            <Link href="/productions">
                Productions
            </Link>

            <Link href="/about">
                Who we are
            </Link>
        </div>
    )
}
