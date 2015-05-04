import Ember from 'ember';
import ENV from 'fjarrkontrollen-forms/config/environment';

export default Ember.Controller.extend({
  needs: ['application'],

  orderPreviewPartialName: Ember.computed('controllers.application.selectedOrderType.identifier', function() {
    return 'home/step4/' + this.get('controllers.application.selectedOrderType.identifier');
  }),

  isDeliveryTypeShipping: Ember.computed.equal('controllers.application.selectedDeliveryMethod.identifier', 'send'),

  getLocale: function() {
    var application = this.container.lookup('application:main');
    var local = application.get("locale");
    if (!local) {
      local = application.get('defaultLocale');
    }
    return local;
  },

  actions: {
    back: function() {
      this.transitionToRoute("home.step3");
    },
    nextStep: function() {
      this.transitionToRoute("home.step4");
    },
    save: function() {
      Ember.$("body").addClass("loading");
      var title =                             null;
      var journal_title =                     null;
      var authors =                           null;
      var issn_isbn =                         null;
      var publication_year =                  null;
      var volume =                            null;
      var issue =                             null;
      var pages =                             null;
      var not_valid_after =                   null;
      var comments =                          null;
      var photocopies_if_loan_not_possible =  null;
      var order_outside_scandinavia =         null;

      var orderType =                         this.get("controllers.application.selectedOrderType");
      switch(orderType.identifier) {
        case 'article':
          title =                             this.get('controllers.application.orderDetails.article.articleTitle');
          journal_title =                     this.get('controllers.application.orderDetails.article.journalTitle');
          authors =                           this.get('controllers.application.orderDetails.article.authors');
          issn_isbn =                         this.get('controllers.application.orderDetails.article.issn');
          publication_year =                  this.get('controllers.application.orderDetails.article.publicationYear');
          volume =                            this.get('controllers.application.orderDetails.article.volume');
          issue =                             this.get('controllers.application.orderDetails.article.issue');
          pages =                             this.get('controllers.application.orderDetails.article.pages');
          not_valid_after =                   this.get('controllers.application.orderDetails.article.notValidAfter');
          comments =                          this.get('controllers.application.orderDetails.article.comment');
          break;
        case 'book':
          title =                             this.get('controllers.application.orderDetails.book.bookTitle');
          authors =                           this.get('controllers.application.orderDetails.book.authors');
          issn_isbn =                         this.get('controllers.application.orderDetails.book.isbn');
          publication_year =                  this.get('controllers.application.orderDetails.book.publicationYear');
          photocopies_if_loan_not_possible =  this.get('controllers.application.orderDetails.book.outsideNordics');
          order_outside_scandinavia =         this.get('controllers.application.orderDetails.book.allowCopy');
          not_valid_after =                   this.get('controllers.application.orderDetails.book.notValidAfter');
          comments =                          this.get('controllers.application.orderDetails.book.comment');
          break;
        default:
          break;
      };

      var that = this;
      Ember.$.ajax({
        type: 'POST',
        url: ENV.APP.serviceURL + '/orders',
        data: JSON.stringify({
          order_type_id:                      orderType.id,
          customer_type:                      this.get('controllers.application.selectedCustomerType.identifier'),
          form_library:                       this.get('controllers.application.selectedLocation.identifier'), // Change?
          email_confirmation:                 true, // Always set to true
          form_lang:                          that.getLocale(),
          delivery_place:                     this.get('controllers.application.selectedDeliveryMethod.title_special'),
          order_path:                         "Web",
          title:                              title,
          journal_title:                      journal_title,
          authors:                            authors,
          issn_isbn:                          issn_isbn,
          publication_year:                   publication_year,
          volume:                             volume,
          issue:                              issue,
          pages:                              pages,
          not_valid_after:                    not_valid_after,
          comments:                           comments,
          photocopies_if_loan_not_possible:   photocopies_if_loan_not_possible,
          order_outside_scandinavia:          order_outside_scandinavia,

          name:                               this.get('controllers.application.customerDetails.name'),
          email_address:                      this.get('controllers.application.customerDetails.emailAddress'),
          phone_number:                       this.get('controllers.application.customerDetails.phoneNumber'),
          company1:                           this.get('controllers.application.customerDetails.organisation'),
          company2:                           this.get('controllers.application.customerDetails.department'),
          company3:                           this.get('controllers.application.customerDetails.unit'),
          library_card_number:                this.get('controllers.application.customerDetails.libraryCardNumber'),
          x_account:                          this.get('controllers.application.customerDetails.xAccount'),


          delivery_company:                   this.get('controllers.application.deliveryDetails.company'),
          delivery_name:                      this.get('controllers.application.deliveryDetails.name'),
          delivery_address:                   this.get('controllers.application.deliveryDetails.address'),
          delivery_postal_code:               this.get('controllers.application.deliveryDetails.postalCode'),
          delivery_city:                      this.get('controllers.application.deliveryDetails.city'),


          invoicing_name:                     this.get('controllers.application.invoicingDetails.name'),
          invoicing_company:                  this.get('controllers.application.invoicingDetails.company'),
          invoicing_address:                  this.get('controllers.application.invoicingDetails.address'),
          invoicing_postal_address1:          this.get('controllers.application.invoicingDetails.postalCode'),
          invoicing_postal_address2:          this.get('controllers.application.invoicingDetails.city'),
          invoicing_id:                       this.get('controllers.application.invoicingDetails.customerId')
        }),
        contentType: 'application/json',
        dataType: 'json'
      }).then(function(response) {
        Ember.$("body").removeClass("loading");
        console.log(response);
        var orderNumber = response.order.order_number;
        console.log(orderNumber);
        console.log(that.getLocale());
        that.transitionToRoute('home.step5', orderNumber);
      },
      function(error) {
        Ember.$("body").removeClass("loading");
        console.log(error);
      });
    }
  }
});
