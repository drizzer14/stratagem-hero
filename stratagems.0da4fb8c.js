// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1KJID":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "870068980da4fb8c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"d2Wd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _stratagemsComponentDefault.default));
var _stratagemsComponent = require("./stratagems.component");
var _stratagemsComponentDefault = parcelHelpers.interopDefault(_stratagemsComponent);

},{"./stratagems.component":"eEbtC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eEbtC":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$1c95 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$1c95.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _entity = require("entity");
var _code = require("./code");
var _codeDefault = parcelHelpers.interopDefault(_code);
var _round = require("./round");
var _roundDefault = parcelHelpers.interopDefault(_round);
var _score = require("./score");
var _scoreDefault = parcelHelpers.interopDefault(_score);
var _carousel = require("./carousel");
var _carouselDefault = parcelHelpers.interopDefault(_carousel);
var _timer = require("./timer");
var _timerDefault = parcelHelpers.interopDefault(_timer);
var _stratagemsStyles = require("./stratagems.styles");
var _s = $RefreshSig$();
const makeRounds = ()=>{
    const stratagemsIDs = Object.keys((0, _entity.stratagems));
    let index = stratagemsIDs.length;
    let randomIndex = 0;
    while(index > 0){
        randomIndex = Math.floor(Math.random() * index);
        index -= 1;
        [stratagemsIDs[index], stratagemsIDs[randomIndex]] = [
            stratagemsIDs[randomIndex],
            stratagemsIDs[index]
        ];
    }
    const chunks = [];
    for(index = 0; index < stratagemsIDs.length; index += 8)chunks.push(stratagemsIDs.slice(index, index + 8));
    return chunks;
};
const Stratagems = ({ onComplete })=>{
    _s();
    const [score, setScore] = (0, _react.useState)(0);
    const rounds = (0, _react.useRef)(makeRounds());
    const [currentRoundIndex, setCurrentRoundIndex] = (0, _react.useState)(0);
    const currentRound = (0, _react.useMemo)(()=>rounds.current[currentRoundIndex], [
        currentRoundIndex
    ]);
    const [currentStratagemIndex, setCurrentStratagemIndex] = (0, _react.useState)(0);
    const currentStratagem = (0, _react.useMemo)(()=>(0, _entity.stratagems)[currentRound[currentStratagemIndex]], [
        currentRound,
        currentStratagemIndex
    ]);
    const onGameComplete = (0, _react.useCallback)(()=>{
        const prevScore = +(localStorage.getItem("score") || 0);
        if (score > prevScore) localStorage.setItem("score", `${score}`);
        onComplete(score);
    }, [
        score
    ]);
    const [stratagemStartTime, setStratagemStartTime] = (0, _react.useState)(Date.now());
    (0, _react.useEffect)(()=>{
        setStratagemStartTime(Date.now());
    }, [
        currentStratagem.id
    ]);
    const [errorsCount, setErrorsCount] = (0, _react.useState)(0);
    const onStratagemComplete = (0, _react.useCallback)(()=>{
        const isLastStratagemOfRound = currentStratagemIndex === currentRound.length - 1;
        const isLastRound = currentRoundIndex === rounds.current.length - 1;
        if (isLastRound) {
            if (isLastStratagemOfRound) onGameComplete();
        } else {
            if (isLastStratagemOfRound) {
                setCurrentStratagemIndex(0);
                setCurrentRoundIndex(currentRoundIndex + 1);
            } else setCurrentStratagemIndex(currentStratagemIndex + 1);
            (0, _timer.timer).emit("increase", 20.664);
            const codeLength = currentStratagem.code.length;
            const codeWeight = new Set(currentStratagem.code).size;
            const stratagemEndTime = Date.now();
            const timeDiffS = (stratagemEndTime - stratagemStartTime) / 1000;
            setScore((prevScore)=>prevScore + Math.round(codeWeight / timeDiffS * codeLength) - errorsCount);
            setErrorsCount(0);
        }
    }, [
        currentStratagemIndex,
        currentRoundIndex,
        stratagemStartTime,
        setScore
    ]);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_stratagemsStyles.Container, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _roundDefault.default), {
                currentRoundIndex: currentRoundIndex
            }, void 0, false, {
                fileName: "src/game/stratagems/stratagems.component.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_stratagemsStyles.Stratagems, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _carouselDefault.default), {
                        currentRound: currentRound,
                        currentStratagem: currentStratagem,
                        currentStratagemIndex: currentStratagemIndex
                    }, void 0, false, {
                        fileName: "src/game/stratagems/stratagems.component.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _codeDefault.default), {
                        code: currentStratagem.code,
                        onError: ()=>setErrorsCount(errorsCount + 1),
                        onComplete: onStratagemComplete
                    }, void 0, false, {
                        fileName: "src/game/stratagems/stratagems.component.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _timerDefault.default), {
                        onDeplete: onGameComplete
                    }, void 0, false, {
                        fileName: "src/game/stratagems/stratagems.component.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/game/stratagems/stratagems.component.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _scoreDefault.default), {
                score: score
            }, void 0, false, {
                fileName: "src/game/stratagems/stratagems.component.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/game/stratagems/stratagems.component.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, undefined);
};
_s(Stratagems, "tHKhwZhdoVoiQbnhusyhSeDP8Ak=");
_c = Stratagems;
exports.default = Stratagems;
var _c;
$RefreshReg$(_c, "Stratagems");

  $parcel$ReactRefreshHelpers$1c95.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","entity":"5zVm9","./code":"bXiNm","./round":"8yLZm","./score":"e2eqg","./carousel":"lBfTg","./timer":"4gpON","./stratagems.styles":"9jXBJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"bXiNm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _codeComponentDefault.default));
var _codeComponent = require("./code.component");
var _codeComponentDefault = parcelHelpers.interopDefault(_codeComponent);

},{"./code.component":"2M7sa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2M7sa":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$d516 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$d516.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _tsPattern = require("ts-pattern");
var _react = require("react");
var _hooks = require("hooks");
var _arrow = require("./arrow");
var _arrowDefault = parcelHelpers.interopDefault(_arrow);
var _codeStyles = require("./code.styles");
var _s = $RefreshSig$();
const normalizeKey = (key)=>{
    return (0, _tsPattern.match)(key).returnType().with("arrowup", ()=>"w").with("arrowright", ()=>"d").with("arrowdown", ()=>"s").with("arrowleft", ()=>"a").otherwise(()=>key);
};
const Code = ({ code, onError, onComplete })=>{
    _s();
    const [userInput, setUserInput] = (0, _react.useState)([]);
    const [invalid, setInvalid] = (0, _react.useState)(false);
    (0, _hooks.useStratagemKey)((key)=>{
        const normalizedKey = normalizeKey(key);
        if (code[userInput.length] === normalizedKey) {
            setUserInput(userInput.concat(normalizedKey));
            setInvalid(false);
        } else {
            setUserInput([]);
            setInvalid(true);
            onError();
            setTimeout(()=>setInvalid(false), 500);
        }
    }, [
        userInput
    ]);
    (0, _react.useEffect)(()=>{
        if (userInput.join("") === code) setTimeout(()=>{
            onComplete();
            setUserInput([]);
        }, 66.4);
    }, [
        userInput,
        code
    ]);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_codeStyles.Code, {
        children: code.split("").map((input, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_codeStyles.Input, {
                "data-input": input,
                "data-valid": input === userInput[index] || undefined,
                "data-invalid": invalid || undefined,
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _arrowDefault.default), {}, void 0, false, {
                    fileName: "src/game/stratagems/code/code.component.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, undefined)
            }, `${input}-${index}`, false, {
                fileName: "src/game/stratagems/code/code.component.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, undefined))
    }, void 0, false, {
        fileName: "src/game/stratagems/code/code.component.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, undefined);
};
_s(Code, "DFRp886QHX9Fy06upLCNAad39uo=", false, function() {
    return [
        (0, _hooks.useStratagemKey)
    ];
});
_c = Code;
exports.default = Code;
var _c;
$RefreshReg$(_c, "Code");

  $parcel$ReactRefreshHelpers$d516.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","ts-pattern":"hM5Pm","react":"21dqq","hooks":"5jDAD","./arrow":"jff7b","./code.styles":"3JqAs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"jff7b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _arrowComponentDefault.default));
var _arrowComponent = require("./arrow.component");
var _arrowComponentDefault = parcelHelpers.interopDefault(_arrowComponent);

},{"./arrow.component":"dWkhy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dWkhy":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$b260 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$b260.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _arrowStyles = require("./arrow.styles");
const Arrow = ()=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_arrowStyles.Arrow, {
        width: "62",
        height: "66",
        viewBox: "0 0 62 66",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.715027 31.8015L31.6459 0.694458L61.707 31.8015V40.515H46.3713V65.9583H16.9198V40.515H0.71283V31.8015H0.715027Z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "src/game/stratagems/code/arrow/arrow.component.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "src/game/stratagems/code/arrow/arrow.component.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, undefined);
};
_c = Arrow;
exports.default = Arrow;
var _c;
$RefreshReg$(_c, "Arrow");

  $parcel$ReactRefreshHelpers$b260.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","./arrow.styles":"gH9kU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"gH9kU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Arrow", ()=>Arrow);
var _styledComponents = require("styled-components");
const Arrow = (0, _styledComponents.styled).svg`
  filter: drop-shadow(0 0 5px currentColor);
`;

},{"styled-components":"1U3k6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3JqAs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Code", ()=>Code);
parcelHelpers.export(exports, "Input", ()=>Input);
var _styledComponents = require("styled-components");
const Code = (0, _styledComponents.styled).ol`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  margin-top: 24px;
`;
const Input = (0, _styledComponents.styled).li`
  color: #eee;

  &[data-valid] {
    color: var(--brand);
  }

  &[data-invalid] {
    color: #f00;
  }

  &[data-input='d'] {
    transform: rotate(90deg);
  }

  &[data-input='s'] {
    transform: rotate(180deg);
  }

  &[data-input='a'] {
    transform: rotate(270deg);
  }
`;

},{"styled-components":"1U3k6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yLZm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _roundComponentDefault.default));
var _roundComponent = require("./round.component");
var _roundComponentDefault = parcelHelpers.interopDefault(_roundComponent);

},{"./round.component":"hDPxt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hDPxt":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$a540 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a540.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _roundStyles = require("./round.styles");
const Round = ({ currentRoundIndex })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_roundStyles.Round, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_roundStyles.Title, {
                children: "Round"
            }, void 0, false, {
                fileName: "src/game/stratagems/round/round.component.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_roundStyles.Index, {
                children: currentRoundIndex + 1
            }, void 0, false, {
                fileName: "src/game/stratagems/round/round.component.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/game/stratagems/round/round.component.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, undefined);
};
_c = Round;
exports.default = Round;
var _c;
$RefreshReg$(_c, "Round");

  $parcel$ReactRefreshHelpers$a540.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","./round.styles":"aGsj7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"aGsj7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Round", ()=>Round);
parcelHelpers.export(exports, "Title", ()=>Title);
parcelHelpers.export(exports, "Index", ()=>Index);
var _styledComponents = require("styled-components");
const Round = (0, _styledComponents.styled).div`
  display: flex;
  flex-direction: column;

  margin-top: -12px;
  margin-right: 32px;
`;
const Title = (0, _styledComponents.styled).h2`
  color: #fff;
  font-size: 24px;
`;
const Index = (0, _styledComponents.styled).span`
  margin-top: -8px;

  color: var(--brand);
  font-weight: 700;
  font-size: 48px;
`;

},{"styled-components":"1U3k6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e2eqg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _scoreComponentDefault.default));
var _scoreComponent = require("./score.component");
var _scoreComponentDefault = parcelHelpers.interopDefault(_scoreComponent);

},{"./score.component":"7QxGl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7QxGl":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$8e36 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$8e36.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _scoreStyles = require("./score.styles");
const Score = ({ score })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_scoreStyles.Score, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_scoreStyles.Amount, {
                children: score
            }, void 0, false, {
                fileName: "src/game/stratagems/score/score.component.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_scoreStyles.Title, {
                children: "Score"
            }, void 0, false, {
                fileName: "src/game/stratagems/score/score.component.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/game/stratagems/score/score.component.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, undefined);
};
_c = Score;
exports.default = Score;
var _c;
$RefreshReg$(_c, "Score");

  $parcel$ReactRefreshHelpers$8e36.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","./score.styles":"4JeGB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"4JeGB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Score", ()=>Score);
