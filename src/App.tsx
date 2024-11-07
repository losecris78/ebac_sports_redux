import { Provider } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { store } from './store'

import { GlobalStyle } from './styles'

export type Produto = {
  estaNosFavoritos: boolean
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  //const [produtos, setProdutos] = useState<Produto[]>([])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
