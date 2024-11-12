import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

const Layout = ({children}: Props)=>{
    return (
        <div>
            <h1>Header</h1>
            <hr></hr>
            {children}
            <hr></hr>
            <h1>Footer</h1>
        </div>
    )
}

export default Layout