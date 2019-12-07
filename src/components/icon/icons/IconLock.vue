<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      :style="style"
      d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
    />
  </svg>
</template>

<script>
import { iconColors, typeColor } from "../types";

export default {
  name: "IconLock",
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: "primary",
      validator: v => typeColor.includes(v)
    }
  },
  methods: {
    getIconColor() {
      return iconColors[this.color] || iconColors.primary;
    }
  },
  computed: {
    style() {
      return { fill: `${this.getIconColor(this.color)}` };
    },
    viewBox() {
      return `0 0 ${this.size} ${this.size}`;
    }
  }
};
</script>
