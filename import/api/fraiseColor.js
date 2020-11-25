import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';


import SimpleSchema from 'simpl-schema';

const fraiseColorData = new Mongo.Collection('fraiseColorData')

const fraiseColorSchema = new SimpleSchema({
        activeColor:{
            type:String,
            label:"which color is activated",
            allowedValues:['red','yellow']
        },
        red:{
            type:String,
            label:"red image",
        },
        yellow:{
            type:String,
            label:"yellow image"
        }
})

fraiseColorData.attachSchema(fraiseColorSchema)

export {
    fraiseColorData,
}