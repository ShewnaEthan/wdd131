const currentYear = document.querySelector("#currentYear")
const today = new Date();


currentYear.innerHTML = `${today.getFullYear()} | Ethan Bayer | Illinois`;
document.getElementById("lastModified").innerHTML = document.lastModified;