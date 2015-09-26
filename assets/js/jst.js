module.exports = function(Handlebars) {

this["Templates"] = this["Templates"] || {};

this["Templates"]["edit-template"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<textarea rows=\"1\" name=\"name\" class=\"todo__name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</textarea><input type=\"text\" name=\"date\" value=\""
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "\" class=\"todo__date\"/><div class=\"todo__completion\"><button type=\"submit\" class=\"todo__button btn\">Save</button></div>";
},"useData":true});

this["Templates"]["form-template"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<textarea name=\"name\" rows=\"2\" placeholder=\"some stuff to do...\" class=\"form__textarea\"></textarea><span class=\"form__datepicker\"><input type=\"text\" name=\"date\" placeholder=\"complete until...\" id=\"datepicker\"/></span><button type=\"submit\" class=\"btn form__button\">Submit</button>";
},"useData":true});

this["Templates"]["todo-template"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "<div class=\"todo__completion\"><div class=\"todo__stamp\"></div></div>";
},"3":function(depth0,helpers,partials,data) {
    return "<div class=\"todo__completion\"><button class=\"todo__button btn\">Done?</button></div>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"todo__name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><div class=\"todo__date\">"
    + alias3(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div>"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["Templates"]["todos-template"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"todos__head\">Total todos: <span>"
    + this.escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"total","hash":{},"data":data}) : helper)))
    + "</span></div><div class=\"todos__list\"></div><div class=\"todos__footer\"></div>";
},"useData":true});

return this["Templates"];

};