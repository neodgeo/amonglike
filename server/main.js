import { Meteor } from 'meteor/meteor';
import { pecheColorData } from '../import/api/pecheColor';
import { fraiseColorData } from '../import/api/fraiseColor';


Meteor.startup(() => {

  if (fraiseColorData.find().fetch() == 0) {
    fraiseColorData.insert({
      activeColor:'red',
      red:'scenef1.jpg',
      yellow:'scenef1b.jpg'
    })
  }

  if (pecheColorData.find().fetch() == 0) {
    pecheColorData.insert({
      activeColor:'red',
      red:'scenep1.jpg',
      yellow:'scenep1b.jpg'
    })
  }

});

