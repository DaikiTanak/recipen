<template>
<!-- 保存されたレシピの表示 -->
<div>
  <!-- {{saved_data}} -->
  <div id="ShowSavedRecipes">
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th>レシピNo.</th>
          <th>料理名</th>
          <th>作成日時</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <!-- 各レシピの表示 -->
      <tbody>
        <tr v-for="(recipe, index) in saved_data">
          <th scope="row">{{index+1}}</th>
          <td>{{recipe.dishname}}</td>
          <td>{{recipe.created_at}}</td>
          <td><button v-on:click="show_detail(recipe)" class="btn btn-primary">詳細</button></td>
          <td><button v-on:click="remove_recipe(recipe)" class="btn btn-outline-danger">削除</button></td>
          <!-- <p v-if="recipe.show_detail" class="font-weight-bold">Bold text.</p> -->
          <!-- {{recipe}} -->
        </tr>
      </tbody>
    </table>

    <!-- 詳細レシピを表示 -->
    <div id="ShowDetail" v-if="if_show_detail">
      <table class="table">
          <tr>
            <th>料理名</th>
            <th>{{shown_recipe.dishname}}</th>
          </tr>
          <tr>
            <th>作成日時</th>
            <th>{{shown_recipe.created_at}}</th>
          </tr>
          <tr>
            <th>材料</th>
            <th>{{shown_recipe.stuffs}}</th>
          </tr>
          <tr>
            <th>手順</th>
            <th>{{shown_recipe.methods}}</th>
          </tr>
      </table>
      <td><button v-if="shown_recipe.show_detail" v-on:click="close_detail(shown_recipe)" class="btn btn-primary">詳細を閉じる</button></td>
    </div>
  </div>
</div>
</template>

<script>
// dbへのアクセス
const axios = require('axios').create({
  baseURL: 'http://localhost:3000'
})
// : require('axios').create()
export default {
  data() {
    return {
      saved_data: [],
      if_show_detail: false,
      shown_recipe: {}
    }
  },
  created: async function() {
    const response = await axios.get('/api/spam')
    this.saved_data = response.data
  },
  methods: {
    show_detail: function(recipe) {

      if (!this.shown_recipe === {}){
        this.shown_recipe.show_detail = false
      }

      var stuffs = recipe.stuffs
      recipe.show_detail = true
      this.if_show_detail = true
      this.shown_recipe = recipe

    },
    close_detail: function(recipe){
      this.shown_recipe.show_detail = false
      this.if_show_detail = false
    },
    remove_recipe: function(recipe) {
      var index = this.saved_data.indexOf(recipe)
      this.saved_data.splice(index, 1);
      const res = axios.delete('/spam/' + recipe.id)
    }

  }
}
</script>
