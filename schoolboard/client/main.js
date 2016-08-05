import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

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
					
						
		}
	});


$(document).ready(function(){
	$(".button-collapse").sideNav(
		);
	$('.modal-trigger').leanModal();
	$('select').material_select();
});

