// crate an array of winning parcels
// with the following properties:
// auctionName
// ParcelId

var winningParcels = [
    {
        auctionName: "Lousiana Auction",
        parcelId: "12345"
    },
    {
        auctionName: "Indiana Auction",
        parcelId: "13456"
    },
    {
        auctionName: "Clay County Auction",
        parcelId: "12346"
    },
    {
        auctionName: "Colorado Sheriff Auction",
        parcelId: "12347"
    }
]

// create a function to map out winningParcels to the DOM element id tableBody
function mapWinningParcels(winningParcels) {
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = winningParcels.map(function (winningParcel, index) {
        return `<tr id=${index}>
                    <td>${winningParcel.auctionName}</td>
                    <td>${winningParcel.parcelId}</td>
                    <td><button class="btn btn-sm btn-primary">View Invoice</button> </td>
                </tr>`
    }
    ).join("");
}

mapWinningParcels(winningParcels);
