import { n, s as t } from './vendor-02401848.js';
const e = [];
function s(s, o = n) {
	let c;
	const l = [];
	function r(n) {
		if (t(s, n) && ((s = n), c)) {
			const n = !e.length;
			for (let t = 0; t < l.length; t += 1) {
				const n = l[t];
				n[1](), e.push(n, s);
			}
			if (n) {
				for (let n = 0; n < e.length; n += 2) e[n][0](e[n + 1]);
				e.length = 0;
			}
		}
	}
	return {
		set: r,
		update: function (n) {
			r(n(s));
		},
		subscribe: function (t, e = n) {
			const u = [t, e];
			return (
				l.push(u),
				1 === l.length && (c = o(r) || n),
				t(s),
				() => {
					const n = l.indexOf(u);
					-1 !== n && l.splice(n, 1), 0 === l.length && (c(), (c = null));
				}
			);
		}
	};
}
export { s as w };
