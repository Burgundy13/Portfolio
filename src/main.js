"use strict";

// items
const projects = [
	{
		id: 1,
		img: "src/images/project1a.png",
		live: "https://jasbyjas.com/",
		desc: `I crafted a vibrant e-commerce site using WordPress, tailored to showcase and sell handmade treasures for a friend.`,
	},
	{
		id: 2,
		img: "src/images/project2a.png",
		live: "https://burgundy13.github.io/StudioPresent-Praksa/",
		git: "https://github.com/Burgundy13/StudioPresent-Praksa",
		desc: `Internship project, utilizing HTML, Sass, and JavaScript, along with popular libraries like AOS and Swiper.`,
	},
	{
		id: 3,
		img: "src/images/project3a.png",
		live: "https://burgundy13.github.io/YT-Project-Delivery/#",
		git: "https://github.com/Burgundy13/YT-Project-Delivery",
		desc: `A static website idea , created with a clean, modern layout`,
	},
	{
		id: 4,
		img: "src/images/project4a.png",
		git: "https://github.com/Burgundy13/Train",
		desc: `Angular base project with both Frontend and Backend (server) side.`,
	},
	{
		id: 5,
		img: "src/images/project5a.png",
		git: "https://github.com/Burgundy13/ArtMuseum",
		desc: `Angular base project with both Frontend and Backend (server) side. `,
	},
	{
		id: 6,
		img: "src/images/project6a.png",
		git: "https://github.com/Burgundy13/CakeHeaven",
		desc: `Angular base project with both Frontend and Backend (server) side. `,
	},
];

const projectBtns = document.querySelector(".projects-sum");
const projectItems = document.querySelectorAll(".projects-item");
const projectImg = document.querySelector(".projects-img");
const projectImg2 = document.querySelector(".projects-img2");
const btnAnimation = document.querySelector(".btn--animation");
const labels = document.querySelectorAll(".form-control label");
const sectionCenter = document.querySelector(".filter-container");
const container = document.querySelector(".btn-nav");

// btn span el for resume
if (btnAnimation) {
	btnAnimation.insertAdjacentHTML(
		"afterbegin",
		"<span></span><span></span><span></span><span></span>"
	);
}

// show project img - home page
if (projectBtns) {
	projectBtns.addEventListener("click", (e) => {
		projectItems.forEach((item, i) => {
			if (e.target === item) {
				projectImg.src = `src/images/projectImg${i + 1}.png`;
				projectImg2.src = `src/images/projectImg${i + 1}.png`;
				item.style.color = "#2f8eb6";
			} else {
				item.style.color = "black";
			}
		});
	});

	// fade animation
	const handleHover = function (e) {
		// console.log(e);
		if (e.target.classList.contains("projects-item")) {
			const link = e.target;
			const siblings = link
				.closest(".projects-sum")
				.querySelectorAll(".projects-item");

			siblings.forEach((e) => {
				if (e !== link) e.style.opacity = this;
				else if (e === link) e.style.letterSpacing = `${this}px`;
			});
		}
	};
	projectBtns.addEventListener("mouseover", handleHover.bind(0.3));
	projectBtns.addEventListener("mouseout", handleHover.bind(1));
}

// contact form animation
labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split("")
		.map(
			(letter, idx) =>
				`<span style="transition-delay:${idx * 50}ms">${letter}</span>`
		)
		.join("");
});

// load items

if (sectionCenter) {
	dispayItems(projects);
	dispayButtons(projects);
}

// dispaly individual projects
function dispayItems(items) {
	let dispayItem = items.map(function (item) {
		var gitText = "";
		var liveText = "";
		if (item.git) {
			var gitText = `<a href=${item.git} target="_blank" class="btn-dark">
			<i class="fab fa-github"></i> Github
		</a>`;
		} else {
			gitText;
		}
		if (item.live) {
			var liveText = `<a href=${item.live} target="_blank" class="btn-light" _>
			<i class="fas fa-eye"></i> Project
		</a>`;
		} else {
			liveText;
		}
		return `<div class="item filtr-item">
                    <div class="img">
                        <img src=${item.img} alt="Project">
                        <p class="item-text">${item.desc}</p>
                    </div>
                    ${liveText}
					${gitText}
                   </div>`;
	});
	dispayItem = dispayItem.join("");
	sectionCenter.innerHTML = dispayItem;
}
