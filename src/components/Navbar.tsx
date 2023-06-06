import { CSSProperties } from "react"
import { bebas } from "../style/fonts"
import { tailwindStyles } from "../style/styles"

const styles: { [key: string]: CSSProperties } = {
    container: {
        fontSize: 20,
        height: 85,
    }
}

export const Navbar = () => {
    return (
        <div className={`flex flex-row gap-4 justify-end items-center ${tailwindStyles.pageComponent} ${bebas.className}`} style={styles.container}>
            <a>
                Productions
            </a>

            <a>
                Who we are
            </a>
        </div>
    )
}
