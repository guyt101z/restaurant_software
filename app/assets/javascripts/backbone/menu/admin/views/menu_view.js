(function (){

  window.RS.Views.AdminMenuView = Backbone.View.extend({
    className: 'tab-pane active',
    id: 'menu',

    template: JST['backbone/menu/admin/templates/menu_template'],

    initialize: function() {
      
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }

  });

})();