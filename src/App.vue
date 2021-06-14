<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Personalization</router-link>
      <router-link :to="{ name: 'EventList' }">Events</router-link>
    </div>
    <router-view />
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
  account_id: 'HEADLESSBC',
  liftAssetsURL: 'https://builder-demo.lift.acquia.com',
  liftDecisionAPIURL: 'https://us-east-1-demo-decisionapi.lift.acquia.com',
  authEndpoint: 'https://us-east-1-demo-oauth2.lift.acquia.com/authorize',
  bootstrapMode: 'auto',
  contentReplacementMode: 'trusted',
  cdfVersion: '2',
  context_language: 'en',

  /*
   ** SITE ID | MANDATORY | Should be different for each site and environment in the same account
   ** Content value needs to be created and match what's in Lift Profile Manager
   ** Admin > Manage Configuration Data > Customer Sites
   */
  site_id: 'myvueapp',

  /** PAGE-SPECIFIC PROPERTIES | OPTIONAL | Content values can be different from page to page **/
  profile: {
    author: 'Bruno Costa',
    engagement_score: '10',
    page_type: 'headless vue app',
    post_id: '1',
    published_date: '1507914363',
    content_title: 'Headless Personalization',
    content_type: 'headless',
    content_section: 'app',
    content_keywords: 'headless',
    persona: 'Headless User',
    utm_name: '',
    utm_content: '',
    utm_medium: '',
    utm_referrer: '',
    utm_terms: ''

    /* CUSTOM COLUMN META DATA | OPTIONAL | Content values can be different from page to page
     ** The itemprops need to be created from Lift Profile Manager
     ** Admin > Manage Configuration Data > Custom Column Meta Data.
     ** Will always be the format below of {table}_udf{accessor_number} -->
     **/
    //person_udf4: 'Custom Value'
  }
}

export default {
  mounted() {
    const plugin = document.createElement('script')
    plugin.setAttribute('src', 'https://builder-demo.lift.acquia.com/lift.js')
    plugin.async = true
    document.head.appendChild(plugin)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 60px;
}

#nav a {
  font-weight: bold;
  padding: 30px;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>