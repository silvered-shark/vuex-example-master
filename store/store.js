import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        base: 'https://cors-anywhere.herokuapp.com/https://www.potterapi.com/v1',
        key: '$2a$10$fG5Z.tF3gGT7VKovtW1JneTu4P9bYhxlDsfCvIuzsBaVC9ObfJE/m',
        spells: [],
        spell: []
    },

    getters: {
        spells: state => state.spells,
        singleSpell: state => state.spell,
        base: state => state.base,
        key: state => state.key
    },

    mutations: {
        FILL_SPELLS(state, spells) {
            state.spells = spells
        },
        FILL_SINGLE_SPELL(state, spell) {
            state.spell = spell
        }
    },

    actions: {
        fillSpells(ctx, spells) {
            ctx.commit('FILL_SPELLS', spells)
        },
        fillSingleSpell(ctx, spell) {
            ctx.commit('FILL_SINGLE_SPELL', spell)
        }
    }
})