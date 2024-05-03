<template>
    <div>
        <div class="dialogBase">
            <div class="dialogBackground"></div>
            <div class="dialogFrame">
                <div class="dialogHeader">
                    <div class="dialogTitle">
                        商品検索
                    </div>
                    <button v-on:click="close">閉じる</button>
                </div>
                <div class="dialogBody">
                    <div class="searchArea">
                        <!-- 20220720_hash-shi_得意先・納入先の絞り込み追加_str------------ -->

                        <div v-if="searchHcode == 1 || searchHcode == 4">
                            <div class="tv">
                                <div class="title">得意先コード</div>
                                <div class="value"><input type="search" size="6" v-model="searchCustomerCode"></div>
                            </div>
                            <br />
                            <div class="tv">
                                <div class="title">納入先コード</div>
                                <div class="value"><input type="search" size="6" v-model="searchDeliveryCode"></div>
                                <!-- <div class="value"><label>Nullのみ<input type="checkbox" name="check" v-model="onlyNull"></label></div> -->
                            </div>
                            <br />
                        </div>
                        <div v-if="searchHcode != 1 && searchHcode != 4">
                            <div class="tv">
                                <div class="title">仕入先コード</div>
                                <div class="value"><input type="search" size="6" v-model="searchSupplierCode"></div>
                            </div>
                            <br />
                        </div>
                        <!-- 20220720_hash-shi_得意先・納入先の絞り込み追加_end------------ -->
                        <div class="tv">
                            <div class="title">商品コード</div>
                            <div class="value"><input type="search" size="6" v-model="searchItemCode"></div>
                        </div>
                        <br />
                        <div class="tv">
                            <div class="title">商品名</div>
                            <div class="value"><input type="search" size="40" placeholder="あいまい検索のキーワードを入力" v-model="searchItemName"></div>
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
                            <th class="w100 left">目付</th>
                            <th class="w100 left">入数</th>
                        </tr>
                        <tr v-for="result in results" :key="result.CODE">
                            <td class="w100"><div style="text-decoration: underline;cursor:pointer;" v-on:click="select(result)">{{ result.CODE }}</div></td>
                            <td>{{ result.NAME }}</td>
                            <td class="right">{{ result.WEIGHT }}</td>
                            <td class="right">{{ result.QTY_PER_CTN }}</td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // 20220720_hash-shi_得意先・納入先の絞り込み追加_str------------
    props: {
        searchHcode : String,
        searchCustomerCode : String,
        searchDeliveryCode : String,
        searchSupplierCode : String,
    },
    // 20220720_hash-shi_得意先・納入先の絞り込み追加_end------------
    data() {
        return {
            searchItemCode: "",
            searchItemName: "",
            onlyNull: false,
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
            await axios.post("/api/master/items", {
                'searchHcode'           : this.searchHcode,
                // 20220720_hash-shi_得意先・納入先の絞り込み追加_str------------
                'searchCustomerCode'    : this.searchCustomerCode,
                'searchDeliveryCode'    : this.searchDeliveryCode,
                'searchSupplierCode'    : this.searchSupplierCode,
                // 20220720_hash-shi_得意先・納入先の絞り込み追加_end------------
                'searchItemCode'        : this.searchItemCode,
                'searchItemName'        : this.searchItemName,
                'onlyNull'              : ((this.onlyNull) ? 1 : 0),
            })
            .then(response => {
                this.results = response.data;
            });
        },
        //---------------------------------------------------------------------
        // 選択
        //---------------------------------------------------------------------
        select: function(item){
            this.$emit("select", item);
        },
    },
    //-------------------------------------------------------------------------
    // 初期処理
    //-------------------------------------------------------------------------
    mounted: async function(){
        await this.search();
    },
}
</script>
<style scoped>
</style>
