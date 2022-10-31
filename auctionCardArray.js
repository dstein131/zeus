// create an array of properties for each card
// each property is an object with the following properties:

// auctionName
// auctionStatus
// auctionBidType
// auctionDepositType
// auctionApprovalType
// auctionItems
// auctionBidders
// auctionRegStart
// auctionRegEnd
// auctionStart
// auctionEnd


var auctionCardArray = [
    {
        auctionName: "Lousiana Auction",
        auctionStatus: "Active",
        auctionBidType: "Bid Down",
        auctionDepositType: "Deposit",
        auctionApprovalType: "Auto Approval",
        auctionItems: "1",
        auctionBidders: "1",
        auctionRegStart: "01/01/2018 00:00:00",
        auctionRegEnd: "01/01/2018 00:00:00",
        auctionStart: "01/01/2018 00:00:00",
        auctionEnd: "01/01/2018 00:00:00"
    },
    {
        auctionName: "Indiana Auction",
        auctionStatus: "Closed",
        auctionBidType: "Bid Down",
        auctionDepositType: "No Deposit",
        auctionApprovalType: "Auto Approval",
        auctionItems: "1",
        auctionBidders: "1",
        auctionRegStart: "01/01/2018 00:00:00",
        auctionRegEnd: "01/01/2018 00:00:00",
        auctionStart: "01/01/2018 00:00:00",
        auctionEnd: "01/01/2018 00:00:00"
    },
    {
        auctionName: "Clay County Auction",
        auctionStatus: "notStarted",
        auctionBidType: "Bid Up",
        auctionDepositType: "Deposit",
        auctionApprovalType: "Auto Approval",
        auctionItems: "1",
        auctionBidders: "1",
        auctionRegStart: "01/01/2018 00:00:00",
        auctionRegEnd: "01/01/2018 00:00:00",
        auctionStart: "01/01/2018 00:00:00",
        auctionEnd: "01/01/2018 00:00:00"
    },
    {
        auctionName: "Colorado Sheriff Auction",
        auctionStatus: "Active",
        auctionBidType: "Bid Down",
        auctionDepositType: "No Deposit",
        auctionApprovalType: "Auto Approval",
        auctionItems: "1",
        auctionBidders: "1",
        auctionRegStart: "01/01/2018 00:00:00",
        auctionRegEnd: "01/01/2018 00:00:00",
        auctionStart: "01/01/2018 00:00:00",
        auctionEnd: "01/01/2018 00:00:00"
    },
    {
        auctionName: "Adams County Foreclosure Auction",
        auctionStatus: "notStarted",
        auctionBidType: "Bid Up",
        auctionDepositType: "No Deposit",
        auctionApprovalType: "Auto Approval",
        auctionItems: "1",
        auctionBidders: "1",
        auctionRegStart: "01/01/2018 00:00:00",
        auctionRegEnd: "01/01/2018 00:00:00",
        auctionStart: "01/01/2018 00:00:00",
        auctionEnd: "01/01/2018 00:00:00"
    },
    {
        auctionName: "Florida Auction",
        auctionStatus: "Closed",
        auctionBidType: "Bid Down",
        auctionDepositType: "No Deposit",
        auctionApprovalType: "Auto Approval",
        auctionItems: "1",
        auctionBidders: "1",
        auctionRegStart: "01/01/2018 00:00:00",
        auctionRegEnd: "01/01/2018 00:00:00",
        auctionStart: "01/01/2018 00:00:00",
        auctionEnd: "01/01/2018 00:00:00"
    },
        {
        auctionName: "Clay County Auction",
        auctionStatus: "notStarted",
        auctionBidType: "Bid Up",
        auctionDepositType: "Deposit",
        auctionApprovalType: "Auto Approval",
        auctionItems: "1",
        auctionBidders: "1",
        auctionRegStart: "01/01/2018 00:00:00",
        auctionRegEnd: "01/01/2018 00:00:00",
        auctionStart: "01/01/2018 00:00:00",
        auctionEnd: "01/01/2018 00:00:00"
    },
    {
        auctionName: "Colorado Sheriff Auction",
        auctionStatus: "Active",
        auctionBidType: "Bid Down",
        auctionDepositType: "No Deposit",
        auctionApprovalType: "Auto Approval",
        auctionItems: "1",
        auctionBidders: "1",
        auctionRegStart: "01/01/2018 00:00:00",
        auctionRegEnd: "01/01/2018 00:00:00",
        auctionStart: "01/01/2018 00:00:00",
        auctionEnd: "01/01/2018 00:00:00"
    },
    {
        auctionName: "Adams County Foreclosure Auction",
        auctionStatus: "notStarted",
        auctionBidType: "Bid Up",
        auctionDepositType: "No Deposit",
        auctionApprovalType: "Auto Approval",
        auctionItems: "1",
        auctionBidders: "1",
        auctionRegStart: "01/01/2018 00:00:00",
        auctionRegEnd: "01/01/2018 00:00:00",
        auctionStart: "01/01/2018 00:00:00",
        auctionEnd: "01/01/2018 00:00:00"
    },
    {
        auctionName: "Florida Auction",
        auctionStatus: "Closed",
        auctionBidType: "Bid Down",
        auctionDepositType: "No Deposit",
        auctionApprovalType: "Auto Approval",
        auctionItems: "1",
        auctionBidders: "1",
        auctionRegStart: "01/01/2018 00:00:00",
        auctionRegEnd: "01/01/2018 00:00:00",
        auctionStart: "01/01/2018 00:00:00",
        auctionEnd: "01/01/2018 00:00:00"
    }
];

