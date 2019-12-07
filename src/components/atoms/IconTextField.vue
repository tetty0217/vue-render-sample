<template>
  <div class="IconTextField" :style="styles.root">
    <Icon
      :color="attr.icon"
      :size="20"
      name="lock"
      class="IconTextField__icon"
    />
    <input
      :id="`${name}-TextField`"
      :class="classes.input"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      type="text"
      @input="onInput"
    />
  </div>
</template>

<script>
import Icon from "../icon/Icon";
export default {
  name: "IconTextField",
  components: { Icon },
  props: {
    name: {
      type: String,
      default: "input"
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "placeholder"
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onInput(e) {
      if (e) {
        this.$emit("input", e.target.value);
      }
    }
  },
  computed: {
    styles() {
      return {
        root: {
          width: this.fullWidth ? "100%" : null
        }
      };
    },
    classes() {
      return {
        input: this.error
          ? "IconTextField__input--error"
          : "IconTextField__input"
      };
    },
    attr() {
      return {
        icon: this.error ? "danger" : "secondary"
      };
    }
  }
};
</script>
