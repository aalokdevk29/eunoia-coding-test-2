"use strict";

const Utils = {
	Random: {
		rString: function(max) {
			const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			const charsLength = chars.length;

			let result = "";

			for(let i = 0; i < (max || 32); ++i) {
				result += chars.charAt(Math.floor(Math.random() * charsLength));
			}

			return result;
		}
	}
};