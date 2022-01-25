"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
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
      let view = common_vendor.index.createSelectorQuery().in(this).select(".slider-range-inner");
      view.boundingClientRect((data) => {
        let sliderWidth = data.width;
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.backgroundColor,
    b: ($data.values[1] - $data.values[0]) / ($props.max - $props.min) * 100 + "%",
    c: $options.lowerHandlePosition + "%",
    d: $props.activeColor,
    e: $props.barHeight + "px",
    f: $props.decorationVisible ? 1 : "",
    g: $props.blockColor,
    h: $props.blockSize + "px",
    i: $props.blockSize + "px",
    j: $options.lowerHandlePosition + "%",
    k: common_vendor.o((...args) => $options._onTouchStart && $options._onTouchStart(...args)),
    l: common_vendor.o((...args) => $options._onBlockTouchMove && $options._onBlockTouchMove(...args)),
    m: common_vendor.o((...args) => $options._onBlockTouchEnd && $options._onBlockTouchEnd(...args)),
    n: $props.decorationVisible ? 1 : "",
    o: $props.blockColor,
    p: $props.blockSize + "px",
    q: $props.blockSize + "px",
    r: $options.higherHandlePosition + "%",
    s: common_vendor.o((...args) => $options._onTouchStart && $options._onTouchStart(...args)),
    t: common_vendor.o((...args) => $options._onBlockTouchMove && $options._onBlockTouchMove(...args)),
    v: common_vendor.o((...args) => $options._onBlockTouchEnd && $options._onBlockTouchEnd(...args)),
    w: $props.tipVisible
  }, $props.tipVisible ? {
    x: common_vendor.t($props.format($data.values[0])),
    y: common_vendor.s($options.lowerTipStyle)
  } : {}, {
    z: $props.tipVisible
  }, $props.tipVisible ? {
    A: common_vendor.t($props.format($data.values[1])),
    B: common_vendor.s($options.higherTipStyle)
  } : {}, {
    C: $props.height + "px",
    D: $props.disabled ? 1 : "",
    E: $props.blockSize / 2 + "px",
    F: $props.blockSize / 2 + "px"
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-080be10f"]]);
wx.createComponent(Component);
