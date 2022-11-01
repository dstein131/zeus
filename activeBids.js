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
        return `
        <div class="card m-2 bg-light" style="width: 16rem;">
           <div class="card-body ">
                <h6 class="card-title">Sale: ${activeBid.title}</h6>
                <h6 class="card-title text-muted">End Date: ${activeBid.endDate}</h6>
                <h6 class="card-title text-muted">Parcel ID: ${activeBid.parcelId}</h6>
                <h6 class="card-title text-muted">Face Amount: ${activeBid.faceAmount}</h6>
                <h6 class="card-title text-muted">Lead Bid: ${activeBid.leadBid}</h6>
                <h6 class="card-title text-muted">Your Bid: ${activeBid.yourBid}</h6>
                <div class="d-flex align-items-center justify-content-center">
                <button class="btn btn-sm btn-primary mt-2">View Auction</button>
                </div>
            </div>
        </div>`
    }
    ).join("");
}

mapActiveBids(activeBidArray);






