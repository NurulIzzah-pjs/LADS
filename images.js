// const imageList = [
//   "SYLUS1.jpg", "SYLUS2.jpg","SYLUS5.jpg",
//   "SYLUS6_UNIV1.jpg",
//   "MC1.jpg", "MC2.jpg", "MC3.jpg", "MC4.jpg", "MC5.jpg", "MC6.jpg", "MC7.jpg", "MC8.jpg", "MC9.jpg", "MC10.jpg", "MC11.jpg", "MC12.jpg",
//   "RAFAYEL1_UNIV1.jpg", "RAFAYEL2_UNIV2.jpg",
//    "SYLUS3.jpg", "SYLUS4.jpg", "SYLUS7.jpg", "SYLUS8.jpg", "SYLUS9_UNIV2.jpg",
//   "SYLUS10.jpg", "SYLUS11.jpg", "SYLUS12_UNIV3.jpg", "SYLUS13.jpg", "SYLUS14.jpg", "SYLUS15_UNIV4.jpg", "SYLUS16.jpg", "SYLUS17.jpg",
//   "CALEB1_UNIV1.jpg", "CALEB2.jpg", "CALEB3_UNIV2.jpg", "CALEB4_UNIV3.jpg",
//   "XAVIER1_UNIV1.jpg", "XAVIER2_UNIV2.jpg",
//   "ZAYNE1_UNIV1.PNG", "ZAYNE2.jpg", "ZAYNE3_UNIV2.jpg",

//     // New from second image
//   "CALEB5.jpg","CALEB6_UNIV5.jpg", "CALEB7.jpg", "CALEB8_UNIV6.jpg", "CALEB9_UNIV7.jpg", "CALEB10.jpg",
//   "COUPLE1F.jpg", "COUPLE1M.jpg", "COUPLE2F.jpg", "COUPLE2M.jpg",
//   "MC13.jpg", "MC14.jpg", "MC15.jpg", "MC16.jpg", "MC17.jpg", "MC18.jpg", "MC19.jpg", "MC20.jpg", "MC21.jpg", "MC22.jpg", "MC23.jpg", "MC24.jpg", "MC25.jpg", "MC26.jpg", "MC27.jpg", "MC28.jpg", "MC29.jpg", "MC30_UNIV6.jpg","MC31.PNG","MC32.PNG","MC33.jpg",
//   "RAFAYEL3.jpg", "RAFAYEL5_UNIV6.jpg", "RAFAYEL6_UNIV5.jpg", "RAFAYEL7.jpg","RAFAYEL8.PNG","RAFAYEL9.PNG",
//   "RAFAYEL4_UNIV7.jpg",
//   "SYLUS18.jpg", "SYLUS19.jpg", "SYLUS20.jpg", "SYLUS21.jpg", "SYLUS22.jpg", "SYLUS23.jpg", "SYLUS24.jpg", "SYLUS25.jpg", "SYLUS26.jpg", "SYLUS27.jpg", "SYLUS28.jpg", "SYLUS29.jpg",
//   "SYLUS31.jpg", "SYLUS32.jpg", "SYLUS33_UNIV5.jpg", "SYLUS34.jpg", "SYLUS35.jpg", "SYLUS36.jpg", "SYLUS37_UNIV6.jpg", "SYLUS38.jpg", "SYLUS39.jpg", "SYLUS40.jpg", "SYLUS41.jpg", "SYLUS42.jpg",
//   "SYLUS43.jpg", "SYLUS44.jpg", "SYLUS45.jpg", "SYLUS46.jpg", "SYLUS47.jpg", "SYLUS48.jpg", "SYLUS49.jpg", "SYLUS50_UNIV7.jpg", "SYLUS51.jpg", "SYLUS52.jpg", "SYLUS53.jpg", "SYLUS54.jpg", "SYLUS55.jpg",
//   "SYLUS56.jpg", "SYLUS57.jpg", "SYLUS58.jpg", "SYLUS59.jpg", "SYLUS60.jpg", "SYLUS61.jpg", "SYLUS63.jpg", "SYLUS64.jpg", "SYLUS65.jpg", "SYLUS66.jpg","SYLUS67.PNG","SYLUS68.PNG","SYLUS69.PNG","SYLUS70.PNG",
//   "XAVIER3_UNIV5.jpg","XAVIER4_UNIV6.jpg", "XAVIER5_UNIV7.jpg","XAVIER6.PNG",
//   "ZAYNE4_UNIV5.jpg", "ZAYNE5_UNIV6.jpg", "ZAYNE6.jpg", "ZAYNE7_UNIV7.jpg"
// ];


