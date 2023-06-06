import { CSSProperties } from "react"
import { colors } from "../style/colors"
import Image from "next/image"

const styles: { [key: string]: CSSProperties } = {
    container: {
        height: 479,
        background: colors.blue,
    }
}

export const Hero = () => {
    return ( 
        <div className="w-full flex justify-center items-center" style={styles.container}>
            <Image src="Logo_wide.svg" alt="Acting Club Amsterdam" width={768} height={479} />
        </div>
    )
}
