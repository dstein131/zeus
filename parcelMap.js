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

var auctionCardArray = [
    {
        parcelId: "12345",
        owner: "John Doe",
        address: "123 Main St",
        city: "Denver",
        state: "CO",
        zip: "80210",
        legalDescription: "This is a test legal description",
        batchId: "12345",
        leadBid: "$100,000",
        faceAmount: "$100,000",
        registrationStart: "01/01/2018 00:00:00",
        registrationEnd: "01/01/2018 00:00:00",
        saleStart: "01/01/2018 00:00:00",
        saleEnd: "01/01/2018 00:00:00"
    },
    {
        parcelId: "13456",
        owner: "Erica Doe",
        address: "321 Main St",
        city: "Denver",
        state: "CO",
        zip: "80210",
        legalDescription: "This is a test legal description",
        batchId: "12345",
        leadBid: "$120,000",
        faceAmount: "$100,000",
        registrationStart: "01/01/2018 00:00:00",
        registrationEnd: "01/01/2018 00:00:00",
        saleStart: "01/01/2018 00:00:00",
        saleEnd: "01/01/2018 00:00:00"
    },
    {
        parcelId: "12346",
        owner: "Robert Doe",
        address: "5 Main St",
        city: "Denver",
        state: "CO",
        zip: "80210",
        legalDescription: "This is a test legal description",
        batchId: "12345",
        leadBid: "$400,000",
        faceAmount: "$100,000",
        registrationStart: "01/01/2018 00:00:00",
        registrationEnd: "01/01/2018 00:00:00",
        saleStart: "01/01/2018 00:00:00",
        saleEnd: "01/01/2018 00:00:00"
    },
    {
        parcelId: "34567",
        owner: "Doe John",
        address: "2432 Main St",
        city: "Denver",
        state: "CO",
        zip: "80210",
        legalDescription: "This is a test legal description",
        batchId: "12345",
        leadBid: "$170,000",
        faceAmount: "$100,000",
        registrationStart: "01/01/2018 00:00:00",
        registrationEnd: "01/01/2018 00:00:00",
        saleStart: "01/01/2018 00:00:00",
        saleEnd: "01/01/2018 00:00:00"
    },
    {
        parcelId: "45678",
        owner: "M Doe",
        address: "643 Main St",
        city: "Denver",
        state: "CO",
        zip: "80210",
        legalDescription: "This is a test legal description",
        batchId: "12345",
        leadBid: "$70,000",
        faceAmount: "$100,000",
        registrationStart: "01/01/2018 00:00:00",
        registrationEnd: "01/01/2018 00:00:00",
        saleStart: "01/01/2018 00:00:00",
        saleEnd: "01/01/2018 00:00:00"
    }
];

// create a function to map the array to the DOM element id auctionContainer
function mapAuctionCardArray(auctionCardArray) {
    var auctionCardContainer = document.getElementById("auctionContainer");
    auctionCardContainer.innerHTML = auctionCardArray.map(function(auctionCard, index) {
        return `<div class="card m-2 bg-light" id="${index}" style="width: 23rem;">
                    <div class="card-body">
                        <h6 class="card-title">Parcel: ${auctionCard.parcelId}</h6>
                        <small>
                        <p class="card-text mb-0"><small><b>Address:</b> ${auctionCard.address}</small></p>
                        <p class="card-text mb-0"><small><b>City:</b> ${auctionCard.city}</small></p>
                        <p class="card-text mb-0"><small><b>State:</b> ${auctionCard.state}</small></p>
                        <p class="card-text mb-0"><small><b>Zip:</b> ${auctionCard.zip}</small></p>
                        <p class="card-text mb-0"><small><b>Legal Description:</b> ${auctionCard.legalDescription}</small></p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-light"><small><b>Batch:</b> ${auctionCard.batchId}</small></li>
                    <li class="list-group-item bg-light"><small><b>Lead Bid:</b> ${auctionCard.leadBid}</small></li>
                    <li class="list-group-item bg-light"><small><b>Face Amount:</b> ${auctionCard.faceAmount}</small></li>
                    <li class="list-group-item bg-light"><small><b>Registration Start:</b> ${auctionCard.registrationStart}</small></li>
                    <li class="list-group-item bg-light"><small><b>Registration End:</b> ${auctionCard.registrationEnd}</small></li>
                    <li class="list-group-item bg-light"><small><b>Sale Start:</b> ${auctionCard.saleStart}</small></li>
                    <li class="list-group-item bg-light"><small><b>Sale End:</b> ${auctionCard.saleEnd}</small></li>
                    </ul>
                    <div class="card-body"></small>
                    <div class="card-body d-flex justify-content-center align-items-center">
                        <div class="container d-flex flex-row justify-content-around">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Place Bid
                        </button>
                        <button type="button" class="btn  btn-success">Parcel Details</button>
                    </div>
                    </div>
                </div>
            </div> `;
    }).join("");
}

mapAuctionCardArray(auctionCardArray);

