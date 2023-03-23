import './App.css'
import Menu from './components/menu/Menu'

function App() {


  return (
    <div>

      <div>
        <Menu />
      </div>

      <h2>Últimas Cotações</h2>

      <div className='cotacoes'>

        <div className="cotacao">

          <h3>Cotação #001</h3>

        </div>

        <div className="cotacao">

          <h3>Cotação #002</h3>

        </div>

      </div>

      <div className='cotacoes'>

<div className="cotacao">

  <h3>Cotação #003</h3>

</div>

<div className="cotacao">

  <h3>Cotação #004</h3>

</div>

</div>

<div className='cotacoes'>

<div className="cotacao">

  <h3>Cotação #005</h3>

</div>

<div className="cotacao">

  <h3>Cotação #006</h3>

</div>

</div>

    </div>

  )
}

export default App
