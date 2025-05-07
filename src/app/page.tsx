import Header from '@/components/Header'
import Profile from '@/components/Profile'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Footer from '@/components/Footer'
import Bubbles from '@/components/Bubbles'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0e0f1a] text-white">
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <section id="profile" className="min-h-screen flex items-center py-20 relative">
            <Bubbles />
            <Profile />
          </section>
        </div>
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </div>
      <Footer />
    </main>
  )
}
