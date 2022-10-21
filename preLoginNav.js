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
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#navModal">
        Login
     </button>
      <a href="/registerUser.html"><button class="btn btn-success" type="submit">Register</button></a>
      </div>
      
        

        </div>

        <div class="modal fade" id="navModal" tabindex="-1" aria-labelledby="navModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="navModalLabel">Please Enter Your Account Info</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form>
      <div class="modal-body">
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Username:</span>
            <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Password:</span>
        <input type="password" class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
      </form>
    </div>
  </div>
</div>

     </nav> `;

    // find the element with the id of "navbar" and insert the navbar html into it
    document.getElementById("navbar").innerHTML = navBarRender;
    }

renderNavBar()