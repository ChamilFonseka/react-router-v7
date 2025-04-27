import { Outlet } from "react-router";

const Layout = () => {
    return (
        <>
            <div className="flex flex-col h-dvh">
                <header className="p-8 border-b border-gray-200 shadow-md flex justify-between items-center">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </header>
                <main className="flex-1 grid place-items-center">
                    <Outlet />
                </main>
                <footer className="p-8 border-t border-gray-200 flex justify-center items-center">Footer</footer>
            </div>
        </>
    );
};
export default Layout;