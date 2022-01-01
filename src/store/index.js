import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    current_time:Date.now(),
    visitors:[]
  },
  mutations: {
    SET_CURRENT_TIME(state)
    {
      state.current_time=Date.now()
    },
    SET_VISITORS(state){
      let visitors=[];
      axios({url: process.env.VUE_APP_API_USER,  method: 'GET' })
        .then(resp => {
          
          visitors=resp.data;
          visitors= visitors.sort(function(a,b){return new Date(a.arrival_time) - new Date(b.arrival_time)})
          state.visitors=visitors
        })
        .catch(err => {
          
        })
      
       //visitors.forEach(visitor =>{ visitor.arrival_time = new Date(visitor.arrival_time)
        //});
      
    }
  },
  actions: {
    timer({ commit }){

      setInterval(() => {
        commit('SET_CURRENT_TIME')
        commit('SET_VISITORS')
      }, 100);

    }
  },
  modules: {
  }
})
