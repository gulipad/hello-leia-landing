<template>
  <section class="section purpose-section is-small">
    <div class="container">
      <div class="columns is-spaced">
        <div data-aos="fade-in" class="column is-two-fifths">
          <div class="content">
            <h2 class="title-serif is-size-1">Contact</h2>
            <p class="is-size-5 has-text-weight-light has-text-grey">We'd love to hear from <span class="shadow is-purple">you</span>. Have thoughts? Comments? Ideas?</p>
            <p class="is-size-5 has-text-weight-light has-text-grey">Whatever your doubt may be, we're here to <span class="shadow is-turquoise">listen</span>.</p>
          </div>
        </div>
        <div data-aos="fade-in" class="column is-half">
          <form name="contact" action="/thank-you" netlify-honeypot="bot-field" method="post" netlify>
            <input type="hidden" name="form-name" value="contact" />
            <p class="hidden">     
              <label>Don’t fill this out: <input name="bot-field"></label>   
            </p>
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" name="name" placeholder="First and Last Name" required="true" />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" name="email" placeholder="Email address" required="true" />
              </div>
            </div>
            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea class="textarea" name="message" maxlength="500" required="true" placeholder="Your message here. Leave no thoughts out."></textarea>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-medium is-primary" type="submit">Submit</button>
                <input type="text" style="display:none" />
              </div>
            </div>
          </form>
        </div>
      </div>      
    </div>
  </section>
</template>

<style scoped>

  .hidden {
    display: none;
  }

  .title-serif {
    font-family: Georgia, serif;
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