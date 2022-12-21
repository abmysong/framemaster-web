import { createStore } from 'vuex'
import { membersModule } from './membersModule.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    axiosError(thisStore, error) {
      console.error(error.response || error.message || error)
      alert((error.response && error.response.data && error.response.data.message) || error.message || '알 수 없는 오류가 발생 하였습니다.')
    }
  },
  modules: {
    $members: membersModule
  }
})
