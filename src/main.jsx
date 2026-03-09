import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import App from './App.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import PolicyCookies from './pages/PolicyCookies.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/termeni-si-conditii" element={<TermsConditions />} />
        <Route path="/politica-cookies" element={<PolicyCookies />} />
      </Routes>
    </Layout>
  </BrowserRouter>
)