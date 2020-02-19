function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<app-main></app-main>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/article-page/article-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article-page/article-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArticlePageArticlePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class='source-title'>{{article && article.source ? article.source.name : 'Local'}}</h3>\n<div class='article-container'>\n    <div class=\"image-container\">\n        <img src=\"{{article.urlToImage}}\" alt=\"{{article.title}}\" width=\"200px\">\n    </div>\n    <div class=\"text-container\">\n      <h4 class='article-title'>{{article.title}}</h4>\n      <p class='article-content'>{{article.content || article.description}}</p>\n      <p class='date'>{{article.publishedAt ? (article.publishedAt | date: 'd/M/yy, h:mm a') : ''}}</p>\n      <p class='author'>{{article.author}}</p>\n      <a  *ngIf='!article.isLocal' href='{{article.url}}' target=\"_blank\">Read more</a>\n    </div>\n    <div *ngIf='article.isLocal' class=\"buttons-container\">\n      <button [routerLink]=\"['/edit-article', article.id]\">Edit</button>\n      <button (click)='removeArticle(article.id)'>Delete</button>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/create-edit-article/create-edit-article.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-edit-article/create-edit-article.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreateEditArticleCreateEditArticleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class='source-title'>{{isNewArticle ? 'Create' : 'Edit'}}</h3>\n<div class='form-container'>\n  <form [formGroup]=\"articleForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div class='form-container-item title'>\n      <label>\n        Heading:\n        <input type=\"text\" required formControlName=\"title\" [(ngModel)]='article.title'>\n      </label>\n    </div>\n\n    <div class='form-container-item description'>\n      <label>\n        Short description:\n        <input type=\"text\" required formControlName=\"description\" [(ngModel)]='article.description'>\n      </label>\n    </div>\n\n    <div class='form-container-item content'>\n      <label>\n        Content:\n        <textarea required formControlName=\"content\" [(ngModel)]='article.content'></textarea>\n      </label>\n    </div>\n\n    <div class='form-container-item img-url'>\n      <label>\n        Image:\n        <input type=\"text\" formControlName=\"urlToImage\" [(ngModel)]='article.urlToImage'>\n      </label>\n    </div>\n\n    <div class='form-container-item date'>\n      <label>\n        Date:\n        <input type=\"text\" formControlName=\"publishedAt\" [(ngModel)]='article.publishedAt'>\n      </label>\n    </div>\n\n    <div class='form-container-item author'>\n      <label>\n        Author:\n        <input type=\"text\" formControlName=\"author\" [(ngModel)]='article.author'>\n      </label>\n    </div>\n\n    <div class='form-container-item url'>\n      <label>\n        Source URl:\n        <input type=\"text\" formControlName=\"url\" [(ngModel)]='article.url'>\n      </label>\n    </div>\n\n    <div class='form-container-item buttons'>\n      <button type=\"submit\" [disabled]=\"!articleForm.valid\">Save</button>\n      <button routerLink=\"/\">Cancel</button>\n    </div>\n\n    </form>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-select/custom-select.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custom-select/custom-select.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomSelectCustomSelectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<select name=\"some select\" id=\"\" [(ngModel)]=\"selectedOptionId\" (ngModelChange)='onChange()' [disabled]='disabled'>\n  <option value=\"\" disabled selected hidden>Select Source...</option>\n  <option *ngFor='let item of list' value=\"{{item.id}}\">{{item.name}}</option>\n</select>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span class='copyright-caption'>Powered by NewsAPI</span>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <h1>Logo</h1>\n  <app-login-button></app-login-button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/load-more-button/load-more-button.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/load-more-button/load-more-button.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoadMoreButtonLoadMoreButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button (click)='onClick()'>Load more</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login-button/login-button.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-button/login-button.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginButtonLoginButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span>{{currentUser || ''}}</span>\n<button (click)='onClick()'>{{currentUser ? 'Log out' : 'Log in'}}</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainPageMainPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class='source-title'>{{isOnlyLocal ? 'Local' : title || 'Source Name'}}</h3>\n<div class='main-page-controls'>\n  <app-custom-select class='main-page-controls_item' [list]='sourcesList' (onSelect)='getNewsArticles($event)' [disabled]='isOnlyLocal'></app-custom-select>\n  <div class='main-page-controls_item'>\n      <input type=\"text\" name=\"filter\" id=\"filter\">\n      <button (click)='setFilterByWord()'>Filter</button>\n  </div>\n  <div class='main-page-controls_item'>\n      <input type=\"checkbox\" name=\"created-by-me-checkbox\" id=\"created-by-me-checkbox\" [(ngModel)]='isOnlyLocal' (ngModelChange)='filterListByCheckbox()'>\n      <label for=\"created-by-me-checkbox\">Only created by me</label>\n  </div>\n  <button class='main-page-controls_item' routerLink=\"/create-article\">Add Article</button>\n</div>\n<app-news-list [list]='listToDisplay | filterByWord: filterWordsString'></app-news-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news-list-item/news-list-item.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news-list-item/news-list-item.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsListItemNewsListItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='article-container'>\n  <div class=\"image-container\">\n      <img src=\"{{article.urlToImage}}\" alt=\"{{article.title}}\" width=\"200px\">\n  </div>\n  <div class=\"text-container\">\n    <h4 class='article-title'>{{article.title}}</h4>\n    <p class='article-description'>{{article.description}}</p>\n    <p class='date'>{{article.publishedAt ? (article.publishedAt | date: 'd/M/yy, h:mm a') : ''}}</p>\n    <a [routerLink]=\"['article', article.title]\">Read more</a>\n  </div>\n  <div *ngIf='article.isLocal' class=\"buttons-container\">\n    <button [routerLink]=\"['edit-article', article.id]\">Edit</button>\n    <button (click)='removeArticle(article.id)'>Delete</button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news-list/news-list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news-list/news-list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsListNewsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='news-list-container'>\n  <app-news-list-item *ngFor='let item of sourceList; let i = index' [article]='item' (onDelete)='removeByIndex(i)'></app-news-list-item>\n  <app-load-more-button *ngIf='isCanLoadMore' (onLoadMore)='loadMore()'></app-load-more-button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>404</p>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host app-footer {\n  position: fixed;\n  left: 0px;\n  bottom: 0px;\n  height: 100px;\n  width: 100%;\n  background: #9999994a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGZjbXBcXEZDTVBcXHRhc2tfYW5ndWxhclxcbmV3cy1hcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBhcHAtZm9vdGVyIHtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICBsZWZ0OjBweDtcbiAgICBib3R0b206MHB4O1xuICAgIGhlaWdodDoxMDBweDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJhY2tncm91bmQ6Izk5OTk5OTRhO1xuICB9XG59XG4iLCI6aG9zdCBhcHAtZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzk5OTk5OTRhO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'news-app';
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/elements */
    "./node_modules/@angular/elements/__ivy_ngcc__/fesm2015/elements.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _login_button_login_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./login-button/login-button.component */
    "./src/app/login-button/login-button.component.ts");
    /* harmony import */


    var _custom_select_custom_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./custom-select/custom-select.component */
    "./src/app/custom-select/custom-select.component.ts");
    /* harmony import */


    var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./news-list/news-list.component */
    "./src/app/news-list/news-list.component.ts");
    /* harmony import */


    var _news_list_item_news_list_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./news-list-item/news-list-item.component */
    "./src/app/news-list-item/news-list-item.component.ts");
    /* harmony import */


    var _load_more_button_load_more_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./load-more-button/load-more-button.component */
    "./src/app/load-more-button/load-more-button.component.ts");
    /* harmony import */


    var _create_edit_article_create_edit_article_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./create-edit-article/create-edit-article.component */
    "./src/app/create-edit-article/create-edit-article.component.ts");
    /* harmony import */


    var _filter_by_word_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./filter-by-word.pipe */
    "./src/app/filter-by-word.pipe.ts");
    /* harmony import */


    var _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./article-page/article-page.component */
    "./src/app/article-page/article-page.component.ts");

    var appRoutes = [{
      path: 'article/:title',
      component: _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_20__["ArticlePageComponent"]
    }, {
      path: 'edit-article/:id',
      component: _create_edit_article_create_edit_article_component__WEBPACK_IMPORTED_MODULE_18__["CreateEditArticleComponent"]
    }, {
      path: 'create-article',
      component: _create_edit_article_create_edit_article_component__WEBPACK_IMPORTED_MODULE_18__["CreateEditArticleComponent"]
    }, {
      path: '404',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"]
    }, {
      path: '',
      component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_12__["MainPageComponent"],
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/404'
    }];

    var AppModule = function AppModule(injector) {
      _classCallCheck(this, AppModule);

      var custom = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_3__["createCustomElement"])(_login_button_login_button_component__WEBPACK_IMPORTED_MODULE_13__["LoginButtonComponent"], {
        injector: injector
      });
      customElements.define('app-login-button', custom);
    };

    AppModule.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]
      }];
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_12__["MainPageComponent"], _login_button_login_button_component__WEBPACK_IMPORTED_MODULE_13__["LoginButtonComponent"], _custom_select_custom_select_component__WEBPACK_IMPORTED_MODULE_14__["CustomSelectComponent"], _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_15__["NewsListComponent"], _news_list_item_news_list_item_component__WEBPACK_IMPORTED_MODULE_16__["NewsListItemComponent"], _load_more_button_load_more_button_component__WEBPACK_IMPORTED_MODULE_17__["LoadMoreButtonComponent"], _create_edit_article_create_edit_article_component__WEBPACK_IMPORTED_MODULE_18__["CreateEditArticleComponent"], _filter_by_word_pipe__WEBPACK_IMPORTED_MODULE_19__["FilterByWordPipe"], _article_page_article_page_component__WEBPACK_IMPORTED_MODULE_20__["ArticlePageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(appRoutes)],
      providers: [],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/article-page/article-page.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/article-page/article-page.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppArticlePageArticlePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  position: relative;\n}\n:host h3 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: whitesmoke;\n  text-align: center;\n  margin: 0;\n  height: 50px;\n}\n:host .article-container {\n  border: 1px solid lightgrey;\n  width: 800px;\n  margin: 20px auto;\n  padding: 20px;\n  min-height: 100px;\n  display: grid;\n  grid-template-columns: 240px auto 140px;\n  grid-template-rows: auto;\n}\n:host .article-container .image-container {\n  margin: 20px;\n  grid-column: 1/2;\n}\n:host .article-container .text-container {\n  grid-column: 2/3;\n  margin: 20px;\n  margin-left: 0;\n}\n:host .article-container .buttons-container {\n  grid-column: 3/4;\n  margin: 20px;\n  justify-self: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS1wYWdlL0Q6XFxmY21wXFxGQ01QXFx0YXNrX2FuZ3VsYXJcXG5ld3MtYXBwL3NyY1xcYXBwXFxhcnRpY2xlLXBhZ2VcXGFydGljbGUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJ0aWNsZS1wYWdlL2FydGljbGUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQVVFLGtCQUFBO0FDUkY7QURERTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNHSjtBREFFO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSx3QkFBQTtBQ0VKO0FEQUk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNFTjtBRENJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NOO0FERUk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS1wYWdlL2FydGljbGUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaDMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmFydGljbGUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0MHB4IGF1dG8gMTQwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IDIwcHg7XG4gICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgfVxuXG4gICAgLnRleHQtY29udGFpbmVyIHtcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgICBncmlkLWNvbHVtbjogMyAvIDQ7XG4gICAgICBtYXJnaW46IDIwcHg7XG4gICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgaDMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogNTBweDtcbn1cbjpob3N0IC5hcnRpY2xlLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjQwcHggYXV0byAxNDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xufVxuOmhvc3QgLmFydGljbGUtY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG59XG46aG9zdCAuYXJ0aWNsZS1jb250YWluZXIgLnRleHQtY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbjpob3N0IC5hcnRpY2xlLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMy80O1xuICBtYXJnaW46IDIwcHg7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/article-page/article-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/article-page/article-page.component.ts ***!
    \********************************************************/

  /*! exports provided: ArticlePageComponent */

  /***/
  function srcAppArticlePageArticlePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticlePageComponent", function () {
      return ArticlePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _current_news_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../current-news-list.service */
    "./src/app/current-news-list.service.ts");
    /* harmony import */


    var _local_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../local-news.service */
    "./src/app/local-news.service.ts");

    var ArticlePageComponent =
    /*#__PURE__*/
    function () {
      function ArticlePageComponent(route, router, currentNewsList, localNews) {
        _classCallCheck(this, ArticlePageComponent);

        this.route = route;
        this.router = router;
        this.currentNewsList = currentNewsList;
        this.localNews = localNews;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ArticlePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.routeSubscription = this.route.params.subscribe(function (params) {
            _this.title = params['title'];

            if (_this.title) {
              _this.article = _this.currentNewsList.getArticleByTitle(_this.title);
            }
          });
        }
      }, {
        key: "removeArticle",
        value: function removeArticle(id) {
          this.localNews.deleteArticle(id);
          this.onDelete.emit();
          this.router.navigate(['/']);
        }
      }]);

      return ArticlePageComponent;
    }();

    ArticlePageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _current_news_list_service__WEBPACK_IMPORTED_MODULE_3__["CurrentNewsListService"]
      }, {
        type: _local_news_service__WEBPACK_IMPORTED_MODULE_4__["LocalNewsService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ArticlePageComponent.prototype, "onDelete", void 0);
    ArticlePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-article-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./article-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/article-page/article-page.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./article-page.component.scss */
      "./src/app/article-page/article-page.component.scss")).default]
    })], ArticlePageComponent);
    /***/
  },

  /***/
  "./src/app/config.ts":
  /*!***************************!*\
    !*** ./src/app/config.ts ***!
    \***************************/

  /*! exports provided: default */

  /***/
  function srcAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var API_KEY = '8d910ef0b25b4859898cbb8c799f7c62';
    /* harmony default export */

    __webpack_exports__["default"] = API_KEY;
    /***/
  },

  /***/
  "./src/app/create-edit-article/create-edit-article.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/create-edit-article/create-edit-article.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreateEditArticleCreateEditArticleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  position: relative;\n}\n:host h3 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: whitesmoke;\n  text-align: center;\n  margin: 0;\n  height: 50px;\n}\n:host .form-container {\n  border: 1px solid lightgrey;\n  width: 800px;\n  margin: 20px auto;\n  padding: 20px;\n}\n:host .form-container form {\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto auto auto auto auto;\n  grid-gap: 20px;\n}\n:host .form-container form .form-container-item input, :host .form-container form .form-container-item textarea {\n  display: block;\n  width: 100%;\n}\n:host .form-container form .title {\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\n:host .form-container form .description {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n:host .form-container form .content {\n  grid-column: 1/2;\n  grid-row: 3/6;\n}\n:host .form-container form .content textarea {\n  resize: none;\n  height: calc(100% - 20px);\n}\n:host .form-container form .img-url {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n:host .form-container form .data {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n:host .form-container form .author {\n  grid-column: 2/3;\n  grid-row: 3/4;\n}\n:host .form-container form .url {\n  grid-column: 2/3;\n  grid-row: 4/5;\n}\n:host .form-container form .buttons {\n  grid-column: 2/3;\n  grid-row: 5/6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWVkaXQtYXJ0aWNsZS9EOlxcZmNtcFxcRkNNUFxcdGFza19hbmd1bGFyXFxuZXdzLWFwcC9zcmNcXGFwcFxcY3JlYXRlLWVkaXQtYXJ0aWNsZVxcY3JlYXRlLWVkaXQtYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3JlYXRlLWVkaXQtYXJ0aWNsZS9jcmVhdGUtZWRpdC1hcnRpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBVUUsa0JBQUE7QUNSRjtBRERFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0dKO0FEQUU7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNFSjtBREFJO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNENBQUE7RUFDQSxjQUFBO0FDRU47QURDUTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDQ1Y7QURHTTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0RSO0FESU07RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNGUjtBREtNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDSFI7QURJUTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0ZWO0FETU07RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNKUjtBRE9NO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDTFI7QURRTTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ05SO0FEU007RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNQUjtBRFVNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDUlIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUtZWRpdC1hcnRpY2xlL2NyZWF0ZS1lZGl0LWFydGljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGgzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogNTBweDtcbiAgfVxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgZm9ybSB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuXG4gICAgICAuZm9ybS1jb250YWluZXItaXRlbSB7XG4gICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgICB9XG5cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgICAgfVxuXG4gICAgICAuY29udGVudCB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA2O1xuICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmltZy11cmwge1xuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICAgIH1cblxuICAgICAgLmRhdGEge1xuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICAgIH1cblxuICAgICAgLmF1dGhvciB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgICAgfVxuXG4gICAgICAudXJsIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgICAgICBncmlkLXJvdzogNCAvIDU7XG4gICAgICB9XG5cbiAgICAgIC5idXR0b25zIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgICAgICBncmlkLXJvdzogNSAvIDY7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IGgzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDUwcHg7XG59XG46aG9zdCAuZm9ybS1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG59XG46aG9zdCAuZm9ybS1jb250YWluZXIgZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgZ3JpZC1nYXA6IDIwcHg7XG59XG46aG9zdCAuZm9ybS1jb250YWluZXIgZm9ybSAuZm9ybS1jb250YWluZXItaXRlbSBpbnB1dCwgOmhvc3QgLmZvcm0tY29udGFpbmVyIGZvcm0gLmZvcm0tY29udGFpbmVyLWl0ZW0gdGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuZm9ybS1jb250YWluZXIgZm9ybSAudGl0bGUge1xuICBncmlkLWNvbHVtbjogMS8yO1xuICBncmlkLXJvdzogMS8yO1xufVxuOmhvc3QgLmZvcm0tY29udGFpbmVyIGZvcm0gLmRlc2NyaXB0aW9uIHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDIvMztcbn1cbjpob3N0IC5mb3JtLWNvbnRhaW5lciBmb3JtIC5jb250ZW50IHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDMvNjtcbn1cbjpob3N0IC5mb3JtLWNvbnRhaW5lciBmb3JtIC5jb250ZW50IHRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xufVxuOmhvc3QgLmZvcm0tY29udGFpbmVyIGZvcm0gLmltZy11cmwge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBncmlkLXJvdzogMS8yO1xufVxuOmhvc3QgLmZvcm0tY29udGFpbmVyIGZvcm0gLmRhdGEge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBncmlkLXJvdzogMi8zO1xufVxuOmhvc3QgLmZvcm0tY29udGFpbmVyIGZvcm0gLmF1dGhvciB7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIGdyaWQtcm93OiAzLzQ7XG59XG46aG9zdCAuZm9ybS1jb250YWluZXIgZm9ybSAudXJsIHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZ3JpZC1yb3c6IDQvNTtcbn1cbjpob3N0IC5mb3JtLWNvbnRhaW5lciBmb3JtIC5idXR0b25zIHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZ3JpZC1yb3c6IDUvNjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/create-edit-article/create-edit-article.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/create-edit-article/create-edit-article.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CreateEditArticleComponent */

  /***/
  function srcAppCreateEditArticleCreateEditArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateEditArticleComponent", function () {
      return CreateEditArticleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _local_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../local-news.service */
    "./src/app/local-news.service.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var CreateEditArticleComponent =
    /*#__PURE__*/
    function () {
      function CreateEditArticleComponent(route, router, localNews, user) {
        _classCallCheck(this, CreateEditArticleComponent);

        this.route = route;
        this.router = router;
        this.localNews = localNews;
        this.user = user;
        this.article = {};
        this.articleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          urlToImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          publishedAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          author: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          url: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
      }

      _createClass(CreateEditArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.routeSubscription = this.route.params.subscribe(function (params) {
            _this2.id = params['id'];

            if (_this2.id) {
              _this2.article = _this2.localNews.getArticle(_this2.id);
            }

            _this2.article.publishedAt = _this2.article.publishedAt || new Date().toISOString();
            _this2.article.author = _this2.article.author || _this2.user.getCurrentUserName();
          });
          this.isNewArticle = this.router.url === '/create-article';
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.isNewArticle) {
            this.article.isLocal = true;
            console.log(this.article.publishedAt);
            this.localNews.addArticle(this.article);
          } else {
            this.localNews.updateArticle(this.id, this.article);
          }

          this.router.navigate(['/']);
        }
      }]);

      return CreateEditArticleComponent;
    }();

    CreateEditArticleComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _local_news_service__WEBPACK_IMPORTED_MODULE_4__["LocalNewsService"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    CreateEditArticleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-edit-article',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-edit-article.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/create-edit-article/create-edit-article.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-edit-article.component.scss */
      "./src/app/create-edit-article/create-edit-article.component.scss")).default]
    })], CreateEditArticleComponent);
    /***/
  },

  /***/
  "./src/app/current-news-list.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/current-news-list.service.ts ***!
    \**********************************************/

  /*! exports provided: CurrentNewsListService */

  /***/
  function srcAppCurrentNewsListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentNewsListService", function () {
      return CurrentNewsListService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CurrentNewsListService =
    /*#__PURE__*/
    function () {
      function CurrentNewsListService() {
        _classCallCheck(this, CurrentNewsListService);
      }

      _createClass(CurrentNewsListService, [{
        key: "saveList",
        value: function saveList(list) {
          this.currentNewsList = list;
        }
      }, {
        key: "getArticleByTitle",
        value: function getArticleByTitle(title) {
          return this.currentNewsList.find(function (item) {
            return item.title === title;
          });
        }
      }]);

      return CurrentNewsListService;
    }();

    CurrentNewsListService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CurrentNewsListService);
    /***/
  },

  /***/
  "./src/app/custom-select/custom-select.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/custom-select/custom-select.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCustomSelectCustomSelectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbS1zZWxlY3QvY3VzdG9tLXNlbGVjdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/custom-select/custom-select.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/custom-select/custom-select.component.ts ***!
    \**********************************************************/

  /*! exports provided: CustomSelectComponent */

  /***/
  function srcAppCustomSelectCustomSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomSelectComponent", function () {
      return CustomSelectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CustomSelectComponent =
    /*#__PURE__*/
    function () {
      function CustomSelectComponent() {
        _classCallCheck(this, CustomSelectComponent);

        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CustomSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChange",
        value: function onChange() {
          var _this3 = this;

          var selectedOption = this.list.filter(function (item) {
            return item.id === _this3.selectedOptionId;
          })[0];
          this.onSelect.emit(selectedOption);
        }
      }]);

      return CustomSelectComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CustomSelectComponent.prototype, "list", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CustomSelectComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CustomSelectComponent.prototype, "onSelect", void 0);
    CustomSelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-custom-select',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./custom-select.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/custom-select/custom-select.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./custom-select.component.scss */
      "./src/app/custom-select/custom-select.component.scss")).default]
    })], CustomSelectComponent);
    /***/
  },

  /***/
  "./src/app/filter-by-word.pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/filter-by-word.pipe.ts ***!
    \****************************************/

  /*! exports provided: FilterByWordPipe */

  /***/
  function srcAppFilterByWordPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterByWordPipe", function () {
      return FilterByWordPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterByWordPipe =
    /*#__PURE__*/
    function () {
      function FilterByWordPipe() {
        _classCallCheck(this, FilterByWordPipe);
      }

      _createClass(FilterByWordPipe, [{
        key: "transform",
        value: function transform(value, string) {
          var _this4 = this;

          return string ? value.filter(function (item) {
            return _this4.filter(item.content, string);
          }) : value.map(function (item) {
            return item;
          });
        }
      }, {
        key: "filter",
        value: function filter(text, searchString) {
          var regexStr = '(?=.*' + searchString.split(/\,|\s/).join(')(?=.*') + ')';
          var searchRegEx = new RegExp(regexStr, 'gi');
          return text ? text.match(searchRegEx) !== null : false;
        }
      }]);

      return FilterByWordPipe;
    }();

    FilterByWordPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filterByWord'
    })], FilterByWordPipe);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .copyright-caption {\n  float: right;\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center;\n  margin: 0;\n  margin-right: 20px;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Q6XFxmY21wXFxGQ01QXFx0YXNrX2FuZ3VsYXJcXG5ld3MtYXBwL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmNvcHlyaWdodC1jYXB0aW9uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59XG4iLCI6aG9zdCAuY29weXJpZ2h0LWNhcHRpb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host div {\n  margin: 0;\n  padding: 20px;\n  background: lightcoral;\n  height: 100px;\n}\n:host div h1 {\n  float: left;\n  margin: 0;\n  color: white;\n}\n:host div app-login-button {\n  float: right;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxmY21wXFxGQ01QXFx0YXNrX2FuZ3VsYXJcXG5ld3MtYXBwL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDREo7QURHSTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0ROO0FESUk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cbiAgZGl2IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGNvcmFsO1xuICAgIGhlaWdodDogMTAwcHg7XG5cbiAgICBoMSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICBhcHAtbG9naW4tYnV0dG9uIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuICB9XG59XG5cblxuIiwiOmhvc3QgZGl2IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGNvcmFsO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuOmhvc3QgZGl2IGgxIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgZGl2IGFwcC1sb2dpbi1idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/load-more-button/load-more-button.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/load-more-button/load-more-button.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoadMoreButtonLoadMoreButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWQtbW9yZS1idXR0b24vbG9hZC1tb3JlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/load-more-button/load-more-button.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/load-more-button/load-more-button.component.ts ***!
    \****************************************************************/

  /*! exports provided: LoadMoreButtonComponent */

  /***/
  function srcAppLoadMoreButtonLoadMoreButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadMoreButtonComponent", function () {
      return LoadMoreButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoadMoreButtonComponent =
    /*#__PURE__*/
    function () {
      function LoadMoreButtonComponent() {
        _classCallCheck(this, LoadMoreButtonComponent);

        this.onLoadMore = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(LoadMoreButtonComponent, [{
        key: "onClick",
        value: function onClick() {
          this.onLoadMore.emit();
        }
      }]);

      return LoadMoreButtonComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], LoadMoreButtonComponent.prototype, "onLoadMore", void 0);
    LoadMoreButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-load-more-button',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./load-more-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/load-more-button/load-more-button.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./load-more-button.component.scss */
      "./src/app/load-more-button/load-more-button.component.scss")).default]
    })], LoadMoreButtonComponent);
    /***/
  },

  /***/
  "./src/app/local-news.service.ts":
  /*!***************************************!*\
    !*** ./src/app/local-news.service.ts ***!
    \***************************************/

  /*! exports provided: LocalNewsService */

  /***/
  function srcAppLocalNewsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalNewsService", function () {
      return LocalNewsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LocalNewsService =
    /*#__PURE__*/
    function () {
      function LocalNewsService() {
        _classCallCheck(this, LocalNewsService);

        this.localArticles = [{
          id: 'id1',
          title: 'Mock local article',
          description: 'some text',
          content: 'more text',
          publishedAt: '2020-02-10T14:58:00Z',
          author: 'Some Author',
          urlToImage: 'https://i.ytimg.com/vi/P172dFjf2nM/maxresdefault.jpg',
          isLocal: true
        }];
        this.lastId = 1;
      }

      _createClass(LocalNewsService, [{
        key: "getLocalArticles",
        value: function getLocalArticles() {
          return this.localArticles;
        }
      }, {
        key: "deleteArticle",
        value: function deleteArticle(id) {
          var index = this.localArticles.findIndex(function (item) {
            return item.id === id;
          });
          this.localArticles.splice(index, 1);
        }
      }, {
        key: "addArticle",
        value: function addArticle(article) {
          article.id = "id".concat(++this.lastId);
          this.localArticles.push(article);
        }
      }, {
        key: "getArticle",
        value: function getArticle(id) {
          return this.localArticles.find(function (item) {
            return item.id === id;
          });
        }
      }, {
        key: "updateArticle",
        value: function updateArticle(id, article) {
          var index = this.localArticles.findIndex(function (item) {
            return item.id === id;
          });
          this.localArticles[index] = article;
        }
      }]);

      return LocalNewsService;
    }();

    LocalNewsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LocalNewsService);
    /***/
  },

  /***/
  "./src/app/login-button/login-button.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/login-button/login-button.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginButtonLoginButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host span {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tYnV0dG9uL0Q6XFxmY21wXFxGQ01QXFx0YXNrX2FuZ3VsYXJcXG5ld3MtYXBwL3NyY1xcYXBwXFxsb2dpbi1idXR0b25cXGxvZ2luLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4tYnV0dG9uL2xvZ2luLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi1idXR0b24vbG9naW4tYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBzcGFuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbiIsIjpob3N0IHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login-button/login-button.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/login-button/login-button.component.ts ***!
    \********************************************************/

  /*! exports provided: LoginButtonComponent */

  /***/
  function srcAppLoginButtonLoginButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginButtonComponent", function () {
      return LoginButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var LoginButtonComponent =
    /*#__PURE__*/
    function () {
      function LoginButtonComponent(user) {
        _classCallCheck(this, LoginButtonComponent);

        this.user = user;
      }

      _createClass(LoginButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentUser = this.user.getCurrentUserName();
        }
      }, {
        key: "onClick",
        value: function onClick() {
          if (this.currentUser) {
            this.user.logOut();
            this.currentUser = this.user.getCurrentUserName();
          } else {
            this.user.logIn();
            this.currentUser = this.user.getCurrentUserName();
          }
        }
      }]);

      return LoginButtonComponent;
    }();

    LoginButtonComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    LoginButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login-button/login-button.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login-button.component.scss */
      "./src/app/login-button/login-button.component.scss")).default]
    })], LoginButtonComponent);
    /***/
  },

  /***/
  "./src/app/main-page/main-page.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/main-page/main-page.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainPageMainPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host h3 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: whitesmoke;\n  text-align: center;\n  margin: 0;\n  height: 50px;\n}\n:host .main-page-controls {\n  height: 20px;\n  margin: 20px;\n}\n:host .main-page-controls_item {\n  display: inline-block;\n  float: left;\n  margin-right: 20px;\n}\n:host .main-page-controls_item:last-child {\n  margin-right: 0;\n  float: right;\n}\n:host app-news-list {\n  display: block;\n  position: relative;\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL0Q6XFxmY21wXFxGQ01QXFx0YXNrX2FuZ3VsYXJcXG5ld3MtYXBwL3NyY1xcYXBwXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNBSjtBREVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNBSjtBRENJO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDTjtBREFNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNFUjtBREdFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaDMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC5tYWluLXBhZ2UtY29udHJvbHMge1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgJl9pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwLW5ld3MtbGlzdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG4iLCI6aG9zdCBoMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuOmhvc3QgLm1haW4tcGFnZS1jb250cm9scyB7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAyMHB4O1xufVxuOmhvc3QgLm1haW4tcGFnZS1jb250cm9sc19pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuOmhvc3QgLm1haW4tcGFnZS1jb250cm9sc19pdGVtOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGZsb2F0OiByaWdodDtcbn1cbjpob3N0IGFwcC1uZXdzLWxpc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjbGVhcjogYm90aDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main-page/main-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-page/main-page.component.ts ***!
    \**************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../news-api.service */
    "./src/app/news-api.service.ts");
    /* harmony import */


    var _local_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../local-news.service */
    "./src/app/local-news.service.ts");
    /* harmony import */


    var _current_news_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../current-news-list.service */
    "./src/app/current-news-list.service.ts");

    var MainPageComponent =
    /*#__PURE__*/
    function () {
      function MainPageComponent(newsApi, localNews, currentListNews) {
        _classCallCheck(this, MainPageComponent);

        this.newsApi = newsApi;
        this.localNews = localNews;
        this.currentListNews = currentListNews;
        this.sourcesList = [];
        this.articlesList = [];
        this.localArticlesList = [];
        this.listToDisplay = [];
      }

      _createClass(MainPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.localArticlesList = this.localNews.getLocalArticles();
          this.listToDisplay = this.localArticlesList.map(function (item) {
            return item;
          });
          this.currentListNews.saveList(this.listToDisplay);
          this.getNewsSources();
        }
      }, {
        key: "getNewsSources",
        value: function getNewsSources() {
          var _this5 = this;

          this.newsApi.getSources().then(function (response) {
            _this5.sourcesList = response.sources;
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getNewsArticles",
        value: function getNewsArticles(elem) {
          var _this6 = this;

          this.title = elem.name;
          this.newsApi.getItems(elem.id).then(function (response) {
            _this6.totalResults = response.totalResults;
            _this6.articlesList = response.articles;
            _this6.listToDisplay = _this6.localArticlesList.concat(_this6.articlesList);

            _this6.currentListNews.saveList(_this6.listToDisplay);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "filterListByCheckbox",
        value: function filterListByCheckbox() {
          if (this.isOnlyLocal) {
            this.listToDisplay = this.localArticlesList.map(function (item) {
              return item;
            });
          } else {
            this.listToDisplay = this.localArticlesList.concat(this.articlesList);
          }

          this.currentListNews.saveList(this.listToDisplay);
        }
      }, {
        key: "setFilterByWord",
        value: function setFilterByWord() {
          var input = document.getElementById('filter');
          this.filterWordsString = input.value;
        }
      }]);

      return MainPageComponent;
    }();

    MainPageComponent.ctorParameters = function () {
      return [{
        type: _news_api_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"]
      }, {
        type: _local_news_service__WEBPACK_IMPORTED_MODULE_3__["LocalNewsService"]
      }, {
        type: _current_news_list_service__WEBPACK_IMPORTED_MODULE_4__["CurrentNewsListService"]
      }];
    };

    MainPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main-page.component.scss */
      "./src/app/main-page/main-page.component.scss")).default]
    })], MainPageComponent);
    /***/
  },

  /***/
  "./src/app/main/main.component.scss":
  /*!******************************************!*\
    !*** ./src/app/main/main.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main.component.scss */
      "./src/app/main/main.component.scss")).default]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/news-api.service.ts":
  /*!*************************************!*\
    !*** ./src/app/news-api.service.ts ***!
    \*************************************/

  /*! exports provided: NewsApiService */

  /***/
  function srcAppNewsApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsApiService", function () {
      return NewsApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./config */
    "./src/app/config.ts");

    var NewsApiService =
    /*#__PURE__*/
    function () {
      function NewsApiService(http) {
        _classCallCheck(this, NewsApiService);

        this.http = http;
      }

      _createClass(NewsApiService, [{
        key: "getSources",
        value: function getSources() {
          return this.http.get("https://newsapi.org/v2/sources?apiKey=".concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"])).toPromise();
        }
      }, {
        key: "getItems",
        value: function getItems(id) {
          return this.http.get("https://newsapi.org/v2/top-headlines?sources=".concat(id, "&apiKey=").concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"])).toPromise();
        }
      }]);

      return NewsApiService;
    }();

    NewsApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    NewsApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NewsApiService);
    /***/
  },

  /***/
  "./src/app/news-list-item/news-list-item.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/news-list-item/news-list-item.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsListItemNewsListItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host .article-container {\n  border: 1px solid lightgrey;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  min-height: 100px;\n  display: grid;\n  grid-template-columns: 240px auto 140px;\n  grid-template-rows: auto;\n}\n:host .article-container .image-container {\n  margin: 20px;\n  grid-column: 1/2;\n}\n:host .article-container .text-container {\n  grid-column: 2/3;\n  margin: 20px;\n  margin-left: 0;\n}\n:host .article-container .buttons-container {\n  grid-column: 3/4;\n  margin: 20px;\n  justify-self: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1saXN0LWl0ZW0vRDpcXGZjbXBcXEZDTVBcXHRhc2tfYW5ndWxhclxcbmV3cy1hcHAvc3JjXFxhcHBcXG5ld3MtbGlzdC1pdGVtXFxuZXdzLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmV3cy1saXN0LWl0ZW0vbmV3cy1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLHdCQUFBO0FDQUo7QURFSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0FOO0FER0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRE47QURJSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9uZXdzLWxpc3QtaXRlbS9uZXdzLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmFydGljbGUtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI0MHB4IGF1dG8gMTQwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IDIwcHg7XG4gICAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgfVxuXG4gICAgLnRleHQtY29udGFpbmVyIHtcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cblxuICAgIC5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgICBncmlkLWNvbHVtbjogMyAvIDQ7XG4gICAgICBtYXJnaW46IDIwcHg7XG4gICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5hcnRpY2xlLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNDBweCBhdXRvIDE0MHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG59XG46aG9zdCAuYXJ0aWNsZS1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbn1cbjpob3N0IC5hcnRpY2xlLWNvbnRhaW5lciAudGV4dC1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuOmhvc3QgLmFydGljbGUtY29udGFpbmVyIC5idXR0b25zLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG4gIG1hcmdpbjogMjBweDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/news-list-item/news-list-item.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/news-list-item/news-list-item.component.ts ***!
    \************************************************************/

  /*! exports provided: NewsListItemComponent */

  /***/
  function srcAppNewsListItemNewsListItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsListItemComponent", function () {
      return NewsListItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _local_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../local-news.service */
    "./src/app/local-news.service.ts");

    var NewsListItemComponent =
    /*#__PURE__*/
    function () {
      function NewsListItemComponent(localNews) {
        _classCallCheck(this, NewsListItemComponent);

        this.localNews = localNews;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(NewsListItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }, {
        key: "removeArticle",
        value: function removeArticle(id) {
          this.localNews.deleteArticle(id);
          this.onDelete.emit();
        }
      }]);

      return NewsListItemComponent;
    }();

    NewsListItemComponent.ctorParameters = function () {
      return [{
        type: _local_news_service__WEBPACK_IMPORTED_MODULE_2__["LocalNewsService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NewsListItemComponent.prototype, "article", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NewsListItemComponent.prototype, "onDelete", void 0);
    NewsListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-news-list-item',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./news-list-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news-list-item/news-list-item.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./news-list-item.component.scss */
      "./src/app/news-list-item/news-list-item.component.scss")).default]
    })], NewsListItemComponent);
    /***/
  },

  /***/
  "./src/app/news-list/news-list.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/news-list/news-list.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsListNewsListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  position: relative;\n}\n:host .news-list-container {\n  width: 800px;\n  margin: 0 auto;\n  max-height: calc(100vh - 330px);\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1saXN0L0Q6XFxmY21wXFxGQ01QXFx0YXNrX2FuZ3VsYXJcXG5ld3MtYXBwL3NyY1xcYXBwXFxuZXdzLWxpc3RcXG5ld3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmV3cy1saXN0L25ld3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9uZXdzLWxpc3QvbmV3cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5uZXdzLWxpc3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMzMHB4KTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAvLyBhcHAtbG9hZC1tb3JlLWJ1dHRvbiB7XG4gICAgLy8gICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgLy8gICBib3R0b206IDEwMHB4O1xuICAgIC8vIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAubmV3cy1saXN0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMzBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/news-list/news-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/news-list/news-list.component.ts ***!
    \**************************************************/

  /*! exports provided: NewsListComponent */

  /***/
  function srcAppNewsListNewsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsListComponent", function () {
      return NewsListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NewsListComponent =
    /*#__PURE__*/
    function () {
      function NewsListComponent() {
        _classCallCheck(this, NewsListComponent);

        this.sourceList = [];
      }

      _createClass(NewsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.sourceList = this.list.splice(0, this.list.length >= 5 ? 5 : this.list.length);
          this.isCanLoadMore = !!this.list.length;
        }
      }, {
        key: "loadMore",
        value: function loadMore() {
          this.sourceList = this.sourceList.concat(this.list.splice(0, this.list.length >= 5 ? 5 : this.list.length));
          this.isCanLoadMore = !!this.list.length;
        }
      }, {
        key: "removeByIndex",
        value: function removeByIndex(index) {
          this.sourceList.splice(index, 1);
        }
      }]);

      return NewsListComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NewsListComponent.prototype, "list", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NewsListComponent.prototype, "totalResults", void 0);
    NewsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-news-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./news-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news-list/news-list.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./news-list.component.scss */
      "./src/app/news-list/news-list.component.scss")).default]
    })], NewsListComponent);
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/not-found/not-found.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotFoundNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./not-found.component.scss */
      "./src/app/not-found/not-found.component.scss")).default]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService() {
        _classCallCheck(this, UserService);

        this.currentUserName = 'Dzmitry Yarash';
      }

      _createClass(UserService, [{
        key: "getCurrentUserName",
        value: function getCurrentUserName() {
          return this.currentUserName;
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.currentUserName = null;
        }
      }, {
        key: "logIn",
        value: function logIn() {
          this.currentUserName = 'Dzmitry Yarash';
        }
      }]);

      return UserService;
    }();

    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\fcmp\FCMP\task_angular\news-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map