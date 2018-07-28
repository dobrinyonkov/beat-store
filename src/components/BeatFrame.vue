<template>
    <div class="demo-card-square mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title mdl-card--expand">
            <h2 class="mdl-card__title-text">Beat Name</h2>
        </div>
        <div class="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
        </div>
        <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            View Updates
            </a>
        </div>
    </div>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      componentHandler.upgradeAllRegistered();
    }
  }
};
</script>

<style scoped>
.demo-card-square.mdl-card {
  margin-top: 3.2em;
  margin-left: 2.3em;
  width: 300px;
  height: 300px;
}
.demo-card-square > .mdl-card__title {
  color: #fff;
  background: url("../assets/beat-poster.jpg");
  background-size: 300px;
}
@media screen and (max-width: 600px) {
  .demo-card-square.mdl-card {
    margin-top: 2em;
    margin-left: 1.2em;
    width: 280px;
    height: 250px;
  }
  .demo-card-square > .mdl-card__title {
    background-size: 280px;
  }
}
</style>
