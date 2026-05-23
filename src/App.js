import '@/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadge from './components/TrustBadge';
import ShortIntro from './components/ShortIntro';
import Portfolio from './components/Portfolio';
import TattooStyles from './components/TattooStyles';
import Services from './components/Services';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import HygieneSafety from './components/HygieneSafety';
import TattooTeam from './components/TattooTeam';
import Reviews from './components/Reviews';
import Location from './components/Location';
import BookingInfo from './components/BookingInfo';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <TrustBadge />
                <ShortIntro />
                <Portfolio />
                <TattooStyles />
                <Services />
                <Pricing />
                <WhyChooseUs />
                <HygieneSafety />
                <TattooTeam />
                <Reviews />
                <Location />
                <BookingInfo />
                <FAQ />
                <FinalCTA />
            </main>
            <Footer />
            <StickyMobileCTA />
        </div>
    );
}

export default App;
