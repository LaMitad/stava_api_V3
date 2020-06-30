/*
 * Strava API v3
 * The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ZoneRange'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ZoneRange'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.TimedZoneRange = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.ZoneRange);
  }
}(this, function(ApiClient, ZoneRange) {
  'use strict';

  /**
   * The TimedZoneRange model module.
   * @module model/TimedZoneRange
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>TimedZoneRange</code>.
   * A union type representing the time spent in a given zone.
   * @alias module:model/TimedZoneRange
   * @class
   * @implements module:model/ZoneRange
   */
  var exports = function() {
    ZoneRange.call(this);
  };

  /**
   * Constructs a <code>TimedZoneRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimedZoneRange} obj Optional instance to populate.
   * @return {module:model/TimedZoneRange} The populated <code>TimedZoneRange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ZoneRange.constructFromObject(data, obj);
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Number');
    }
    return obj;
  }

  /**
   * The number of seconds spent in this zone
   * @member {Number} time
   */
  exports.prototype.time = undefined;

  // Implement ZoneRange interface:
  /**
   * The minimum value in the range.
   * @member {Number} min
   */
  exports.prototype.min = undefined;

  /**
   * The maximum value in the range.
   * @member {Number} max
   */
  exports.prototype.max = undefined;

  return exports;

}));
