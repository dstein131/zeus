// render to the dom element #staticnavbut 

// create a function to render to the dom element #staticnavbuttons
function renderStaticNavBut() {
    var staticNavBut = document.getElementById("staticnavbuttons");
    staticNavBut.innerHTML = `
    <div class="container-fluid  w-75 d-flex align-items-center justify-content-around flex-wrap mb-3">
    <a href="/auctionscards.html"> 
        <button type="button" 
                class="btn btn-success navbut m-2" 
                style="width: 201px; border-radius: 30px">
                <div class="d-flex align-items-center justify-content-center">
                    <img src="/images/visibility_FILL0_wght400_GRAD0_opsz48.svg" 
                        alt="..."
                        style="width: 20px; height: 20px; margin-right: 10px"
                        >
                    View Auctions
                </div>
        </button>
    </a>
    <a href="/demoAuctions.html">
        <button type="button" 
            class="btn btn-success navbut m-2" 
            style="width: 201px; border-radius: 30px">
                <div class="d-flex align-items-center justify-content-center">
                    <img src="/images/quiz_FILL0_wght400_GRAD0_opsz48.svg"
                        alt="..."
                        style="width: 20px; height: 20px; margin-right: 10px"
                        >
                    Practice Auctions
                </div>
        </button>
    </a>
    <a href="/manageBidders.html">
    <button type="button" 
    class="btn btn-success navbut m-2" 
    style="width: 201px; border-radius: 30px">
        <div class="d-flex align-items-center justify-content-center">
            <img src="/images/settings_FILL0_wght400_GRAD0_opsz48.svg"
                alt="..."
                style="width: 20px; height: 20px; margin-right: 10px"
                >
            Manage Bidder
        </div>
</button>
    </a>
    <a href="/wonParcels.html">
    <button type="button" 
    class="btn btn-success navbut m-2" 
    style="width: 201px; border-radius: 30px">
        <div class="d-flex align-items-center justify-content-center">
            <img src="/images/workspace_premium_FILL0_wght400_GRAD0_opsz48.svg"
                alt="..."
                style="width: 20px; height: 20px; margin-right: 10px"
                >
            Won Bids
        </div>
</button>
    </a>

    <a href="/invoices.html">
    <button type="button" 
    class="btn btn-success navbut m-2" 
    style="width: 201px; border-radius: 30px">
        <div class="d-flex align-items-center justify-content-center">
            <img src="/images/receipt_long_FILL0_wght400_GRAD0_opsz48.svg"
                alt="..."
                style="width: 20px; height: 20px; margin-right: 10px"
                >
            View Invoices
        </div>
</button>
    </a>

  </div>
    `
}

renderStaticNavBut();

