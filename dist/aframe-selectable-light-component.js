/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}

	/**
	 * Selectable Light component for A-Frame.
	 */
	AFRAME.registerComponent('selectable', {
	  schema: { },

	    /**
	     * Called once when component is attached. Generally for initial setup.
	     */
	    init: function () {
	      this.selected = null;
	    },

	    /**
	     * Called when component is attached and when component data changes.
	     * Generally modifies the entity based on the data.
	     */
	    update: function (oldData) {
	      var self = this;

	      this.el.addEventListener('click', function (e) {
	        if (e.target === self.el) {
	          self.select(null);
	          return;
	        }

	        self.select(e.target);
	      });
	    },

	    select: function (entity) {
	      this.selected = entity;

	      var event = new Event('selected');
	      event.selected = this.selected;
	      this.el.dispatchEvent(event);
	    }
	  });


/***/ }
/******/ ]);