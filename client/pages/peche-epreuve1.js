import './peche-epreuve1.html'
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { pecheColorData } from '../../import/api/pecheColor'
import { Tracker } from 'meteor/tracker'
import { Meteor } from 'meteor/meteor'

Template.pecheEpreuve1.onCreated(function(){

    this.pecheId = new ReactiveVar(false)
});


Template.pecheEpreuve1.rendered = function(){

    var instance = Template.instance();

    this.autorun(function(){
        if((pecheColorData.find().fetch().length > 0) && !instance.pecheId.get()){
            var pecheId = pecheColorData.findOne()._id
            instance.pecheId.set(pecheId)
        }
    })
}

Template.pecheEpreuve1.destroyed = function(){

};

Template.pecheEpreuve1.helpers({
    imageScene: function(){
        var pecheColor = pecheColorData.findOne({_id:Template.instance().pecheId.get()})
        return pecheColor[pecheColor.activeColor]

    }
});
