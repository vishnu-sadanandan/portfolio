
'use client';
// app/components/Navbar.tsx
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Menu as MenuType,State } from '../api/response/types';

const Navbar = () => {
    const { menus, loading } = useSelector((state:State) => state.menu);

    return (
        <nav className={"flex"}>
            <ul className={"row-start-3 flex gap-6 flex-wrap"}>
                {loading && <li>
                    <Link
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        rel="noopener noreferrer"
                        href="#">Loading</Link>
                </li>}
                {!loading && menus && menus.length > 0 && menus.filter((m: MenuType) => m.name !== "Settings").map((m: MenuType) => (<li  key={m.id}>
                    <Link
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        rel="noopener noreferrer"
                        href={`${m.path}`}>{m.name}</Link>
                </li>))}
            </ul>
        </nav>
    );
};

export default Navbar;
