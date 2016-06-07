import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    return this.store.find('meeting', params.id);
  },
  actions: {
		saveNodeSubmission(newNode){
			console.log('conference.js')
	    	var router = this;
	    	newNode.save().then(function(){
	    		router.transitionTo('conference');
	    	});
	    }
	}

});
