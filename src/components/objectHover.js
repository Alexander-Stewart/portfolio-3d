AFRAME.registerComponent('name-on-hover', {
  schema: {
    target: {
      type: "selector",
      default: ""
    }
  },

  init: function () {
    // Getting the target text object to tell which text to open.
    // must be passed through the schema of the object with this component.
    var target = this.data.target;
    //console.log(target);
    var el = this.el;
    el.addEventListener("mouseenter", function() {
      target.emit("in"); // animate in
    });
    el.addEventListener("mouseleave", function() {
      target.emit("out"); // animate out
    });
  },

  update: function () {

  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});
