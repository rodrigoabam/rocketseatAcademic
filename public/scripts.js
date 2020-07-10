const cards = document.querySelectorAll(".card")

for(let card of cards) {
    card.addEventListener("click", () => {
        const linkId = card.getAttribute("id");
        window.location.href = `courses/${linkId}`
    })
}
