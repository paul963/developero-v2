import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import App from './App.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import CookiesPolicy from './pages/CookiesPolicy.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/termeni-conditii" element={<TermsConditions />} />
        <Route path="/politica-confidentialitate" element={<PrivacyPolicy />} />
        <Route path="/politica-cookies" element={<CookiesPolicy />} />
      </Routes>
    </Layout>
  </BrowserRouter>
)