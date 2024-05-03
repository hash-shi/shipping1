<template>
    <div>
        <div class="dialogBase">
            <div class="dialogBackground"></div>
            <div class="dialogFrame">
                <div class="dialogHeader">
                    <div class="dialogTitle">
                        運転手検索
                    </div>
                    <button v-on:click="close">閉じる</button>
                </div>
                <div class="dialogBody">
                    <div class="searchArea">
                        <div class="tv">
                            <div class="title">営業所</div>
                            <div class="value"><input type="search" size="6" v-model="searchOfficeCode"></div>
                        </div>
                        <br />
                        <div class="tv" v-if="hCode == 4 || hCode == 5 || hCode == 6">
                            <div class="title">相手営業所</div>
                            <div class="value"><input type="search" size="6" v-model="searchOfficeOtherCode"></div>
                        </div>
                        <br />
                        <div class="tv">
                            <div class="title">運転手読み</div>
                            <div class="value"><input type="search" size="40" placeholder="あいまい検索のキーワードを入力" v-model="searchDriverKana"></div>
                        </div>
                        <br />
                        <div class="tv">
                            <div class="title">運転手名</div>
                            <div class="value"><input type="search" size="40" placeholder="あいまい検索のキーワードを入力" v-model="searchDriverName"></div>
                        </div>
                        <br />
                        <div class="tv">
                            <div class="title">運送会社読み</div>
                            <div class="value"><input type="search" size="40" placeholder="あいまい検索のキーワードを入力" v-model="searchTruckerKana"></div>
                        </div>
                        <br />
                        <div class="tv">
                            <div class="title">運送会社</div>
                            <div class="value"><input type="search" size="40" placeholder="あいまい検索のキーワードを入力" v-model="searchTruckerName"></div>
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
                            <th class="left">運送会社コード</th>
                            <th class="left">運送会社名</th>
                        </tr>
                        <tr v-for="result in results" :key="result.CODE">
                            <td class="w100"><div style="text-decoration: underline;cursor:pointer;" v-on:click="select(result.CODE)">{{ result.CODE }}</div></td>
                            <td>{{ result.NAME }}</td>
                            <td>{{ result.TRUCKER_CODE }}</td>
                            <td>{{ result.TRUCKER_NAME }}</td>
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
        officeOtherCode : String,
        hCode : Number,
    },
    data() {
        return {
            searchOfficeCode: "",
            searchOfficeOtherCode: "",
            searchDriverKana: "",
            searchDriverName: "",
            searchTruckerKana: "",
            searchTruckerName: "",
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
            await axios.post("/api/master/drivers", {
                'searchOfficeCode'     : this.searchOfficeCode,
                'searchOfficeOtherCode': this.searchOfficeOtherCode,
                'searchDriverKana'     : this.searchDriverKana,
                'searchDriverName'     : this.searchDriverName,
                'searchTruckerKana'    : this.searchTruckerKana,
                'searchTruckerName'    : this.searchTruckerName,
            })
            .then(response => {
                this.results = response.data;
            });
        },
        //---------------------------------------------------------------------
        // 選択
        //---------------------------------------------------------------------
        select: function(driverCode){
            this.$emit("select", driverCode);
        },
    },
    //-------------------------------------------------------------------------
    // 初期処理
    //-------------------------------------------------------------------------
    mounted: async function(){

        // // 営業所コード
        // // 通常の場合は営業所で絞り込み
        // // 融通の場合はなし
        // if (this.hCode == 1 || this.hCode == 2 || this.hCode == 3) {
        //     this.searchOfficeCode = this.officeCode;
        // }

        this.searchOfficeCode = this.officeCode;
        this.searchOfficeOtherCode = this.officeOtherCode;

        // 検索
        await this.search();
    },
}
</script>
<style scoped>
</style>
