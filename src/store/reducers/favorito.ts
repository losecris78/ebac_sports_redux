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
        const newFavorite = state.items.filter(
          (p) => productoPayload.id !== p.id
        )
        state.items = newFavorite
      } else {
        state.items.push(productoPayload)
      }
    }
  }
})
export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
