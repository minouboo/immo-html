class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML= `
        <footer class="text-center text-lg-start bg-light text-muted">
    <section id="footer">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Immo
            </h6>
            <p>
              Nous mettrons tout en œuvre pour que vous trouviez le logement qui vous convient.
            </p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              Pages
            </h6>
            <p>
              <a href="#!" class="text-reset">A propos de nous</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Notre équipe</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Nous contacter</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Logement</a>
            </p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              Logement
            </h6>
            <p>
              <a href="#!" class="text-reset">Appartement</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Maison</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Commercial</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Garage</a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2021 Copyright:
      <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Immo.com</a>
    </div>
  </footer>
    `;

    }

}  
customElements.define(`my-footer`, MyFooter);