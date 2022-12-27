import { createGlobalStyle } from "styled-components";




const GlobalStyles = createGlobalStyle`

/********************
*                   *
*   1.Helper        *
*   2.Navbar        *
*   3.Blog          *
*   4.Pagination    *
*   5.Responsive    *
*                   *
*********************/

body {
    font-family: 'Nunito Sans', sans-serif;
    margin: 35px;
    background-color: #f0f4f7;
}

html {
    background-color: #e1e6ed;
}

a,
a:hover {
    text-decoration: none !important;
    outline: none !important;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 600;
}


/*===========================
    1.HELPER
=============================*/

.h-100vh {
    height: calc(100vh - 70px);
}

.subtitle {
    line-height: 28px;
    font-size: 16px;
}

.page-title h2,
.page-title h3 {
    line-height: 50px;
    margin-top: 36px;
    font-weight: 700;
}

.btn-outline-custom {
    background-color: transparent;
    background-image: none;
}

.btn {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
    border-radius: 2px;
    font-weight: 600;
    padding: .6rem .8rem;
}

.btn-outline-custom.active,
.btn-outline-custom:hover,
.btn-outline-custom:active,
.show>.btn-outline-custom.dropdown-toggle {
    color: #fff;
}

.btn-outline-custom.focus,
.btn-outline-custom:focus {
    box-shadow: none;
}


/*===========================
    2.NAVBAR
=============================*/


/* Metis Menu css */

.metismenu {
    padding: 0 0 0 20px;
    list-style-type: none;
}

.metismenu ul {
    padding: 0;
}

.metismenu ul li {
    list-style: none;
}

.nav-second-level li a,
.nav-thrid-level li a {
    padding: 8px 20px 8px 20px;
    color: #a0a0a0;
    transition: all 0.5s;
    display: block;
    text-decoration: none;
    font-size: 14px;
}

.side-menu {
    width: 280px;
    z-index: 10;
    /*background: #fff;*/
    bottom: 35px;
    margin-top: 0;
    padding-bottom: 30px;
    position: absolute;
    top: 35px;
}

#sidebar-menu > ul > li > a {
    color: #000;
    display: block;
    padding: 14px 20px;
    text-decoration: none !important;
    margin: 2px 0;
    font-size: 1rem;
    position: relative;
    font-weight: 600;
    transition: all 0.5s;
}

.topbar .topbar-left {
    float: left;
    position: relative;
    width: 240px;
    z-index: 1;
}

.logo {
    padding: 40px;
}

.logo p {
    font-size: 14px;
    margin: 30px 0 0 0;
}

.nav-second-level > li > a {
    text-decoration: none !important;
}

.button-menu-mobile {
    border: none;
    color: #000;
    display: inline-block;
    width: 60px;
    background-color: transparent;
    font-size: 26px;
    outline: none !important;
    float: right;
}

button,
input,
select,
textarea {
    line-height: inherit;
}

.menu-social li a {
    padding: 5px !important;
    color: #000;
}

.menu-social {
    padding: 28px 24px;
    overflow: hidden;
    /*position: absolute;*/
    bottom: 0px;
}

.menu-left {
    position: absolute;
}


.copyright-box {
    text-align: center;
    margin-top: 30%;
}

.topbar-mobile {
    display: none;
}

.topbar-mobile .logo {
    padding: 30px 40px;
}

body.enlarged .side-menu {
    display: block;
    position: fixed;
    background-color: #fff;
    top: 0;
    bottom: 0;
    overflow: auto;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
}

/*===========================
    3.BLOG
============================*/

.page-wrapper {
    margin-left: 280px;
    background-color: #ffffff;
    padding: 0 20px;
}

.post {
    margin: 0 0 45px;
}

.post + .post {
    border-top: 1px solid rgba(238, 238, 238, .7);
    padding-top: 50px;
}

.post-preview {
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
    margin: 0 0 25px;
}

.post-preview:hover {
    opacity: .7;
}

.post-header {
    margin: 0 0 30px;
}

.post-title {
    font-size: 22px;
    margin: 0 0 10px;
}

.post-title a {
    color: #333;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
}

.post-meta {
    list-style: none;
    padding: 0;
    margin: 0;
    opacity: .7;
    color: #000;
    font-weight: 600;
}

.post-meta > li {
    display: inline-block;
    margin-right: 30px;
    font-size: 14px;
}

.post-meta > li:last-child {
    margin-right: 0;
}

.post .post-meta a,
.post-meta a {
    color: #000;
    transition: all 0.5s;
    font-weight: 600;
}

.post-tags {
    margin: 40px 0 0;
}

.post-tags a {
    background-color: #f5f5f5;
    border-radius: 2px;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 7px;
    color: #303133;
    padding: 7px 8px 5px 10px;
    margin: 5px 10px 5px 0;
    transition: all 0.5s;
}

.post-tags a:hover,
.post-tags a:focus {
    color: #fff;
}

.post-content h1,
.post-content h2,
.post-content h3,
.post-content h4,
.post-content h5,
.post-content h6 {
    margin: 30px 0 20px;
}

.post-content h1:first-child,
.post-content h2:first-child,
.post-content h3:first-child,
.post-content h4:first-child,
.post-content h5:first-child,
.post-content h6:first-child {
    margin-top: 0;
}

.post-content p,
.post-content ul,
.post-content ol {
    margin: 0 0 20px;
    line-height: 24px;
    font-size: 15px;
}

.post-content ul,
.post-content ol {
    margin-left: 40px;
}

.post-content ul {
    list-style-type: disc;
}

.post-content ol {
    list-style-type: decimal;
}

.sidebar {
    padding-left: 30px;
}

.sidebar .widget:last-child {
    border: 0;
    padding: 0;
}

.widget_search form {
    position: relative;
}

.search-button {
    position: absolute;
    top: 0;
    height: 100%;
    right: 10px;
    background-color: transparent;
    border: none;
    font-size: 20px;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
}

.search-button:focus,
.search-button.focus,
.search-button.active.focus,
.search-button.active:focus,
.search-button:active.focus,
.search-button:active:focus {
    outline: 0;
}

.widget-title {
    position: relative;
    font-size: 14px;
    margin: 0 0 25px;
    font-weight: 700;
    text-transform: uppercase;
}

.widget-title:before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid #eee;
}

.widget-title:after {
    content: "";
    display: block;
    width: 35px;
    z-index: 1;
    position: relative;
    margin: 20px auto 25px 0px;
}

.widget {
    margin: 0 0 40px;
    font-size: 14px;
}

.widget ul,
.widget ol {
    list-style: none;
    padding: 0;
    margin: 0;
}

.widget ul li,
.widget ol li {
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.widget ul li:last-child,
.widget ol li:last-child {
    border: 0;
}

.widget ul li a,
.widget ol li a {
    color: #333333;
    transition: all 0.5s;
}

.widget select {
    width: 100%;
    box-shadow: none;
    border-radius: 2px;
    border-color: #eee;
    padding: 12px 15px;
    height: 49px;
    font-size: 14px;
}

.widget_archive ul li a,
.widget_categories ul li a {
    margin-right: 5px;
}

/* About Widget */
.about-widget img {
    margin-bottom: 20px;
    max-width: 100%;
    width: 160px;
    height: auto;
}

.about-widget p{
    line-height: 24px;  
}

.post-date {
    display: block;
    opacity: .7;
}

.tagcloud > a {
    background: #f5f5f5;
    border-radius: 2px;
    color: #303133;
    font-weight: 700;
    display: inline-block;
    font-size: 9px;
    letter-spacing: 1px;
    margin: 5px 10px 5px 0;
    padding: 7px 8px 5px 10px;
    text-transform: uppercase;
    transition: all 0.5s;
}

.tagcloud > a:hover {
    color: #fff;
}

.widget_recent_entries_custom ul li {
    border-bottom: 1px solid rgba(238, 238, 238, .7);
    margin-bottom: 15px;
    padding-bottom: 15px;
}

.widget_recent_entries_custom .wi {
    float: left;
    width: 64px;
}

.widget_recent_entries_custom .wb {
    padding-top: 2px;
    margin-left: 84px;
}

.widget_recent_entries_custom .wb a {
    color: #303133;
}

.text-widget-des {
    line-height: 24px;
}

.post-tags {
    margin: 40px 0 0;
}

.post-author-box {
    padding: 20px;
    border: 1px solid #eee;
}

.media-heading {
    font-size: 16px;
}

.media-heading a {
    color: #000;
    transition: all 0.5s;
}

.post-author-box .socials li a:hover {
    color: #ffffff !important;
}

.socials li:first-child {
    margin-left: 0;
}

.socials li a {
    display: inline-block;
    margin-top: 0px;
    width: 42px;
    height: 42px;
    line-height: 42px;
    font-size: 15px;
    transition: all 0.5s;
    background-color: #4a4a4a;
    border-radius: 50%;
    color: #fff !important;
}

.form-control {
    box-shadow: none;
    border-radius: 2px;
    padding: 12px 15px;
    height: 49px;
    font-size: 14px;
}

.form-control:focus {
    border-color: #777;
    outline: none;
    box-shadow: none;
}

textarea.form-control {
    height: auto;
}

.media-body a.reply-btn {
    float: right;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 700;
    color: #777;
}

.media-body p.post-date {
    margin-bottom: 20px;
    font-size: 12px;
}

.blog-detail-description p {
    line-height: 24px;
}

.media,
.media-list {
    margin-top: 50px;
}

.post-author-box .socials li a {
    width: 36px;
    height: 36px;
    line-height: 34px;
    background-color: #ffffff;
    color: #070e14 !important;
    border: 1px solid #eee;
}

.socials li {
    display: inline-block;
    margin: 0 4px 5px;
    text-align: center;
    cursor: pointer;
}

.post-tags a {
    background-color: #f5f5f5;
    border-radius: 2px;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 7px;
    color: #303133;
    padding: 7px 8px 5px 10px;
    margin: 5px 10px 5px 0;
}

.blockquote {
    font-size: 16px;
    font-style: italic;
    padding: 20px;
}

.blockquote-text {
    line-height: 24px;
}

.blockquote:before {
    content: "\F756";
    float: left;
    position: relative;
    top: 0px;
    left: 0;
    color: #cdced0;
    font-family: Material Design Icons;
    font-size: 44px;
    font-weight: 400;
    line-height: 24px;
}

.post-tags a:hover,
.post-tags a:focus {
    background: #d09c8e;
    color: #fff;
}

.post-content h1,
.post-content h2,
.post-content h3,
.post-content h4,
.post-content h5,
.post-content h6 {
    margin: 30px 0 20px;
}

.post-content h1:first-child,
.post-content h2:first-child,
.post-content h3:first-child,
.post-content h4:first-child,
.post-content h5:first-child,
.post-content h6:first-child {
    margin-top: 0;
}

.post-content p,
.post-content ul,
.post-content ol {
    margin: 0 0 20px;
    line-height: 26px;
}

.post-content ul,
.post-content ol {
    margin-left: 40px;
}

.post-content ul {
    list-style-type: disc;
}

.post-content ol {
    list-style-type: decimal;
}

.related-post .post-header a {
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    transition: all 0.5s;
}

.related-post {
    margin-top: 30px;
}

.owl-nav {
    height: 0;
    width: 100%;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 50%;
}

.quote-post .blockquote {
    border-radius: 5px;
    padding: 30px;
}

.quote-post .blockquote-text {
    line-height: 32px;
}

.quote-post .blockquote:before {
    padding-right: 10px;
}

.link-post {
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
    padding: 20px;
    border-radius: 5px;
}

.link-post i {
    font-size: 48px;
    display: block;
}

.link-post a {
    color: #fff;
}

.link-post-content {
    border: 3px solid rgba(255, 255, 255, 0.3);
    padding: 10px;
}

.error-page h1 {
    font-size: 98px;
    font-weight: 700;
    line-height: 150px;
    text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;
}

.home-center {
    display: table;
    width: 100%;
    height: 100%;
}

.home-desc-center {
    display: table-cell;
    vertical-align: middle;
}


/*======================
    4.Pagination
=======================*/

.pagination > li {
    display: inline-block;
    margin-right: 2px;
}

.pagination > li:first-child > a,
.pagination > li:first-child > span {
    border-radius: 3px;
}

.pagination {
    display: inline-block;
}

.pagination > li > a,
.pagination > li > span {
    border: 2px solid #eeeeee;
    border-radius: 3px;
    color: #777777;
    display: block;
    float: none;
    padding: 8px 15px;
    transition: all 0.5s;
}

.pagination > .active > a,
.pagination > .active > span {
    background: #27cbc0 none repeat scroll 0 0;
    border-color: #27cbc0;
    color: #ffffff;
}

.pagination > li > a:hover,
.pagination > li > a:focus,
.pagination > li > span:hover,
.pagination > li > span:focus {
    background: #666 none repeat scroll 0 0;
    border-color: #666;
    color: #ffffff;
}

.pagination > .active > a,
.pagination > .active > a:focus,
.pagination > .active > a:hover,
.pagination > .active > span,
.pagination > .active > span:focus,
.pagination > .active > span:hover {
    background-color: #666;
    border-color: #666;
    color: #fff;
    cursor: default;
    z-index: 3;
}

/*======================
    5.Responsive
=======================*/

@media (max-width: 991px) {
    .menu-social {
        position: relative;
    }
    .page-wrapper {
        margin-left: 0px;
    }
    body {
        margin: 0px;
    }
    .media-body a.reply-btn {
        font-size: 12px;
    }
    .sidebar {
        padding-left: 0;
        margin-top: 50px;
    }
}

@media (max-width: 768px) {
    .side-menu {
        display: none;
    }
    .h-100vh {
        height: auto;
    }
    .topbar-mobile {
        display: block;
    }
    .pagination > li > a, .pagination > li > span {
        padding: 5px 10px;
    }
}

@media (max-width: 767px) {
    .media img{
        height: 45px;
        width: 45px;
    }
}

@media (max-width: 419px){
    .topbar-mobile .logo {
        padding: 20px 20px;
    }
}









.widget-title:after {
    border-bottom: 1px solid #0db3e3;
}

.quote-post .blockquote {
    border: 2px solid #0db3e3;
}

.quote-post .blockquote:before,.related-post .post-header a:hover,.media-heading a:hover,.widget ul li a:hover,
.widget ol li a:hover,.search-button:hover,.post-meta a:hover,.post-meta a:focus,.post-title a:hover,.btn-outline-custom{
    color: #0db3e3;
}

.link-post,.post-author-box .socials li a:hover,.tagcloud > a:hover,.post-tags a:hover,.post-tags a:focus,.btn-outline-custom.active,
.btn-outline-custom:hover,.btn-outline-custom:active,.show>.btn-outline-custom.dropdown-toggle{
    background-color: #0db3e3;
}

.widget select:focus,.post-author-box .socials li a:hover,.btn-outline-custom.active,.btn-outline-custom:hover,
.btn-outline-custom:active,.show>.btn-outline-custom.dropdown-toggle,.btn-outline-custom{
    border-color: #0db3e3;
}


.bottom-post{
    display: flex;
    justify-content: space-between;
}
`;


export default GlobalStyles;
















