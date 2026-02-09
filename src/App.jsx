import { Canvas } from '@react-three/fiber'
import { Experience } from './components/canvas/Experience'
import { Smoke } from './components/canvas/Smoke'
import { ModernBackground } from './components/dom/ModernBackground'
import { Navbar } from './components/dom/Navbar'
import { Hero } from './components/dom/Hero'
import { Services } from './components/dom/Services'
import { Gallery } from './components/dom/Gallery'
import { Contact } from './components/dom/Contact'

function App() {
    return (
        <main className="w-full relative text-white selection:bg-fire-500 selection:text-white overflow-x-hidden">
            <Navbar />

            {/* Fixed Background Layer */}
            <div className="fixed inset-0 -z-10">
                <ModernBackground />
            </div>

            {/* Scrollable Content Layer */}
            <div className="relative z-10">
                <Hero />
                <Services />
                <Gallery />
                <Contact />
            </div>
        </main>
    )
}

export default App
