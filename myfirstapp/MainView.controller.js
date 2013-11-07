sap.ui.controller("myfirstapp.MainView", {

	onInit: function() {
		var model = sap.ui.model.odata.ODataModel("http://services.odata.org/Northwind/Northwind.svc");
		sap.ui.getCore().setModel(model);
	}

});