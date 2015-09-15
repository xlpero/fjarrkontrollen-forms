import Ember from 'ember';
import PreviewController from 'fjarrkontrollen-forms/mixins/preview-controller';

export default Ember.Controller.extend(PreviewController, {

  successHandler: function(response) {

    var result = {};
    result.id = response.order.order_number;
    this.transitionToRoute('sfx.step4', {queryParams: result});

  },

  errorHandler: function(error) {

    this.transitionToRoute('sfx.error');

  },

  actions: {
    back: function() {
      this.transitionToRoute("sfx.step2");
    }
  }
});