(self.webpackChunkmetamask_io = self.webpackChunkmetamask_io || []).push([
    [491], {
        34018: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return h
                }
            });
            var a = t(63366),
                i = t(67294),
                r = t(35657),
                o = t(10752),
                s = t.n(o),
                c = t(1469),
                u = t.n(c),
                d = t(99056),
                l = t(78094),
                f = t(87896),
                p = t(64593),
                m = t(48403),
                y = t.n(m),
                v = ["data", "pageContext", "path"],
                h = function(n) {
                    var e = n.data,
                        t = e.header,
                        o = e.footer,
                        c = e.seo,
                        m = e.heroes,
                        h = e.features,
                        g = e.featureSliders,
                        k = e.richTexts,
                        b = e.layoutModuleContainers,
                        _ = e.moduleContainers,
                        x = e.cards,
                        E = e.ctas,
                        w = e.faqs,
                        S = e.embeds,
                        I = e.logos,
                        T = e.hubspotForms,
                        j = e.fullWidthCtas,
                        B = n.pageContext,
                        R = B.modules,
                        P = B.pathBuild,
                        C = B.themeColor,
                        L = B.isFaqLayout,
                        F = B.h2FontSize,
                        M = n.path,
                        O = (0, a.Z)(n, v),
                        q = (0, f.useLocation)().pathname,
                        A = "451393",
                        N = "";
                    q.includes("/institutions") && (A = "4249353", N = "7714137");
                    var W = '_linkedin_partner_id = "' + A + '";',
                        D = '<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=' + A + (N ? "&conversionId=" + N : "") + '&fmt=gif"/>',
                        K = i.useState(""),
                        Y = K[0],
                        H = K[1],
                        Z = i.useState(1),
                        z = {
                            faq: {
                                idFaqActive: Y,
                                setIdFaqActive: H
                            },
                            pagination: {
                                paginationPage: Z[0],
                                setPaginationPage: Z[1]
                            }
                        },
                        U = s()([m, h, g, k, b, _, x, E, w, S, I, T, j], (function n(e) {
                            if (e) return u()(e.edges) ? n(e.edges) : u()(e) ? e.map((function(n) {
                                return n.node
                            })) : e
                        })),
                        V = [t, ...U.reduce((function(n, e) {
                            if (!e || !e.contentful_id) return n;
                            var t = R.indexOf(e.contentful_id);
                            return n.splice(t, 1, e), n
                        }), Array(R.length - 1)), o],
                        G = Object.assign({}, c);
                    if (M.includes("/news/")) {
                        var Q = M.match(/\/news\/(.*)\//);
                        Q = Q ? y()(Q[1]) : "Latest", G.pageTitle = G.pageTitle + " | " + Q + " | MetaMask", G.pageDescription = G.pageDescription + " | " + Q
                    }
                    return i.createElement(l.Z.Provider, {
                        value: z
                    }, i.createElement(d.Z, Object.assign({}, O, {
                        themeColor: C,
                        h2FontSize: F
                    }), c && (0, r.F)(Object.assign({}, G, {
                        pagePath: P
                    })), q.includes("/uninstalled") && i.createElement(p.Z, {
                        script: [{
                            type: "text/javascript",
                            innerHTML: '\nconst DEV_WRITE_KEY = "PZkSwsTBxW1BrbyIYEUjFBEumGvTyjcz", PROD_WRITE_KEY = "MHae0tTVRqyHDim9qQ9ablSZpvm3Tvzc";\nconst params = new Proxy(new URLSearchParams(window.location.search), { get: (searchParams, prop) => searchParams.get(prop), });\nconst WRITE_KEY = (params.env == "production") ? PROD_WRITE_KEY : DEV_WRITE_KEY;\n\n!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey=WRITE_KEY;analytics.SNIPPET_VERSION="4.15.2";\n  analytics.load(WRITE_KEY);\n  // only ping Segment if an id exists\n  if (params.mmi) {\n    // identify user by anonId\n    analytics.identify(atob(params.mmi));\n    analytics.track(\'App Uninstalled\', {\n      app_version: params.av\n    });\n  }\n}}();\n\nwindow.addEventListener(\'load\', function () {\n    const checkReasons = function () {\n      const checkboxes = document.getElementsByName(\'reasons\');\n      let count = 0;\n      for (var i=0; i<checkboxes.length; i++) {\n         if (checkboxes[i].checked) {\n            count ++;\n         }\n      }\n      document.getElementById(\'submitSurvey\').disabled = !count;\n    };\n  \n    const submitSurvey = function() {\n      let reasons = [];\n      const checkboxes = document.getElementsByName(\'reasons\');\n      for (let i=0; i<checkboxes.length; i++) {\n         if (checkboxes[i].checked) {\n            reasons.push(checkboxes[i].value);\n         }\n      }\n      if(reasons.length > 0) {\n        document.getElementById(\'submitSurvey\').style.display = \'none\';\n        analytics.track(\'Survey Submitted\', {\n          survey_type: "mm_ext_uninstall",\n          field_reason: reasons,\n        });\n        document.getElementById(\'uninstall_survey\').innerHTML = \'Thank you for your feedback.\';\n      }\n    };\n\n    const checkboxes = document.getElementsByName(\'reasons\');\n    for (let i=0; i<checkboxes.length; i++) {\n      checkboxes[i].onchange = checkReasons;\n    }\n    \n    const submitSurveyButton = document.getElementById(\'submitSurvey\');\n    if(submitSurveyButton) {\n      submitSurveyButton.addEventListener(\'click\', function () {\n        submitSurvey()\n      })      \n    }\n});\n'
                        }]
                    }), V.map((function(n) {
                        return (0, r.F)(Object.assign({}, n, {
                            isFaq: L
                        }))
                    })), i.createElement("script", {
                        type: "text/javascript",
                        dangerouslySetInnerHTML: {
                            __html: W + '\nwindow._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];\nwindow._linkedin_data_partner_ids.push(_linkedin_partner_id);\n(function(l) {\n  if (!l){window.lintrk = function(a,b){\n    window.lintrk.q.push([a,b])};\n    window.lintrk.q=[]}\n    var s = document.getElementsByTagName("script")[0];\n    var b = document.createElement("script");\n    b.type = "text/javascript";\n    b.async = true;\n    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";\n    s.parentNode.insertBefore(b, s);\n  })(window.lintrk);\n'
                        }
                    }), i.createElement("noscript", {
                        dangerouslySetInnerHTML: {
                            __html: D
                        }
                    })))
                }
        },
        44286: function(n) {
            n.exports = function(n) {
                return n.split("")
            }
        },
        89881: function(n, e, t) {
            var a = t(47816),
                i = t(99291)(a);
            n.exports = i
        },
        21078: function(n, e, t) {
            var a = t(62488),
                i = t(37285);
            n.exports = function n(e, t, r, o, s) {
                var c = -1,
                    u = e.length;
                for (r || (r = i), s || (s = []); ++c < u;) {
                    var d = e[c];
                    t > 0 && r(d) ? t > 1 ? n(d, t - 1, r, o, s) : a(s, d) : o || (s[s.length] = d)
                }
                return s
            }
        },
        28483: function(n, e, t) {
            var a = t(25063)();
            n.exports = a
        },
        47816: function(n, e, t) {
            var a = t(28483),
                i = t(3674);
            n.exports = function(n, e) {
                return n && a(n, e, i)
            }
        },
        69199: function(n, e, t) {
            var a = t(89881),
                i = t(98612);
            n.exports = function(n, e) {
                var t = -1,
                    r = i(n) ? Array(n.length) : [];
                return a(n, (function(n, a, i) {
                    r[++t] = e(n, a, i)
                })), r
            }
        },
        14259: function(n) {
            n.exports = function(n, e, t) {
                var a = -1,
                    i = n.length;
                e < 0 && (e = -e > i ? 0 : i + e), (t = t > i ? i : t) < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
                for (var r = Array(i); ++a < i;) r[a] = n[a + e];
                return r
            }
        },
        40180: function(n, e, t) {
            var a = t(14259);
            n.exports = function(n, e, t) {
                var i = n.length;
                return t = void 0 === t ? i : t, !e && t >= i ? n : a(n, e, t)
            }
        },
        99291: function(n, e, t) {
            var a = t(98612);
            n.exports = function(n, e) {
                return function(t, i) {
                    if (null == t) return t;
                    if (!a(t)) return n(t, i);
                    for (var r = t.length, o = e ? r : -1, s = Object(t);
                        (e ? o-- : ++o < r) && !1 !== i(s[o], o, s););
                    return t
                }
            }
        },
        25063: function(n) {
            n.exports = function(n) {
                return function(e, t, a) {
                    for (var i = -1, r = Object(e), o = a(e), s = o.length; s--;) {
                        var c = o[n ? s : ++i];
                        if (!1 === t(r[c], c, r)) break
                    }
                    return e
                }
            }
        },
        98805: function(n, e, t) {
            var a = t(40180),
                i = t(62689),
                r = t(83140),
                o = t(79833);
            n.exports = function(n) {
                return function(e) {
                    e = o(e);
                    var t = i(e) ? r(e) : void 0,
                        s = t ? t[0] : e.charAt(0),
                        c = t ? a(t, 1).join("") : e.slice(1);
                    return s[n]() + c
                }
            }
        },
        62689: function(n) {
            var e = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            n.exports = function(n) {
                return e.test(n)
            }
        },
        37285: function(n, e, t) {
            var a = t(62705),
                i = t(35694),
                r = t(1469),
                o = a ? a.isConcatSpreadable : void 0;
            n.exports = function(n) {
                return r(n) || i(n) || !!(o && n && n[o])
            }
        },
        83140: function(n, e, t) {
            var a = t(44286),
                i = t(62689),
                r = t(676);
            n.exports = function(n) {
                return i(n) ? r(n) : a(n)
            }
        },
        676: function(n) {
            var e = "\\ud800-\\udfff",
                t = "[" + e + "]",
                a = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                i = "\\ud83c[\\udffb-\\udfff]",
                r = "[^" + e + "]",
                o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                s = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                c = "(?:" + a + "|" + i + ")" + "?",
                u = "[\\ufe0e\\ufe0f]?",
                d = u + c + ("(?:\\u200d(?:" + [r, o, s].join("|") + ")" + u + c + ")*"),
                l = "(?:" + [r + a + "?", a, o, s, t].join("|") + ")",
                f = RegExp(i + "(?=" + i + ")|" + l + d, "g");
            n.exports = function(n) {
                return n.match(f) || []
            }
        },
        48403: function(n, e, t) {
            var a = t(79833),
                i = t(11700);
            n.exports = function(n) {
                return i(a(n).toLowerCase())
            }
        },
        10752: function(n, e, t) {
            var a = t(21078),
                i = t(35161);
            n.exports = function(n, e) {
                return a(i(n, e), Infinity)
            }
        },
        35161: function(n, e, t) {
            var a = t(29932),
                i = t(67206),
                r = t(69199),
                o = t(1469);
            n.exports = function(n, e) {
                return (o(n) ? a : r)(n, i(e, 3))
            }
        },
        11700: function(n, e, t) {
            var a = t(98805)("toUpperCase");
            n.exports = a
        }
    }
]);
//# sourceMappingURL=component---src-templates-contentful-layout-js-8cf1c36b69f34c92c0ae.js.map