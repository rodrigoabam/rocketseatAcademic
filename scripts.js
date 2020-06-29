const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for(let card of cards) {
    card.addEventListener("click", () => {
        const linkId = card.getAttribute("id");
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${linkId}`
    })
}


document.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector(".modal").classList.remove("max")
    modalOverlay.querySelector("iframe").classList.remove("max")
})

document.querySelector(".maximize-modal").addEventListener("click", () => {
    modalOverlay.querySelector(".modal").classList.add("max")
    modalOverlay.querySelector("iframe").classList.add("max")
})
