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

publicRoutes.route("/pecheEpreuve2", {
  action: function() {
    BlazeLayout.render("blankLayout", { content: "pecheEpreuve2" });
  }
});

publicRoutes.route("/pecheEpreuve3", {
  action: function() {
    BlazeLayout.render("blankLayout", { content: "pecheEpreuve3" });
  }
});

publicRoutes.route("/pecheEpreuve3b", {
  action: function() {
    BlazeLayout.render("blankLayout", { content: "pecheEpreuve3b" });
  }
});

publicRoutes.route("/fraiseEpreuve1", {
  action: function() {
    BlazeLayout.render("blankLayout", { content: "fraiseEpreuve1" });
  }
});

publicRoutes.route("/fraiseEpreuve2", {
    action: function() {
      BlazeLayout.render("blankLayout", { content: "fraiseEpreuve2" });
    }
});

publicRoutes.route("/teams", {
  action: function() {
    BlazeLayout.render("blankLayout", { content: "teams" });
  }
});

publicRoutes.route("/labo", {
  action: function() {
    BlazeLayout.render("blankLayout", { content: "labo" });
  }
});


publicRoutes.route("/news", {
  action: function() {
    BlazeLayout.render("blankLayout", { content: "news" });
  }
});