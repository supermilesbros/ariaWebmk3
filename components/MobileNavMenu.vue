<template>
  <div class="mobile-navigation">
    <nav id="offcanvas-navigation" class="offcanvas-navigation">
      <ul>
        <li>
          <n-link to="/">
            <span>Home</span>
          </n-link>
        </li>
        <li>
          <n-link to="/">
            <span>Laboratory</span>
          </n-link>
        </li>
        <li class="mobile-nav-fix">
          <n-link to="/about">
            <span>Overview</span>
          </n-link>
        </li>
        <li class="mobile-nav-fix">
          <n-link to="/advantage-service">
            <span>Aria Advantage</span>
          </n-link>
        </li>
        
        <li>
          <n-link to="/resources">
            <span>COVID-19</span>
          </n-link>
        </li>

        <!-- hide billing for the time being -->
        <!-- <li>
      <n-link to="/billing">
        <span>Billing</span>
      </n-link>
    </li> -->
        <li>
          <n-link to="/Portal">
            <span>Results Portal</span>
          </n-link>
        </li>
        <li>
          <n-link to="/contact">
            <span>Contact Us</span>
          </n-link>
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
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MobileNavMenu',
  mounted () {
    const offCanvasNav = document.querySelector('#offcanvas-navigation')
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu')
    const anchorLinks = offCanvasNav.querySelectorAll('a')

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML('beforebegin', "<span class='menu-expand'><i></i></span>")
    }

    const menuExpand = offCanvasNav.querySelectorAll('.menu-expand')
    const numMenuExpand = menuExpand.length

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener('click', (e) => { sideMenuExpand(e) })
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener('click', () => { closeMobileMenu() })
    }

    const sideMenuExpand = (e) => {
      e.currentTarget.parentElement.classList.toggle('active')
    }
    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu')
      offcanvasMobileMenu.classList.remove('active')
    }
  }
}
</script>

<style lang="scss">
    @import '../assets/scss/_variables.scss';

    /* offcanvas mobile menu */
    .mobile-navigation {
        padding: 30px 20px;
    }
    .mobile-nav-fix {
      padding-left: 10px;
      margin-top: -10px;
    }
    .offcanvas-navigation {
         ul {
            li {
                &.menu-item-has-children {
                    .sub-menu {
                        height: 0;
                        visibility: hidden;
                        opacity: 0;
                        transition: 0.3s;
                    }
                    &.active {
                        .sub-menu {
                            height: 100%;
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }
                a {
                    color: $white;
                    font-size: 14px;
                    padding: 10px 0;
                    display: block;
                    &:hover {
                        color: $theme-color--two;
                    }
                }
            }
        }

        ul {
            &.sub-menu {
                margin-left: 15px;
                transition: 0.4s;
                li {
                    a {
                        color: $white;
                        font-size: 13px;
                        padding: 5px 0;
                        &:hover {
                            color: $theme-color--two;
                        }
                    }
                }
            }
            li {
                a {
                    text-transform: uppercase;
                }

                &.menu-item-has-children {
                    position: relative;
                    display: block;
                    a {
                        display: inline-block;
                    }

                    &.active {
                        .menu-expand {
                            background-color: rgba($white, 0.2);
                            i {
                                &:before {
                                    transform: rotate(0);
                                }
                            }
                        }
                    }

                    .menu-expand {
                        top: 5px;
                        right: 0;
                        width: 35px;
                        height: 35px;
                        cursor: pointer;
                        line-height: 35px;
                        position: absolute;
                        text-align: center;
                        background-color: rgba($white, 0.1);
                        &:hover {
                            background-color: rgba($white, 0.2);
                        }

                        i {
                            display: block;
                            border-bottom: 1px solid #ffffff;
                            position: relative;
                            width: 10px;
                            text-align: center;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            &:before {
                                width: 100%;
                                content: "";
                                border-bottom: 1px solid $white;
                                display: block;
                                position: absolute;
                                top: 0;
                                transform: rotate(90deg);
                                transition: 0.4s;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
