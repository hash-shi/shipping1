<template>
    <div>
        <div class="dialogBase" style="overflow-y:none;">
            <div class="dialogBackground"></div>
            <div class="dialogFrame" style="height:325px;width:550px;overflow-y:auto !important;">
                <div class="dialogHeader">
                    <div class="dialogTitle" v-if="mode=='new'">
                        新規登録
                    </div>
                    <div class="dialogTitle" v-if="mode=='copy'">
                        複写
                    </div>
                    <div class="dialogTitle" v-if="mode=='reset'">
                        再設定
                    </div>
                    <button v-on:click="close">閉じる</button>
                </div>
                <div class="dialogBody">
                    <div v-if="mode=='new'">
                        新規登録する出荷指示の受注No.と取区と出荷日を入力してください。
                    </div>
                    <div v-if="mode=='copy'">
                        複写先の受注No.と出荷日を入力してください。
                    </div>
                    <div v-if="mode=='reset'">
                        新しいの受注No.を入力してください。
                    </div>
                    <br />

                    <div class="tv" v-if="mode=='new'">
                        <div class="title">取区</div>
                        <div class="value" >
                            <label v-for="(hcodeH, index) of this.HCODESH">
                                <br v-if="index!=0 && (index % 3)==0" />
                                <input type="radio" name="r2" :value="hcodeH.CODE" v-model="HCODE">{{ hcodeH.NAME }}
                            </label>
                        </div>
                    </div>

                    <div class="tv">
                        <div class="title">受注No.</div>
                        <div class="value">
                            <input type="text" size="10" v-model="ORDER_NO">
                        </div>
                    </div>
                    <br />
                    <div class="tv" v-if="mode!='reset'">
                        <div class="title">出荷日</div>
                        <div class="value">
                            <input type="date" max="9999-12-31" v-model="SHIP_DATE">
                        </div>
                    </div>

                    <div style="width:100%;text-align:center;margin-top: 40px;">
                        <button v-if="mode=='new'"   style="width:150px;height:40px;" v-on:click="regist">新規登録</button>
                        <button v-if="mode=='copy'"  style="width:150px;height:40px;" v-on:click="copy">複写</button>
                        <button v-if="mode=='reset'" style="width:150px;height:40px;" v-on:click="reset">再設定</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import router from '../router'
import store from "../store"
export default {
    props: {
        mode: {
            type: String,
        },
        baseOrderNo: {
            type: String,
        },
        hCode: {
            type: Number,
        },
    },
    data() {
        return {
            ORDER_NO: "",
            HCODE: "",
            SHIP_DATE: "",
            HCODESH: [],
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
            // 存在確認
            await axios.post("/api/shipping/exis", { 
                "ORDER_NO"  : this.ORDER_NO,
                "SHIP_DATE" : this.SHIP_DATE,
            }).then(response => {
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

        //---------------------------------------------------------------------
        // 複写
        //---------------------------------------------------------------------
        copy: async function(){
            // 存在確認
            await axios.post("/api/shipping/exis", { 
                "ORDER_NO" : this.ORDER_NO,
                "SHIP_DATE" : this.SHIP_DATE,
            }).then(response => {
                if (response.data == true) {
                    alert("指定された受注No.は既に存在します。");
                } else {
                    // 複写完了後は編集画面へ遷移する
                    this.$emit("complete", this.ORDER_NO, this.hCode, this.SHIP_DATE, store.state.userCode, this.baseOrderNo);
                }
            });
        },
        //---------------------------------------------------------------------
        // 再設定
        //---------------------------------------------------------------------
        reset: async function(){
            // 存在確認
            await axios.post("/api/shipping/exis", { 
                "ORDER_NO" : this.ORDER_NO,
                "SHIP_DATE" : this.SHIP_DATE,
            }).then(response => {
                if (response.data == true) {
                    alert("指定された受注No.は既に存在します。");
                } else {
                    // 複写完了後は編集画面へ遷移する
                    this.$emit("complete", this.ORDER_NO);
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

        await axios.post("/api/master/hcodesH", {})
        .then(response => { 
          this.HCODESH = response.data; 
        });

        if (this.hCode != null && this.hCode != "") { this.HCODE = this.hCode; }
    },
}
</script>
<style scoped>

</style>