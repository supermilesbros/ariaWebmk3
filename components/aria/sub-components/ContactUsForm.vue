/* eslint-disable no-unused-expressions */
<template>
  <div>
    <div class="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-lg-6">
            <div class="conact-us-wrap-one mb-30">
              <h3 class="heading">
                To make requests for <br>further information, <br><span class="text-color-primary">contact us.</span>
              </h3>
              <div class="sub-heading">
                No more than a business day to return your call and less to return your email.
              </div>
              <div class="sub-heading">
                Don't have a doctor's order? For insurance covered Telehealth visit and COVID 19 testing Call <a style="color: #c12443;" href="tel:3176234003">317-623-4003</a>
              </div>
              <div class="sub-heading" />
            </div>
          </div>

          <div class="col-lg-6 col-lg-6">
            <div class="contact-form-wrap">
              <div class="contact-form">
                <div class="contact-input">
                  <div class="contact-inner">
                    <input v-model="formdata.name" name="con_name" type="text" placeholder="Name *">
                  </div>
                  <div class="contact-inner">
                    <input v-model="formdata.email" name="con_email" type="email" placeholder="Email *">
                  </div>
                </div>
                <div class="contact-inner">
                  <input v-model="formdata.catagory" name="con_subject" type="text" placeholder="Subject *">
                </div>
                <div class="contact-inner contact-message">
                  <textarea v-model="formdata.comments" name="con_message" placeholder="Please describe what you need." />
                </div>
                <div class="submit-btn mt-20">
                  <button class="ht-btn ht-btn-md" @click="writeToFirestore">
                    Send message
                  </button>
                  <p class="form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-alert
      v-model="showBottom"
      class="position-fixed fixed-bottom m-0 rounded-0"
      style="z-index: 2000;"
      variant="danger"
      dismissible
    >
      We will contact you shortly. Thank You
    </b-alert>
  </div>
</template>
<script>
import { fireDb } from '~/plugins/firebase.js'
export default {
  data () {
    return {
      formdata: {
        name: '',
        catagory: '',
        email: '',
        comments: ''
      },
      showBottom: false
    }
  },
  methods: {
    reset () {
      this.name = '',
      this.catagory = '',
      this.email = '',
      this.comments = ''
    },
    async writeToFirestore () {
      console.log('started submit')
      const fName = this.formdata.name
      console.log(fName)
      const ref = fireDb.collection('siteForm').doc(fName)
      const mail = fireDb.collection('mail').doc(fName)
      const createdAt = new Date().toUTCString()
      const document = {
        name: fName,
        email: this.formdata.email,
        message: this.formdata.comments,
        time: createdAt
      }
      const mailDoc = {
        to: [
          'jared@supermilesbros.com',
          'labsupport@ariadxs.com'
        ],
        message: {
          subject: fName + ' ' + 'New Site Form',
          text:
            this.formdata.comments +
            ' ' +
            fName +
            ' ' +
            this.formdata.email
        }
      }
      try {
        await ref.set(document)
        await mail.set(mailDoc)
      } catch (e) {
        // TODO: error handling
      }
      this.writeSuccessful = true
      // this.reset()
      this.showBottom = true
    }
  }
}
</script>
