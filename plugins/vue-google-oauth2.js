import Vue from 'vue'
// import GAuth from 'vue-google-oauth2'
import GAuth from '@/utlis/google-oauth2'

const gauthOption = {
  clientId: '310381460275-g8011qapq5li02afmt7hubiu0k1ce6tt.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)