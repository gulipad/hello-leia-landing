<template>
  <section class="section purpose-section is-small">
    <div class="container">
      <div class="columns is-spaced">
        <div data-aos="fade-in" class="column is-one-third">
          <div class="content">
            <h2 class="title-serif is-size-1">4. About me</h2>
            <p class="is-size-4">/UHbOUt mEE/</p>
            <p class="is-size-5 is-italic">noun</p>
            <p class="is-size-6 has-text-weight-light">1. who I am and what I do.</p>
          </div>
        </div>
        <div data-aos="fade-in" class="column is-half">
          <div class="content">
            <p class="is-size-5 has-text-weight-light has-text-grey"> A varied background, including <span class="shadow is-success">engineering</span>, <span class="shadow is-warning">design</span> and <span class="shadow is-purple">mathematics</span>, we build digtal solutions with a purpose.</p>
            <p class="is-size-5 has-text-weight-light has-text-grey">To take digital humanism to the next level.</p>
          </div>
        </div>
      </div>
      <br> <!-- This is a bit hacky -->
      <div class="columns">
        <div data-aos="fade-up" class="column is-one-half">
          <div class="card">  
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-128x128">
                    <img class="is-rounded" src="../static/guli.png" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Ignacio Moreno Pubul</p>
                  <p class="subtitle is-6">Co-founder @Capchase</p>
                  <div class="tags">
                    <div class="tag is-medium is-light">Aerospace Engineer</div>
                    <a class="is-brand is-size-3 align-hack is-linkedin" href="https://www.linkedin.com/in/imorenopubul/" target="_blank" rel="nofollow">
                      <font-awesome-icon :icon="['fab', 'linkedin']"/>
                    </a>
                  </div>
                </div>
              </div>
              <div class="content">
                Aerospace Engineer turned Developer turned Product Manager. I take learnings from my job at a high-growth startup to design, build, and deploy beautiful products. My spare time is spent surfing, playing football, or making music. Technovation volunteer.
              </div>
            </div>
          </div>
        </div>
      </div>
      <br>
      <br>
      <div data-aos="fade-in" class="level">
        <div class="level-item">
          <img class="image is-64x64" src="../static/berkeley.jpg">
        </div>
        <div class="level-item">
          <img class="image is-64x64" src="../static/ironhack.png">
        </div>
        <div class="level-item">
          <img class="image is-64x64" src="../static/airbus.jpeg">
        </div>
        <div class="level-item">
          <img class="image is-64x64" src="../static/nova.png">
        </div>
        <div class="level-item">
          <img class="image is-64x64" src="../static/politecnica.png">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  
  img.border-hack {
    border-radius: 10px 10px 0 0;
  }

  .align-hack {
    margin-top: -9px;
  }
  
  .is-linkedin:hover {
    color: #0077B5;
  }

  .is-linkedin:hover {
    color: #283E4A;
  }

  .card {
    box-shadow: 0 5px 14px rgba(10, 10, 10, 0.1), 0 0 0 0px rgba(10, 10, 10, 0.1);
    border-radius: 10px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;  
    -webkit-transition-property: transform;
    transition-property: all;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  .card:hover {
    box-shadow: 0 5px 14px rgba(10, 10, 10, 0.3), 0 0 0 0px rgba(10, 10, 10, 0.1);
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }

  .title-serif {
    font-family: Georgia, serif;
  }

  .columns.is-spaced {
    justify-content: space-between;
  }

  .shadow.is-purple {
      -webkit-box-shadow: inset 0 -6px 0 rgba(184,107,255,.2);
      box-shadow: inset 0 -6px 0 rgba(184,107,255,.2);
  }

  .shadow.is-warning {
    -webkit-box-shadow: inset 0 -6px 0 rgba(255,221,87,.2);
    box-shadow: inset 0 -6px 0 rgba(255,221,87,.2);
  }

  .shadow.is-success {
    -webkit-box-shadow: inset 0 -6px 0 rgba(35,209,153,.2);
    box-shadow: inset 0 -6px 0 rgba(35,209,153,.2);
  }
</style>
