module.exports = {
    root: true, // 若有多个配置规则，向外查找到有 root:true 的时候就终止查找，有多个配置则配置会叠加。
    env: {
        // 声明检测哪些环境，比如window不能在node里用，否则会报错等
        browser: true,
        // "es6": true,
        es2021: true,
        node: true,
        "vue/setup-compiler-macros": true, // vue setup : eslint 开启 "eslint:recommended" 后需要设置为true
    },
    extends: [
        // 表示使用哪些默认的语法检测配置；数组表示后面的每个配置继承对应前面的配置
        "eslint:recommended",
        /**<> 额外插件扩展命名规则： plugin:<包名:省略了前缀，比如vue>/<配置名称:比如recommended> */
        "plugin:vue/vue3-essential", // 防止错误或意外的行为
        // "plugin:vue/vue3-strongly-recommended", // 代码风格配置
        // "plugin:vue/vue3-recommended", // 强制执行主观社区默认值的规则，以确保一致性；这个影响的特别多，要用需要重点针对配置rules。经过测试，该项基本包含了上面2项
        // "plugin:vue/base", // 好像没啥用。。
        "plugin:@typescript-eslint/recommended",
        // '@vue/eslint-config-prettier' // 没啥用
    ],
    globals: {
        // true为可读可重写，false只可读，"readonly"也是只可读
        coustomVar: true, // 意思是全局变量里有 coustomVar ，在X文件中不声明也可以使用 coustomVar
        // defineProps: "readonly",
        // defineEmits: "readonly",
        // defineExpose: "readonly",
        // withDefaults: "readonly"
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        // 解析的语法环境有哪些
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        // 允许解析JSX
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["vue", "@typescript-eslint"],
    /**
     *  off    关闭检验
     *  warn   代码问题警告
     *  error  代码错误警告
     */
    rules: {
        /** @js */
        quotes: ["off", "double"], // single 单引号； double 双引号； backtick 反斜杠
        "prefer-const": "off", // 未修改变量 > 报错提示用 consot
        "no-console": "off", // 必关，console代码什么的，打包的时候配置删掉就行了，源代码肯定要留着，但要控制整洁，别没啥用的都留着
        "no-debugger": "error", // 必开，打了断点的，注意关了！
        "no-redeclare": "warn", // 避免引入外部文件导致提交代码失败
        "no-self-assign": "warn", // 避免引入外部文件导致提交代码失败
 
        /** @vue */
        // "vue/require-v-for-key": "error",
        "vue/multi-word-component-names": "off", // 关闭 kebab cased 风格警告！这风格一点也不好！！名字统一不变才是王道。
 
        /** @typescript */
        "@typescript-eslint/ban-types": "warn",
        "@typescript-eslint/no-inferrable-types": "off", // 开启后：可轻松推断的TS显示类型不需要主动声明
        "@typescript-eslint/no-explicit-any": "off", // 开启后：不允许使用 any 类型
        "@typescript-eslint/no-unused-vars": "off", // 开启后：声明了未使用，则提示报错  // 建议warn ，自己练习的项目，所以先关了
        "@typescript-eslint/no-empty-function": "error", // 禁止空函数。（函数内没任何内容）
    },
};
