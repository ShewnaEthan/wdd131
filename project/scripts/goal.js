const goalForm = document.querySelector(".goal");
const goalName = document.getElementById("name");
const goalDescription = document.getElementById("description");
const goalHobby = document.getElementById("hobby");
const goalPlan = document.getElementById("plan");
const goalTimeFrame = document.getElementById("timeframe");
const cardHolder = document.querySelector(".card-holder")



let goalsList = getGoalList() || [{
    goal: "Example Goal",
    description: "Make new goals",
    hobby: "Goal Making",
    plan: 'Fill out the form and press the "Add My Goal" button',
    timeframe: "Today",
}];

createGoalCards(goalsList);

goalForm.addEventListener("submit", function (event) {
    event.preventDefault()
    newGoal = {
        goal: goalName.value,
        description: goalDescription.value,
        hobby: goalHobby.value,
        plan: goalPlan.value,
        timeframe: goalTimeFrame.value
    }
    goalsList.push(newGoal)
    cardHolder.innerHTML = ""
    createGoalCards(goalsList)
    setGoalList()
    goalName.value = ""
    goalDescription.value = ""
    goalHobby.value = ""
    goalPlan.value = ""
    goalTimeFrame.value = ""
});

function createGoalCards(goalList) {
    goalList.forEach(goal => {
        //create goal card elements
        let newCard = document.createElement("div");
        let cardTitle = document.createElement("h3");
        let cardDescription = document.createElement("p");
        let cardHobby = document.createElement("p")
        let cardPlan = document.createElement("p")
        let cardTime = document.createElement("p")
        let deleteButton = document.createElement("button")


        //Populate goal card elements with goal content
        cardTitle.textContent = `${goal.goal}`;
        cardDescription.textContent = `Description: ${goal.description}`;
        if (goal.hobby !== "") {
            cardHobby.textContent = `Hobby: ${goal.hobby}`;
        }
        else {
            cardHobby.textContent = `Hobby: N/A`;
        }
        cardPlan.textContent = `Plan: ${goal.plan}`
        cardTime.textContent = `Finish By: ${goal.timeframe}`;


        // Create Delete button
        deleteButton.classList.add("send-button");
        deleteButton.textContent = "Remove Goal";
        deleteButton.addEventListener("click", () => {
            cardHolder.removeChild(newCard);
            removeGoal(goal)
        });

        newCard.classList.add("card");
        newCard.appendChild(cardTitle);
        newCard.appendChild(cardDescription);
        newCard.appendChild(cardHobby);
        newCard.appendChild(cardPlan);
        newCard.appendChild(cardTime);
        newCard.appendChild(deleteButton);
        cardHolder.append(newCard);
    });
};

function getGoalList() {
    return JSON.parse(localStorage.getItem("goalsList-ls"));
};

function setGoalList() {
    localStorage.setItem("goalsList-ls", JSON.stringify(goalsList))
};


function removeGoal(goal) {
    goalsList = goalsList.filter(item => item !== goal);
    setGoalList()
};