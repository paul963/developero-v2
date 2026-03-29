import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import Layout from './components/layout/Layout.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import CookiesPolicy from './pages/CookiesPolicy.jsx'
import NotFound from './pages/404.jsx'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/termeni-conditii" element={<TermsConditions />} />
          <Route path="/politica-confidentialitate" element={<PrivacyPolicy />} />
          <Route path="/politica-cookies" element={<CookiesPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </HelmetProvider>
)