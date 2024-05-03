<template>
    <div>
        <div class="dialogBase">
            <div class="dialogBackground"></div>
            <div class="dialogFrame">
                <div class="dialogHeader">
                    <div class="dialogTitle">
                        営業所検索
                    </div>
                    <button v-on:click="close">閉じる</button>
                </div>
                <div class="dialogBody">
                    <div class="searchArea">
                        <div class="tv">
                            <div class="title">営業所コード</div>
                            <div class="value"><input type="search" size="6" v-model="searchOfficeCode"></div>
                        </div>
                        <br />
                        <div class="tv">
                            <div class="title">営業所カナ</div>
                            <div class="value"><input type="search" size="40" placeholder="あいまい検索のキーワードを入力" v-model="searchOfficeKana"></div>
                        </div>
                        <br />
                        <div class="tv">
                            <div class="title">営業所名</div>
                            <div class="value"><input type="search" size="40" placeholder="あいまい検索のキーワードを入力" v-model="searchOfficeName"></div>
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

    },
    data() {
        return {
            searchOfficeCode: "",
            searchOfficeKana: "",
            searchOfficeName: "",
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
            await axios.post("/api/master/offices", {
                'searchOfficeCode'     : this.searchOfficeCode,
                'searchOfficeKana'     : this.searchOfficeKana,
                'searchOfficeName'     : this.searchOfficeName,
            })
            .then(response => {
                this.results = response.data;
            });
        },
        //---------------------------------------------------------------------
        // 選択
        //---------------------------------------------------------------------
        select: function(officeCode){
            this.$emit("select", officeCode);
        },
    },
    //-------------------------------------------------------------------------
    // 初期処理
    //-------------------------------------------------------------------------
    mounted: async function(){
        
        // 検索
        await this.search();
    },
}
</script>
<style scoped>
</style>
