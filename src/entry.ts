import { App } from "vue";
import MyButton from "./button/button";
import SFCButton from "./button/button.vue";
import JSXButton from "./button/index";

// 导出单独组件
export { MyButton, SFCButton, JSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },

};