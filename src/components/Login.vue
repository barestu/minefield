<template>
 <section class="login-block">
    <div class="container">
	<div class="row">
		<div class="col-md-4 login-sec">
		    <h2 class="text-center">Player 1</h2>
		    
  <!-- <div class="form-group">
    <label for="exampleInputEmail1" class="text-uppercase">Enter Your Name</label>
    <input type="text" class="form-control" placeholder="PLayer 1" name="player1">
    
  </div> -->

    
    <button type="submit" class="btn btn-login float-right" @click="player1Join()">JOIN</button>
  
  
		</div>

    <div class="col-md-4 login-sec">
		    <h2 class="text-center">Player 2</h2>
		    <form class="login-form">
  <!-- <div class="form-group">
    <label for="exampleInputEmail1" class="text-uppercase">Enter Your Name</label>
    <input type="text" class="form-control" placeholder="Player 2" name="player2">
    
  </div>
   -->
    <div class="form-check">
    <button  type="submit" class="btn btn-login float-right" @click="player1Join()">JOIN</button>
  </div>
  
</form>

		</div>


		<div class="col-md-8 banner-sec">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                 <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  </ol>
            <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <img class="d-block img-fluid" src="../assets/2.jpg" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
        <div class="banner-text">
            <h2>This is Heaven</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        </div>	
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid" src="../assets/4.jpg" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
        <div class="banner-text">
            <h2>This is Heaven</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        </div>	
    </div>
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid"  src="../assets/6.jpg" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
        <div class="banner-text">
            <h2>This is Heaven</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        </div>	
    </div>
  </div>
            </div>	   
		    
		</div>
	</div>
</div>
    </div>
</section>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

