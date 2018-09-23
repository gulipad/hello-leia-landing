<template>
	<section class="section is-header">
		<div class="container">
      <nav class="navbar">
        <a href="/">
          <img class="image" src="../static/logo-main.svg">  
        </a>
				<div class="navbar-menu">
					<div class="navbar-end">
						<div class="navbar-item ">
							<a href="#purpose"
                class=" shadow is-purple is-link has-text-grey"
                v-smooth-scroll="{duration: 2000, offset: 0}">Purpose</a>
						</div>
						<div class="navbar-item">
							<a href="#methodology"
                class="is-link has-text-grey shadow is-warning"
                v-smooth-scroll="{duration: 2000, offset: 0}">Methodology</a>
						</div>
						<div class="navbar-item">
							<a href="#projects"
                class="is-link has-text-grey shadow is-danger"
                v-smooth-scroll="{duration: 2000, offset: 0}">Projects</a>
						</div>
						<!-- <div class="navbar-item">
							<a href=""
              class="is-link has-text-grey shadow is-success">Team</a>
						</div> -->
						<div class="navbar-item">
							<a href="#contact"
                class="is-link has-text-grey shadow is-turquoise"
                v-smooth-scroll="{duration: 2000, offset: 0}">Contact</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</section>
</template>

<style scoped>
  .navbar-end .navbar-item {
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .navbar-end .navbar-item:hover {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
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
</style>