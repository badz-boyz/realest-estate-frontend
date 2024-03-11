import Image from "next/image";
import logo from '../public/logo.png';
import SearchComponent from "../components/InputSearch";
import CardsContainer from "../components/CardContainer";

export default function Home() {
  return (
    <main>
      coming soon
      <Image src={logo} alt="realest estate logo" className="logo" />
      <SearchComponent />
      <CardsContainer />
    </main>
    
  );
}
