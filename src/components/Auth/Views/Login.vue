<template>
<div class="container-login100">
  <div class="wrap-login100">
    <form @submit.prevent="login" class="login100-form validate-form">
      <span class="login100-form-title p-b-26">
        <img src="static/images/ntws-logo.png" alt="NTWS Logo" width="144" height="144"></span>

      <div class="wrap-input100 validate-input" data-validate = "Invalid username">
        <input
          v-model="form.username"
          class="input100"
          type="text"
          name="username"
        >
        <span class="focus-input100" data-placeholder="Username"></span>
      </div>

      <div class="wrap-input100 validate-input" data-validate="Enter password">
        <span class="btn-show-pass"> <i class="zmdi zmdi-eye"></i>
        </span>
        <input
          v-model="form.password"
          class="input100"
          type="password"
          name="pass"
        >
        <span class="focus-input100" data-placeholder="Password"></span>
      </div>
      <button type="submit" class="button button btn-block">Login</button>

      <div class="text-center p-t-64">
        <p style="font-size:12px">New Tubod Waterworks System version 1.0</p>
        <p style="font-size:12px">Designed by: Skolpad.</p>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },

  mounted () {
    this.initToggleInputField()
  },

  computed: {
    ...mapGetters('auth', ['loggedIn'])
  },

  methods: {
    ...mapActions('auth', ['logIn']),

    /**
     * Initialize material theme
     * label/placeholder toggle effect.
     *
     * @return {void}
     */
    initToggleInputField () {
      $('.input100').each((index, elem) => {
        $(elem).on('blur', (e) => {
          let target = $(e.target)

          if (target.val().trim() !== '') {
            target.addClass('has-val')
          } else {
            target.removeClass('has-val')
          }
        })
      })
    },

    /**
     * Login process.
     *
     * @return {void}
     */
    async login () {
      await this.logIn(this.form)

      if (this.loggedIn) {
        // Redirect to home
        this.$router.push({ name: 'overview' })
      }
    }
  }
}
</script>
