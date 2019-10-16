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
  letter-spacing: 0.01em;
  margin: auto;
  max-width: 320px;
  border-radius: 2px;
}
.notification-error {
  background-color: #ca6f6f !important;
  color: white !important;
}
.notification-success {
  background-color: #aae3aa !important;
  color: white !important;
}
.notification-warning {
  background-color: #e3e3aa !important;
  color: white !important;
}
</style>
