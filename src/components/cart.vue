<template>
  <div class="cart__row" data-id="${item.id}">
    <div class="grid--full cart__row--table-large cart-content">
      <div class="grid__item large--one-half">
        <div class="grid--full cart__row--table-large">
          <div class="grid__item one-third">
            <a href="javascript:void(0)" class="cart__image">
              <img src="${item.image}" alt="${item.name}" />
            </a>
          </div>

          <div class="grid__item two-thirds cart__item__title">
            <a href="javascript:void(0)" class="h4--body">${item.name} </a>

            <p>$ ${item.price}</p>

            <p>${item.title}</p>

            <a
              href="javascript:void(0)"
              class="cart__remove uppercase lighten ajaxcart__remove"
              data-id="${item.id}"
            >
              <small>Remove</small>
            </a>
          </div>
        </div>
      </div>

      <div class="grid__item large--one-half">
        <div class="grid--full cart__row--table-large">
          <div class="grid__item one-third text-left">
            <span class="h3--body money">$ ${item.price}</span>
          </div>

          <div class="grid__item one-third text-center">
            <div class="ajaxcart__qty">
              <button
                type="button"
                class="ajaxcart__qty-adjust minus"
                data-id="${item.id}"
              >
                −
              </button>
              <input
                type="text"
                class="ajaxcart__qty-num"
                value="${item.amount}"
                min="0"
                data-id="${item.id}"
                aria-label="quantity"
                pattern="[0-9]*"
              />
              <button
                type="button"
                class="ajaxcart__qty-adjust plus"
                data-id="${item.id}"
              >
                +
              </button>
            </div>
          </div>

          <div class="grid__item one-third text-right totalHere">
            <span class="cart__mini-labels">Total</span>
            <span class="h3--body iteMoney">${item.price}</span>
          </div>
        </div>

        <div
          class="ajaxcart__errors hidden errors text-center"
          id="ajaxcart__item__11815313113124__errors"
        >
          All available stock is in cart
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        item 
        },
    },
};
</script>

<style lang="css" scoped></style>
