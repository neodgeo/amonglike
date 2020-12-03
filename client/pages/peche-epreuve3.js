import './peche-epreuve3.html'
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { pecheColorData3 } from '../../import/api/pecheColor3'
import { fraiseColorData3 } from '../../import/api/fraiseColor3'
import { Tracker } from 'meteor/tracker'
import { Meteor } from 'meteor/meteor'


Template.pecheEpreuve3.onCreated(function(){


    this.peche3Id = new ReactiveVar(false)
    this.fraise3Id = new ReactiveVar(false)
});


Template.pecheEpreuve3.onRendered(function(){
    var instance = Template.instance();

    this.autorun(function(){
        if((fraiseColorData3.find().fetch().length > 0) && (pecheColorData3.find().fetch().length > 0) && !instance.peche3Id.get()){
            var fraise3Id = fraiseColorData3.findOne()._id
            var peche3Id = pecheColorData3.findOne()._id
            instance.peche3Id.set(peche3Id)
            instance.fraise3Id.set(fraise3Id)
            fraiseColorData3.update({_id:fraise3Id},{$set:{activeColor:'epreuve3f1'}})
            pecheColorData3.update({_id:peche3Id},{$set:{activeColor:'epreuve3f1'}})
        }
    })
})

Template.pecheEpreuve3.events({

    'click #okButton': function (event, template) {
        event.preventDefault();
        var instance = Template.instance();
        fraiseColorData3.update({_id:instance.fraise3Id.get()},{$set:{activeColor:'epreuve3f2'}})
        pecheColorData3.update({_id:instance.peche3Id.get()},{$set:{activeColor:'epreuve3f2'}})
    },

    'click #etabliButton': function (event, template) {
      event.preventDefault();
      var instance = Template.instance();
      fraiseColorData3.update({_id:instance.fraise3Id.get()},{$set:{activeColor:'epreuve3f3'}})
      pecheColorData3.update({_id:instance.peche3Id.get()},{$set:{activeColor:'epreuve3f3'}})
  },


  'click #endButton': function (event, template) {
    event.preventDefault();
    var instance = Template.instance();
    fraiseColorData3.update({_id:instance.fraise3Id.get()},{$set:{activeColor:'epreuve3f4'}})
    pecheColorData3.update({_id:instance.peche3Id.get()},{$set:{activeColor:'epreuve3f4'}})
},
})

Template.pecheEpreuve3.destroyed = function(){

};

Template.pecheEpreuve3.helpers({
    imageScene: function(){
      var pecheColor3 = pecheColorData3.findOne({_id:Template.instance().peche3Id.get()})
      if (!pecheColor3){
        return 'salle3.gif'
      } else {
        return pecheColor3[pecheColor3.activeColor]
      }
    }
});
