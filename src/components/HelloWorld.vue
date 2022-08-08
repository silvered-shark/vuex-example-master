<template>
  <div>
    <div>
      <label for="spell-name">
        Search by Spell Name
        <input type="text" v-model="spellName" v-on:keyup.enter="search" id="spell-name" />
      </label>
      <button @click="search">Search</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Spell</th>
          <th>Type</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="spell in (singleSpell.length > 0 ? singleSpell : spells)" :key="spell.id">
          <td>{{ spell.spell }}</td>
          <td>{{ spell.type }}</td>
          <td>{{ spell.effect }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data() {
    return {
      spellName: null
    }
  },
  computed: {
    ...mapGetters([
      'spells',
      'singleSpell',
      'base',
      'key'
    ]),
  },
  mounted() {
    this.fetchSpells()
  },
  methods: {
    ...mapActions([
      'fillSpells',
      'fillSingleSpell'
    ]),
    fetchSpells() {
      const base = this.base
      const key = this.key
      fetch(`${base}/spells?key=${key}`)
      .then(resp => resp.json())
      .then(obj => {
        this.fillSpells(obj)
      })
    },
    search() {
      const singleSpell = this.spells.filter(spell => spell.spell.toLowerCase().includes(this.spellName.toLowerCase()))
      this.fillSingleSpell(singleSpell)
    }
  }
}
</script>
