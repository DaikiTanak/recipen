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
    }
  },
  created: async function() {
    const response = await axios.get('/api/spam')
    this.saved_data = response.data
  },
  methods: {
    show_detail: function(recipe) {
      var stuffs = recipe.stuffs
      recipe.show_detail = !recipe.show_detail
    },
    remove_recipe: function(recipe) {
      var index = this.saved_data.indexOf(recipe)
      this.saved_data.splice(index, 1);
      const res = axios.delete('/spam/' + recipe.id)
    }

  }
}
</script>
