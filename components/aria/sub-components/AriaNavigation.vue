<template>
  <ul>
    <li>
      <n-link to="/">
        <span>Home</span>
      </n-link>
    </li>
    <li>
      <n-link to="/resources">
        <span>Resources</span>
      </n-link>
    </li>
    <li class="has-children has-children--multilevel-submenu">
      <n-link to="/about">
        <span>Company</span>
      </n-link>
      <ul class="submenu">
        <li>
          <n-link to="/about">
            <span>About Us</span>
          </n-link>
        </li>
        <li>
          <n-link to="/leadership">
            <span>Leadership</span>
          </n-link>
        </li>
      </ul>
    </li>
    <li class="has-children has-children--multilevel-submenu">
      <n-link to="/igg-service">
        <span>Services</span>
      </n-link>
      <ul class="submenu">
        <li>
          <n-link to="/igg-service">
            <span>IgG Antibody Testing</span>
          </n-link>
        </li>
        <li>
          <n-link to="/scope-service">
            <span>Scope of Testing</span>
          </n-link>
        </li>
        <li>
          <n-link to="/markets-service">
            <span>Markets</span>
          </n-link>
        </li>
        <li>
          <n-link to="/advantage-service">
            <span>Aria Advantage</span>
          </n-link>
        </li>
      </ul>
    </li>
    <li class="has-children has-children--multilevel-submenu">
      <n-link to="/contact">
        <span>Contact</span>
      </n-link>
      <ul class="submenu">
        <li>
          <n-link to="/contact">
            <span>Contact Us</span>
          </n-link>
        </li>
        <li>
          <n-link to="/portal">
            <span>Portal</span>
          </n-link>
        </li>
        <li>
          <a href="https://ariadxs.bamboohr.com/jobs/?source=filesusr">
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
