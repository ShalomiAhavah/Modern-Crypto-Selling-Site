var nft = document.querySelectorAll(".nft-image-container");
var buyNft = document.querySelectorAll(".buy-nft");
var likeBtn = document.querySelectorAll(".like-button");

for (let i = 0; i < nft.length; i++) {
  nft[i].addEventListener("mouseover", function () {
    for (let j = 0; j < nft.length; j++) {
      nft[j].classList.remove("nft-active");
    }
    this.classList.add("nft-active");
    buyNft[i].style.margin = "2vw auto 0 auto";
    likeBtn[i].addEventListener("click", function () {
      likeBtn[i].classList.add("liked");
    });
  });
}

var filterAll = document.querySelectorAll("#all-filter");
var filterHape = document.querySelectorAll("#hape-filter");
var filterLions = document.querySelectorAll("#lions-filter");
var filterApe = document.querySelectorAll("#ape-filter");

var all = document.querySelectorAll(".all");
var hapes = document.querySelectorAll(".hape-prime");
var lions = document.querySelectorAll(".lazy-lions");
var ape = document.querySelectorAll(".peaceful-ape");

var nftTypes = [all, hapes, lions, ape];
var filter = document.querySelectorAll(".filter");

var filterType = [filterAll, filterHape, filterLions, filterApe];

function filterActive(event) {
  for (let i = 0; i < filter.length; i++) {
    filter[i].classList.remove("active");
  }

  if (!event.target.classList.contains("active")) {
    event.target.classList.add("active");
  }
  filterNFTS();
}
