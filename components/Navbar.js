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
        backgroundColor: "#333",
        padding: "10px 20px",
      }}
    >
      <div style={{ marginRight: "auto" }}>
        {/* Home */}
        <div>
          <Image src={logo} alt="realest estate logo" width={75} height={75} />
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {/* Saved Homes */}
        <h2 style={{ color: "white" }}>Saved Homes</h2>

        {/* Log In */}
        <h2 style={{ color: "white" }}>Log In</h2>

        {/* Sign Up */}
        <h2 style={{ color: "white" }}>Sign Up</h2>
      </div>
    </nav>
  );
}
