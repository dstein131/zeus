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
    },
    {
        parcelId: "56789",
        owner: "Doe M",
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
        parcelId: "67890",
        owner: "Doe Erica",
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
        parcelId: "78901",
        owner: "Doe Robert",
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
        parcelId: "89012",
        owner: "Doe Doe",
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
        parcelId: "90123",
        owner: "Doe M Doe",
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
    }

];

// create a function to map the array to the DOM element id auctionContainer
function mapAuctionCardArray(auctionCardArray) {
    var auctionCardContainer = document.getElementById("auctionContainer");
    auctionCardContainer.innerHTML = auctionCardArray.map(function(auctionCard, index) {
        return `<div id="parcel${auctionCard.parcelId}" class="cont1 row border parcelRow py-2">
        <div id="" class="itembox col-12 col-lg-3  d-flex flex-column justify-content-center  ">
            <div class="fw-bold">
                Parcel: ${auctionCard.parcelId}
            </div>
            <div class="d-flex flex-row">
                <div class="me-1">
                    <small><b>Address:</b></small>
                </div>
                <div>
                    <small>${auctionCard.address}</small>
                </div>
            </div>
            <div class="d-flex flex-row">
                <div class="me-1">
                    <small><b>City:</b></small>
                </div>
                <div>
                    <small>${auctionCard.city}</small>
                </div>
            </div>
            <div class="d-flex flex-row">
                <div class="me-1">
                    <small><b>State:</b></small>
                </div>
                <div>
                    <small>${auctionCard.state}</small>
                </div>
            </div>
            <div class="d-flex flex-row">
                <div class="me-1">
                    <small><b>Zip:</b></small>
                </div>
                <div>
                    <small>${auctionCard.zip}</small>
                </div>
            </div>
            <div class="d-flex  flex-column">
                <div class="me-1">
                    <small><b>Legal Description:</b></small>
                </div>
                <div>
                    <small>${auctionCard.legalDescription}</small>
                </div>
            </div>

        </div>
        <div id="" class="itembox col-12 col-lg-3  d-flex flex-column justify-content-center">
            <div class="d-flex">
                <div class="me-1">
                    <small><b>Lead Bid:</b></small>
                </div>
                <div>
                    <small>${auctionCard.leadBid}</small>
                </div>
            </div>

            <div class="d-flex">
                <div class="me-1">
                    <small><b>Face Amount:</b></small>
                </div>
                <div>
                    <small>${auctionCard.faceAmount}</small>
                </div>
            </div>
            <div class="d-flex mt-3">
                <div class="me-1 ">
                    <small><b>Batch:</b></small>
                </div>
                <div>
                    <small>${auctionCard.batchId}</small>
                </div>
            </div>
        </div>

        <div id="" class=" itembox col-12 col-lg-3 d-flex flex-column justify-content-center">
            <div class="d-flex ">
                <div class="me-1">
                    <small><b>Registration Start:</b></small>
                </div>
                <div>
                    <small>${auctionCard.registrationStart}</small>
                </div>
            </div>
            <div class="d-flex ">
                <div class="me-1">
                    <small><b>Sale Start:</b></small>
                </div>
                <div>
                    <small>${auctionCard.saleStart}</small>
                </div>
            </div>
            <div class="d-flex flex-row mt-2">
                <div class="me-1">
                    <small><b>Registration End:</b></small>
                </div>
                <div>
                    <small>${auctionCard.registrationEnd}</small>
                </div>
            </div>
            <div class="d-flex flex-row">
                <div class="me-1">
                    <small><b>Sale End:</b></small>
                </div>
                <div>
                    <small>${auctionCard.saleEnd}</small>
                </div>
            </div>
        </div>

        <div id=""
            class="parcelBut col-12 col-lg-3  d-flex flex-column align-items-center justify-content-center">


            <button type="button" class="btn btn-sm btn-primary mb-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <div class="d-flex flex-row align-items-center justify-content-center">
                        <img src="/images/gavel_FILL0_wght400_GRAD0_opsz48.svg" class="me-1" alt="gavel" style="width: 20px; height: 20px;">
                        Place Bid
                        </div>
                        </button>
            



        </div>




    </div> `;
    }).join("");
}

mapAuctionCardArray(auctionCardArray);
