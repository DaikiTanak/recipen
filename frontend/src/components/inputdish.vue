<template>
<div class="input-text">
  <form>
    <!-- 日付入力 -->
    <div class="form-group" id="registdate">
      <label for="formGroupExampleInput">日付を入力</label>
      <input v-model="createdat" type="date" class="form-control" id="createdat" placeholder="Example input">
    </div>
    <!-- 料理の名前入力 -->
    <div class="form-group" id="registdishname">
      <label for="formGroupExampleInput">料理名</label>
      <input v-model="dishname" type="text" class="form-control" id="dishname" placeholder="Example input">
    </div>
  </form>

  <!-- ボタン -->
  <div class="buttons">
    <tr>
      <td>
        <div id="regist_button">
          <button v-if="registering_dish & dishname.length > 0" v-on:click="regist_dish" class="btn btn-outline-primary">材料・手順の入力</button>
          <button v-else-if="!registering_dish & dishname.length > 0" v-on:click="cancel_regist" class="btn btn-outline-secondary">Cancel</button>
        </div>
      </td>
      <td>
        <!-- レシピ登録 -->
        <div id="save_button">
          <button v-if="dishname" v-on:click="save_dish" class="btn btn-success"">保存</button>
        </div>
      </td>
    </tr>
  </div>
  <div id=" extrainfo" v-if="registering_stuffs">
            <!-- 材料の追加：情報の入力 -->
            <div id="AddStuff">
              <div class="StuffAddForm">
                <form>
                  <table>
                    <tr>
                      <td><input v-model="stuff_name" type="text" class="form-control" id="formGroupExampleInput" placeholder="材料名"></td>
                      <td><input v-model="stuff_quantity" type="text" class="form-control" id="formGroupExampleInput" placeholder="量"></td>
                      <td><button v-on:click="add_stuff(stuff_name, stuff_quantity)" class="btn btn-outline-secondary">材料を追加</button></td>
                    </tr>
                  </table>
                </form>

              </div>
            </div>

            <!-- 追加された材料の表示 -->
            <div id="AddedStuffs">
              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th>材料No.</th>
                    <th>材料名</th>
                    <th>量</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(stuff, index) in stuffs">
                    <th scope="row">{{index+1}}</th>
                    <td>{{stuff.name}}</td>
                    <td>{{stuff.quantity}}</td>
                    <td><button v-on:click="remove_stuff(stuff)" class="btn btn-outline-danger">削除</button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- 作り方の追加 -->
            <div>
              <div id="AddMethods">
                <div class="MethodForm">
                  <form>
                    <table>
                      <tr>
                        <!-- 入力 -->
                        <td><input v-model="method_input" type="text" class="form-control" id="formGroupExampleInput" placeholder="作り方を入力"></td>
                        <td><button v-on:click="add_method()" class="btn btn-outline-secondary">手順を追加</button></td>
                      </tr>
                    </table>
                  </form>

                </div>
              </div>

              <!-- 追加された作り方の表示 -->
              <div id="AddedStuffs">
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <th>手順No.</th>
                      <th>手順</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(method, index) in methods">
                      <th scope="row">{{index+1}}</th>
                      <td>{{method.method}}</td>
                      <td><button v-on:click="remove_method(method)" class="btn btn-outline-danger">削除</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
        </div>
  </div>
</template>

<script>
const axios = require('axios').create({
  baseURL: 'http://localhost:3000'
})

export default {
  // el: '#registdish',
  name: "RegistDish",
  data() {
    return {
      registering_dish: true,
      registering_stuffs: false,
      stuffs: [],
      methods: [],
      createdat: "",
      dishname: "",
      stuff_name: "",
      stuff_quantity: "",
      method_input: ""
    }
  },
  created: function() {
    var today = new Date();
    today.setDate(today.getDate());
    var yyyy = today.getFullYear();
    var mm = ("0" + (today.getMonth() + 1)).slice(-2);
    var dd = ("0" + today.getDate()).slice(-2);
    this.createdat = yyyy + '-' + mm + '-' + dd;
  },
  methods: {
    clear: function() {
      // 変数をクリア
      this.created_at = ""
      this.dishname = ""
      this.stuffs = []
      this.methods = []

      this.stuff_name = ""
      this.stuff_quantity = ""
      this.method_input = ""
      this.registering_dish = true
      this.registering_stuffs = false
    },
    regist_dish: function() {
      this.registering_dish = false
      this.registering_stuffs = true
    },
    cancel_regist: function() {
      this.clear()
    },
    add_stuff: function(name, quantity) {
      if (this.stuff_name.length > 0) {
        this.stuff_counter += 1
        this.stuffs.push({
          name: name,
          quantity: quantity,
        })
      }
    },
    remove_stuff: function(stuff) {
      var index = this.stuffs.indexOf(stuff)
      this.stuffs.splice(index, 1);
      this.stuff_counter -= 1
    },
    add_method: function() {
      if (this.method_input.length > 0) {
        this.methods.push({
          method: this.method_input,
        })
      }
    },
    remove_method: function(m) {
      var index = this.methods.indexOf(m)
      this.methods.splice(index, 1);
    },

    save_dish: async function() {
      var recipe_content = {
        created_at: this.createdat,
        dishname: this.dishname,
        stuffs: this.stuffs,
        show_detail: false
      }
      const res = await axios.post('/api/spam', recipe_content)

      // 今入力されている情報を消去
      this.clear()
    }
  }
}
</script>


<style>
.StuffAddForm {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.buttons {
  margin-right: 0px;
}
</style>
