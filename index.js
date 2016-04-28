if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Selectable Light component for A-Frame.
 */
AFRAME.registerComponent('selectable', {
  schema: { },

    /**
     * Called once when component is attached. Generally for initial setup.
     */
    init: function () {
      this.selected = null;
    },

    /**
     * Called when component is attached and when component data changes.
     * Generally modifies the entity based on the data.
     */
    update: function (oldData) {
      var self = this;

      this.el.addEventListener('click', function (e) {
        if (e.target === self.el) {
          self.select(null);
          return;
        }

        self.select(e.target);
      });
    },

    select: function (entity) {
      this.selected = entity;

      var event = new Event('selected');
      event.selected = this.selected;
      this.el.dispatchEvent(event);
    }
  });
