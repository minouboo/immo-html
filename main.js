class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML= `
        <nav class="navbar navbar-expand-lg navbar-light" id="navigation" >
        <div class="container-fluid">
            

                <a class="navbar-brand" id="nav-text" aria-current="page" href="index.html">Immo</a>
                
                <div id="bouton-nav">
                <a href="AddAccomodation.html" class="btn" id="bouton">Poster votre annonce dès maintenant</a>
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="onglet">
                        <li class="nav-item dropdown" >
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="nav-text">Mes compte</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="MyWallet.html">Mon Portefeuille</a></li>
                            <li><a class="dropdown-item" href="#">Mes messages</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown" >
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="nav-text">Mes contrats</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Mes annonces</a></li>
                            <li><a class="dropdown-item" href="#">Location</a></li>
                            <li><a class="dropdown-item" href="#">Propriétaire</a></li>
                            </ul>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link active" id="nav-text" aria-current="page" href="listeappartements.html">Admin</a>
                        </li>
    
                    </ul>
            
                </div>
        </div>
    </nav>
    `;

    }

}  
customElements.define(`my-header`, MyHeader);