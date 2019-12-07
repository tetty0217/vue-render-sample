<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :viewBox="viewBox"
  >
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path
      :style="style"
      d="M19.77 5.03l1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 5.03m0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43 19.77 2.2z"
    />
  </svg>
</template>

<script>
import { iconColors, typeColor } from "../types";

export default {
  name: "IconDoneOutline",
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
