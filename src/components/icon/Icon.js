import { typeColor, typeIcon } from "./types";
import { icon } from "./icons";

const Icon = {
  name: "Icon",
  props: {
    color: {
      type: String,
      default: "primary",
      validator: v => typeColor.includes(v)
    },
    name: {
      type: String,
      default: "face",
      validator: v => typeIcon.includes(v)
    },
    size: {
      type: Number,
      default: 24
    }
  },
  methods: {
    getIcon() {
      return icon[this.name] || icon.checkbox;
    }
  },
  render(h) {
    const IconComponent = this.getIcon();
    return h(
      "i",
      {
        class: "c-icon"
      },
      [
        h(IconComponent, {
          attrs: {
            size: this.size,
            color: this.color
          }
        })
      ]
    );
  }
};

export default Icon;
