<template>
  <div class="cartoverlay">
    <div class="whole-cart">
      <div class="cart-modal">
        <button class="closeCart"></button>
        <div class="cart__content">
          <form method="post" class="cart clearfix">
            <h3>Your Cart</h3>
            <div class="cart__body"></div>
            <div class="cart__footer clearfix">
              <div class="grid clearfix">
                <div class="grid__item cart-instruction">
                  <label for="text" class="cart__instructions__label">
                    special instruction for seller
                  </label>
                  <textarea name="note" id="text" class="input-full"></textarea>
                </div>
                <div class="grid__item">
                  <p class="cart__footer-text">
                    <span class="subtotal uppercase">Subtotal</span>
                    <span class="subtotal-money">$0</span>
                  </p>
                  <p class="cart__footer__text">
                    <em>Shipping &amp; taxes calculated at checkout</em>
                  </p>
                  <p class="cart__footer-text">
                    <a
                      href="javascript:return false"
                      class="clear-btn banner-btn"
                      >Clear cart</a
                    >
                  </p>
                  <span>
                    <input
                      type="submit"
                      name="checkout"
                      class="btn uppercase btn--large checkout__button"
                      value="Check Out"
                    />
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped></style>
