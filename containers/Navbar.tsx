import { ReactNode } from "react";

interface NavbarProps {
    children: ReactNode
}

export default function Navbar ({ children }: NavbarProps) {
    return (
        <>
            <nav className="flex gap-1 items-center justify-around">
                { children }
            </nav>
        </>
    );
}