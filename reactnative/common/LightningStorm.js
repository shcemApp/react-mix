var window = window || new Function('return this')();
window.isNative = true;
if(window.document) {
	isNative = false;
}

import './String';
import './Date';



//

window.DOMTREE_BYID = {};
window.DOMTREE_BYCLASS = {};
//并入定时器api，为componentWillUnMount做准备
window.TimerMixin = require('./TimerMixin');


if(isNative) {
	window.React = require('react-native');
	window.requireNativeComponent = React.requireNativeComponent;
	window.Dimensions = require('Dimensions');
	window.PixelRatio = require('PixelRatio');
	/**
	 * 创建全局通用的dom树和css树
	 */
	var StyleSheet = require('./StyleSheet');
	window.STYLESHEET = new StyleSheet();
	//
	window.Element = require('./rn/Element');
	window.Text = React.Text;
	window.View = React.View;
	window.StyleSheet = React.StyleSheet;
	window.Image = React.Image;
	window.TouchableOpacity = React.TouchableOpacity;
	window.TouchableWithoutFeedback = React.TouchableWithoutFeedback;
	window.TextInput = React.TextInput;
	window.Input = require('./rn/Input');
	window.Div = require('./rn/Div');
	window.Body = require('./rn/Body');
	window.Span = require('./rn/Span');
	window.Img = require('./rn/Img');
	window.Button = require('./rn/Button');
	window.Tab = require('./rn/Tab');
	window.TabItem = require('./rn/TabItem'); 
	window.A = require('./rn/A');
	window.Nav = require('./rn/Nav');
	window.Navigator = React.Navigator;
	//window.NavBar = require('react-native-navbar');
	
	window.ListView = React.ListView;
	window.SimpleListView = require('./rn/SimpleListView');

	//
	window.ScrollView = React.ScrollView;
	//
	window.localStorage = require('AsyncStorage');
	window.StateStore = require('./StateStore');
}else{
	//这里是ui.js
	window.StateStore = require('./StateStore');
}

/**
 * 全局加载css的函数方法
 */
window.includeCSS = (o) => {
	return STYLESHEET.includeCSS(o);
}

window.TemplateFill = function(template, source){
	var newT = {};
	for(var k in template){
		newT[k] = source[k] || null;
	}
	return newT;
}


//UI Component
if(isNative){
	window.Header = require('../common/rn/Header');
	window.RightSliderMenu = require('../common/rn/RightSliderMenu');
	window.Carousel = require('../common/rn/Carousel');
}



/**
** $选择符
**/
window.$ = function(selector){
	if(/^#(.+)/.test(selector)){
		return DOMTREE_BYID[selector.match(/^#(.+)/)[1]];
	}else if(/^\.(.+)/.test(selector)){
		return DOMTREE_BYCLASS[selector.match(/^\.(.+)/)[1]];
	}
	return null;
}
