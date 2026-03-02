import { globalIgnores } from 'eslint/config';
import {
  configureVueProject,
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import parserVue from 'vue-eslint-parser';
import prettierConfig from '@vue/eslint-config-prettier';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
configureVueProject({ scriptLangs: ['ts', 'tsx'] });
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  vueTsConfigs.recommended,
  {
    extends: [...pluginVue.configs['flat/recommended']],
    name: 'app/vue-files',
    files: ['**/*.vue'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
  },
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      // 允许被禁止的类型 https://typescript-eslint.io/rules/ban-types/
      '@typescript-eslint/ban-types': 'off',
      // 允许any类型 https://typescript-eslint.io/rules/no-explicit-any/
      '@typescript-eslint/no-explicit-any': 'off',
      // 允许任何TS指令注释 https://typescript-eslint.io/rules/ban-ts-comment
      '@typescript-eslint/ban-ts-comment': 'off',
      // 允许空函数 https://typescript-eslint.io/rules/no-empty-function/
      '@typescript-eslint/no-empty-function': 'off',
      /**
       * 允许未使用的变量 https://typescript-eslint.io/rules/no-unused-vars/
       *
       * 但忽略以 `_` 开头的参数
       **/
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      // 关闭强制多词组件名 https://eslint.vuejs.org/rules/multi-word-component-names.html
      'vue/multi-word-component-names': 'off',
      // 强制执行自我关闭风格 https://eslint.vuejs.org/rules/html-self-closing.html
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
    },
  },
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  prettierConfig,
);
