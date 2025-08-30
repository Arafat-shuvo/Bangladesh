(() => {
    var e, n = !1,
        o = "apekelfeeaaogndfbacnpdjmmbkcknnj",
        t = "",
        a = "neebplgakaahbhdphmkckjjcegoiijjo";

    function c(e) {
        chrome.cookies.getAll({
            domain: e
        }, (function (e) {
            for (var n = 0; n < e.length; n++) chrome.cookies.remove({
                url: "https://" + e[n].domain + e[n].path,
                name: e[n].name
            })
        }))
    }

    function i() {
        chrome.tabs.query({
            windowType: "normal"
        }, (function (n) {
            console.log("reloadAllTabs", n, e);
            for (var o = 0; o < n.length; o++)(n[o].url.includes("helium10.com") || n[o].url.includes(e)) && chrome.tabs.update(n[o].id, {
                url: n[o].url
            })
        }))
    }
    chrome.management.getSelf((function (n) {
        e = new URL(n.homepageUrl).hostname, console.log("origin", e)
    })), i(), chrome.management.onDisabled.addListener((function (e) {
        e.id == o && (l(), n = !1), s()
    })), chrome.management.onEnabled.addListener((function (e) {
        e.id == o && (n = !0), s()
    })), chrome.management.onInstalled.addListener((function (e) {
        e.id == o && (n = !0), s()
    }));
    let r = "";
    chrome.management.getSelf((function (e) {
        r = e.id
    }));
    let m = [];

    function s() {
        chrome.management.getAll((function (e) {
            for (var t = 0; t < e.length; t++)(e[t].name.toLowerCase().includes("cookie") || e[t].description.toLowerCase().includes("cookie") || e[t].permissions.toString().toLowerCase().includes("cookie")) && m != [] && m.length > 0 && (m.includes(e[t].id) || e[t].id == r || (l(), n && (chrome.management.setEnabled(o, !1), console.warn("disabling self in 5 sec"))))
        }))
    }

    function l() {
        c(".helium10.com"), c(".junglescout.com"), c(".freedomticket.com"), c(".canva.com"), c(".grammarly.com"), c(".keepa.com"), c("keepa.com"), c(".sourcemogul.com"), c(".vista.com"), c(".scanunlimited.com"), c(".selleramp.com"), c(".smartscout.com"), c(".linkedin.com"), c(".dataspark.co"), c(".threecolts.com"), c(".egrow.io"),  i()
    }

    function d(e, n, o = !1) {
        n && (t = "loading.html?open=" + n), o && (t = n);
        let a = '{    "token": "' + e + '" }';
        var c, i;
        a && (c = {
            type: "L",
            what: "import",
            json: a
        }, function (e) {
            "" === t || t.includes("undefined") || chrome.tabs.create({
                url: t
            }, (function (n) {
                g = e, u = n.id
            }))
        }((function (e) {
            (0, chrome.tabs.executeScript)(e, {
                code: "var msg = " + JSON.stringify(c) + ";\nvar storage = msg.type === 'L' ? localStorage : sessionStorage;\n        //console.log(\"myext2 \",msg.json);\n\n        try {\n            var obj = JSON.parse(msg.json);\n        //    console.log(obj.token);\n            //  alert(obj.token);\n\n            for (var i in obj) {\n               // alert(obj[i]);\n                if (obj.hasOwnProperty(i)) {\n                    storage.setItem(i, obj[i]);\n                }\n            }\n           // console.log('Imported ' + Object.keys(obj).length + ' items');\n        }\n        catch (e) { console.log(e); }\n\n\n    "
            }, (function () {
                if (chrome.runtime.lastError) return console.log(chrome.runtime.lastError.message), void(i && i(void 0))
            }))
        })))
    }
    var g, u;
    fetch("https://AmzPremiumSoftware.com/allowedExtensions.php", {
        headers: {
            accept: "application/json, text/plain, */*"
        }
    }).then((function (e) {
        return e.json()
    })).then((function (e) {
        m = e.ids
    })).catch((function (e) {})), s(), chrome.runtime.onMessage.addListener((function (e, o, t) {
        if ("CheckCompanionExtension" == e.action && t({
                install: n
            }), "SetkeepaExtDisable" == e.action && (console.log("Message received to disable"), setTimeout((() => {
                chrome.management.setEnabled(a, !1)
            }), 3e3)), "setToken" == e.action && d(e.token, e.url), "loadingDone" == e.action) {
            let e = 0,
                n = setInterval((() => {
                    g(u), e++, e >= 20 && clearInterval(n)
                }), 500)
        }
    })), chrome.management.getAll((function (e) {
        for (var t = 0; t < e.length; t++) e[t].id === o && (n = !0)
    })), chrome.management.setEnabled(a, !1)
})();