// function renderGallery(filter = "ALL") {
//   const gallery = document.getElementById("gallery");
//   gallery.innerHTML = "";

//   const filtered = imageList.filter(filename => {
//     const upperFilename = filename.toUpperCase();

//     if (filter === "ALL") return true;
//     if (filter === "UNIV") return upperFilename.includes("_UNIV");
//     return upperFilename.startsWith(filter);
//   });

//   filtered.forEach(filename => {
//     const imageURL = `/assets/images/${filename}`;
//     const altText = filename.replace(/\.[^/.]+$/, "").replace(/_/g, " ");

//     const article = document.createElement("article");
//     article.className = "flex flex-col border border-gray-300 rounded shadow-sm overflow-hidden bg-white";

//     article.innerHTML = `
//       <div class="relative w-full aspect-[3/4] bg-gray-100">
//         <a href="${imageURL}" download>
//           <img src="${imageURL}" alt="${altText}" class="w-full h-full object-cover" loading="lazy" onerror="this.style.display='none'" />
//         </a>
//       </div>
//     `;

//     gallery.appendChild(article);
//   });
// }




// document.querySelectorAll("nav button").forEach(button => {
//   button.addEventListener("click", () => {
//     const category = button.textContent.trim().toUpperCase();

//     // ✅ Update image gallery
//     renderGallery(category);

//     // ✅ Update title text
//     const titleElement = document.getElementById("galleryTitle");
//     titleElement.textContent = `${category} TEMPLATES`;

//     // ✅ Update active button styles
//     document.querySelectorAll("nav button").forEach(btn => {
//       btn.classList.remove("bg-[#d4bfaf]", "text-[#7e624a]");
//       btn.removeAttribute("disabled");
//     });

//     button.classList.add("bg-[#d4bfaf]", "text-[#7e624a]");
//     button.setAttribute("disabled", true);
//   });
// });


// // Initial render
// renderGallery("ALL");

