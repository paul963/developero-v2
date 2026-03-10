import { useNavigate } from 'react-router-dom'
import '../styles/404.css'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <section className="not-found">
      <div className="not-found-wrapper text-center">
        <h1>404</h1>
        <p>Pagina pe care o cauți nu există.</p>
        <button className="btn-full" onClick={() => navigate('/')}>
          Pagina principală
        </button>
      </div>
    </section>
  )
}

export default NotFound