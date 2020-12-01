import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


import SimpleSchema from 'simpl-schema';

const fraiseColorData2 = new Mongo.Collection('fraiseColorData2')

const fraiseColorSchema2 = new SimpleSchema({
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

fraiseColorData2.attachSchema(fraiseColorSchema2)

export {
    fraiseColorData2,
}