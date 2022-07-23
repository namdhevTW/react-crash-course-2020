import Navigation from "./Navigation";

function Header() {
    return (
        <header className="border-b bg-white flex items-center justify-between p-3">
            <span className="font-bold">
                My First React App
            </span>
            <Navigation></Navigation>
        </header>
    );
}

export default Header;