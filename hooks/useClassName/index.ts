import { unref } from "vue";
import { classNamePrefix } from "../../setting/globalConfig";

/**
 * 获得类名字符串 es：ct-button_description
 * @param args 类名字符串数组
 * @returns 凭借返回的类名字符串
 */
export function useJoinClassString(...args: string[]): string {
  let res = "";
  if (args.length <= 1) return res;
  if (args.length >= 2) {
    res = args.slice(0, 2).join("-");
  }
  res += args[2] ? "_" + args.slice(2).join("_") : "";

  return res;
}

export function useClassName(name: string): any {
  // const mainName = `${classNamePrefix}${name}`;
  const mainName = useJoinClassString(classNamePrefix, name);

  const m = (str: string): string => {
    return useJoinClassString(mainName, unref(str));
  };

  const is = (str: string, state?: boolean | undefined) => {
    return state ? useJoinClassString(mainName, unref(str)) : "";
  };

  return {
    mainName,
    //
    m,
  };
}
