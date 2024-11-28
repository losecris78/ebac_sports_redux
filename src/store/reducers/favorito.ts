import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'
import ProdutoI from '../../components/Produto'

type FavoritoState = {
  items: Produto[]
}

const initialState: FavoritoState = {
  items: []
}
const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const productoPayload = action.payload
      if (state.items.find((Produto) => Produto.id === productoPayload.id)) {
        state.items.pop()
        ProdutoI.arguments.estaNosFavoritos == false
      } else {
        state.items.push(productoPayload)
        ProdutoI.arguments.estaNosFavoritos == true
      }
    }
  }
})
export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
