<template>
    <div>
        <div class="dialogBase">
            <div class="dialogBackground"></div>
            <div class="dialogFrame">
                <div class="dialogHeader">
                    <div class="dialogTitle">
                        得意先検索
                    </div>
                    <button v-on:click="close">閉じる</button>
                </div>
                <div class="dialogBody">
                 <div class="searchArea">
                    <div class="tv">
                        <div class="title">営業所コード</div>
                        <div class="value"><input type="search" size="6" v-model="searchOfficeCode"></div>
                        <div class="value"><label>以外<input type="checkbox" name="check" v-model="notLike"></label></div>
                    </div>
                    <br />
                    <div class="tv">
                        <div class="title">得意先カナ</div>
                        <div class="value"><input type="search" size="40" placeholder="あいまい検索のキーワードを入力" v-model="searchCustomerKana"></div>
                    </div>
                    <br />
                    <div class="tv">
                        <div class="title">得意先名</div>
                        <div class="value"><input type="search" size="40" placeholder="あいまい検索のキーワードを入力" v-model="searchCustomerName"></div>
                    </div>
                    <br />
                    <div style="width: 100%;text-align:center;margin-top: 10px;margin-bottom: 10px;">
                        <button style="width:100px;height: 32px;" v-on:click="search">検索</button>
                    </div>
                 </div>    
                    <table class="searchResult">
                        <tr>
                            <th class="w100 left">コード</th>
                            <th class="left">名称</th>
                            <th class="left">カナ</th>
                        </tr>
                        <tr v-for="result in results" :key="result.CODE">
                            <td class="w100"><div style="text-decoration: underline;cursor:pointer;" v-on:click="select(result.CODE)">{{ result.CODE }}</div></td>
                            <td>{{ result.NAME }}</td>
                            <td>{{ result.NAME1 }}</td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        officeCode : String,
        hCode : String,
    },
    data() {
        return {
            searchOfficeCode: "",
            searchCustomerKana: "",
            searchCustomerName: "",
            notLike : false,
            results: [],
        }
    },
    methods: {
        //---------------------------------------------------------------------
        // ダイアログのクローズ
        //---------------------------------------------------------------------
        close: function(){
            this.$emit("close");
        },
        //---------------------------------------------------------------------
        // 検索
        //---------------------------------------------------------------------
        search: async function(){
            await axios.post("/api/master/customers", {
                'searchOfficeCode'      : this.searchOfficeCode,
                'searchCustomerKana'    : this.searchCustomerKana,
                'searchCustomerName'    : this.searchCustomerName,
                'notLike'               : ((this.notLike) ? 1 : 0),
            })
            .then(response => {
                this.results = response.data;
            });
        },
        //---------------------------------------------------------------------
        // 選択
        //---------------------------------------------------------------------
        select: function(customerCode){
            this.$emit("select", customerCode);
        },
    },
    //-------------------------------------------------------------------------
    // 初期処理
    //-------------------------------------------------------------------------
    mounted: async function(){

        // 営業所コード
        this.searchOfficeCode = this.officeCode;
        // 通常の場合は営業所で絞り込み
        // 融通の場合は逆絞り込み
        if (this.hCode == null || this.hCode == 1 || this.hCode == 2 || this.hCode == 3) {
            this.notLike = false;
        } else {
            this.notLike = true;
        }

        // 検索
        await this.search();
    },
}
</script>
<style scoped>

</style>
