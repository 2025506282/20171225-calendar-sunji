import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const types = {
  HEAD_SHOW_SUCCESS: 'HEAD_SHOW_SUCCESS',
  HEAD_SHOW_FAIL: 'HEAD_SHOW_FAIL',
  HIDE_LOADING: 'HIDE_LOADING',
  SHOW_LOADING: 'SHOW_LOADING',
  FOOTER_SHOW: 'FOOTER_SHOW',
  FOOTER_HIDE: 'FOOTER_HIDE'
};
const state = {
  headerShow: true,
  loadingShow: false,
  footerShow:true
};
const getters = {
  headerShow(state) {
    return state.headerShow;
  },
  loadingShow(state) {
    return state.loading;
  },
  footerShow(state) {
    return state.footerShow;
  }
};
const mutations = {
  showHeader(state) {
    state.headerShow = true;
  },
  hideHeader(state) {
    state.headerShow = false;
  },
  showFooter(state) {
    state.footerShow = true;
  },
  hideFooter(state) {
    state.footerShow = false;
  },
  showLoading(state) {
    state.loadingShow = true;
  },
  hideLoading(state) {
    state.loadingShow = false;
  }
};
const actions = {
  showHeader:({commit}) => {
    commit('showHeader')
  },
  hideHeader:({commit}) => {
    commit('hideHeader')
  },
  showFooter:({commit}) => {
    commit('showFooter')
  },
  hideFooter:({commit}) => {
    commit('hideFooter')
  },
  showLoading:({commit}) => {
    commit('showLoading')
  },
  hideLoading:({commit}) => {
    commit('hideLoading')
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
