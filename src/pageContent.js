import Hero from "./pizza-image.jpg";

export function onHomeClick() {
  document.querySelector("#home").classList.add("font-extrabold");
  document.querySelector("#restaurant-menu").classList.remove("font-extrabold");
  document.querySelector("#contact").classList.remove("font-extrabold");

  const contentElement = document.querySelector("#content");
  contentElement.setAttribute("class", "flex");
  contentElement.innerHTML = "";

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

export function onContactPageClick() {
  document.querySelector("#home").classList.remove("font-extrabold");
  document.querySelector("#restaurant-menu").classList.remove("font-extrabold");
  document.querySelector("#contact").classList.add("font-extrabold");

  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = "";
  const contactDivSection = document.createElement("div");
  contactDivSection.classList.add("m-10");
  const heading = document.createElement("h1");
  heading.textContent = "Book Us!";
  heading.classList.add("text-4xl");
  contactDivSection.appendChild(heading);
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vero culpa pariatur voluptatibus, doloribus ut quibusdam suscipit molestiae sapiente ad!";
  contactDivSection.appendChild(paragraph);

  // This function relies on inner html and not textContent,
  // thus it differs from the one defined in HomePageElement.
  function createLiElement(innerHTML) {
    const li = document.createElement("li");
    li.innerHTML = innerHTML;
    return li;
  }
  const ulElement = document.createElement("ul");
  ulElement.appendChild(
    createLiElement(
      '<span class="font-bold">Contact Name:</span> Robert Downey Jr.'
    )
  );
  ulElement.appendChild(
    createLiElement(
      '<span class="font-bold">Phone Number:</span> +972522938473'
    )
  );
  ulElement.appendChild(
    createLiElement(
      '<span class="font-bold">Address:</span> 5847 Rothschild Avenue'
    )
  );
  ulElement.appendChild(createLiElement('<span class="font-bold"></span>'));
  contactDivSection.appendChild(ulElement);
  contentElement.append(contactDivSection);
  const googleMapsIframe = document.createElement("iframe");
  googleMapsIframe.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.558289933927!2d34.750238023679955!3d32.02707672193197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b33949887135%3A0x6e8316b6a4de8d3b!2z16jXldeY16nXmdec15MsINeR16og15nXnQ!5e0!3m2!1siw!2sil!4v1684291087770!5m2!1siw!2sil"
  );
  googleMapsIframe.setAttribute("width", "600");
  googleMapsIframe.setAttribute("height", "450");
  googleMapsIframe.setAttribute("style", "border:0;");
  googleMapsIframe.setAttribute("allowfullscreen", "");
  googleMapsIframe.setAttribute("loading", "lazy");
  googleMapsIframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
  contentElement.appendChild(googleMapsIframe);
}

export function onMenuPageClick() {
  document.querySelector("#home").classList.remove("font-extrabold");
  document.querySelector("#restaurant-menu").classList.add("font-extrabold");
  document.querySelector("#contact").classList.remove("font-extrabold");

  const contentElement = document.querySelector("#content");
  contentElement.innerHTML = "";
  contentElement.setAttribute("class", "grid grid-cols-3 gap-10");
  function generateRestaurantMenuItems(itemName, itemDescription) {
    const containerDiv = document.createElement("div");
    const heading = document.createElement("h1");
    heading.setAttribute("class", "text-4xl text-center");
    heading.textContent = itemName;
    const paragraph = document.createElement("p");
    paragraph.setAttribute("class", "text-center");
    paragraph.textContent = itemDescription;
    containerDiv.appendChild(heading);
    containerDiv.appendChild(paragraph);
    containerDiv.setAttribute("class", "border-4 ml-2 mr-2");

    return containerDiv;
  }
  contentElement.appendChild(
    generateRestaurantMenuItems(
      "Pizza #1",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla."
    )
  );
  contentElement.appendChild(
    generateRestaurantMenuItems(
      "Pizza #2",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    )
  );
  contentElement.appendChild(
    generateRestaurantMenuItems(
      "Pizza #3",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    )
  );

  contentElement.appendChild(
    generateRestaurantMenuItems(
      "Pizza #4",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    )
  );
  contentElement.appendChild(
    generateRestaurantMenuItems(
      "Pizza #5",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    )
  );
  contentElement.appendChild(
    generateRestaurantMenuItems(
      "Pizza #6",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    )
  );
}
