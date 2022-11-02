// create an array of parcels to map to the DOM element id auctionContainer
// with the following properties:
// parcelId
// owner
// address
// city
// state
// zip
// legalDescription
// batchId
// leadBid
// faceAmount
// registrationStart
// registrationEnd
// saleStart
// SaleEnd

var activeBidArray = [
  {
    id: 1,
    title: "Lousiana Auction",
    endDate: "12/12/2022",
    parcelId: "12345",
    faceAmount: "$100,000",
    leadBid: "$50,000",
    yourBid: "$50,000",
  },
  {
    id: 2,
    title: "Indiana Auction",
    endDate: "12/12/2022",
    parcelId: "13456",
    faceAmount: "$100,000",
    leadBid: "$50,000",
    yourBid: "$50,000",
  },
  {
    id: 3,
    title: "Colorado Auction",
    endDate: "12/12/2022",
    parcelId: "14567",
    faceAmount: "$100,000",
    leadBid: "$70,000",
    yourBid: "$50,000",
  },
  {
    id: 4,
    title: "Florida Auction",
    endDate: "12/12/2022",
    parcelId: "15678",
    faceAmount: "$100,000",
    leadBid: "$50,000",
    yourBid: "$50,000",
  },
];

// create a function to map the array to the DOM element id auctionContainer

function mapActiveBids(activeBidArray) {
    var auctionContainer = document.getElementById("auctionContainer");
    auctionContainer.innerHTML = activeBidArray.map(function (activeBid) {
        return `<div class="card m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title text-center">${activeBid.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted text-center">Ends: ${activeBid.endDate}</h6>
            <p class="card-text">Item: ${activeBid.parcelId}</p>
            <p class="card-text">Face Amount: ${activeBid.faceAmount}</p>
            <p class="card-text">Lead Bid: ${activeBid.leadBid}</p>
            <p class="card-text">Your Bid: ${activeBid.yourBid}</p>
            <div class="d-flex align-items-center justify-content-center">
            <button type="button" class="btn btn-primary">
                <div class="d-flex align-items-center justify-content-center">
                <img src="/images/login_FILL0_wght400_GRAD0_opsz48.svg" alt="..." style="width: 20px; height: 20px; margin-right: 5px;">
                Enter Auction
                </div>
            </button>
            </div>

        </div>
    </div>`
    }
    ).join("");
}

mapActiveBids(activeBidArray);






