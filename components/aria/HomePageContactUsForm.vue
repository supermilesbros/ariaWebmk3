/* eslint-disable no-unused-expressions */
<template>
  <div class="contact-us-area appointment-contact-bg section-space--ptb_100" :style="{ backgroundImage: `url('images/bg/home-appointment-contact-bg-image.png')` }">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="contact-title section-space--mb_50">
            <h3 class="mb-20">
              Need to get tested?
            </h3>
            <p class="sub-title">
              Reach out to the world’s fastest testing lab.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="contact-form-wrap">
            <div class="contact-form__two">
              <div class="contact-input">
                <div class="contact-inner">
                  <input v-model="formdata.name" name="con_name" type="text" placeholder="Name *">
                </div>
                <div class="contact-inner">
                  <input v-model="formdata.email" name="con_email" type="email" placeholder="Email *">
                </div>
              </div>
              <div class="contact-select">
                <div class="form-item contact-inner">
                  <span class="inquiry">
                    <select v-model="formdata.catagory" name="inquiry" class="select-item">
                      <option value="Your inquiry about">Your inquiry about</option>
                      <option value="General Information Request">General Information Request</option>
                      <option value="Partner Relations">Remote Testing</option>
                      <option value="Careers">Testing Municipalities</option>
                      <option value="Software Licencing">COVID-19</option>
                    </select>
                  </span>
                </div>
              </div>
              <div class="contact-inner contact-message">
                <textarea v-model="formdata.comments" name="con_message" placeholder="Please describe what you need." />
              </div>
              <div class="comment-submit-btn">
                <button class="ht-btn ht-btn-md" @click="writeToFirestore">
                  Submit Request
                </button>
                <p class="form-messege" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 ml-auto">
          <div class="contact-info-three text-left">
            <h6 class="heading font-weight--reguler">
              Reach out now!
            </h6>
            <h3 class="call-us">
              <a class="text-color-primary" href="tel:3177339454">317-733-9454</a>
            </h3>
            <div class="text">
              Don't spend time not knowing. Get tested today!
            </div>
            <div class="location-button mt-20">
              <button class="location-text-button">
                <span class="button-icon" />
                <a href="https://goo.gl/maps/2Wz7rLhigtNuUe4KA" target="_blank" class="button-text">View on Google map</a>
              </button>
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
        catagory: 'Your inquiry about',
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
      this.showBottom = true
      this.reset()
    }
  }
}
</script>
