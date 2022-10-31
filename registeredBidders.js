var registeredBidders = [
    {
        bidderName: 'David',
        userName: 'dstein',
        bidderNumber: 1,
        description: '123 Main St, Denver, CO 80210'
    },
    {
        bidderName: 'Erica',
        userName: 'edoe',
        bidderNumber: 2,
        description: '321 Main St, Denver, CO 80210'
    },
    {
        bidderName: 'Robert',
        userName: 'rdoe',
        bidderNumber: 3,
        description: '5 Main St, Denver, CO 80210'
    }
];


// create a function to map out registeredBidders to the DOM element id regbidtab
function mapRegisteredBidders(registeredBidders) {
    var regbidtab = document.getElementById("regbody");
    regbidtab.innerHTML = registeredBidders.map(function (registeredBidder, index) {
        return `<tr id=${index}>
                    <td>${registeredBidder.bidderName}</td>
                    <td>${registeredBidder.userName}</td>
                    <td>${registeredBidder.bidderNumber}</td>
                    <td>${registeredBidder.description}</td>
                    <td>
                    <div class="d-row flex-wrap justify-content-center align-items-center flex-column ">
                    <button type="button" class="btn btn-sm btn-primary">Modify</button>
                   
                    <button type="button" class="btn btn-sm btn-secondary d-flex my-1 flex-row justify-content-between ">W9<span> </span> 
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              
                    </button>
                    <button type="button" class="btn btn-sm btn-success">CoE Not Required</button>
                    </td>
                </tr>`
    }
    ).join("");
}

mapRegisteredBidders(registeredBidders);