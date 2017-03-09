import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.header.events({
    'click #demo': function () {
        console.log("You click me!");
    },
    'submit form': function (event) {
        event.preventDefault();
        console.log("A message was entered: " + event.target.addMessage.value);
    },
});

Template.main.helpers({
    message: "I'm a MESSAGE!"
});






