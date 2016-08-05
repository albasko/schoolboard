import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (!Homework.findOne()){
    	console.log("No homework yet yet. Creating starter data.");
    	  Homework.insert({
    		homework_title:"First homework to do", 
    		due_date:"12/12/16", 
    		subject: "math",
    		description: "page 3-5",
    		comments: "work hard!"
    		 });
    	Homework.insert({
    		homework_title:"Second homework to do", 
    		due_date:"12/13/16", 
    		subject: "Social study",
    		description: "page 3-5",
    		comments: "work harder!"
    		 });
    	Homework.insert({
    		homework_title:"Third homework to do", 
    		due_date:"12/14/16", 
    		subject: "English Language Arts",
    		description: "page 3-5",
    		comments: "Harder! Harder!"
    		 });
    }
    console.log(Homework.findOne());
});
