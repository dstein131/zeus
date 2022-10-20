function renderNavBar() {
    const navBarRender = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="/index.html">
            <img src="/zeus-logo-xlarge-white[3828].png" height="30px" alt="">
          </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/preLogin.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria="page" href="/whyRegister.html">Why Register?</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" aria="page" href="/learnMore.html">Learn More</a>
        </li>
          
      </div>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav navbar-center mx-auto mb-2 mb-lg-0">
          
          <li class="nav-item dropdown ">
            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Support
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="https://qaauction.sriservices.com/contact.php" target="_blank">Support (Knowledge Base)</a></li>
              <li><a class="dropdown-item" href="https://help.sriservices.com/knowledge" target="_blank">Help</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">FAQs</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Release Notes</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Tutorials</a></li>
            </ul>
          </li>
          
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarText">
      <div class="ms-auto">
      <button class="btn btn-primary" type="submit">Login</button>
      <a href="/registerUser.html"><button class="btn btn-success" type="submit">Register</button></a>
      </div>
      
        </div>
  </nav> `;

    // find the element with the id of "navbar" and insert the navbar html into it
    document.getElementById("navbar").innerHTML = navBarRender;
    }

renderNavBar()