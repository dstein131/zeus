

const goto2 = () => {
    document.getElementById("reg1").style.display = "none";
    document.getElementById("reg2").style.display = "block";
}

const goto3 = () => {
    document.getElementById("reg2").style.display = "none";
    document.getElementById("reg3").style.display = "block";
}

// const submitreg = () => {
//     window.location.href = "./auctionItem.html"
// }

const newACH = () => {
    document.getElementById("achselect").addEventListener('change', (event) => {
        console.log(event.target.value);
        if (event.target.value === "1") {
            document.getElementById("newACHAccount").style.display = "block";
        } else {
            document.getElementById("newACHAccount").style.display = "none";
        }

    })
}

newACH()