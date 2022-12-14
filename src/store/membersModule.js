import axios from 'axios'

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
    membersLogin(thisStore, member) {
      axios.post('http://localhost:3100/api/v1/members/login', member)
    .then(function(response) {
      console.log('Done membersLogin', response)
    })}
  }
}
