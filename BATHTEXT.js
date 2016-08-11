 /**
 * @name BAHTTEXT.js
 * @version 1.0.2
 * @update July 17, 2014
 * @author Earthchie http://www.earthchie.com/
 * @license WTFPL v.2 - http://www.wtfpl.net/
 **/
function BAHTTEXT(num, suffix) {
	num = num.toString().replace(/[, ]/g, ''); // remove commas, spaces
	if (isNaN(num) || parseFloat(num) == 0) {
		return 'ศูนย์บาทถ้วน';
	} else {
		var t = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน'];
		var n = ['', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า'];

		suffix = suffix ? suffix : 'บาทถ้วน';
		if (num.indexOf('.') > -1) { // have decimal

			var parts = num.toString().split('.');

			// precision-hack; more accurate than parseFloat the whole number
			parts[1] = parseFloat('0.' + parts[1]).toFixed(2).toString().split('.')[1];

			var text = parseInt(parts[0]) ? BAHTTEXT(parts[0]) : '';

			if (parseInt(parts[1]) > 0) {
				text = text.replace('ถ้วน', '') + BAHTTEXT(parts[1], 'สตางค์');
			}

			return text;

		} else {
			if (num.length > 7) { // more than (or equal to) 10 millions

				var overflow = num.substring(0, num.length - 6);
				var remains = num.slice(-6);
				return BAHTTEXT(overflow).replace('บาทถ้วน', 'ล้าน') + BAHTTEXT(remains).replace('ศูนย์', '');

			} else {

				var text = "";

				for (var i = 0; i < num.length; i++) {
					if (parseInt(num.charAt(i)) > 0) {
						if (num.length > 2 && i == num.length - 1 && num.charAt(i) == 1 && suffix != 'สตางค์') {
							text += 'เอ็ด' + t[num.length - 1 - i];
						} else {
							text += n[num.charAt(i)] + t[num.length - 1 - i];
						}
					}
				}

				// grammar correction
				text = text.replace('หนึ่งสิบ', 'สิบ');
				text = text.replace('สองสิบ', 'ยี่สิบ');
				text = text.replace('สิบหนึ่ง', 'สิบเอ็ด');

				return text + suffix;
			}
		}
	}
}
