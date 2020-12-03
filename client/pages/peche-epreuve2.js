import './peche-epreuve2.html'
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { pecheColorData2 } from '../../import/api/pecheColor2'
import { Tracker } from 'meteor/tracker'
import { Meteor } from 'meteor/meteor'

Template.pecheEpreuve2.onCreated(function(){

    this.peche2Id = new ReactiveVar(false)
});


Template.pecheEpreuve2.rendered = function(){

    var instance = Template.instance();

    this.autorun(function(){
        if((pecheColorData2.find().fetch().length > 0) && !instance.peche2Id.get()){
            var peche2Id = pecheColorData2.findOne()._id
            instance.peche2Id.set(peche2Id)
        }
    })
}

Template.pecheEpreuve2.destroyed = function(){

};

Template.pecheEpreuve2.helpers({
  imageScene: function(){
    var pecheColor2 = pecheColorData2.findOne({_id:Template.instance().peche2Id.get()})
    if (!pecheColor2){
      return 'refraction2-cam-on.gif'
    } else {
      return pecheColor2[pecheColor2.activeColor]
    }
  }
});
