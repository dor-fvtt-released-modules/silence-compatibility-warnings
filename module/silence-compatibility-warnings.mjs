const constants = {
    moduleId : 'silence-compatibility-warnings',
    compatSilent : 0,
    compatWarning : 1
}

// Simplifies localization
function loc(domain, section, key, locPlaceholders = {}) {
    return game.i18n.format(`${constants.moduleId}.${domain}.${section}.${key}`, locPlaceholders);
}

// Simplifies getting settings
function settingGet(key) {
    return game.settings.get(constants.moduleId, key);
}

function setCompatibilityMode() {
    let isSilent = settingGet('silenceEnabled')
    if (isSilent) {
        CONFIG.compatibility.mode = 0
    } else {
        CONFIG.compatibility.mode = 1
    }
}

function registerSettings() {
    game.settings.register(constants.moduleId, "silenceEnabled", {
        name: loc('settings','silenceEnabled','name'),
        hint: loc('settings','silenceEnabled','hint'),
        scope: "world",
        config: true,
        default: "true",
        type: Boolean,
        onChange: () => setCompatibilityMode(),
    });
}

Hooks.once('init', async () => {
    registerSettings();
    setCompatibilityMode();
});

