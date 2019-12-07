<template>
  <div class="c-iconTextField" :style="styles.root">
    <Icon
      :color="attr.icon"
      name="lock"
      :size="20"
      class="c-iconTextField__icon"
    />
    <input
      :class="classes.input"
      type="text"
      :id="`${name}-TextField`"
      :name="name"
      :value="value"
      :placeholder="placeholder"
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
          ? "c-iconTextField__input--error"
          : "c-iconTextField__input"
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
