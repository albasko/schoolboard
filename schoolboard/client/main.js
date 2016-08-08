import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//
//router configuration
//

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function() {
  		this.layout('ApplicationLayout');
  		
  		this.render('homework_list',{
    		to: "part1"
  		});
  		this.render('event_list',{
    		to: "part2"
  		});

  		//alert(Router.current().url);
	});
Router.route('/add_homework', function() {
  		//alert(Router.current().url);
  		
  		this.render('homework_form',{
    		to: "part1"
  		});
  		this.render('footer',{
    		to: "part2"
  		});
  		
	});

Router.route('/add_event', function() {
  		//alert(Router.current().url);
  		
  		this.render('event_add_form',{
    		to: "part1"
  		});
  		this.render('footer',{
    		to: "part2"
  		});
  		
	});


// infiniscroll


Template.homework_list.helpers({
	homework: function(){
		return Homework.find({});
	}
});
Template.homework_item.helpers({
	homework: function(){
		return Homework.find({});
	},
	modal_id: function(){
		var homework_id = this._id;
	   	var homework = Homework.findOne(homework_id);
	   	console.log("id is");
	   	console.log(homework_id);
	   	return homework_id;
	}
});

Template.event_list.helpers({
	events: function(){
		return Events.find({});
	}
});
Template.event_item.helpers({
	events: function(){
		return Events.find({});
	},
	event_id: function(){
		var event_id = this._id;
	   	var events = Events.findOne(event_id);
	   	console.log("id is");
	   	console.log(event_id);
	   	return event_id;
	}
});
/////
	// template events 
/////

Template.homework_item.events({
	"click .js-modal":function(event){
		console.log("modal clicked");
		var modal_id = this._id;
		console.log(modal_id);
		$('#'+ modal_id).openModal();
	} 
})

Template.homework_form.events({
		
		"submit .js-submit-homework":function(event){

			var due_date = event.target.due_date.value;
			var homework_title = event.target.homework_title.value;
			var description = event.target.description.value;
			var comments = event.target.comments.value;
			var subject = event.target.subject.value;
			// var user = Meteor.user();
			Homework.insert({
				due_date: due_date,
				homework_title: homework_title,
				description: description,
				comments: comments,
				subject:  subject
				});
			console.log("inserted");
			
			event.preventDefault();
			Router.go('/');
			//alert("aaa"); 
			//window.location.href = '/';
			}
		
	});

Template.homework_form.onRendered(function(){
	$('select').material_select();
})
Template.event_item.events({
	"click .js-modal":function(event){
		console.log("modal clicked");
		var event_id = this._id;
		console.log(event_id);
		$('#'+ event_id).openModal();
	} 
})

Template.event_add_form.events({
		"submit .js-submit-event":function(event){

			var start_date = event.target.start_date.value;
			var start_time = event.target.start_time.value;
			var end_date = event.target.end_date.value;
			var end_time = event.target.end_time.value;
			var event_title = event.target.event_title.value;
			var event_description = event.target.event_description.value;
			var event_address = event.target.event_address.value;
			
			Events.insert({
				event_title:event_title, 
            	start_date:start_date, 
            	start_time: start_time,
            	end_date:end_date, 
            	end_time: end_time,
            	event_description: event_description,
            	event_address: event_address
				});
			
			event.preventDefault();
			Router.go('/');
			console.log("inserted");
		}
		// "click .js-toggle-event-form":function(event){
		// 	$("#event-form").toggle('slow');
		// }
	});

// Template.calendar_add_form.rendered=function() {
// 	$('.datepicker').pickadate();
// 	$('.timepicker').pickatime();

// }

$(document).ready(function(){
	$(".button-collapse").sideNav(
		);
	$('.modal-trigger').leanModal();
	
});

