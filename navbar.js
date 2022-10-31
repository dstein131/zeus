// render the nav bar at the top of <body>

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
            <a class="nav-link active" aria-current="page" href="/index.html">Dashboard</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Auctions
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item " href="/auctionscards.html">Online Auctions</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item " href="/demoAuctions.html">Practice/Demo Auctions</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item " href="/wonParcels.html">Won Parcels</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item " href="/watchList.html">Watch List</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Tools
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" href="/tools.html">Admin Tools</a></li>
              <li><a class="dropdown-item" href="/tools.html">Routing Numbers</a></li>
              
              <li><a class="dropdown-item" href="#">Treasurer Tools</a></li>
              <li><hr class="dropdown-divider "></li>
              <li><a class="dropdown-item" href="/tools.html">Manage Users</a></li>
              <li><a class="dropdown-item" href="/manageBidders.html">Manage Bidder</a></li>
              <li><a class="dropdown-item" href="#">Manage County</a></li>
              <li><a class="dropdown-item" href="#">Manage Sales</a></li>
              <li><hr class="dropdown-divider "></li>
              <li><a class="dropdown-item" href="/contentManagement.html">Content Management</a></li>
              <li><hr class="dropdown-divider "></li>
              <li><a class="dropdown-item" href="#">Inquiry</a></li>
              <li><a class="dropdown-item" href="#">Inquiry Legacy</a></li>
            </ul>
          </li>
        </ul>
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
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          
            <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Notificaitons
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" id="notificationContainer" aria-labelledby="navbarScrollingDropdown">

                
                </ul>
              </li>
              <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  $userName
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarScrollingDropdown">
                  <li><a class="dropdown-item" href="/myAccount.html">My Account</a></li>
                  <li><a class="dropdown-item href="/preLogin.html">Logout</a></li>
              </li>
        </ul>
      </div>
      
    </div>
  </nav> `;

    // find the element with the id of "navbar" and insert the navbar html into it
    document.getElementById("navbar").innerHTML = navBarRender;
    }

renderNavBar()

// create an arry of notifications for the user

var notificationArray = [
    {
        notificationType: "Auction",
        notificationMessage: "You have an auction that is about to start",
        notificationDate: "01/01/2018 00:00:00"
    },
    {
        notificationType: "Auction",
        notificationMessage: "You have an auction that is about to end",
        notificationDate: "01/01/2018 00:00:00"
    },
    {
        notificationType: "Auction",
        notificationMessage: "You have won an auction",
        notificationDate: "01/01/2018 00:00:00"
    }
];


// create a function to map the array to the DOM element id notificationContainer

function mapNotifications(notificationArray) {
    var notificationContainer = document.getElementById("notificationContainer");
    var notificationHTML = notificationArray.map(function(notification) {
        return `<li><a class="dropdown-item" href="#"><small>${notification.notificationType}</small><br>${notification.notificationMessage}<br><small>${notification.notificationDate}</small></a></li>`;
    }).join("");
    notificationContainer.innerHTML = notificationHTML;
}

mapNotifications(notificationArray);

