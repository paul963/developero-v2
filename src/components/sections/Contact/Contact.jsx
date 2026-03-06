import React, { useState, useEffect, useRef } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const selectRef = useRef(null)

  const isFormValid = formData.name.trim() !== '' &&
    formData.company.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.service !== ''

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Listen for service pre-selection from other section buttons
  useEffect(() => {
    const handleServiceClick = (e) => {
      const btn = e.target.closest('a[data-service]')
      if (!btn) return
      const service = btn.dataset.service
      setFormData((prev) => ({ ...prev, service }))
      // Scroll to contact section
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    document.addEventListener('click', handleServiceClick)
    return () => document.removeEventListener('click', handleServiceClick)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="contact section-py" id="contact">
      <div className="container">
        <div className="supra-title">Contact</div>
        <h2 className="text-center">Hai să discutăm</h2>
        <p className="text-center description">
          Ai întrebări despre serviciile noastre sau vrei o ofertă? Trimite-ne un mesaj și îți răspundem în cel mai scurt timp.
        </p>
        <div className="form-wrapper bg-dark">
          <form className="form" onSubmit={handleSubmit}>
            <div className="grid grid-2">
              <input
                name="name"
                placeholder="Nume"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                name="company"
                placeholder="Denumire Companie"
                required
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <select
              name="service"
              required
              ref={selectRef}
              value={formData.service}
              onChange={handleChange}
            >
              <option value="" disabled>Sunt interesat de...</option>
              <option value="website">Site de Prezentare</option>
              <option value="eccommerce">Magazin Online</option>
              <option value="infrastructure">Infrastructură IT</option>
              <option value="lp">Landing Page</option>
              <option value="audit">Audit extern</option>
              <option value="maintenance">Mentenanță</option>
              <option value="other">Altele</option>
            </select>
            <textarea
              name="message"
              placeholder="Mesajul tău..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn-full" disabled={!isFormValid}>
              Trimite cererea de ofertă
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact