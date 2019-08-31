 /*
  * # Semantic UI - 2.3.3
  * https://github.com/Semantic-Org/Semantic-UI
  * http://www.semantic-ui.com/
  *
  * Copyright 2014 Contributors
  * Released under the MIT license
  * http://opensource.org/licenses/MIT
  *
  */
 ! function (e, t, n, i) {
     e.site = e.fn.site = function (o) {
         var a, r, s = (new Date).getTime(),
             l = [],
             c = arguments[0],
             u = "string" == typeof c,
             d = [].slice.call(arguments, 1),
             f = e.isPlainObject(o) ? e.extend(!0, {}, e.site.settings, o) : e.extend({}, e.site.settings),
             m = f.namespace,
             g = f.error,
             p = "module-" + m,
             h = e(n),
             v = this,
             b = h.data(p);
         return a = {
             initialize: function () {
                 a.instantiate()
             },
             instantiate: function () {
                 a.verbose("Storing instance of site", a), b = a, h.data(p, a)
             },
             normalize: function () {
                 a.fix.console(), a.fix.requestAnimationFrame()
             },
             fix: {
                 console: function () {
                     a.debug("Normalizing window.console"), console !== i && console.log !== i || (a.verbose("Console not available, normalizing events"), a.disable.console()), void 0 !== console.group && void 0 !== console.groupEnd && void 0 !== console.groupCollapsed || (a.verbose("Console group not available, normalizing events"), t.console.group = function () {}, t.console.groupEnd = function () {}, t.console.groupCollapsed = function () {}), void 0 === console.markTimeline && (a.verbose("Mark timeline not available, normalizing events"), t.console.markTimeline = function () {})
                 },
                 consoleClear: function () {
                     a.debug("Disabling programmatic console clearing"), t.console.clear = function () {}
                 },
                 requestAnimationFrame: function () {
                     a.debug("Normalizing requestAnimationFrame"), t.requestAnimationFrame === i && (a.debug("RequestAnimationFrame not available, normalizing event"), t.requestAnimationFrame = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                         setTimeout(e, 0)
                     })
                 }
             },
             moduleExists: function (t) {
                 return e.fn[t] !== i && e.fn[t].settings !== i
             },
             enabled: {
                 modules: function (t) {
                     var n = [];
                     return t = t || f.modules, e.each(t, function (e, t) {
                         a.moduleExists(t) && n.push(t)
                     }), n
                 }
             },
             disabled: {
                 modules: function (t) {
                     var n = [];
                     return t = t || f.modules, e.each(t, function (e, t) {
                         a.moduleExists(t) || n.push(t)
                     }), n
                 }
             },
             change: {
                 setting: function (t, n, o, r) {
                     o = "string" == typeof o ? "all" === o ? f.modules : [o] : o || f.modules, r = r === i || r, e.each(o, function (i, o) {
                         var s, l = !a.moduleExists(o) || (e.fn[o].settings.namespace || !1);
                         a.moduleExists(o) && (a.verbose("Changing default setting", t, n, o), e.fn[o].settings[t] = n, r && l && (s = e(":data(module-" + l + ")")).length > 0 && (a.verbose("Modifying existing settings", s), s[o]("setting", t, n)))
                     })
                 },
                 settings: function (t, n, o) {
                     n = "string" == typeof n ? [n] : n || f.modules, o = o === i || o, e.each(n, function (n, i) {
                         var r;
                         a.moduleExists(i) && (a.verbose("Changing default setting", t, i), e.extend(!0, e.fn[i].settings, t), o && m && (r = e(":data(module-" + m + ")")).length > 0 && (a.verbose("Modifying existing settings", r), r[i]("setting", t)))
                     })
                 }
             },
             enable: {
                 console: function () {
                     a.console(!0)
                 },
                 debug: function (e, t) {
                     e = e || f.modules, a.debug("Enabling debug for modules", e), a.change.setting("debug", !0, e, t)
                 },
                 verbose: function (e, t) {
                     e = e || f.modules, a.debug("Enabling verbose debug for modules", e), a.change.setting("verbose", !0, e, t)
                 }
             },
             disable: {
                 console: function () {
                     a.console(!1)
                 },
                 debug: function (e, t) {
                     e = e || f.modules, a.debug("Disabling debug for modules", e), a.change.setting("debug", !1, e, t)
                 },
                 verbose: function (e, t) {
                     e = e || f.modules, a.debug("Disabling verbose debug for modules", e), a.change.setting("verbose", !1, e, t)
                 }
             },
             console: function (e) {
                 if (e) {
                     if (b.cache.console === i) return void a.error(g.console);
                     a.debug("Restoring console function"), t.console = b.cache.console
                 } else a.debug("Disabling console function"), b.cache.console = t.console, t.console = {
                     clear: function () {},
                     error: function () {},
                     group: function () {},
                     groupCollapsed: function () {},
                     groupEnd: function () {},
                     info: function () {},
                     log: function () {},
                     markTimeline: function () {},
                     warn: function () {}
                 }
             },
             destroy: function () {
                 a.verbose("Destroying previous site for", h), h.removeData(p)
             },
             cache: {},
             setting: function (t, n) {
                 if (e.isPlainObject(t)) e.extend(!0, f, t);
                 else {
                     if (n === i) return f[t];
                     f[t] = n
                 }
             },
             internal: function (t, n) {
                 if (e.isPlainObject(t)) e.extend(!0, a, t);
                 else {
                     if (n === i) return a[t];
                     a[t] = n
                 }
             },
             debug: function () {
                 f.debug && (f.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), a.debug.apply(console, arguments)))
             },
             verbose: function () {
                 f.verbose && f.debug && (f.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), a.verbose.apply(console, arguments)))
             },
             error: function () {
                 a.error = Function.prototype.bind.call(console.error, console, f.name + ":"), a.error.apply(console, arguments)
             },
             performance: {
                 log: function (e) {
                     var t, n;
                     f.performance && (n = (t = (new Date).getTime()) - (s || t), s = t, l.push({
                         Element: v,
                         Name: e[0],
                         Arguments: [].slice.call(e, 1) || "",
                         "Execution Time": n
                     })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
                 },
                 display: function () {
                     var t = f.name + ":",
                         n = 0;
                     s = !1, clearTimeout(a.performance.timer), e.each(l, function (e, t) {
                         n += t["Execution Time"]
                     }), t += " " + n + "ms", (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                         console.log(t.Name + ": " + t["Execution Time"] + "ms")
                     }), console.groupEnd()), l = []
                 }
             },
             invoke: function (t, n, o) {
                 var s, l, c, u = b;
                 return n = n || d, o = v || o, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, o) {
                     var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                     if (e.isPlainObject(u[r]) && n != s) u = u[r];
                     else {
                         if (u[r] !== i) return l = u[r], !1;
                         if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (l = u[o], !1) : (a.error(g.method, t), !1);
                         u = u[o]
                     }
                 })), e.isFunction(l) ? c = l.apply(o, n) : l !== i && (c = l), e.isArray(r) ? r.push(c) : r !== i ? r = [r, c] : c !== i && (r = c), l
             }
         }, u ? (b === i && a.initialize(), a.invoke(c)) : (b !== i && a.destroy(), a.initialize()), r !== i ? r : this
     }, e.site.settings = {
         name: "Site",
         namespace: "site",
         error: {
             console: "Console cannot be restored, most likely it was overwritten outside of module",
             method: "The method you called is not defined."
         },
         debug: !1,
         verbose: !1,
         performance: !0,
         modules: ["accordion", "api", "checkbox", "dimmer", "dropdown", "embed", "form", "modal", "nag", "popup", "rating", "shape", "sidebar", "state", "sticky", "tab", "transition", "visit", "visibility"],
         siteNamespace: "site",
         namespaceStub: {
             cache: {},
             config: {},
             sections: {},
             section: {},
             utilities: {}
         }
     }, e.extend(e.expr[":"], {
         data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
             return function (n) {
                 return !!e.data(n, t)
             }
         }) : function (t, n, i) {
             return !!e.data(t, i[3])
         }
     })
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.form = function (t) {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             l = [],
             c = arguments[0],
             u = arguments[1],
             d = "string" == typeof c,
             f = [].slice.call(arguments, 1);
         return a.each(function () {
             var m, g, p, h, v, b, y, x, C, w, S, k, T, A, R, P, E = e(this),
                 F = this,
                 O = [],
                 D = !1;
             (P = {
                 initialize: function () {
                     P.get.settings(), d ? (R === i && P.instantiate(), P.invoke(c)) : (R !== i && R.invoke("destroy"), P.verbose("Initializing form validation", E, v), P.bindEvents(), P.set.defaults(), P.instantiate())
                 },
                 instantiate: function () {
                     P.verbose("Storing instance of module", P), R = P, E.data(T, P)
                 },
                 destroy: function () {
                     P.verbose("Destroying previous module", R), P.removeEvents(), E.removeData(T)
                 },
                 refresh: function () {
                     P.verbose("Refreshing selector cache"), m = E.find(x.field), g = E.find(x.group), p = E.find(x.message), E.find(x.prompt), h = E.find(x.submit), E.find(x.clear), E.find(x.reset)
                 },
                 submit: function () {
                     P.verbose("Submitting form", E), E.submit()
                 },
                 attachEvents: function (t, n) {
                     n = n || "submit", e(t).on("click" + A, function (e) {
                         P[n](), e.preventDefault()
                     })
                 },
                 bindEvents: function () {
                     P.verbose("Attaching form events"), E.on("submit" + A, P.validate.form).on("blur" + A, x.field, P.event.field.blur).on("click" + A, x.submit, P.submit).on("click" + A, x.reset, P.reset).on("click" + A, x.clear, P.clear), v.keyboardShortcuts && E.on("keydown" + A, x.field, P.event.field.keydown), m.each(function () {
                         var t = e(this),
                             n = t.prop("type"),
                             i = P.get.changeEvent(n, t);
                         e(this).on(i + A, P.event.field.change)
                     })
                 },
                 clear: function () {
                     m.each(function () {
                         var t = e(this),
                             n = t.parent(),
                             i = t.closest(g),
                             o = i.find(x.prompt),
                             a = t.data(y.defaultValue) || "",
                             r = n.is(x.uiCheckbox),
                             s = n.is(x.uiDropdown);
                         i.hasClass(C.error) && (P.verbose("Resetting error on field", i), i.removeClass(C.error), o.remove()), s ? (P.verbose("Resetting dropdown value", n, a), n.dropdown("clear")) : r ? t.prop("checked", !1) : (P.verbose("Resetting field value", t, a), t.val(""))
                     })
                 },
                 reset: function () {
                     m.each(function () {
                         var t = e(this),
                             n = t.parent(),
                             o = t.closest(g),
                             a = o.find(x.prompt),
                             r = t.data(y.defaultValue),
                             s = n.is(x.uiCheckbox),
                             l = n.is(x.uiDropdown),
                             c = o.hasClass(C.error);
                         r !== i && (c && (P.verbose("Resetting error on field", o), o.removeClass(C.error), a.remove()), l ? (P.verbose("Resetting dropdown value", n, r), n.dropdown("restore defaults")) : s ? (P.verbose("Resetting checkbox value", n, r), t.prop("checked", r)) : (P.verbose("Resetting field value", t, r), t.val(r)))
                     })
                 },
                 determine: {
                     isValid: function () {
                         var t = !0;
                         return e.each(b, function (e, n) {
                             P.validate.field(n, e, !0) || (t = !1)
                         }), t
                     }
                 },
                 is: {
                     bracketedRule: function (e) {
                         return e.type && e.type.match(v.regExp.bracket)
                     },
                     shorthandFields: function (e) {
                         var t = e[Object.keys(e)[0]];
                         return P.is.shorthandRules(t)
                     },
                     shorthandRules: function (t) {
                         return "string" == typeof t || e.isArray(t)
                     },
                     empty: function (e) {
                         return !e || 0 === e.length || (e.is('input[type="checkbox"]') ? !e.is(":checked") : P.is.blank(e))
                     },
                     blank: function (t) {
                         return "" === e.trim(t.val())
                     },
                     valid: function (t) {
                         var n = !0;
                         return t ? (P.verbose("Checking if field is valid", t), P.validate.field(b[t], t, !1)) : (P.verbose("Checking if form is valid"), e.each(b, function (e, t) {
                             P.is.valid(e) || (n = !1)
                         }), n)
                     }
                 },
                 removeEvents: function () {
                     E.off(A), m.off(A), h.off(A), m.off(A)
                 },
                 event: {
                     field: {
                         keydown: function (t) {
                             var n = e(this),
                                 i = t.which,
                                 o = n.is(x.input),
                                 a = n.is(x.checkbox),
                                 r = n.closest(x.uiDropdown).length > 0,
                                 s = 13;
                             i == 27 && (P.verbose("Escape key pressed blurring field"), n.blur()), t.ctrlKey || i != s || !o || r || a || (D || (n.one("keyup" + A, P.event.field.keyup), P.submit(), P.debug("Enter pressed on input submitting form")), D = !0)
                         },
                         keyup: function () {
                             D = !1
                         },
                         blur: function (t) {
                             var n = e(this),
                                 i = n.closest(g),
                                 o = P.get.validation(n);
                             i.hasClass(C.error) ? (P.debug("Revalidating field", n, o), o && P.validate.field(o)) : "blur" == v.on && o && P.validate.field(o)
                         },
                         change: function (t) {
                             var n = e(this),
                                 i = n.closest(g),
                                 o = P.get.validation(n);
                             o && ("change" == v.on || i.hasClass(C.error) && v.revalidate) && (clearTimeout(P.timer), P.timer = setTimeout(function () {
                                 P.debug("Revalidating field", n, P.get.validation(n)), P.validate.field(o)
                             }, v.delay))
                         }
                     }
                 },
                 get: {
                     ancillaryValue: function (e) {
                         return !(!e.type || !e.value && !P.is.bracketedRule(e)) && (e.value !== i ? e.value : e.type.match(v.regExp.bracket)[1] + "")
                     },
                     ruleName: function (e) {
                         return P.is.bracketedRule(e) ? e.type.replace(e.type.match(v.regExp.bracket)[0], "") : e.type
                     },
                     changeEvent: function (e, t) {
                         return "checkbox" == e || "radio" == e || "hidden" == e || t.is("select") ? "change" : P.get.inputEvent()
                     },
                     inputEvent: function () {
                         return n.createElement("input").oninput !== i ? "input" : n.createElement("input").onpropertychange !== i ? "propertychange" : "keyup"
                     },
                     fieldsFromShorthand: function (t) {
                         var n = {};
                         return e.each(t, function (t, i) {
                             "string" == typeof i && (i = [i]), n[t] = {
                                 rules: []
                             }, e.each(i, function (e, i) {
                                 n[t].rules.push({
                                     type: i
                                 })
                             })
                         }), n
                     },
                     prompt: function (t, n) {
                         var i, o, a = P.get.ruleName(t),
                             r = P.get.ancillaryValue(t),
                             s = P.get.field(n.identifier),
                             l = s.val(),
                             c = e.isFunction(t.prompt) ? t.prompt(l) : t.prompt || v.prompt[a] || v.text.unspecifiedRule,
                             u = -1 !== c.search("{value}"),
                             d = -1 !== c.search("{name}");
                         return u && (c = c.replace("{value}", s.val())), d && (o = 1 == (i = s.closest(x.group).find("label").eq(0)).length ? i.text() : s.prop("placeholder") || v.text.unspecifiedField, c = c.replace("{name}", o)), c = (c = c.replace("{identifier}", n.identifier)).replace("{ruleValue}", r), t.prompt || P.verbose("Using default validation prompt for type", c, a), c
                     },
                     settings: function () {
                         if (e.isPlainObject(t)) {
                             var n = Object.keys(t);
                             n.length > 0 && (t[n[0]].identifier !== i && t[n[0]].rules !== i) ? (v = e.extend(!0, {}, e.fn.form.settings, u), b = e.extend({}, e.fn.form.settings.defaults, t), P.error(v.error.oldSyntax, F), P.verbose("Extending settings from legacy parameters", b, v)) : (t.fields && P.is.shorthandFields(t.fields) && (t.fields = P.get.fieldsFromShorthand(t.fields)), v = e.extend(!0, {}, e.fn.form.settings, t), b = e.extend({}, e.fn.form.settings.defaults, v.fields), P.verbose("Extending settings", b, v))
                         } else v = e.fn.form.settings, b = e.fn.form.settings.defaults, P.verbose("Using default form validation", b, v);
                         k = v.namespace, y = v.metadata, x = v.selector, C = v.className, w = v.regExp, S = v.error, T = "module-" + k, A = "." + k, R = E.data(T), P.refresh()
                     },
                     field: function (t) {
                         return P.verbose("Finding field with identifier", t), t = P.escape.string(t), m.filter("#" + t).length > 0 ? m.filter("#" + t) : m.filter('[name="' + t + '"]').length > 0 ? m.filter('[name="' + t + '"]') : m.filter('[name="' + t + '[]"]').length > 0 ? m.filter('[name="' + t + '[]"]') : m.filter("[data-" + y.validate + '="' + t + '"]').length > 0 ? m.filter("[data-" + y.validate + '="' + t + '"]') : e("<input/>")
                     },
                     fields: function (t) {
                         var n = e();
                         return e.each(t, function (e, t) {
                             n = n.add(P.get.field(t))
                         }), n
                     },
                     validation: function (t) {
                         var n, i;
                         return !!b && (e.each(b, function (e, o) {
                             i = o.identifier || e, P.get.field(i)[0] == t[0] && (o.identifier = i, n = o)
                         }), n || !1)
                     },
                     value: function (e) {
                         var t = [];
                         return t.push(e), P.get.values.call(F, t)[e]
                     },
                     values: function (t) {
                         var n = {};
                         return (e.isArray(t) ? P.get.fields(t) : m).each(function (t, o) {
                             var a = e(o),
                                 r = (a.prop("type"), a.prop("name")),
                                 s = a.val(),
                                 l = a.is(x.checkbox),
                                 c = a.is(x.radio),
                                 u = -1 !== r.indexOf("[]"),
                                 d = !!l && a.is(":checked");
                             r && (u ? (r = r.replace("[]", ""), n[r] || (n[r] = []), l ? d ? n[r].push(s || !0) : n[r].push(!1) : n[r].push(s)) : c ? n[r] !== i && 0 != n[r] || (n[r] = !!d && (s || !0)) : n[r] = l ? !!d && (s || !0) : s)
                         }), n
                     }
                 },
                 has: {
                     field: function (e) {
                         return P.verbose("Checking for existence of a field with identifier", e), "string" != typeof (e = P.escape.string(e)) && P.error(S.identifier, e), m.filter("#" + e).length > 0 || (m.filter('[name="' + e + '"]').length > 0 || m.filter("[data-" + y.validate + '="' + e + '"]').length > 0)
                     }
                 },
                 escape: {
                     string: function (e) {
                         return (e = String(e)).replace(w.escape, "\\$&")
                     }
                 },
                 add: {
                     rule: function (e, t) {
                         P.add.field(e, t)
                     },
                     field: function (t, n) {
                         var i = {};
                         P.is.shorthandRules(n) ? (n = e.isArray(n) ? n : [n], i[t] = {
                             rules: []
                         }, e.each(n, function (e, n) {
                             i[t].rules.push({
                                 type: n
                             })
                         })) : i[t] = n, b = e.extend({}, b, i), P.debug("Adding rules", i, b)
                     },
                     fields: function (t) {
                         var n;
                         n = t && P.is.shorthandFields(t) ? P.get.fieldsFromShorthand(t) : t, b = e.extend({}, b, n)
                     },
                     prompt: function (t, n) {
                         var o = P.get.field(t).closest(g),
                             a = o.children(x.prompt),
                             r = 0 !== a.length;
                         n = "string" == typeof n ? [n] : n, P.verbose("Adding field error state", t), o.addClass(C.error), v.inline && (r || (a = v.templates.prompt(n)).appendTo(o), a.html(n[0]), r ? P.verbose("Inline errors are disabled, no inline error added", t) : v.transition && e.fn.transition !== i && E.transition("is supported") ? (P.verbose("Displaying error with css transition", v.transition), a.transition(v.transition + " in", v.duration)) : (P.verbose("Displaying error with fallback javascript animation"), a.fadeIn(v.duration)))
                     },
                     errors: function (e) {
                         P.debug("Adding form error messages", e), P.set.error(), p.html(v.templates.error(e))
                     }
                 },
                 remove: {
                     rule: function (t, n) {
                         var o = e.isArray(n) ? n : [n];
                         if (n == i) return P.debug("Removed all rules"), void(b[t].rules = []);
                         b[t] != i && e.isArray(b[t].rules) && e.each(b[t].rules, function (e, n) {
                             -1 !== o.indexOf(n.type) && (P.debug("Removed rule", n.type), b[t].rules.splice(e, 1))
                         })
                     },
                     field: function (t) {
                         var n = e.isArray(t) ? t : [t];
                         e.each(n, function (e, t) {
                             P.remove.rule(t)
                         })
                     },
                     rules: function (t, n) {
                         e.isArray(t) ? e.each(fields, function (e, t) {
                             P.remove.rule(t, n)
                         }) : P.remove.rule(t, n)
                     },
                     fields: function (e) {
                         P.remove.field(e)
                     },
                     prompt: function (t) {
                         var n = P.get.field(t).closest(g),
                             o = n.children(x.prompt);
                         n.removeClass(C.error), v.inline && o.is(":visible") && (P.verbose("Removing prompt for field", t), v.transition && e.fn.transition !== i && E.transition("is supported") ? o.transition(v.transition + " out", v.duration, function () {
                             o.remove()
                         }) : o.fadeOut(v.duration, function () {
                             o.remove()
                         }))
                     }
                 },
                 set: {
                     success: function () {
                         E.removeClass(C.error).addClass(C.success)
                     },
                     defaults: function () {
                         m.each(function () {
                             var t = e(this),
                                 n = t.filter(x.checkbox).length > 0 ? t.is(":checked") : t.val();
                             t.data(y.defaultValue, n)
                         })
                     },
                     error: function () {
                         E.removeClass(C.success).addClass(C.error)
                     },
                     value: function (e, t) {
                         var n = {};
                         return n[e] = t, P.set.values.call(F, n)
                     },
                     values: function (t) {
                         e.isEmptyObject(t) || e.each(t, function (t, n) {
                             var i, o = P.get.field(t),
                                 a = o.parent(),
                                 r = e.isArray(n),
                                 s = a.is(x.uiCheckbox),
                                 l = a.is(x.uiDropdown),
                                 c = o.is(x.radio) && s;
                             o.length > 0 && (r && s ? (P.verbose("Selecting multiple", n, o), a.checkbox("uncheck"), e.each(n, function (e, t) {
                                 i = o.filter('[value="' + t + '"]'), a = i.parent(), i.length > 0 && a.checkbox("check")
                             })) : c ? (P.verbose("Selecting radio value", n, o), o.filter('[value="' + n + '"]').parent(x.uiCheckbox).checkbox("check")) : s ? (P.verbose("Setting checkbox value", n, a), !0 === n ? a.checkbox("check") : a.checkbox("uncheck")) : l ? (P.verbose("Setting dropdown value", n, a), a.dropdown("set selected", n)) : (P.verbose("Setting field value", n, o), o.val(n)))
                         })
                     }
                 },
                 validate: {
                     form: function (e, t) {
                         var n = P.get.values();
                         if (D) return !1;
                         if (O = [], P.determine.isValid()) {
                             if (P.debug("Form has no validation errors, submitting"), P.set.success(), !0 !== t) return v.onSuccess.call(F, e, n)
                         } else if (P.debug("Form has errors"), P.set.error(), v.inline || P.add.errors(O), E.data("moduleApi") !== i && e.stopImmediatePropagation(), !0 !== t) return v.onFailure.call(F, O, n)
                     },
                     field: function (t, n, o) {
                         o = o === i || o, "string" == typeof t && (P.verbose("Validating field", t), n = t, t = b[t]);
                         var a = t.identifier || n,
                             r = P.get.field(a),
                             s = !!t.depends && P.get.field(t.depends),
                             l = !0,
                             c = [];
                         return t.identifier || (P.debug("Using field name as identifier", a), t.identifier = a), r.prop("disabled") ? (P.debug("Field is disabled. Skipping", a), l = !0) : t.optional && P.is.blank(r) ? (P.debug("Field is optional and blank. Skipping", a), l = !0) : t.depends && P.is.empty(s) ? (P.debug("Field depends on another value that is not present or empty. Skipping", s), l = !0) : t.rules !== i && e.each(t.rules, function (e, n) {
                             P.has.field(a) && !P.validate.rule(t, n) && (P.debug("Field is invalid", a, n.type), c.push(P.get.prompt(n, t)), l = !1)
                         }), l ? (o && (P.remove.prompt(a, c), v.onValid.call(r)), !0) : (o && (O = O.concat(c), P.add.prompt(a, c), v.onInvalid.call(r, c)), !1)
                     },
                     rule: function (t, n) {
                         var o = P.get.field(t.identifier),
                             a = (n.type, o.val()),
                             r = P.get.ancillaryValue(n),
                             s = P.get.ruleName(n),
                             l = v.rules[s];
                         if (e.isFunction(l)) return a = a === i || "" === a || null === a ? "" : e.trim(a + ""), l.call(o, a, r);
                         P.error(S.noRule, s)
                     }
                 },
                 setting: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, v, t);
                     else {
                         if (n === i) return v[t];
                         v[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, P, t);
                     else {
                         if (n === i) return P[t];
                         P[t] = n
                     }
                 },
                 debug: function () {
                     !v.silent && v.debug && (v.performance ? P.performance.log(arguments) : (P.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), P.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !v.silent && v.verbose && v.debug && (v.performance ? P.performance.log(arguments) : (P.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), P.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     v.silent || (P.error = Function.prototype.bind.call(console.error, console, v.name + ":"), P.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         v.performance && (n = (t = (new Date).getTime()) - (s || t), s = t, l.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: F,
                             "Execution Time": n
                         })), clearTimeout(P.performance.timer), P.performance.timer = setTimeout(P.performance.display, 500)
                     },
                     display: function () {
                         var t = v.name + ":",
                             n = 0;
                         s = !1, clearTimeout(P.performance.timer), e.each(l, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), l = []
                     }
                 },
                 invoke: function (t, n, a) {
                     var r, s, l, c = R;
                     return n = n || f, a = F || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
                 }
             }).initialize()
         }), o !== i ? o : this
     }, e.fn.form.settings = {
         name: "Form",
         namespace: "form",
         debug: !1,
         verbose: !1,
         performance: !0,
         fields: !1,
         keyboardShortcuts: !0,
         on: "submit",
         inline: !1,
         delay: 200,
         revalidate: !0,
         transition: "scale",
         duration: 200,
         onValid: function () {},
         onInvalid: function () {},
         onSuccess: function () {
             return !0
         },
         onFailure: function () {
             return !1
         },
         metadata: {
             defaultValue: "default",
             validate: "validate"
         },
         regExp: {
             htmlID: /^[a-zA-Z][\w:.-]*$/g,
             bracket: /\[(.*)\]/i,
             decimal: /^\d+\.?\d*$/,
             email: /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
             escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
             flags: /^\/(.*)\/(.*)?/,
             integer: /^\-?\d+$/,
             number: /^\-?\d*(\.\d+)?$/,
             url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i
         },
         text: {
             unspecifiedRule: "Please enter a valid value",
             unspecifiedField: "This field"
         },
         prompt: {
             empty: "{name} must have a value",
             checked: "{name} must be checked",
             email: "{name} must be a valid e-mail",
             url: "{name} must be a valid url",
             regExp: "{name} is not formatted correctly",
             integer: "{name} must be an integer",
             decimal: "{name} must be a decimal number",
             number: "{name} must be set to a number",
             is: '{name} must be "{ruleValue}"',
             isExactly: '{name} must be exactly "{ruleValue}"',
             not: '{name} cannot be set to "{ruleValue}"',
             notExactly: '{name} cannot be set to exactly "{ruleValue}"',
             contain: '{name} must contain "{ruleValue}"',
             containExactly: '{name} must contain exactly "{ruleValue}"',
             doesntContain: '{name} cannot contain  "{ruleValue}"',
             doesntContainExactly: '{name} cannot contain exactly "{ruleValue}"',
             minLength: "{name} must be at least {ruleValue} characters",
             length: "{name} must be at least {ruleValue} characters",
             exactLength: "{name} must be exactly {ruleValue} characters",
             maxLength: "{name} cannot be longer than {ruleValue} characters",
             match: "{name} must match {ruleValue} field",
             different: "{name} must have a different value than {ruleValue} field",
             creditCard: "{name} must be a valid credit card number",
             minCount: "{name} must have at least {ruleValue} choices",
             exactCount: "{name} must have exactly {ruleValue} choices",
             maxCount: "{name} must have {ruleValue} or less choices"
         },
         selector: {
             checkbox: 'input[type="checkbox"], input[type="radio"]',
             clear: ".clear",
             field: "input, textarea, select",
             group: ".field",
             input: "input",
             message: ".error.message",
             prompt: ".prompt.label",
             radio: 'input[type="radio"]',
             reset: '.reset:not([type="reset"])',
             submit: '.submit:not([type="submit"])',
             uiCheckbox: ".ui.checkbox",
             uiDropdown: ".ui.dropdown"
         },
         className: {
             error: "error",
             label: "ui prompt label",
             pressed: "down",
             success: "success"
         },
         error: {
             identifier: "You must specify a string identifier for each field",
             method: "The method you called is not defined.",
             noRule: "There is no rule matching the one you specified",
             oldSyntax: "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."
         },
         templates: {
             error: function (t) {
                 var n = '<ul class="list">';
                 return e.each(t, function (e, t) {
                     n += "<li>" + t + "</li>"
                 }), e(n += "</ul>")
             },
             prompt: function (t) {
                 return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0])
             }
         },
         rules: {
             empty: function (t) {
                 return !(t === i || "" === t || e.isArray(t) && 0 === t.length)
             },
             checked: function () {
                 return e(this).filter(":checked").length > 0
             },
             email: function (t) {
                 return e.fn.form.settings.regExp.email.test(t)
             },
             url: function (t) {
                 return e.fn.form.settings.regExp.url.test(t)
             },
             regExp: function (t, n) {
                 if (n instanceof RegExp) return t.match(n);
                 var i, o = n.match(e.fn.form.settings.regExp.flags);
                 return o && (n = o.length >= 2 ? o[1] : n, i = o.length >= 3 ? o[2] : ""), t.match(new RegExp(n, i))
             },
             integer: function (t, n) {
                 var o, a, r, s = e.fn.form.settings.regExp.integer;
                 return n && -1 === ["", ".."].indexOf(n) && (-1 == n.indexOf("..") ? s.test(n) && (o = a = n - 0) : (r = n.split("..", 2), s.test(r[0]) && (o = r[0] - 0), s.test(r[1]) && (a = r[1] - 0))), s.test(t) && (o === i || t >= o) && (a === i || t <= a)
             },
             decimal: function (t) {
                 return e.fn.form.settings.regExp.decimal.test(t)
             },
             number: function (t) {
                 return e.fn.form.settings.regExp.number.test(t)
             },
             is: function (e, t) {
                 return t = "string" == typeof t ? t.toLowerCase() : t, (e = "string" == typeof e ? e.toLowerCase() : e) == t
             },
             isExactly: function (e, t) {
                 return e == t
             },
             not: function (e, t) {
                 return (e = "string" == typeof e ? e.toLowerCase() : e) != (t = "string" == typeof t ? t.toLowerCase() : t)
             },
             notExactly: function (e, t) {
                 return e != t
             },
             contains: function (t, n) {
                 return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n, "i"))
             },
             containsExactly: function (t, n) {
                 return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n))
             },
             doesntContain: function (t, n) {
                 return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n, "i"))
             },
             doesntContainExactly: function (t, n) {
                 return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n))
             },
             minLength: function (e, t) {
                 return e !== i && e.length >= t
             },
             length: function (e, t) {
                 return e !== i && e.length >= t
             },
             exactLength: function (e, t) {
                 return e !== i && e.length == t
             },
             maxLength: function (e, t) {
                 return e !== i && e.length <= t
             },
             match: function (t, n) {
                 var o;
                 e(this);
                 return e('[data-validate="' + n + '"]').length > 0 ? o = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? o = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? o = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (o = e('[name="' + n + '[]"]')), o !== i && t.toString() == o.toString()
             },
             different: function (t, n) {
                 var o;
                 e(this);
                 return e('[data-validate="' + n + '"]').length > 0 ? o = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? o = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? o = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (o = e('[name="' + n + '[]"]')), o !== i && t.toString() !== o.toString()
             },
             creditCard: function (t, n) {
                 var i, o, a = {
                         visa: {
                             pattern: /^4/,
                             length: [16]
                         },
                         amex: {
                             pattern: /^3[47]/,
                             length: [15]
                         },
                         mastercard: {
                             pattern: /^5[1-5]/,
                             length: [16]
                         },
                         discover: {
                             pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
                             length: [16]
                         },
                         unionPay: {
                             pattern: /^(62|88)/,
                             length: [16, 17, 18, 19]
                         },
                         jcb: {
                             pattern: /^35(2[89]|[3-8][0-9])/,
                             length: [16]
                         },
                         maestro: {
                             pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
                             length: [12, 13, 14, 15, 16, 17, 18, 19]
                         },
                         dinersClub: {
                             pattern: /^(30[0-5]|^36)/,
                             length: [14]
                         },
                         laser: {
                             pattern: /^(6304|670[69]|6771)/,
                             length: [16, 17, 18, 19]
                         },
                         visaElectron: {
                             pattern: /^(4026|417500|4508|4844|491(3|7))/,
                             length: [16]
                         }
                     },
                     r = {},
                     s = !1,
                     l = "string" == typeof n && n.split(",");
                 if ("string" == typeof t && 0 !== t.length) {
                     if (t = t.replace(/[\-]/g, ""), l && (e.each(l, function (n, i) {
                             (o = a[i]) && (r = {
                                 length: -1 !== e.inArray(t.length, o.length),
                                 pattern: -1 !== t.search(o.pattern)
                             }).length && r.pattern && (s = !0)
                         }), !s)) return !1;
                     if ((i = {
                             number: -1 !== e.inArray(t.length, a.unionPay.length),
                             pattern: -1 !== t.search(a.unionPay.pattern)
                         }).number && i.pattern) return !0;
                     for (var c = t.length, u = 0, d = [
                             [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                             [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
                         ], f = 0; c--;) f += d[u][parseInt(t.charAt(c), 10)], u ^= 1;
                     return f % 10 == 0 && f > 0
                 }
             },
             minCount: function (e, t) {
                 return 0 == t || (1 == t ? "" !== e : e.split(",").length >= t)
             },
             exactCount: function (e, t) {
                 return 0 == t ? "" === e : 1 == t ? "" !== e && -1 === e.search(",") : e.split(",").length == t
             },
             maxCount: function (e, t) {
                 return 0 != t && (1 == t ? -1 === e.search(",") : e.split(",").length <= t)
             }
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.accordion = function (n) {
         var o, a = e(this),
             r = (new Date).getTime(),
             s = [],
             l = arguments[0],
             c = "string" == typeof l,
             u = [].slice.call(arguments, 1);
         t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;
         return a.each(function () {
             var d, f, m = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.accordion.settings, n) : e.extend({}, e.fn.accordion.settings),
                 g = m.className,
                 p = m.namespace,
                 h = m.selector,
                 v = m.error,
                 b = "." + p,
                 y = "module-" + p,
                 x = a.selector || "",
                 C = e(this),
                 w = C.find(h.title),
                 S = C.find(h.content),
                 k = this,
                 T = C.data(y);
             f = {
                 initialize: function () {
                     f.debug("Initializing", C), f.bind.events(), m.observeChanges && f.observeChanges(), f.instantiate()
                 },
                 instantiate: function () {
                     T = f, C.data(y, f)
                 },
                 destroy: function () {
                     f.debug("Destroying previous instance", C), C.off(b).removeData(y)
                 },
                 refresh: function () {
                     w = C.find(h.title), S = C.find(h.content)
                 },
                 observeChanges: function () {
                     "MutationObserver" in t && ((d = new MutationObserver(function (e) {
                         f.debug("DOM tree modified, updating selector cache"), f.refresh()
                     })).observe(k, {
                         childList: !0,
                         subtree: !0
                     }), f.debug("Setting up mutation observer", d))
                 },
                 bind: {
                     events: function () {
                         f.debug("Binding delegated events"), C.on(m.on + b, h.trigger, f.event.click)
                     }
                 },
                 event: {
                     click: function () {
                         f.toggle.call(this)
                     }
                 },
                 toggle: function (t) {
                     var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
                         o = n.next(S),
                         a = o.hasClass(g.animating),
                         r = o.hasClass(g.active),
                         s = r && !a,
                         l = !r && a;
                     f.debug("Toggling visibility of content", n), s || l ? m.collapsible ? f.close.call(n) : f.debug("Cannot close accordion content collapsing is disabled") : f.open.call(n)
                 },
                 open: function (t) {
                     var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
                         o = n.next(S),
                         a = o.hasClass(g.animating);
                     o.hasClass(g.active) || a ? f.debug("Accordion already open, skipping", o) : (f.debug("Opening accordion content", n), m.onOpening.call(o), m.onChanging.call(o), m.exclusive && f.closeOthers.call(n), n.addClass(g.active), o.stop(!0, !0).addClass(g.animating), m.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? o.children().transition({
                         animation: "fade in",
                         queue: !1,
                         useFailSafe: !0,
                         debug: m.debug,
                         verbose: m.verbose,
                         duration: m.duration
                     }) : o.children().stop(!0, !0).animate({
                         opacity: 1
                     }, m.duration, f.resetOpacity)), o.slideDown(m.duration, m.easing, function () {
                         o.removeClass(g.animating).addClass(g.active), f.reset.display.call(this), m.onOpen.call(this), m.onChange.call(this)
                     }))
                 },
                 close: function (t) {
                     var n = t !== i ? "number" == typeof t ? w.eq(t) : e(t).closest(h.title) : e(this).closest(h.title),
                         o = n.next(S),
                         a = o.hasClass(g.animating),
                         r = o.hasClass(g.active);
                     !r && !(!r && a) || r && a || (f.debug("Closing accordion content", o), m.onClosing.call(o), m.onChanging.call(o), n.removeClass(g.active), o.stop(!0, !0).addClass(g.animating), m.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? o.children().transition({
                         animation: "fade out",
                         queue: !1,
                         useFailSafe: !0,
                         debug: m.debug,
                         verbose: m.verbose,
                         duration: m.duration
                     }) : o.children().stop(!0, !0).animate({
                         opacity: 0
                     }, m.duration, f.resetOpacity)), o.slideUp(m.duration, m.easing, function () {
                         o.removeClass(g.animating).removeClass(g.active), f.reset.display.call(this), m.onClose.call(this), m.onChange.call(this)
                     }))
                 },
                 closeOthers: function (t) {
                     var n, o, a, r = t !== i ? w.eq(t) : e(this).closest(h.title),
                         s = r.parents(h.content).prev(h.title),
                         l = r.closest(h.accordion),
                         c = h.title + "." + g.active + ":visible",
                         u = h.content + "." + g.active + ":visible";
                     m.closeNested ? a = (n = l.find(c).not(s)).next(S) : (n = l.find(c).not(s), o = l.find(u).find(c).not(s), a = (n = n.not(o)).next(S)), n.length > 0 && (f.debug("Exclusive enabled, closing other content", n), n.removeClass(g.active), a.removeClass(g.animating).stop(!0, !0), m.animateChildren && (e.fn.transition !== i && C.transition("is supported") ? a.children().transition({
                         animation: "fade out",
                         useFailSafe: !0,
                         debug: m.debug,
                         verbose: m.verbose,
                         duration: m.duration
                     }) : a.children().stop(!0, !0).animate({
                         opacity: 0
                     }, m.duration, f.resetOpacity)), a.slideUp(m.duration, m.easing, function () {
                         e(this).removeClass(g.active), f.reset.display.call(this)
                     }))
                 },
                 reset: {
                     display: function () {
                         f.verbose("Removing inline display from element", this), e(this).css("display", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
                     },
                     opacity: function () {
                         f.verbose("Removing inline opacity from element", this), e(this).css("opacity", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
                     }
                 },
                 setting: function (t, n) {
                     if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : m[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (f.debug("Changing internal", t, n), n === i) return f[t];
                     e.isPlainObject(t) ? e.extend(!0, f, t) : f[t] = n
                 },
                 debug: function () {
                     !m.silent && m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !m.silent && m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     m.silent || (f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         m.performance && (n = (t = (new Date).getTime()) - (r || t), r = t, s.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: k,
                             "Execution Time": n
                         })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                     },
                     display: function () {
                         var t = m.name + ":",
                             n = 0;
                         r = !1, clearTimeout(f.performance.timer), e.each(s, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", x && (t += " '" + x + "'"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), s = []
                     }
                 },
                 invoke: function (t, n, a) {
                     var r, s, l, c = T;
                     return n = n || u, a = k || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (f.error(v.method, t), !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
                 }
             }, c ? (T === i && f.initialize(), f.invoke(l)) : (T !== i && T.invoke("destroy"), f.initialize())
         }), o !== i ? o : this
     }, e.fn.accordion.settings = {
         name: "Accordion",
         namespace: "accordion",
         silent: !1,
         debug: !1,
         verbose: !1,
         performance: !0,
         on: "click",
         observeChanges: !0,
         exclusive: !0,
         collapsible: !0,
         closeNested: !1,
         animateChildren: !0,
         duration: 350,
         easing: "easeOutQuad",
         onOpening: function () {},
         onClosing: function () {},
         onChanging: function () {},
         onOpen: function () {},
         onClose: function () {},
         onChange: function () {},
         error: {
             method: "The method you called is not defined"
         },
         className: {
             active: "active",
             animating: "animating"
         },
         selector: {
             accordion: ".accordion",
             title: ".title",
             trigger: ".title",
             content: ".content"
         }
     }, e.extend(e.easing, {
         easeOutQuad: function (e, t, n, i, o) {
             return -i * (t /= o) * (t - 2) + n
         }
     })
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.checkbox = function (o) {
         var a, r = e(this),
             s = r.selector || "",
             l = (new Date).getTime(),
             c = [],
             u = arguments[0],
             d = "string" == typeof u,
             f = [].slice.call(arguments, 1);
         return r.each(function () {
             var r, m, g = e.extend(!0, {}, e.fn.checkbox.settings, o),
                 p = g.className,
                 h = g.namespace,
                 v = g.selector,
                 b = g.error,
                 y = "." + h,
                 x = "module-" + h,
                 C = e(this),
                 w = e(this).children(v.label),
                 S = e(this).children(v.input),
                 k = S[0],
                 T = !1,
                 A = !1,
                 R = C.data(x),
                 P = this;
             m = {
                 initialize: function () {
                     m.verbose("Initializing checkbox", g), m.create.label(), m.bind.events(), m.set.tabbable(), m.hide.input(), m.observeChanges(), m.instantiate(), m.setup()
                 },
                 instantiate: function () {
                     m.verbose("Storing instance of module", m), R = m, C.data(x, m)
                 },
                 destroy: function () {
                     m.verbose("Destroying module"), m.unbind.events(), m.show.input(), C.removeData(x)
                 },
                 fix: {
                     reference: function () {
                         C.is(v.input) && (m.debug("Behavior called on <input> adjusting invoked element"), C = C.closest(v.checkbox), m.refresh())
                     }
                 },
                 setup: function () {
                     m.set.initialLoad(), m.is.indeterminate() ? (m.debug("Initial value is indeterminate"), m.indeterminate()) : m.is.checked() ? (m.debug("Initial value is checked"), m.check()) : (m.debug("Initial value is unchecked"), m.uncheck()), m.remove.initialLoad()
                 },
                 refresh: function () {
                     w = C.children(v.label), S = C.children(v.input), k = S[0]
                 },
                 hide: {
                     input: function () {
                         m.verbose("Modifying <input> z-index to be unselectable"), S.addClass(p.hidden)
                     }
                 },
                 show: {
                     input: function () {
                         m.verbose("Modifying <input> z-index to be selectable"), S.removeClass(p.hidden)
                     }
                 },
                 observeChanges: function () {
                     "MutationObserver" in t && ((r = new MutationObserver(function (e) {
                         m.debug("DOM tree modified, updating selector cache"), m.refresh()
                     })).observe(P, {
                         childList: !0,
                         subtree: !0
                     }), m.debug("Setting up mutation observer", r))
                 },
                 attachEvents: function (t, n) {
                     var i = e(t);
                     n = e.isFunction(m[n]) ? m[n] : m.toggle, i.length > 0 ? (m.debug("Attaching checkbox events to element", t, n), i.on("click" + y, n)) : m.error(b.notFound)
                 },
                 event: {
                     click: function (t) {
                         var n = e(t.target);
                         n.is(v.input) ? m.verbose("Using default check action on initialized checkbox") : n.is(v.link) ? m.debug("Clicking link inside checkbox, skipping toggle") : (m.toggle(), S.focus(), t.preventDefault())
                     },
                     keydown: function (e) {
                         var t = e.which,
                             n = 13,
                             i = 32;
                         t == 27 ? (m.verbose("Escape key pressed blurring field"), S.blur(), A = !0) : e.ctrlKey || t != i && t != n ? A = !1 : (m.verbose("Enter/space key pressed, toggling checkbox"), m.toggle(), A = !0)
                     },
                     keyup: function (e) {
                         A && e.preventDefault()
                     }
                 },
                 check: function () {
                     m.should.allowCheck() && (m.debug("Checking checkbox", S), m.set.checked(), m.should.ignoreCallbacks() || (g.onChecked.call(k), g.onChange.call(k)))
                 },
                 uncheck: function () {
                     m.should.allowUncheck() && (m.debug("Unchecking checkbox"), m.set.unchecked(), m.should.ignoreCallbacks() || (g.onUnchecked.call(k), g.onChange.call(k)))
                 },
                 indeterminate: function () {
                     m.should.allowIndeterminate() ? m.debug("Checkbox is already indeterminate") : (m.debug("Making checkbox indeterminate"), m.set.indeterminate(), m.should.ignoreCallbacks() || (g.onIndeterminate.call(k), g.onChange.call(k)))
                 },
                 determinate: function () {
                     m.should.allowDeterminate() ? m.debug("Checkbox is already determinate") : (m.debug("Making checkbox determinate"), m.set.determinate(), m.should.ignoreCallbacks() || (g.onDeterminate.call(k), g.onChange.call(k)))
                 },
                 enable: function () {
                     m.is.enabled() ? m.debug("Checkbox is already enabled") : (m.debug("Enabling checkbox"), m.set.enabled(), g.onEnable.call(k), g.onEnabled.call(k))
                 },
                 disable: function () {
                     m.is.disabled() ? m.debug("Checkbox is already disabled") : (m.debug("Disabling checkbox"), m.set.disabled(), g.onDisable.call(k), g.onDisabled.call(k))
                 },
                 get: {
                     radios: function () {
                         var t = m.get.name();
                         return e('input[name="' + t + '"]').closest(v.checkbox)
                     },
                     otherRadios: function () {
                         return m.get.radios().not(C)
                     },
                     name: function () {
                         return S.attr("name")
                     }
                 },
                 is: {
                     initialLoad: function () {
                         return T
                     },
                     radio: function () {
                         return S.hasClass(p.radio) || "radio" == S.attr("type")
                     },
                     indeterminate: function () {
                         return S.prop("indeterminate") !== i && S.prop("indeterminate")
                     },
                     checked: function () {
                         return S.prop("checked") !== i && S.prop("checked")
                     },
                     disabled: function () {
                         return S.prop("disabled") !== i && S.prop("disabled")
                     },
                     enabled: function () {
                         return !m.is.disabled()
                     },
                     determinate: function () {
                         return !m.is.indeterminate()
                     },
                     unchecked: function () {
                         return !m.is.checked()
                     }
                 },
                 should: {
                     allowCheck: function () {
                         return m.is.determinate() && m.is.checked() && !m.should.forceCallbacks() ? (m.debug("Should not allow check, checkbox is already checked"), !1) : !1 !== g.beforeChecked.apply(k) || (m.debug("Should not allow check, beforeChecked cancelled"), !1)
                     },
                     allowUncheck: function () {
                         return m.is.determinate() && m.is.unchecked() && !m.should.forceCallbacks() ? (m.debug("Should not allow uncheck, checkbox is already unchecked"), !1) : !1 !== g.beforeUnchecked.apply(k) || (m.debug("Should not allow uncheck, beforeUnchecked cancelled"), !1)
                     },
                     allowIndeterminate: function () {
                         return m.is.indeterminate() && !m.should.forceCallbacks() ? (m.debug("Should not allow indeterminate, checkbox is already indeterminate"), !1) : !1 !== g.beforeIndeterminate.apply(k) || (m.debug("Should not allow indeterminate, beforeIndeterminate cancelled"), !1)
                     },
                     allowDeterminate: function () {
                         return m.is.determinate() && !m.should.forceCallbacks() ? (m.debug("Should not allow determinate, checkbox is already determinate"), !1) : !1 !== g.beforeDeterminate.apply(k) || (m.debug("Should not allow determinate, beforeDeterminate cancelled"), !1)
                     },
                     forceCallbacks: function () {
                         return m.is.initialLoad() && g.fireOnInit
                     },
                     ignoreCallbacks: function () {
                         return T && !g.fireOnInit
                     }
                 },
                 can: {
                     change: function () {
                         return !(C.hasClass(p.disabled) || C.hasClass(p.readOnly) || S.prop("disabled") || S.prop("readonly"))
                     },
                     uncheck: function () {
                         return "boolean" == typeof g.uncheckable ? g.uncheckable : !m.is.radio()
                     }
                 },
                 set: {
                     initialLoad: function () {
                         T = !0
                     },
                     checked: function () {
                         m.verbose("Setting class to checked"), C.removeClass(p.indeterminate).addClass(p.checked), m.is.radio() && m.uncheckOthers(), m.is.indeterminate() || !m.is.checked() ? (m.verbose("Setting state to checked", k), S.prop("indeterminate", !1).prop("checked", !0), m.trigger.change()) : m.debug("Input is already checked, skipping input property change")
                     },
                     unchecked: function () {
                         m.verbose("Removing checked class"), C.removeClass(p.indeterminate).removeClass(p.checked), m.is.indeterminate() || !m.is.unchecked() ? (m.debug("Setting state to unchecked"), S.prop("indeterminate", !1).prop("checked", !1), m.trigger.change()) : m.debug("Input is already unchecked")
                     },
                     indeterminate: function () {
                         m.verbose("Setting class to indeterminate"), C.addClass(p.indeterminate), m.is.indeterminate() ? m.debug("Input is already indeterminate, skipping input property change") : (m.debug("Setting state to indeterminate"), S.prop("indeterminate", !0), m.trigger.change())
                     },
                     determinate: function () {
                         m.verbose("Removing indeterminate class"), C.removeClass(p.indeterminate), m.is.determinate() ? m.debug("Input is already determinate, skipping input property change") : (m.debug("Setting state to determinate"), S.prop("indeterminate", !1))
                     },
                     disabled: function () {
                         m.verbose("Setting class to disabled"), C.addClass(p.disabled), m.is.disabled() ? m.debug("Input is already disabled, skipping input property change") : (m.debug("Setting state to disabled"), S.prop("disabled", "disabled"), m.trigger.change())
                     },
                     enabled: function () {
                         m.verbose("Removing disabled class"), C.removeClass(p.disabled), m.is.enabled() ? m.debug("Input is already enabled, skipping input property change") : (m.debug("Setting state to enabled"), S.prop("disabled", !1), m.trigger.change())
                     },
                     tabbable: function () {
                         m.verbose("Adding tabindex to checkbox"), S.attr("tabindex") === i && S.attr("tabindex", 0)
                     }
                 },
                 remove: {
                     initialLoad: function () {
                         T = !1
                     }
                 },
                 trigger: {
                     change: function () {
                         var e = n.createEvent("HTMLEvents"),
                             t = S[0];
                         t && (m.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e))
                     }
                 },
                 create: {
                     label: function () {
                         S.prevAll(v.label).length > 0 ? (S.prev(v.label).detach().insertAfter(S), m.debug("Moving existing label", w)) : m.has.label() || (w = e("<label>").insertAfter(S), m.debug("Creating label", w))
                     }
                 },
                 has: {
                     label: function () {
                         return w.length > 0
                     }
                 },
                 bind: {
                     events: function () {
                         m.verbose("Attaching checkbox events"), C.on("click" + y, m.event.click).on("keydown" + y, v.input, m.event.keydown).on("keyup" + y, v.input, m.event.keyup)
                     }
                 },
                 unbind: {
                     events: function () {
                         m.debug("Removing events"), C.off(y)
                     }
                 },
                 uncheckOthers: function () {
                     var e = m.get.otherRadios();
                     m.debug("Unchecking other radios", e), e.removeClass(p.checked)
                 },
                 toggle: function () {
                     m.can.change() ? m.is.indeterminate() || m.is.unchecked() ? (m.debug("Currently unchecked"), m.check()) : m.is.checked() && m.can.uncheck() && (m.debug("Currently checked"), m.uncheck()) : m.is.radio() || m.debug("Checkbox is read-only or disabled, ignoring toggle")
                 },
                 setting: function (t, n) {
                     if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         e.isPlainObject(g[t]) ? e.extend(!0, g[t], n) : g[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 },
                 debug: function () {
                     !g.silent && g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !g.silent && g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     g.silent || (m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         g.performance && (n = (t = (new Date).getTime()) - (l || t), l = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: P,
                             "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500)
                     },
                     display: function () {
                         var t = g.name + ":",
                             n = 0;
                         l = !1, clearTimeout(m.performance.timer), e.each(c, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function (t, n, o) {
                     var r, s, l, c = R;
                     return n = n || f, o = P || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (m.error(b.method, t), !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s
                 }
             }, d ? (R === i && m.initialize(), m.invoke(u)) : (R !== i && R.invoke("destroy"), m.initialize())
         }), a !== i ? a : this
     }, e.fn.checkbox.settings = {
         name: "Checkbox",
         namespace: "checkbox",
         silent: !1,
         debug: !1,
         verbose: !0,
         performance: !0,
         uncheckable: "auto",
         fireOnInit: !1,
         onChange: function () {},
         beforeChecked: function () {},
         beforeUnchecked: function () {},
         beforeDeterminate: function () {},
         beforeIndeterminate: function () {},
         onChecked: function () {},
         onUnchecked: function () {},
         onDeterminate: function () {},
         onIndeterminate: function () {},
         onEnable: function () {},
         onDisable: function () {},
         onEnabled: function () {},
         onDisabled: function () {},
         className: {
             checked: "checked",
             indeterminate: "indeterminate",
             disabled: "disabled",
             hidden: "hidden",
             radio: "radio",
             readOnly: "read-only"
         },
         error: {
             method: "The method you called is not defined"
         },
         selector: {
             checkbox: ".ui.checkbox",
             label: "label, .box",
             input: 'input[type="checkbox"], input[type="radio"]',
             link: "a[href]"
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.dimmer = function (t) {
         var o, a = e(this),
             r = (new Date).getTime(),
             s = [],
             l = arguments[0],
             c = "string" == typeof l,
             u = [].slice.call(arguments, 1);
         return a.each(function () {
             var d, f, m, g = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.dimmer.settings, t) : e.extend({}, e.fn.dimmer.settings),
                 p = g.selector,
                 h = g.namespace,
                 v = g.className,
                 b = g.error,
                 y = "." + h,
                 x = "module-" + h,
                 C = a.selector || "",
                 w = "ontouchstart" in n.documentElement ? "touchstart" : "click",
                 S = e(this),
                 k = this,
                 T = S.data(x);
             (m = {
                 preinitialize: function () {
                     m.is.dimmer() ? (f = S.parent(), d = S) : (f = S, d = m.has.dimmer() ? g.dimmerName ? f.find(p.dimmer).filter("." + g.dimmerName) : f.find(p.dimmer) : m.create(), m.set.variation())
                 },
                 initialize: function () {
                     m.debug("Initializing dimmer", g), m.bind.events(), m.set.dimmable(), m.instantiate()
                 },
                 instantiate: function () {
                     m.verbose("Storing instance of module", m), T = m, S.data(x, T)
                 },
                 destroy: function () {
                     m.verbose("Destroying previous module", d), m.unbind.events(), m.remove.variation(), f.off(y)
                 },
                 bind: {
                     events: function () {
                         m.is.page() && f.get(0).addEventListener("touchmove", m.event.preventScroll, {
                             passive: !1
                         }), "hover" == g.on ? f.on("mouseenter" + y, m.show).on("mouseleave" + y, m.hide) : "click" == g.on && f.on(w + y, m.toggle), m.is.page() && (m.debug("Setting as a page dimmer", f), m.set.pageDimmer()), m.is.closable() && (m.verbose("Adding dimmer close event", d), f.on(w + y, p.dimmer, m.event.click))
                     }
                 },
                 unbind: {
                     events: function () {
                         m.is.page() && f.get(0).removeEventListener("touchmove", m.event.preventScroll, {
                             passive: !1
                         }), S.removeData(x), f.off(y)
                     }
                 },
                 event: {
                     click: function (t) {
                         m.verbose("Determining if event occured on dimmer", t), (0 === d.find(t.target).length || e(t.target).is(p.content)) && (m.hide(), t.stopImmediatePropagation())
                     },
                     preventScroll: function (e) {
                         e.preventDefault()
                     }
                 },
                 addContent: function (t) {
                     var n = e(t);
                     m.debug("Add content to dimmer", n), n.parent()[0] !== d[0] && n.detach().appendTo(d)
                 },
                 create: function () {
                     var t = e(g.template.dimmer());
                     return g.dimmerName && (m.debug("Creating named dimmer", g.dimmerName), t.addClass(g.dimmerName)), t.appendTo(f), t
                 },
                 show: function (t) {
                     t = e.isFunction(t) ? t : function () {}, m.debug("Showing dimmer", d, g), m.is.dimmed() && !m.is.animating() || !m.is.enabled() ? m.debug("Dimmer is already shown or disabled") : (m.animate.show(t), g.onShow.call(k), g.onChange.call(k))
                 },
                 hide: function (t) {
                     t = e.isFunction(t) ? t : function () {}, m.is.dimmed() || m.is.animating() ? (m.debug("Hiding dimmer", d), m.animate.hide(t), g.onHide.call(k), g.onChange.call(k)) : m.debug("Dimmer is not visible")
                 },
                 toggle: function () {
                     m.verbose("Toggling dimmer visibility", d), m.is.dimmed() ? m.hide() : m.show()
                 },
                 animate: {
                     show: function (t) {
                         t = e.isFunction(t) ? t : function () {}, g.useCSS && e.fn.transition !== i && d.transition("is supported") ? ("auto" !== g.opacity && m.set.opacity(), d.transition({
                             displayType: "flex",
                             animation: g.transition + " in",
                             queue: !1,
                             duration: m.get.duration(),
                             useFailSafe: !0,
                             onStart: function () {
                                 m.set.dimmed()
                             },
                             onComplete: function () {
                                 m.set.active(), t()
                             }
                         })) : (m.verbose("Showing dimmer animation with javascript"), m.set.dimmed(), "auto" == g.opacity && (g.opacity = .8), d.stop().css({
                             opacity: 0,
                             width: "100%",
                             height: "100%"
                         }).fadeTo(m.get.duration(), g.opacity, function () {
                             d.removeAttr("style"), m.set.active(), t()
                         }))
                     },
                     hide: function (t) {
                         t = e.isFunction(t) ? t : function () {}, g.useCSS && e.fn.transition !== i && d.transition("is supported") ? (m.verbose("Hiding dimmer with css"), d.transition({
                             displayType: "flex",
                             animation: g.transition + " out",
                             queue: !1,
                             duration: m.get.duration(),
                             useFailSafe: !0,
                             onStart: function () {
                                 m.remove.dimmed()
                             },
                             onComplete: function () {
                                 m.remove.active(), t()
                             }
                         })) : (m.verbose("Hiding dimmer with javascript"), m.remove.dimmed(), d.stop().fadeOut(m.get.duration(), function () {
                             m.remove.active(), d.removeAttr("style"), t()
                         }))
                     }
                 },
                 get: {
                     dimmer: function () {
                         return d
                     },
                     duration: function () {
                         return "object" == typeof g.duration ? m.is.active() ? g.duration.hide : g.duration.show : g.duration
                     }
                 },
                 has: {
                     dimmer: function () {
                         return g.dimmerName ? S.find(p.dimmer).filter("." + g.dimmerName).length > 0 : S.find(p.dimmer).length > 0
                     }
                 },
                 is: {
                     active: function () {
                         return d.hasClass(v.active)
                     },
                     animating: function () {
                         return d.is(":animated") || d.hasClass(v.animating)
                     },
                     closable: function () {
                         return "auto" == g.closable ? "hover" != g.on : g.closable
                     },
                     dimmer: function () {
                         return S.hasClass(v.dimmer)
                     },
                     dimmable: function () {
                         return S.hasClass(v.dimmable)
                     },
                     dimmed: function () {
                         return f.hasClass(v.dimmed)
                     },
                     disabled: function () {
                         return f.hasClass(v.disabled)
                     },
                     enabled: function () {
                         return !m.is.disabled()
                     },
                     page: function () {
                         return f.is("body")
                     },
                     pageDimmer: function () {
                         return d.hasClass(v.pageDimmer)
                     }
                 },
                 can: {
                     show: function () {
                         return !d.hasClass(v.disabled)
                     }
                 },
                 set: {
                     opacity: function (e) {
                         var t = d.css("background-color"),
                             n = t.split(","),
                             i = n && 3 == n.length,
                             o = n && 4 == n.length;
                         e = 0 === g.opacity ? 0 : g.opacity || e, i || o ? (n[3] = e + ")", t = n.join(",")) : t = "rgba(0, 0, 0, " + e + ")", m.debug("Setting opacity to", e), d.css("background-color", t)
                     },
                     active: function () {
                         d.addClass(v.active)
                     },
                     dimmable: function () {
                         f.addClass(v.dimmable)
                     },
                     dimmed: function () {
                         f.addClass(v.dimmed)
                     },
                     pageDimmer: function () {
                         d.addClass(v.pageDimmer)
                     },
                     disabled: function () {
                         d.addClass(v.disabled)
                     },
                     variation: function (e) {
                         (e = e || g.variation) && d.addClass(e)
                     }
                 },
                 remove: {
                     active: function () {
                         d.removeClass(v.active)
                     },
                     dimmed: function () {
                         f.removeClass(v.dimmed)
                     },
                     disabled: function () {
                         d.removeClass(v.disabled)
                     },
                     variation: function (e) {
                         (e = e || g.variation) && d.removeClass(e)
                     }
                 },
                 setting: function (t, n) {
                     if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         e.isPlainObject(g[t]) ? e.extend(!0, g[t], n) : g[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 },
                 debug: function () {
                     !g.silent && g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !g.silent && g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     g.silent || (m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         g.performance && (n = (t = (new Date).getTime()) - (r || t), r = t, s.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: k,
                             "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500)
                     },
                     display: function () {
                         var t = g.name + ":",
                             n = 0;
                         r = !1, clearTimeout(m.performance.timer), e.each(s, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", C && (t += " '" + C + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), s = []
                     }
                 },
                 invoke: function (t, n, a) {
                     var r, s, l, c = T;
                     return n = n || u, a = k || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (m.error(b.method, t), !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
                 }
             }).preinitialize(), c ? (T === i && m.initialize(), m.invoke(l)) : (T !== i && T.invoke("destroy"), m.initialize())
         }), o !== i ? o : this
     }, e.fn.dimmer.settings = {
         name: "Dimmer",
         namespace: "dimmer",
         silent: !1,
         debug: !1,
         verbose: !1,
         performance: !0,
         dimmerName: !1,
         variation: !1,
         closable: "auto",
         useCSS: !0,
         transition: "fade",
         on: !1,
         opacity: "auto",
         duration: {
             show: 500,
             hide: 500
         },
         onChange: function () {},
         onShow: function () {},
         onHide: function () {},
         error: {
             method: "The method you called is not defined."
         },
         className: {
             active: "active",
             animating: "animating",
             dimmable: "dimmable",
             dimmed: "dimmed",
             dimmer: "dimmer",
             disabled: "disabled",
             hide: "hide",
             pageDimmer: "page",
             show: "show"
         },
         selector: {
             dimmer: "> .ui.dimmer",
             content: ".ui.dimmer > .content, .ui.dimmer > .content > .center"
         },
         template: {
             dimmer: function () {
                 return e("<div />").attr("class", "ui dimmer")
             }
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.dropdown = function (o) {
         var a, r = e(this),
             s = e(n),
             l = r.selector || "",
             c = "ontouchstart" in n.documentElement,
             u = (new Date).getTime(),
             d = [],
             f = arguments[0],
             m = "string" == typeof f,
             g = [].slice.call(arguments, 1);
         return r.each(function (p) {
             var h, v, b, y, x, C, w, S, k = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.dropdown.settings, o) : e.extend({}, e.fn.dropdown.settings),
                 T = k.className,
                 A = k.message,
                 R = k.fields,
                 P = k.keys,
                 E = k.metadata,
                 F = k.namespace,
                 O = k.regExp,
                 D = k.selector,
                 q = k.error,
                 j = k.templates,
                 z = "." + F,
                 I = "module-" + F,
                 M = e(this),
                 L = e(k.context),
                 V = M.find(D.text),
                 N = M.find(D.search),
                 H = M.find(D.sizer),
                 U = M.find(D.input),
                 W = M.find(D.icon),
                 B = M.prev().find(D.text).length > 0 ? M.prev().find(D.text) : M.prev(),
                 Q = M.children(D.menu),
                 X = Q.find(D.item),
                 $ = !1,
                 Y = !1,
                 Z = !1,
                 K = this,
                 J = M.data(I);
             S = {
                 initialize: function () {
                     S.debug("Initializing dropdown", k), S.is.alreadySetup() ? S.setup.reference() : (S.setup.layout(), k.values && S.change.values(k.values), S.refreshData(), S.save.defaults(), S.restore.selected(), S.create.id(), S.bind.events(), S.observeChanges(), S.instantiate())
                 },
                 instantiate: function () {
                     S.verbose("Storing instance of dropdown", S), J = S, M.data(I, S)
                 },
                 destroy: function () {
                     S.verbose("Destroying previous dropdown", M), S.remove.tabbable(), M.off(z).removeData(I), Q.off(z), s.off(y), S.disconnect.menuObserver(), S.disconnect.selectObserver()
                 },
                 observeChanges: function () {
                     "MutationObserver" in t && (C = new MutationObserver(S.event.select.mutation), w = new MutationObserver(S.event.menu.mutation), S.debug("Setting up mutation observer", C, w), S.observe.select(), S.observe.menu())
                 },
                 disconnect: {
                     menuObserver: function () {
                         w && w.disconnect()
                     },
                     selectObserver: function () {
                         C && C.disconnect()
                     }
                 },
                 observe: {
                     select: function () {
                         S.has.input() && C.observe(M[0], {
                             childList: !0,
                             subtree: !0
                         })
                     },
                     menu: function () {
                         S.has.menu() && w.observe(Q[0], {
                             childList: !0,
                             subtree: !0
                         })
                     }
                 },
                 create: {
                     id: function () {
                         x = (Math.random().toString(16) + "000000000").substr(2, 8), y = "." + x, S.verbose("Creating unique id for element", x)
                     },
                     userChoice: function (t) {
                         var n, o, a;
                         return !!(t = t || S.get.userValues()) && (t = e.isArray(t) ? t : [t], e.each(t, function (t, r) {
                             !1 === S.get.item(r) && (a = k.templates.addition(S.add.variables(A.addResult, r)), o = e("<div />").html(a).attr("data-" + E.value, r).attr("data-" + E.text, r).addClass(T.addition).addClass(T.item), k.hideAdditions && o.addClass(T.hidden), n = n === i ? o : n.add(o), S.verbose("Creating user choices for value", r, o))
                         }), n)
                     },
                     userLabels: function (t) {
                         var n = S.get.userValues();
                         n && (S.debug("Adding user labels", n), e.each(n, function (e, t) {
                             S.verbose("Adding custom user value"), S.add.label(t, t)
                         }))
                     },
                     menu: function () {
                         Q = e("<div />").addClass(T.menu).appendTo(M)
                     },
                     sizer: function () {
                         H = e("<span />").addClass(T.sizer).insertAfter(N)
                     }
                 },
                 search: function (e) {
                     e = e !== i ? e : S.get.query(), S.verbose("Searching for query", e), S.has.minCharacters(e) ? S.filter(e) : S.hide()
                 },
                 select: {
                     firstUnfiltered: function () {
                         S.verbose("Selecting first non-filtered element"), S.remove.selectedItem(), X.not(D.unselectable).not(D.addition + D.hidden).eq(0).addClass(T.selected)
                     },
                     nextAvailable: function (e) {
                         var t = (e = e.eq(0)).nextAll(D.item).not(D.unselectable).eq(0),
                             n = e.prevAll(D.item).not(D.unselectable).eq(0);
                         t.length > 0 ? (S.verbose("Moving selection to", t), t.addClass(T.selected)) : (S.verbose("Moving selection to", n), n.addClass(T.selected))
                     }
                 },
                 setup: {
                     api: function () {
                         var e = {
                             debug: k.debug,
                             urlData: {
                                 value: S.get.value(),
                                 query: S.get.query()
                             },
                             on: !1
                         };
                         S.verbose("First request, initializing API"), M.api(e)
                     },
                     layout: function () {
                         M.is("select") && (S.setup.select(), S.setup.returnedObject()), S.has.menu() || S.create.menu(), S.is.search() && !S.has.search() && (S.verbose("Adding search input"), N = e("<input />").addClass(T.search).prop("autocomplete", "off").insertBefore(V)), S.is.multiple() && S.is.searchSelection() && !S.has.sizer() && S.create.sizer(), k.allowTab && S.set.tabbable()
                     },
                     select: function () {
                         var t = S.get.selectValues();
                         S.debug("Dropdown initialized on a select", t), M.is("select") && (U = M), U.parent(D.dropdown).length > 0 ? (S.debug("UI dropdown already exists. Creating dropdown menu only"), M = U.closest(D.dropdown), S.has.menu() || S.create.menu(), Q = M.children(D.menu), S.setup.menu(t)) : (S.debug("Creating entire dropdown from select"), M = e("<div />").attr("class", U.attr("class")).addClass(T.selection).addClass(T.dropdown).html(j.dropdown(t)).insertBefore(U), U.hasClass(T.multiple) && !1 === U.prop("multiple") && (S.error(q.missingMultiple), U.prop("multiple", !0)), U.is("[multiple]") && S.set.multiple(), U.prop("disabled") && (S.debug("Disabling dropdown"), M.addClass(T.disabled)), U.removeAttr("class").detach().prependTo(M)), S.refresh()
                     },
                     menu: function (e) {
                         Q.html(j.menu(e, R)), X = Q.find(D.item)
                     },
                     reference: function () {
                         S.debug("Dropdown behavior was called on select, replacing with closest dropdown"), M = M.parent(D.dropdown), J = M.data(I), K = M.get(0), S.refresh(), S.setup.returnedObject()
                     },
                     returnedObject: function () {
                         var e = r.slice(0, p),
                             t = r.slice(p + 1);
                         r = e.add(M).add(t)
                     }
                 },
                 refresh: function () {
                     S.refreshSelectors(), S.refreshData()
                 },
                 refreshItems: function () {
                     X = Q.find(D.item)
                 },
                 refreshSelectors: function () {
                     S.verbose("Refreshing selector cache"), V = M.find(D.text), N = M.find(D.search), U = M.find(D.input), W = M.find(D.icon), B = M.prev().find(D.text).length > 0 ? M.prev().find(D.text) : M.prev(), Q = M.children(D.menu), X = Q.find(D.item)
                 },
                 refreshData: function () {
                     S.verbose("Refreshing cached metadata"), X.removeData(E.text).removeData(E.value)
                 },
                 clearData: function () {
                     S.verbose("Clearing metadata"), X.removeData(E.text).removeData(E.value), M.removeData(E.defaultText).removeData(E.defaultValue).removeData(E.placeholderText)
                 },
                 toggle: function () {
                     S.verbose("Toggling menu visibility"), S.is.active() ? S.hide() : S.show()
                 },
                 show: function (t) {
                     if (t = e.isFunction(t) ? t : function () {}, !S.can.show() && S.is.remote() && (S.debug("No API results retrieved, searching before show"), S.queryRemote(S.get.query(), S.show)), S.can.show() && !S.is.active()) {
                         if (S.debug("Showing dropdown"), !S.has.message() || S.has.maxSelections() || S.has.allResultsFiltered() || S.remove.message(), S.is.allFiltered()) return !0;
                         !1 !== k.onShow.call(K) && S.animate.show(function () {
                             S.can.click() && S.bind.intent(), S.has.menuSearch() && S.focusSearch(), S.set.visible(), t.call(K)
                         })
                     }
                 },
                 hide: function (t) {
                     t = e.isFunction(t) ? t : function () {}, S.is.active() && !S.is.animatingOutward() && (S.debug("Hiding dropdown"), !1 !== k.onHide.call(K) && S.animate.hide(function () {
                         S.remove.visible(), t.call(K)
                     }))
                 },
                 hideOthers: function () {
                     S.verbose("Finding other dropdowns to hide"), r.not(M).has(D.menu + "." + T.visible).dropdown("hide")
                 },
                 hideMenu: function () {
                     S.verbose("Hiding menu  instantaneously"), S.remove.active(), S.remove.visible(), Q.transition("hide")
                 },
                 hideSubMenus: function () {
                     var e = Q.children(D.item).find(D.menu);
                     S.verbose("Hiding sub menus", e), e.transition("hide")
                 },
                 bind: {
                     events: function () {
                         c && S.bind.touchEvents(), S.bind.keyboardEvents(), S.bind.inputEvents(), S.bind.mouseEvents()
                     },
                     touchEvents: function () {
                         S.debug("Touch device detected binding additional touch events"), S.is.searchSelection() || S.is.single() && M.on("touchstart" + z, S.event.test.toggle), Q.on("touchstart" + z, D.item, S.event.item.mouseenter)
                     },
                     keyboardEvents: function () {
                         S.verbose("Binding keyboard events"), M.on("keydown" + z, S.event.keydown), S.has.search() && M.on(S.get.inputEvent() + z, D.search, S.event.input), S.is.multiple() && s.on("keydown" + y, S.event.document.keydown)
                     },
                     inputEvents: function () {
                         S.verbose("Binding input change events"), M.on("change" + z, D.input, S.event.change)
                     },
                     mouseEvents: function () {
                         S.verbose("Binding mouse events"), S.is.multiple() && M.on("click" + z, D.label, S.event.label.click).on("click" + z, D.remove, S.event.remove.click), S.is.searchSelection() ? (M.on("mousedown" + z, S.event.mousedown).on("mouseup" + z, S.event.mouseup).on("mousedown" + z, D.menu, S.event.menu.mousedown).on("mouseup" + z, D.menu, S.event.menu.mouseup).on("click" + z, D.icon, S.event.icon.click).on("focus" + z, D.search, S.event.search.focus).on("click" + z, D.search, S.event.search.focus).on("blur" + z, D.search, S.event.search.blur).on("click" + z, D.text, S.event.text.focus), S.is.multiple() && M.on("click" + z, S.event.click)) : ("click" == k.on ? M.on("click" + z, D.icon, S.event.icon.click).on("click" + z, S.event.test.toggle) : "hover" == k.on ? M.on("mouseenter" + z, S.delay.show).on("mouseleave" + z, S.delay.hide) : M.on(k.on + z, S.toggle), M.on("mousedown" + z, S.event.mousedown).on("mouseup" + z, S.event.mouseup).on("focus" + z, S.event.focus), S.has.menuSearch() ? M.on("blur" + z, D.search, S.event.search.blur) : M.on("blur" + z, S.event.blur)), Q.on("mouseenter" + z, D.item, S.event.item.mouseenter).on("mouseleave" + z, D.item, S.event.item.mouseleave).on("click" + z, D.item, S.event.item.click)
                     },
                     intent: function () {
                         S.verbose("Binding hide intent event to document"), c && s.on("touchstart" + y, S.event.test.touch).on("touchmove" + y, S.event.test.touch), s.on("click" + y, S.event.test.hide)
                     }
                 },
                 unbind: {
                     intent: function () {
                         S.verbose("Removing hide intent event from document"), c && s.off("touchstart" + y).off("touchmove" + y), s.off("click" + y)
                     }
                 },
                 filter: function (e) {
                     var t = e !== i ? e : S.get.query(),
                         n = function () {
                             S.is.multiple() && S.filterActive(), (e || !e && 0 == S.get.activeItem().length) && S.select.firstUnfiltered(), S.has.allResultsFiltered() ? k.onNoResults.call(K, t) ? k.allowAdditions ? k.hideAdditions && (S.verbose("User addition with no menu, setting empty style"), S.set.empty(), S.hideMenu()) : (S.verbose("All items filtered, showing message", t), S.add.message(A.noResults)) : (S.verbose("All items filtered, hiding dropdown", t), S.hideMenu()) : (S.remove.empty(), S.remove.message()), k.allowAdditions && S.add.userSuggestion(e), S.is.searchSelection() && S.can.show() && S.is.focusedOnSearch() && S.show()
                         };
                     k.useLabels && S.has.maxSelections() || (k.apiSettings ? S.can.useAPI() ? S.queryRemote(t, function () {
                         k.filterRemoteData && S.filterItems(t), n()
                     }) : S.error(q.noAPI) : (S.filterItems(t), n()))
                 },
                 queryRemote: function (t, n) {
                     var i = {
                         errorDuration: !1,
                         cache: "local",
                         throttle: k.throttle,
                         urlData: {
                             query: t
                         },
                         onError: function () {
                             S.add.message(A.serverError), n()
                         },
                         onFailure: function () {
                             S.add.message(A.serverError), n()
                         },
                         onSuccess: function (t) {
                             var i = t[R.remoteValues];
                             e.isArray(i) && i.length > 0 ? (S.remove.message(), S.setup.menu({
                                 values: t[R.remoteValues]
                             })) : S.add.message(A.noResults), n()
                         }
                     };
                     M.api("get request") || S.setup.api(), i = e.extend(!0, {}, i, k.apiSettings), M.api("setting", i).api("query")
                 },
                 filterItems: function (t) {
                     var n = t !== i ? t : S.get.query(),
                         o = null,
                         a = S.escape.string(n),
                         r = new RegExp("^" + a, "igm");
                     S.has.query() && (o = [], S.verbose("Searching for matching values", n), X.each(function () {
                         var t, i, a = e(this);
                         if ("both" == k.match || "text" == k.match) {
                             if (-1 !== (t = String(S.get.choiceText(a, !1))).search(r)) return o.push(this), !0;
                             if ("exact" === k.fullTextSearch && S.exactSearch(n, t)) return o.push(this), !0;
                             if (!0 === k.fullTextSearch && S.fuzzySearch(n, t)) return o.push(this), !0
                         }
                         if ("both" == k.match || "value" == k.match) {
                             if (-1 !== (i = String(S.get.choiceValue(a, t))).search(r)) return o.push(this), !0;
                             if ("exact" === k.fullTextSearch && S.exactSearch(n, i)) return o.push(this), !0;
                             if (!0 === k.fullTextSearch && S.fuzzySearch(n, i)) return o.push(this), !0
                         }
                     })), S.debug("Showing only matched items", n), S.remove.filteredItem(), o && X.not(o).addClass(T.filtered)
                 },
                 fuzzySearch: function (e, t) {
                     var n = t.length,
                         i = e.length;
                     if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;
                     if (i === n) return e === t;
                     e: for (var o = 0, a = 0; o < i; o++) {
                         for (var r = e.charCodeAt(o); a < n;)
                             if (t.charCodeAt(a++) === r) continue e;
                         return !1
                     }
                     return !0
                 },
                 exactSearch: function (e, t) {
                     return e = e.toLowerCase(), (t = t.toLowerCase()).indexOf(e) > -1
                 },
                 filterActive: function () {
                     k.useLabels && X.filter("." + T.active).addClass(T.filtered)
                 },
                 focusSearch: function (e) {
                     S.has.search() && !S.is.focusedOnSearch() && (e ? (M.off("focus" + z, D.search), N.focus(), M.on("focus" + z, D.search, S.event.search.focus)) : N.focus())
                 },
                 forceSelection: function () {
                     var e = X.not(T.filtered).filter("." + T.selected).eq(0),
                         t = X.not(T.filtered).filter("." + T.active).eq(0),
                         n = e.length > 0 ? e : t;
                     if (n.length > 0 && !S.is.multiple()) return S.debug("Forcing partial selection to selected item", n), void S.event.item.click.call(n, {}, !0);
                     k.allowAdditions ? (S.set.selected(S.get.query()), S.remove.searchTerm()) : S.remove.searchTerm()
                 },
                 change: {
                     values: function (t) {
                         k.allowAdditions || S.clear(), S.debug("Creating dropdown with specified values", t), S.setup.menu({
                             values: t
                         }), e.each(t, function (e, t) {
                             if (1 == t.selected) return S.debug("Setting initial selection to", t.value), S.set.selected(t.value), !0
                         })
                     }
                 },
                 event: {
                     change: function () {
                         Z || (S.debug("Input changed, updating selection"), S.set.selected())
                     },
                     focus: function () {
                         k.showOnFocus && !$ && S.is.hidden() && !v && S.show()
                     },
                     blur: function (e) {
                         v = n.activeElement === this, $ || v || (S.remove.activeLabel(), S.hide())
                     },
                     mousedown: function () {
                         S.is.searchSelection() ? b = !0 : $ = !0
                     },
                     mouseup: function () {
                         S.is.searchSelection() ? b = !1 : $ = !1
                     },
                     click: function (t) {
                         e(t.target).is(M) && (S.is.focusedOnSearch() ? S.show() : S.focusSearch())
                     },
                     search: {
                         focus: function () {
                             $ = !0, S.is.multiple() && S.remove.activeLabel(), k.showOnFocus && S.search()
                         },
                         blur: function (e) {
                             v = n.activeElement === this, S.is.searchSelection() && !b && (Y || v || (k.forceSelection && S.forceSelection(), S.hide())), b = !1
                         }
                     },
                     icon: {
                         click: function (e) {
                             S.toggle()
                         }
                     },
                     text: {
                         focus: function (e) {
                             $ = !0, S.focusSearch()
                         }
                     },
                     input: function (e) {
                         (S.is.multiple() || S.is.searchSelection()) && S.set.filtered(), clearTimeout(S.timer), S.timer = setTimeout(S.search, k.delay.search)
                     },
                     label: {
                         click: function (t) {
                             var n = e(this),
                                 i = M.find(D.label),
                                 o = i.filter("." + T.active),
                                 a = n.nextAll("." + T.active),
                                 r = n.prevAll("." + T.active),
                                 s = a.length > 0 ? n.nextUntil(a).add(o).add(n) : n.prevUntil(r).add(o).add(n);
                             t.shiftKey ? (o.removeClass(T.active), s.addClass(T.active)) : t.ctrlKey ? n.toggleClass(T.active) : (o.removeClass(T.active), n.addClass(T.active)), k.onLabelSelect.apply(this, i.filter("." + T.active))
                         }
                     },
                     remove: {
                         click: function () {
                             var t = e(this).parent();
                             t.hasClass(T.active) ? S.remove.activeLabels() : S.remove.activeLabels(t)
                         }
                     },
                     test: {
                         toggle: function (e) {
                             var t = S.is.multiple() ? S.show : S.toggle;
                             S.is.bubbledLabelClick(e) || S.is.bubbledIconClick(e) || S.determine.eventOnElement(e, t) && e.preventDefault()
                         },
                         touch: function (e) {
                             S.determine.eventOnElement(e, function () {
                                 "touchstart" == e.type ? S.timer = setTimeout(function () {
                                     S.hide()
                                 }, k.delay.touch) : "touchmove" == e.type && clearTimeout(S.timer)
                             }), e.stopPropagation()
                         },
                         hide: function (e) {
                             S.determine.eventInModule(e, S.hide)
                         }
                     },
                     select: {
                         mutation: function (t) {
                             S.debug("<select> modified, recreating menu");
                             var n = !1;
                             e.each(t, function (t, i) {
                                 if (e(i.target).is("select") || e(i.addedNodes).is("select")) return n = !0, !0
                             }), n && (S.disconnect.selectObserver(), S.refresh(), S.setup.select(), S.set.selected(), S.observe.select())
                         }
                     },
                     menu: {
                         mutation: function (t) {
                             var n = t[0],
                                 i = n.addedNodes ? e(n.addedNodes[0]) : e(!1),
                                 o = n.removedNodes ? e(n.removedNodes[0]) : e(!1),
                                 a = i.add(o),
                                 r = a.is(D.addition) || a.closest(D.addition).length > 0,
                                 s = a.is(D.message) || a.closest(D.message).length > 0;
                             r || s ? (S.debug("Updating item selector cache"), S.refreshItems()) : (S.debug("Menu modified, updating selector cache"), S.refresh())
                         },
                         mousedown: function () {
                             Y = !0
                         },
                         mouseup: function () {
                             Y = !1
                         }
                     },
                     item: {
                         mouseenter: function (t) {
                             var n = e(t.target),
                                 i = e(this),
                                 o = i.children(D.menu),
                                 a = i.siblings(D.item).children(D.menu),
                                 r = o.length > 0;
                             !(o.find(n).length > 0) && r && (clearTimeout(S.itemTimer), S.itemTimer = setTimeout(function () {
                                 S.verbose("Showing sub-menu", o), e.each(a, function () {
                                     S.animate.hide(!1, e(this))
                                 }), S.animate.show(!1, o)
                             }, k.delay.show), t.preventDefault())
                         },
                         mouseleave: function (t) {
                             var n = e(this).children(D.menu);
                             n.length > 0 && (clearTimeout(S.itemTimer), S.itemTimer = setTimeout(function () {
                                 S.verbose("Hiding sub-menu", n), S.animate.hide(!1, n)
                             }, k.delay.hide))
                         },
                         click: function (t, i) {
                             var o = e(this),
                                 a = e(t ? t.target : ""),
                                 r = o.find(D.menu),
                                 s = S.get.choiceText(o),
                                 l = S.get.choiceValue(o, s),
                                 c = r.length > 0,
                                 u = r.find(a).length > 0;
                             S.has.menuSearch() && e(n.activeElement).blur(), u || c && !k.allowCategorySelection || (S.is.searchSelection() && (k.allowAdditions && S.remove.userAddition(), S.remove.searchTerm(), S.is.focusedOnSearch() || 1 == i || S.focusSearch(!0)), k.useLabels || (S.remove.filteredItem(), S.set.scrollPosition(o)), S.determine.selectAction.call(this, s, l))
                         }
                     },
                     document: {
                         keydown: function (e) {
                             var t = e.which;
                             if (S.is.inObject(t, P)) {
                                 var n = M.find(D.label),
                                     i = n.filter("." + T.active),
                                     o = (i.data(E.value), n.index(i)),
                                     a = n.length,
                                     r = i.length > 0,
                                     s = i.length > 1,
                                     l = 0 === o,
                                     c = o + 1 == a,
                                     u = S.is.searchSelection(),
                                     d = S.is.focusedOnSearch(),
                                     f = S.is.focused(),
                                     m = d && 0 === S.get.caretPosition();
                                 if (u && !r && !d) return;
                                 t == P.leftArrow ? !f && !m || r ? r && (e.shiftKey ? S.verbose("Adding previous label to selection") : (S.verbose("Selecting previous label"), n.removeClass(T.active)), l && !s ? i.addClass(T.active) : i.prev(D.siblingLabel).addClass(T.active).end(), e.preventDefault()) : (S.verbose("Selecting previous label"), n.last().addClass(T.active)) : t == P.rightArrow ? (f && !r && n.first().addClass(T.active), r && (e.shiftKey ? S.verbose("Adding next label to selection") : (S.verbose("Selecting next label"), n.removeClass(T.active)), c ? u ? d ? n.removeClass(T.active) : S.focusSearch() : s ? i.next(D.siblingLabel).addClass(T.active) : i.addClass(T.active) : i.next(D.siblingLabel).addClass(T.active), e.preventDefault())) : t == P.deleteKey || t == P.backspace ? r ? (S.verbose("Removing active labels"), c && u && !d && S.focusSearch(), i.last().next(D.siblingLabel).addClass(T.active), S.remove.activeLabels(i), e.preventDefault()) : m && !r && t == P.backspace && (S.verbose("Removing last label on input backspace"), i = n.last().addClass(T.active), S.remove.activeLabels(i)) : i.removeClass(T.active)
                             }
                         }
                     },
                     keydown: function (e) {
                         var t = e.which;
                         if (S.is.inObject(t, P)) {
                             var n, i = X.not(D.unselectable).filter("." + T.selected).eq(0),
                                 o = Q.children("." + T.active).eq(0),
                                 a = i.length > 0 ? i : o,
                                 r = a.length > 0 ? a.siblings(":not(." + T.filtered + ")").addBack() : Q.children(":not(." + T.filtered + ")"),
                                 s = a.children(D.menu),
                                 l = a.closest(D.menu),
                                 c = l.hasClass(T.visible) || l.hasClass(T.animating) || l.parent(D.menu).length > 0,
                                 u = s.length > 0,
                                 d = a.length > 0,
                                 f = a.not(D.unselectable).length > 0,
                                 m = t == P.delimiter && k.allowAdditions && S.is.multiple();
                             if (k.allowAdditions && k.hideAdditions && (t == P.enter || m) && f && (S.verbose("Selecting item from keyboard shortcut", a), S.event.item.click.call(a, e), S.is.searchSelection() && S.remove.searchTerm()), S.is.visible()) {
                                 if ((t == P.enter || m) && (t == P.enter && d && u && !k.allowCategorySelection ? (S.verbose("Pressed enter on unselectable category, opening sub menu"), t = P.rightArrow) : f && (S.verbose("Selecting item from keyboard shortcut", a), S.event.item.click.call(a, e), S.is.searchSelection() && S.remove.searchTerm()), e.preventDefault()), d && (t == P.leftArrow && l[0] !== Q[0] && (S.verbose("Left key pressed, closing sub-menu"), S.animate.hide(!1, l), a.removeClass(T.selected), l.closest(D.item).addClass(T.selected), e.preventDefault()), t == P.rightArrow && u && (S.verbose("Right key pressed, opening sub-menu"), S.animate.show(!1, s), a.removeClass(T.selected), s.find(D.item).eq(0).addClass(T.selected), e.preventDefault())), t == P.upArrow) {
                                     if (n = d && c ? a.prevAll(D.item + ":not(" + D.unselectable + ")").eq(0) : X.eq(0), r.index(n) < 0) return S.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();
                                     S.verbose("Up key pressed, changing active item"), a.removeClass(T.selected), n.addClass(T.selected), S.set.scrollPosition(n), k.selectOnKeydown && S.is.single() && S.set.selectedItem(n), e.preventDefault()
                                 }
                                 if (t == P.downArrow) {
                                     if (0 === (n = d && c ? n = a.nextAll(D.item + ":not(" + D.unselectable + ")").eq(0) : X.eq(0)).length) return S.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();
                                     S.verbose("Down key pressed, changing active item"), X.removeClass(T.selected), n.addClass(T.selected), S.set.scrollPosition(n), k.selectOnKeydown && S.is.single() && S.set.selectedItem(n), e.preventDefault()
                                 }
                                 t == P.pageUp && (S.scrollPage("up"), e.preventDefault()), t == P.pageDown && (S.scrollPage("down"), e.preventDefault()), t == P.escape && (S.verbose("Escape key pressed, closing dropdown"), S.hide())
                             } else m && e.preventDefault(), t != P.downArrow || S.is.visible() || (S.verbose("Down key pressed, showing dropdown"), S.show(), e.preventDefault())
                         } else S.has.search() || S.set.selectedLetter(String.fromCharCode(t))
                     }
                 },
                 trigger: {
                     change: function () {
                         var e = n.createEvent("HTMLEvents"),
                             t = U[0];
                         t && (S.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e))
                     }
                 },
                 determine: {
                     selectAction: function (t, n) {
                         S.verbose("Determining action", k.action), e.isFunction(S.action[k.action]) ? (S.verbose("Triggering preset action", k.action, t, n), S.action[k.action].call(K, t, n, this)) : e.isFunction(k.action) ? (S.verbose("Triggering user action", k.action, t, n), k.action.call(K, t, n, this)) : S.error(q.action, k.action)
                     },
                     eventInModule: function (t, i) {
                         var o = e(t.target),
                             a = o.closest(n.documentElement).length > 0,
                             r = o.closest(M).length > 0;
                         return i = e.isFunction(i) ? i : function () {}, a && !r ? (S.verbose("Triggering event", i), i(), !0) : (S.verbose("Event occurred in dropdown, canceling callback"), !1)
                     },
                     eventOnElement: function (t, i) {
                         var o = e(t.target),
                             a = o.closest(D.siblingLabel),
                             r = n.body.contains(t.target),
                             s = 0 === M.find(a).length,
                             l = 0 === o.closest(Q).length;
                         return i = e.isFunction(i) ? i : function () {}, r && s && l ? (S.verbose("Triggering event", i), i(), !0) : (S.verbose("Event occurred in dropdown menu, canceling callback"), !1)
                     }
                 },
                 action: {
                     nothing: function () {},
                     activate: function (t, n, o) {
                         if (n = n !== i ? n : t, S.can.activate(e(o))) {
                             if (S.set.selected(n, e(o)), S.is.multiple() && !S.is.allFiltered()) return;
                             S.hideAndClear()
                         }
                     },
                     select: function (t, n, o) {
                         if (n = n !== i ? n : t, S.can.activate(e(o))) {
                             if (S.set.value(n, t, e(o)), S.is.multiple() && !S.is.allFiltered()) return;
                             S.hideAndClear()
                         }
                     },
                     combo: function (t, n, o) {
                         n = n !== i ? n : t, S.set.selected(n, e(o)), S.hideAndClear()
                     },
                     hide: function (e, t, n) {
                         S.set.value(t, e), S.hideAndClear()
                     }
                 },
                 get: {
                     id: function () {
                         return x
                     },
                     defaultText: function () {
                         return M.data(E.defaultText)
                     },
                     defaultValue: function () {
                         return M.data(E.defaultValue)
                     },
                     placeholderText: function () {
                         return "auto" != k.placeholder && "string" == typeof k.placeholder ? k.placeholder : M.data(E.placeholderText) || ""
                     },
                     text: function () {
                         return V.text()
                     },
                     query: function () {
                         return e.trim(N.val())
                     },
                     searchWidth: function (e) {
                         return e = e !== i ? e : N.val(), H.text(e), Math.ceil(H.width() + 1)
                     },
                     selectionCount: function () {
                         var t = S.get.values();
                         return S.is.multiple() ? e.isArray(t) ? t.length : 0 : "" !== S.get.value() ? 1 : 0
                     },
                     transition: function (e) {
                         return "auto" == k.transition ? S.is.upward(e) ? "slide up" : "slide down" : k.transition
                     },
                     userValues: function () {
                         var t = S.get.values();
                         return !!t && (t = e.isArray(t) ? t : [t], e.grep(t, function (e) {
                             return !1 === S.get.item(e)
                         }))
                     },
                     uniqueArray: function (t) {
                         return e.grep(t, function (n, i) {
                             return e.inArray(n, t) === i
                         })
                     },
                     caretPosition: function () {
                         var e, t, i = N.get(0);
                         return "selectionStart" in i ? i.selectionStart : n.selection ? (i.focus(), t = (e = n.selection.createRange()).text.length, e.moveStart("character", -i.value.length), e.text.length - t) : void 0
                     },
                     value: function () {
                         var t = U.length > 0 ? U.val() : M.data(E.value),
                             n = e.isArray(t) && 1 === t.length && "" === t[0];
                         return t === i || n ? "" : t
                     },
                     values: function () {
                         var e = S.get.value();
                         return "" === e ? "" : !S.has.selectInput() && S.is.multiple() ? "string" == typeof e ? e.split(k.delimiter) : "" : e
                     },
                     remoteValues: function () {
                         var t = S.get.values(),
                             n = !1;
                         return t && ("string" == typeof t && (t = [t]), e.each(t, function (e, t) {
                             var i = S.read.remoteData(t);
                             S.verbose("Restoring value from session data", i, t), i && (n || (n = {}), n[t] = i)
                         })), n
                     },
                     choiceText: function (t, n) {
                         if (n = n !== i ? n : k.preserveHTML, t) return t.find(D.menu).length > 0 && (S.verbose("Retrieving text of element with sub-menu"), (t = t.clone()).find(D.menu).remove(), t.find(D.menuIcon).remove()), t.data(E.text) !== i ? t.data(E.text) : n ? e.trim(t.html()) : e.trim(t.text())
                     },
                     choiceValue: function (t, n) {
                         return n = n || S.get.choiceText(t), !!t && (t.data(E.value) !== i ? String(t.data(E.value)) : "string" == typeof n ? e.trim(n.toLowerCase()) : String(n))
                     },
                     inputEvent: function () {
                         var e = N[0];
                         return !!e && (e.oninput !== i ? "input" : e.onpropertychange !== i ? "propertychange" : "keyup")
                     },
                     selectValues: function () {
                         var t = {
                             values: []
                         };
                         return M.find("option").each(function () {
                             var n = e(this),
                                 o = n.html(),
                                 a = n.attr("disabled"),
                                 r = n.attr("value") !== i ? n.attr("value") : o;
                             "auto" === k.placeholder && "" === r ? t.placeholder = o : t.values.push({
                                 name: o,
                                 value: r,
                                 disabled: a
                             })
                         }), k.placeholder && "auto" !== k.placeholder && (S.debug("Setting placeholder value to", k.placeholder), t.placeholder = k.placeholder), k.sortSelect ? (t.values.sort(function (e, t) {
                             return e.name > t.name ? 1 : -1
                         }), S.debug("Retrieved and sorted values from select", t)) : S.debug("Retrieved values from select", t), t
                     },
                     activeItem: function () {
                         return X.filter("." + T.active)
                     },
                     selectedItem: function () {
                         var e = X.not(D.unselectable).filter("." + T.selected);
                         return e.length > 0 ? e : X.eq(0)
                     },
                     itemWithAdditions: function (e) {
                         var t = S.get.item(e),
                             n = S.create.userChoice(e);
                         return n && n.length > 0 && (t = t.length > 0 ? t.add(n) : n), t
                     },
                     item: function (t, n) {
                         var o, a, r = !1;
                         return t = t !== i ? t : S.get.values() !== i ? S.get.values() : S.get.text(), o = a ? t.length > 0 : t !== i && null !== t, a = S.is.multiple() && e.isArray(t), n = "" === t || 0 === t || (n || !1), o && X.each(function () {
                             var o = e(this),
                                 s = S.get.choiceText(o),
                                 l = S.get.choiceValue(o, s);
                             if (null !== l && l !== i)
                                 if (a) - 1 === e.inArray(String(l), t) && -1 === e.inArray(s, t) || (r = r ? r.add(o) : o);
                                 else if (n) {
                                 if (S.verbose("Ambiguous dropdown value using strict type check", o, t), l === t || s === t) return r = o, !0
                             } else if (String(l) == String(t) || s == t) return S.verbose("Found select item by value", l, t), r = o, !0
                         }), r
                     }
                 },
                 check: {
                     maxSelections: function (e) {
                         return !k.maxSelections || ((e = e !== i ? e : S.get.selectionCount()) >= k.maxSelections ? (S.debug("Maximum selection count reached"), k.useLabels && (X.addClass(T.filtered), S.add.message(A.maxSelections)), !0) : (S.verbose("No longer at maximum selection count"), S.remove.message(), S.remove.filteredItem(), S.is.searchSelection() && S.filterItems(), !1))
                     }
                 },
                 restore: {
                     defaults: function () {
                         S.clear(), S.restore.defaultText(), S.restore.defaultValue()
                     },
                     defaultText: function () {
                         var e = S.get.defaultText();
                         e === S.get.placeholderText ? (S.debug("Restoring default placeholder text", e), S.set.placeholderText(e)) : (S.debug("Restoring default text", e), S.set.text(e))
                     },
                     placeholderText: function () {
                         S.set.placeholderText()
                     },
                     defaultValue: function () {
                         var e = S.get.defaultValue();
                         e !== i && (S.debug("Restoring default value", e), "" !== e ? (S.set.value(e), S.set.selected()) : (S.remove.activeItem(), S.remove.selectedItem()))
                     },
                     labels: function () {
                         k.allowAdditions && (k.useLabels || (S.error(q.labels), k.useLabels = !0), S.debug("Restoring selected values"), S.create.userLabels()), S.check.maxSelections()
                     },
                     selected: function () {
                         S.restore.values(), S.is.multiple() ? (S.debug("Restoring previously selected values and labels"), S.restore.labels()) : S.debug("Restoring previously selected values")
                     },
                     values: function () {
                         S.set.initialLoad(), k.apiSettings && k.saveRemoteData && S.get.remoteValues() ? S.restore.remoteValues() : S.set.selected(), S.remove.initialLoad()
                     },
                     remoteValues: function () {
                         var t = S.get.remoteValues();
                         S.debug("Recreating selected from session data", t), t && (S.is.single() ? e.each(t, function (e, t) {
                             S.set.text(t)
                         }) : e.each(t, function (e, t) {
                             S.add.label(e, t)
                         }))
                     }
                 },
                 read: {
                     remoteData: function (e) {
                         var n;
                         if (t.Storage !== i) return (n = sessionStorage.getItem(e)) !== i && n;
                         S.error(q.noStorage)
                     }
                 },
                 save: {
                     defaults: function () {
                         S.save.defaultText(), S.save.placeholderText(), S.save.defaultValue()
                     },
                     defaultValue: function () {
                         var e = S.get.value();
                         S.verbose("Saving default value as", e), M.data(E.defaultValue, e)
                     },
                     defaultText: function () {
                         var e = S.get.text();
                         S.verbose("Saving default text as", e), M.data(E.defaultText, e)
                     },
                     placeholderText: function () {
                         var e;
                         !1 !== k.placeholder && V.hasClass(T.placeholder) && (e = S.get.text(), S.verbose("Saving placeholder text as", e), M.data(E.placeholderText, e))
                     },
                     remoteData: function (e, n) {
                         t.Storage !== i ? (S.verbose("Saving remote data to session storage", n, e), sessionStorage.setItem(n, e)) : S.error(q.noStorage)
                     }
                 },
                 clear: function () {
                     S.is.multiple() && k.useLabels ? S.remove.labels() : (S.remove.activeItem(), S.remove.selectedItem()), S.set.placeholderText(), S.clearValue()
                 },
                 clearValue: function () {
                     S.set.value("")
                 },
                 scrollPage: function (e, t) {
                     var n, i, o = t || S.get.selectedItem(),
                         a = o.closest(D.menu),
                         r = a.outerHeight(),
                         s = a.scrollTop(),
                         l = X.eq(0).outerHeight(),
                         c = Math.floor(r / l),
                         u = (a.prop("scrollHeight"), "up" == e ? s - l * c : s + l * c),
                         d = X.not(D.unselectable);
                     i = "up" == e ? d.index(o) - c : d.index(o) + c, (n = ("up" == e ? i >= 0 : i < d.length) ? d.eq(i) : "up" == e ? d.first() : d.last()).length > 0 && (S.debug("Scrolling page", e, n), o.removeClass(T.selected), n.addClass(T.selected), k.selectOnKeydown && S.is.single() && S.set.selectedItem(n), a.scrollTop(u))
                 },
                 set: {
                     filtered: function () {
                         var e = S.is.multiple(),
                             t = S.is.searchSelection(),
                             n = e && t,
                             i = t ? S.get.query() : "",
                             o = "string" == typeof i && i.length > 0,
                             a = S.get.searchWidth(),
                             r = "" !== i;
                         e && o && (S.verbose("Adjusting input width", a, k.glyphWidth), N.css("width", a)), o || n && r ? (S.verbose("Hiding placeholder text"), V.addClass(T.filtered)) : (!e || n && !r) && (S.verbose("Showing placeholder text"), V.removeClass(T.filtered))
                     },
                     empty: function () {
                         M.addClass(T.empty)
                     },
                     loading: function () {
                         M.addClass(T.loading)
                     },
                     placeholderText: function (e) {
                         e = e || S.get.placeholderText(), S.debug("Setting placeholder text", e), S.set.text(e), V.addClass(T.placeholder)
                     },
                     tabbable: function () {
                         S.is.searchSelection() ? (S.debug("Added tabindex to searchable dropdown"), N.val("").attr("tabindex", 0), Q.attr("tabindex", -1)) : (S.debug("Added tabindex to dropdown"), M.attr("tabindex") === i && (M.attr("tabindex", 0), Q.attr("tabindex", -1)))
                     },
                     initialLoad: function () {
                         S.verbose("Setting initial load"), h = !0
                     },
                     activeItem: function (e) {
                         k.allowAdditions && e.filter(D.addition).length > 0 ? e.addClass(T.filtered) : e.addClass(T.active)
                     },
                     partialSearch: function (e) {
                         var t = S.get.query().length;
                         N.val(e.substr(0, t))
                     },
                     scrollPosition: function (e, t) {
                         var n, o, a, r, s, l;
                         n = (e = e || S.get.selectedItem()).closest(D.menu), o = e && e.length > 0, t = t !== i && t, e && n.length > 0 && o && (e.position().top, n.addClass(T.loading), a = (r = n.scrollTop()) - n.offset().top + e.offset().top, t || (l = r + n.height() < a + 5, s = a - 5 < r), S.debug("Scrolling to active item", a), (t || s || l) && n.scrollTop(a), n.removeClass(T.loading))
                     },
                     text: function (e) {
                         "select" !== k.action && ("combo" == k.action ? (S.debug("Changing combo button text", e, B), k.preserveHTML ? B.html(e) : B.text(e)) : (e !== S.get.placeholderText() && V.removeClass(T.placeholder), S.debug("Changing text", e, V), V.removeClass(T.filtered), k.preserveHTML ? V.html(e) : V.text(e)))
                     },
                     selectedItem: function (e) {
                         var t = S.get.choiceValue(e),
                             n = S.get.choiceText(e, !1),
                             i = S.get.choiceText(e, !0);
                         S.debug("Setting user selection to item", e), S.remove.activeItem(), S.set.partialSearch(n), S.set.activeItem(e), S.set.selected(t, e), S.set.text(i)
                     },
                     selectedLetter: function (t) {
                         var n, i = X.filter("." + T.selected),
                             o = !1;
                         i.length > 0 && S.has.firstLetter(i, t) && (n = i.nextAll(X).eq(0), S.has.firstLetter(n, t) && (o = n)), o || X.each(function () {
                             if (S.has.firstLetter(e(this), t)) return o = e(this), !1
                         }), o && (S.verbose("Scrolling to next value with letter", t), S.set.scrollPosition(o), i.removeClass(T.selected), o.addClass(T.selected), k.selectOnKeydown && S.is.single() && S.set.selectedItem(o))
                     },
                     direction: function (e) {
                         "auto" == k.direction ? (S.remove.upward(), S.can.openDownward(e) ? S.remove.upward(e) : S.set.upward(e), S.is.leftward(e) || S.can.openRightward(e) || S.set.leftward(e)) : "upward" == k.direction && S.set.upward(e)
                     },
                     upward: function (e) {
                         (e || M).addClass(T.upward)
                     },
                     leftward: function (e) {
                         (e || Q).addClass(T.leftward)
                     },
                     value: function (e, t, n) {
                         var o = S.escape.value(e),
                             a = U.length > 0,
                             r = S.get.values(),
                             s = e !== i ? String(e) : e;
                         if (a) {
                             if (!k.allowReselection && s == r && (S.verbose("Skipping value update already same value", e, r), !S.is.initialLoad())) return;
                             S.is.single() && S.has.selectInput() && S.can.extendSelect() && (S.debug("Adding user option", e), S.add.optionValue(e)), S.debug("Updating input value", o, r), Z = !0, U.val(o), !1 === k.fireOnInit && S.is.initialLoad() ? S.debug("Input native change event ignored on initial load") : S.trigger.change(), Z = !1
                         } else S.verbose("Storing value in metadata", o, U), o !== r && M.data(E.value, s);
                         !1 === k.fireOnInit && S.is.initialLoad() ? S.verbose("No callback on initial load", k.onChange) : k.onChange.call(K, e, t, n)
                     },
                     active: function () {
                         M.addClass(T.active)
                     },
                     multiple: function () {
                         M.addClass(T.multiple)
                     },
                     visible: function () {
                         M.addClass(T.visible)
                     },
                     exactly: function (e, t) {
                         S.debug("Setting selected to exact values"), S.clear(), S.set.selected(e, t)
                     },
                     selected: function (t, n) {
                         var i = S.is.multiple();
                         (n = k.allowAdditions ? n || S.get.itemWithAdditions(t) : n || S.get.item(t)) && (S.debug("Setting selected menu item to", n), S.is.multiple() && S.remove.searchWidth(), S.is.single() ? (S.remove.activeItem(), S.remove.selectedItem()) : k.useLabels && S.remove.selectedItem(), n.each(function () {
                             var t = e(this),
                                 o = S.get.choiceText(t),
                                 a = S.get.choiceValue(t, o),
                                 r = t.hasClass(T.filtered),
                                 s = t.hasClass(T.active),
                                 l = t.hasClass(T.addition),
                                 c = i && 1 == n.length;
                             i ? !s || l ? (k.apiSettings && k.saveRemoteData && S.save.remoteData(o, a), k.useLabels ? (S.add.label(a, o, c), S.add.value(a, o, t), S.set.activeItem(t), S.filterActive(), S.select.nextAvailable(n)) : (S.add.value(a, o, t), S.set.text(S.add.variables(A.count)), S.set.activeItem(t))) : r || (S.debug("Selected active value, removing label"), S.remove.selected(a)) : (k.apiSettings && k.saveRemoteData && S.save.remoteData(o, a), S.set.text(o), S.set.value(a, o, t), t.addClass(T.active).addClass(T.selected))
                         }))
                     }
                 },
                 add: {
                     label: function (t, n, i) {
                         var o, a = S.is.searchSelection() ? N : V,
                             r = S.escape.value(t);
                         k.ignoreCase && (r = r.toLowerCase()), o = e("<a />").addClass(T.label).attr("data-" + E.value, r).html(j.label(r, n)), o = k.onLabelCreate.call(o, r, n), S.has.label(t) ? S.debug("User selection already exists, skipping", r) : (k.label.variation && o.addClass(k.label.variation), !0 === i ? (S.debug("Animating in label", o), o.addClass(T.hidden).insertBefore(a).transition(k.label.transition, k.label.duration)) : (S.debug("Adding selection label", o), o.insertBefore(a)))
                     },
                     message: function (t) {
                         var n = Q.children(D.message),
                             i = k.templates.message(S.add.variables(t));
                         n.length > 0 ? n.html(i) : n = e("<div/>").html(i).addClass(T.message).appendTo(Q)
                     },
                     optionValue: function (t) {
                         var n = S.escape.value(t);
                         U.find('option[value="' + S.escape.string(n) + '"]').length > 0 || (S.disconnect.selectObserver(), S.is.single() && (S.verbose("Removing previous user addition"), U.find("option." + T.addition).remove()), e("<option/>").prop("value", n).addClass(T.addition).html(t).appendTo(U), S.verbose("Adding user addition as an <option>", t), S.observe.select())
                     },
                     userSuggestion: function (e) {
                         var t, n = Q.children(D.addition),
                             i = S.get.item(e),
                             o = i && i.not(D.addition).length,
                             a = n.length > 0;
                         k.useLabels && S.has.maxSelections() || ("" === e || o ? n.remove() : (a ? (n.data(E.value, e).data(E.text, e).attr("data-" + E.value, e).attr("data-" + E.text, e).removeClass(T.filtered), k.hideAdditions || (t = k.templates.addition(S.add.variables(A.addResult, e)), n.html(t)), S.verbose("Replacing user suggestion with new value", n)) : ((n = S.create.userChoice(e)).prependTo(Q), S.verbose("Adding item choice to menu corresponding with user choice addition", n)), k.hideAdditions && !S.is.allFiltered() || n.addClass(T.selected).siblings().removeClass(T.selected), S.refreshItems()))
                     },
                     variables: function (e, t) {
                         var n, i, o = -1 !== e.search("{count}"),
                             a = -1 !== e.search("{maxCount}"),
                             r = -1 !== e.search("{term}");
                         return S.verbose("Adding templated variables to message", e), o && (n = S.get.selectionCount(), e = e.replace("{count}", n)), a && (n = S.get.selectionCount(), e = e.replace("{maxCount}", k.maxSelections)), r && (i = t || S.get.query(), e = e.replace("{term}", i)), e
                     },
                     value: function (t, n, i) {
                         var o, a = S.get.values();
                         S.has.value(t) ? S.debug("Value already selected") : "" !== t ? (e.isArray(a) ? (o = a.concat([t]), o = S.get.uniqueArray(o)) : o = [t], S.has.selectInput() ? S.can.extendSelect() && (S.debug("Adding value to select", t, o, U), S.add.optionValue(t)) : (o = o.join(k.delimiter), S.debug("Setting hidden input to delimited value", o, U)), !1 === k.fireOnInit && S.is.initialLoad() ? S.verbose("Skipping onadd callback on initial load", k.onAdd) : k.onAdd.call(K, t, n, i), S.set.value(o, t, n, i), S.check.maxSelections()) : S.debug("Cannot select blank values from multiselect")
                     }
                 },
                 remove: {
                     active: function () {
                         M.removeClass(T.active)
                     },
                     activeLabel: function () {
                         M.find(D.label).removeClass(T.active)
                     },
                     empty: function () {
                         M.removeClass(T.empty)
                     },
                     loading: function () {
                         M.removeClass(T.loading)
                     },
                     initialLoad: function () {
                         h = !1
                     },
                     upward: function (e) {
                         (e || M).removeClass(T.upward)
                     },
                     leftward: function (e) {
                         (e || Q).removeClass(T.leftward)
                     },
                     visible: function () {
                         M.removeClass(T.visible)
                     },
                     activeItem: function () {
                         X.removeClass(T.active)
                     },
                     filteredItem: function () {
                         k.useLabels && S.has.maxSelections() || (k.useLabels && S.is.multiple() ? X.not("." + T.active).removeClass(T.filtered) : X.removeClass(T.filtered), S.remove.empty())
                     },
                     optionValue: function (e) {
                         var t = S.escape.value(e),
                             n = U.find('option[value="' + S.escape.string(t) + '"]');
                         n.length > 0 && n.hasClass(T.addition) && (C && (C.disconnect(), S.verbose("Temporarily disconnecting mutation observer")), n.remove(), S.verbose("Removing user addition as an <option>", t), C && C.observe(U[0], {
                             childList: !0,
                             subtree: !0
                         }))
                     },
                     message: function () {
                         Q.children(D.message).remove()
                     },
                     searchWidth: function () {
                         N.css("width", "")
                     },
                     searchTerm: function () {
                         S.verbose("Cleared search term"), N.val(""), S.set.filtered()
                     },
                     userAddition: function () {
                         X.filter(D.addition).remove()
                     },
                     selected: function (t, n) {
                         if (!(n = k.allowAdditions ? n || S.get.itemWithAdditions(t) : n || S.get.item(t))) return !1;
                         n.each(function () {
                             var t = e(this),
                                 n = S.get.choiceText(t),
                                 i = S.get.choiceValue(t, n);
                             S.is.multiple() ? k.useLabels ? (S.remove.value(i, n, t), S.remove.label(i)) : (S.remove.value(i, n, t), 0 === S.get.selectionCount() ? S.set.placeholderText() : S.set.text(S.add.variables(A.count))) : S.remove.value(i, n, t), t.removeClass(T.filtered).removeClass(T.active), k.useLabels && t.removeClass(T.selected)
                         })
                     },
                     selectedItem: function () {
                         X.removeClass(T.selected)
                     },
                     value: function (e, t, n) {
                         var i, o = S.get.values();
                         S.has.selectInput() ? (S.verbose("Input is <select> removing selected option", e), i = S.remove.arrayValue(e, o), S.remove.optionValue(e)) : (S.verbose("Removing from delimited values", e), i = (i = S.remove.arrayValue(e, o)).join(k.delimiter)), !1 === k.fireOnInit && S.is.initialLoad() ? S.verbose("No callback on initial load", k.onRemove) : k.onRemove.call(K, e, t, n), S.set.value(i, t, n), S.check.maxSelections()
                     },
                     arrayValue: function (t, n) {
                         return e.isArray(n) || (n = [n]), n = e.grep(n, function (e) {
                             return t != e
                         }), S.verbose("Removed value from delimited string", t, n), n
                     },
                     label: function (e, t) {
                         var n = M.find(D.label).filter("[data-" + E.value + '="' + S.escape.string(e) + '"]');
                         S.verbose("Removing label", n), n.remove()
                     },
                     activeLabels: function (e) {
                         e = e || M.find(D.label).filter("." + T.active), S.verbose("Removing active label selections", e), S.remove.labels(e)
                     },
                     labels: function (t) {
                         t = t || M.find(D.label), S.verbose("Removing labels", t), t.each(function () {
                             var t = e(this),
                                 n = t.data(E.value),
                                 o = n !== i ? String(n) : n,
                                 a = S.is.userValue(o);
                             !1 !== k.onLabelRemove.call(t, n) ? (S.remove.message(), a ? (S.remove.value(o), S.remove.label(o)) : S.remove.selected(o)) : S.debug("Label remove callback cancelled removal")
                         })
                     },
                     tabbable: function () {
                         S.is.searchSelection() ? (S.debug("Searchable dropdown initialized"), N.removeAttr("tabindex"), Q.removeAttr("tabindex")) : (S.debug("Simple selection dropdown initialized"), M.removeAttr("tabindex"), Q.removeAttr("tabindex"))
                     }
                 },
                 has: {
                     menuSearch: function () {
                         return S.has.search() && N.closest(Q).length > 0
                     },
                     search: function () {
                         return N.length > 0
                     },
                     sizer: function () {
                         return H.length > 0
                     },
                     selectInput: function () {
                         return U.is("select")
                     },
                     minCharacters: function (e) {
                         return !k.minCharacters || (e = e !== i ? String(e) : String(S.get.query())).length >= k.minCharacters
                     },
                     firstLetter: function (e, t) {
                         var n;
                         return !(!e || 0 === e.length || "string" != typeof t) && (n = S.get.choiceText(e, !1), (t = t.toLowerCase()) == String(n).charAt(0).toLowerCase())
                     },
                     input: function () {
                         return U.length > 0
                     },
                     items: function () {
                         return X.length > 0
                     },
                     menu: function () {
                         return Q.length > 0
                     },
                     message: function () {
                         return 0 !== Q.children(D.message).length
                     },
                     label: function (e) {
                         var t = S.escape.value(e),
                             n = M.find(D.label);
                         return k.ignoreCase && (t = t.toLowerCase()), n.filter("[data-" + E.value + '="' + S.escape.string(t) + '"]').length > 0
                     },
                     maxSelections: function () {
                         return k.maxSelections && S.get.selectionCount() >= k.maxSelections
                     },
                     allResultsFiltered: function () {
                         var e = X.not(D.addition);
                         return e.filter(D.unselectable).length === e.length
                     },
                     userSuggestion: function () {
                         return Q.children(D.addition).length > 0
                     },
                     query: function () {
                         return "" !== S.get.query()
                     },
                     value: function (e) {
                         return k.ignoreCase ? S.has.valueIgnoringCase(e) : S.has.valueMatchingCase(e)
                     },
                     valueMatchingCase: function (t) {
                         var n = S.get.values();
                         return !!(e.isArray(n) ? n && -1 !== e.inArray(t, n) : n == t)
                     },
                     valueIgnoringCase: function (t) {
                         var n = S.get.values(),
                             i = !1;
                         return e.isArray(n) || (n = [n]), e.each(n, function (e, n) {
                             if (String(t).toLowerCase() == String(n).toLowerCase()) return i = !0, !1
                         }), i
                     }
                 },
                 is: {
                     active: function () {
                         return M.hasClass(T.active)
                     },
                     animatingInward: function () {
                         return Q.transition("is inward")
                     },
                     animatingOutward: function () {
                         return Q.transition("is outward")
                     },
                     bubbledLabelClick: function (t) {
                         return e(t.target).is("select, input") && M.closest("label").length > 0
                     },
                     bubbledIconClick: function (t) {
                         return e(t.target).closest(W).length > 0
                     },
                     alreadySetup: function () {
                         return M.is("select") && M.parent(D.dropdown).data(I) !== i && 0 === M.prev().length
                     },
                     animating: function (e) {
                         return e ? e.transition && e.transition("is animating") : Q.transition && Q.transition("is animating")
                     },
                     leftward: function (e) {
                         return (e || Q).hasClass(T.leftward)
                     },
                     disabled: function () {
                         return M.hasClass(T.disabled)
                     },
                     focused: function () {
                         return n.activeElement === M[0]
                     },
                     focusedOnSearch: function () {
                         return n.activeElement === N[0]
                     },
                     allFiltered: function () {
                         return (S.is.multiple() || S.has.search()) && !(0 == k.hideAdditions && S.has.userSuggestion()) && !S.has.message() && S.has.allResultsFiltered()
                     },
                     hidden: function (e) {
                         return !S.is.visible(e)
                     },
                     initialLoad: function () {
                         return h
                     },
                     inObject: function (t, n) {
                         var i = !1;
                         return e.each(n, function (e, n) {
                             if (n == t) return i = !0, !0
                         }), i
                     },
                     multiple: function () {
                         return M.hasClass(T.multiple)
                     },
                     remote: function () {
                         return k.apiSettings && S.can.useAPI()
                     },
                     single: function () {
                         return !S.is.multiple()
                     },
                     selectMutation: function (t) {
                         var n = !1;
                         return e.each(t, function (t, i) {
                             if (i.target && e(i.target).is("select")) return n = !0, !0
                         }), n
                     },
                     search: function () {
                         return M.hasClass(T.search)
                     },
                     searchSelection: function () {
                         return S.has.search() && 1 === N.parent(D.dropdown).length
                     },
                     selection: function () {
                         return M.hasClass(T.selection)
                     },
                     userValue: function (t) {
                         return -1 !== e.inArray(t, S.get.userValues())
                     },
                     upward: function (e) {
                         return (e || M).hasClass(T.upward)
                     },
                     visible: function (e) {
                         return e ? e.hasClass(T.visible) : Q.hasClass(T.visible)
                     },
                     verticallyScrollableContext: function () {
                         var e = L.get(0) !== t && L.css("overflow-y");
                         return "auto" == e || "scroll" == e
                     },
                     horizontallyScrollableContext: function () {
                         var e = L.get(0) !== t && L.css("overflow-X");
                         return "auto" == e || "scroll" == e
                     }
                 },
                 can: {
                     activate: function (e) {
                         return !!k.useLabels || (!S.has.maxSelections() || !(!S.has.maxSelections() || !e.hasClass(T.active)))
                     },
                     openDownward: function (e) {
                         var n, i, o = e || Q,
                             a = !0;
                         return o.addClass(T.loading), i = {
                             context: {
                                 offset: L.get(0) === t ? {
                                     top: 0,
                                     left: 0
                                 } : L.offset(),
                                 scrollTop: L.scrollTop(),
                                 height: L.outerHeight()
                             },
                             menu: {
                                 offset: o.offset(),
                                 height: o.outerHeight()
                             }
                         }, S.is.verticallyScrollableContext() && (i.menu.offset.top += i.context.scrollTop), (n = {
                             above: i.context.scrollTop <= i.menu.offset.top - i.context.offset.top - i.menu.height,
                             below: i.context.scrollTop + i.context.height >= i.menu.offset.top - i.context.offset.top + i.menu.height
                         }).below ? (S.verbose("Dropdown can fit in context downward", n), a = !0) : n.below || n.above ? (S.verbose("Dropdown cannot fit below, opening upward", n), a = !1) : (S.verbose("Dropdown cannot fit in either direction, favoring downward", n), a = !0), o.removeClass(T.loading), a
                     },
                     openRightward: function (e) {
                         var n, i, o = e || Q,
                             a = !0;
                         return o.addClass(T.loading), i = {
                             context: {
                                 offset: L.get(0) === t ? {
                                     top: 0,
                                     left: 0
                                 } : L.offset(),
                                 scrollLeft: L.scrollLeft(),
                                 width: L.outerWidth()
                             },
                             menu: {
                                 offset: o.offset(),
                                 width: o.outerWidth()
                             }
                         }, S.is.horizontallyScrollableContext() && (i.menu.offset.left += i.context.scrollLeft), (n = i.menu.offset.left - i.context.offset.left + i.menu.width >= i.context.scrollLeft + i.context.width) && (S.verbose("Dropdown cannot fit in context rightward", n), a = !1), o.removeClass(T.loading), a
                     },
                     click: function () {
                         return c || "click" == k.on
                     },
                     extendSelect: function () {
                         return k.allowAdditions || k.apiSettings
                     },
                     show: function () {
                         return !S.is.disabled() && (S.has.items() || S.has.message())
                     },
                     useAPI: function () {
                         return e.fn.api !== i
                     }
                 },
                 animate: {
                     show: function (t, n) {
                         var o, a = n || Q,
                             r = n ? function () {} : function () {
                                 S.hideSubMenus(), S.hideOthers(), S.set.active()
                             };
                         t = e.isFunction(t) ? t : function () {}, S.verbose("Doing menu show animation", a), S.set.direction(n), o = S.get.transition(n), S.is.selection() && S.set.scrollPosition(S.get.selectedItem(), !0), (S.is.hidden(a) || S.is.animating(a)) && ("none" == o ? (r(), a.transition("show"), t.call(K)) : e.fn.transition !== i && M.transition("is supported") ? a.transition({
                             animation: o + " in",
                             debug: k.debug,
                             verbose: k.verbose,
                             duration: k.duration,
                             queue: !0,
                             onStart: r,
                             onComplete: function () {
                                 t.call(K)
                             }
                         }) : S.error(q.noTransition, o))
                     },
                     hide: function (t, n) {
                         var o = n || Q,
                             a = (n ? k.duration : k.duration, n ? function () {} : function () {
                                 S.can.click() && S.unbind.intent(), S.remove.active()
                             }),
                             r = S.get.transition(n);
                         t = e.isFunction(t) ? t : function () {}, (S.is.visible(o) || S.is.animating(o)) && (S.verbose("Doing menu hide animation", o), "none" == r ? (a(), o.transition("hide"), t.call(K)) : e.fn.transition !== i && M.transition("is supported") ? o.transition({
                             animation: r + " out",
                             duration: k.duration,
                             debug: k.debug,
                             verbose: k.verbose,
                             queue: !1,
                             onStart: a,
                             onComplete: function () {
                                 t.call(K)
                             }
                         }) : S.error(q.transition))
                     }
                 },
                 hideAndClear: function () {
                     S.remove.searchTerm(), S.has.maxSelections() || (S.has.search() ? S.hide(function () {
                         S.remove.filteredItem()
                     }) : S.hide())
                 },
                 delay: {
                     show: function () {
                         S.verbose("Delaying show event to ensure user intent"), clearTimeout(S.timer), S.timer = setTimeout(S.show, k.delay.show)
                     },
                     hide: function () {
                         S.verbose("Delaying hide event to ensure user intent"), clearTimeout(S.timer), S.timer = setTimeout(S.hide, k.delay.hide)
                     }
                 },
                 escape: {
                     value: function (t) {
                         var n = e.isArray(t),
                             i = "string" == typeof t,
                             o = !i && !n,
                             a = i && -1 !== t.search(O.quote),
                             r = [];
                         return o || !a ? t : (S.debug("Encoding quote values for use in select", t), n ? (e.each(t, function (e, t) {
                             r.push(t.replace(O.quote, "&quot;"))
                         }), r) : t.replace(O.quote, "&quot;"))
                     },
                     string: function (e) {
                         return (e = String(e)).replace(O.escape, "\\$&")
                     }
                 },
                 setting: function (t, n) {
                     if (S.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, k, t);
                     else {
                         if (n === i) return k[t];
                         e.isPlainObject(k[t]) ? e.extend(!0, k[t], n) : k[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, S, t);
                     else {
                         if (n === i) return S[t];
                         S[t] = n
                     }
                 },
                 debug: function () {
                     !k.silent && k.debug && (k.performance ? S.performance.log(arguments) : (S.debug = Function.prototype.bind.call(console.info, console, k.name + ":"), S.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !k.silent && k.verbose && k.debug && (k.performance ? S.performance.log(arguments) : (S.verbose = Function.prototype.bind.call(console.info, console, k.name + ":"), S.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     k.silent || (S.error = Function.prototype.bind.call(console.error, console, k.name + ":"), S.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         k.performance && (n = (t = (new Date).getTime()) - (u || t), u = t, d.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: K,
                             "Execution Time": n
                         })), clearTimeout(S.performance.timer), S.performance.timer = setTimeout(S.performance.display, 500)
                     },
                     display: function () {
                         var t = k.name + ":",
                             n = 0;
                         u = !1, clearTimeout(S.performance.timer), e.each(d, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", l && (t += " '" + l + "'"), (console.group !== i || console.table !== i) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), d = []
                     }
                 },
                 invoke: function (t, n, o) {
                     var r, s, l, c = J;
                     return n = n || g, o = K || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (S.error(q.method, t), !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s
                 }
             }, m ? (J === i && S.initialize(), S.invoke(f)) : (J !== i && J.invoke("destroy"), S.initialize())
         }), a !== i ? a : r
     }, e.fn.dropdown.settings = {
         silent: !1,
         debug: !1,
         verbose: !1,
         performance: !0,
         on: "click",
         action: "activate",
         values: !1,
         apiSettings: !1,
         selectOnKeydown: !0,
         minCharacters: 0,
         filterRemoteData: !1,
         saveRemoteData: !0,
         throttle: 200,
         context: t,
         direction: "auto",
         keepOnScreen: !0,
         match: "both",
         fullTextSearch: !1,
         placeholder: "auto",
         preserveHTML: !0,
         sortSelect: !1,
         forceSelection: !0,
         allowAdditions: !1,
         ignoreCase: !1,
         hideAdditions: !0,
         maxSelections: !1,
         useLabels: !0,
         delimiter: ",",
         showOnFocus: !0,
         allowReselection: !1,
         allowTab: !0,
         allowCategorySelection: !1,
         fireOnInit: !1,
         transition: "auto",
         duration: 200,
         glyphWidth: 1.037,
         label: {
             transition: "scale",
             duration: 200,
             variation: !1
         },
         delay: {
             hide: 300,
             show: 200,
             search: 20,
             touch: 50
         },
         onChange: function (e, t, n) {},
         onAdd: function (e, t, n) {},
         onRemove: function (e, t, n) {},
         onLabelSelect: function (e) {},
         onLabelCreate: function (t, n) {
             return e(this)
         },
         onLabelRemove: function (e) {
             return !0
         },
         onNoResults: function (e) {
             return !0
         },
         onShow: function () {},
         onHide: function () {},
         name: "Dropdown",
         namespace: "dropdown",
         message: {
             addResult: "Add <b>{term}</b>",
             count: "{count} selected",
             maxSelections: "Max {maxCount} selections",
             noResults: "No results found.",
             serverError: "There was an error contacting the server"
         },
         error: {
             action: "You called a dropdown action that was not defined",
             alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown",
             labels: "Allowing user additions currently requires the use of labels.",
             missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values",
             method: "The method you called is not defined.",
             noAPI: "The API module is required to load resources remotely",
             noStorage: "Saving remote data requires session storage",
             noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"
         },
         regExp: {
             escape: /[-[\]{}()*+?.,\\^$|#\s]/g,
             quote: /"/g
         },
         metadata: {
             defaultText: "defaultText",
             defaultValue: "defaultValue",
             placeholderText: "placeholder",
             text: "text",
             value: "value"
         },
         fields: {
             remoteValues: "results",
             values: "values",
             disabled: "disabled",
             name: "name",
             value: "value",
             text: "text"
         },
         keys: {
             backspace: 8,
             delimiter: 188,
             deleteKey: 46,
             enter: 13,
             escape: 27,
             pageUp: 33,
             pageDown: 34,
             leftArrow: 37,
             upArrow: 38,
             rightArrow: 39,
             downArrow: 40
         },
         selector: {
             addition: ".addition",
             dropdown: ".ui.dropdown",
             hidden: ".hidden",
             icon: "> .dropdown.icon",
             input: '> input[type="hidden"], > select',
             item: ".item",
             label: "> .label",
             remove: "> .label > .delete.icon",
             siblingLabel: ".label",
             menu: ".menu",
             message: ".message",
             menuIcon: ".dropdown.icon",
             search: "input.search, .menu > .search > input, .menu input.search",
             sizer: "> input.sizer",
             text: "> .text:not(.icon)",
             unselectable: ".disabled, .filtered"
         },
         className: {
             active: "active",
             addition: "addition",
             animating: "animating",
             disabled: "disabled",
             empty: "empty",
             dropdown: "ui dropdown",
             filtered: "filtered",
             hidden: "hidden transition",
             item: "item",
             label: "ui label",
             loading: "loading",
             menu: "menu",
             message: "message",
             multiple: "multiple",
             placeholder: "default",
             sizer: "sizer",
             search: "search",
             selected: "selected",
             selection: "selection",
             upward: "upward",
             leftward: "left",
             visible: "visible"
         }
     }, e.fn.dropdown.settings.templates = {
         dropdown: function (t) {
             var n = t.placeholder || !1,
                 i = (t.values, "");
             return i += '<i class="dropdown icon"></i>', t.placeholder ? i += '<div class="default text">' + n + "</div>" : i += '<div class="text"></div>', i += '<div class="menu">', e.each(t.values, function (e, t) {
                 i += t.disabled ? '<div class="disabled item" data-value="' + t.value + '">' + t.name + "</div>" : '<div class="item" data-value="' + t.value + '">' + t.name + "</div>"
             }), i += "</div>"
         },
         menu: function (t, n) {
             var i = t[n.values] || {},
                 o = "";
             return e.each(i, function (e, t) {
                 var i = t[n.text] ? 'data-text="' + t[n.text] + '"' : "",
                     a = t[n.disabled] ? "disabled " : "";
                 o += '<div class="' + a + 'item" data-value="' + t[n.value] + '"' + i + ">", o += t[n.name], o += "</div>"
             }), o
         },
         label: function (e, t) {
             return t + '<i class="delete icon"></i>'
         },
         message: function (e) {
             return e
         },
         addition: function (e) {
             return e
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.embed = function (n) {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             l = [],
             c = arguments[0],
             u = "string" == typeof c,
             d = [].slice.call(arguments, 1);
         return a.each(function () {
             var f, m = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.embed.settings, n) : e.extend({}, e.fn.embed.settings),
                 g = m.selector,
                 p = m.className,
                 h = m.sources,
                 v = m.error,
                 b = m.metadata,
                 y = m.namespace,
                 x = m.templates,
                 C = "." + y,
                 w = "module-" + y,
                 S = (e(t), e(this)),
                 k = (S.find(g.placeholder), S.find(g.icon), S.find(g.embed)),
                 T = this,
                 A = S.data(w);
             f = {
                 initialize: function () {
                     f.debug("Initializing embed"), f.determine.autoplay(), f.create(), f.bind.events(), f.instantiate()
                 },
                 instantiate: function () {
                     f.verbose("Storing instance of module", f), A = f, S.data(w, f)
                 },
                 destroy: function () {
                     f.verbose("Destroying previous instance of embed"), f.reset(), S.removeData(w).off(C)
                 },
                 refresh: function () {
                     f.verbose("Refreshing selector cache"), S.find(g.placeholder), S.find(g.icon), k = S.find(g.embed)
                 },
                 bind: {
                     events: function () {
                         f.has.placeholder() && (f.debug("Adding placeholder events"), S.on("click" + C, g.placeholder, f.createAndShow).on("click" + C, g.icon, f.createAndShow))
                     }
                 },
                 create: function () {
                     f.get.placeholder() ? f.createPlaceholder() : f.createAndShow()
                 },
                 createPlaceholder: function (e) {
                     var t = f.get.icon(),
                         n = f.get.url();
                     f.generate.embed(n);
                     e = e || f.get.placeholder(), S.html(x.placeholder(e, t)), f.debug("Creating placeholder for embed", e, t)
                 },
                 createEmbed: function (t) {
                     f.refresh(), t = t || f.get.url(), k = e("<div/>").addClass(p.embed).html(f.generate.embed(t)).appendTo(S), m.onCreate.call(T, t), f.debug("Creating embed object", k)
                 },
                 changeEmbed: function (e) {
                     k.html(f.generate.embed(e))
                 },
                 createAndShow: function () {
                     f.createEmbed(), f.show()
                 },
                 change: function (e, t, n) {
                     f.debug("Changing video to ", e, t, n), S.data(b.source, e).data(b.id, t), n ? S.data(b.url, n) : S.removeData(b.url), f.has.embed() ? f.changeEmbed() : f.create()
                 },
                 reset: function () {
                     f.debug("Clearing embed and showing placeholder"), f.remove.active(), f.remove.embed(), f.showPlaceholder(), m.onReset.call(T)
                 },
                 show: function () {
                     f.debug("Showing embed"), f.set.active(), m.onDisplay.call(T)
                 },
                 hide: function () {
                     f.debug("Hiding embed"), f.showPlaceholder()
                 },
                 showPlaceholder: function () {
                     f.debug("Showing placeholder image"), f.remove.active(), m.onPlaceholderDisplay.call(T)
                 },
                 get: {
                     id: function () {
                         return m.id || S.data(b.id)
                     },
                     placeholder: function () {
                         return m.placeholder || S.data(b.placeholder)
                     },
                     icon: function () {
                         return m.icon ? m.icon : S.data(b.icon) !== i ? S.data(b.icon) : f.determine.icon()
                     },
                     source: function (e) {
                         return m.source ? m.source : S.data(b.source) !== i ? S.data(b.source) : f.determine.source()
                     },
                     type: function () {
                         var e = f.get.source();
                         return h[e] !== i && h[e].type
                     },
                     url: function () {
                         return m.url ? m.url : S.data(b.url) !== i ? S.data(b.url) : f.determine.url()
                     }
                 },
                 determine: {
                     autoplay: function () {
                         f.should.autoplay() && (m.autoplay = !0)
                     },
                     source: function (t) {
                         var n = !1;
                         return (t = t || f.get.url()) && e.each(h, function (e, i) {
                             if (-1 !== t.search(i.domain)) return n = e, !1
                         }), n
                     },
                     icon: function () {
                         var e = f.get.source();
                         return h[e] !== i && h[e].icon
                     },
                     url: function () {
                         var e, t = m.id || S.data(b.id),
                             n = m.source || S.data(b.source);
                         return (e = h[n] !== i && h[n].url.replace("{id}", t)) && S.data(b.url, e), e
                     }
                 },
                 set: {
                     active: function () {
                         S.addClass(p.active)
                     }
                 },
                 remove: {
                     active: function () {
                         S.removeClass(p.active)
                     },
                     embed: function () {
                         k.empty()
                     }
                 },
                 encode: {
                     parameters: function (e) {
                         var t, n = [];
                         for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                         return n.join("&amp;")
                     }
                 },
                 generate: {
                     embed: function (e) {
                         f.debug("Generating embed html");
                         var t, n, i = f.get.source();
                         return (e = f.get.url(e)) ? (n = f.generate.parameters(i), t = x.iframe(e, n)) : f.error(v.noURL, S), t
                     },
                     parameters: function (t, n) {
                         var o = h[t] && h[t].parameters !== i ? h[t].parameters(m) : {};
                         return (n = n || m.parameters) && (o = e.extend({}, o, n)), o = m.onEmbed(o), f.encode.parameters(o)
                     }
                 },
                 has: {
                     embed: function () {
                         return k.length > 0
                     },
                     placeholder: function () {
                         return m.placeholder || S.data(b.placeholder)
                     }
                 },
                 should: {
                     autoplay: function () {
                         return "auto" === m.autoplay ? m.placeholder || S.data(b.placeholder) !== i : m.autoplay
                     }
                 },
                 is: {
                     video: function () {
                         return "video" == f.get.type()
                     }
                 },
                 setting: function (t, n) {
                     if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : m[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 debug: function () {
                     !m.silent && m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !m.silent && m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     m.silent || (f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         m.performance && (n = (t = (new Date).getTime()) - (s || t), s = t, l.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: T,
                             "Execution Time": n
                         })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                     },
                     display: function () {
                         var t = m.name + ":",
                             n = 0;
                         s = !1, clearTimeout(f.performance.timer), e.each(l, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), l = []
                     }
                 },
                 invoke: function (t, n, a) {
                     var r, s, l, c = A;
                     return n = n || d, a = T || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (f.error(v.method, t), !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
                 }
             }, u ? (A === i && f.initialize(), f.invoke(c)) : (A !== i && A.invoke("destroy"), f.initialize())
         }), o !== i ? o : this
     }, e.fn.embed.settings = {
         name: "Embed",
         namespace: "embed",
         silent: !1,
         debug: !1,
         verbose: !1,
         performance: !0,
         icon: !1,
         source: !1,
         url: !1,
         id: !1,
         autoplay: "auto",
         color: "#444444",
         hd: !0,
         brandedUI: !1,
         parameters: !1,
         onDisplay: function () {},
         onPlaceholderDisplay: function () {},
         onReset: function () {},
         onCreate: function (e) {},
         onEmbed: function (e) {
             return e
         },
         metadata: {
             id: "id",
             icon: "icon",
             placeholder: "placeholder",
             source: "source",
             url: "url"
         },
         error: {
             noURL: "No URL specified",
             method: "The method you called is not defined"
         },
         className: {
             active: "active",
             embed: "embed"
         },
         selector: {
             embed: ".embed",
             placeholder: ".placeholder",
             icon: ".icon"
         },
         sources: {
             youtube: {
                 name: "youtube",
                 type: "video",
                 icon: "video play",
                 domain: "youtube.com",
                 url: "//www.youtube.com/embed/{id}",
                 parameters: function (e) {
                     return {
                         autohide: !e.brandedUI,
                         autoplay: e.autoplay,
                         color: e.color || i,
                         hq: e.hd,
                         jsapi: e.api,
                         modestbranding: !e.brandedUI
                     }
                 }
             },
             vimeo: {
                 name: "vimeo",
                 type: "video",
                 icon: "video play",
                 domain: "vimeo.com",
                 url: "//player.vimeo.com/video/{id}",
                 parameters: function (e) {
                     return {
                         api: e.api,
                         autoplay: e.autoplay,
                         byline: e.brandedUI,
                         color: e.color || i,
                         portrait: e.brandedUI,
                         title: e.brandedUI
                     }
                 }
             }
         },
         templates: {
             iframe: function (e, t) {
                 var n = e;
                 return t && (n += "?" + t), '<iframe src="' + n + '" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
             },
             placeholder: function (e, t) {
                 var n = "";
                 return t && (n += '<i class="' + t + ' icon"></i>'), e && (n += '<img class="placeholder" src="' + e + '">'), n
             }
         },
         api: !1,
         onPause: function () {},
         onPlay: function () {},
         onStop: function () {}
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.modal = function (o) {
         var a, r = e(this),
             s = e(t),
             l = e(n),
             c = e("body"),
             u = r.selector || "",
             d = (new Date).getTime(),
             f = [],
             m = arguments[0],
             g = "string" == typeof m,
             p = [].slice.call(arguments, 1),
             h = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                 setTimeout(e, 0)
             };
         return r.each(function () {
             var r, v, b, y, x, C, w, S, k, T = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.modal.settings, o) : e.extend({}, e.fn.modal.settings),
                 A = T.selector,
                 R = T.className,
                 P = T.namespace,
                 E = T.error,
                 F = "." + P,
                 O = "module-" + P,
                 D = e(this),
                 q = e(T.context),
                 j = D.find(A.close),
                 z = this,
                 I = D.data(O),
                 M = !1;
             k = {
                 initialize: function () {
                     k.verbose("Initializing dimmer", q), k.create.id(), k.create.dimmer(), k.refreshModals(), k.bind.events(), T.observeChanges && k.observeChanges(), k.instantiate()
                 },
                 instantiate: function () {
                     k.verbose("Storing instance of modal"), I = k, D.data(O, I)
                 },
                 create: {
                     dimmer: function () {
                         var t = {
                                 debug: T.debug,
                                 variation: !T.centered && "top aligned",
                                 dimmerName: "modals"
                             },
                             n = e.extend(!0, t, T.dimmerSettings);
                         e.fn.dimmer !== i ? (k.debug("Creating dimmer"), y = q.dimmer(n), T.detachable ? (k.verbose("Modal is detachable, moving content into dimmer"), y.dimmer("add content", D)) : k.set.undetached(), x = y.dimmer("get dimmer")) : k.error(E.dimmer)
                     },
                     id: function () {
                         w = (Math.random().toString(16) + "000000000").substr(2, 8), C = "." + w, k.verbose("Creating unique id for element", w)
                     }
                 },
                 destroy: function () {
                     k.verbose("Destroying previous modal"), D.removeData(O).off(F), s.off(C), x.off(C), j.off(F), q.dimmer("destroy")
                 },
                 observeChanges: function () {
                     "MutationObserver" in t && ((S = new MutationObserver(function (e) {
                         k.debug("DOM tree modified, refreshing"), k.refresh()
                     })).observe(z, {
                         childList: !0,
                         subtree: !0
                     }), k.debug("Setting up mutation observer", S))
                 },
                 refresh: function () {
                     k.remove.scrolling(), k.cacheSizes(), k.set.screenHeight(), k.set.type()
                 },
                 refreshModals: function () {
                     v = D.siblings(A.modal), r = v.add(D)
                 },
                 attachEvents: function (t, n) {
                     var i = e(t);
                     n = e.isFunction(k[n]) ? k[n] : k.toggle, i.length > 0 ? (k.debug("Attaching modal events to element", t, n), i.off(F).on("click" + F, n)) : k.error(E.notFound, t)
                 },
                 bind: {
                     events: function () {
                         k.verbose("Attaching events"), D.on("click" + F, A.close, k.event.close).on("click" + F, A.approve, k.event.approve).on("click" + F, A.deny, k.event.deny), s.on("resize" + C, k.event.resize)
                     }
                 },
                 get: {
                     id: function () {
                         return (Math.random().toString(16) + "000000000").substr(2, 8)
                     }
                 },
                 event: {
                     approve: function () {
                         M || !1 === T.onApprove.call(z, e(this)) ? k.verbose("Approve callback returned false cancelling hide") : (M = !0, k.hide(function () {
                             M = !1
                         }))
                     },
                     deny: function () {
                         M || !1 === T.onDeny.call(z, e(this)) ? k.verbose("Deny callback returned false cancelling hide") : (M = !0, k.hide(function () {
                             M = !1
                         }))
                     },
                     close: function () {
                         k.hide()
                     },
                     click: function (t) {
                         if (T.closable) {
                             var i = e(t.target).closest(A.modal).length > 0,
                                 o = e.contains(n.documentElement, t.target);
                             !i && o && k.is.active() && (k.debug("Dimmer clicked, hiding all modals"), k.remove.clickaway(), T.allowMultiple ? k.hide() : k.hideAll())
                         } else k.verbose("Dimmer clicked but closable setting is disabled")
                     },
                     debounce: function (e, t) {
                         clearTimeout(k.timer), k.timer = setTimeout(e, t)
                     },
                     keyboard: function (e) {
                         27 == e.which && (T.closable ? (k.debug("Escape key pressed hiding modal"), k.hide()) : k.debug("Escape key pressed, but closable is set to false"), e.preventDefault())
                     },
                     resize: function () {
                         y.dimmer("is active") && (k.is.animating() || k.is.active()) && h(k.refresh)
                     }
                 },
                 toggle: function () {
                     k.is.active() || k.is.animating() ? k.hide() : k.show()
                 },
                 show: function (t) {
                     t = e.isFunction(t) ? t : function () {}, k.refreshModals(), k.set.dimmerSettings(), k.showModal(t)
                 },
                 hide: function (t) {
                     t = e.isFunction(t) ? t : function () {}, k.refreshModals(), k.hideModal(t)
                 },
                 showModal: function (t) {
                     t = e.isFunction(t) ? t : function () {}, k.is.animating() || !k.is.active() ? (k.showDimmer(), k.cacheSizes(), k.set.screenHeight(), k.set.type(), k.set.clickaway(), !T.allowMultiple && k.others.active() ? k.hideOthers(k.showModal) : (T.allowMultiple && T.detachable && D.detach().appendTo(x), T.onShow.call(z), T.transition && e.fn.transition !== i && D.transition("is supported") ? (k.debug("Showing modal with css animations"), D.transition({
                         debug: T.debug,
                         animation: T.transition + " in",
                         queue: T.queue,
                         duration: T.duration,
                         useFailSafe: !0,
                         onComplete: function () {
                             T.onVisible.apply(z), T.keyboardShortcuts && k.add.keyboardShortcuts(), k.save.focus(), k.set.active(), T.autofocus && k.set.autofocus(), t()
                         }
                     })) : k.error(E.noTransition))) : k.debug("Modal is already visible")
                 },
                 hideModal: function (t, n) {
                     t = e.isFunction(t) ? t : function () {}, k.debug("Hiding modal"), !1 !== T.onHide.call(z, e(this)) ? (k.is.animating() || k.is.active()) && (T.transition && e.fn.transition !== i && D.transition("is supported") ? (k.remove.active(), D.transition({
                         debug: T.debug,
                         animation: T.transition + " out",
                         queue: T.queue,
                         duration: T.duration,
                         useFailSafe: !0,
                         onStart: function () {
                             k.others.active() || n || k.hideDimmer(), T.keyboardShortcuts && k.remove.keyboardShortcuts()
                         },
                         onComplete: function () {
                             T.onHidden.call(z), k.restore.focus(), t()
                         }
                     })) : k.error(E.noTransition)) : k.verbose("Hide callback returned false cancelling hide")
                 },
                 showDimmer: function () {
                     y.dimmer("is animating") || !y.dimmer("is active") ? (k.debug("Showing dimmer"), y.dimmer("show")) : k.debug("Dimmer already visible")
                 },
                 hideDimmer: function () {
                     y.dimmer("is animating") || y.dimmer("is active") ? y.dimmer("hide", function () {
                         k.remove.clickaway(), k.remove.screenHeight()
                     }) : k.debug("Dimmer is not visible cannot hide")
                 },
                 hideAll: function (t) {
                     var n = r.filter("." + R.active + ", ." + R.animating);
                     t = e.isFunction(t) ? t : function () {}, n.length > 0 && (k.debug("Hiding all visible modals"), k.hideDimmer(), n.modal("hide modal", t))
                 },
                 hideOthers: function (t) {
                     var n = v.filter("." + R.active + ", ." + R.animating);
                     t = e.isFunction(t) ? t : function () {}, n.length > 0 && (k.debug("Hiding other modals", v), n.modal("hide modal", t, !0))
                 },
                 others: {
                     active: function () {
                         return v.filter("." + R.active).length > 0
                     },
                     animating: function () {
                         return v.filter("." + R.animating).length > 0
                     }
                 },
                 add: {
                     keyboardShortcuts: function () {
                         k.verbose("Adding keyboard shortcuts"), l.on("keyup" + F, k.event.keyboard)
                     }
                 },
                 save: {
                     focus: function () {
                         e(n.activeElement).closest(D).length > 0 || (b = e(n.activeElement).blur())
                     }
                 },
                 restore: {
                     focus: function () {
                         b && b.length > 0 && b.focus()
                     }
                 },
                 remove: {
                     active: function () {
                         D.removeClass(R.active)
                     },
                     clickaway: function () {
                         x.off("click" + C)
                     },
                     bodyStyle: function () {
                         "" === c.attr("style") && (k.verbose("Removing style attribute"), c.removeAttr("style"))
                     },
                     screenHeight: function () {
                         k.debug("Removing page height"), c.css("height", "")
                     },
                     keyboardShortcuts: function () {
                         k.verbose("Removing keyboard shortcuts"), l.off("keyup" + F)
                     },
                     scrolling: function () {
                         y.removeClass(R.scrolling), D.removeClass(R.scrolling)
                     }
                 },
                 cacheSizes: function () {
                     D.addClass(R.loading);
                     var o = D.prop("scrollHeight"),
                         a = D.outerHeight();
                     k.cache !== i && 0 === a || (k.cache = {
                         pageHeight: e(n).outerHeight(),
                         height: a + T.offset,
                         scrollHeight: o + T.offset,
                         contextHeight: "body" == T.context ? e(t).height() : y.height()
                     }, k.cache.topOffset = -k.cache.height / 2), D.removeClass(R.loading), k.debug("Caching modal and container sizes", k.cache)
                 },
                 can: {
                     fit: function () {
                         var e = k.cache.contextHeight,
                             t = k.cache.contextHeight / 2,
                             n = k.cache.topOffset,
                             i = k.cache.scrollHeight,
                             o = k.cache.height,
                             a = T.padding;
                         return i > o ? t + n + i + a < e : o + 2 * a < e
                     }
                 },
                 is: {
                     active: function () {
                         return D.hasClass(R.active)
                     },
                     animating: function () {
                         return D.transition("is supported") ? D.transition("is animating") : D.is(":visible")
                     },
                     scrolling: function () {
                         return y.hasClass(R.scrolling)
                     },
                     modernBrowser: function () {
                         return !(t.ActiveXObject || "ActiveXObject" in t)
                     }
                 },
                 set: {
                     autofocus: function () {
                         var e = D.find("[tabindex], :input").filter(":visible"),
                             t = e.filter("[autofocus]"),
                             n = t.length > 0 ? t.first() : e.first();
                         n.length > 0 && n.focus()
                     },
                     clickaway: function () {
                         x.on("click" + C, k.event.click)
                     },
                     dimmerSettings: function () {
                         if (e.fn.dimmer !== i) {
                             var t = {
                                     debug: T.debug,
                                     dimmerName: "modals",
                                     closable: "auto",
                                     variation: !T.centered && "top aligned",
                                     duration: {
                                         show: T.duration,
                                         hide: T.duration
                                     }
                                 },
                                 n = e.extend(!0, t, T.dimmerSettings);
                             T.inverted ? (n.variation = n.variation !== i ? n.variation + " inverted" : "inverted", x.addClass(R.inverted)) : x.removeClass(R.inverted), T.blurring ? y.addClass(R.blurring) : y.removeClass(R.blurring), q.dimmer("setting", n)
                         } else k.error(E.dimmer)
                     },
                     screenHeight: function () {
                         k.can.fit() ? c.css("height", "") : (k.debug("Modal is taller than page content, resizing page height"), c.css("height", k.cache.height + 2 * T.padding))
                     },
                     active: function () {
                         D.addClass(R.active)
                     },
                     scrolling: function () {
                         y.addClass(R.scrolling), D.addClass(R.scrolling)
                     },
                     type: function () {
                         k.can.fit() ? (k.verbose("Modal fits on screen"), k.others.active() || k.others.animating() || k.remove.scrolling()) : (k.verbose("Modal cannot fit on screen setting to scrolling"), k.set.scrolling())
                     },
                     undetached: function () {
                         y.addClass(R.undetached)
                     }
                 },
                 setting: function (t, n) {
                     if (k.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, T, t);
                     else {
                         if (n === i) return T[t];
                         e.isPlainObject(T[t]) ? e.extend(!0, T[t], n) : T[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, k, t);
                     else {
                         if (n === i) return k[t];
                         k[t] = n
                     }
                 },
                 debug: function () {
                     !T.silent && T.debug && (T.performance ? k.performance.log(arguments) : (k.debug = Function.prototype.bind.call(console.info, console, T.name + ":"), k.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !T.silent && T.verbose && T.debug && (T.performance ? k.performance.log(arguments) : (k.verbose = Function.prototype.bind.call(console.info, console, T.name + ":"), k.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     T.silent || (k.error = Function.prototype.bind.call(console.error, console, T.name + ":"), k.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         T.performance && (n = (t = (new Date).getTime()) - (d || t), d = t, f.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: z,
                             "Execution Time": n
                         })), clearTimeout(k.performance.timer), k.performance.timer = setTimeout(k.performance.display, 500)
                     },
                     display: function () {
                         var t = T.name + ":",
                             n = 0;
                         d = !1, clearTimeout(k.performance.timer), e.each(f, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== i || console.table !== i) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), f = []
                     }
                 },
                 invoke: function (t, n, o) {
                     var r, s, l, c = I;
                     return n = n || p, o = z || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s
                 }
             }, g ? (I === i && k.initialize(), k.invoke(m)) : (I !== i && I.invoke("destroy"), k.initialize())
         }), a !== i ? a : this
     }, e.fn.modal.settings = {
         name: "Modal",
         namespace: "modal",
         silent: !1,
         debug: !1,
         verbose: !1,
         performance: !0,
         observeChanges: !1,
         allowMultiple: !1,
         detachable: !0,
         closable: !0,
         autofocus: !0,
         inverted: !1,
         blurring: !1,
         centered: !0,
         dimmerSettings: {
             closable: !1,
             useCSS: !0
         },
         keyboardShortcuts: !0,
         context: "body",
         queue: !1,
         duration: 500,
         offset: 0,
         transition: "scale",
         padding: 50,
         onShow: function () {},
         onVisible: function () {},
         onHide: function () {
             return !0
         },
         onHidden: function () {},
         onApprove: function () {
             return !0
         },
         onDeny: function () {
             return !0
         },
         selector: {
             close: "> .close",
             approve: ".actions .positive, .actions .approve, .actions .ok",
             deny: ".actions .negative, .actions .deny, .actions .cancel",
             modal: ".ui.modal"
         },
         error: {
             dimmer: "UI Dimmer, a required component is not included in this page",
             method: "The method you called is not defined.",
             notFound: "The element you specified could not be found"
         },
         className: {
             active: "active",
             animating: "animating",
             blurring: "blurring",
             inverted: "inverted",
             loading: "loading",
             scrolling: "scrolling",
             undetached: "undetached"
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.nag = function (n) {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             l = [],
             c = arguments[0],
             u = "string" == typeof c,
             d = [].slice.call(arguments, 1);
         return a.each(function () {
             var a, f = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.nag.settings, n) : e.extend({}, e.fn.nag.settings),
                 m = (f.className, f.selector),
                 g = f.error,
                 p = f.namespace,
                 h = "." + p,
                 v = p + "-module",
                 b = e(this),
                 y = (b.find(m.close), f.context ? e(f.context) : e("body")),
                 x = this,
                 C = b.data(v);
             t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;
             a = {
                 initialize: function () {
                     a.verbose("Initializing element"), b.on("click" + h, m.close, a.dismiss).data(v, a), f.detachable && b.parent()[0] !== y[0] && b.detach().prependTo(y), f.displayTime > 0 && setTimeout(a.hide, f.displayTime), a.show()
                 },
                 destroy: function () {
                     a.verbose("Destroying instance"), b.removeData(v).off(h)
                 },
                 show: function () {
                     a.should.show() && !b.is(":visible") && (a.debug("Showing nag", f.animation.show), "fade" == f.animation.show ? b.fadeIn(f.duration, f.easing) : b.slideDown(f.duration, f.easing))
                 },
                 hide: function () {
                     a.debug("Showing nag", f.animation.hide), "fade" == f.animation.show ? b.fadeIn(f.duration, f.easing) : b.slideUp(f.duration, f.easing)
                 },
                 onHide: function () {
                     a.debug("Removing nag", f.animation.hide), b.remove(), f.onHide && f.onHide()
                 },
                 dismiss: function (e) {
                     f.storageMethod && a.storage.set(f.key, f.value), a.hide(), e.stopImmediatePropagation(), e.preventDefault()
                 },
                 should: {
                     show: function () {
                         return f.persist ? (a.debug("Persistent nag is set, can show nag"), !0) : a.storage.get(f.key) != f.value.toString() ? (a.debug("Stored value is not set, can show nag", a.storage.get(f.key)), !0) : (a.debug("Stored value is set, cannot show nag", a.storage.get(f.key)), !1)
                     }
                 },
                 get: {
                     storageOptions: function () {
                         var e = {};
                         return f.expires && (e.expires = f.expires), f.domain && (e.domain = f.domain), f.path && (e.path = f.path), e
                     }
                 },
                 clear: function () {
                     a.storage.remove(f.key)
                 },
                 storage: {
                     set: function (n, o) {
                         var r = a.get.storageOptions();
                         if ("localstorage" == f.storageMethod && t.localStorage !== i) t.localStorage.setItem(n, o), a.debug("Value stored using local storage", n, o);
                         else if ("sessionstorage" == f.storageMethod && t.sessionStorage !== i) t.sessionStorage.setItem(n, o), a.debug("Value stored using session storage", n, o);
                         else {
                             if (e.cookie === i) return void a.error(g.noCookieStorage);
                             e.cookie(n, o, r), a.debug("Value stored using cookie", n, o, r)
                         }
                     },
                     get: function (n, o) {
                         var r;
                         return "localstorage" == f.storageMethod && t.localStorage !== i ? r = t.localStorage.getItem(n) : "sessionstorage" == f.storageMethod && t.sessionStorage !== i ? r = t.sessionStorage.getItem(n) : e.cookie !== i ? r = e.cookie(n) : a.error(g.noCookieStorage), "undefined" != r && "null" != r && r !== i && null !== r || (r = i), r
                     },
                     remove: function (n) {
                         var o = a.get.storageOptions();
                         "localstorage" == f.storageMethod && t.localStorage !== i ? t.localStorage.removeItem(n) : "sessionstorage" == f.storageMethod && t.sessionStorage !== i ? t.sessionStorage.removeItem(n) : e.cookie !== i ? e.removeCookie(n, o) : a.error(g.noStorage)
                     }
                 },
                 setting: function (t, n) {
                     if (a.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, a, t);
                     else {
                         if (n === i) return a[t];
                         a[t] = n
                     }
                 },
                 debug: function () {
                     !f.silent && f.debug && (f.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), a.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !f.silent && f.verbose && f.debug && (f.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), a.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     f.silent || (a.error = Function.prototype.bind.call(console.error, console, f.name + ":"), a.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         f.performance && (n = (t = (new Date).getTime()) - (s || t), s = t, l.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: x,
                             "Execution Time": n
                         })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
                     },
                     display: function () {
                         var t = f.name + ":",
                             n = 0;
                         s = !1, clearTimeout(a.performance.timer), e.each(l, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), l = []
                     }
                 },
                 invoke: function (t, n, r) {
                     var s, l, c, u = C;
                     return n = n || d, r = x || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, o) {
                         var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(u[r]) && n != s) u = u[r];
                         else {
                             if (u[r] !== i) return l = u[r], !1;
                             if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (l = u[o], !1) : (a.error(g.method, t), !1);
                             u = u[o]
                         }
                     })), e.isFunction(l) ? c = l.apply(r, n) : l !== i && (c = l), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), l
                 }
             }, u ? (C === i && a.initialize(), a.invoke(c)) : (C !== i && C.invoke("destroy"), a.initialize())
         }), o !== i ? o : this
     }, e.fn.nag.settings = {
         name: "Nag",
         silent: !1,
         debug: !1,
         verbose: !1,
         performance: !0,
         namespace: "Nag",
         persist: !1,
         displayTime: 0,
         animation: {
             show: "slide",
             hide: "slide"
         },
         context: !1,
         detachable: !1,
         expires: 30,
         domain: !1,
         path: "/",
         storageMethod: "cookie",
         key: "nag",
         value: "dismiss",
         error: {
             noCookieStorage: "$.cookie is not included. A storage solution is required.",
             noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state",
             method: "The method you called is not defined."
         },
         className: {
             bottom: "bottom",
             fixed: "fixed"
         },
         selector: {
             close: ".close.icon"
         },
         speed: 500,
         easing: "easeOutQuad",
         onHide: function () {}
     }, e.extend(e.easing, {
         easeOutQuad: function (e, t, n, i, o) {
             return -i * (t /= o) * (t - 2) + n
         }
     })
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.popup = function (o) {
         var a, r = e(this),
             s = e(n),
             l = e(t),
             c = e("body"),
             u = r.selector || "",
             d = (new Date).getTime(),
             f = [],
             m = arguments[0],
             g = "string" == typeof m,
             p = [].slice.call(arguments, 1);
         return r.each(function () {
             var r, h, v, b, y, x, C = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.popup.settings, o) : e.extend({}, e.fn.popup.settings),
                 w = C.selector,
                 S = C.className,
                 k = C.error,
                 T = C.metadata,
                 A = C.namespace,
                 R = "." + C.namespace,
                 P = "module-" + A,
                 E = e(this),
                 F = e(C.context),
                 O = e(C.scrollContext),
                 D = e(C.boundary),
                 q = C.target ? e(C.target) : E,
                 j = 0,
                 z = !1,
                 I = !1,
                 M = this,
                 L = E.data(P);
             x = {
                 initialize: function () {
                     x.debug("Initializing", E), x.createID(), x.bind.events(), !x.exists() && C.preserve && x.create(), C.observeChanges && x.observeChanges(), x.instantiate()
                 },
                 instantiate: function () {
                     x.verbose("Storing instance", x), L = x, E.data(P, L)
                 },
                 observeChanges: function () {
                     "MutationObserver" in t && ((v = new MutationObserver(x.event.documentChanged)).observe(n, {
                         childList: !0,
                         subtree: !0
                     }), x.debug("Setting up mutation observer", v))
                 },
                 refresh: function () {
                     C.popup ? r = e(C.popup).eq(0) : C.inline && (r = q.nextAll(w.popup).eq(0), C.popup = r), C.popup ? (r.addClass(S.loading), h = x.get.offsetParent(), r.removeClass(S.loading), C.movePopup && x.has.popup() && x.get.offsetParent(r)[0] !== h[0] && (x.debug("Moving popup to the same offset parent as target"), r.detach().appendTo(h))) : h = C.inline ? x.get.offsetParent(q) : x.has.popup() ? x.get.offsetParent(r) : c, h.is("html") && h[0] !== c[0] && (x.debug("Setting page as offset parent"), h = c), x.get.variation() && x.set.variation()
                 },
                 reposition: function () {
                     x.refresh(), x.set.position()
                 },
                 destroy: function () {
                     x.debug("Destroying previous module"), v && v.disconnect(), r && !C.preserve && x.removePopup(), clearTimeout(x.hideTimer), clearTimeout(x.showTimer), x.unbind.close(), x.unbind.events(), E.removeData(P)
                 },
                 event: {
                     start: function (t) {
                         var n = e.isPlainObject(C.delay) ? C.delay.show : C.delay;
                         clearTimeout(x.hideTimer), I || (x.showTimer = setTimeout(x.show, n))
                     },
                     end: function () {
                         var t = e.isPlainObject(C.delay) ? C.delay.hide : C.delay;
                         clearTimeout(x.showTimer), x.hideTimer = setTimeout(x.hide, t)
                     },
                     touchstart: function (e) {
                         I = !0, x.show()
                     },
                     resize: function () {
                         x.is.visible() && x.set.position()
                     },
                     documentChanged: function (t) {
                         [].forEach.call(t, function (t) {
                             t.removedNodes && [].forEach.call(t.removedNodes, function (t) {
                                 (t == M || e(t).find(M).length > 0) && (x.debug("Element removed from DOM, tearing down events"), x.destroy())
                             })
                         })
                     },
                     hideGracefully: function (t) {
                         var i = e(t.target),
                             o = e.contains(n.documentElement, t.target),
                             a = i.closest(w.popup).length > 0;
                         t && !a && o ? (x.debug("Click occurred outside popup hiding popup"), x.hide()) : x.debug("Click was inside popup, keeping popup open")
                     }
                 },
                 create: function () {
                     var t = x.get.html(),
                         n = x.get.title(),
                         i = x.get.content();
                     t || i || n ? (x.debug("Creating pop-up html"), t || (t = C.templates.popup({
                         title: n,
                         content: i
                     })), r = e("<div/>").addClass(S.popup).data(T.activator, E).html(t), C.inline ? (x.verbose("Inserting popup element inline", r), r.insertAfter(E)) : (x.verbose("Appending popup element to body", r), r.appendTo(F)), x.refresh(), x.set.variation(), C.hoverable && x.bind.popup(), C.onCreate.call(r, M)) : 0 !== q.next(w.popup).length ? (x.verbose("Pre-existing popup found"), C.inline = !0, C.popup = q.next(w.popup).data(T.activator, E), x.refresh(), C.hoverable && x.bind.popup()) : C.popup ? (e(C.popup).data(T.activator, E), x.verbose("Used popup specified in settings"), x.refresh(), C.hoverable && x.bind.popup()) : x.debug("No content specified skipping display", M)
                 },
                 createID: function () {
                     y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, x.verbose("Creating unique id for element", y)
                 },
                 toggle: function () {
                     x.debug("Toggling pop-up"), x.is.hidden() ? (x.debug("Popup is hidden, showing pop-up"), x.unbind.close(), x.show()) : (x.debug("Popup is visible, hiding pop-up"), x.hide())
                 },
                 show: function (e) {
                     if (e = e || function () {}, x.debug("Showing pop-up", C.transition), x.is.hidden() && (!x.is.active() || !x.is.dropdown())) {
                         if (x.exists() || x.create(), !1 === C.onShow.call(r, M)) return void x.debug("onShow callback returned false, cancelling popup animation");
                         C.preserve || C.popup || x.refresh(), r && x.set.position() && (x.save.conditions(), C.exclusive && x.hideAll(), x.animate.show(e))
                     }
                 },
                 hide: function (e) {
                     if (e = e || function () {}, x.is.visible() || x.is.animating()) {
                         if (!1 === C.onHide.call(r, M)) return void x.debug("onHide callback returned false, cancelling popup animation");
                         x.remove.visible(), x.unbind.close(), x.restore.conditions(), x.animate.hide(e)
                     }
                 },
                 hideAll: function () {
                     e(w.popup).filter("." + S.popupVisible).each(function () {
                         e(this).data(T.activator).popup("hide")
                     })
                 },
                 exists: function () {
                     return !!r && (C.inline || C.popup ? x.has.popup() : r.closest(F).length >= 1)
                 },
                 removePopup: function () {
                     x.has.popup() && !C.popup && (x.debug("Removing popup", r), r.remove(), r = i, C.onRemove.call(r, M))
                 },
                 save: {
                     conditions: function () {
                         x.cache = {
                             title: E.attr("title")
                         }, x.cache.title && E.removeAttr("title"), x.verbose("Saving original attributes", x.cache.title)
                     }
                 },
                 restore: {
                     conditions: function () {
                         return x.cache && x.cache.title && (E.attr("title", x.cache.title), x.verbose("Restoring original attributes", x.cache.title)), !0
                     }
                 },
                 supports: {
                     svg: function () {
                         return "undefined" == typeof SVGGraphicsElement
                     }
                 },
                 animate: {
                     show: function (t) {
                         t = e.isFunction(t) ? t : function () {}, C.transition && e.fn.transition !== i && E.transition("is supported") ? (x.set.visible(), r.transition({
                             animation: C.transition + " in",
                             queue: !1,
                             debug: C.debug,
                             verbose: C.verbose,
                             duration: C.duration,
                             onComplete: function () {
                                 x.bind.close(), t.call(r, M), C.onVisible.call(r, M)
                             }
                         })) : x.error(k.noTransition)
                     },
                     hide: function (t) {
                         t = e.isFunction(t) ? t : function () {}, x.debug("Hiding pop-up"), !1 !== C.onHide.call(r, M) ? C.transition && e.fn.transition !== i && E.transition("is supported") ? r.transition({
                             animation: C.transition + " out",
                             queue: !1,
                             duration: C.duration,
                             debug: C.debug,
                             verbose: C.verbose,
                             onComplete: function () {
                                 x.reset(), t.call(r, M), C.onHidden.call(r, M)
                             }
                         }) : x.error(k.noTransition) : x.debug("onHide callback returned false, cancelling popup animation")
                     }
                 },
                 change: {
                     content: function (e) {
                         r.html(e)
                     }
                 },
                 get: {
                     html: function () {
                         return E.removeData(T.html), E.data(T.html) || C.html
                     },
                     title: function () {
                         return E.removeData(T.title), E.data(T.title) || C.title
                     },
                     content: function () {
                         return E.removeData(T.content), E.data(T.content) || C.content || E.attr("title")
                     },
                     variation: function () {
                         return E.removeData(T.variation), E.data(T.variation) || C.variation
                     },
                     popup: function () {
                         return r
                     },
                     popupOffset: function () {
                         return r.offset()
                     },
                     calculations: function () {
                         var e, n = x.get.offsetParent(r),
                             i = q[0],
                             o = D[0] == t,
                             a = C.inline || C.popup && C.movePopup ? q.position() : q.offset(),
                             s = o ? {
                                 top: 0,
                                 left: 0
                             } : D.offset(),
                             c = {},
                             u = o ? {
                                 top: l.scrollTop(),
                                 left: l.scrollLeft()
                             } : {
                                 top: 0,
                                 left: 0
                             };
                         if (c = {
                                 target: {
                                     element: q[0],
                                     width: q.outerWidth(),
                                     height: q.outerHeight(),
                                     top: a.top,
                                     left: a.left,
                                     margin: {}
                                 },
                                 popup: {
                                     width: r.outerWidth(),
                                     height: r.outerHeight()
                                 },
                                 parent: {
                                     width: h.outerWidth(),
                                     height: h.outerHeight()
                                 },
                                 screen: {
                                     top: s.top,
                                     left: s.left,
                                     scroll: {
                                         top: u.top,
                                         left: u.left
                                     },
                                     width: D.width(),
                                     height: D.height()
                                 }
                             }, n.get(0) !== h.get(0)) {
                             var d = n.offset();
                             c.target.top -= d.top, c.target.left -= d.left, c.parent.width = n.outerWidth(), c.parent.height = n.outerHeight()
                         }
                         return C.setFluidWidth && x.is.fluid() && (c.container = {
                             width: r.parent().outerWidth()
                         }, c.popup.width = c.container.width), c.target.margin.top = C.inline ? parseInt(t.getComputedStyle(i).getPropertyValue("margin-top"), 10) : 0, c.target.margin.left = C.inline ? x.is.rtl() ? parseInt(t.getComputedStyle(i).getPropertyValue("margin-right"), 10) : parseInt(t.getComputedStyle(i).getPropertyValue("margin-left"), 10) : 0, e = c.screen, c.boundary = {
                             top: e.top + e.scroll.top,
                             bottom: e.top + e.scroll.top + e.height,
                             left: e.left + e.scroll.left,
                             right: e.left + e.scroll.left + e.width
                         }, c
                     },
                     id: function () {
                         return y
                     },
                     startEvent: function () {
                         return "hover" == C.on ? "mouseenter" : "focus" == C.on && "focus"
                     },
                     scrollEvent: function () {
                         return "scroll"
                     },
                     endEvent: function () {
                         return "hover" == C.on ? "mouseleave" : "focus" == C.on && "blur"
                     },
                     distanceFromBoundary: function (e, t) {
                         var n, i, o = {};
                         return n = (t = t || x.get.calculations()).popup, i = t.boundary, e && (o = {
                             top: e.top - i.top,
                             left: e.left - i.left,
                             right: i.right - (e.left + n.width),
                             bottom: i.bottom - (e.top + n.height)
                         }, x.verbose("Distance from boundaries determined", e, o)), o
                     },
                     offsetParent: function (t) {
                         var n = (t !== i ? t[0] : q[0]).parentNode,
                             o = e(n);
                         if (n)
                             for (var a = "none" === o.css("transform"), r = "static" === o.css("position"), s = o.is("body"); n && !s && r && a;) n = n.parentNode, a = "none" === (o = e(n)).css("transform"), r = "static" === o.css("position"), s = o.is("body");
                         return o && o.length > 0 ? o : e()
                     },
                     positions: function () {
                         return {
                             "top left": !1,
                             "top center": !1,
                             "top right": !1,
                             "bottom left": !1,
                             "bottom center": !1,
                             "bottom right": !1,
                             "left center": !1,
                             "right center": !1
                         }
                     },
                     nextPosition: function (e) {
                         var t = e.split(" "),
                             n = t[0],
                             i = t[1],
                             o = "top" == n || "bottom" == n,
                             a = !1,
                             r = !1,
                             s = !1;
                         return z || (x.verbose("All available positions available"), z = x.get.positions()), x.debug("Recording last position tried", e), z[e] = !0, "opposite" === C.prefer && (s = (s = [{
                             top: "bottom",
                             bottom: "top",
                             left: "right",
                             right: "left"
                         } [n], i]).join(" "), a = !0 === z[s], x.debug("Trying opposite strategy", s)), "adjacent" === C.prefer && o && (s = (s = [n, {
                             left: "center",
                             center: "right",
                             right: "left"
                         } [i]]).join(" "), r = !0 === z[s], x.debug("Trying adjacent strategy", s)), (r || a) && (x.debug("Using backup position", s), s = {
                             "top left": "top center",
                             "top center": "top right",
                             "top right": "right center",
                             "right center": "bottom right",
                             "bottom right": "bottom center",
                             "bottom center": "bottom left",
                             "bottom left": "left center",
                             "left center": "top left"
                         } [e]), s
                     }
                 },
                 set: {
                     position: function (e, t) {
                         if (0 !== q.length && 0 !== r.length) {
                             var n, o, a, s, l, c, u, d;
                             if (t = t || x.get.calculations(), e = e || E.data(T.position) || C.position, n = E.data(T.offset) || C.offset, o = C.distanceAway, a = t.target, s = t.popup, l = t.parent, x.should.centerArrow(t) && (x.verbose("Adjusting offset to center arrow on small target element"), "top left" != e && "bottom left" != e || (n += a.width / 2, n -= C.arrowPixelsFromEdge), "top right" != e && "bottom right" != e || (n -= a.width / 2, n += C.arrowPixelsFromEdge)), 0 === a.width && 0 === a.height && !x.is.svg(a.element)) return x.debug("Popup target is hidden, no action taken"), !1;
                             switch (C.inline && (x.debug("Adding margin to calculation", a.margin), "left center" == e || "right center" == e ? (n += a.margin.top, o += -a.margin.left) : "top left" == e || "top center" == e || "top right" == e ? (n += a.margin.left, o -= a.margin.top) : (n += a.margin.left, o += a.margin.top)), x.debug("Determining popup position from calculations", e, t), x.is.rtl() && (e = e.replace(/left|right/g, function (e) {
                                 return "left" == e ? "right" : "left"
                             }), x.debug("RTL: Popup position updated", e)), j == C.maxSearchDepth && "string" == typeof C.lastResort && (e = C.lastResort), e) {
                                 case "top left":
                                     c = {
                                         top: "auto",
                                         bottom: l.height - a.top + o,
                                         left: a.left + n,
                                         right: "auto"
                                     };
                                     break;
                                 case "top center":
                                     c = {
                                         bottom: l.height - a.top + o,
                                         left: a.left + a.width / 2 - s.width / 2 + n,
                                         top: "auto",
                                         right: "auto"
                                     };
                                     break;
                                 case "top right":
                                     c = {
                                         bottom: l.height - a.top + o,
                                         right: l.width - a.left - a.width - n,
                                         top: "auto",
                                         left: "auto"
                                     };
                                     break;
                                 case "left center":
                                     c = {
                                         top: a.top + a.height / 2 - s.height / 2 + n,
                                         right: l.width - a.left + o,
                                         left: "auto",
                                         bottom: "auto"
                                     };
                                     break;
                                 case "right center":
                                     c = {
                                         top: a.top + a.height / 2 - s.height / 2 + n,
                                         left: a.left + a.width + o,
                                         bottom: "auto",
                                         right: "auto"
                                     };
                                     break;
                                 case "bottom left":
                                     c = {
                                         top: a.top + a.height + o,
                                         left: a.left + n,
                                         bottom: "auto",
                                         right: "auto"
                                     };
                                     break;
                                 case "bottom center":
                                     c = {
                                         top: a.top + a.height + o,
                                         left: a.left + a.width / 2 - s.width / 2 + n,
                                         bottom: "auto",
                                         right: "auto"
                                     };
                                     break;
                                 case "bottom right":
                                     c = {
                                         top: a.top + a.height + o,
                                         right: l.width - a.left - a.width - n,
                                         left: "auto",
                                         bottom: "auto"
                                     }
                             }
                             if (c === i && x.error(k.invalidPosition, e), x.debug("Calculated popup positioning values", c), r.css(c).removeClass(S.position).addClass(e).addClass(S.loading), u = x.get.popupOffset(), d = x.get.distanceFromBoundary(u, t), x.is.offstage(d, e)) {
                                 if (x.debug("Position is outside viewport", e), j < C.maxSearchDepth) return j++, e = x.get.nextPosition(e), x.debug("Trying new position", e), !!r && x.set.position(e, t);
                                 if (!C.lastResort) return x.debug("Popup could not find a position to display", r), x.error(k.cannotPlace, M), x.remove.attempts(), x.remove.loading(), x.reset(), C.onUnplaceable.call(r, M), !1;
                                 x.debug("No position found, showing with last position")
                             }
                             return x.debug("Position is on stage", e), x.remove.attempts(), x.remove.loading(), C.setFluidWidth && x.is.fluid() && x.set.fluidWidth(t), !0
                         }
                         x.error(k.notFound)
                     },
                     fluidWidth: function (e) {
                         e = e || x.get.calculations(), x.debug("Automatically setting element width to parent width", e.parent.width), r.css("width", e.container.width)
                     },
                     variation: function (e) {
                         (e = e || x.get.variation()) && x.has.popup() && (x.verbose("Adding variation to popup", e), r.addClass(e))
                     },
                     visible: function () {
                         E.addClass(S.visible)
                     }
                 },
                 remove: {
                     loading: function () {
                         r.removeClass(S.loading)
                     },
                     variation: function (e) {
                         (e = e || x.get.variation()) && (x.verbose("Removing variation", e), r.removeClass(e))
                     },
                     visible: function () {
                         E.removeClass(S.visible)
                     },
                     attempts: function () {
                         x.verbose("Resetting all searched positions"), j = 0, z = !1
                     }
                 },
                 bind: {
                     events: function () {
                         x.debug("Binding popup events to module"), "click" == C.on && E.on("click" + R, x.toggle), "hover" == C.on && E.on("touchstart" + R, x.event.touchstart), x.get.startEvent() && E.on(x.get.startEvent() + R, x.event.start).on(x.get.endEvent() + R, x.event.end), C.target && x.debug("Target set to element", q), l.on("resize" + b, x.event.resize)
                     },
                     popup: function () {
                         x.verbose("Allowing hover events on popup to prevent closing"), r && x.has.popup() && r.on("mouseenter" + R, x.event.start).on("mouseleave" + R, x.event.end)
                     },
                     close: function () {
                         (!0 === C.hideOnScroll || "auto" == C.hideOnScroll && "click" != C.on) && x.bind.closeOnScroll(), "hover" == C.on && I && x.bind.touchClose(), "click" == C.on && C.closable && x.bind.clickaway()
                     },
                     closeOnScroll: function () {
                         x.verbose("Binding scroll close event to document"), O.one(x.get.scrollEvent() + b, x.event.hideGracefully)
                     },
                     touchClose: function () {
                         x.verbose("Binding popup touchclose event to document"), s.on("touchstart" + b, function (e) {
                             x.verbose("Touched away from popup"), x.event.hideGracefully.call(M, e)
                         })
                     },
                     clickaway: function () {
                         x.verbose("Binding popup close event to document"), s.on("click" + b, function (e) {
                             x.verbose("Clicked away from popup"), x.event.hideGracefully.call(M, e)
                         })
                     }
                 },
                 unbind: {
                     events: function () {
                         l.off(b), E.off(R)
                     },
                     close: function () {
                         s.off(b), O.off(b)
                     }
                 },
                 has: {
                     popup: function () {
                         return r && r.length > 0
                     }
                 },
                 should: {
                     centerArrow: function (e) {
                         return !x.is.basic() && e.target.width <= 2 * C.arrowPixelsFromEdge
                     }
                 },
                 is: {
                     offstage: function (t, n) {
                         var i = [];
                         return e.each(t, function (e, t) {
                             t < -C.jitter && (x.debug("Position exceeds allowable distance from edge", e, t, n), i.push(e))
                         }), i.length > 0
                     },
                     svg: function (e) {
                         return x.supports.svg() && e instanceof SVGGraphicsElement
                     },
                     basic: function () {
                         return E.hasClass(S.basic)
                     },
                     active: function () {
                         return E.hasClass(S.active)
                     },
                     animating: function () {
                         return r !== i && r.hasClass(S.animating)
                     },
                     fluid: function () {
                         return r !== i && r.hasClass(S.fluid)
                     },
                     visible: function () {
                         return r !== i && r.hasClass(S.popupVisible)
                     },
                     dropdown: function () {
                         return E.hasClass(S.dropdown)
                     },
                     hidden: function () {
                         return !x.is.visible()
                     },
                     rtl: function () {
                         return "rtl" == E.css("direction")
                     }
                 },
                 reset: function () {
                     x.remove.visible(), C.preserve ? e.fn.transition !== i && r.transition("remove transition") : x.removePopup()
                 },
                 setting: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, C, t);
                     else {
                         if (n === i) return C[t];
                         C[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, x, t);
                     else {
                         if (n === i) return x[t];
                         x[t] = n
                     }
                 },
                 debug: function () {
                     !C.silent && C.debug && (C.performance ? x.performance.log(arguments) : (x.debug = Function.prototype.bind.call(console.info, console, C.name + ":"), x.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !C.silent && C.verbose && C.debug && (C.performance ? x.performance.log(arguments) : (x.verbose = Function.prototype.bind.call(console.info, console, C.name + ":"), x.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     C.silent || (x.error = Function.prototype.bind.call(console.error, console, C.name + ":"), x.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         C.performance && (n = (t = (new Date).getTime()) - (d || t), d = t, f.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: M,
                             "Execution Time": n
                         })), clearTimeout(x.performance.timer), x.performance.timer = setTimeout(x.performance.display, 500)
                     },
                     display: function () {
                         var t = C.name + ":",
                             n = 0;
                         d = !1, clearTimeout(x.performance.timer), e.each(f, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== i || console.table !== i) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), f = []
                     }
                 },
                 invoke: function (t, n, o) {
                     var r, s, l, c = L;
                     return n = n || p, o = M || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s
                 }
             }, g ? (L === i && x.initialize(), x.invoke(m)) : (L !== i && L.invoke("destroy"), x.initialize())
         }), a !== i ? a : this
     }, e.fn.popup.settings = {
         name: "Popup",
         silent: !1,
         debug: !1,
         verbose: !1,
         performance: !0,
         namespace: "popup",
         observeChanges: !0,
         onCreate: function () {},
         onRemove: function () {},
         onShow: function () {},
         onVisible: function () {},
         onHide: function () {},
         onUnplaceable: function () {},
         onHidden: function () {},
         on: "hover",
         boundary: t,
         addTouchEvents: !0,
         position: "top left",
         variation: "",
         movePopup: !0,
         target: !1,
         popup: !1,
         inline: !1,
         preserve: !1,
         hoverable: !1,
         content: !1,
         html: !1,
         title: !1,
         closable: !0,
         hideOnScroll: "auto",
         exclusive: !1,
         context: "body",
         scrollContext: t,
         prefer: "opposite",
         lastResort: !1,
         arrowPixelsFromEdge: 20,
         delay: {
             show: 50,
             hide: 70
         },
         setFluidWidth: !0,
         duration: 200,
         transition: "scale",
         distanceAway: 0,
         jitter: 2,
         offset: 0,
         maxSearchDepth: 15,
         error: {
             invalidPosition: "The position you specified is not a valid position",
             cannotPlace: "Popup does not fit within the boundaries of the viewport",
             method: "The method you called is not defined.",
             noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",
             notFound: "The target or popup you specified does not exist on the page"
         },
         metadata: {
             activator: "activator",
             content: "content",
             html: "html",
             offset: "offset",
             position: "position",
             title: "title",
             variation: "variation"
         },
         className: {
             active: "active",
             basic: "basic",
             animating: "animating",
             dropdown: "dropdown",
             fluid: "fluid",
             loading: "loading",
             popup: "ui popup",
             position: "top left center bottom right",
             visible: "visible",
             popupVisible: "visible"
         },
         selector: {
             popup: ".ui.popup"
         },
         templates: {
             escape: function (e) {
                 var t = {
                     "&": "&amp;",
                     "<": "&lt;",
                     ">": "&gt;",
                     '"': "&quot;",
                     "'": "&#x27;",
                     "`": "&#x60;"
                 };
                 return /[&<>"'`]/.test(e) ? e.replace(/[&<>"'`]/g, function (e) {
                     return t[e]
                 }) : e
             },
             popup: function (t) {
                 var n = "",
                     o = e.fn.popup.settings.templates.escape;
                 return typeof t !== i && (typeof t.title !== i && t.title && (t.title = o(t.title), n += '<div class="header">' + t.title + "</div>"), typeof t.content !== i && t.content && (t.content = o(t.content), n += '<div class="content">' + t.content + "</div>")), n
             }
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     void 0 !== (t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")()) && t.Math == Math || ("undefined" != typeof self && self.Math == Math ? self : Function("return this")());
     e.fn.progress = function (t) {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             l = [],
             c = arguments[0],
             u = "string" == typeof c,
             d = [].slice.call(arguments, 1);
         return a.each(function () {
             var a, f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.progress.settings, t) : e.extend({}, e.fn.progress.settings),
                 m = f.className,
                 g = f.metadata,
                 p = f.namespace,
                 h = f.selector,
                 v = f.error,
                 b = "." + p,
                 y = "module-" + p,
                 x = e(this),
                 C = e(this).find(h.bar),
                 w = e(this).find(h.progress),
                 S = e(this).find(h.label),
                 k = this,
                 T = x.data(y),
                 A = !1;
             a = {
                 initialize: function () {
                     a.debug("Initializing progress bar", f), a.set.duration(), a.set.transitionEvent(), a.read.metadata(), a.read.settings(), a.instantiate()
                 },
                 instantiate: function () {
                     a.verbose("Storing instance of progress", a), T = a, x.data(y, a)
                 },
                 destroy: function () {
                     a.verbose("Destroying previous progress for", x), clearInterval(T.interval), a.remove.state(), x.removeData(y), T = i
                 },
                 reset: function () {
                     a.remove.nextValue(), a.update.progress(0)
                 },
                 complete: function () {
                     (a.percent === i || a.percent < 100) && (a.remove.progressPoll(), a.set.percent(100))
                 },
                 read: {
                     metadata: function () {
                         var e = {
                             percent: x.data(g.percent),
                             total: x.data(g.total),
                             value: x.data(g.value)
                         };
                         e.percent && (a.debug("Current percent value set from metadata", e.percent), a.set.percent(e.percent)), e.total && (a.debug("Total value set from metadata", e.total), a.set.total(e.total)), e.value && (a.debug("Current value set from metadata", e.value), a.set.value(e.value), a.set.progress(e.value))
                     },
                     settings: function () {
                         !1 !== f.total && (a.debug("Current total set in settings", f.total), a.set.total(f.total)), !1 !== f.value && (a.debug("Current value set in settings", f.value), a.set.value(f.value), a.set.progress(a.value)), !1 !== f.percent && (a.debug("Current percent set in settings", f.percent), a.set.percent(f.percent))
                     }
                 },
                 bind: {
                     transitionEnd: function (e) {
                         var t = a.get.transitionEnd();
                         C.one(t + b, function (t) {
                             clearTimeout(a.failSafeTimer), e.call(this, t)
                         }), a.failSafeTimer = setTimeout(function () {
                             C.triggerHandler(t)
                         }, f.duration + f.failSafeDelay), a.verbose("Adding fail safe timer", a.timer)
                     }
                 },
                 increment: function (e) {
                     var t, n;
                     a.has.total() ? n = (t = a.get.value()) + (e = e || 1) : (n = (t = a.get.percent()) + (e = e || a.get.randomValue()), 100, a.debug("Incrementing percentage by", t, n)), n = a.get.normalizedValue(n), a.set.progress(n)
                 },
                 decrement: function (e) {
                     var t, n;
                     a.get.total() ? (n = (t = a.get.value()) - (e = e || 1), a.debug("Decrementing value by", e, t)) : (n = (t = a.get.percent()) - (e = e || a.get.randomValue()), a.debug("Decrementing percentage by", e, t)), n = a.get.normalizedValue(n), a.set.progress(n)
                 },
                 has: {
                     progressPoll: function () {
                         return a.progressPoll
                     },
                     total: function () {
                         return !1 !== a.get.total()
                     }
                 },
                 get: {
                     text: function (e) {
                         var t = a.value || 0,
                             n = a.total || 0,
                             i = A ? a.get.displayPercent() : a.percent || 0,
                             o = a.total > 0 ? n - t : 100 - i;
                         return e = (e = e || "").replace("{value}", t).replace("{total}", n).replace("{left}", o).replace("{percent}", i), a.verbose("Adding variables to progress bar text", e), e
                     },
                     normalizedValue: function (e) {
                         if (e < 0) return a.debug("Value cannot decrement below 0"), 0;
                         if (a.has.total()) {
                             if (e > a.total) return a.debug("Value cannot increment above total", a.total), a.total
                         } else if (e > 100) return a.debug("Value cannot increment above 100 percent"), 100;
                         return e
                     },
                     updateInterval: function () {
                         return "auto" == f.updateInterval ? f.duration : f.updateInterval
                     },
                     randomValue: function () {
                         return a.debug("Generating random increment percentage"), Math.floor(Math.random() * f.random.max + f.random.min)
                     },
                     numericValue: function (e) {
                         return "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") && +e.replace(/[^\d.]/g, "") : e
                     },
                     transitionEnd: function () {
                         var e, t = n.createElement("element"),
                             o = {
                                 transition: "transitionend",
                                 OTransition: "oTransitionEnd",
                                 MozTransition: "transitionend",
                                 WebkitTransition: "webkitTransitionEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e]
                     },
                     displayPercent: function () {
                         var e = C.width(),
                             t = x.width(),
                             n = e > parseInt(C.css("min-width"), 10) ? e / t * 100 : a.percent;
                         return f.precision > 0 ? Math.round(n * (10 * f.precision)) / (10 * f.precision) : Math.round(n)
                     },
                     percent: function () {
                         return a.percent || 0
                     },
                     value: function () {
                         return a.nextValue || a.value || 0
                     },
                     total: function () {
                         return a.total || !1
                     }
                 },
                 create: {
                     progressPoll: function () {
                         a.progressPoll = setTimeout(function () {
                             a.update.toNextValue(), a.remove.progressPoll()
                         }, a.get.updateInterval())
                     }
                 },
                 is: {
                     complete: function () {
                         return a.is.success() || a.is.warning() || a.is.error()
                     },
                     success: function () {
                         return x.hasClass(m.success)
                     },
                     warning: function () {
                         return x.hasClass(m.warning)
                     },
                     error: function () {
                         return x.hasClass(m.error)
                     },
                     active: function () {
                         return x.hasClass(m.active)
                     },
                     visible: function () {
                         return x.is(":visible")
                     }
                 },
                 remove: {
                     progressPoll: function () {
                         a.verbose("Removing progress poll timer"), a.progressPoll && (clearTimeout(a.progressPoll), delete a.progressPoll)
                     },
                     nextValue: function () {
                         a.verbose("Removing progress value stored for next update"), delete a.nextValue
                     },
                     state: function () {
                         a.verbose("Removing stored state"), delete a.total, delete a.percent, delete a.value
                     },
                     active: function () {
                         a.verbose("Removing active state"), x.removeClass(m.active)
                     },
                     success: function () {
                         a.verbose("Removing success state"), x.removeClass(m.success)
                     },
                     warning: function () {
                         a.verbose("Removing warning state"), x.removeClass(m.warning)
                     },
                     error: function () {
                         a.verbose("Removing error state"), x.removeClass(m.error)
                     }
                 },
                 set: {
                     barWidth: function (e) {
                         e > 100 ? a.error(v.tooHigh, e) : e < 0 ? a.error(v.tooLow, e) : (C.css("width", e + "%"), x.attr("data-percent", parseInt(e, 10)))
                     },
                     duration: function (e) {
                         e = "number" == typeof (e = e || f.duration) ? e + "ms" : e, a.verbose("Setting progress bar transition duration", e), C.css({
                             "transition-duration": e
                         })
                     },
                     percent: function (e) {
                         e = "string" == typeof e ? +e.replace("%", "") : e, e = f.precision > 0 ? Math.round(e * (10 * f.precision)) / (10 * f.precision) : Math.round(e), a.percent = e, a.has.total() || (a.value = f.precision > 0 ? Math.round(e / 100 * a.total * (10 * f.precision)) / (10 * f.precision) : Math.round(e / 100 * a.total * 10) / 10, f.limitValues && (a.value = a.value > 100 ? 100 : a.value < 0 ? 0 : a.value)), a.set.barWidth(e), a.set.labelInterval(), a.set.labels(), f.onChange.call(k, e, a.value, a.total)
                     },
                     labelInterval: function () {
                         clearInterval(a.interval), a.bind.transitionEnd(function () {
                             a.verbose("Bar finished animating, removing continuous label updates"), clearInterval(a.interval), A = !1, a.set.labels()
                         }), A = !0, a.interval = setInterval(function () {
                             e.contains(n.documentElement, k) || (clearInterval(a.interval), A = !1), a.set.labels()
                         }, f.framerate)
                     },
                     labels: function () {
                         a.verbose("Setting both bar progress and outer label text"), a.set.barLabel(), a.set.state()
                     },
                     label: function (e) {
                         (e = e || "") && (e = a.get.text(e), a.verbose("Setting label to text", e), S.text(e))
                     },
                     state: function (e) {
                         100 === (e = e !== i ? e : a.percent) ? f.autoSuccess && !(a.is.warning() || a.is.error() || a.is.success()) ? (a.set.success(), a.debug("Automatically triggering success at 100%")) : (a.verbose("Reached 100% removing active state"), a.remove.active(), a.remove.progressPoll()) : e > 0 ? (a.verbose("Adjusting active progress bar label", e), a.set.active()) : (a.remove.active(), a.set.label(f.text.active))
                     },
                     barLabel: function (e) {
                         e !== i ? w.text(a.get.text(e)) : "ratio" == f.label && a.total ? (a.verbose("Adding ratio to bar label"), w.text(a.get.text(f.text.ratio))) : "percent" == f.label && (a.verbose("Adding percentage to bar label"), w.text(a.get.text(f.text.percent)))
                     },
                     active: function (e) {
                         e = e || f.text.active, a.debug("Setting active state"), f.showActivity && !a.is.active() && x.addClass(m.active), a.remove.warning(), a.remove.error(), a.remove.success(), (e = f.onLabelUpdate("active", e, a.value, a.total)) && a.set.label(e), a.bind.transitionEnd(function () {
                             f.onActive.call(k, a.value, a.total)
                         })
                     },
                     success: function (e) {
                         e = e || f.text.success || f.text.active, a.debug("Setting success state"), x.addClass(m.success), a.remove.active(), a.remove.warning(), a.remove.error(), a.complete(), f.text.success ? (e = f.onLabelUpdate("success", e, a.value, a.total), a.set.label(e)) : (e = f.onLabelUpdate("active", e, a.value, a.total), a.set.label(e)), a.bind.transitionEnd(function () {
                             f.onSuccess.call(k, a.total)
                         })
                     },
                     warning: function (e) {
                         e = e || f.text.warning, a.debug("Setting warning state"), x.addClass(m.warning), a.remove.active(), a.remove.success(), a.remove.error(), a.complete(), (e = f.onLabelUpdate("warning", e, a.value, a.total)) && a.set.label(e), a.bind.transitionEnd(function () {
                             f.onWarning.call(k, a.value, a.total)
                         })
                     },
                     error: function (e) {
                         e = e || f.text.error, a.debug("Setting error state"), x.addClass(m.error), a.remove.active(), a.remove.success(), a.remove.warning(), a.complete(), (e = f.onLabelUpdate("error", e, a.value, a.total)) && a.set.label(e), a.bind.transitionEnd(function () {
                             f.onError.call(k, a.value, a.total)
                         })
                     },
                     transitionEvent: function () {
                         a.get.transitionEnd()
                     },
                     total: function (e) {
                         a.total = e
                     },
                     value: function (e) {
                         a.value = e
                     },
                     progress: function (e) {
                         a.has.progressPoll() ? (a.debug("Updated within interval, setting next update to use new value", e), a.set.nextValue(e)) : (a.debug("First update in progress update interval, immediately updating", e), a.update.progress(e), a.create.progressPoll())
                     },
                     nextValue: function (e) {
                         a.nextValue = e
                     }
                 },
                 update: {
                     toNextValue: function () {
                         var e = a.nextValue;
                         e && (a.debug("Update interval complete using last updated value", e), a.update.progress(e), a.remove.nextValue())
                     },
                     progress: function (e) {
                         var t;
                         !1 === (e = a.get.numericValue(e)) && a.error(v.nonNumeric, e), e = a.get.normalizedValue(e), a.has.total() ? (a.set.value(e), t = e / a.total * 100, a.debug("Calculating percent complete from total", t), a.set.percent(t)) : (t = e, a.debug("Setting value to exact percentage value", t), a.set.percent(t))
                     }
                 },
                 setting: function (t, n) {
                     if (a.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         e.isPlainObject(f[t]) ? e.extend(!0, f[t], n) : f[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, a, t);
                     else {
                         if (n === i) return a[t];
                         a[t] = n
                     }
                 },
                 debug: function () {
                     !f.silent && f.debug && (f.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), a.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !f.silent && f.verbose && f.debug && (f.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), a.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     f.silent || (a.error = Function.prototype.bind.call(console.error, console, f.name + ":"), a.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         f.performance && (n = (t = (new Date).getTime()) - (s || t), s = t, l.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: k,
                             "Execution Time": n
                         })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 500)
                     },
                     display: function () {
                         var t = f.name + ":",
                             n = 0;
                         s = !1, clearTimeout(a.performance.timer), e.each(l, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), l = []
                     }
                 },
                 invoke: function (t, n, r) {
                     var s, l, c, u = T;
                     return n = n || d, r = k || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, o) {
                         var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(u[r]) && n != s) u = u[r];
                         else {
                             if (u[r] !== i) return l = u[r], !1;
                             if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (l = u[o], !1) : (a.error(v.method, t), !1);
                             u = u[o]
                         }
                     })), e.isFunction(l) ? c = l.apply(r, n) : l !== i && (c = l), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), l
                 }
             }, u ? (T === i && a.initialize(), a.invoke(c)) : (T !== i && T.invoke("destroy"), a.initialize())
         }), o !== i ? o : this
     }, e.fn.progress.settings = {
         name: "Progress",
         namespace: "progress",
         silent: !1,
         debug: !1,
         verbose: !1,
         performance: !0,
         random: {
             min: 2,
             max: 5
         },
         duration: 300,
         updateInterval: "auto",
         autoSuccess: !0,
         showActivity: !0,
         limitValues: !0,
         label: "percent",
         precision: 0,
         framerate: 1e3 / 30,
         percent: !1,
         total: !1,
         value: !1,
         failSafeDelay: 100,
         onLabelUpdate: function (e, t, n, i) {
             return t
         },
         onChange: function (e, t, n) {},
         onSuccess: function (e) {},
         onActive: function (e, t) {},
         onError: function (e, t) {},
         onWarning: function (e, t) {},
         error: {
             method: "The method you called is not defined.",
             nonNumeric: "Progress value is non numeric",
             tooHigh: "Value specified is above 100%",
             tooLow: "Value specified is below 0%"
         },
         regExp: {
             variable: /\{\$*[A-z0-9]+\}/g
         },
         metadata: {
             percent: "percent",
             total: "total",
             value: "value"
         },
         selector: {
             bar: "> .bar",
             label: "> .label",
             progress: ".bar > .progress"
         },
         text: {
             active: !1,
             error: !1,
             success: !1,
             warning: !1,
             percent: "{percent}%",
             ratio: "{value} of {total}"
         },
         className: {
             active: "active",
             error: "error",
             success: "success",
             warning: "warning"
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.rating = function (t) {
         var n, o = e(this),
             a = o.selector || "",
             r = (new Date).getTime(),
             s = [],
             l = arguments[0],
             c = "string" == typeof l,
             u = [].slice.call(arguments, 1);
         return o.each(function () {
             var d, f, m = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.rating.settings, t) : e.extend({}, e.fn.rating.settings),
                 g = m.namespace,
                 p = m.className,
                 h = m.metadata,
                 v = m.selector,
                 b = (m.error, "." + g),
                 y = "module-" + g,
                 x = this,
                 C = e(this).data(y),
                 w = e(this),
                 S = w.find(v.icon);
             f = {
                 initialize: function () {
                     f.verbose("Initializing rating module", m), 0 === S.length && f.setup.layout(), m.interactive ? f.enable() : f.disable(), f.set.initialLoad(), f.set.rating(f.get.initialRating()), f.remove.initialLoad(), f.instantiate()
                 },
                 instantiate: function () {
                     f.verbose("Instantiating module", m), C = f, w.data(y, f)
                 },
                 destroy: function () {
                     f.verbose("Destroying previous instance", C), f.remove.events(), w.removeData(y)
                 },
                 refresh: function () {
                     S = w.find(v.icon)
                 },
                 setup: {
                     layout: function () {
                         var t = f.get.maxRating(),
                             n = e.fn.rating.settings.templates.icon(t);
                         f.debug("Generating icon html dynamically"), w.html(n), f.refresh()
                     }
                 },
                 event: {
                     mouseenter: function () {
                         var t = e(this);
                         t.nextAll().removeClass(p.selected), w.addClass(p.selected), t.addClass(p.selected).prevAll().addClass(p.selected)
                     },
                     mouseleave: function () {
                         w.removeClass(p.selected), S.removeClass(p.selected)
                     },
                     click: function () {
                         var t = e(this),
                             n = f.get.rating(),
                             i = S.index(t) + 1;
                         ("auto" == m.clearable ? 1 === S.length : m.clearable) && n == i ? f.clearRating() : f.set.rating(i)
                     }
                 },
                 clearRating: function () {
                     f.debug("Clearing current rating"), f.set.rating(0)
                 },
                 bind: {
                     events: function () {
                         f.verbose("Binding events"), w.on("mouseenter" + b, v.icon, f.event.mouseenter).on("mouseleave" + b, v.icon, f.event.mouseleave).on("click" + b, v.icon, f.event.click)
                     }
                 },
                 remove: {
                     events: function () {
                         f.verbose("Removing events"), w.off(b)
                     },
                     initialLoad: function () {
                         d = !1
                     }
                 },
                 enable: function () {
                     f.debug("Setting rating to interactive mode"), f.bind.events(), w.removeClass(p.disabled)
                 },
                 disable: function () {
                     f.debug("Setting rating to read-only mode"), f.remove.events(), w.addClass(p.disabled)
                 },
                 is: {
                     initialLoad: function () {
                         return d
                     }
                 },
                 get: {
                     initialRating: function () {
                         return w.data(h.rating) !== i ? (w.removeData(h.rating), w.data(h.rating)) : m.initialRating
                     },
                     maxRating: function () {
                         return w.data(h.maxRating) !== i ? (w.removeData(h.maxRating), w.data(h.maxRating)) : m.maxRating
                     },
                     rating: function () {
                         var e = S.filter("." + p.active).length;
                         return f.verbose("Current rating retrieved", e), e
                     }
                 },
                 set: {
                     rating: function (e) {
                         var t = e - 1 >= 0 ? e - 1 : 0,
                             n = S.eq(t);
                         w.removeClass(p.selected), S.removeClass(p.selected).removeClass(p.active), e > 0 && (f.verbose("Setting current rating to", e), n.prevAll().addBack().addClass(p.active)), f.is.initialLoad() || m.onRate.call(x, e)
                     },
                     initialLoad: function () {
                         d = !0
                     }
                 },
                 setting: function (t, n) {
                     if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : m[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 },
                 debug: function () {
                     !m.silent && m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !m.silent && m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     m.silent || (f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         m.performance && (n = (t = (new Date).getTime()) - (r || t), r = t, s.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: x,
                             "Execution Time": n
                         })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500)
                     },
                     display: function () {
                         var t = m.name + ":",
                             n = 0;
                         r = !1, clearTimeout(f.performance.timer), e.each(s, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", a && (t += " '" + a + "'"), o.length > 1 && (t += " (" + o.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), s = []
                     }
                 },
                 invoke: function (t, o, a) {
                     var r, s, l, c = C;
                     return o = o || u, a = x || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(a, o) : s !== i && (l = s), e.isArray(n) ? n.push(l) : n !== i ? n = [n, l] : l !== i && (n = l), s
                 }
             }, c ? (C === i && f.initialize(), f.invoke(l)) : (C !== i && C.invoke("destroy"), f.initialize())
         }), n !== i ? n : this
     }, e.fn.rating.settings = {
         name: "Rating",
         namespace: "rating",
         slent: !1,
         debug: !1,
         verbose: !1,
         performance: !0,
         initialRating: 0,
         interactive: !0,
         maxRating: 4,
         clearable: "auto",
         fireOnInit: !1,
         onRate: function (e) {},
         error: {
             method: "The method you called is not defined",
             noMaximum: "No maximum rating specified. Cannot generate HTML automatically"
         },
         metadata: {
             rating: "rating",
             maxRating: "maxRating"
         },
         className: {
             active: "active",
             disabled: "disabled",
             selected: "selected",
             loading: "loading"
         },
         selector: {
             icon: ".icon"
         },
         templates: {
             icon: function (e) {
                 for (var t = 1, n = ""; t <= e;) n += '<i class="icon"></i>', t++;
                 return n
             }
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.search = function (o) {
         var a, r = e(this),
             s = r.selector || "",
             l = (new Date).getTime(),
             c = [],
             u = arguments[0],
             d = "string" == typeof u,
             f = [].slice.call(arguments, 1);
         return e(this).each(function () {
             var m, g = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.search.settings, o) : e.extend({}, e.fn.search.settings),
                 p = g.className,
                 h = g.metadata,
                 v = g.regExp,
                 b = g.fields,
                 y = g.selector,
                 x = g.error,
                 C = g.namespace,
                 w = "." + C,
                 S = C + "-module",
                 k = e(this),
                 T = k.find(y.prompt),
                 A = k.find(y.searchButton),
                 R = k.find(y.results),
                 P = k.find(y.result),
                 E = (k.find(y.category), this),
                 F = k.data(S),
                 O = !1,
                 D = !1;
             m = {
                 initialize: function () {
                     m.verbose("Initializing module"), m.get.settings(), m.determine.searchFields(), m.bind.events(), m.set.type(), m.create.results(), m.instantiate()
                 },
                 instantiate: function () {
                     m.verbose("Storing instance of module", m), F = m, k.data(S, m)
                 },
                 destroy: function () {
                     m.verbose("Destroying instance"), k.off(w).removeData(S)
                 },
                 refresh: function () {
                     m.debug("Refreshing selector cache"), T = k.find(y.prompt), A = k.find(y.searchButton), k.find(y.category), R = k.find(y.results), P = k.find(y.result)
                 },
                 refreshResults: function () {
                     R = k.find(y.results), P = k.find(y.result)
                 },
                 bind: {
                     events: function () {
                         m.verbose("Binding events to search"), g.automatic && (k.on(m.get.inputEvent() + w, y.prompt, m.event.input), T.attr("autocomplete", "off")), k.on("focus" + w, y.prompt, m.event.focus).on("blur" + w, y.prompt, m.event.blur).on("keydown" + w, y.prompt, m.handleKeyboard).on("click" + w, y.searchButton, m.query).on("mousedown" + w, y.results, m.event.result.mousedown).on("mouseup" + w, y.results, m.event.result.mouseup).on("click" + w, y.result, m.event.result.click)
                     }
                 },
                 determine: {
                     searchFields: function () {
                         o && o.searchFields !== i && (g.searchFields = o.searchFields)
                     }
                 },
                 event: {
                     input: function () {
                         g.searchDelay ? (clearTimeout(m.timer), m.timer = setTimeout(function () {
                             m.is.focused() && m.query()
                         }, g.searchDelay)) : m.query()
                     },
                     focus: function () {
                         m.set.focus(), g.searchOnFocus && m.has.minimumCharacters() && m.query(function () {
                             m.can.show() && m.showResults()
                         })
                     },
                     blur: function (e) {
                         var t = function () {
                             m.cancel.query(), m.remove.focus(), m.timer = setTimeout(m.hideResults, g.hideDelay)
                         };
                         n.activeElement === this || (D = !1, m.resultsClicked ? (m.debug("Determining if user action caused search to close"), k.one("click.close" + w, y.results, function (e) {
                             m.is.inMessage(e) || O ? T.focus() : (O = !1, m.is.animating() || m.is.hidden() || t())
                         })) : (m.debug("Input blurred without user action, closing results"), t()))
                     },
                     result: {
                         mousedown: function () {
                             m.resultsClicked = !0
                         },
                         mouseup: function () {
                             m.resultsClicked = !1
                         },
                         click: function (n) {
                             m.debug("Search result selected");
                             var i = e(this),
                                 o = i.find(y.title).eq(0),
                                 a = i.is("a[href]") ? i : i.find("a[href]").eq(0),
                                 r = a.attr("href") || !1,
                                 s = a.attr("target") || !1,
                                 l = (o.html(), o.length > 0 && o.text()),
                                 c = m.get.results(),
                                 u = i.data(h.result) || m.get.result(l, c);
                             if (e.isFunction(g.onSelect) && !1 === g.onSelect.call(E, u, c)) return m.debug("Custom onSelect callback cancelled default select action"), void(O = !0);
                             m.hideResults(), l && m.set.value(l), r && (m.verbose("Opening search link found in result", a), "_blank" == s || n.ctrlKey ? t.open(r) : t.location.href = r)
                         }
                     }
                 },
                 handleKeyboard: function (e) {
                     var t, n = k.find(y.result),
                         i = k.find(y.category),
                         o = n.filter("." + p.active),
                         a = n.index(o),
                         r = n.length,
                         s = o.length > 0,
                         l = e.which,
                         c = 13,
                         u = 38,
                         d = 40;
                     if (l == 27 && (m.verbose("Escape key pressed, blurring search field"), m.hideResults(), D = !0), m.is.visible())
                         if (l == c) {
                             if (m.verbose("Enter key pressed, selecting active result"), n.filter("." + p.active).length > 0) return m.event.result.click.call(n.filter("." + p.active), e), e.preventDefault(), !1
                         } else l == u && s ? (m.verbose("Up key pressed, changing active result"), t = a - 1 < 0 ? a : a - 1, i.removeClass(p.active), n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active), e.preventDefault()) : l == d && (m.verbose("Down key pressed, changing active result"), t = a + 1 >= r ? a : a + 1, i.removeClass(p.active), n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active), e.preventDefault());
                     else l == c && (m.verbose("Enter key pressed, executing query"), m.query(), m.set.buttonPressed(), T.one("keyup", m.remove.buttonFocus))
                 },
                 setup: {
                     api: function (t, n) {
                         var i = {
                             debug: g.debug,
                             on: !1,
                             cache: g.cache,
                             action: "search",
                             urlData: {
                                 query: t
                             },
                             onSuccess: function (e) {
                                 m.parse.response.call(E, e, t), n()
                             },
                             onFailure: function () {
                                 m.displayMessage(x.serverError), n()
                             },
                             onAbort: function (e) {},
                             onError: m.error
                         };
                         e.extend(!0, i, g.apiSettings), m.verbose("Setting up API request", i), k.api(i)
                     }
                 },
                 can: {
                     useAPI: function () {
                         return e.fn.api !== i
                     },
                     show: function () {
                         return m.is.focused() && !m.is.visible() && !m.is.empty()
                     },
                     transition: function () {
                         return g.transition && e.fn.transition !== i && k.transition("is supported")
                     }
                 },
                 is: {
                     animating: function () {
                         return R.hasClass(p.animating)
                     },
                     hidden: function () {
                         return R.hasClass(p.hidden)
                     },
                     inMessage: function (t) {
                         if (t.target) {
                             var i = e(t.target);
                             return e.contains(n.documentElement, t.target) && i.closest(y.message).length > 0
                         }
                     },
                     empty: function () {
                         return "" === R.html()
                     },
                     visible: function () {
                         return R.filter(":visible").length > 0
                     },
                     focused: function () {
                         return T.filter(":focus").length > 0
                     }
                 },
                 get: {
                     settings: function () {
                         e.isPlainObject(o) && o.searchFullText && (g.fullTextSearch = o.searchFullText, m.error(g.error.oldSearchSyntax, E))
                     },
                     inputEvent: function () {
                         var e = T[0];
                         return e !== i && e.oninput !== i ? "input" : e !== i && e.onpropertychange !== i ? "propertychange" : "keyup"
                     },
                     value: function () {
                         return T.val()
                     },
                     results: function () {
                         return k.data(h.results)
                     },
                     result: function (t, n) {
                         var o = ["title", "id"],
                             a = !1;
                         return t = t !== i ? t : m.get.value(), n = n !== i ? n : m.get.results(), "category" === g.type ? (m.debug("Finding result that matches", t), e.each(n, function (n, i) {
                             if (e.isArray(i.results) && (a = m.search.object(t, i.results, o)[0])) return !1
                         })) : (m.debug("Finding result in results object", t), a = m.search.object(t, n, o)[0]), a || !1
                     }
                 },
                 select: {
                     firstResult: function () {
                         m.verbose("Selecting first result"), P.first().addClass(p.active)
                     }
                 },
                 set: {
                     focus: function () {
                         k.addClass(p.focus)
                     },
                     loading: function () {
                         k.addClass(p.loading)
                     },
                     value: function (e) {
                         m.verbose("Setting search input value", e), T.val(e)
                     },
                     type: function (e) {
                         e = e || g.type, "category" == g.type && k.addClass(g.type)
                     },
                     buttonPressed: function () {
                         A.addClass(p.pressed)
                     }
                 },
                 remove: {
                     loading: function () {
                         k.removeClass(p.loading)
                     },
                     focus: function () {
                         k.removeClass(p.focus)
                     },
                     buttonPressed: function () {
                         A.removeClass(p.pressed)
                     }
                 },
                 query: function (t) {
                     t = e.isFunction(t) ? t : function () {};
                     var n = m.get.value(),
                         i = m.read.cache(n);
                     t = t || function () {}, m.has.minimumCharacters() ? (i ? (m.debug("Reading result from cache", n), m.save.results(i.results), m.addResults(i.html), m.inject.id(i.results), t()) : (m.debug("Querying for", n), e.isPlainObject(g.source) || e.isArray(g.source) ? (m.search.local(n), t()) : m.can.useAPI() ? m.search.remote(n, t) : (m.error(x.source), t())), g.onSearchQuery.call(E, n)) : m.hideResults()
                 },
                 search: {
                     local: function (e) {
                         var t, n = m.search.object(e, g.content);
                         m.set.loading(), m.save.results(n), m.debug("Returned full local search results", n), g.maxResults > 0 && (m.debug("Using specified max results", n), n = n.slice(0, g.maxResults)), "category" == g.type && (n = m.create.categoryResults(n)), t = m.generateResults({
                             results: n
                         }), m.remove.loading(), m.addResults(t), m.inject.id(n), m.write.cache(e, {
                             html: t,
                             results: n
                         })
                     },
                     remote: function (t, n) {
                         n = e.isFunction(n) ? n : function () {}, k.api("is loading") && k.api("abort"), m.setup.api(t, n), k.api("query")
                     },
                     object: function (t, n, o) {
                         var a = [],
                             r = [],
                             s = [],
                             l = t.toString().replace(v.escape, "\\$&"),
                             c = new RegExp(v.beginsWith + l, "i"),
                             u = function (t, n) {
                                 var i = -1 == e.inArray(n, a),
                                     o = -1 == e.inArray(n, s),
                                     l = -1 == e.inArray(n, r);
                                 i && o && l && t.push(n)
                             };
                         return n = n || g.source, o = o !== i ? o : g.searchFields, e.isArray(o) || (o = [o]), n === i || !1 === n ? (m.error(x.source), []) : (e.each(o, function (i, o) {
                             e.each(n, function (e, n) {
                                 "string" == typeof n[o] && (-1 !== n[o].search(c) ? u(a, n) : "exact" === g.fullTextSearch && m.exactSearch(t, n[o]) ? u(r, n) : 1 == g.fullTextSearch && m.fuzzySearch(t, n[o]) && u(s, n))
                             })
                         }), e.merge(r, s), e.merge(a, r), a)
                     }
                 },
                 exactSearch: function (e, t) {
                     return e = e.toLowerCase(), (t = t.toLowerCase()).indexOf(e) > -1
                 },
                 fuzzySearch: function (e, t) {
                     var n = t.length,
                         i = e.length;
                     if ("string" != typeof e) return !1;
                     if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;
                     if (i === n) return e === t;
                     e: for (var o = 0, a = 0; o < i; o++) {
                         for (var r = e.charCodeAt(o); a < n;)
                             if (t.charCodeAt(a++) === r) continue e;
                         return !1
                     }
                     return !0
                 },
                 parse: {
                     response: function (e, t) {
                         var n = m.generateResults(e);
                         m.verbose("Parsing server response", e), e !== i && t !== i && e[b.results] !== i && (m.addResults(n), m.inject.id(e[b.results]), m.write.cache(t, {
                             html: n,
                             results: e[b.results]
                         }), m.save.results(e[b.results]))
                     }
                 },
                 cancel: {
                     query: function () {
                         m.can.useAPI() && k.api("abort")
                     }
                 },
                 has: {
                     minimumCharacters: function () {
                         return m.get.value().length >= g.minCharacters
                     },
                     results: function () {
                         return 0 !== R.length && "" != R.html()
                     }
                 },
                 clear: {
                     cache: function (e) {
                         var t = k.data(h.cache);
                         e ? e && t && t[e] && (m.debug("Removing value from cache", e), delete t[e], k.data(h.cache, t)) : (m.debug("Clearing cache", e), k.removeData(h.cache))
                     }
                 },
                 read: {
                     cache: function (e) {
                         var t = k.data(h.cache);
                         return !!g.cache && (m.verbose("Checking cache for generated html for query", e), "object" == typeof t && t[e] !== i && t[e])
                     }
                 },
                 create: {
                     categoryResults: function (t) {
                         var n = {};
                         return e.each(t, function (e, t) {
                             t.category && (n[t.category] === i ? (m.verbose("Creating new category of results", t.category), n[t.category] = {
                                 name: t.category,
                                 results: [t]
                             }) : n[t.category].results.push(t))
                         }), n
                     },
                     id: function (e, t) {
                         var n, o = e + 1;
                         return t !== i ? (n = String.fromCharCode(97 + t) + o, m.verbose("Creating category result id", n)) : (n = o, m.verbose("Creating result id", n)), n
                     },
                     results: function () {
                         0 === R.length && (R = e("<div />").addClass(p.results).appendTo(k))
                     }
                 },
                 inject: {
                     result: function (e, t, n) {
                         m.verbose("Injecting result into results");
                         var o = n !== i ? R.children().eq(n).children(y.results).first().children(y.result).eq(t) : R.children(y.result).eq(t);
                         m.verbose("Injecting results metadata", o), o.data(h.result, e)
                     },
                     id: function (t) {
                         m.debug("Injecting unique ids into results");
                         var n = 0,
                             o = 0;
                         return "category" === g.type ? e.each(t, function (t, a) {
                             o = 0, e.each(a.results, function (e, t) {
                                 var r = a.results[e];
                                 r.id === i && (r.id = m.create.id(o, n)), m.inject.result(r, o, n), o++
                             }), n++
                         }) : e.each(t, function (e, n) {
                             var a = t[e];
                             a.id === i && (a.id = m.create.id(o)), m.inject.result(a, o), o++
                         }), t
                     }
                 },
                 save: {
                     results: function (e) {
                         m.verbose("Saving current search results to metadata", e), k.data(h.results, e)
                     }
                 },
                 write: {
                     cache: function (e, t) {
                         var n = k.data(h.cache) !== i ? k.data(h.cache) : {};
                         g.cache && (m.verbose("Writing generated html to cache", e, t), n[e] = t, k.data(h.cache, n))
                     }
                 },
                 addResults: function (t) {
                     if (e.isFunction(g.onResultsAdd) && !1 === g.onResultsAdd.call(R, t)) return m.debug("onResultsAdd callback cancelled default action"), !1;
                     t ? (R.html(t), m.refreshResults(), g.selectFirstResult && m.select.firstResult(), m.showResults()) : m.hideResults(function () {
                         R.empty()
                     })
                 },
                 showResults: function (t) {
                     t = e.isFunction(t) ? t : function () {}, D || !m.is.visible() && m.has.results() && (m.can.transition() ? (m.debug("Showing results with css animations"), R.transition({
                         animation: g.transition + " in",
                         debug: g.debug,
                         verbose: g.verbose,
                         duration: g.duration,
                         onComplete: function () {
                             t()
                         },
                         queue: !0
                     })) : (m.debug("Showing results with javascript"), R.stop().fadeIn(g.duration, g.easing)), g.onResultsOpen.call(R))
                 },
                 hideResults: function (t) {
                     t = e.isFunction(t) ? t : function () {}, m.is.visible() && (m.can.transition() ? (m.debug("Hiding results with css animations"), R.transition({
                         animation: g.transition + " out",
                         debug: g.debug,
                         verbose: g.verbose,
                         duration: g.duration,
                         onComplete: function () {
                             t()
                         },
                         queue: !0
                     })) : (m.debug("Hiding results with javascript"), R.stop().fadeOut(g.duration, g.easing)), g.onResultsClose.call(R))
                 },
                 generateResults: function (t) {
                     m.debug("Generating html from response", t);
                     var n = g.templates[g.type],
                         i = e.isPlainObject(t[b.results]) && !e.isEmptyObject(t[b.results]),
                         o = e.isArray(t[b.results]) && t[b.results].length > 0,
                         a = "";
                     return i || o ? (g.maxResults > 0 && (i ? "standard" == g.type && m.error(x.maxResults) : t[b.results] = t[b.results].slice(0, g.maxResults)), e.isFunction(n) ? a = n(t, b) : m.error(x.noTemplate, !1)) : g.showNoResults && (a = m.displayMessage(x.noResults, "empty")), g.onResults.call(E, t), a
                 },
                 displayMessage: function (e, t) {
                     return t = t || "standard", m.debug("Displaying message", e, t), m.addResults(g.templates.message(e, t)), g.templates.message(e, t)
                 },
                 setting: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 },
                 debug: function () {
                     !g.silent && g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !g.silent && g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     g.silent || (m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         g.performance && (n = (t = (new Date).getTime()) - (l || t), l = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: E,
                             "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 500)
                     },
                     display: function () {
                         var t = g.name + ":",
                             n = 0;
                         l = !1, clearTimeout(m.performance.timer), e.each(c, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", s && (t += " '" + s + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function (t, n, o) {
                     var r, s, l, c = F;
                     return n = n || f, o = E || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s
                 }
             }, d ? (F === i && m.initialize(), m.invoke(u)) : (F !== i && F.invoke("destroy"), m.initialize())
         }), a !== i ? a : this
     }, e.fn.search.settings = {
         name: "Search",
         namespace: "search",
         silent: !1,
         debug: !1,
         verbose: !1,
         performance: !0,
         type: "standard",
         minCharacters: 1,
         selectFirstResult: !1,
         apiSettings: !1,
         source: !1,
         searchOnFocus: !0,
         searchFields: ["title", "description"],
         displayField: "",
         fullTextSearch: "exact",
         automatic: !0,
         hideDelay: 0,
         searchDelay: 200,
         maxResults: 7,
         cache: !0,
         showNoResults: !0,
         transition: "scale",
         duration: 200,
         easing: "easeOutExpo",
         onSelect: !1,
         onResultsAdd: !1,
         onSearchQuery: function (e) {},
         onResults: function (e) {},
         onResultsOpen: function () {},
         onResultsClose: function () {},
         className: {
             animating: "animating",
             active: "active",
             empty: "empty",
             focus: "focus",
             hidden: "hidden",
             loading: "loading",
             results: "results",
             pressed: "down"
         },
         error: {
             source: "Cannot search. No source used, and Semantic API module was not included",
             noResults: "Your search returned no results",
             logging: "Error in debug logging, exiting.",
             noEndpoint: "No search endpoint was specified",
             noTemplate: "A valid template name was not specified.",
             oldSearchSyntax: "searchFullText setting has been renamed fullTextSearch for consistency, please adjust your settings.",
             serverError: "There was an issue querying the server.",
             maxResults: "Results must be an array to use maxResults setting",
             method: "The method you called is not defined."
         },
         metadata: {
             cache: "cache",
             results: "results",
             result: "result"
         },
         regExp: {
             escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
             beginsWith: "(?:s|^)"
         },
         fields: {
             categories: "results",
             categoryName: "name",
             categoryResults: "results",
             description: "description",
             image: "image",
             price: "price",
             results: "results",
             title: "title",
             url: "url",
             action: "action",
             actionText: "text",
             actionURL: "url"
         },
         selector: {
             prompt: ".prompt",
             searchButton: ".search.button",
             results: ".results",
             message: ".results > .message",
             category: ".category",
             result: ".result",
             title: ".title, .name"
         },
         templates: {
             escape: function (e) {
                 var t = {
                     "&": "&amp;",
                     "<": "&lt;",
                     ">": "&gt;",
                     '"': "&quot;",
                     "'": "&#x27;",
                     "`": "&#x60;"
                 };
                 return /[&<>"'`]/.test(e) ? e.replace(/[&<>"'`]/g, function (e) {
                     return t[e]
                 }) : e
             },
             message: function (e, t) {
                 var n = "";
                 return e !== i && t !== i && (n += '<div class="message ' + t + '">', n += "empty" == t ? '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">' : ' <div class="description">' + e + "</div>", n += "</div>"), n
             },
             category: function (t, n) {
                 var o = "";
                 e.fn.search.settings.templates.escape;
                 return t[n.categoryResults] !== i && (e.each(t[n.categoryResults], function (t, a) {
                     a[n.results] !== i && a.results.length > 0 && (o += '<div class="category">', a[n.categoryName] !== i && (o += '<div class="name">' + a[n.categoryName] + "</div>"), o += '<div class="results">', e.each(a.results, function (e, t) {
                         t[n.url] ? o += '<a class="result" href="' + t[n.url] + '">' : o += '<a class="result">', t[n.image] !== i && (o += '<div class="image"> <img src="' + t[n.image] + '"></div>'), o += '<div class="content">', t[n.price] !== i && (o += '<div class="price">' + t[n.price] + "</div>"), t[n.title] !== i && (o += '<div class="title">' + t[n.title] + "</div>"), t[n.description] !== i && (o += '<div class="description">' + t[n.description] + "</div>"), o += "</div>", o += "</a>"
                     }), o += "</div>", o += "</div>")
                 }), t[n.action] && (o += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), o)
             },
             standard: function (t, n) {
                 var o = "";
                 return t[n.results] !== i && (e.each(t[n.results], function (e, t) {
                     t[n.url] ? o += '<a class="result" href="' + t[n.url] + '">' : o += '<a class="result">', t[n.image] !== i && (o += '<div class="image"> <img src="' + t[n.image] + '"></div>'), o += '<div class="content">', t[n.price] !== i && (o += '<div class="price">' + t[n.price] + "</div>"), t[n.title] !== i && (o += '<div class="title">' + t[n.title] + "</div>"), t[n.description] !== i && (o += '<div class="description">' + t[n.description] + "</div>"), o += "</div>", o += "</a>"
                 }), t[n.action] && (o += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), o)
             }
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.shape = function (o) {
         var a, r = e(this),
             s = (e("body"), (new Date).getTime()),
             l = [],
             c = arguments[0],
             u = "string" == typeof c,
             d = [].slice.call(arguments, 1),
             f = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                 setTimeout(e, 0)
             };
         return r.each(function () {
             var t, m, g, p = r.selector || "",
                 h = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.shape.settings, o) : e.extend({}, e.fn.shape.settings),
                 v = h.namespace,
                 b = h.selector,
                 y = h.error,
                 x = h.className,
                 C = "." + v,
                 w = "module-" + v,
                 S = e(this),
                 k = S.find(b.sides),
                 T = S.find(b.side),
                 A = !1,
                 R = this,
                 P = S.data(w);
             g = {
                 initialize: function () {
                     g.verbose("Initializing module for", R), g.set.defaultSide(), g.instantiate()
                 },
                 instantiate: function () {
                     g.verbose("Storing instance of module", g), P = g, S.data(w, P)
                 },
                 destroy: function () {
                     g.verbose("Destroying previous module for", R), S.removeData(w).off(C)
                 },
                 refresh: function () {
                     g.verbose("Refreshing selector cache for", R), S = e(R), k = e(this).find(b.shape), T = e(this).find(b.side)
                 },
                 repaint: function () {
                     g.verbose("Forcing repaint event");
                     (k[0] || n.createElement("div")).offsetWidth
                 },
                 animate: function (e, n) {
                     g.verbose("Animating box with properties", e), n = n || function (e) {
                         g.verbose("Executing animation callback"), e !== i && e.stopPropagation(), g.reset(), g.set.active()
                     }, h.beforeChange.call(m[0]), g.get.transitionEvent() ? (g.verbose("Starting CSS animation"), S.addClass(x.animating), k.css(e).one(g.get.transitionEvent(), n), g.set.duration(h.duration), f(function () {
                         S.addClass(x.animating), t.addClass(x.hidden)
                     })) : n()
                 },
                 queue: function (e) {
                     g.debug("Queueing animation of", e), k.one(g.get.transitionEvent(), function () {
                         g.debug("Executing queued animation"), setTimeout(function () {
                             S.shape(e)
                         }, 0)
                     })
                 },
                 reset: function () {
                     g.verbose("Animating states reset"), S.removeClass(x.animating).attr("style", "").removeAttr("style"), k.attr("style", "").removeAttr("style"), T.attr("style", "").removeAttr("style").removeClass(x.hidden), m.removeClass(x.animating).attr("style", "").removeAttr("style")
                 },
                 is: {
                     complete: function () {
                         return T.filter("." + x.active)[0] == m[0]
                     },
                     animating: function () {
                         return S.hasClass(x.animating)
                     }
                 },
                 set: {
                     defaultSide: function () {
                         t = S.find("." + h.className.active), m = t.next(b.side).length > 0 ? t.next(b.side) : S.find(b.side).first(), A = !1, g.verbose("Active side set to", t), g.verbose("Next side set to", m)
                     },
                     duration: function (e) {
                         e = "number" == typeof (e = e || h.duration) ? e + "ms" : e, g.verbose("Setting animation duration", e), (h.duration || 0 === h.duration) && k.add(T).css({
                             "-webkit-transition-duration": e,
                             "-moz-transition-duration": e,
                             "-ms-transition-duration": e,
                             "-o-transition-duration": e,
                             "transition-duration": e
                         })
                     },
                     currentStageSize: function () {
                         var e = S.find("." + h.className.active),
                             t = e.outerWidth(!0),
                             n = e.outerHeight(!0);
                         S.css({
                             width: t,
                             height: n
                         })
                     },
                     stageSize: function () {
                         var e = S.clone().addClass(x.loading),
                             t = e.find("." + h.className.active),
                             n = A ? e.find(b.side).eq(A) : t.next(b.side).length > 0 ? t.next(b.side) : e.find(b.side).first(),
                             i = "next" == h.width ? n.outerWidth(!0) : "initial" == h.width ? S.width() : h.width,
                             o = "next" == h.height ? n.outerHeight(!0) : "initial" == h.height ? S.height() : h.height;
                         t.removeClass(x.active), n.addClass(x.active), e.insertAfter(S), e.remove(), "auto" != h.width && (S.css("width", i + h.jitter), g.verbose("Specifying width during animation", i)), "auto" != h.height && (S.css("height", o + h.jitter), g.verbose("Specifying height during animation", o))
                     },
                     nextSide: function (e) {
                         A = e, m = T.filter(e), A = T.index(m), 0 === m.length && (g.set.defaultSide(), g.error(y.side)), g.verbose("Next side manually set to", m)
                     },
                     active: function () {
                         g.verbose("Setting new side to active", m), T.removeClass(x.active), m.addClass(x.active), h.onChange.call(m[0]), g.set.defaultSide()
                     }
                 },
                 flip: {
                     up: function () {
                         if (!g.is.complete() || g.is.animating() || h.allowRepeats)
                             if (g.is.animating()) g.queue("flip up");
                             else {
                                 g.debug("Flipping up", m);
                                 var e = g.get.transform.up();
                                 g.set.stageSize(), g.stage.above(), g.animate(e)
                             }
                         else g.debug("Side already visible", m)
                     },
                     down: function () {
                         if (!g.is.complete() || g.is.animating() || h.allowRepeats)
                             if (g.is.animating()) g.queue("flip down");
                             else {
                                 g.debug("Flipping down", m);
                                 var e = g.get.transform.down();
                                 g.set.stageSize(), g.stage.below(), g.animate(e)
                             }
                         else g.debug("Side already visible", m)
                     },
                     left: function () {
                         if (!g.is.complete() || g.is.animating() || h.allowRepeats)
                             if (g.is.animating()) g.queue("flip left");
                             else {
                                 g.debug("Flipping left", m);
                                 var e = g.get.transform.left();
                                 g.set.stageSize(), g.stage.left(), g.animate(e)
                             }
                         else g.debug("Side already visible", m)
                     },
                     right: function () {
                         if (!g.is.complete() || g.is.animating() || h.allowRepeats)
                             if (g.is.animating()) g.queue("flip right");
                             else {
                                 g.debug("Flipping right", m);
                                 var e = g.get.transform.right();
                                 g.set.stageSize(), g.stage.right(), g.animate(e)
                             }
                         else g.debug("Side already visible", m)
                     },
                     over: function () {
                         !g.is.complete() || g.is.animating() || h.allowRepeats ? g.is.animating() ? g.queue("flip over") : (g.debug("Flipping over", m), g.set.stageSize(), g.stage.behind(), g.animate(g.get.transform.over())) : g.debug("Side already visible", m)
                     },
                     back: function () {
                         !g.is.complete() || g.is.animating() || h.allowRepeats ? g.is.animating() ? g.queue("flip back") : (g.debug("Flipping back", m), g.set.stageSize(), g.stage.behind(), g.animate(g.get.transform.back())) : g.debug("Side already visible", m)
                     }
                 },
                 get: {
                     transform: {
                         up: function () {
                             return {
                                 transform: "translateY(" + -(t.outerHeight(!0) - m.outerHeight(!0)) / 2 + "px) translateZ(" + -t.outerHeight(!0) / 2 + "px) rotateX(-90deg)"
                             }
                         },
                         down: function () {
                             return {
                                 transform: "translateY(" + -(t.outerHeight(!0) - m.outerHeight(!0)) / 2 + "px) translateZ(" + -t.outerHeight(!0) / 2 + "px) rotateX(90deg)"
                             }
                         },
                         left: function () {
                             return {
                                 transform: "translateX(" + -(t.outerWidth(!0) - m.outerWidth(!0)) / 2 + "px) translateZ(" + -t.outerWidth(!0) / 2 + "px) rotateY(90deg)"
                             }
                         },
                         right: function () {
                             return {
                                 transform: "translateX(" + -(t.outerWidth(!0) - m.outerWidth(!0)) / 2 + "px) translateZ(" + -t.outerWidth(!0) / 2 + "px) rotateY(-90deg)"
                             }
                         },
                         over: function () {
                             return {
                                 transform: "translateX(" + -(t.outerWidth(!0) - m.outerWidth(!0)) / 2 + "px) rotateY(180deg)"
                             }
                         },
                         back: function () {
                             return {
                                 transform: "translateX(" + -(t.outerWidth(!0) - m.outerWidth(!0)) / 2 + "px) rotateY(-180deg)"
                             }
                         }
                     },
                     transitionEvent: function () {
                         var e, t = n.createElement("element"),
                             o = {
                                 transition: "transitionend",
                                 OTransition: "oTransitionEnd",
                                 MozTransition: "transitionend",
                                 WebkitTransition: "webkitTransitionEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e]
                     },
                     nextSide: function () {
                         return t.next(b.side).length > 0 ? t.next(b.side) : S.find(b.side).first()
                     }
                 },
                 stage: {
                     above: function () {
                         var e = {
                             origin: (t.outerHeight(!0) - m.outerHeight(!0)) / 2,
                             depth: {
                                 active: m.outerHeight(!0) / 2,
                                 next: t.outerHeight(!0) / 2
                             }
                         };
                         g.verbose("Setting the initial animation position as above", m, e), k.css({
                             transform: "translateZ(-" + e.depth.active + "px)"
                         }), t.css({
                             transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                         }), m.addClass(x.animating).css({
                             top: e.origin + "px",
                             transform: "rotateX(90deg) translateZ(" + e.depth.next + "px)"
                         })
                     },
                     below: function () {
                         var e = {
                             origin: (t.outerHeight(!0) - m.outerHeight(!0)) / 2,
                             depth: {
                                 active: m.outerHeight(!0) / 2,
                                 next: t.outerHeight(!0) / 2
                             }
                         };
                         g.verbose("Setting the initial animation position as below", m, e), k.css({
                             transform: "translateZ(-" + e.depth.active + "px)"
                         }), t.css({
                             transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                         }), m.addClass(x.animating).css({
                             top: e.origin + "px",
                             transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px)"
                         })
                     },
                     left: function () {
                         var e = t.outerWidth(!0),
                             n = m.outerWidth(!0),
                             i = {
                                 origin: (e - n) / 2,
                                 depth: {
                                     active: n / 2,
                                     next: e / 2
                                 }
                             };
                         g.verbose("Setting the initial animation position as left", m, i), k.css({
                             transform: "translateZ(-" + i.depth.active + "px)"
                         }), t.css({
                             transform: "rotateY(0deg) translateZ(" + i.depth.active + "px)"
                         }), m.addClass(x.animating).css({
                             left: i.origin + "px",
                             transform: "rotateY(-90deg) translateZ(" + i.depth.next + "px)"
                         })
                     },
                     right: function () {
                         var e = t.outerWidth(!0),
                             n = m.outerWidth(!0),
                             i = {
                                 origin: (e - n) / 2,
                                 depth: {
                                     active: n / 2,
                                     next: e / 2
                                 }
                             };
                         g.verbose("Setting the initial animation position as left", m, i), k.css({
                             transform: "translateZ(-" + i.depth.active + "px)"
                         }), t.css({
                             transform: "rotateY(0deg) translateZ(" + i.depth.active + "px)"
                         }), m.addClass(x.animating).css({
                             left: i.origin + "px",
                             transform: "rotateY(90deg) translateZ(" + i.depth.next + "px)"
                         })
                     },
                     behind: function () {
                         var e = t.outerWidth(!0),
                             n = m.outerWidth(!0),
                             i = {
                                 origin: (e - n) / 2,
                                 depth: {
                                     active: n / 2,
                                     next: e / 2
                                 }
                             };
                         g.verbose("Setting the initial animation position as behind", m, i), t.css({
                             transform: "rotateY(0deg)"
                         }), m.addClass(x.animating).css({
                             left: i.origin + "px",
                             transform: "rotateY(-180deg)"
                         })
                     }
                 },
                 setting: function (t, n) {
                     if (g.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, h, t);
                     else {
                         if (n === i) return h[t];
                         e.isPlainObject(h[t]) ? e.extend(!0, h[t], n) : h[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 },
                 debug: function () {
                     !h.silent && h.debug && (h.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), g.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !h.silent && h.verbose && h.debug && (h.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), g.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     h.silent || (g.error = Function.prototype.bind.call(console.error, console, h.name + ":"), g.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         h.performance && (n = (t = (new Date).getTime()) - (s || t), s = t, l.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: R,
                             "Execution Time": n
                         })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 500)
                     },
                     display: function () {
                         var t = h.name + ":",
                             n = 0;
                         s = !1, clearTimeout(g.performance.timer), e.each(l, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", p && (t += " '" + p + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), l = []
                     }
                 },
                 invoke: function (t, n, o) {
                     var r, s, l, c = P;
                     return n = n || d, o = R || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s
                 }
             }, u ? (P === i && g.initialize(), g.invoke(c)) : (P !== i && P.invoke("destroy"), g.initialize())
         }), a !== i ? a : this
     }, e.fn.shape.settings = {
         name: "Shape",
         silent: !1,
         debug: !1,
         verbose: !1,
         jitter: 0,
         performance: !0,
         namespace: "shape",
         width: "initial",
         height: "initial",
         beforeChange: function () {},
         onChange: function () {},
         allowRepeats: !1,
         duration: !1,
         error: {
             side: "You tried to switch to a side that does not exist.",
             method: "The method you called is not defined"
         },
         className: {
             animating: "animating",
             hidden: "hidden",
             loading: "loading",
             active: "active"
         },
         selector: {
             sides: ".sides",
             side: ".side"
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.sidebar = function (o) {
         var a, r = e(this),
             s = e(t),
             l = e(n),
             c = e("html"),
             u = e("head"),
             d = r.selector || "",
             f = (new Date).getTime(),
             m = [],
             g = arguments[0],
             p = "string" == typeof g,
             h = [].slice.call(arguments, 1),
             v = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                 setTimeout(e, 0)
             };
         return r.each(function () {
             var r, b, y, x, C, w, S = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.sidebar.settings, o) : e.extend({}, e.fn.sidebar.settings),
                 k = S.selector,
                 T = S.className,
                 A = S.namespace,
                 R = S.regExp,
                 P = S.error,
                 E = "." + A,
                 F = "module-" + A,
                 O = e(this),
                 D = e(S.context),
                 q = O.children(k.sidebar),
                 j = (D.children(k.fixed), D.children(k.pusher)),
                 z = this,
                 I = O.data(F);
             w = {
                 initialize: function () {
                     w.debug("Initializing sidebar", o), w.create.id(), C = w.get.transitionEvent(), S.delaySetup ? v(w.setup.layout) : w.setup.layout(), v(function () {
                         w.setup.cache()
                     }), w.instantiate()
                 },
                 instantiate: function () {
                     w.verbose("Storing instance of module", w), I = w, O.data(F, w)
                 },
                 create: {
                     id: function () {
                         y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, w.verbose("Creating unique id for element", y)
                     }
                 },
                 destroy: function () {
                     w.verbose("Destroying previous module for", O), O.off(E).removeData(F), w.is.ios() && w.remove.ios(), D.off(b), s.off(b), l.off(b)
                 },
                 event: {
                     clickaway: function (e) {
                         var t = j.find(e.target).length > 0 || j.is(e.target),
                             n = D.is(e.target);
                         t && (w.verbose("User clicked on dimmed page"), w.hide()), n && (w.verbose("User clicked on dimmable context (scaled out page)"), w.hide())
                     },
                     touch: function (e) {},
                     containScroll: function (e) {
                         z.scrollTop <= 0 && (z.scrollTop = 1), z.scrollTop + z.offsetHeight >= z.scrollHeight && (z.scrollTop = z.scrollHeight - z.offsetHeight - 1)
                     },
                     scroll: function (t) {
                         0 === e(t.target).closest(k.sidebar).length && t.preventDefault()
                     }
                 },
                 bind: {
                     clickaway: function () {
                         w.verbose("Adding clickaway events to context", D), S.closable && D.on("click" + b, w.event.clickaway).on("touchend" + b, w.event.clickaway)
                     },
                     scrollLock: function () {
                         S.scrollLock && (w.debug("Disabling page scroll"), s.on("DOMMouseScroll" + b, w.event.scroll)), w.verbose("Adding events to contain sidebar scroll"), l.on("touchmove" + b, w.event.touch), O.on("scroll" + E, w.event.containScroll)
                     }
                 },
                 unbind: {
                     clickaway: function () {
                         w.verbose("Removing clickaway events from context", D), D.off(b)
                     },
                     scrollLock: function () {
                         w.verbose("Removing scroll lock from page"), l.off(b), s.off(b), O.off("scroll" + E)
                     }
                 },
                 add: {
                     inlineCSS: function () {
                         var t, n = w.cache.width || O.outerWidth(),
                             i = w.cache.height || O.outerHeight(),
                             o = w.is.rtl(),
                             a = w.get.direction(),
                             s = {
                                 left: n,
                                 right: -n,
                                 top: i,
                                 bottom: -i
                             };
                         o && (w.verbose("RTL detected, flipping widths"), s.left = -n, s.right = n), t = "<style>", "left" === a || "right" === a ? (w.debug("Adding CSS rules for animation distance", n), t += " .ui.visible." + a + ".sidebar ~ .fixed, .ui.visible." + a + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + s[a] + "px, 0, 0);           transform: translate3d(" + s[a] + "px, 0, 0); }") : "top" !== a && "bottom" != a || (t += " .ui.visible." + a + ".sidebar ~ .fixed, .ui.visible." + a + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + s[a] + "px, 0);           transform: translate3d(0, " + s[a] + "px, 0); }"), w.is.ie() && ("left" === a || "right" === a ? (w.debug("Adding CSS rules for animation distance", n), t += " body.pushable > .ui.visible." + a + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + s[a] + "px, 0, 0);           transform: translate3d(" + s[a] + "px, 0, 0); }") : "top" !== a && "bottom" != a || (t += " body.pushable > .ui.visible." + a + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + s[a] + "px, 0);           transform: translate3d(0, " + s[a] + "px, 0); }"), t += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"), r = e(t += "</style>").appendTo(u), w.debug("Adding sizing css to head", r)
                     }
                 },
                 refresh: function () {
                     w.verbose("Refreshing selector cache"), D = e(S.context), q = D.children(k.sidebar), j = D.children(k.pusher), D.children(k.fixed), w.clear.cache()
                 },
                 refreshSidebars: function () {
                     w.verbose("Refreshing other sidebars"), q = D.children(k.sidebar)
                 },
                 repaint: function () {
                     w.verbose("Forcing repaint event"), z.style.display = "none";
                     z.offsetHeight;
                     z.scrollTop = z.scrollTop, z.style.display = ""
                 },
                 setup: {
                     cache: function () {
                         w.cache = {
                             width: O.outerWidth(),
                             height: O.outerHeight(),
                             rtl: "rtl" == O.css("direction")
                         }
                     },
                     layout: function () {
                         0 === D.children(k.pusher).length && (w.debug("Adding wrapper element for sidebar"), w.error(P.pusher), j = e('<div class="pusher" />'), D.children().not(k.omitted).not(q).wrapAll(j), w.refresh()), 0 !== O.nextAll(k.pusher).length && O.nextAll(k.pusher)[0] === j[0] || (w.debug("Moved sidebar to correct parent element"), w.error(P.movedSidebar, z), O.detach().prependTo(D), w.refresh()), w.clear.cache(), w.set.pushable(), w.set.direction()
                     }
                 },
                 attachEvents: function (t, n) {
                     var i = e(t);
                     n = e.isFunction(w[n]) ? w[n] : w.toggle, i.length > 0 ? (w.debug("Attaching sidebar events to element", t, n), i.on("click" + E, n)) : w.error(P.notFound, t)
                 },
                 show: function (t) {
                     if (t = e.isFunction(t) ? t : function () {}, w.is.hidden()) {
                         if (w.refreshSidebars(), S.overlay && (w.error(P.overlay), S.transition = "overlay"), w.refresh(), w.othersActive())
                             if (w.debug("Other sidebars currently visible"), S.exclusive) {
                                 if ("overlay" != S.transition) return void w.hideOthers(w.show);
                                 w.hideOthers()
                             } else S.transition = "overlay";
                         w.pushPage(function () {
                             t.call(z), S.onShow.call(z)
                         }), S.onChange.call(z), S.onVisible.call(z)
                     } else w.debug("Sidebar is already visible")
                 },
                 hide: function (t) {
                     t = e.isFunction(t) ? t : function () {}, (w.is.visible() || w.is.animating()) && (w.debug("Hiding sidebar", t), w.refreshSidebars(), w.pullPage(function () {
                         t.call(z), S.onHidden.call(z)
                     }), S.onChange.call(z), S.onHide.call(z))
                 },
                 othersAnimating: function () {
                     return q.not(O).filter("." + T.animating).length > 0
                 },
                 othersVisible: function () {
                     return q.not(O).filter("." + T.visible).length > 0
                 },
                 othersActive: function () {
                     return w.othersVisible() || w.othersAnimating()
                 },
                 hideOthers: function (e) {
                     var t = q.not(O).filter("." + T.visible),
                         n = t.length,
                         i = 0;
                     e = e || function () {}, t.sidebar("hide", function () {
                         ++i == n && e()
                     })
                 },
                 toggle: function () {
                     w.verbose("Determining toggled direction"), w.is.hidden() ? w.show() : w.hide()
                 },
                 pushPage: function (t) {
                     var n, i, o, a = w.get.transition(),
                         r = "overlay" === a || w.othersActive() ? O : j;
                     t = e.isFunction(t) ? t : function () {}, "scale down" == S.transition && w.scrollToTop(), w.set.transition(a), w.repaint(), n = function () {
                         w.bind.clickaway(), w.add.inlineCSS(), w.set.animating(), w.set.visible()
                     }, i = function () {
                         w.set.dimmed()
                     }, o = function (e) {
                         e.target == r[0] && (r.off(C + b, o), w.remove.animating(), w.bind.scrollLock(), t.call(z))
                     }, r.off(C + b), r.on(C + b, o), v(n), S.dimPage && !w.othersVisible() && v(i)
                 },
                 pullPage: function (t) {
                     var n, i, o = w.get.transition(),
                         a = "overlay" == o || w.othersActive() ? O : j;
                     t = e.isFunction(t) ? t : function () {}, w.verbose("Removing context push state", w.get.direction()), w.unbind.clickaway(), w.unbind.scrollLock(), n = function () {
                         w.set.transition(o), w.set.animating(), w.remove.visible(), S.dimPage && !w.othersVisible() && j.removeClass(T.dimmed)
                     }, i = function (e) {
                         e.target == a[0] && (a.off(C + b, i), w.remove.animating(), w.remove.transition(), w.remove.inlineCSS(), ("scale down" == o || S.returnScroll && w.is.mobile()) && w.scrollBack(), t.call(z))
                     }, a.off(C + b), a.on(C + b, i), v(n)
                 },
                 scrollToTop: function () {
                     w.verbose("Scrolling to top of page to avoid animation issues"), x = e(t).scrollTop(), O.scrollTop(0), t.scrollTo(0, 0)
                 },
                 scrollBack: function () {
                     w.verbose("Scrolling back to original page position"), t.scrollTo(0, x)
                 },
                 clear: {
                     cache: function () {
                         w.verbose("Clearing cached dimensions"), w.cache = {}
                     }
                 },
                 set: {
                     ios: function () {
                         c.addClass(T.ios)
                     },
                     pushed: function () {
                         D.addClass(T.pushed)
                     },
                     pushable: function () {
                         D.addClass(T.pushable)
                     },
                     dimmed: function () {
                         j.addClass(T.dimmed)
                     },
                     active: function () {
                         O.addClass(T.active)
                     },
                     animating: function () {
                         O.addClass(T.animating)
                     },
                     transition: function (e) {
                         e = e || w.get.transition(), O.addClass(e)
                     },
                     direction: function (e) {
                         e = e || w.get.direction(), O.addClass(T[e])
                     },
                     visible: function () {
                         O.addClass(T.visible)
                     },
                     overlay: function () {
                         O.addClass(T.overlay)
                     }
                 },
                 remove: {
                     inlineCSS: function () {
                         w.debug("Removing inline css styles", r), r && r.length > 0 && r.remove()
                     },
                     ios: function () {
                         c.removeClass(T.ios)
                     },
                     pushed: function () {
                         D.removeClass(T.pushed)
                     },
                     pushable: function () {
                         D.removeClass(T.pushable)
                     },
                     active: function () {
                         O.removeClass(T.active)
                     },
                     animating: function () {
                         O.removeClass(T.animating)
                     },
                     transition: function (e) {
                         e = e || w.get.transition(), O.removeClass(e)
                     },
                     direction: function (e) {
                         e = e || w.get.direction(), O.removeClass(T[e])
                     },
                     visible: function () {
                         O.removeClass(T.visible)
                     },
                     overlay: function () {
                         O.removeClass(T.overlay)
                     }
                 },
                 get: {
                     direction: function () {
                         return O.hasClass(T.top) ? T.top : O.hasClass(T.right) ? T.right : O.hasClass(T.bottom) ? T.bottom : T.left
                     },
                     transition: function () {
                         var e, t = w.get.direction();
                         return e = w.is.mobile() ? "auto" == S.mobileTransition ? S.defaultTransition.mobile[t] : S.mobileTransition : "auto" == S.transition ? S.defaultTransition.computer[t] : S.transition, w.verbose("Determined transition", e), e
                     },
                     transitionEvent: function () {
                         var e, t = n.createElement("element"),
                             o = {
                                 transition: "transitionend",
                                 OTransition: "oTransitionEnd",
                                 MozTransition: "transitionend",
                                 WebkitTransition: "webkitTransitionEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e]
                     }
                 },
                 is: {
                     ie: function () {
                         return !t.ActiveXObject && "ActiveXObject" in t || "ActiveXObject" in t
                     },
                     ios: function () {
                         var e = navigator.userAgent,
                             t = e.match(R.ios),
                             n = e.match(R.mobileChrome);
                         return !(!t || n) && (w.verbose("Browser was found to be iOS", e), !0)
                     },
                     mobile: function () {
                         var e = navigator.userAgent;
                         return e.match(R.mobile) ? (w.verbose("Browser was found to be mobile", e), !0) : (w.verbose("Browser is not mobile, using regular transition", e), !1)
                     },
                     hidden: function () {
                         return !w.is.visible()
                     },
                     visible: function () {
                         return O.hasClass(T.visible)
                     },
                     open: function () {
                         return w.is.visible()
                     },
                     closed: function () {
                         return w.is.hidden()
                     },
                     vertical: function () {
                         return O.hasClass(T.top)
                     },
                     animating: function () {
                         return D.hasClass(T.animating)
                     },
                     rtl: function () {
                         return w.cache.rtl === i && (w.cache.rtl = "rtl" == O.css("direction")), w.cache.rtl
                     }
                 },
                 setting: function (t, n) {
                     if (w.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, S, t);
                     else {
                         if (n === i) return S[t];
                         e.isPlainObject(S[t]) ? e.extend(!0, S[t], n) : S[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, w, t);
                     else {
                         if (n === i) return w[t];
                         w[t] = n
                     }
                 },
                 debug: function () {
                     !S.silent && S.debug && (S.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, S.name + ":"), w.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !S.silent && S.verbose && S.debug && (S.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, S.name + ":"), w.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     S.silent || (w.error = Function.prototype.bind.call(console.error, console, S.name + ":"), w.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         S.performance && (n = (t = (new Date).getTime()) - (f || t), f = t, m.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: z,
                             "Execution Time": n
                         })), clearTimeout(w.performance.timer), w.performance.timer = setTimeout(w.performance.display, 500)
                     },
                     display: function () {
                         var t = S.name + ":",
                             n = 0;
                         f = !1, clearTimeout(w.performance.timer), e.each(m, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", d && (t += " '" + d + "'"), (console.group !== i || console.table !== i) && m.length > 0 && (console.groupCollapsed(t), console.table ? console.table(m) : e.each(m, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), m = []
                     }
                 },
                 invoke: function (t, n, o) {
                     var r, s, l, c = I;
                     return n = n || h, o = z || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (w.error(P.method, t), !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s
                 }
             }, p ? (I === i && w.initialize(), w.invoke(g)) : (I !== i && w.invoke("destroy"), w.initialize())
         }), a !== i ? a : this
     }, e.fn.sidebar.settings = {
         name: "Sidebar",
         namespace: "sidebar",
         silent: !1,
         debug: !1,
         verbose: !1,
         performance: !0,
         transition: "auto",
         mobileTransition: "auto",
         defaultTransition: {
             computer: {
                 left: "uncover",
                 right: "uncover",
                 top: "overlay",
                 bottom: "overlay"
             },
             mobile: {
                 left: "uncover",
                 right: "uncover",
                 top: "overlay",
                 bottom: "overlay"
             }
         },
         context: "body",
         exclusive: !1,
         closable: !0,
         dimPage: !0,
         scrollLock: !1,
         returnScroll: !1,
         delaySetup: !1,
         duration: 500,
         onChange: function () {},
         onShow: function () {},
         onHide: function () {},
         onHidden: function () {},
         onVisible: function () {},
         className: {
             active: "active",
             animating: "animating",
             dimmed: "dimmed",
             ios: "ios",
             pushable: "pushable",
             pushed: "pushed",
             right: "right",
             top: "top",
             left: "left",
             bottom: "bottom",
             visible: "visible"
         },
         selector: {
             fixed: ".fixed",
             omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",
             pusher: ".pusher",
             sidebar: ".ui.sidebar"
         },
         regExp: {
             ios: /(iPad|iPhone|iPod)/g,
             mobileChrome: /(CriOS)/g,
             mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
         },
         error: {
             method: "The method you called is not defined.",
             pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element",
             movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",
             overlay: "The overlay setting is no longer supported, use animation: overlay",
             notFound: "There were no elements that matched the specified selector"
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.sticky = function (o) {
         var a, r = e(this),
             s = r.selector || "",
             l = (new Date).getTime(),
             c = [],
             u = arguments[0],
             d = "string" == typeof u,
             f = [].slice.call(arguments, 1);
         return r.each(function () {
             var r, m, g, p, h, v = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.sticky.settings, o) : e.extend({}, e.fn.sticky.settings),
                 b = v.className,
                 y = v.namespace,
                 x = v.error,
                 C = "." + y,
                 w = "module-" + y,
                 S = e(this),
                 k = e(t),
                 T = e(v.scrollContext),
                 A = (S.selector, S.data(w)),
                 R = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                     setTimeout(e, 0)
                 },
                 P = this;
             h = {
                 initialize: function () {
                     h.determineContainer(), h.determineContext(), h.verbose("Initializing sticky", v, r), h.save.positions(), h.checkErrors(), h.bind.events(), v.observeChanges && h.observeChanges(), h.instantiate()
                 },
                 instantiate: function () {
                     h.verbose("Storing instance of module", h), A = h, S.data(w, h)
                 },
                 destroy: function () {
                     h.verbose("Destroying previous instance"), h.reset(), g && g.disconnect(), p && p.disconnect(), k.off("load" + C, h.event.load).off("resize" + C, h.event.resize), T.off("scrollchange" + C, h.event.scrollchange), S.removeData(w)
                 },
                 observeChanges: function () {
                     "MutationObserver" in t && (g = new MutationObserver(h.event.documentChanged), p = new MutationObserver(h.event.changed), g.observe(n, {
                         childList: !0,
                         subtree: !0
                     }), p.observe(P, {
                         childList: !0,
                         subtree: !0
                     }), p.observe(m[0], {
                         childList: !0,
                         subtree: !0
                     }), h.debug("Setting up mutation observer", p))
                 },
                 determineContainer: function () {
                     r = v.container ? e(v.container) : S.offsetParent()
                 },
                 determineContext: function () {
                     0 !== (m = v.context ? e(v.context) : r).length || h.error(x.invalidContext, v.context, S)
                 },
                 checkErrors: function () {
                     if (h.is.hidden() && h.error(x.visible, S), h.cache.element.height > h.cache.context.height) return h.reset(), void h.error(x.elementSize, S)
                 },
                 bind: {
                     events: function () {
                         k.on("load" + C, h.event.load).on("resize" + C, h.event.resize), T.off("scroll" + C).on("scroll" + C, h.event.scroll).on("scrollchange" + C, h.event.scrollchange)
                     }
                 },
                 event: {
                     changed: function (e) {
                         clearTimeout(h.timer), h.timer = setTimeout(function () {
                             h.verbose("DOM tree modified, updating sticky menu", e), h.refresh()
                         }, 100)
                     },
                     documentChanged: function (t) {
                         [].forEach.call(t, function (t) {
                             t.removedNodes && [].forEach.call(t.removedNodes, function (t) {
                                 (t == P || e(t).find(P).length > 0) && (h.debug("Element removed from DOM, tearing down events"), h.destroy())
                             })
                         })
                     },
                     load: function () {
                         h.verbose("Page contents finished loading"), R(h.refresh)
                     },
                     resize: function () {
                         h.verbose("Window resized"), R(h.refresh)
                     },
                     scroll: function () {
                         R(function () {
                             T.triggerHandler("scrollchange" + C, T.scrollTop())
                         })
                     },
                     scrollchange: function (e, t) {
                         h.stick(t), v.onScroll.call(P)
                     }
                 },
                 refresh: function (e) {
                     h.reset(), v.context || h.determineContext(), e && h.determineContainer(), h.save.positions(), h.stick(), v.onReposition.call(P)
                 },
                 supports: {
                     sticky: function () {
                         var t = e("<div/>");
                         t[0];
                         return t.addClass(b.supported), t.css("position").match("sticky")
                     }
                 },
                 save: {
                     lastScroll: function (e) {
                         h.lastScroll = e
                     },
                     elementScroll: function (e) {
                         h.elementScroll = e
                     },
                     positions: function () {
                         var e = {
                                 height: T.height()
                             },
                             t = {
                                 margin: {
                                     top: parseInt(S.css("margin-top"), 10),
                                     bottom: parseInt(S.css("margin-bottom"), 10)
                                 },
                                 offset: S.offset(),
                                 width: S.outerWidth(),
                                 height: S.outerHeight()
                             },
                             n = {
                                 offset: m.offset(),
                                 height: m.outerHeight()
                             };
                         r.outerHeight();
                         h.is.standardScroll() || (h.debug("Non-standard scroll. Removing scroll offset from element offset"), e.top = T.scrollTop(), e.left = T.scrollLeft(), t.offset.top += e.top, n.offset.top += e.top, t.offset.left += e.left, n.offset.left += e.left), h.cache = {
                             fits: t.height + v.offset <= e.height,
                             sameHeight: t.height == n.height,
                             scrollContext: {
                                 height: e.height
                             },
                             element: {
                                 margin: t.margin,
                                 top: t.offset.top - t.margin.top,
                                 left: t.offset.left,
                                 width: t.width,
                                 height: t.height,
                                 bottom: t.offset.top + t.height
                             },
                             context: {
                                 top: n.offset.top,
                                 height: n.height,
                                 bottom: n.offset.top + n.height
                             }
                         }, h.set.containerSize(), h.stick(), h.debug("Caching element positions", h.cache)
                     }
                 },
                 get: {
                     direction: function (e) {
                         var t = "down";
                         return e = e || T.scrollTop(), h.lastScroll !== i && (h.lastScroll < e ? t = "down" : h.lastScroll > e && (t = "up")), t
                     },
                     scrollChange: function (e) {
                         return e = e || T.scrollTop(), h.lastScroll ? e - h.lastScroll : 0
                     },
                     currentElementScroll: function () {
                         return h.elementScroll ? h.elementScroll : h.is.top() ? Math.abs(parseInt(S.css("top"), 10)) || 0 : Math.abs(parseInt(S.css("bottom"), 10)) || 0
                     },
                     elementScroll: function (e) {
                         e = e || T.scrollTop();
                         var t = h.cache.element,
                             n = h.cache.scrollContext,
                             i = h.get.scrollChange(e),
                             o = t.height - n.height + v.offset,
                             a = h.get.currentElementScroll(),
                             r = a + i;
                         return a = h.cache.fits || r < 0 ? 0 : r > o ? o : r
                     }
                 },
                 remove: {
                     lastScroll: function () {
                         delete h.lastScroll
                     },
                     elementScroll: function (e) {
                         delete h.elementScroll
                     },
                     minimumSize: function () {
                         r.css("min-height", "")
                     },
                     offset: function () {
                         S.css("margin-top", "")
                     }
                 },
                 set: {
                     offset: function () {
                         h.verbose("Setting offset on element", v.offset), S.css("margin-top", v.offset)
                     },
                     containerSize: function () {
                         var e = r.get(0).tagName;
                         "HTML" === e || "body" == e ? h.determineContainer() : Math.abs(r.outerHeight() - h.cache.context.height) > v.jitter && (h.debug("Context has padding, specifying exact height for container", h.cache.context.height), r.css({
                             height: h.cache.context.height
                         }))
                     },
                     minimumSize: function () {
                         var e = h.cache.element;
                         r.css("min-height", e.height)
                     },
                     scroll: function (e) {
                         h.debug("Setting scroll on element", e), h.elementScroll != e && (h.is.top() && S.css("bottom", "").css("top", -e), h.is.bottom() && S.css("top", "").css("bottom", e))
                     },
                     size: function () {
                         0 !== h.cache.element.height && 0 !== h.cache.element.width && (P.style.setProperty("width", h.cache.element.width + "px", "important"), P.style.setProperty("height", h.cache.element.height + "px", "important"))
                     }
                 },
                 is: {
                     standardScroll: function () {
                         return T[0] == t
                     },
                     top: function () {
                         return S.hasClass(b.top)
                     },
                     bottom: function () {
                         return S.hasClass(b.bottom)
                     },
                     initialPosition: function () {
                         return !h.is.fixed() && !h.is.bound()
                     },
                     hidden: function () {
                         return !S.is(":visible")
                     },
                     bound: function () {
                         return S.hasClass(b.bound)
                     },
                     fixed: function () {
                         return S.hasClass(b.fixed)
                     }
                 },
                 stick: function (e) {
                     var t = e || T.scrollTop(),
                         n = h.cache,
                         i = n.fits,
                         o = n.sameHeight,
                         a = n.element,
                         r = n.scrollContext,
                         s = n.context,
                         l = h.is.bottom() && v.pushing ? v.bottomOffset : v.offset,
                         c = (e = {
                             top: t + l,
                             bottom: t + l + r.height
                         }, h.get.direction(e.top), i ? 0 : h.get.elementScroll(e.top)),
                         u = !i;
                     0 !== a.height && !o && (h.is.initialPosition() ? e.top >= s.bottom ? (h.debug("Initial element position is bottom of container"), h.bindBottom()) : e.top > a.top && (a.height + e.top - c >= s.bottom ? (h.debug("Initial element position is bottom of container"), h.bindBottom()) : (h.debug("Initial element position is fixed"), h.fixTop())) : h.is.fixed() ? h.is.top() ? e.top <= a.top ? (h.debug("Fixed element reached top of container"), h.setInitialPosition()) : a.height + e.top - c >= s.bottom ? (h.debug("Fixed element reached bottom of container"), h.bindBottom()) : u && (h.set.scroll(c), h.save.lastScroll(e.top), h.save.elementScroll(c)) : h.is.bottom() && (e.bottom - a.height <= a.top ? (h.debug("Bottom fixed rail has reached top of container"), h.setInitialPosition()) : e.bottom >= s.bottom ? (h.debug("Bottom fixed rail has reached bottom of container"), h.bindBottom()) : u && (h.set.scroll(c), h.save.lastScroll(e.top), h.save.elementScroll(c))) : h.is.bottom() && (e.top <= a.top ? (h.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"), h.setInitialPosition()) : v.pushing ? h.is.bound() && e.bottom <= s.bottom && (h.debug("Fixing bottom attached element to bottom of browser."), h.fixBottom()) : h.is.bound() && e.top <= s.bottom - a.height && (h.debug("Fixing bottom attached element to top of browser."), h.fixTop())))
                 },
                 bindTop: function () {
                     h.debug("Binding element to top of parent container"), h.remove.offset(), S.css({
                         left: "",
                         top: "",
                         marginBottom: ""
                     }).removeClass(b.fixed).removeClass(b.bottom).addClass(b.bound).addClass(b.top), v.onTop.call(P), v.onUnstick.call(P)
                 },
                 bindBottom: function () {
                     h.debug("Binding element to bottom of parent container"), h.remove.offset(), S.css({
                         left: "",
                         top: ""
                     }).removeClass(b.fixed).removeClass(b.top).addClass(b.bound).addClass(b.bottom), v.onBottom.call(P), v.onUnstick.call(P)
                 },
                 setInitialPosition: function () {
                     h.debug("Returning to initial position"), h.unfix(), h.unbind()
                 },
                 fixTop: function () {
                     h.debug("Fixing element to top of page"), v.setSize && h.set.size(), h.set.minimumSize(), h.set.offset(), S.css({
                         left: h.cache.element.left,
                         bottom: "",
                         marginBottom: ""
                     }).removeClass(b.bound).removeClass(b.bottom).addClass(b.fixed).addClass(b.top), v.onStick.call(P)
                 },
                 fixBottom: function () {
                     h.debug("Sticking element to bottom of page"), v.setSize && h.set.size(), h.set.minimumSize(), h.set.offset(), S.css({
                         left: h.cache.element.left,
                         bottom: "",
                         marginBottom: ""
                     }).removeClass(b.bound).removeClass(b.top).addClass(b.fixed).addClass(b.bottom), v.onStick.call(P)
                 },
                 unbind: function () {
                     h.is.bound() && (h.debug("Removing container bound position on element"), h.remove.offset(), S.removeClass(b.bound).removeClass(b.top).removeClass(b.bottom))
                 },
                 unfix: function () {
                     h.is.fixed() && (h.debug("Removing fixed position on element"), h.remove.minimumSize(), h.remove.offset(), S.removeClass(b.fixed).removeClass(b.top).removeClass(b.bottom), v.onUnstick.call(P))
                 },
                 reset: function () {
                     h.debug("Resetting elements position"), h.unbind(), h.unfix(), h.resetCSS(), h.remove.offset(), h.remove.lastScroll()
                 },
                 resetCSS: function () {
                     S.css({
                         width: "",
                         height: ""
                     }), r.css({
                         height: ""
                     })
                 },
                 setting: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, v, t);
                     else {
                         if (n === i) return v[t];
                         v[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, h, t);
                     else {
                         if (n === i) return h[t];
                         h[t] = n
                     }
                 },
                 debug: function () {
                     !v.silent && v.debug && (v.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), h.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !v.silent && v.verbose && v.debug && (v.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), h.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     v.silent || (h.error = Function.prototype.bind.call(console.error, console, v.name + ":"), h.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         v.performance && (n = (t = (new Date).getTime()) - (l || t), l = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: P,
                             "Execution Time": n
                         })), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 0)
                     },
                     display: function () {
                         var t = v.name + ":",
                             n = 0;
                         l = !1, clearTimeout(h.performance.timer), e.each(c, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function (t, n, o) {
                     var r, s, l, c = A;
                     return n = n || f, o = P || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s
                 }
             }, d ? (A === i && h.initialize(), h.invoke(u)) : (A !== i && A.invoke("destroy"), h.initialize())
         }), a !== i ? a : this
     }, e.fn.sticky.settings = {
         name: "Sticky",
         namespace: "sticky",
         silent: !1,
         debug: !1,
         verbose: !0,
         performance: !0,
         pushing: !1,
         context: !1,
         container: !1,
         scrollContext: t,
         offset: 0,
         bottomOffset: 0,
         jitter: 5,
         setSize: !0,
         observeChanges: !1,
         onReposition: function () {},
         onScroll: function () {},
         onStick: function () {},
         onUnstick: function () {},
         onTop: function () {},
         onBottom: function () {},
         error: {
             container: "Sticky element must be inside a relative container",
             visible: "Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",
             method: "The method you called is not defined.",
             invalidContext: "Context specified does not exist",
             elementSize: "Sticky element is larger than its container, cannot create sticky."
         },
         className: {
             bound: "bound",
             fixed: "fixed",
             supported: "native",
             top: "top",
             bottom: "bottom"
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.tab = function (o) {
         var a, r = e.isFunction(this) ? e(t) : e(this),
             s = r.selector || "",
             l = (new Date).getTime(),
             c = [],
             u = arguments[0],
             d = "string" == typeof u,
             f = [].slice.call(arguments, 1),
             m = !1;
         return r.each(function () {
             var g, p, h, v, b, y, x = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.tab.settings, o) : e.extend({}, e.fn.tab.settings),
                 C = x.className,
                 w = x.metadata,
                 S = x.selector,
                 k = x.error,
                 T = "." + x.namespace,
                 A = "module-" + x.namespace,
                 R = e(this),
                 P = {},
                 E = !0,
                 F = 0,
                 O = this,
                 D = R.data(A);
             b = {
                 initialize: function () {
                     b.debug("Initializing tab menu item", R), b.fix.callbacks(), b.determineTabs(), b.debug("Determining tabs", x.context, p), x.auto && b.set.auto(), b.bind.events(), x.history && !m && (b.initializeHistory(), m = !0), b.instantiate()
                 },
                 instantiate: function () {
                     b.verbose("Storing instance of module", b), D = b, R.data(A, b)
                 },
                 destroy: function () {
                     b.debug("Destroying tabs", R), R.removeData(A).off(T)
                 },
                 bind: {
                     events: function () {
                         e.isWindow(O) || (b.debug("Attaching tab activation events to element", R), R.on("click" + T, b.event.click))
                     }
                 },
                 determineTabs: function () {
                     var t;
                     "parent" === x.context ? (R.closest(S.ui).length > 0 ? (t = R.closest(S.ui), b.verbose("Using closest UI element as parent", t)) : t = R, g = t.parent(), b.verbose("Determined parent element for creating context", g)) : x.context ? (g = e(x.context), b.verbose("Using selector for tab context", x.context, g)) : g = e("body"), x.childrenOnly ? (p = g.children(S.tabs), b.debug("Searching tab context children for tabs", g, p)) : (p = g.find(S.tabs), b.debug("Searching tab context for tabs", g, p))
                 },
                 fix: {
                     callbacks: function () {
                         e.isPlainObject(o) && (o.onTabLoad || o.onTabInit) && (o.onTabLoad && (o.onLoad = o.onTabLoad, delete o.onTabLoad, b.error(k.legacyLoad, o.onLoad)), o.onTabInit && (o.onFirstLoad = o.onTabInit, delete o.onTabInit, b.error(k.legacyInit, o.onFirstLoad)), x = e.extend(!0, {}, e.fn.tab.settings, o))
                     }
                 },
                 initializeHistory: function () {
                     if (b.debug("Initializing page state"), e.address === i) return b.error(k.state), !1;
                     if ("state" == x.historyType) {
                         if (b.debug("Using HTML5 to manage state"), !1 === x.path) return b.error(k.path), !1;
                         e.address.history(!0).state(x.path)
                     }
                     e.address.bind("change", b.event.history.change)
                 },
                 event: {
                     click: function (t) {
                         var n = e(this).data(w.tab);
                         n !== i ? (x.history ? (b.verbose("Updating page state", t), e.address.value(n)) : (b.verbose("Changing tab", t), b.changeTab(n)), t.preventDefault()) : b.debug("No tab specified")
                     },
                     history: {
                         change: function (t) {
                             var n = t.pathNames.join("/") || b.get.initialPath(),
                                 o = x.templates.determineTitle(n) || !1;
                             b.performance.display(), b.debug("History change event", n, t), y = t, n !== i && b.changeTab(n), o && e.address.title(o)
                         }
                     }
                 },
                 refresh: function () {
                     h && (b.debug("Refreshing tab", h), b.changeTab(h))
                 },
                 cache: {
                     read: function (e) {
                         return e !== i && P[e]
                     },
                     add: function (e, t) {
                         e = e || h, b.debug("Adding cached content for", e), P[e] = t
                     },
                     remove: function (e) {
                         e = e || h, b.debug("Removing cached content for", e), delete P[e]
                     }
                 },
                 set: {
                     auto: function () {
                         var t = "string" == typeof x.path ? x.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";
                         b.verbose("Setting up automatic tab retrieval from server", t), e.isPlainObject(x.apiSettings) ? x.apiSettings.url = t : x.apiSettings = {
                             url: t
                         }
                     },
                     loading: function (e) {
                         var t = b.get.tabElement(e);
                         t.hasClass(C.loading) || (b.verbose("Setting loading state for", t), t.addClass(C.loading).siblings(p).removeClass(C.active + " " + C.loading), t.length > 0 && x.onRequest.call(t[0], e))
                     },
                     state: function (t) {
                         e.address.value(t)
                     }
                 },
                 changeTab: function (n) {
                     var i = t.history && t.history.pushState && x.ignoreFirstLoad && E,
                         o = x.auto || e.isPlainObject(x.apiSettings),
                         a = o && !i ? b.utilities.pathToArray(n) : b.get.defaultPathArray(n);
                     n = b.utilities.arrayToPath(a), e.each(a, function (t, r) {
                         var s, l, c, u, d = a.slice(0, t + 1),
                             f = b.utilities.arrayToPath(d),
                             m = b.is.tab(f),
                             p = t + 1 == a.length,
                             S = b.get.tabElement(f);
                         if (b.verbose("Looking for tab", r), m) {
                             if (b.verbose("Tab was found", r), h = f, v = b.utilities.filterArray(a, d), p ? u = !0 : (l = a.slice(0, t + 2), c = b.utilities.arrayToPath(l), (u = !b.is.tab(c)) && b.verbose("Tab parameters found", l)), u && o) return i ? (b.debug("Ignoring remote content on first tab load", f), E = !1, b.cache.add(n, S.html()), b.activate.all(f), x.onFirstLoad.call(S[0], f, v, y), x.onLoad.call(S[0], f, v, y)) : (b.activate.navigation(f), b.fetch.content(f, n)), !1;
                             b.debug("Opened local tab", f), b.activate.all(f), b.cache.read(f) || (b.cache.add(f, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(S[0], f, v, y)), x.onLoad.call(S[0], f, v, y)
                         } else {
                             if (-1 != n.search("/") || "" === n) return b.error(k.missingTab, R, g, f), !1;
                             if (f = (s = e("#" + n + ', a[name="' + n + '"]')).closest("[data-tab]").data(w.tab), S = b.get.tabElement(f), s && s.length > 0 && f) return b.debug("Anchor link used, opening parent tab", S, s), S.hasClass(C.active) || setTimeout(function () {
                                 b.scrollTo(s)
                             }, 0), b.activate.all(f), b.cache.read(f) || (b.cache.add(f, !0), b.debug("First time tab loaded calling tab init"), x.onFirstLoad.call(S[0], f, v, y)), x.onLoad.call(S[0], f, v, y), !1
                         }
                     })
                 },
                 scrollTo: function (t) {
                     var i = !!(t && t.length > 0) && t.offset().top;
                     !1 !== i && (b.debug("Forcing scroll to an in-page link in a hidden tab", i, t), e(n).scrollTop(i))
                 },
                 update: {
                     content: function (t, n, o) {
                         var a = b.get.tabElement(t),
                             r = a[0];
                         o = o !== i ? o : x.evaluateScripts, "string" == typeof x.cacheType && "dom" == x.cacheType.toLowerCase() && "string" != typeof n ? a.empty().append(e(n).clone(!0)) : o ? (b.debug("Updating HTML and evaluating inline scripts", t, n), a.html(n)) : (b.debug("Updating HTML", t, n), r.innerHTML = n)
                     }
                 },
                 fetch: {
                     content: function (t, n) {
                         var o, a, r = b.get.tabElement(t),
                             s = {
                                 dataType: "html",
                                 encodeParameters: !1,
                                 on: "now",
                                 cache: x.alwaysRefresh,
                                 headers: {
                                     "X-Remote": !0
                                 },
                                 onSuccess: function (e) {
                                     "response" == x.cacheType && b.cache.add(n, e), b.update.content(t, e), t == h ? (b.debug("Content loaded", t), b.activate.tab(t)) : b.debug("Content loaded in background", t), x.onFirstLoad.call(r[0], t, v, y), x.onLoad.call(r[0], t, v, y), x.loadOnce ? b.cache.add(n, !0) : "string" == typeof x.cacheType && "dom" == x.cacheType.toLowerCase() && r.children().length > 0 ? setTimeout(function () {
                                         var e = r.children().clone(!0);
                                         e = e.not("script"), b.cache.add(n, e)
                                     }, 0) : b.cache.add(n, r.html())
                                 },
                                 urlData: {
                                     tab: n
                                 }
                             },
                             l = r.api("get request") || !1,
                             c = l && "pending" === l.state();
                         n = n || t, a = b.cache.read(n), x.cache && a ? (b.activate.tab(t), b.debug("Adding cached content", n), x.loadOnce || ("once" == x.evaluateScripts ? b.update.content(t, a, !1) : b.update.content(t, a)), x.onLoad.call(r[0], t, v, y)) : c ? (b.set.loading(t), b.debug("Content is already loading", n)) : e.api !== i ? (o = e.extend(!0, {}, x.apiSettings, s), b.debug("Retrieving remote content", n, o), b.set.loading(t), r.api(o)) : b.error(k.api)
                     }
                 },
                 activate: {
                     all: function (e) {
                         b.activate.tab(e), b.activate.navigation(e)
                     },
                     tab: function (e) {
                         var t = b.get.tabElement(e),
                             n = "siblings" == x.deactivate ? t.siblings(p) : p.not(t),
                             i = t.hasClass(C.active);
                         b.verbose("Showing tab content for", t), i || (t.addClass(C.active), n.removeClass(C.active + " " + C.loading), t.length > 0 && x.onVisible.call(t[0], e))
                     },
                     navigation: function (e) {
                         var t = b.get.navElement(e),
                             n = "siblings" == x.deactivate ? t.siblings(r) : r.not(t),
                             i = t.hasClass(C.active);
                         b.verbose("Activating tab navigation for", t, e), i || (t.addClass(C.active), n.removeClass(C.active + " " + C.loading))
                     }
                 },
                 deactivate: {
                     all: function () {
                         b.deactivate.navigation(), b.deactivate.tabs()
                     },
                     navigation: function () {
                         r.removeClass(C.active)
                     },
                     tabs: function () {
                         p.removeClass(C.active + " " + C.loading)
                     }
                 },
                 is: {
                     tab: function (e) {
                         return e !== i && b.get.tabElement(e).length > 0
                     }
                 },
                 get: {
                     initialPath: function () {
                         return r.eq(0).data(w.tab) || p.eq(0).data(w.tab)
                     },
                     path: function () {
                         return e.address.value()
                     },
                     defaultPathArray: function (e) {
                         return b.utilities.pathToArray(b.get.defaultPath(e))
                     },
                     defaultPath: function (e) {
                         var t = r.filter("[data-" + w.tab + '^="' + e + '/"]').eq(0).data(w.tab) || !1;
                         if (t) {
                             if (b.debug("Found default tab", t), F < x.maxDepth) return F++, b.get.defaultPath(t);
                             b.error(k.recursion)
                         } else b.debug("No default tabs found for", e, p);
                         return F = 0, e
                     },
                     navElement: function (e) {
                         return e = e || h, r.filter("[data-" + w.tab + '="' + e + '"]')
                     },
                     tabElement: function (e) {
                         var t, n, i, o;
                         return e = e || h, i = b.utilities.pathToArray(e), o = b.utilities.last(i), t = p.filter("[data-" + w.tab + '="' + e + '"]'), n = p.filter("[data-" + w.tab + '="' + o + '"]'), t.length > 0 ? t : n
                     },
                     tab: function () {
                         return h
                     }
                 },
                 utilities: {
                     filterArray: function (t, n) {
                         return e.grep(t, function (t) {
                             return -1 == e.inArray(t, n)
                         })
                     },
                     last: function (t) {
                         return !!e.isArray(t) && t[t.length - 1]
                     },
                     pathToArray: function (e) {
                         return e === i && (e = h), "string" == typeof e ? e.split("/") : [e]
                     },
                     arrayToPath: function (t) {
                         return !!e.isArray(t) && t.join("/")
                     }
                 },
                 setting: function (t, n) {
                     if (b.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, x, t);
                     else {
                         if (n === i) return x[t];
                         e.isPlainObject(x[t]) ? e.extend(!0, x[t], n) : x[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, b, t);
                     else {
                         if (n === i) return b[t];
                         b[t] = n
                     }
                 },
                 debug: function () {
                     !x.silent && x.debug && (x.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), b.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !x.silent && x.verbose && x.debug && (x.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), b.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     x.silent || (b.error = Function.prototype.bind.call(console.error, console, x.name + ":"), b.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         x.performance && (n = (t = (new Date).getTime()) - (l || t), l = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: O,
                             "Execution Time": n
                         })), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 500)
                     },
                     display: function () {
                         var t = x.name + ":",
                             n = 0;
                         l = !1, clearTimeout(b.performance.timer), e.each(c, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function (t, n, o) {
                     var r, s, l, c = D;
                     return n = n || f, o = O || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (b.error(k.method, t), !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s
                 }
             }, d ? (D === i && b.initialize(), b.invoke(u)) : (D !== i && D.invoke("destroy"), b.initialize())
         }), a !== i ? a : this
     }, e.tab = function () {
         e(t).tab.apply(this, arguments)
     }, e.fn.tab.settings = {
         name: "Tab",
         namespace: "tab",
         silent: !1,
         debug: !1,
         verbose: !1,
         performance: !0,
         auto: !1,
         history: !1,
         historyType: "hash",
         path: !1,
         context: !1,
         childrenOnly: !1,
         maxDepth: 25,
         deactivate: "siblings",
         alwaysRefresh: !1,
         cache: !0,
         loadOnce: !1,
         cacheType: "response",
         ignoreFirstLoad: !1,
         apiSettings: !1,
         evaluateScripts: "once",
         onFirstLoad: function (e, t, n) {},
         onLoad: function (e, t, n) {},
         onVisible: function (e, t, n) {},
         onRequest: function (e, t, n) {},
         templates: {
             determineTitle: function (e) {}
         },
         error: {
             api: "You attempted to load content without API module",
             method: "The method you called is not defined",
             missingTab: "Activated tab cannot be found. Tabs are case-sensitive.",
             noContent: "The tab you specified is missing a content url.",
             path: "History enabled, but no path was specified",
             recursion: "Max recursive depth reached",
             legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",
             legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",
             state: "History requires Asual's Address library <https://github.com/asual/jquery-address>"
         },
         metadata: {
             tab: "tab",
             loaded: "loaded",
             promise: "promise"
         },
         className: {
             loading: "loading",
             active: "active"
         },
         selector: {
             tabs: ".ui.tab",
             ui: ".ui"
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.transition = function () {
         var o, a = e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             l = [],
             c = arguments,
             u = c[0],
             d = [].slice.call(arguments, 1),
             f = "string" == typeof u;
         t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;
         return a.each(function (t) {
             var m, g, p, h, v, b, y, x, C, w = e(this),
                 S = this;
             (C = {
                 initialize: function () {
                     m = C.get.settings.apply(S, c), h = m.className, p = m.error, v = m.metadata, x = "." + m.namespace, y = "module-" + m.namespace, g = w.data(y) || C, b = C.get.animationEndEvent(), f && (f = C.invoke(u)), !1 === f && (C.verbose("Converted arguments into settings object", m), m.interval ? C.delay(m.animate) : C.animate(), C.instantiate())
                 },
                 instantiate: function () {
                     C.verbose("Storing instance of module", C), g = C, w.data(y, g)
                 },
                 destroy: function () {
                     C.verbose("Destroying previous module for", S), w.removeData(y)
                 },
                 refresh: function () {
                     C.verbose("Refreshing display type on next animation"), delete C.displayType
                 },
                 forceRepaint: function () {
                     C.verbose("Forcing element repaint");
                     var e = w.parent(),
                         t = w.next();
                     0 === t.length ? w.detach().appendTo(e) : w.detach().insertBefore(t)
                 },
                 repaint: function () {
                     C.verbose("Repainting element");
                     S.offsetWidth
                 },
                 delay: function (e) {
                     var n, o = C.get.animationDirection();
                     o || (o = C.can.transition() ? C.get.direction() : "static"), e = e !== i ? e : m.interval, n = "auto" == m.reverse && o == h.outward || 1 == m.reverse ? (a.length - t) * m.interval : t * m.interval, C.debug("Delaying animation by", n), setTimeout(C.animate, n)
                 },
                 animate: function (e) {
                     if (m = e || m, !C.is.supported()) return C.error(p.support), !1;
                     if (C.debug("Preparing animation", m.animation), C.is.animating()) {
                         if (m.queue) return !m.allowRepeats && C.has.direction() && C.is.occurring() && !0 !== C.queuing ? C.debug("Animation is currently occurring, preventing queueing same animation", m.animation) : C.queue(m.animation), !1;
                         if (!m.allowRepeats && C.is.occurring()) return C.debug("Animation is already occurring, will not execute repeated animation", m.animation), !1;
                         C.debug("New animation started, completing previous early", m.animation), g.complete()
                     }
                     C.can.animate() ? C.set.animating(m.animation) : C.error(p.noAnimation, m.animation, S)
                 },
                 reset: function () {
                     C.debug("Resetting animation to beginning conditions"), C.remove.animationCallbacks(), C.restore.conditions(), C.remove.animating()
                 },
                 queue: function (e) {
                     C.debug("Queueing animation of", e), C.queuing = !0, w.one(b + ".queue" + x, function () {
                         C.queuing = !1, C.repaint(), C.animate.apply(this, m)
                     })
                 },
                 complete: function (e) {
                     C.debug("Animation complete", m.animation), C.remove.completeCallback(), C.remove.failSafe(), C.is.looping() || (C.is.outward() ? (C.verbose("Animation is outward, hiding element"), C.restore.conditions(), C.hide()) : C.is.inward() ? (C.verbose("Animation is outward, showing element"), C.restore.conditions(), C.show()) : (C.verbose("Static animation completed"), C.restore.conditions(), m.onComplete.call(S)))
                 },
                 force: {
                     visible: function () {
                         var e = w.attr("style"),
                             t = C.get.userStyle(),
                             n = C.get.displayType(),
                             o = t + "display: " + n + " !important;",
                             a = w.css("display"),
                             r = e === i || "" === e;
                         a !== n ? (C.verbose("Overriding default display to show element", n), w.attr("style", o)) : r && w.removeAttr("style")
                     },
                     hidden: function () {
                         var e = w.attr("style"),
                             t = w.css("display"),
                             n = e === i || "" === e;
                         "none" === t || C.is.hidden() ? n && w.removeAttr("style") : (C.verbose("Overriding default display to hide element"), w.css("display", "none"))
                     }
                 },
                 has: {
                     direction: function (t) {
                         var n = !1;
                         return "string" == typeof (t = t || m.animation) && (t = t.split(" "), e.each(t, function (e, t) {
                             t !== h.inward && t !== h.outward || (n = !0)
                         })), n
                     },
                     inlineDisplay: function () {
                         var t = w.attr("style") || "";
                         return e.isArray(t.match(/display.*?;/, ""))
                     }
                 },
                 set: {
                     animating: function (e) {
                         var t;
                         C.remove.completeCallback(), e = e || m.animation, t = C.get.animationClass(e), C.save.animation(t), C.force.visible(), C.remove.hidden(), C.remove.direction(), C.start.animation(t)
                     },
                     duration: function (e, t) {
                         ((t = "number" == typeof (t = t || m.duration) ? t + "ms" : t) || 0 === t) && (C.verbose("Setting animation duration", t), w.css({
                             "animation-duration": t
                         }))
                     },
                     direction: function (e) {
                         (e = e || C.get.direction()) == h.inward ? C.set.inward() : C.set.outward()
                     },
                     looping: function () {
                         C.debug("Transition set to loop"), w.addClass(h.looping)
                     },
                     hidden: function () {
                         w.addClass(h.transition).addClass(h.hidden)
                     },
                     inward: function () {
                         C.debug("Setting direction to inward"), w.removeClass(h.outward).addClass(h.inward)
                     },
                     outward: function () {
                         C.debug("Setting direction to outward"), w.removeClass(h.inward).addClass(h.outward)
                     },
                     visible: function () {
                         w.addClass(h.transition).addClass(h.visible)
                     }
                 },
                 start: {
                     animation: function (e) {
                         e = e || C.get.animationClass(), C.debug("Starting tween", e), w.addClass(e).one(b + ".complete" + x, C.complete), m.useFailSafe && C.add.failSafe(), C.set.duration(m.duration), m.onStart.call(S)
                     }
                 },
                 save: {
                     animation: function (e) {
                         C.cache || (C.cache = {}), C.cache.animation = e
                     },
                     displayType: function (e) {
                         "none" !== e && w.data(v.displayType, e)
                     },
                     transitionExists: function (t, n) {
                         e.fn.transition.exists[t] = n, C.verbose("Saving existence of transition", t, n)
                     }
                 },
                 restore: {
                     conditions: function () {
                         var e = C.get.currentAnimation();
                         e && (w.removeClass(e), C.verbose("Removing animation class", C.cache)), C.remove.duration()
                     }
                 },
                 add: {
                     failSafe: function () {
                         var e = C.get.duration();
                         C.timer = setTimeout(function () {
                             w.triggerHandler(b)
                         }, e + m.failSafeDelay), C.verbose("Adding fail safe timer", C.timer)
                     }
                 },
                 remove: {
                     animating: function () {
                         w.removeClass(h.animating)
                     },
                     animationCallbacks: function () {
                         C.remove.queueCallback(), C.remove.completeCallback()
                     },
                     queueCallback: function () {
                         w.off(".queue" + x)
                     },
                     completeCallback: function () {
                         w.off(".complete" + x)
                     },
                     display: function () {
                         w.css("display", "")
                     },
                     direction: function () {
                         w.removeClass(h.inward).removeClass(h.outward)
                     },
                     duration: function () {
                         w.css("animation-duration", "")
                     },
                     failSafe: function () {
                         C.verbose("Removing fail safe timer", C.timer), C.timer && clearTimeout(C.timer)
                     },
                     hidden: function () {
                         w.removeClass(h.hidden)
                     },
                     visible: function () {
                         w.removeClass(h.visible)
                     },
                     looping: function () {
                         C.debug("Transitions are no longer looping"), C.is.looping() && (C.reset(), w.removeClass(h.looping))
                     },
                     transition: function () {
                         w.removeClass(h.visible).removeClass(h.hidden)
                     }
                 },
                 get: {
                     settings: function (t, n, i) {
                         return "object" == typeof t ? e.extend(!0, {}, e.fn.transition.settings, t) : "function" == typeof i ? e.extend({}, e.fn.transition.settings, {
                             animation: t,
                             onComplete: i,
                             duration: n
                         }) : "string" == typeof n || "number" == typeof n ? e.extend({}, e.fn.transition.settings, {
                             animation: t,
                             duration: n
                         }) : "object" == typeof n ? e.extend({}, e.fn.transition.settings, n, {
                             animation: t
                         }) : "function" == typeof n ? e.extend({}, e.fn.transition.settings, {
                             animation: t,
                             onComplete: n
                         }) : e.extend({}, e.fn.transition.settings, {
                             animation: t
                         })
                     },
                     animationClass: function (e) {
                         var t = e || m.animation,
                             n = C.can.transition() && !C.has.direction() ? C.get.direction() + " " : "";
                         return h.animating + " " + h.transition + " " + n + t
                     },
                     currentAnimation: function () {
                         return !(!C.cache || C.cache.animation === i) && C.cache.animation
                     },
                     currentDirection: function () {
                         return C.is.inward() ? h.inward : h.outward
                     },
                     direction: function () {
                         return C.is.hidden() || !C.is.visible() ? h.inward : h.outward
                     },
                     animationDirection: function (t) {
                         var n;
                         return "string" == typeof (t = t || m.animation) && (t = t.split(" "), e.each(t, function (e, t) {
                             t === h.inward ? n = h.inward : t === h.outward && (n = h.outward)
                         })), n || !1
                     },
                     duration: function (e) {
                         return !1 === (e = e || m.duration) && (e = w.css("animation-duration") || 0), "string" == typeof e ? e.indexOf("ms") > -1 ? parseFloat(e) : 1e3 * parseFloat(e) : e
                     },
                     displayType: function (e) {
                         return e = e === i || e, m.displayType ? m.displayType : (e && w.data(v.displayType) === i && C.can.transition(!0), w.data(v.displayType))
                     },
                     userStyle: function (e) {
                         return (e = e || w.attr("style") || "").replace(/display.*?;/, "")
                     },
                     transitionExists: function (t) {
                         return e.fn.transition.exists[t]
                     },
                     animationStartEvent: function () {
                         var e, t = n.createElement("div"),
                             o = {
                                 animation: "animationstart",
                                 OAnimation: "oAnimationStart",
                                 MozAnimation: "mozAnimationStart",
                                 WebkitAnimation: "webkitAnimationStart"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e];
                         return !1
                     },
                     animationEndEvent: function () {
                         var e, t = n.createElement("div"),
                             o = {
                                 animation: "animationend",
                                 OAnimation: "oAnimationEnd",
                                 MozAnimation: "mozAnimationEnd",
                                 WebkitAnimation: "webkitAnimationEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e];
                         return !1
                     }
                 },
                 can: {
                     transition: function (t) {
                         var n, o, a, r, s, l, c = m.animation,
                             u = C.get.transitionExists(c),
                             d = C.get.displayType(!1);
                         if (u === i || t) {
                             if (C.verbose("Determining whether animation exists"), n = w.attr("class"), o = w.prop("tagName"), r = (a = e("<" + o + " />").addClass(n).insertAfter(w)).addClass(c).removeClass(h.inward).removeClass(h.outward).addClass(h.animating).addClass(h.transition).css("animationName"), s = a.addClass(h.inward).css("animationName"), d || (d = a.attr("class", n).removeAttr("style").removeClass(h.hidden).removeClass(h.visible).show().css("display"), C.verbose("Determining final display state", d), C.save.displayType(d)), a.remove(), r != s) C.debug("Direction exists for animation", c), l = !0;
                             else {
                                 if ("none" == r || !r) return void C.debug("No animation defined in css", c);
                                 C.debug("Static animation found", c, d), l = !1
                             }
                             C.save.transitionExists(c, l)
                         }
                         return u !== i ? u : l
                     },
                     animate: function () {
                         return C.can.transition() !== i
                     }
                 },
                 is: {
                     animating: function () {
                         return w.hasClass(h.animating)
                     },
                     inward: function () {
                         return w.hasClass(h.inward)
                     },
                     outward: function () {
                         return w.hasClass(h.outward)
                     },
                     looping: function () {
                         return w.hasClass(h.looping)
                     },
                     occurring: function (e) {
                         return e = "." + (e = e || m.animation).replace(" ", "."), w.filter(e).length > 0
                     },
                     visible: function () {
                         return w.is(":visible")
                     },
                     hidden: function () {
                         return "hidden" === w.css("visibility")
                     },
                     supported: function () {
                         return !1 !== b
                     }
                 },
                 hide: function () {
                     C.verbose("Hiding element"), C.is.animating() && C.reset(), S.blur(), C.remove.display(), C.remove.visible(), C.set.hidden(), C.force.hidden(), m.onHide.call(S), m.onComplete.call(S)
                 },
                 show: function (e) {
                     C.verbose("Showing element", e), C.remove.hidden(), C.set.visible(), C.force.visible(), m.onShow.call(S), m.onComplete.call(S)
                 },
                 toggle: function () {
                     C.is.visible() ? C.hide() : C.show()
                 },
                 stop: function () {
                     C.debug("Stopping current animation"), w.triggerHandler(b)
                 },
                 stopAll: function () {
                     C.debug("Stopping all animation"), C.remove.queueCallback(), w.triggerHandler(b)
                 },
                 clear: {
                     queue: function () {
                         C.debug("Clearing animation queue"), C.remove.queueCallback()
                     }
                 },
                 enable: function () {
                     C.verbose("Starting animation"), w.removeClass(h.disabled)
                 },
                 disable: function () {
                     C.debug("Stopping animation"), w.addClass(h.disabled)
                 },
                 setting: function (t, n) {
                     if (C.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         e.isPlainObject(m[t]) ? e.extend(!0, m[t], n) : m[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, C, t);
                     else {
                         if (n === i) return C[t];
                         C[t] = n
                     }
                 },
                 debug: function () {
                     !m.silent && m.debug && (m.performance ? C.performance.log(arguments) : (C.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), C.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !m.silent && m.verbose && m.debug && (m.performance ? C.performance.log(arguments) : (C.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), C.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     m.silent || (C.error = Function.prototype.bind.call(console.error, console, m.name + ":"), C.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         m.performance && (n = (t = (new Date).getTime()) - (s || t), s = t, l.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: S,
                             "Execution Time": n
                         })), clearTimeout(C.performance.timer), C.performance.timer = setTimeout(C.performance.display, 500)
                     },
                     display: function () {
                         var t = m.name + ":",
                             n = 0;
                         s = !1, clearTimeout(C.performance.timer), e.each(l, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), l = []
                     }
                 },
                 invoke: function (t, n, a) {
                     var r, s, l, c = g;
                     return n = n || d, a = S || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i && (s = c[o], !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s !== i && s
                 }
             }).initialize()
         }), o !== i ? o : this
     }, e.fn.transition.exists = {}, e.fn.transition.settings = {
         name: "Transition",
         silent: !1,
         debug: !1,
         verbose: !1,
         performance: !0,
         namespace: "transition",
         interval: 0,
         reverse: "auto",
         onStart: function () {},
         onComplete: function () {},
         onShow: function () {},
         onHide: function () {},
         useFailSafe: !0,
         failSafeDelay: 100,
         allowRepeats: !1,
         displayType: !1,
         animation: "fade",
         duration: !1,
         queue: !0,
         metadata: {
             displayType: "display"
         },
         className: {
             animating: "animating",
             disabled: "disabled",
             hidden: "hidden",
             inward: "in",
             loading: "loading",
             looping: "looping",
             outward: "out",
             transition: "transition",
             visible: "visible"
         },
         error: {
             noAnimation: "Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",
             repeated: "That animation is already occurring, cancelling repeated animation",
             method: "The method you called is not defined",
             support: "This browser does not support CSS animations"
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
     e.api = e.fn.api = function (n) {
         var o, a = e.isFunction(this) ? e(t) : e(this),
             r = a.selector || "",
             s = (new Date).getTime(),
             l = [],
             c = arguments[0],
             u = "string" == typeof c,
             d = [].slice.call(arguments, 1);
         return a.each(function () {
             var a, f, m, g, p, h, v = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.api.settings, n) : e.extend({}, e.fn.api.settings),
                 b = v.namespace,
                 y = v.metadata,
                 x = v.selector,
                 C = v.error,
                 w = v.className,
                 S = "." + b,
                 k = "module-" + b,
                 T = e(this),
                 A = T.closest(x.form),
                 R = v.stateContext ? e(v.stateContext) : T,
                 P = this,
                 E = R[0],
                 F = T.data(k);
             h = {
                 initialize: function () {
                     u || h.bind.events(), h.instantiate()
                 },
                 instantiate: function () {
                     h.verbose("Storing instance of module", h), F = h, T.data(k, F)
                 },
                 destroy: function () {
                     h.verbose("Destroying previous module for", P), T.removeData(k).off(S)
                 },
                 bind: {
                     events: function () {
                         var e = h.get.event();
                         e ? (h.verbose("Attaching API events to element", e), T.on(e + S, h.event.trigger)) : "now" == v.on && (h.debug("Querying API endpoint immediately"), h.query())
                     }
                 },
                 decode: {
                     json: function (e) {
                         if (e !== i && "string" == typeof e) try {
                             e = JSON.parse(e)
                         } catch (e) {}
                         return e
                     }
                 },
                 read: {
                     cachedResponse: function (e) {
                         var n;
                         if (t.Storage !== i) return n = sessionStorage.getItem(e), h.debug("Using cached response", e, n), n = h.decode.json(n);
                         h.error(C.noStorage)
                     }
                 },
                 write: {
                     cachedResponse: function (n, o) {
                         o && "" === o ? h.debug("Response empty, not caching", o) : t.Storage !== i ? (e.isPlainObject(o) && (o = JSON.stringify(o)), sessionStorage.setItem(n, o), h.verbose("Storing cached response for url", n, o)) : h.error(C.noStorage)
                     }
                 },
                 query: function () {
                     if (h.is.disabled()) h.debug("Element is disabled API request aborted");
                     else {
                         if (h.is.loading()) {
                             if (!v.interruptRequests) return void h.debug("Cancelling request, previous request is still pending");
                             h.debug("Interrupting previous request"), h.abort()
                         }
                         if (v.defaultData && e.extend(!0, v.urlData, h.get.defaultData()), v.serializeForm && (v.data = h.add.formData(v.data)), !1 === (f = h.get.settings())) return h.cancelled = !0, void h.error(C.beforeSend);
                         if (h.cancelled = !1, (m = h.get.templatedURL()) || h.is.mocked()) {
                             if ((m = h.add.urlData(m)) || h.is.mocked()) {
                                 if (f.url = v.base + m, a = e.extend(!0, {}, v, {
                                         type: v.method || v.type,
                                         data: g,
                                         url: v.base + m,
                                         beforeSend: v.beforeXHR,
                                         success: function () {},
                                         failure: function () {},
                                         complete: function () {}
                                     }), h.debug("Querying URL", a.url), h.verbose("Using AJAX settings", a), "local" === v.cache && h.read.cachedResponse(m)) return h.debug("Response returned from local cache"), h.request = h.create.request(), void h.request.resolveWith(E, [h.read.cachedResponse(m)]);
                                 v.throttle ? v.throttleFirstRequest || h.timer ? (h.debug("Throttling request", v.throttle), clearTimeout(h.timer), h.timer = setTimeout(function () {
                                     h.timer && delete h.timer, h.debug("Sending throttled request", g, a.method), h.send.request()
                                 }, v.throttle)) : (h.debug("Sending request", g, a.method), h.send.request(), h.timer = setTimeout(function () {}, v.throttle)) : (h.debug("Sending request", g, a.method), h.send.request())
                             }
                         } else h.error(C.missingURL)
                     }
                 },
                 should: {
                     removeError: function () {
                         return !0 === v.hideError || "auto" === v.hideError && !h.is.form()
                     }
                 },
                 is: {
                     disabled: function () {
                         return T.filter(x.disabled).length > 0
                     },
                     expectingJSON: function () {
                         return "json" === v.dataType || "jsonp" === v.dataType
                     },
                     form: function () {
                         return T.is("form") || R.is("form")
                     },
                     mocked: function () {
                         return v.mockResponse || v.mockResponseAsync || v.response || v.responseAsync
                     },
                     input: function () {
                         return T.is("input")
                     },
                     loading: function () {
                         return !!h.request && "pending" == h.request.state()
                     },
                     abortedRequest: function (e) {
                         return e && e.readyState !== i && 0 === e.readyState ? (h.verbose("XHR request determined to be aborted"), !0) : (h.verbose("XHR request was not aborted"), !1)
                     },
                     validResponse: function (t) {
                         return h.is.expectingJSON() && e.isFunction(v.successTest) ? (h.debug("Checking JSON returned success", v.successTest, t), v.successTest(t) ? (h.debug("Response passed success test", t), !0) : (h.debug("Response failed success test", t), !1)) : (h.verbose("Response is not JSON, skipping validation", v.successTest, t), !0)
                     }
                 },
                 was: {
                     cancelled: function () {
                         return h.cancelled || !1
                     },
                     succesful: function () {
                         return h.request && "resolved" == h.request.state()
                     },
                     failure: function () {
                         return h.request && "rejected" == h.request.state()
                     },
                     complete: function () {
                         return h.request && ("resolved" == h.request.state() || "rejected" == h.request.state())
                     }
                 },
                 add: {
                     urlData: function (t, n) {
                         var o, a;
                         return t && (o = t.match(v.regExp.required), a = t.match(v.regExp.optional), n = n || v.urlData, o && (h.debug("Looking for required URL variables", o), e.each(o, function (o, a) {
                             var r = -1 !== a.indexOf("$") ? a.substr(2, a.length - 3) : a.substr(1, a.length - 2),
                                 s = e.isPlainObject(n) && n[r] !== i ? n[r] : T.data(r) !== i ? T.data(r) : R.data(r) !== i ? R.data(r) : n[r];
                             if (s === i) return h.error(C.requiredParameter, r, t), t = !1, !1;
                             h.verbose("Found required variable", r, s), s = v.encodeParameters ? h.get.urlEncodedValue(s) : s, t = t.replace(a, s)
                         })), a && (h.debug("Looking for optional URL variables", o), e.each(a, function (o, a) {
                             var r = -1 !== a.indexOf("$") ? a.substr(3, a.length - 4) : a.substr(2, a.length - 3),
                                 s = e.isPlainObject(n) && n[r] !== i ? n[r] : T.data(r) !== i ? T.data(r) : R.data(r) !== i ? R.data(r) : n[r];
                             s !== i ? (h.verbose("Optional variable Found", r, s), t = t.replace(a, s)) : (h.verbose("Optional variable not found", r), t = -1 !== t.indexOf("/" + a) ? t.replace("/" + a, "") : t.replace(a, ""))
                         }))), t
                     },
                     formData: function (t) {
                         var n = e.fn.serializeObject !== i,
                             o = n ? A.serializeObject() : A.serialize();
                         return t = t || v.data, e.isPlainObject(t) ? n ? (h.debug("Extending existing data with form data", t, o), t = e.extend(!0, {}, t, o)) : (h.error(C.missingSerialize), h.debug("Cant extend data. Replacing data with form data", t, o), t = o) : (h.debug("Adding form data", o), t = o), t
                     }
                 },
                 send: {
                     request: function () {
                         h.set.loading(), h.request = h.create.request(), h.is.mocked() ? h.mockedXHR = h.create.mockedXHR() : h.xhr = h.create.xhr(), v.onRequest.call(E, h.request, h.xhr)
                     }
                 },
                 event: {
                     trigger: function (e) {
                         h.query(), "submit" != e.type && "click" != e.type || e.preventDefault()
                     },
                     xhr: {
                         always: function () {},
                         done: function (t, n, i) {
                             var o = this,
                                 a = (new Date).getTime() - p,
                                 r = v.loadingDuration - a,
                                 s = !!e.isFunction(v.onResponse) && (h.is.expectingJSON() ? v.onResponse.call(o, e.extend(!0, {}, t)) : v.onResponse.call(o, t));
                             r = r > 0 ? r : 0, s && (h.debug("Modified API response in onResponse callback", v.onResponse, s, t), t = s), r > 0 && h.debug("Response completed early delaying state change by", r), setTimeout(function () {
                                 h.is.validResponse(t) ? h.request.resolveWith(o, [t, i]) : h.request.rejectWith(o, [i, "invalid"])
                             }, r)
                         },
                         fail: function (e, t, n) {
                             var i = this,
                                 o = (new Date).getTime() - p,
                                 a = v.loadingDuration - o;
                             (a = a > 0 ? a : 0) > 0 && h.debug("Response completed early delaying state change by", a), setTimeout(function () {
                                 h.is.abortedRequest(e) ? h.request.rejectWith(i, [e, "aborted", n]) : h.request.rejectWith(i, [e, "error", t, n])
                             }, a)
                         }
                     },
                     request: {
                         done: function (e, t) {
                             h.debug("Successful API Response", e), "local" === v.cache && m && (h.write.cachedResponse(m, e), h.debug("Saving server response locally", h.cache)), v.onSuccess.call(E, e, T, t)
                         },
                         complete: function (e, t) {
                             var n, i;
                             h.was.succesful() ? (i = e, n = t) : (n = e, i = h.get.responseFromXHR(n)), h.remove.loading(), v.onComplete.call(E, i, T, n)
                         },
                         fail: function (e, t, n) {
                             var o = h.get.responseFromXHR(e),
                                 r = h.get.errorFromRequest(o, t, n);
                             if ("aborted" == t) return h.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)", t, n), v.onAbort.call(E, t, T, e), !0;
                             "invalid" == t ? h.debug("JSON did not pass success test. A server-side error has most likely occurred", o) : "error" == t && e !== i && (h.debug("XHR produced a server error", t, n), 200 != e.status && n !== i && "" !== n && h.error(C.statusMessage + n, a.url), v.onError.call(E, r, T, e)), v.errorDuration && "aborted" !== t && (h.debug("Adding error state"), h.set.error(), h.should.removeError() && setTimeout(h.remove.error, v.errorDuration)), h.debug("API Request failed", r, e), v.onFailure.call(E, o, T, e)
                         }
                     }
                 },
                 create: {
                     request: function () {
                         return e.Deferred().always(h.event.request.complete).done(h.event.request.done).fail(h.event.request.fail)
                     },
                     mockedXHR: function () {
                         var t, n, i, o = v.mockResponse || v.response,
                             a = v.mockResponseAsync || v.responseAsync;
                         return i = e.Deferred().always(h.event.xhr.complete).done(h.event.xhr.done).fail(h.event.xhr.fail), o ? (e.isFunction(o) ? (h.debug("Using specified synchronous callback", o), n = o.call(E, f)) : (h.debug("Using settings specified response", o), n = o), i.resolveWith(E, [n, !1, {
                             responseText: n
                         }])) : e.isFunction(a) && (t = function (e) {
                             h.debug("Async callback returned response", e), e ? i.resolveWith(E, [e, !1, {
                                 responseText: e
                             }]) : i.rejectWith(E, [{
                                 responseText: e
                             }, !1, !1])
                         }, h.debug("Using specified async response callback", a), a.call(E, f, t)), i
                     },
                     xhr: function () {
                         var t;
                         return t = e.ajax(a).always(h.event.xhr.always).done(h.event.xhr.done).fail(h.event.xhr.fail), h.verbose("Created server request", t, a), t
                     }
                 },
                 set: {
                     error: function () {
                         h.verbose("Adding error state to element", R), R.addClass(w.error)
                     },
                     loading: function () {
                         h.verbose("Adding loading state to element", R), R.addClass(w.loading), p = (new Date).getTime()
                     }
                 },
                 remove: {
                     error: function () {
                         h.verbose("Removing error state from element", R), R.removeClass(w.error)
                     },
                     loading: function () {
                         h.verbose("Removing loading state from element", R), R.removeClass(w.loading)
                     }
                 },
                 get: {
                     responseFromXHR: function (t) {
                         return !!e.isPlainObject(t) && (h.is.expectingJSON() ? h.decode.json(t.responseText) : t.responseText)
                     },
                     errorFromRequest: function (t, n, o) {
                         return e.isPlainObject(t) && t.error !== i ? t.error : v.error[n] !== i ? v.error[n] : o
                     },
                     request: function () {
                         return h.request || !1
                     },
                     xhr: function () {
                         return h.xhr || !1
                     },
                     settings: function () {
                         var t;
                         return (t = v.beforeSend.call(E, v)) && (t.success !== i && (h.debug("Legacy success callback detected", t), h.error(C.legacyParameters, t.success), t.onSuccess = t.success), t.failure !== i && (h.debug("Legacy failure callback detected", t), h.error(C.legacyParameters, t.failure), t.onFailure = t.failure), t.complete !== i && (h.debug("Legacy complete callback detected", t), h.error(C.legacyParameters, t.complete), t.onComplete = t.complete)), t === i && h.error(C.noReturnedValue), !1 === t ? t : t !== i ? e.extend(!0, {}, t) : e.extend(!0, {}, v)
                     },
                     urlEncodedValue: function (e) {
                         var n = t.decodeURIComponent(e),
                             i = t.encodeURIComponent(e);
                         return n !== e ? (h.debug("URL value is already encoded, avoiding double encoding", e), e) : (h.verbose("Encoding value using encodeURIComponent", e, i), i)
                     },
                     defaultData: function () {
                         var t = {};
                         return e.isWindow(P) || (h.is.input() ? t.value = T.val() : h.is.form() || (t.text = T.text())), t
                     },
                     event: function () {
                         return e.isWindow(P) || "now" == v.on ? (h.debug("API called without element, no events attached"), !1) : "auto" == v.on ? T.is("input") ? P.oninput !== i ? "input" : P.onpropertychange !== i ? "propertychange" : "keyup" : T.is("form") ? "submit" : "click" : v.on
                     },
                     templatedURL: function (e) {
                         if (e = e || T.data(y.action) || v.action || !1, m = T.data(y.url) || v.url || !1) return h.debug("Using specified url", m), m;
                         if (e) {
                             if (h.debug("Looking up url for action", e, v.api), v.api[e] === i && !h.is.mocked()) return void h.error(C.missingAction, v.action, v.api);
                             m = v.api[e]
                         } else h.is.form() && (m = T.attr("action") || R.attr("action") || !1, h.debug("No url or action specified, defaulting to form action", m));
                         return m
                     }
                 },
                 abort: function () {
                     var e = h.get.xhr();
                     e && "resolved" !== e.state() && (h.debug("Cancelling API request"), e.abort())
                 },
                 reset: function () {
                     h.remove.error(), h.remove.loading()
                 },
                 setting: function (t, n) {
                     if (h.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, v, t);
                     else {
                         if (n === i) return v[t];
                         e.isPlainObject(v[t]) ? e.extend(!0, v[t], n) : v[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, h, t);
                     else {
                         if (n === i) return h[t];
                         h[t] = n
                     }
                 },
                 debug: function () {
                     !v.silent && v.debug && (v.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), h.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !v.silent && v.verbose && v.debug && (v.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), h.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     v.silent || (h.error = Function.prototype.bind.call(console.error, console, v.name + ":"), h.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         v.performance && (n = (t = (new Date).getTime()) - (s || t), s = t, l.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             "Execution Time": n
                         })), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 500)
                     },
                     display: function () {
                         var t = v.name + ":",
                             n = 0;
                         s = !1, clearTimeout(h.performance.timer), e.each(l, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), l = []
                     }
                 },
                 invoke: function (t, n, a) {
                     var r, s, l, c = F;
                     return n = n || d, a = P || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (h.error(C.method, t), !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(a, n) : s !== i && (l = s), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), s
                 }
             }, u ? (F === i && h.initialize(), h.invoke(c)) : (F !== i && F.invoke("destroy"), h.initialize())
         }), o !== i ? o : this
     }, e.api.settings = {
         name: "API",
         namespace: "api",
         debug: !1,
         verbose: !1,
         performance: !0,
         api: {},
         cache: !0,
         interruptRequests: !0,
         on: "auto",
         stateContext: !1,
         loadingDuration: 0,
         hideError: "auto",
         errorDuration: 2e3,
         encodeParameters: !0,
         action: !1,
         url: !1,
         base: "",
         urlData: {},
         defaultData: !0,
         serializeForm: !1,
         throttle: 0,
         throttleFirstRequest: !0,
         method: "get",
         data: {},
         dataType: "json",
         mockResponse: !1,
         mockResponseAsync: !1,
         response: !1,
         responseAsync: !1,
         beforeSend: function (e) {
             return e
         },
         beforeXHR: function (e) {},
         onRequest: function (e, t) {},
         onResponse: !1,
         onSuccess: function (e, t) {},
         onComplete: function (e, t) {},
         onFailure: function (e, t) {},
         onError: function (e, t) {},
         onAbort: function (e, t) {},
         successTest: !1,
         error: {
             beforeSend: "The before send function has aborted the request",
             error: "There was an error with your request",
             exitConditions: "API Request Aborted. Exit conditions met",
             JSONParse: "JSON could not be parsed during error handling",
             legacyParameters: "You are using legacy API success callback names",
             method: "The method you called is not defined",
             missingAction: "API action used but no url was defined",
             missingSerialize: "jquery-serialize-object is required to add form data to an existing data object",
             missingURL: "No URL specified for api event",
             noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.",
             noStorage: "Caching responses locally requires session storage",
             parseError: "There was an error parsing your request",
             requiredParameter: "Missing a required URL parameter: ",
             statusMessage: "Server gave an error: ",
             timeout: "Your request timed out"
         },
         regExp: {
             required: /\{\$*[A-z0-9]+\}/g,
             optional: /\{\/\$*[A-z0-9]+\}/g
         },
         className: {
             loading: "loading",
             error: "error"
         },
         selector: {
             disabled: ".disabled",
             form: "form"
         },
         metadata: {
             action: "action",
             url: "url"
         }
     }
 }(jQuery, window, document),
 function (e, t, n, i) {
     "use strict";
     t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(), e.fn.visibility = function (o) {
         var a, r = e(this),
             s = r.selector || "",
             l = (new Date).getTime(),
             c = [],
             u = arguments[0],
             d = "string" == typeof u,
             f = [].slice.call(arguments, 1),
             m = r.length,
             g = 0;
         return r.each(function () {
             var r, p, h, v, b = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.visibility.settings, o) : e.extend({}, e.fn.visibility.settings),
                 y = b.className,
                 x = b.namespace,
                 C = b.error,
                 w = b.metadata,
                 S = "." + x,
                 k = "module-" + x,
                 T = e(t),
                 A = e(this),
                 R = e(b.context),
                 P = (A.selector, A.data(k)),
                 E = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                     setTimeout(e, 0)
                 },
                 F = this,
                 O = !1;
             v = {
                 initialize: function () {
                     v.debug("Initializing", b), v.setup.cache(), v.should.trackChanges() && ("image" == b.type && v.setup.image(), "fixed" == b.type && v.setup.fixed(), b.observeChanges && v.observeChanges(), v.bind.events()), v.save.position(), v.is.visible() || v.error(C.visible, A), b.initialCheck && v.checkVisibility(), v.instantiate()
                 },
                 instantiate: function () {
                     v.debug("Storing instance", v), A.data(k, v), P = v
                 },
                 destroy: function () {
                     v.verbose("Destroying previous module"), h && h.disconnect(), p && p.disconnect(), T.off("load" + S, v.event.load).off("resize" + S, v.event.resize), R.off("scroll" + S, v.event.scroll).off("scrollchange" + S, v.event.scrollchange), "fixed" == b.type && (v.resetFixed(), v.remove.placeholder()), A.off(S).removeData(k)
                 },
                 observeChanges: function () {
                     "MutationObserver" in t && (p = new MutationObserver(v.event.contextChanged), h = new MutationObserver(v.event.changed), p.observe(n, {
                         childList: !0,
                         subtree: !0
                     }), h.observe(F, {
                         childList: !0,
                         subtree: !0
                     }), v.debug("Setting up mutation observer", h))
                 },
                 bind: {
                     events: function () {
                         v.verbose("Binding visibility events to scroll and resize"), b.refreshOnLoad && T.on("load" + S, v.event.load), T.on("resize" + S, v.event.resize), R.off("scroll" + S).on("scroll" + S, v.event.scroll).on("scrollchange" + S, v.event.scrollchange)
                     }
                 },
                 event: {
                     changed: function (e) {
                         v.verbose("DOM tree modified, updating visibility calculations"), v.timer = setTimeout(function () {
                             v.verbose("DOM tree modified, updating sticky menu"), v.refresh()
                         }, 100)
                     },
                     contextChanged: function (t) {
                         [].forEach.call(t, function (t) {
                             t.removedNodes && [].forEach.call(t.removedNodes, function (t) {
                                 (t == F || e(t).find(F).length > 0) && (v.debug("Element removed from DOM, tearing down events"), v.destroy())
                             })
                         })
                     },
                     resize: function () {
                         v.debug("Window resized"), b.refreshOnResize && E(v.refresh)
                     },
                     load: function () {
                         v.debug("Page finished loading"), E(v.refresh)
                     },
                     scroll: function () {
                         b.throttle ? (clearTimeout(v.timer), v.timer = setTimeout(function () {
                             R.triggerHandler("scrollchange" + S, [R.scrollTop()])
                         }, b.throttle)) : E(function () {
                             R.triggerHandler("scrollchange" + S, [R.scrollTop()])
                         })
                     },
                     scrollchange: function (e, t) {
                         v.checkVisibility(t)
                     }
                 },
                 precache: function (t, i) {
                     t instanceof Array || (t = [t]);
                     for (var o = t.length, a = 0, r = [], s = n.createElement("img"), l = function () {
                             ++a >= t.length && e.isFunction(i) && i()
                         }; o--;)(s = n.createElement("img")).onload = l, s.onerror = l, s.src = t[o], r.push(s)
                 },
                 enableCallbacks: function () {
                     v.debug("Allowing callbacks to occur"), O = !1
                 },
                 disableCallbacks: function () {
                     v.debug("Disabling all callbacks temporarily"), O = !0
                 },
                 should: {
                     trackChanges: function () {
                         return d ? (v.debug("One time query, no need to bind events"), !1) : (v.debug("Callbacks being attached"), !0)
                     }
                 },
                 setup: {
                     cache: function () {
                         v.cache = {
                             occurred: {},
                             screen: {},
                             element: {}
                         }
                     },
                     image: function () {
                         var e = A.data(w.src);
                         e && (v.verbose("Lazy loading image", e), b.once = !0, b.observeChanges = !1, b.onOnScreen = function () {
                             v.debug("Image on screen", F), v.precache(e, function () {
                                 v.set.image(e, function () {
                                     ++g == m && b.onAllLoaded.call(this), b.onLoad.call(this)
                                 })
                             })
                         })
                     },
                     fixed: function () {
                         v.debug("Setting up fixed"), b.once = !1, b.observeChanges = !1, b.initialCheck = !0, b.refreshOnLoad = !0, o.transition || (b.transition = !1), v.create.placeholder(), v.debug("Added placeholder", r), b.onTopPassed = function () {
                             v.debug("Element passed, adding fixed position", A), v.show.placeholder(), v.set.fixed(), b.transition && e.fn.transition !== i && A.transition(b.transition, b.duration)
                         }, b.onTopPassedReverse = function () {
                             v.debug("Element returned to position, removing fixed", A), v.hide.placeholder(), v.remove.fixed()
                         }
                     }
                 },
                 create: {
                     placeholder: function () {
                         v.verbose("Creating fixed position placeholder"), r = A.clone(!1).css("display", "none").addClass(y.placeholder).insertAfter(A)
                     }
                 },
                 show: {
                     placeholder: function () {
                         v.verbose("Showing placeholder"), r.css("display", "block").css("visibility", "hidden")
                     }
                 },
                 hide: {
                     placeholder: function () {
                         v.verbose("Hiding placeholder"), r.css("display", "none").css("visibility", "")
                     }
                 },
                 set: {
                     fixed: function () {
                         v.verbose("Setting element to fixed position"), A.addClass(y.fixed).css({
                             position: "fixed",
                             top: b.offset + "px",
                             left: "auto",
                             zIndex: b.zIndex
                         }), b.onFixed.call(F)
                     },
                     image: function (t, n) {
                         if (A.attr("src", t), b.transition)
                             if (e.fn.transition !== i) {
                                 if (A.hasClass(y.visible)) return void v.debug("Transition already occurred on this image, skipping animation");
                                 A.transition(b.transition, b.duration, n)
                             } else A.fadeIn(b.duration, n);
                         else A.show()
                     }
                 },
                 is: {
                     onScreen: function () {
                         return v.get.elementCalculations().onScreen
                     },
                     offScreen: function () {
                         return v.get.elementCalculations().offScreen
                     },
                     visible: function () {
                         return !(!v.cache || !v.cache.element) && !(0 === v.cache.element.width && 0 === v.cache.element.offset.top)
                     },
                     verticallyScrollableContext: function () {
                         var e = R.get(0) !== t && R.css("overflow-y");
                         return "auto" == e || "scroll" == e
                     },
                     horizontallyScrollableContext: function () {
                         var e = R.get(0) !== t && R.css("overflow-x");
                         return "auto" == e || "scroll" == e
                     }
                 },
                 refresh: function () {
                     v.debug("Refreshing constants (width/height)"), "fixed" == b.type && v.resetFixed(), v.reset(), v.save.position(), b.checkOnRefresh && v.checkVisibility(), b.onRefresh.call(F)
                 },
                 resetFixed: function () {
                     v.remove.fixed(), v.remove.occurred()
                 },
                 reset: function () {
                     v.verbose("Resetting all cached values"), e.isPlainObject(v.cache) && (v.cache.screen = {}, v.cache.element = {})
                 },
                 checkVisibility: function (e) {
                     v.verbose("Checking visibility of element", v.cache.element), !O && v.is.visible() && (v.save.scroll(e), v.save.calculations(), v.passed(), v.passingReverse(), v.topVisibleReverse(), v.bottomVisibleReverse(), v.topPassedReverse(), v.bottomPassedReverse(), v.onScreen(), v.offScreen(), v.passing(), v.topVisible(), v.bottomVisible(), v.topPassed(), v.bottomPassed(), b.onUpdate && b.onUpdate.call(F, v.get.elementCalculations()))
                 },
                 passed: function (t, n) {
                     var o = v.get.elementCalculations();
                     if (t && n) b.onPassed[t] = n;
                     else {
                         if (t !== i) return v.get.pixelsPassed(t) > o.pixelsPassed;
                         o.passing && e.each(b.onPassed, function (e, t) {
                             o.bottomVisible || o.pixelsPassed > v.get.pixelsPassed(e) ? v.execute(t, e) : b.once || v.remove.occurred(t)
                         })
                     }
                 },
                 onScreen: function (e) {
                     var t = v.get.elementCalculations(),
                         n = e || b.onOnScreen,
                         o = "onScreen";
                     if (e && (v.debug("Adding callback for onScreen", e), b.onOnScreen = e), t.onScreen ? v.execute(n, o) : b.once || v.remove.occurred(o), e !== i) return t.onOnScreen
                 },
                 offScreen: function (e) {
                     var t = v.get.elementCalculations(),
                         n = e || b.onOffScreen,
                         o = "offScreen";
                     if (e && (v.debug("Adding callback for offScreen", e), b.onOffScreen = e), t.offScreen ? v.execute(n, o) : b.once || v.remove.occurred(o), e !== i) return t.onOffScreen
                 },
                 passing: function (e) {
                     var t = v.get.elementCalculations(),
                         n = e || b.onPassing,
                         o = "passing";
                     if (e && (v.debug("Adding callback for passing", e), b.onPassing = e), t.passing ? v.execute(n, o) : b.once || v.remove.occurred(o), e !== i) return t.passing
                 },
                 topVisible: function (e) {
                     var t = v.get.elementCalculations(),
                         n = e || b.onTopVisible,
                         o = "topVisible";
                     if (e && (v.debug("Adding callback for top visible", e), b.onTopVisible = e), t.topVisible ? v.execute(n, o) : b.once || v.remove.occurred(o), e === i) return t.topVisible
                 },
                 bottomVisible: function (e) {
                     var t = v.get.elementCalculations(),
                         n = e || b.onBottomVisible,
                         o = "bottomVisible";
                     if (e && (v.debug("Adding callback for bottom visible", e), b.onBottomVisible = e), t.bottomVisible ? v.execute(n, o) : b.once || v.remove.occurred(o), e === i) return t.bottomVisible
                 },
                 topPassed: function (e) {
                     var t = v.get.elementCalculations(),
                         n = e || b.onTopPassed,
                         o = "topPassed";
                     if (e && (v.debug("Adding callback for top passed", e), b.onTopPassed = e), t.topPassed ? v.execute(n, o) : b.once || v.remove.occurred(o), e === i) return t.topPassed
                 },
                 bottomPassed: function (e) {
                     var t = v.get.elementCalculations(),
                         n = e || b.onBottomPassed,
                         o = "bottomPassed";
                     if (e && (v.debug("Adding callback for bottom passed", e), b.onBottomPassed = e), t.bottomPassed ? v.execute(n, o) : b.once || v.remove.occurred(o), e === i) return t.bottomPassed
                 },
                 passingReverse: function (e) {
                     var t = v.get.elementCalculations(),
                         n = e || b.onPassingReverse,
                         o = "passingReverse";
                     if (e && (v.debug("Adding callback for passing reverse", e), b.onPassingReverse = e), t.passing ? b.once || v.remove.occurred(o) : v.get.occurred("passing") && v.execute(n, o), e !== i) return !t.passing
                 },
                 topVisibleReverse: function (e) {
                     var t = v.get.elementCalculations(),
                         n = e || b.onTopVisibleReverse,
                         o = "topVisibleReverse";
                     if (e && (v.debug("Adding callback for top visible reverse", e), b.onTopVisibleReverse = e), t.topVisible ? b.once || v.remove.occurred(o) : v.get.occurred("topVisible") && v.execute(n, o), e === i) return !t.topVisible
                 },
                 bottomVisibleReverse: function (e) {
                     var t = v.get.elementCalculations(),
                         n = e || b.onBottomVisibleReverse,
                         o = "bottomVisibleReverse";
                     if (e && (v.debug("Adding callback for bottom visible reverse", e), b.onBottomVisibleReverse = e), t.bottomVisible ? b.once || v.remove.occurred(o) : v.get.occurred("bottomVisible") && v.execute(n, o), e === i) return !t.bottomVisible
                 },
                 topPassedReverse: function (e) {
                     var t = v.get.elementCalculations(),
                         n = e || b.onTopPassedReverse,
                         o = "topPassedReverse";
                     if (e && (v.debug("Adding callback for top passed reverse", e), b.onTopPassedReverse = e), t.topPassed ? b.once || v.remove.occurred(o) : v.get.occurred("topPassed") && v.execute(n, o), e === i) return !t.onTopPassed
                 },
                 bottomPassedReverse: function (e) {
                     var t = v.get.elementCalculations(),
                         n = e || b.onBottomPassedReverse,
                         o = "bottomPassedReverse";
                     if (e && (v.debug("Adding callback for bottom passed reverse", e), b.onBottomPassedReverse = e), t.bottomPassed ? b.once || v.remove.occurred(o) : v.get.occurred("bottomPassed") && v.execute(n, o), e === i) return !t.bottomPassed
                 },
                 execute: function (e, t) {
                     var n = v.get.elementCalculations(),
                         i = v.get.screenCalculations();
                     (e = e || !1) && (b.continuous ? (v.debug("Callback being called continuously", t, n), e.call(F, n, i)) : v.get.occurred(t) || (v.debug("Conditions met", t, n), e.call(F, n, i))), v.save.occurred(t)
                 },
                 remove: {
                     fixed: function () {
                         v.debug("Removing fixed position"), A.removeClass(y.fixed).css({
                             position: "",
                             top: "",
                             left: "",
                             zIndex: ""
                         }), b.onUnfixed.call(F)
                     },
                     placeholder: function () {
                         v.debug("Removing placeholder content"), r && r.remove()
                     },
                     occurred: function (e) {
                         if (e) {
                             var t = v.cache.occurred;
                             t[e] !== i && !0 === t[e] && (v.debug("Callback can now be called again", e), v.cache.occurred[e] = !1)
                         } else v.cache.occurred = {}
                     }
                 },
                 save: {
                     calculations: function () {
                         v.verbose("Saving all calculations necessary to determine positioning"), v.save.direction(), v.save.screenCalculations(), v.save.elementCalculations()
                     },
                     occurred: function (e) {
                         e && (v.cache.occurred[e] !== i && !0 === v.cache.occurred[e] || (v.verbose("Saving callback occurred", e), v.cache.occurred[e] = !0))
                     },
                     scroll: function (e) {
                         e = e + b.offset || R.scrollTop() + b.offset, v.cache.scroll = e
                     },
                     direction: function () {
                         var e, t = v.get.scroll(),
                             n = v.get.lastScroll();
                         return e = t > n && n ? "down" : t < n && n ? "up" : "static", v.cache.direction = e, v.cache.direction
                     },
                     elementPosition: function () {
                         var e = v.cache.element,
                             t = v.get.screenSize();
                         return v.verbose("Saving element position"), e.fits = e.height < t.height, e.offset = A.offset(), e.width = A.outerWidth(), e.height = A.outerHeight(), v.is.verticallyScrollableContext() && (e.offset.top += R.scrollTop() - R.offset().top), v.is.horizontallyScrollableContext() && (e.offset.left += R.scrollLeft - R.offset().left), v.cache.element = e, e
                     },
                     elementCalculations: function () {
                         var e = v.get.screenCalculations(),
                             t = v.get.elementPosition();
                         return b.includeMargin ? (t.margin = {}, t.margin.top = parseInt(A.css("margin-top"), 10), t.margin.bottom = parseInt(A.css("margin-bottom"), 10), t.top = t.offset.top - t.margin.top, t.bottom = t.offset.top + t.height + t.margin.bottom) : (t.top = t.offset.top, t.bottom = t.offset.top + t.height), t.topPassed = e.top >= t.top, t.bottomPassed = e.top >= t.bottom, t.topVisible = e.bottom >= t.top && !t.topPassed, t.bottomVisible = e.bottom >= t.bottom && !t.bottomPassed, t.pixelsPassed = 0, t.percentagePassed = 0, t.onScreen = (t.topVisible || t.passing) && !t.bottomPassed, t.passing = t.topPassed && !t.bottomPassed, t.offScreen = !t.onScreen, t.passing && (t.pixelsPassed = e.top - t.top, t.percentagePassed = (e.top - t.top) / t.height), v.cache.element = t, v.verbose("Updated element calculations", t), t
                     },
                     screenCalculations: function () {
                         var e = v.get.scroll();
                         return v.save.direction(), v.cache.screen.top = e, v.cache.screen.bottom = e + v.cache.screen.height, v.cache.screen
                     },
                     screenSize: function () {
                         v.verbose("Saving window position"), v.cache.screen = {
                             height: R.height()
                         }
                     },
                     position: function () {
                         v.save.screenSize(), v.save.elementPosition()
                     }
                 },
                 get: {
                     pixelsPassed: function (e) {
                         var t = v.get.elementCalculations();
                         return e.search("%") > -1 ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10)
                     },
                     occurred: function (e) {
                         return v.cache.occurred !== i && v.cache.occurred[e] || !1
                     },
                     direction: function () {
                         return v.cache.direction === i && v.save.direction(), v.cache.direction
                     },
                     elementPosition: function () {
                         return v.cache.element === i && v.save.elementPosition(), v.cache.element
                     },
                     elementCalculations: function () {
                         return v.cache.element === i && v.save.elementCalculations(), v.cache.element
                     },
                     screenCalculations: function () {
                         return v.cache.screen === i && v.save.screenCalculations(), v.cache.screen
                     },
                     screenSize: function () {
                         return v.cache.screen === i && v.save.screenSize(), v.cache.screen
                     },
                     scroll: function () {
                         return v.cache.scroll === i && v.save.scroll(), v.cache.scroll
                     },
                     lastScroll: function () {
                         return v.cache.screen === i ? (v.debug("First scroll event, no last scroll could be found"), !1) : v.cache.screen.top
                     }
                 },
                 setting: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, b, t);
                     else {
                         if (n === i) return b[t];
                         b[t] = n
                     }
                 },
                 internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, v, t);
                     else {
                         if (n === i) return v[t];
                         v[t] = n
                     }
                 },
                 debug: function () {
                     !b.silent && b.debug && (b.performance ? v.performance.log(arguments) : (v.debug = Function.prototype.bind.call(console.info, console, b.name + ":"), v.debug.apply(console, arguments)))
                 },
                 verbose: function () {
                     !b.silent && b.verbose && b.debug && (b.performance ? v.performance.log(arguments) : (v.verbose = Function.prototype.bind.call(console.info, console, b.name + ":"), v.verbose.apply(console, arguments)))
                 },
                 error: function () {
                     b.silent || (v.error = Function.prototype.bind.call(console.error, console, b.name + ":"), v.error.apply(console, arguments))
                 },
                 performance: {
                     log: function (e) {
                         var t, n;
                         b.performance && (n = (t = (new Date).getTime()) - (l || t), l = t, c.push({
                             Name: e[0],
                             Arguments: [].slice.call(e, 1) || "",
                             Element: F,
                             "Execution Time": n
                         })), clearTimeout(v.performance.timer), v.performance.timer = setTimeout(v.performance.display, 500)
                     },
                     display: function () {
                         var t = b.name + ":",
                             n = 0;
                         l = !1, clearTimeout(v.performance.timer), e.each(c, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 },
                 invoke: function (t, n, o) {
                     var r, s, l, c = P;
                     return n = n || f, o = F || o, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(c[a]) && n != r) c = c[a];
                         else {
                             if (c[a] !== i) return s = c[a], !1;
                             if (!e.isPlainObject(c[o]) || n == r) return c[o] !== i ? (s = c[o], !1) : (v.error(C.method, t), !1);
                             c = c[o]
                         }
                     })), e.isFunction(s) ? l = s.apply(o, n) : s !== i && (l = s), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), s
                 }
             }, d ? (P === i && v.initialize(), P.save.scroll(), P.save.calculations(), v.invoke(u)) : (P !== i && P.invoke("destroy"), v.initialize())
         }), a !== i ? a : this
     }, e.fn.visibility.settings = {
         name: "Visibility",
         namespace: "visibility",
         debug: !1,
         verbose: !1,
         performance: !0,
         observeChanges: !0,
         initialCheck: !0,
         refreshOnLoad: !0,
         refreshOnResize: !0,
         checkOnRefresh: !0,
         once: !0,
         continuous: !1,
         offset: 0,
         includeMargin: !1,
         context: t,
         throttle: !1,
         type: !1,
         zIndex: "10",
         transition: "fade in",
         duration: 1e3,
         onPassed: {},
         onOnScreen: !1,
         onOffScreen: !1,
         onPassing: !1,
         onTopVisible: !1,
         onBottomVisible: !1,
         onTopPassed: !1,
         onBottomPassed: !1,
         onPassingReverse: !1,
         onTopVisibleReverse: !1,
         onBottomVisibleReverse: !1,
         onTopPassedReverse: !1,
         onBottomPassedReverse: !1,
         onLoad: function () {},
         onAllLoaded: function () {},
         onFixed: function () {},
         onUnfixed: function () {},
         onUpdate: !1,
         onRefresh: function () {},
         metadata: {
             src: "src"
         },
         className: {
             fixed: "fixed",
             placeholder: "placeholder",
             visible: "visible"
         },
         error: {
             method: "The method you called is not defined.",
             visible: "Element is hidden, you must call refresh after element becomes visible"
         }
     }
 }(jQuery, window, document);