<template>
  <div>
    123
    <google-auth></google-auth>
  </div>
</template>

<script>
import googleOneTap from 'google-one-tap';
// https://www.npmjs.com/package/vue-google-oauth2
import googleAuth from '@/components/GoogleAuth.vue'
export default {
  name: 'IndexPage',
  components: {
    googleAuth: googleAuth
  },
  data(){
    return{
    }
  },
  mounted() {
      const interfaceUrl = 'https://www.googleapis.com/oauth2/v2/userinfo'
      const params = {}
      const options = {
        client_id: '310381460275-g8011qapq5li02afmt7hubiu0k1ce6tt.apps.googleusercontent.com', // required
        auto_select: false, // optional
        cancel_on_tap_outside: false, // optional
        context: 'signin', // optional
      };
      googleOneTap(options, (response) => {
        console.log('response',response);
        const profileData = JSON.parse(atob(response.credential.split('.')[1]))
        const { name, picture, email } = profileData
        console.table({ name, picture, email })
        // reqInstance.get(interfaceUrl)
      });
    },
}
</script>
