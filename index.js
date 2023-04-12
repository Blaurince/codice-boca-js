const menuSection = document.getElementById("menu");

function displayMenuItems(menuItems) {
    menuSection.innerHTML = '';
    menuItems.map(dish => {
     const div = document.createElement('div');
     const title = document.createElement('h2'); // create h2
     const titleText = document.createTextNode(dish.title); // create title text
     title.appendChild(titleText); // stick h2 into the div
     div.appendChild(title); // create p
     const description = document.createElement('p'); 
     const descriptionText = document.createTextNode(dish.description); 
     description.appendChild(descriptionText); // put text inside p
     div.appendChild(description);
     menuSection.appendChild(div);

    });
}
async function getMenuItems() {
  const response = await fetch('https://codice-boca.web.app/menu');
  const menuItems = await response.json();
  displayMenuItems(menuItems);
}

getMenuItems();