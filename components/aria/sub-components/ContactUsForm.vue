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
                We just need a couple of hours! <br> No more than 2 working days since receiving your issue ticket.
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-lg-6">
            <div class="contact-form-wrap">
              <form id="contact-form">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      }
    }
  },
  methods: {
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
    }
  }
}
</script>