// create a function to map the array to cards into the DOM element id auctionContainer

function mapAuctionCardArray(auctionCardArray) {
    var auctionCardContainer = document.getElementById("auctionContainer");
    auctionCardContainer.innerHTML = auctionCardArray.map(function (auctionCard, index) {
        if (auctionCard.auctionStatus === "Active") {
            return `<div id="${index}" class="row d-flex flex-row flex-wrap justify-content-around ">
            <div class="card m-2 bg-light" style="width: 21rem;">
               <div class="card-body">
               <h5 class="card-title">${auctionCard.auctionName}</h5>
               <span class="badge bg-success ms-1">Active</span>
               <small><p class="card-text mt-2 mb-0"> ${auctionCard.auctionBidType} | ${auctionCard.auctionDepositType} | ${auctionCard.auctionApprovalType}</p>
               <p class="card-text mt-2 mb-0 pt-2 border-top"> items: <b>${auctionCard.auctionItems}</b> | bidders: <b>${auctionCard.auctionBidders}</b></p>
               <p class="card-text mt-2 mb-0 pt-2 border-top"> <b>Registration Start:</b> ${auctionCard.auctionRegStart}</p>
               <p class="card-text mt-2 mb-0 pt-2 border-top"> <b>Auction Start:</b> ${auctionCard.auctionStart}</p>    
               <p class="card-text mt-2 mb-0 pt-2 border-top"> <b>Registration End:</b> ${auctionCard.auctionRegEnd}</p>
               <p class="card-text mt-2 mb-0 pt-2 border-top"> <b>Auction End:</b> ${auctionCard.auctionEnd}</p></small>
               <div class="d-flex justify-content-around mt-2">
               <button onclick="window.location.href='/saleRegister.html'" type="button" class="btn  btn-primary d-flex justify-content-center align-items-center"><img src="/images/app_registration_FILL0_wght400_GRAD0_opsz48.svg" style="width: 20px; height: 20px; margin-right: 5px">Register</button>
               <button onclick="window.location.href='/auctionItem.html'" type="button" class="btn  btn-success d-flex justify-content-center align-items-center"><img src="/images/login_FILL0_wght400_GRAD0_opsz48.svg" style="width: 20px; height: 20px; margin-right: 5px"> Enter Auction</button>

                    </div>
                </div>
            </div>
            </div>`;
        } if (auctionCard.auctionStatus === "Closed") {
            return `<div id="${index}" class="row d-flex flex-row flex-wrap justify-content-around ">
            <div class="card m-2 bg-light" style="width: 21rem;">
               <div class="card-body">
               <h5 class="card-title">${auctionCard.auctionName}</h5>
               <span class="badge bg-danger ms-1">Closed</span>
               <small><p class="card-text mt-2 mb-0"> ${auctionCard.auctionBidType} | ${auctionCard.auctionDepositType} | ${auctionCard.auctionApprovalType}</p>
               <p class="card-text mt-2 mb-0"> items: <b>${auctionCard.auctionItems}</b> | bidders: <b>${auctionCard.auctionBidders}</b></p>
               <p class="card-text mt-2 mb-0"> <b>Registration Start:</b> ${auctionCard.auctionRegStart}</p>
               <p class="card-text mt-2 mb-0"> <b>Auction Start:</b> ${auctionCard.auctionStart}</p>
               <p class="card-text mt-2 mb-0"> <b>Registration End:</b> ${auctionCard.auctionRegEnd}</p>
               <p class="card-text mt-2 mb-0"> <b>Auction End:</b> ${auctionCard.auctionEnd}</p></small>
               <div class="d-flex justify-content-around mt-2">
               <button onclick="window.location.href='/saleRegister.html'" type="button" class="btn  btn-primary d-flex justify-content-center align-items-center"><img src="/images/app_registration_FILL0_wght400_GRAD0_opsz48.svg" style="width: 20px; height: 20px; margin-right: 5px">Register</button>
               <button onclick="window.location.href='/auctionItem.html'" type="button" class="btn  btn-success d-flex justify-content-center align-items-center"><img src="/images/login_FILL0_wght400_GRAD0_opsz48.svg" style="width: 20px; height: 20px; margin-right: 5px"> Enter Auction</button>
                    </div>
                </div>
            </div>
            </div>`;
        } else {
            return `<div id="${index}" class="row d-flex flex-row flex-wrap justify-content-around ">
            <div class="card m-2 bg-light" style="width: 21rem;">
               <div class="card-body">
               <h5 class="card-title">${auctionCard.auctionName}</h5>
               <span class="badge bg-warning ms-1">Not Started</span>
               <small><p class="card-text mt-2 mb-0"> ${auctionCard.auctionBidType} | ${auctionCard.auctionDepositType} | ${auctionCard.auctionApprovalType}</p>
               <p class="card-text mt-2 mb-0"> items: <b>${auctionCard.auctionItems}</b> | bidders: <b>${auctionCard.auctionBidders}</b></p>
               <p class="card-text mt-2 mb-0"> <b>Registration Start:</b> ${auctionCard.auctionRegStart}</p>
               <p class="card-text mt-2 mb-0"> <b>Auction Start:</b> ${auctionCard.auctionStart}</p>
               <p class="card-text mt-2 mb-0"> <b>Registration End:</b> ${auctionCard.auctionRegEnd}</p>
               <p class="card-text mt-2 mb-0"> <b>Auction End:</b> ${auctionCard.auctionEnd}</p></small>
                <div class="d-flex justify-content-around mt-2">
                <button onclick="window.location.href='/saleRegister.html'" type="button" class="btn  btn-primary d-flex justify-content-center align-items-center"><img src="/images/app_registration_FILL0_wght400_GRAD0_opsz48.svg" style="width: 20px; height: 20px; margin-right: 5px">Register</button>
                <button onclick="window.location.href='/auctionItem.html'" type="button" class="btn  btn-success d-flex justify-content-center align-items-center"><img src="/images/login_FILL0_wght400_GRAD0_opsz48.svg" style="width: 20px; height: 20px; margin-right: 5px"> Enter Auction</button>
                 </div>
                </div>
            </div>
            </div>`;
        }
    }).join("");
}





    



mapAuctionCardArray(auctionCardArray);
        