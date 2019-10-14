<template>
  <div>
    <div class="eventPopupContainer row appear-animation">
      <div class="col-7 h-100 d-flex flex-column justify-content-between">
        <h3>3 Years Anniversary</h3>
        <h5>Sign Up To Claim Your Reward</h5>
        <div class="flex-fill" id="style-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            obcaecati quos, soluta voluptas necessitatibus pariatur vitae
            quisquam, sed debitis reprehenderit nesciunt assumenda, illo optio
            fugiat.
          </p>
        </div>
        <span class="">
          <button class="btn btn-dark text-capitalize rounded-0">
            go sign up
          </button>
        </span>
      </div>

      <div class="col-5 d-flex flex-column pl-0 eventPopup-thumbnail-container">
        <div class="col h-100 mb-2 eventPopup-thumbnail">
          <span
            ><font-awesome-icon
              :icon="['fas', 'times']"
              @click="closeEventPopup"
            ></font-awesome-icon
          ></span>
          <img src="../assets/img/beauty-17.jpg" alt="masked" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeEventPopup() {
      this.$emit("closeEventPopup");
    }
  }
};
</script>

<style lang="scss" scoped>
.eventPopupContainer {
  padding: 0 20px;
  padding-right: 0;
  display: flex;
  flex-direction: row;
  background: #e3aaaa;
  height: 350px;
  z-index: 105;
  position: absolute;
  width: 80%;

  top: 20%;
  left: 10%;
  animation: "appear-animation" 2s forwards ease;

  h3 {
    font-size: 25px;
    letter-spacing: 2px;
    color: #ca6f6f;
  }
  h5 {
    margin-top: 15px;
    color: #ffffff;
  }

  button {
    padding: 10px 25px;
  }

  > div {
    padding: 15px 10px;
    height: 100%;
    padding: 50px 0;
    &:first-child {
      border-right: 2px solid #e3aaaa;
      > div {
        @media screen and (max-width: 576px) {
          display: none;
        }
        margin: 10px 20px 10px 10px;
        height: 50%;
        max-height: 150px;
        overflow: scroll;
        p {
          line-height: 2;
        }
      }
    }

    &:last-child {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        border-bottom: 352px solid #e3aaaa;
        border-right: 102px solid transparent;
        height: 0;
        z-index: 110;
      }
    }

    > div {
      padding: 0px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0px 0px 2px 2px;
  }
  .eventPopup-thumbnail-container {
    position: relative;
    padding: 0;
    > span {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .eventPopup-thumbnail {
    position: relative;
    > span {
      color: white;
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px;
    }
  }
}
//scroll
#style-1::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

#style-1::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
}
#style-1::-webkit-scrollbar-corner {
  background-color: transparent;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 2px rgba(134, 111, 111, 0.6);
  background-color: #aaa;
}
//animation

@keyframes appear-animation {
  0% {
    transform: translateY(-100px);
    opacity: 0 !important;
  }
  100% {
    transform: translateY(0%);
    opacity: 1 !important;
  }
}
</style>
