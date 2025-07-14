// const imageList = [
//   "MC1.jpg", "MC2.jpg", "MC3.jpg", "MC4.jpg", "MC5.jpg",
//   "SYLUS1.jpg", "SYLUS2.jpg", "SYLUS3.jpg",
//   "ZAYNE1.jpg", "CALEB1.jpg", "RAFAYEL1.jpg", "XAVIER1.jpg"
// ];

// function renderGallery(filter = "ALL") {
//   const gallery = document.getElementById("gallery");
//   gallery.innerHTML = "";

//   const filtered = imageList.filter(filename =>
//     filter === "ALL" || filename.toUpperCase().startsWith(filter)
//   );

//   filtered.forEach(filename => {
//     const imageURL = `/assets/images/${filename}`;
//     const altText = filename.replace(/\.[^/.]+$/, "").replace(/_/g, " ");

//     const article = document.createElement("article");
//     article.className = "flex flex-col border border-gray-300 rounded shadow-sm overflow-hidden bg-white";

//     article.innerHTML = `
//       <div class="relative w-full aspect-[3/4] bg-gray-100">
//         <img src="${imageURL}" alt="${altText}" class="w-full h-full object-cover" loading="lazy" onerror="this.style.display='none'" />
//         <button type="button"
//           class="absolute bottom-2 right-2 bg-white bg-opacity-90 text-sm rounded px-3 py-1 font-semibold border border-gray-300 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-[#a27c67]"
//           onclick="downloadImage('${imageURL}', '${altText}')"
//           aria-label="Download ${altText}">
//           Download
//         </button>
//       </div>
//     `;
//     gallery.appendChild(article);
//   });
// }

// document.querySelectorAll("nav button").forEach(button => {
//   button.addEventListener("click", () => {
//     const category = button.textContent.trim().toUpperCase();
//     renderGallery(category);
//   });
// });

// function downloadImage(url, filename) {
//   fetch(url, { mode: "cors" })
//     .then(res => {
//       if (!res.ok) throw new Error("Download failed");
//       return res.blob();
//     })
//     .then(blob => {
//       const blobURL = window.URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = blobURL;
//       a.download = filename + ".png";
//       document.body.appendChild(a);
//       a.click();
//       a.remove();
//       URL.revokeObjectURL(blobURL);
//     })
//     .catch(err => {
//       alert("Failed to download image.");
//       console.error(err);
//     });
// }

// renderGallery("ALL");

const imageList = [
  "SYLUS1.jpg", "SYLUS2.jpg","SYLUS5.jpg",
  "SYLUS6_UNIV1.jpg",
  "MC1.jpg", "MC2.jpg", "MC3.jpg", "MC4.jpg", "MC5.jpg", "MC6.jpg", "MC7.jpg", "MC8.jpg", "MC9.jpg", "MC10.jpg", "MC11.jpg", "MC12.jpg",
  "RAFAYEL1_UNIV1.jpg", "RAFAYEL2_UNIV2.jpg",
   "SYLUS3.jpg", "SYLUS4.jpg", "SYLUS7.jpg", "SYLUS8.jpg", "SYLUS9_UNIV2.jpg",
  "SYLUS10.jpg", "SYLUS11.jpg", "SYLUS12_UNIV3.jpg", "SYLUS13.jpg", "SYLUS14.jpg", "SYLUS15_UNIV4.jpg", "SYLUS16.jpg", "SYLUS17.jpg",
  "CALEB1_UNIV1.jpg", "CALEB2.jpg", "CALEB3_UNIV2.jpg", "CALEB4_UNIV3.jpg",
  "XAVIER1_UNIV1.jpg", "XAVIER2_UNIV2.jpg",
  "ZAYNE1_UNIV1.PNG", "ZAYNE2.jpg", "ZAYNE3_UNIV2.jpg",

    // New from second image
  "CALEB5.jpg","CALEB6_UNIV5.jpg", "CALEB7.jpg", "CALEB8_UNIV6.jpg", "CALEB9_UNIV7.jpg", "CALEB10.jpg",
  "COUPLE1F.jpg", "COUPLE1M.jpg", "COUPLE2F.jpg", "COUPLE2M.jpg",
  "MC13.jpg", "MC14.jpg", "MC15.jpg", "MC16.jpg", "MC17.jpg", "MC18.jpg", "MC19.jpg", "MC20.jpg", "MC21.jpg", "MC22.jpg", "MC23.jpg", "MC24.jpg", "MC25.jpg", "MC26.jpg", "MC27.jpg", "MC28.jpg", "MC29.jpg", "MC30_UNIV6.jpg",
  "RAFAYEL3.jpg", "RAFAYEL5_UNIV6.jpg", "RAFAYEL6_UNIV5.jpg", "RAFAYEL7.jpg",
  "RAFAYEL4_UNIV7.jpg",
  "SYLUS18.jpg", "SYLUS19.jpg", "SYLUS20.jpg", "SYLUS21.jpg", "SYLUS22.jpg", "SYLUS23.jpg", "SYLUS24.jpg", "SYLUS25.jpg", "SYLUS26.jpg", "SYLUS27.jpg", "SYLUS28.jpg", "SYLUS29.jpg",
  "SYLUS31.jpg", "SYLUS32.jpg", "SYLUS33_UNIV5.jpg", "SYLUS34.jpg", "SYLUS35.jpg", "SYLUS36.jpg", "SYLUS37_UNIV6.jpg", "SYLUS38.jpg", "SYLUS39.jpg", "SYLUS40.jpg", "SYLUS41.jpg", "SYLUS42.jpg",
  "SYLUS43.jpg", "SYLUS44.jpg", "SYLUS45.jpg", "SYLUS46.jpg", "SYLUS47.jpg", "SYLUS48.jpg", "SYLUS49.jpg", "SYLUS50_UNIV7.jpg", "SYLUS51.jpg", "SYLUS52.jpg", "SYLUS53.jpg", "SYLUS54.jpg", "SYLUS55.jpg",
  "SYLUS56.jpg", "SYLUS57.jpg", "SYLUS58.jpg", "SYLUS59.jpg", "SYLUS60.jpg", "SYLUS61.jpg", "SYLUS63.jpg", "SYLUS64.jpg", "SYLUS65.jpg", "SYLUS66.jpg",
  "XAVIER3_UNIV5.jpg","XAVIER4_UNIV6.jpg", "XAVIER5_UNIV7.jpg",
  "ZAYNE4_UNIV5.jpg", "ZAYNE5_UNIV6.jpg", "ZAYNE6.jpg", "ZAYNE7_UNIV7.jpg"
];


function renderGallery(filter = "ALL") {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const filtered = imageList.filter(filename => {
    const upperFilename = filename.toUpperCase();

    if (filter === "ALL") return true;
    if (filter === "UNIV") return upperFilename.includes("_UNIV");
    return upperFilename.startsWith(filter);
  });

  filtered.forEach(filename => {
    const imageURL = `/assets/images/${filename}`;
    const altText = filename.replace(/\.[^/.]+$/, "").replace(/_/g, " ");

    const article = document.createElement("article");
    article.className = "flex flex-col border border-gray-300 rounded shadow-sm overflow-hidden bg-white";

    article.innerHTML = `
      <div class="relative w-full aspect-[3/4] bg-gray-100">
        <a href="${imageURL}" download>
          <img src="${imageURL}" alt="${altText}" class="w-full h-full object-cover" loading="lazy" onerror="this.style.display='none'" />
        </a>
      </div>
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
