module.exports = {
  "rules": {
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "color-no-invalid-hex": true,
    "alpha-value-notation": "number",
    "color-function-notation": "modern",

    // TODO replace with denylist once available
    "function-blacklist": ["rgba", "hsla"],

    "font-family-name-quotes": "always-where-recommended",
    "font-family-no-duplicate-names": true,
    "function-calc-no-unspaced-operator": true,
    "function-calc-no-invalid": true,
    "function-comma-newline-after": "always-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 1,
    "function-name-case": "lower",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-quotes": "always",
    "function-url-no-scheme-relative": true,
    "function-whitespace-after": "always",
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "string-no-newline": true,
    "string-quotes": "single",

    // fails with
    // calc(env(safe-area-inset-left, 0px) + 16px);
    "length-zero-no-unit": null,
    // "length-zero-no-unit": [true, {
    //   "ignore": ["custom-properties"]
    // }],
    "unit-case": "lower",
    "unit-no-unknown": true,

    // fails with "composes: flatList from './flat-list.scss';"
    // "value-keyword-case": "lower",
    "value-keyword-case": null,
    "value-no-vendor-prefix": true,
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 1,
    "shorthand-property-no-redundant-values": true,
    "property-case": "lower",
    "property-no-unknown": [true, {
      "ignoreProperties": [
        "composes"
      ]
    }],
    "property-no-vendor-prefix": true,

    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",
    "declaration-block-no-duplicate-properties": [true, { "ignore": ["consecutive-duplicates-with-different-values"] }],
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",

    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",

    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-no-vendor-prefix": true,

    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-class-no-unknown": [true, {
      "ignorePseudoClasses": ["global"]
    }],

    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": [true, {
      "ignore": ["custom-elements"]
    }],
    "selector-max-empty-lines": 0,
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",

    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-space-after": "always",
    "media-query-list-comma-space-before": "never",

    "at-rule-empty-line-before": ["always", {
      "except": ["blockless-after-same-name-blockless", "first-nested"],
      "ignore": ["after-comment"]
    }],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always",
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-newline-after": "always",
    "at-rule-no-unknown": [true, {
      // SCSS at rules
      "ignoreAtRules": ["include", "value", "mixin", "function", "if", "return"]
    }],
    "comment-empty-line-before": ["always", {
      "ignore": ["after-comment"]
    }],
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",

    "indentation": 2,
    "linebreaks": "unix",
    "max-empty-lines": 1,
    "max-line-length": [170, {
      "ignore": ["comments"]
    }],
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,

    "no-descending-specificity": null,

    "rule-empty-line-before": ["always", {
      "ignore": ["after-comment"],
      "except": ["first-nested"]
    }],

    "declaration-no-important": true,
    "keyframe-declaration-no-important": true,
    "no-duplicate-at-import-rules": true
  }
}
