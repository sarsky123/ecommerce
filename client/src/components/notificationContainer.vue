<template>
  <div class="notification-container">
    <NotificationBar
      v-for="notification in notifications.slice(
        notifications.length - 1,
        notifications.length
      )"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationBar from "@/components/NotificationBar.vue";
import { mapState } from "vuex";

export default {
  components: {
    NotificationBar
  },
  computed: mapState("notification", ["notifications"])
};
</script>

<style scoped>
.notification-container {
  font-family: sans-serif;
  z-index: 500;
  display: block;
  position: fixed;
  width: 300px;
  margin-right: -150px;
  bottom: 125px;
  right: 50%;
  font-size: 21px;
  font-weight: 400;
  line-height: 5px;

  transition: bottom 0.5s cubic-bezier(0.42, 0, 0.58, 1);
}
</style>
