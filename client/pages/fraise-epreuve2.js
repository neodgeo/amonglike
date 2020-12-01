import './fraise-epreuve2.html'
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { fraiseColorData2 } from '../../import/api/fraiseColor2'
import { pecheColorData2 } from '../../import/api/pecheColor2'
import { Tracker } from 'meteor/tracker'
import { Meteor } from 'meteor/meteor'


Template.fraiseEpreuve2.onCreated(function(){


    this.fraise2Id = new ReactiveVar(false)
    this.peche2Id = new ReactiveVar(false)
});


Template.fraiseEpreuve2.onRendered(function(){
    var instance = Template.instance();

    this.autorun(function(){
        if((pecheColorData2.find().fetch().length > 0) && (fraiseColorData2.find().fetch().length > 0) && !instance.fraise2Id.get()){
            var peche2Id = pecheColorData2.findOne()._id
            var fraise2Id = fraiseColorData2.findOne()._id
            instance.fraise2Id.set(fraise2Id)
            instance.peche2Id.set(peche2Id)
            pecheColorData2.update({_id:peche2Id},{$set:{activeColor:'camOn'}})
            fraiseColorData2.update({_id:fraise2Id},{$set:{activeColor:'camOn'}})
        }
    })
})

Template.fraiseEpreuve2.events({

    'click #camSwitch': function (event, template) {
      if (input.value == 'johnpendry'){
        event.preventDefault();
        var instance = Template.instance();
        pecheColorData2.update({_id:instance.peche2Id.get()},{$set:{activeColor:'camOff'}})
        fraiseColorData2.update({_id:instance.fraise2Id.get()},{$set:{activeColor:'camOff'}})
      } else {
        alert('Mot de passe incorrect !')
      }
    },
})

Template.fraiseEpreuve2.destroyed = function(){

};

Template.fraiseEpreuve2.helpers({
    imageScene: function(){
        var fraiseColor2 = fraiseColorData2.findOne({_id:Template.instance().fraise2Id.get()})
        return fraiseColor2[fraiseColor2.activeColor]
    }
});
