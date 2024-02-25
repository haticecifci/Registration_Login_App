
import { createStore } from 'vuex'


const store = createStore({
  state () {
    return {
      userInfo:{}
    }
  },
  actions:{},
  getters:{
    getUserInfo(state){
      return state.userInfo
    }
  },
  mutations: {
    setUserInfo (state,payload) {
      state.userInfo=payload
    }
  },
  modules:{}
})

export default store

