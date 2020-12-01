import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


import SimpleSchema from 'simpl-schema';

const pecheColorData2 = new Mongo.Collection('pecheColorData2')

const pecheColorSchema2 = new SimpleSchema({
  activeColor:{
      type:String,
      label:"which color is activated",
      allowedValues:['camOn','camOff']
  },
  camOn:{
      type:String,
      label:"camera on image"
  },
  camOff:{
      type:String,
      label:"camera off image"
  },
})

pecheColorData2.attachSchema(pecheColorSchema2)

export {
    pecheColorData2,
}