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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StravaApiV3);
  }
}(this, function(expect, StravaApiV3) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SummaryAthlete', function() {
      beforeEach(function() {
        instance = new StravaApiV3.SummaryAthlete();
      });

      it('should create an instance of SummaryAthlete', function() {
        // TODO: update the code to test SummaryAthlete
        expect(instance).to.be.a(StravaApiV3.SummaryAthlete);
      });

      it('should have the property resourceState (base name: "resource_state")', function() {
        // TODO: update the code to test the property resourceState
        expect(instance).to.have.property('resourceState');
        // expect(instance.resourceState).to.be(expectedValueLiteral);
      });

      it('should have the property firstname (base name: "firstname")', function() {
        // TODO: update the code to test the property firstname
        expect(instance).to.have.property('firstname');
        // expect(instance.firstname).to.be(expectedValueLiteral);
      });

      it('should have the property lastname (base name: "lastname")', function() {
        // TODO: update the code to test the property lastname
        expect(instance).to.have.property('lastname');
        // expect(instance.lastname).to.be(expectedValueLiteral);
      });

      it('should have the property profileMedium (base name: "profile_medium")', function() {
        // TODO: update the code to test the property profileMedium
        expect(instance).to.have.property('profileMedium');
        // expect(instance.profileMedium).to.be(expectedValueLiteral);
      });

      it('should have the property profile (base name: "profile")', function() {
        // TODO: update the code to test the property profile
        expect(instance).to.have.property('profile');
        // expect(instance.profile).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property sex (base name: "sex")', function() {
        // TODO: update the code to test the property sex
        expect(instance).to.have.property('sex');
        // expect(instance.sex).to.be(expectedValueLiteral);
      });

      it('should have the property premium (base name: "premium")', function() {
        // TODO: update the code to test the property premium
        expect(instance).to.have.property('premium');
        // expect(instance.premium).to.be(expectedValueLiteral);
      });

      it('should have the property summit (base name: "summit")', function() {
        // TODO: update the code to test the property summit
        expect(instance).to.have.property('summit');
        // expect(instance.summit).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "created_at")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updated_at")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

    });
  });

}));
