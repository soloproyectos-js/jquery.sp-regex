/**
 * jQuery.spRegex - A regular expression helper plugin for jQuery.
 *
 * This plugin requires: 
 *      1. jQuery ~2.0
 *
 * @author    Gonzalo Chumillas <gchumillas@email.com>
 * @license   https://github.com/wirexmedia/jquery.sp-reg/blob/master/LICENSE MIT License
 * @link      https://github.com/wirexmedia/jquery.sp-reg
 */
(function ($) {
    
    /**
     * Available methods
     * @var {Object}
     */
    var methods = {
        /**
         * Encodes a regex parameter.
         *
         * For example:
         * ```JavaScript
         * // the characters '(' and ')' have special meaning
         * // in regular expressions, so they must be escaped
         * var str = 'hello (there)';
         * var re = new RegExp('(^|;)[\\s]*' + $.spRegex('encode', str) + '=([^;]*)');
         * ```
         *
         * @param {string} text Text to be encoded
         *
         * @return   {string}
         */
        'encode': function (text) {
            var chars = new RegExp("[.*+?|()\\[\\]{}\\\\]", "g");

            return text.replace(chars, "\\$&");
        }
    };
    
    /**
     * Registers plugin.
     * 
     * @param {string} methodName Method name
     * @param {mixed}  args,...   Additional arguments (not required)
     * 
     * @return {mixed}
     */
    $.spRegex = function (methodName, args) {
        var method = methods[methodName];
        var args = Array.prototype.slice.call(arguments, 1);
        
        if (method === undefined) {
            $.error('Method not found: ' + methodName);
        }
        
        return method.apply(this, args);
    };
})(jQuery);
