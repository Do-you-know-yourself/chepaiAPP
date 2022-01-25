var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
(function(vue) {
  "use strict";
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    var n2 = { __proto__: null, [Symbol.toStringTag]: "Module" };
    if (e) {
      Object.keys(e).forEach(function(k2) {
        if (k2 !== "default") {
          var d2 = Object.getOwnPropertyDescriptor(e, k2);
          Object.defineProperty(n2, k2, d2.get ? d2 : {
            enumerable: true,
            get: function() {
              return e[k2];
            }
          });
        }
      });
    }
    n2["default"] = e;
    return Object.freeze(n2);
  }
  var vue__namespace = /* @__PURE__ */ _interopNamespace(vue);
  Object.freeze({});
  Object.freeze([]);
  const isString = (val) => typeof val === "string";
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  const ON_READY = "onReady";
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k2, p2) {
    switch (toRawType(p2)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p2;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v2) {
      const type2 = toTypeString(v2).toLowerCase();
      if (type2 === "[object object]" || type2 === "[object array]") {
        try {
          v2 = "---BEGIN:JSON---" + JSON.stringify(v2, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v2 = type2;
        }
      } else {
        if (v2 === null) {
          v2 = "---NULL---";
        } else if (v2 === void 0) {
          v2 = "---UNDEFINED---";
        } else {
          const vType = toRawType(v2).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v2 = "---BEGIN:" + vType + "---" + v2 + "---END:" + vType + "---";
          } else {
            v2 = String(v2);
          }
        }
      }
      return v2;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  let NavList = vue.ref([
    {
      title: "\u9996\u9875",
      id: 1
    },
    {
      title: "\u8C6A\u534E\u8F66",
      id: 2
    },
    {
      title: "\u65B0\u80FD\u6E90\u8F66",
      id: 3
    },
    {
      title: "\u51C6\u65B0\u8F66",
      id: 4
    }
  ]);
  let currentIndex = vue.ref(1);
  const Toggle = (i2) => {
    try {
      currentIndex.value = i2;
      formatAppLog("log", "at components/NavBar/navbarModel.ts:28", currentIndex.value);
    } catch (err) {
      formatAppLog("log", "at components/NavBar/navbarModel.ts:30", err);
    }
  };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$F = {};
  function _sfc_render$d(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "status_bar" }, [
      vue.createCommentVNode(" \u8FD9\u91CC\u662F\u72B6\u6001\u680F ")
    ]);
  }
  var StatusBar = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$d], ["__scopeId", "data-v-1450f979"]]);
  const _sfc_main$E = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createVNode(vue.unref(StatusBar)),
          vue.createElementVNode("view", { class: "navbar" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(NavList), (item) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass(["list", { "isActive": vue.unref(currentIndex) == item.id }]),
                key: item.id,
                onClick: ($event) => vue.unref(Toggle)(item.id)
              }, [
                vue.createElementVNode("text", {
                  class: vue.normalizeClass({ "isActive": vue.unref(currentIndex) == item.id })
                }, vue.toDisplayString(item.title), 3),
                vue.createElementVNode("view", {
                  class: vue.normalizeClass(["bottom-line", { "isLine": vue.unref(currentIndex) == item.id }])
                }, null, 2)
              ], 10, ["onClick"]);
            }), 128))
          ]),
          vue.unref(currentIndex) !== 1 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "search"
          }, [
            vue.createElementVNode("input", {
              type: "text",
              placeholder: "\u641C\u7D22\u60A8\u60F3\u8981\u7684\u8F66"
            }),
            vue.createElementVNode("view", { class: "icon_search" }, [
              vue.createElementVNode("img", {
                class: "icon",
                src: "/static/icon/search.png",
                alt: ""
              })
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.unref(currentIndex) !== 1 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "typeClass"
          }, [
            vue.createElementVNode("view", { class: "brand" }, [
              vue.createElementVNode("text", null, "\u54C1\u724C"),
              vue.createElementVNode("view", { class: "img" }, [
                vue.createElementVNode("img", {
                  class: "X_icon",
                  src: "/static/icon/top_s.png",
                  alt: ""
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "brand" }, [
              vue.createElementVNode("text", null, "\u8F66\u4EF7"),
              vue.createElementVNode("view", { class: "img" }, [
                vue.createElementVNode("img", {
                  class: "X_icon",
                  src: "/static/icon/top_s.png",
                  alt: ""
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "brand" }, [
              vue.createElementVNode("text", null, "\u57CE\u5E02"),
              vue.createElementVNode("view", { class: "img" }, [
                vue.createElementVNode("img", {
                  class: "X_icon",
                  src: "/static/icon/top_s.png",
                  alt: ""
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "brand" }, [
              vue.createElementVNode("text", null, "\u7B5B\u9009"),
              vue.createElementVNode("view", { class: "img" }, [
                vue.createElementVNode("img", {
                  class: "X_icon",
                  src: "/static/icon/screen.png",
                  alt: ""
                })
              ])
            ]),
            vue.createCommentVNode("        \u8F66\u4EF7"),
            vue.createCommentVNode("        \u57CE\u5E02"),
            vue.createCommentVNode("        \u7B5B\u9009")
          ])) : vue.createCommentVNode("v-if", true)
        ], 64);
      };
    }
  });
  var Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-22b1ab78"]]);
  const _sfc_main$D = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      vue.ref([]);
      vue.ref(1);
      let height = vue.ref(0);
      height.value = document.documentElement.clientHeight - 80;
      const scrollTop = () => {
        formatAppLog("log", "at components/TypeVehicle/TypeVehicle.vue:50", 111);
      };
      if (height.value > 0) {
        scrollTop();
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("scroll-view", {
          style: { "height": "100vh" },
          onScrolltolower: scrollTop,
          "scroll-y": ""
        }, [
          vue.createElementVNode("view", { class: "flex-col container" }, [
            vue.createElementVNode("view", { class: "flex-col group" }, [
              vue.createElementVNode("view", { class: "VeHicLelList" }, [
                (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(10, (item) => {
                  return vue.createElementVNode("view", { class: "VeHicLel_container" }, [
                    vue.createElementVNode("view", { class: "img" }, [
                      vue.createElementVNode("img", {
                        src: "/static/img/1.png",
                        alt: ""
                      })
                    ]),
                    vue.createElementVNode("view", { class: "VeHicLel_right" }, [
                      vue.createElementVNode("view", { class: "title" }, [
                        vue.createElementVNode("text", null, "[\u5468\u53E3]\u5954\u9A70 E\u7EA7 2020\u6B3E 2.0T \u624B\u81EA\u52A8\u4E00\u4F53 \u6539\u6B3E E 300L \u8FD0\u52A8\u65F6\u5C1A\u578B"),
                        vue.createElementVNode("view", { class: "love_icon" }, [
                          vue.createElementVNode("img", {
                            src: "/static/icon/love_h.png",
                            alt: ""
                          })
                        ])
                      ]),
                      vue.createElementVNode("view", { class: "data_kilometre" }, [
                        vue.createElementVNode("text", { class: "data" }, "2021\u5E7405\u4F59\u989D\u4E0A\u724C"),
                        vue.createElementVNode("span", null, "|"),
                        vue.createElementVNode("text", null, "1.90\u4E07\u516C\u91CC")
                      ]),
                      vue.createElementVNode("view", { class: "price_pople_num" }, [
                        vue.createElementVNode("view", { class: "price" }, "25.58\u4E07"),
                        vue.createElementVNode("view", { class: "num" }, "142\u6B21\u56F4\u89C2")
                      ])
                    ])
                  ]);
                }), 64))
              ])
            ])
          ])
        ], 32);
      };
    }
  });
  var TypeVehicle = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-533dba6a"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, __spreadValues({
          styles
        }, config), (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$C = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      stylesObject() {
        let styles = __spreadProps(__spreadValues({}, this.styles), {
          "transition-duration": this.duration / 1e3 + "s"
        });
        let transform = "";
        for (let i2 in styles) {
          let line = this.toLine(i2);
          transform += line + ":" + styles[i2] + ";";
        }
        return transform;
      },
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i2 in obj) {
          try {
            if (typeof obj[i2] === "object") {
              this.animation[i2](...obj[i2]);
            } else {
              this.animation[i2](obj[i2]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i2} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config);
        return this;
      },
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$c]]);
  function resolveEasycom(component, easycom) {
    return isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  const onReady = /* @__PURE__ */ createHook(ON_READY);
  const _sfc_main$B = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      animation: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "center"
      },
      maskClick: {
        type: Boolean,
        default: true
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const { windowWidth, windowHeight, windowTop, safeAreaInsets } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + windowTop;
        if (this.safeArea) {
          this.safeAreaInsets = safeAreaInsets;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    created() {
      this.mkclick = this.maskClick;
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
    },
    methods: {
      closeMask() {
        this.maskShow = false;
      },
      disableMask() {
        this.mkclick = false;
      },
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:211", "\u7F3A\u5C11\u7C7B\u578B\uFF1A", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets && this.safeAreaInsets.bottom || 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$4);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]]),
      onTouchmove: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.clear && $options.clear(...args), ["stop", "prevent"]))
    }, [
      vue.createElementVNode("view", {
        onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
      }, [
        $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
          key: "1",
          name: "mask",
          "mode-class": "fade",
          styles: $data.maskClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_uni_transition, {
          key: "2",
          "mode-class": $data.ani,
          name: "content",
          styles: $data.transClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
              style: vue.normalizeStyle({ backgroundColor: $options.bg }),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 6)
          ]),
          _: 3
        }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
      ], 32)
    ], 34)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$b], ["__scopeId", "data-v-7c43d41b"]]);
  let bannerList = vue.ref([
    {
      url: "/static/img/bg1.webp",
      id: 1
    },
    {
      url: "/static/img/bg2.webp",
      id: 2
    },
    {
      url: "/static/img/bg3.webp",
      id: 3
    }
  ]);
  let toolsList = vue.ref([
    {
      text: "\u6211\u7684\u5173\u6CE8",
      icon: "/static/icon/MyAttention.png",
      uri: "../user/Bidding/index",
      id: 4
    },
    {
      text: "\u8FC7\u6237\u529E\u8BC1",
      icon: "/static/icon/TransferCertificate.png",
      uri: "../index/component/TransFer",
      id: 2
    },
    {
      text: "\u6D4F\u89C8\u8BB0\u5F55",
      icon: "/static/icon/BrowseRecords.png",
      uri: "../user/Bidding/index",
      id: 5
    },
    {
      text: "\u5386\u53F2\u6210\u4EA4",
      icon: "/static/icon/HistoricalTransaction.png",
      uri: "../user/Bidding/index",
      id: 3
    },
    {
      text: "\u4EE3\u9A7E",
      icon: "",
      id: 7
    },
    {
      text: "\u4EE3\u4EF7",
      icon: "",
      id: 6
    }
  ]);
  const RoutePush = (i2) => {
    if (i2.id >= 6) {
      return uni.showToast({
        title: "\u6B63\u5728\u5F00\u53D1\u4E2D",
        icon: "error"
      });
    } else {
      uni.navigateTo({
        url: `${i2.uri}?id=` + i2.id + "&title=" + i2.text,
        animationType: "pop-in"
      });
    }
  };
  const VehicleSource = vue.ref([
    {
      heat: 5e3,
      Date: "12:00",
      num: 30,
      city: "\u8D63\u5DDE\u5E02",
      explain: "\u6309\u65F6\u6210\u4EA4",
      id: 1,
      images: [
        {
          url: "/static/img/3.webp",
          id: 1,
          NickName: "\u5965\u8FEA \u5965\u8FEAA4L",
          price: 37.7
        },
        {
          url: "/static/img/4.webp",
          id: 2,
          NickName: "\u5965\u8FEA \u5965\u8FEAA6",
          price: 37.7
        }
      ]
    },
    {
      heat: 9636,
      Date: "09:00",
      num: 74,
      city: "\u629A\u5DDE\u5E02",
      explain: "\u6309\u65F6\u6210\u4EA4",
      id: 2,
      images: [
        {
          url: "/static/img/5.webp",
          id: 1,
          NickName: "\u7279\u65AF\u62C9 Model 3",
          price: 33.99
        },
        {
          url: "/static/img/6.webp",
          id: 2,
          NickName: "\u7279\u65AF\u62C9 Model S",
          price: 37.7
        }
      ]
    }
  ]);
  let TransFerList = vue.ref([
    {
      title: "\u8D63\u5DDE\u4EE3\u529E",
      city: "\u8D63\u5DDE\u5E02",
      src: "/static/img/1.png",
      profile: "\u9ED1\u5316\u80A5\u4F1A\u53D1\u6325\u9ED1\u5316\u80A5\u4F1A\u53D1\u9ED1",
      id: 1,
      closing_cost: 300,
      Transfer_fee: 400
    },
    {
      title: "\u5357\u660C\u4EE3\u529E",
      city: "\u5357\u660C\u5E02",
      src: "/static/img/1.png",
      profile: "\u9ED1\u5316\u80A5\u4F1A\u53D1\u6325\u9ED1\u5316\u80A5\u4F1A\u53D1\u9ED1",
      id: 2,
      closing_cost: 900,
      Transfer_fee: 1400
    }
  ]);
  let roll = vue.ref([
    {
      nickname: "\u4E00\u884C\u62CD\u4E13\u573A",
      status: 1,
      id: 1
    },
    {
      nickname: "\u5E9E\u5927\u62CD\u5356\u4F1A (\u4E0B\u5348\u573A) \u4E13\u573A",
      status: 1,
      id: 2
    },
    {
      nickname: "\u6362\u8F66\u4EA6\u4E13\u573A",
      status: 1,
      id: 3
    }
  ]);
  let RollTotal = vue.ref([
    {
      title: "\u4ECA\u5929\u573A",
      Date: "01\u670812\u65E5",
      week: "\u661F\u671F\u4E09",
      id: 1,
      children: [
        {
          nickname: "\u5E9E\u5927\u62CD\u5356\u4F1A (\u4E0B\u5348\u573A) \u4E13\u573A",
          status: 1,
          quantity: 24,
          id: 1
        },
        {
          nickname: "\u6362\u8F66\u4EA6\u4E13\u573A",
          quantity: 8,
          status: 1,
          id: 2
        },
        {
          nickname: "\u5E9E\u5927\u62CD\u5356\u4F1A (\u4E0B\u5348\u573A) \u4E13\u573A",
          quantity: 11,
          status: 1,
          time: "19:00",
          id: 3
        },
        {
          nickname: "\u98DE\u5EA6 \u5168\u56FD\u62CD\u5356\u573A",
          quantity: 15,
          time: "17:00",
          id: 4
        },
        {
          nickname: "\u957F\u57CE \u5168\u56FD\u62CD\u5356\u573A",
          quantity: 1,
          time: "18:00",
          id: 5
        }
      ]
    },
    {
      title: "\u660E\u5929\u573A",
      Date: "01\u670813\u65E5",
      week: "\u661F\u671F\u56DB",
      id: 2,
      children: [
        {
          nickname: "\u6B63\u7EDF\u96C6\u56E2\u62CD\u4E13\u573A",
          quantity: 11,
          time: "14:00",
          id: 1
        },
        {
          nickname: "\u53CB\u597D\u62CD\u4E13\u573A",
          quantity: 15,
          time: "17:00",
          id: 2
        },
        {
          nickname: "\u957F\u57CE \u5168\u56FD\u62CD\u5356\u573A",
          quantity: 1,
          time: "18:00",
          id: 4
        }
      ]
    }
  ]);
  vue.ref([
    {
      title: "\u80A1\u673A\u6784",
      type: "",
      num: 50
    },
    {
      title: "AA\u673A\u6784",
      type: "",
      num: 10
    }
  ]);
  const _sfc_main$A = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "VeHicLelList" }, [
          (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(10, (item) => {
            return vue.createElementVNode("view", { class: "VeHicLel_container" }, [
              vue.createElementVNode("view", { class: "img" }, [
                vue.createElementVNode("img", {
                  src: "/static/img/1.png",
                  alt: ""
                })
              ]),
              vue.createElementVNode("view", { class: "VeHicLel_right" }, [
                vue.createElementVNode("view", { class: "title" }, [
                  vue.createElementVNode("text", { class: "text" }, "\u5954\u9A70 E\u7EA7 2020\u6B3E 2.0T \u624B\u81EA\u52A8\u4E00\u4F53 \u6539\u6B3E E 300L \u8FD0\u52A8\u65F6\u5C1A\u578B "),
                  vue.createCommentVNode('              <view class="city">'),
                  vue.createCommentVNode("              </view>")
                ]),
                vue.createElementVNode("view", { class: "data_kilometre" }, [
                  vue.createElementVNode("text", { class: "data" }, "2021\u5E7405\u4F59\u989D\u4E0A\u724C"),
                  vue.createElementVNode("span", null, "|"),
                  vue.createElementVNode("text", null, "1.90\u4E07\u516C\u91CC"),
                  vue.createElementVNode("image", { src: "/static/icon/dz.png" }),
                  vue.createElementVNode("text", null, "\u8D63\u5DDE")
                ]),
                vue.createElementVNode("view", { class: "price" }, "25.58\u4E07"),
                vue.createElementVNode("view", { class: "price_pople_num" }, [
                  vue.createElementVNode("view", { class: "time_city" }, [
                    vue.createElementVNode("text", null, "11:00"),
                    vue.createElementVNode("text", null, "\u8D63\u5DDE\u5E02"),
                    vue.createElementVNode("text", null, "\u5373\u65F6\u6210\u4EA4")
                  ]),
                  vue.createElementVNode("view", { class: "num" }, "142\u6B21\u56F4\u89C2"),
                  vue.createElementVNode("view", { class: "love_icon" }, [
                    vue.createElementVNode("image", {
                      src: "/static/icon/love_h.png",
                      alt: ""
                    })
                  ])
                ])
              ])
            ]);
          }), 64)),
          vue.createElementVNode("view", { class: "Tis" }, [
            vue.createElementVNode("text", null, "\u67E5\u770B\u66F4\u591A\u8F66\u6E90"),
            vue.createElementVNode("view", { class: "Tis_icon_img" }, [
              vue.createElementVNode("img", {
                src: "/static/icon/right_x.png",
                alt: ""
              })
            ])
          ])
        ]);
      };
    }
  });
  var vehiclelist = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-e8b35d8c"]]);
  const _sfc_main$z = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      let cityList = vue.ref([
        "\u5317\u4EAC\u5E02",
        "\u4E0A\u6D77\u5E02",
        "\u5929\u6D25\u5E02",
        "\u91CD\u5E86\u5E02",
        "\u6CB3\u5317\u7701",
        "\u5C71\u897F\u7701",
        "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        "\u8FBD\u5B81\u7701",
        "\u5409\u6797\u7701",
        "\u9ED1\u9F99\u6C5F\u7701",
        "\u6C5F\u82CF\u7701",
        "\u6D59\u6C5F\u7701",
        "\u5B89\u5FBD\u7701",
        "\u798F\u5EFA\u7701",
        "\u6C5F\u897F\u7701",
        "\u5C71\u4E1C\u7701",
        "\u6CB3\u5357\u7701",
        "\u6E56\u5317\u7701",
        "\u6E56\u5357\u7701",
        "\u5E7F\u4E1C\u7701",
        "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        "\u6D77\u5357\u7701",
        "\u56DB\u5DDD\u7701",
        "\u8D35\u7701",
        "\u4E91\u5357\u7701",
        "\u897F\u85CF\u81EA\u6CBB\u533A",
        "\u9655\u897F\u7701",
        "\u7518\u8083\u7701",
        "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
        "\u9752\u6D77\u7701",
        "\u65B0\u7586\u7EF4\u543E\u5C14\u65CF\u81EA\u6CBB\u533A",
        "\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A",
        "\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A",
        "\u53F0\u6E7E\u7701",
        "\u5176\u5B83"
      ]);
      let current = vue.ref(0);
      let searchTitle = vue.ref("\u8D63\u5DDE\u5E02");
      let scroll = vue.ref();
      formatAppLog("log", "at pages/index/component/Home.vue:169", scroll);
      const add = (i2) => {
        formatAppLog("log", "at pages/index/component/Home.vue:171", i2);
      };
      const city = vue.ref();
      const cityScreen = () => {
        city.value.open();
      };
      const choice = (i2, idx) => {
        current.value = idx;
        searchTitle.value = i2;
        city.value.close();
        return i2;
      };
      return (_ctx, _cache) => {
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "index_container" }, [
          vue.createElementVNode("scroll-view", null, [
            vue.createCommentVNode(" \u641C\u7D22\u6846   "),
            vue.createElementVNode("view", { class: "search" }, [
              vue.createElementVNode("view", {
                class: "left_select",
                onClick: cityScreen
              }, [
                vue.createElementVNode("view", null, vue.toDisplayString(vue.unref(searchTitle)), 1),
                vue.createElementVNode("image", {
                  class: "top_icon",
                  src: "/static/icon/top.png",
                  alt: ""
                })
              ]),
              vue.createElementVNode("view", { class: "search_input" }, [
                vue.createElementVNode("image", {
                  class: "icon",
                  src: "/static/icon/search.png",
                  alt: ""
                }),
                vue.createTextVNode(" \u641C\u7D22\u60A8\u60F3\u8981\u7684\u8F66 ")
              ]),
              vue.createElementVNode("view", { class: "right_QrCode" }, [
                vue.createElementVNode("image", {
                  class: "icon",
                  src: "/static/icon/Scan_code.png",
                  alt: ""
                })
              ])
            ]),
            vue.createCommentVNode(" \u8F6E\u64AD\u56FE   "),
            vue.createElementVNode("view", { class: "swiper-index" }, [
              vue.createElementVNode("swiper", {
                autoplay: true,
                duration: 1e3,
                circular: "true",
                "indicator-dots": true,
                interval: 3e3,
                "indicator-color": "#4e4e4e39",
                "indicator-active-color": "#fff",
                style: { "height": "100px", "margin": ".5rem 0" }
              }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(bannerList), (item) => {
                  return vue.openBlock(), vue.createElementBlock("swiper-item", {
                    key: item.id
                  }, [
                    vue.createElementVNode("view", {
                      class: "swiper-item",
                      style: { "width": "383px", "height": "100%", "background-color": "rgba(0,0,0,0)" }
                    }, [
                      vue.createElementVNode("img", {
                        src: item.url,
                        mode: "",
                        style: { "width": "22.6rem", "height": "100%", "border-radius": ".5rem .5rem" }
                      }, null, 8, ["src"])
                    ])
                  ]);
                }), 128))
              ])
            ]),
            vue.createCommentVNode(" \u70ED\u95E8\u5E94\u7528   "),
            vue.createElementVNode("view", { class: "Popular_tools" }, [
              vue.createElementVNode("view", { class: "toolsList" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(toolsList), (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    ref_for: true,
                    ref: vue.unref(scroll),
                    onChange: add,
                    class: "icon_list",
                    onClick: ($event) => vue.unref(RoutePush)(item)
                  }, [
                    vue.createElementVNode("view", { class: "icon_container" }, [
                      vue.createElementVNode("image", {
                        src: item.icon || "/static/icon/follow.png",
                        alt: ""
                      }, null, 8, ["src"]),
                      vue.createElementVNode("view", null, vue.toDisplayString(item.text), 1)
                    ])
                  ], 40, ["onClick"]);
                }), 256))
              ])
            ]),
            vue.createCommentVNode(" \u6EDA\u52A8\u516C\u544A   "),
            vue.createElementVNode("view", { class: "newScroll" }, [
              vue.createElementVNode("view", { class: "scroll_Left" }, [
                vue.createElementVNode("image", {
                  class: "image_icon",
                  src: "/static/icon/Notice.png"
                }),
                vue.createElementVNode("text", { class: "text_13" }, "\u516C\u544A:")
              ]),
              vue.createElementVNode("view", { style: { "width": "70%", "line-height": "1rem", "overflow": "hidden", "font-size": "12px" } }, [
                vue.createElementVNode("swiper", {
                  autoplay: true,
                  circular: "true",
                  duration: 1e3,
                  interval: 3e3,
                  vertical: true,
                  style: { "height": "1rem" }
                }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(roll), (item) => {
                    return vue.openBlock(), vue.createElementBlock("swiper-item", {
                      key: item.id
                    }, [
                      vue.createElementVNode("view", { class: "swiper-item" }, [
                        vue.createElementVNode("text", null, vue.toDisplayString(item.nickname) + vue.toDisplayString() + ",\u6B63\u5728\u7ADE\u4EF7\u4E2D\uFF01", 1)
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              vue.createElementVNode("navigator", { url: "./component/Notice?title=\u7ADE\u4EF7\u516C\u544A" }, [
                vue.createElementVNode("view", { class: "scroll_right" }, [
                  vue.createElementVNode("view", { class: "text" }, "\u67E5\u770B\u5168\u90E8"),
                  vue.createElementVNode("view", { class: "img" }, [
                    vue.createElementVNode("img", {
                      src: "/static/icon/right_x.png",
                      alt: ""
                    })
                  ])
                ])
              ])
            ]),
            vue.createCommentVNode(" \u4F18\u9009\u673A\u6784    "),
            vue.createElementVNode("view", { class: "Preferred" }, [
              vue.createElementVNode("navigator", { url: "./component/mechanism?title=\u4F18\u9009\u673A\u6784" }, [
                vue.createElementVNode("view", { class: "Preferred_container" }, [
                  vue.createElementVNode("text", null, "1247\u8F86\u5546\u5BB6\u8F66\u6E90"),
                  vue.createElementVNode("view", { class: "img" }, [
                    vue.createElementVNode("img", {
                      src: "/static/icon/right_x.png",
                      alt: "",
                      class: "icon"
                    })
                  ])
                ]),
                vue.createElementVNode("view", { class: "swiper_container" }, [
                  vue.createElementVNode("swiper", {
                    autoplay: true,
                    duration: 1e3,
                    circular: "true",
                    "indicator-dots": true,
                    interval: 3e3,
                    "indicator-color": "#4e4e4e",
                    "indicator-active-color": "#6699FF",
                    style: { "margin": ".5rem 0" }
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(VehicleSource), (i2) => {
                      return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                        vue.createElementVNode("view", { class: "swiper_container_box" }, [
                          vue.createElementVNode("view", { class: "header" }, [
                            vue.createElementVNode("view", { class: "left_btn" }, [
                              vue.createElementVNode("view", { class: "icon" }, [
                                vue.createElementVNode("image", { src: "/static/icon/ls.png" })
                              ]),
                              vue.createElementVNode("text", null, "\u6B63\u5728\u62A5\u4EF7")
                            ]),
                            vue.createElementVNode("view", { class: "right_heat" }, [
                              vue.createElementVNode("view", { class: "icon" }, [
                                vue.createElementVNode("image", { src: "/static/icon/ls.png" })
                              ]),
                              vue.createElementVNode("text", null, "\u70ED\u5EA6" + vue.toDisplayString(i2.heat || 0), 1)
                            ])
                          ]),
                          vue.createElementVNode("view", { class: "Date_day" }, [
                            vue.createElementVNode("text", null, "\u4ECA\u65E5\u573A" + vue.toDisplayString(i2.Date), 1),
                            vue.createElementVNode("text", null, "|"),
                            vue.createElementVNode("text", null, vue.toDisplayString(i2.city) + " " + vue.toDisplayString(i2.explain), 1)
                          ]),
                          vue.createElementVNode("view", { class: "img_list" }, [
                            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(i2.images, (j2) => {
                              return vue.openBlock(), vue.createElementBlock("view", { class: "img_box" }, [
                                vue.createElementVNode("view", { class: "img" }, [
                                  vue.createElementVNode("image", {
                                    src: j2.url
                                  }, null, 8, ["src"])
                                ]),
                                vue.createElementVNode("view", { class: "name" }, [
                                  vue.createElementVNode("text", null, vue.toDisplayString(j2.NickName), 1),
                                  vue.createElementVNode("text", { style: { "color": "#ff6700" } }, vue.toDisplayString(j2.price || 0) + "\u4E07\u8D77", 1)
                                ])
                              ]);
                            }), 256))
                          ])
                        ])
                      ]);
                    }), 256))
                  ])
                ])
              ])
            ]),
            vue.createCommentVNode(" \u8F66\u5217\u8868   "),
            vue.createVNode(vue.unref(vehiclelist))
          ]),
          vue.createVNode(_component_uni_popup, {
            ref_key: "city",
            ref: city
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "flex-col section flex-display" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(cityList), (i2, idx) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: vue.normalizeClass(["list", { "isActive": idx == vue.unref(current) }]),
                    onClick: ($event) => choice(i2, idx)
                  }, vue.toDisplayString(i2), 11, ["onClick"]);
                }), 256))
              ])
            ]),
            _: 1
          }, 512)
        ]);
      };
    }
  });
  var Home = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-10482aa7"]]);
  const _sfc_main$y = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      let userInfo2 = vue.ref(null);
      if (userInfo2.value !== null) {
        uni.showModal({
          title: "\u767B\u5F55",
          content: "\u672A\u767B\u5F55\uFF0C\u8BF7\u5148\u767B\u5F55",
          success(res) {
            if (res.confirm) {
              uni.navigateTo({
                url: "../user/login/index"
              });
            } else {
              return false;
            }
          },
          fail() {
            return false;
          }
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createVNode(vue.unref(Navbar)),
          vue.createVNode(vue.Transition, null, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createVNode(vue.unref(Home), { class: "topMz" }, null, 512), [
                [vue.vShow, vue.unref(currentIndex) === 1]
              ])
            ]),
            _: 1
          }),
          vue.createVNode(vue.Transition, null, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createVNode(vue.unref(TypeVehicle), null, null, 512), [
                [vue.vShow, vue.unref(currentIndex) == 2]
              ])
            ]),
            _: 1
          }),
          vue.createVNode(vue.Transition, null, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("view", null, "\u626F2", 512), [
                [vue.vShow, vue.unref(currentIndex) == 3]
              ])
            ]),
            _: 1
          }),
          vue.createVNode(vue.Transition, null, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createElementVNode("view", null, "\u626F4", 512), [
                [vue.vShow, vue.unref(currentIndex) == 4]
              ])
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  const _sfc_main$x = /* @__PURE__ */ vue.defineComponent({
    props: {
      id: {
        type: Number
      },
      title: {
        type: String
      },
      userinfo: {
        type: Boolean
      },
      Reset: {}
    },
    emits: ["access", "Reset"],
    setup(__props, { emit }) {
      const props = __props;
      const access = () => {
        emit("access");
      };
      const back = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "backNavbar" }, [
          vue.createElementVNode("view", {
            class: "left_back",
            onClick: back
          }, [
            vue.createElementVNode("img", {
              class: "X_icon",
              src: "/static/icon/left.png",
              alt: ""
            })
          ]),
          vue.createElementVNode("view", { class: "content_title" }, vue.toDisplayString(props.title), 1),
          __props.userinfo ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "right",
            onClick: access
          }, vue.toDisplayString(__props.userinfo ? "\u4FDD\u5B58" : ""), 1)) : __props.Reset ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "reset",
            onClick: _cache[0] || (_cache[0] = (...args) => __props.Reset && __props.Reset(...args))
          }, "\u91CD\u7F6E")) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "right"
          }))
        ]);
      };
    }
  });
  var BackNav = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-adba5504"]]);
  const _sfc_main$w = /* @__PURE__ */ vue.defineComponent({
    props: {
      title: {
        type: String
      }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "TransFer" }, [
          vue.createVNode(vue.unref(BackNav), {
            title: props.title
          }, null, 8, ["title"]),
          vue.createElementVNode("view", { class: "title" }, [
            vue.createElementVNode("view", { class: "city" }, [
              vue.createElementVNode("text", null, "\u60A8\u7684\u57CE\u5E02\uFF1A"),
              vue.createElementVNode("text", null, "\u8D63\u5DDE")
            ]),
            vue.createElementVNode("view", { class: "Order_record" }, [
              vue.createElementVNode("text", null, "\u4E0B\u5355\u8BB0\u5F55")
            ])
          ]),
          vue.createCommentVNode('   <scroll-view style="height: 50vh" scroll-y>'),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(TransFerList), (item) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "list_container" }, [
              vue.createElementVNode("view", { class: "img_header" }, [
                vue.createElementVNode("view", { class: "img" }, [
                  vue.createElementVNode("img", {
                    src: item.src,
                    alt: ""
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", { class: "header_title" }, [
                  vue.createElementVNode("text", null, vue.toDisplayString(item.title), 1),
                  vue.createElementVNode("text", null, vue.toDisplayString(item.city), 1)
                ])
              ]),
              vue.createElementVNode("view", { class: "profile" }, " \u516C\u53F8\u7B80\u4ECB\uFF1A" + vue.toDisplayString(item.profile), 1),
              vue.createElementVNode("view", { class: "cost" }, [
                vue.createElementVNode("view", { class: "transfer_cost flex-column" }, [
                  vue.createElementVNode("text", null, vue.toDisplayString(item.closing_cost), 1),
                  vue.createElementVNode("text", null, "\u672C\u5E02\u8FC7\u6237\u8D39")
                ]),
                vue.createElementVNode("view", { class: "line" }, [
                  vue.createElementVNode("view", { class: "line_box" })
                ]),
                vue.createElementVNode("view", { class: "FileUp_cost flex-column" }, [
                  vue.createElementVNode("text", null, vue.toDisplayString(item.Transfer_fee), 1),
                  vue.createElementVNode("text", null, "\u4E13\u7C4D\u63D0\u6863\u8D39")
                ])
              ])
            ]);
          }), 256)),
          vue.createCommentVNode("   </scroll-view>")
        ]);
      };
    }
  });
  var PagesIndexComponentTransFer = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-455970da"]]);
  const _sfc_main$v = /* @__PURE__ */ vue.defineComponent({
    props: {
      title: {
        type: String,
        default: "\u7ADE\u4EF7\u516C\u544A"
      }
    },
    setup(__props) {
      const props = __props;
      const back = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(vue.unref(StatusBar)),
          vue.createElementVNode("view", { class: "backNavbar" }, [
            vue.createElementVNode("view", {
              class: "left_back",
              onClick: back
            }, [
              vue.createElementVNode("img", {
                class: "X_icon",
                src: "/static/icon/left.png",
                alt: ""
              })
            ]),
            vue.createElementVNode("view", { class: "content_title" }, vue.toDisplayString(props.title), 1),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createElementVNode("text", null, "\u5168\u7701"),
              vue.createElementVNode("view", { class: "img" }, [
                vue.createElementVNode("img", {
                  src: "/static/icon/top.png",
                  alt: ""
                })
              ])
            ])
          ]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(RollTotal), (i2) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "site_second_container" }, [
              vue.createElementVNode("view", { class: "site_list" }, [
                vue.createElementVNode("view", { class: "site_second_date" }, [
                  vue.createElementVNode("text", { class: "today" }, vue.toDisplayString(i2.title), 1),
                  vue.createElementVNode("text", { class: "Date" }, "(" + vue.toDisplayString(i2.Date) + ")", 1)
                ]),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(i2.children, (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "Bidding_list" }, [
                    vue.createElementVNode("view", { class: "left_type" }, [
                      vue.createElementVNode("text", null, vue.toDisplayString(item.status || item.status === 1 ? "\u7ADE\u4EF7\u4E2D" : item.time), 1),
                      vue.createElementVNode("text", null, "|"),
                      vue.createElementVNode("text", null, vue.toDisplayString(item.nickname), 1)
                    ]),
                    vue.createElementVNode("view", { class: "right_num" }, [
                      vue.createElementVNode("text", null, vue.toDisplayString(item.quantity || 0) + "\u8F86\u8F66", 1),
                      vue.createElementVNode("view", { class: "img" }, [
                        vue.createElementVNode("img", {
                          src: "/static/icon/right_x.png",
                          alt: ""
                        })
                      ])
                    ])
                  ]);
                }), 256))
              ])
            ]);
          }), 256))
        ]);
      };
    }
  });
  var PagesIndexComponentNotice = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-467987c0"]]);
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const _sfc_main$u = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $props.size + "px" }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$a], ["__scopeId", "data-v-a2e81f6e"]]);
  const _sfc_main$t = {
    name: "UniRate",
    props: {
      isFill: {
        type: [Boolean, String],
        default: true
      },
      color: {
        type: String,
        default: "#ececec"
      },
      activeColor: {
        type: String,
        default: "#ffca3e"
      },
      disabledColor: {
        type: String,
        default: "#c0c0c0"
      },
      size: {
        type: [Number, String],
        default: 24
      },
      value: {
        type: [Number, String],
        default: 0
      },
      modelValue: {
        type: [Number, String],
        default: 0
      },
      max: {
        type: [Number, String],
        default: 5
      },
      margin: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      readonly: {
        type: [Boolean, String],
        default: false
      },
      allowHalf: {
        type: [Boolean, String],
        default: false
      },
      touchable: {
        type: [Boolean, String],
        default: true
      }
    },
    data() {
      return {
        valueSync: "",
        userMouseFristMove: true,
        userRated: false,
        userLastRate: 1
      };
    },
    watch: {
      value(newVal) {
        this.valueSync = Number(newVal);
      },
      modelValue(newVal) {
        this.valueSync = Number(newVal);
      }
    },
    computed: {
      stars() {
        const value = this.valueSync ? this.valueSync : 0;
        const starList = [];
        const floorValue = Math.floor(value);
        const ceilValue = Math.ceil(value);
        for (let i2 = 0; i2 < this.max; i2++) {
          if (floorValue > i2) {
            starList.push({
              activeWitch: "100%"
            });
          } else if (ceilValue - 1 === i2) {
            starList.push({
              activeWitch: (value - floorValue) * 100 + "%"
            });
          } else {
            starList.push({
              activeWitch: "0"
            });
          }
        }
        return starList;
      },
      marginNumber() {
        return Number(this.margin);
      }
    },
    created() {
      this.valueSync = Number(this.value || this.modelValue);
      this._rateBoxLeft = 0;
      this._oldValue = null;
    },
    mounted() {
      setTimeout(() => {
        this._getSize();
      }, 100);
    },
    methods: {
      touchstart(e) {
        if (this.readonly || this.disabled)
          return;
        const {
          clientX,
          screenX
        } = e.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      touchmove(e) {
        if (this.readonly || this.disabled || !this.touchable)
          return;
        const {
          clientX,
          screenX
        } = e.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      mousedown(e) {
      },
      mousemove(e) {
      },
      mouseleave(e) {
      },
      _getRateCount(clientX) {
        this._getSize();
        const size = Number(this.size);
        if (size === NaN) {
          return new Error("size \u5C5E\u6027\u53EA\u80FD\u8BBE\u7F6E\u4E3A\u6570\u5B57");
        }
        const rateMoveRange = clientX - this._rateBoxLeft;
        let index = parseInt(rateMoveRange / (size + this.marginNumber));
        index = index < 0 ? 0 : index;
        index = index > this.max ? this.max : index;
        const range = parseInt(rateMoveRange - (size + this.marginNumber) * index);
        let value = 0;
        if (this._oldValue === index && !this.PC)
          return;
        this._oldValue = index;
        if (this.allowHalf) {
          if (range > size / 2) {
            value = index + 1;
          } else {
            value = index + 0.5;
          }
        } else {
          value = index + 1;
        }
        value = Math.max(0.5, Math.min(value, this.max));
        this.valueSync = value;
        this._onChange();
      },
      _onChange() {
        this.$emit("input", this.valueSync);
        this.$emit("update:modelValue", this.valueSync);
        this.$emit("change", {
          value: this.valueSync
        });
      },
      _getSize() {
        uni.createSelectorQuery().in(this).select(".uni-rate").boundingClientRect().exec((ret) => {
          if (ret) {
            this._rateBoxLeft = ret[0].left;
          }
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        ref: "uni-rate",
        class: "uni-rate"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.stars, (star, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(["uni-rate__icon", { "uni-cursor-not-allowed": $props.disabled }]),
            style: vue.normalizeStyle({ "margin-right": $options.marginNumber + "px" }),
            key: index,
            onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.touchstart && $options.touchstart(...args), ["stop"])),
            onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.touchmove && $options.touchmove(...args), ["stop"])),
            onMousedown: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
            onMousemove: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.mousemove && $options.mousemove(...args), ["stop"])),
            onMouseleave: _cache[4] || (_cache[4] = (...args) => $options.mouseleave && $options.mouseleave(...args))
          }, [
            vue.createVNode(_component_uni_icons, {
              color: $props.color,
              size: $props.size,
              type: $props.isFill ? "star-filled" : "star"
            }, null, 8, ["color", "size", "type"]),
            vue.createElementVNode("view", {
              style: vue.normalizeStyle({ width: star.activeWitch }),
              class: "uni-rate__icon-on"
            }, [
              vue.createVNode(_component_uni_icons, {
                color: $props.disabled ? $props.disabledColor : $props.activeColor,
                size: $props.size,
                type: "star-filled"
              }, null, 8, ["color", "size"])
            ], 4)
          ], 38);
        }), 128))
      ], 512)
    ]);
  }
  var __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$9], ["__scopeId", "data-v-978a5ada"]]);
  const __default__$1 = {
    data() {
      return {};
    },
    onReachBottom() {
      formatAppLog("log", "at pages/index/component/mechanism.vue:136", "vue2 \u6EDA\u52A8\u5230\u5E95\u90E8\u4E86");
    }
  };
  const _sfc_main$s = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
    props: {
      title: {
        type: String,
        default: "\u7ADE\u4EF7\u516C\u544A"
      }
    },
    setup(__props) {
      let screen = vue.ref([
        {
          text: "\u54C1\u724C",
          id: 1
        },
        {
          text: "\u8F66\u4EF7",
          id: 2
        },
        {
          text: "\u57CE\u5E02",
          id: 3
        },
        {
          text: "\u7B5B\u9009",
          id: 4
        }
      ]);
      const back = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "backNavbar" }, [
            vue.createElementVNode("view", {
              class: "left_back",
              onClick: back
            }, [
              vue.createElementVNode("img", {
                class: "X_icon",
                src: "/static/icon/left.png",
                alt: ""
              })
            ]),
            vue.createElementVNode("view", { class: "content_title" }),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createElementVNode("view", { class: "img" }, [
                vue.createElementVNode("img", {
                  src: "/static/icon/share.png",
                  alt: ""
                })
              ])
            ])
          ]),
          vue.createCommentVNode('    <scroll-view style="height: 1000px" scroll-y  lower-threshold="50" @scrolltolower="add">'),
          vue.createCommentVNode("    </scroll-view>"),
          vue.createElementVNode("view", null, [
            vue.createCommentVNode(" \u5BB9\u5668     "),
            vue.createElementVNode("view", { class: "MainPage" }, [
              vue.createCommentVNode("   \u5934\u90E8    "),
              vue.createElementVNode("view", { class: "header" }, [
                vue.createElementVNode("view", { class: "img" }, [
                  vue.createElementVNode("img", {
                    src: "/static/img/1.png",
                    alt: ""
                  })
                ]),
                vue.createElementVNode("view", { class: "right_info" }, [
                  vue.createElementVNode("text", { class: "title" }, "\u4E13\u573A"),
                  vue.createElementVNode("view", { class: "num" }, [
                    vue.createElementVNode("text", null, "16\u8F86\u8F66"),
                    vue.createElementVNode("text", { class: "line" }, "|"),
                    vue.createElementVNode("text", null, "\u8D85\u7EA7\u62CD")
                  ]),
                  vue.createElementVNode("view", { class: "reputation" }, [
                    vue.createElementVNode("text", null, "\u8F66\u5546\u4FE1\u8A89\u503C\uFF1A"),
                    vue.createVNode(_component_uni_rate, {
                      size: 15,
                      touchable: false,
                      color: "#bbb",
                      "active-color": "#3296FA",
                      readonly: true,
                      value: 5,
                      "is-fill": false
                    })
                  ]),
                  vue.createElementVNode("view", { class: "date" }, [
                    vue.createElementVNode("view", { class: "dark" }, [
                      vue.createElementVNode("text", null, "\u6697\u62CD\uFF1A"),
                      vue.createElementVNode("text", { class: "Date" }, "01\u670804\u65E5"),
                      vue.createElementVNode("text", { class: "time" }, "19:00")
                    ]),
                    vue.createElementVNode("view", { class: "bright" }, [
                      vue.createElementVNode("text", null, "\u660E\u62CD\uFF1A"),
                      vue.createElementVNode("text", { class: "Date" }, "01\u670805\u65E5"),
                      vue.createElementVNode("text", { class: "time" }, "14:00")
                    ])
                  ])
                ])
              ]),
              vue.createCommentVNode("  \u7B5B\u9009    "),
              vue.createElementVNode("view", { class: "screen" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(screen), (i2) => {
                  return vue.openBlock(), vue.createElementBlock("text", null, vue.toDisplayString(i2.text), 1);
                }), 256))
              ]),
              vue.createCommentVNode("  \u8F66\u5217\u8868       "),
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(10, (item) => {
                return vue.createElementVNode("view", { class: "VeHicLel_container" }, [
                  vue.createElementVNode("view", { class: "img" }, [
                    vue.createElementVNode("img", {
                      src: "/static/img/1.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("view", { class: "VeHicLel_right" }, [
                    vue.createElementVNode("view", { class: "title" }, [
                      vue.createElementVNode("text", null, "[\u5468\u53E3]\u5954\u9A70 E\u7EA7 2020\u6B3E 2.0T \u624B\u81EA\u52A8\u4E00\u4F53 \u6539\u6B3E E 300L \u8FD0\u52A8\u65F6\u5C1A\u578B"),
                      vue.createElementVNode("view", { class: "love_icon" }, [
                        vue.createElementVNode("img", {
                          src: "/static/icon/love_h.png",
                          alt: ""
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "data_kilometre" }, [
                      vue.createElementVNode("text", { class: "data" }, "2021\u5E7405\u4F59\u989D\u4E0A\u724C"),
                      vue.createElementVNode("span", null, "|"),
                      vue.createElementVNode("text", null, "1.90\u4E07\u516C\u91CC")
                    ]),
                    vue.createElementVNode("view", { class: "price_pople_num" }, [
                      vue.createElementVNode("view", { class: "price" }, "25.58\u4E07"),
                      vue.createElementVNode("view", { class: "num" }, "142\u6B21\u56F4\u89C2")
                    ])
                  ])
                ]);
              }), 64))
            ])
          ])
        ]);
      };
    }
  }));
  var PagesIndexComponentMechanism = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-6a1e963e"]]);
  let VehicleInfo = vue.ref([
    {
      type: "\u884C\u9A76\u91CC\u7A0B",
      info: "5.65\u4E07\u516C\u91CC",
      id: 1
    },
    {
      type: "2017-06\u4E0A\u724C",
      info: "4\u5E747\u4E2A\u6708",
      id: 2
    },
    {
      type: "\u6392\u653E\u6807\u51C6",
      info: "\u56FD\u4E94",
      id: 3
    },
    {
      type: "\u6240\u5C5E\u673A\u6784",
      info: "xx\u673A\u6784",
      id: 4
    },
    {
      type: "\u673A\u6784\u4FE1\u8A89\u503C",
      value: 4.5,
      id: 5,
      status: 1
    },
    {
      type: "\u8F66\u8F86\u6240\u5728\u5730",
      info: "\u6C5F\u897F\u7701\u8D63\u5DDE\u5E02",
      id: 6
    },
    {
      type: "\u71C3\u6CB9\u7C7B\u578B",
      info: "\u6C7D\u6CB9",
      id: 7
    },
    {
      type: "\u4F7F\u7528\u6027\u8D28",
      info: "\u975E\u8FD0\u8425",
      id: 8
    },
    {
      type: "\u8F66\u8EAB\u989C\u8272",
      info: "\u767D\u8272",
      id: 9
    },
    {
      type: "\u8F66\u8F86\u94A5\u5319",
      info: "\u4E00\u628A",
      id: 9
    },
    {
      type: "\u5E74\u68C0\u6709\u6548\u671F",
      info: "2022/08/04",
      id: 10
    },
    {
      type: "\u4EA4\u5F3A\u9669\u6709\u6548\u671F",
      info: "2022/08/01",
      id: 11
    },
    {
      type: "\u8D2D\u7F6E\u7A0E",
      info: "\u5B8C\u7A0E",
      id: 12
    },
    {
      type: "\u8FDD\u7AE0\u7F5A\u6B3E",
      info: "0\u5143",
      id: 13
    },
    {
      type: "\u8FDD\u7AE0\u6263\u5206",
      info: "0\u5206",
      id: 14
    },
    {
      type: "\u8F66\u4E3B\u7C7B\u578B",
      info: "\u79C1\u8F66",
      id: 15
    },
    {
      type: "\u4EA7\u8BC1\u53D8\u66F4\u8BB0\u5F55",
      info: "\u65E0",
      id: 16
    },
    {
      type: "\u8FC7\u6237\u6B21\u6570",
      info: "0\u6B21",
      id: 17
    }
  ]);
  let score = vue.ref([
    {
      type: "\u5916\u89C2\u8BC4\u5206",
      value: 85,
      id: 1
    },
    {
      type: "\u9AA8\u67B6\u8BC4\u7EA7",
      value: "A",
      id: 2
    },
    {
      type: "\u5185\u9970\u8BC4\u5206",
      value: 95,
      id: 3
    }
  ]);
  let AuctionList = vue.ref([
    {
      Logo: "/static/img/ilogo.jpg",
      title: "\u4E07\u8FBE\u96C6\u56E2\u62CD\u4E13\u573A",
      num: 10,
      type: "\u5F00\u59CB\u6697\u62CD",
      Date: "2022-1-15",
      time: "1652153650000",
      djs: "",
      children: [
        {
          img: "/static/img/1.png",
          id: 1
        },
        {
          img: "/static/img/2.jpg",
          id: 2
        },
        {
          img: "/static/img/3.webp",
          id: 3
        }
      ]
    },
    {
      Logo: "/static/img/ilogo.jpg",
      title: "\u9ED1\u6697\u96C6\u56E2\u62CD\u4E13\u573A",
      num: 10,
      type: "\u5F00\u59CB\u660E\u62CD",
      djs: "",
      time: "1652953660000",
      Date: "2022-1-16",
      children: [
        {
          img: "/static/img/1.png",
          id: 1
        },
        {
          img: "/static/img/2.jpg",
          id: 2
        },
        {
          img: "/static/img/3.webp",
          id: 3
        }
      ]
    }
  ]);
  let timeDom = vue.ref();
  let list$1 = vue.reactive({
    data: []
  });
  let tim = null;
  const countTime = (value) => {
    let date = new Date();
    let now = date.getTime();
    let endDate = new Date(value);
    let end = endDate.getTime();
    let differTime = end - now;
    let h2, m2, s2;
    if (differTime >= 0) {
      h2 = Math.floor(differTime / 1e3 / 60 / 60);
      m2 = Math.floor(differTime / 1e3 / 60 % 60);
      s2 = Math.floor(differTime / 1e3 % 60);
      h2 = h2 < 10 ? "0" + h2 : h2;
      m2 = m2 < 10 ? "0" + m2 : m2;
      s2 = s2 < 10 ? "0" + s2 : s2;
      timeDom.value = h2 + "\u5C0F\u65F6" + m2 + "\u5206" + s2 + "\u79D2";
      setInterval(() => {
        countTime(value);
      }, 1e3);
      return h2 + "\u5C0F\u65F6" + m2 + "\u5206" + s2 + "\u79D2";
    } else {
      timeDom.value = "00\u5C0F\u65F6 00\u5206 00\u79D2";
    }
  };
  const CountDown = () => {
    let arr = [];
    AuctionList.value.forEach((i2, index) => {
      AuctionList.value[index]["djs"] = AuctionList.value[index]["time"];
      console.log();
      arr = AuctionList.value.length < 14 ? AuctionList.value : "00\u5C0F\u65F600\u520600\u79D2";
      formatAppLog("log", "at utils/formatDate.ts:78", list$1.data);
    });
    tim = setInterval(() => {
      for (let i2 in arr) {
        let a2 = parseInt(arr[i2]["time"]);
        let t2 = new Date().getTime();
        let ti = a2 - t2;
        if (ti > 0) {
          var hh = Math.floor(ti / 1e3 / 60 / 60 % 24);
          var mm = Math.floor(ti / 1e3 / 60 % 60);
          var ss = Math.floor(ti / 1e3 % 60);
        }
        arr[i2]["djs"] = hh + "\u5C0F\u65F6" + mm + "\u5206" + ss + "\u79D2";
        list$1.data = arr;
      }
    }, 1e3);
  };
  const _sfc_main$r = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      vue.ref();
      vue.ref(null);
      vue.onMounted(() => {
        CountDown();
      });
      vue.onUnmounted(() => {
        clearInterval(tim);
        formatAppLog("log", "at pages/BiddingIndex/components/Auction.vue:82", "zzz");
      });
      vue.onErrorCaptured(() => {
        clearInterval(tim);
      });
      const to2 = () => {
        uni.navigateTo({
          url: "./Details/index"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "header" }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(3, (i2) => {
              return vue.createElementVNode("view", {
                class: "header_list",
                key: i2
              }, [
                vue.createElementVNode("view", null, [
                  vue.createTextVNode("\u4ECA\u65E5\u573A("),
                  vue.createElementVNode("text", null, vue.toDisplayString(10)),
                  vue.createTextVNode(")")
                ])
              ]);
            }), 64))
          ]),
          vue.createElementVNode("view", { class: "container" }, [
            vue.createElementVNode("scroll-view", {
              style: { "height": "100%" },
              "scroll-y": ""
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(list$1).data, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "Special_session",
                  onClick: to2
                }, [
                  vue.createElementVNode("view", { class: "Special_header" }, [
                    vue.createElementVNode("view", { class: "exhibition" }, [
                      vue.createElementVNode("img", {
                        src: item.Logo,
                        alt: ""
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("view", { class: "Y_info" }, [
                      vue.createElementVNode("view", { class: "title" }, [
                        vue.createElementVNode("view", { class: "ident" }, "\u4F18\u9009"),
                        vue.createElementVNode("text", null, vue.toDisplayString(item.title), 1)
                      ]),
                      vue.createElementVNode("view", { class: "num" }, [
                        vue.createElementVNode("text", null, vue.toDisplayString(item.num || 0) + " \u8F86\u8F66", 1),
                        vue.createElementVNode("text", null, "|"),
                        vue.createElementVNode("text", null, "\u8D85\u7EA7\u62CD")
                      ]),
                      vue.createElementVNode("view", { class: "reputation" }, [
                        vue.createElementVNode("text", null, "\u8F66\u4E0A\u4FE1\u8A89\u503C\uFF1A"),
                        vue.createVNode(_component_uni_rate, {
                          touchable: false,
                          color: "#bbb",
                          "active-color": "#1487F5",
                          readonly: true,
                          value: 2.5,
                          "is-fill": false
                        }, null, 8, ["value"])
                      ])
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "Date" }, [
                    vue.createElementVNode("text", { class: "Tb" }, "\u6295\u6807\u4E2D"),
                    vue.createCommentVNode("            {{|| '00:00:00'}}"),
                    vue.createCommentVNode('            <text class="h" >{{countTime(item.Date)}}</text>'),
                    vue.createElementVNode("text", { class: "h" }, vue.toDisplayString(item.djs || "\u5C0F\u65F600\u520600\u79D2"), 1),
                    vue.createElementVNode("text", { class: "h" }, "\u5F00\u59CB\u660E\u62CD")
                  ]),
                  vue.createElementVNode("view", { class: "vehicle_img" }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.children, (i2) => {
                      return vue.openBlock(), vue.createElementBlock("view", { class: "img" }, [
                        vue.createElementVNode("img", {
                          src: i2.img,
                          alt: ""
                        }, null, 8, ["src"]),
                        i2.id === 3 ? (vue.openBlock(), vue.createElementBlock("view", {
                          key: 0,
                          class: "mask"
                        }, [
                          vue.createElementVNode("text", null, "+13")
                        ])) : vue.createCommentVNode("v-if", true)
                      ]);
                    }), 256))
                  ])
                ]);
              }), 256))
            ])
          ])
        ]);
      };
    }
  });
  var Auction = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-48503c99"]]);
  const _sfc_main$q = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      vue.ref([]);
      vue.ref(1);
      let height = vue.ref(0);
      height.value = document.documentElement.clientHeight - 80;
      let Nav = vue.ref([
        {
          title: "\u54C1\u724C",
          icon: "/static/icon/top_s.png",
          id: 1
        },
        {
          title: "\u8F66\u4EF7",
          icon: "/static/icon/top_s.png",
          id: 2
        },
        {
          title: "\u57CE\u5E02",
          icon: "/static/icon/top_s.png",
          id: 3
        },
        {
          title: "\u7B5B\u9009",
          icon: "/static/icon/screen.png",
          id: 4
        }
      ]);
      const scrollTop = () => {
        formatAppLog("log", "at pages/BiddingIndex/components/whole.vue:89", 111);
      };
      if (height.value > 0) {
        scrollTop();
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "typeClass" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(Nav), (i2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "brand",
                key: i2.id
              }, [
                vue.createElementVNode("text", null, vue.toDisplayString(i2.title), 1),
                vue.createElementVNode("view", { class: "img" }, [
                  vue.createElementVNode("img", {
                    class: "X_icon",
                    src: i2.icon,
                    alt: ""
                  }, null, 8, ["src"])
                ])
              ]);
            }), 128)),
            vue.createCommentVNode("        \u8F66\u4EF7"),
            vue.createCommentVNode("        \u57CE\u5E02"),
            vue.createCommentVNode("        \u7B5B\u9009")
          ]),
          vue.createElementVNode("scroll-view", {
            style: { "height": "80vh" },
            onScrolltolower: scrollTop,
            "scroll-y": ""
          }, [
            vue.createElementVNode("view", { class: "flex-col container" }, [
              vue.createElementVNode("view", { class: "flex-col group" }, [
                vue.createElementVNode("view", { class: "VeHicLelList" }, [
                  (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(10, (item) => {
                    return vue.createElementVNode("view", { class: "VeHicLel_container" }, [
                      vue.createElementVNode("view", { class: "img" }, [
                        vue.createElementVNode("img", {
                          src: "/static/img/1.png",
                          alt: ""
                        })
                      ]),
                      vue.createElementVNode("view", { class: "VeHicLel_right" }, [
                        vue.createElementVNode("view", { class: "title" }, [
                          vue.createElementVNode("text", null, "[\u5468\u53E3]\u5954\u9A70 E\u7EA7 2020\u6B3E 2.0T \u624B\u81EA\u52A8\u4E00\u4F53 \u6539\u6B3E E 300L \u8FD0\u52A8\u65F6\u5C1A\u578B"),
                          vue.createElementVNode("view", { class: "love_icon" }, [
                            vue.createElementVNode("img", {
                              src: "/static/icon/love_h.png",
                              alt: ""
                            })
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "data_kilometre" }, [
                          vue.createElementVNode("text", { class: "data" }, "2021\u5E7405\u4F59\u989D\u4E0A\u724C"),
                          vue.createElementVNode("span", null, "|"),
                          vue.createElementVNode("text", null, "1.90\u4E07\u516C\u91CC")
                        ]),
                        vue.createElementVNode("view", { class: "price_pople_num" }, [
                          vue.createElementVNode("view", { class: "price" }, "25.58\u4E07"),
                          vue.createElementVNode("view", { class: "num" }, "142\u6B21\u56F4\u89C2")
                        ])
                      ])
                    ]);
                  }), 64))
                ])
              ])
            ])
          ], 32)
        ]);
      };
    }
  });
  var whole = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-76347dad"]]);
  const _sfc_main$p = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      let Index = vue.ref(1);
      let head = vue.ref([{ title: "\u7ADE\u62CD\u573A\u6B21", id: 1 }, { title: "\u5168\u90E8\u8F66\u6E90", id: 2 }]);
      let current = vue.ref(0);
      let searchTitle = vue.ref("\u8D63\u5DDE\u5E02");
      let cityList = vue.ref([
        "\u5317\u4EAC\u5E02",
        "\u4E0A\u6D77\u5E02",
        "\u5929\u6D25\u5E02",
        "\u91CD\u5E86\u5E02",
        "\u6CB3\u5317\u7701",
        "\u5C71\u897F\u7701",
        "\u5185\u8499\u53E4\u81EA\u6CBB\u533A",
        "\u8FBD\u5B81\u7701",
        "\u5409\u6797\u7701",
        "\u9ED1\u9F99\u6C5F\u7701",
        "\u6C5F\u82CF\u7701",
        "\u6D59\u6C5F\u7701",
        "\u5B89\u5FBD\u7701",
        "\u798F\u5EFA\u7701",
        "\u6C5F\u897F\u7701",
        "\u5C71\u4E1C\u7701",
        "\u6CB3\u5357\u7701",
        "\u6E56\u5317\u7701",
        "\u6E56\u5357\u7701",
        "\u5E7F\u4E1C\u7701",
        "\u5E7F\u897F\u58EE\u65CF\u81EA\u6CBB\u533A",
        "\u6D77\u5357\u7701",
        "\u56DB\u5DDD\u7701",
        "\u8D35\u7701",
        "\u4E91\u5357\u7701",
        "\u897F\u85CF\u81EA\u6CBB\u533A",
        "\u9655\u897F\u7701",
        "\u7518\u8083\u7701",
        "\u5B81\u590F\u56DE\u65CF\u81EA\u6CBB\u533A",
        "\u9752\u6D77\u7701",
        "\u65B0\u7586\u7EF4\u543E\u5C14\u65CF\u81EA\u6CBB\u533A",
        "\u9999\u6E2F\u7279\u522B\u884C\u653F\u533A",
        "\u6FB3\u95E8\u7279\u522B\u884C\u653F\u533A",
        "\u53F0\u6E7E\u7701",
        "\u5176\u5B83"
      ]);
      const toggle = async (i2) => {
        Index.value = i2.id;
      };
      const city = vue.ref();
      const cityScreen = () => {
        city.value.open();
      };
      const choice = (i2, idx) => {
        current.value = idx;
        searchTitle.value = i2;
        city.value.close();
        return i2;
      };
      return (_ctx, _cache) => {
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(vue.unref(StatusBar)),
          vue.createElementVNode("view", { class: "header" }, [
            vue.createElementVNode("view", {
              class: "left_city",
              onClick: cityScreen
            }, [
              vue.createElementVNode("view", { class: "city" }, vue.toDisplayString(vue.unref(searchTitle)), 1),
              vue.createElementVNode("view", { class: "icon" }, [
                vue.createElementVNode("image", {
                  src: "/static/icon/top.png",
                  alt: ""
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "list" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(head), (i2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["Auction", { "isActive": vue.unref(Index) == i2.id }]),
                  key: i2.id,
                  onClick: ($event) => toggle(i2)
                }, [
                  vue.createElementVNode("text", null, vue.toDisplayString(i2.title), 1),
                  vue.createElementVNode("view", {
                    class: vue.normalizeClass(["line", { "isLine": i2.id === vue.unref(Index) }])
                  }, null, 2)
                ], 10, ["onClick"]);
              }), 128))
            ])
          ]),
          vue.createVNode(vue.Transition, null, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createVNode(vue.unref(Auction), null, null, 512), [
                [vue.vShow, vue.unref(Index) == 1]
              ])
            ]),
            _: 1
          }),
          vue.createVNode(vue.Transition, null, {
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createVNode(vue.unref(whole), null, null, 512), [
                [vue.vShow, vue.unref(Index) == 2]
              ])
            ]),
            _: 1
          }),
          vue.createCommentVNode(" \u5F39\u51FA\u9762\u677F   "),
          vue.createVNode(_component_uni_popup, {
            ref_key: "city",
            ref: city
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "flex-col section flex-display" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(cityList), (i2, idx) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: vue.normalizeClass(["list", { "isActive": idx == vue.unref(current) }]),
                    onClick: ($event) => choice(i2, idx)
                  }, vue.toDisplayString(i2), 11, ["onClick"]);
                }), 256))
              ])
            ]),
            _: 1
          }, 512)
        ]);
      };
    }
  });
  var PagesBiddingIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-5214e233"]]);
  const _sfc_main$o = {
    name: "swiper"
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("swiper", null, [
        (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(10, (i2) => {
          return vue.createElementVNode("swiper-item", {
            autoplay: true,
            duration: 1e3,
            circular: "true",
            "indicator-dots": true,
            interval: 3e3,
            "indicator-color": "#4e4e4e39",
            "indicator-active-color": "#fff"
          }, [
            vue.createElementVNode("img", {
              src: "/static/img/bg1.webp",
              alt: ""
            })
          ]);
        }), 64))
      ])
    ]);
  }
  var Swiper = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$8]]);
  const _sfc_main$n = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      let value = vue.ref("2022/1/22 00:00:00");
      countTime(value.value);
      const back = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "backNavbar" }, [
            vue.createElementVNode("view", {
              class: "left_back",
              onClick: back
            }, [
              vue.createElementVNode("img", {
                class: "X_icon",
                src: "/static/icon/left.png",
                alt: ""
              })
            ]),
            vue.createElementVNode("view", { class: "content_title" }),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createElementVNode("view", { class: "img" }, [
                vue.createCommentVNode('          <img src="/static/icon/share.png" alt="">')
              ])
            ])
          ]),
          vue.createElementVNode("view", null, [
            vue.createCommentVNode(" \u8F6E\u64AD\u56FE     "),
            vue.createVNode(vue.unref(Swiper)),
            vue.createElementVNode("view", { class: "countdown" }, [
              vue.createElementVNode("view", { class: "left" }, [
                vue.createElementVNode("view", { class: "img" }, [
                  vue.createElementVNode("img", {
                    src: "/static/icon/search.png",
                    alt: ""
                  })
                ]),
                vue.createElementVNode("text", null, "\u6B63\u5728\u6295\u6807")
              ]),
              vue.createElementVNode("view", { class: "content" }, " \u5269\u4F59 " + vue.toDisplayString(vue.unref(timeDom)), 1)
            ]),
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("view", { class: "title" }, "\u6697\u62CD \u3010\u8D63\u5DDE\u3011 \u798F\u7279 \u63D0\u514B\u65AF 2012\u6B3E 1.6L \u53CC\u79BB\u5408\u4E09\u53A2 \u98CE\u5C1A\u578B"),
              vue.createElementVNode("view", { class: "price" }, [
                vue.createElementVNode("view", { class: "StartingPrice box" }, [
                  vue.createElementVNode("text", { class: "left" }, "\u8D77\u62CD\u4EF7:"),
                  vue.createElementVNode("text", null, "100\u4E07")
                ]),
                vue.createElementVNode("view", { class: "PlatformCommission box" }, [
                  vue.createElementVNode("text", { class: "left" }, "\u5E73\u53F0\u4F63\u91D1:"),
                  vue.createElementVNode("text", null, "--")
                ]),
                vue.createElementVNode("view", { class: "MyPrice box" }, [
                  vue.createElementVNode("text", { class: "left" }, "\u6211\u7684\u51FA\u4EF7:"),
                  vue.createElementVNode("text", null, "--")
                ]),
                vue.createElementVNode("view", { class: "My_TotalPrice box" }, [
                  vue.createElementVNode("text", { class: "left" }, "\u6211\u7684\u5408\u8BA1\u4EF7:"),
                  vue.createElementVNode("text", null, "--")
                ])
              ]),
              vue.createCommentVNode("  \u7ADE\u4EF7\u8BF4\u660E    "),
              vue.createElementVNode("view", { class: "explain" }, [
                vue.createElementVNode("text", { class: "txt" }, "\u7ADE\u4EF7\u8BF4\u660E"),
                vue.createElementVNode("text", { class: "rule" }, "\u67E5\u770B\u8D39\u7528/\u4EF2\u88C1/\u8FC7\u6237\u89C4\u5219"),
                vue.createElementVNode("view", { class: "right_icon" }, [
                  vue.createElementVNode("img", {
                    src: "/static/icon/right_x.png",
                    alt: ""
                  })
                ])
              ]),
              vue.createCommentVNode("  \u8F66\u8F86\u914D\u7F6E\u4FE1\u606F   "),
              vue.createElementVNode("view", { class: "Years" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(VehicleInfo), (i2) => {
                  return vue.openBlock(), vue.createElementBlock("view", { class: "trip" }, [
                    i2.status !== 1 ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, vue.toDisplayString(i2.info), 1)) : vue.createCommentVNode("v-if", true),
                    i2.status == 1 ? (vue.openBlock(), vue.createBlock(_component_uni_rate, {
                      key: 1,
                      size: 15,
                      touchable: false,
                      color: "#bbb",
                      "active-color": "#3296FA",
                      readonly: true,
                      value: i2.value,
                      "is-fill": false
                    }, null, 8, ["value"])) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode("text", null, vue.toDisplayString(i2.type), 1)
                  ]);
                }), 256))
              ]),
              vue.createCommentVNode("  \u8F66\u8F86\u914D\u7F6E    "),
              vue.createElementVNode("view", { class: "to_configure" }, [
                vue.createElementVNode("text", { class: "title" }, "\u8F66\u8F86\u914D\u7F6E"),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("text", null, "\u67E5\u770B\u5168\u90E8\u914D\u7F6E"),
                  vue.createElementVNode("view", { class: "right_icon" }, [
                    vue.createElementVNode("img", {
                      src: "/static/icon/right_x.png",
                      alt: ""
                    })
                  ])
                ])
              ])
            ]),
            vue.createCommentVNode("  \u8F66\u51B5\u4FE1\u606F     "),
            vue.createElementVNode("view", { class: "Vehicle_info" }, [
              vue.createElementVNode("view", { class: "title" }, [
                vue.createElementVNode("text", null, "\u8F66\u51B5\u4FE1\u606F"),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("text", null, "\u67E5\u770B\u5B8C\u6574\u62A5\u544A"),
                  vue.createElementVNode("view", { class: "right_icon" }, [
                    vue.createElementVNode("img", {
                      src: "/static/icon/right_x.png",
                      alt: ""
                    })
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "score_box" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(score), (i2) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "score",
                    key: i2.id
                  }, [
                    i2.status !== 1 ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, vue.toDisplayString(i2.value), 1)) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode("text", null, vue.toDisplayString(i2.type), 1)
                  ]);
                }), 128))
              ])
            ]),
            vue.createCommentVNode(" \u8BF4\u660E   "),
            vue.createElementVNode("view", { class: "explain" }, [
              vue.createElementVNode("view", { class: "header" }, " \u95EE\u9898\u8BF4\u660E "),
              vue.createElementVNode("view", { class: "explain_text" }, " \u5916\u89C2\u8F7B\u5FAE\u8272\u5DEE\uFF0C\u524D\u53F6\u5B50\u677F\u62C6\u5378\u55B7\u6F06\uFF0C\u5185\u9970\u6C61\u6E0D\u78E8\u635F\uFF0C\u9876\u68DA\u6C61\u6E0D\uFF0C\u9700\u8981\u5904\u7406\uFF0C\u6C34\u7BB1\u6846\u67B6\u62C6\u5378\uFF0C\u9AA8\u67B6\u6B63\u5E38\uFF0C\u53D1\u52A8\u673A\u6F0F\u6CB9\uFF0C\u5C3E\u6C14\u6709\u70B9\u91CD\uFF0C\u53D8\u901F\u7BB1\u6362\u6321\u51B2\u51FB\uFF0C\u8F6C\u5411\u677E\u65F7\uFF0C\u7535\u5668\u6B63\u5E38\uFF0C\u6CE8\uFF1A\u6B64\u8F66\u4FDD\u53F7\u81EA\u6210\u4EA4\u4E4B\u65E5\u8D77\uFF0C\u4E00\u65E5\u5185\u5FC5\u987B\u8FC7\u6237\uFF0C\u8FC7\u6237\u540E\u9700\u56DE\u4F20\u8FC7\u6237\u624B\u7EED\uFF08\u767B\u8BB0\u8BC11~6\u9875\u3001\u8FC7\u6237\u53D1\u7968\uFF0C\u8EAB\u4EFD\u8BC1\u6B63\u53CD\u9762\uFF0C\u884C\u9A76\u8BC1\uFF09\u4EE5\u4E0A\u90FD\u8981\u539F\u4EF6\u7167\u7247\u3002\u4E70\u65B9\u5982\u4E0D\u80FD\u53CA\u65F6\u56DE\u4F20\u8FC7\u6237\u624B\u7EED\uFF0C\u5E97\u5185\u4EA7\u751F\u7684\u635F\u5931\u7531\u4E70\u65B9\u8D1F\u8D23\u3002\u8F66\u8F86\u8FC7\u6237\u540E\u624D\u80FD\u62A5\u4FDD\u9669\u3002 ")
            ]),
            vue.createElementVNode("view", { class: "Car_viewing_information" }, [
              vue.createElementVNode("view", { class: "header" }, "\u770B\u8F66\u4FE1\u606F"),
              vue.createElementVNode("text", null, "\u8054\u7CFB\u4EBA\uFF1A155555555555"),
              vue.createElementVNode("view", { class: "address" }, [
                vue.createElementVNode("text", null, "\u770B\u8F66\u5730\u5740\uFF1A\u6C5F\u897F\u7701\u8D63\u5DDE\u5E02\u4E07\u8C61\u57CE"),
                vue.createElementVNode("view", { class: "icon" }, [
                  vue.createElementVNode("img", {
                    src: "/static/icon/Navigation.png",
                    alt: ""
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "img_list" }, [
                vue.createElementVNode("img", {
                  src: "/static/img/3.webp",
                  alt: ""
                })
              ])
            ])
          ])
        ]);
      };
    }
  });
  var PagesBiddingIndexDetailsIndex = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-1aa99586"]]);
  const _sfc_main$m = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      let arr = vue.ref([
        {
          title: "\u5B9D\u9A6C\u4E94\u7CFB",
          id: 0
        },
        {
          title: "20\u4E07-30\u4E07",
          id: 1
        },
        {
          title: "\u5403\u996D",
          id: 2
        }
      ]);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createVNode(vue.unref(StatusBar)),
          vue.createElementVNode("scroll-view", {
            style: { "height": "100%" },
            "scroll-y": ""
          }, [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createElementVNode("text", null, "\u6211\u7684\u8BA2\u9605"),
              vue.createElementVNode("navigator", { url: "./Add/index" }, [
                vue.createElementVNode("view", null, "\u6DFB\u52A0\u8BA2\u9605")
              ])
            ]),
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(10, (ii) => {
              return vue.createElementVNode("view", { class: "Subscription_list" }, [
                vue.createElementVNode("view", { class: "header" }, [
                  vue.createElementVNode("text", null, "\u8BA2\u96051"),
                  vue.createElementVNode("text", null, "\u7F16\u8F91\u8BA2\u9605")
                ]),
                vue.createElementVNode("view", { class: "info_container" }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(arr), (i2) => {
                    return vue.openBlock(), vue.createElementBlock("view", { class: "info" }, [
                      i2.id ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "|")) : vue.createCommentVNode("v-if", true),
                      vue.createElementVNode("text", null, vue.toDisplayString(i2.title), 1)
                    ]);
                  }), 256))
                ]),
                vue.createElementVNode("view", { class: "img_container" }, [
                  (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(3, (z2) => {
                    return vue.createElementVNode("view", { class: "img_box" }, [
                      vue.createElementVNode("view", { class: "img" }, [
                        vue.createElementVNode("img", {
                          src: "/static/img/4.webp",
                          alt: ""
                        })
                      ]),
                      vue.createElementVNode("text", null, "0.05\u4E07\u8D77")
                    ]);
                  }), 64))
                ]),
                vue.createElementVNode("view", { class: "num" }, [
                  vue.createElementVNode("text", null, "\u5171\u670935\u8F86\u8F66\u7B26\u5408\u8BA2\u9605"),
                  vue.createElementVNode("view", { class: "right_icon" }, [
                    vue.createElementVNode("img", {
                      src: "/static/icon/right_x.png",
                      alt: ""
                    })
                  ])
                ])
              ]);
            }), 64))
          ])
        ]);
      };
    }
  });
  var PagesSubscribeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-9cdab438"]]);
  const _sfc_main$l = {
    components: {},
    props: {
      value: {
        type: Array,
        default: function() {
          return [0, 100];
        }
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      format: {
        type: Function,
        default: function(val) {
          return val;
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      height: {
        height: Number,
        default: 50
      },
      barHeight: {
        type: Number,
        default: 5
      },
      backgroundColor: {
        type: String,
        default: "#e9e9e9"
      },
      activeColor: {
        type: String,
        default: "#1aad19"
      },
      blockSize: {
        type: Number,
        default: 20
      },
      blockColor: {
        type: String,
        default: "#fff"
      },
      tipVisible: {
        type: Boolean,
        default: true
      },
      decorationVisible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        values: [this.min, this.max],
        startDragPos: 0,
        startVal: 0
      };
    },
    computed: {
      lowerHandlePosition() {
        return (this.values[0] - this.min) / (this.max - this.min) * 100;
      },
      higherHandlePosition() {
        return (this.values[1] - this.min) / (this.max - this.min) * 100;
      },
      lowerTipStyle() {
        if (this.lowerHandlePosition < 90) {
          return `left: ${this.lowerHandlePosition}%;`;
        }
        return `right: ${100 - this.lowerHandlePosition}%;transform: translate(50%, -100%);`;
      },
      higherTipStyle() {
        if (this.higherHandlePosition < 90) {
          return `left: ${this.higherHandlePosition}%;`;
        }
        return `right: ${100 - this.higherHandlePosition}%;transform: translate(50%, -100%);`;
      }
    },
    created: function() {
    },
    onLoad: function(option) {
    },
    watch: {
      value: {
        immediate: true,
        handler(newVal, oldVal) {
          if (this._isValuesValid(newVal) && (newVal[0] !== this.values[0] || newVal[1] !== this.values[1])) {
            this._updateValue(newVal);
          }
        }
      }
    },
    methods: {
      _updateValue(newVal) {
        if (this.step >= this.max - this.min) {
          throw new RangeError("Invalid slider step or slider range");
        }
        let newValues = [];
        if (Array.isArray(newVal)) {
          newValues = [newVal[0], newVal[1]];
        }
        if (typeof newValues[0] !== "number") {
          newValues[0] = this.values[0];
        } else {
          newValues[0] = Math.round((newValues[0] - this.min) / this.step) * this.step + this.min;
        }
        if (typeof newValues[1] !== "number") {
          newValues[1] = this.values[1];
        } else {
          newValues[1] = Math.round((newValues[1] - this.min) / this.step) * this.step + this.min;
        }
        if (this.values[0] === newValues[0] && this.values[1] === newValues[1]) {
          return;
        }
        if (newValues[0] < this.min) {
          newValues[0] = this.min;
        }
        if (newValues[1] > this.max) {
          newValues[1] = this.max;
        }
        if (newValues[0] >= newValues[1]) {
          if (newValues[0] === this.values[0]) {
            newValues[1] = newValues[0] + this.step;
          } else {
            newValues[0] = newValues[1] - this.step;
          }
        }
        this.values = newValues;
        this.$emit("change", this.values);
      },
      _onTouchStart: function(event) {
        if (this.disabled) {
          return;
        }
        this.isDragging = true;
        let tag = event.target.dataset.tag;
        let e = event.changedTouches ? event.changedTouches[0] : event;
        this.startDragPos = e.pageX;
        this.startVal = tag === "lowerBlock" ? this.values[0] : this.values[1];
      },
      _onBlockTouchMove: function(e) {
        if (this.disabled) {
          return;
        }
        this._onDrag(e);
      },
      _onBlockTouchEnd: function(e) {
        if (this.disabled) {
          return;
        }
        this.isDragging = false;
        this._onDrag(e);
      },
      _onDrag(event) {
        if (!this.isDragging) {
          return;
        }
        let view = uni.createSelectorQuery().in(this).select(".slider-range-inner");
        view.boundingClientRect((data2) => {
          let sliderWidth = data2.width;
          const tag = event.target.dataset.tag;
          let e = event.changedTouches ? event.changedTouches[0] : event;
          let diff = (e.pageX - this.startDragPos) / sliderWidth * (this.max - this.min);
          let nextVal = this.startVal + diff;
          if (tag === "lowerBlock") {
            this._updateValue([nextVal, null]);
          } else {
            this._updateValue([null, nextVal]);
          }
        }).exec();
      },
      _isValuesValid: function(values) {
        return Array.isArray(values) && values.length == 2;
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["slider-range", { disabled: $props.disabled }]),
      style: vue.normalizeStyle({ paddingLeft: $props.blockSize / 2 + "px", paddingRight: $props.blockSize / 2 + "px" })
    }, [
      vue.createElementVNode("view", {
        class: "slider-range-inner",
        style: vue.normalizeStyle({ height: $props.height + "px" })
      }, [
        vue.createElementVNode("view", {
          class: "slider-bar",
          style: vue.normalizeStyle({
            height: $props.barHeight + "px"
          })
        }, [
          vue.createCommentVNode(" \u80CC\u666F\u6761 "),
          vue.createElementVNode("view", {
            class: "slider-bar-bg",
            style: vue.normalizeStyle({
              backgroundColor: $props.backgroundColor
            })
          }, null, 4),
          vue.createCommentVNode(" \u6ED1\u5757\u5B9E\u9645\u533A\u95F4 "),
          vue.createElementVNode("view", {
            class: "slider-bar-inner",
            style: vue.normalizeStyle({
              width: ($data.values[1] - $data.values[0]) / ($props.max - $props.min) * 100 + "%",
              left: $options.lowerHandlePosition + "%",
              backgroundColor: $props.activeColor
            })
          }, null, 4)
        ], 4),
        vue.createCommentVNode(" \u6ED1\u52A8\u5757-\u5DE6 "),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["slider-handle-block", { decoration: $props.decorationVisible }]),
          style: vue.normalizeStyle({
            backgroundColor: $props.blockColor,
            width: $props.blockSize + "px",
            height: $props.blockSize + "px",
            left: $options.lowerHandlePosition + "%"
          }),
          onTouchstart: _cache[0] || (_cache[0] = (...args) => $options._onTouchStart && $options._onTouchStart(...args)),
          onTouchmove: _cache[1] || (_cache[1] = (...args) => $options._onBlockTouchMove && $options._onBlockTouchMove(...args)),
          onTouchend: _cache[2] || (_cache[2] = (...args) => $options._onBlockTouchEnd && $options._onBlockTouchEnd(...args)),
          "data-tag": "lowerBlock"
        }, null, 38),
        vue.createCommentVNode(" \u6ED1\u52A8\u5757-\u53F3 "),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["slider-handle-block", { decoration: $props.decorationVisible }]),
          style: vue.normalizeStyle({
            backgroundColor: $props.blockColor,
            width: $props.blockSize + "px",
            height: $props.blockSize + "px",
            left: $options.higherHandlePosition + "%"
          }),
          onTouchstart: _cache[3] || (_cache[3] = (...args) => $options._onTouchStart && $options._onTouchStart(...args)),
          onTouchmove: _cache[4] || (_cache[4] = (...args) => $options._onBlockTouchMove && $options._onBlockTouchMove(...args)),
          onTouchend: _cache[5] || (_cache[5] = (...args) => $options._onBlockTouchEnd && $options._onBlockTouchEnd(...args)),
          "data-tag": "higherBlock"
        }, null, 38),
        vue.createCommentVNode(" \u6ED1\u5757\u503C\u63D0\u793A "),
        $props.tipVisible ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "range-tip",
          style: vue.normalizeStyle($options.lowerTipStyle)
        }, vue.toDisplayString($props.format($data.values[0])), 5)) : vue.createCommentVNode("v-if", true),
        $props.tipVisible ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "range-tip",
          style: vue.normalizeStyle($options.higherTipStyle)
        }, vue.toDisplayString($props.format($data.values[1])), 5)) : vue.createCommentVNode("v-if", true)
      ], 4)
    ], 6);
  }
  var SliderRange = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$7], ["__scopeId", "data-v-080be10f"]]);
  const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      vue.ref(0.11);
      let brand = vue.ref([]);
      let subscribeInfo = vue.ref({
        rangeValue: [0, 60],
        rangeMax: 60,
        VeHiCleAge: [0, 8],
        VeHiCleMax: 8,
        kilometre: [0, 15],
        KiLomeMax: 15,
        evaluate: ["\u56FD\u4E00", "\u56FD\u4E8C", "\u56FD\u4E09", "\u56FD\u56DB", "\u56FD\u4E94", "\u56FD\u516D"],
        evaluateArr: []
      });
      const Standard_Selection = (i2) => {
        if (subscribeInfo.value.evaluateArr.includes(i2)) {
          subscribeInfo.value.evaluateArr = subscribeInfo.value.evaluateArr.filter(function(e) {
            return e != i2;
          });
        } else {
          subscribeInfo.value.evaluateArr.push(i2);
        }
      };
      const format = (val) => {
        if (val >= 60) {
          return val + "\u4E07\u5143\u4EE5\u4E0A";
        }
        return val + "\u4E07\u5143";
      };
      const handleRangeChange = (e) => {
        subscribeInfo.value.rangeValue = e;
      };
      const Vehicle_age = (e) => {
        if (e >= 8) {
          return e + "\u5E74\u4EE5\u4E0A";
        }
        return e + "\u5E74";
      };
      const VehicleFn = (e) => {
        subscribeInfo.value.VeHiCleAge = e;
      };
      const KiLome_Tre = (e) => {
        subscribeInfo.value.kilometre = e;
      };
      const KiLomeFn = (e) => {
        if (e >= 15) {
          return e + "\u4E07\u516C\u91CC\u4EE5\u4E0A";
        }
        return e + "\u4E07\u516C\u91CC";
      };
      let arr = vue.ref([]);
      const Select = (i2) => {
        if (arr.value.includes(i2)) {
          arr.value = arr.value.filter(function(e) {
            return e != i2;
          });
        } else {
          arr.value.push(i2);
        }
      };
      const Reset = () => {
        formatAppLog("log", "at pages/subscribe/Add/index.vue:202", "\u91CD\u7F6E");
        arr.value = [];
      };
      let vehicle_list = vue.ref([
        {
          title: "\u8F7F\u8F66",
          id: 1,
          bon: false
        },
        {
          title: "SUV",
          id: 2,
          bon: false
        },
        {
          title: "\u5BA2\u8F66",
          id: 3,
          bon: false
        }
      ]);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createVNode(vue.unref(StatusBar)),
          vue.createVNode(vue.unref(BackNav), {
            class: "navbar",
            title: "\u6DFB\u52A0\u79C1\u4EBA\u8BA2\u9605",
            Reset
          }),
          vue.createElementVNode("view", { class: "scroll" }, [
            vue.createElementVNode("scroll-view", {
              style: { "height": "100%" },
              "scroll-y": ""
            }, [
              vue.createCommentVNode("   \u6574\u4E2A\u5BB9\u5668     "),
              vue.createElementVNode("view", { class: "Model_container" }, [
                vue.createElementVNode("view", { class: "vehicle_type" }, [
                  vue.createCommentVNode("---\u8F66\u8F86\u7C7B\u578B\u5BB9\u5668 ----"),
                  vue.createElementVNode("view", { class: "header" }, "\u8F66\u8F86\u7C7B\u578B"),
                  vue.createElementVNode("view", { class: "vehicle_container" }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(vehicle_list), (i2, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: vue.normalizeClass(["type", [{ "isActive": vue.unref(arr).includes(index) }, { "isActive": i2.bon }]]),
                        onClick: ($event) => Select(index)
                      }, vue.toDisplayString(i2.title), 11, ["onClick"]);
                    }), 256))
                  ])
                ]),
                vue.createElementVNode("view", { class: "brand" }, [
                  vue.createElementVNode("text", null, "\u54C1\u724C"),
                  !vue.unref(brand).length ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "choice"
                  }, [
                    vue.createElementVNode("view", { class: "icon" }, [
                      vue.createElementVNode("img", {
                        src: "/static/icon/add.png",
                        alt: ""
                      })
                    ]),
                    vue.createElementVNode("text", null, "\u70B9\u51FB\u6DFB\u52A0\u54C1\u724C")
                  ])) : vue.createCommentVNode("v-if", true),
                  vue.unref(brand).length ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(vue.unref(brand), (i2) => {
                    return vue.openBlock(), vue.createElementBlock("view", { class: "add_brand" }, [
                      vue.createElementVNode("text", null, vue.toDisplayString(i2), 1)
                    ]);
                  }), 256)) : vue.createCommentVNode("v-if", true)
                ]),
                vue.createCommentVNode("   \u8F66\u4FE1\u606F       "),
                vue.createElementVNode("view", { class: "price_info" }, [
                  vue.createElementVNode("view", { class: "price" }, [
                    vue.createElementVNode("view", { class: "txt" }, [
                      vue.createElementVNode("text", null, "\u4EF7\u683C"),
                      vue.createElementVNode("text", null, "(\u4E07\u5143)")
                    ]),
                    vue.createVNode(SliderRange, {
                      value: vue.unref(subscribeInfo).rangeValue,
                      modelValue: vue.unref(subscribeInfo).rangeValue,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(subscribeInfo).rangeValue = $event),
                      min: 0,
                      max: vue.unref(subscribeInfo).rangeMax,
                      step: 1,
                      "bar-height": 3,
                      "block-size": 26,
                      "background-color": "#EEEEF6",
                      "active-color": "#FF6B00",
                      format,
                      decorationVisible: true,
                      style: { "width": "100%" },
                      onChange: handleRangeChange
                    }, null, 8, ["value", "modelValue", "max"])
                  ]),
                  vue.createElementVNode("view", { class: "price" }, [
                    vue.createElementVNode("view", { class: "txt" }, [
                      vue.createElementVNode("text", null, "\u8F66\u9F84"),
                      vue.createElementVNode("text", null, "(\u5E74)")
                    ]),
                    vue.createVNode(SliderRange, {
                      value: vue.unref(subscribeInfo).VeHiCleAge,
                      min: 0,
                      max: vue.unref(subscribeInfo).VeHiCleMax,
                      step: 1,
                      "bar-height": 3,
                      "block-size": 26,
                      "background-color": "#EEEEF6",
                      "active-color": "#FF6B00",
                      format: Vehicle_age,
                      decorationVisible: true,
                      style: { "width": "100%" },
                      onChange: VehicleFn
                    }, null, 8, ["value", "max"])
                  ]),
                  vue.createElementVNode("view", { class: "price" }, [
                    vue.createElementVNode("view", { class: "txt" }, [
                      vue.createElementVNode("text", null, "\u91CC\u7A0B"),
                      vue.createElementVNode("text", null, "(\u4E07\u516C\u91CC)")
                    ]),
                    vue.createVNode(SliderRange, {
                      value: vue.unref(subscribeInfo).kilometre,
                      min: 0,
                      max: vue.unref(subscribeInfo).KiLomeMax,
                      step: 1,
                      "bar-height": 3,
                      "block-size": 26,
                      "background-color": "#EEEEF6",
                      "active-color": "#FF6B00",
                      format: KiLomeFn,
                      decorationVisible: true,
                      style: { "width": "100%" },
                      onChange: KiLome_Tre
                    }, null, 8, ["value", "max"])
                  ])
                ]),
                vue.createCommentVNode("   \u6392\u653E\u6807\u51C6       "),
                vue.createElementVNode("view", { class: "standard" }, [
                  vue.createElementVNode("view", { class: "header" }, " \u6392\u653E\u6807\u51C6 "),
                  vue.createElementVNode("view", { class: "standard_container" }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(subscribeInfo).evaluate, (i2, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: vue.normalizeClass(["standardList", [{ "isActive": vue.unref(subscribeInfo).evaluateArr.includes(index) }, { "isActive": i2.bon }]]),
                        onClick: ($event) => Standard_Selection(index)
                      }, vue.toDisplayString(i2), 11, ["onClick"]);
                    }), 256))
                  ])
                ])
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "btn" }, [
            vue.createElementVNode("button", null, "\u786E\u5B9A")
          ])
        ]);
      };
    }
  });
  var PagesSubscribeAddIndex = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-174b30d6"]]);
  const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(vue.unref(StatusBar)),
          vue.createTextVNode(" \u5356\u8F66 ")
        ]);
      };
    }
  });
  let list = vue.ref([
    {
      title: "\u7ADE\u4EF7\u4E2D",
      icon: "/static/icon/jp.png",
      id: 1
    },
    {
      title: "\u7ED3\u6807\u4E2D",
      icon: "/static/icon/jb.png",
      id: 2
    },
    {
      title: "\u7ADE\u4EF7\u5386\u53F2",
      icon: "/static/icon/ls.png",
      id: 3
    },
    {
      title: "\u6211\u7684\u5173\u6CE8",
      icon: "/static/icon/gz.png",
      id: 4
    },
    {
      title: "\u6D4F\u89C8\u8BB0\u5F55",
      icon: "/static/icon/jl.png",
      id: 5
    }
  ]);
  let order = vue.ref([
    {
      title: "\u5F85\u63D0\u8F66",
      icon: "/static/icon/love.png",
      id: 1
    },
    {
      title: "\u5F85\u4ED8\u6B3E",
      icon: "/static/icon/love.png",
      id: 2
    },
    {
      title: "\u5F85\u8FC7\u6237",
      icon: "/static/icon/love.png",
      id: 3
    },
    {
      title: "\u4EF2\u88C1\u4E2D",
      icon: "/static/icon/love.png",
      id: 4
    },
    {
      title: "\u5168\u90E8\u8BA2\u5355",
      icon: "/static/icon/love.png",
      id: 5
    }
  ]);
  let setupList = vue.ref([
    {
      title: "\u6295\u8BC9\u5EFA\u8BAE",
      icon: "/static/icon/love.png",
      uri: "./opinion/index",
      id: 1
    },
    {
      title: "\u5E73\u53F0\u89C4\u5219",
      icon: "/static/icon/love.png",
      uri: "./rule/index",
      id: 2
    },
    {
      title: "\u8054\u7CFB\u5BA2\u670D",
      icon: "/static/icon/love.png",
      uri: "./SetUp/index",
      id: 3
    },
    {
      title: "\u8BBE\u7F6E",
      icon: "/static/icon/love.png",
      uri: "./SetUp/index",
      id: 4
    }
  ]);
  let login = vue.ref([
    {
      title: "\u5BC6\u7801\u767B\u5F55",
      class: "passwordLogin",
      id: 1
    },
    {
      title: "\u5FEB\u6377\u767B\u5F55",
      class: "QuickLogon",
      id: 2
    }
  ]);
  let timer;
  let Disable = vue.ref(false);
  let TimeNum = vue.ref("\u83B7\u53D6\u9A8C\u8BC1\u7801");
  const BtnCode = () => {
    Disable.value = true;
    clearInterval(timer);
    TimeNum.value = 60;
    timer = setInterval(() => {
      if (TimeNum.value === 0) {
        TimeNum.value = "\u91CD\u65B0\u83B7\u53D6\u9A8C\u8BC1\u7801";
        Disable.value = false;
        clearInterval(timer);
      } else {
        TimeNum.value--;
      }
    }, 1e3);
  };
  const RouToPush = (i2) => {
    uni.navigateTo({
      url: "./Bidding/index?id=" + i2.id + "&title=" + i2.title,
      animationType: "pop-in"
    });
  };
  const RegPush = (i2) => {
    uni.navigateTo({
      url: "../register/index?title=" + i2.title,
      animationType: "pop-in"
    });
  };
  const to = (i2) => {
    uni.navigateTo({
      url: "../rule/index?title=" + i2.title,
      animationType: "pop-in"
    });
  };
  const info = (i2) => {
    uni.navigateTo({
      url: "./UserInfo/index?title=" + i2.title,
      animationType: "pop-in"
    });
  };
  const OrderFn = (i2) => {
    uni.navigateTo({
      url: "./order/index?id=" + i2.id + "&title=" + i2.title,
      animationType: "pop-in"
    });
  };
  let email = vue.ref("");
  const preserve = () => {
    uni.showToast({
      title: "\u4FDD\u5B58\u6210\u529F",
      icon: "success"
    });
    uni.navigateTo({
      url: "./index"
    });
  };
  const goTo = (i2) => {
    if (i2.id === 3) {
      uni.showToast({
        title: "\u6B63\u5728\u5F00\u53D1\u4E2D",
        icon: "error"
      });
      return false;
    }
    uni.navigateTo({
      url: `${i2.uri}?id=` + i2.id + "&title=" + i2.title,
      animationType: "pop-in"
    });
  };
  let orderList = vue.ref([
    {
      title: "\u5168\u90E8",
      id: 1
    },
    {
      title: "\u672A\u7ED3\u6807",
      id: 2
    },
    {
      title: "\u5DF2\u4E2D\u6807",
      id: 3
    },
    {
      title: "\u5DF2\u6210\u4EA4",
      id: 4
    },
    {
      title: "\u5DF2\u53D6\u6D88",
      id: 5
    }
  ]);
  const __default__ = {
    onPullDownRefresh() {
      formatAppLog("log", "at pages/user/index.vue:121", "\u8C03\u7528\u4E86");
      setTimeout(function() {
        uni.stopPullDownRefresh();
      }, 1e3);
    },
    created() {
      formatAppLog("log", "at pages/user/index.vue:128", "v2\u521D\u59CB\u5316");
    }
  };
  const _sfc_main$i = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "scroll_my" }, [
          vue.createCommentVNode("  \u72B6\u6001\u680F   "),
          vue.createVNode(vue.unref(StatusBar)),
          vue.createCommentVNode(" \u7528\u6237\u4FE1\u606F      "),
          vue.createElementVNode("view", { class: "info_container" }, [
            vue.createElementVNode("view", { class: "userInfo" }, [
              vue.createElementVNode("view", { class: "info" }, [
                vue.createElementVNode("view", {
                  class: "avatar",
                  onClick: _cache[0] || (_cache[0] = ($event) => vue.unref(info)({ title: "\u7528\u6237\u4FE1\u606F\u7F16\u8F91" }))
                }, [
                  vue.createElementVNode("img", {
                    src: "",
                    alt: ""
                  })
                ]),
                vue.createElementVNode("view", { class: "NickName_member" }, [
                  vue.createElementVNode("view", { class: "NickName" }, "1555555555555"),
                  vue.createElementVNode("navigator", { url: "./agreement/index?id=1" }, [
                    vue.createElementVNode("view", { class: "member" }, "\u9AD8\u7EA7\u4F1A\u5458")
                  ]),
                  vue.createElementVNode("view", { class: "reputation" }, [
                    vue.createElementVNode("text", null, "\u6211\u7684\u4FE1\u8A89\u503C\uFF1A"),
                    vue.createVNode(_component_uni_rate, {
                      touchable: false,
                      color: "#bbb",
                      "active-color": "red",
                      readonly: true,
                      value: 5,
                      "is-fill": false
                    })
                  ])
                ])
              ]),
              vue.createElementVNode("navigator", { url: "./News/index" }, [
                vue.createElementVNode("view", { class: "news" }, "\u6D88\u606F")
              ])
            ])
          ]),
          vue.createCommentVNode(" \u4F18\u60E0\u5361\u5377      "),
          vue.createElementVNode("view", { class: "bond_card" }, [
            vue.createElementVNode("view", { class: "bond mgt" }, [
              vue.createElementVNode("view", { class: "bond_Num" }, "1.00"),
              vue.createElementVNode("view", { class: "card_text" }, "\u4FDD\u969C\u91D1")
            ]),
            vue.createElementVNode("view", { class: "card mgt" }, [
              vue.createElementVNode("view", { class: "card_Num" }, "1"),
              vue.createElementVNode("view", { class: "card_text" }, "\u5361\u5377")
            ])
          ]),
          vue.createElementVNode("view", { class: "authentication" }, [
            vue.createElementVNode("view", { class: "authentication_container" }, [
              vue.createElementVNode("view", { class: "left_text" }, "\u5B8C\u6210\u8BA4\u8BC1\u53C2\u4E0E\u7ADE\u62CD"),
              vue.createElementVNode("view", { class: "right_btn" }, "\u5B8C\u6210\u8BA4\u8BC1")
            ])
          ]),
          vue.createCommentVNode("  \u6211\u7684\u7ADE\u62CD     "),
          vue.createElementVNode("view", { class: "my_Auction_container" }, [
            vue.createElementVNode("view", { class: "my_Auction" }, [
              vue.createElementVNode("text", { class: "title" }, "\u6211\u7684\u7ADE\u62CD"),
              vue.createElementVNode("view", { class: "list_container" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(list), (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "list",
                    onClick: ($event) => vue.unref(RouToPush)(item),
                    key: item.id
                  }, [
                    vue.createElementVNode("view", { class: "img_icon" }, [
                      vue.createElementVNode("image", {
                        class: "X_icon",
                        src: item.icon,
                        alt: ""
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("text", { class: "txt" }, vue.toDisplayString(item.title), 1)
                  ], 8, ["onClick"]);
                }), 128))
              ])
            ])
          ]),
          vue.createCommentVNode(" \u6211\u7684\u8BA2\u5355 "),
          vue.createElementVNode("view", { class: "my_Auction_container order" }, [
            vue.createElementVNode("view", { class: "my_Auction" }, [
              vue.createElementVNode("text", { class: "title" }, "\u6211\u7684\u8BA2\u5355"),
              vue.createElementVNode("view", { class: "list_container" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(order), (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "list",
                    onClick: ($event) => vue.unref(OrderFn)(item)
                  }, [
                    vue.createElementVNode("view", { class: "img_icon" }, [
                      vue.createElementVNode("image", {
                        class: "X_icon",
                        src: item.icon,
                        alt: ""
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("text", { class: "txt" }, vue.toDisplayString(item.title), 1)
                  ], 8, ["onClick"]);
                }), 256))
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "my_Auction_container order" }, [
            vue.createElementVNode("view", { class: "my_Auction" }, [
              vue.createElementVNode("view", { class: "list_container" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(setupList), (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "list",
                    key: item.id,
                    onClick: ($event) => vue.unref(goTo)(item)
                  }, [
                    vue.createElementVNode("view", { class: "img_icon" }, [
                      vue.createElementVNode("image", {
                        class: "X_icon",
                        src: item.icon,
                        alt: ""
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("text", { class: "txt" }, vue.toDisplayString(item.title), 1)
                  ], 8, ["onClick"]);
                }), 128))
              ])
            ])
          ]),
          vue.createCommentVNode(" \u6280\u672F\u652F\u6301   "),
          vue.createElementVNode("view", { class: "botoom" }, [
            vue.createElementVNode("text", null, "\u63D0\u4F9B\u6280\u672F\u652F\u6301 \u221A"),
            vue.createElementVNode("text", null, "\u6C5F\u897F\u5F00\u521B\u6570\u7801\u79D1\u6280\u6709\u9650\u516C\u53F8")
          ])
        ]);
      };
    }
  }));
  var PagesUserIndex = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-137d5072"]]);
  const getDate = () => {
    let date = new Date(), year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();
    let timer2 = year + "-" + month + "-" + day;
    return timer2;
  };
  const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
    props: {
      id: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      }
    },
    setup(__props) {
      const props = __props;
      uni.setNavigationBarTitle({
        title: props.title
      });
      let currentDate = getDate();
      let date = vue.ref(currentDate);
      const bindDateChange = (e) => {
        date.value = e.detail.value;
      };
      let id = parseInt(props.id);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createVNode(vue.unref(StatusBar)),
          vue.createVNode(vue.unref(BackNav), {
            id: vue.unref(id),
            title: props.title
          }, null, 8, ["id", "title"]),
          vue.createElementVNode("view", { class: "search_header" }, [
            vue.unref(id) === 5 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "search"
            }, [
              vue.createElementVNode("input", {
                type: "text",
                placeholder: "\u641C\u7D22\u60A8\u60F3\u8981\u7684\u8F66"
              }),
              vue.createElementVNode("view", { class: "icon_search" }, [
                vue.createElementVNode("img", {
                  class: "icon",
                  src: "/static/icon/search.png",
                  alt: ""
                })
              ])
            ])) : vue.createCommentVNode("v-if", true),
            vue.unref(id) === 5 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "search_time"
            }, [
              vue.createElementVNode("view", { class: "timeContainer" }, [
                vue.createElementVNode("text", null, "\u9009\u62E9\u65F6\u95F4\uFF1A"),
                vue.createElementVNode("view", { class: "uni-list" }, [
                  vue.createElementVNode("view", { class: "uni-list-cell" }, [
                    vue.createElementVNode("view", { class: "uni-list-cell-db" }, [
                      vue.createElementVNode("picker", {
                        mode: "date",
                        value: vue.unref(date),
                        onChange: bindDateChange
                      }, [
                        vue.createElementVNode("view", { class: "uni-input" }, vue.toDisplayString(vue.unref(date)), 1)
                      ], 40, ["value"])
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "time_icon" }, [
                    vue.createElementVNode("img", {
                      class: "X_icon",
                      src: "/static/icon/time.png",
                      alt: ""
                    })
                  ])
                ])
              ])
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createCommentVNode("  \u7ADE\u4EF7\u4E2D   "),
          vue.unref(id) === 1 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "VeHicLe_container"
          }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(1, (item) => {
              return vue.createElementVNode("view", { class: "VeHicLelList" }, [
                vue.createElementVNode("view", { class: "VeHicLel_container" }, [
                  vue.createElementVNode("view", { class: "img" }, [
                    vue.createElementVNode("img", {
                      src: "/static/img/1.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("view", { class: "VeHicLel_right" }, [
                    vue.createElementVNode("view", { class: "title" }, [
                      vue.createElementVNode("text", null, "[\u5468\u53E3]\u5954\u9A70 E\u7EA7 2020\u6B3E 2.0T \u624B\u81EA\u52A8\u4E00\u4F53 \u6539\u6B3E E 300L \u8FD0\u52A8\u65F6\u5C1A\u578B"),
                      vue.createElementVNode("view", { class: "love_icon" }, [
                        vue.createElementVNode("img", {
                          src: "/static/icon/love_h.png",
                          alt: ""
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "data_kilometre" }, [
                      vue.createElementVNode("text", { class: "data" }, "2021\u5E7405\u4F59\u989D\u4E0A\u724C"),
                      vue.createElementVNode("span", null, "|"),
                      vue.createElementVNode("text", null, "1.90\u4E07\u516C\u91CC")
                    ]),
                    vue.createElementVNode("view", { class: "price_pople_num" }, [
                      vue.createElementVNode("view", { class: "price" }, "25.58\u4E07"),
                      vue.createElementVNode("view", { class: "num" }, "142\u6B21\u56F4\u89C2")
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "list_info" }, [
                  vue.createElementVNode("view", { class: "top_text" }, [
                    vue.createElementVNode("view", { class: "left_price" }, "\u7ADE\u62CD\u4EF7\u683C\uFF1A10000\u4E07"),
                    vue.createElementVNode("view", { class: "right_price" }, "\u6211\u7684\u51FA\u4EF7\uFF1A999\u4E07")
                  ]),
                  vue.createElementVNode("view", { class: "bottom_time" }, [
                    vue.createElementVNode("text", null, "\u6B63\u5728\u6295\u6807:\u5269\u4F5910\u65F605\u52063\u79D2")
                  ])
                ])
              ]);
            }), 64))
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u52AB\u9556\u4E2D   "),
          vue.unref(id) === 2 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "VeHicLe_container"
          }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(2, (item) => {
              return vue.createElementVNode("view", { class: "VeHicLelList" }, [
                vue.createElementVNode("view", { class: "VeHicLel_container" }, [
                  vue.createElementVNode("view", { class: "img" }, [
                    vue.createElementVNode("img", {
                      src: "/static/img/1.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("view", { class: "VeHicLel_right" }, [
                    vue.createElementVNode("view", { class: "title" }, [
                      vue.createElementVNode("text", null, "[\u5468\u53E3]\u5954\u9A70 E\u7EA7 2020\u6B3E 2.0T \u624B\u81EA\u52A8\u4E00\u4F53 \u6539\u6B3E E 300L \u8FD0\u52A8\u65F6\u5C1A\u578B"),
                      vue.createElementVNode("view", { class: "love_icon" }, [
                        vue.createElementVNode("img", {
                          src: "/static/icon/love_h.png",
                          alt: ""
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "data_kilometre" }, [
                      vue.createElementVNode("text", { class: "data" }, "2021\u5E7405\u4F59\u989D\u4E0A\u724C"),
                      vue.createElementVNode("span", null, "|"),
                      vue.createElementVNode("text", null, "1.90\u4E07\u516C\u91CC")
                    ]),
                    vue.createElementVNode("view", { class: "price_pople_num" }, [
                      vue.createElementVNode("view", { class: "price" }, "25.58\u4E07"),
                      vue.createElementVNode("view", { class: "num" }, "142\u6B21\u56F4\u89C2")
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "list_info" }, [
                  vue.createElementVNode("view", { class: "top_text" }, [
                    vue.createElementVNode("view", { class: "left_price" }, "\u7ADE\u62CD\u4EF7\u683C\uFF1A10000\u4E07"),
                    vue.createElementVNode("view", { class: "right_price" }, "\u6211\u7684\u51FA\u4EF7\uFF1A999\u4E07")
                  ]),
                  vue.createElementVNode("view", { class: "bottom_time" }, [
                    item == 1 ? (vue.openBlock(), vue.createElementBlock("text", { key: 0 }, "\u7ADE\u62CD\u7ED3\u675F\uFF0C\u6B63\u5728\u7B49\u5F85\u52AB\u9556\u5904\u7406\u7ED3\u679C")) : vue.createCommentVNode("v-if", true),
                    item !== 1 ? (vue.openBlock(), vue.createElementBlock("text", { key: 1 }, "\u7ADE\u62CD\u7ED3\u675F\uFF0C\u606D\u559C\u60A8\u5DF2\u4E2D\u6807\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D\u4EA4\u6613")) : vue.createCommentVNode("v-if", true)
                  ])
                ])
              ]);
            }), 64))
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u5386\u53F2\u7ADE\u6807"),
          vue.unref(id) === 3 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "VeHicLe_container"
          }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(2, (item) => {
              return vue.createElementVNode("view", { class: "VeHicLelList" }, [
                vue.createElementVNode("view", { class: "VeHicLel_container" }, [
                  vue.createElementVNode("view", { class: "img" }, [
                    vue.createElementVNode("img", {
                      src: "/static/img/1.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("view", { class: "VeHicLel_right" }, [
                    vue.createElementVNode("view", { class: "title" }, [
                      vue.createElementVNode("text", null, "[\u5468\u53E3]\u5954\u9A70 E\u7EA7 2020\u6B3E 2.0T \u624B\u81EA\u52A8\u4E00\u4F53 \u6539\u6B3E E 300L \u8FD0\u52A8\u65F6\u5C1A\u578B"),
                      vue.createElementVNode("view", { class: "love_icon" }, [
                        vue.createElementVNode("img", {
                          src: "/static/icon/love_h.png",
                          alt: ""
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "data_kilometre" }, [
                      vue.createElementVNode("text", { class: "data" }, "2021\u5E7405\u4F59\u989D\u4E0A\u724C"),
                      vue.createElementVNode("span", null, "|"),
                      vue.createElementVNode("text", null, "1.90\u4E07\u516C\u91CC")
                    ]),
                    vue.createElementVNode("view", { class: "price_pople_num" }, [
                      vue.createElementVNode("view", { class: "price" }, "25.58\u4E07"),
                      vue.createElementVNode("view", { class: "num" }, "142\u6B21\u56F4\u89C2")
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "list_info" }, [
                  vue.createElementVNode("view", { class: "top_text" }, [
                    vue.createElementVNode("view", { class: "left_price" }, "\u7ADE\u62CD\u4EF7\u683C\uFF1A10000\u4E07"),
                    vue.createElementVNode("view", { class: "right_price" }, "\u6211\u7684\u51FA\u4EF7\uFF1A999\u4E07")
                  ]),
                  vue.createElementVNode("view", { class: "history_time" }, [
                    vue.createElementVNode("view", { class: "history_btn" }, " \u5386\u53F2\u51FA\u4EF7 ")
                  ])
                ])
              ]);
            }), 64))
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u6211\u7684\u5173\u6CE8 "),
          vue.unref(id) === 4 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 3,
            class: "VeHicLe_container"
          }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(2, (item) => {
              return vue.createElementVNode("view", { class: "VeHicLelList" }, [
                vue.createElementVNode("view", { class: "VeHicLel_container" }, [
                  vue.createElementVNode("view", { class: "img" }, [
                    vue.createElementVNode("img", {
                      src: "/static/img/1.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("view", { class: "VeHicLel_right" }, [
                    vue.createElementVNode("view", { class: "title" }, [
                      vue.createElementVNode("text", null, "[\u5468\u53E3]\u5954\u9A70 E\u7EA7 2020\u6B3E 2.0T \u624B\u81EA\u52A8\u4E00\u4F53 \u6539\u6B3E E 300L \u8FD0\u52A8\u65F6\u5C1A\u578B"),
                      !vue.unref(id) ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "love_icon"
                      }, [
                        vue.createElementVNode("img", {
                          src: "/static/icon/love_h.png",
                          alt: ""
                        })
                      ])) : vue.createCommentVNode("v-if", true),
                      vue.createElementVNode("view", { class: "Concerned" }, [
                        vue.createElementVNode("text", null, "\u5DF2\u5173\u6CE8")
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "data_kilometre" }, [
                      vue.createElementVNode("text", { class: "data" }, "2021\u5E7405\u4F59\u989D\u4E0A\u724C"),
                      vue.createElementVNode("span", null, "|"),
                      vue.createElementVNode("text", null, "1.90\u4E07\u516C\u91CC")
                    ]),
                    vue.createElementVNode("view", { class: "price_pople_num" }, [
                      vue.createElementVNode("view", { class: "price" }, "25.58\u4E07"),
                      vue.createElementVNode("view", { class: "num" }, "142\u6B21\u56F4\u89C2")
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "list_info" }, [
                  vue.createElementVNode("view", { class: "top_text" }, [
                    vue.createElementVNode("view", { class: "left_price" }, "\u7ADE\u62CD\u4EF7\u683C\uFF1A10000\u4E07"),
                    vue.createElementVNode("view", { class: "right_price" }, "\u6211\u7684\u672A\u51FA\u5AC1")
                  ])
                ])
              ]);
            }), 64))
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u6D4F\u89C8\u8BB0\u5F55"),
          vue.unref(id) === 5 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 4,
            class: "VeHicLe_container"
          }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(2, (item) => {
              return vue.createElementVNode("view", { class: "VeHicLelList" }, [
                vue.createElementVNode("view", { class: "VeHicLel_container" }, [
                  vue.createElementVNode("view", { class: "img" }, [
                    vue.createElementVNode("img", {
                      src: "/static/img/1.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("view", { class: "VeHicLel_right" }, [
                    vue.createElementVNode("view", { class: "title" }, [
                      vue.createElementVNode("text", null, "[\u5468\u53E3]\u5954\u9A70 E\u7EA7 2020\u6B3E 2.0T \u624B\u81EA\u52A8\u4E00\u4F53 \u6539\u6B3E E 300L \u8FD0\u52A8\u65F6\u5C1A\u578B"),
                      vue.createElementVNode("view", { class: "love_icon" }, [
                        vue.createElementVNode("img", {
                          src: "/static/icon/love_h.png",
                          alt: ""
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "data_kilometre" }, [
                      vue.createElementVNode("text", { class: "data" }, "2021\u5E7405\u4F59\u989D\u4E0A\u724C"),
                      vue.createElementVNode("span", null, "|"),
                      vue.createElementVNode("text", null, "1.90\u4E07\u516C\u91CC")
                    ]),
                    vue.createElementVNode("view", { class: "price_pople_num" }, [
                      vue.createElementVNode("view", { class: "price" }, "25.58\u4E07"),
                      vue.createElementVNode("view", { class: "num" }, "142\u6B21\u56F4\u89C2")
                    ])
                  ])
                ])
              ]);
            }), 64))
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  });
  var PagesUserBiddingIndex = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-5abad5da"]]);
  const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      let Index = vue.ref(2);
      const toggle = (i2) => {
        Index.value = i2.id;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "login_container" }, [
          vue.createElementVNode("view", { class: "container" }, [
            vue.createElementVNode("view", { class: "header" }, [
              vue.createElementVNode("text", null, "HI \u7B49\u4F60\u5F88\u4E45\u4E86")
            ]),
            vue.createElementVNode("view", { class: "login" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(login), (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["flex-center", [item.class, { "isActive": vue.unref(Index) == item.id }]]),
                  key: item.id,
                  onClick: ($event) => toggle(item)
                }, vue.toDisplayString(item.title), 11, ["onClick"]);
              }), 128))
            ]),
            vue.unref(Index) == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "password"
            }, [
              vue.createElementVNode("view", { class: "phone" }, [
                vue.createElementVNode("view", { class: "phone_icon" }, [
                  vue.createElementVNode("img", {
                    src: "/static/icon/search.png",
                    alt: ""
                  })
                ]),
                vue.createElementVNode("input", {
                  type: "text",
                  value: "",
                  placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801"
                })
              ]),
              vue.createElementVNode("view", { class: "pwd" }, [
                vue.createElementVNode("view", { class: "pwd_icon" }, [
                  vue.createElementVNode("img", {
                    c: "",
                    src: "/static/icon/search.png",
                    alt: ""
                  })
                ]),
                vue.createElementVNode("input", {
                  type: "text",
                  value: "",
                  placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
                })
              ]),
              vue.createElementVNode("view", { class: "Forget" }, [
                vue.createElementVNode("text", null, "\u5FD8\u8BB0\u5BC6\u7801\uFF1F")
              ])
            ])) : vue.createCommentVNode("v-if", true),
            vue.unref(Index) == 2 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "phone_login"
            }, [
              vue.createElementVNode("view", { class: "phone" }, [
                vue.createElementVNode("view", { class: "phone_icon" }, [
                  vue.createElementVNode("img", {
                    src: "/static/icon/search.png",
                    alt: ""
                  })
                ]),
                vue.createElementVNode("input", {
                  type: "text",
                  value: "",
                  placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801"
                })
              ]),
              vue.createElementVNode("view", { class: "pwd" }, [
                vue.createElementVNode("view", { class: "pwd_code" }, [
                  vue.createElementVNode("view", { class: "pwd_icon" }, [
                    vue.createElementVNode("img", {
                      src: "/static/icon/search.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("input", {
                    class: "obtain_code",
                    type: "text",
                    value: "",
                    placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
                  })
                ]),
                vue.createElementVNode("button", {
                  class: "code",
                  onClick: _cache[0] || (_cache[0] = (...args) => vue.unref(BtnCode) && vue.unref(BtnCode)(...args)),
                  disabled: vue.unref(Disable)
                }, vue.toDisplayString(vue.unref(Disable) ? `${vue.unref(TimeNum)}\u79D2\u540E\u53EF\u91CD\u65B0\u83B7\u53D6` : vue.unref(TimeNum)), 9, ["disabled"])
              ])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "btn_tis" }, [
              vue.createElementVNode("view", { class: "login_btn" }, " \u767B\u5F55 "),
              vue.createElementVNode("view", { class: "Tis" }, [
                vue.createElementVNode("text", null, "\u8FD8\u6CA1\u6709\u8D26\u53F7\uFF1F"),
                vue.createElementVNode("text", {
                  style: { "color": "#2277f8" },
                  onClick: _cache[1] || (_cache[1] = ($event) => vue.unref(RegPush)({ title: "\u6CE8\u518C" }))
                }, "\u9A6C\u4E0A\u6CE8\u518C")
              ])
            ])
          ])
        ]);
      };
    }
  });
  var PagesUserLoginIndex = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-098d3a3e"]]);
  const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
    props: {
      title: {
        type: String,
        default: ""
      }
    },
    setup(__props) {
      const props = __props;
      let isRadio = vue.ref(false);
      const isRadioFn = () => {
        isRadio.value = !isRadio.value;
      };
      uni.setNavigationBarTitle({
        title: props.title
      });
      const reg = () => {
        if (isRadio.value == false) {
          uni.showToast({
            title: "\u8BF7\u5148\u540C\u610F\u7528\u6237\u534F\u8BAE\u548C\u9690\u79C1\u6743\u7CFB\u6570",
            icon: "error"
          });
        } else {
          formatAppLog("log", "at pages/user/register/index.vue:107", "\u6CE8\u518C\u6210\u529F");
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "reg_container" }, [
          vue.createVNode(vue.unref(BackNav), {
            title: props.title
          }, null, 8, ["title"]),
          vue.createElementVNode("view", { class: "login_container" }, [
            vue.createElementVNode("view", { class: "container" }, [
              vue.createElementVNode("view", { class: "header" }, [
                vue.createElementVNode("text", null, "\u8F66\u62CD\u7F51\u6B22\u8FCE\u4F60")
              ]),
              vue.createElementVNode("view", { class: "phone_login" }, [
                vue.createCommentVNode("   \u624B\u673A\u53F7         "),
                vue.createElementVNode("view", { class: "phone" }, [
                  vue.createElementVNode("view", { class: "phone_icon" }, [
                    vue.createElementVNode("img", {
                      src: "/static/icon/search.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("input", {
                    type: "text",
                    value: "",
                    placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801"
                  })
                ]),
                vue.createCommentVNode("   \u9A8C\u8BC1\u7801         "),
                vue.createElementVNode("view", { class: "pwd" }, [
                  vue.createElementVNode("view", { class: "pwd_code" }, [
                    vue.createElementVNode("view", { class: "pwd_icon" }, [
                      vue.createElementVNode("img", {
                        src: "/static/icon/search.png",
                        alt: ""
                      })
                    ]),
                    vue.createElementVNode("input", {
                      class: "obtain_code",
                      type: "text",
                      value: "",
                      placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
                    })
                  ]),
                  vue.createElementVNode("button", {
                    class: "code",
                    onClick: _cache[0] || (_cache[0] = (...args) => vue.unref(BtnCode) && vue.unref(BtnCode)(...args)),
                    disabled: vue.unref(Disable)
                  }, vue.toDisplayString(vue.unref(Disable) ? `${vue.unref(TimeNum)}\u79D2\u540E\u53EF\u91CD\u65B0\u83B7\u53D6` : vue.unref(TimeNum)), 9, ["disabled"])
                ]),
                vue.createCommentVNode("   \u5BC6\u7801         "),
                vue.createElementVNode("view", { class: "phone" }, [
                  vue.createElementVNode("view", { class: "phone_icon" }, [
                    vue.createElementVNode("img", {
                      src: "/static/icon/search.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("input", {
                    type: "text",
                    value: "",
                    placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
                  })
                ]),
                vue.createCommentVNode("   \u57CE\u5E02         "),
                vue.createElementVNode("view", { class: "phone" }, [
                  vue.createElementVNode("view", { class: "phone_icon" }, [
                    vue.createElementVNode("img", {
                      src: "/static/icon/search.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("input", {
                    type: "text",
                    value: "",
                    placeholder: "\u8BF7\u8F93\u5165\u5E38\u9A7B\u57CE\u5E02"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "btn_tis" }, [
                vue.createElementVNode("view", {
                  class: "login_btn",
                  onClick: reg
                }, " \u6CE8\u518C "),
                vue.createElementVNode("view", { class: "agreement" }, [
                  vue.createElementVNode("radio-group", {
                    style: { "display": "inline" },
                    onClick: isRadioFn
                  }, [
                    vue.createElementVNode("radio", { checked: vue.unref(isRadio) }, null, 8, ["checked"])
                  ]),
                  vue.createElementVNode("text", null, [
                    vue.createTextVNode(" \u6CE8\u518C\u5373\u4EE3\u8868\u540C\u610F\u300A"),
                    vue.createElementVNode("text", {
                      class: "txt",
                      onClick: _cache[1] || (_cache[1] = ($event) => vue.unref(to)({ title: "\u5E73\u53F0\u89C4\u5219" }))
                    }, "\u7528\u6237\u534F\u8BAE"),
                    vue.createTextVNode("\u300B&\u300A"),
                    vue.createElementVNode("text", {
                      onClick: _cache[2] || (_cache[2] = ($event) => vue.unref(to)({ title: "\u5E73\u53F0\u89C4\u5219" })),
                      class: "txt"
                    }, "\u9690\u79C1\u6743\u7CFB\u6570"),
                    vue.createTextVNode("\u300B")
                  ])
                ])
              ])
            ])
          ])
        ]);
      };
    }
  });
  var PagesUserRegisterIndex = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-5206e941"]]);
  const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
    props: {
      id: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      }
    },
    setup(__props) {
      const props = __props;
      uni.setNavigationBarTitle({
        title: props.title
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("view", { class: "Business_rules" }, [
            vue.createElementVNode("view", { class: "box" }, [
              vue.createElementVNode("view", { class: "left_text" }, "\u300A\u5E73\u53F0\u670D\u52A1\u534F\u8BAE\u300B"),
              vue.createElementVNode("view", { class: "right_text" }, [
                vue.createElementVNode("img", {
                  src: "/static/icon/right_x.png",
                  alt: ""
                })
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "Business_rules" }, [
            vue.createElementVNode("view", { class: "box" }, [
              vue.createElementVNode("view", { class: "left_text" }, "\u300A\u5E73\u53F0\u9690\u79C1\u534F\u8BAE\u300B"),
              vue.createElementVNode("view", { class: "right_text" }, [
                vue.createElementVNode("img", {
                  src: "/static/icon/right_x.png",
                  alt: ""
                })
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "Business_rules" }, [
            vue.createElementVNode("view", { class: "box" }, [
              vue.createElementVNode("view", { class: "left_text" }, "\u300A\u62CD\u62CD\u62CD\u4E1A\u52A1\u89C4\u5219\u300B"),
              vue.createElementVNode("view", { class: "right_text" }, [
                vue.createElementVNode("img", {
                  src: "/static/icon/right_x.png",
                  alt: ""
                })
              ])
            ])
          ])
        ]);
      };
    }
  });
  var PagesUserRuleIndex = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-0eb28fda"]]);
  const isArray = Array.isArray;
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  var en = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  var zhHans = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u663E\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F7D...",
    "uni-load-more.contentnomore": "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86"
  };
  var zhHant = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u986F\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F09...",
    "uni-load-more.contentnomore": "\u6C92\u6709\u66F4\u591A\u6578\u64DA\u4E86"
  };
  var messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t: t$1
  } = initVueI18n(messages);
  const _sfc_main$d = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t$1("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t$1("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t$1("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
        class: "uni-load-more__img uni-load-more__img--android-MP"
      }, [
        vue.createElementVNode("view", {
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4),
        vue.createElementVNode("view", {
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4),
        vue.createElementVNode("view", {
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4)
      ], 4)) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
        class: "uni-load-more__img uni-load-more__img--ios-H5"
      }, [
        vue.createElementVNode("image", {
          src: $data.imgBase64,
          mode: "widthFix"
        }, null, 8, ["src"])
      ], 4)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("text", {
        class: "uni-load-more__text",
        style: vue.normalizeStyle({ color: $props.color })
      }, vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText), 5)
    ]);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$6], ["__scopeId", "data-v-90d4256a"]]);
  function t(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function s(e, t2, s2) {
    return e(s2 = { path: t2, exports: {}, require: function(e2, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(t3 == null && s2.path);
    } }, s2.exports), s2.exports;
  }
  var n = s(function(e, t2) {
    var s2;
    e.exports = (s2 = s2 || function(e2, t3) {
      var s3 = Object.create || function() {
        function e3() {
        }
        return function(t4) {
          var s4;
          return e3.prototype = t4, s4 = new e3(), e3.prototype = null, s4;
        };
      }(), n2 = {}, r2 = n2.lib = {}, o2 = r2.Base = { extend: function(e3) {
        var t4 = s3(this);
        return e3 && t4.mixIn(e3), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e3 = this.extend();
        return e3.init.apply(e3, arguments), e3;
      }, init: function() {
      }, mixIn: function(e3) {
        for (var t4 in e3)
          e3.hasOwnProperty(t4) && (this[t4] = e3[t4]);
        e3.hasOwnProperty("toString") && (this.toString = e3.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, i2 = r2.WordArray = o2.extend({ init: function(e3, s4) {
        e3 = this.words = e3 || [], this.sigBytes = s4 != t3 ? s4 : 4 * e3.length;
      }, toString: function(e3) {
        return (e3 || c2).stringify(this);
      }, concat: function(e3) {
        var t4 = this.words, s4 = e3.words, n3 = this.sigBytes, r3 = e3.sigBytes;
        if (this.clamp(), n3 % 4)
          for (var o3 = 0; o3 < r3; o3++) {
            var i3 = s4[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
            t4[n3 + o3 >>> 2] |= i3 << 24 - (n3 + o3) % 4 * 8;
          }
        else
          for (o3 = 0; o3 < r3; o3 += 4)
            t4[n3 + o3 >>> 2] = s4[o3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, s4 = this.sigBytes;
        t4[s4 >>> 2] &= 4294967295 << 32 - s4 % 4 * 8, t4.length = e2.ceil(s4 / 4);
      }, clone: function() {
        var e3 = o2.clone.call(this);
        return e3.words = this.words.slice(0), e3;
      }, random: function(t4) {
        for (var s4, n3 = [], r3 = function(t5) {
          t5 = t5;
          var s5 = 987654321, n4 = 4294967295;
          return function() {
            var r4 = ((s5 = 36969 * (65535 & s5) + (s5 >> 16) & n4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & n4) & n4;
            return r4 /= 4294967296, (r4 += 0.5) * (e2.random() > 0.5 ? 1 : -1);
          };
        }, o3 = 0; o3 < t4; o3 += 4) {
          var a3 = r3(4294967296 * (s4 || e2.random()));
          s4 = 987654071 * a3(), n3.push(4294967296 * a3() | 0);
        }
        return new i2.init(n3, t4);
      } }), a2 = n2.enc = {}, c2 = a2.Hex = { stringify: function(e3) {
        for (var t4 = e3.words, s4 = e3.sigBytes, n3 = [], r3 = 0; r3 < s4; r3++) {
          var o3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          n3.push((o3 >>> 4).toString(16)), n3.push((15 & o3).toString(16));
        }
        return n3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, s4 = [], n3 = 0; n3 < t4; n3 += 2)
          s4[n3 >>> 3] |= parseInt(e3.substr(n3, 2), 16) << 24 - n3 % 8 * 4;
        return new i2.init(s4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e3) {
        for (var t4 = e3.words, s4 = e3.sigBytes, n3 = [], r3 = 0; r3 < s4; r3++) {
          var o3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          n3.push(String.fromCharCode(o3));
        }
        return n3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, s4 = [], n3 = 0; n3 < t4; n3++)
          s4[n3 >>> 2] |= (255 & e3.charCodeAt(n3)) << 24 - n3 % 4 * 8;
        return new i2.init(s4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e3) {
        try {
          return decodeURIComponent(escape(u2.stringify(e3)));
        } catch (e4) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e3) {
        return u2.parse(unescape(encodeURIComponent(e3)));
      } }, l2 = r2.BufferedBlockAlgorithm = o2.extend({ reset: function() {
        this._data = new i2.init(), this._nDataBytes = 0;
      }, _append: function(e3) {
        typeof e3 == "string" && (e3 = h2.parse(e3)), this._data.concat(e3), this._nDataBytes += e3.sigBytes;
      }, _process: function(t4) {
        var s4 = this._data, n3 = s4.words, r3 = s4.sigBytes, o3 = this.blockSize, a3 = r3 / (4 * o3), c3 = (a3 = t4 ? e2.ceil(a3) : e2.max((0 | a3) - this._minBufferSize, 0)) * o3, u3 = e2.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += o3)
            this._doProcessBlock(n3, h3);
          var l3 = n3.splice(0, c3);
          s4.sigBytes -= u3;
        }
        return new i2.init(l3, u3);
      }, clone: function() {
        var e3 = o2.clone.call(this);
        return e3._data = this._data.clone(), e3;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: o2.extend(), init: function(e3) {
        this.cfg = this.cfg.extend(e3), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e3) {
        return this._append(e3), this._process(), this;
      }, finalize: function(e3) {
        return e3 && this._append(e3), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e3) {
        return function(t4, s4) {
          return new e3.init(s4).finalize(t4);
        };
      }, _createHmacHelper: function(e3) {
        return function(t4, s4) {
          return new d2.HMAC.init(e3, s4).finalize(t4);
        };
      } });
      var d2 = n2.algo = {};
      return n2;
    }(Math), s2);
  }), r = (s(function(e, t2) {
    var s2;
    e.exports = (s2 = n, function(e2) {
      var t3 = s2, n2 = t3.lib, r2 = n2.WordArray, o2 = n2.Hasher, i2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e2.abs(e2.sin(t4 + 1)) | 0;
      }();
      var c2 = i2.MD5 = o2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e3, t4) {
        for (var s3 = 0; s3 < 16; s3++) {
          var n3 = t4 + s3, r3 = e3[n3];
          e3[n3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var o3 = this._hash.words, i3 = e3[t4 + 0], c3 = e3[t4 + 1], f = e3[t4 + 2], p2 = e3[t4 + 3], g2 = e3[t4 + 4], m2 = e3[t4 + 5], y2 = e3[t4 + 6], _2 = e3[t4 + 7], w2 = e3[t4 + 8], k2 = e3[t4 + 9], v2 = e3[t4 + 10], S2 = e3[t4 + 11], T2 = e3[t4 + 12], A2 = e3[t4 + 13], P2 = e3[t4 + 14], I2 = e3[t4 + 15], b2 = o3[0], E2 = o3[1], O2 = o3[2], C2 = o3[3];
        b2 = u2(b2, E2, O2, C2, i3, 7, a2[0]), C2 = u2(C2, b2, E2, O2, c3, 12, a2[1]), O2 = u2(O2, C2, b2, E2, f, 17, a2[2]), E2 = u2(E2, O2, C2, b2, p2, 22, a2[3]), b2 = u2(b2, E2, O2, C2, g2, 7, a2[4]), C2 = u2(C2, b2, E2, O2, m2, 12, a2[5]), O2 = u2(O2, C2, b2, E2, y2, 17, a2[6]), E2 = u2(E2, O2, C2, b2, _2, 22, a2[7]), b2 = u2(b2, E2, O2, C2, w2, 7, a2[8]), C2 = u2(C2, b2, E2, O2, k2, 12, a2[9]), O2 = u2(O2, C2, b2, E2, v2, 17, a2[10]), E2 = u2(E2, O2, C2, b2, S2, 22, a2[11]), b2 = u2(b2, E2, O2, C2, T2, 7, a2[12]), C2 = u2(C2, b2, E2, O2, A2, 12, a2[13]), O2 = u2(O2, C2, b2, E2, P2, 17, a2[14]), b2 = h2(b2, E2 = u2(E2, O2, C2, b2, I2, 22, a2[15]), O2, C2, c3, 5, a2[16]), C2 = h2(C2, b2, E2, O2, y2, 9, a2[17]), O2 = h2(O2, C2, b2, E2, S2, 14, a2[18]), E2 = h2(E2, O2, C2, b2, i3, 20, a2[19]), b2 = h2(b2, E2, O2, C2, m2, 5, a2[20]), C2 = h2(C2, b2, E2, O2, v2, 9, a2[21]), O2 = h2(O2, C2, b2, E2, I2, 14, a2[22]), E2 = h2(E2, O2, C2, b2, g2, 20, a2[23]), b2 = h2(b2, E2, O2, C2, k2, 5, a2[24]), C2 = h2(C2, b2, E2, O2, P2, 9, a2[25]), O2 = h2(O2, C2, b2, E2, p2, 14, a2[26]), E2 = h2(E2, O2, C2, b2, w2, 20, a2[27]), b2 = h2(b2, E2, O2, C2, A2, 5, a2[28]), C2 = h2(C2, b2, E2, O2, f, 9, a2[29]), O2 = h2(O2, C2, b2, E2, _2, 14, a2[30]), b2 = l2(b2, E2 = h2(E2, O2, C2, b2, T2, 20, a2[31]), O2, C2, m2, 4, a2[32]), C2 = l2(C2, b2, E2, O2, w2, 11, a2[33]), O2 = l2(O2, C2, b2, E2, S2, 16, a2[34]), E2 = l2(E2, O2, C2, b2, P2, 23, a2[35]), b2 = l2(b2, E2, O2, C2, c3, 4, a2[36]), C2 = l2(C2, b2, E2, O2, g2, 11, a2[37]), O2 = l2(O2, C2, b2, E2, _2, 16, a2[38]), E2 = l2(E2, O2, C2, b2, v2, 23, a2[39]), b2 = l2(b2, E2, O2, C2, A2, 4, a2[40]), C2 = l2(C2, b2, E2, O2, i3, 11, a2[41]), O2 = l2(O2, C2, b2, E2, p2, 16, a2[42]), E2 = l2(E2, O2, C2, b2, y2, 23, a2[43]), b2 = l2(b2, E2, O2, C2, k2, 4, a2[44]), C2 = l2(C2, b2, E2, O2, T2, 11, a2[45]), O2 = l2(O2, C2, b2, E2, I2, 16, a2[46]), b2 = d2(b2, E2 = l2(E2, O2, C2, b2, f, 23, a2[47]), O2, C2, i3, 6, a2[48]), C2 = d2(C2, b2, E2, O2, _2, 10, a2[49]), O2 = d2(O2, C2, b2, E2, P2, 15, a2[50]), E2 = d2(E2, O2, C2, b2, m2, 21, a2[51]), b2 = d2(b2, E2, O2, C2, T2, 6, a2[52]), C2 = d2(C2, b2, E2, O2, p2, 10, a2[53]), O2 = d2(O2, C2, b2, E2, v2, 15, a2[54]), E2 = d2(E2, O2, C2, b2, c3, 21, a2[55]), b2 = d2(b2, E2, O2, C2, w2, 6, a2[56]), C2 = d2(C2, b2, E2, O2, I2, 10, a2[57]), O2 = d2(O2, C2, b2, E2, y2, 15, a2[58]), E2 = d2(E2, O2, C2, b2, A2, 21, a2[59]), b2 = d2(b2, E2, O2, C2, g2, 6, a2[60]), C2 = d2(C2, b2, E2, O2, S2, 10, a2[61]), O2 = d2(O2, C2, b2, E2, f, 15, a2[62]), E2 = d2(E2, O2, C2, b2, k2, 21, a2[63]), o3[0] = o3[0] + b2 | 0, o3[1] = o3[1] + E2 | 0, o3[2] = o3[2] + O2 | 0, o3[3] = o3[3] + C2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, s3 = t4.words, n3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        s3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var o3 = e2.floor(n3 / 4294967296), i3 = n3;
        s3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), s3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), t4.sigBytes = 4 * (s3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e3 = o2.clone.call(this);
        return e3._hash = this._hash.clone(), e3;
      } });
      function u2(e3, t4, s3, n3, r3, o3, i3) {
        var a3 = e3 + (t4 & s3 | ~t4 & n3) + r3 + i3;
        return (a3 << o3 | a3 >>> 32 - o3) + t4;
      }
      function h2(e3, t4, s3, n3, r3, o3, i3) {
        var a3 = e3 + (t4 & n3 | s3 & ~n3) + r3 + i3;
        return (a3 << o3 | a3 >>> 32 - o3) + t4;
      }
      function l2(e3, t4, s3, n3, r3, o3, i3) {
        var a3 = e3 + (t4 ^ s3 ^ n3) + r3 + i3;
        return (a3 << o3 | a3 >>> 32 - o3) + t4;
      }
      function d2(e3, t4, s3, n3, r3, o3, i3) {
        var a3 = e3 + (s3 ^ (t4 | ~n3)) + r3 + i3;
        return (a3 << o3 | a3 >>> 32 - o3) + t4;
      }
      t3.MD5 = o2._createHelper(c2), t3.HmacMD5 = o2._createHmacHelper(c2);
    }(Math), s2.MD5);
  }), s(function(e, t2) {
    var s2, r2, o2;
    e.exports = (r2 = (s2 = n).lib.Base, o2 = s2.enc.Utf8, void (s2.algo.HMAC = r2.extend({ init: function(e2, t3) {
      e2 = this._hasher = new e2.init(), typeof t3 == "string" && (t3 = o2.parse(t3));
      var s3 = e2.blockSize, n2 = 4 * s3;
      t3.sigBytes > n2 && (t3 = e2.finalize(t3)), t3.clamp();
      for (var r3 = this._oKey = t3.clone(), i2 = this._iKey = t3.clone(), a2 = r3.words, c2 = i2.words, u2 = 0; u2 < s3; u2++)
        a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
      r3.sigBytes = i2.sigBytes = n2, this.reset();
    }, reset: function() {
      var e2 = this._hasher;
      e2.reset(), e2.update(this._iKey);
    }, update: function(e2) {
      return this._hasher.update(e2), this;
    }, finalize: function(e2) {
      var t3 = this._hasher, s3 = t3.finalize(e2);
      return t3.reset(), t3.finalize(this._oKey.clone().concat(s3));
    } })));
  }), s(function(e, t2) {
    e.exports = n.HmacMD5;
  }));
  function o(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }
  function i(e) {
    return o(e) === "object";
  }
  class a extends Error {
    constructor(e, t2) {
      super(e), this.code = t2;
    }
  }
  function c(e) {
    return e && typeof e == "string" ? JSON.parse(e) : e;
  }
  const u = true, h = "app", l = c({}.UNICLOUD_DEBUG), d = c("[]");
  let p = "";
  try {
    p = "__UNI__CAD59FD";
  } catch (e) {
  }
  let g = {};
  function m(e, t2 = {}) {
    var s2, n2;
    return s2 = g, n2 = e, Object.prototype.hasOwnProperty.call(s2, n2) || (g[e] = t2), g[e];
  }
  const y = ["invoke", "success", "fail", "complete"], _ = m("_globalUniCloudInterceptor");
  function w(e, t2) {
    _[e] || (_[e] = {}), i(t2) && Object.keys(t2).forEach((s2) => {
      y.indexOf(s2) > -1 && function(e2, t3, s3) {
        let n2 = _[e2][t3];
        n2 || (n2 = _[e2][t3] = []), n2.indexOf(s3) === -1 && typeof s3 == "function" && n2.push(s3);
      }(e, s2, t2[s2]);
    });
  }
  function k(e, t2) {
    _[e] || (_[e] = {}), i(t2) ? Object.keys(t2).forEach((s2) => {
      y.indexOf(s2) > -1 && function(e2, t3, s3) {
        const n2 = _[e2][t3];
        if (!n2)
          return;
        const r2 = n2.indexOf(s3);
        r2 > -1 && n2.splice(r2, 1);
      }(e, s2, t2[s2]);
    }) : delete _[e];
  }
  function v(e, t2) {
    return e && e.length !== 0 ? e.reduce((e2, s2) => e2.then(() => s2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function S(e, t2) {
    return _[e] && _[e][t2] || [];
  }
  function T(e, t2) {
    return t2 ? function(s2) {
      const n2 = t2 === "callFunction" && (s2 && s2.name) === "DCloud-clientDB";
      let r2;
      r2 = this.isReady ? Promise.resolve() : this.initUniCloud, s2 = s2 || {};
      const o2 = r2.then(() => n2 ? Promise.resolve() : v(S(t2, "invoke"), s2)).then(() => e.call(this, s2)).then((e2) => n2 ? Promise.resolve(e2) : v(S(t2, "success"), e2).then(() => v(S(t2, "complete"), e2)).then(() => Promise.resolve(e2)), (e2) => n2 ? Promise.reject(e2) : v(S(t2, "fail"), e2).then(() => v(S(t2, "complete"), e2)).then(() => Promise.reject(e2)));
      if (!(s2.success || s2.fail || s2.complete))
        return o2;
      o2.then((e2) => {
        s2.success && s2.success(e2), s2.complete && s2.complete(e2);
      }, (e2) => {
        s2.fail && s2.fail(e2), s2.complete && s2.complete(e2);
      });
    } : function(t3) {
      if (!((t3 = t3 || {}).success || t3.fail || t3.complete))
        return e.call(this, t3);
      e.call(this, t3).then((e2) => {
        t3.success && t3.success(e2), t3.complete && t3.complete(e2);
      }, (e2) => {
        t3.fail && t3.fail(e2), t3.complete && t3.complete(e2);
      });
    };
  }
  class A extends Error {
    constructor(e) {
      super(e.message), this.errMsg = e.message || "", Object.defineProperties(this, { code: { get: () => e.code }, requestId: { get: () => e.requestId }, message: { get() {
        return this.errMsg;
      }, set(e2) {
        this.errMsg = e2;
      } } });
    }
  }
  let P;
  function I() {
    const e = uni.getLocale && uni.getLocale() || "en";
    if (P)
      return __spreadProps(__spreadValues({}, P), { LOCALE: e });
    const { deviceId: t2, platform: s2 } = uni.getSystemInfoSync();
    return P = { PLATFORM: h, OS: s2, APPID: p, DEVICEID: t2, CLIENT_SDK_VERSION: "1.0.18" }, __spreadProps(__spreadValues({}, P), { LOCALE: e });
  }
  var b = { sign: function(e, t2) {
    let s2 = "";
    return Object.keys(e).sort().forEach(function(t3) {
      e[t3] && (s2 = s2 + "&" + t3 + "=" + e[t3]);
    }), s2 = s2.slice(1), r(s2, t2).toString();
  }, wrappedRequest: function(e, t2) {
    return new Promise((s2, n2) => {
      t2(Object.assign(e, { complete(e2) {
        e2 || (e2 = {});
        const t3 = e2.data && e2.data.header && e2.data.header["x-serverless-request-id"] || e2.header && e2.header["request-id"];
        if (!e2.statusCode || e2.statusCode >= 400)
          return n2(new A({ code: "SYS_ERR", message: e2.errMsg || "request:fail", requestId: t3 }));
        const r2 = e2.data;
        if (r2.error)
          return n2(new A({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, s2(r2);
      } }));
    });
  } };
  var E = { request: (e) => uni.request(e), uploadFile: (e) => uni.uploadFile(e), setStorageSync: (e, t2) => uni.setStorageSync(e, t2), getStorageSync: (e) => uni.getStorageSync(e), removeStorageSync: (e) => uni.removeStorageSync(e), clearStorageSync: () => uni.clearStorageSync() }, O = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };
  const { t: C } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, "zh-Hant": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, en: O, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: O }, "zh-Hans");
  var U = class {
    constructor(e) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e, t2))
          throw new Error(C("uniCloud.init.paramRequired", { param: t2 }));
      }), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = E, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e) {
      this.accessToken = e;
    }
    requestWrapped(e) {
      return b.wrappedRequest(e, this.adapter.request);
    }
    requestAuth(e) {
      return this.requestWrapped(e);
    }
    request(e, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e) : this.requestWrapped(e).catch((t3) => new Promise((e2, s2) => {
        !t3 || t3.code !== "GATEWAY_INVALID_TOKEN" && t3.code !== "InvalidParameter.InvalidToken" ? s2(t3) : e2();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e) {
      const t2 = Object.assign({}, e);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = b.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e, t2) {
      const s2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), n2 = { "Content-Type": "application/json" };
      return t2 !== "auth" && (s2.token = this.accessToken, n2["x-basement-token"] = this.accessToken), n2["x-serverless-sign"] = b.sign(s2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: s2, dataType: "json", header: n2 };
    }
    getAccessToken() {
      if (this._getAccessTokenPromiseStatus === "pending")
        return this._getAccessTokenPromise;
      this._getAccessTokenPromiseStatus = "pending";
      return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e) => new Promise((t2, s2) => {
        e.result && e.result.accessToken ? (this.setAccessToken(e.result.accessToken), this._getAccessTokenPromiseStatus = "fulfilled", t2(this.accessToken)) : (this._getAccessTokenPromiseStatus = "rejected", s2(new A({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" })));
      }), (e) => (this._getAccessTokenPromiseStatus = "rejected", Promise.reject(e))), this._getAccessTokenPromise;
    }
    authorize() {
      this.getAccessToken();
    }
    callFunction(e) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e, formData: t2, name: s2, filePath: n2, fileType: r2, onUploadProgress: o2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: s2, filePath: n2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new A({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new A({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof o2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          o2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: s2 = "image", onUploadProgress: n2, config: r2 }) {
      if (o(t2) !== "string")
        throw new A({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
      if (!(t2 = t2.trim()))
        throw new A({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      if (/:\/\//.test(t2))
        throw new A({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
      const i2 = r2 && r2.envType || this.config.envType;
      let a2, c2;
      return this.getOSSUploadOptionsFromPath({ env: i2, filename: t2 }).then((t3) => {
        const r3 = t3.result;
        a2 = r3.id, c2 = "https://" + r3.cdnDomain + "/" + r3.ossPath;
        const o2 = { url: "https://" + r3.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r3.accessKeyId, Signature: r3.signature, host: r3.host, id: a2, key: r3.ossPath, policy: r3.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: s2 };
        return this.uploadFileToOSS(Object.assign({}, o2, { onUploadProgress: n2 }));
      }).then(() => this.reportOSSUpload({ id: a2 })).then((t3) => new Promise((s3, n3) => {
        t3.success ? s3({ success: true, filePath: e, fileID: c2 }) : n3(new A({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };
      return this.request(this.setupRequest(t2));
    }
    getTempFileURL({ fileList: e } = {}) {
      return new Promise((t2, s2) => {
        Array.isArray(e) && e.length !== 0 || s2(new A({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t2({ fileList: e.map((e2) => ({ fileID: e2, tempFileURL: e2 })) });
      });
    }
  };
  var x = { init(e) {
    const t2 = new U(e), s2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return s2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const D = typeof location != "undefined" && location.protocol === "http:" ? "http:" : "https:";
  var R;
  !function(e) {
    e.local = "local", e.none = "none", e.session = "session";
  }(R || (R = {}));
  var q = function() {
  };
  const F = () => {
    let e;
    if (!Promise) {
      e = () => {
      }, e.promise = {};
      const t3 = () => {
        throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');
      };
      return Object.defineProperty(e.promise, "then", { get: t3 }), Object.defineProperty(e.promise, "catch", { get: t3 }), e;
    }
    const t2 = new Promise((t3, s2) => {
      e = (e2, n2) => e2 ? s2(e2) : t3(n2);
    });
    return e.promise = t2, e;
  };
  function L(e) {
    return e === void 0;
  }
  function N(e) {
    return Object.prototype.toString.call(e) === "[object Null]";
  }
  var M;
  function $(e) {
    const t2 = (s2 = e, Object.prototype.toString.call(s2) === "[object Array]" ? e : [e]);
    var s2;
    for (const e2 of t2) {
      const { isMatch: t3, genAdapter: s3, runtime: n2 } = e2;
      if (t3())
        return { adapter: s3(), runtime: n2 };
    }
  }
  !function(e) {
    e.WEB = "web", e.WX_MP = "wx_mp";
  }(M || (M = {}));
  const j = { adapter: null, runtime: void 0 }, B = ["anonymousUuidKey"];
  class K extends q {
    constructor() {
      super(), j.adapter.root.tcbObject || (j.adapter.root.tcbObject = {});
    }
    setItem(e, t2) {
      j.adapter.root.tcbObject[e] = t2;
    }
    getItem(e) {
      return j.adapter.root.tcbObject[e];
    }
    removeItem(e) {
      delete j.adapter.root.tcbObject[e];
    }
    clear() {
      delete j.adapter.root.tcbObject;
    }
  }
  function H(e, t2) {
    switch (e) {
      case "local":
        return t2.localStorage || new K();
      case "none":
        return new K();
      default:
        return t2.sessionStorage || new K();
    }
  }
  class W {
    constructor(e) {
      if (!this._storage) {
        this._persistence = j.adapter.primaryStorage || e.persistence, this._storage = H(this._persistence, j.adapter);
        const t2 = `access_token_${e.env}`, s2 = `access_token_expire_${e.env}`, n2 = `refresh_token_${e.env}`, r2 = `anonymous_uuid_${e.env}`, o2 = `login_type_${e.env}`, i2 = `user_info_${e.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: s2, refreshTokenKey: n2, anonymousUuidKey: r2, loginTypeKey: o2, userInfoKey: i2 };
      }
    }
    updatePersistence(e) {
      if (e === this._persistence)
        return;
      const t2 = this._persistence === "local";
      this._persistence = e;
      const s2 = H(e, j.adapter);
      for (const e2 in this.keys) {
        const n2 = this.keys[e2];
        if (t2 && B.includes(e2))
          continue;
        const r2 = this._storage.getItem(n2);
        L(r2) || N(r2) || (s2.setItem(n2, r2), this._storage.removeItem(n2));
      }
      this._storage = s2;
    }
    setStore(e, t2, s2) {
      if (!this._storage)
        return;
      const n2 = { version: s2 || "localCachev1", content: t2 }, r2 = JSON.stringify(n2);
      try {
        this._storage.setItem(e, r2);
      } catch (e2) {
        throw e2;
      }
    }
    getStore(e, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e2) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const s2 = this._storage.getItem(e);
      if (!s2)
        return "";
      if (s2.indexOf(t2) >= 0) {
        return JSON.parse(s2).content;
      }
      return "";
    }
    removeStore(e) {
      this._storage.removeItem(e);
    }
  }
  const z = {}, J = {};
  function V(e) {
    return z[e];
  }
  class Y {
    constructor(e, t2) {
      this.data = t2 || null, this.name = e;
    }
  }
  class X extends Y {
    constructor(e, t2) {
      super("error", { error: e, data: t2 }), this.error = e;
    }
  }
  const G = new class {
    constructor() {
      this._listeners = {};
    }
    on(e, t2) {
      return function(e2, t3, s2) {
        s2[e2] = s2[e2] || [], s2[e2].push(t3);
      }(e, t2, this._listeners), this;
    }
    off(e, t2) {
      return function(e2, t3, s2) {
        if (s2 && s2[e2]) {
          const n2 = s2[e2].indexOf(t3);
          n2 !== -1 && s2[e2].splice(n2, 1);
        }
      }(e, t2, this._listeners), this;
    }
    fire(e, t2) {
      if (e instanceof X)
        return console.error(e.error), this;
      const s2 = typeof e == "string" ? new Y(e, t2 || {}) : e;
      const n2 = s2.name;
      if (this._listens(n2)) {
        s2.target = this;
        const e2 = this._listeners[n2] ? [...this._listeners[n2]] : [];
        for (const t3 of e2)
          t3.call(this, s2);
      }
      return this;
    }
    _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }();
  function Q(e, t2) {
    G.on(e, t2);
  }
  function Z(e, t2 = {}) {
    G.fire(e, t2);
  }
  function ee(e, t2) {
    G.off(e, t2);
  }
  const te = "loginStateChanged", se = "loginStateExpire", ne = "loginTypeChanged", re = "anonymousConverted", oe = "refreshAccessToken";
  var ie;
  !function(e) {
    e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
  }(ie || (ie = {}));
  const ae = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], ce = { "X-SDK-Version": "1.3.5" };
  function ue(e, t2, s2) {
    const n2 = e[t2];
    e[t2] = function(t3) {
      const r2 = {}, o2 = {};
      s2.forEach((s3) => {
        const { data: n3, headers: i3 } = s3.call(e, t3);
        Object.assign(r2, n3), Object.assign(o2, i3);
      });
      const i2 = t3.data;
      return i2 && (() => {
        var e2;
        if (e2 = i2, Object.prototype.toString.call(e2) !== "[object FormData]")
          t3.data = __spreadValues(__spreadValues({}, i2), r2);
        else
          for (const e3 in r2)
            i2.append(e3, r2[e3]);
      })(), t3.headers = __spreadValues(__spreadValues({}, t3.headers || {}), o2), n2.call(e, t3);
    };
  }
  function he() {
    const e = Math.random().toString(16).slice(2);
    return { data: { seqId: e }, headers: __spreadProps(__spreadValues({}, ce), { "x-seqid": e }) };
  }
  class le {
    constructor(e = {}) {
      var t2;
      this.config = e, this._reqClass = new j.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = V(this.config.env), this._localCache = (t2 = this.config.env, J[t2]), ue(this._reqClass, "post", [he]), ue(this._reqClass, "upload", [he]), ue(this._reqClass, "download", [he]);
    }
    async post(e) {
      return await this._reqClass.post(e);
    }
    async upload(e) {
      return await this._reqClass.upload(e);
    }
    async download(e) {
      return await this._reqClass.download(e);
    }
    async refreshAccessToken() {
      let e, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e = await this._refreshAccessTokenPromise;
      } catch (e2) {
        t2 = e2;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: s2, loginTypeKey: n2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e), this._cache.removeStore(t2);
      let o2 = this._cache.getStore(s2);
      if (!o2)
        throw new Error("\u672A\u767B\u5F55CloudBase");
      const i2 = { refresh_token: o2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", i2);
      if (a2.data.code) {
        const { code: e2 } = a2.data;
        if (e2 === "SIGN_PARAM_INVALID" || e2 === "REFRESH_TOKEN_EXPIRED" || e2 === "INVALID_REFRESH_TOKEN") {
          if (this._cache.getStore(n2) === ie.ANONYMOUS && e2 === "INVALID_REFRESH_TOKEN") {
            const e3 = this._cache.getStore(r2), t3 = this._cache.getStore(s2), n3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e3, refresh_token: t3 });
            return this.setRefreshToken(n3.refresh_token), this._refreshAccessToken();
          }
          Z(se), this._cache.removeStore(s2);
        }
        throw new Error(`\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}`);
      }
      if (a2.data.access_token)
        return Z(oe), this._cache.setStore(e, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(s2), this._cache.setStore(s2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: s2 } = this._cache.keys;
      if (!this._cache.getStore(s2))
        throw new Error("refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38");
      let n2 = this._cache.getStore(e), r2 = this._cache.getStore(t2), o2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(n2, r2) && (o2 = false), (!n2 || !r2 || r2 < Date.now()) && o2 ? this.refreshAccessToken() : { accessToken: n2, accessTokenExpire: r2 };
    }
    async request(e, t2, s2) {
      const n2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const o2 = __spreadValues({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t2);
      if (ae.indexOf(e) === -1) {
        const { refreshTokenKey: e2 } = this._cache.keys;
        this._cache.getStore(e2) && (o2.access_token = (await this.getAccessToken()).accessToken);
      }
      let i2;
      if (e === "storage.uploadFile") {
        i2 = new FormData();
        for (let e2 in i2)
          i2.hasOwnProperty(e2) && i2[e2] !== void 0 && i2.append(e2, o2[e2]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", i2 = {};
        for (let e2 in o2)
          o2[e2] !== void 0 && (i2[e2] = o2[e2]);
      }
      let a2 = { headers: { "content-type": r2 } };
      s2 && s2.onUploadProgress && (a2.onUploadProgress = s2.onUploadProgress);
      const c2 = this._localCache.getStore(n2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: h2, search: l2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), h2 && (d2 = __spreadValues(__spreadValues({}, h2), d2));
      let f = function(e2, t3, s3 = {}) {
        const n3 = /\?/.test(t3);
        let r3 = "";
        for (let e3 in s3)
          r3 === "" ? !n3 && (t3 += "?") : r3 += "&", r3 += `${e3}=${encodeURIComponent(s3[e3])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e2}${t3}`;
      }(D, "//tcb-api.tencentcloudapi.com/web", d2);
      l2 && (f += l2);
      const p2 = await this.post(__spreadValues({ url: f, data: i2 }, a2)), g2 = p2.header && p2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(n2, g2), Number(p2.status) !== 200 && Number(p2.statusCode) !== 200 || !p2.data)
        throw new Error("network request error");
      return p2;
    }
    async send(e, t2 = {}) {
      const s2 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
      if (s2.data.code === "ACCESS_TOKEN_EXPIRED" && ae.indexOf(e) === -1) {
        await this.refreshAccessToken();
        const s3 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
        if (s3.data.code)
          throw new Error(`[${s3.data.code}] ${s3.data.message}`);
        return s3.data;
      }
      if (s2.data.code)
        throw new Error(`[${s2.data.code}] ${s2.data.message}`);
      return s2.data;
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: s2, refreshTokenKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(s2), this._cache.setStore(n2, e);
    }
  }
  const de = {};
  function fe(e) {
    return de[e];
  }
  class pe {
    constructor(e) {
      this.config = e, this._cache = V(e.env), this._request = fe(e.env);
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: s2, refreshTokenKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(s2), this._cache.setStore(n2, e);
    }
    setAccessToken(e, t2) {
      const { accessTokenKey: s2, accessTokenExpireKey: n2 } = this._cache.keys;
      this._cache.setStore(s2, e), this._cache.setStore(n2, t2);
    }
    async refreshUserInfo() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e);
    }
  }
  class ge {
    constructor(e) {
      if (!e)
        throw new Error("envId is not defined");
      this._envId = e, this._cache = V(this._envId), this._request = fe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e) {
      if (typeof e != "string")
        throw new Error("ticket must be string");
      return this._request.send("auth.linkWithTicket", { ticket: e });
    }
    linkWithRedirect(e) {
      e.signInWithRedirect();
    }
    updatePassword(e, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e });
    }
    updateEmail(e) {
      return this._request.send("auth.updateEmail", { newEmail: e });
    }
    updateUsername(e) {
      if (typeof e != "string")
        throw new Error("username must be a string");
      return this._request.send("auth.updateUsername", { username: e });
    }
    async getLinkedUidList() {
      const { data: e } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: s2 } = e;
      return s2.forEach((e2) => {
        e2.wxOpenId && e2.wxPublicId && (t2 = true);
      }), { users: s2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", { uid: e });
    }
    unlink(e) {
      return this._request.send("auth.unlink", { platform: e });
    }
    async update(e) {
      const { nickName: t2, gender: s2, avatarUrl: n2, province: r2, country: o2, city: i2 } = e, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: s2, avatarUrl: n2, province: r2, country: o2, city: i2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setUserInfo() {
      const { userInfoKey: e } = this._cache.keys, t2 = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e2) => {
        this[e2] = t2[e2];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e), this.setUserInfo();
    }
  }
  class me {
    constructor(e) {
      if (!e)
        throw new Error("envId is not defined");
      this._cache = V(e);
      const { refreshTokenKey: t2, accessTokenKey: s2, accessTokenExpireKey: n2 } = this._cache.keys, r2 = this._cache.getStore(t2), o2 = this._cache.getStore(s2), i2 = this._cache.getStore(n2);
      this.credential = { refreshToken: r2, accessToken: o2, accessTokenExpire: i2 }, this.user = new ge(e);
    }
    get isAnonymousAuth() {
      return this.loginType === ie.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === ie.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === ie.WECHAT || this.loginType === ie.WECHAT_OPEN || this.loginType === ie.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class ye extends pe {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e, refreshTokenKey: t2 } = this._cache.keys, s2 = this._cache.getStore(e) || void 0, n2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: s2, refresh_token: n2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), Z(te), Z(ne, { env: this.config.env, loginType: ie.ANONYMOUS, persistence: "local" });
        const e2 = new me(this.config.env);
        return await e2.user.refresh(), e2;
      }
      throw new Error("\u533F\u540D\u767B\u5F55\u5931\u8D25");
    }
    async linkAndRetrieveDataWithTicket(e) {
      const { anonymousUuidKey: t2, refreshTokenKey: s2 } = this._cache.keys, n2 = this._cache.getStore(t2), r2 = this._cache.getStore(s2), o2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: n2, refresh_token: r2, ticket: e });
      if (o2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(o2.refresh_token), await this._request.refreshAccessToken(), Z(re, { env: this.config.env }), Z(ne, { loginType: ie.CUSTOM, persistence: "local" }), { credential: { refreshToken: o2.refresh_token } };
      throw new Error("\u533F\u540D\u8F6C\u5316\u5931\u8D25");
    }
    _setAnonymousUUID(e) {
      const { anonymousUuidKey: t2, loginTypeKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e), this._cache.setStore(s2, ie.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class _e extends pe {
    async signIn(e) {
      if (typeof e != "string")
        throw new Error("ticket must be a string");
      const { refreshTokenKey: t2 } = this._cache.keys, s2 = await this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t2) || "" });
      if (s2.refresh_token)
        return this.setRefreshToken(s2.refresh_token), await this._request.refreshAccessToken(), Z(te), Z(ne, { env: this.config.env, loginType: ie.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new me(this.config.env);
      throw new Error("\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25");
    }
  }
  class we extends pe {
    async signIn(e, t2) {
      if (typeof e != "string")
        throw new Error("email must be a string");
      const { refreshTokenKey: s2 } = this._cache.keys, n2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t2, refresh_token: this._cache.getStore(s2) || "" }), { refresh_token: r2, access_token: o2, access_token_expire: i2 } = n2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Z(te), Z(ne, { env: this.config.env, loginType: ie.EMAIL, persistence: this.config.persistence }), new me(this.config.env);
      throw n2.code ? new Error(`\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [${n2.code}] ${n2.message}`) : new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25");
    }
    async activate(e) {
      return this._request.send("auth.activateEndUserMail", { token: e });
    }
    async resetPasswordWithToken(e, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t2 });
    }
  }
  class ke extends pe {
    async signIn(e, t2) {
      if (typeof e != "string")
        throw new Error("username must be a string");
      typeof t2 != "string" && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: s2 } = this._cache.keys, n2 = await this._request.send("auth.signIn", { loginType: ie.USERNAME, username: e, password: t2, refresh_token: this._cache.getStore(s2) || "" }), { refresh_token: r2, access_token_expire: o2, access_token: i2 } = n2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Z(te), Z(ne, { env: this.config.env, loginType: ie.USERNAME, persistence: this.config.persistence }), new me(this.config.env);
      throw n2.code ? new Error(`\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [${n2.code}] ${n2.message}`) : new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25");
    }
  }
  class ve {
    constructor(e) {
      this.config = e, this._cache = V(e.env), this._request = fe(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Q(ne, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e = this.hasLoginState();
      return e && e.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new ye(this.config);
    }
    customAuthProvider() {
      return new _e(this.config);
    }
    emailAuthProvider() {
      return new we(this.config);
    }
    usernameAuthProvider() {
      return new ke(this.config);
    }
    async signInAnonymously() {
      return new ye(this.config).signIn();
    }
    async signInWithEmailAndPassword(e, t2) {
      return new we(this.config).signIn(e, t2);
    }
    signInWithUsernameAndPassword(e, t2) {
      return new ke(this.config).signIn(e, t2);
    }
    async linkAndRetrieveDataWithTicket(e) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new ye(this.config)), Q(re, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
    }
    async signOut() {
      if (this.loginType === ie.ANONYMOUS)
        throw new Error("\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C");
      const { refreshTokenKey: e, accessTokenKey: t2, accessTokenExpireKey: s2 } = this._cache.keys, n2 = this._cache.getStore(e);
      if (!n2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: n2 });
      return this._cache.removeStore(e), this._cache.removeStore(t2), this._cache.removeStore(s2), Z(te), Z(ne, { env: this.config.env, loginType: ie.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t2 });
    }
    async sendPasswordResetEmail(e) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e });
    }
    onLoginStateChanged(e) {
      Q(te, () => {
        const t3 = this.hasLoginState();
        e.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e.call(this, t2);
    }
    onLoginStateExpired(e) {
      Q(se, e.bind(this));
    }
    onAccessTokenRefreshed(e) {
      Q(oe, e.bind(this));
    }
    onAnonymousConverted(e) {
      Q(re, e.bind(this));
    }
    onLoginTypeChanged(e) {
      Q(ne, () => {
        const t2 = this.hasLoginState();
        e.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e } = this._cache.keys;
      return this._cache.getStore(e) ? new me(this.config.env) : null;
    }
    async isUsernameRegistered(e) {
      if (typeof e != "string")
        throw new Error("username must be a string");
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e) {
      return new _e(this.config).signIn(e);
    }
    shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e) => e.code ? e : __spreadProps(__spreadValues({}, e.data), { requestId: e.seqId }));
    }
    getAuthHeader() {
      const { refreshTokenKey: e, accessTokenKey: t2 } = this._cache.keys, s2 = this._cache.getStore(e);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + s2 };
    }
    _onAnonymousConverted(e) {
      const { env: t2 } = e.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e) {
      const { loginType: t2, persistence: s2, env: n2 } = e.data;
      n2 === this.config.env && (this._cache.updatePersistence(s2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const Se = function(e, t2) {
    t2 = t2 || F();
    const s2 = fe(this.config.env), { cloudPath: n2, filePath: r2, onUploadProgress: o2, fileType: i2 = "image" } = e;
    return s2.send("storage.getUploadMetadata", { path: n2 }).then((e2) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e2, f = { key: n2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      s2.upload({ url: a2, data: f, file: r2, name: n2, fileType: i2, onUploadProgress: o2 }).then((e3) => {
        e3.statusCode === 201 ? t2(null, { fileID: h2, requestId: d2 }) : t2(new Error(`STORAGE_REQUEST_FAIL: ${e3.data}`));
      }).catch((e3) => {
        t2(e3);
      });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, Te = function(e, t2) {
    t2 = t2 || F();
    const s2 = fe(this.config.env), { cloudPath: n2 } = e;
    return s2.send("storage.getUploadMetadata", { path: n2 }).then((e2) => {
      t2(null, e2);
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, Ae = function({ fileList: e }, t2) {
    if (t2 = t2 || F(), !e || !Array.isArray(e))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e)
      if (!t3 || typeof t3 != "string")
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const s2 = { fileid_list: e };
    return fe(this.config.env).send("storage.batchDeleteFile", s2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.delete_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, Pe = function({ fileList: e }, t2) {
    t2 = t2 || F(), e && Array.isArray(e) || t2(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let s2 = [];
    for (let n3 of e)
      typeof n3 == "object" ? (n3.hasOwnProperty("fileID") && n3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), s2.push({ fileid: n3.fileID, max_age: n3.maxAge })) : typeof n3 == "string" ? s2.push({ fileid: n3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const n2 = { file_list: s2 };
    return fe(this.config.env).send("storage.batchGetDownloadUrl", n2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.download_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, Ie = async function({ fileID: e }, t2) {
    const s2 = (await Pe.call(this, { fileList: [{ fileID: e, maxAge: 600 }] })).fileList[0];
    if (s2.code !== "SUCCESS")
      return t2 ? t2(s2) : new Promise((e2) => {
        e2(s2);
      });
    const n2 = fe(this.config.env);
    let r2 = s2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return n2.download({ url: r2 });
    t2(await n2.download({ url: r2 }));
  }, be = function({ name: e, data: t2, query: s2, parse: n2, search: r2 }, o2) {
    const i2 = o2 || F();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e2) {
      return Promise.reject(e2);
    }
    if (!e)
      return Promise.reject(new Error("\u51FD\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A"));
    const c2 = { inQuery: s2, parse: n2, search: r2, function_name: e, request_data: a2 };
    return fe(this.config.env).send("functions.invokeFunction", c2).then((e2) => {
      if (e2.code)
        i2(null, e2);
      else {
        let t3 = e2.data.response_data;
        if (n2)
          i2(null, { result: t3, requestId: e2.requestId });
        else
          try {
            t3 = JSON.parse(e2.data.response_data), i2(null, { result: t3, requestId: e2.requestId });
          } catch (e3) {
            i2(new Error("response data must be json"));
          }
      }
      return i2.promise;
    }).catch((e2) => {
      i2(e2);
    }), i2.promise;
  }, Ee = { timeout: 15e3, persistence: "session" }, Oe = {};
  class Ce {
    constructor(e) {
      this.config = e || this.config, this.authObj = void 0;
    }
    init(e) {
      switch (j.adapter || (this.requestClient = new j.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: `\u8BF7\u6C42\u5728${(e.timeout || 5e3) / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD` })), this.config = __spreadValues(__spreadValues({}, Ee), e), true) {
        case this.config.timeout > 6e5:
          console.warn("timeout\u5927\u4E8E\u53EF\u914D\u7F6E\u4E0A\u9650[10\u5206\u949F]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0A\u9650\u6570\u503C"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout\u5C0F\u4E8E\u53EF\u914D\u7F6E\u4E0B\u9650[100ms]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0B\u9650\u6570\u503C"), this.config.timeout = 100;
      }
      return new Ce(this.config);
    }
    auth({ persistence: e } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e || j.adapter.primaryStorage || Ee.persistence;
      var s2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e2) {
        const { env: t3 } = e2;
        z[t3] = new W(e2), J[t3] = new W(__spreadProps(__spreadValues({}, e2), { persistence: "local" }));
      }(this.config), s2 = this.config, de[s2.env] = new le(s2), this.authObj = new ve(this.config), this.authObj;
    }
    on(e, t2) {
      return Q.apply(this, [e, t2]);
    }
    off(e, t2) {
      return ee.apply(this, [e, t2]);
    }
    callFunction(e, t2) {
      return be.apply(this, [e, t2]);
    }
    deleteFile(e, t2) {
      return Ae.apply(this, [e, t2]);
    }
    getTempFileURL(e, t2) {
      return Pe.apply(this, [e, t2]);
    }
    downloadFile(e, t2) {
      return Ie.apply(this, [e, t2]);
    }
    uploadFile(e, t2) {
      return Se.apply(this, [e, t2]);
    }
    getUploadMetadata(e, t2) {
      return Te.apply(this, [e, t2]);
    }
    registerExtension(e) {
      Oe[e.name] = e;
    }
    async invokeExtension(e, t2) {
      const s2 = Oe[e];
      if (!s2)
        throw Error(`\u6269\u5C55${e} \u5FC5\u987B\u5148\u6CE8\u518C`);
      return await s2.invoke(t2, this);
    }
    useAdapters(e) {
      const { adapter: t2, runtime: s2 } = $(e) || {};
      t2 && (j.adapter = t2), s2 && (j.runtime = s2);
    }
  }
  var Ue = new Ce();
  function xe(e, t2, s2) {
    s2 === void 0 && (s2 = {});
    var n2 = /\?/.test(t2), r2 = "";
    for (var o2 in s2)
      r2 === "" ? !n2 && (t2 += "?") : r2 += "&", r2 += o2 + "=" + encodeURIComponent(s2[o2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e + t2;
  }
  class De {
    post(e) {
      const { url: t2, data: s2, headers: n2 } = e;
      return new Promise((e2, r2) => {
        E.request({ url: xe("https:", t2), data: s2, method: "POST", header: n2, success(t3) {
          e2(t3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    }
    upload(e) {
      return new Promise((t2, s2) => {
        const { url: n2, file: r2, data: o2, headers: i2, fileType: a2 } = e, c2 = E.uploadFile({ url: xe("https:", n2), name: "file", formData: Object.assign({}, o2), filePath: r2, fileType: a2, header: i2, success(e2) {
          const s3 = { statusCode: e2.statusCode, data: e2.data || {} };
          e2.statusCode === 200 && o2.success_action_status && (s3.statusCode = parseInt(o2.success_action_status, 10)), t2(s3);
        }, fail(e2) {
          s2(new Error(e2.errMsg || "uploadFile:fail"));
        } });
        typeof e.onUploadProgress == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((t3) => {
          e.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const Re = { setItem(e, t2) {
    E.setStorageSync(e, t2);
  }, getItem: (e) => E.getStorageSync(e), removeItem(e) {
    E.removeStorageSync(e);
  }, clear() {
    E.clearStorageSync();
  } };
  var qe = { genAdapter: function() {
    return { root: {}, reqClass: De, localStorage: Re, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  Ue.useAdapters(qe);
  const Fe = Ue, Le = Fe.init;
  Fe.init = function(e) {
    e.env = e.spaceId;
    const t2 = Le.call(this, e);
    t2.config.provider = "tencent", t2.config.spaceId = e.spaceId;
    const s2 = t2.auth;
    return t2.auth = function(e2) {
      const t3 = s2.call(this, e2);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e3) => {
        t3[e3] = T(t3[e3]).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var Ne = Fe;
  function Me(e) {
    return e && Me(e.__v_raw) || e;
  }
  function $e() {
    return { token: E.getStorageSync("uni_id_token") || E.getStorageSync("uniIdToken"), tokenExpired: E.getStorageSync("uni_id_token_expired") };
  }
  var Be = class extends U {
    getAccessToken() {
      return new Promise((e, t2) => {
        const s2 = "Anonymous_Access_token";
        this.setAccessToken(s2), e(s2);
      });
    }
    setupRequest(e, t2) {
      const s2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), n2 = { "Content-Type": "application/json" };
      t2 !== "auth" && (s2.token = this.accessToken, n2["x-basement-token"] = this.accessToken), n2["x-serverless-sign"] = b.sign(s2, this.config.clientSecret);
      const r2 = I();
      n2["x-client-info"] = JSON.stringify(r2);
      const { token: o2 } = $e();
      return n2["x-client-token"] = o2, { url: this.config.requestUrl, method: "POST", data: s2, dataType: "json", header: JSON.parse(JSON.stringify(n2)) };
    }
    uploadFileToOSS({ url: e, formData: t2, name: s2, filePath: n2, fileType: r2, onUploadProgress: o2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: s2, filePath: n2, fileType: r2, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new A({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new A({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof o2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          o2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: s2 = "image", onUploadProgress: n2 }) {
      if (!t2)
        throw new A({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: o2, formData: i2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: o2, formData: i2, name: a2, filePath: e, fileType: s2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: n2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((s3, n3) => {
        t3.success ? s3({ success: true, filePath: e, fileID: r2 }) : n3(new A({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2));
    }
    getTempFileURL({ fileList: e } = {}) {
      const t2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2));
    }
  };
  var Ke = { init(e) {
    const t2 = new Be(e), s2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return s2;
    }, t2.customAuth = t2.auth, t2;
  } };
  function He({ data: e }) {
    let t2;
    t2 = I();
    const s2 = JSON.parse(JSON.stringify(e || {}));
    if (Object.assign(s2, { clientInfo: t2 }), !s2.uniIdToken) {
      const { token: e2 } = $e();
      e2 && (s2.uniIdToken = e2);
    }
    return s2;
  }
  function We({ name: e, data: t2 }) {
    const { localAddress: s2, localPort: n2 } = this, r2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider], o2 = this.config.spaceId, i2 = `http://${s2}:${n2}/system/check-function`, a2 = `http://${s2}:${n2}/cloudfunctions/${e}`;
    return new Promise((t3, s3) => {
      E.request({ method: "POST", url: i2, data: { name: e, platform: h, provider: r2, spaceId: o2 }, timeout: 3e3, success(e2) {
        t3(e2);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570\u3002" } });
      } });
    }).then(({ data: e2 } = {}) => {
      const { code: t3, message: s3 } = e2 || {};
      return { code: t3 === 0 ? 0 : t3 || "SYS_ERR", message: s3 || "SYS_ERR" };
    }).then(({ code: s3, message: n3 }) => {
      if (s3 !== 0) {
        switch (s3) {
          case "MODULE_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(n3 || "\u9700\u8981\u8BBF\u95EE\u52A0\u5BC6\u7684uni-clientDB-action\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u73AF\u5883");
            break;
          case "NETWORK_ERROR": {
            const e2 = "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B";
            throw console.error(e2), new Error(e2);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e2 = `\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A${n3}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5`;
            throw console.error(e2), new Error(e2);
          }
        }
        return this._originCallFunction({ name: e, data: t2 });
      }
      return new Promise((e2, s4) => {
        const n4 = He.call(this, { data: t2 });
        E.request({ method: "POST", url: a2, data: { provider: r2, platform: h, param: n4 }, success: ({ statusCode: t3, data: n5 } = {}) => !t3 || t3 >= 400 ? s4(new A({ code: n5.code || "SYS_ERR", message: n5.message || "request:fail" })) : e2({ result: n5 }), fail(e3) {
          s4(new A({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const ze = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var Je = /[\\^$.*+?()[\]{}|]/g, Ve = RegExp(Je.source);
  function Ye(e, t2, s2) {
    return e.replace(new RegExp((n2 = t2) && Ve.test(n2) ? n2.replace(Je, "\\$&") : n2, "g"), s2);
    var n2;
  }
  function Xe({ functionName: e, result: t2, logPvd: s2 }) {
    if (this.config.useDebugFunction && t2 && t2.requestId) {
      const n2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t2.requestId });
      console.log(`[${s2}-request]${n2}[/${s2}-request]`);
    }
  }
  function Ge(e) {
    const t2 = e.callFunction, s2 = function(s3) {
      const n2 = s3.name;
      s3.data = He.call(e, { data: s3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider];
      return t2.call(this, s3).then((e2) => (Xe.call(this, { functionName: n2, result: e2, logPvd: r2 }), Promise.resolve(e2)), (e2) => (Xe.call(this, { functionName: n2, result: e2, logPvd: r2 }), e2 && e2.message && (e2.message = function({ message: e3 = "", extraInfo: t3 = {}, formatter: s4 = [] } = {}) {
        for (let n3 = 0; n3 < s4.length; n3++) {
          const { rule: r3, content: o2, mode: i2 } = s4[n3], a2 = e3.match(r3);
          if (!a2)
            continue;
          let c2 = o2;
          for (let e4 = 1; e4 < a2.length; e4++)
            c2 = Ye(c2, `{$${e4}}`, a2[e4]);
          for (const e4 in t3)
            c2 = Ye(c2, `{${e4}}`, t3[e4]);
          return i2 === "replace" ? c2 : e3 + c2;
        }
        return e3;
      }({ message: `[${s3.name}]: ${e2.message}`, formatter: ze, extraInfo: { functionName: n2 } })), Promise.reject(e2)));
    };
    e.callFunction = function(t3) {
      let n2;
      return e.debugInfo && !e.debugInfo.forceRemote && d ? (e._originCallFunction || (e._originCallFunction = s2), n2 = We.call(this, t3)) : n2 = s2.call(this, t3), Object.defineProperty(n2, "result", { get: () => (console.warn("\u5F53\u524D\u8FD4\u56DE\u7ED3\u679C\u4E3APromise\u7C7B\u578B\uFF0C\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u5176result\u5C5E\u6027\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), n2;
    };
  }
  const Qe = Symbol("CLIENT_DB_INTERNAL");
  function Ze(e, t2) {
    return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Qe, e.__v_raw = void 0, new Proxy(e, { get: (e2, s2, n2) => s2 in e2 || typeof s2 != "string" ? e2[s2] : t2.get(e2, s2, n2) });
  }
  function et(e) {
    return { on: (t2, s2) => {
      e[t2] = e[t2] || [], e[t2].indexOf(s2) > -1 || e[t2].push(s2);
    }, off: (t2, s2) => {
      e[t2] = e[t2] || [];
      const n2 = e[t2].indexOf(s2);
      n2 !== -1 && e[t2].splice(n2, 1);
    } };
  }
  const tt = ["db.Geo", "db.command", "command.aggregate"];
  function st(e, t2) {
    return tt.indexOf(`${e}.${t2}`) > -1;
  }
  function nt(e) {
    switch (o(e = Me(e))) {
      case "array":
        return e.map((e2) => nt(e2));
      case "object":
        return e._internalType === Qe || Object.keys(e).forEach((t2) => {
          e[t2] = nt(e[t2]);
        }), e;
      case "regexp":
        return { $regexp: { source: e.source, flags: e.flags } };
      case "date":
        return { $date: e.toISOString() };
      default:
        return e;
    }
  }
  class rt {
    constructor(e, t2, s2) {
      this.content = e, this.prevStage = t2 || null, this.udb = null, this._database = s2;
    }
    toJSON() {
      let e = this;
      const t2 = [e.content];
      for (; e.prevStage; )
        e = e.prevStage, t2.push(e.content);
      return { $db: t2.reverse().map((e2) => ({ $method: e2.$method, $param: nt(e2.$param) })) };
    }
    getAction() {
      const e = this.toJSON().$db.find((e2) => e2.$method === "action");
      return e && e.$param && e.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e) => e.$method !== "action") };
    }
    get useAggregate() {
      let e = this, t2 = false;
      for (; e.prevStage; ) {
        e = e.prevStage;
        const s2 = e.content.$method;
        if (s2 === "aggregate" || s2 === "pipeline") {
          t2 = true;
          break;
        }
      }
      return t2;
    }
    get count() {
      if (!this.useAggregate)
        return function() {
          return this._send("count", Array.from(arguments));
        };
      const e = this;
      return function() {
        return ot({ $method: "count", $param: nt(Array.from(arguments)) }, e, this._database);
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    add() {
      return this._send("add", Array.from(arguments));
    }
    remove() {
      return this._send("remove", Array.from(arguments));
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    set() {
      throw new Error("clientDB\u7981\u6B62\u4F7F\u7528set\u65B9\u6CD5");
    }
    _send(e, t2) {
      const s2 = this.getAction(), n2 = this.getCommand();
      return n2.$db.push({ $method: e, $param: nt(t2) }), this._database._callCloudFunction({ action: s2, command: n2 });
    }
  }
  function ot(e, t2, s2) {
    return Ze(new rt(e, t2, s2), { get(e2, t3) {
      let n2 = "db";
      return e2 && e2.content && (n2 = e2.content.$method), st(n2, t3) ? ot({ $method: t3 }, e2, s2) : function() {
        return ot({ $method: t3, $param: nt(Array.from(arguments)) }, e2, s2);
      };
    } });
  }
  function it({ path: e, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e.map((e2) => ({ $method: e2 })), { $method: t2, $param: this.param }] };
      }
    };
  }
  class at extends class {
    constructor({ uniClient: e = {} } = {}) {
      this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = m("_globalUniCloudDatabaseCallback")), this.auth = et(this._authCallBacks), Object.assign(this, et(this._dbCallBacks)), this.env = Ze({}, { get: (e2, t2) => ({ $env: t2 }) }), this.Geo = Ze({}, { get: (e2, t2) => it({ path: ["Geo"], method: t2 }) }), this.serverDate = it({ path: [], method: "serverDate" }), this.RegExp = it({ path: [], method: "RegExp" });
    }
    getCloudEnv(e) {
      if (typeof e != "string" || !e.trim())
        throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
      return { $env: e.replace("$cloudEnv_", "") };
    }
    _callback(e, t2) {
      const s2 = this._dbCallBacks;
      s2[e] && s2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    _callbackAuth(e, t2) {
      const s2 = this._authCallBacks;
      s2[e] && s2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    multiSend() {
      const e = Array.from(arguments), t2 = e.map((e2) => {
        const t3 = e2.getAction(), s2 = e2.getCommand();
        if (s2.$db[s2.$db.length - 1].$method !== "getTemp")
          throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
        return { action: t3, command: s2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e });
    }
  } {
    _callCloudFunction({ action: e, command: t2, multiCommand: s2, queryList: n2 }) {
      function r2(e2, t3) {
        if (s2 && n2)
          for (let s3 = 0; s3 < n2.length; s3++) {
            const r3 = n2[s3];
            r3.udb && typeof r3.udb.setResult == "function" && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e2.result.dataList[s3]));
          }
      }
      const o2 = v(S("database", "invoke")), i2 = this._uniClient;
      return o2.then(() => i2.callFunction({ name: "DCloud-clientDB", data: { action: e, command: t2, multiCommand: s2 } })).then((e2) => {
        const { code: t3, message: s3, token: n3, tokenExpired: o3, systemInfo: i3 = [] } = e2.result;
        if (i3)
          for (let e3 = 0; e3 < i3.length; e3++) {
            const { level: t4, message: s4, detail: n4 } = i3[e3], r3 = console[t4] || console.log;
            let o4 = "[System Info]" + s4;
            n4 && (o4 = `${o4}
\u8BE6\u7EC6\u4FE1\u606F\uFF1A${n4}`), r3(o4);
          }
        if (t3) {
          const e3 = new a(s3, t3);
          return this._callback("error", [e3]), Promise.reject(e3);
        }
        n3 && o3 && (!function({ token: e3, tokenExpired: t4 } = {}) {
          e3 && E.setStorageSync("uni_id_token", e3), t4 && E.setStorageSync("uni_id_token_expired", t4);
        }({ token: n3, tokenExpired: o3 }), this._callbackAuth("refreshToken", [{ token: n3, tokenExpired: o3 }]), this._callback("refreshToken", [{ token: n3, tokenExpired: o3 }]));
        const c2 = e2.result.affectedDocs;
        return typeof c2 == "number" && Object.defineProperty(e2.result, "affectedDocs", { get: () => (console.warn("affectedDocs\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528inserted/deleted/updated/data.length\u66FF\u4EE3"), c2) }), v(S("database", "success"), e2).then(() => v(S("database", "complete"), e2)).then(() => (r2(e2, null), Promise.resolve(e2)));
      }, (e2) => {
        const t3 = new a(e2.message, e2.code || "SYSTEM_ERROR");
        return this._callback("error", [t3]), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e2.message) && console.warn("clientDB\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5728web\u63A7\u5236\u53F0\u4FDD\u5B58\u4E00\u6B21schema\u4EE5\u5F00\u542FclientDB"), v(S("database", "fail"), e2).then(() => v(S("database", "complete"), e2)).then(() => (r2(null, e2), Promise.reject(e2)));
      });
    }
  }
  function ct(e) {
    e.database = function(t2) {
      if (t2 && Object.keys(t2).length > 0)
        return e.init(t2).database();
      if (this._database)
        return this._database;
      const s2 = function(e2, t3 = {}) {
        return Ze(new e2(t3), { get: (e3, t4) => st("db", t4) ? ot({ $method: t4 }, null, e3) : function() {
          return ot({ $method: t4, $param: nt(Array.from(arguments)) }, null, e3);
        } });
      }(at, { uniClient: e });
      return this._database = s2, s2;
    };
  }
  let ut;
  const ht = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", lt = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function dt() {
    const e = $e().token || "", t2 = e.split(".");
    if (!e || t2.length !== 3)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let s2;
    try {
      s2 = JSON.parse((n2 = t2[1], decodeURIComponent(ut(n2).split("").map(function(e2) {
        return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e2) {
      throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + e2.message);
    }
    var n2;
    return s2.tokenExpired = 1e3 * s2.exp, delete s2.exp, delete s2.iat, s2;
  }
  ut = typeof atob != "function" ? function(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !lt.test(e))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e += "==".slice(2 - (3 & e.length));
    for (var s2, n2, r2 = "", o2 = 0; o2 < e.length; )
      t2 = ht.indexOf(e.charAt(o2++)) << 18 | ht.indexOf(e.charAt(o2++)) << 12 | (s2 = ht.indexOf(e.charAt(o2++))) << 6 | (n2 = ht.indexOf(e.charAt(o2++))), r2 += s2 === 64 ? String.fromCharCode(t2 >> 16 & 255) : n2 === 64 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var ft = t(s(function(e, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const s2 = "chooseAndUploadFile:ok", n2 = "chooseAndUploadFile:fail";
    function r2(e2, t3) {
      return e2.tempFiles.forEach((e3, s3) => {
        e3.name || (e3.name = e3.path.substring(e3.path.lastIndexOf("/") + 1)), t3 && (e3.fileType = t3), e3.cloudPath = Date.now() + "_" + s3 + e3.name.substring(e3.name.lastIndexOf("."));
      }), e2.tempFilePaths || (e2.tempFilePaths = e2.tempFiles.map((e3) => e3.path)), e2;
    }
    function o2(e2, t3, { onChooseFile: n3, onUploadProgress: r3 }) {
      return t3.then((e3) => {
        if (n3) {
          const t4 = n3(e3);
          if (t4 !== void 0)
            return Promise.resolve(t4).then((t5) => t5 === void 0 ? e3 : t5);
        }
        return e3;
      }).then((t4) => t4 === false ? { errMsg: s2, tempFilePaths: [], tempFiles: [] } : function(e3, t5, n4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = s2;
        const o3 = t5.tempFiles, i2 = o3.length;
        let a2 = 0;
        return new Promise((s3) => {
          for (; a2 < n4; )
            c2();
          function c2() {
            const n5 = a2++;
            if (n5 >= i2)
              return void (!o3.find((e4) => !e4.url && !e4.errMsg) && s3(t5));
            const u2 = o3[n5];
            e3.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, onUploadProgress(e4) {
              e4.index = n5, e4.tempFile = u2, e4.tempFilePath = u2.path, r4 && r4(e4);
            } }).then((e4) => {
              u2.url = e4.fileID, n5 < i2 && c2();
            }).catch((e4) => {
              u2.errMsg = e4.errMsg || e4.message, n5 < i2 && c2();
            });
          }
        });
      }(e2, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e2) {
      return function(t3 = { type: "all" }) {
        return t3.type === "image" ? o2(e2, function(e3) {
          const { count: t4, sizeType: s3, sourceType: o3 = ["album", "camera"], extension: i2 } = e3;
          return new Promise((e4, a2) => {
            uni.chooseImage({ count: t4, sizeType: s3, sourceType: o3, extension: i2, success(t5) {
              e4(r2(t5, "image"));
            }, fail(e5) {
              a2({ errMsg: e5.errMsg.replace("chooseImage:fail", n2) });
            } });
          });
        }(t3), t3) : t3.type === "video" ? o2(e2, function(e3) {
          const { camera: t4, compressed: s3, maxDuration: o3, sourceType: i2 = ["album", "camera"], extension: a2 } = e3;
          return new Promise((e4, c2) => {
            uni.chooseVideo({ camera: t4, compressed: s3, maxDuration: o3, sourceType: i2, extension: a2, success(t5) {
              const { tempFilePath: s4, duration: n3, size: o4, height: i3, width: a3 } = t5;
              e4(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [s4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: s4, size: o4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: i3, duration: n3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e5) {
              c2({ errMsg: e5.errMsg.replace("chooseVideo:fail", n2) });
            } });
          });
        }(t3), t3) : o2(e2, function(e3) {
          const { count: t4, extension: s3 } = e3;
          return new Promise((e4, o3) => {
            let i2 = uni.chooseFile;
            if (typeof wx != "undefined" && typeof wx.chooseMessageFile == "function" && (i2 = wx.chooseMessageFile), typeof i2 != "function")
              return o3({ errMsg: n2 + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002" });
            i2({ type: "all", count: t4, extension: s3, success(t5) {
              e4(r2(t5));
            }, fail(e5) {
              o3({ errMsg: e5.errMsg.replace("chooseFile:fail", n2) });
            } });
          });
        }(t3), t3);
      };
    };
  }));
  const pt = "manual";
  function gt(e) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e2 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e2.push(this[t2]);
        }), e2;
      }, (e2, t2) => {
        if (this.loadtime === pt)
          return;
        let s2 = false;
        const n2 = [];
        for (let r2 = 2; r2 < e2.length; r2++)
          e2[r2] !== t2[r2] && (n2.push(e2[r2]), s2 = true);
        e2[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(s2, n2);
      });
    }, methods: { onMixinDatacomPropsChange(e2, t2) {
    }, mixinDatacomEasyGet({ getone: e2 = false, success: t2, fail: s2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((s3) => {
        this.mixinDatacomLoading = false;
        const { data: n2, count: r2 } = s3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = n2.length < this.pageSize;
        const o2 = e2 ? n2.length ? n2[0] : void 0 : n2;
        this.mixinDatacomResData = o2, t2 && t2(o2);
      }).catch((e3) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e3, s2 && s2(e3);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let s2 = e.database(this.spaceInfo);
      const n2 = t2.action || this.action;
      n2 && (s2 = s2.action(n2));
      const r2 = t2.collection || this.collection;
      s2 = Array.isArray(r2) ? s2.collection(...r2) : s2.collection(r2);
      const o2 = t2.where || this.where;
      o2 && Object.keys(o2).length && (s2 = s2.where(o2));
      const i2 = t2.field || this.field;
      i2 && (s2 = s2.field(i2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (s2 = s2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (s2 = s2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (s2 = s2.groupField(u2));
      (t2.distinct !== void 0 ? t2.distinct : this.distinct) === true && (s2 = s2.distinct());
      const h2 = t2.orderby || this.orderby;
      h2 && (s2 = s2.orderBy(h2));
      const l2 = t2.pageCurrent !== void 0 ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = t2.pageSize !== void 0 ? t2.pageSize : this.mixinDatacomPage.size, f = t2.getcount !== void 0 ? t2.getcount : this.getcount, p2 = t2.gettree !== void 0 ? t2.gettree : this.gettree, g2 = t2.gettreepath !== void 0 ? t2.gettreepath : this.gettreepath, m2 = { getCount: f }, y2 = { limitLevel: t2.limitlevel !== void 0 ? t2.limitlevel : this.limitlevel, startWith: t2.startwith !== void 0 ? t2.startwith : this.startwith };
      return p2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), s2 = s2.skip(d2 * (l2 - 1)).limit(d2).get(m2), s2;
    } } };
  }
  async function mt(e, t2) {
    const s2 = `http://${e}:${t2}/system/ping`;
    try {
      const e2 = await (n2 = { url: s2, timeout: 500 }, new Promise((e3, t3) => {
        E.request(__spreadProps(__spreadValues({}, n2), { success(t4) {
          e3(t4);
        }, fail(e4) {
          t3(e4);
        } }));
      }));
      return !(!e2.data || e2.data.code !== 0);
    } catch (e2) {
      return false;
    }
    var n2;
  }
  function yt(e) {
    if (e.initUniCloudStatus && e.initUniCloudStatus !== "rejected")
      return;
    let t2 = Promise.resolve();
    var s2;
    s2 = 1, t2 = new Promise((e2, t3) => {
      setTimeout(() => {
        e2();
      }, s2);
    }), e.isReady = false, e.isDefault = false;
    const n2 = e.auth();
    e.initUniCloudStatus = "pending", e.initUniCloud = t2.then(() => n2.getLoginState()).then((e2) => e2 ? Promise.resolve() : n2.signInAnonymously()).then(() => {
      if (e.debugInfo) {
        const { address: t3, servePort: s3 } = e.debugInfo;
        return async function(e2, t4) {
          let s4;
          for (let n3 = 0; n3 < e2.length; n3++) {
            const r2 = e2[n3];
            if (await mt(r2, t4)) {
              s4 = r2;
              break;
            }
          }
          return { address: s4, port: t4 };
        }(t3, s3);
      }
    }).then(({ address: t3, port: s3 } = {}) => {
      if (t3)
        e.localAddress = t3, e.localPort = s3;
      else if (e.debugInfo) {
        const t4 = console["warn"];
        let s4 = "";
        e.debugInfo.initialLaunchType === "remote" ? (e.debugInfo.forceRemote = true, s4 = "\u5F53\u524D\u5BA2\u6237\u7AEF\u548CHBuilderX\u4E0D\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF08\u6216\u5176\u4ED6\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5HBuilderX\uFF09\uFF0CuniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u4E0D\u5BF9\u5F53\u524D\u5BA2\u6237\u7AEF\u751F\u6548\u3002\n- \u5982\u679C\u4E0D\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u76F4\u63A5\u5FFD\u7565\u6B64\u4FE1\u606F\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs") : s4 = "\u65E0\u6CD5\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u5F53\u524D\u5BA2\u6237\u7AEF\u662F\u5426\u4E0E\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs", t4(s4);
      }
    }).then(() => {
      e.isReady = true, e.initUniCloudStatus = "fulfilled";
    }).catch((t3) => {
      console.error(t3), e.initUniCloudStatus = "rejected";
    });
  }
  let _t = new class {
    init(e) {
      let t2 = {};
      const s2 = e.debugFunction !== false && u && h === "app-plus";
      switch (e.provider) {
        case "tencent":
          t2 = Ne.init(Object.assign(e, { useDebugFunction: s2 }));
          break;
        case "aliyun":
          t2 = x.init(Object.assign(e, { useDebugFunction: s2 }));
          break;
        case "private":
          t2 = Ke.init(Object.assign(e, { useDebugFunction: s2 }));
          break;
        default:
          throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      }
      const n2 = l;
      n2 && !n2.code && (t2.debugInfo = n2), yt(t2), t2.reInit = function() {
        yt(this);
      }, Ge(t2), function(e2) {
        const t3 = e2.uploadFile;
        e2.uploadFile = function(e3) {
          return t3.call(this, e3);
        };
      }(t2), ct(t2), function(e2) {
        e2.getCurrentUserInfo = dt, e2.chooseAndUploadFile = ft.initChooseAndUploadFile(e2), Object.assign(e2, { get mixinDatacom() {
          return gt(e2);
        } });
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e2) => {
        if (!t2[e2])
          return;
        const s3 = t2[e2];
        t2[e2] = function() {
          return t2.reInit(), s3.apply(t2, Array.from(arguments));
        }, t2[e2] = T(t2[e2], e2).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    {
      const e = d;
      let t2 = {};
      if (e.length === 1)
        t2 = e[0], _t = _t.init(t2), _t.isDefault = true;
      else {
        const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"];
        let s2;
        s2 = e && e.length > 0 ? "\u5E94\u7528\u6709\u591A\u4E2A\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u901A\u8FC7uniCloud.init\u65B9\u6CD5\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u670D\u52A1\u7A7A\u95F4" : "\u5E94\u7528\u672A\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u5728uniCloud\u76EE\u5F55\u53F3\u952E\u5173\u8054\u670D\u52A1\u7A7A\u95F4", t3.forEach((e2) => {
          _t[e2] = function() {
            return console.error(s2), Promise.reject(new A({ code: "SYS_ERR", message: s2 }));
          };
        });
      }
      Object.assign(_t, { get mixinDatacom() {
        return gt(_t);
      } }), _t.addInterceptor = w, _t.removeInterceptor = k;
    }
  })();
  var wt = _t;
  var dataPicker = {
    props: {
      localdata: {
        type: [Array, Object],
        default() {
          return [];
        }
      },
      spaceInfo: {
        type: Object,
        default() {
          return {};
        }
      },
      collection: {
        type: String,
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: ""
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: false
      },
      getone: {
        type: [Boolean, String],
        default: false
      },
      gettree: {
        type: [Boolean, String],
        default: false
      },
      manual: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Array, String, Number],
        default() {
          return [];
        }
      },
      modelValue: {
        type: [Array, String, Number],
        default() {
          return [];
        }
      },
      preload: {
        type: Boolean,
        default: false
      },
      stepSearh: {
        type: Boolean,
        default: true
      },
      selfField: {
        type: String,
        default: ""
      },
      parentField: {
        type: String,
        default: ""
      },
      multiple: {
        type: Boolean,
        default: false
      },
      map: {
        type: Object,
        default() {
          return {
            text: "text",
            value: "value"
          };
        }
      }
    },
    data() {
      return {
        loading: false,
        errorMessage: "",
        loadMore: {
          contentdown: "",
          contentrefresh: "",
          contentnomore: ""
        },
        dataList: [],
        selected: [],
        selectedIndex: 0,
        page: {
          current: this.pageCurrent,
          size: this.pageSize,
          count: 0
        }
      };
    },
    computed: {
      isLocaldata() {
        return !this.collection.length;
      },
      postField() {
        let fields = [this.field];
        if (this.parentField) {
          fields.push(`${this.parentField} as parent_value`);
        }
        return fields.join(",");
      },
      dataValue() {
        let isModelValue = Array.isArray(this.modelValue) ? this.modelValue.length > 0 : this.modelValue !== null || this.modelValue !== void 0;
        return isModelValue ? this.modelValue : this.value;
      },
      hasValue() {
        if (typeof this.dataValue === "number") {
          return true;
        }
        return this.dataValue != null && this.dataValue.length > 0;
      }
    },
    created() {
      this.$watch(() => {
        var al = [];
        [
          "pageCurrent",
          "pageSize",
          "spaceInfo",
          "value",
          "modelValue",
          "localdata",
          "collection",
          "action",
          "field",
          "orderby",
          "where",
          "getont",
          "getcount",
          "gettree"
        ].forEach((key) => {
          al.push(this[key]);
        });
        return al;
      }, (newValue, oldValue) => {
        for (let i2 = 2; i2 < newValue.length; i2++) {
          if (newValue[i2] != oldValue[i2]) {
            break;
          }
        }
        if (newValue[0] != oldValue[0]) {
          this.page.current = this.pageCurrent;
        }
        this.page.size = this.pageSize;
        this.onPropsChange();
      });
      this._treeData = [];
    },
    methods: {
      onPropsChange() {
        this._treeData = [];
      },
      getCommand(options = {}) {
        let db = wt.database(this.spaceInfo);
        const action = options.action || this.action;
        if (action) {
          db = db.action(action);
        }
        const collection = options.collection || this.collection;
        db = db.collection(collection);
        const where = options.where || this.where;
        if (!(!where || !Object.keys(where).length)) {
          db = db.where(where);
        }
        const field = options.field || this.field;
        if (field) {
          db = db.field(field);
        }
        const orderby = options.orderby || this.orderby;
        if (orderby) {
          db = db.orderBy(orderby);
        }
        const current = options.pageCurrent !== void 0 ? options.pageCurrent : this.page.current;
        const size = options.pageSize !== void 0 ? options.pageSize : this.page.size;
        const getCount = options.getcount !== void 0 ? options.getcount : this.getcount;
        const getTree = options.gettree !== void 0 ? options.gettree : this.gettree;
        const getOptions = {
          getCount,
          getTree
        };
        if (options.getTreePath) {
          getOptions.getTreePath = options.getTreePath;
        }
        db = db.skip(size * (current - 1)).limit(size).get(getOptions);
        return db;
      },
      getNodeData(callback) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.getCommand({
          field: this.postField,
          where: this._pathWhere()
        }).then((res) => {
          this.loading = false;
          this.selected = res.result.data;
          callback && callback();
        }).catch((err) => {
          this.loading = false;
          this.errorMessage = err;
        });
      },
      getTreePath(callback) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.getCommand({
          field: this.postField,
          getTreePath: {
            startWith: `${this.selfField}=='${this.dataValue}'`
          }
        }).then((res) => {
          this.loading = false;
          let treePath = [];
          this._extractTreePath(res.result.data, treePath);
          this.selected = treePath;
          callback && callback();
        }).catch((err) => {
          this.loading = false;
          this.errorMessage = err;
        });
      },
      loadData() {
        if (this.isLocaldata) {
          this._processLocalData();
          return;
        }
        if (this.dataValue != null) {
          this._loadNodeData((data2) => {
            this._treeData = data2;
            this._updateBindData();
            this._updateSelected();
          });
          return;
        }
        if (this.stepSearh) {
          this._loadNodeData((data2) => {
            this._treeData = data2;
            this._updateBindData();
          });
        } else {
          this._loadAllData((data2) => {
            this._treeData = [];
            this._extractTree(data2, this._treeData, null);
            this._updateBindData();
          });
        }
      },
      _loadAllData(callback) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.getCommand({
          field: this.postField,
          gettree: true,
          startwith: `${this.selfField}=='${this.dataValue}'`
        }).then((res) => {
          this.loading = false;
          callback(res.result.data);
          this.onDataChange();
        }).catch((err) => {
          this.loading = false;
          this.errorMessage = err;
        });
      },
      _loadNodeData(callback, pw) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.getCommand({
          field: this.postField,
          where: pw || this._postWhere(),
          pageSize: 500
        }).then((res) => {
          this.loading = false;
          callback(res.result.data);
          this.onDataChange();
        }).catch((err) => {
          this.loading = false;
          this.errorMessage = err;
        });
      },
      _pathWhere() {
        let result = [];
        let where_field = this._getParentNameByField();
        if (where_field) {
          result.push(`${where_field} == '${this.dataValue}'`);
        }
        if (this.where) {
          return `(${this.where}) && (${result.join(" || ")})`;
        }
        return result.join(" || ");
      },
      _postWhere() {
        let result = [];
        let selected = this.selected;
        let parentField = this.parentField;
        if (parentField) {
          result.push(`${parentField} == null || ${parentField} == ""`);
        }
        if (selected.length) {
          for (var i2 = 0; i2 < selected.length - 1; i2++) {
            result.push(`${parentField} == '${selected[i2].value}'`);
          }
        }
        let where = [];
        if (this.where) {
          where.push(`(${this.where})`);
        }
        if (result.length) {
          where.push(`(${result.join(" || ")})`);
        }
        return where.join(" && ");
      },
      _nodeWhere() {
        let result = [];
        let selected = this.selected;
        if (selected.length) {
          result.push(`${this.parentField} == '${selected[selected.length - 1].value}'`);
        }
        if (this.where) {
          return `(${this.where}) && (${result.join(" || ")})`;
        }
        return result.join(" || ");
      },
      _getParentNameByField() {
        const fields = this.field.split(",");
        let where_field = null;
        for (let i2 = 0; i2 < fields.length; i2++) {
          const items = fields[i2].split("as");
          if (items.length < 2) {
            continue;
          }
          if (items[1].trim() === "value") {
            where_field = items[0].trim();
            break;
          }
        }
        return where_field;
      },
      _isTreeView() {
        return this.parentField && this.selfField;
      },
      _updateSelected() {
        var dl = this.dataList;
        var sl = this.selected;
        let textField = this.map.text;
        let valueField = this.map.value;
        for (var i2 = 0; i2 < sl.length; i2++) {
          var value = sl[i2].value;
          var dl2 = dl[i2];
          for (var j2 = 0; j2 < dl2.length; j2++) {
            var item2 = dl2[j2];
            if (item2[valueField] === value) {
              sl[i2].text = item2[textField];
              break;
            }
          }
        }
      },
      _updateBindData(node) {
        const {
          dataList,
          hasNodes
        } = this._filterData(this._treeData, this.selected);
        let isleaf = this._stepSearh === false && !hasNodes;
        if (node) {
          node.isleaf = isleaf;
        }
        this.dataList = dataList;
        this.selectedIndex = dataList.length - 1;
        if (!isleaf && this.selected.length < dataList.length) {
          this.selected.push({
            value: null,
            text: "\u8BF7\u9009\u62E9"
          });
        }
        return {
          isleaf,
          hasNodes
        };
      },
      _filterData(data2, paths) {
        let dataList = [];
        let hasNodes = true;
        dataList.push(data2.filter((item) => {
          return item.parent_value === null || item.parent_value === void 0 || item.parent_value === "";
        }));
        for (let i2 = 0; i2 < paths.length; i2++) {
          var value = paths[i2].value;
          var nodes = data2.filter((item) => {
            return item.parent_value === value;
          });
          if (nodes.length) {
            dataList.push(nodes);
          } else {
            hasNodes = false;
          }
        }
        return {
          dataList,
          hasNodes
        };
      },
      _extractTree(nodes, result, parent_value) {
        let valueField = this.map.value;
        for (let i2 = 0; i2 < nodes.length; i2++) {
          let node = nodes[i2];
          let child = {};
          for (let key in node) {
            if (key !== "children") {
              child[key] = node[key];
            }
          }
          if (parent_value !== null && parent_value !== void 0 && parent_value !== "") {
            child.parent_value = parent_value;
          }
          result.push(child);
          let children = node.children;
          if (children) {
            this._extractTree(children, result, node[valueField]);
          }
        }
      },
      _extractTreePath(nodes, result) {
        for (let i2 = 0; i2 < nodes.length; i2++) {
          let node = nodes[i2];
          let child = {};
          for (let key in node) {
            if (key !== "children") {
              child[key] = node[key];
            }
          }
          result.push(child);
          let children = node.children;
          if (children) {
            this._extractTreePath(children, result);
          }
        }
      },
      _findNodePath(key, nodes, path = []) {
        let textField = this.map.text;
        let valueField = this.map.value;
        for (let i2 = 0; i2 < nodes.length; i2++) {
          let node = nodes[i2];
          let children = node.children;
          let text = node[textField];
          let value = node[valueField];
          path.push({
            value,
            text
          });
          if (value === key) {
            return path;
          }
          if (children) {
            const p2 = this._findNodePath(key, children, path);
            if (p2.length) {
              return p2;
            }
          }
          path.pop();
        }
        return [];
      },
      _processLocalData() {
        this._treeData = [];
        this._extractTree(this.localdata, this._treeData);
        var inputValue = this.dataValue;
        if (inputValue === void 0) {
          return;
        }
        if (Array.isArray(inputValue)) {
          inputValue = inputValue[inputValue.length - 1];
          if (typeof inputValue === "object" && inputValue[this.map.value]) {
            inputValue = inputValue[this.map.value];
          }
        }
        this.selected = this._findNodePath(inputValue, this.localdata);
      }
    }
  };
  const _sfc_main$c = {
    name: "UniDataPickerView",
    emits: ["nodeclick", "change", "datachange", "update:modelValue"],
    mixins: [dataPicker],
    props: {
      managedMode: {
        type: Boolean,
        default: false
      },
      ellipsis: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {};
    },
    created() {
      if (this.managedMode) {
        return;
      }
      this.$nextTick(() => {
        this.load();
      });
    },
    methods: {
      onPropsChange() {
        this._treeData = [];
        this.selectedIndex = 0;
        this.load();
      },
      load() {
        if (this.isLocaldata) {
          this.loadData();
        } else if (this.dataValue.length) {
          this.getTreePath((res) => {
            this.loadData();
          });
        }
      },
      handleSelect(index) {
        this.selectedIndex = index;
      },
      handleNodeClick(item, i2, j2) {
        if (item.disable) {
          return;
        }
        const node = this.dataList[i2][j2];
        const text = node[this.map.text];
        const value = node[this.map.value];
        if (i2 < this.selected.length - 1) {
          this.selected.splice(i2, this.selected.length - i2);
          this.selected.push({
            text,
            value
          });
        } else if (i2 === this.selected.length - 1) {
          this.selected.splice(i2, 1, {
            text,
            value
          });
        }
        if (node.isleaf) {
          this.onSelectedChange(node, node.isleaf);
          return;
        }
        const {
          isleaf,
          hasNodes
        } = this._updateBindData();
        if (!this._isTreeView() && !hasNodes) {
          this.onSelectedChange(node, true);
          return;
        }
        if (this.isLocaldata && (!hasNodes || isleaf)) {
          this.onSelectedChange(node, true);
          return;
        }
        if (!isleaf && !hasNodes) {
          this._loadNodeData((data2) => {
            if (!data2.length) {
              node.isleaf = true;
            } else {
              this._treeData.push(...data2);
              this._updateBindData(node);
            }
            this.onSelectedChange(node, node.isleaf);
          }, this._nodeWhere());
          return;
        }
        this.onSelectedChange(node, false);
      },
      updateData(data2) {
        this._treeData = data2.treeData;
        this.selected = data2.selected;
        if (!this._treeData.length) {
          this.loadData();
        } else {
          this._updateBindData();
        }
      },
      onDataChange() {
        this.$emit("datachange");
      },
      onSelectedChange(node, isleaf) {
        if (isleaf) {
          this._dispatchEvent();
        }
        if (node) {
          this.$emit("nodeclick", node);
        }
      },
      _dispatchEvent() {
        this.$emit("change", this.selected.slice(0));
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-data-pickerview" }, [
      vue.createElementVNode("scroll-view", {
        class: "selected-area",
        "scroll-x": "true",
        "scroll-y": "false",
        "show-scrollbar": false
      }, [
        vue.createElementVNode("view", { class: "selected-list" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.selected, (item, index) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              item.text ? (vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass(["selected-item", { "selected-item-active": index == _ctx.selectedIndex, "selected-item-text-overflow": $props.ellipsis }]),
                key: index,
                onClick: ($event) => $options.handleSelect(index)
              }, [
                vue.createElementVNode("text", { class: "" }, vue.toDisplayString(item.text), 1)
              ], 10, ["onClick"])) : vue.createCommentVNode("v-if", true)
            ], 64);
          }), 256))
        ])
      ]),
      vue.createElementVNode("view", { class: "tab-c" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.dataList, (child, i2) => {
          return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
            i2 == _ctx.selectedIndex ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
              class: "list",
              key: i2,
              "scroll-y": true
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(child, (item, j2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["item", { "is-disabled": !!item.disable }]),
                  key: j2,
                  onClick: ($event) => $options.handleNodeClick(item, i2, j2)
                }, [
                  vue.createElementVNode("text", { class: "item-text item-text-overflow" }, vue.toDisplayString(item[_ctx.map.text]), 1),
                  _ctx.selected.length > i2 && item[_ctx.map.value] == _ctx.selected[i2].value ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "check"
                  })) : vue.createCommentVNode("v-if", true)
                ], 10, ["onClick"]);
              }), 128))
            ])) : vue.createCommentVNode("v-if", true)
          ], 64);
        }), 256)),
        _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "loading-cover"
        }, [
          vue.createVNode(_component_uni_load_more, {
            class: "load-more",
            contentText: _ctx.loadMore,
            status: "loading"
          }, null, 8, ["contentText"])
        ])) : vue.createCommentVNode("v-if", true),
        _ctx.errorMessage ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "error-message"
        }, [
          vue.createElementVNode("text", { class: "error-text" }, vue.toDisplayString(_ctx.errorMessage), 1)
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  var DataPickerView = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$5], ["__scopeId", "data-v-ac1803ac"]]);
  const _sfc_main$b = {
    name: "UniDataPicker",
    emits: ["popupopened", "popupclosed", "nodeclick", "input", "change", "update:modelValue"],
    mixins: [dataPicker],
    components: {
      DataPickerView
    },
    props: {
      options: {
        type: [Object, Array],
        default() {
          return {};
        }
      },
      popupTitle: {
        type: String,
        default: "\u8BF7\u9009\u62E9"
      },
      placeholder: {
        type: String,
        default: "\u8BF7\u9009\u62E9"
      },
      heightMobile: {
        type: String,
        default: ""
      },
      readonly: {
        type: Boolean,
        default: false
      },
      clearIcon: {
        type: Boolean,
        default: true
      },
      border: {
        type: Boolean,
        default: true
      },
      split: {
        type: String,
        default: "/"
      },
      ellipsis: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        isOpened: false,
        inputSelected: []
      };
    },
    created() {
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.formItem) {
        if (this.formItem.name) {
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
      this.$nextTick(() => {
        this.load();
      });
    },
    methods: {
      clear() {
        this.inputSelected.splice(0);
        this._dispatchEvent([]);
      },
      onPropsChange() {
        this._treeData = [];
        this.selectedIndex = 0;
        this.load();
      },
      load() {
        if (this.readonly) {
          this._processReadonly(this.localdata, this.dataValue);
          return;
        }
        if (this.isLocaldata) {
          this.loadData();
          this.inputSelected = this.selected.slice(0);
        } else if (!this.parentField && !this.selfField && this.hasValue) {
          this.getNodeData(() => {
            this.inputSelected = this.selected.slice(0);
          });
        } else if (this.hasValue) {
          this.getTreePath(() => {
            this.inputSelected = this.selected.slice(0);
          });
        }
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      show() {
        this.isOpened = true;
        this.$nextTick(() => {
          this.$refs.pickerView.updateData({
            treeData: this._treeData,
            selected: this.selected,
            selectedIndex: this.selectedIndex
          });
        });
        this.$emit("popupopened");
      },
      hide() {
        this.isOpened = false;
        this.$emit("popupclosed");
      },
      handleInput() {
        if (this.readonly) {
          return;
        }
        this.show();
      },
      handleClose(e) {
        this.hide();
      },
      onnodeclick(e) {
        this.$emit("nodeclick", e);
      },
      ondatachange(e) {
        this._treeData = this.$refs.pickerView._treeData;
      },
      onchange(e) {
        this.hide();
        this.inputSelected = e;
        this._dispatchEvent(e);
      },
      _processReadonly(dataList, value) {
        var isTree = dataList.findIndex((item2) => {
          return item2.children;
        });
        if (isTree > -1) {
          let inputValue;
          if (Array.isArray(value)) {
            inputValue = value[value.length - 1];
            if (typeof inputValue === "object" && inputValue.value) {
              inputValue = inputValue.value;
            }
          } else {
            inputValue = value;
          }
          this.inputSelected = this._findNodePath(inputValue, this.localdata);
          return;
        }
        if (!this.hasValue) {
          this.inputSelected = [];
          return;
        }
        let result = [];
        for (let i2 = 0; i2 < value.length; i2++) {
          var val = value[i2];
          var item = dataList.find((v2) => {
            return v2.value == val;
          });
          if (item) {
            result.push(item);
          }
        }
        if (result.length) {
          this.inputSelected = result;
        }
      },
      _filterForArray(data2, valueArray) {
        var result = [];
        for (let i2 = 0; i2 < valueArray.length; i2++) {
          var value = valueArray[i2];
          var found = data2.find((item) => {
            return item.value == value;
          });
          if (found) {
            result.push(found);
          }
        }
        return result;
      },
      _dispatchEvent(selected) {
        let item = {};
        if (selected.length) {
          var value = new Array(selected.length);
          for (var i2 = 0; i2 < selected.length; i2++) {
            value[i2] = selected[i2].value;
          }
          item = selected[selected.length - 1];
        } else {
          item.value = "";
        }
        if (this.formItem) {
          this.formItem.setValue(item.value);
        }
        this.$emit("input", item.value);
        this.$emit("update:modelValue", item.value);
        this.$emit("change", {
          detail: {
            value: selected
          }
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_0$2);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
    const _component_data_picker_view = vue.resolveComponent("data-picker-view");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-data-tree" }, [
      vue.createElementVNode("view", {
        class: "uni-data-tree-input",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.handleInput && $options.handleInput(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {
          options: $props.options,
          data: $data.inputSelected,
          error: _ctx.errorMessage
        }, () => [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["input-value", { "input-value-border": $props.border }])
          }, [
            _ctx.errorMessage ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "selected-area error-text"
            }, vue.toDisplayString(_ctx.errorMessage), 1)) : _ctx.loading && !$data.isOpened ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "selected-area"
            }, [
              vue.createVNode(_component_uni_load_more, {
                class: "load-more",
                contentText: _ctx.loadMore,
                status: "loading"
              }, null, 8, ["contentText"])
            ])) : $data.inputSelected.length ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
              key: 2,
              class: "selected-area",
              "scroll-x": "true"
            }, [
              vue.createElementVNode("view", { class: "selected-list" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.inputSelected, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "selected-item",
                    key: index
                  }, [
                    vue.createElementVNode("text", null, vue.toDisplayString(item.text), 1),
                    index < $data.inputSelected.length - 1 ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "input-split-line"
                    }, vue.toDisplayString($props.split), 1)) : vue.createCommentVNode("v-if", true)
                  ]);
                }), 128))
              ])
            ])) : (vue.openBlock(), vue.createElementBlock("text", {
              key: 3,
              class: "selected-area placeholder"
            }, vue.toDisplayString($props.placeholder), 1)),
            vue.withDirectives(vue.createElementVNode("view", {
              class: "icon-clear",
              onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "clear",
                color: "#e1e1e1",
                size: "14"
              })
            ], 512), [
              [vue.vShow, $props.clearIcon && !$props.readonly && $data.inputSelected.length]
            ]),
            (!$props.clearIcon || !$data.inputSelected.length) && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 4,
              class: "arrow-area"
            }, [
              vue.createElementVNode("view", { class: "input-arrow" })
            ])) : vue.createCommentVNode("v-if", true)
          ], 2)
        ], true)
      ]),
      $data.isOpened ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-data-tree-cover",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.handleClose && $options.handleClose(...args))
      })) : vue.createCommentVNode("v-if", true),
      $data.isOpened ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-data-tree-dialog"
      }, [
        vue.createElementVNode("view", { class: "uni-popper__arrow" }),
        vue.createElementVNode("view", { class: "dialog-caption" }, [
          vue.createElementVNode("view", { class: "title-area" }, [
            vue.createElementVNode("text", { class: "dialog-title" }, vue.toDisplayString($props.popupTitle), 1)
          ]),
          vue.createElementVNode("view", {
            class: "dialog-close",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.handleClose && $options.handleClose(...args))
          }, [
            vue.createElementVNode("view", {
              class: "dialog-close-plus",
              "data-id": "close"
            }),
            vue.createElementVNode("view", {
              class: "dialog-close-plus dialog-close-rotate",
              "data-id": "close"
            })
          ])
        ]),
        vue.createVNode(_component_data_picker_view, {
          class: "picker-view",
          ref: "pickerView",
          modelValue: _ctx.dataValue,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.dataValue = $event),
          localdata: _ctx.localdata,
          preload: _ctx.preload,
          collection: _ctx.collection,
          field: _ctx.field,
          orderby: _ctx.orderby,
          where: _ctx.where,
          "step-searh": _ctx.stepSearh,
          "self-field": _ctx.selfField,
          "parent-field": _ctx.parentField,
          "managed-mode": true,
          map: _ctx.map,
          ellipsis: $props.ellipsis,
          onChange: $options.onchange,
          onDatachange: $options.ondatachange,
          onNodeclick: $options.onnodeclick
        }, null, 8, ["modelValue", "localdata", "preload", "collection", "field", "orderby", "where", "step-searh", "self-field", "parent-field", "map", "ellipsis", "onChange", "onDatachange", "onNodeclick"])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$4], ["__scopeId", "data-v-3ed22fe0"]]);
  let base = "http://192.168.2.107:5557/api/";
  const baseUrl = base;
  function upImg(tempFiles, successCallback, errorCallback) {
    uni.showLoading({
      title: "\u56FE\u7247\u4E0A\u4F20\u4E2D"
    });
    uni.uploadFile({
      url: baseUrl + "upload/image",
      filePath: tempFiles.path,
      fileType: tempFiles.extname,
      name: "picsssssssssssssssssssssss",
      formData: {
        "filename": "picsssssssssssssssssssssss"
      },
      header: {
        "Authori-zation": "Bearer " + uni.getStorageSync("token")
      },
      success: function(res) {
        uni.hideLoading();
        if (res.statusCode === 403) {
          uni.showToast({
            title: res.data
          });
        } else {
          let data2 = res.data ? JSON.parse(res.data) : {};
          if (data2.status === 200) {
            successCallback && successCallback(data2);
          } else {
            errorCallback && errorCallback(data2);
            uni.showToast({
              title: data2.msg
            });
          }
        }
      },
      fail: function(res) {
        uni.hideLoading();
        uni.showToast({
          title: "\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"
        });
      }
    });
  }
  function uploadImageOne(opt, successCallback, errorCallback) {
    let that = uni;
    if (typeof opt === "string") {
      let url = opt;
      opt = {};
      opt.url = url;
    }
    let count = opt.count || 1, sizeType = opt.sizeType || ["compressed"], sourceType = opt.sourceType || ["album", "camera"];
    opt.is_load || true;
    let uploadUrl = opt.url || "", inputName = opt.name || "pics", fileType = opt.fileType || "image";
    uni.chooseImage({
      count,
      sizeType,
      sourceType,
      crop: {
        quality: 100,
        width: 44,
        height: 44
      },
      success: function(res) {
        uni.showLoading({
          title: "\u56FE\u7247\u4E0A\u4F20\u4E2D"
        });
        uni.uploadFile({
          url: baseUrl + uploadUrl,
          filePath: res.tempFilePaths[0],
          fileType,
          name: inputName,
          formData: {
            "filename": inputName
          },
          header: {
            "Authori-zation": "Bearer " + uni.getStorageSync("token")
          },
          success: function(res2) {
            uni.hideLoading();
            if (res2.statusCode === 403) {
              that.showToast({
                title: res2.data
              });
            } else {
              let data2 = res2.data ? JSON.parse(res2.data) : {};
              if (data2.status === 200) {
                successCallback && successCallback(data2);
              } else {
                errorCallback && errorCallback(data2);
                that.showToast({
                  title: data2.msg
                });
              }
            }
          },
          fail: function(res2) {
            uni.hideLoading();
            that.showToast({
              title: "\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"
            });
          }
        });
      }
    });
  }
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
    props: {
      title: {
        type: String
      }
    },
    setup(__props) {
      const props = __props;
      let items = vue.ref([
        {
          text: "\u6C5F\u897F\u7701",
          value: "1-0",
          children: [
            {
              text: "\u8D63\u5DDE\u5E02",
              value: "1-1",
              children: [
                {
                  text: "\u7AE0\u8D21\u533A",
                  value: "1-1-1"
                }
              ]
            },
            {
              text: "\u5357\u660C\u5E02",
              value: "1-2"
            }
          ]
        },
        {
          text: "\u5317\u4EAC\u5E02",
          value: "2-0",
          children: [
            {
              text: "\u4E1C\u57CE\u533A",
              value: "2-1"
            },
            {
              text: "\u897F\u57CE\u533A",
              value: "2-2"
            },
            {
              text: "\u5D07\u6587\u533A",
              value: "2-3"
            }
          ]
        },
        {
          text: "\u5929\u6D25\u5E02",
          value: "3-0"
        }
      ]);
      const popup = vue.ref(null);
      const UpLoadAvatar = () => {
        popup.value.open();
      };
      const CloseAvatar = () => {
        popup.value.close();
      };
      let index = vue.ref(0);
      let sex = vue.ref(["\u8BF7\u9009\u62E9\u6027\u522B", "\u7537", "\u5973", "\u5B32"]);
      const bindPickerChange = (e) => {
        formatAppLog("log", "at pages/user/UserInfo/index.vue:152", e);
        index.value = e.detail.value;
      };
      uni.setNavigationBarTitle({
        title: props.title
      });
      const access = () => {
        formatAppLog("log", "at pages/user/UserInfo/index.vue:166", 111);
      };
      const changeAvatar = async (type) => {
        formatAppLog("log", "at pages/user/UserInfo/index.vue:170", type);
        await uploadImageOne({
          url: "upload/image",
          sourceType: [type]
        }, (res) => {
          formatAppLog("log", "at pages/user/UserInfo/index.vue:175", res);
          if (res.status !== 200)
            return uni.showToast({
              title: data.msg,
              icon: "none"
            });
          userEdit({
            avatar: res.data.url,
            nickname: userInfo.value.nickname
          }).then(async (data2) => {
            formatAppLog("log", "at pages/user/UserInfo/index.vue:184", data2);
            if (data2.status !== 200)
              return uni.showToast({
                title: data2.msg,
                icon: "none"
              });
            CloseAvatar();
            await upDataUser("userInfo");
          });
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_data_picker = resolveEasycom(vue.resolveDynamicComponent("uni-data-picker"), __easycom_0$1);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createVNode(vue.unref(StatusBar)),
          vue.createVNode(vue.unref(BackNav), {
            title: props.title,
            onAccess: access,
            userinfo: true
          }, null, 8, ["title"]),
          vue.createElementVNode("view", { class: "avatar flex-r" }, [
            vue.createElementVNode("view", { class: "left_text" }, "\u5934\u50CF"),
            vue.createElementVNode("view", {
              class: "right_avatar",
              onClick: UpLoadAvatar
            }, [
              vue.createElementVNode("img", {
                src: "",
                alt: ""
              })
            ])
          ]),
          vue.createCommentVNode(" \u624B\u673A\u53F7 "),
          vue.createElementVNode("view", { class: "phone flex-r" }, [
            vue.createElementVNode("view", { class: "left_text" }, "\u624B\u673A\u53F7"),
            vue.createElementVNode("view", { class: "right_phone" }, vue.toDisplayString(13207080905))
          ]),
          vue.createCommentVNode(" \u59D3\u540D "),
          vue.createElementVNode("view", { class: "phone flex-r" }, [
            vue.createElementVNode("view", { class: "left_text" }, "\u59D3\u540D"),
            vue.createElementVNode("view", { class: "right_phone" }, vue.toDisplayString("\u5341\u53F7"))
          ]),
          vue.createCommentVNode(" \u6027\u522B "),
          vue.createElementVNode("view", { class: "phone flex-r" }, [
            vue.createElementVNode("view", { class: "left_text" }, "\u6027\u522B"),
            vue.createElementVNode("view", { class: "right_phone" }, [
              vue.createElementVNode("view", { class: "uni-list-cell-db" }, [
                vue.createElementVNode("picker", {
                  onChange: bindPickerChange,
                  value: vue.unref(index),
                  range: vue.unref(sex)
                }, [
                  vue.createElementVNode("view", {
                    class: "uni-input",
                    style: vue.normalizeStyle({ color: vue.unref(index) == 0 ? "#bfbfbf" : "#2e2e2e" })
                  }, vue.toDisplayString(vue.unref(sex)[vue.unref(index)]), 5)
                ], 40, ["value", "range"])
              ]),
              vue.unref(index) === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "right_icon"
              }, [
                vue.createElementVNode("img", {
                  src: "/static/icon/right_x.png",
                  alt: ""
                })
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          vue.createCommentVNode(" \u90AE\u7BB1 "),
          vue.createElementVNode("view", { class: "phone flex-r" }, [
            vue.createElementVNode("view", { class: "left_text" }, "\u90AE\u7BB1"),
            vue.createElementVNode("navigator", {
              class: "right_phone",
              url: "./Email"
            }, [
              vue.unref(email) ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, vue.toDisplayString(vue.unref(email)), 1)) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, "\u8BF7\u5148\u7ED1\u5B9A\u90AE\u7BB1")),
              vue.unref(email) === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "right_icon"
              }, [
                vue.createElementVNode("img", {
                  src: "/static/icon/right_x.png",
                  alt: ""
                })
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          vue.createElementVNode("view", { class: "phone flex-r" }, [
            vue.createElementVNode("view", { class: "left_text" }, "\u7ECF\u8425\u57CE\u5E02"),
            vue.createCommentVNode('      <uni-data-picker placeholder="\u8BF7\u9009\u62E9\u5730\u5740" popup-title="\u8BF7\u9009\u62E9\u57CE\u5E02" collection="opendb-city-china" field="code as value, name as text" orderby="value asc" :step-searh="true" self-field="code" parent-field="parent_code"'),
            vue.createCommentVNode('                       @change="onchange" @nodeclick="onnodeclick"></uni-data-picker>'),
            vue.createVNode(_component_uni_data_picker, {
              localdata: vue.unref(items),
              "popup-title": "\u8BF7\u9009\u62E9\u6240\u5728\u7684\u5730\u533A"
            }, null, 8, ["localdata"])
          ]),
          vue.createElementVNode("view"),
          vue.createVNode(_component_uni_popup, {
            ref_key: "popup",
            ref: popup,
            type: "bottom"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "flex-col section" }, [
                vue.createCommentVNode("        &lt;!&ndash; #ifndef H5 &ndash;&gt;"),
                vue.createCommentVNode(`        <text class="text" @click="changeAvatar('camera')">\u62CD\u6444</text>`),
                vue.createCommentVNode('        <view class="divider"> </view>'),
                vue.createCommentVNode("        &lt;!&ndash; #endif &ndash;&gt;"),
                vue.createElementVNode("text", {
                  class: "text",
                  onClick: _cache[0] || (_cache[0] = ($event) => changeAvatar("album"))
                }, "\u4ECE\u76F8\u518C\u9009\u62E9"),
                vue.createElementVNode("view", {
                  class: "flex-col items-center button",
                  onClick: CloseAvatar
                }, [
                  vue.createElementVNode("text", null, "\u53D6\u6D88")
                ])
              ])
            ]),
            _: 1
          }, 512)
        ]);
      };
    }
  });
  var PagesUserUserInfoIndex = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-7febc257"]]);
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      vue.watch(() => email.value.length, (newVal, oldVal) => {
        if (newVal >= 17) {
          preserve();
        }
        if (newVal > 19) {
          uni.showToast({
            title: "\u8F93\u5165\u6709\u8BEF",
            icon: "error"
          });
        }
      }, {
        immediate: true,
        deep: true
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "input flex-r" }, [
          vue.withDirectives(vue.createElementVNode("input", {
            style: { "width": "100%" },
            type: "text",
            max: "18",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(email) ? email.value = $event : null),
            placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1"
          }, null, 512), [
            [vue.vModelText, vue.unref(email)]
          ])
        ]);
      };
    }
  });
  var PagesUserUserInfoEmail = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-b43adffe"]]);
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    props: {
      title: {
        type: String
      }
    },
    setup(__props) {
      const props = __props;
      vue.ref([
        {
          text: "\u6C5F\u897F\u7701",
          value: "1-0",
          children: [
            {
              text: "\u8D63\u5DDE\u5E02",
              value: "1-1",
              children: [{
                text: "\u7AE0\u8D21\u533A",
                value: "1-1-1"
              }]
            },
            {
              text: "\u5357\u660C\u5E02",
              value: "1-2"
            }
          ]
        },
        {
          text: "\u5317\u4EAC\u5E02",
          value: "2-0",
          children: [
            {
              text: "\u4E1C\u57CE\u533A",
              value: "2-1"
            },
            {
              text: "\u897F\u57CE\u533A",
              value: "2-2"
            },
            {
              text: "\u5D07\u6587\u533A",
              value: "2-3"
            }
          ]
        },
        {
          text: "\u5929\u6D25\u5E02",
          value: "3-0"
        }
      ]);
      let index = vue.ref(0);
      vue.ref(["\u8BF7\u9009\u62E9\u6027\u522B", "\u7537", "\u5973", "\u755C\u751F"]);
      uni.setNavigationBarTitle({
        title: props.title
      });
      const access = () => {
        formatAppLog("log", "at pages/user/SetUp/index.vue:193", 111);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createVNode(vue.unref(StatusBar)),
          vue.createVNode(vue.unref(BackNav), {
            title: props.title,
            onAccess: access,
            userinfo: true
          }, null, 8, ["title"]),
          vue.createElementVNode("navigator", {
            class: "right_phone",
            url: "./Email"
          }, [
            vue.createElementVNode("view", { class: "avatar flex-r" }, [
              vue.createElementVNode("view", { class: "left_text" }, "\u4FEE\u6539\u8D26\u53F7\u5BC6\u7801"),
              vue.createElementVNode("view", { class: "right_icon" }, [
                vue.createElementVNode("img", {
                  src: "/static/icon/right_x.png",
                  alt: ""
                })
              ])
            ])
          ]),
          vue.createElementVNode("navigator", {
            class: "right_phone",
            url: "./Email"
          }, [
            vue.createElementVNode("view", { class: "phone flex-r" }, [
              vue.createElementVNode("view", { class: "left_text" }, "\u4FEE\u6539\u624B\u673A\u53F7"),
              vue.createElementVNode("view", { class: "right_phone" }, [
                vue.createElementVNode("text", null, "132****2905"),
                vue.createElementVNode("view", { class: "right_icon" }, [
                  vue.createElementVNode("img", {
                    src: "/static/icon/right_x.png",
                    alt: ""
                  })
                ])
              ])
            ])
          ]),
          vue.createElementVNode("navigator", {
            class: "right_phone",
            url: "./Email"
          }, [
            vue.createCommentVNode(" \u6027\u522B "),
            vue.createElementVNode("view", { class: "phone flex-r" }, [
              vue.createElementVNode("view", { class: "left_text" }, "\u6D88\u606F\u63A8\u9001\u8BBE\u7F6E"),
              vue.createElementVNode("view", { class: "right_phone" }, [
                vue.createElementVNode("text", null, "\u53BB\u5F00\u542F"),
                vue.unref(index) === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "right_icon"
                }, [
                  vue.createElementVNode("img", {
                    src: "/static/icon/right_x.png",
                    alt: ""
                  })
                ])) : vue.createCommentVNode("v-if", true)
              ])
            ])
          ]),
          vue.createElementVNode("navigator", {
            class: "right_phone",
            url: "./Email"
          }, [
            vue.createElementVNode("view", { class: "avatar flex-r" }, [
              vue.createElementVNode("view", { class: "left_text" }, "\u8D26\u6237\u6CE8\u9500"),
              vue.createElementVNode("view", { class: "right_icon" }, [
                vue.createElementVNode("img", {
                  src: "/static/icon/right_x.png",
                  alt: ""
                })
              ])
            ])
          ]),
          vue.createCommentVNode("  \u8BBE\u7F6E   "),
          vue.createCommentVNode("  \u6E05\u9664\u7F13\u5B58   "),
          vue.createElementVNode("view", { class: "setup" }, [
            vue.createElementVNode("navigator", {
              class: "right_phone",
              url: "./Email"
            }, [
              vue.createElementVNode("view", { class: "avatar flex-r" }, [
                vue.createElementVNode("view", { class: "left_text" }, "\u6E05\u9664\u7F13\u5B58"),
                vue.createElementVNode("view", null, " 78.62M ")
              ])
            ]),
            vue.createCommentVNode("  \u7248\u672C\u63A7\u5236   "),
            vue.createElementVNode("navigator", {
              class: "right_phone",
              url: "./Email"
            }, [
              vue.createElementVNode("view", { class: "phone flex-r" }, [
                vue.createElementVNode("view", { class: "left_text" }, "\u5F53\u524D\u7248\u672C"),
                vue.createElementVNode("view", { class: "right_phone" }, [
                  vue.createElementVNode("text", null, "V8.2.1"),
                  vue.createElementVNode("view", { class: "right_icon" }, [
                    vue.createElementVNode("img", {
                      src: "/static/icon/right_x.png",
                      alt: ""
                    })
                  ])
                ])
              ])
            ]),
            vue.createCommentVNode("  \u68C0\u6D4B\u66F4\u65B0   "),
            vue.createElementVNode("navigator", {
              class: "right_phone",
              url: "./Email"
            }, [
              vue.createElementVNode("view", { class: "phone flex-r" }, [
                vue.createElementVNode("view", { class: "left_text" }, "\u68C0\u6D4B\u66F4\u65B0"),
                vue.createElementVNode("view", { class: "right_phone" }, [
                  vue.unref(index) === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "right_icon"
                  }, [
                    vue.createElementVNode("img", {
                      src: "/static/icon/right_x.png",
                      alt: ""
                    })
                  ])) : vue.createCommentVNode("v-if", true)
                ])
              ])
            ]),
            vue.createCommentVNode("  \u5173\u4E8E\u6211\u4EEC   "),
            vue.createElementVNode("navigator", {
              class: "right_phone",
              url: "./Email"
            }, [
              vue.createElementVNode("view", { class: "avatar flex-r" }, [
                vue.createElementVNode("view", { class: "left_text" }, "\u5173\u4E8E\u6211\u4EEC"),
                vue.createElementVNode("view", { class: "right_icon" }, [
                  vue.createElementVNode("img", {
                    src: "/static/icon/right_x.png",
                    alt: ""
                  })
                ])
              ])
            ]),
            vue.createCommentVNode("  \u5E2E\u52A9   "),
            vue.createElementVNode("navigator", {
              class: "right_phone",
              url: "./Email"
            }, [
              vue.createElementVNode("view", { class: "avatar flex-r" }, [
                vue.createElementVNode("view", { class: "left_text" }, "\u5E2E\u52A9"),
                vue.createElementVNode("view", { class: "right_icon" }, [
                  vue.createElementVNode("img", {
                    src: "/static/icon/right_x.png",
                    alt: ""
                  })
                ])
              ])
            ]),
            vue.createElementVNode("button", { class: "LogOut" }, "\u9000\u51FA\u5F53\u524D\u8D26\u53F7")
          ])
        ]);
      };
    }
  });
  var PagesUserSetUpIndex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-0eb1f0f5"]]);
  const ERR_MSG_OK = "chooseAndUploadFile:ok";
  const ERR_MSG_FAIL = "chooseAndUploadFile:fail";
  function chooseImage(opts) {
    const {
      count,
      sizeType = ["original", "compressed"],
      sourceType = ["album", "camera"],
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseImage({
        count,
        sizeType,
        sourceType,
        extension,
        success(res) {
          resolve(normalizeChooseAndUploadFileRes(res, "image"));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseImage:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseVideo(opts) {
    const {
      camera,
      compressed,
      maxDuration,
      sourceType = ["album", "camera"],
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseVideo({
        camera,
        compressed,
        maxDuration,
        sourceType,
        extension,
        success(res) {
          const {
            tempFilePath,
            duration,
            size,
            height,
            width
          } = res;
          resolve(normalizeChooseAndUploadFileRes({
            errMsg: "chooseVideo:ok",
            tempFilePaths: [tempFilePath],
            tempFiles: [
              {
                name: res.tempFile && res.tempFile.name || "",
                path: tempFilePath,
                size,
                type: res.tempFile && res.tempFile.type || "",
                width,
                height,
                duration,
                fileType: "video",
                cloudPath: ""
              }
            ]
          }, "video"));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseVideo:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseAll(opts) {
    const {
      count,
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      let chooseFile = uni.chooseFile;
      if (typeof wx !== "undefined" && typeof wx.chooseMessageFile === "function") {
        chooseFile = wx.chooseMessageFile;
      }
      if (typeof chooseFile !== "function") {
        return reject({
          errMsg: ERR_MSG_FAIL + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002"
        });
      }
      chooseFile({
        type: "all",
        count,
        extension,
        success(res) {
          resolve(normalizeChooseAndUploadFileRes(res));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseFile:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function normalizeChooseAndUploadFileRes(res, fileType) {
    res.tempFiles.forEach((item, index) => {
      if (!item.name) {
        item.name = item.path.substring(item.path.lastIndexOf("/") + 1);
      }
      if (fileType) {
        item.fileType = fileType;
      }
      item.cloudPath = Date.now() + "_" + index + item.name.substring(item.name.lastIndexOf("."));
    });
    if (!res.tempFilePaths) {
      res.tempFilePaths = res.tempFiles.map((file) => file.path);
    }
    return res;
  }
  function uploadCloudFiles(files, max = 5, onUploadProgress) {
    files = JSON.parse(JSON.stringify(files));
    const len = files.length;
    let count = 0;
    let self = this;
    return new Promise((resolve) => {
      while (count < max) {
        next();
      }
      function next() {
        let cur = count++;
        if (cur >= len) {
          !files.find((item) => !item.url && !item.errMsg) && resolve(files);
          return;
        }
        const fileItem = files[cur];
        const index = self.files.findIndex((v2) => v2.uuid === fileItem.uuid);
        fileItem.url = "";
        delete fileItem.errMsg;
        wt.uploadFile({
          filePath: fileItem.path,
          cloudPath: fileItem.cloudPath,
          fileType: fileItem.fileType,
          onUploadProgress: (res) => {
            res.index = index;
            onUploadProgress && onUploadProgress(res);
          }
        }).then((res) => {
          fileItem.url = res.fileID;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        }).catch((res) => {
          fileItem.errMsg = res.errMsg || res.message;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        });
      }
    });
  }
  function uploadFiles(choosePromise, {
    onChooseFile,
    onUploadProgress
  }) {
    return choosePromise.then((res) => {
      if (onChooseFile) {
        const customChooseRes = onChooseFile(res);
        if (typeof customChooseRes !== "undefined") {
          return Promise.resolve(customChooseRes).then((chooseRes) => typeof chooseRes === "undefined" ? res : chooseRes);
        }
      }
      return res;
    }).then((res) => {
      if (res === false) {
        return {
          errMsg: ERR_MSG_OK,
          tempFilePaths: [],
          tempFiles: []
        };
      }
      return res;
    });
  }
  function chooseAndUploadFile(opts = {
    type: "all"
  }) {
    if (opts.type === "image") {
      return uploadFiles(chooseImage(opts), opts);
    } else if (opts.type === "video") {
      return uploadFiles(chooseVideo(opts), opts);
    }
    return uploadFiles(chooseAll(opts), opts);
  }
  const get_file_ext = (name) => {
    const last_len = name.lastIndexOf(".");
    const len = name.length;
    return {
      name: name.substring(0, last_len),
      ext: name.substring(last_len + 1, len)
    };
  };
  const get_extname = (fileExtname) => {
    if (!Array.isArray(fileExtname)) {
      let extname = fileExtname.replace(/(\[|\])/g, "");
      return extname.split(",");
    } else {
      return fileExtname;
    }
  };
  const get_files_and_is_max = (res, _extname) => {
    let filePaths = [];
    let files = [];
    if (!_extname || _extname.length === 0) {
      return {
        filePaths,
        files
      };
    }
    res.tempFiles.forEach((v2) => {
      let fileFullName = get_file_ext(v2.name);
      const extname = fileFullName.ext.toLowerCase();
      if (_extname.indexOf(extname) !== -1) {
        files.push(v2);
        filePaths.push(v2.path);
      }
    });
    if (files.length !== res.tempFiles.length) {
      uni.showToast({
        title: `\u5F53\u524D\u9009\u62E9\u4E86${res.tempFiles.length}\u4E2A\u6587\u4EF6 \uFF0C${res.tempFiles.length - files.length} \u4E2A\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E`,
        icon: "none",
        duration: 5e3
      });
    }
    return {
      filePaths,
      files
    };
  };
  const get_file_info = (filepath) => {
    return new Promise((resolve, reject) => {
      uni.getImageInfo({
        src: filepath,
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  };
  const get_file_data = async (files, type = "image") => {
    let fileFullName = get_file_ext(files.name);
    const extname = fileFullName.ext.toLowerCase();
    let filedata = {
      name: files.name,
      uuid: files.uuid,
      extname: extname || "",
      cloudPath: files.cloudPath,
      fileType: files.fileType,
      url: files.path || files.path,
      size: files.size,
      image: {},
      path: files.path,
      video: {}
    };
    if (type === "image") {
      const imageinfo = await get_file_info(files.path);
      delete filedata.video;
      filedata.image.width = imageinfo.width;
      filedata.image.height = imageinfo.height;
      filedata.image.location = imageinfo.path;
    } else {
      delete filedata.image;
    }
    return filedata;
  };
  const _sfc_main$7 = {
    name: "uploadImage",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto",
            border: {}
          };
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      styles() {
        let styles = {
          width: "auto",
          height: "auto",
          border: {}
        };
        return Object.assign(styles, this.imageStyles);
      },
      boxStyle() {
        const {
          width = "auto",
          height = "auto"
        } = this.styles;
        let obj = {};
        if (height === "auto") {
          if (width !== "auto") {
            obj.height = this.value2px(width);
            obj["padding-top"] = 0;
          } else {
            obj.height = 0;
          }
        } else {
          obj.height = this.value2px(height);
          obj["padding-top"] = 0;
        }
        if (width === "auto") {
          if (height !== "auto") {
            obj.width = this.value2px(height);
          } else {
            obj.width = "33.3%";
          }
        } else {
          obj.width = this.value2px(width);
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderStyle() {
        let {
          border
        } = this.styles;
        let obj = {};
        const widthDefaultValue = 1;
        const radiusDefaultValue = 3;
        if (typeof border === "boolean") {
          obj.border = border ? "1px #eee solid" : "none";
        } else {
          let width = border && border.width || widthDefaultValue;
          width = this.value2px(width);
          let radius = border && border.radius || radiusDefaultValue;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": border && border.style || "solid",
            "border-color": border && border.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", item);
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      prviewImage(img, index) {
        let urls = [];
        if (Number(this.limit) === 1 && this.disablePreview && !this.disabled) {
          this.$emit("choose");
        }
        if (this.disablePreview)
          return;
        this.filesList.forEach((i2) => {
          urls.push(i2.url);
        });
        uni.previewImage({
          urls,
          current: index
        });
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          if (value.indexOf("%") === -1) {
            value = value.indexOf("px") !== -1 ? value : value + "px";
          }
        }
        return value;
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__container" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.filesList, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "file-picker__box",
          key: index,
          style: vue.normalizeStyle($options.boxStyle)
        }, [
          vue.createElementVNode("view", {
            class: "file-picker__box-content",
            style: vue.normalizeStyle($options.borderStyle)
          }, [
            vue.createElementVNode("image", {
              class: "file-image",
              src: item.url,
              mode: "aspectFill",
              onClick: vue.withModifiers(($event) => $options.prviewImage(item, index), ["stop"])
            }, null, 8, ["src", "onClick"]),
            $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "icon-del-box",
              onClick: vue.withModifiers(($event) => $options.delFile(index), ["stop"])
            }, [
              vue.createElementVNode("view", { class: "icon-del" }),
              vue.createElementVNode("view", { class: "icon-del rotate" })
            ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
            item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "file-picker__progress"
            }, [
              vue.createElementVNode("progress", {
                class: "file-picker__progress-item",
                percent: item.progress === -1 ? 0 : item.progress,
                "stroke-width": "4",
                backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
              }, null, 8, ["percent", "backgroundColor"])
            ])) : vue.createCommentVNode("v-if", true),
            item.errMsg ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "file-picker__mask",
              onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
            }, " \u70B9\u51FB\u91CD\u8BD5 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
          ], 4)
        ], 4);
      }), 128)),
      $props.filesList.length < $props.limit && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "file-picker__box",
        style: vue.normalizeStyle($options.boxStyle)
      }, [
        vue.createElementVNode("view", {
          class: "file-picker__box-content is-add",
          style: vue.normalizeStyle($options.borderStyle),
          onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", { class: "icon-add" }),
            vue.createElementVNode("view", { class: "icon-add rotate" })
          ], true)
        ], 4)
      ], 4)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var uploadImage = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$3], ["__scopeId", "data-v-4c5c5653"]]);
  const _sfc_main$6 = {
    name: "uploadFile",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      showType: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            border: true,
            dividline: true,
            borderStyle: {}
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      list() {
        let files = [];
        this.filesList.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      styles() {
        let styles = {
          border: true,
          dividline: true,
          "border-style": {}
        };
        return Object.assign(styles, this.listStyles);
      },
      borderStyle() {
        let {
          borderStyle,
          border
        } = this.styles;
        let obj = {};
        if (!border) {
          obj.border = "none";
        } else {
          let width = borderStyle && borderStyle.width || 1;
          width = this.value2px(width);
          let radius = borderStyle && borderStyle.radius || 5;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": borderStyle && borderStyle.style || "solid",
            "border-color": borderStyle && borderStyle.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderLineStyle() {
        let obj = {};
        let {
          borderStyle
        } = this.styles;
        if (borderStyle && borderStyle.color) {
          obj["border-color"] = borderStyle.color;
        }
        if (borderStyle && borderStyle.width) {
          let width = borderStyle && borderStyle.width || 1;
          let style = borderStyle && borderStyle.style || 0;
          if (typeof width === "number") {
            width += "px";
          } else {
            width = width.indexOf("px") ? width : width + "px";
          }
          obj["border-width"] = width;
          if (typeof style === "number") {
            style += "px";
          } else {
            style = style.indexOf("px") ? style : style + "px";
          }
          obj["border-top-style"] = style;
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", {
          item,
          index
        });
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      value2px(value) {
        if (typeof value === "number") {
          value += "px";
        } else {
          value = value.indexOf("px") !== -1 ? value : value + "px";
        }
        return value;
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__files" }, [
      !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "files-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(` :class="{'is-text-box':showType === 'list'}" `),
      $options.list.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-file-picker__lists is-text-box",
        style: vue.normalizeStyle($options.borderStyle)
      }, [
        vue.createCommentVNode(" ,'is-list-card':showType === 'list-card' "),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(["uni-file-picker__lists-box", {
              "files-border": index !== 0 && $options.styles.dividline
            }]),
            key: index,
            style: vue.normalizeStyle(index !== 0 && $options.styles.dividline && $options.borderLineStyle)
          }, [
            vue.createElementVNode("view", { class: "uni-file-picker__item" }, [
              vue.createCommentVNode(` :class="{'is-text-image':showType === 'list'}" `),
              vue.createCommentVNode(' 	<view class="files__image is-text-image">\r\n						<image class="header-image" :src="item.logo" mode="aspectFit"></image>\r\n					</view> '),
              vue.createElementVNode("view", { class: "files__name" }, vue.toDisplayString(item.name), 1),
              $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "icon-del-box icon-files",
                onClick: ($event) => $options.delFile(index)
              }, [
                vue.createElementVNode("view", { class: "icon-del icon-files" }),
                vue.createElementVNode("view", { class: "icon-del rotate" })
              ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
            ]),
            item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "file-picker__progress"
            }, [
              vue.createElementVNode("progress", {
                class: "file-picker__progress-item",
                percent: item.progress === -1 ? 0 : item.progress,
                "stroke-width": "4",
                backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
              }, null, 8, ["percent", "backgroundColor"])
            ])) : vue.createCommentVNode("v-if", true),
            item.status === "error" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "file-picker__mask",
              onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
            }, " \u70B9\u51FB\u91CD\u8BD5 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
          ], 6);
        }), 128))
      ], 4)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var uploadFile = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$2], ["__scopeId", "data-v-4f822398"]]);
  const _sfc_main$5 = {
    name: "uniFilePicker",
    components: {
      uploadImage,
      uploadFile
    },
    emits: ["select", "success", "fail", "progress", "delete", "update:modelValue", "input"],
    props: {
      modelValue: {
        type: [Array, Object],
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      autoUpload: {
        type: Boolean,
        default: true
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      mode: {
        type: String,
        default: "grid"
      },
      fileMediatype: {
        type: String,
        default: "image"
      },
      fileExtname: {
        type: [Array, String],
        default() {
          return [];
        }
      },
      title: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            border: true,
            dividline: true,
            borderStyle: {}
          };
        }
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto"
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      },
      returnType: {
        type: String,
        default: "array"
      },
      sizeType: {
        type: Array,
        default() {
          return ["original", "compressed"];
        }
      }
    },
    data() {
      return {
        files: [],
        localValue: []
      };
    },
    watch: {
      modelValue: {
        handler(newVal, oldVal) {
          this.setValue(newVal, oldVal);
        },
        immediate: true
      }
    },
    computed: {
      filesList() {
        let files = [];
        this.files.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      showType() {
        if (this.fileMediatype === "image") {
          return this.mode;
        }
        return "list";
      },
      limitLength() {
        if (this.returnType === "object") {
          return 1;
        }
        if (!this.limit) {
          return 1;
        }
        if (this.limit >= 9) {
          return 9;
        }
        return this.limit;
      }
    },
    created() {
      if (!(wt.config && wt.config.provider)) {
        this.noSpace = true;
        wt.chooseAndUploadFile = chooseAndUploadFile;
      }
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.form && this.formItem) {
        if (this.formItem.name) {
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
    },
    methods: {
      clearFiles(index) {
        if (index !== 0 && !index) {
          this.files = [];
          this.$nextTick(() => {
            this.setEmit();
          });
        } else {
          this.files.splice(index, 1);
        }
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      upload() {
        let files = [];
        this.files.forEach((v2, index) => {
          if (v2.status === "ready" || v2.status === "error") {
            files.push(Object.assign({}, v2));
          }
        });
        this.uploadFiles(files);
      },
      async setValue(newVal, oldVal) {
        const newData = async (v2) => {
          const reg = /cloud:\/\/([\w.]+\/?)\S*/;
          let url = "";
          if (v2.fileID) {
            url = v2.fileID;
          } else {
            url = v2.url;
          }
          if (reg.test(url)) {
            v2.fileID = url;
            v2.url = await this.getTempFileURL(url);
          }
          if (v2.url)
            v2.path = v2.url;
          return v2;
        };
        if (this.returnType === "object") {
          if (newVal) {
            await newData(newVal);
          } else {
            newVal = {};
          }
        } else {
          if (!newVal)
            newVal = [];
          for (let i2 = 0; i2 < newVal.length; i2++) {
            let v2 = newVal[i2];
            await newData(v2);
          }
        }
        this.localValue = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(this.localValue);
        }
        let filesData = Object.keys(newVal).length > 0 ? newVal : [];
        this.files = [].concat(filesData);
      },
      choose() {
        if (this.disabled)
          return;
        if (this.files.length >= Number(this.limitLength) && this.showType !== "grid" && this.returnType === "array") {
          uni.showToast({
            title: `\u60A8\u6700\u591A\u9009\u62E9 ${this.limitLength} \u4E2A\u6587\u4EF6`,
            icon: "none"
          });
          return;
        }
        this.chooseFiles();
      },
      chooseFiles() {
        const _extname = get_extname(this.fileExtname);
        wt.chooseAndUploadFile({
          type: this.fileMediatype,
          compressed: false,
          sizeType: this.sizeType,
          extension: _extname.length > 0 ? _extname : void 0,
          count: this.limitLength - this.files.length,
          onChooseFile: this.chooseFileCallback,
          onUploadProgress: (progressEvent) => {
            this.setProgress(progressEvent, progressEvent.index);
          }
        }).then((result) => {
          this.setSuccessAndError(result.tempFiles);
        }).catch((err) => {
          formatAppLog("log", "at uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue:361", "\u9009\u62E9\u5931\u8D25", err);
        });
      },
      async chooseFileCallback(res) {
        const _extname = get_extname(this.fileExtname);
        const is_one = Number(this.limitLength) === 1 && this.disablePreview && !this.disabled || this.returnType === "object";
        if (is_one) {
          this.files = [];
        }
        let {
          filePaths,
          files
        } = get_files_and_is_max(res, _extname);
        if (!(_extname && _extname.length > 0)) {
          filePaths = res.tempFilePaths;
          files = res.tempFiles;
        }
        let currentData = [];
        for (let i2 = 0; i2 < files.length; i2++) {
          if (this.limitLength - this.files.length <= 0)
            break;
          files[i2].uuid = Date.now();
          let filedata = await get_file_data(files[i2], this.fileMediatype);
          filedata.progress = 0;
          filedata.status = "ready";
          this.files.push(filedata);
          currentData.push(__spreadProps(__spreadValues({}, filedata), {
            file: files[i2]
          }));
        }
        this.$emit("select", {
          tempFiles: currentData,
          tempFilePaths: filePaths
        });
        res.tempFiles = files;
        if (!this.autoUpload || this.noSpace) {
          res.tempFiles = [];
        }
      },
      uploadFiles(files) {
        files = [].concat(files);
        uploadCloudFiles.call(this, files, 5, (res) => {
          this.setProgress(res, res.index, true);
        }).then((result) => {
          this.setSuccessAndError(result);
        }).catch((err) => {
          formatAppLog("log", "at uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue:426", err);
        });
      },
      async setSuccessAndError(res, fn) {
        let successData = [];
        let errorData = [];
        let tempFilePath = [];
        let errorTempFilePath = [];
        for (let i2 = 0; i2 < res.length; i2++) {
          const item = res[i2];
          const index = item.uuid ? this.files.findIndex((p2) => p2.uuid === item.uuid) : item.index;
          if (index === -1 || !this.files)
            break;
          if (item.errMsg === "request:fail") {
            this.files[index].url = item.path;
            this.files[index].status = "error";
            this.files[index].errMsg = item.errMsg;
            errorData.push(this.files[index]);
            errorTempFilePath.push(this.files[index].url);
          } else {
            this.files[index].errMsg = "";
            this.files[index].fileID = item.url;
            const reg = /cloud:\/\/([\w.]+\/?)\S*/;
            if (reg.test(item.url)) {
              this.files[index].url = await this.getTempFileURL(item.url);
            } else {
              this.files[index].url = item.url;
            }
            this.files[index].status = "success";
            this.files[index].progress += 1;
            successData.push(this.files[index]);
            tempFilePath.push(this.files[index].fileID);
          }
        }
        if (successData.length > 0) {
          this.setEmit();
          this.$emit("success", {
            tempFiles: this.backObject(successData),
            tempFilePaths: tempFilePath
          });
        }
        if (errorData.length > 0) {
          this.$emit("fail", {
            tempFiles: this.backObject(errorData),
            tempFilePaths: errorTempFilePath
          });
        }
      },
      setProgress(progressEvent, index, type) {
        this.files.length;
        const percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        let idx = index;
        if (!type) {
          idx = this.files.findIndex((p2) => p2.uuid === progressEvent.tempFile.uuid);
        }
        if (idx === -1 || !this.files[idx])
          return;
        this.files[idx].progress = percentCompleted - 1;
        this.$emit("progress", {
          index: idx,
          progress: parseInt(percentCompleted),
          tempFile: this.files[idx]
        });
      },
      delFile(index) {
        this.$emit("delete", {
          tempFile: this.files[index],
          tempFilePath: this.files[index].url
        });
        this.files.splice(index, 1);
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      getFileExt(name) {
        const last_len = name.lastIndexOf(".");
        const len = name.length;
        return {
          name: name.substring(0, last_len),
          ext: name.substring(last_len + 1, len)
        };
      },
      setEmit() {
        let data2 = [];
        if (this.returnType === "object") {
          data2 = this.backObject(this.files)[0];
          this.localValue = data2 ? data2 : null;
        } else {
          data2 = this.backObject(this.files);
          if (!this.localValue) {
            this.localValue = [];
          }
          this.localValue = [...data2];
        }
        this.$emit("update:modelValue", this.localValue);
      },
      backObject(files) {
        let newFilesData = [];
        files.forEach((v2) => {
          newFilesData.push({
            extname: v2.extname,
            fileType: v2.fileType,
            image: v2.image,
            name: v2.name,
            path: v2.path,
            size: v2.size,
            fileID: v2.fileID,
            url: v2.url
          });
        });
        return newFilesData;
      },
      async getTempFileURL(fileList) {
        fileList = {
          fileList: [].concat(fileList)
        };
        const urls = await wt.getTempFileURL(fileList);
        return urls.fileList[0].tempFileURL || "";
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_upload_image = vue.resolveComponent("upload-image");
    const _component_upload_file = vue.resolveComponent("upload-file");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker" }, [
      $props.title ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-file-picker__header"
      }, [
        vue.createElementVNode("text", { class: "file-title" }, vue.toDisplayString($props.title), 1),
        vue.createElementVNode("text", { class: "file-count" }, vue.toDisplayString($options.filesList.length) + "/" + vue.toDisplayString($options.limitLength), 1)
      ])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype === "image" && $options.showType === "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_image, {
        key: 1,
        readonly: $props.readonly,
        "image-styles": $props.imageStyles,
        "files-list": $options.filesList,
        limit: $options.limitLength,
        disablePreview: $props.disablePreview,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", { class: "is-add" }, [
              vue.createElementVNode("view", { class: "icon-add" }),
              vue.createElementVNode("view", { class: "icon-add rotate" })
            ])
          ], true)
        ]),
        _: 3
      }, 8, ["readonly", "image-styles", "files-list", "limit", "disablePreview", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype !== "image" || $options.showType !== "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_file, {
        key: 2,
        readonly: $props.readonly,
        "list-styles": $props.listStyles,
        "files-list": $options.filesList,
        showType: $options.showType,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("button", {
              type: "primary",
              size: "mini"
            }, "\u9009\u62E9\u6587\u4EF6")
          ], true)
        ]),
        _: 3
      }, 8, ["readonly", "list-styles", "files-list", "showType", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1], ["__scopeId", "data-v-363ace0e"]]);
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      let TextNum = vue.ref("");
      const TextNUM = vue.computed(() => {
        return 500 - TextNum.value.length;
      });
      const styleImg = {
        width: 74,
        height: 74,
        color: "#ff5a5f",
        border: {
          width: 2,
          style: "dashed",
          radius: "2px",
          backgroundColor: "#ff6700"
        }
      };
      const imageValue = vue.ref([]);
      const image = vue.ref([]);
      const progress = () => {
        formatAppLog("log", "at pages/user/opinion/index.vue:52", "progress");
      };
      const success = (res) => {
        formatAppLog("log", "at pages/user/opinion/index.vue:55", res);
        formatAppLog("log", "at pages/user/opinion/index.vue:56", "success");
      };
      const fail = () => {
        formatAppLog("log", "at pages/user/opinion/index.vue:59", "fail");
      };
      const select = async (res) => {
        for await (let item of res.tempFiles) {
          try {
            await upImg(item, (data2) => {
              image.value.push(data2.data.url);
              formatAppLog("log", "at pages/user/opinion/index.vue:67", image.value.length);
            });
          } catch (err) {
            formatAppLog("log", "at pages/user/opinion/index.vue:71", err);
          }
        }
        formatAppLog("log", "at pages/user/opinion/index.vue:75", "select");
      };
      return (_ctx, _cache) => {
        const _component_uni_file_picker = resolveEasycom(vue.resolveDynamicComponent("uni-file-picker"), __easycom_0);
        return vue.openBlock(), vue.createElementBlock("view", { class: "opinion" }, [
          vue.createElementVNode("view", { class: "textarea" }, [
            vue.withDirectives(vue.createElementVNode("textarea", {
              maxlength: "500",
              style: { "height": "10rem" },
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(TextNum) ? TextNum.value = $event : TextNum = $event),
              placeholder: "\u8BF7\u8BE6\u7EC6\u63CF\u8FF0\u60A8\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u5982\u679C\u80FD\u914D\u4E0A\u76F8\u5E94\u7684\u622A\u56FE\uFF0C\u5C06\u6709\u8BF8\u5982\u6211\u4EEC\u627E\u89E3\u51B3\u65B9\u6848"
            }, null, 512), [
              [vue.vModelText, vue.unref(TextNum)]
            ])
          ]),
          vue.createElementVNode("view", { class: "text" }, [
            vue.createElementVNode("text", null, vue.toDisplayString(vue.unref(TextNum).length ? `\u8FD8\u80FD\u8F93\u5165${vue.unref(TextNUM)}\u4E2A\u5B57` : "\u6587\u5B57\u4E0D\u8D85\u8FC7500\u5B57"), 1)
          ]),
          vue.createElementVNode("view", { class: "upload-img" }, [
            vue.createElementVNode("view", { class: "title" }, [
              vue.createTextVNode("\u56FE\u7247(\u53EF\u9009)"),
              vue.createElementVNode("text", {
                decode: "decode",
                class: "text_1"
              }, vue.toDisplayString(image.value.length) + "/9", 1)
            ]),
            vue.createElementVNode("view", {
              class: "flex-col",
              style: { "margin": "6px" }
            }, [
              vue.createVNode(_component_uni_file_picker, {
                modelValue: imageValue.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => imageValue.value = $event),
                "image-styles": styleImg,
                limit: 11,
                "file-extname": "png,jpg,jpeg",
                "file-mediatype": "image",
                mode: "grid",
                style: {},
                onFail: fail,
                onProgress: progress,
                onSelect: select,
                onSuccess: success
              }, null, 8, ["modelValue"])
            ])
          ]),
          vue.createElementVNode("button", { style: { "margin": "3rem 0" } }, "\u63D0\u4EA4")
        ]);
      };
    }
  });
  var PagesUserOpinionIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4d3daf0c"]]);
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    props: {
      id: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      }
    },
    setup(__props) {
      const props = __props;
      uni.setNavigationBarTitle({
        title: props.title
      });
      let currentDate = getDate();
      vue.ref(currentDate);
      let id = parseInt(props.id);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createVNode(vue.unref(StatusBar)),
          vue.createVNode(vue.unref(BackNav), {
            id: vue.unref(id),
            title: props.title
          }, null, 8, ["id", "title"]),
          vue.createElementVNode("view", { class: "search_header" }, [
            vue.unref(id) === 5 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "search"
            }, [
              vue.createElementVNode("input", {
                type: "text",
                placeholder: "\u641C\u7D22\u54C1\u724C\u8F66\u7CFB"
              }),
              vue.createElementVNode("view", { class: "icon_search" }, [
                vue.createElementVNode("img", {
                  class: "icon",
                  src: "/static/icon/search.png",
                  alt: ""
                })
              ])
            ])) : vue.createCommentVNode("v-if", true),
            vue.unref(id) === 5 ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "title"
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(orderList), (i2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "timeContainer",
                  key: i2.id
                }, vue.toDisplayString(i2.title), 1);
              }), 128))
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createCommentVNode("  \u5F85\u63D0\u8F66   "),
          vue.unref(id) === 1 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "VeHicLe_container"
          }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(2, (item) => {
              return vue.createElementVNode("view", { class: "VeHicLelList" }, [
                vue.createElementVNode("view", { class: "VeHicLel_container" }, [
                  vue.createElementVNode("view", { class: "img" }, [
                    vue.createElementVNode("img", {
                      src: "/static/img/1.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("view", { class: "VeHicLel_right" }, [
                    vue.createElementVNode("view", { class: "title" }, [
                      vue.createElementVNode("text", null, "[\u5468\u53E3]\u5954\u9A70 E\u7EA7 2020\u6B3E 2.0T \u624B\u81EA\u52A8\u4E00\u4F53 \u6539\u6B3E E 300L \u8FD0\u52A8\u65F6\u5C1A\u578B"),
                      vue.createElementVNode("view", { class: "love_icon" }, [
                        vue.createElementVNode("img", {
                          src: "/static/icon/love_h.png",
                          alt: ""
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "data_kilometre" }, [
                      vue.createElementVNode("text", { class: "data" }, "2021\u5E7405\u6708\u4E0A\u724C"),
                      vue.createElementVNode("span", null, "|"),
                      vue.createElementVNode("text", null, "1.90\u4E07\u516C\u91CC")
                    ]),
                    vue.createElementVNode("view", { class: "price_pople_num" }, [
                      vue.createElementVNode("view", { class: "price" }, "\u6210\u4EA4\u4EF7\uFF1A75.58\u4E07")
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "list_info" }, [
                  vue.createElementVNode("view", { class: "top_text" }, [
                    vue.createElementVNode("view", { class: "left_price" }, "\u8F66\u4E3B\u8054\u7CFB\u65B9\u5F0F:13207082805"),
                    vue.createElementVNode("view", { class: "right_price" }, "\u63D0\u8F66\u5730\u5740:\u8D63\u5DDE\u5E02\u7AE0\u8D21\u533A\u4E07\u8C61\u57CE")
                  ]),
                  vue.createElementVNode("view", { class: "history_time" }, [
                    vue.createElementVNode("view", { class: "history_btn" }, " \u8054\u7CFB\u5BA2\u670D ")
                  ])
                ])
              ]);
            }), 64))
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u5F85\u4ED8\u6B3E   "),
          vue.unref(id) === 2 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "VeHicLe_container"
          }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(2, (item) => {
              return vue.createElementVNode("view", { class: "VeHicLelList" }, [
                vue.createElementVNode("view", { class: "VeHicLel_container" }, [
                  vue.createElementVNode("view", { class: "img" }, [
                    vue.createElementVNode("img", {
                      src: "/static/img/1.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("view", { class: "VeHicLel_right" }, [
                    vue.createElementVNode("view", { class: "title" }, [
                      vue.createElementVNode("text", null, "[\u5468\u53E3]\u5954\u9A70 E\u7EA7 2020\u6B3E 2.0T \u624B\u81EA\u52A8\u4E00\u4F53 \u6539\u6B3E E 300L \u8FD0\u52A8\u65F6\u5C1A\u578B"),
                      vue.createElementVNode("view", { class: "love_icon" }, [
                        vue.createElementVNode("img", {
                          src: "/static/icon/love_h.png",
                          alt: ""
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "data_kilometre" }, [
                      vue.createElementVNode("text", { class: "data" }, "2021\u5E7405\u4F59\u989D\u4E0A\u724C"),
                      vue.createElementVNode("span", null, "|"),
                      vue.createElementVNode("text", null, "1.90\u4E07\u516C\u91CC")
                    ]),
                    vue.createElementVNode("view", { class: "price_pople_num" }, [
                      vue.createElementVNode("view", { class: "price" }, "\u6210\u4EA4\u4EF7\uFF1A25.58\u4E07"),
                      vue.createCommentVNode('              <view class="num">142\u6B21\u56F4\u89C2</view>')
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "list_info" }, [
                  vue.createElementVNode("view", { class: "top_text" }, [
                    vue.createElementVNode("view", { class: "left_price" }, "\u8F66\u4E3B\u8054\u7CFB\u65B9\u5F0F:132rexx0005"),
                    vue.createElementVNode("view", { class: "right_price" }, "\u63D0\u8F66\u5730\u5740:\u8D63\u5DDE\u5E02\u7AE0\u8D21\u533A\u4E07\u8C61\u57CE")
                  ]),
                  vue.createElementVNode("view", { class: "history_time" }, [
                    vue.createElementVNode("view", { class: "history_btn" }, " \u8054\u7CFB\u5BA2\u670D\u6237\u53E3\u83B7\u53D6\u8F66\u4E3B\u4FE1\u606F ")
                  ])
                ])
              ]);
            }), 64))
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u5F85\u8FC7\u6237"),
          vue.unref(id) === 3 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "VeHicLe_container"
          }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(2, (item) => {
              return vue.createElementVNode("view", { class: "VeHicLelList" }, [
                vue.createElementVNode("view", { class: "VeHicLel_container" }, [
                  vue.createElementVNode("view", { class: "img" }, [
                    vue.createElementVNode("img", {
                      src: "/static/img/1.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("view", { class: "VeHicLel_right" }, [
                    vue.createElementVNode("view", { class: "title" }, [
                      vue.createElementVNode("text", null, "[\u5468\u53E3]\u5954\u9A70 E\u7EA7 2020\u6B3E 2.0T \u624B\u81EA\u52A8\u4E00\u4F53 \u6539\u6B3E E 300L \u8FD0\u52A8\u65F6\u5C1A\u578B"),
                      vue.createElementVNode("view", { class: "love_icon" }, [
                        vue.createElementVNode("img", {
                          src: "/static/icon/love_h.png",
                          alt: ""
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "data_kilometre" }, [
                      vue.createElementVNode("text", { class: "data" }, "2021\u5E7405\u4F59\u989D\u4E0A\u724C"),
                      vue.createElementVNode("span", null, "|"),
                      vue.createElementVNode("text", null, "1.90\u4E07\u516C\u91CC")
                    ]),
                    vue.createElementVNode("view", { class: "price_pople_num" }, [
                      vue.createElementVNode("view", { class: "price" }, "25.58\u4E07"),
                      vue.createElementVNode("view", { class: "num" }, "142\u6B21\u56F4\u89C2")
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "list_info_transfer" }, [
                  vue.createElementVNode("view", { class: "left_text" }, [
                    vue.createElementVNode("text", null, "\u5DF2\u5B8C\u6210\u4EA4\u6613,\u5F85\u8FC7\u6237")
                  ]),
                  vue.createElementVNode("view", { class: "right_tis" }, [
                    vue.createElementVNode("text", null, "\u7ACB\u523B\u8FC7\u6237"),
                    vue.createElementVNode("view", { class: "img" }, [
                      vue.createElementVNode("img", {
                        src: "/static/icon/right_x.png",
                        alt: ""
                      })
                    ])
                  ])
                ])
              ]);
            }), 64))
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u4EF2\u88C1\u4E2D "),
          vue.unref(id) === 4 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 3,
            class: "VeHicLe_container"
          }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(2, (item) => {
              return vue.createElementVNode("view", { class: "VeHicLelList" }, [
                vue.createElementVNode("view", { class: "VeHicLel_container" }, [
                  vue.createElementVNode("view", { class: "img" }, [
                    vue.createElementVNode("img", {
                      src: "/static/img/1.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("view", { class: "VeHicLel_right" }, [
                    vue.createElementVNode("view", { class: "title" }, [
                      vue.createElementVNode("text", null, "[\u5468\u53E3]\u5954\u9A70 E\u7EA7 2020\u6B3E 2.0T \u624B\u81EA\u52A8\u4E00\u4F53 \u6539\u6B3E E 300L \u8FD0\u52A8\u65F6\u5C1A\u578B"),
                      vue.createElementVNode("view", { class: "love_icon" }, [
                        vue.createElementVNode("img", {
                          src: "/static/icon/love_h.png",
                          alt: ""
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "data_kilometre" }, [
                      vue.createElementVNode("text", { class: "data" }, "2021\u5E7405\u4F59\u989D\u4E0A\u724C"),
                      vue.createElementVNode("span", null, "|"),
                      vue.createElementVNode("text", null, "1.90\u4E07\u516C\u91CC")
                    ]),
                    vue.createElementVNode("view", { class: "price_pople_num" }, [
                      vue.createElementVNode("view", { class: "price" }, "\u6210\u4EA4\u4EF7\uFF1A25.58\u4E07"),
                      vue.createCommentVNode('              <view class="num">142\u6B21\u56F4\u89C2</view>')
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "list_info_flex" }, [
                  vue.createElementVNode("view", { class: "history_time" }, [
                    vue.createElementVNode("view", { class: "history_btn" }, " \u63D0\u4EA4\u4EF2\u88C1\u8D44\u6599 ")
                  ]),
                  vue.createElementVNode("view", { class: "history_time" }, [
                    vue.createElementVNode("view", { class: "history_btn" }, " \u67E5\u770B\u4EF2\u88C1\u8FDB\u5EA6 ")
                  ])
                ])
              ]);
            }), 64))
          ])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u5168\u90E8\u8BA2\u5355"),
          vue.unref(id) === 5 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 4,
            class: "VeHicLe_container"
          }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(2, (item) => {
              return vue.createElementVNode("view", { class: "VeHicLelList" }, [
                vue.createElementVNode("view", { class: "VeHicLel_container" }, [
                  vue.createElementVNode("view", { class: "img" }, [
                    vue.createElementVNode("img", {
                      src: "/static/img/1.png",
                      alt: ""
                    })
                  ]),
                  vue.createElementVNode("view", { class: "VeHicLel_right" }, [
                    vue.createElementVNode("view", { class: "title" }, [
                      vue.createElementVNode("text", null, "[\u5468\u53E3]\u5954\u9A70 E\u7EA7 2020\u6B3E 2.0T \u624B\u81EA\u52A8\u4E00\u4F53 \u6539\u6B3E E 300L \u8FD0\u52A8\u65F6\u5C1A\u578B"),
                      vue.createElementVNode("view", { class: "love_icon" }, [
                        vue.createElementVNode("img", {
                          src: "/static/icon/love_h.png",
                          alt: ""
                        })
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "data_kilometre" }, [
                      vue.createElementVNode("text", { class: "data" }, "2021\u5E7405\u4F59\u989D\u4E0A\u724C"),
                      vue.createElementVNode("span", null, "|"),
                      vue.createElementVNode("text", null, "1.90\u4E07\u516C\u91CC")
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "list_info_flex" }, [
                  vue.createElementVNode("view", { class: "history_time" }, [
                    vue.createElementVNode("text", null, "\u5F53\u524D\u4EF7:25.85\u4E07")
                  ]),
                  vue.createElementVNode("view", { class: "history_time" }, [
                    vue.createElementVNode("text", null, "\u6211\u7684\u51FA\u4EF7:105.85\u4E07")
                  ])
                ]),
                vue.createElementVNode("view", { class: "list_info_flex" }, [
                  vue.createCommentVNode(" \u5360\u4F4D\u6807\u7B7E         "),
                  vue.createElementVNode("view"),
                  vue.createElementVNode("view", { class: "history_time" }, [
                    vue.createElementVNode("view", { class: "history_btn" }, " \u5386\u53F2\u51FA\u4EF7 ")
                  ])
                ])
              ]);
            }), 64))
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  });
  var PagesUserOrderIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-17a82086"]]);
  const _sfc_main$2 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(5, (i2) => {
        return vue.createElementVNode("view", { class: "newsList" }, [
          vue.createElementVNode("view", { class: "img" }, [
            vue.createElementVNode("image", {
              src: "/static/icon/myFollow.png",
              alt: ""
            })
          ]),
          vue.createElementVNode("view", { class: "info" }, [
            vue.createElementVNode("text", { class: "title" }, "\u5173\u6CE8\u63D0\u9192"),
            vue.createElementVNode("text", { class: "txt" }, "\u60A8\u5173\u6CE8\u7684\u5783\u573E\u8F667\u7CFB 2020\u6B3E123123123")
          ]),
          vue.createElementVNode("view", { class: "Date" }, [
            vue.createElementVNode("text", { class: "day" }, "01\u670806\u65E5"),
            vue.createElementVNode("view", { class: "info_num" }, [
              vue.createElementVNode("view"),
              vue.createElementVNode("view", { class: "icon" }, " 1 ")
            ])
          ])
        ]);
      }), 64))
    ]);
  }
  var PagesUserNewsIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-4714a1de"]]);
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    setup(__props) {
      const { id } = __props;
      let xy = vue.ref(["\u7528\u6237\u534F\u8BAE", "\u4F1A\u5458\u7B49\u7EA7\u8BF4\u660E"]);
      let info2 = vue.ref("\u5BCC\u6587\u672C\u4FE1\u606F");
      formatAppLog("log", "at pages/user/agreement/index.vue:17", id);
      onReady(() => {
        uni.setNavigationBarTitle({
          title: xy.value[id]
        });
        formatAppLog("log", "at pages/user/agreement/index.vue:23", xy.value[id]);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(vue.unref(StatusBar)),
          vue.createElementVNode("rich-text", { nodes: vue.unref(info2) }, null, 8, ["nodes"])
        ]);
      };
    }
  });
  if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
    Promise.prototype.finally = function(callback) {
      const promise = this.constructor;
      return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      }));
    };
  }
  if (uni.restoreGlobal) {
    uni.restoreGlobal(vue__namespace, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
  }
  __definePage("pages/index/index", _sfc_main$y);
  __definePage("pages/index/component/TransFer", PagesIndexComponentTransFer);
  __definePage("pages/index/component/Notice", PagesIndexComponentNotice);
  __definePage("pages/index/component/mechanism", PagesIndexComponentMechanism);
  __definePage("pages/BiddingIndex/index", PagesBiddingIndexIndex);
  __definePage("pages/BiddingIndex/Details/index", PagesBiddingIndexDetailsIndex);
  __definePage("pages/subscribe/index", PagesSubscribeIndex);
  __definePage("pages/subscribe/Add/index", PagesSubscribeAddIndex);
  __definePage("pages/release/index", _sfc_main$j);
  __definePage("pages/user/index", PagesUserIndex);
  __definePage("pages/user/Bidding/index", PagesUserBiddingIndex);
  __definePage("pages/user/login/index", PagesUserLoginIndex);
  __definePage("pages/user/register/index", PagesUserRegisterIndex);
  __definePage("pages/user/rule/index", PagesUserRuleIndex);
  __definePage("pages/user/UserInfo/index", PagesUserUserInfoIndex);
  __definePage("pages/user/UserInfo/Email", PagesUserUserInfoEmail);
  __definePage("pages/user/SetUp/index", PagesUserSetUpIndex);
  __definePage("pages/user/opinion/index", PagesUserOpinionIndex);
  __definePage("pages/user/order/index", PagesUserOrderIndex);
  __definePage("pages/user/News/index", PagesUserNewsIndex);
  __definePage("pages/user/agreement/index", _sfc_main$1);
  const _sfc_main = {};
  function createApp() {
    const app = vue.createVueApp(_sfc_main);
    return {
      app
    };
  }
  const __app__ = createApp().app;
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.use(uni.__vuePlugin).mount("#app");
})(Vue);
