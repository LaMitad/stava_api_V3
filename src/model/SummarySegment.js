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
    define(['ApiClient', 'model/LatLng', 'model/SummaryPRSegmentEffort', 'model/SummarySegmentEffort'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LatLng'), require('./SummaryPRSegmentEffort'), require('./SummarySegmentEffort'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.SummarySegment = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.LatLng, root.StravaApiV3.SummaryPRSegmentEffort, root.StravaApiV3.SummarySegmentEffort);
  }
}(this, function(ApiClient, LatLng, SummaryPRSegmentEffort, SummarySegmentEffort) {
  'use strict';

  /**
   * The SummarySegment model module.
   * @module model/SummarySegment
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SummarySegment</code>.
   * @alias module:model/SummarySegment
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SummarySegment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SummarySegment} obj Optional instance to populate.
   * @return {module:model/SummarySegment} The populated <code>SummarySegment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('activity_type'))
        obj.activityType = ApiClient.convertToType(data['activity_type'], 'String');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('average_grade'))
        obj.averageGrade = ApiClient.convertToType(data['average_grade'], 'Number');
      if (data.hasOwnProperty('maximum_grade'))
        obj.maximumGrade = ApiClient.convertToType(data['maximum_grade'], 'Number');
      if (data.hasOwnProperty('elevation_high'))
        obj.elevationHigh = ApiClient.convertToType(data['elevation_high'], 'Number');
      if (data.hasOwnProperty('elevation_low'))
        obj.elevationLow = ApiClient.convertToType(data['elevation_low'], 'Number');
      if (data.hasOwnProperty('start_latlng'))
        obj.startLatlng = LatLng.constructFromObject(data['start_latlng']);
      if (data.hasOwnProperty('end_latlng'))
        obj.endLatlng = LatLng.constructFromObject(data['end_latlng']);
      if (data.hasOwnProperty('climb_category'))
        obj.climbCategory = ApiClient.convertToType(data['climb_category'], 'Number');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('private'))
        obj._private = ApiClient.convertToType(data['private'], 'Boolean');
      if (data.hasOwnProperty('athlete_pr_effort'))
        obj.athletePrEffort = SummarySegmentEffort.constructFromObject(data['athlete_pr_effort']);
      if (data.hasOwnProperty('athlete_segment_stats'))
        obj.athleteSegmentStats = SummaryPRSegmentEffort.constructFromObject(data['athlete_segment_stats']);
    }
    return obj;
  }

  /**
   * The unique identifier of this segment
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * The name of this segment
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {module:model/SummarySegment.ActivityTypeEnum} activityType
   */
  exports.prototype.activityType = undefined;

  /**
   * The segment's distance, in meters
   * @member {Number} distance
   */
  exports.prototype.distance = undefined;

  /**
   * The segment's average grade, in percents
   * @member {Number} averageGrade
   */
  exports.prototype.averageGrade = undefined;

  /**
   * The segments's maximum grade, in percents
   * @member {Number} maximumGrade
   */
  exports.prototype.maximumGrade = undefined;

  /**
   * The segments's highest elevation, in meters
   * @member {Number} elevationHigh
   */
  exports.prototype.elevationHigh = undefined;

  /**
   * The segments's lowest elevation, in meters
   * @member {Number} elevationLow
   */
  exports.prototype.elevationLow = undefined;

  /**
   * @member {module:model/LatLng} startLatlng
   */
  exports.prototype.startLatlng = undefined;

  /**
   * @member {module:model/LatLng} endLatlng
   */
  exports.prototype.endLatlng = undefined;

  /**
   * The category of the climb [0, 5]. Higher is harder ie. 5 is Hors catégorie, 0 is uncategorized in climb_category.
   * @member {Number} climbCategory
   */
  exports.prototype.climbCategory = undefined;

  /**
   * The segments's city.
   * @member {String} city
   */
  exports.prototype.city = undefined;

  /**
   * The segments's state or geographical region.
   * @member {String} state
   */
  exports.prototype.state = undefined;

  /**
   * The segment's country.
   * @member {String} country
   */
  exports.prototype.country = undefined;

  /**
   * Whether this segment is private.
   * @member {Boolean} _private
   */
  exports.prototype._private = undefined;

  /**
   * @member {module:model/SummarySegmentEffort} athletePrEffort
   */
  exports.prototype.athletePrEffort = undefined;

  /**
   * @member {module:model/SummaryPRSegmentEffort} athleteSegmentStats
   */
  exports.prototype.athleteSegmentStats = undefined;


  /**
   * Allowed values for the <code>activityType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActivityTypeEnum = {
    /**
     * value: "Ride"
     * @const
     */
    ride: "Ride",

    /**
     * value: "Run"
     * @const
     */
    run: "Run"
  };

  return exports;

}));
