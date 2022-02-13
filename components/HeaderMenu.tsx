
interface MenuOptionParams {
    value: string
}

const MenuOption = ({ value }: MenuOptionParams) => {
    return (
        <>
            <li className="font-bold px-1 py-2 rounded text-right w-full hover:bg-shop-text-input-field hover:cursor-pointer">
                {value}
            </li>
        </>
    );
}

export default function HeaderMenu () {
    return (
        <>
            <div className="absolute bg-shop-white border border-shop-very-light-pink p-5 right-0 top-16 w-full  sm:rounded sm:right-14 sm:w-40 sm:top-20">
                <ul className="flex flex-col gap-1 w-full">
                    <MenuOption value="My order" />
                    <MenuOption value="My account" />
                    <li className="border-b my-2 w-full"/>
                    <li className="text-shop-hospital-green p-2 rounded text-right w-full hover:bg-shop-text-input-field hover:cursor-pointer">
                        Sign out
                    </li>
                </ul>
            </div>
        </>
    );
}