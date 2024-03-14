import Card from "../components/Card";
import { useState, useEffect } from "react";

export default function SavedHomesPage() {
  const [savedHomes, setSavedHomes] = useState([]);

  useEffect(() => {
    // Fetch saved homes based on the user's email
    const fetchSavedHomes = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/saved-homes/${email}`
        );
        if (response.ok) {
          const data = await response.json();
          setSavedHomes(data);
        }
      } catch (error) {
        console.error("Error fetching saved homes:", error);
      }
    };

    fetchSavedHomes();
  }, []); // Run only once on component mount

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <p style={{ fontSize: "28px", marginBottom: "20px" }}>
        Your saved homes are displayed below
      </p>
      {savedHomes.map((home, index) => (
        <Card key={index} {...home} />
      ))}
    </div>
  );
}
