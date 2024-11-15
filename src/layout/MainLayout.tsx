import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main className="grow-[1]">
                {children}
            </main>
            <Footer />
        </>)
}