<template>
  <div class="btn-cont">
    <div>
      <h2>vue-google-identity-login-btn</h2>
    </div>
    <div id="google-login-btn">Continuar con google</div>
  </div>
</template>

<script>
// import GoogleSignInButton from 'vue-google-identity-login-btn'

export default {
  directives: {
    // GoogleSignInButton,
  },

  data() {
    return {
      clientId: '310381460275-g8011qapq5li02afmt7hubiu0k1ce6tt.apps.googleusercontent.com',
      googleBtnConfigs: {
        type: 'standard',
        shape: 'rectangular',
        theme: 'outline',
        text: 'continue_with',
        size: 'large',
        locale: 'es-419',
        logo_alignment: 'center',
        width: '300',
      }
    }
  },
  mounted () {
    this.initGoogleSignInAPI()
  },
  methods: {
    initGoogleSignInAPI(){
      const googleSignInAPI = document.createElement('script')
      googleSignInAPI.setAttribute(
        'src',
        'https://accounts.google.com/gsi/client'
      )
      document.head.appendChild(googleSignInAPI)
      const _that = this
      googleSignInAPI.onload = function(){
        // InitGoogleButton 初始化登录按钮
        google.accounts.id.initialize({
          client_id: _that.clientId,
          callback: _that.OnSuccess,
        })

        google.accounts.id.renderButton(
          document.getElementById('google-login-btn'),
          _that.googleBtnConfigs
        )
      }
      //  this.InitGoogleButton()
    },
    InitGoogleButton(){

    },
    OnSuccess(resp) {
      this.onGoogleAuthSuccess(resp.credential)
    },
    onGoogleAuthSuccess(jwtCredentials) {
      console.log('jwtCredentials',jwtCredentials);
      const profileData = JSON.parse(atob(jwtCredentials.split('.')[1]))
      const { name, picture, email } = profileData
      console.table({ name, picture, email })
    },
  },
}
</script>

<style scoped>
.btn-cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
}
.btn-cont > div {
  width: 300px;
  text-align: center;
}
</style>
