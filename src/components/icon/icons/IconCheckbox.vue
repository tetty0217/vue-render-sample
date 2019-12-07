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
      d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    />
  </svg>
</template>

<script>
import { iconColors, typeColor } from "../types";

export default {
  name: "IconCheckbox",
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
