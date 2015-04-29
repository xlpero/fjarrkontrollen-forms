import Ember from 'ember';
import ENV from 'fjarrkontrollen-forms/config/environment';

export default Ember.Controller.extend({
  needs: ['application'],

  orderPreviewPartialName: Ember.computed('controllers.application.selectedOrderType.identifier', function() {
    return 'home/step4/' + this.get('controllers.application.selectedOrderType.identifier');
  }),
  getLocale: function() {
        var application = this.container.lookup('application:main');
        var locale = application.get("defaultLocale");
        return locale;
  },

  actions: {
    back: function() {
      this.transitionToRoute("home.step3");
    },
    nextStep: function() {
      this.transitionToRoute("home.step4");
    },

    save: function() {
      var title = 								null;
      var journal_title = 						null;
      var authors =  							null;
      var isbn_issn =  							null;
      var publication_year =  					null;
      var volume = 								null;
      var issue =  								null;
      var pages = 								null;
      var not_valid_after =						null;
      var comment =								null;
  	  var photocopies_if_loan_not_possible = 	null;
  	  var order_outside_scandinavia = 			null;

	  var orderType = this.get("controllers.application.selectedOrderType");
	  switch(orderType.identifier) {
		case 'article':
          title =	 							this.get('controllers.application.orderDetails.article.articleTitle');
          journal_title = 						this.get('controllers.application.orderDetails.article.journalTitle');
          authors =  							this.get('controllers.application.orderDetails.article.authors');
          isbn_issn =  							this.get('controllers.application.orderDetails.article.issn');
          publication_year =  					this.get('controllers.application.orderDetails.article.publicationYear');
          volume = 								this.get('controllers.application.orderDetails.article.volume');
          issue =  								this.get('controllers.application.orderDetails.article.issue');
          pages = 								this.get('controllers.application.orderDetails.article.pages');
          not_valid_after =						this.get('controllers.application.orderDetails.article.notValidAfter');
          comment =								this.get('controllers.application.orderDetails.article.comment');
          break;
	    case 'book':
          title =	 							this.get('controllers.application.orderDetails.book.bookTitle');
          authors =  							this.get('controllers.application.orderDetails.book.authors');
          isbn_issn =  							this.get('controllers.application.orderDetails.book.isbn');
          publication_year =  					this.get('controllers.application.orderDetails.book.publicationYear');
          photocopies_if_loan_not_possible =  	this.get('controllers.application.orderDetails.book.outsideNordics');
          order_outside_scandinavia =  			this.get('controllers.application.orderDetails.book.allowCopy');
          not_valid_after =						this.get('controllers.application.orderDetails.book.notValidAfter');
          comment =								this.get('controllers.application.orderDetails.book.comment');
		  break;
		default:
		  break;
	  };	
      var that = this;

      Ember.$.ajax({
        type: 'POST',
        url: ENV.APP.serviceURL + '/orders',
        data: JSON.stringify({
          order_type_id: 						orderType.id,
          customer_type: 						this.get('controllers.application.selectedCustomerType.identifier'),
          form_library: 						this.get('controllers.application.selectedLocation.identifier'), // Change?
    		  email_confirmation:      			 	true,
          title: 								title,
          journal_title: 						journal_title,
          authors: 								authors,
          isbn_issn: 							isbn_issn,
          publication_year: 					publication_year,
          volume: 								volume,
          issue: 								issue,
          pages: 								pages,
          not_valid_after: 						not_valid_after,
          comment: 								comment,
          photocopies_if_loan_not_possible: 	photocopies_if_loan_not_possible,
          order_outside_scandinavia: 			order_outside_scandinavia,

		  name: 								this.get('controllers.application.customerDetails.name'),
		  email_address: 						this.get('controllers.application.customerDetails.emailAddress'),
		  phone_number: 						this.get('controllers.application.customerDetails.phoneNumber'),
		  company1: 							this.get('controllers.application.customerDetails.organisation'),
		  company2: 							this.get('controllers.application.customerDetails.department'),
		  company3: 							this.get('controllers.application.customerDetails.institution'),
		  library_card_number: 					this.get('controllers.application.customerDetails.libraryCardNumber'),
//TBD		  x_account: 							this.get('controllers.application.customerDetails.xAccount'), 


//TBD		  delivery_company: 					this.get('controllers.application.deliveryDetails.company'),
//TBD		  delivery_name: 						this.get('controllers.application.deliveryDetails.name'),
//TBD		  delivery_address: 					this.get('controllers.application.deliveryDetails.address'),
//TBD		  delivery_postal_code: 				this.get('controllers.application.deliveryDetails.postalCode'),
//TBD		  delivery_city: 						this.get('controllers.application.deliveryDetails.city'),


		  invoicing_name: 							this.get('controllers.application.invoicingDetails.name'),
//TBD		  invoicing_company: 						this.get('controllers.application.invoicingDetails.company'),
		  invoicing_address: 						this.get('controllers.application.invoicingDetails.address'),
		  invoicing_postal_address1: 				this.get('controllers.application.invoicingDetails.postalCode'),
		  invoicing_postal_address2:				this.get('controllers.application.invoicingDetails.city'),
		  invoicing_id: 							this.get('controllers.application.invoicingDetails.customerId')
        }),
        contentType: 'application/json',
        dataType: 'json'
      }).then(function(response) {          
      	console.log(response);
      	var orderNumber = response.order.order_number;
      	console.log(orderNumber);
        console.log(that.getLocale());
        that.transitionToRoute('home.step5', orderNumber);

      },
      function(error) {
        console.log(error);
      });
    }
  }
});
