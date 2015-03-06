

var Option = require('fantasy-options').Option,
    mapObject = require('map-object'),
    common = require('common'),
    conditions = require('conditions'),

    mixin = function (target, source) {
        mapObject(source, function(_, k) {
            if (!target.prototype.hasOwnProperty(k)) target.prototype[k] = source[k];
            else console.warn("Field %o already exist in prototype!", k);
        });
    };

mixin(Option, conditions);

module.exports = {
    Option: Option
};
