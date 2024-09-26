export const mutations = {
  setCompanies(state, newCompanies) {
    state.companies = newCompanies
  },
  setPopulars(state, newPopulars) {
    state.popularGoods = newPopulars
  },
  setBargains(state, newBargains) {
    state.bargainGoods = newBargains
  },
}