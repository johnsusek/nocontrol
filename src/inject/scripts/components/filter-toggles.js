/* <filter-toggles> */

Vue.component('filter-toggles', {
  template: html`
    <section id="filter-toggles">
      <h5>Blocked categories</h5>
      <ul>
        <li v-for="toggle in toggles">
          <label>
            <span>
              <input 
                :checked="toggle.checked"
                :value="toggle.value" 
                type="checkbox" 
                @change="toggle.checked = !toggle.checked">
            </span>
            <span>{{ toggle.label }}</span>
          </label>
        </li>
      </ul>
    </section>
  `(),
  store: ['toggles', 'keywords']
});
