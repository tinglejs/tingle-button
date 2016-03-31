/**
 * Button Component Demo for tingle
 * @author zhangyang
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
require('tingle-context');
window.FastClick && FastClick.attach(document.body);
var Demo = require('./ButtonDemo');
ReactDOM.render(<Demo/>, document.getElementById('TingleDemo'));
