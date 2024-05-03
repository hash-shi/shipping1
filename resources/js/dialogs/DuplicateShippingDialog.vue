<template>
    <div>
        <div class="dialogBase" style="overflow-y:none;">
            <div class="dialogBackground"></div>
            <div class="dialogFrame" style="height:325px;width:550px;overflow-y:auto !important;">
                <div class="dialogHeader">
                    <div class="dialogTitle" v-if="mode=='copy'">
                        複写
                    </div>
                    <button v-on:click="close">閉じる</button>
                </div>
                <div class="dialogBody">
                    複写先の受注No.と出荷日を入力してください。<br />
                    <br />
                    <!-- 
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
                     -->
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
                        <button style="width:150px;height:40px;" v-on:click="copy">複写</button>
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
        mode: String,
        baseOrderNo: String,
        hCode: String,
    },
    data() {
        return {
            ORDER_NO: "",
            HCODE: "",
            SHIP_DATE: "",
        }
    },
    methods: {
        //---------------------------------------------------------------------
        // ダイアログのクローズ
        //---------------------------------------------------------------------
        close: function(){
            this.$emit("close");
        },
        // 複写
        copy: async function(){
            // 存在確認
            await axios.post("/api/shipping/exis", { "ORDER_NO" : this.ORDER_NO }
            ).then(response => {
                if (response.data == true) {
                    alert("指定された受注No.は既に存在します。");
                } else {
                    // 複写完了後は編集画面へ遷移する
                    this.$emit("complete", this.ORDER_NO, this.hCode, this.SHIP_DATE, store.state.userCode, this.baseOrderNo);
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