webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(46);


/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(2);
	var Select = __webpack_require__(3);
	var Option = Select.Option;
	var OptGroup = Select.OptGroup;
	
	__webpack_require__(32);
	var pkg = __webpack_require__(36);
	
	function handleChange(value) {
	  console.log('selected ' + value);
	}
	
	var c1 = React.createElement(
	  'div',
	  null,
	  React.createElement(
	    'h1',
	    null,
	    pkg.name,
	    '@',
	    pkg.version
	  ),
	  React.createElement(
	    'h2',
	    null,
	    'Select OptGroup'
	  ),
	  React.createElement(
	    'div',
	    { style: { width: 300 } },
	    React.createElement(
	      Select,
	      { value: 'lucy',
	        showSearch: false,
	        style: { width: 250 }, onChange: handleChange },
	      React.createElement(
	        OptGroup,
	        { label: 'manager' },
	        React.createElement(
	          Option,
	          { value: 'jack' },
	          React.createElement(
	            'b',
	            { style: {
	                color: 'red'
	              } },
	            'jack'
	          )
	        ),
	        React.createElement(
	          Option,
	          { value: 'lucy' },
	          'lucy'
	        )
	      ),
	      React.createElement(
	        OptGroup,
	        { label: 'engineer' },
	        React.createElement(
	          Option,
	          { value: 'yiminghe' },
	          'yiminghe'
	        )
	      )
	    )
	  )
	);
	
	React.render(c1, document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=optgroup.js.map