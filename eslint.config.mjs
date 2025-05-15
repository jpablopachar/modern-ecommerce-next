import { FlatCompat } from "@eslint/eslintrc"
import pluginJs from "@eslint/js"
import prettierConfig from "eslint-config-prettier"
import pluginImport from "eslint-plugin-import"
import pluginReactHooks from "eslint-plugin-react-hooks"
import globals from "globals"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  pluginJs.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      prettier: prettierConfig,
      import: pluginImport,
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...prettierConfig.rules,
      "react/react-in-jsx-scope": "off",
      "no-undef": "off",
      "react/prop-types": "off",
      "quotes": [
        "error",
        "single",
        {
          "allowTemplateLiterals": true
        }
      ],
      "prefer-destructuring": [
        "error",
        {
          "VariableDeclarator": {
            "array": false,
            "object": true
          },
          "AssignmentExpression": {
            "array": false,
            "object": true
          }
        },
        {
          "enforceForRenamedProperties": false
        }
      ],
      "import/order": [
        "error",
        {
          "newlines-between": "always-and-inside-groups",
          "groups": [
            [
              "builtin",
              "external"
            ],
            "internal",
            "sibling",
            "index",
            "parent",
            "object"
          ],
          "alphabetize": {
            "order": "asc", /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
            "caseInsensitive": true /* ignore case. Options: [true, false] */
          }
        }
      ],
      "react/jsx-one-expression-per-line": [
        "error",
        {
          "allow": "single-child"
        }
      ],
      "react/jsx-max-props-per-line": [
        2,
        {
          "maximum": 1,
          "when": "multiline"
        }
      ],
      "react/jsx-first-prop-new-line": [
        2,
        "multiline"
      ],
      "semi": [
        "error",
        "never"
      ],
      "@typescript-eslint/semi": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "vars": "all",
          "args": "after-used",
          "ignoreRestSiblings": false
        }
      ],
      "no-console": "error",
      "max-len": [
        "error",
        {
          "code": 100,
          "ignoreStrings": true,
          "ignoreTemplateLiterals": true
        }
      ],
      // enforces return statements in callbacks of array"s methods
      // https://eslint.org/docs/rules/array-callback-return
      "array-callback-return": [
        "error",
        {
          "allowImplicit": true
        }
      ],
      // disallow redundant `return await`
      "no-return-await": "error",
      // disallow use of assignment in return statement
      "no-return-assign": [
        "error",
        "always"
      ],
      // disallow comparisons where both sides are exactly the same
      "no-self-compare": "error",
      // disallow use of comma operator
      "no-sequences": "error",
      // restrict what can be thrown as an exception
      "no-throw-literal": "error",
      "no-else-return": [
        "error",
        {
          "allowElseIf": false
        }
      ],
      "camelcase": [
        "error",
        {
          "ignoreDestructuring": true,
          "properties": "always"
        }
      ],
      "no-lonely-if": "error",
      "no-unmodified-loop-condition": "error",
      "space-before-blocks": [
        "error",
        "always"
      ],
      "curly": [
        "error",
        "all"
      ],
      "no-await-in-loop": "error",
      "no-cond-assign": "error",
      "no-constant-condition": [
        "error",
        {
          "checkLoops": false
        }
      ],
      "no-unreachable-loop": "error",
      "lines-between-class-members": [
        "error",
        "always"
      ],
      "padding-line-between-statements": [
        "error",
        {
          "blankLine": "always",
          "prev": [
            "const",
            "let",
            "var"
          ],
          "next": "*"
        },
        {
          "blankLine": "any",
          "prev": [
            "const",
            "let",
            "var"
          ],
          "next": [
            "const",
            "let",
            "var"
          ]
        },
        {
          "blankLine": "always",
          "prev": "directive",
          "next": "*"
        },
        {
          "blankLine": "any",
          "prev": "directive",
          "next": "directive"
        },
        {
          "blankLine": "always",
          "prev": [
            "case",
            "default"
          ],
          "next": "*"
        },
        {
          "blankLine": "always",
          "prev": "*",
          "next": "return"
        },
        {
          "blankLine": "always",
          "prev": "*",
          "next": [
            "function",
            "class",
            "export"
          ]
        }
      ],
      "eol-last": [
        "error",
        "always"
      ],
      "block-scoped-var": "error",
      "no-var": "error",
      "func-call-spacing": [
        "error",
        "never"
      ],
      "no-eq-null": "error",
      "no-lone-blocks": "error",
      "react/destructuring-assignment": [
        "error",
        "always",
        {
          "ignoreClassFields": true
        }
      ],
      "no-plusplus": [
        "error",
        {
          "allowForLoopAfterthoughts": true
        }
      ],
      "space-in-parens": [
        "off",
        "always",
        {
          "exceptions": [
            "{}",
            "[]",
            "()"
          ]
        }
      ],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": [
        "error",
        {
          "hoist": "all"
        }
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          "allowExpressions": true
        }
      ],
      "spaced-comment": [
        "error",
        "always",
        {
          "exceptions": []
        }
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-boolean-value": "error",
      "react/jsx-indent": [
        2,
        2
      ],
      "@typescript-eslint/no-explicit-any": "warn"
    },
    ignores: ["node_modules", "dist", "**/*.d.ts", "*.css", "*.svg", "*.jpeg", "*.jpg", "*.png", "scripts"],
    languageOptions: {
      globals: globals.browser, parserOptions: {
        project: ["./tsconfig.json"],
        createDefaultProgram: true,
      },
    }
  },
];

export default eslintConfig;
