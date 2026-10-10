const cardHolder = document.querySelector(".card-holder")

let pbList = [{
    image: "images/super-mario-odyssey.webp",
    game: "Super Mario Odyssey",
    category: "Any%",
    time: "1:00:57",
    gap: "1:18",
    rating: "&star;&star;&star;&star;",
    comment: "Incredible first half of the run but the second half is very improvable."
},
{
    image: "images/super-mario-odyssey.webp",
    game: "Super Mario Odyssey",
    category: "World Peace",
    time: "1:22:22",
    gap: "2:50",
    rating: "&star;&star;",
    comment: "I've haven't touched the category in a while I can beat this run by a mile with a bit of effort."
},
{
    image: "images/super-mario-odyssey.webp",
    game: "Super Mario Odyssey",
    category: "Dark Side",
    time: "1:55:07",
    gap: "7:10",
    rating: "&star;",
    comment: "Terrible run for my skill level, I can improve this alot if I just have a run with no deaths."
},
{
    image: "images/will-you-snail.webp",
    game: "Will You Snail?",
    category: "Any%, Infinitely easy",
    time: "15:27",
    gap: "1:19",
    rating: "&star;&star;&star;",
    comment: "Pretty decent run, however I've been on pace to get a time under 15 minutes few times."
},
{
    image: "images/celeste.webp",
    game: "Celeste",
    category: "Any%",
    time: "43:12",
    gap: "4:48",
    rating: "&star;&star;",
    comment: "I haven't run the game very much, but if I go back I can beat this time by several minutes."
}
]

createCards(pbList);

function createCards(cardlist) {
    cardlist.forEach(card => {
        let newCard = document.createElement("div")
        let gameName = document.createElement("h3");
        let gameImage = document.createElement("img");
        let category = document.createElement("p");
        let personalBest = document.createElement("p");
        let sobGap = document.createElement("p");
        let runRating = document.createElement("p");
        let runComment = document.createElement("p");

        gameName.textContent = card.game;

        gameImage.setAttribute("src", card.image)
        gameImage.setAttribute("alt", `${card.game} box art`)
        gameImage.setAttribute("loading", "lazy")

        category.textContent = `Category: ${card.category}`;
        personalBest.textContent = `Personal Best: ${card.time}`;
        sobGap.textContent = `Sum of Best gap: ${card.gap}`;
        runRating.innerHTML = card.rating;
        runComment.textContent = card.comment;

        newCard.classList.add("card");
        newCard.appendChild(gameName);
        newCard.appendChild(gameImage);
        newCard.appendChild(category);
        newCard.appendChild(personalBest);
        newCard.appendChild(sobGap);
        newCard.appendChild(runRating);
        newCard.appendChild(runComment);
        cardHolder.append(newCard);
    });
};