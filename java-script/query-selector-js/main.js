// Ethan Lawrence
// April 16, 2024
// Targeting Page Elements

document.getElementById(`student`).addEventListener(`click`, startUp);

function startUp() {
    // Imput
    const student = document.querySelector(`#student`);
    const homeSchool = document.querySelector(`#sending-school`);
    const city = document.querySelector(`#city`);

    document.body.style.backgroundColor = "lightblue";
    student.style.color = `var(--steelblue)`;
    student.style.fontSize = `1.7rem`

    homeSchool.style.fontSize = `1.2rem`;
    homeSchool.style.marginBottom = `30px`;
    homeSchool.style.fontFamily = `Helvetica, sans-serif`;
    homeSchool.style.fontVariant = `small-caps`;
    homeSchool.style.fontStyle = `italic`;

    city.style.display = `inline`;
    city.style.color = `salmon`;
    city.style.padding = `10px`;
    city.style.border = `4px dotted orange`;

    // Process 


    // Output

}