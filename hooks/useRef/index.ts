import { ref, Ref } from "vue";
import { basicDataType } from "../../types/common";

export function useRef(str: basicDataType): Ref<basicDataType> {
  return ref(str);
}
