![fave.tech(talk) logo](public/assets/images/fave-tech-talk-logo-two.png)

# This README outlines the details of collaborating on this Ember application: fave.tech(talk)

## Original Idea

Goal: Create a site where users can post their favorite tech talks, speeches, demos to generate healthy discussion regarding the topic presented.

## Next Steps

As of April 30, 2017 the application is in an acceptable state for presentation as an MVP. The application shown would be an admin interface with full CRUD functionality.

Things that need to be addressed are below:

* More styling, especially the buttons.
* Paths: after submitting a comment, the feed/feed_id page does not get refreshed automatically. I need to refresh the page without leaving it. Needs work.
* Experiment with a different font-family.
* Need user testing.
* Need to start thinking about security for users.
* How to incorporate social media apart from the social media options already provided by the videos.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/likewater/fave-tech-talks.git`
* `cd fave-tech-talk`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

The app is still in development. We are using Firebase as our DB. We would need to find hosting and a dedicated and secure DB before deploying.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
