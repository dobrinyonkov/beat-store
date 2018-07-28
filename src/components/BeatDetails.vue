<template>
<div id="wrapper">
    <div class="mt-5">
        <div id="firstJmb" class="jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1 class="display-4 h1">Beat Name</h1>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr class="my-4">                        
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="player">
                            <div class="row">
                                <div class="col">
                                    <div class="demo-card-image mdl-card mdl-shadow--2dp">
                                        <div class="mdl-card__title mdl-card--expand"></div>
                                        <div class="mdl-card__actions">
                                            <span class="demo-card-image__filename">Beat Name</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">

                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <br>
                                    <hr>
                                    <app-player></app-player>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div class="mt-5 row">
                    <div class="col-4">
                        
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container">
            <h1 class="h1 price-list-title">PACKAGES</h1>
            <div class="row db-padding-btm db-attached">
                <div class="col-12 col-md-3 col-lg-3 col-xl-3">
                    <div class="db-wrapper">
                        <div class="db-pricing-eleven db-bk-color-one">
                            <div class="price"> <sup>$</sup>99 <small>per quarter</small>
                            </div>
                            <div class="type">BASIC</div>
                            <ul>
                                <li><i class="glyphicon glyphicon-print"></i>30+ Accounts</li>
                                <li><i class="glyphicon glyphicon-time"></i>150+ Projects</li>
                                <li><i class="glyphicon glyphicon-trash"></i>Lead Required</li>
                            </ul>
                            <div class="pricing-footer"> <a href="#" class="btn db-button-color-square btn-lg">ORDER</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3 col-lg-3 col-xl-3">
                    <div class="db-wrapper">
                        <div class="db-pricing-eleven db-bk-color-two popular">
                            <div class="price"> <sup>$</sup>199 <small>per quarter</small>
                            </div>
                            <div class="type">PREMIUM</div>
                            <ul>
                                <li><i class="glyphicon glyphicon-print"></i>30+ Accounts</li>
                                <li><i class="glyphicon glyphicon-time"></i>150+ Projects</li>
                                <li><i class="glyphicon glyphicon-trash"></i>Lead Required</li>
                            </ul>
                            <div class="pricing-footer"> <a href="#" class="btn db-button-color-square btn-lg">ORDER</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3 col-lg-3 col-xl-3">
                    <div class="db-wrapper">
                        <div class="db-pricing-eleven db-bk-color-three">
                            <div class="price"> <sup>$</sup>249 <small>per quarter</small>
                            </div>
                            <div class="type">EXTENDED PREMIUM</div>
                            <ul>
                                <li><i class="glyphicon glyphicon-print"></i>30+ Accounts</li>
                                <li><i class="glyphicon glyphicon-time"></i>150+ Projects</li>
                                <li><i class="glyphicon glyphicon-trash"></i>Lead Required</li>
                            </ul>
                            <div class="pricing-footer"> <a href="#" class="btn db-button-color-square btn-lg">ORDER</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3 col-lg-3 col-xl-3">
                    <div class="db-wrapper">
                        <div class="db-pricing-eleven db-bk-color-six popular">
                            <div class="price"> <sup>$</sup>599 <small>per quarter</small>
                            </div>
                            <div class="type">EXCLUSIVE</div>
                            <ul>
                                <li><i class="glyphicon glyphicon-print"></i>30+ Accounts</li>
                                <li><i class="glyphicon glyphicon-time"></i>150+ Projects</li>
                                <li><i class="glyphicon glyphicon-trash"></i>Lead Required</li>
                            </ul>
                            <div class="pricing-footer"> <a href="#" class="btn db-button-color-square btn-lg">ORDER</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import appPlayer from "@/components/AudioPlayer";
export default {
  components: {
    appPlayer
  }
};
</script>

<style scoped>
#wrapper {
  background: url("../assets/red-record.jpg") bottom;
  margin-top: -2em;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.title {
  background-color: #fff;
}
.demo-card-image.mdl-card {
  width: 200px;
  height: 200px;
  background: url("../assets/beat-poster.jpg") center / cover;
}
.demo-card-image > .mdl-card__actions {
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
}
.demo-card-image__filename {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
}

.h1 {
  font-weight: bolder;
  text-transform: uppercase;
  color: #303030;
}
.price-list-title {
  font-size: 3em;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.342);
}
.player {
  padding: 1.5em 2em;
  border-radius: 2px;
  box-shadow: 2px 2px 10px black;
  background: linear-gradient(
    to bottom right,
    rgb(19, 25, 32),
    rgba(14, 20, 27, 0.952)
  );
  width: 100%;
}
#firstJmb {
  padding-bottom: 4em;
  background: url("../assets/headphones.jpg") top/cover;
}
/*=============================================================
    Authour URL: www.designbootstrap.com
    
    http://www.designbootstrap.com/

    License: MIT     
========================================================  */

/*============================================================
BACKGROUND COLORS
============================================================*/
.db-bk-color-one {
  background-color: #7e1917;
}

.db-bk-color-two {
  background-color: #00bb78;
}

.db-bk-color-three {
  background-color: #1e453f;
}

.db-bk-color-six {
  background-color: #7b4d00;
}
/*============================================================
PRICING STYLES
==========================================================*/

.db-padding-btm {
  padding-bottom: 50px;
}
.db-button-color-square {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 0px;
  -webkit-border-radius: 0px;
  -moz-border-radius: 0px;
}

.db-button-color-square:hover {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
}

.db-pricing-eleven {
  margin-top: 50px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  color: #fff;
  line-height: 30px;
}

.db-pricing-eleven ul {
  list-style: none;
  margin: 0;
  text-align: center;
  padding-left: 0px;
}

.db-pricing-eleven ul li {
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
}

.db-pricing-eleven ul li i {
  margin-right: 5px;
}

.db-pricing-eleven .price {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 40px 20px 20px 20px;
  padding-top: 1em;
  font-size: 60px;
  font-weight: 900;
  color: #ffffff;
}

.db-pricing-eleven .price small {
  color: #b8b8b8;
  display: block;
  font-size: 12px;
  margin-top: 22px;
  
}

.db-pricing-eleven .type {
  background-color: #868686;
  padding: 50px 20px;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 30px;
  
}

.db-pricing-eleven .pricing-footer {
  padding: 20px;
  
}

.db-attached > .col-lg-4,
.db-attached > .col-lg-3,
.db-attached > .col-md-4,
.db-attached > .col-md-3,
.db-attached > .col-sm-4,
.db-attached > .col-sm-3 {
  padding-left: 0;
  padding-right: 0;
}

.db-pricing-eleven.popular {
  margin-top: 30px;
}

.db-pricing-eleven.popular .price {
  padding-top: 80px;
  
}
</style>
