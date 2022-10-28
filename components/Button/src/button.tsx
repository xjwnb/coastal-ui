import {
  defineComponent,
  PropType,
} from "vue";
import { TypeProps, SizeProps } from "./symbol";

interface Props {
  type?: TypeProps;
  disabled?: boolean;
  size?: SizeProps;
  plain?: boolean;
  round?: boolean;
}

export default defineComponent({
  name: "Button",

  props: {
    type: String as PropType<TypeProps>,
    disabled: Boolean
  },

  setup() {
    return () => {
      return <div>123121212</div>;
    };
  },
});
