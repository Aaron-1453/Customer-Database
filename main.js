function renderPageContent() {
  let targetElement = document.querySelector(".customer-grid");

  for (let customer of customers) {
    let listItemElement = document.createElement("div");
    listItemElement.innerHTML = createImageElement(customer.picture.large);
    targetElement.appendChild(listItemElement);
  }
  function createImageElement(picture) {
    return `<img src=${picture}>`;
  }
}
renderPageContent();
