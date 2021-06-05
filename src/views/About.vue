<template>
  <div class="about">
    <p>Bruno Costa - My first Vue application. A site for events to better the world.</p>
    <div id="personalization_slot">Insert your Personalization here!</div>
    <div id="personalization_slot2">Insert your 2nd Personalization here!</div>
    <div id="personalization_slot3">Insert your 3rd Personalization here!</div>
  </div>
</template>

<script>
/*
** THIS VERSION OF LIFT.JS IS FOR ACQUIA LIFT VERSION 4
*/
window.AcquiaLift = {
  /*
  ** ACCOUNT PROPERTIES | MANDATORY | Should be the same across all sites in the same account
  ** Content values need to be the same as what's Lift Profile Manager, Admin > Customer Sites > Customer Details
  ** The following values are examples. Update all variables for your own installation of Acquia Lift
  */
  account_id: "HEADLESSBC",
  liftAssetsURL: "https://builder.lift.acquia.com",
  liftDecisionAPIURL: "https://us-east-1-demo-decisionapi.lift.acquia.com",
  authEndpoint: "https://us-east-1-demo-oauth2.lift.acquia.com/authorize",
  bootstrapMode: "auto",
  contentReplacementMode: "trusted",
  cdfVersion: "2",

  /*
  ** SITE ID | MANDATORY | Should be different for each site and environment in the same account
  ** Content value needs to be created and match what's in Lift Profile Manager
  ** Admin > Manage Configuration Data > Customer Sites
  */
  site_id: "myvueapp",

  /** PAGE-SPECIFIC PROPERTIES | OPTIONAL | Content values can be different from page to page **/
  profile: {
    'author':"Acquia",
    'engagement_score':'1',
    'page_type':"content page",
    'post_id':"123",
    'published_date':"1507914363",
    'content_title':"Homepage",
    'content_type':"page",
    'content_section':"Home",
    'content_keywords':"LiftU",
    'persona':"Student",

    /* CUSTOM COLUMN META DATA | OPTIONAL | Content values can be different from page to page
    ** The itemprops need to be created from Lift Profile Manager
    ** Admin > Manage Configuration Data > Custom Column Meta Data.
    ** Will always be the format below of {table}_udf{accessor_number} -->
    **/
    'person_udf4':"Custom Value"
  }
};

export default {
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "https://builder.lift.acquia.com/lift.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
};
</script>
