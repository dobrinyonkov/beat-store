<template>
    <div id="demo" class="carousel slide" data-ride="carousel">

        <!-- Indicators -->
        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <!-- The slideshow -->
        <div class="carousel-inner container">

            <div class="carousel-item active">
                <div class="row">
                    <div class="col text-center">
                        <h2>Most recent tracks</h2>                    
                    </div>
                </div>

                <div class="row mx-auto">
                    <div class="col">
                        <beat-frame></beat-frame>
                    </div>
                    <div class="col">
                        <beat-frame></beat-frame>
                    </div>
                    <div class="col">
                        <beat-frame></beat-frame>
                    </div>
                </div>
                
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="col text-center">
                        <h2>Most recent tracks</h2>                    
                    </div>
                </div>
                
                <div class="row mx-auto">
                    <div class="col">
                        <beat-frame></beat-frame>
                    </div>
                    <div class="col">
                        <beat-frame></beat-frame>
                    </div>
                    <div class="col">
                        <beat-frame></beat-frame>
                    </div>
                </div>
                
            </div>

            <div class="carousel-item">
                <div class="row">
                    <div class="col text-center">
                        <h2>Most recent tracks</h2>                    
                    </div>
                </div>
                
                <div class="row mx-auto">
                    <div class="col">
                        <beat-frame></beat-frame>
                    </div>
                    <div class="col">
                        <beat-frame></beat-frame>
                    </div>
                    <div class="col">
                        <beat-frame></beat-frame>
                    </div>
                </div>
                
            </div>

        </div>

        <!-- Left and right controls -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <i class="fas fa-angle-left"></i>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
            <i class="fas fa-angle-right"></i>
        </a>

    </div>
</template>

<script>
import beatFrame from '@/components/BeatFrame'
export default {
    components: {
        beatFrame
    }
};
</script>

<style scoped>
.carousel-inner {
  padding-bottom: 1em;
}

beat-frame {
    box-shadow: 20px 10px 10px black;
}

h2 {
  margin-bottom: 0.5em;
  font-size: 1.6em;
  font-weight: bold;
  text-transform: uppercase;
}

.fas {
  font-size: 2em;
  color: black;
}


</style>
