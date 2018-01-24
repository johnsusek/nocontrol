/* <filters></filters> */

Vue.component('filters', {
  template: html`
    <div id="feedblock-filters" v-show="filters.visible">
      <filter-keywords></filter-keywords> 
      <filter-blocklists></filter-blocklists> 
      <filter-toggles></filter-toggles> 
      <filter-sidebar></filter-sidebar> 
      <filter-builder></filter-builder>
      <filtered-feed></filtered-feed>
    </div>
  `(),
  store: {
    filters: 'facebook.filters'
  }
});
