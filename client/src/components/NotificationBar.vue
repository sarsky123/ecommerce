<template>
  <div>
    <b-toast
      id="notification-toast"
      class="notification-bar"
      :header-class="notificationTypeClass"
      :title="notification.type + ' message'"
      static
      visible
      no-auto-hide
    >
      {{ notification.message }}
    </b-toast>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    };
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  computed: {
    notificationTypeClass() {
      return `text-capitalize notification-${this.notification.type}`;
    }
  },
  methods: mapActions("notification", ["remove"])
};
</script>

<style lang="scss">
.notification-bar {
  text-rendering: optimizeLegibility;

  letter-spacing: 0.01em;
  margin: auto;
  max-width: 320px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  border-radius: 2px;
}
.notification-error {
  background-color: red !important;
  color: white !important;
}
.notification-success {
  background-color: green !important;
  color: white !important;
}
.notification-warning {
  background-color: yellow !important;
  color: white !important;
}
</style>
