import SearchComponent from "../components/InputSearch";
import CardsContainer from "../components/CardContainer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <SearchComponent />
      <CardsContainer />
    </div>
    
  );
}
