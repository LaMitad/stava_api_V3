# strava_api_v3

StravaApiV3 - JavaScript client for strava_api_v3
The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 3.0.0
- Package version: 3.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install strava_api_v3 --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your strava_api_v3 from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('strava_api_v3')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var StravaApiV3 = require('strava_api_v3');

var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR ACCESS TOKEN"

var api = new StravaApiV3.ActivitiesApi()

var name = "name_example"; // {String} The name of the activity.

var type = "type_example"; // {String} Type of activity. For example - Run, Ride etc.

var startDateLocal = new Date("2013-10-20T19:20:30+01:00"); // {Date} ISO 8601 formatted date time.

var elapsedTime = 56; // {Number} In seconds.

var opts = { 
  'description': "description_example", // {String} Description of the activity.
  'distance': 3.4, // {Number} In meters.
  'trainer': 56, // {Number} Set to 1 to mark as a trainer activity.
  'commute': 56 // {Number} Set to 1 to mark as commute.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createActivity(name, type, startDateLocal, elapsedTime, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://www.strava.com/api/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*StravaApiV3.ActivitiesApi* | [**createActivity**](docs/ActivitiesApi.md#createActivity) | **POST** /activities | Create an Activity
*StravaApiV3.ActivitiesApi* | [**getActivityById**](docs/ActivitiesApi.md#getActivityById) | **GET** /activities/{id} | Get Activity
*StravaApiV3.ActivitiesApi* | [**getCommentsByActivityId**](docs/ActivitiesApi.md#getCommentsByActivityId) | **GET** /activities/{id}/comments | List Activity Comments
*StravaApiV3.ActivitiesApi* | [**getKudoersByActivityId**](docs/ActivitiesApi.md#getKudoersByActivityId) | **GET** /activities/{id}/kudos | List Activity Kudoers
*StravaApiV3.ActivitiesApi* | [**getLapsByActivityId**](docs/ActivitiesApi.md#getLapsByActivityId) | **GET** /activities/{id}/laps | List Activity Laps
*StravaApiV3.ActivitiesApi* | [**getLoggedInAthleteActivities**](docs/ActivitiesApi.md#getLoggedInAthleteActivities) | **GET** /athlete/activities | List Athlete Activities
*StravaApiV3.ActivitiesApi* | [**getZonesByActivityId**](docs/ActivitiesApi.md#getZonesByActivityId) | **GET** /activities/{id}/zones | Get Activity Zones
*StravaApiV3.ActivitiesApi* | [**updateActivityById**](docs/ActivitiesApi.md#updateActivityById) | **PUT** /activities/{id} | Update Activity
*StravaApiV3.AthletesApi* | [**getLoggedInAthlete**](docs/AthletesApi.md#getLoggedInAthlete) | **GET** /athlete | Get Authenticated Athlete
*StravaApiV3.AthletesApi* | [**getLoggedInAthleteZones**](docs/AthletesApi.md#getLoggedInAthleteZones) | **GET** /athlete/zones | Get Zones
*StravaApiV3.AthletesApi* | [**getStats**](docs/AthletesApi.md#getStats) | **GET** /athletes/{id}/stats | Get Athlete Stats
*StravaApiV3.AthletesApi* | [**updateLoggedInAthlete**](docs/AthletesApi.md#updateLoggedInAthlete) | **PUT** /athlete | Update Athlete
*StravaApiV3.ClubsApi* | [**getClubActivitiesById**](docs/ClubsApi.md#getClubActivitiesById) | **GET** /clubs/{id}/activities | List Club Activities
*StravaApiV3.ClubsApi* | [**getClubAdminsById**](docs/ClubsApi.md#getClubAdminsById) | **GET** /clubs/{id}/admins | List Club Administrators
*StravaApiV3.ClubsApi* | [**getClubById**](docs/ClubsApi.md#getClubById) | **GET** /clubs/{id} | Get Club
*StravaApiV3.ClubsApi* | [**getClubMembersById**](docs/ClubsApi.md#getClubMembersById) | **GET** /clubs/{id}/members | List Club Members
*StravaApiV3.ClubsApi* | [**getLoggedInAthleteClubs**](docs/ClubsApi.md#getLoggedInAthleteClubs) | **GET** /athlete/clubs | List Athlete Clubs
*StravaApiV3.GearsApi* | [**getGearById**](docs/GearsApi.md#getGearById) | **GET** /gear/{id} | Get Equipment
*StravaApiV3.RoutesApi* | [**getRouteAsGPX**](docs/RoutesApi.md#getRouteAsGPX) | **GET** /routes/{id}/export_gpx | Export Route GPX
*StravaApiV3.RoutesApi* | [**getRouteAsTCX**](docs/RoutesApi.md#getRouteAsTCX) | **GET** /routes/{id}/export_tcx | Export Route TCX
*StravaApiV3.RoutesApi* | [**getRouteById**](docs/RoutesApi.md#getRouteById) | **GET** /routes/{id} | Get Route
*StravaApiV3.RoutesApi* | [**getRoutesByAthleteId**](docs/RoutesApi.md#getRoutesByAthleteId) | **GET** /athletes/{id}/routes | List Athlete Routes
*StravaApiV3.RunningRacesApi* | [**getRunningRaceById**](docs/RunningRacesApi.md#getRunningRaceById) | **GET** /running_races/{id} | Get Running Race
*StravaApiV3.RunningRacesApi* | [**getRunningRaces**](docs/RunningRacesApi.md#getRunningRaces) | **GET** /running_races | List Running Races
*StravaApiV3.SegmentEffortsApi* | [**getEffortsBySegmentId**](docs/SegmentEffortsApi.md#getEffortsBySegmentId) | **GET** /segment_efforts | List Segment Efforts
*StravaApiV3.SegmentEffortsApi* | [**getSegmentEffortById**](docs/SegmentEffortsApi.md#getSegmentEffortById) | **GET** /segment_efforts/{id} | Get Segment Effort
*StravaApiV3.SegmentsApi* | [**exploreSegments**](docs/SegmentsApi.md#exploreSegments) | **GET** /segments/explore | Explore segments
*StravaApiV3.SegmentsApi* | [**getLoggedInAthleteStarredSegments**](docs/SegmentsApi.md#getLoggedInAthleteStarredSegments) | **GET** /segments/starred | List Starred Segments
*StravaApiV3.SegmentsApi* | [**getSegmentById**](docs/SegmentsApi.md#getSegmentById) | **GET** /segments/{id} | Get Segment
*StravaApiV3.SegmentsApi* | [**starSegment**](docs/SegmentsApi.md#starSegment) | **PUT** /segments/{id}/starred | Star Segment
*StravaApiV3.StreamsApi* | [**getActivityStreams**](docs/StreamsApi.md#getActivityStreams) | **GET** /activities/{id}/streams | Get Activity Streams
*StravaApiV3.StreamsApi* | [**getRouteStreams**](docs/StreamsApi.md#getRouteStreams) | **GET** /routes/{id}/streams | Get Route Streams
*StravaApiV3.StreamsApi* | [**getSegmentEffortStreams**](docs/StreamsApi.md#getSegmentEffortStreams) | **GET** /segment_efforts/{id}/streams | Get Segment Effort Streams
*StravaApiV3.StreamsApi* | [**getSegmentStreams**](docs/StreamsApi.md#getSegmentStreams) | **GET** /segments/{id}/streams | Get Segment Streams
*StravaApiV3.UploadsApi* | [**createUpload**](docs/UploadsApi.md#createUpload) | **POST** /uploads | Upload Activity
*StravaApiV3.UploadsApi* | [**getUploadById**](docs/UploadsApi.md#getUploadById) | **GET** /uploads/{uploadId} | Get Upload


## Documentation for Models

 - [StravaApiV3.ActivityStats](docs/ActivityStats.md)
 - [StravaApiV3.ActivityTotal](docs/ActivityTotal.md)
 - [StravaApiV3.ActivityType](docs/ActivityType.md)
 - [StravaApiV3.ActivityZone](docs/ActivityZone.md)
 - [StravaApiV3.BaseStream](docs/BaseStream.md)
 - [StravaApiV3.Comment](docs/Comment.md)
 - [StravaApiV3.Error](docs/Error.md)
 - [StravaApiV3.ExplorerResponse](docs/ExplorerResponse.md)
 - [StravaApiV3.ExplorerSegment](docs/ExplorerSegment.md)
 - [StravaApiV3.Fault](docs/Fault.md)
 - [StravaApiV3.HeartRateZoneRanges](docs/HeartRateZoneRanges.md)
 - [StravaApiV3.Lap](docs/Lap.md)
 - [StravaApiV3.LatLng](docs/LatLng.md)
 - [StravaApiV3.MetaActivity](docs/MetaActivity.md)
 - [StravaApiV3.MetaAthlete](docs/MetaAthlete.md)
 - [StravaApiV3.MetaClub](docs/MetaClub.md)
 - [StravaApiV3.PhotosSummary](docs/PhotosSummary.md)
 - [StravaApiV3.PhotosSummaryPrimary](docs/PhotosSummaryPrimary.md)
 - [StravaApiV3.PolylineMap](docs/PolylineMap.md)
 - [StravaApiV3.PowerZoneRanges](docs/PowerZoneRanges.md)
 - [StravaApiV3.Route](docs/Route.md)
 - [StravaApiV3.RunningRace](docs/RunningRace.md)
 - [StravaApiV3.Split](docs/Split.md)
 - [StravaApiV3.StreamSet](docs/StreamSet.md)
 - [StravaApiV3.SummaryGear](docs/SummaryGear.md)
 - [StravaApiV3.SummaryPRSegmentEffort](docs/SummaryPRSegmentEffort.md)
 - [StravaApiV3.SummarySegment](docs/SummarySegment.md)
 - [StravaApiV3.SummarySegmentEffort](docs/SummarySegmentEffort.md)
 - [StravaApiV3.TimedZoneDistribution](docs/TimedZoneDistribution.md)
 - [StravaApiV3.UpdatableActivity](docs/UpdatableActivity.md)
 - [StravaApiV3.Upload](docs/Upload.md)
 - [StravaApiV3.ZoneRange](docs/ZoneRange.md)
 - [StravaApiV3.ZoneRanges](docs/ZoneRanges.md)
 - [StravaApiV3.Zones](docs/Zones.md)
 - [StravaApiV3.AltitudeStream](docs/AltitudeStream.md)
 - [StravaApiV3.CadenceStream](docs/CadenceStream.md)
 - [StravaApiV3.DetailedGear](docs/DetailedGear.md)
 - [StravaApiV3.DetailedSegment](docs/DetailedSegment.md)
 - [StravaApiV3.DetailedSegmentEffort](docs/DetailedSegmentEffort.md)
 - [StravaApiV3.DistanceStream](docs/DistanceStream.md)
 - [StravaApiV3.HeartrateStream](docs/HeartrateStream.md)
 - [StravaApiV3.LatLngStream](docs/LatLngStream.md)
 - [StravaApiV3.MovingStream](docs/MovingStream.md)
 - [StravaApiV3.PowerStream](docs/PowerStream.md)
 - [StravaApiV3.SmoothGradeStream](docs/SmoothGradeStream.md)
 - [StravaApiV3.SmoothVelocityStream](docs/SmoothVelocityStream.md)
 - [StravaApiV3.SummaryActivity](docs/SummaryActivity.md)
 - [StravaApiV3.SummaryAthlete](docs/SummaryAthlete.md)
 - [StravaApiV3.SummaryClub](docs/SummaryClub.md)
 - [StravaApiV3.TemperatureStream](docs/TemperatureStream.md)
 - [StravaApiV3.TimeStream](docs/TimeStream.md)
 - [StravaApiV3.TimedZoneRange](docs/TimedZoneRange.md)
 - [StravaApiV3.DetailedActivity](docs/DetailedActivity.md)
 - [StravaApiV3.DetailedAthlete](docs/DetailedAthlete.md)
 - [StravaApiV3.DetailedClub](docs/DetailedClub.md)


## Documentation for Authorization


### strava_oauth

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://www.strava.com/api/v3/oauth/authorize
- **Scopes**: 
  - read: Read public segments, public routes, public profile data, public posts, public events, club feeds, and leaderboards
  - read_all: Read private routes, private segments, and private events for the user
  - profile:read_all: Read all profile information even if the user has set their profile visibility to Followers or Only You
  - profile:write: Update the user's weight and Functional Threshold Power (FTP), and access to star or unstar segments on their behalf
  - activity:read: Read the user's activity data for activities that are visible to Everyone and Followers, excluding privacy zone data
  - activity:read_all: The same access as activity:read, plus privacy zone data and access to read the user's activities with visibility set to Only You
  - activity:write: Access to create manual activities and uploads, and access to edit any activities that are visible to the app, based on activity read access level

