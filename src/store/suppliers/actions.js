export const actions = {
  async fetchCompanies({commit}) {
    const res = await fetch('http://localhost:3000/suppliers')
    const companies = await res.json()
    commit('setCompanies', companies)
  },

  async fetchPopulars({commit}) {
    const res = await fetch('http://localhost:3000/popular-goods')
    const companies = await res.json()
    commit('setPopulars', companies)
  },

  async fetchBargains({commit}) {
    const res = await fetch('http://localhost:3000/bargain-goods')
    const companies = await res.json()
    commit('setBargains', companies)
  },

  async fetchData({dispatch}) {
    await Promise.all([
      dispatch('fetchCompanies'),
      dispatch('fetchPopulars'),
      dispatch('fetchBargains'),
    ])
  },
}