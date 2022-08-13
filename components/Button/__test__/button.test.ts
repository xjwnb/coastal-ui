import { mount } from "@vue/test-utils";
import { test, expect, it } from "vitest";
import Button from "../src/button.vue";

test("mount component", async () => {
  expect(Button).toBeTruthy();

  const wrapper = mount(Button, {
    props: {
      type: "info",
    },
  });

  // expect(wrapper.text()).toContain('4 x 2 = 8')
  expect(wrapper.attributes()).toEqual({ class: "ct-button ct-button-info" });

  await wrapper.trigger('click')
});
