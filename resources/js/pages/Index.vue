<template>
  <div>
<!--
    <div class="tv">
      <div class="title">倉庫</div>
      <div class="value">
        <input type="text" size="6" list="warehouses" v-model="searchWarehouses" v-on:keyup="warehouseC2N">
        <datalist id="warehouses">
          <option v-for="warehouses in mstWarehouses" :key="warehouses.CODE">{{ warehouses.CODE }}</option>
        </datalist>
        <font-awesome-icon icon="search" v-on:click="opneWarehouseSearchDialog('warehouse')" style="cursor:pointer;" />
       <input type="text" disabled v-model="warehouseName"> 
      </div>
    </div>
    <br />
-->
    <div class="tv">
      <div class="title">出荷日</div>
      <div class="value">
        <input type="date" v-model="searchShipDateFrom" max="9999-12-31" v-on:change="changeShipDate">
        ～
        <input type="date" v-model="searchShipDateTo"   max="9999-12-31" v-on:change="changeShipDate">
      </div>
    </div>
    <br />
    <div class="tv">
      <div class="title">進捗</div>
      <div class="value">
        <div v-for="searchStatusItem in searchStatusList" :key="searchStatusItem.status" style="display:inline-block;">
          <label><input type="checkbox" :value="searchStatusItem.status" v-model="searchStatus">{{ searchStatusItem.label }}({{ searchStatusItem.count }})</label>
        </div>
        ※()内の数値は件数
      </div>
    </div>
    <br />
    <div class="tv">
      <div class="title">受注NO</div>
      <div class="value" >
      <input v-model="searchOrderNos" list="orderNo" class="w100">
        <datalist id="orderNo">
          <option v-for="searchOrderNos in orderNoList" :key="searchOrderNos.ORDER_NO" :value="searchOrderNos.ORDER_NO">
            {{ searchOrderNos.ORDER_NO }}
          </option>
          </datalist>
      </div>
    </div>
    ※新規の場合は入力せずに新規登録ボタンを押してください。
    <br />
    <div class="tv">
      <div class="title">運送便</div>
      <div class="value">
        <select v-model="searchFlights" class="w250">
          <option value="">選択なし</option>
          <option v-for="searchFlights in searchFlightsList" :key="searchFlights.DRIVER_CODE+':'+searchFlights.FLIGHTS" :value="searchFlights.DRIVER_CODE+':'+searchFlights.FLIGHTS">
            {{ searchFlights.DRIVER_CODE }} : {{ searchFlights.DRIVER_NAME }} : {{ searchFlights.FLIGHTS }}
          </option>
        </select>
      </div>
    </div>

    <br />
    
    <button type="button" title="指定した条件で指示データを検索します。" v-on:click="search">検索</button>
    <button type="button" title="新規登録画面へ" v-on:click="regist">新規登録</button>
    
    <pre></pre>

    {{ ((pageNow - 1) * pageDataCount) + (pageResults.length>0?1:0) }}件 から {{ ((pageNow - 1) * pageDataCount) + pageResults.length }}件 までを表示（全 {{ sihRecords.length }} 件）
    <div v-if="isNotSureShipping" style="display:inline-block;color:#ff0000;"> ※運送便未確定のデータが{{ sureShippingCount }}件あります。</div>
    <br>
    <button type="button" style="vertical-align: top;height: 52px;width: 85.34px;font-size: 20px;margin-bottom: 10px;" v-on:click="search">最新</button>
    <button type="button" style="vertical-align: top;height: 52px;width: 85.34px;font-size: 20px;margin-bottom: 10px;" v-on:click="update">更新</button>
    <ul class="paging">
      <li v-if="pageNow!=1 && pageCount>0" v-on:click="pageNow=pageNow-1">&lt;</li>
      <li v-if="isShowPageFirst" :class="{'selected':1==pageNow}" v-on:click="pageNow=1">1</li>
      <li v-if="isShowPageFirst && isShowPageFirstDot">..</li>
      <li v-for="page of this.pagingCount" :key="page" :class="{'selected':page==pageNow}" v-on:click="pageNow=page">{{ page }}</li>
      <li v-if="isShowPageLast && isShowPageLastDot">..</li>
      <li v-if="isShowPageLast" :class="{'selected':pageCount==pageNow}" v-on:click="pageNow=pageCount">{{ pageCount }}</li>
      <li v-if="pageNow!=pageCount && pageCount>0" v-on:click="pageNow=pageNow+1">&gt;</li>
    </ul>

    <table class="searchResult">
      <tr>
        <th class="w110">
          受注No
          <div class="sort">
            <div class="down" v-bind:class="{sortSelect:sortKey=='ORDER_NO'&&sortOrder=='desc'}"><font-awesome-icon icon="sort-amount-down" v-on:click="setSort('ORDER_NO', 'desc')" /></div>
            <div class="up"   v-bind:class="{sortSelect:sortKey=='ORDER_NO'&&sortOrder=='asc' }"><font-awesome-icon icon="sort-amount-up-alt" v-on:click="setSort('ORDER_NO', 'asc')" /></div>
          </div>
        </th>
        <th class="w100">
          取区
          <div class="sort">
            <div class="down" v-bind:class="{sortSelect:sortKey=='HCODE'&&sortOrder=='desc'}"><font-awesome-icon icon="sort-amount-down" v-on:click="setSort('HCODE', 'desc')" /></div>
            <div class="up"   v-bind:class="{sortSelect:sortKey=='HCODE'&&sortOrder=='asc' }"><font-awesome-icon icon="sort-amount-up-alt" v-on:click="setSort('HCODE', 'asc')" /></div>
          </div>
        </th>
        <th class="w100">
          出荷日
          <div class="sort">
            <div class="down" v-bind:class="{sortSelect:sortKey=='SHIP_DATE'&&sortOrder=='desc'}"><font-awesome-icon icon="sort-amount-down" v-on:click="setSort('SHIP_DATE', 'desc')" /></div>
            <div class="up"   v-bind:class="{sortSelect:sortKey=='SHIP_DATE'&&sortOrder=='asc' }"><font-awesome-icon icon="sort-amount-up-alt" v-on:click="setSort('SHIP_DATE', 'asc')" /></div>
          </div>
        </th>
        <th class="w100">
          納品日
          <div class="sort">
            <div class="down" v-bind:class="{sortSelect:sortKey=='DELIVERY_DATE'&&sortOrder=='desc'}"><font-awesome-icon icon="sort-amount-down" v-on:click="setSort('DELIVERY_DATE', 'desc')" /></div>
            <div class="up"   v-bind:class="{sortSelect:sortKey=='DELIVERY_DATE'&&sortOrder=='asc' }"><font-awesome-icon icon="sort-amount-up-alt" v-on:click="setSort('DELIVERY_DATE', 'asc')" /></div>
          </div>
        </th>
        <th>
          得意先
          <div class="sort">
            <div class="down" v-bind:class="{sortSelect:sortKey=='CUSTOMER_CODE'&&sortOrder=='desc'}"><font-awesome-icon icon="sort-amount-down" v-on:click="setSort('CUSTOMER_CODE', 'desc')" /></div>
            <div class="up"   v-bind:class="{sortSelect:sortKey=='CUSTOMER_CODE'&&sortOrder=='asc' }"><font-awesome-icon icon="sort-amount-up-alt" v-on:click="setSort('CUSTOMER_CODE', 'asc')" /></div>
          </div>
        </th>
        <th>
          納入先
          <div class="sort">
            <div class="down" v-bind:class="{sortSelect:sortKey=='DELIVERY_CODE'&&sortOrder=='desc'}"><font-awesome-icon icon="sort-amount-down" v-on:click="setSort('DELIVERY_CODE', 'desc')" /></div>
            <div class="up"   v-bind:class="{sortSelect:sortKey=='DELIVERY_CODE'&&sortOrder=='asc' }"><font-awesome-icon icon="sort-amount-up-alt" v-on:click="setSort('DELIVERY_CODE', 'asc')" /></div>
          </div>
        </th>
        <th>
          運転手
          <div class="sort">
            <div class="down" v-bind:class="{sortSelect:sortKey=='DRIVER_CODE'&&sortOrder=='desc'}"><font-awesome-icon icon="sort-amount-down" v-on:click="setSort('DRIVER_CODE', 'desc')" /></div>
            <div class="up"   v-bind:class="{sortSelect:sortKey=='DRIVER_CODE'&&sortOrder=='asc' }"><font-awesome-icon icon="sort-amount-up-alt" v-on:click="setSort('DRIVER_CODE', 'asc')" /></div>
          </div>
        </th>
        <th>
          便区分
          <div class="sort">
            <div class="down" v-bind:class="{sortSelect:sortKey=='FLIGHTS'&&sortOrder=='desc'}"><font-awesome-icon icon="sort-amount-down" v-on:click="setSort('FLIGHTS', 'desc')" /></div>
            <div class="up"   v-bind:class="{sortSelect:sortKey=='FLIGHTS'&&sortOrder=='asc' }"><font-awesome-icon icon="sort-amount-up-alt" v-on:click="setSort('FLIGHTS', 'asc')" /></div>
          </div>
        </th>
        <th>
          仕入先
          <div class="sort">
            <div class="down" v-bind:class="{sortSelect:sortKey=='SUPPLIER_CODE'&&sortOrder=='desc'}"><font-awesome-icon icon="sort-amount-down" v-on:click="setSort('SUPPLIER_CODE', 'desc')" /></div>
            <div class="up"   v-bind:class="{sortSelect:sortKey=='SUPPLIER_CODE'&&sortOrder=='asc' }"><font-awesome-icon icon="sort-amount-up-alt" v-on:click="setSort('SUPPLIER_CODE', 'asc')" /></div>
          </div>
        </th>
        <th>
          倉庫
          <div class="sort">
            <div class="down" v-bind:class="{sortSelect:sortKey=='WAREHOUSE_CODE'&&sortOrder=='desc'}"><font-awesome-icon icon="sort-amount-down" v-on:click="setSort('WAREHOUSE_CODE', 'desc')" /></div>
            <div class="up"   v-bind:class="{sortSelect:sortKey=='WAREHOUSE_CODE'&&sortOrder=='asc' }"><font-awesome-icon icon="sort-amount-up-alt" v-on:click="setSort('WAREHOUSE_CODE', 'asc')" /></div>
          </div>
        </th>
        <th class="w40">S</th>
        <th class="w40">付</th>
        <th class="w90">入力確定</th>
        <th class="w90">出荷実績日</th>
      </tr>

      <tr v-for="(sihRecord, index) of pageResults" :key="index" v-bind:class="{ 'hasKARI': hasKARI(sihRecord.KARI) }">
        <td class="center" style="height: 46px;text-decoration: underline;color: #0000ff;">
          <div title="編集画面へ" style="cursor:pointer;" v-on:click="detail(sihRecord.ORDER_NO)">{{ sihRecord.ORDER_NO }}</div>
        </td>
        <td class="center">
          {{ sihRecord.HNAME }}
        </td>
        <td class="center">
          {{ toDate(sihRecord.SHIP_DATE) }}
        </td>
        <td class="center">
          {{ toDate(sihRecord.DELIVERY_DATE) }}
        </td>
        <td>
          {{ sihRecord.CUSTOMER_CODE }}<br />{{ sihRecord.CUSTOMER_NAME }}
        </td>
        <td>
          {{ sihRecord.DELIVERY_CODE }}<br />{{ sihRecord.DELIVERY_NAME }}
        </td>
        <td v-bind:class="{nothing: sihRecord.DRIVER_CODE=='' || sihRecord.DRIVER_CODE==null}">
          <!-- v-on:blur="driverBlur(index);" -->
          <input type="text" size="4" v-model="sihRecord.DRIVER_CODE" v-on:blur="setDriverIndex(sihRecord.ORDER_NO);driverBlur();">
          <font-awesome-icon icon="times" v-on:click="sihRecord.DRIVER_CODE='';setDriverIndex(sihRecord.ORDER_NO);driverBlur();" style="cursor:pointer;" />
          <font-awesome-icon icon="search" style="cursor:pointer;" v-on:click="setDriverIndex(sihRecord.ORDER_NO);opneDriverSearchDialog()" />
          <br />
          {{ sihRecord.DRIVER_NAME }}
        </td>
        <td v-bind:class="{nothing: sihRecord.FLIGHTS=='' || sihRecord.FLIGHTS==null}">
          <input type="text" size="1" v-model="sihRecord.FLIGHTS">
          <!-- {{ sihRecord.FLIGHTS }} -->
        </td>
        <td>
          {{ sihRecord.SUPPLIER_CODE }}<br />{{ sihRecord.SUPPLIER_NAME }}
        </td>
        <td>
          {{ sihRecord.WAREHOUSE_CODE }}<br />{{ sihRecord.WAREHOUSE_NAME }}
        </td>
        <td class="center" v-bind:class="{complete: sihRecord.STATUS=='2'}">
          {{ toStatus(sihRecord.STATUS) }}
        </td>
        <td class="center" v-bind:class="{hasTag: sihRecord.TAG_NOTE!=''&&sihRecord.TAG_NOTE!=null}">
          <div style="position:relative;cursor:help;" v-if="sihRecord.TAG_NOTE!=''&&sihRecord.TAG_NOTE!=null" v-on:mouseover="showTagNote" v-on:mouseout="hideTagNote">
            <div class="fukidashiTagNote">{{ sihRecord.TAG_NOTE }}</div>
            <font-awesome-icon icon="comment" />
          </div>
        </td>
        <td class="center">
          <div style="position:relative;cursor:pointer;" v-if="sihRecord.CONFIRM_DATE!=''&&sihRecord.CONFIRM_DATE!=null" v-on:mouseover="showConfirmDate" v-on:mouseout="hideConfirmDate">
          {{ toMonthDay(sihRecord.CONFIRM_DATE)}} 
            <div class="datesNote"> 確定時刻：{{ toDateTime(sihRecord.CONFIRM_DATE) }}　<br>
                                    受発注者：{{ sihRecord.NAME }}
            </div>
          </div>
        </td>
         <td v-bind:class="{difference: sihRecord.QTY != sihRecord.QTY_RESULT &&( sihRecord.QTY_RESULT !='' && sihRecord.QTY_RESULT !=null)}">
           <div style="position:relative;cursor:pointer;" v-if="sihRecord.SHIP_DATE_RESULT!=''&&sihRecord.SHIP_DATE_RESULT!=null" v-on:mouseover="showConfirmDate" v-on:mouseout="hideConfirmDate">
              {{ toDateTime(sihRecord.SHIP_DATE_RESULT) }}
            <div class="datesNote"> QTY：{{ sihRecord.QTY }}　<br>
                                    QTY_RESULT：{{ sihRecord.QTY_RESULT }}<br>
                                    modified：{{ toDateTime(sihRecord.modified) }}<br>
            </div>
          </div>
         </td>
      </tr>
    </table>

    <InputShippingDialog    v-if="showInputShippingDialog" :mode="'new'" :hCode="1" @close="closeInputShippingDialog" @complete="detail" ></InputShippingDialog>
    <WarehouseSearchDialog  v-if="showWarehouseSearchDialog" @close="closeWarehouseSearchDialog" @select="selectWarehouseDialog" ></WarehouseSearchDialog>
    <!-- 運転手 -->
    <DriverSearchDialog     v-if="showDriverSearchDialog"  :officeCode="this.officeCode" :hCode="this.hCode" @close="closeDriverSearchDialog"    @select="selectDriverDialog"    ></DriverSearchDialog>
  </div>
