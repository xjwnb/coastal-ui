import { mount } from "@vue/test-utils";
import { expect, test, describe, it } from "vitest";
import Button from "../src/button.vue";

test("Button", () => {
  const wrapper = mount(Button, {
    props: {
      type: "info",
    },
  });

  expect(wrapper.attributes()).toContain({
    class: "ct-button ct-button-vars ct-button-info",
  });

  wrapper.find("button").trigger("click");

  it("render", () => {
    const wrapper = mount(() => <Button>button</Button>);

    expect(wrapper.find("button").classes()).toContain(".ct-button");
    expect(wrapper.find("button").text()).toEqual("button");
  });
});
