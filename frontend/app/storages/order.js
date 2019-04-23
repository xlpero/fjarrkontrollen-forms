import StorageObject from 'ember-local-storage/session/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
  initialState() {
    return {
      orderPath: null,
      currentStep: null,
      selectedLocation: null,
      selectedOrderType: null,
      selectedCustomerType: null,
      selectedDeliveryMethod: null
    };
  }
});

export default Storage;
