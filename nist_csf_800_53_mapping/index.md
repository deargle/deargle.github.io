---
title: NIST Cybersecurity Framework <=> 800-53 Controls Mapping
description: The NIST CSF Core maps controls from 800-53 (and other) informative
  references, but only by code, which makes text-searching impossible. Mashup!
date: 2020-10-27
layout: page
---
<!-- Required Stylesheets -->
<link
  type="text/css"
  rel="stylesheet"
  href="https://unpkg.com/bootstrap/dist/css/bootstrap.min.css"
/>
<link
  type="text/css"
  rel="stylesheet"
  href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"
/>

<style media="screen">
  [v-cloak] { display: none; }
</style>

<!-- Load polyfills to support older browsers -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver"></script>

<!-- Required scripts -->
<script src="https://unpkg.com/vue@latest/dist/vue.js"></script>
<script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.js"></script>

<script src="https://d3js.org/d3-dsv.v2.min.js"></script>
<script src="https://d3js.org/d3-fetch.v2.min.js"></script>

<!-- Our application root element -->
{::nomarkdown}
{% raw %}
<div id="app" markdown="0" v-cloak>
  <b-container fluid>
    <b-row>
      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Type to Search"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- https://bootstrap-vue.org/docs/components/table -->
    <b-table
      striped
      hover
      small
      :items="items"
      :fields="fields"
      :filter="filter"
      :filter-included-fields="filterOn"
    >
      <template #cell(800-53_NAME)="data">
        <a :href="`https://nvd.nist.gov/800-53/Rev4/control/${data.value}`">{{ data.value }}</a>
      </template>

      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Control Description:</b></b-col>
            <b-col><p style='white-space: pre-line'>{{ row.item['800-53_extended_description'] }}</p></b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Source:</b></b-col>
            <b-col><a :href="`https://nvd.nist.gov/800-53/Rev4/control/${row.item['800-53_NAME']}`">{{ row.item['800-53_NAME'] }}</a></b-col>
          </b-row>
          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
      </template>

    </b-table>

  </b-container>
</div>

<!-- Start running your app -->
<script>

let _items = null;

d3.csv("joined-condensed.csv").then(function(items) {
  // controlsBySubcategory = d3.group(data, d => d.nsf_Subcategory)
  _items = items;
  window.app = new Vue({
    el: '#app',
    data: {
      fields: [
        {
          key: 'nsf_csf_Subcategory',
          label: 'NSF CSF Core Subcategory',
          sortable: true,
        },
        {
          key: '800-53_NAME',
          label: 'Control',
          sortable: true,
        },
        {
          key: '800-53_TITLE',
          label: 'Title',
          formatter: value => { return value.toLowerCase() },
          tdClass: 'text-capitalize'
        },
        'show_details'],
      items: items,
      filter: null,
      filterOn: []
      // filterOn: ['nsf_Subcategory', 'nsf_Control', '800-53_TITLE']
    },
    computed: {
      showAlert() {
        return this.name.length > 4 ? true : false
      }
    }
  })
});
</script>
{% endraw %}
{:/nomarkdown}