const imageList = [
  { filename: "SYLUS1.jpg", twitterLink: "https://x.com/mephistomum/status/1940802154585116787" },
  { filename: "SYLUS2.jpg", twitterLink: "https://x.com/mephistomum/status/1941132096090898597" },
  { filename: "SYLUS5.jpg", twitterLink: "https://x.com/mephistomum/status/1942600224117252199" },
  { filename: "SYLUS6_UNIV1.jpg", twitterLink: "https://x.com/mephistomum/status/1944549367274438752" },
  { filename: "MC1.jpg", twitterLink: "#" },
  { filename: "MC2.jpg", twitterLink: "#" },
  { filename: "MC3.jpg", twitterLink: "#" },
  { filename: "MC4.jpg", twitterLink: "#" },
  { filename: "MC5.jpg", twitterLink: "#" },
  { filename: "MC6.jpg", twitterLink: "#" },
  { filename: "MC7.jpg", twitterLink: "#" },
  { filename: "MC8.jpg", twitterLink: "#" },
  { filename: "MC9.jpg", twitterLink: "#" },
  { filename: "MC10.jpg", twitterLink: "#" },
  { filename: "MC11.jpg", twitterLink: "#" },
  { filename: "MC12.jpg", twitterLink: "#" },
  { filename: "RAFAYEL1_UNIV1.jpg", twitterLink: "#" },
  { filename: "RAFAYEL2_UNIV2.jpg", twitterLink: "#" },
  { filename: "SYLUS3.jpg", twitterLink: "#" },
  { filename: "SYLUS4.jpg", twitterLink: "#" },
  { filename: "SYLUS7.jpg", twitterLink: "#" },
  { filename: "SYLUS8.jpg", twitterLink: "#" },
  { filename: "SYLUS9_UNIV2.jpg", twitterLink: "#" },
  { filename: "SYLUS10.jpg", twitterLink: "#" },
  { filename: "SYLUS11.jpg", twitterLink: "#" },
  { filename: "SYLUS12_UNIV3.jpg", twitterLink: "#" },
  { filename: "SYLUS13.jpg", twitterLink: "#" },
  { filename: "SYLUS14.jpg", twitterLink: "#" },
  { filename: "SYLUS15_UNIV4.jpg", twitterLink: "#" },
  { filename: "SYLUS16.jpg", twitterLink: "#" },
  { filename: "SYLUS17.jpg", twitterLink: "#" },
  { filename: "CALEB1_UNIV1.jpg", twitterLink: "#" },
  { filename: "CALEB2.jpg", twitterLink: "#" },
  { filename: "CALEB3_UNIV2.jpg", twitterLink: "#" },
  { filename: "CALEB4_UNIV3.jpg", twitterLink: "#" },
  { filename: "XAVIER1_UNIV1.jpg", twitterLink: "#" },
  { filename: "XAVIER2_UNIV2.jpg", twitterLink: "#" },
  { filename: "ZAYNE1_UNIV1.PNG", twitterLink: "#" },
  { filename: "ZAYNE2.jpg", twitterLink: "#" },
  { filename: "ZAYNE3_UNIV2.jpg", twitterLink: "#" },
  { filename: "CALEB5.jpg", twitterLink: "#" },
  { filename: "CALEB6_UNIV5.jpg", twitterLink: "#" },
  { filename: "CALEB7.jpg", twitterLink: "#" },
  { filename: "CALEB8_UNIV6.jpg", twitterLink: "#" },
  { filename: "CALEB9_UNIV7.jpg", twitterLink: "#" },
  { filename: "CALEB10.jpg", twitterLink: "#" },
  { filename: "COUPLE1F.jpg", twitterLink: "#" },
  { filename: "COUPLE1M.jpg", twitterLink: "#" },
  { filename: "COUPLE2F.jpg", twitterLink: "#" },
  { filename: "COUPLE2M.jpg", twitterLink: "#" },
  { filename: "MC13.jpg", twitterLink: "#" },
  { filename: "MC14.jpg", twitterLink: "#" },
  { filename: "MC15.jpg", twitterLink: "#" },
  { filename: "MC16.jpg", twitterLink: "#" },
  { filename: "MC17.jpg", twitterLink: "#" },
  { filename: "MC18.jpg", twitterLink: "#" },
  { filename: "MC19.jpg", twitterLink: "#" },
  { filename: "MC20.jpg", twitterLink: "#" },
  { filename: "MC21.jpg", twitterLink: "#" },
  { filename: "MC22.jpg", twitterLink: "#" },
  { filename: "MC23.jpg", twitterLink: "#" },
  { filename: "MC24.jpg", twitterLink: "#" },
  { filename: "MC25.jpg", twitterLink: "#" },
  { filename: "MC26.jpg", twitterLink: "#" },
  { filename: "MC27.jpg", twitterLink: "#" },
  { filename: "MC28.jpg", twitterLink: "#" },
  { filename: "MC29.jpg", twitterLink: "#" },
  { filename: "MC30_UNIV6.jpg", twitterLink: "#" },
  { filename: "MC31.PNG", twitterLink: "#" },
  { filename: "MC32.PNG", twitterLink: "#" },
  { filename: "MC33.jpg", twitterLink: "#" },
  { filename: "RAFAYEL3.jpg", twitterLink: "#" },
  { filename: "RAFAYEL5_UNIV6.jpg", twitterLink: "#" },
  { filename: "RAFAYEL6_UNIV5.jpg", twitterLink: "#" },
  { filename: "RAFAYEL7.jpg", twitterLink: "#" },
  { filename: "RAFAYEL8.PNG", twitterLink: "#" },
  { filename: "RAFAYEL9.PNG", twitterLink: "#" },
  { filename: "RAFAYEL4_UNIV7.jpg", twitterLink: "#" },
  { filename: "SYLUS18.jpg", twitterLink: "#" },
  { filename: "SYLUS19.jpg", twitterLink: "#" },
  { filename: "SYLUS20.jpg", twitterLink: "#" },
  { filename: "SYLUS21.jpg", twitterLink: "#" },
  { filename: "SYLUS22.jpg", twitterLink: "#" },
  { filename: "SYLUS23.jpg", twitterLink: "#" },
  { filename: "SYLUS24.jpg", twitterLink: "#" },
  { filename: "SYLUS25.jpg", twitterLink: "#" },
  { filename: "SYLUS26.jpg", twitterLink: "#" },
  { filename: "SYLUS27.jpg", twitterLink: "#" },
  { filename: "SYLUS28.jpg", twitterLink: "#" },
  { filename: "SYLUS29.jpg", twitterLink: "#" },
  { filename: "SYLUS31.jpg", twitterLink: "#" },
  { filename: "SYLUS32.jpg", twitterLink: "#" },
  { filename: "SYLUS33_UNIV5.jpg", twitterLink: "#" },
  { filename: "SYLUS34.jpg", twitterLink: "#" },
  { filename: "SYLUS35.jpg", twitterLink: "#" },
  { filename: "SYLUS36.jpg", twitterLink: "#" },
  { filename: "SYLUS37_UNIV6.jpg", twitterLink: "#" },
  { filename: "SYLUS38.jpg", twitterLink: "#" },
  { filename: "SYLUS39.jpg", twitterLink: "#" },
  { filename: "SYLUS40.jpg", twitterLink: "#" },
  { filename: "SYLUS41.jpg", twitterLink: "#" },
  { filename: "SYLUS42.jpg", twitterLink: "#" },
  { filename: "SYLUS43.jpg", twitterLink: "#" },
  { filename: "SYLUS44.jpg", twitterLink: "#" },
  { filename: "SYLUS45.jpg", twitterLink: "#" },
  { filename: "SYLUS46.jpg", twitterLink: "#" },
  { filename: "SYLUS47.jpg", twitterLink: "#" },
  { filename: "SYLUS48.jpg", twitterLink: "#" },
  { filename: "SYLUS49.jpg", twitterLink: "#" },
  { filename: "SYLUS50_UNIV7.jpg", twitterLink: "#" },
  { filename: "SYLUS51.jpg", twitterLink: "#" },
  { filename: "SYLUS52.jpg", twitterLink: "#" },
  { filename: "SYLUS53.jpg", twitterLink: "#" },
  { filename: "SYLUS54.jpg", twitterLink: "#" },
  { filename: "SYLUS55.jpg", twitterLink: "#" },
  { filename: "SYLUS56.jpg", twitterLink: "#" },
  { filename: "SYLUS57.jpg", twitterLink: "#" },
  { filename: "SYLUS58.jpg", twitterLink: "#" },
  { filename: "SYLUS59.jpg", twitterLink: "#" },
  { filename: "SYLUS60.jpg", twitterLink: "#" },
  { filename: "SYLUS61.jpg", twitterLink: "#" },
  { filename: "SYLUS63.jpg", twitterLink: "#" },
  { filename: "SYLUS64.jpg", twitterLink: "#" },
  { filename: "SYLUS65.jpg", twitterLink: "#" },
  { filename: "SYLUS66.jpg", twitterLink: "#" },
  { filename: "SYLUS67.PNG", twitterLink: "#" },
  { filename: "SYLUS68.PNG", twitterLink: "#" },
  { filename: "SYLUS69.PNG", twitterLink: "#" },
  { filename: "SYLUS70.PNG", twitterLink: "#" },
  { filename: "XAVIER3_UNIV5.jpg", twitterLink: "#" },
  { filename: "XAVIER4_UNIV6.jpg", twitterLink: "#" },
  { filename: "XAVIER5_UNIV7.jpg", twitterLink: "#" },
  { filename: "XAVIER6.PNG", twitterLink: "#" },
  { filename: "ZAYNE4_UNIV5.jpg", twitterLink: "#" },
  { filename: "ZAYNE5_UNIV6.jpg", twitterLink: "#" },
  { filename: "ZAYNE6.jpg", twitterLink: "#" },
  { filename: "ZAYNE7_UNIV7.jpg", twitterLink: "#" }
];


