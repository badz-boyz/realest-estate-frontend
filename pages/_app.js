import "@/styles/globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthProvider } from '../context/AuthContext'; // Make sure the path is correct

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider> {/* Wrap the entire application with AuthProvider */}
      <>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </>
    </AuthProvider>
  );
}
