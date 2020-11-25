import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


var publicRoutes = FlowRouter.group({
    name: "public"
});


publicRoutes.route("/pecheEpreuve1", {
    action: function() {
      BlazeLayout.render("blankLayout", { content: "pecheEpreuve1" });
    }
});

publicRoutes.route("/fraiseEpreuve1", {
    action: function() {
      BlazeLayout.render("blankLayout", { content: "fraiseEpreuve1" });
    }
});