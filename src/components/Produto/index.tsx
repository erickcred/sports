import { useDispatch, useSelector } from 'react-redux/es/exports'

import { Produto } from '../../App'
import * as S from './styles'
import { adicionar } from '../../store/reducers/carrinho'
import { RootReducer } from '../../store'
import { favoritar } from '../../store/reducers/favoritos'

type Props = {
  produto: Produto
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const listaFavoritos = useSelector(
    (state: RootReducer) => state.favoritar.itens
  )
  const dispatch = useDispatch()

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
        {listaFavoritos.map((f) => f.id).includes(produto.id)
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
