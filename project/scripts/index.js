const cardHolder = document.querySelector(".card-holder");

let hobbyList = [
    {
        hobby: "Reading",
        description: "Track your to be read list with info such as authors name, number of words, and if its part of a series. Sort the books by different things such as number of pages, or genre.",
        icon: "",
        emoji: "📙",
        site: "reading.html"
    },
    {
        hobby: "Speedrunning",
        description: "Track your speedrunning personal bests, your sum of best, the day you got it and your overall rating of the run. Filter by oldest, newest or closest to best segments.",
        icon: "",
        emoji: "⏱️",
        site: "speedrun.html"
    },
    {
        hobby: "Goal Maker",
        description: "This is a basic goal maker you can use to make some goals with a description and time frame. You can track multiple goals and remove goals once you complete them",
        icon: "",
        emoji: "📋",
        site: "goal.html"
    }
];

function createCards(cardList) {
    cardList.forEach(card => {
        let newCard = document.createElement("div");
        let cardTitle = document.createElement("h3");
        let cardInfo = document.createElement("p");
        let sendButton = document.createElement("a")

        cardTitle.textContent = `${card.emoji} ${card.hobby}`
        cardInfo.textContent = `${card.description}`

        sendButton.classList.add("send-button")
        sendButton.setAttribute("href", `${card.site}`)
        sendButton.textContent = "Track This Hobby"

        newCard.classList.add("card");
        newCard.appendChild(cardTitle);
        newCard.appendChild(cardInfo);
        newCard.appendChild(sendButton);
        cardHolder.append(newCard);
    });
};

createCards(hobbyList)