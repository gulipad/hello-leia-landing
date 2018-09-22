<template>
	<section class="hero is-medium">
		<div class="hero-body">
	    <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-half">
            <div class="content">
              <h2 class="title-serif is-size-2">The future. For <vue-typer
                :text='["everyone.","charities.", "citizens.", "businesses.", "everyone."]'
                :repeat='1'
                erase-style='backspace'
                :erase-delay= '50'
                ></vue-typer></h2>
              <p class="hello has-text-grey is-size-4"> We are firm believers in tech as the future-shaping force that <span class="shadow is-purple">drives progress</span>. Our aim is to <span class="shadow is-success">blur the lines</span> between <span class="shadow is-danger">technology</span>, <span class="shadow is-warning"> design</span>, and <span class="shadow is-turquoise">humanism</span> by bringing high-tech products to the <span class="shadow is-danger">people</span>.</p>
              <p class="hello has-text-grey is-size-4">Welcome to <span class="shadow is-purple">Hello Leia</span>.</p>
            </div>
          </div>
          <div class="column is-half">
            
          </div>
        </div>
	    </div>
		</div>
	</section>
</template>

<style scoped>

.title-serif {
  font-family: Georgia, serif;
}

.vue-typer .custom.char {
  color: #363636;
}

.shadow.is-purple {
    -webkit-box-shadow: inset 0 -6px 0 rgba(184,107,255,.2);
    box-shadow: inset 0 -6px 0 rgba(184,107,255,.2);
}

.shadow.is-warning {
  -webkit-box-shadow: inset 0 -6px 0 rgba(255,221,87,.2);
  box-shadow: inset 0 -6px 0 rgba(255,221,87,.2);
}

.shadow.is-danger {
  -webkit-box-shadow: inset 0 -6px 0 rgba(255,74,110,.2);
  box-shadow: inset 0 -6px 0 rgba(255,74,110,.2);
}

.shadow.is-turquoise {
  -webkit-box-shadow: inset 0 -6px 0 rgba(36,177,209,.2);
  box-shadow: inset 0 -6px 0 rgba(36,177,209,.2);
}

.shadow.is-success {
  -webkit-box-shadow: inset 0 -6px 0 rgba(35,209,153,.2);
  box-shadow: inset 0 -6px 0 rgba(35,209,153,.2);
}

/*.hello {
  font-size: 1.5rem;
  color: grey;
}*/
/*section {
	background-image: url('../static/background.svg');
	background-position: top right;
	background-repeat: no-repeat;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	right: 0;
}*/
	
</style>