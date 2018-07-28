<template>
    <div id="wrapper">
        <div class="row">
            <div class="col">
                <div id="firstJmb" class="jumbotron">
                    <div class="container">
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4">
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p class="lead">
                        <a class="btn btn-danger btn-lg" href="#" role="button">Learn more</a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div id="carousel" class="jumbotron">
                <app-carousel></app-carousel>
            </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div id="noBackColor" class="container text-center">
                    <div class="center">
                        <div id="logo">
                            <h1 class="display-4"><b>LOOPER</b><strong>Store</strong></h1>
                        </div>
                        <img src="../assets/logo.png" width="150" alt="">
                        <hr class="my-4">
                        <p>It uses utility classes for typography and spacing to space content out within the large.</p>
                        <p> Want to work together ?</p>
                        <p class="lead">
                            <a class="btn btn-danger btn-lg" id="contact-me-btn" href="#" role="button">Contact Me</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div id="secondJmb" class="jumbotron">
                    <div class="container">
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4">
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import appCarousel from "@/components/Carousel";

export default {
  data() {
    return {};
  },
  components: {
    appCarousel
  }
};
</script>

<style scoped>
.jumbotron {
  margin-bottom: 0;
}
#carousel {
  background-color: whitesmoke;
}
#noBackColor {
  padding: 4em 0em;
}
.center {
  margin: auto;
  width: 50%;
  color: white;
}
#firstJmb {
  padding-top: 7em;
  height: 30em;
  color: aliceblue;
  background: url("../assets/beat-making-jmb-wallp.jpg") center;
  background-size: 60%;
}

#firstJmb h1,
button {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
#secondJmb p,
h1,
button {
  font-family: Arial, Helvetica, sans-serif;
}

.my-4 ~ p {
  margin-bottom: 2em;
}
@media (max-width: 600px) {
  #firstJmb {
    background-size: 300%;
  }
}
b {
  font-weight: bold;
}
#logo {
  padding: 1em;
  width: 100%;
  border-radius: 2px;
  background-color: rgb(0, 0, 0);
  margin-bottom: 1em;
}
strong {
    color: #DC004E
}

@media (max-width: 600px) {
  #logo {
    padding: 1em;
    width: 100%;
    border-radius: 2px;
    background-color: rgb(0, 0, 0);
    margin-bottom: 1em;
  }
  #logo h1 {
      font-size: 1em;
  }
}
</style>
