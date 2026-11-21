const dugme = document.getElementById("pump-btn");
const slika = document.getElementById("pumpa");
const brojac = document.getElementById("count");
const poruka = document.getElementById("poruka");

let count = 0;

dugme.addEventListener("click", () => {
	count++;
	brojac.textContent = count;


	const velicina = Math.min(1 + count*0.05, 1.5);
	slika.style.transform = `scale(${velicina})`;

	slika.classList.add("tres")
;
setTimeout(() => slika.classList.remove("tres"), 150);

if(count === 10) {
	poruka.textContent = "Pumpa je napumpana!";
}

});