</template>
<script>
import router from './../router'
import store from "./../store"

export default {
  computed: { },
  data() {
      return {

        // ダイアログ表示フラグ
        showInputShippingDialog: false,
        showWarehouseSearchDialog: false,               // 倉庫検索ダイアログの表示・非表示管理フラグ
        showDriverSearchDialog: false,                  // 運転手検索ダイアログの表示・非表示管理フラグ
        showDriverSearchDialogIndex: -1,

        // 検索条件
        searchWarehouses:"",
        searchShipDateFrom: "",
        searchShipDateTo: "",
        searchStatus: [],
        searchStatusList: [],
        searchOrderNos: "",
        searchFlights: "",
        searchFlightsList: [],

        // 検索結果とソート
        sihRecords: [],
        sortKey: "ORDER_NO",
        sortOrder:"desc",
        isNotSureShipping: false,

        //ドロップダウン元ネタ
        mstWarehouses: [],
        mstDrivers:[],
        orderNoList: [],

        //倉庫名格納
        warehouseName:"",

        //運送未確定数
        sureShippingCount:0,

        //画面更新間隔
        screenRedrawInterval:"",

        // 営業所コード
        officeCode:"",

        //
        hCode:"",

        //タイマー
        intervalSeach:null,

        // ページング
        pageCount: 0,
        pageNow: 1,
        pageDataCount: 50,
        isShowPageFirst: false, isShowPageFirstDot: false,
        isShowPageLast: false,  isShowPageLastDot : false,          
      }
  },
  methods: {

    //-------------------------------------------------------------------------
    // ダイアログのオープンクローズ
    //-------------------------------------------------------------------------
    opneInputShippingDialog:function ()    { this.showInputShippingDialog = true; },
    closeInputShippingDialog:function ()   { this.showInputShippingDialog = false; },
    opneWarehouseSearchDialog:function (target) { this.showWarehouseSearchDialogTarget = target; this.showWarehouseSearchDialog = true; },
    closeWarehouseSearchDialog:function ()      { this.showWarehouseSearchDialog = false; },
    opneDriverSearchDialog:function ()     { this.showDriverSearchDialog = true; },
    closeDriverSearchDialog:function ()         { this.showDriverSearchDialog = false; },
    //-------------------------------------------------------------------------
    // 検索処理
    //-------------------------------------------------------------------------
    search: async function(){
      this.isNotSureShipping = false;
      await axios.post("/api/shippingSearch", {
        'searchWarehouses'    : this.searchWarehouses,
        'searchShipDateFrom'  : this.searchShipDateFrom,
        'searchShipDateTo'    : this.searchShipDateTo,
        'searchStatus'        : this.searchStatus,
        'searchOrderNos'      : this.searchOrderNos,
        'searchFlights'       : this.searchFlights,
      })
      .then(response => {

        // 検索結果とページング情報の格納
        this.sihRecords = response.data.sihRecords;
        this.pageNow = 1;
        this.pageCount = Math.ceil(this.sihRecords.length / this.pageDataCount);

        // ページングエリアに「※運送便未確定のデータがあります。」を表示するか否かの判断
        this.sureShippingCount=0;
        for (var count = 0 ; count < this.sihRecords.length ; count++){
          if (this.sihRecords[count]["DRIVER_CODE"] == null || this.sihRecords[count]["FLIGHTS"] == null){
            this.sureShippingCount+=1;
          }
        }
        if(this.sureShippingCount > 0){
           this.isNotSureShipping = true;
        }
      })
    },
    setSort: function(sortKey, sortOrder){
      this.sortKey = sortKey;
      this.sortOrder = sortOrder;
    },
    update: async function(){

      if (confirm("更新します。よろしいですか？")) {
        await axios.post("/api/shipping/update", {
          'sihRecords' : this.sihRecords,
        })
        .then(response => {
          alert("更新しました。");
          // 再検索
          this.search();
        });
      }

    },
    //-------------------------------------------------------------------------
    // 新規登録
    //-------------------------------------------------------------------------
    regist: function(){
      this.$store.commit("setSearch" , {
          "searchWarehouses"   : this.searchWarehouses
          ,"searchShipDateFrom" : this.searchShipDateFrom
          ,"searchShipDateTo"   : this.searchShipDateTo
          ,"searchStatus"       : this.searchStatus
          ,"searchOrderNos"     : this.searchOrderNos
          ,"searchFlights"      : this.searchFlights
          });
      this.opneInputShippingDialog();
    },
    //-------------------------------------------------------------------------
    // 詳細へ遷移
    //-------------------------------------------------------------------------
    detail: function(orderNo, hCode, shipDate, userCode){
      this.$store.commit("setSearch" , {
         "searchWarehouses"   : this.searchWarehouses
        ,"searchShipDateFrom" : this.searchShipDateFrom
        ,"searchShipDateTo"   : this.searchShipDateTo
        ,"searchStatus"       : this.searchStatus
        ,"searchOrderNos"     : this.searchOrderNos
        ,"searchFlights"      : this.searchFlights
      });

      if (hCode !== undefined && shipDate !== undefined && userCode !== undefined) {
        // 新規
        router.push({ path: "/detail/" + orderNo + "_" + hCode + "_" + shipDate + "_" + userCode });
      } else {
        // 修正
        router.push({ path: "/detail/" + orderNo });
      }
    },
    //-------------------------------------------------------------------------
    // 出荷日の変更イベント
    //-------------------------------------------------------------------------
    changeShipDate: async function(){
      await axios.post("/api/shippingSearchDateInfo", {
        "shipDateFrom"  : this.searchShipDateFrom,
        "shipDateTo"    : this.searchShipDateTo,
      })
      .then(response => {
        
        // 進捗のカッコ内の件数
        this.searchStatusList = response.data.searchStatusList;

        // 運送便
        this.searchFlightsList = response.data.flightsList;
        this.searchFlights = "";

        //受付NO
        this.orderNoList = response.data.orderNoList;
        this.searchOrderNos = "";
      });
    },
    //-------------------------------------------------------------------------
    // 付箋の表示
    //-------------------------------------------------------------------------
    showTagNote: function(event){
      $(event.currentTarget).find("div.fukidashiTagNote").show();
    },
    hideTagNote: function(event){
      $(event.currentTarget).find("div.fukidashiTagNote").hide();
    },
    //-------------------------------------------------------------------------
    // コンバート
    //-------------------------------------------------------------------------
    // 日付フォーマット
    toDate: function(dateObj){
      if (dateObj == null){ return ""; }
      var dateValue = dateObj.substr(2, 8).split("-").join("/");
      return dateValue;
    },
    // 日付フォーマット(月日)
    toMonthDay: function(dateObj){
      if (dateObj == null){ return ""; }
      var dateValue = dateObj.substr(5, 6).split("-").join("/");
      return dateValue;
    },
    // 日時フォーマット
    toDateTime: function(dateObj){
      if (dateObj == null){ return ""; }
      var dateValue = dateObj.substr(5,11).split("-").join("/");
      return dateValue;
    },
    // ステータス
    toStatus: function(status){
      if (status == "0"){ return ""; }
      if (status == "1"){ return "確"; }
      if (status == "2"){ return "完"; }
      return "";
    },
    // 取区
    toHCode: function(status){
      if (status == "1"){ return "通常売上"; }
      if (status == "2"){ return "通常仕入"; }
      if (status == "3"){ return "通常移動"; }
      if (status == "4"){ return "融通売上"; }
      if (status == "5"){ return "融通仕入"; }
      if (status == "6"){ return "融通移動"; }
      return "";
    },

    //-------------------------------------------------------------------------
    // 入力確定、出荷実績日の詳細表示
    //-------------------------------------------------------------------------
    showConfirmDate: function(event){
      $(event.currentTarget).find("div.datesNote").show();
    },
    hideConfirmDate: function(event){
      $(event.currentTarget).find("div.datesNote").hide();
    },

    //倉庫名称の検索
    warehouseC2N: function (){
      var that = this;
      var targetWarehouses = this.mstWarehouses.filter(function(row){ return row.CODE==that.searchWarehouses?true:false; });
      if (targetWarehouses.length > 0){
        this.warehouseName = targetWarehouses[0].NAME;
      } else {
        this.warehouseName = "";
      }      
    },

    // 倉庫ダイアログで選択した得意先を格納してダイアログを閉じる
    selectWarehouseDialog: function(warehouseCode){
      if (this.showWarehouseSearchDialogTarget == "warehouse"){
        this.searchWarehouses = warehouseCode;
        this.closeWarehouseSearchDialog();
        this.warehouseC2N();
      }
      if (this.showWarehouseSearchDialogTarget == "delivery"){
        this.searchWarehouses = warehouseCode;
        this.closeWarehouseSearchDialog();
        this.deliveryC2N();
      }
    }, 

    // 20220812_hash-shi_タイマー再描画の停止_str------------
    // //一定時間毎に画面更新
    // screenRedraw(){
    //   this.intervalSeach=setInterval(function () {this.search();this.changeShipDate()}.bind(this), this.screenRedrawInterval*1000);  
    // }
    // 20220812_hash-shi_タイマー再描画の停止_end------------

    hasKARI: function(KARI) {
      return (KARI == 1);
    },

    setDriverIndex: function(orderNo){

      // 配列の行番号を取得する。
      var index = this.sihRecords.findIndex(({ORDER_NO}) => ORDER_NO === orderNo);
      if (index == -1){ return; }

      this.showDriverSearchDialogIndex = index;

      this.hCode = this.sihRecords[this.showDriverSearchDialogIndex].HCODE
    },

    // 運転手ダイアログで選択した得意先を格納してダイアログを閉じる
    selectDriverDialog: function(driverCode){
      // 格納
      this.sihRecords[this.showDriverSearchDialogIndex].DRIVER_CODE = driverCode;
      this.closeDriverSearchDialog();
      this.driverBlur();
    },
    driverBlur: function(){

      var driverCode = this.sihRecords[this.showDriverSearchDialogIndex].DRIVER_CODE

      var targetDrivers = this.mstDrivers.filter(function(row){ return row.CODE==driverCode?true:false; });
      if (targetDrivers.length > 0){
        this.sihRecords[this.showDriverSearchDialogIndex].DRIVER_NAME  = targetDrivers[0].NAME;
        this.sihRecords[this.showDriverSearchDialogIndex].TRUCKER_CODE = targetDrivers[0].TRUCKER_CODE;
        this.sihRecords[this.showDriverSearchDialogIndex].TRUCKER_NAME = targetDrivers[0].TRUCKER_NAME;
      } else {
        this.sihRecords[this.showDriverSearchDialogIndex].DRIVER_NAME  = "";
        this.sihRecords[this.showDriverSearchDialogIndex].TRUCKER_CODE = "";
        this.sihRecords[this.showDriverSearchDialogIndex].TRUCKER_NAME = "";
      }
    },
  },
  mounted: async function(){

    // 簡易ログインチェック
    if (store.state.userCode==null){ router.push({ path: "/sso" }); }

    await axios.get("/api/shippingSearchInit", {})
    .then(response => {
      this.searchShipDateFrom   = response.data.searchShipDateFrom;
      this.searchShipDateTo     = response.data.searchShipDateTo;
      this.searchStatus         = response.data.searchStatus;
      this.searchStatusList     = response.data.searchStatusList;
      this.searchOrderNos       = response.data.searchOrderNos;
      this.searchFlights        = response.data.searchFlights;
      this.searchFlightsList    = response.data.searchFlightsList;
      this.screenRedrawInterval = response.data.screenRedrawInterval;
      this.officeCode           = response.data.officeCode
    });

    // 戻りの場合はVuexから前回の検索結果を取得する
    var isBack = this.$route.query.isBack;
    if (isBack == "true"){
      if (store.state.searchWarehouses != null && store.state.searchWarehouses != undefined){ this.searchWarehouses = store.state.searchWarehouses; }
      if (store.state.searchShipDateFrom != null && store.state.searchShipDateFrom != undefined){ this.searchShipDateFrom = store.state.searchShipDateFrom; }
      if (store.state.searchShipDateTo != null && store.state.searchShipDateTo != undefined){ this.searchShipDateTo = store.state.searchShipDateTo; }
      if (store.state.searchStatus != null && store.state.searchStatus != undefined)    { this.searchStatus = store.state.searchStatus;     }
      if (store.state.searchOrderNos != null && store.state.searchOrderNos != undefined){ this.searchOrderNos = store.state.searchOrderNos; }
    }

    // 日付ドライバー検索
    await this.changeShipDate();

    // Warehouses
    await axios.post("/api/master/warehouses", {})
    .then(response => { 
      this.mstWarehouses = response.data; 
      this.warehouseC2N();
    })

    // Drivers
    await axios.post("/api/master/drivers", {})
    .then(response => { 
      this.mstDrivers = response.data; 
    })

    if (isBack == "true"){
      if (store.state.searchFlights != null && store.state.searchFlights != undefined)  { this.searchFlights = store.state.searchFlights;   }
    }
    // 初回検索
    await this.search();
    // 20220812_hash-shi_タイマー再描画の停止_str------------
    // this.screenRedraw();
    // 20220812_hash-shi_タイマー再描画の停止_end------------

    //画面名称の設定
    document.title="出荷指示一覧"; 

    //画面の背景色の変更
    document.body.style.background  = "#ffffff";
    
  },
    computed: {
        pageResults(){
            var startIndex      = (this.pageNow - 1) *  this.pageDataCount;
            var endIndex        = startIndex + this.pageDataCount;
            var that            = this;
            return this.sihRecords.sort(function(a, b){
              if (that.sortOrder == "asc"){
                if (a[that.sortKey] <  b[that.sortKey]) return -1;
                if (a[that.sortKey] >= b[that.sortKey]) return 1;
              }
              if (that.sortOrder == "desc"){
                if (a[that.sortKey] <  b[that.sortKey]) return 1;
                if (a[that.sortKey] >= b[that.sortKey]) return -1;
              }
            }).slice(startIndex,endIndex);
        },
        pagingCount(){
            // 全ページが20ページ以内の場合はページングの間引きはしない
            this.isShowPageFirst = false;
            this.isShowPageLast  = false;
            if (this.pageCount <= 10){
                return this.pageCount;
            }

            // ページングの間引き対象
            var result = [];

            // 自ページよりも前のページをページングに格納
            var tempPrevMin = this.pageNow-5<1?1:this.pageNow-5;
            for (var count = tempPrevMin ; count < this.pageNow ; count++){ result.push(count); }
            
            // 自ページをページングに格納
            result.push(this.pageNow);
            
            // 自ページよりも後のページをページングに格納
            var tempPrevCount = result.length;
            var tempNextMax   = this.pageNow + 1 + 5 + (5 - tempPrevCount);
            if (tempNextMax >= this.pageCount){ tempNextMax = this.pageCount; }
            for (var count = this.pageNow + 1 ; count <= tempNextMax; count++){ result.push(count); }

            // それでもページを満たしていない場合は前ページよりも前に追加
            if (result.length < 10){
                tempPrevMin-=1;
                for (; result.length < 10 ; tempPrevMin--)
                result.unshift(tempPrevMin);
            }

            // 生成したページング一覧にトップが含まれていない場合はトップへのページングを表示するフラグを立てる
            // ただし、生成したページングの先頭の値が1と連続する関係(つまり2)の場合は、...による接続は表示しない
            if (result.indexOf(1) == -1){
                this.isShowPageFirst = true;
                this.isShowPageFirstDot = true;
                if (result[0] - 1 == 1){ this.isShowPageFirstDot = false; }
            }

            // 生成したページング一覧にラストが含まれていない場合はラストへのページングを表示するフラグを立てる
            // ただし、生成したページングの終端の値がラストと連続する関係(つまりラスト-1)の場合は、...による接続は表示しない
            if (result.indexOf(this.pageCount) == -1){
                this.isShowPageLast = true;
                this.isShowPageLastDot = true;
                if (result[result.length - 1] + 1 == this.pageCount){ this.isShowPageLastDot = false; }
            }
            return result;
        }
    },
};
</script>
<style scoped>
  td.nothing {
    background-color: yellow;
  }
  td.complete {
    background-color: gray;
    color: #ffffff;
  }
  td.hasTag {
    background-color: yellow;
  }
  td.difference  {
    background-color: yellow;
  }
  div.fukidashiTagNote {
    position: absolute;
    width: 300px;
    bottom: 28px;
    right: 10px;
    text-align: left;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 3px;
    padding: 5px;
    box-sizing: border-box;
    font-size: 14px;
    min-height: 28px;
    display: none;
  }
    div.datesNote {
    position: absolute;
    width: 200px;
    bottom: 28px;
    right: 10px;
    text-align: left;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 3px;
    padding: 5px;
    box-sizing: border-box;
    font-size: 14px;
    min-height: 28px;
    display: none;
  }
  div.sort {
    display: inline-block;
    position: relative;
  }
  div.sort > div.up {
    display: inline-block;
    cursor: pointer;
  }
  div.sort > div.down {
    display: inline-block;
    cursor: pointer;
  }
  div.sortSelect {
    color: #ff0000;
  }
  .hasKARI {
    background-color : rgb(207, 255, 207);
  }
</style>