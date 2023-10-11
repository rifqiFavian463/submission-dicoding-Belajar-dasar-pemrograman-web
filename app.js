const hamburgerMenu = document.querySelector(".hamburger-menu");
// console.log(hamburgerMenu);
hamburgerMenu.addEventListener("click", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
});

const songs = [
  {
    title: "Encore",
    img: "assets/song/encore.jpg",
    years: "2021",
    album: "e-side",
  },
  {
    title: "Comet",
    img: "assets/song/comet.jpg",
    years: "2021",
    album: "e-side",
  },
  {
    title: "Monster",
    img: "assets/song/monster.jpg",
    years: "2021",
    album: "e-side",
  },
  {
    title: "Into The Night",
    img: "assets/song/into-the-night.jpg",
    years: "2021",
    album: "e-side",
  },
  {
    title: "Halzion",
    img: "assets/song/harujion.jpg",
    years: "2021",
    album: "the book",
  },
  {
    title: "Tracing a dream",
    img: "assets/song/tracing a dream.jpg",
    years: "2021",
    album: "the book",
  },
  {
    title: "Probably",
    img: "assets/song/probably.jpg",
    years: "2021",
    album: "the book",
  },
  {
    title: "Blue Marine",
    img: "assets/song/blue-marine.png",
    years: "2020",
    album: "the book",
  },
  {
    title: "Haruka",
    img: "assets/song/haruka.jpg",
    years: "2021",
    album: "the book",
  },
  {
    title: "Just a little more",
    img: "assets/song/justalittlemore.jpg",
    years: "2021",
    album: "the book-2",
  },
  {
    title: "Love letter",
    img: "assets/song/loveletter.jpg",
    years: "2021",
    album: "the book-2",
  },
  {
    title: "Romance",
    img: "assets/song/romance.jpg",
    years: "2021",
    album: "the book-2",
  },
  {
    title: "Color coded",
    img: "assets/song/uminomanimani.jpg",
    years: "2022",
    album: "hajimete no-ep",
  },
  {
    title: "Suki da",
    img: "assets/song/suki da.jpg",
    years: "2022",
    album: "hajimete no-ep",
  },
  {
    title: "Seventeen",
    img: "assets/song/seventeen.jpg",
    years: "2022",
    album: "hajimete no-ep",
  },
];
const songContainer = document.querySelector(".song-container");
const albumList = document.querySelectorAll(".list");

const theBook = () => {
  const filter = songs.filter((song) => song.album.includes("the book") && !song.album.includes("the book-2"));
  const htmlResults = filter.map((item) => {
    result = "";
    result += `
    <div class="card">
      <img src="${item.img}" alt="${item.img}" />
      <span class="title">${item.title}</span>
      <span class="years">${item.years}</span>
    </div>
    `;
    return result;
  });
  const convert = htmlResults.join("");
  songContainer.innerHTML = convert;
};
const theBook2 = () => {
  const filter = songs.filter((song) => song.album.includes("the book-2"));
  const htmlResults = filter.map((item) => {
    result = "";
    result += `
    <div class="card">
    <img src="${item.img}" alt="${item.img}" />
    <span class="title">${item.title}</span>
    <span class="years">${item.years}</span>
    </div>
    `;
    return result;
  });
  const convert = htmlResults.join("");
  songContainer.innerHTML = convert;
};
const eSide = () => {
  const filter = songs.filter((song) => song.album.includes("e-side"));
  const htmlResults = filter.map((item) => {
    result = "";
    result += `
    <div class="card">
    <img src="${item.img}" alt="${item.img}" />
    <span class="title">${item.title}</span>
    <span class="years">${item.years}</span>
    </div>
    `;
    return result;
  });
  const convert = htmlResults.join("");
  songContainer.innerHTML = convert;
};
const hajimeteNoEP = () => {
  const filter = songs.filter((song) => song.album.includes("hajimete no-ep"));
  const htmlResults = filter.map((item) => {
    result = "";
    result += `
    <div class="card">
    <img src="${item.img}" alt="${item.img}" />
    <span class="title">${item.title}</span>
    <span class="years">${item.years}</span>
    </div>
    `;
    return result;
  });
  const convert = htmlResults.join("");
  songContainer.innerHTML = convert;
};
const all = () => {
  const htmlResults = songs.map((item) => {
    result = "";
    result += `
    <div class="card">
      <img src="${item.img}" alt="${item.img}" />
      <span class="title">${item.title}</span>
      <span class="years">${item.years}</span>
    </div>
    `;
    return result;
  });
  const convert = htmlResults.join("");
  songContainer.innerHTML = convert;
};
albumList.forEach((list) => {
  list.addEventListener("click", (e) => {
    const albumName = e.target.innerText;
    if (albumName === "All") {
      all();
    } else if (albumName === "The Book") {
      theBook();
    } else if (albumName === "The Book 2") {
      theBook2();
    } else if (albumName === "E-Side") {
      eSide();
    } else if (albumName === "Hajimete no-EP") {
      hajimeteNoEP();
    }
  });
});
all();
