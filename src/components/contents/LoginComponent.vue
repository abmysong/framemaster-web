<template>
  <div class="inner">
    <div class="title-area">
      <h3>로그인</h3>
    </div>
    <div class="login-area">
      <form @submit.prevent="membersLogin(member)">
        <input type="text" placeholder="아이디" v-model="member.id">
        <input type="password" placeholder="비밀번호" v-model="member.password">
        <button>확인</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    member() {
      return this.$store.state.$members.member
    }
  },
  methods: {
    membersLogin(member) {
      const callback = () => {
        // this.$router.push('/?abc=123')
        this.$router.push({name: 'Home', query: {
          abc: 123
        }})
      }
      this.$store.dispatch('membersLogin', {
        member,
        callback
      })
    }
  },
  created() {
    console.log(this.member)
    this.member.id = ''
    this.member.password = ''
  }
}
</script>
