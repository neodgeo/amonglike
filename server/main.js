import { Meteor } from 'meteor/meteor';
import { pecheColorData } from '../import/api/pecheColor';
import { fraiseColorData } from '../import/api/fraiseColor';
import { pecheColorData2 } from '../import/api/pecheColor2';
import { fraiseColorData2 } from '../import/api/fraiseColor2';


Meteor.startup(() => {

  pecheColorData.remove({})
  fraiseColorData.remove({})
  pecheColorData2.remove({})
  fraiseColorData2.remove({})

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
      darkpurple:'refraction1_400nm.gif',
      purple:'refraction1_425nm.gif',
      blue:'refraction1_470nm.gif',
      turquoise:'refraction1_490nm.gif',
      green:'refraction1_550nm.gif',
      yellow:'refraction1_600nm.gif',
      orange:'refraction1_630nm.gif',
      red:'refraction1_665nm.gif',
      darkred:'refraction1_700nm.gif'
    })
  }

  if (pecheColorData2.find().fetch() == 0) {
    pecheColorData2.insert({
      activeColor:'camOn',
      camOn:'refraction2-cam-on.gif',
      camOff:'refraction2-cam-off.gif'
    })
  }

  if (fraiseColorData2.find().fetch() == 0) {
    fraiseColorData2.insert({
      activeColor:'camOn',
      camOn:'mirage2-cam-on.gif',
      camOff:'mirage2-cam-off.gif'
    })
  }

});
