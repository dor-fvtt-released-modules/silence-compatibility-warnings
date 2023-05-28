# FoundryVTT | Silence Compatibility Warnings

![](https://img.shields.io/badge/Foundry-v11-informational)
![GitHub Latest Version](https://img.shields.io/github/v/release/dor-fvtt-released-modules/silence-compatibility-warnings?sort=semver)
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fsilence-compatibility-warnings&colorB=4aa94a)

![GitHub All Releases](https://img.shields.io/github/downloads/dor-fvtt-released-modules/silence-compatibility-warnings/module.zip)
![Latest Release Download Count](https://img.shields.io/github/downloads/dor-fvtt-released-modules/silence-compatibility-warnings/latest/module.zip)

If you're a FoundryVTT user and a module junkie like me, you may have noticed that a zillion or so compatibility and deprecation warnings pop up in the browser console with each new Foundry version.

These warnings are very useful for module and system developers, but for the rest of us they don't do much good.
They make it more challenging to spot other more useful warnings in the console, and at the extreme they can even impact Foundry performance.

*Silence Compatibility Warnings* to the rescue! This simple module for FoundryVTT suppresses these warnings by default and provides a toggle to re-enable them if you choose. This module does **not** suppress errors or other warning types.

![Preview](https://raw.githubusercontent.com/dor-fvtt-released-modules/silence-compatibility-warnings/master/images/silence.png)

**Note**: If you're a module or system developer, you probably want [the DevMode module](https://foundryvtt.com/packages/_dev-mode) instead, which provides more control over these messages (and does a bunch of other cool things besides).

## Thanks
Thanks to [Arcanist](https://github.com/arcanistzed) for cluing me into this simple tweak and thus alleviating my console cleanliness OCD. 😂

## License
Licensed under the MIT License (see [LICENSE](LICENSE)).