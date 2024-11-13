import { Metadata } from "next";
import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: {
        template: '%s -  B7Web',
        default: 'B7Web'
    }
}

const Layout = ({children}:Props)=>{
    return (
        <html>
            <body>
                <h1>Meu primeiro projeto Next</h1>
                <hr></hr>
                <div>
                    {children}
                </div>
            </body>
        </html>
    )
}

export default Layout