

document.getElementById("owner").innerText = "Mataska"

let newNFT = {
    bgColor: "teal",
    name: "dog",
   owner: "Mataska",
}

document.getElementById("owner").innerText = newNFT.owner

document.body.style.backgroundColor = newNFT.bgColor

document.getElementById("NFT").addEventListener("click", function() {
    console.log("I HAVE BEEN CLICKED")
})


document.getElementById("namee").addEventListener("click", function() {
    if(document.getElementById("namee").style.color != "green") {
        document.getElementById("namee").style.color = "green"
    }
    else {
        document.getElementById("namee").style.color = "aliceblue"
    }
})







