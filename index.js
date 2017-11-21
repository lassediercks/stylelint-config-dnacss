module.exports = {
  rules: {
    "color-no-hex": true,
    "color-named": "never",
    "unit-whitelist": ["%"],
    "declaration-property-unit-blacklist": {
      "font-size": ["em", "px", "%", "pt"]
    }
  }
};
