import { ReactElement} from "react";

import Header from "../components/common/Header/Header";

interface ILayoutPros {
    children: ReactElement
}

const Layout = ({children}:ILayoutPros) => {
    return (
        <div className="min-h-full">
            <Header />
            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout;