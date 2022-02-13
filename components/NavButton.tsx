
interface NavButtonProps {
    value: string,
    action?: any,
    
}

export default function NavButton ({ value, action }: NavButtonProps) {
    const handleAction = () => action && action();

    return (
        <>
            <button className="border border-shop-white h-10 p-2 rounded-lg text-shop-very-light-pink hover:border-shop-hospital-green hover:text-shop-hospital-green" onClick={handleAction}>
                {value}
            </button>
        </>
    );
}