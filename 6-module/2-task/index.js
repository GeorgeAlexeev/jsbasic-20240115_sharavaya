export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.render();
  }

  render() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card__top">
            <img src="/assets/images/products/${
              this.product.image
            }" class="card__image" alt="product">
            <span class="card__price">€${this.product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
            <div class="card__title">${this.product.name}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
    `;

    card.querySelector(".card__button").addEventListener("click", () => {
      const event = new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true,
      });
      this.elem.dispatchEvent(event);
    });

    return card;
  }
}

// Не знаю, почему то без костыля innerHTML, как в 1ой задаче, не получается. Скрин с тестами прикрепил.
