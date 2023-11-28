import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CartDetail } from '@/model/Types';

export const useCartStore = defineStore('cart', {
  state: () => ({
    details:<Array<CartDetail>>[
    ]
  }),
  getters: {
    cartItemsCount: (state) => {
      let count = 0;
      state.details.forEach(detail => {
        count += detail.quantity;
      })
      return count;
    },
  },
  actions: {
    addProduct(productId: number){
      const detailFound = this.details.find(d => d.productId === productId)
      //console.log(detailFound); la primera vez aparecerá undefined y la segunda el objeto con el que coincide
      if(detailFound){
          detailFound.quantity += 1;
      }else{
          this.details.push({
          productId,
          quantity: 1
      });
      }
    },
  },
})