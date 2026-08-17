import { ThemeProvider } from "./hooks/useTheme";
import { ToastProvider } from "./hooks/useToast";
import Navbar from "./components/Navbar";
import ScrollProgressBar from "./components/ui/ScrollProgressBar";
import BackToTop from "./components/ui/BackToTop";
import Hero from "./components/Hero";
import QuickStats from "./components/QuickStats";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Journey from "./components/Journey";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import CreatorSection from "./components/CreatorSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <ScrollProgressBar />
        <Navbar />
        <main>
          <Hero />
          <QuickStats />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Journey />
          <CurrentlyBuilding />
          <CreatorSection />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </ToastProvider>
    </ThemeProvider>
  );
}
