<template>
  <div class="Example">
    <h1>Icon Lists</h1>
    <div class="Example__row">
      <h2>Face</h2>
      <div class="Example__icons">
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
      <div class="Example__icons">
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
      <div class="Example__icons">
        <Icon
          v-for="color in colors"
          :key="`doneOutline-${color}`"
          :color="color"
          name="doneOutline"
        />
      </div>
    </div>
    <div class="Example__row">
      <h2>MoreHoriz</h2>
      <div class="Example__icons">
        <Icon
          v-for="color in colors"
          :key="`moreHoriz-${color}`"
          :color="color"
          name="moreHoriz"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./atoms/Icon";
import { typeColor } from "./icons/types";

export default {
  name: "HelloWorld",
  components: { Icon },
  data: () => ({
    colors: typeColor
  })
};
</script>

<style lang="sass">
.Example
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  &__icons
    display: flex
    justify-content: space-around
  &__row
    width: 200px
    margin: 0 0 1rem
</style>