parcelHelpers.export(exports, "Title", ()=>Title);
parcelHelpers.export(exports, "Amount", ()=>Amount);
var _styledComponents = require("styled-components");
const Score = (0, _styledComponents.styled).div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: -12px;
  margin-left: 64px;
`;
const Title = (0, _styledComponents.styled).h2`
  margin-top: -32px;

  color: #fff;
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
`;
const Amount = (0, _styledComponents.styled).span`
  color: var(--brand);
  font-size: 64px;
  font-weight: 700;
`;

},{"styled-components":"1U3k6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lBfTg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _carouselComponentDefault.default));
var _carouselComponent = require("./carousel.component");
var _carouselComponentDefault = parcelHelpers.interopDefault(_carouselComponent);

},{"./carousel.component":"bugok","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bugok":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$151c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$151c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _entity = require("entity");
var _svg = require("../../../../public/images/stratagems/*.svg");
var _carouselStyles = require("./carousel.styles");
const getStratagemImageURL = (id)=>{
    return new URL(// @ts-ignore
    _svg[id], "file:///src/game/stratagems/carousel/carousel.component.tsx");
};
const Carousel = ({ currentRound, currentStratagem, currentStratagemIndex })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_carouselStyles.Carousel, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_carouselStyles.List, {
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_carouselStyles.CurrentItem, {
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            src: getStratagemImageURL(currentStratagem.id),
                            alt: currentStratagem.title
                        }, void 0, false, {
                            fileName: "src/game/stratagems/carousel/carousel.component.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/game/stratagems/carousel/carousel.component.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, undefined),
                    currentRound.slice(currentStratagemIndex + 1, currentStratagemIndex + 9).map((id, index, restOfRound)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_carouselStyles.Item, {
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                src: getStratagemImageURL(restOfRound[index]),
                                alt: (0, _entity.stratagems)[id].title
                            }, void 0, false, {
                                fileName: "src/game/stratagems/carousel/carousel.component.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, undefined)
                        }, id, false, {
                            fileName: "src/game/stratagems/carousel/carousel.component.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, undefined))
                ]
            }, void 0, true, {
                fileName: "src/game/stratagems/carousel/carousel.component.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_carouselStyles.CurrentStratagemTitle, {
                children: currentStratagem.title
            }, void 0, false, {
                fileName: "src/game/stratagems/carousel/carousel.component.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/game/stratagems/carousel/carousel.component.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, undefined);
};
_c = Carousel;
exports.default = Carousel;
var _c;
$RefreshReg$(_c, "Carousel");

  $parcel$ReactRefreshHelpers$151c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","entity":"5zVm9","../../../../public/images/stratagems/*.svg":"jkkVa","./carousel.styles":"fiQ2m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"jkkVa":[function(require,module,exports) {
const _temp0 = require("7de6e692d1b1a782");
const _temp1 = require("1fe59d9dd187f61f");
const _temp2 = require("7d018f0e1d40edcb");
const _temp3 = require("2acb26477ba6a2f5");
const _temp4 = require("656c62b3030ee3b6");
const _temp5 = require("92b59d71528f371f");
const _temp6 = require("e8bdec7b195df9cb");
const _temp7 = require("eae8d89fece420fc");
const _temp8 = require("79a58170fec61fc3");
const _temp9 = require("328ed80cad45a980");
const _temp10 = require("800bd2cf05aef752");
const _temp11 = require("f916fd961755dd24");
const _temp12 = require("fb5ccf4f8315904b");
const _temp13 = require("b761dee92c02c709");
const _temp14 = require("8dcfb8d3f75ee79c");
const _temp15 = require("732939325b97bbce");
const _temp16 = require("52d81d0cb45daf4");
const _temp17 = require("6b746905ab896213");
const _temp18 = require("ec9b7d3f927410b7");
const _temp19 = require("2a938f846c0a25fa");
const _temp20 = require("f0d642d51b16854f");
const _temp21 = require("8330020fab82a3");
const _temp22 = require("3b7f4f9facb3ae18");
const _temp23 = require("3f5a2719adf84c18");
const _temp24 = require("e064935eb08febee");
const _temp25 = require("cae3e80207770499");
const _temp26 = require("7a0e14dbef4ecd5e");
const _temp27 = require("3604a37fd645dc32");
const _temp28 = require("264ebe61f8eba7a7");
const _temp29 = require("c94ee883c618468d");
const _temp30 = require("e2aeaf1ed493800d");
const _temp31 = require("ff08828035c49f00");
const _temp32 = require("c0984708c056aea5");
const _temp33 = require("16c62a92c2c89980");
const _temp34 = require("85f7858bbe2886ae");
const _temp35 = require("403a8c5f3c9b7292");
const _temp36 = require("2ecf973a184e8cb9");
const _temp37 = require("eee3b2b68ec09169");
const _temp38 = require("e2c5ae2736aca9d6");
const _temp39 = require("9e85aa21dac1f0aa");
const _temp40 = require("86a7bd91ee53f946");
const _temp41 = require("e904d6389454b257");
const _temp42 = require("467e79f53033a257");
const _temp43 = require("ad068d7b1b7d907e");
const _temp44 = require("e967e472ac55c99c");
const _temp45 = require("323a70a1684fe346");
const _temp46 = require("49f448d8c44be1b5");
const _temp47 = require("48567d71a7140a8e");
const _temp48 = require("b197c13af4f2ae6");
const _temp49 = require("dedce84d0e567002");
const _temp50 = require("2c25e76d39d3459b");
const _temp51 = require("ee1e2106f82c932a");
const _temp52 = require("31dbeb8072a77d29");
const _temp53 = require("94622f944561e03b");
const _temp54 = require("c6ac4df79209bf97");
const _temp55 = require("c0d1d805b30cef0a");
const _temp56 = require("f4f52423a7e51441");
const _temp57 = require("3310f1c20a43fdf0");
const _temp58 = require("8275417d482aaf26");
const _temp59 = require("6cde7c3a1818bf9a");
module.exports = {
    "anti-materiel_rifle": _temp0,
    "anti-personnel_minefield": _temp1,
    "arc_thrower": _temp2,
    "autocannon": _temp3,
    "autocannon_sentry": _temp4,
    "ballistic_shield_backpack": _temp5,
    "eagle_110mm_rocket_pods": _temp6,
    "eagle_500kg_bomb": _temp7,
    "eagle_airstrike": _temp8,
    "eagle_cluster_bomb": _temp9,
    "eagle_napalm_airstrike": _temp10,
    "eagle_rearm": _temp11,
    "eagle_smoke_strike": _temp12,
    "eagle_strafing_run": _temp13,
    "ems_mortar_sentry": _temp14,
    "expendable_anti-tank": _temp15,
    "flamethrower": _temp16,
    "gatling_sentry": _temp17,
    "grenade_launcher": _temp18,
    "guard_dog": _temp19,
    "guard_dog_rover": _temp20,
    "hellbomb": _temp21,
    "hmg_emplacement": _temp22,
    "incendiary_mines": _temp23,
    "jump_pack": _temp24,
    "laser_cannon": _temp25,
    "machine_gun": _temp26,
    "machine_gun_sentry": _temp27,
    "mortar_sentry": _temp28,
    "orbital_120mm_he_barrage": _temp29,
    "orbital_380mm_he_barrage": _temp30,
    "orbital_airburst_strike": _temp31,
    "orbital_ems_strike": _temp32,
    "orbital_gas_strike": _temp33,
    "orbital_gatling_barrage": _temp34,
    "orbital_illumination_flare": _temp35,
    "orbital_laser": _temp36,
    "orbital_precision_strike": _temp37,
    "orbital_railcannon_strike": _temp38,
    "orbital_smoke_strike": _temp39,
    "orbital_walking_barrage": _temp40,
    "patriot_exosuit": _temp41,
    "prospecting_drill": _temp42,
    "railgun": _temp43,
    "recoilless_rifle": _temp44,
    "reinforce": _temp45,
    "resupply": _temp46,
    "rocket_sentry": _temp47,
    "seaf_artillery": _temp48,
    "seismic_probe": _temp49,
    "shield_generator_pack": _temp50,
    "shield_generator_relay": _temp51,
    "sos_beacon": _temp52,
    "spear": _temp53,
    "sssd_delivery": _temp54,
    "stalwart": _temp55,
    "super_earth_flag": _temp56,
    "supply_pack": _temp57,
    "tesla_tower": _temp58,
    "upload_data": _temp59
};

},{"7de6e692d1b1a782":"iXYVj","1fe59d9dd187f61f":"eqEou","7d018f0e1d40edcb":"TeLZT","2acb26477ba6a2f5":"3cbSp","656c62b3030ee3b6":"jaaLI","92b59d71528f371f":"aCY6o","e8bdec7b195df9cb":"3Xhpy","eae8d89fece420fc":"8UGTF","79a58170fec61fc3":"lUwB0","328ed80cad45a980":"cuFCp","800bd2cf05aef752":"jM75J","f916fd961755dd24":"g5ATR","fb5ccf4f8315904b":"3Mkk4","b761dee92c02c709":"l6aaR","8dcfb8d3f75ee79c":"dE1ja","732939325b97bbce":"gXtjr","52d81d0cb45daf4":"cpTru","6b746905ab896213":"jeG1b","ec9b7d3f927410b7":"diO21","2a938f846c0a25fa":"bS5PA","f0d642d51b16854f":"dc7Bg","8330020fab82a3":"8tARA","3b7f4f9facb3ae18":"dGepg","3f5a2719adf84c18":"hm2aM","e064935eb08febee":"i2Sk2","cae3e80207770499":"doaRu","7a0e14dbef4ecd5e":"7dE9H","3604a37fd645dc32":"5tcXh","264ebe61f8eba7a7":"2SmkN","c94ee883c618468d":"avRjk","e2aeaf1ed493800d":"btLoz","ff08828035c49f00":"2vfNO","c0984708c056aea5":"8VC4E","16c62a92c2c89980":"dJ8to","85f7858bbe2886ae":"aOM4f","403a8c5f3c9b7292":"eo4KP","2ecf973a184e8cb9":"cXSfj","eee3b2b68ec09169":"cqENi","e2c5ae2736aca9d6":"lSc0x","9e85aa21dac1f0aa":"8qLNe","86a7bd91ee53f946":"aLnBe","e904d6389454b257":"82Le0","467e79f53033a257":"hS1gj","ad068d7b1b7d907e":"gj8Ul","e967e472ac55c99c":"20KN6","323a70a1684fe346":"1D4xD","49f448d8c44be1b5":"7HxDV","48567d71a7140a8e":"iPqPm","b197c13af4f2ae6":"hUbUG","dedce84d0e567002":"bDouT","2c25e76d39d3459b":"6fpuE","ee1e2106f82c932a":"fZKmk","31dbeb8072a77d29":"hu3AW","94622f944561e03b":"bbT7P","c6ac4df79209bf97":"l5nCt","c0d1d805b30cef0a":"1dzVU","f4f52423a7e51441":"dGjg8","3310f1c20a43fdf0":"l6374","8275417d482aaf26":"6KKjA","6cde7c3a1818bf9a":"jJKHv"}],"iXYVj":[function(require,module,exports) {
module.exports = require("168aec6eb6e57785").getBundleURL("bABQ6") + "anti-materiel_rifle.5ce6f706.svg" + "?" + Date.now();

},{"168aec6eb6e57785":"lgJ39"}],"eqEou":[function(require,module,exports) {
module.exports = require("d0c4fcb30ea999cb").getBundleURL("bABQ6") + "anti-personnel_minefield.2ecdf36f.svg" + "?" + Date.now();

},{"d0c4fcb30ea999cb":"lgJ39"}],"TeLZT":[function(require,module,exports) {
module.exports = require("80cac5123dd4d040").getBundleURL("bABQ6") + "arc_thrower.976dede4.svg" + "?" + Date.now();

},{"80cac5123dd4d040":"lgJ39"}],"3cbSp":[function(require,module,exports) {
module.exports = require("734e9283db842a00").getBundleURL("bABQ6") + "autocannon.d5737837.svg" + "?" + Date.now();

},{"734e9283db842a00":"lgJ39"}],"jaaLI":[function(require,module,exports) {
module.exports = require("77dee73eaf4840b1").getBundleURL("bABQ6") + "autocannon_sentry.d4285bf2.svg" + "?" + Date.now();

},{"77dee73eaf4840b1":"lgJ39"}],"aCY6o":[function(require,module,exports) {
module.exports = require("d6d625cc20b32faa").getBundleURL("bABQ6") + "ballistic_shield_backpack.d8591834.svg" + "?" + Date.now();

},{"d6d625cc20b32faa":"lgJ39"}],"3Xhpy":[function(require,module,exports) {
module.exports = require("bdb6009c8db747ac").getBundleURL("bABQ6") + "eagle_110mm_rocket_pods.98627920.svg" + "?" + Date.now();

},{"bdb6009c8db747ac":"lgJ39"}],"8UGTF":[function(require,module,exports) {
module.exports = require("5df419843cda732").getBundleURL("bABQ6") + "eagle_500kg_bomb.1e726780.svg" + "?" + Date.now();

},{"5df419843cda732":"lgJ39"}],"lUwB0":[function(require,module,exports) {
module.exports = require("dfc17737cf9ca749").getBundleURL("bABQ6") + "eagle_airstrike.a7795d8d.svg" + "?" + Date.now();

},{"dfc17737cf9ca749":"lgJ39"}],"cuFCp":[function(require,module,exports) {
module.exports = require("ef1f9b9df1a56c0a").getBundleURL("bABQ6") + "eagle_cluster_bomb.37cb5356.svg" + "?" + Date.now();

},{"ef1f9b9df1a56c0a":"lgJ39"}],"jM75J":[function(require,module,exports) {
module.exports = require("184c2b53cccf121f").getBundleURL("bABQ6") + "eagle_napalm_airstrike.eb7f51a9.svg" + "?" + Date.now();

},{"184c2b53cccf121f":"lgJ39"}],"g5ATR":[function(require,module,exports) {
module.exports = require("ba9eb9fee87bc84c").getBundleURL("bABQ6") + "eagle_rearm.af2e35d6.svg" + "?" + Date.now();

},{"ba9eb9fee87bc84c":"lgJ39"}],"3Mkk4":[function(require,module,exports) {
module.exports = require("301bc91bfc3de98e").getBundleURL("bABQ6") + "eagle_smoke_strike.0445c9ef.svg" + "?" + Date.now();

},{"301bc91bfc3de98e":"lgJ39"}],"l6aaR":[function(require,module,exports) {
module.exports = require("f33caf6e4db10d1e").getBundleURL("bABQ6") + "eagle_strafing_run.ad520ead.svg" + "?" + Date.now();

},{"f33caf6e4db10d1e":"lgJ39"}],"dE1ja":[function(require,module,exports) {
module.exports = require("d01daf4b10568b14").getBundleURL("bABQ6") + "ems_mortar_sentry.e7532c66.svg" + "?" + Date.now();

},{"d01daf4b10568b14":"lgJ39"}],"gXtjr":[function(require,module,exports) {
module.exports = require("44718b9a1506c280").getBundleURL("bABQ6") + "expendable_anti-tank.a663bfda.svg" + "?" + Date.now();

},{"44718b9a1506c280":"lgJ39"}],"cpTru":[function(require,module,exports) {
module.exports = require("8bf062ca7289e89b").getBundleURL("bABQ6") + "flamethrower.b17bdc35.svg" + "?" + Date.now();

},{"8bf062ca7289e89b":"lgJ39"}],"jeG1b":[function(require,module,exports) {
module.exports = require("8fbaaa2ff029560d").getBundleURL("bABQ6") + "gatling_sentry.3c63977f.svg" + "?" + Date.now();

},{"8fbaaa2ff029560d":"lgJ39"}],"diO21":[function(require,module,exports) {
module.exports = require("438ac9bf51065526").getBundleURL("bABQ6") + "grenade_launcher.4381c6d2.svg" + "?" + Date.now();

},{"438ac9bf51065526":"lgJ39"}],"bS5PA":[function(require,module,exports) {
module.exports = require("1b70b14562b8866c").getBundleURL("bABQ6") + "guard_dog.d8bea1f0.svg" + "?" + Date.now();

},{"1b70b14562b8866c":"lgJ39"}],"dc7Bg":[function(require,module,exports) {
module.exports = require("3db2d8205c3839ea").getBundleURL("bABQ6") + "guard_dog_rover.fe11b194.svg" + "?" + Date.now();

},{"3db2d8205c3839ea":"lgJ39"}],"8tARA":[function(require,module,exports) {
module.exports = require("67b174557ec5b17").getBundleURL("bABQ6") + "hellbomb.33782aa6.svg" + "?" + Date.now();

},{"67b174557ec5b17":"lgJ39"}],"dGepg":[function(require,module,exports) {
module.exports = require("a248073672b232ea").getBundleURL("bABQ6") + "hmg_emplacement.b1603c4a.svg" + "?" + Date.now();

},{"a248073672b232ea":"lgJ39"}],"hm2aM":[function(require,module,exports) {
module.exports = require("89a2188bdb2e41c5").getBundleURL("bABQ6") + "incendiary_mines.abb3893f.svg" + "?" + Date.now();

},{"89a2188bdb2e41c5":"lgJ39"}],"i2Sk2":[function(require,module,exports) {
module.exports = require("ef6820fa2b65180b").getBundleURL("bABQ6") + "jump_pack.21a3d381.svg" + "?" + Date.now();

},{"ef6820fa2b65180b":"lgJ39"}],"doaRu":[function(require,module,exports) {
module.exports = require("5fcad49d706624c3").getBundleURL("bABQ6") + "laser_cannon.91fbb696.svg" + "?" + Date.now();

},{"5fcad49d706624c3":"lgJ39"}],"7dE9H":[function(require,module,exports) {
module.exports = require("7e2756792b74417").getBundleURL("bABQ6") + "machine_gun.6169ba6f.svg" + "?" + Date.now();

},{"7e2756792b74417":"lgJ39"}],"5tcXh":[function(require,module,exports) {
module.exports = require("4172878ac81ea1c1").getBundleURL("bABQ6") + "machine_gun_sentry.d44eb520.svg" + "?" + Date.now();

},{"4172878ac81ea1c1":"lgJ39"}],"2SmkN":[function(require,module,exports) {
module.exports = require("5f63586632000f2e").getBundleURL("bABQ6") + "mortar_sentry.b1e7d661.svg" + "?" + Date.now();

},{"5f63586632000f2e":"lgJ39"}],"avRjk":[function(require,module,exports) {
module.exports = require("f87f9c3774a1f61d").getBundleURL("bABQ6") + "orbital_120mm_he_barrage.a87e148c.svg" + "?" + Date.now();

},{"f87f9c3774a1f61d":"lgJ39"}],"btLoz":[function(require,module,exports) {
module.exports = require("d9b62c6567d39972").getBundleURL("bABQ6") + "orbital_380mm_he_barrage.e6ade39b.svg" + "?" + Date.now();

},{"d9b62c6567d39972":"lgJ39"}],"2vfNO":[function(require,module,exports) {
module.exports = require("cde26f3161bb2f5a").getBundleURL("bABQ6") + "orbital_airburst_strike.1bb5fff6.svg" + "?" + Date.now();

},{"cde26f3161bb2f5a":"lgJ39"}],"8VC4E":[function(require,module,exports) {
module.exports = require("2b4d225181f79874").getBundleURL("bABQ6") + "orbital_ems_strike.689318a8.svg" + "?" + Date.now();

},{"2b4d225181f79874":"lgJ39"}],"dJ8to":[function(require,module,exports) {
module.exports = require("30c6b8ac46dfe61e").getBundleURL("bABQ6") + "orbital_gas_strike.5d3dc726.svg" + "?" + Date.now();

},{"30c6b8ac46dfe61e":"lgJ39"}],"aOM4f":[function(require,module,exports) {
module.exports = require("79e9a0cf743fa2c2").getBundleURL("bABQ6") + "orbital_gatling_barrage.247c2df6.svg" + "?" + Date.now();

},{"79e9a0cf743fa2c2":"lgJ39"}],"eo4KP":[function(require,module,exports) {
module.exports = require("934dcbc0a2a9c8bd").getBundleURL("bABQ6") + "orbital_illumination_flare.b2e08d7d.svg" + "?" + Date.now();

},{"934dcbc0a2a9c8bd":"lgJ39"}],"cXSfj":[function(require,module,exports) {
module.exports = require("e271e842fad9ad5f").getBundleURL("bABQ6") + "orbital_laser.a2242f6b.svg" + "?" + Date.now();

},{"e271e842fad9ad5f":"lgJ39"}],"cqENi":[function(require,module,exports) {
module.exports = require("ae1462e00c42f67f").getBundleURL("bABQ6") + "orbital_precision_strike.2cd763e8.svg" + "?" + Date.now();

},{"ae1462e00c42f67f":"lgJ39"}],"lSc0x":[function(require,module,exports) {
module.exports = require("5789aa532707416").getBundleURL("bABQ6") + "orbital_railcannon_strike.bbad08b8.svg" + "?" + Date.now();

},{"5789aa532707416":"lgJ39"}],"8qLNe":[function(require,module,exports) {
module.exports = require("f86a94f38354fee7").getBundleURL("bABQ6") + "orbital_smoke_strike.2497f94f.svg" + "?" + Date.now();

},{"f86a94f38354fee7":"lgJ39"}],"aLnBe":[function(require,module,exports) {
module.exports = require("453dd4ac83f565b9").getBundleURL("bABQ6") + "orbital_walking_barrage.58e48169.svg" + "?" + Date.now();

},{"453dd4ac83f565b9":"lgJ39"}],"82Le0":[function(require,module,exports) {
module.exports = require("d327ea1b81ca4d1").getBundleURL("bABQ6") + "patriot_exosuit.a96b8e0a.svg" + "?" + Date.now();

},{"d327ea1b81ca4d1":"lgJ39"}],"hS1gj":[function(require,module,exports) {
module.exports = require("be672ff09d96b65a").getBundleURL("bABQ6") + "prospecting_drill.a84557da.svg" + "?" + Date.now();

},{"be672ff09d96b65a":"lgJ39"}],"gj8Ul":[function(require,module,exports) {
module.exports = require("4837a8c0236a2ee1").getBundleURL("bABQ6") + "railgun.d1a754ca.svg" + "?" + Date.now();

},{"4837a8c0236a2ee1":"lgJ39"}],"20KN6":[function(require,module,exports) {
module.exports = require("b581db4b4da96af9").getBundleURL("bABQ6") + "recoilless_rifle.64c145d6.svg" + "?" + Date.now();

},{"b581db4b4da96af9":"lgJ39"}],"1D4xD":[function(require,module,exports) {
module.exports = require("70aebbc5d74336e8").getBundleURL("bABQ6") + "reinforce.1455c2ce.svg" + "?" + Date.now();

},{"70aebbc5d74336e8":"lgJ39"}],"7HxDV":[function(require,module,exports) {
module.exports = require("d2026b770a474491").getBundleURL("bABQ6") + "resupply.7a57f72b.svg" + "?" + Date.now();

},{"d2026b770a474491":"lgJ39"}],"iPqPm":[function(require,module,exports) {
module.exports = require("7b37a4e35be17e70").getBundleURL("bABQ6") + "rocket_sentry.5f2590a1.svg" + "?" + Date.now();

},{"7b37a4e35be17e70":"lgJ39"}],"hUbUG":[function(require,module,exports) {
module.exports = require("56ec52e65d21a8aa").getBundleURL("bABQ6") + "seaf_artillery.446fcc19.svg" + "?" + Date.now();

},{"56ec52e65d21a8aa":"lgJ39"}],"bDouT":[function(require,module,exports) {
module.exports = require("36deffec245f0da2").getBundleURL("bABQ6") + "seismic_probe.01fd6a29.svg" + "?" + Date.now();

},{"36deffec245f0da2":"lgJ39"}],"6fpuE":[function(require,module,exports) {
module.exports = require("5402408b04c53ffe").getBundleURL("bABQ6") + "shield_generator_pack.2d10e6f7.svg" + "?" + Date.now();

},{"5402408b04c53ffe":"lgJ39"}],"fZKmk":[function(require,module,exports) {
module.exports = require("158c310a28384094").getBundleURL("bABQ6") + "shield_generator_relay.f1a63f81.svg" + "?" + Date.now();

},{"158c310a28384094":"lgJ39"}],"hu3AW":[function(require,module,exports) {
module.exports = require("1e68634ae0e17cd0").getBundleURL("bABQ6") + "sos_beacon.b4ad7068.svg" + "?" + Date.now();

},{"1e68634ae0e17cd0":"lgJ39"}],"bbT7P":[function(require,module,exports) {
module.exports = require("a3f8e3bf6b1b20d3").getBundleURL("bABQ6") + "spear.bf63e394.svg" + "?" + Date.now();

},{"a3f8e3bf6b1b20d3":"lgJ39"}],"l5nCt":[function(require,module,exports) {
module.exports = require("d3aa7bf324147cc6").getBundleURL("bABQ6") + "sssd_delivery.571c0c83.svg" + "?" + Date.now();

},{"d3aa7bf324147cc6":"lgJ39"}],"1dzVU":[function(require,module,exports) {
module.exports = require("ae0c59b0b314ea49").getBundleURL("bABQ6") + "stalwart.2c2ffd18.svg" + "?" + Date.now();

},{"ae0c59b0b314ea49":"lgJ39"}],"dGjg8":[function(require,module,exports) {
module.exports = require("f9fae2391651431").getBundleURL("bABQ6") + "super_earth_flag.9ae393bb.svg" + "?" + Date.now();

},{"f9fae2391651431":"lgJ39"}],"l6374":[function(require,module,exports) {
module.exports = require("3137ded0111a677e").getBundleURL("bABQ6") + "supply_pack.9b9cea00.svg" + "?" + Date.now();

},{"3137ded0111a677e":"lgJ39"}],"6KKjA":[function(require,module,exports) {
module.exports = require("b319a6401ba6e115").getBundleURL("bABQ6") + "tesla_tower.162ffb94.svg" + "?" + Date.now();

},{"b319a6401ba6e115":"lgJ39"}],"jJKHv":[function(require,module,exports) {
module.exports = require("44259433f8a3b774").getBundleURL("bABQ6") + "upload_data.8c77d63f.svg" + "?" + Date.now();

},{"44259433f8a3b774":"lgJ39"}],"fiQ2m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Carousel", ()=>Carousel);
parcelHelpers.export(exports, "List", ()=>List);
parcelHelpers.export(exports, "CurrentItem", ()=>CurrentItem);
parcelHelpers.export(exports, "Item", ()=>Item);
parcelHelpers.export(exports, "CurrentStratagemTitle", ()=>CurrentStratagemTitle);
var _styledComponents = require("styled-components");
const Carousel = (0, _styledComponents.styled).div`
  display: flex;
  flex-direction: column;

  height: 200px;
