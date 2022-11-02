// create a leading bid array with the following properties:
// Id
// title
// endDate
// item
// faceAmount
// leadBid
// yourBid

var leadingBidArray = [
    {
        id: 1,
        title: "Lousiana Auction",
        endDate: "12/12/2022",
        item: "12345",
        faceAmount: "$100,000",
        leadBid: "$50,000",
        yourBid: "$50,000",
    },
    {
        id: 2,
        title: "Indiana Auction",
        endDate: "12/12/2022",
        item: "13456",
        faceAmount: "$100,000",
        leadBid: "$50,000",
        yourBid: "$50,000",
    },
    {
        id: 3,
        title: "Colorado Auction",
        endDate: "12/12/2022",
        item: "14567",
        faceAmount: "$100,000",
        leadBid: "$70,000",
        yourBid: "$50,000",
    },
    {
        id: 4,
        title: "Florida Auction",
        endDate: "12/12/2022",
        item: "15678",
        faceAmount: "$100,000",
        leadBid: "$50,000",
        yourBid: "$50,000",
    },
    {
        id: 5,
        title: "Florida Auction",
        endDate: "12/12/2022",
        item: "15678",
        faceAmount: "$100,000",
        leadBid: "$50,000",
        yourBid: "$50,000",
    },
    {
        id: 6,
        title: "Florida Auction",
        endDate: "12/12/2022",
        item: "15678",
        faceAmount: "$100,000",
        leadBid: "$50,000",
        yourBid: "$50,000",
    }
];

// create a function to map the array to the DOM element id leadingBidContainer

function mapLeadingBids(leadingBidArray) {
    var leadingBidContainer = document.getElementById("leadingBidContainer");
    leadingBidContainer.innerHTML = leadingBidArray.map(function (leadingBid, index) {
        return `<div class="card m-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center">${leadingBid.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted text-center">Ends: ${leadingBid.endDate}</h6>
                        <p class="card-text">Item: ${leadingBid.item}</p>
                        <p class="card-text">Face Amount: ${leadingBid.faceAmount}</p>
                        <p class="card-text">Lead Bid: ${leadingBid.leadBid}</p>
                        <p class="card-text">Your Bid: ${leadingBid.yourBid}</p>
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
    }).join("");
}

mapLeadingBids(leadingBidArray);
