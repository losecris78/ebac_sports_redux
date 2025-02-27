import { useDispatch, useSelector } from 'react-redux'
import { Produto } from '../../App'
import * as S from './styles'
import { adicionar } from '../../store/reducers/carrinho'
import { favoritar } from '../../store/reducers/favorito'

type Props = {
  produto: Produto
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoI = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const { items: favoritos } = useSelector((state: any) => state.favorito)
  console.log('favoritos', favoritos)
  const EsFavorito = (idItem: any) => {
    const estaIncluido = favoritos.filter(
      (f: any) => f.id.toString() === idItem.toString()
    )
    if (estaIncluido.length > 0) {
      return '-Remover dos favoritos'
    } else {
      return '+Adicionar aos favoritos'
    }
  }
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(favoritar(produto))} type="button">
        {EsFavorito(produto.id)}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoI
