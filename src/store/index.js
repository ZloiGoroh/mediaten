import {createStore} from 'vuex';
import {suppliers} from '@/store/suppliers/index.js';

export const store = createStore({
  modules: {
    suppliers,
  },
})