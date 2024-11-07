import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const Produtos = () => {
  const { data: produtos } = useGetProdutosQuery()

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            estaNosFavoritos={produto.estaNosFavoritos}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