function renderGallery(filter = "ALL") {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const filtered = imageList.filter(image => {
    const upperFilename = image.filename.toUpperCase();

    if (filter === "ALL") return true;
    if (filter === "UNIV") return upperFilename.includes("_UNIV");
    return upperFilename.startsWith(filter);
  });

  filtered.forEach(image => {
    const imageURL = `/assets/images/${image.filename}`;
    const altText = image.filename.replace(/\.[^/.]+$/, "").replace(/_/g, " ");
    const twitterLink = image.twitterLink;

    const article = document.createElement("article");
    article.className = "flex flex-col border border-gray-300 rounded shadow-sm overflow-hidden bg-white";

    article.innerHTML = `
      <div class="relative w-full aspect-[3/4] bg-gray-100">
        <a href="${imageURL}" download>
          <img src="${imageURL}" alt="${altText}" class="w-full h-full object-cover" loading="lazy" onerror="this.style.display='none'" />
        </a>
      </div>
      ${
        twitterLink
          ? `<a href="${twitterLink}" target="_blank" rel="noopener" 
                class="mt-2 mx-auto mb-4 text-center bg-[#a27c67] text-white px-4 py-1 rounded-full w-32 hover:bg-[#8d6d57] transition text-sm">
                View on X
             </a>`
          : ""
      }
    `;

    gallery.appendChild(article);
  });
}

document.querySelectorAll("nav button").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.textContent.trim().toUpperCase();

    // ✅ Update image gallery
    renderGallery(category);

    // ✅ Update title text
    const titleElement = document.getElementById("galleryTitle");
    titleElement.textContent = `${category} TEMPLATES`;

    // ✅ Update active button styles
    document.querySelectorAll("nav button").forEach(btn => {
      btn.classList.remove("bg-[#d4bfaf]", "text-[#7e624a]");
      btn.removeAttribute("disabled");
    });

    button.classList.add("bg-[#d4bfaf]", "text-[#7e624a]");
    button.setAttribute("disabled", true);
  });
});

// Initial render
renderGallery("ALL");