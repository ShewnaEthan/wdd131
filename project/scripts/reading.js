const cardHolder = document.querySelector(".card-holder");

let readingList = [{
    book: "The Sun and the star",
    author: "Rick Riordan and Mark Oshiro",
    words: "117,305",
    series: "Nico Di Angelo  Adventures",
},
{
    book: "The Alloy Of Law",
    author: "Brandon Sanderson",
    words: "94,579",
    series: "Mistborn Wax and Wayne",
},
{
    book: "Shadows of Self",
    author: "Brandon Sanderson",
    words: "112,282",
    series: "Mistborn Wax and Wayne",
},
{
    book: "Bands of Mourning",
    author: "Brandon Sanderson",
    words: "127,999",
    series: "Mistborn Wax and Wayne",
},
{
    book: "The Lost Metal",
    author: "Brandon Sanderson",
    words: "160,792",
    series: "Mistborn Wax and Wayne",
},
{
    book: "Court of The Dead",
    author: "Rick Riordan and Mark Oshiro",
    words: "114,053",
    series: "Nico Di Angelo  Adventures",
},
{
    book: "Warbreaker",
    author: "Brandon Sanderson",
    words: "196,181",
    series: "Standalone",
},
{
    book: "Farheinheit 451",
    author: "Ray Bradbury",
    words: "~46,000",
    series: "Standalone",
},
{
    book: "Project Hail Mary",
    author: "Andy Weir",
    words: "150,350",
    series: "Standalone",
},
{
    book: "Fablehaven",
    author: "Brandon Mull",
    words: "75,178",
    series: "Fablehaven",
},
{
    book: "Fablehaven: Rise of the Evening Star",
    author: "Brandon Mull",
    words: "101,355",
    series: "Fablehaven",
},
{
    book: "Fablehaven: Grip of the Shadow Plague",
    author: "Brandon Mull",
    words: "109,920",
    series: "Fablehaven",
},
{
    book: "Fablehaven: Secrets of the Dragon Sanctuary",
    author: "Brandon Mull",
    words: "122,845",
    series: "Fablehaven",
},
{
    book: "Fablehaven: Keys To the Demon Prison",
    author: "Brandon Mull",
    words: "137,008",
    series: "Fablehaven",
}]

createCards(readingList);

function createCards(cardList) {
    cardList.forEach(card => {
        let newBookCard = document.createElement("div");
        let bookName = document.createElement("h3");
        let bookAuthor = document.createElement("p");
        let bookWordCount = document.createElement("p");
        let bookSeries = document.createElement("p");

        bookName.textContent = card.book;
        bookAuthor.innerHTML = `Author(s): <span>${card.author}</span>`;
        bookWordCount.textContent = `Words: ${card.words}`;
        bookSeries.textContent = `Series: ${card.series}`;

        newBookCard.classList.add("card")
        newBookCard.classList.add("reading")
        newBookCard.appendChild(bookName);
        newBookCard.appendChild(bookAuthor);
        newBookCard.appendChild(bookWordCount);
        newBookCard.appendChild(bookSeries);

        cardHolder.append(newBookCard);
    });
};