`;
const List = (0, _styledComponents.styled).ol`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 16px;
`;
const CurrentItem = (0, _styledComponents.styled).li`
  height: 100%;
  aspect-ratio: 1;

  margin-left: 3px;

  border: 5px solid var(--brand);
  border-bottom: none;
  box-shadow: 0 0 15px 0 var(--brand);
`;
const Item = (0, _styledComponents.styled).li`
  height: 50%;
  aspect-ratio: 1;

  opacity: 0.75;
`;
const CurrentStratagemTitle = (0, _styledComponents.styled).h2`
  width: 100%;

  text-align: center;

  color: #000;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;

  background-color: var(--brand);
  box-shadow: 0 0 30px 0 var(--brand);
`;

},{"styled-components":"1U3k6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4gpON":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _timerComponentDefault.default));
parcelHelpers.export(exports, "timer", ()=>(0, _timerComponent.timer));
var _timerComponent = require("./timer.component");
var _timerComponentDefault = parcelHelpers.interopDefault(_timerComponent);

},{"./timer.component":"5WuiN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5WuiN":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$c52e = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$c52e.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timer", ()=>timer);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _events = require("events");
var _react = require("react");
var _timerStyles = require("./timer.styles");
var _s = $RefreshSig$();
const timer = new (0, _events.EventEmitter)();
const Timer = ({ onDeplete })=>{
    _s();
    const [progress, setProgress] = (0, _react.useState)(100);
    (0, _react.useEffect)(()=>{
        timer.on("decrease", ()=>{
            setProgress((previousProgress)=>Math.max(0, previousProgress - 0.2));
        });
        timer.on("increase", (amount)=>{
            setProgress((previousProgress)=>Math.min(previousProgress + amount, 100));
        });
    }, [
        setProgress
    ]);
    (0, _react.useEffect)(()=>{
        return ()=>{
            timer.removeAllListeners();
        };
    }, []);
    (0, _react.useEffect)(()=>{
        const intervalID = setInterval(()=>timer.emit("decrease"), 16.6);
        return ()=>clearInterval(intervalID);
    }, []);
    (0, _react.useEffect)(()=>{
        if (progress === 0) onDeplete();
    }, [
        progress
    ]);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_timerStyles.Timer, {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_timerStyles.BackgroundTrack, {}, void 0, false, {
                fileName: "src/game/stratagems/timer/timer.component.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(_timerStyles.ProgressTrack, {
                style: {
                    width: `${progress}%`
                }
            }, void 0, false, {
                fileName: "src/game/stratagems/timer/timer.component.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/game/stratagems/timer/timer.component.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, undefined);
};
_s(Timer, "OOMlmHY9b7gj3HmAbetV+OSgQ3w=");
_c = Timer;
exports.default = Timer;
var _c;
$RefreshReg$(_c, "Timer");

  $parcel$ReactRefreshHelpers$c52e.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","events":"1VQLm","react":"21dqq","./timer.styles":"aYUeU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"1VQLm":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var R = typeof Reflect === "object" ? Reflect : null;
var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === "function") ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === "error";
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === "function") ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === "function") // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
    } else if (typeof list !== "function") {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit("removeListener", type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === "function") this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === "function") return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") return emitter.listenerCount(type);
    else return listenerCount.call(emitter, type);
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === "function") return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === "function") emitter.removeListener("error", errorListener);
            resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== "error") addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") eventTargetAgnosticAddListener(emitter, "error", handler, flags);
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === "function") // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

},{}],"aYUeU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Timer", ()=>Timer);
parcelHelpers.export(exports, "BackgroundTrack", ()=>BackgroundTrack);
parcelHelpers.export(exports, "ProgressTrack", ()=>ProgressTrack);
var _styledComponents = require("styled-components");
const Timer = (0, _styledComponents.styled).div`
  position: relative;

  width: 100%;
  height: 24px;

  margin-top: 10%;
`;
const Track = (0, _styledComponents.styled).div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;

  box-shadow: 0 0 10px currentColor;
  background-color: currentColor;
`;
const BackgroundTrack = (0, _styledComponents.styled)(Track)`
  width: 100%;

  color: #bfbfbf;
`;
const ProgressTrack = (0, _styledComponents.styled)(Track)`
  color: var(--brand);

  transition: width 16.6ms;
`;

},{"styled-components":"1U3k6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9jXBJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Container", ()=>Container);
parcelHelpers.export(exports, "Stratagems", ()=>Stratagems);
var _styledComponents = require("styled-components");
const Container = (0, _styledComponents.styled).div`
  display: flex;
  justify-content: center;

  width: 100%;
`;
const Stratagems = (0, _styledComponents.styled).div`
  width: 100%;
  max-width: 900px;

  margin-bottom: 5%;
`;

},{"styled-components":"1U3k6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1KJID","1xC6H"], null, "parcelRequire917c")

//# sourceMappingURL=stratagems.0da4fb8c.js.map
