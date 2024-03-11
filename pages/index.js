import Image from "next/image";
import logo from '../public/logo.png';

export default function Home() {
  return (
    <main>
      coming soon
      <Image src={logo} alt="realest estate logo" className="logo" />
    </main>
  );
}
