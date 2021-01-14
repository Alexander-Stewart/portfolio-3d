AFRAME.registerComponent('hover-animation', {
  schema: {},

  init: function () {
    // adding mouse on hover animation to the text of each object...
    this.el.setAttribute("animation__" + this.el.id + "1", {
      startEvents: "in",
      property: "scale",
      dur: 400,
      from: "1 .00001 1",
      to: ".5 .5 .5"
    });

    this.el.setAttribute("animation__" + this.el.id + "2", {
      startEvents: "out",
      property: "scale",
      dur: 400,
      from: ".5 .5 .5",
      to: "1 .00001 1"
    });

  },

  update: function () {},

  remove: function () {},

  tick: function (time, timeDelta) {}
});
