import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  items: Produto[]
}
const initialState: CarrinhoState = {
  items: []
}
const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      if (state.items.find((Produto) => Produto.id === product.id)) {
        alert('Produto já adicionado')
      } else {
        state.items.push(product)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions

export default carrinhoSlice.reducer
