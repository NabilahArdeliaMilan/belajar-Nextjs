import Link from "next/link";

const Navbar = () => {
    return(
        <nav className="Navbar">
    <ul>
        <li> 
            <Link href="/home">Home</Link>
        </li>
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
            <Link href="/profil">Profil</Link>
        </li>
    </ul>
    </nav>
    );
}
export default Navbar;