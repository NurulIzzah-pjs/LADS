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
   { filename: "SYLUS78.jpg", twitterLink: "https://x.com/mephistomum/status/1946508489859473424" },
  { filename: "SYLUS77.jpg", twitterLink: "https://x.com/mephistomum/status/1946742382411878756" },
  { filename: "SYLUS76.jpg", twitterLink: "https://x.com/mephistomum/status/1946025270324142487" },
   { filename: "MC12.jpg", twitterLink: "https://x.com/mephistomum/status/1943170388886003954" },
  { filename: "MC9.jpg", twitterLink: "https://x.com/mephistomum/status/1941503185488855320" },
  { filename: "MC10.jpg", twitterLink: "https://x.com/mephistomum/status/1943287348952994063" },
     { filename: "MC35.jpg", twitterLink: "https://x.com/mephistomum/status/1945687731235180574" },
   { filename: "MC38.jpg", twitterLink: "https://x.com/mephistomum/status/1946029215788470732" },
    { filename: "MC39.jpg", twitterLink: "https://x.com/mephistomum/status/1946368091535098005" },
       { filename: "MC34_UNIV8.jpg", twitterLink: "https://x.com/mephistomum/status/1945655814469062761" },
    { filename: "MC36.jpg", twitterLink: "https://x.com/mephistomum/status/1945687731235180574" },
  { filename: "MC1.jpg", twitterLink: "https://x.com/mephistomum/status/1940706716460741024" },
  { filename: "MC2.jpg", twitterLink: "#https://x.com/mephistomum/status/1940709217113174082" },
   { filename: "MC37.jpg", twitterLink: "https://x.com/mephistomum/status/1943956266533236847" },
   { filename: "MC42.jpg", twitterLink: "https://x.com/mephistomum/status/1947745975314833605" },
   { filename: "MC43.jpg", twitterLink: "https://x.com/mephistomum/status/1947745975314833605" },
   { filename: "MC41.jpg", twitterLink: "https://x.com/mephistomum/status/1947489103546880208" },
   { filename: "MC40.jpg", twitterLink: "https://x.com/mephistomum/status/1947528831235199351" },
   { filename: "MC45.jpg", twitterLink: "https://x.com/mephistomum/status/1947235727944867873" },
   { filename: "MC44.jpg", twitterLink: "https://x.com/mephistomum/status/1947242494246158513" },
{ filename: "MC8.jpg", twitterLink: "https://x.com/mephistomum/status/1941987896518676710" },
  { filename: "MC3.jpg", twitterLink: "https://x.com/mephistomum/status/1940723123424579748" },
  { filename: "MC4.jpg", twitterLink: "https://x.com/mephistomum/status/1940828642046845320" },
  { filename: "MC5.jpg", twitterLink: "https://x.com/mephistomum/status/1941275891570704613" },
  { filename: "MC6.jpg", twitterLink: "https://x.com/mephistomum/status/1942742653436846157" },
  { filename: "MC7.jpg", twitterLink: "https://x.com/mephistomum/status/1942394379353895197" },
  { filename: "MC11.jpg", twitterLink: "https://x.com/mephistomum/status/1943293135951663159" },
    { filename: "RAFAYEL12.jpg", twitterLink: "https://x.com/mephistomum/status/1946753368300376574" },
    { filename: "RAFAYEL11.jpg", twitterLink: "https://x.com/mephistomum/status/1945846519380545592" },
  { filename: "RAFAYEL1_UNIV1.jpg", twitterLink: "https://x.com/mephistomum/status/1944549367274438752" },
  { filename: "RAFAYEL2_UNIV2.jpg", twitterLink: "https://x.com/mephistomum/status/1943630155249009008" },
  { filename: "SYLUS3.jpg", twitterLink: "https://x.com/mephistomum/status/1941271218528845911" },
  { filename: "SYLUS4.jpg", twitterLink: "https://x.com/mephistomum/status/1944592056229544041" },
  { filename: "SYLUS7.jpg", twitterLink: "https://x.com/mephistomum/status/1943914804445688026" },
  { filename: "SYLUS8.jpg", twitterLink: "https://x.com/mephistomum/status/1941986020897255902" },
  { filename: "SYLUS9_UNIV2.jpg", twitterLink: "https://x.com/mephistomum/status/1943630155249009008" },
  { filename: "SYLUS10.jpg", twitterLink: "https://x.com/mephistomum/status/1941765807597551992" },
  { filename: "SYLUS11.jpg", twitterLink: "https://x.com/mephistomum/status/1943621111402651684" },
  { filename: "SYLUS12_UNIV3.jpg", twitterLink: "https://x.com/mephistomum/status/1941625030573687127" },
  { filename: "SYLUS13.jpg", twitterLink: "https://x.com/mephistomum/status/1941871515718623385" },
  { filename: "SYLUS14.jpg", twitterLink: "https://x.com/mephistomum/status/1941493286914691283" },
  { filename: "SYLUS15_UNIV4.jpg", twitterLink: "https://x.com/mephistomum/status/1943206810376376379" },
  { filename: "SYLUS16.jpg", twitterLink: "https://x.com/mephistomum/status/1943114751145586933" },
  { filename: "SYLUS17.jpg", twitterLink: "https://x.com/mephistomum/status/1943122785100009968" },
  { filename: "SYLUS79.jpg", twitterLink: "https://x.com/mephistomum/status/1946514780585689205" },
   { filename: "SYLUS75.jpg", twitterLink: "https://x.com/mephistomum/status/1941858823016497395" },
    { filename: "SYLUS74.jpg", twitterLink: "https://x.com/mephistomum/status/1945802726304350531" },
     { filename: "SYLUS80.jpg", twitterLink: "https://x.com/mephistomum/status/1947274804547227996" },
      { filename: "SYLUS81.jpg", twitterLink: "https://x.com/mephistomum/status/1947482221889392682" },
       { filename: "SYLUS82.jpg", twitterLink: "https://x.com/mephistomum/status/1947223131317502134" },
        { filename: "SYLUS83.jpg", twitterLink: "https://x.com/mephistomum/status/1947614242317996313" },
  { filename: "CALEB1_UNIV1.jpg", twitterLink: "https://x.com/mephistomum/status/1944549367274438752" },
  { filename: "CALEB2.jpg", twitterLink: "https://x.com/mephistomum/status/1944345708120977517" },
  { filename: "CALEB3_UNIV2.jpg", twitterLink: "https://x.com/mephistomum/status/1943630155249009008" },
  { filename: "CALEB4_UNIV3.jpg", twitterLink: "https://x.com/mephistomum/status/1941625030573687127" },
  { filename: "XAVIER1_UNIV1.jpg", twitterLink: "https://x.com/mephistomum/status/1944549367274438752" },
  { filename: "XAVIER2_UNIV2.jpg", twitterLink: "https://x.com/mephistomum/status/1943630155249009008" },
    { filename: "XAVIER10", twitterLink: "https://x.com/mephistomum/status/1947229931705934246" },
  { filename: "ZAYNE9.jpg", twitterLink: "https://x.com/mephistomum/status/1945807053412515904" },
  { filename: "ZAYNE1_UNIV1.PNG", twitterLink: "https://x.com/mephistomum/status/1944549367274438752" },
  { filename: "ZAYNE2.jpg", twitterLink: "https://x.com/mephistomum/status/1944029345473081357" },
  { filename: "ZAYNE3_UNIV2.jpg", twitterLink: "https://x.com/mephistomum/status/1943630155249009008" },
  { filename: "ZAYNE10.jpg", twitterLink: "https://x.com/mephistomum/status/1945811197800153097" },
  { filename: "CALEB5.jpg", twitterLink: "https://x.com/mephistomum/status/1905799995456192526" },
  { filename: "CALEB6_UNIV5.jpg", twitterLink: "https://x.com/mephistomum/status/1918341272265474545" },
  { filename: "CALEB7.jpg", twitterLink: "https://x.com/mephistomum/status/1933321292893298892" },
  { filename: "CALEB8_UNIV6.jpg", twitterLink: "https://x.com/mephistomum/status/1920064491339034955" },
  { filename: "CALEB9_UNIV7.jpg", twitterLink: "https://x.com/mephistomum/status/1931540767702655191" },
  { filename: "CALEB10.jpg", twitterLink: "https://x.com/mephistomum/status/1931488023197421671" },
   { filename: "CALEB11_UNIV8.jpg", twitterLink: "https://x.com/mephistomum/status/1945655814469062761" },
  { filename: "COUPLE1F.jpg", twitterLink: "https://x.com/mephistomum/status/1916758508487475260" },
  { filename: "COUPLE1M.jpg", twitterLink: "https://x.com/mephistomum/status/1916758508487475260" },
  { filename: "COUPLE2F.jpg", twitterLink: "https://x.com/mephistomum/status/1919002263143805222" },
  { filename: "COUPLE2M.jpg", twitterLink: "https://x.com/mephistomum/status/1919002263143805222" },
    { filename: "COUPLE3F.jpg", twitterLink: "https://x.com/mephistomum/status/1937451192067719646" },
  { filename: "COUPLE3M.jpg", twitterLink: "https://x.com/mephistomum/status/1937451192067719646" },
  { filename: "MC13.jpg", twitterLink: "https://x.com/mephistomum/status/1909934399489192221" },
  { filename: "MC14.jpg", twitterLink: "https://x.com/mephistomum/status/1910847621205275081" },
  { filename: "MC15.jpg", twitterLink: "https://x.com/mephistomum/status/1914352106557022719" },
  { filename: "MC16.jpg", twitterLink: "https://x.com/mephistomum/status/1921514133586932096" },
  { filename: "MC17.jpg", twitterLink: "https://x.com/mephistomum/status/1923269147334435274" },
  { filename: "MC18.jpg", twitterLink: "https://x.com/mephistomum/status/1924384155674333194" },
  { filename: "MC19.jpg", twitterLink: "https://x.com/mephistomum/status/1931069180868284476" },
  { filename: "MC20.jpg", twitterLink: "https://x.com/mephistomum/status/1931547034949181824" },
  { filename: "MC21.jpg", twitterLink: "https://x.com/mephistomum/status/1932417559481217346" },
  { filename: "MC22.jpg", twitterLink: "https://x.com/mephistomum/status/1933210188946997342" },
  { filename: "MC23.jpg", twitterLink: "https://x.com/mephistomum/status/1935117272902943221" },
  { filename: "MC24.jpg", twitterLink: "https://x.com/mephistomum/status/1935122589455892493" },
  { filename: "MC25.jpg", twitterLink: "https://x.com/mephistomum/status/1936967969525166450" },
  { filename: "MC26.jpg", twitterLink: "https://x.com/mephistomum/status/1938207952852422851" },
  { filename: "MC27.jpg", twitterLink: "https://x.com/mephistomum/status/1938446415065452724" },
  { filename: "MC28.jpg", twitterLink: "https://x.com/mephistomum/status/1940830369332580844" },
  { filename: "MC29.jpg", twitterLink: "https://x.com/mephistomum/status/1941486964106199502" },
  { filename: "MC30_UNIV6.jpg", twitterLink: "https://x.com/mephistomum/status/1920064491339034955" },
  { filename: "MC31.PNG", twitterLink: "https://x.com/mephistomum/status/1902552553264660667" },
  { filename: "MC32.PNG", twitterLink: "https://x.com/mephistomum/status/1886649769474568223" },
  { filename: "MC33.jpg", twitterLink: "https://x.com/mephistomum/status/1904098527292408276" },
  { filename: "RAFAYEL3.jpg", twitterLink: "https://x.com/mephistomum/status/1935936354585854074" },
  { filename: "RAFAYEL5_UNIV6.jpg", twitterLink: "https://x.com/mephistomum/status/1920064491339034955" },
  { filename: "RAFAYEL6_UNIV5.jpg", twitterLink: "https://x.com/mephistomum/status/1918341272265474545" },
  { filename: "RAFAYEL7.jpg", twitterLink: "https://x.com/mephistomum/status/1928760466714550595" },
  { filename: "RAFAYEL8.PNG", twitterLink: "https://x.com/mephistomum/status/1905208741743796377" },
  { filename: "RAFAYEL9.PNG", twitterLink: "https://x.com/mephistomum/status/1903733426362187963" },
  { filename: "RAFAYEL4_UNIV7.jpg", twitterLink: "https://x.com/mephistomum/status/1931540767702655191" },
  { filename: "RAFAYEL10_UNIV8.jpg", twitterLink: "https://x.com/mephistomum/status/1945655814469062761" },
  { filename: "SYLUS19.jpg", twitterLink: "https://x.com/mephistomum/status/1945704542173343986" },
  { filename: "SYLUS18.jpg", twitterLink: "https://x.com/mephistomum/status/1907423316249633219" },
  { filename: "SYLUS20.jpg", twitterLink: "https://x.com/mephistomum/status/1909193670357913820" },
  { filename: "SYLUS21.jpg", twitterLink: "https://x.com/mephistomum/status/1909199555922641035" },
  { filename: "SYLUS22.jpg", twitterLink: "https://x.com/mephistomum/status/1909203359007166779" },
  { filename: "SYLUS23.jpg", twitterLink: "https://x.com/mephistomum/status/1910858522188804595" },
  { filename: "SYLUS24.jpg", twitterLink: "https://x.com/mephistomum/status/1910998518262866055" },
  { filename: "SYLUS25.jpg", twitterLink: "https://x.com/mephistomum/status/1911203518905811118" },
  { filename: "SYLUS26.jpg", twitterLink: "https://x.com/mephistomum/status/1911212254902800521" },
  { filename: "SYLUS27.jpg", twitterLink: "https://x.com/mephistomum/status/1913561269069861301" },
  { filename: "SYLUS28.jpg", twitterLink: "https://x.com/mephistomum/status/1911331573112222103" },
  { filename: "SYLUS29.jpg", twitterLink: "https://x.com/mephistomum/status/1913040487352836595" },
  {filename: "SYLUS30.jpg", twitterLink: "https://x.com/mephistomum/status/1914248795656778081" },
  { filename: "SYLUS31.jpg", twitterLink: "https://x.com/mephistomum/status/1914885094499868975" },
  { filename: "SYLUS32.jpg", twitterLink: "https://x.com/mephistomum/status/1916696561595371688" },
  { filename: "SYLUS33_UNIV5.jpg", twitterLink: "https://x.com/mephistomum/status/1918341272265474545" },
  { filename: "SYLUS34.jpg", twitterLink: "https://x.com/mephistomum/status/1918487562513178736" },
  { filename: "SYLUS35.jpg", twitterLink: "https://x.com/mephistomum/status/1919235874644251111" },
  { filename: "SYLUS36.jpg", twitterLink: "https://x.com/mephistomum/status/1919676369673580590" },
  { filename: "SYLUS37_UNIV6.jpg", twitterLink: "https://x.com/mephistomum/status/1920064491339034955" },
  { filename: "SYLUS38.jpg", twitterLink: "https://x.com/mephistomum/status/1921821380892332262" },
  { filename: "SYLUS39.jpg", twitterLink: "https://x.com/mephistomum/status/1922813888434696377" },
  { filename: "SYLUS40.jpg", twitterLink: "https://x.com/mephistomum/status/1927879606650196121" },
  { filename: "SYLUS41.jpg", twitterLink: "https://x.com/mephistomum/status/1927887352845779428" },
  { filename: "SYLUS42.jpg", twitterLink: "https://x.com/mephistomum/status/1927889068987404491" },
  { filename: "SYLUS43.jpg", twitterLink: "https://x.com/mephistomum/status/1928376769515561247" },
  { filename: "SYLUS44.jpg", twitterLink: "https://x.com/mephistomum/status/1928384816891744483" },
  { filename: "SYLUS45.jpg", twitterLink: "https://x.com/mephistomum/status/1929820376886137082" },
  { filename: "SYLUS46.jpg", twitterLink: "https://x.com/mephistomum/status/1929826309859168667" },
  { filename: "SYLUS47.jpg", twitterLink: "https://x.com/mephistomum/status/1930230223204929628" },
  { filename: "SYLUS48.jpg", twitterLink: "https://x.com/mephistomum/status/1930238391897207144" },
  { filename: "SYLUS49.jpg", twitterLink: "https://x.com/mephistomum/status/1931270871118987414" },
  { filename: "SYLUS50_UNIV7.jpg", twitterLink: "https://x.com/mephistomum/status/1931540767702655191" },
  { filename: "SYLUS51.jpg", twitterLink: "https://x.com/mephistomum/status/1932369567319531935" },
  { filename: "SYLUS52.jpg", twitterLink: "https://x.com/mephistomum/status/1932610858909381044" },
  { filename: "SYLUS53.jpg", twitterLink: "https://x.com/mephistomum/status/1933407992734732363" },
  { filename: "SYLUS54.jpg", twitterLink: "https://x.com/mephistomum/status/1937077454067392661" },
  { filename: "SYLUS55.jpg", twitterLink: "https://x.com/mephistomum/status/1937120021702140246" },
  { filename: "SYLUS56.jpg", twitterLink: "https://x.com/mephistomum/status/1937120021702140246" },
  { filename: "SYLUS57.jpg", twitterLink: "https://x.com/mephistomum/status/1937120021702140246" },
  { filename: "SYLUS58.jpg", twitterLink: "https://x.com/mephistomum/status/1937120021702140246" },
  { filename: "SYLUS59.jpg", twitterLink: "https://x.com/mephistomum/status/1937120021702140246" },
  { filename: "SYLUS60.jpg", twitterLink: "https://x.com/mephistomum/status/1937120021702140246" },
  { filename: "SYLUS61.jpg", twitterLink: "https://x.com/mephistomum/status/1937120021702140246" },
  { filename: "SYLUS62.jpg", twitterLink: "https://x.com/mephistomum/status/1938240652007063590" },
  { filename: "SYLUS63.jpg", twitterLink: "https://x.com/mephistomum/status/1938414252110581932" },
  { filename: "SYLUS64.jpg", twitterLink: "https://x.com/mephistomum/status/1938419044140650828" },
  { filename: "SYLUS65.jpg", twitterLink: "https://x.com/mephistomum/status/1940364201547174323" },
  { filename: "SYLUS66.jpg", twitterLink: "https://x.com/mephistomum/status/1940357313254342795" },
  { filename: "SYLUS67.PNG", twitterLink: "https://x.com/mephistomum/status/1903450179468206094" },
  { filename: "SYLUS68.PNG", twitterLink: "https://x.com/mephistomum/status/1899409406351270328" },
  { filename: "SYLUS69.PNG", twitterLink: "https://x.com/mephistomum/status/1904879983233032293" },
  { filename: "SYLUS70.PNG", twitterLink: "https://x.com/mephistomum/status/1896876166562394123" },
   { filename: "SYLUS71.jpg", twitterLink: "https://x.com/mephistomum/status/1941495453536878986" },
   { filename: "SYLUS72.jpg", twitterLink: "https://x.com/mephistomum/status/1927490189771063490" },
   { filename: "SYLUS73_UNIV8.jpg", twitterLink: "https://x.com/mephistomum/status/1945655814469062761" },
  { filename: "XAVIER3_UNIV5.jpg", twitterLink: "https://x.com/mephistomum/status/1918341272265474545" },
  { filename: "XAVIER4_UNIV6.jpg", twitterLink: "https://x.com/mephistomum/status/1920064491339034955" },
  { filename: "XAVIER5_UNIV7.jpg", twitterLink: "https://x.com/mephistomum/status/1931540767702655191" },
  { filename: "XAVIER6.PNG", twitterLink: "https://x.com/mephistomum/status/1905143930280357895" },
    { filename: "XAVIER7.jpg", twitterLink: "https://x.com/mephistomum/status/1945277972778238092" },
    { filename: "XAVIER8_UNIV8.jpg", twitterLink: "https://x.com/mephistomum/status/1945655814469062761" },
  { filename: "ZAYNE4_UNIV5.jpg", twitterLink: "https://x.com/mephistomum/status/1918341272265474545" },
  { filename: "ZAYNE5_UNIV6.jpg", twitterLink: "https://x.com/mephistomum/status/1920064491339034955" },
  { filename: "ZAYNE6.jpg", twitterLink: "https://x.com/mephistomum/status/1924597497789612506" },
  { filename: "ZAYNE7_UNIV7.jpg", twitterLink: "https://x.com/mephistomum/status/1931540767702655191" },
  { filename: "ZAYNE8_UNIV8.jpg", twitterLink: "https://x.com/mephistomum/status/1945655814469062761" }
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
          ? ` <a href="${twitterLink}" target="_blank" rel="noopener" 
                class="mt-2 mx-auto mb-4 text-center bg-[#a27c67] text-white px-4 py-1 rounded-full w-31 hover:bg-[#8d6d57] transition text-sm">
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