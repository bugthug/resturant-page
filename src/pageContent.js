import Hero from "./pizza-image.jpg";

export default function onHomeClick() {
  const homeMenuElement = document.querySelector('li:first-of-type>button');
  homeMenuElement.classList.add('font-extrabold');
  const contentElement = document.querySelector("#content");
  contentElement.setAttribute('class','flex flex-wrap');
  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", Hero);
  contentElement.appendChild(imageElement);
  const textInfoDiv = document.createElement("div");
  {
    const heading = document.createElement("h1");
    heading.textContent = "Papa's Pizzeria";
    heading.setAttribute("class", "text-4xl text-center");
    textInfoDiv.appendChild(heading);
    const paragraph = document.createElement("p");
    paragraph.setAttribute("class", "p-10 text-center");
    paragraph.innerHTML = `Papa's knows his authentic, cursty, melts-in-your mouth taste
        pizza quite well. <br />
        How you may ask? Well, Papa's papa, Vincenzo Cantu, a most famous chef<br /> 
        in Italia, taught him the oh-so-delicious secrets.`;
    textInfoDiv.appendChild(paragraph);
  }
  {
    const heading = document.createElement("h1");
    heading.textContent = "Opening Items";
    heading.setAttribute("class", "text-2xl text-center");
    textInfoDiv.appendChild(heading);
    const ulElement = document.createElement("ul");
    ulElement.setAttribute("class", "text-center");
    function createLiElement(textContent) {
      const li = document.createElement("li");
      li.textContent = textContent;
      return li;
    }
    // doesn't really matter if you use arrays
    ulElement.appendChild(createLiElement("Sunday: closed"));
    ulElement.appendChild(createLiElement("Monday: 6:00-20:00"));
    ulElement.appendChild(createLiElement("Tuseday: 6:00-20:00"));
    ulElement.appendChild(createLiElement("Wednesday: 6:00-20:00"));
    ulElement.appendChild(createLiElement("Thursday: 6:00-20:00"));
    ulElement.appendChild(createLiElement("Friday: 6:00-20:00"));
    ulElement.appendChild(createLiElement("Saturday: 6:00-20:00"));
    textInfoDiv.appendChild(ulElement);
  }
  {
    const heading = document.createElement("h1");
    heading.textContent = "Location";
    heading.setAttribute("class", "text-2xl text-center mt-10");
    textInfoDiv.appendChild(heading);
    const paragraph = document.createElement("p");
    paragraph.setAttribute("class", "text-center");
    paragraph.textContent = "14047 Lakeside Blvd N";
    textInfoDiv.appendChild(paragraph);
  }
  contentElement.appendChild(textInfoDiv);
}

export function OnContactPageClick() {

}