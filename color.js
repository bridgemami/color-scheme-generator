function fetchColors (value, scheme, count=5){
  return fetch(
        `https://www.thecolorapi.com/scheme?hex=${value}&format=json&mode=${scheme}&count=${count}`
      )
}

const renderColors = async function (value, scheme, count = 5) {
  try {
    const res = await fetchColors(value, scheme, count)
    const data = await res.json()
    const schemeEl = document.getElementById("scheme");
        const copyEl = document.getElementById("copy");
        let html = ``;
        let schemeArr = [];
        data.colors.map((color) => {
          schemeArr.push(color.hex.value);
          html += `<div class="col-color">
                <img src="${color.image.bare}" alt="${color.name.closest_named_hex}" class="img-color" />
                <p class='hex-color'>${color.hex.value}</p>
                <p class='name-color'>${color.name.value}</p>
                </div>`;
        });
        schemeArr.join("");
        schemeEl.innerHTML = html;
        copyEl.innerHTML =
          "<button id='btn-copy' class='btn-copy'>Click to copy color scheme</button>";
        const copyBtn = document.getElementById("btn-copy");
        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(schemeArr);
          copyBtn.textContent = "Copied";
        }); 
  } 
  catch {
    (err) => console.error(err);
  }
};

export default renderColors