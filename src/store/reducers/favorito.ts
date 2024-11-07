import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

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
      } else {
        state.items.push(productoPayload)
      }
    }
  }
})
export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
