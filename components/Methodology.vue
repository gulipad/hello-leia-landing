<template>
  <section class="section purpose-section is-small">
    <div class="container">
      <div class="columns is-spaced">
        <div class="column is-one-third">
          <div class="content">
            <h2 class="title-serif is-size-1">2. Methodology</h2>
            <p class="is-size-4">/mɛθəˈdɒlədʒi/</p>
            <p class="is-size-5 is-italic"> noun</p>
            <p class="is-size-6 has-text-weight-light">1. a system of methods used in a particular area of study or activity.</p>
          </div>
        </div>
        <div class="column is-half">
          <div class="content">
            <p class="is-size-5 has-text-weight-light has-text-grey"> <span class="shadow is-purple">Hello Leia</span> is not a startup. It is not a commercial endeavour. It is an <span class="shadow is-turquoise">exploration</span> of design and technology, to dive deep into what makes a digital product connect better with <span class="shadow is-danger">humans</span>. This exploration is based on the <a href="https://medium.com/the-happy-startup-school/beyond-mvp-10-steps-to-make-your-product-minimum-loveable-51800164ae0c" class="shadow is-success"> Minumum Lovable Product</a>. We build products with just the features they need, without neglecting the human element, supported by great <span class="shadow is-warning">design</span>. 
            <p class="is-size-5 has-text-weight-light has-text-grey">To do this, we have selected 3 <span class="shadow is-turquoise">Agents</span> and 3 <span class="shadow is-purple">Technologies</span>. Our method combines these Technologies to build real solutions for these Agents.</p>
          </div>
        </div>
      </div>
      <br> <!-- This is a bit hacky -->
      <div class="columns is-centered">
        <div class="column is-11">
    	    <h3 class="is-size-2 title-serif">Technologies</h3>
          <hr class="sub-category-underliner hr-technologies"> 
        </div>
      </div>
      <br> <!-- This is a bit hacky -->
      <div class="columns is-centered">
        <div class="column is-4">
          <div class="content">
            <img class="is-centered" src="../static/logo-main.svg">
            <h3 class="title-serif is-size-4">Blockchain</h3>
            <p class="hello has-text-grey has-text-weight-light is-size-5"> To advocate for transparency, traceability, governability and collaborative crowd funding.</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="content">
            <img src="../static/logo-main.svg">
            <h3 class="title-serif is-size-4">Conversational Interfaces</h3>
            <p class="hello has-text-grey has-text-weight-light is-size-5"> To communicate better and farther across platforms and devices.</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="content">
            <img src="../static/logo-main.svg">
            <h3 class="title-serif is-size-4">Data Science</h3>
            <p class="hello has-text-grey has-text-weight-light is-size-5"> To leverage ML to optimize solutions to real-world problems using computer science.</p>
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-11">
          <h3 class="is-size-2 title-serif">Agents</h3>
          <hr class="sub-category-underliner hr-agents">
          
        </div>
      </div>
      <br> <!-- This is a bit hacky -->
      <div class="columns is-centered">
        <div class="column is-4">
          <div class="content">
            <img class="is-centered" src="../static/logo-main.svg">
            <h3 class="title-serif is-size-4">Blockchain</h3>
            <p class="hello has-text-grey has-text-weight-light is-size-5"> To advocate for transparency, traceability, governability and collaborative crowd funding.</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="content">
            <img src="../static/logo-main.svg">
            <h3 class="title-serif is-size-4">Conversational Interfaces</h3>
            <p class="hello has-text-grey has-text-weight-light is-size-5"> To communicate better and farther across platforms and devices.</p>
          </div>
        </div>
        <div class="column is-4">
          <div class="content">
            <img src="../static/logo-main.svg">
            <h3 class="title-serif is-size-4">Data Science</h3>
            <p class="hello has-text-grey has-text-weight-light is-size-5"> To leverage ML to optimize solutions to real-world problems using computer science.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

  hr.sub-category-underliner {
    height: 1px;
    margin: 0; 
  }

  hr.sub-category-underliner.hr-technologies {
    background-color: rgba(184,107,255,.2);
    height: 1px;
    margin: 0; 
  }

  hr.sub-category-underliner.hr-agents {
    background-color: rgba(36,177,209,.2);
    height: 1px;
    margin: 0; 
  }
	.title-serif {
	  font-family: Georgia, serif;
	}

  .columns.is-spaced {
    justify-content: space-between;
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