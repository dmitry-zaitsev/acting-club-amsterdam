import { CSSProperties } from "react"
import { bebas } from "../style/fonts"

const styles: { [key: string]: CSSProperties } = {
    container: {
        fontSize: 20,
        height: 85,
    }
}

export const Navbar = () => {
    return (
        <div className={`w-full md:w-3/4 flex flex-row gap-4 justify-end items-center pe-3 ps-3 ${bebas.className}`} style={styles.container}>
            <a>
                Productions
            </a>

            <a>
                Who we are
            </a>
        </div>
    )
}
