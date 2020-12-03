import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


import SimpleSchema from 'simpl-schema';

const pecheColorData3 = new Mongo.Collection('pecheColorData3')

const pecheColorSchema3 = new SimpleSchema({
  activeColor:{
      type:String,
      label:"which step is activated",
      allowedValues:['epreuve3f1','epreuve3f2', 'epreuve3f3', 'epreuve3f4']
  },
  epreuve3f1:{
      type:String,
      label:"step 1"
  },
  epreuve3f2:{
      type:String,
      label:"step 2"
  },
  epreuve3f3:{
      type:String,
      label:"step 3"
  },
  epreuve3f4:{
      type:String,
      label:"step 4"
  },
})

pecheColorData3.attachSchema(pecheColorSchema3)

export {
    pecheColorData3,
}