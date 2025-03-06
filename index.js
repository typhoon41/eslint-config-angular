import defaultConfiguration from "@typhoon41/eslint-config";
import angular from "angular-eslint";

export default [
  ...defaultConfiguration,
  {
    "processor": angular.processInlineTemplates,
    "plugins": {
      "@angular-eslint": angular.tsPlugin
    },
    "files": ["src/**/*.ts"],
    "rules": {
      "@angular-eslint/component-class-suffix": "error",
      "@angular-eslint/component-max-inline-declarations": "error",
      "@angular-eslint/component-selector": "off",
      "@angular-eslint/consistent-component-styles": "error",
      "@angular-eslint/contextual-decorator": "error",
      "@angular-eslint/contextual-lifecycle": "error",
      "@angular-eslint/directive-class-suffix": "error",
      "@angular-eslint/directive-selector": "off",
      "@angular-eslint/no-async-lifecycle-method": "error",
      "@angular-eslint/no-attribute-decorator": "error",
      "@angular-eslint/no-conflicting-lifecycle": "error",
      "@angular-eslint/no-duplicates-in-metadata-arrays": "error",
      "@angular-eslint/no-empty-lifecycle-method": "error",
      "@angular-eslint/no-forward-ref": "error",
      "@angular-eslint/no-input-prefix": "off",
      "@angular-eslint/no-input-rename": "error",
      "@angular-eslint/no-inputs-metadata-property": "error",
      "@angular-eslint/no-lifecycle-call": "error",
      "@angular-eslint/no-output-native": "error",
      "@angular-eslint/no-output-on-prefix": "error",
      "@angular-eslint/no-output-rename": "error",
      "@angular-eslint/no-outputs-metadata-property": "error",
      "@angular-eslint/no-pipe-impure": "error",
      "@angular-eslint/no-queries-metadata-property": "error",
      "@angular-eslint/pipe-prefix": "off",
      "@angular-eslint/prefer-on-push-component-change-detection": "error",
      "@angular-eslint/prefer-output-readonly": "error",
      "@angular-eslint/prefer-signals": "error",
      "@angular-eslint/prefer-standalone": "error",
      "@angular-eslint/relative-url-prefix": "error",
      "@angular-eslint/require-lifecycle-on-prototype": "error",
      "@angular-eslint/require-localize-metadata": "error",
      "@angular-eslint/runtime-localize": "off",
      "@angular-eslint/sort-lifecycle-methods": "error",
      "@angular-eslint/use-component-selector": "error",
      "@angular-eslint/use-component-view-encapsulation": "error",
      "@angular-eslint/use-injectable-provided-in": "error",
      "@angular-eslint/use-lifecycle-interface": "error",
      "@angular-eslint/use-pipe-transform-interface": "error",
      "new-cap": [
        "error",
        {
          "capIsNewExceptions": [
            "Component",
            "HostBinding",
            "HostListener",
            "Inject",
            "Injectable",
            "Input",
            "NgModule",
            "Output",
            "Pipe",
            "Subjectize",
            "ViewChild",
            "ViewChildren"
          ]
        }
      ]
    }
  },
  {
    "files": ["src/**/*.html"],
    "languageOptions": {
      "parser": angular.templateParser
    },
    "plugins": {
      "@angular-eslint/template": angular.templatePlugin
    },
    "rules": {
      "@angular-eslint/template/alt-text": "error",
      "@angular-eslint/template/attributes-order": "error",
      "@angular-eslint/template/banana-in-box": "error",
      "@angular-eslint/template/button-has-type": "error",
      "@angular-eslint/template/click-events-have-key-events": "error",
      "@angular-eslint/template/conditional-complexity": ["error",
        {
          maxComplexity: 3
        }
      ],
      "@angular-eslint/template/cyclomatic-complexity": ["error",
        {
          maxComplexity: 3
        }
      ],
      "@angular-eslint/template/elements-content": "error",
      "@angular-eslint/template/eqeqeq": "error",
      "@angular-eslint/template/i18n": "off",
      "@angular-eslint/template/interactive-supports-focus": "error",
      "@angular-eslint/template/label-has-associated-control": "error",
      "@angular-eslint/template/mouse-events-have-key-events": "error",
      "@angular-eslint/template/no-any": "error",
      "@angular-eslint/template/no-autofocus": "error",
      "@angular-eslint/template/no-call-expression": "off",
      "@angular-eslint/template/no-distracting-elements": "error",
      "@angular-eslint/template/no-duplicate-attributes": "error",
      "@angular-eslint/template/no-inline-styles": "error",
      "@angular-eslint/template/no-interpolation-in-attributes": "error",
      "@angular-eslint/template/no-negated-async": "error",
      "@angular-eslint/template/no-positive-tabindex": "error",
      "@angular-eslint/template/prefer-control-flow": "error",
      "@angular-eslint/template/prefer-ngsrc": "off",
      "@angular-eslint/template/prefer-self-closing-tags": "error",
      "@angular-eslint/template/prefer-static-string-properties": "error",
      "@angular-eslint/template/role-has-required-aria": "error",
      "@angular-eslint/template/table-scope": "error",
      "@angular-eslint/template/use-track-by-function": "error",
      "@angular-eslint/template/valid-aria": "error",
    }
  }
];
