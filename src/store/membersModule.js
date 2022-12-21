import axios from 'axios'

const axiosDefaultsHeaders = function(token) {
  if (token) {
    localStorage.setItem('x-jwt-token', token)
    axios.defaults.headers.common['x-jwt-token'] = token
  } else if (localStorage.getItem('x-jwt-token')) {
    axios.defaults.headers.common['x-jwt-token'] = localStorage.getItem('x-jwt-token')
  }
}
axiosDefaultsHeaders()

export const membersModule = {
  state: {
    member: {
      member_pk: '',
      id: '',
      password: ''
    }
  },
  mutations: {
  },
  actions: {
    membersLogin(thisStore, {member, callback}) {
      axios.post('http://localhost:3100/api/v1/members/login', member)
      .then(function(response) {
        console.log('Done membersLogin', response)
        axiosDefaultsHeaders(response.data.token)
        callback()
      })
      .catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    }
  }
}
