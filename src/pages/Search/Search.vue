<template>
  <div class="search_container">
    <div class="search_header">
      <input type="text" class="searchInput" :placeholder="defaultKeyword" v-model="searchText">
      <van-icon name="cross" class="clear" v-show="searchText" @click="clearText" />
      <span class="cancel" @click="$router.back()">取消</span>
    </div>
    <div class="search_content" v-show="isShowKeyWord">
      <h3 class="title">热门搜索</h3>
      <ul class="keywordList">
        <li v-for="(key,index) in hotKeyList" :key="index" :class="{on:key.highlight === 1}">
          <a href="javascript:;">{{key.keyword}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default{
  name:'Search',
  data () {
    return {
      searchText:'',
      isShowKeyWord:true,
      defaultKeyword:'',//搜索框内内容
      hotKeyList:[],//关键字数组
    }
  },
  computed: {
    ...mapState({
      searchInfo:state=>state.search.searchInfo
    })
  },
  watch: {
    searchText(){
        this.isShowKeyWord = !this.searchText
    }
  },
  async mounted () {
    await this.$store.dispatch('getSearchInfo')
    // 定义一个随机数，每次刷新placeholder内容改变
    const number = Math.floor(Math.random()* (this.searchInfo.defaultKeywords.length+1))
    this.defaultKeyword = this.searchInfo.defaultKeywords[number].keyword
    // 关键字数组
    this.hotKeyList = this.searchInfo.hotKeywordVOList
  },
  methods: {
    clearText(){
      this.searchText = ''
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.search_container
  width 100%
  .search_header
    width 100%
    height 44px
    margin-left 15px
    margin-bottom 20px
    position relative
    &::before
      position absolute
      left 10px
      top 22px
      content:''
      display inline-block
      width 15px
      height 15px
      background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp')
      background-size 100% 100%
    input 
      width 300px
      height 28px
      box-sizing border-box
      background-color #f4f4f4
      padding 4px 30px
      margin-right 18px
      font-size 14px
    
    .clear
      position absolute
      top 22px
      right 80px
      font-size 15px
    .cancel 
      font-size 14px
  .search_content
    .title
      font-size 14px
      margin-left 15px
      color #ccc
      margin-bottom 5px
    .keywordList
      margin-left 15px
      display flex
      flex-wrap wrap
      li
        display flex
        align-items center
        padding 2px 4px
        height 23px
        text-align center
        margin 0 15px 15px 0
        border 1px solid #ccc
        border-radius 2px
        &.on
          border 1px solid #dd1a21
          a
            color #dd1a21
        a
          font-size 12px
          color #333

</style>
