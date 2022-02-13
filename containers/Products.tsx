import { ReactNode } from "react";

interface ProductsProps {
    children: ReactNode
}

export default function Products ({ children }: ProductsProps) {
    return (
        <>
            <main className="grid grid-cols-shop-auto-fill-min gap-6 px-3 py-6 place-content-center w-full sm:grid-cols-shop-auto-fill-max">
                { children }
            </main>
        </>
    );
}