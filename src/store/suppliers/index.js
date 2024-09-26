import {state} from '@/store/suppliers/state.js';
import {mutations} from '@/store/suppliers/mutations.js';
import {actions} from '@/store/suppliers/actions.js';


export const suppliers = {
  namespaced: true,
  state,
  mutations,
  actions,
}