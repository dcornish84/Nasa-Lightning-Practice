
function createNasaHTML(nasaObj){
return `
<ul>
<img src="https://apod.nasa.gov/apod/image/1908/ngc7129largerCannistra.jpg"</img>
<h2>Title: ${nasaObj.title}</h2>
<li>Date: ${nasaObj.date}</li>
<li>Explanation: ${nasaObj.explanation}</li>
<li>Copyright: ${nasaObj.copyright}</li>
</ul>
`

}

const nasaData = document.querySelector(".nasaPic");

function nasaHtml(taco){
    nasaData.innerHTML += taco;}

    
    
fetch(`https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx`)
.then(nasa => nasa.json())
.then(nasaPhoto => {
console.table("nasaPhoto", nasaPhoto)
const nasaASHTML = createNasaHTML(nasaPhoto);
nasaHtml(nasaASHTML);
    })

