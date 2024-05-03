<template>

	<div v-if="sihRecord!=null">
		<input type="button" value="メイン画面" v-on:click="back">

		<input v-bind:disabled="(isNew&&!(sihRecord.STATUS==1||sihRecord.STATUS==2))" type="button" value="複写" v-on:click="copy">
		<input v-bind:disabled="!(sihRecord.STATUS==0||sihRecord.STATUS==0||sihRecord.STATUS==99)" type="button" value="一時保存" v-on:click="susp">
		<input v-bind:disabled="!(sihRecord.STATUS==0||sihRecord.STATUS==1||sihRecord.STATUS==99)" type="button" value="入力確定" v-on:click="conf">
		<!-- <input v-bind:disabled="(isNew&&!(sihRecord.STATUS==0||sihRecord.STATUS==1))" type="button" value="削除" v-on:click="del"> -->
		<input v-bind:disabled="(isNew&&!(sihRecord.STATUS==1||sihRecord.STATUS==1))" type="button" value="削除" v-on:click="del">
		<input v-bind:disabled="(isNew&&!(sihRecord.STATUS==1||sihRecord.STATUS==2))" type="button" value="指示書印刷" v-on:click="instructionPrint">
		<input v-bind:disabled="(isNew&&!(sihRecord.STATUS==1||sihRecord.STATUS==2))" type="button" value="伝票印刷" v-on:click="slipPrint">

		<pre></pre>

		<div class="tv">
			<div class="title">
				受付日時
			</div>
			<div class="value">
				<input type="date" max="9999-12-31" v-model="sihRecord.ORDER_DATE">
				<input type="time" v-model="sihRecord.ORDER_TIME" step="3600">
		 </div>
		</div>
		<div class="tv">
			<div class="title">
				受注者
			</div>
			<div class="value">
				<select v-model="sihRecord.ORDER_USER">
					<option v-for="user in mstUsers" :key="user.CODE" :value="user.CODE">{{ user.CODE }}:{{ user.NAME }}</option>
				</select>
			</div>
		</div>

		<div class="tv">
			<div class="title">
				入力確定
			</div>
			<div class="value">
				<div v-if="sihRecord.CONFIRM_DATE!=null" style="display:inline-block;width: 160px;">
					{{ toDateTimeComp(sihRecord.CONFIRM_DATE) }}
				</div>
				<div v-else style="display:inline-block;width: 160px;">
					－
				</div>
				<div style="display:inline-block;margin-left: 30px;">{{sihRecord.OFFICE_CODE}}:{{sihRecord.OFFICE_NAME}}</div>
			</div>
		</div>
		<br />

		<pre></pre>

		<div class="tv">
			<div class="title">取区</div>
			<div class="value w100">
					<div style="font-weight:bold;">{{ sihRecord.HNAME }}</div>
			</div>
		</div>

		<div class="tv">
			<div class="title">進捗</div>
			<div class="value w100">
					<div style="font-weight:bold;">{{ sihRecord.SNAME }}</div>
			</div>
		</div>

		<div class="tv">
			<div class="title">指示書</div>
			<div class="value">
				<label><input type="checkbox" name="check" v-model="sihRecord.KARI">仮</label>
			</div>
		</div>
		<!-- <div class="tv">
			<div class="title">積載率</div>
			<div class="value">
				<label><input type="radio" name="r4" value="1" v-model="sihRecord.LOADING_RATE">率1</label>
				<label><input type="radio" name="r4" value="2" v-model="sihRecord.LOADING_RATE">率2</label>
				<label><input type="radio" name="r4" value="3" v-model="sihRecord.LOADING_RATE">率3</label>
			</div>
		</div> -->

		<br />

		<div class="tv">
			<div class="title">受注No.</div>
			<div class="value">
				<input type="text" size="10" v-bind:disabled="true" v-model="sihRecord.ORDER_NO">
			</div>
		</div>
		<div class="tv">
			<div class="title">発注者</div>
			<div class="value">
				<select v-model="sihRecord.ORDER2_USER">
					<option v-for="user in mstUsers" :key="user.CODE" :value="user.CODE">{{ user.CODE }}:{{ user.NAME }}</option>
				</select>
			</div>
		</div>
		<div class="tv">
			<div class="title">出荷日</div>
			<div class="value">
				<input type="date" max="9999-12-31" name="example" v-model="sihRecord.SHIP_DATE">
			</div>
		</div>
		<div class="tv">
			<div class="title">納品日</div>
			<div class="value">
				<input type="date" name="example" max="9999-12-31" v-model="sihRecord.DELIVERY_DATE">
				<label><input type="radio" name="r1" value="3" v-model="sihRecord.DELIVERY_AMPM">無指定</label>
				<label><input type="radio" name="r1" value="1" v-model="sihRecord.DELIVERY_AMPM">AM</label>
				<label><input type="radio" name="r1" value="2" v-model="sihRecord.DELIVERY_AMPM">PM</label>
				<input type="time" v-bind:disabled="!(sihRecord.DELIVERY_AMPM==1||sihRecord.DELIVERY_AMPM==2)" v-model="sihRecord.DELIVERY_TIME">
			</div>
		</div>
		<br />

		<div class="tv">
			<div class="title">相手営業所</div>
			<div class="value" v-if="sihRecord.HCODE==4 || sihRecord.HCODE==5 || sihRecord.HCODE==6">
				<input type="text" size="6" list="offices" id="officesOtherCode" v-model="sihRecord.OFFICE_OTHER_CODE" v-on:keyup="officeOtherC2N()" v-on:blur="officeOtherBlur()">
				<font-awesome-icon icon="times" v-on:click="sihRecord.OFFICE_OTHER_CODE='';officeOtherC2N();officeOtherBlur();" style="cursor:pointer;" />
				<font-awesome-icon icon="search" v-on:click="opneOfficeSearchDialog()" style="cursor:pointer;" />
				<input type="text" size="50" disabled v-model="sihRecord.OFFICE_OTHER_NAME">
			</div>
		</div>
		<br />

		<div class="tv">
			<div class="title" v-on:mouseover="showInformation" v-on:mouseout="hideInformation">得意先
				<div class="information">得意先を指定してください。</div>
			</div>
			<!-- 売上の場合のみ表示 -->
			<div class="value"  v-if="sihRecord.HCODE==1 || sihRecord.HCODE==4">
				<input type="text" size="6" list="customers" id="customerCode" v-model="sihRecord.CUSTOMER_CODE" v-on:keyup="customerC2N()" v-on:blur="customerBlur()">
				<font-awesome-icon icon="times" v-on:click="sihRecord.CUSTOMER_CODE='';customerC2N();customerBlur();" style="cursor:pointer;" />
				<font-awesome-icon icon="search" v-on:click="opneCustomerSearchDialog()" style="cursor:pointer;" />
				<input type="text" size="50" disabled v-model="sihRecord.CUSTOMER_NAME">
			</div>
		</div>
		<br />

		<div class="tv">
			<div class="title" v-on:mouseover="showInformation" v-on:mouseout="hideInformation">納／倉
				<div class="information">納入先を指定してください。<br>（仕入の時は入荷する倉庫を指定）</div>
			</div>

			<!-- 売上の場合は納入先を表示 -->
			<div class="value" v-if="sihRecord.HCODE==1 || sihRecord.HCODE==4">
				<input type="text" size="6" list="delivery_destinations" id="deliveryCode" v-model="sihRecord.DELIVERY_CODE" v-on:keyup="deliveryC2N()" v-on:blur="deliveryBlur()">
				<font-awesome-icon icon="times" v-on:click="sihRecord.DELIVERY_CODE='';deliveryC2N();deliveryBlur();" style="cursor:pointer;" />
				<font-awesome-icon icon="search" v-on:click="opneDeliverySearchDialog()" style="cursor:pointer;" />
				<input type="text" size="50" disabled v-model="sihRecord.DELIVERY_NAME">
			</div>

			<!-- 仕入と移動は場合は倉庫を表示 -->
			<div class="value" v-if="sihRecord.HCODE!=1 && sihRecord.HCODE!=4 ">
				<input type="text" size="6" list="delivery_destinations" id="deliveryCode" v-model="sihRecord.DELIVERY_CODE" v-on:keyup="deliveryC2N()" v-on:blur="deliveryBlur()">
				<font-awesome-icon icon="times" v-on:click="sihRecord.DELIVERY_CODE='';deliveryC2N();deliveryBlur();" style="cursor:pointer;" />
				<font-awesome-icon icon="search" v-on:click="opneWarehouseSearchDialog('delivery')" style="cursor:pointer;" />
				<input type="text" size="50" disabled v-model="sihRecord.DELIVERY_NAME">
			</div>
		</div>

		<br />

		<div class="tv">
			<div class="title" v-on:mouseover="showInformation" v-on:mouseout="hideInformation">仕入先
				<div class="information">仕入先を指定してください。</div>
			</div>
			<div class="value">
				<input type="text" size="6" list="suppliers" id="suppliersCode" v-model="sihRecord.SUPPLIER_CODE" v-on:keyup="supplierC2N()" v-on:blur="supplierBlur()">
				<font-awesome-icon icon="times" v-on:click="sihRecord.SUPPLIER_CODE='';supplierC2N();supplierBlur();" style="cursor:pointer;" />
				<font-awesome-icon icon="search" v-on:click="opneSupplierSearchDialog()" style="cursor:pointer;" />
				<input type="text" size="50" disabled v-model="sihRecord.SUPPLIER_NAME">
			</div>
		</div>

		<br />

		<div class="tv">
			<div class="title" v-on:mouseover="showInformation" v-on:mouseout="hideInformation">倉庫
				<div class="information">出荷倉庫を指定してください。<br>（仕入の時は仕入元の倉庫）</div>
			</div>
			<div class="value">
				<input type="text" size="6" list="warehouses" id="warehousesCode" v-model="sihRecord.WAREHOUSE_CODE" v-on:keyup="warehouseC2N()" v-on:blur="warehouseBlur()">
				<font-awesome-icon icon="times" v-on:click="sihRecord.WAREHOUSE_CODE='';warehouseC2N();warehouseBlur();" style="cursor:pointer;" />
				<font-awesome-icon icon="search" v-on:click="opneWarehouseSearchDialog('warehouse')" style="cursor:pointer;" />
				<input type="text" size="50" disabled v-model="sihRecord.WAREHOUSE_NAME">
			</div>
		</div>

		<br />

		<div class="tv">
			<div class="title">運転手</div>
			<div class="value">
				<input type="text" size="6" list="drivers" id="driversCode" v-model="sihRecord.DRIVER_CODE" v-on:keyup="driverC2N()" v-on:blur="driverBlur()">
				<font-awesome-icon icon="times" v-on:click="sihRecord.DRIVER_CODE='';driverC2N();driverBlur();" style="cursor:pointer;" />
				<font-awesome-icon icon="search" v-on:click="opneDriverSearchDialog()" style="cursor:pointer;" />
				<input type="text" disabled v-model="sihRecord.DRIVER_NAME">
			</div>
		</div>
		<div class="tv">
			<div class="title">運送会社</div>
			<div class="value">
				<input type="text" size="10" disabled v-model="sihRecord.TRUCKER_CODE">
				<input type="text" disabled v-model="sihRecord.TRUCKER_NAME">
			</div>
		</div>
		<div class="tv">
			<div class="title">便区分</div>
			<div class="value">
				<input type="text" size="5" v-model="sihRecord.FLIGHTS">
				回目
			</div>
		</div>

		<br />

		<div class="tv">
			<div class="title">運賃</div>
			<div class="value"><input class="right" type="text" size="10" v-model="sihRecord.FEE" v-on:blur="sihRecord.FEE=comma(sihRecord.FEE)" v-on:focus="sihRecord.FEE=delcomma(sihRecord.FEE)"></div>
		</div>
		<div class="tv">
			<div class="title">付加</div>
			<div class="value"><input class="right" type="text" size="10" v-model="sihRecord.ADD_FEE" v-on:blur="sihRecord.ADD_FEE=comma(sihRecord.ADD_FEE)" v-on:focus="sihRecord.ADD_FEE=delcomma(sihRecord.ADD_FEE)" ></div>
		</div>
		<div class="tv">
			<div class="title">有料道路代</div>
			<div class="value"><input class="right" type="text" size="10" v-model="sihRecord.HIGHWAY_FEE" v-on:blur="sihRecord.HIGHWAY_FEE=comma(sihRecord.HIGHWAY_FEE)" v-on:focus="sihRecord.HIGHWAY_FEE=delcomma(sihRecord.HIGHWAY_FEE)"></div>
		</div>
		<div class="tv">
			<div class="title">運賃振替</div>
			<div class="value">
				<label><input type="radio" name="radio" value="1" v-model="sihRecord.FEE_CLASS">他</label>
				<label><input type="radio" name="radio" value="2" v-model="sihRecord.FEE_CLASS">自</label>
			</div>
		</div>

		<pre></pre>

		<!--
		行の追加削除、上へ下へは次の感じ
		https://mae.chab.in/archives/2146
		-->

		<table class="searchResult" style="width:1330px">
			<tr>
				<th class="w20"></th>
				<th class="w40">区</th>
				<th class="w200">コード</th>
				<th class="w60"></th>
				<th class="w150">商品名</th>
				<th class="w60">入数</th>
				<th class="w60">袋数</th>
				<th class="w60">数量</th>
				<th class="showSmall">率</th>
				<th class="showSmall">積数</th>
				<th class="w70">積込場所</th>
				<th class="w100">積込場所名</th>
				<th class="w150">備考1</th>
				<th class="w150">備考2</th>
			</tr>
			<tr v-for="(sidRecord, index) of sidRecords" :key="index">
				<td>{{ index + 1 }}</td>
				<td>
					<input type="text" v-model="sidRecord.HCODE" list="hcodeD" class="w40">
					<datalist id="hcodeD">
						<option v-for="hcodeD in mstHCodesD" :key="hcodeD.CODE" :value="hcodeD.CODE">{{ hcodeD.CODE }} {{ hcodeD.NAME }}</option>
					</datalist>
					<!--
					<select style="width:40px;" v-model="sidRecord.HCODE">
						<option v-for="hcodeD in mstHCodesD" :key="hcodeD.CODE" :value="hcodeD.CODE">{{ hcodeD.CODE }} {{ hcodeD.NAME }}</option>
					</select>
					-->
				</td>
				<td v-bind:class="{warning:itemWarning(index)}">
					<input type="text" size="16" list="items_rel" :value="sidRecord.ITEM_CODE | upperCase" @input.lazy="sidRecord.ITEM_CODE = ($event.target.value).toUpperCase()" v-on:blur="itemBlur(index);" >
					<font-awesome-icon icon="times" v-on:click="sidRecord.ITEM_CODE='';itemBlur(index);" style="cursor:pointer;" />
					<font-awesome-icon icon="search" style="cursor:pointer;" v-on:click="opneItemSearchDialog(index)" />
				</td>
				<td>
					<font-awesome-icon icon="arrow-up"    style="cursor:pointer;" v-on:click="sidRowSwap(index, 'up')" />
					<font-awesome-icon icon="arrow-down"  style="cursor:pointer;" v-on:click="sidRowSwap(index, 'down')" />
					<font-awesome-icon icon="trash"       style="cursor:pointer;" v-on:click="sidRowDel(index)" />
				</td>
				<td>
					<div v-if="sidRecord.ITEM_NAME!=null" v-on:click="openStocksDetail(sidRecord.ITEM_CODE)"  style="text-decoration:underline;color:#0000ff;cursor:pointer;">{{ sidRecord.ITEM_NAME }}</div>
				</td>
				<td v-bind:class="{warning:qtyPerCtnWarning(index)}"><input type="number" class="delspinner" size="5" style="text-align:right;width:50px;" v-model="sidRecord.QTY_PER_CTN"></td>
				<td><input type="number" size="5" style="text-align:right;width:50px;" v-model="sidRecord.QTY_CTN"></td>
				<td class="right">{{ sidRecord.QTY = (sidRecord.QTY_PER_CTN * sidRecord.QTY_CTN) == 0 ? "":(sidRecord.QTY_PER_CTN * sidRecord.QTY_CTN) | comma }}</td>
				<td class="right showSmall">{{ sidRecord.QTY_CTN2 |decimalFormat }}</td>
				<td class="right showSmall">{{ sidRecord.QTY2 = (sidRecord.QTY_CTN * sidRecord.QTY_CTN2) | decimalFormat }}</td>
				<td class="center">
					<select style="width:40px;" v-model="sidRecord.LOADING_PLACE_CODE" v-on:change="loadingPlacBlur(index)">
						<option v-for="place in mstPlaces" :key="place.CODE" :value="place.CODE">{{ place.CODE }} {{ place.NAME }}</option>
					</select>
				</td>
				<td>
					<input type="text" size="10" v-model="sidRecord.LOADING_PLACE_NAME">
				</td>
				<td>
					<input type="text" size="" list="remark" v-model="sidRecord.REMARK1">
					<datalist id="remark">
						<option v-for="(remark, index) in mstRemarks" :key="index">{{ remark.name }}</option>
					</datalist>
				</td>
				<td>
					<input type="text" size="" list="remark" v-model="sidRecord.REMARK2">
				</td>
			</tr>
			<tr>
				<td colspan=8 ></td>
				<td><input class="showSmall" type="text" disabled name="" v-model="wariai"></td>
				<td colspan=4></td>
			</tr>
		</table>

		<pre>　</pre>

		<div class="tv">
			<div class="title">続き</div>
			<div class="value">
				<input type="radio" name="r3" value="1" v-model="sihRecord.CONTINUED_SHEET">有
				<input type="radio" name="r3" value="2" v-model="sihRecord.CONTINUED_SHEET">無
				<input type="number" class="w40 delspinner" size="1" name="" v-model="sihRecord.CURRENT_SHEET">枚目
				<input type="number" class="w40 delspinner" size="1" name="" v-model="sihRecord.ALL_SHEET">枚中
				割合<input type="text" disabled name="" v-model="wariai">
			</div>
		</div>

		<br />

		<div class="tv">
			<div class="title">送り状記事</div>
			<div class="value">
				<input type="text" size="120" placeholder="送り状に記事がある場合はここに入力" v-model="sihRecord.INVOICE_NOTE">
			</div>
		</div>

		<br />

		<div class="tv">
			<div class="title">納品書記事</div>
			<div class="value">
				<input type="text" size="120" placeholder="納品書に記事がある場合はここに入力" v-model="sihRecord.DELIVERY_NOTE">
			</div>
		</div>

		<br />

		<div class="tv">
			<div class="title">付箋</div>
			<div class="value">
				<input type="text" size="120" placeholder="ここに何か入力すると付箋になります。" v-model="sihRecord.TAG_NOTE">
			</div>
		</div>

		<!-- 得意先 -->
		<CustomerSearchDialog    v-if="showCustomerSearchDialog"    :officeCode="this.officeCode" :hCode="sihRecord.HCODE"                                         @close="closeCustomerSearchDialog"  @select="selectCustomerDialog"  ></CustomerSearchDialog>
		<!-- 納入先 -->
		<DeliverySearchDialog    v-if="showDeliverySearchDialog"    :officeCode="this.officeCode" :hCode="sihRecord.HCODE" :customerCode="sihRecord.CUSTOMER_CODE" @close="closeDeliverySearchDialog"  @select="selectDeliveryDialog"  ></DeliverySearchDialog>

		<!-- 仕入先 -->
		<SupplierSearchDialog    v-if="showSupplierSearchDialog"    :officeCode="this.officeOtherCode" :hCode="sihRecord.HCODE"                                         @close="closeSupplierSearchDialog"  @select="selectSupplierDialog"  ></SupplierSearchDialog>
		<!-- 倉庫 -->
		<WarehouseSearchDialog   v-if="showWarehouseSearchDialog"   :officeCode="this.officeOtherCode" :hCode="sihRecord.HCODE"                                         @close="closeWarehouseSearchDialog" @select="selectWarehouseDialog" ></WarehouseSearchDialog>
		<!-- 運転手 -->
		<DriverSearchDialog      v-if="showDriverSearchDialog"      :officeCode="this.officeCode" :officeOtherCode="this.officeOtherCode" :hCode="sihRecord.HCODE"                                         @close="closeDriverSearchDialog"    @select="selectDriverDialog"    ></DriverSearchDialog>

		<!-- 商品 -->
		<ItemSearchDialog        v-if="showItemSearchDialog"        :searchHcode="sihRecord.HCODE" :searchCustomerCode="sihRecord.CUSTOMER_CODE" :searchDeliveryCode="sihRecord.DELIVERY_CODE" :searchSupplierCode="sihRecord.SUPPLIER_CODE" @close="closeItemSearchDialog"      @select="selectItemDialog"      ></ItemSearchDialog>

		<!-- 営業所 -->
		<OfficeSearchDialog      v-if="showOfficeSearchDialog"                                                                                                     @close="closeOfficeSearchDialog"    @select="selectOfficeDialog"    ></OfficeSearchDialog>

		<!-- 複写 -->
		<InputShippingDialog     v-if="showInputShippingDialogCp" @close="closeInputShippingDialogCp" @complete="copyDetail"  :mode="'copy'"  :hCode="sihRecord.HCODE" :baseOrderNo="sihRecord.ORDER_NO" ></InputShippingDialog>
		<!-- 再設定 -->
		<InputShippingDialog     v-if="showInputShippingDialogRe" @close="closeInputShippingDialogRe" @complete="resetDetail" :mode="'reset'" ></InputShippingDialog>
	</div>

