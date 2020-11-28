import './fraise-epreuve1.html'
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { fraiseColorData } from '../../import/api/fraiseColor'
import { pecheColorData } from '../../import/api/pecheColor'
import { Tracker } from 'meteor/tracker'
import { Meteor } from 'meteor/meteor'


Template.fraiseEpreuve1.onCreated(function(){


    this.fraiseId = new ReactiveVar(false)
    this.pecheId = new ReactiveVar(false)
});


Template.fraiseEpreuve1.onRendered(function(){
    var instance = Template.instance();

    this.autorun(function(){
        if((pecheColorData.find().fetch().length > 0) && (fraiseColorData.find().fetch().length > 0) && !instance.fraiseId.get()){
            var pecheId = pecheColorData.findOne()._id
            var fraiseId = fraiseColorData.findOne()._id
            instance.fraiseId.set(fraiseId)
            instance.pecheId.set(pecheId)
            pecheColorData.update({_id:pecheId},{$set:{activeColor:'red'}})
            fraiseColorData.update({_id:fraiseId},{$set:{activeColor:'red'}})
        }
    })
})

Template.fraiseEpreuve1.events({
    'click #scenef1': function (event, template) {
        var instance = Template.instance();
        if (pecheColorData.find().fetch()[0].activeColor == 'red'){
          pecheColorData.update({_id:instance.pecheId.get()},{$set:{activeColor:'yellow'}})
          fraiseColorData.update({_id:instance.fraiseId.get()},{$set:{activeColor:'yellow'}})
          console.log('red to yellow')
        } else if (pecheColorData.find().fetch()[0].activeColor == 'yellow'){
          pecheColorData.update({_id:instance.pecheId.get()},{$set:{activeColor:'red'}})
          fraiseColorData.update({_id:instance.fraiseId.get()},{$set:{activeColor:'red'}})
          console.log('yellow to red')
        } else {
          console.log('?')
        }
        var perso = document.querySelector('#persof1');

        // perso.src = "img/persomove.png";
        // perso.style.marginLeft = "240px"

      },
})

Template.fraiseEpreuve1.destroyed = function(){

};

Template.fraiseEpreuve1.helpers({
    imageScene: function(){
        var fraiseColor = fraiseColorData.findOne({_id:Template.instance().fraiseId.get()})
        return fraiseColor[fraiseColor.activeColor]
    }
});
