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
  "MC1.jpg", "MC2.jpg", "MC3.jpg", "MC4.jpg", "MC5.jpg",
  "SYLUS1.jpg", "SYLUS2.jpg", "SYLUS3.jpg",
  "ZAYNE1.jpg", "CALEB1.jpg", "RAFAYEL1.jpg", "XAVIER1.jpg"
];

function renderGallery(filter = "ALL") {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const filtered = imageList.filter(filename =>
    filter === "ALL" || filename.toUpperCase().startsWith(filter)
  );

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
    renderGallery(category);

    // 🔄 Reset all buttons
    document.querySelectorAll("nav button").forEach(btn => {
      btn.classList.remove("bg-[#d4bfaf]", "text-[#7e624a]");
      btn.removeAttribute("disabled");
    });

    // ✅ Highlight clicked button
    button.classList.add("bg-[#d4bfaf]", "text-[#7e624a]");
    button.setAttribute("disabled", true);
  });
});

// Initial render
renderGallery("ALL");
