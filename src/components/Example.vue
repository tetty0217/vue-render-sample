<template>
  <div class="Example">
    <h1>Icons List</h1>
    <div class="Example__row">
      <h2>Face</h2>
      <div class="Example__items">
        <Icon
          v-for="color in colors"
          :key="`face-${color}`"
          :color="color"
          name="face"
        />
      </div>
    </div>
    <div class="Example__row">
      <h2>Checkbox</h2>
      <div class="Example__items">
        <Icon
          v-for="color in colors"
          :key="`checkbox-${color}`"
          :color="color"
          name="checkbox"
        />
      </div>
    </div>
    <div class="Example__row">
      <h2>DoneOutline</h2>
      <div class="Example__items">
        <Icon
          v-for="color in colors"
          :key="`doneOutline-${color}`"
          :color="color"
          name="doneOutline"
        />
      </div>
    </div>
    <div class="Example__row">
      <h2>TextField</h2>
      <div class="Example__items">
        <IconTextField :full-width="true"/>
      </div>
    </div>
    <div class="Example__row">
      <h2>TextField - error</h2>
      <div class="Example__items">
        <IconTextField :full-width="true" :error="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./icon/Icon";
import { typeColor } from "./icon/types";
import IconTextField from "./atoms/IconTextField";

export default {
  name: "HelloWorld",
  components: { IconTextField, Icon },
  data: () => ({
    colors: typeColor
  })
};
</script>
