<template>
    <div>
        <div class="dialogBase" style="overflow-y:none;">
            <div class="dialogBackground"></div>
            <div class="dialogFrame" style="height:325px;width:550px;overflow-y:auto !important;">
                <div class="dialogHeader">
                    <div class="dialogTitle">
                        新規登録
                    </div>
                    <button v-on:click="close">閉じる</button>
                </div>
                <div class="dialogBody">
                    新規登録する出荷指示の受注No.と取区と出荷日を入力してください。<br />
                    <br />
                    <div class="tv">
                        <div class="title">取区</div>
                        <div class="value">
                            <label><input type="radio" name="r2" value="1" v-model="HCODE">通常売上</label>
                            <label><input type="radio" name="r2" value="2" v-model="HCODE">通常仕入</label>
                            <label><input type="radio" name="r2" value="3" v-model="HCODE">通常移動</label>
                            <br />
                            <label><input type="radio" name="r2" value="4" v-model="HCODE">融通売上</label>
                            <label><input type="radio" name="r2" value="5" v-model="HCODE">融通仕入</label>
                            <label><input type="radio" name="r2" value="6" v-model="HCODE">融通移動</label>
                        </div>
                    </div>
                    <br />
                    <div class="tv">
                        <div class="title">受注No.</div>
                        <div class="value">
                            <input type="text" size="10" v-model="ORDER_NO">
                        </div>
                    </div>
                    <br />
                    <div class="tv">
                        <div class="title">出荷日</div>
                        <div class="value">
                            <input type="date" max="9999-12-31" v-model="SHIP_DATE">
                        </div>
                    </div>
                    <div style="width:100%;text-align:center;margin-top: 40px;">
                        <button style="width:150px;height:40px;" v-on:click="regist">新規登録</button>
                        <!-- <button style="width:150px;height:40px;" v-on:click="duplicate">複写</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import router from './../router'
import store from "./../store"
export default {
    props: {
        mode : String,
    },
    data() {
        return {
            ORDER_NO: "",
            HCODE: "1",
            SHIP_DATE: "",
            
            HCODESH:[],
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
        // 新規登録
        //---------------------------------------------------------------------
        regist: async function(){
            axios.post("/api/shipping/exis", { 
                "ORDER_NO"  : this.ORDER_NO,
                "HCODE"     : this.HCODE,
                "SHIP_DATE" : this.SHIP_DATE,
            }
            ).then(response => {
                if (response.data == true) {
                    if (confirm("指定された受注No.は既に存在します。表示しますか？")){
                        // 検索画面に戻る。
                        this.$emit("complete", this.ORDER_NO);
                    }
                } else {
                    // 検索画面に戻る。
                    this.$emit("complete", this.ORDER_NO, this.HCODE, this.SHIP_DATE, store.state.userCode);
                }
            });
        },
    },
    //-------------------------------------------------------------------------
    // 初期処理
    //-------------------------------------------------------------------------
    mounted: async function(){
        await axios.get("/api/today", {})
        .then(response => {
            this.SHIP_DATE = response.data;
        });
    },
}
</script>
<style scoped>

</style>