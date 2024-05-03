(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Detail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Detail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Detail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../router */ "./resources/js/router.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../store */ "./resources/js/store.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      // ダイアログ表示フラグ
      showCustomerSearchDialog: false,
      // 得意先検索ダイアログの表示・非表示管理フラグ
      showDeliverySearchDialog: false,
      // 納入先検索ダイアログの表示・非表示管理フラグ
      showDriverSearchDialog: false,
      // 運転手検索ダイアログの表示・非表示管理フラグ
      showSupplierSearchDialog: false,
      // 仕入先検索ダイアログの表示・非表示管理フラグ
      showWarehouseSearchDialog: false,
      // 倉庫検索ダイアログの表示・非表示管理フラグ
      showWarehouseSearchDialogTarget: "warehouse",
      // 倉庫検索ダイアログの検索結果格納先(倉庫にいれる場合もあれば、納入先に入れる場合もある為)
      showItemSearchDialog: false,
      // 商品検索ダイアログの表示・非表示管理フラグ
      showItemSearchDialogIndex: -1,
      // 商品検索ダイアログの検索結果格納先Index(明細が複数存在している為)
      showOfficeSearchDialog: false,
      // 営業所検索ダイアログの表示・非表示管理フラグ
      showInputShippingDialogCp: false,
      // 複写ダイアログの表示・非表示管理フラグ
      showInputShippingDialogRe: false,
      // 複写ダイアログの表示・非表示管理フラグ
      // ドロップダウン元ネタ
      mstUsers: [],
      mstCustomers: [],
      mstDeliveries: [],
      mstSuppliers: [],
      mstWarehouses: [],
      mstDrivers: [],
      mstHCodesD: [],
      mstPlaces: [],
      mstRemarks: [],
      mstItems: [],
      mstOffices: [],
      // 営業所コード
      officeCode: "",
      // 相手営業所コード
      officeOtherCode: "",
      // ヘッダーとボディデータ
      sihRecord: {
        'STATUS': 0
      },
      sidRecords: [],
      //一時保存値
      orgCustomerCode: "",
      orgDeliveryCode: "",
      orgOfficeOtherCode: "",
      // 新規or更新
      isNew: true,
      // 受注No
      orderNo: "",
      modeRe: ""
    };
  },
  methods: {
    //-------------------------------
    // 初期処理
    //-------------------------------
    init: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(orderNo, hCode, shipDate, userCode, orderNoBase) {
        var _this = this;

        var URL;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.orderNo = orderNo;
                URL = "";

                if (orderNo != "" && hCode != "" && shipDate != "" && userCode != "" && orderNoBase) {
                  URL = "/api/shippingDetail/" + orderNo + "/" + hCode + "/" + shipDate + "/" + userCode + "/" + orderNoBase;
                } else if (orderNo != "" && hCode != "" && shipDate != "" && userCode != "") {
                  URL = "/api/shippingDetail/" + orderNo + "/" + hCode + "/" + shipDate + "/" + userCode;
                } else if (orderNo != "") {
                  URL = "/api/shippingDetail/" + orderNo;
                }

                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get(URL, {}).then(function (response) {
                  //---------------------------------------------------------------------
                  // 表示するデータの確定
                  //---------------------------------------------------------------------
                  _this.isNew = response.data.isNew;
                  _this.sihRecord = response.data.sihRecord;
                  _this.sidRecords = response.data.sidRecords;
                  _this.officeCode = response.data.officeCode;
                });

              case 5:
                //画面名称の設定
                document.title = "出荷指示: " + this.sihRecord.ORDER_NO; //初期得意先の設定

                this.orgCustomerCode = this.sihRecord.CUSTOMER_CODE;
                this.orgDeliveryCode = this.sihRecord.DELIVERY_CODE;
                this.orgOfficeOtherCode = this.sihRecord.OFFICE_OTHER_CODE; // 相手営業所がない場合は、自営業所を格納する。

                if (this.sihRecord.OFFICE_OTHER_CODE == null) {
                  this.officeOtherCode = this.officeCode;
                  this.orgOfficeOtherCode = "";
                } //画面表示時にコンマ表示を行う


                this.sihRecord.FEE = this.comma(this.sihRecord.FEE);
                this.sihRecord.ADD_FEE = this.comma(this.sihRecord.ADD_FEE);
                this.sihRecord.HIGHWAY_FEE = this.comma(this.sihRecord.HIGHWAY_FEE); //背景色の変更

                if (this.sihRecord.STATUS == 0) {
                  if (this.sihRecord.KARI != 1) {
                    // 通常
                    document.body.style.background = 'rgb(223, 255, 255)'; // 青
                  } else {
                    // 仮
                    document.body.style.background = 'rgb(223, 255, 223)'; // 緑
                  }
                } else if (this.sihRecord.STATUS == 1) {
                  // 入力確定
                  document.body.style.background = 'rgb(255, 255, 223)'; // 黄
                } else if (this.sihRecord.STATUS == 2) {
                  // 入力確定
                  document.body.style.background = 'rgb(255, 223, 223)'; // 赤
                } // 読込回数が多いのでまとめて取得できないか？


                _context.next = 16;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/master/detail", {
                  'HCODE': this.sihRecord.HCODE
                }).then(function (response) {
                  var data = response.data;
                  _this.mstUsers = data.users;
                  _this.mstCustomers = data.customers;
                  _this.mstDeliveries = data.deliveries;
                  _this.mstSuppliers = data.suppliers;
                  _this.mstWarehouses = data.warehouses;
                  _this.mstDrivers = data.drivers;
                  _this.mstHCodesD = data.hcodesD;
                  _this.mstPlaces = data.places;
                  _this.mstRemarks = data.remarks;
                  _this.mstOffices = data.offices;
                });

              case 16:
                this.deliveryC2N();
                this.deliveryBlur();
                this.officeOtherC2N();
                this.officeOtherBlur();
                this.supplierC2N();
                this.supplierBlur();

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init(_x, _x2, _x3, _x4, _x5) {
        return _init.apply(this, arguments);
      }

      return init;
    }(),
    //-------------------------------------------------------------------------
    // 画面上部ボタンイベント
    //-------------------------------------------------------------------------
    // 戻る
    back: function back() {
      // 検索条件保持したまま戻りたいので、その方法を検討
      // ローカルストレージかなぁ・・・
      if (this.sihRecord.STATUS == 99) {
        if (confirm("未保存データです。削除しますか？")) {
          _router__WEBPACK_IMPORTED_MODULE_2__.default.push("/?isBack=true");
        }
      } else {
        _router__WEBPACK_IMPORTED_MODULE_2__.default.push("/?isBack=true");
      }
    },
    // 複写
    copy: function copy() {
      this.openInputShippingDialogCp();
    },
    copyDetail: function copyDetail(orderNo, hCode, shipDate, userCode, orderNoBase) {
      this.closeInputShippingDialogCp();
      _router__WEBPACK_IMPORTED_MODULE_2__.default.push({
        path: "/detail/" + orderNo + "_" + hCode + "_" + shipDate + "_" + userCode + "_" + orderNoBase
      });
    },
    // 再設定
    resetDetail: function resetDetail(orderNo, modeRe) {
      this.closeInputShippingDialogRe();
      this.orderNo = orderNo; // 鑑再設定

      this.sihRecord.ORDER_NO = this.orderNo; // 明細再設定

      for (var i = 0; i < this.sidRecords.length; i++) {
        this.sidRecords[i].ORDER_NO = this.orderNo;
      }

      if (this.modeRe == 'susp') {
        this.susp();
      } else {
        this.conf();
      }
    },
    // 一時保存
    susp: function () {
      var _susp = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _this2 = this;

        var suspFlg;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                suspFlg = false; // 受注No.が確定していない為、必要。

                if (!this.isNew) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/shipping/exis", {
                  'ORDER_NO': this.sihRecord.ORDER_NO,
                  'SHIP_DATE': this.sihRecord.SHIP_DATE
                }).then(function (response) {
                  if (response.data == true) {
                    // 番号の振り直しをメッセージする。
                    if (confirm("指定された受注No.は既に存在します。受注No.を振り直しますか？")) {
                      // 入力画面に遷移する。
                      _this2.modeRe = 'susp';

                      _this2.openInputShippingDialogRe();
                    } else {
                      return;
                    }
                  } else {
                    // 問題ない場合はそのまま登録する。
                    suspFlg = true;
                  }
                });

              case 4:
                if (!(!this.isNew || suspFlg)) {
                  _context2.next = 8;
                  break;
                }

                if (!confirm("一時保存をします。よろしいですか？")) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/shipping/susp", {
                  'isNew': this.isNew,
                  'sihRecord': this.sihRecord,
                  'sidRecords': this.sidRecords
                }).then(function (response) {
                  alert("保存しました。");

                  _this2.init(_this2.orderNo, "", "", "", "");
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function susp() {
        return _susp.apply(this, arguments);
      }

      return susp;
    }(),
    // 入力確定
    conf: function () {
      var _conf = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _this3 = this;

        var confFlg;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                confFlg = false; // 受注No.が確定していない為、必要。

                if (!this.isNew) {
                  _context3.next = 4;
                  break;
                }

                _context3.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/shipping/exis", {
                  'ORDER_NO': this.sihRecord.ORDER_NO,
                  'SHIP_DATE': this.sihRecord.SHIP_DATE
                }).then(function (response) {
                  if (response.data == true) {
                    // 番号の振り直しをメッセージする。
                    if (confirm("指定された受注No.は既に存在します。受注No.を振り直しますか？")) {
                      // 入力画面に遷移する。
                      _this3.modeRe = 'conf';

                      _this3.openInputShippingDialogRe();
                    } else {
                      return;
                    }
                  } else {
                    // 問題ない場合はそのまま登録する。
                    confFlg = true;
                  }
                });

              case 4:
                if (!(!this.isNew || confFlg)) {
                  _context3.next = 8;
                  break;
                }

                if (!confirm("入力確定をします。よろしいですか？")) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/shipping/conf", {
                  'isNew': this.isNew,
                  'sihRecord': this.sihRecord,
                  'sidRecords': this.sidRecords
                }).then(function (response) {
                  alert("確定しました。");

                  _this3.init(_this3.orderNo, "", "", "", "");
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function conf() {
        return _conf.apply(this, arguments);
      }

      return conf;
    }(),
    // 削除
    del: function () {
      var _del = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var _this4 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!confirm("本当に削除してもよろしいですか？")) {
                  _context4.next = 3;
                  break;
                }

                _context4.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().delete("/api/shipping/" + this.orderNo).then(function (response) {
                  alert("削除しました。");

                  _this4.back();
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function del() {
        return _del.apply(this, arguments);
      }

      return del;
    }(),
    // 指示書入力
    instructionPrint: function () {
      var _instructionPrint = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var _this5 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/shipping/conf", {
                  'isNew': this.isNew,
                  'sihRecord': this.sihRecord,
                  'sidRecords': this.sidRecords
                }).then(function (response) {
                  window.open("/shipping/instructionPrint/" + _this5.orderNo);

                  _this5.init(_this5.orderNo, "", "", "", "");
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function instructionPrint() {
        return _instructionPrint.apply(this, arguments);
      }

      return instructionPrint;
    }(),
    // 伝票印刷
    slipPrint: function () {
      var _slipPrint = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var _this6 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/shipping/conf", {
                  'isNew': this.isNew,
                  'sihRecord': this.sihRecord,
                  'sidRecords': this.sidRecords
                }).then(function (response) {
                  window.open("/shipping/slipPrint/" + _this6.orderNo);

                  _this6.init(_this6.orderNo, "", "", "", "");
                });

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function slipPrint() {
        return _slipPrint.apply(this, arguments);
      }

      return slipPrint;
    }(),
    // 日時フォーマット
    toDateTimeComp: function toDateTimeComp(dateObj) {
      if (dateObj == null) {
        return "";
      }

      var dateValue = dateObj.substr(0, 16).split("-").join("/");
      return dateValue;
    },
    // 在庫照会
    openStocksDetail: function openStocksDetail(itemCode) {
      if (_store__WEBPACK_IMPORTED_MODULE_3__.default.state.stocksDetailURL == null || _store__WEBPACK_IMPORTED_MODULE_3__.default.state.stocksDetailURL == "") {
        alert("在庫詳細のURLが設定されていません");
        return;
      }

      var linkURL = _store__WEBPACK_IMPORTED_MODULE_3__.default.state.stocksDetailURL;
      linkURL += "?sub=1";
      linkURL += "&ITEM_CODE=" + encodeURIComponent(itemCode);
      linkURL += "&WAREHOUSE_CODE=" + (this.sihRecord.WAREHOUSE_CODE == null || this.sihRecord.WAREHOUSE_CODE == "" ? "" : encodeURI(this.sihRecord.WAREHOUSE_CODE));
      linkURL += "&user_code=Nologin";
      window.open(linkURL, 'sub', 'width=600,height=400,scrollbars=yes');
    },
    //-------------------------------------------------------------------------
    // ダイアログのオープンクローズ
    //-------------------------------------------------------------------------
    opneCustomerSearchDialog: function opneCustomerSearchDialog() {
      this.showCustomerSearchDialog = true;
    },
    closeCustomerSearchDialog: function closeCustomerSearchDialog() {
      this.showCustomerSearchDialog = false;
    },
    opneDeliverySearchDialog: function opneDeliverySearchDialog() {
      this.showDeliverySearchDialog = true;
    },
    closeDeliverySearchDialog: function closeDeliverySearchDialog() {
      this.showDeliverySearchDialog = false;
    },
    opneDriverSearchDialog: function opneDriverSearchDialog() {
      this.showDriverSearchDialog = true;
    },
    closeDriverSearchDialog: function closeDriverSearchDialog() {
      this.showDriverSearchDialog = false;
    },
    opneSupplierSearchDialog: function opneSupplierSearchDialog() {
      this.showSupplierSearchDialog = true;
    },
    closeSupplierSearchDialog: function closeSupplierSearchDialog() {
      this.showSupplierSearchDialog = false;
    },
    opneWarehouseSearchDialog: function opneWarehouseSearchDialog(target) {
      this.showWarehouseSearchDialogTarget = target;
      this.showWarehouseSearchDialog = true;
    },
    closeWarehouseSearchDialog: function closeWarehouseSearchDialog() {
      this.showWarehouseSearchDialog = false;
    },
    opneItemSearchDialog: function opneItemSearchDialog(index) {
      this.showItemSearchDialogIndex = index;
      this.showItemSearchDialog = true;
    },
    closeItemSearchDialog: function closeItemSearchDialog() {
      this.showItemSearchDialog = false;
    },
    openInputShippingDialogCp: function openInputShippingDialogCp() {
      this.showInputShippingDialogCp = true;
    },
    closeInputShippingDialogCp: function closeInputShippingDialogCp() {
      this.showInputShippingDialogCp = false;
    },
    openInputShippingDialogRe: function openInputShippingDialogRe() {
      this.showInputShippingDialogRe = true;
    },
    closeInputShippingDialogRe: function closeInputShippingDialogRe() {
      this.showInputShippingDialogRe = false;
    },
    opneOfficeSearchDialog: function opneOfficeSearchDialog() {
      this.showOfficeSearchDialog = true;
    },
    closeOfficeSearchDialog: function closeOfficeSearchDialog() {
      this.showOfficeSearchDialog = false;
    },
    //-------------------------------------------------------------------------
    // ダイアログのオープンクローズ
    //-------------------------------------------------------------------------
    showInformation: function showInformation(event) {
      $(event.currentTarget).find("div.information").show();
    },
    hideInformation: function hideInformation(event) {
      $(event.currentTarget).find("div.information").hide();
    },
    //-------------------------------------------------------------------------
    // Code2Name
    //-------------------------------------------------------------------------
    // 得意先
    customerC2N: function customerC2N() {
      var that = this;
      var targetCustomers = this.mstCustomers.filter(function (row) {
        return row.CODE == that.sihRecord.CUSTOMER_CODE ? true : false;
      });

      if (targetCustomers.length > 0) {
        this.sihRecord.CUSTOMER_NAME = targetCustomers[0].NAME;
      } else {
        this.sihRecord.CUSTOMER_NAME = "";
      }
    },
    // 納入先
    deliveryC2N: function deliveryC2N() {
      //this.sihRecord.DELIVERY_CODE !=null ?this.sihRecord.DELIVERY_CODE.replace( /[^0-9]/g ,"" ):"";
      var that = this;
      var targetDeliveries = null; // 取区が通常の場合

      if (this.sihRecord.HCODE == 1 || this.sihRecord.HCODE == 4) {
        targetDeliveries = this.mstDeliveries.filter(function (row) {
          return row.CODE == that.sihRecord.DELIVERY_CODE ? true : false;
        });
      } // 取区が仕入・融通の場合


      if (this.sihRecord.HCODE != 1 && this.sihRecord.HCODE != 4) {
        targetDeliveries = this.mstWarehouses.filter(function (row) {
          return row.CODE == that.sihRecord.DELIVERY_CODE ? true : false;
        });
      }

      if (targetDeliveries != null && targetDeliveries.length > 0) {
        this.sihRecord.DELIVERY_NAME = targetDeliveries[0].NAME;
      } else {
        this.sihRecord.DELIVERY_NAME = "";
      }
    },
    // 相手営業所
    officeOtherC2N: function officeOtherC2N() {
      var that = this;
      var targetOffices = this.mstOffices.filter(function (row) {
        return row.CODE == that.sihRecord.OFFICE_OTHER_CODE ? true : false;
      });

      if (targetOffices.length > 0) {
        // 営業所コードを格納(仕入先/倉庫/運転手で使用する。)
        this.officeOtherCode = targetOffices[0].CODE;
        this.sihRecord.OFFICE_OTHER_NAME = targetOffices[0].NAME;
      } else {
        // デフォルト(自分自身)に戻す。
        this.officeOtherCode = this.officeCode;
        this.sihRecord.OFFICE_OTHER_NAME = "";
      }
    },
    // 仕入先
    supplierC2N: function supplierC2N() {
      var that = this;
      var targetSuppliers = this.mstSuppliers.filter(function (row) {
        return row.CODE == that.sihRecord.SUPPLIER_CODE ? true : false;
      });

      if (targetSuppliers.length > 0) {
        this.sihRecord.SUPPLIER_NAME = targetSuppliers[0].NAME;
      } else {
        this.sihRecord.SUPPLIER_NAME = "";
      }
    },
    // 倉庫
    warehouseC2N: function warehouseC2N() {
      var that = this;
      var targetWarehouses = this.mstWarehouses.filter(function (row) {
        return row.CODE == that.sihRecord.WAREHOUSE_CODE ? true : false;
      });

      if (targetWarehouses.length > 0) {
        this.sihRecord.WAREHOUSE_NAME = targetWarehouses[0].NAME;
      } else {
        this.sihRecord.WAREHOUSE_NAME = "";
      }
    },
    // 運転手
    driverC2N: function driverC2N() {
      var that = this;
      var targetDrivers = this.mstDrivers.filter(function (row) {
        return row.COMPANY_CODE == that.officeCode && row.CODE == that.sihRecord.DRIVER_CODE ? true : false;
      });

      if (targetDrivers.length > 0) {
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
    itemUpdate: function itemUpdate(index) {
      for (var count = 0; count < this.sidRecords.length; count++) {
        if (index != undefined) {
          if (index != count) {
            continue;
          }
        }

        if (this.sidRecords[count]["items_rel"] != null) {
          this.sidRecords[count].ITEM_NAME = this.sidRecords[count]["items_rel"].NAME;

          if (index != undefined) {
            this.sidRecords[count].QTY_PER_CTN = this.sidRecords[count]["items_rel"].QTY_PER_CTN;
          }

          if (this.sihRecord.LOADING_RATE == "1") {
            this.sidRecords[count].QTY_CTN2 = this.sidRecords[count]["items_rel"].RATE1;
          } else if (this.sihRecord.LOADING_RATE == "2") {
            this.sidRecords[count].QTY_CTN2 = this.sidRecords[count]["items_rel"].RATE2;
          } else if (this.sihRecord.LOADING_RATE == "3") {
            this.sidRecords[count].QTY_CTN2 = this.sidRecords[count]["items_rel"].RATE3;
          }
        } else {
          this.sidRecords[count].ITEM_NAME = null;
          this.sidRecords[count].QTY_PER_CTN = null;
          this.sidRecords[count].QTY_CTN2 = null;
        }
      }
    },
    //-------------------------------------------------------------------------
    // フォーカス外れ時イベント(4桁チェックなど)
    //-------------------------------------------------------------------------
    // 得意先(フォーカス外れ時イベント)
    customerBlur: function customerBlur() {
      if (this.sihRecord.CUSTOMER_CODE == null) {
        return;
      } //元値がnullでないもので且つ、元値と入力値が異なっていた場合のみ値の削除を行う。


      if (this.orgCustomerCode != null) {
        if (this.sihRecord.CUSTOMER_CODE != this.orgCustomerCode) {
          this.sihRecord.DELIVERY_CODE = "";
          this.sihRecord.DELIVERY_NAME = "";

          for (var count = 0; count < this.sidRecords.length; count++) {
            this.sidRecords[count].HCODE = null;
            this.sidRecords[count].ITEM_CODE = null;
            this.sidRecords[count].ITEM_NAME = null;
            this.sidRecords[count].QTY_PER_CTN = null;
            this.sidRecords[count].QTY_CTN = null;
            this.sidRecords[count].QTY = null;
            this.sidRecords[count].QTY_CTN2 = null;
            this.sidRecords[count].QTY2 = null; // 20220720_hash-shi_明細クリア_str------------
            // this.sidRecords[count].LOADING_PLACE = null;

            this.sidRecords[count].LOADING_PLACE_CODE = null;
            this.sidRecords[count].LOADING_PLACE_NAME = null; // 20220720_hash-shi_明細クリア_end------------

            this.sidRecords[count].REMARK1 = null;
            this.sidRecords[count].REMARK2 = null;
          } // 20220720_hash-shi_明細クリア_str------------


          this.sihRecord.CONTINUED_SHEET = null;
          this.sihRecord.CURRENT_SHEET = null;
          this.sihRecord.ALL_SHEET = null;
          this.sihRecord.INVOICE_NOTE = null;
          this.sihRecord.DELIVERY_NOTE = null;
          this.sihRecord.TAG_NOTE = null; // 20220720_hash-shi_明細クリア_end------------
        }
      } //元値を新しい値に変更する


      this.orgCustomerCode = this.sihRecord.CUSTOMER_CODE;

      if (1 <= this.sihRecord.CUSTOMER_CODE.length && this.sihRecord.CUSTOMER_CODE.length <= 4) {
        this.sihRecord.CUSTOMER_CODE = this.officeCode + this.sihRecord.CUSTOMER_CODE.padStart(4, '0');
        this.customerC2N();
      }
    },
    // 納入先(フォーカス外れ時イベント)
    deliveryBlur: function deliveryBlur() {
      if (this.sihRecord.DELIVERY_CODE == null) {
        return;
      } // 20220706_hash-shi_納入先変更で明細クリア_str------------
      // 元値がnullでないもので且つ、元値と入力値が異なっていた場合のみ値の削除を行う。


      if (this.orgDeliveryCode != null) {
        if (this.sihRecord.DELIVERY_CODE != this.orgDeliveryCode) {
          for (var count = 0; count < this.sidRecords.length; count++) {
            this.sidRecords[count].HCODE = null;
            this.sidRecords[count].ITEM_CODE = null;
            this.sidRecords[count].ITEM_NAME = null;
            this.sidRecords[count].QTY_PER_CTN = null;
            this.sidRecords[count].QTY_CTN = null;
            this.sidRecords[count].QTY = null;
            this.sidRecords[count].QTY_CTN2 = null;
            this.sidRecords[count].QTY2 = null; // 20220720_hash-shi_明細クリア_str------------
            // this.sidRecords[count].LOADING_PLACE = null;

            this.sidRecords[count].LOADING_PLACE_CODE = null;
            this.sidRecords[count].LOADING_PLACE_NAME = null; // 20220720_hash-shi_明細クリア_end------------

            this.sidRecords[count].REMARK1 = null;
            this.sidRecords[count].REMARK2 = null;
          } // 20220720_hash-shi_明細クリア_str------------


          this.sihRecord.CONTINUED_SHEET = null;
          this.sihRecord.CURRENT_SHEET = null;
          this.sihRecord.ALL_SHEET = null;
          this.sihRecord.INVOICE_NOTE = null;
          this.sihRecord.DELIVERY_NOTE = null;
          this.sihRecord.TAG_NOTE = null; // 20220720_hash-shi_明細クリア_end------------
        }
      } //元値を新しい値に変更する


      this.orgDeliveryCode = this.sihRecord.DELIVERY_CODE; // 20220706_hash-shi_納入先変更で明細クリア_end------------

      if (1 <= this.sihRecord.DELIVERY_CODE.length && this.sihRecord.DELIVERY_CODE.length <= 4) {
        this.sihRecord.DELIVERY_CODE = this.officeCode + this.sihRecord.DELIVERY_CODE.padStart(4, '0');
        ;
        this.deliveryC2N();
      }
    },
    // 相手営業所(フォーカス外れ時イベント)
    officeOtherBlur: function officeOtherBlur() {
      if (this.sihRecord.OFFICE_OTHER_CODE == null) {
        // デフォルト(自分自身)に戻す。
        this.officeOtherCode = this.officeCode;
        return;
      } // 元値がnullでないもので且つ、元値と入力値が異なっていた場合のみ値の削除を行う。


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
        }
      } //元値を新しい値に変更する


      this.orgOfficeOtherCode = this.sihRecord.OFFICE_OTHER_CODE;
      this.officeOtherC2N();
    },
    // 仕入先(フォーカス外れ時イベント)
    supplierBlur: function supplierBlur() {
      if (this.sihRecord.SUPPLIER_CODE == null) {
        return;
      }

      if (1 <= this.sihRecord.SUPPLIER_CODE.length && this.sihRecord.SUPPLIER_CODE.length <= 4) {
        this.sihRecord.SUPPLIER_CODE = this.officeOtherCode + this.sihRecord.SUPPLIER_CODE.padStart(4, '0');
        ;
        this.supplierC2N();
      }
    },
    // 倉庫(フォーカス外れ時イベント)
    warehouseBlur: function warehouseBlur() {
      if (this.sihRecord.WAREHOUSE_CODE == null) {
        return;
      }

      if (1 <= this.sihRecord.WAREHOUSE_CODE.length && this.sihRecord.WAREHOUSE_CODE.length <= 4) {
        this.sihRecord.WAREHOUSE_CODE = this.officeOtherCode + this.sihRecord.WAREHOUSE_CODE.padStart(4, '0');
        ;
        this.warehouseC2N();
      }
    },
    // 商品(フォーカス外れ時イベント)
    itemBlur: function () {
      var _itemBlur = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7(index) {
        var _this7 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(this.sidRecords[index].ITEM_CODE == null || this.sidRecords[index].ITEM_CODE == "")) {
                  _context7.next = 4;
                  break;
                }

                this.sidRecords[index]["items_rel"] = null;
                this.itemUpdate(index);
                return _context7.abrupt("return");

              case 4:
                _context7.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/master/items", {
                  'searchItemCode': this.sidRecords[index].ITEM_CODE,
                  'searchItemName': null,
                  'searchType': 1
                }).then(function (response) {
                  if (response.data.length > 0) {
                    _this7.sidRecords[index]["items_rel"] = response.data[0];
                  } else {
                    _this7.sidRecords[index]["items_rel"] = null;
                  }

                  _this7.itemUpdate(index);
                });

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function itemBlur(_x6) {
        return _itemBlur.apply(this, arguments);
      }

      return itemBlur;
    }(),
    // 20220720_hash-shi_積込場所名_str------------
    loadingPlacBlur: function () {
      var _loadingPlacBlur = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee8(index) {
        var count, places;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                // 選択したコードの積込場所名を表示する。
                for (count = 0; count < this.mstPlaces.length; count++) {
                  places = this.mstPlaces[count];

                  if (places["CODE"] === this.sidRecords[index].LOADING_PLACE_CODE) {
                    this.sidRecords[index].LOADING_PLACE_NAME = places["NAME"];
                  }
                }

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function loadingPlacBlur(_x7) {
        return _loadingPlacBlur.apply(this, arguments);
      }

      return loadingPlacBlur;
    }(),
    // 20220720_hash-shi_積込場所名_end------------
    //-------------------------------------------------------------------------
    // ダイアログで選択した値を反映
    //-------------------------------------------------------------------------
    // 得意先ダイアログで選択した得意先を格納してダイアログを閉じる
    selectCustomerDialog: function selectCustomerDialog(customerCode) {
      this.sihRecord.CUSTOMER_CODE = customerCode;
      this.closeCustomerSearchDialog();
      this.customerBlur();
      this.customerC2N();
    },
    // 納入先ダイアログで選択した得意先を格納してダイアログを閉じる
    selectDeliveryDialog: function selectDeliveryDialog(deliveryCode) {
      this.sihRecord.DELIVERY_CODE = deliveryCode;
      this.closeDeliverySearchDialog();
      this.deliveryBlur();
      this.deliveryC2N();
    },
    // 営業所ダイアログで選択した営業所を格納してダイアログを閉じる
    selectOfficeDialog: function selectOfficeDialog(officeCode) {
      this.sihRecord.OFFICE_OTHER_CODE = officeCode;
      this.closeOfficeSearchDialog();
      this.officeOtherBlur();
      this.officeOtherC2N();
    },
    // 仕入先ダイアログで選択した得意先を格納してダイアログを閉じる
    selectSupplierDialog: function selectSupplierDialog(supplierCode) {
      this.sihRecord.SUPPLIER_CODE = supplierCode;
      this.closeSupplierSearchDialog();
      this.supplierC2N();
    },
    // 倉庫ダイアログで選択した得意先を格納してダイアログを閉じる
    selectWarehouseDialog: function selectWarehouseDialog(warehouseCode) {
      if (this.showWarehouseSearchDialogTarget == "warehouse") {
        this.sihRecord.WAREHOUSE_CODE = warehouseCode;
        this.closeWarehouseSearchDialog();
        this.warehouseC2N();
      }

      if (this.showWarehouseSearchDialogTarget == "delivery") {
        this.sihRecord.DELIVERY_CODE = warehouseCode;
        this.closeWarehouseSearchDialog();
        this.deliveryC2N();
      }
    },
    // 運転手ダイアログで選択した得意先を格納してダイアログを閉じる
    selectDriverDialog: function selectDriverDialog(driverCode) {
      this.sihRecord.DRIVER_CODE = driverCode;
      this.closeDriverSearchDialog();
      this.driverC2N();
    },
    // 商品ダイアログで選択した得意先を格納してダイアログを閉じる
    selectItemDialog: function selectItemDialog(item) {
      this.sidRecords[this.showItemSearchDialogIndex].ITEM_CODE = item.CODE;
      this.sidRecords[this.showItemSearchDialogIndex]["items_rel"] = item;
      this.closeItemSearchDialog();
      this.itemUpdate(this.showItemSearchDialogIndex);
    },
    //-------------------------------------------------------------------------
    // 行操作
    //-------------------------------------------------------------------------
    // 上下入れ替え
    sidRowSwap: function sidRowSwap(index, mode) {
      if (index == 0 && mode == "up") {
        return;
      }

      if (index == 7 && mode == "down") {
        return;
      }

      if (mode == "down") {
        var baseRow = JSON.parse(JSON.stringify(this.sidRecords[index]));
        var targetRow = JSON.parse(JSON.stringify(this.sidRecords[index + 1]));
        this.sidRecords.splice(index, 1, targetRow);
        this.sidRecords.splice(index + 1, 1, baseRow);
      }

      if (mode == "up") {
        var baseRow = JSON.parse(JSON.stringify(this.sidRecords[index]));
        var targetRow = JSON.parse(JSON.stringify(this.sidRecords[index - 1]));
        this.sidRecords.splice(index, 1, targetRow);
        this.sidRecords.splice(index - 1, 1, baseRow);
      }
    },
    // 行の内容を削除
    sidRowDel: function sidRowDel(index) {
      for (var key in this.sidRecords[index]) {
        if (key != 'ORDER_NO' && key != 'RNO') {
          this.sidRecords[index][key] = null;
        }
      }
    },
    getItems: function () {
      var _getItems = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee9() {
        var _this8 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(this.sihRecord.HCODE == 1 || this.sihRecord.HCODE == 4)) {
                  _context9.next = 8;
                  break;
                }

                if (!(this.sihRecord.CUSTOMER_CODE == null || this.sihRecord.CUSTOMER_CODE == "")) {
                  _context9.next = 4;
                  break;
                }

                this.mstItems = [];
                return _context9.abrupt("return");

              case 4:
                _context9.next = 6;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/master/items', {
                  'searchHcode': this.sihRecord.HCODE,
                  'searchCustomerCode': this.sihRecord.CUSTOMER_CODE,
                  'searchDeliveryCode': this.sihRecord.DELIVERY_CODE
                }).then(function (response) {
                  _this8.mstItems = response.data;
                });

              case 6:
                _context9.next = 17;
                break;

              case 8:
                if (!(this.sihRecord.HCODE != 1 && this.sihRecord.HCODE != 4)) {
                  _context9.next = 16;
                  break;
                }

                if (!(this.sihRecord.SUPPLIER_CODE == null || this.sihRecord.SUPPLIER_CODE == "")) {
                  _context9.next = 12;
                  break;
                }

                this.mstItems = [];
                return _context9.abrupt("return");

              case 12:
                _context9.next = 14;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/master/items', {
                  'searchHcode': this.sihRecord.HCODE,
                  'searchSupplierCode': this.sihRecord.SUPPLIER_CODE
                }).then(function (response) {
                  _this8.mstItems = response.data;
                });

              case 14:
                _context9.next = 17;
                break;

              case 16:
                // それ意外はありえないが変な値が入ってもいやなので、空に初期化する
                this.mstItems = [];

              case 17:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getItems() {
        return _getItems.apply(this, arguments);
      }

      return getItems;
    }(),
    //-------------------------------------------------------------------------
    // 明細行の警告
    //-------------------------------------------------------------------------
    // 商品コードがデータリストに無い場合の警告
    itemWarning: function itemWarning(index) {
      var itemCode = this.sidRecords[index].ITEM_CODE;

      if (itemCode == null) {
        return false;
      }

      if (itemCode == "") {
        return false;
      }

      if (this.mstItems.filter(function (row) {
        return row.CODE == itemCode;
      }).length > 0) {
        return false;
      }

      return true;
    },
    // 商品コードがデータリストに無い場合の警告
    qtyPerCtnWarning: function qtyPerCtnWarning(index) {
      var qtyPerCtn = this.sidRecords[index].QTY_PER_CTN;

      if (qtyPerCtn == null) {
        return false;
      }

      if (qtyPerCtn == "") {
        return false;
      }

      if (this.sidRecords[index]["items_rel"] == null) {
        return false;
      }

      if (this.sidRecords[index]["items_rel"].QTY_PER_CTN == qtyPerCtn) {
        return false;
      }

      return true;
    },
    //コンマ表示関連
    //コンマ表示
    comma: function comma(value) {
      if (!value) return '';
      return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    },
    //コンマ除去
    delcomma: function delcomma(value) {
      if (!value) return '';
      return value.toString().replace(/,/g, '');
    }
  },
  //---------------------------------------------------------------------------
  //
  // 画面ロード時処理
  //
  //---------------------------------------------------------------------------
  mounted: function () {
    var _mounted = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee10() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              // 簡易ログインチェック
              if (_store__WEBPACK_IMPORTED_MODULE_3__.default.state.userCode == null) {
                _router__WEBPACK_IMPORTED_MODULE_2__.default.push({
                  path: "/sso"
                });
              } // //得意先の絞込
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


            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  watch: {
    $route: {
      handler: function handler() {
        //-------------------------------------------
        // 初期タブ制御
        //-------------------------------------------
        var target = this.$route.params.orderNo;
        var orderNo = "";
        var hCode = "";
        var shipDate = "";
        var userCode = "";
        var orderNoBase = "";

        if (target != null) {
          var targetSplit = target.split("_");

          if (targetSplit.length == 1) {
            // 修正
            orderNo = targetSplit[0];
          } else if (targetSplit.length == 4) {
            // 新規
            orderNo = targetSplit[0];
            hCode = targetSplit[1];
            shipDate = targetSplit[2];
            userCode = targetSplit[3];
          } else if (targetSplit.length == 5) {
            // 複写
            orderNo = targetSplit[0];
            hCode = targetSplit[1];
            shipDate = targetSplit[2];
            userCode = targetSplit[3];
            orderNoBase = targetSplit[4];
          } //-------------------------------------------
          // 初期データ取得
          //-------------------------------------------


          this.init(orderNo, hCode, shipDate, userCode, orderNoBase);
        }
      },
      immediate: true
    },
    'sihRecord.CUSTOMER_CODE': function () {
      var _sihRecordCUSTOMER_CODE = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee11(code) {
        var _this9 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/master/deliveries', {
                  'searchCustomerCode': code
                }).then(function (response) {
                  _this9.mstDeliveries = response.data;
                });

              case 2:
                _context11.next = 4;
                return this.getItems();

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function sihRecordCUSTOMER_CODE(_x8) {
        return _sihRecordCUSTOMER_CODE.apply(this, arguments);
      }

      return sihRecordCUSTOMER_CODE;
    }(),
    'sihRecord.DELIVERY_CODE': function () {
      var _sihRecordDELIVERY_CODE = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee12(code) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.getItems();

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function sihRecordDELIVERY_CODE(_x9) {
        return _sihRecordDELIVERY_CODE.apply(this, arguments);
      }

      return sihRecordDELIVERY_CODE;
    }(),
    'sihRecord.SUPPLIER_CODE': function () {
      var _sihRecordSUPPLIER_CODE = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee13(code) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.getItems();

              case 2:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function sihRecordSUPPLIER_CODE(_x10) {
        return _sihRecordSUPPLIER_CODE.apply(this, arguments);
      }

      return sihRecordSUPPLIER_CODE;
    }(),
    'sihRecord.LOADING_RATE': function () {
      var _sihRecordLOADING_RATE = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee14() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                this.itemUpdate();

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function sihRecordLOADING_RATE() {
        return _sihRecordLOADING_RATE.apply(this, arguments);
      }

      return sihRecordLOADING_RATE;
    }()
  },
  computed: {
    wariai: function wariai() {
      var wariai = 0;

      for (var count = 0; count < this.sidRecords.length; count++) {
        var sidRecord = this.sidRecords[count];
        wariai = wariai + sidRecord.QTY2;
      }

      return wariai.toFixed(1);
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    this.closeInputShippingDialogCp();
    next(); // this.load();
  },
  filters: {
    decimalFormat: function decimalFormat(value) {
      if (!value) return '';
      if (value == 0) return '';
      return Number(value).toFixed(1);
    },
    upperCase: function upperCase(value) {
      if (!value) return '';
      return value.toUpperCase();
    },
    comma: function comma(value) {
      if (!value) return '';
      return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Detail.vue?vue&type=style&index=0&id=5ef6da9a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Detail.vue?vue&type=style&index=0&id=5ef6da9a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ntd.warning[data-v-5ef6da9a] {\n\t\tbackground-color: yellow;\n}\ndiv.information[data-v-5ef6da9a] {\n\t\tposition: absolute;\n\t\twidth: 240px;\n\t\tbottom: 30px;\n\t\ttext-align: left;\n\t\tbackground-color: #ffffff;\n\t\tborder: 1px solid #000000;\n\t\tborder-radius: 3px;\n\t\tpadding: 5px;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 14px;\n\t\tmin-height: 28px;\n\t\tdisplay: none;\n}\n.showSmall[data-v-5ef6da9a]{\n\t\twidth:25px;\n\t\tfont-size:13px;\n}\n.delspinner[data-v-5ef6da9a]::-webkit-outer-spin-button,\n.delspinner[data-v-5ef6da9a]::-webkit-inner-spin-button {\n\t-webkit-appearance: none;\n\tmargin: 0;\n}\n.delspinner[data-v-5ef6da9a]{\n\t-moz-appearance:textfield;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Detail.vue?vue&type=style&index=0&id=5ef6da9a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Detail.vue?vue&type=style&index=0&id=5ef6da9a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_5ef6da9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=style&index=0&id=5ef6da9a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Detail.vue?vue&type=style&index=0&id=5ef6da9a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_5ef6da9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_5ef6da9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/pages/Detail.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Detail.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Detail_vue_vue_type_template_id_5ef6da9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=5ef6da9a&scoped=true& */ "./resources/js/pages/Detail.vue?vue&type=template&id=5ef6da9a&scoped=true&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "./resources/js/pages/Detail.vue?vue&type=script&lang=js&");
/* harmony import */ var _Detail_vue_vue_type_style_index_0_id_5ef6da9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detail.vue?vue&type=style&index=0&id=5ef6da9a&scoped=true&lang=css& */ "./resources/js/pages/Detail.vue?vue&type=style&index=0&id=5ef6da9a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Detail_vue_vue_type_template_id_5ef6da9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Detail_vue_vue_type_template_id_5ef6da9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5ef6da9a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Detail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Detail.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Detail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/Detail.vue?vue&type=style&index=0&id=5ef6da9a&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/Detail.vue?vue&type=style&index=0&id=5ef6da9a&scoped=true&lang=css& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_5ef6da9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=style&index=0&id=5ef6da9a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Detail.vue?vue&type=style&index=0&id=5ef6da9a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/pages/Detail.vue?vue&type=template&id=5ef6da9a&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Detail.vue?vue&type=template&id=5ef6da9a&scoped=true& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_5ef6da9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_5ef6da9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_5ef6da9a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Detail.vue?vue&type=template&id=5ef6da9a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Detail.vue?vue&type=template&id=5ef6da9a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Detail.vue?vue&type=template&id=5ef6da9a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Detail.vue?vue&type=template&id=5ef6da9a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.sihRecord != null
    ? _c(
        "div",
        [
          _c("input", {
            attrs: { type: "button", value: "メイン画面" },
            on: { click: _vm.back }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: {
              disabled:
                _vm.isNew &&
                !(_vm.sihRecord.STATUS == 1 || _vm.sihRecord.STATUS == 2),
              type: "button",
              value: "複写"
            },
            on: { click: _vm.copy }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: {
              disabled: !(
                _vm.sihRecord.STATUS == 0 ||
                _vm.sihRecord.STATUS == 0 ||
                _vm.sihRecord.STATUS == 99
              ),
              type: "button",
              value: "一時保存"
            },
            on: { click: _vm.susp }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: {
              disabled: !(
                _vm.sihRecord.STATUS == 0 ||
                _vm.sihRecord.STATUS == 1 ||
                _vm.sihRecord.STATUS == 99
              ),
              type: "button",
              value: "入力確定"
            },
            on: { click: _vm.conf }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: {
              disabled:
                _vm.isNew &&
                !(_vm.sihRecord.STATUS == 1 || _vm.sihRecord.STATUS == 1),
              type: "button",
              value: "削除"
            },
            on: { click: _vm.del }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: {
              disabled:
                _vm.isNew &&
                !(_vm.sihRecord.STATUS == 1 || _vm.sihRecord.STATUS == 2),
              type: "button",
              value: "指示書印刷"
            },
            on: { click: _vm.instructionPrint }
          }),
          _vm._v(" "),
          _c("input", {
            attrs: {
              disabled:
                _vm.isNew &&
                !(_vm.sihRecord.STATUS == 1 || _vm.sihRecord.STATUS == 2),
              type: "button",
              value: "伝票印刷"
            },
            on: { click: _vm.slipPrint }
          }),
          _vm._v(" "),
          _c("pre"),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [
              _vm._v("\n\t\t\t受付日時\n\t\t")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.ORDER_DATE,
                    expression: "sihRecord.ORDER_DATE"
                  }
                ],
                attrs: { type: "date", max: "9999-12-31" },
                domProps: { value: _vm.sihRecord.ORDER_DATE },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.sihRecord, "ORDER_DATE", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.ORDER_TIME,
                    expression: "sihRecord.ORDER_TIME"
                  }
                ],
                attrs: { type: "time", step: "3600" },
                domProps: { value: _vm.sihRecord.ORDER_TIME },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.sihRecord, "ORDER_TIME", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [
              _vm._v("\n\t\t\t受注者\n\t\t")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sihRecord.ORDER_USER,
                      expression: "sihRecord.ORDER_USER"
                    }
                  ],
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.sihRecord,
                        "ORDER_USER",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                _vm._l(_vm.mstUsers, function(user) {
                  return _c(
                    "option",
                    { key: user.CODE, domProps: { value: user.CODE } },
                    [_vm._v(_vm._s(user.CODE) + ":" + _vm._s(user.NAME))]
                  )
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [
              _vm._v("\n\t\t\t入力確定\n\t\t")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _vm.sihRecord.CONFIRM_DATE != null
                ? _c(
                    "div",
                    {
                      staticStyle: { display: "inline-block", width: "160px" }
                    },
                    [
                      _vm._v(
                        "\n\t\t\t\t" +
                          _vm._s(
                            _vm.toDateTimeComp(_vm.sihRecord.CONFIRM_DATE)
                          ) +
                          "\n\t\t\t"
                      )
                    ]
                  )
                : _c(
                    "div",
                    {
                      staticStyle: { display: "inline-block", width: "160px" }
                    },
                    [_vm._v("\n\t\t\t\t－\n\t\t\t")]
                  ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticStyle: {
                    display: "inline-block",
                    "margin-left": "30px"
                  }
                },
                [
                  _vm._v(
                    _vm._s(_vm.sihRecord.OFFICE_CODE) +
                      ":" +
                      _vm._s(_vm.sihRecord.OFFICE_NAME)
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("pre"),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("取区")]),
            _vm._v(" "),
            _c("div", { staticClass: "value w100" }, [
              _c("div", { staticStyle: { "font-weight": "bold" } }, [
                _vm._v(_vm._s(_vm.sihRecord.HNAME))
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("進捗")]),
            _vm._v(" "),
            _c("div", { staticClass: "value w100" }, [
              _c("div", { staticStyle: { "font-weight": "bold" } }, [
                _vm._v(_vm._s(_vm.sihRecord.SNAME))
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("指示書")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("label", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sihRecord.KARI,
                      expression: "sihRecord.KARI"
                    }
                  ],
                  attrs: { type: "checkbox", name: "check" },
                  domProps: {
                    checked: Array.isArray(_vm.sihRecord.KARI)
                      ? _vm._i(_vm.sihRecord.KARI, null) > -1
                      : _vm.sihRecord.KARI
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.sihRecord.KARI,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(_vm.sihRecord, "KARI", $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.sihRecord,
                              "KARI",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(_vm.sihRecord, "KARI", $$c)
                      }
                    }
                  }
                }),
                _vm._v("仮")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("受注No.")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.ORDER_NO,
                    expression: "sihRecord.ORDER_NO"
                  }
                ],
                attrs: { type: "text", size: "10", disabled: true },
                domProps: { value: _vm.sihRecord.ORDER_NO },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.sihRecord, "ORDER_NO", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("発注者")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sihRecord.ORDER2_USER,
                      expression: "sihRecord.ORDER2_USER"
                    }
                  ],
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.sihRecord,
                        "ORDER2_USER",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                _vm._l(_vm.mstUsers, function(user) {
                  return _c(
                    "option",
                    { key: user.CODE, domProps: { value: user.CODE } },
                    [_vm._v(_vm._s(user.CODE) + ":" + _vm._s(user.NAME))]
                  )
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("出荷日")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.SHIP_DATE,
                    expression: "sihRecord.SHIP_DATE"
                  }
                ],
                attrs: { type: "date", max: "9999-12-31", name: "example" },
                domProps: { value: _vm.sihRecord.SHIP_DATE },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.sihRecord, "SHIP_DATE", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("納品日")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.DELIVERY_DATE,
                    expression: "sihRecord.DELIVERY_DATE"
                  }
                ],
                attrs: { type: "date", name: "example", max: "9999-12-31" },
                domProps: { value: _vm.sihRecord.DELIVERY_DATE },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.sihRecord,
                      "DELIVERY_DATE",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _c("label", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sihRecord.DELIVERY_AMPM,
                      expression: "sihRecord.DELIVERY_AMPM"
                    }
                  ],
                  attrs: { type: "radio", name: "r1", value: "3" },
                  domProps: {
                    checked: _vm._q(_vm.sihRecord.DELIVERY_AMPM, "3")
                  },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.sihRecord, "DELIVERY_AMPM", "3")
                    }
                  }
                }),
                _vm._v("無指定")
              ]),
              _vm._v(" "),
              _c("label", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sihRecord.DELIVERY_AMPM,
                      expression: "sihRecord.DELIVERY_AMPM"
                    }
                  ],
                  attrs: { type: "radio", name: "r1", value: "1" },
                  domProps: {
                    checked: _vm._q(_vm.sihRecord.DELIVERY_AMPM, "1")
                  },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.sihRecord, "DELIVERY_AMPM", "1")
                    }
                  }
                }),
                _vm._v("AM")
              ]),
              _vm._v(" "),
              _c("label", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sihRecord.DELIVERY_AMPM,
                      expression: "sihRecord.DELIVERY_AMPM"
                    }
                  ],
                  attrs: { type: "radio", name: "r1", value: "2" },
                  domProps: {
                    checked: _vm._q(_vm.sihRecord.DELIVERY_AMPM, "2")
                  },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.sihRecord, "DELIVERY_AMPM", "2")
                    }
                  }
                }),
                _vm._v("PM")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.DELIVERY_TIME,
                    expression: "sihRecord.DELIVERY_TIME"
                  }
                ],
                attrs: {
                  type: "time",
                  disabled: !(
                    _vm.sihRecord.DELIVERY_AMPM == 1 ||
                    _vm.sihRecord.DELIVERY_AMPM == 2
                  )
                },
                domProps: { value: _vm.sihRecord.DELIVERY_TIME },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.sihRecord,
                      "DELIVERY_TIME",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("相手営業所")]),
            _vm._v(" "),
            _vm.sihRecord.HCODE == 4 ||
            _vm.sihRecord.HCODE == 5 ||
            _vm.sihRecord.HCODE == 6
              ? _c(
                  "div",
                  { staticClass: "value" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sihRecord.OFFICE_OTHER_CODE,
                          expression: "sihRecord.OFFICE_OTHER_CODE"
                        }
                      ],
                      attrs: { type: "text", size: "6", list: "offices" },
                      domProps: { value: _vm.sihRecord.OFFICE_OTHER_CODE },
                      on: {
                        keyup: function($event) {
                          return _vm.officeOtherC2N()
                        },
                        blur: function($event) {
                          return _vm.officeOtherBlur()
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.sihRecord,
                            "OFFICE_OTHER_CODE",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("font-awesome-icon", {
                      staticStyle: { cursor: "pointer" },
                      attrs: { icon: "times" },
                      on: {
                        click: function($event) {
                          _vm.sihRecord.OFFICE_OTHER_CODE = ""
                          _vm.officeOtherC2N()
                          _vm.officeOtherBlur()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("font-awesome-icon", {
                      staticStyle: { cursor: "pointer" },
                      attrs: { icon: "search" },
                      on: {
                        click: function($event) {
                          return _vm.opneOfficeSearchDialog()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sihRecord.OFFICE_OTHER_NAME,
                          expression: "sihRecord.OFFICE_OTHER_NAME"
                        }
                      ],
                      attrs: { type: "text", size: "50", disabled: "" },
                      domProps: { value: _vm.sihRecord.OFFICE_OTHER_NAME },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.sihRecord,
                            "OFFICE_OTHER_NAME",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c(
              "div",
              {
                staticClass: "title",
                on: {
                  mouseover: _vm.showInformation,
                  mouseout: _vm.hideInformation
                }
              },
              [
                _vm._v("得意先\n\t\t\t"),
                _c("div", { staticClass: "information" }, [
                  _vm._v("得意先を指定してください。")
                ])
              ]
            ),
            _vm._v(" "),
            _vm.sihRecord.HCODE == 1 || _vm.sihRecord.HCODE == 4
              ? _c(
                  "div",
                  { staticClass: "value" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sihRecord.CUSTOMER_CODE,
                          expression: "sihRecord.CUSTOMER_CODE"
                        }
                      ],
                      attrs: { type: "text", size: "6", list: "customers" },
                      domProps: { value: _vm.sihRecord.CUSTOMER_CODE },
                      on: {
                        keyup: function($event) {
                          return _vm.customerC2N()
                        },
                        blur: function($event) {
                          return _vm.customerBlur()
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.sihRecord,
                            "CUSTOMER_CODE",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("font-awesome-icon", {
                      staticStyle: { cursor: "pointer" },
                      attrs: { icon: "times" },
                      on: {
                        click: function($event) {
                          _vm.sihRecord.CUSTOMER_CODE = ""
                          _vm.customerC2N()
                          _vm.customerBlur()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("font-awesome-icon", {
                      staticStyle: { cursor: "pointer" },
                      attrs: { icon: "search" },
                      on: {
                        click: function($event) {
                          return _vm.opneCustomerSearchDialog()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sihRecord.CUSTOMER_NAME,
                          expression: "sihRecord.CUSTOMER_NAME"
                        }
                      ],
                      attrs: { type: "text", size: "50", disabled: "" },
                      domProps: { value: _vm.sihRecord.CUSTOMER_NAME },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.sihRecord,
                            "CUSTOMER_NAME",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c(
              "div",
              {
                staticClass: "title",
                on: {
                  mouseover: _vm.showInformation,
                  mouseout: _vm.hideInformation
                }
              },
              [_vm._v("納／倉\n\t\t\t"), _vm._m(0)]
            ),
            _vm._v(" "),
            _vm.sihRecord.HCODE == 1 || _vm.sihRecord.HCODE == 4
              ? _c(
                  "div",
                  { staticClass: "value" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sihRecord.DELIVERY_CODE,
                          expression: "sihRecord.DELIVERY_CODE"
                        }
                      ],
                      attrs: {
                        type: "text",
                        size: "6",
                        list: "delivery_destinations"
                      },
                      domProps: { value: _vm.sihRecord.DELIVERY_CODE },
                      on: {
                        keyup: function($event) {
                          return _vm.deliveryC2N()
                        },
                        blur: function($event) {
                          return _vm.deliveryBlur()
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.sihRecord,
                            "DELIVERY_CODE",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("font-awesome-icon", {
                      staticStyle: { cursor: "pointer" },
                      attrs: { icon: "times" },
                      on: {
                        click: function($event) {
                          _vm.sihRecord.DELIVERY_CODE = ""
                          _vm.deliveryC2N()
                          _vm.deliveryBlur()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("font-awesome-icon", {
                      staticStyle: { cursor: "pointer" },
                      attrs: { icon: "search" },
                      on: {
                        click: function($event) {
                          return _vm.opneDeliverySearchDialog()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sihRecord.DELIVERY_NAME,
                          expression: "sihRecord.DELIVERY_NAME"
                        }
                      ],
                      attrs: { type: "text", size: "50", disabled: "" },
                      domProps: { value: _vm.sihRecord.DELIVERY_NAME },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.sihRecord,
                            "DELIVERY_NAME",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.sihRecord.HCODE != 1 && _vm.sihRecord.HCODE != 4
              ? _c(
                  "div",
                  { staticClass: "value" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sihRecord.DELIVERY_CODE,
                          expression: "sihRecord.DELIVERY_CODE"
                        }
                      ],
                      attrs: {
                        type: "text",
                        size: "6",
                        list: "delivery_destinations"
                      },
                      domProps: { value: _vm.sihRecord.DELIVERY_CODE },
                      on: {
                        keyup: function($event) {
                          return _vm.deliveryC2N()
                        },
                        blur: function($event) {
                          return _vm.deliveryBlur()
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.sihRecord,
                            "DELIVERY_CODE",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("font-awesome-icon", {
                      staticStyle: { cursor: "pointer" },
                      attrs: { icon: "times" },
                      on: {
                        click: function($event) {
                          _vm.sihRecord.DELIVERY_CODE = ""
                          _vm.deliveryC2N()
                          _vm.deliveryBlur()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("font-awesome-icon", {
                      staticStyle: { cursor: "pointer" },
                      attrs: { icon: "search" },
                      on: {
                        click: function($event) {
                          return _vm.opneWarehouseSearchDialog("delivery")
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sihRecord.DELIVERY_NAME,
                          expression: "sihRecord.DELIVERY_NAME"
                        }
                      ],
                      attrs: { type: "text", size: "50", disabled: "" },
                      domProps: { value: _vm.sihRecord.DELIVERY_NAME },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.sihRecord,
                            "DELIVERY_NAME",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c(
              "div",
              {
                staticClass: "title",
                on: {
                  mouseover: _vm.showInformation,
                  mouseout: _vm.hideInformation
                }
              },
              [
                _vm._v("仕入先\n\t\t\t"),
                _c("div", { staticClass: "information" }, [
                  _vm._v("仕入先を指定してください。")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "value" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sihRecord.SUPPLIER_CODE,
                      expression: "sihRecord.SUPPLIER_CODE"
                    }
                  ],
                  attrs: { type: "text", size: "6", list: "suppliers" },
                  domProps: { value: _vm.sihRecord.SUPPLIER_CODE },
                  on: {
                    keyup: function($event) {
                      return _vm.supplierC2N()
                    },
                    blur: function($event) {
                      return _vm.supplierBlur()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.sihRecord,
                        "SUPPLIER_CODE",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("font-awesome-icon", {
                  staticStyle: { cursor: "pointer" },
                  attrs: { icon: "times" },
                  on: {
                    click: function($event) {
                      _vm.sihRecord.SUPPLIER_CODE = ""
                      _vm.supplierC2N()
                      _vm.supplierBlur()
                    }
                  }
                }),
                _vm._v(" "),
                _c("font-awesome-icon", {
                  staticStyle: { cursor: "pointer" },
                  attrs: { icon: "search" },
                  on: {
                    click: function($event) {
                      return _vm.opneSupplierSearchDialog()
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sihRecord.SUPPLIER_NAME,
                      expression: "sihRecord.SUPPLIER_NAME"
                    }
                  ],
                  attrs: { type: "text", size: "50", disabled: "" },
                  domProps: { value: _vm.sihRecord.SUPPLIER_NAME },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.sihRecord,
                        "SUPPLIER_NAME",
                        $event.target.value
                      )
                    }
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c(
              "div",
              {
                staticClass: "title",
                on: {
                  mouseover: _vm.showInformation,
                  mouseout: _vm.hideInformation
                }
              },
              [_vm._v("倉庫\n\t\t\t"), _vm._m(1)]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "value" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sihRecord.WAREHOUSE_CODE,
                      expression: "sihRecord.WAREHOUSE_CODE"
                    }
                  ],
                  attrs: { type: "text", size: "6", list: "warehouses" },
                  domProps: { value: _vm.sihRecord.WAREHOUSE_CODE },
                  on: {
                    keyup: function($event) {
                      return _vm.warehouseC2N()
                    },
                    blur: function($event) {
                      return _vm.warehouseBlur()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.sihRecord,
                        "WAREHOUSE_CODE",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("font-awesome-icon", {
                  staticStyle: { cursor: "pointer" },
                  attrs: { icon: "times" },
                  on: {
                    click: function($event) {
                      _vm.sihRecord.WAREHOUSE_CODE = ""
                      _vm.warehouseC2N()
                      _vm.warehouseBlur()
                    }
                  }
                }),
                _vm._v(" "),
                _c("font-awesome-icon", {
                  staticStyle: { cursor: "pointer" },
                  attrs: { icon: "search" },
                  on: {
                    click: function($event) {
                      return _vm.opneWarehouseSearchDialog("warehouse")
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sihRecord.WAREHOUSE_NAME,
                      expression: "sihRecord.WAREHOUSE_NAME"
                    }
                  ],
                  attrs: { type: "text", size: "50", disabled: "" },
                  domProps: { value: _vm.sihRecord.WAREHOUSE_NAME },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.sihRecord,
                        "WAREHOUSE_NAME",
                        $event.target.value
                      )
                    }
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("運転手")]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "value" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sihRecord.DRIVER_CODE,
                      expression: "sihRecord.DRIVER_CODE"
                    }
                  ],
                  attrs: { type: "text", size: "6", list: "drivers" },
                  domProps: { value: _vm.sihRecord.DRIVER_CODE },
                  on: {
                    keyup: function($event) {
                      return _vm.driverC2N()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.sihRecord,
                        "DRIVER_CODE",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("font-awesome-icon", {
                  staticStyle: { cursor: "pointer" },
                  attrs: { icon: "times" },
                  on: {
                    click: function($event) {
                      _vm.sihRecord.DRIVER_CODE = ""
                      _vm.driverC2N()
                    }
                  }
                }),
                _vm._v(" "),
                _c("font-awesome-icon", {
                  staticStyle: { cursor: "pointer" },
                  attrs: { icon: "search" },
                  on: {
                    click: function($event) {
                      return _vm.opneDriverSearchDialog()
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sihRecord.DRIVER_NAME,
                      expression: "sihRecord.DRIVER_NAME"
                    }
                  ],
                  attrs: { type: "text", disabled: "" },
                  domProps: { value: _vm.sihRecord.DRIVER_NAME },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.sihRecord,
                        "DRIVER_NAME",
                        $event.target.value
                      )
                    }
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("運送会社")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.TRUCKER_CODE,
                    expression: "sihRecord.TRUCKER_CODE"
                  }
                ],
                attrs: { type: "text", size: "10", disabled: "" },
                domProps: { value: _vm.sihRecord.TRUCKER_CODE },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.sihRecord, "TRUCKER_CODE", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.TRUCKER_NAME,
                    expression: "sihRecord.TRUCKER_NAME"
                  }
                ],
                attrs: { type: "text", disabled: "" },
                domProps: { value: _vm.sihRecord.TRUCKER_NAME },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.sihRecord, "TRUCKER_NAME", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("便区分")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.FLIGHTS,
                    expression: "sihRecord.FLIGHTS"
                  }
                ],
                attrs: { type: "text", size: "5" },
                domProps: { value: _vm.sihRecord.FLIGHTS },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.sihRecord, "FLIGHTS", $event.target.value)
                  }
                }
              }),
              _vm._v("\n\t\t\t回目\n\t\t")
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("運賃")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.FEE,
                    expression: "sihRecord.FEE"
                  }
                ],
                staticClass: "right",
                attrs: { type: "text", size: "10" },
                domProps: { value: _vm.sihRecord.FEE },
                on: {
                  blur: function($event) {
                    _vm.sihRecord.FEE = _vm.comma(_vm.sihRecord.FEE)
                  },
                  focus: function($event) {
                    _vm.sihRecord.FEE = _vm.delcomma(_vm.sihRecord.FEE)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.sihRecord, "FEE", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("付加")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.ADD_FEE,
                    expression: "sihRecord.ADD_FEE"
                  }
                ],
                staticClass: "right",
                attrs: { type: "text", size: "10" },
                domProps: { value: _vm.sihRecord.ADD_FEE },
                on: {
                  blur: function($event) {
                    _vm.sihRecord.ADD_FEE = _vm.comma(_vm.sihRecord.ADD_FEE)
                  },
                  focus: function($event) {
                    _vm.sihRecord.ADD_FEE = _vm.delcomma(_vm.sihRecord.ADD_FEE)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.sihRecord, "ADD_FEE", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("有料道路代")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.HIGHWAY_FEE,
                    expression: "sihRecord.HIGHWAY_FEE"
                  }
                ],
                staticClass: "right",
                attrs: { type: "text", size: "10" },
                domProps: { value: _vm.sihRecord.HIGHWAY_FEE },
                on: {
                  blur: function($event) {
                    _vm.sihRecord.HIGHWAY_FEE = _vm.comma(
                      _vm.sihRecord.HIGHWAY_FEE
                    )
                  },
                  focus: function($event) {
                    _vm.sihRecord.HIGHWAY_FEE = _vm.delcomma(
                      _vm.sihRecord.HIGHWAY_FEE
                    )
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.sihRecord, "HIGHWAY_FEE", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("運賃振替")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("label", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sihRecord.FEE_CLASS,
                      expression: "sihRecord.FEE_CLASS"
                    }
                  ],
                  attrs: { type: "radio", name: "radio", value: "1" },
                  domProps: { checked: _vm._q(_vm.sihRecord.FEE_CLASS, "1") },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.sihRecord, "FEE_CLASS", "1")
                    }
                  }
                }),
                _vm._v("他")
              ]),
              _vm._v(" "),
              _c("label", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sihRecord.FEE_CLASS,
                      expression: "sihRecord.FEE_CLASS"
                    }
                  ],
                  attrs: { type: "radio", name: "radio", value: "2" },
                  domProps: { checked: _vm._q(_vm.sihRecord.FEE_CLASS, "2") },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.sihRecord, "FEE_CLASS", "2")
                    }
                  }
                }),
                _vm._v("自")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("pre"),
          _vm._v(" "),
          _c(
            "table",
            { staticClass: "searchResult", staticStyle: { width: "1330px" } },
            [
              _vm._m(2),
              _vm._v(" "),
              _vm._l(_vm.sidRecords, function(sidRecord, index) {
                return _c("tr", { key: index }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: sidRecord.HCODE,
                            expression: "sidRecord.HCODE"
                          }
                        ],
                        staticStyle: { width: "40px" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              sidRecord,
                              "HCODE",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.mstHCodesD, function(hcodeD) {
                        return _c(
                          "option",
                          {
                            key: hcodeD.CODE,
                            domProps: { value: hcodeD.CODE }
                          },
                          [
                            _vm._v(
                              _vm._s(hcodeD.CODE) + " " + _vm._s(hcodeD.NAME)
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { class: { warning: _vm.itemWarning(index) } },
                    [
                      _c("input", {
                        attrs: { type: "text", size: "16", list: "items_rel" },
                        domProps: {
                          value: _vm._f("upperCase")(sidRecord.ITEM_CODE)
                        },
                        on: {
                          input: function($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "lazy",
                                undefined,
                                $event.key,
                                undefined
                              )
                            ) {
                              return null
                            }
                            sidRecord.ITEM_CODE = $event.target.value.toUpperCase()
                          },
                          blur: function($event) {
                            return _vm.itemBlur(index)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("font-awesome-icon", {
                        staticStyle: { cursor: "pointer" },
                        attrs: { icon: "times" },
                        on: {
                          click: function($event) {
                            sidRecord.ITEM_CODE = ""
                            _vm.itemBlur(index)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("font-awesome-icon", {
                        staticStyle: { cursor: "pointer" },
                        attrs: { icon: "search" },
                        on: {
                          click: function($event) {
                            return _vm.opneItemSearchDialog(index)
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c("font-awesome-icon", {
                        staticStyle: { cursor: "pointer" },
                        attrs: { icon: "arrow-up" },
                        on: {
                          click: function($event) {
                            return _vm.sidRowSwap(index, "up")
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("font-awesome-icon", {
                        staticStyle: { cursor: "pointer" },
                        attrs: { icon: "arrow-down" },
                        on: {
                          click: function($event) {
                            return _vm.sidRowSwap(index, "down")
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("font-awesome-icon", {
                        staticStyle: { cursor: "pointer" },
                        attrs: { icon: "trash" },
                        on: {
                          click: function($event) {
                            return _vm.sidRowDel(index)
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", [
                    sidRecord.ITEM_NAME != null
                      ? _c(
                          "div",
                          {
                            staticStyle: {
                              "text-decoration": "underline",
                              color: "#0000ff",
                              cursor: "pointer"
                            },
                            on: {
                              click: function($event) {
                                return _vm.openStocksDetail(sidRecord.ITEM_CODE)
                              }
                            }
                          },
                          [_vm._v(_vm._s(sidRecord.ITEM_NAME))]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { class: { warning: _vm.qtyPerCtnWarning(index) } },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: sidRecord.QTY_PER_CTN,
                            expression: "sidRecord.QTY_PER_CTN"
                          }
                        ],
                        staticClass: "delspinner",
                        staticStyle: { "text-align": "right", width: "50px" },
                        attrs: { type: "number", size: "5" },
                        domProps: { value: sidRecord.QTY_PER_CTN },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              sidRecord,
                              "QTY_PER_CTN",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: sidRecord.QTY_CTN,
                          expression: "sidRecord.QTY_CTN"
                        }
                      ],
                      staticStyle: { "text-align": "right", width: "50px" },
                      attrs: { type: "number", size: "5" },
                      domProps: { value: sidRecord.QTY_CTN },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(sidRecord, "QTY_CTN", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "right" }, [
                    _vm._v(
                      _vm._s(
                        _vm._f("comma")(
                          (sidRecord.QTY =
                            sidRecord.QTY_PER_CTN * sidRecord.QTY_CTN == 0
                              ? ""
                              : sidRecord.QTY_PER_CTN * sidRecord.QTY_CTN)
                        )
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "right showSmall" }, [
                    _vm._v(_vm._s(_vm._f("decimalFormat")(sidRecord.QTY_CTN2)))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "right showSmall" }, [
                    _vm._v(
                      _vm._s(
                        _vm._f("decimalFormat")(
                          (sidRecord.QTY2 =
                            sidRecord.QTY_CTN * sidRecord.QTY_CTN2)
                        )
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "center" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: sidRecord.LOADING_PLACE_CODE,
                            expression: "sidRecord.LOADING_PLACE_CODE"
                          }
                        ],
                        staticStyle: { width: "40px" },
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                sidRecord,
                                "LOADING_PLACE_CODE",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            function($event) {
                              return _vm.loadingPlacBlur(index)
                            }
                          ]
                        }
                      },
                      _vm._l(_vm.mstPlaces, function(place) {
                        return _c(
                          "option",
                          { key: place.CODE, domProps: { value: place.CODE } },
                          [
                            _vm._v(
                              _vm._s(place.CODE) + " " + _vm._s(place.NAME)
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: sidRecord.LOADING_PLACE_NAME,
                          expression: "sidRecord.LOADING_PLACE_NAME"
                        }
                      ],
                      attrs: { type: "text", size: "10" },
                      domProps: { value: sidRecord.LOADING_PLACE_NAME },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            sidRecord,
                            "LOADING_PLACE_NAME",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: sidRecord.REMARK1,
                          expression: "sidRecord.REMARK1"
                        }
                      ],
                      attrs: { type: "text", size: "", list: "remark" },
                      domProps: { value: sidRecord.REMARK1 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(sidRecord, "REMARK1", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "datalist",
                      { attrs: { id: "remark" } },
                      _vm._l(_vm.mstRemarks, function(remark, index) {
                        return _c("option", { key: index }, [
                          _vm._v(_vm._s(remark.name))
                        ])
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: sidRecord.REMARK2,
                          expression: "sidRecord.REMARK2"
                        }
                      ],
                      attrs: { type: "text", size: "", list: "remark" },
                      domProps: { value: sidRecord.REMARK2 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(sidRecord, "REMARK2", $event.target.value)
                        }
                      }
                    })
                  ])
                ])
              }),
              _vm._v(" "),
              _c("tr", [
                _c("td", { attrs: { colspan: "8" } }),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.wariai,
                        expression: "wariai"
                      }
                    ],
                    staticClass: "showSmall",
                    attrs: { type: "text", disabled: "", name: "" },
                    domProps: { value: _vm.wariai },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.wariai = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("td", { attrs: { colspan: "4" } })
              ])
            ],
            2
          ),
          _vm._v(" "),
          _c("pre", [_vm._v("　")]),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("続き")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.CONTINUED_SHEET,
                    expression: "sihRecord.CONTINUED_SHEET"
                  }
                ],
                attrs: { type: "radio", name: "r3", value: "1" },
                domProps: {
                  checked: _vm._q(_vm.sihRecord.CONTINUED_SHEET, "1")
                },
                on: {
                  change: function($event) {
                    return _vm.$set(_vm.sihRecord, "CONTINUED_SHEET", "1")
                  }
                }
              }),
              _vm._v("有\n\t\t\t"),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.CONTINUED_SHEET,
                    expression: "sihRecord.CONTINUED_SHEET"
                  }
                ],
                attrs: { type: "radio", name: "r3", value: "2" },
                domProps: {
                  checked: _vm._q(_vm.sihRecord.CONTINUED_SHEET, "2")
                },
                on: {
                  change: function($event) {
                    return _vm.$set(_vm.sihRecord, "CONTINUED_SHEET", "2")
                  }
                }
              }),
              _vm._v("無\n\t\t\t"),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.CURRENT_SHEET,
                    expression: "sihRecord.CURRENT_SHEET"
                  }
                ],
                staticClass: "w40 delspinner",
                attrs: { type: "number", size: "1", name: "" },
                domProps: { value: _vm.sihRecord.CURRENT_SHEET },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.sihRecord,
                      "CURRENT_SHEET",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v("枚目\n\t\t\t"),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.ALL_SHEET,
                    expression: "sihRecord.ALL_SHEET"
                  }
                ],
                staticClass: "w40 delspinner",
                attrs: { type: "number", size: "1", name: "" },
                domProps: { value: _vm.sihRecord.ALL_SHEET },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.sihRecord, "ALL_SHEET", $event.target.value)
                  }
                }
              }),
              _vm._v("枚中\n\t\t\t割合"),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.wariai,
                    expression: "wariai"
                  }
                ],
                attrs: { type: "text", disabled: "", name: "" },
                domProps: { value: _vm.wariai },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.wariai = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("送り状記事")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.INVOICE_NOTE,
                    expression: "sihRecord.INVOICE_NOTE"
                  }
                ],
                attrs: {
                  type: "text",
                  size: "120",
                  placeholder: "送り状に記事がある場合はここに入力"
                },
                domProps: { value: _vm.sihRecord.INVOICE_NOTE },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.sihRecord, "INVOICE_NOTE", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("納品書記事")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.DELIVERY_NOTE,
                    expression: "sihRecord.DELIVERY_NOTE"
                  }
                ],
                attrs: {
                  type: "text",
                  size: "120",
                  placeholder: "納品書に記事がある場合はここに入力"
                },
                domProps: { value: _vm.sihRecord.DELIVERY_NOTE },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.sihRecord,
                      "DELIVERY_NOTE",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "tv" }, [
            _c("div", { staticClass: "title" }, [_vm._v("付箋")]),
            _vm._v(" "),
            _c("div", { staticClass: "value" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.sihRecord.TAG_NOTE,
                    expression: "sihRecord.TAG_NOTE"
                  }
                ],
                attrs: {
                  type: "text",
                  size: "120",
                  placeholder: "ここに何か入力すると付箋になります。"
                },
                domProps: { value: _vm.sihRecord.TAG_NOTE },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.sihRecord, "TAG_NOTE", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _vm.showCustomerSearchDialog
            ? _c("CustomerSearchDialog", {
                attrs: {
                  officeCode: this.officeCode,
                  hCode: _vm.sihRecord.HCODE
                },
                on: {
                  close: _vm.closeCustomerSearchDialog,
                  select: _vm.selectCustomerDialog
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showDeliverySearchDialog
            ? _c("DeliverySearchDialog", {
                attrs: {
                  officeCode: this.officeCode,
                  hCode: _vm.sihRecord.HCODE,
                  customerCode: _vm.sihRecord.CUSTOMER_CODE
                },
                on: {
                  close: _vm.closeDeliverySearchDialog,
                  select: _vm.selectDeliveryDialog
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showSupplierSearchDialog
            ? _c("SupplierSearchDialog", {
                attrs: {
                  officeCode: this.officeOtherCode,
                  hCode: _vm.sihRecord.HCODE
                },
                on: {
                  close: _vm.closeSupplierSearchDialog,
                  select: _vm.selectSupplierDialog
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showWarehouseSearchDialog
            ? _c("WarehouseSearchDialog", {
                attrs: {
                  officeCode: this.officeOtherCode,
                  hCode: _vm.sihRecord.HCODE
                },
                on: {
                  close: _vm.closeWarehouseSearchDialog,
                  select: _vm.selectWarehouseDialog
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showDriverSearchDialog
            ? _c("DriverSearchDialog", {
                attrs: {
                  officeCode: this.officeCode,
                  officeOtherCode: this.officeOtherCode,
                  hCode: _vm.sihRecord.HCODE
                },
                on: {
                  close: _vm.closeDriverSearchDialog,
                  select: _vm.selectDriverDialog
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showItemSearchDialog
            ? _c("ItemSearchDialog", {
                attrs: {
                  searchHcode: _vm.sihRecord.HCODE,
                  searchCustomerCode: _vm.sihRecord.CUSTOMER_CODE,
                  searchDeliveryCode: _vm.sihRecord.DELIVERY_CODE,
                  searchSupplierCode: _vm.sihRecord.SUPPLIER_CODE
                },
                on: {
                  close: _vm.closeItemSearchDialog,
                  select: _vm.selectItemDialog
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showOfficeSearchDialog
            ? _c("OfficeSearchDialog", {
                on: {
                  close: _vm.closeOfficeSearchDialog,
                  select: _vm.selectOfficeDialog
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showInputShippingDialogCp
            ? _c("InputShippingDialog", {
                attrs: {
                  mode: "copy",
                  hCode: _vm.sihRecord.HCODE,
                  baseOrderNo: _vm.sihRecord.ORDER_NO
                },
                on: {
                  close: _vm.closeInputShippingDialogCp,
                  complete: _vm.copyDetail
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.showInputShippingDialogRe
            ? _c("InputShippingDialog", {
                attrs: { mode: "reset" },
                on: {
                  close: _vm.closeInputShippingDialogRe,
                  complete: _vm.resetDetail
                }
              })
            : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "information" }, [
      _vm._v("納入先を指定してください。"),
      _c("br"),
      _vm._v("（仕入の時は入荷する倉庫を指定）")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "information" }, [
      _vm._v("出荷倉庫を指定してください。"),
      _c("br"),
      _vm._v("（仕入の時は仕入元の倉庫）")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { staticClass: "w20" }),
      _vm._v(" "),
      _c("th", { staticClass: "w40" }, [_vm._v("区")]),
      _vm._v(" "),
      _c("th", { staticClass: "w200" }, [_vm._v("コード")]),
      _vm._v(" "),
      _c("th", { staticClass: "w60" }),
      _vm._v(" "),
      _c("th", { staticClass: "w150" }, [_vm._v("商品名")]),
      _vm._v(" "),
      _c("th", { staticClass: "w60" }, [_vm._v("入数")]),
      _vm._v(" "),
      _c("th", { staticClass: "w60" }, [_vm._v("袋数")]),
      _vm._v(" "),
      _c("th", { staticClass: "w60" }, [_vm._v("数量")]),
      _vm._v(" "),
      _c("th", { staticClass: "showSmall" }, [_vm._v("率")]),
      _vm._v(" "),
      _c("th", { staticClass: "showSmall" }, [_vm._v("積数")]),
      _vm._v(" "),
      _c("th", { staticClass: "w70" }, [_vm._v("積込場所")]),
      _vm._v(" "),
      _c("th", { staticClass: "w100" }, [_vm._v("積込場所名")]),
      _vm._v(" "),
      _c("th", { staticClass: "w150" }, [_vm._v("備考1")]),
      _vm._v(" "),
      _c("th", { staticClass: "w150" }, [_vm._v("備考2")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);