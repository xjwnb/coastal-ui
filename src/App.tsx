import { defineComponent } from "vue";
import Button from "../components/Button/src/button.vue";

export default defineComponent({
  name: "App",

  setup() {
    return () => {
      return (
        <Button
          onClick={() => {
            console.log("。。。。点击了");
          }}
        >
          按钮
        </Button>
      );
    };
  },
});
