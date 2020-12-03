import './fraise-epreuve3.html'
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { fraiseColorData3 } from '../../import/api/fraiseColor3'
import { Tracker } from 'meteor/tracker'
import { Meteor } from 'meteor/meteor'

Template.fraiseEpreuve3.onCreated(function(){

    this.fraise3Id = new ReactiveVar(false)
});


Template.fraiseEpreuve3.rendered = function(){

    var instance = Template.instance();

    this.autorun(function(){
        if((fraiseColorData3.find().fetch().length > 0) && !instance.fraise3Id.get()){
            var fraise3Id = fraiseColorData3.findOne()._id
            instance.fraise3Id.set(fraise3Id)
        }
    })
}

Template.fraiseEpreuve3.destroyed = function(){

};

Template.fraiseEpreuve3.helpers({
  imageScene: function(){
    var fraiseColor3 = fraiseColorData3.findOne({_id:Template.instance().fraise3Id.get()})
    if (!fraiseColor3){
      return 'epreuve3-f1.jpg'
    } else {
      return fraiseColor3[fraiseColor3.activeColor]
    }
  }
});
