import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyARIVt2ocBV2E40VXQLc-MPs67LIj09Jvo',
    authDomain: 'aria-f7021.firebaseapp.com',
    databaseURL: 'https://aria-f7021.firebaseio.com',
    projectId: 'aria-f7021',
    storageBucket: 'aria-f7021.appspot.com',
    messagingSenderId: '1079788655503',
    appId: '1:1079788655503:web:29cc204431834c3ddb71fa',
    measurementId: 'G-ETFMHND0P9'
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
export { fireDb }
