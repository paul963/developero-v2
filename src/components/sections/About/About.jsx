import React, { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const contentRef = useRef(null)

  useEffect(() => {
    const elements = contentRef.current?.querySelectorAll('h3, p')
    if (!elements?.length) return

    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const fromTop = rect.top / window.innerHeight

        // Element is active when its top edge is within the top 30–90% of the viewport
        if (fromTop < 0.6 && fromTop > -0.5) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        } else {
          el.style.opacity = '0.15'
          el.style.transform = 'translateY(8px)'
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // run on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="about" className="section-py">
      <div className="container">
        <div className="supra-title">Despre</div>
        <h2 className="text-center"><span className="glow-text">Developero</span> pe scurt</h2>
        <div className="about-content" ref={contentRef}>
          <h3>Partenerul tău IT de încredere</h3>
          <p>
            Suntem partenerul tău IT pentru proiecte web, infrastructură și servicii de externalizare, oferind soluții complete pentru companii și antreprenori care își doresc claritate, eficiență și
            rezultate măsurabile. Credem că tehnologia trebuie să susțină dezvoltarea afacerii, nu să o complice. De aceea, livrăm soluții bine gândite, implementate corect și susținute prin suport
            constant, în limba română.
          </p>
          <h3>Expertiză completă: Web și Infrastructură</h3>
          <p>
            Oferim expertiză completă, acoperind atât dezvoltarea aplicațiilor și platformelor web, cât și infrastructura IT necesară funcționării lor optime. Lucrând cu noi, nu este nevoie să
            coordonezi echipe separate pentru dezvoltare și infrastructură. Gestionăm totul sub același acoperiș, cu o viziune unitară și responsabilitate clară asupra rezultatelor.
          </p>
          <h3>Transparență și comunicare clară</h3>
          <p>
            Punem un accent real pe transparență și comunicare. Fiecare etapă a proiectului este explicată clar, fără jargon inutil sau termeni tehnici complicați. Știi permanent în ce stadiu se află
            proiectul tău, care sunt următorii pași și ce implică fiecare decizie. Comunicăm direct, eficient și orientat către soluții.
          </p>
          <h3>Soluții personalizate, nu pachete standard</h3>
          <p>
            Nu credem în pachete standard sau abordări „la catalog". Fiecare afacere are particularitățile ei, iar fiecare proiect este analizat individual. Propunem soluții personalizate, construite
            în funcție de obiectivele, bugetul și ritmul tău de dezvoltare. Implementăm exact ce este necesar pentru performanță și scalabilitate, fără costuri inutile sau funcționalități redundante.
          </p>
          <h3>Calitate, stabilitate și fiabilitate</h3>
          <p>
            Calitatea și fiabilitatea sunt principii esențiale în modul nostru de lucru. Utilizăm tehnologii dovedite și bune practici care asigură stabilitate, securitate și performanță pe termen
            lung. Ofertele sunt clare, fără costuri ascunse, iar estimările sunt realiste și asumate.
          </p>
          <h3>Suport real, pe termen lung</h3>
          <p>
            Suportul nostru este unul real, nu formal. Răspundem rapid, ne implicăm activ în rezolvarea problemelor și rămânem alături de tine și după livrare. Construim relații pe termen lung, bazate
            pe încredere, profesionalism și rezultate concrete.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About