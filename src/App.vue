<template>
  <div id="app">
      <app-navigation></app-navigation>
    <main>
      <div class="row">
        <div class="router">
          <router-view></router-view>
        </div>
      </div>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
require("material-design-lite");
import appNavigation from "@/components/Navigation";
import appFooter from "@/components/Footer";
import { mapGetters, mapActions } from "vuex";

export default {
  created() {
    this.$store.dispatch('initBeats');
},
  name: "app",
  components: {
    appNavigation,
    appFooter
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://code.getmdl.io/1.2.1/material.blue-red.min.css");

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  max-width: 100%;
  height: 100%;
  background: url("./assets/mountain.jpg") center / cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.router {
  width: 100%;
  margin-top: 3em;
  z-index: 5;
}

@media (max-width: 600px) {
  body {
    height: 100%;
  }
  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
  }
}
</style>
