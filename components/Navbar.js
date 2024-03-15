import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import { useAuth } from '../context/AuthContext'; // Adjust the import path as needed

export default function Navbar() {
  const { user, logout } = useAuth(); // Assuming logout clears the user state
  console.log("Navbar user state:", user);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        padding: "10px 20px",
      }}
    >
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "15px"}}>
        <Link href="/" passHref>
          <Image src={logo} alt="realest estate logo" width={100} height={75} style={{ borderRadius: "50%" }} />
        </Link>
      <h1 style={{color: "white", fontSize: '48px'}}>Realest Estate</h1>
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link href="/search-results" passHref>
          <span style={{ color: "white", cursor: "pointer" }}>Search</span>
        </Link>
        <Link href="/saved-homes" passHref>
          <span style={{ color: "white", cursor: "pointer" }}>Saved Homes</span>
        </Link>
        {user ? (
          <>
            <span style={{ color: "white", fontWeight: "bold" }}>Hi, Anonymous Wumpus{user.email}</span> {/* Display user email or another identifier */}
            <button onClick={logout} style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" passHref>
              <span style={{ color: "white", cursor: "pointer" }}>Log In</span>
            </Link>
            <Link href="/signup" passHref>
              <span style={{ color: "white", cursor: "pointer" }}>Sign Up</span>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
