<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :viewBox="viewBox"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      :style="style"
      d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    />
  </svg>
</template>

<script>
import { iconColors, typeColor } from "../types";

export default {
  name: "IconMoreHoriz",
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
