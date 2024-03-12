import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "darkblue",
        padding: "10px 20px",
      }}
    >
      <div style={{ marginRight: "auto" }}>
        {/* Home */}
        <div>
          <Image src={logo} alt="realest estate logo" width={100} height={75} style={{ borderRadius: "50%" }} />
        </div>
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {/* Saved Homes */}
        <Link href="/saved-homes">
          <span style={{ color: "white", textDecoration: "none" }}>
            Saved Homes
          </span>
        </Link>
        {/* Log In */}
        <Link href="/login">
          <span style={{ color: "white", textDecoration: "none" }}>Log In</span>
        </Link>
        {/* Sign Up */}
        <Link href="/signup">
          <span style={{ color: "white", textDecoration: "none" }}>
            Sign Up
          </span>
        </Link>
      </div>
    </nav>
  );
}