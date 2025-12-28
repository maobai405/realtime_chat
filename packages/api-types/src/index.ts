// 这个包只包含类型定义,用于在前端项目中使用 Eden Treaty
// 它从 api 应用导入类型,但不会打包任何运行时代码

import type { App } from "api";

export type ApiTypes = App;
