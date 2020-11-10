<template>
  <div class="main-container">
    <HeaderAria />

    <Breadcrumbs :items="breadcrumbNavigation" breadcrumb-title="Blog Details" />

    <div class="blog-pages-wrapper section-space--ptb_100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Post Feature Start -->
            <div class="post-feature blog-thumbnail  wow move-up">
              <img class="img-fluid" src="/images/aria/press2.jpg" alt="Blog Images">
            </div>
            <!-- Post Feature End -->
          </div>
          <div class="col-lg-8 ml-auto mr-auto">
            <div class="main-blog-wrap">
              <!--======= Single Blog Item Start ========-->
              <div class="single-blog-item  wow move-up">
                <!-- Post info Start -->
                <div class="post-info lg-blog-post-info">
                  <div class="post-categories text-center">
                    <div>
                      Latest News
                    </div>
                  </div>

                  <h3 class="post-title text-center">
                    Partnership with Northview Church as a New Testing Site
                  </h3>

                  <div class="post-excerpt mt-15">
                    <p>
                      “Yesterday we unveiled our new self-service web portal that allows people to sign up, schedule their appointment
                      and pay all from the safety of their home or car, since the site is mobile responsive, so you can sign up from your
                      phone as well,” said Zak Khan, co-founder of Aria Diagnostic Laboratories. “Working with Pastor Steve Poe, we
                      were able to provide a larger space and support for the congregation, people of Carmel, and truly anyone who
                      wants the peace of mind of knowing if they have COVID-19.”
                    </p>

                    <blockquote>
                      <p class="p1">
                        INDIANAPOLIS, April 30, 2020---Aria Diagnostic Laboratories today announced a partnership with Northview
                        Church in Carmel, 12900 Hazel Dell Parkway, as a new site for testing people for COVID-19. This partnership
                        allows for a much larger space to process the test and accommodate the many people who want to know if they are
                        carrying the corona virus that causes COVID-19. Aria Diagnostic Laboratories will be testing this Friday from 9-5 and
                        will continue Monday through Saturday weekly.
                      </p>
                    </blockquote>

                    <p>
                      The testing process is efficient and effective, lasting less than 5 minutes from beginning to end. “It takes 26 seconds
                      to administer the swab,” said Khan, “from the time you arrive to the time you leave it should take five minutes or
                      less.” People must register on the self-pay portal which allows for people wishing to get tested for COVID-19 the
                      ability to request the test online, pick the date and time they want to come get the test administered, and pay for it all
                      from the comfort and safety of their home. Once the test is scheduled, they drive up to Northview Church parking lot,
                      and the professional staff from Aria will perform the test while the patient remains in their car. The results of the test
                      will be sent to them within 48hrs in an email. “Due to CDC guidelines we must set a mobile site like this outside,”
                      said Khan.
                    </p>

                    <p>
                      “At Northview Church we believe that the safety of our local community and our congregation is paramount. As
                      Carmel and the surrounding communities plan to re-open the doors of society in the coming weeks, we are grateful
                      we can provide a convenient space that allows Aria to administer their quick and accurate COVID-19 testing.
                      Although this season has shown God’s Church is not the building, we are looking forward to gathering again
                      soon. Whenever that time comes, we know testing is one way to provide peace of mind against the anxieties
                      surrounding the coronavirus,” said Jason Pongratz, Executive Pastor Campus Team of Northview Church.
                    </p>
                    <p>
                      After successfully providing thousands of COVID-19 test kits to area municipalities and New York City, as well as
                      numerous companies and first responders, Aria Diagnostics has continued to seek out solutions to help get
                      Hoosiers and people around the country get back to resuming normal activity with the peace of mind that they are
                      not carrying or contagious of the virus that causes Covid-19.”It’s not just about getting back to work,” Khan said. “It’s
                      about getting back to Life.” Aria Diagnostics will also donate 10% of the proceeds from the tests at this site to the
                      American Red Cross.
                    </p>

                    <p>Source: Aria Diagnostics</p>
                  </div>
                </div>
                <!-- Post info End -->
              </div>
              <!--===== Single Blog Item End =========-->
            </div>
          </div>
        </div>
      </div>
    </div>

    <AriaFooter />

    <OffCanvasMobileMenu />
  </div>
</template>

<script>
import data from '../data/blog.json'
import HeaderAria from '@/components/aria/HeaderAria'
import AriaFooter from '@/components/aria/AriaFooter'
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu'

export default {
  components: {
    HeaderAria,
    AriaFooter,
    OffCanvasMobileMenu
  },
  data () {
    return {
      data,
      breadcrumbNavigation: [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'Blogs',
          to: '/blog'
        },
        {
          text: 'Blog Details',
          active: true
        }
      ]
    }
  },
  head () {
    return {
      title: 'Press Release'
    }
  }
}
</script>
