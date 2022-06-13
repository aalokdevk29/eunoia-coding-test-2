let pageList = [];
let pageNames = [];
let historyStack = [];
let USER = null;

function include(page) {
	console.log("include", page, pageNames);
	pageNames.push(page);
	$("<script/>").attr("src", "js/" + page + ".js").appendTo(document.head);
}

function preload(page, done) {
	console.log("preload", page);
	$.get(page, function (html) {
		$(html).appendTo(document.body);
		done();
	});
}

function asyncForEach(list, fn, doneFn) {
	console.log("asyncForEach", list);
	if (!list || list.length === 0) {
		doneFn();
		return;
	}

	let i = 0;

	function next() {
		i++;
		if (i < list.length)
			fn(list[i], next);
		else
			doneFn();
	}

	fn(list[i], next);
}

function _alert(msg, callback) {
	console.log("_alert", msg);
	$.alert({
		content: msg,
		title: "Eunoia",
		onClose: callback ? callback : function () {
		}
	});
}

function _confirm(msg, callbackYes, callbackNo) {
	console.log("_confirm", msg);
	$.confirm({
		title: "Eunoia",
		content: msg,
		buttons: {
			yes: callbackYes,
			no: callbackNo ? callbackNo : function () {
			}
		}
	});
}

function goBack() {
	console.log("goBack", historyStack);
	historyStack.pop();
	showPage(_.last(historyStack).pageName, false);
}

function isTrue(val) {
	return val === "true" || val === true;
}

function isFalse(val) {
	return !isTrue(val);
}

function showPage(pageName) {
	let pushToStack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	let removeLastStack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	console.log("showPage", pageName, arguments, pushToStack, removeLastStack);

	pageList.forEach(function (it) {
		if(it){
			it.isCurrent = false;
		}
	});

	var page = eval(pageName);
	page.isCurrent = true;

	if (removeLastStack) {
		historyStack.pop();
	}

	if (pushToStack) {
		historyStack.push({ pageName: pageName });
		history.pushState({ pageName: pageName }, pageName, "");
	}

	//history.pushState(null, null, pageName);
}