</template>
<script>
import axios from 'axios';
import router from './../router'
import store from "./../store"
export default {
	data() {
			return {

				// ダイアログ表示フラグ
				showCustomerSearchDialog: false,                // 得意先検索ダイアログの表示・非表示管理フラグ
				showDeliverySearchDialog: false,                // 納入先検索ダイアログの表示・非表示管理フラグ
				showDriverSearchDialog: false,                  // 運転手検索ダイアログの表示・非表示管理フラグ
				showSupplierSearchDialog: false,                // 仕入先検索ダイアログの表示・非表示管理フラグ
				showWarehouseSearchDialog: false,               // 倉庫検索ダイアログの表示・非表示管理フラグ
				showWarehouseSearchDialogTarget: "warehouse",   // 倉庫検索ダイアログの検索結果格納先(倉庫にいれる場合もあれば、納入先に入れる場合もある為)
				showItemSearchDialog: false,                    // 商品検索ダイアログの表示・非表示管理フラグ
				showItemSearchDialogIndex: -1,                  // 商品検索ダイアログの検索結果格納先Index(明細が複数存在している為)
				showOfficeSearchDialog: false,                  // 営業所検索ダイアログの表示・非表示管理フラグ
				showInputShippingDialogCp: false,               // 複写ダイアログの表示・非表示管理フラグ
				showInputShippingDialogRe: false,               // 複写ダイアログの表示・非表示管理フラグ

				// ドロップダウン元ネタ
				mstUsers: [],
				mstCustomers: [],
				mstDeliveries:[],
				mstSuppliers: [],
				mstWarehouses: [],
				mstDrivers:[],

				mstHCodesD:[],
				mstPlaces:[],
				mstRemarks:[],
				mstItems:[],
				mstOffices:[],

				// 営業所コード
				officeCode:"",
				// 相手営業所コード
				officeOtherCode:"",

				// ヘッダーとボディデータ
				sihRecord: {
					'STATUS': 0
				},
				sidRecords: [],

				//一時保存値
				orgOfficeOtherCode:"",
				orgCustomerCode:"",
				orgDeliveryCode:"",
				orgSuppliersCode:"",
				orgWarehousesCode:"",
				orgDriversCode:"",

				// 新規or更新
				isNew : true,

				// 受注No
				orderNo : "",

				modeRe : "",
			}
				},
	methods: {

		//-------------------------------
		// 初期処理
		//-------------------------------
		init: async function(orderNo, hCode, shipDate, userCode, orderNoBase){

			this.orderNo = orderNo;

			var URL = "";
			if (orderNo != "" && hCode != "" && shipDate != "" && userCode != "" && orderNoBase) {
				URL = "/api/shippingDetail/" + orderNo + "/" + hCode + "/" + shipDate + "/" + userCode + "/" + orderNoBase;
			} else if (orderNo != "" && hCode != "" && shipDate != "" && userCode != "") {
				URL = "/api/shippingDetail/" + orderNo + "/" + hCode + "/" + shipDate + "/" + userCode;
			} else if (orderNo != "" ) {
				URL = "/api/shippingDetail/" + orderNo;
			}

			await axios.get(URL, {})
			.then(response =>{
				//---------------------------------------------------------------------
				// 表示するデータの確定
				//---------------------------------------------------------------------
				this.isNew            = response.data.isNew;
				this.sihRecord        = response.data.sihRecord;
				this.sidRecords       = response.data.sidRecords;
				this.officeCode       = response.data.officeCode;
			})

			//画面名称の設定
			document.title="出荷指示: " + this.sihRecord.ORDER_NO;

			//初期得意先の設定
			this.orgOfficeOtherCode = this.sihRecord.OFFICE_OTHER_CODE;
			this.orgCustomerCode = this.sihRecord.CUSTOMER_CODE;
			this.orgDeliveryCode = this.sihRecord.DELIVERY_CODE;
			this.orgSuppliersCode = this.sihRecord.SUPPLIER_CODE;
			this.orgWarehousesCode = this.sihRecord.WAREHOUSE_CODE;
			this.orgDriversCode = this.sihRecord.DRIVER_CODE;

			// 相手営業所がない場合は、自営業所を格納する。
			if (this.sihRecord.OFFICE_OTHER_CODE == null) { 
				this.officeOtherCode = this.officeCode;
				this.orgOfficeOtherCode = "";
			}

			//画面表示時にコンマ表示を行う
			this.sihRecord.FEE=this.comma(this.sihRecord.FEE);
			this.sihRecord.ADD_FEE=this.comma(this.sihRecord.ADD_FEE);
			this.sihRecord.HIGHWAY_FEE=this.comma(this.sihRecord.HIGHWAY_FEE);

			//背景色の変更
			if (this.sihRecord.STATUS == 0) {
				if (this.sihRecord.KARI != 1) {
					// 通常
					document.body.style.background = 'rgb(223, 255, 255)' // 青
				} else {
					// 仮
					document.body.style.background = 'rgb(223, 255, 223)' // 緑
				}
			} else if (this.sihRecord.STATUS == 1) {
				// 入力確定
				document.body.style.background = 'rgb(255, 255, 223)' // 黄
			} else if (this.sihRecord.STATUS == 2) {
				// 入力確定
				document.body.style.background = 'rgb(255, 223, 223)' // 赤
			}
			
			// 読込回数が多いのでまとめて取得できないか？
			await axios.post("/api/master/detail", {
				'HCODE'  : this.sihRecord.HCODE,
			})
			.then(response => {
				var data = response.data;
				this.mstUsers = data.users;
				this.mstCustomers = data.customers;
				this.mstDeliveries = data.deliveries;
				this.mstSuppliers = data.suppliers;
				this.mstWarehouses = data.warehouses;
				this.mstDrivers = data.drivers;
				this.mstHCodesD = data.hcodesD;
				this.mstPlaces = data.places;
				this.mstRemarks = data.remarks;
				this.mstOffices = data.offices;
			});

			this.officeOtherC2N();
			this.officeOtherBlur();
			this.deliveryC2N();
			this.deliveryBlur();
			this.supplierC2N();
			this.supplierBlur();

		},
		//-------------------------------------------------------------------------
		// 画面上部ボタンイベント
		//-------------------------------------------------------------------------
		
		// 戻る
		back: function(){
			// 検索条件保持したまま戻りたいので、その方法を検討
			// ローカルストレージかなぁ・・・
			if (this.sihRecord.STATUS == 99) {
				if (confirm("未保存データです。削除しますか？")) {
					router.push("/?isBack=true")
				}
			} else {
				router.push("/?isBack=true")
			}
		},

		// 複写
		copy: function(){
			this.openInputShippingDialogCp();
		},
		copyDetail: function(orderNo, hCode, shipDate, userCode, orderNoBase){
			this.closeInputShippingDialogCp();
			router.push({ path: "/detail/" + orderNo + "_" + hCode + "_" + shipDate + "_" + userCode + "_" + orderNoBase });
		},

		// 再設定
		resetDetail: function(orderNo, modeRe){
			this.closeInputShippingDialogRe();
			this.orderNo = orderNo;

			// 鑑再設定
			this.sihRecord.ORDER_NO = this.orderNo;
			// 明細再設定
			for(var i = 0; i < this.sidRecords.length; i++) {
				this.sidRecords[i].ORDER_NO = this.orderNo;
			}

			if (this.modeRe == 'susp') {
				this.susp();
			} else {
				this.conf();
			}
		},

		// 一時保存
		susp: async function(){

			var suspFlg = false;

			// 受注No.が確定していない為、必要。
			if (this.isNew) {
				// 番号ダブりのチェック
				await axios.post("/api/shipping/exis", { 
					'ORDER_NO'  : this.sihRecord.ORDER_NO,
					'SHIP_DATE' : this.sihRecord.SHIP_DATE,
				}).then(response => {
					if (response.data == true) {
						// 番号の振り直しをメッセージする。
						if (confirm("指定された受注No.は既に存在します。受注No.を振り直しますか？")){
							// 入力画面に遷移する。
							this.modeRe = 'susp';
							this.openInputShippingDialogRe();
						} else {
							return;
						}
					} else {
						// 問題ない場合はそのまま登録する。
						suspFlg = true;
					}
				});
			}

			// 保存
			if (!this.isNew || suspFlg) {
				if (confirm("一時保存をします。よろしいですか？")) {
					await axios.post("/api/shipping/susp", {
						'isNew'     : this.isNew,
						'sihRecord' : this.sihRecord,
						'sidRecords': this.sidRecords,
					}).then(response => {
						alert("保存しました。");
						this.init(this.orderNo, "", "", "", "");
					});
				}
			}
		},

		// 入力確定
		conf: async function() {

			var confFlg = false;

			// 受注No.が確定していない為、必要。
			if (this.isNew) {
				// 番号ダブりのチェック
				await axios.post("/api/shipping/exis", { 
					'ORDER_NO'  : this.sihRecord.ORDER_NO,
					'SHIP_DATE' : this.sihRecord.SHIP_DATE,
				}).then(response => {
					if (response.data == true) {
						// 番号の振り直しをメッセージする。
						if (confirm("指定された受注No.は既に存在します。受注No.を振り直しますか？")){
							// 入力画面に遷移する。
							this.modeRe = 'conf';
							this.openInputShippingDialogRe();
						} else {
							return;
						}
					} else {
						// 問題ない場合はそのまま登録する。
						confFlg = true;
					}
				});
			}

			// 保存
			if (!this.isNew || confFlg) {
				// 受注Noの存在確認を行う。
				if (confirm("入力確定をします。よろしいですか？")) {
					await axios.post("/api/shipping/conf", {
						'isNew'     : this.isNew,
						'sihRecord' : this.sihRecord,
						'sidRecords': this.sidRecords
					})
					.then(response => {
						alert("確定しました。");
						this.init(this.orderNo, "", "", "", "");
					});
				}
			}
		},

		// 削除
		del: async function(){
			if (confirm("本当に削除してもよろしいですか？")){
				await axios.delete("/api/shipping/" + this.orderNo)
				.then(response => {
					alert("削除しました。");
					this.back();
				});
			}
		},

		// 指示書入力
		instructionPrint: async function(){
			await axios.post("/api/shipping/conf", {
					'isNew'     : this.isNew,
					'sihRecord' : this.sihRecord,
					'sidRecords': this.sidRecords
				})
				.then(response => {
					window.open("/shipping/instructionPrint/" + this.orderNo);
					this.init(this.orderNo, "", "", "", "");
			});
		},

		// 伝票印刷
		slipPrint: async function(){
			await axios.post("/api/shipping/conf", {
					'isNew'     : this.isNew,
					'sihRecord' : this.sihRecord,
					'sidRecords': this.sidRecords
				})
				.then(response => {
					window.open("/shipping/slipPrint/" + this.orderNo);
					this.init(this.orderNo, "", "", "", "");
			});
		},

		// 日時フォーマット
		toDateTimeComp: function(dateObj){
			if (dateObj == null){ return ""; }
			var dateValue = dateObj.substr(0,16).split("-").join("/");
			return dateValue;
		},

		// 在庫照会
		openStocksDetail: function(itemCode){
			if (store.state.stocksDetailURL == null || store.state.stocksDetailURL == ""){
				alert("在庫詳細のURLが設定されていません");
				return;
			}
			var linkURL = store.state.stocksDetailURL;
			linkURL += "?sub=1";
			linkURL += "&ITEM_CODE=" + encodeURIComponent(itemCode);
			linkURL += "&WAREHOUSE_CODE=" + ((this.sihRecord.WAREHOUSE_CODE==null||this.sihRecord.WAREHOUSE_CODE=="")?"":encodeURI(this.sihRecord.WAREHOUSE_CODE));
			linkURL += "&user_code=Nologin";
			window.open(linkURL,'sub','width=600,height=400,scrollbars=yes');
		},

		//-------------------------------------------------------------------------
		// ダイアログのオープンクローズ
		//-------------------------------------------------------------------------
		opneCustomerSearchDialog:function ()        { this.showCustomerSearchDialog = true; },
		closeCustomerSearchDialog:function ()       { this.showCustomerSearchDialog = false; },
		opneDeliverySearchDialog:function ()        { this.showDeliverySearchDialog = true; },
		closeDeliverySearchDialog:function ()       { this.showDeliverySearchDialog = false; },
		opneDriverSearchDialog:function ()          { this.showDriverSearchDialog = true; },
		closeDriverSearchDialog:function ()         { this.showDriverSearchDialog = false; },
		opneSupplierSearchDialog:function ()        { this.showSupplierSearchDialog = true; },
		closeSupplierSearchDialog:function ()       { this.showSupplierSearchDialog = false; },
		opneWarehouseSearchDialog:function (target) { this.showWarehouseSearchDialogTarget = target; this.showWarehouseSearchDialog = true; },
		closeWarehouseSearchDialog:function ()      { this.showWarehouseSearchDialog = false; },
		opneItemSearchDialog:function (index)       { this.showItemSearchDialogIndex = index; this.showItemSearchDialog = true; },
		closeItemSearchDialog:function ()           { this.showItemSearchDialog = false; },
		openInputShippingDialogCp:function()        { this.showInputShippingDialogCp = true; },
		closeInputShippingDialogCp:function()       { this.showInputShippingDialogCp = false; },
		openInputShippingDialogRe:function()        { this.showInputShippingDialogRe = true; },
		closeInputShippingDialogRe:function()       { this.showInputShippingDialogRe = false; },
		opneOfficeSearchDialog:function ()          { this.showOfficeSearchDialog = true; },
		closeOfficeSearchDialog:function ()         { this.showOfficeSearchDialog = false; },
		//-------------------------------------------------------------------------
		// ダイアログのオープンクローズ
		//-------------------------------------------------------------------------
		showInformation : function(event){
			$(event.currentTarget).find("div.information").show();
		},
		hideInformation: function(event){
			$(event.currentTarget).find("div.information").hide();
		},

		//-------------------------------------------------------------------------
		// Code2Name
		//-------------------------------------------------------------------------

		// 相手営業所
		officeOtherC2N: function (){
			var that = this;
			var targetOffices = this.mstOffices.filter(function(row){ 
				return row.CODE==that.sihRecord.OFFICE_OTHER_CODE?true:false;
			});
			if (targetOffices.length > 0){
				// 営業所コードを格納(仕入先/倉庫/運転手で使用する。)
				this.officeOtherCode = targetOffices[0].CODE;
				this.sihRecord.OFFICE_OTHER_NAME = targetOffices[0].NAME;
			} else {
				// デフォルト(自分自身)に戻す。
				this.officeOtherCode = this.officeCode;
				this.sihRecord.OFFICE_OTHER_NAME = "";
			}
		},

		// 得意先
		customerC2N: function (){
			var that = this;
			var targetCustomers = this.mstCustomers.filter(function(row){ return row.CODE==that.sihRecord.CUSTOMER_CODE?true:false; });
			if (targetCustomers.length > 0){
				this.sihRecord.CUSTOMER_NAME = targetCustomers[0].NAME;
			} else {
				this.sihRecord.CUSTOMER_NAME = "";
			}
		},

		// 納入先
		deliveryC2N: function (){
			//this.sihRecord.DELIVERY_CODE !=null ?this.sihRecord.DELIVERY_CODE.replace( /[^0-9]/g ,"" ):"";

			var that = this;
			var targetDeliveries = null;

			// 取区が通常の場合
			if (this.sihRecord.HCODE == 1 || this.sihRecord.HCODE == 4){
				targetDeliveries = this.mstDeliveries.filter(function(row){ return row.CODE==that.sihRecord.DELIVERY_CODE?true:false; });
			}

			// 取区が仕入・融通の場合
			if (this.sihRecord.HCODE != 1 && this.sihRecord.HCODE != 4){
				targetDeliveries = this.mstWarehouses.filter(function(row){ return row.CODE==that.sihRecord.DELIVERY_CODE?true:false; });
			}

			if (targetDeliveries != null && targetDeliveries.length > 0){
				this.sihRecord.DELIVERY_NAME = targetDeliveries[0].NAME;
			} else {
				this.sihRecord.DELIVERY_NAME = "";
			}

		},

		// 仕入先
		supplierC2N: function (){
			var that = this;
			var targetSuppliers = this.mstSuppliers.filter(function(row){ 
				return row.CODE==that.sihRecord.SUPPLIER_CODE?true:false; 
			});
			if (targetSuppliers.length > 0){
				this.sihRecord.SUPPLIER_NAME = targetSuppliers[0].NAME;
			} else {
				this.sihRecord.SUPPLIER_NAME = "";
			}
		},

		// 倉庫
		warehouseC2N: function (){
			var that = this;
			var targetWarehouses = this.mstWarehouses.filter(function(row){ 
				return row.CODE==that.sihRecord.WAREHOUSE_CODE?true:false; 
			});
			if (targetWarehouses.length > 0){
				this.sihRecord.WAREHOUSE_NAME = targetWarehouses[0].NAME;
			} else {
				this.sihRecord.WAREHOUSE_NAME = "";
			}
		},

		// 運転手
		driverC2N: function (){
			var that = this;
			var targetDrivers = this.mstDrivers.filter(function(row){ 
				return ((row.COMPANY_CODE==that.officeCode&&row.CODE==that.sihRecord.DRIVER_CODE)?true:false); 
				});
			if (targetDrivers.length > 0){
				this.sihRecord.DRIVER_NAME = targetDrivers[0].NAME;
				this.sihRecord.TRUCKER_CODE = targetDrivers[0].TRUCKER_CODE;
				this.sihRecord.TRUCKER_NAME = targetDrivers[0].TRUCKER_NAME;
			} else {
				this.sihRecord.DRIVER_NAME = "";
				this.sihRecord.TRUCKER_CODE = "";
				this.sihRecord.TRUCKER_NAME = "";
			}
		},

		//-------------------------------------------------------------------------
		// 商品の表示反映
		//-------------------------------------------------------------------------
		itemUpdate: function (index){
			for (var count = 0 ; count < this.sidRecords.length ; count++){
				if (index != undefined){
					if (index != count){ continue; }
				}
				if (this.sidRecords[count]["items_rel"] != null){
					this.sidRecords[count].ITEM_NAME    = this.sidRecords[count]["items_rel"].NAME;
					if (index != undefined){
						this.sidRecords[count].QTY_PER_CTN  = this.sidRecords[count]["items_rel"].QTY_PER_CTN;
					}
					if (this.sihRecord.LOADING_RATE == "1"){
						this.sidRecords[count].QTY_CTN2     = this.sidRecords[count]["items_rel"].RATE1;
					} else if (this.sihRecord.LOADING_RATE == "2"){
						this.sidRecords[count].QTY_CTN2     = this.sidRecords[count]["items_rel"].RATE2;
					} else if (this.sihRecord.LOADING_RATE == "3"){
						this.sidRecords[count].QTY_CTN2     = this.sidRecords[count]["items_rel"].RATE3;
					}
				} else {
					this.sidRecords[count].ITEM_NAME    = null;
					this.sidRecords[count].QTY_PER_CTN  = null;
					this.sidRecords[count].QTY_CTN2     = null;
				}
			}
		},

		//-------------------------------------------------------------------------
		// フォーカス外れ時イベント(4桁チェックなど)
		//-------------------------------------------------------------------------

		// 相手営業所(フォーカス外れ時イベント)
		officeOtherBlur: function(){
			if (this.sihRecord.OFFICE_OTHER_CODE == null){ 
				// デフォルト(自分自身)に戻す。
				this.officeOtherCode = this.officeCode;
				return;
			}
			
			// 元値がnullでないもので且つ、元値と入力値が異なっていた場合のみ値の削除を行う。
			if (this.orgOfficeOtherCode != null) {
				if (this.sihRecord.OFFICE_OTHER_CODE != this.orgOfficeOtherCode) {
					// 仕入先/倉庫/運転手をクリアする。
					this.sihRecord.SUPPLIER_CODE = "";
					this.sihRecord.SUPPLIER_NAME = "";
					this.sihRecord.WAREHOUSE_CODE = "";
					this.sihRecord.WAREHOUSE_NAME = "";
					this.sihRecord.DRIVER_CODE = "";
					this.sihRecord.DRIVER_NAME = "";
					this.sihRecord.TRUCKER_CODE = "";
					this.sihRecord.TRUCKER_NAME = "";

					//元値を新しい値に変更する
					this.orgOfficeOtherCode=this.sihRecord.OFFICE_OTHER_CODE;

					// 存在確認
					var that = this;
					var targetOffices = this.mstOffices.filter(function(row){ 
						return row.CODE==that.sihRecord.OFFICE_OTHER_CODE?true:false;
					});
					if (targetOffices.length == 0){
						alert("営業所コードが登録されていません。");
						officesOtherCode.focus();
						return;
					}
				}
			}

			//元値を新しい値に変更する
			this.orgOfficeOtherCode=this.sihRecord.OFFICE_OTHER_CODE;

			this.officeOtherC2N();
		},

		// 得意先(フォーカス外れ時イベント)
		customerBlur: function(){
			if (this.sihRecord.CUSTOMER_CODE == null){ return; }

			//元値がnullでないもので且つ、元値と入力値が異なっていた場合のみ値の削除を行う。
			if(this.orgCustomerCode != null){

				// 桁数を揃える
				if (1 <= this.sihRecord.CUSTOMER_CODE.length && this.sihRecord.CUSTOMER_CODE.length <= 4){
					this.sihRecord.CUSTOMER_CODE = this.officeCode + this.sihRecord.CUSTOMER_CODE.padStart(4, '0');
				}

				// 変更されているか確認
				if(this.sihRecord.CUSTOMER_CODE  != this.orgCustomerCode){
					this.sihRecord.DELIVERY_CODE="";
					this.sihRecord.DELIVERY_NAME="";
					
					for (var count = 0 ; count < this.sidRecords.length ; count++){
						this.sidRecords[count].HCODE         = null;
						this.sidRecords[count].ITEM_CODE     = null;
						this.sidRecords[count].ITEM_NAME     = null;
						this.sidRecords[count].QTY_PER_CTN   = null;
						this.sidRecords[count].QTY_CTN       = null;
						this.sidRecords[count].QTY           = null;
						this.sidRecords[count].QTY_CTN2      = null;
						this.sidRecords[count].QTY2          = null;
						// 20220720_hash-shi_明細クリア_str------------
						// this.sidRecords[count].LOADING_PLACE = null;
						this.sidRecords[count].LOADING_PLACE_CODE = null;
						this.sidRecords[count].LOADING_PLACE_NAME = null;
						// 20220720_hash-shi_明細クリア_end------------
						this.sidRecords[count].REMARK1       = null;
						this.sidRecords[count].REMARK2       = null;
					}
					// 20220720_hash-shi_明細クリア_str------------
					this.sihRecord.CONTINUED_SHEET         = null
					this.sihRecord.CURRENT_SHEET           = null
					this.sihRecord.ALL_SHEET               = null
					this.sihRecord.INVOICE_NOTE            = null
					this.sihRecord.DELIVERY_NOTE           = null
					this.sihRecord.TAG_NOTE                = null
					// 20220720_hash-shi_明細クリア_end------------

					// 元値を新しい値に変更する
					this.orgCustomerCode=this.sihRecord.CUSTOMER_CODE;

					// 得意先コードに含まれているかをチェックする。
					// あんまりチェックする意義が無いが一応追加する。
					var that = this;
					var targetCustomers = this.mstCustomers.filter(function(row){ return row.CODE==that.sihRecord.CUSTOMER_CODE?true:false; });
					if (targetCustomers.length == 0){
						alert("得意先コードが登録されていません。");
						customerCode.focus();
						return;
					}
				}
			}

			// 元値を新しい値に変更する
			this.orgCustomerCode=this.sihRecord.CUSTOMER_CODE;

			this.customerC2N();
		},

		// 納入先(フォーカス外れ時イベント)
		deliveryBlur: function(){
			if (this.sihRecord.DELIVERY_CODE == null){ return; }
			// 20220706_hash-shi_納入先変更で明細クリア_str------------
			// 元値がnullでないもので且つ、元値と入力値が異なっていた場合のみ値の削除を行う。
			if (this.orgDeliveryCode != null) {

				// 桁揃え
				if (1 <= this.sihRecord.DELIVERY_CODE.length && this.sihRecord.DELIVERY_CODE.length <= 4){
					this.sihRecord.DELIVERY_CODE = this.officeCode + this.sihRecord.DELIVERY_CODE.padStart(4, '0');
				}

				if (this.sihRecord.DELIVERY_CODE != this.orgDeliveryCode) {
					for (var count = 0 ; count < this.sidRecords.length ; count++){
						this.sidRecords[count].HCODE         = null;
						this.sidRecords[count].ITEM_CODE     = null;
						this.sidRecords[count].ITEM_NAME     = null;
						this.sidRecords[count].QTY_PER_CTN   = null;
						this.sidRecords[count].QTY_CTN       = null;
						this.sidRecords[count].QTY           = null;
						this.sidRecords[count].QTY_CTN2      = null;
						this.sidRecords[count].QTY2          = null;
						// 20220720_hash-shi_明細クリア_str------------
						// this.sidRecords[count].LOADING_PLACE = null;
						this.sidRecords[count].LOADING_PLACE_CODE = null;
						this.sidRecords[count].LOADING_PLACE_NAME = null;
						// 20220720_hash-shi_明細クリア_end------------
						this.sidRecords[count].REMARK1       = null;
						this.sidRecords[count].REMARK2       = null;
					}
					// 20220720_hash-shi_明細クリア_str------------
					this.sihRecord.CONTINUED_SHEET         = null
					this.sihRecord.CURRENT_SHEET           = null
					this.sihRecord.ALL_SHEET               = null
					this.sihRecord.INVOICE_NOTE            = null
					this.sihRecord.DELIVERY_NOTE           = null
					this.sihRecord.TAG_NOTE                = null
					// 20220720_hash-shi_明細クリア_end------------

					//元値を新しい値に変更する
					this.orgDeliveryCode=this.sihRecord.DELIVERY_CODE;

					// コードの存在確認
					var that = this;
					var targetDeliveries = null;
					// 取区が通常の場合
					if (this.sihRecord.HCODE == 1 || this.sihRecord.HCODE == 4){
						targetDeliveries = this.mstDeliveries.filter(function(row){ return row.CODE==that.sihRecord.DELIVERY_CODE?true:false; });
					}
					// 取区が仕入・融通の場合
					if (this.sihRecord.HCODE != 1 && this.sihRecord.HCODE != 4){
						targetDeliveries = this.mstWarehouses.filter(function(row){ return row.CODE==that.sihRecord.DELIVERY_CODE?true:false; });
					}
					if (targetDeliveries.length == 0){
						alert("納入先コードが登録されていません。");
						deliveryCode.focus();
						return;
					}
				}
			}

			//元値を新しい値に変更する
			this.orgDeliveryCode=this.sihRecord.DELIVERY_CODE;

			this.deliveryC2N();
			// 20220706_hash-shi_納入先変更で明細クリア_end------------
		},

		// 仕入先(フォーカス外れ時イベント)
		supplierBlur: function(){
			if (this.sihRecord.SUPPLIER_CODE == null){ return; }

			//元値がnullでないもので且つ、元値と入力値が異なっていた場合のみ値の削除を行う。
			if(this.orgSuppliersCode != null){
				// 桁数を揃える
				if (1 <= this.sihRecord.SUPPLIER_CODE.length && this.sihRecord.SUPPLIER_CODE.length <= 4){
					this.sihRecord.SUPPLIER_CODE = this.officeOtherCode + this.sihRecord.SUPPLIER_CODE.padStart(4, '0');
				}
				// 変更されているか確認
				if(this.sihRecord.SUPPLIER_CODE  != this.orgSuppliersCode){
					// 元値を新しい値に変更する
					this.orgSuppliersCode=this.sihRecord.SUPPLIER_CODE;
					// 存在確認
					var that = this;
					var targetSuppliers = this.mstSuppliers.filter(function(row){ 
						return row.CODE==that.sihRecord.SUPPLIER_CODE?true:false; 
					});
					if (targetSuppliers.length == 0){
						alert("仕入先コードが登録されていません。");
						suppliersCode.focus();
						return;
					}
				}
			}

			// 元値を新しい値に変更する
			this.orgSuppliersCode=this.sihRecord.SUPPLIER_CODE;
			this.supplierC2N();
		},

		// 倉庫(フォーカス外れ時イベント)
		warehouseBlur: function(){
			if (this.sihRecord.WAREHOUSE_CODE == null){ return; }

			//元値がnullでないもので且つ、元値と入力値が異なっていた場合のみ値の削除を行う。
			if(this.orgWarehousesCode != null){
				// 桁数を揃える
				if (1 <= this.sihRecord.WAREHOUSE_CODE.length && this.sihRecord.WAREHOUSE_CODE.length <= 4){
					this.sihRecord.WAREHOUSE_CODE = this.officeOtherCode + this.sihRecord.WAREHOUSE_CODE.padStart(4, '0');
				}
				// 変更されているか確認
				if(this.sihRecord.WAREHOUSE_CODE  != this.orgWarehousesCode){
					// 元値を新しい値に変更する
					this.orgWarehousesCode=this.sihRecord.WAREHOUSE_CODE;
					// 存在確認
					var that = this;
					var targetWarehouses = this.mstWarehouses.filter(function(row){ 
						return row.CODE==that.sihRecord.WAREHOUSE_CODE?true:false; 
					});
					if (targetWarehouses.length == 0){
						alert("倉庫コードが登録されていません。");
						suppliersCode.focus();
						return;
					}
				}
			}

			// 元値を新しい値に変更する
			this.orgWarehousesCode=this.sihRecord.WAREHOUSE_CODE;
			this.warehouseC2N();
		},

		// 運転手(フォーカス外れ時イベント)
		driverBlur: function(){
			if (this.sihRecord.DRIVER_CODE == null){ return; }

			//元値がnullでないもので且つ、元値と入力値が異なっていた場合のみ値の削除を行う。
			if(this.orgDriversCode != null){
				// 桁数を揃える
				if (this.sihRecord.DRIVER_CODE.length <= 6){
					this.sihRecord.DRIVER_CODE = this.sihRecord.DRIVER_CODE.padStart(6, '0');
				}
				// 変更されているか確認
				if(this.sihRecord.DRIVER_CODE  != this.orgDriversCode){
					// 元値を新しい値に変更する
					this.orgDriversCode=this.sihRecord.DRIVER_CODE;
					// 存在確認
					var that = this;
					var targetDrivers = this.mstDrivers.filter(function(row){ 
						return ((row.COMPANY_CODE==that.officeCode&&row.CODE==that.sihRecord.DRIVER_CODE)?true:false); 
					});
					if (targetDrivers.length == 0){
						alert("運転手コードが登録されていません。");
						driversCode.focus();
						return;
					}
				}
			}

			// 元値を新しい値に変更する
			this.orgDriversCode=this.sihRecord.DRIVER_CODE;
			this.driverC2N();
		},

		// 商品(フォーカス外れ時イベント)
		itemBlur: async function(index){
			if (this.sidRecords[index].ITEM_CODE == null || this.sidRecords[index].ITEM_CODE == ""){
				this.sidRecords[index]["items_rel"] = null;
				this.itemUpdate(index);
				return;
			}
			await axios.post("/api/master/items", {
				'searchItemCode'        : this.sidRecords[index].ITEM_CODE,
				'searchItemName'        : null,
				'searchType'            : 1,
			})
			.then(response => {
				if (response.data.length > 0){
					this.sidRecords[index]["items_rel"] = response.data[0];
				} else {
					this.sidRecords[index]["items_rel"] = null;
				}
				this.itemUpdate(index);
			});
		},
		// 20220720_hash-shi_積込場所名_str------------
		loadingPlacBlur: async function(index) {

			// 選択したコードの積込場所名を表示する。
			for (var count = 0; count < this.mstPlaces.length; count++) {
				var places = this.mstPlaces[count];
				if (places["CODE"] === this.sidRecords[index].LOADING_PLACE_CODE) {
					this.sidRecords[index].LOADING_PLACE_NAME = places["NAME"];
				}
			}
		},
		// 20220720_hash-shi_積込場所名_end------------

		//-------------------------------------------------------------------------
		// ダイアログで選択した値を反映
		//-------------------------------------------------------------------------
		// 営業所ダイアログで選択した営業所を格納してダイアログを閉じる
		selectOfficeDialog: function(officeCode){
			this.sihRecord.OFFICE_OTHER_CODE = officeCode;
			this.closeOfficeSearchDialog();
			this.officeOtherBlur();
			this.officeOtherC2N();
		},
		// 得意先ダイアログで選択した得意先を格納してダイアログを閉じる
		selectCustomerDialog: function(customerCode){
			this.sihRecord.CUSTOMER_CODE = customerCode;
			this.closeCustomerSearchDialog();
			this.customerBlur();
			this.customerC2N();
		},
		// 納入先ダイアログで選択した得意先を格納してダイアログを閉じる
		selectDeliveryDialog: function(deliveryCode){
			this.sihRecord.DELIVERY_CODE = deliveryCode;
			this.closeDeliverySearchDialog();
			this.deliveryBlur();
			this.deliveryC2N();
		},
		// 仕入先ダイアログで選択した得意先を格納してダイアログを閉じる
		selectSupplierDialog: function(supplierCode){
			this.sihRecord.SUPPLIER_CODE = supplierCode;
			this.closeSupplierSearchDialog();
			this.supplierC2N();
		},
		// 倉庫ダイアログで選択した得意先を格納してダイアログを閉じる
		selectWarehouseDialog: function(warehouseCode){
			if (this.showWarehouseSearchDialogTarget == "warehouse"){
				this.sihRecord.WAREHOUSE_CODE = warehouseCode;
				this.closeWarehouseSearchDialog();
				this.warehouseC2N();
			}
			if (this.showWarehouseSearchDialogTarget == "delivery"){
				this.sihRecord.DELIVERY_CODE = warehouseCode;
				this.closeWarehouseSearchDialog();
				this.deliveryC2N();
			}
		},
		// 運転手ダイアログで選択した得意先を格納してダイアログを閉じる
		selectDriverDialog: function(driverCode){
			this.sihRecord.DRIVER_CODE = driverCode;
			this.closeDriverSearchDialog();
			this.driverC2N();
		},
		// 商品ダイアログで選択した得意先を格納してダイアログを閉じる
		selectItemDialog: function(item){
			this.sidRecords[this.showItemSearchDialogIndex].ITEM_CODE = item.CODE;
			this.sidRecords[this.showItemSearchDialogIndex]["items_rel"] = item;
			this.closeItemSearchDialog();
			this.itemUpdate(this.showItemSearchDialogIndex);
		},

		//-------------------------------------------------------------------------
		// 行操作
		//-------------------------------------------------------------------------
		// 上下入れ替え
		sidRowSwap: function(index, mode){
			if (index == 0 && mode == "up"){ return; }
			if (index == 7 && mode == "down"){ return; }

			if (mode == "down"){
				var baseRow = JSON.parse(JSON.stringify(this.sidRecords[index]));
				var targetRow = JSON.parse(JSON.stringify(this.sidRecords[index + 1]));
				this.sidRecords.splice(index,1,targetRow);
				this.sidRecords.splice(index + 1,1,baseRow);
			}
			if (mode == "up"){
				var baseRow = JSON.parse(JSON.stringify(this.sidRecords[index]));
				var targetRow = JSON.parse(JSON.stringify(this.sidRecords[index - 1]));
				this.sidRecords.splice(index,1,targetRow);
				this.sidRecords.splice(index - 1,1,baseRow);
			}
		},
		// 行の内容を削除
		sidRowDel: function(index){
			for (let key in this.sidRecords[index]) {
				if (key != 'ORDER_NO' && key != 'RNO') {
					this.sidRecords[index][key] = null;
				}
			}
		},

		getItems: async function(){
			// 取区によって商品候補一覧の取得元が異なる為、判定
			if (this.sihRecord.HCODE == 1 || this.sihRecord.HCODE == 4){
				// 「通常」の場合
				if (this.sihRecord.CUSTOMER_CODE == null || this.sihRecord.CUSTOMER_CODE == "") { this.mstItems = []; return; }
				
				await axios.post('/api/master/items', {
					'searchHcode'        : this.sihRecord.HCODE,
					'searchCustomerCode' : this.sihRecord.CUSTOMER_CODE,
					'searchDeliveryCode' : this.sihRecord.DELIVERY_CODE,
				})
				.then(response => {
					this.mstItems = response.data;
				});

			} else if (this.sihRecord.HCODE != 1 && this.sihRecord.HCODE != 4){
				// 「仕入」の場合
				if (this.sihRecord.SUPPLIER_CODE == null || this.sihRecord.SUPPLIER_CODE == "") { this.mstItems = []; return; }

				await axios.post('/api/master/items', {
					'searchHcode'        : this.sihRecord.HCODE,
					'searchSupplierCode' : this.sihRecord.SUPPLIER_CODE,
				})
				.then(response => {
					this.mstItems = response.data;
				});


			} else {
				// それ意外はありえないが変な値が入ってもいやなので、空に初期化する
				this.mstItems = [];
			}
		},

		//-------------------------------------------------------------------------
		// 明細行の警告
		//-------------------------------------------------------------------------
		// 商品コードがデータリストに無い場合の警告
		itemWarning: function(index){
			var itemCode = this.sidRecords[index].ITEM_CODE;
			if (itemCode == null){ return false; }
			if (itemCode == "")  { return false; }
			if (this.mstItems.filter(function(row){ return (row.CODE==itemCode); }).length > 0){
				return false;
			}
			return true;
		},

		// 商品コードがデータリストに無い場合の警告
		qtyPerCtnWarning: function(index){
			var qtyPerCtn = this.sidRecords[index].QTY_PER_CTN;
			if (qtyPerCtn == null){ return false; }
			if (qtyPerCtn == "")  { return false; }
			if (this.sidRecords[index]["items_rel"]==null){ return false; }
			if (this.sidRecords[index]["items_rel"].QTY_PER_CTN == qtyPerCtn){ return false; }
			return true;
		},

		//コンマ表示関連
		//コンマ表示
		comma:function(value){
			if (!value) return ''
			return value.toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
		},
		//コンマ除去
		delcomma:function(value){
			if (!value) return ''
			return value.toString().replace(/,/g, '');
		 },
	},

	//---------------------------------------------------------------------------
	//
	// 画面ロード時処理
	//
	//---------------------------------------------------------------------------
	mounted: async function(){

		// 簡易ログインチェック
		if (store.state.userCode==null){ router.push({ path: "/sso" }); }

		// //得意先の絞込
		// if(this.sihRecord.HCODE == 1){
		//   this.mstCustomers=this.mstCustomers.filter(function(row){ return (row.CODE>1480000)});
		//   this.mstCustomers=this.mstCustomers.filter(function(row){ return (row.CODE<1489999)});
		// }

		// //仕入先の絞込
		// if(this.sihRecord.HCODE != 4){
		//   this.mstSuppliers=this.mstSuppliers.filter(function(row){ return (row.CODE>1480000)});
		//   this.mstSuppliers=this.mstSuppliers.filter(function(row){ return (row.CODE<1489999)});
		// }
		
		// //取区によるリストの絞込
		// if(this.sihRecord.HCODE == 1 || this.sihRecord.HCODE == 4) {
		//   // 通常売上
		//   var codes = ["11","12","15","16","35","38","45"];
		//   this.mstHCodesD=this.mstHCodesD.filter(function(row){ return (codes.includes(row.CODE))});
		// } else if(this.sihRecord.HCODE == 2 || this.sihRecord.HCODE == 5) {
		//   // 通常仕入
		//   var codes = ["10","13","14","31","34","36","37","41","44"];
		//   this.mstHCodesD=this.mstHCodesD.filter(function(row){ return (codes.includes(row.CODE))});
		// } else if(this.sihRecord.HCODE == 3 || this.sihRecord.HCODE == 6) {
		//   // 通常移動
		//   var codes = ["51"];
		//   this.mstHCodesD=this.mstHCodesD.filter(function(row){ return (codes.includes(row.CODE))});
		// }
	},
	watch:{
		$route: {
			handler (){

				//-------------------------------------------
				// 初期タブ制御
				//-------------------------------------------
				var target = this.$route.params.orderNo;
				var orderNo = "";
				var hCode = "";
				var shipDate = "";
				var userCode = "";
				var orderNoBase = "";

				if (target != null){
					var targetSplit = target.split("_");
					if (targetSplit.length == 1) {
						// 修正
						orderNo     = targetSplit[0];
					} else if (targetSplit.length == 4) {
						// 新規
						orderNo     = targetSplit[0];
						hCode       = targetSplit[1];
						shipDate    = targetSplit[2];
						userCode    = targetSplit[3];
					} else if (targetSplit.length == 5) {
						// 複写
						orderNo     = targetSplit[0];
						hCode       = targetSplit[1];
						shipDate    = targetSplit[2];
						userCode    = targetSplit[3];
						orderNoBase = targetSplit[4];
					}

					//-------------------------------------------
					// 初期データ取得
					//-------------------------------------------
					this.init(orderNo, hCode, shipDate, userCode, orderNoBase);
				}

			},
			immediate: true
		},

		'sihRecord.CUSTOMER_CODE': async function(code){
			// 得意先変更で納入先変更
			await axios.post('/api/master/deliveries', { 'searchCustomerCode' : code })
			.then(response => {
				this.mstDeliveries = response.data;
			});
			await this.getItems();
		},
		'sihRecord.DELIVERY_CODE': async function(code){
			await this.getItems();
		},
		'sihRecord.SUPPLIER_CODE': async function(code){
			await this.getItems();
		},
		'sihRecord.LOADING_RATE': async function(){
			this.itemUpdate();
		},
	},
	
	computed: {
		wariai: function(){
			var wariai = 0;
			for (var count = 0 ; count < this.sidRecords.length ; count++){
				var sidRecord = this.sidRecords[count];
				wariai = wariai + sidRecord.QTY2;
			}
			return wariai.toFixed(1)
		},
	},
	beforeRouteUpdate(to, from, next){
		this.closeInputShippingDialogCp();
		next();
		// this.load();
	},

	filters:{
		 decimalFormat:function (value) {
			if (!value) return ''
			if(value == 0) return ''
			return Number(value).toFixed(1);
		 },

		 upperCase:function (value) {
			if (!value) return ''
			return value.toUpperCase();
		 },

			comma:function(value){
			if (!value) return ''
			return value.toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
		},
	},


 };

</script>
<style scoped>
	td.warning {
		background-color: yellow;
	}

	div.information {
		position: absolute;
		width: 240px;
		bottom: 30px;
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

	.showSmall{
		width:25px;
		font-size:13px;

	}

.delspinner::-webkit-outer-spin-button,
.delspinner::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.delspinner{
	-moz-appearance:textfield;
}

</style>