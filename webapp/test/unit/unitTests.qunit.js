/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"io/example/app2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});