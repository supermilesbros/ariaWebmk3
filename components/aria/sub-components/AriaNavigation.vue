<template>
  <ul>
    <li>
      <n-link to="/">
        <span>Home</span>
      </n-link>
    </li>
    <li>
      <n-link to="/resources">
        <span>COVID 19</span>
      </n-link>
    </li>
    <li class="has-children has-children--multilevel-submenu">
      <n-link to="/about">
        <span>Laboratory</span>
      </n-link>
      <ul class="submenu">
        <li>
          <n-link to="/about">
            <span>About Us</span>
          </n-link>
        </li>
        <!-- <li>
          <n-link to="/ToxEdu">
            <span>Toxicology Education</span>
          </n-link>
        </li> -->
        <li>
          <n-link to="/scope-service">
            <span>Testing Process</span>
          </n-link>
        </li>
        <li>
          <n-link to="/markets-service">
            <span>Specialities</span>
          </n-link>
        </li>
        <li>
          <n-link to="/advantage-service">
            <span>Aria Advantage</span>
          </n-link>
        </li>
        <li>
          <n-link to="/laboratory-forms">
            <span>Forms</span>
          </n-link>
        </li>
        <li>
          <nuxt-link to="/FAQ">
            <span>FAQ</span>
          </nuxt-link>
        </li>
      </ul>
    </li>
    <li>
      <n-link to="/billing">
        <span>Billing</span>
      </n-link>
    </li>
    <li>
      <n-link to="/Portal">
        <span>Results Portal</span>
      </n-link>
    </li>
    <li class="has-children has-children--multilevel-submenu">
      <n-link to="/contact">
        <span>Contact Us</span>
      </n-link>
      <ul class="submenu">
        <li>
          <n-link to="/contact">
            <span>Contact Us</span>
          </n-link>
        </li>
        <li>
          <a href="https://ariadxs.bamboohr.com/jobs/?source=filesusr" target="_blank">
            <span>Careers</span>
          </a>
        </li>
      </ul>
    </li>
    <!-- <li class="has-children has-children--multilevel-submenu">
      <n-link to="/blog">
        <span>Blog</span>
      </n-link>
      <ul class="submenu">
        <li>
          <n-link to="/blog/blog-details">
            <span>Blog Details</span>
          </n-link>
        </li>
      </ul>
    </li> -->
  </ul>
</template>
