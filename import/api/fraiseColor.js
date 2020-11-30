import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


import SimpleSchema from 'simpl-schema';

const fraiseColorData = new Mongo.Collection('fraiseColorData')

const fraiseColorSchema = new SimpleSchema({
        activeColor:{
            type:String,
            label:"which color is activated",
            allowedValues:['darkpurple','purple','blue','turquoise','green','orange','yellow','red','darkred']
        },
        darkpurple:{
            type:String,
            label:"darkpurple image"
        },
        purple:{
            type:String,
            label:"purple image"
        },
        blue:{
            type:String,
            label:"blue image"
        },
        turquoise:{
            type:String,
            label:"turquoise image"
        },
        green:{
            type:String,
            label:"green image"
        },
        orange:{
            type:String,
            label:"orange image"
        },
        yellow:{
            type:String,
            label:"yellow image"
        },
        orange:{
          type:String,
          label:"orange image",
        },
        red:{
          type:String,
          label:"red image",
        },
        darkred:{
          type:String,
          label:"darkred image",
        },
})

fraiseColorData.attachSchema(fraiseColorSchema)

export {
    fraiseColorData,
}