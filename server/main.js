import { Meteor } from 'meteor/meteor';
import { pecheColorData } from '../import/api/pecheColor';
import { fraiseColorData } from '../import/api/fraiseColor';


Meteor.startup(() => {

  pecheColorData.remove({})
  fraiseColorData.remove({})

  if (fraiseColorData.find().fetch() == 0) {
    fraiseColorData.insert({
      activeColor:'red',
      darkpurple:'mirage1_400nm.gif',
      purple:'mirage1_425nm.gif',
      blue:'mirage1_470nm.gif',
      turquoise:'mirage1_490nm.gif',
      green:'mirage1_550nm.gif',
      yellow:'mirage1_600nm.gif',
      orange:'mirage1_630nm.gif',
      red:'mirage1_665nm.gif',
      darkred:'mirage1_700nm.gif'
    })
  }

  if (pecheColorData.find().fetch() == 0) {
    pecheColorData.insert({
      activeColor:'red',
      darkpurple:'salle_1_jaune.gif',
      purple:'salle_1_jaune.gif',
      blue:'salle_1_jaune.gif',
      turquoise:'salle_1_jaune.gif',
      green:'salle_1_jaune.gif',
      yellow:'salle_1_jaune.gif',
      orange:'salle_1_jaune.gif',
      red:'salle_1_rouge.gif',
      darkred:'salle_1_jaune.gif'
    })
  }

});
