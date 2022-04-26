var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// socketHandlers/messagingHandler.js
var require_messagingHandler = __commonJS({
  "socketHandlers/messagingHandler.js"(exports, module2) {
    init_react();
    module2.exports = (io4, socket3) => {
      const connection = function() {
        console.log(`user: ${socket3.id} connected`);
      };
      const disconnection = function() {
        console.log(`user ${socket3.id} dis-connected`);
      };
      const emitMessage = function({ userName, msg }) {
        io4.emit("message", { userName, msg });
      };
      const serverMessage = function() {
        io4.emit(`user: ${socket3.id}`);
      };
      socket3.on("connection", connection);
      socket3.on("serverMsg", serverMessage);
      socket3.on("message", emitMessage);
      socket3.on("disconnect", disconnection);
    };
  }
});

// socketHandlers/cardHandlers.js
var require_cardHandlers = __commonJS({
  "socketHandlers/cardHandlers.js"(exports, module2) {
    init_react();
    module2.exports = (io4, socket3) => {
      const emitSquares = function(squareData) {
        io4.emit("newSquares", squareData);
        console.log({ squareData });
      };
      const emitSelected = function(squareData) {
        io4.emit("newSquares", squareData);
        console.log({ squareData });
      };
      socket3.on("setSquares", emitSquares);
    };
  }
});

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/e14/projects/Andrew/express_be/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/utils/session.server.ts
init_react();
var import_bcrypt = __toESM(require("bcrypt"));

// app/utils/db.server.ts
init_react();
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// app/utils/session.server.ts
var import_node = require("@remix-run/node");
async function login({ username, password }) {
  const user = await db.user.findUnique({
    where: {
      username
    }
  });
  if (!user)
    return null;
  const isCorrectPassword = await import_bcrypt.default.compare(password, user.passwordHash);
  if (!isCorrectPassword)
    return null;
  return user;
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("no session secret found");
}
var storage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "AH_Tutoring_Login",
    secure: false,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 60,
    httpOnly: true
  }
});
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function getUserSession(request) {
  return await storage.getSession(request.headers.get("Cookie"));
}
async function getUser(request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string")
    return null;
  try {
    const user = await db.user.findUnique({
      where: { id: userId }
    });
    return user;
  } catch (err) {
    console.log("ERROR LOGIN", err);
    return null;
  }
}
async function logout(request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return (0, import_node.redirect)("/auth/logout", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// app/components/nav/Nav.tsx
init_react();

// app/utils/useToggle.ts
init_react();
var import_react = require("react");
function useToggle(newState = null) {
  const [toggle, setToggle] = (0, import_react.useState)(newState === null ? false : newState);
  const setToggleStatus = (bool) => {
    if (newState) {
      setToggle(newState);
      return;
    }
    if (bool) {
      setToggle(bool);
      return;
    }
    setToggle((prev) => !prev);
  };
  return { toggle, setToggleStatus };
}

// app/components/nav/Nav.tsx
var import_react5 = require("@remix-run/react");

// app/utils/useClickOutside.ts
init_react();
var import_react2 = require("react");
function UseClickOutside(_cb, ...truthyChecks) {
  const domRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (!truthyChecks.every((check) => check === true)) {
      return;
    }
    function outsideClickHandler(event) {
      var _a;
      const target = event.target;
      if (!((_a = domRef.current) == null ? void 0 : _a.contains(target))) {
        _cb();
        return;
      }
    }
    document.addEventListener("mousedown", outsideClickHandler, true);
    return () => {
      document.removeEventListener("mousedown", outsideClickHandler, true);
    };
  }, [_cb, truthyChecks]);
  return domRef;
}
var useClickOutside_default = UseClickOutside;

// app/utils/useKboard.ts
init_react();
var import_react3 = require("react");
function UseKeyBoardNavigation(keyBoardActiveState = null, domRef, _cb) {
  const { toggle: keyboardActive, setToggleStatus: setKeyboardActive } = useToggle(keyBoardActiveState ? keyBoardActiveState : false);
  const [nodeList, setNodeList] = (0, import_react3.useState)(null);
  const [nodeSelector, setNodeSelector] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    console.log("setting the initial State");
    if (domRef.current) {
      console.log("HERE", domRef.current);
      if (nodeList === null) {
        setNodeList(domRef.current.querySelectorAll("a, button"));
      }
      if (nodeList === null || nodeList.length === 0)
        return;
      setNodeSelector({
        prev: nodeList.length - 1,
        current: 0,
        next: 1
      });
    }
  }, [domRef, nodeList]);
  (0, import_react3.useEffect)(() => {
    console.log("running handleKeyPress useEffect", { nodeSelector });
    function handleKeyPress(event) {
      if (keyboardActive) {
        if (nodeList === null || nodeList.length === 0)
          return;
        if (nodeSelector === null)
          return;
        const maxLength = nodeList.length - 1;
        const newPrevId = (nodeSelector == null ? void 0 : nodeSelector.prev) === 0 ? maxLength : (nodeSelector == null ? void 0 : nodeSelector.prev) - 1;
        const newNextId = (nodeSelector == null ? void 0 : nodeSelector.next) === maxLength ? 0 : (nodeSelector == null ? void 0 : nodeSelector.next) + 1;
        const { code } = event;
        switch (true) {
          case code === "Enter": {
            console.log("ENTER PRESSED");
            setKeyboardActive(false);
            if (_cb) {
              _cb();
            }
            break;
          }
          case code === "Escape": {
            console.log("Escape PRESSED");
            setKeyboardActive(false);
            if (_cb) {
              _cb();
            }
            break;
          }
          case code === "Tab":
          case code === "ArrowDown":
          case code === "ArrowRight": {
            console.log("moving down", { code });
            setNodeSelector({
              prev: nodeSelector.current,
              current: nodeSelector.next,
              next: newNextId
            });
            break;
          }
          case (event.shiftKey && code === "Tab"):
          case code === "ArrowUp":
          case code === "ArrowLeft": {
            console.log("moving up", { code });
            setNodeSelector({
              prev: newPrevId,
              current: nodeSelector.prev,
              next: nodeSelector.current
            });
            break;
          }
        }
      }
    }
    document.addEventListener("keydown", handleKeyPress, true);
    return () => {
      document.removeEventListener("keydown", handleKeyPress, true);
    };
  }, [keyboardActive, setKeyboardActive, nodeList, _cb, nodeSelector]);
  (0, import_react3.useEffect)(() => {
    console.log("inside the focus useState");
    if (nodeList !== null && nodeSelector !== null && keyboardActive) {
      nodeList[nodeSelector.current].focus();
      console.log("inside the focus useState IF IF IF IF IF");
    }
  }, [nodeSelector, keyboardActive, nodeList]);
  return { keyboardActive, setKeyboardActive };
}
var useKboard_default = UseKeyBoardNavigation;

// app/components/skiplink/skiplink.tsx
init_react();
var import_react4 = __toESM(require("react"));
var SkipLink = (props) => {
  const onClick = (event) => {
    event.preventDefault();
    const container = document.querySelector(props.skipTo);
    if (container) {
      container.tabIndex = -1;
      container.focus();
      setTimeout(() => container.removeAttribute("tabindex"), 1e3);
    }
  };
  return import_react4.default.cloneElement(props.children, {
    onClick,
    className: props.className
  });
};
SkipLink.defaultProps = {
  className: "skip-link",
  skipTo: "main:first-of-type"
};
var skiplink_default = SkipLink;

// app/components/nav/Nav.tsx
var import_react6 = __toESM(require("react"));
function Nav({ user }) {
  return /* @__PURE__ */ import_react6.default.createElement("header", null, /* @__PURE__ */ import_react6.default.createElement(skiplink_default, {
    skipTo: "main",
    className: "skip-link"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    type: "button"
  }, "Skip Navigation Links")), /* @__PURE__ */ import_react6.default.createElement("nav", {
    className: "nav"
  }, /* @__PURE__ */ import_react6.default.createElement(import_react5.NavLink, {
    className: "header__logo",
    to: "/",
    prefetch: "intent"
  }, "Home"), /* @__PURE__ */ import_react6.default.createElement("ul", null, /* @__PURE__ */ import_react6.default.createElement("li", null, /* @__PURE__ */ import_react6.default.createElement(import_react5.NavLink, {
    className: "nav_link btn row",
    to: "/about",
    prefetch: "intent"
  }, "About")), /* @__PURE__ */ import_react6.default.createElement("li", null, /* @__PURE__ */ import_react6.default.createElement(import_react5.NavLink, {
    className: "nav_link btn row",
    to: "/rules",
    prefetch: "intent"
  }, "Classroom Rules")), user ? /* @__PURE__ */ import_react6.default.createElement(UserNav, {
    user
  }) : /* @__PURE__ */ import_react6.default.createElement("li", null, /* @__PURE__ */ import_react6.default.createElement(import_react5.NavLink, {
    className: "btn row",
    to: "/auth/login",
    prefetch: "intent"
  }, "Login")))));
}
function UserNav({ user }) {
  function closeDropdown() {
  }
  return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement("li", null, /* @__PURE__ */ import_react6.default.createElement(import_react5.NavLink, {
    className: "nav_link btn row",
    to: "/homework",
    prefetch: "intent"
  }, "Homework")), /* @__PURE__ */ import_react6.default.createElement("li", null, /* @__PURE__ */ import_react6.default.createElement(import_react5.NavLink, {
    className: "nav_link btn row",
    to: "/tutoring",
    prefetch: "intent"
  }, "Tutoring")), /* @__PURE__ */ import_react6.default.createElement(DropDown, null), /* @__PURE__ */ import_react6.default.createElement("li", null));
}
function DropDown() {
  const { toggle: menuOpen, setToggleStatus: setMenuOpen } = useToggle(false);
  const optionsRef = (0, import_react6.useRef)(null);
  const navRef = useClickOutside_default(closeMenu, menuOpen);
  const { keyboardActive, setKeyboardActive } = useKboard_default(false, optionsRef, setMenuOpen);
  (0, import_react6.useEffect)(() => {
    if (!menuOpen && keyboardActive) {
      console.warn("manually turning off Keyboard");
      setKeyboardActive(false);
    }
  }, [menuOpen, keyboardActive, setKeyboardActive]);
  function openMenu(event) {
    var _a;
    console.log("inside openMenu", { event });
    const nodeList = (_a = optionsRef.current) == null ? void 0 : _a.querySelectorAll("a, button");
    setMenuOpen(true);
    if ((event == null ? void 0 : event.type) === "keydown" && event.key === "Enter" && nodeList) {
      setKeyboardActive(true);
      return;
    }
  }
  function closeMenu() {
    setMenuOpen(false);
  }
  function selectMenuItem() {
    closeMenu();
  }
  return /* @__PURE__ */ import_react6.default.createElement("li", null, /* @__PURE__ */ import_react6.default.createElement("div", {
    ref: navRef,
    className: "nav-dropdown__container"
  }, /* @__PURE__ */ import_react6.default.createElement("button", {
    className: "nav-dropdown__trigger",
    onClick: openMenu,
    onKeyDown: openMenu,
    "aria-controls": "User-Settings",
    "aria-expanded": menuOpen ? "true" : "false"
  }, "menuOpen"), /* @__PURE__ */ import_react6.default.createElement("ul", {
    className: "nav-dropdown__content",
    "data-open": menuOpen ? "true" : "false",
    ref: optionsRef,
    id: "User-Settings"
  }, /* @__PURE__ */ import_react6.default.createElement("li", {
    className: "nav-dropdown__item"
  }, /* @__PURE__ */ import_react6.default.createElement(import_react5.NavLink, {
    tabIndex: -1,
    onClick: selectMenuItem,
    onKeyDown: selectMenuItem,
    to: "/auth/user/profile",
    id: "testid"
  }, "Profile")), /* @__PURE__ */ import_react6.default.createElement("li", {
    className: "nav-dropdown__item"
  }, /* @__PURE__ */ import_react6.default.createElement(import_react5.NavLink, {
    tabIndex: -1,
    onClick: selectMenuItem,
    onKeyDown: selectMenuItem,
    to: "/auth/user/settings"
  }, "Settings")), /* @__PURE__ */ import_react6.default.createElement("li", {
    className: "nav-dropdown__item"
  }, /* @__PURE__ */ import_react6.default.createElement(import_react5.NavLink, {
    tabIndex: -1,
    onClick: selectMenuItem,
    onKeyDown: selectMenuItem,
    to: "/auth/user/schedule"
  }, "Schedule")))));
}

// app/styles/global.css
var global_default = "/build/_assets/global-YXDXKTKO.css";

// route:/home/e14/projects/Andrew/express_be/app/root.tsx
var links = () => {
  return [
    {
      rel: "icon",
      href: "/LOGO256.png",
      type: "image/png"
    },
    {
      rel: "stylesheet",
      href: global_default
    }
  ];
};
var meta = () => {
  const charset = "utf-8";
  const title = "AH Tutoring";
  const viewport = "width=device-width,initial-scale=1";
  const description = "A tutoring App";
  const keywords = "tutoring, tutor, maths, linguistics";
  return {
    charset,
    title,
    viewport,
    description,
    keywords
  };
};
var loader = async ({ request }) => {
  const user = await getUser(request);
  const data = {
    user
  };
  return data;
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)));
}
function ErrorBoundary({ error }) {
  console.log("HERE HAPPENED", { error });
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, "ERROR boundary in ROOT!"), /* @__PURE__ */ React.createElement("pre", null, error.message)));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), /* @__PURE__ */ React.createElement("title", null, title ? title : "Autha Test")), /* @__PURE__ */ React.createElement("body", null, children, true ? /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null) : null));
}
function Layout({ children }) {
  const { user } = (0, import_remix2.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, user ? /* @__PURE__ */ React.createElement(Nav, {
    user
  }) : /* @__PURE__ */ React.createElement(Nav, null), /* @__PURE__ */ React.createElement("main", null, children), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("p", {
    style: { textAlign: "center" }
  }, "Copyright \xA9 AH tutoring 2022")));
}

// route:/home/e14/projects/Andrew/express_be/app/routes/tutoring/cards/index.tsx
var cards_exports = {};
__export(cards_exports, {
  default: () => CardsIndex
});
init_react();

// app/components/cards/Cards.tsx
init_react();
var import_react7 = __toESM(require("react"));
var import_socket = __toESM(require("socket.io-client"));
var socket = (0, import_socket.default)("http://localhost:4000/");
function CardsParent() {
  const [cardData, setCardData] = (0, import_react7.useState)({
    one: "",
    two: "",
    three: "",
    four: ""
  });
  (0, import_react7.useEffect)(() => {
    socket.on("newCards", (data) => {
      setCardData(data);
    });
  }, [cardData]);
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(Cards, {
    cardData
  }), /* @__PURE__ */ import_react7.default.createElement(SetCards, {
    cardData,
    setCardData
  }));
}
function SetCards({ setCardData, cardData }) {
  const formRef = (0, import_react7.useRef)(null);
  const { one, two, three, four } = cardData;
  function handleChange(event) {
    console.log({ event });
    setCardData((prevData) => Object.assign({}, prevData, { [event.target.name]: event.target.value }));
  }
  function emitCards() {
    socket.emit("setCards", cardData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("form event => :", event);
    emitCards();
  }
  return /* @__PURE__ */ import_react7.default.createElement("form", {
    ref: formRef,
    className: "input-wrapper",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ import_react7.default.createElement("label", {
    htmlFor: "one"
  }, "one"), /* @__PURE__ */ import_react7.default.createElement("input", {
    type: "text",
    name: "one",
    id: "one",
    value: one,
    onChange: (e) => handleChange(e)
  }), /* @__PURE__ */ import_react7.default.createElement("label", {
    htmlFor: "two"
  }, "two"), /* @__PURE__ */ import_react7.default.createElement("input", {
    type: "text",
    name: "two",
    id: "two",
    value: two,
    onChange: (e) => handleChange(e)
  }), /* @__PURE__ */ import_react7.default.createElement("label", {
    htmlFor: "three"
  }, "three"), /* @__PURE__ */ import_react7.default.createElement("input", {
    type: "text",
    name: "three",
    id: "three",
    value: three,
    onChange: (e) => handleChange(e)
  }), /* @__PURE__ */ import_react7.default.createElement("label", {
    htmlFor: "four"
  }, "four"), /* @__PURE__ */ import_react7.default.createElement("input", {
    type: "text",
    name: "four",
    id: "four",
    value: four,
    onChange: (e) => handleChange(e)
  }), /* @__PURE__ */ import_react7.default.createElement("button", {
    type: "submit"
  }, "submit"));
}
function Cards({ cardData }) {
  const { one, two, three, four } = cardData;
  return /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "Cards__container"
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "Card"
  }, one && one), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "Card"
  }, two && two), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "Card"
  }, three && three), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "Card"
  }, four && four));
}

// route:/home/e14/projects/Andrew/express_be/app/routes/tutoring/cards/index.tsx
function CardsIndex() {
  return /* @__PURE__ */ React.createElement(CardsParent, null);
}

// route:/home/e14/projects/Andrew/express_be/app/routes/auth/user/schedule.tsx
var schedule_exports = {};
__export(schedule_exports, {
  default: () => Schedule
});
init_react();
function Schedule() {
  return /* @__PURE__ */ React.createElement("h1", null, "Schedule Page");
}

// route:/home/e14/projects/Andrew/express_be/app/routes/auth/user/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => Settings
});
init_react();
function Settings() {
  return /* @__PURE__ */ React.createElement("h1", null, "Settings Page");
}

// route:/home/e14/projects/Andrew/express_be/app/routes/auth/user/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => Profile
});
init_react();
function Profile() {
  return /* @__PURE__ */ React.createElement("h1", null, "Profile Page");
}

// route:/home/e14/projects/Andrew/express_be/app/routes/homework/index.tsx
var homework_exports = {};
__export(homework_exports, {
  default: () => Homework,
  loader: () => loader2
});
init_react();
var import_node2 = require("@remix-run/node");
var loader2 = async ({ request }) => {
  const user = await getUser(request);
  if (!user) {
    return (0, import_node2.redirect)("/");
  }
  const data = { user };
  return data;
};
function Homework() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Rules page"));
}

// route:/home/e14/projects/Andrew/express_be/app/routes/tutoring/index.tsx
var tutoring_exports = {};
__export(tutoring_exports, {
  default: () => tutoring,
  links: () => links2
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/components/chat/chat.tsx
init_react();
var import_react9 = require("react");
var import_socket2 = __toESM(require("socket.io-client"));
var import_react_error_boundary = require("react-error-boundary");

// app/components/errors/ErrorFallback.tsx
init_react();
function ErrorFallback() {
  return /* @__PURE__ */ React.createElement("div", {
    role: "alert"
  }, /* @__PURE__ */ React.createElement("h2", null, "Something Went Wrong!"));
}

// app/components/chat/chatMessage.tsx
init_react();
function ChatMessage({
  userName,
  text
}) {
  return /* @__PURE__ */ React.createElement("p", {
    className: "chat__message"
  }, /* @__PURE__ */ React.createElement("span", {
    style: {
      textTransform: "uppercase",
      fontSize: "0.8rem",
      fontWeight: "bold"
    }
  }, userName), ":", " ", /* @__PURE__ */ React.createElement("span", {
    style: {
      textTransform: "uppercase",
      color: "rgb(0 0 0 / 80%)",
      fontSize: "1.1rem"
    }
  }, text));
}

// app/components/chat/chatInputs.tsx
init_react();
var import_react8 = __toESM(require("react"));
function ChatInputs({
  emitMessage,
  setMessage,
  message,
  userName = ""
}) {
  const messageRef = (0, import_react8.useRef)(null);
  function handleSubmit(event) {
    event.preventDefault();
    if (userName === null)
      throw new Error("no user name");
    if (messageRef.current === null || messageRef.current.value.trim() === "")
      return;
    emitMessage();
  }
  function handleTextChange() {
    if (messageRef.current === null || messageRef.current.value.trim() === "")
      return;
    if (userName === null)
      return;
    console.log("text is changed");
    setMessage({
      msg: messageRef.current.value,
      userName
    });
  }
  return /* @__PURE__ */ import_react8.default.createElement("form", {
    action: "",
    onSubmit: handleSubmit,
    className: "chat__form"
  }, /* @__PURE__ */ import_react8.default.createElement("label", {
    htmlFor: "message",
    className: "sr-only"
  }, "message"), /* @__PURE__ */ import_react8.default.createElement("input", {
    placeholder: ` message ${String.fromCharCode(10147)}`,
    type: "text",
    value: message.msg,
    onChange: handleTextChange,
    name: "message",
    ref: messageRef
  }));
}

// app/components/chat/chat.tsx
var socket2 = (0, import_socket2.default)("http://localhost:4000/");
function Chat() {
  const [userName, setUserName] = (0, import_react9.useState)("");
  const [message, setMessage] = (0, import_react9.useState)({
    userName: "",
    msg: ""
  });
  const [chat, setChat] = (0, import_react9.useState)([]);
  const [serverMsg, setServerMsg] = (0, import_react9.useState)(null);
  (0, import_react9.useEffect)(() => {
    setMessage((message2) => Object.assign({}, message2, { userName }));
  }, [userName]);
  (0, import_react9.useEffect)(() => {
    socket2.on("serverMsg", (msg) => setServerMsg(msg));
    socket2.on("message", ({ userName: userName2, msg }) => {
      setChat((prev) => prev == null ? void 0 : prev.concat({ userName: userName2, msg }));
      setMessage((message2) => Object.assign({}, message2, { msg: "" }));
    });
  }, []);
  (0, import_react9.useEffect)(() => {
    const chats = document == null ? void 0 : document.querySelectorAll(".chat__message");
    const chatCount = chats.length;
    const lastChat = chats[chatCount - 1];
    console.log({ lastChat });
  }, [chat]);
  function emitMessage() {
    const { userName: userName2, msg } = message;
    socket2.emit("message", { userName: userName2, msg });
  }
  function errorHandler(error, errorInfo) {
    console.log("LOGGING", { error }, { errorInfo });
  }
  return /* @__PURE__ */ React.createElement(import_react_error_boundary.ErrorBoundary, {
    FallbackComponent: ErrorFallback,
    onError: (error, errorInfo) => errorHandler(error, errorInfo)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "chat__wrapper"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "chat__title"
  }, "Chat"), /* @__PURE__ */ React.createElement("div", {
    className: "chat__content__wrapper"
  }, chat && chat.map(({ userName: userName2, msg }, idx) => /* @__PURE__ */ React.createElement(ChatMessage, {
    key: `chat${idx}`,
    userName: userName2,
    text: msg
  }))), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username"
  }, "userName: "), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    value: userName,
    onChange: (e) => setUserName(e.target.value),
    name: "username"
  }), /* @__PURE__ */ React.createElement(ChatInputs, {
    emitMessage,
    setMessage,
    message,
    userName
  }), serverMsg && serverMsg));
}

// app/styles/components/chat/chat.css
var chat_default = "/build/_assets/chat-2XOV6BTC.css";

// app/styles/pages/tutoring/tutoring.css
var tutoring_default = "/build/_assets/tutoring-K2ZQVKMW.css";

// route:/home/e14/projects/Andrew/express_be/app/routes/tutoring/index.tsx
var links2 = () => {
  return [
    {
      rel: "stylesheet",
      href: chat_default
    },
    {
      rel: "stylesheet",
      href: tutoring_default
    }
  ];
};
function tutoring() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "tutor-wrapper"
  }, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(Chat, null));
}

// route:/home/e14/projects/Andrew/express_be/app/routes/about/index.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
init_react();
function About() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "About page"));
}

// route:/home/e14/projects/Andrew/express_be/app/routes/admin/index.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => AdminIndex,
  loader: () => loader3
});
init_react();
var import_remix5 = __toESM(require_remix());

// app/components/adminNav/AdminNav.tsx
init_react();
var import_remix4 = __toESM(require_remix());
function AdminNav() {
  return /* @__PURE__ */ React.createElement(import_remix4.NavLink, {
    to: "users"
  }, "Users");
}

// route:/home/e14/projects/Andrew/express_be/app/routes/admin/index.tsx
var import_node3 = require("@remix-run/node");
var loader3 = async ({ request }) => {
  const user = await getUser(request);
  if (!user || !user.isAdmin) {
    return (0, import_node3.redirect)("/");
  }
  const data = { user };
  return data;
};
function AdminIndex() {
  return /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("h1", null, "Admin index"), /* @__PURE__ */ React.createElement(import_remix5.Outlet, null));
}
function AdminLayout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(AdminNav, null), /* @__PURE__ */ React.createElement("article", null, children));
}

// route:/home/e14/projects/Andrew/express_be/app/routes/admin/users.tsx
var users_exports = {};
__export(users_exports, {
  default: () => Users
});
init_react();
function Users() {
  return /* @__PURE__ */ React.createElement("h2", null, "Users page");
}

// route:/home/e14/projects/Andrew/express_be/app/routes/auth/logout.ts
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader4
});
init_react();
var import_node4 = require("@remix-run/node");
var action = async ({ request }) => {
  return logout(request);
};
var loader4 = async () => {
  return (0, import_node4.redirect)("/");
};

// route:/home/e14/projects/Andrew/express_be/app/routes/rules/index.tsx
var rules_exports = {};
__export(rules_exports, {
  default: () => Rules
});
init_react();
function Rules() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Rules page"));
}

// route:/home/e14/projects/Andrew/express_be/app/routes/auth/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => login_default
});
init_react();
var import_react10 = require("@remix-run/react");

// app/utils/helpers.ts
init_react();
var import_node5 = require("@remix-run/node");
function validateInput(name, input, length = 1) {
  if (typeof input !== "string" || input.length < length) {
    return `${name} should be at least ${length} characters long`;
  }
}
function badRequest(data) {
  return (0, import_node5.json)(data, { status: 400 });
}

// route:/home/e14/projects/Andrew/express_be/app/routes/auth/login.tsx
var action2 = async ({ request }) => {
  var _a, _b;
  const form = await request.formData();
  const username = (_a = form.get("username")) == null ? void 0 : _a.toString();
  const password = (_b = form.get("password")) == null ? void 0 : _b.toString();
  if (!username || !password) {
    return badRequest({
      fieldErrors: {
        username: "username is required",
        password: "password is required"
      }
    });
  }
  const fields = { username, password };
  const fieldErrors = {
    username: validateInput("username", username, 3),
    password: validateInput("password", password, 6)
  };
  if (Object.values(fieldErrors).some(Boolean)) {
    console.log("<= fieldErrors => ", fieldErrors);
    return badRequest({ fieldErrors, fields });
  }
  const user = await login({ username, password });
  if (!user)
    return badRequest({
      fields,
      fieldErrors: { username: "invalid credentials" }
    });
  return createUserSession(user.id, "/");
};
function Login() {
  var _a, _b, _c, _d;
  const actionData = (0, import_react10.useActionData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Login"), /* @__PURE__ */ React.createElement("form", {
    method: "POST"
  }, /* @__PURE__ */ React.createElement("fieldset", {
    className: "loginform"
  }, /* @__PURE__ */ React.createElement("legend", null, "Login"), /* @__PURE__ */ React.createElement("div", {
    className: "loginform__content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "loginform__content__wrapper"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "username",
    id: "username",
    autoComplete: "username",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.username
  }), ((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.username) && /* @__PURE__ */ React.createElement("div", {
    role: "region",
    "aria-live": "assertive"
  }, /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, actionData == null ? void 0 : actionData.fieldErrors.username))), /* @__PURE__ */ React.createElement("div", {
    className: "loginform__content__wrapper"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    type: "password",
    name: "password",
    id: "password",
    autoComplete: "current-password",
    defaultValue: (_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.password
  }), ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.password) && /* @__PURE__ */ React.createElement("div", {
    role: "region",
    "aria-live": "assertive"
  }, /* @__PURE__ */ React.createElement("p", {
    style: { color: "red" }
  }, actionData == null ? void 0 : actionData.fieldErrors.password))), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn"
  }, "Submit")))));
}
var login_default = Login;

// route:/home/e14/projects/Andrew/express_be/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid-2"
  }, /* @__PURE__ */ React.createElement("h1", null, "Home index"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur, nihil corrupti obcaecati ducimus nulla iste eligendi distinctio autem veniam."), /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur, nihil corrupti obcaecati ducimus nulla iste eligendi distinctio autem veniam.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur, nihil corrupti obcaecati ducimus nulla iste eligendi distinctio autem veniam."), /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur, nihil corrupti obcaecati ducimus nulla iste eligendi distinctio autem veniam.")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "6443d941", "entry": { "module": "/build/entry.client-VGHYFJ3R.js", "imports": ["/build/_shared/chunk-XOIW62JR.js", "/build/_shared/chunk-PNMMVODL.js", "/build/_shared/chunk-IXEDXJLF.js", "/build/_shared/chunk-M7MU33YW.js", "/build/_shared/chunk-VQYBAUSQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-JGC3RIYZ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/about/index": { "id": "routes/about/index", "parentId": "root", "path": "about", "index": true, "caseSensitive": void 0, "module": "/build/routes/about/index-5YGBSETS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/index": { "id": "routes/admin/index", "parentId": "root", "path": "admin", "index": true, "caseSensitive": void 0, "module": "/build/routes/admin/index-BEUOM5K7.js", "imports": ["/build/_shared/chunk-MDEEUM6B.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/users": { "id": "routes/admin/users", "parentId": "root", "path": "admin/users", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/users-QY7CUJUU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-CHIH2IHM.js", "imports": ["/build/_shared/chunk-MDEEUM6B.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/logout": { "id": "routes/auth/logout", "parentId": "root", "path": "auth/logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/logout-GD23FAN2.js", "imports": ["/build/_shared/chunk-MDEEUM6B.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/user/profile": { "id": "routes/auth/user/profile", "parentId": "root", "path": "auth/user/profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/user/profile-52FYH52E.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/user/schedule": { "id": "routes/auth/user/schedule", "parentId": "root", "path": "auth/user/schedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/user/schedule-REL2MOQF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/user/settings": { "id": "routes/auth/user/settings", "parentId": "root", "path": "auth/user/settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/user/settings-OFDLNWPY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/homework/index": { "id": "routes/homework/index", "parentId": "root", "path": "homework", "index": true, "caseSensitive": void 0, "module": "/build/routes/homework/index-2I5KG7AL.js", "imports": ["/build/_shared/chunk-MDEEUM6B.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-OYIRXECT.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/rules/index": { "id": "routes/rules/index", "parentId": "root", "path": "rules", "index": true, "caseSensitive": void 0, "module": "/build/routes/rules/index-QYZ4XBW3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tutoring/cards/index": { "id": "routes/tutoring/cards/index", "parentId": "root", "path": "tutoring/cards", "index": true, "caseSensitive": void 0, "module": "/build/routes/tutoring/cards/index-GA5GK7CM.js", "imports": ["/build/_shared/chunk-ZRHKRSEH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tutoring/index": { "id": "routes/tutoring/index", "parentId": "root", "path": "tutoring", "index": true, "caseSensitive": void 0, "module": "/build/routes/tutoring/index-O3BQPTOX.js", "imports": ["/build/_shared/chunk-ZRHKRSEH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-6443D941.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/tutoring/cards/index": {
    id: "routes/tutoring/cards/index",
    parentId: "root",
    path: "tutoring/cards",
    index: true,
    caseSensitive: void 0,
    module: cards_exports
  },
  "routes/auth/user/schedule": {
    id: "routes/auth/user/schedule",
    parentId: "root",
    path: "auth/user/schedule",
    index: void 0,
    caseSensitive: void 0,
    module: schedule_exports
  },
  "routes/auth/user/settings": {
    id: "routes/auth/user/settings",
    parentId: "root",
    path: "auth/user/settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/auth/user/profile": {
    id: "routes/auth/user/profile",
    parentId: "root",
    path: "auth/user/profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/homework/index": {
    id: "routes/homework/index",
    parentId: "root",
    path: "homework",
    index: true,
    caseSensitive: void 0,
    module: homework_exports
  },
  "routes/tutoring/index": {
    id: "routes/tutoring/index",
    parentId: "root",
    path: "tutoring",
    index: true,
    caseSensitive: void 0,
    module: tutoring_exports
  },
  "routes/about/index": {
    id: "routes/about/index",
    parentId: "root",
    path: "about",
    index: true,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "root",
    path: "admin",
    index: true,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/admin/users": {
    id: "routes/admin/users",
    parentId: "root",
    path: "admin/users",
    index: void 0,
    caseSensitive: void 0,
    module: users_exports
  },
  "routes/auth/logout": {
    id: "routes/auth/logout",
    parentId: "root",
    path: "auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/rules/index": {
    id: "routes/rules/index",
    parentId: "root",
    path: "rules",
    index: true,
    caseSensitive: void 0,
    module: rules_exports
  },
  "routes/auth/login": {
    id: "routes/auth/login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var MessageHandlers = require_messagingHandler();
var CardHandlers = require_cardHandlers();
var app = (0, import_express.default)();
var PORT = process.env.PORT || 4e3;
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public", { maxAge: "1h" }));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var http = require("http").createServer(app);
var io3 = require("socket.io")(http);
var registerHandlers = (socket3) => {
  MessageHandlers(io3, socket3);
  CardHandlers(io3, socket3);
};
io3.on("connection", registerHandlers);
http.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
/**
 * @remix-run/node v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zb2NrZXRIYW5kbGVycy9tZXNzYWdpbmdIYW5kbGVyLmpzIiwgIi4uL3NvY2tldEhhbmRsZXJzL2NhcmRIYW5kbGVycy5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb290LnRzeCIsICIuLi9hcHAvdXRpbHMvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2RiLnNlcnZlci50cyIsICIuLi9hcHAvY29tcG9uZW50cy9uYXYvTmF2LnRzeCIsICIuLi9hcHAvdXRpbHMvdXNlVG9nZ2xlLnRzIiwgIi4uL2FwcC91dGlscy91c2VDbGlja091dHNpZGUudHMiLCAiLi4vYXBwL3V0aWxzL3VzZUtib2FyZC50cyIsICIuLi9hcHAvY29tcG9uZW50cy9za2lwbGluay9za2lwbGluay50c3giLCAicm91dGU6L2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvdHV0b3JpbmcvY2FyZHMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2NhcmRzL0NhcmRzLnRzeCIsICJyb3V0ZTovaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9hdXRoL3VzZXIvc2NoZWR1bGUudHN4IiwgInJvdXRlOi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL2F1dGgvdXNlci9zZXR0aW5ncy50c3giLCAicm91dGU6L2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvYXV0aC91c2VyL3Byb2ZpbGUudHN4IiwgInJvdXRlOi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL2hvbWV3b3JrL2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy90dXRvcmluZy9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9lcnJvcnMvRXJyb3JGYWxsYmFjay50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0TWVzc2FnZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY2hhdC9jaGF0SW5wdXRzLnRzeCIsICJyb3V0ZTovaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9hYm91dC9pbmRleC50c3giLCAicm91dGU6L2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvYWRtaW4vaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2FkbWluTmF2L0FkbWluTmF2LnRzeCIsICJyb3V0ZTovaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9hZG1pbi91c2Vycy50c3giLCAicm91dGU6L2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvYXV0aC9sb2dvdXQudHMiLCAicm91dGU6L2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvcnVsZXMvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL2F1dGgvbG9naW4udHN4IiwgIi4uL2FwcC91dGlscy9oZWxwZXJzLnRzIiwgInJvdXRlOi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjMuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjMuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMy4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJtb2R1bGUuZXhwb3J0cyA9IChpbywgc29ja2V0KSA9PiB7XG4gIGNvbnN0IGNvbm5lY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coYHVzZXI6ICR7c29ja2V0LmlkfSBjb25uZWN0ZWRgKTtcbiAgfTtcbiAgY29uc3QgZGlzY29ubmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhgdXNlciAke3NvY2tldC5pZH0gZGlzLWNvbm5lY3RlZGApO1xuICB9O1xuXG4gIGNvbnN0IGVtaXRNZXNzYWdlID0gZnVuY3Rpb24gKHsgdXNlck5hbWUsIG1zZyB9KSB7XG4gICAgaW8uZW1pdCgnbWVzc2FnZScsIHsgdXNlck5hbWUsIG1zZyB9KTtcbiAgfTtcblxuICBjb25zdCBzZXJ2ZXJNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlvLmVtaXQoYHVzZXI6ICR7c29ja2V0LmlkfWApO1xuICB9O1xuXG4gIHNvY2tldC5vbignY29ubmVjdGlvbicsIGNvbm5lY3Rpb24pO1xuICBzb2NrZXQub24oJ3NlcnZlck1zZycsIHNlcnZlck1lc3NhZ2UpO1xuICBzb2NrZXQub24oJ21lc3NhZ2UnLCBlbWl0TWVzc2FnZSk7XG4gIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGRpc2Nvbm5lY3Rpb24pO1xufTtcbiIsICJtb2R1bGUuZXhwb3J0cyA9IChpbywgc29ja2V0KSA9PiB7XG4gIGNvbnN0IGVtaXRTcXVhcmVzID0gZnVuY3Rpb24gKHNxdWFyZURhdGEpIHtcbiAgICBpby5lbWl0KCduZXdTcXVhcmVzJywgc3F1YXJlRGF0YSk7XG4gICAgY29uc29sZS5sb2coeyBzcXVhcmVEYXRhIH0pO1xuICB9O1xuXG4gIGNvbnN0IGVtaXRTZWxlY3RlZCA9IGZ1bmN0aW9uIChzcXVhcmVEYXRhKSB7XG4gICAgaW8uZW1pdCgnbmV3U3F1YXJlcycsIHNxdWFyZURhdGEpO1xuICAgIGNvbnNvbGUubG9nKHsgc3F1YXJlRGF0YSB9KTtcbiAgfTtcblxuICBzb2NrZXQub24oJ3NldFNxdWFyZXMnLCBlbWl0U3F1YXJlcyk7XG59O1xuIiwgImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnQHJlbWl4LXJ1bi9leHByZXNzJztcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gJ0ByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCc7XG4vLyBpbXBvcnQgeyBlcnJvckxvZ2dpbmcsIGdlbmVyYWxMb2dnaW5nIH0gZnJvbSAnLi9hcHAvbG9nZ2luZy9pbmRleCc7XG5jb25zdCBNZXNzYWdlSGFuZGxlcnMgPSByZXF1aXJlKCcuL3NvY2tldEhhbmRsZXJzL21lc3NhZ2luZ0hhbmRsZXInKTtcbmNvbnN0IENhcmRIYW5kbGVycyA9IHJlcXVpcmUoJy4vc29ja2V0SGFuZGxlcnMvY2FyZEhhbmRsZXJzJyk7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDAwO1xuXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxuYXBwLmRpc2FibGUoJ3gtcG93ZXJlZC1ieScpO1xuXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cbmFwcC51c2UoXG4gICcvYnVpbGQnLFxuICBleHByZXNzLnN0YXRpYygncHVibGljL2J1aWxkJywgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogJzF5JyB9KSxcbik7XG5cbi8vIEV2ZXJ5dGhpbmcgZWxzZSAobGlrZSBmYXZpY29uLmljbykgaXMgY2FjaGVkIGZvciBhbiBob3VyLiBZb3UgbWF5IHdhbnQgdG8gYmVcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycsIHsgbWF4QWdlOiAnMWgnIH0pKTtcblxuLy8gTE9HR0lOR1xuLy8gYXBwLnVzZShnZW5lcmFsTG9nZ2luZyk7XG4vLyBhcHAudXNlKGVycm9yTG9nZ2luZyk7XG5cbmFwcC5hbGwoXG4gICcqJyxcbiAgY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgfSksXG4pO1xuXG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpLmNyZWF0ZVNlcnZlcihhcHApO1xuY29uc3QgaW8gPSByZXF1aXJlKCdzb2NrZXQuaW8nKShodHRwKTtcblxuY29uc3QgcmVnaXN0ZXJIYW5kbGVycyA9IChzb2NrZXQpID0+IHtcbiAgTWVzc2FnZUhhbmRsZXJzKGlvLCBzb2NrZXQpO1xuICBDYXJkSGFuZGxlcnMoaW8sIHNvY2tldCk7XG59O1xuXG5pby5vbignY29ubmVjdGlvbicsIHJlZ2lzdGVySGFuZGxlcnMpO1xuXG5odHRwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke1BPUlR9YCk7XG59KTtcblxuLy8gYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG4vLyB9KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy90dXRvcmluZy9jYXJkcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvYXV0aC91c2VyL3NjaGVkdWxlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9hdXRoL3VzZXIvc2V0dGluZ3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL2F1dGgvdXNlci9wcm9maWxlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9ob21ld29yay9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvdHV0b3JpbmcvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL2Fib3V0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9hZG1pbi9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvYWRtaW4vdXNlcnMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9hdXRoL2xvZ291dC50c1wiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiL2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvcnVsZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9hdXRoL2xvZ2luLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiL2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy90dXRvcmluZy9jYXJkcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdHV0b3JpbmcvY2FyZHMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidHV0b3JpbmcvY2FyZHNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL3VzZXIvc2NoZWR1bGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvdXNlci9zY2hlZHVsZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoL3VzZXIvc2NoZWR1bGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvdXNlci9zZXR0aW5nc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC91c2VyL3NldHRpbmdzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvdXNlci9zZXR0aW5nc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC91c2VyL3Byb2ZpbGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvdXNlci9wcm9maWxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvdXNlci9wcm9maWxlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9ob21ld29yay9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaG9tZXdvcmsvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiaG9tZXdvcmtcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy90dXRvcmluZy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdHV0b3JpbmcvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwidHV0b3JpbmdcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9hYm91dC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWJvdXQvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWJvdXRcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9hZG1pbi9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRtaW4vaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRtaW5cIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9hZG1pbi91c2Vyc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRtaW4vdXNlcnNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRtaW4vdXNlcnNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvbG9nb3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoL2xvZ291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoL2xvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL3J1bGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ydWxlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJydWxlc1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoL2xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvbG9naW5cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEzXG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3MsIExpdmVSZWxvYWQsIE1ldGEsIE91dGxldCwgU2NyaXB0cywgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3Qvcm91dGVNb2R1bGVzJztcbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICcuL3V0aWxzL3Nlc3Npb24uc2VydmVyJztcbmltcG9ydCBOYXYgZnJvbSAnfi9jb21wb25lbnRzL25hdi9OYXYnO1xuaW1wb3J0IGdsb2JhbCBmcm9tICd+L3N0eWxlcy9nbG9iYWwuY3NzJztcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6ICdpY29uJyxcbiAgICAgIGhyZWY6ICcvTE9HTzI1Ni5wbmcnLFxuICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6IGdsb2JhbCxcbiAgICB9LFxuXG4gICAgLy8ge1xuICAgIC8vICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAvLyAgIGhyZWY6IFwiL2ltYWdlcy9iYW5uZXIuanBnXCIsXG4gICAgLy8gICBhczogXCJpbWFnZVwiLFxuICAgIC8vIH0sXG4gIF07XG59O1xuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgLy8gVE9ETzogdXBkYXRlIHRoZXNlXG4gIGNvbnN0IGNoYXJzZXQgPSAndXRmLTgnO1xuICBjb25zdCB0aXRsZSA9ICdBSCBUdXRvcmluZyc7XG4gIGNvbnN0IHZpZXdwb3J0ID0gJ3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9ICdBIHR1dG9yaW5nIEFwcCc7XG4gIGNvbnN0IGtleXdvcmRzID0gJ3R1dG9yaW5nLCB0dXRvciwgbWF0aHMsIGxpbmd1aXN0aWNzJztcblxuICByZXR1cm4ge1xuICAgIGNoYXJzZXQsXG4gICAgdGl0bGUsXG4gICAgdmlld3BvcnQsXG4gICAgZGVzY3JpcHRpb24sXG4gICAga2V5d29yZHMsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKHsgcmVxdWVzdCB9OiB7IHJlcXVlc3Q6IFJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICB1c2VyLFxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICAvLyBUT0RPOiB1cGRhdGUgdGhpc1xuICAvLyAxLiBhcHBlbmQgZm9yIExvZ2dpbmdcbiAgLy8gMi4gbWFrZSBtZWFuaW5nZnVsIHBhZ2VcbiAgY29uc29sZS5sb2coJ0hFUkUgSEFQUEVORUQnLCB7IGVycm9yIH0pO1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5FUlJPUiBib3VuZGFyeSBpbiBST09UITwvaDE+XG4gICAgICAgIDxwcmU+e2Vycm9yLm1lc3NhZ2V9PC9wcmU+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxudHlwZSBkb2N1bWVudFByb3BzID0ge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdGl0bGU/OiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBEb2N1bWVudCh7IGNoaWxkcmVuLCB0aXRsZSB9OiBkb2N1bWVudFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIDx0aXRsZT57dGl0bGUgPyB0aXRsZSA6ICdBdXRoYSBUZXN0J308L3RpdGxlPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gPExpdmVSZWxvYWQgLz4gOiBudWxsfVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cblxudHlwZSBsYXlvdXRQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogbGF5b3V0UHJvcHMpIHtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAge3VzZXIgPyA8TmF2IHVzZXI9e3VzZXJ9IC8+IDogPE5hdiAvPn1cbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkNvcHlyaWdodCAmY29weTsgQUggdHV0b3JpbmcgMjAyMjwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0JztcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi9kYi5zZXJ2ZXInO1xuaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIHJlZGlyZWN0IH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB0eXBlIHsgbG9naW5GaWVsZHMgfSBmcm9tICd+L3R5cGVzJztcblxuLy8gbG9naW4gYW4gZXhpc3RpbmcgdXNlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IGxvZ2luRmllbGRzKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICB1c2VybmFtZSxcbiAgICB9LFxuICB9KTtcbiAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkSGFzaCk7XG4gIGlmICghaXNDb3JyZWN0UGFzc3dvcmQpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiB1c2VyO1xufVxuXG4vLyByZWdpc3RlciBhIG5ldyB1c2VyXG4vLyBUT0RPOiBhZGQgYSB1c2VyIGNoZWNrIHRvIG1ha2Ugc3VyZSBsb2dnZWQgaW4gdXNlciBpcyBhIFMuVS5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBsb2dpbkZpZWxkcykge1xuICBjb25zdCBwYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuICBjb25zdCBkYXRhID0ge1xuICAgIGVtYWlsOiAndGJhJyxcbiAgICB1c2VybmFtZSxcbiAgICBwYXNzd29yZEhhc2gsXG4gICAgZmlyc3RuYW1lOiAndGJhJyxcbiAgICBsYXN0bmFtZTogJ3RiYScsXG4gIH07XG4gIHJldHVybiBkYi51c2VyLmNyZWF0ZSh7XG4gICAgZGF0YSxcbiAgfSk7XG59XG5cbi8vIGdldCBzZXNzaW9uIHNlY3JldFxuY29uc3Qgc2Vzc2lvblNlY3JldCA9IHByb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVUO1xuaWYgKCFzZXNzaW9uU2VjcmV0KSB7XG4gIHRocm93IG5ldyBFcnJvcignbm8gc2Vzc2lvbiBzZWNyZXQgZm91bmQnKTtcbn1cblxuLy8gY3JlYXRlIHNlc3Npb24gc3RvcmFnZVxuY29uc3Qgc3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogJ0FIX1R1dG9yaW5nX0xvZ2luJyxcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgc2VjcmV0czogW3Nlc3Npb25TZWNyZXRdLFxuICAgIHNhbWVTaXRlOiAnbGF4JyxcbiAgICBwYXRoOiAnLycsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA2MCxcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG4vLyBjcmVhdGUgc2Vzc2lvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXJJZDogc3RyaW5nLCByZWRpcmVjdFRvOiBzdHJpbmcpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbigpO1xuICBzZXNzaW9uLnNldCgndXNlcklkJywgdXNlcklkKTtcblxuICByZXR1cm4gcmVkaXJlY3QocmVkaXJlY3RUbywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgc3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufVxuLy8gZ2V0IHVzZXIgc2Vzc2lvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJTZXNzaW9uKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgcmV0dXJuIGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSk7XG59XG5cbi8vIGdldCB1c2VyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoJ3VzZXJJZCcpO1xuXG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbDtcblxuICB0cnkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9LFxuICAgIH0pO1xuICAgIHJldHVybiB1c2VyO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBUT0RPOiBkbyBzb21ldGhpbmcgbWVhbmluZ2Z1bGwgaGVyZVxuICAgIGNvbnNvbGUubG9nKCdFUlJPUiBMT0dJTicsIGVycik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gbG9nb3V0IHVzZXIgYW5kIGRlc3Ryb3kgc2Vzc2lvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpO1xuXG4gIHJldHVybiByZWRpcmVjdCgnL2F1dGgvbG9nb3V0Jywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgc3RvcmFnZS5kZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmxldCBkYjogUHJpc21hQ2xpZW50O1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICBkYi4kY29ubmVjdCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYikge1xuICAgIGdsb2JhbC5fX2RiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgIGdsb2JhbC5fX2RiLiRjb25uZWN0KCk7XG4gIH1cbiAgZGIgPSBnbG9iYWwuX19kYjtcbn1cblxuZXhwb3J0IHsgZGIgfTtcbiIsICJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tICd+L3V0aWxzL3VzZVRvZ2dsZSc7XG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5pbXBvcnQgVXNlQ2xpY2tPdXRzaWRlIGZyb20gJ34vdXRpbHMvdXNlQ2xpY2tPdXRzaWRlJztcbmltcG9ydCBVc2VLZXlCb2FyZE5hdmlnYXRpb24gZnJvbSAnfi91dGlscy91c2VLYm9hcmQnO1xuXG4vLyBpbXBvcnQgKiBhcyBEcm9wZG93bk1lbnUgZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnUnO1xuaW1wb3J0IFNraXBMaW5rIGZyb20gJ34vY29tcG9uZW50cy9za2lwbGluay9za2lwbGluayc7XG5pbXBvcnQgUmVhY3QsIHtcbiAgS2V5Ym9hcmRFdmVudEhhbmRsZXIsXG4gIE1vdXNlRXZlbnRIYW5kbGVyLFxuICBSZWZPYmplY3QsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VFZmZlY3QsXG4gIHVzZU1lbW8sXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KHsgdXNlciB9OiB7IHVzZXI/OiBVc2VyIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPFNraXBMaW5rIHNraXBUbz1cIm1haW5cIiBjbGFzc05hbWU9XCJza2lwLWxpbmtcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+U2tpcCBOYXZpZ2F0aW9uIExpbmtzPC9idXR0b24+XG4gICAgICA8L1NraXBMaW5rPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwiaGVhZGVyX19sb2dvXCIgdG89XCIvXCIgcHJlZmV0Y2g9XCJpbnRlbnRcIj5cbiAgICAgICAgICBIb21lXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdl9saW5rIGJ0biByb3dcIiB0bz1cIi9hYm91dFwiIHByZWZldGNoPVwiaW50ZW50XCI+XG4gICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXZfbGluayBidG4gcm93XCIgdG89XCIvcnVsZXNcIiBwcmVmZXRjaD1cImludGVudFwiPlxuICAgICAgICAgICAgICBDbGFzc3Jvb20gUnVsZXNcbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgPFVzZXJOYXYgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJidG4gcm93XCIgdG89XCIvYXV0aC9sb2dpblwiIHByZWZldGNoPVwiaW50ZW50XCI+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFVzZXJOYXYoeyB1c2VyIH06IHsgdXNlcjogVXNlciB9KSB7XG4gIGZ1bmN0aW9uIGNsb3NlRHJvcGRvd24oKSB7fVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdl9saW5rIGJ0biByb3dcIiB0bz1cIi9ob21ld29ya1wiIHByZWZldGNoPVwiaW50ZW50XCI+XG4gICAgICAgICAgSG9tZXdvcmtcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2X2xpbmsgYnRuIHJvd1wiIHRvPVwiL3R1dG9yaW5nXCIgcHJlZmV0Y2g9XCJpbnRlbnRcIj5cbiAgICAgICAgICBUdXRvcmluZ1xuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L2xpPlxuICAgICAgPERyb3BEb3duIC8+XG4gICAgICA8bGk+XG4gICAgICAgIHsvKiA8RHJvcGRvd25NZW51LlJvb3Q+XG4gICAgICAgICAgPERyb3Bkb3duTWVudS5UcmlnZ2VyIGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9fYnRuIG5hdi1kcm9wZG93bl9fdHJpZ2dlclwiPlxuICAgICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgICA8L0Ryb3Bkb3duTWVudS5UcmlnZ2VyPlxuXG4gICAgICAgICAgPERyb3Bkb3duTWVudS5Db250ZW50XG4gICAgICAgICAgICBsb29wXG4gICAgICAgICAgICBzaWRlT2Zmc2V0PXszfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWRyb3Bkb3duX19jb250ZW50XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51Lkl0ZW0gY2xhc3NOYW1lPVwibmF2LWRyb3Bkb3duX19pdGVtXCI+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2F1dGgvdXNlci9wcm9maWxlXCIgb25DbGljaz17Y2xvc2VEcm9wZG93bn0+XG4gICAgICAgICAgICAgICAgUHJvZmlsZVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudS5JdGVtPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudS5JdGVtIGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9faXRlbVwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9hdXRoL3VzZXIvc2V0dGluZ3NcIiBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufT5cbiAgICAgICAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudS5JdGVtPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudS5JdGVtIGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9faXRlbVwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9hdXRoL3VzZXIvc2NoZWR1bGVcIiBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufT5cbiAgICAgICAgICAgICAgICBTY2hlZHVsZVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudS5JdGVtPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudS5TZXBhcmF0b3IgLz5cbiAgICAgICAgICAgIHt1c2VyLmlzQWRtaW4gJiYgPEFkbWluTmF2IC8+fVxuICAgICAgICAgICAgPERyb3Bkb3duTWVudS5TZXBhcmF0b3IgY2xhc3NOYW1lPVwibmF2LWRyb3Bkb3duX19zZXBlcmF0b3JcIiAvPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudS5JdGVtIGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9faXRlbSBsb2dvdXRcIj5cbiAgICAgICAgICAgICAgPExvZ291dCAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnUuSXRlbT5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnUuQXJyb3cgY2xhc3NOYW1lPVwibmF2LWRyb3Bkb3duX19hcnJvd1wiIC8+XG4gICAgICAgICAgPC9Ecm9wZG93bk1lbnUuQ29udGVudD5cbiAgICAgICAgPC9Ecm9wZG93bk1lbnUuUm9vdD4gKi99XG4gICAgICA8L2xpPlxuICAgIDwvPlxuICApO1xufVxuXG4vLyBmdW5jdGlvbiBBZG1pbk5hdigpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8RHJvcGRvd25NZW51Lkl0ZW0gY2xhc3NOYW1lPVwibmF2LWRyb3Bkb3duX19pdGVtXCI+XG4vLyAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXZfbGluayBidG4gcm93XCIgdG89XCIvYWRtaW5cIiBwcmVmZXRjaD1cImludGVudFwiPlxuLy8gICAgICAgICBBZG1pblxuLy8gICAgICAgPC9OYXZMaW5rPlxuLy8gICAgIDwvRHJvcGRvd25NZW51Lkl0ZW0+XG4vLyAgICk7XG4vLyB9XG5cbmZ1bmN0aW9uIExvZ291dCgpIHtcbiAgZnVuY3Rpb24gaGFuZGxlUHJvcG9nYXRpb24oZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ3dlZWVlJywgeyBldmVudCB9KTtcbiAgICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gYWN0aW9uPVwiL2F1dGgvbG9nb3V0XCIgbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwibmF2LWRyb3Bkb3duX19idG5cIlxuICAgICAgICBvbktleURvd249e2hhbmRsZVByb3BvZ2F0aW9ufVxuICAgICAgICBvbktleVVwPXtoYW5kbGVQcm9wb2dhdGlvbn1cbiAgICAgICAgb25DbGljaz17aGFuZGxlUHJvcG9nYXRpb259XG4gICAgICA+XG4gICAgICAgIExvZ291dFxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG5mdW5jdGlvbiBEcm9wRG93bigpIHtcbiAgY29uc3QgeyB0b2dnbGU6IG1lbnVPcGVuLCBzZXRUb2dnbGVTdGF0dXM6IHNldE1lbnVPcGVuIH0gPSB1c2VUb2dnbGUoZmFsc2UpO1xuICBjb25zdCBvcHRpb25zUmVmID0gdXNlUmVmPEhUTUxVTGlzdEVsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgLy8gRXhpdCB3aGVuIGNsaWNraW5nIG91dHNpZGUgb2YgdGhlIE1lbnVcbiAgY29uc3QgbmF2UmVmID0gVXNlQ2xpY2tPdXRzaWRlKFxuICAgIGNsb3NlTWVudSxcbiAgICBtZW51T3BlbixcbiAgKSBhcyBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuICBjb25zdCB7IGtleWJvYXJkQWN0aXZlLCBzZXRLZXlib2FyZEFjdGl2ZSB9ID0gVXNlS2V5Qm9hcmROYXZpZ2F0aW9uKFxuICAgIGZhbHNlLFxuICAgIG9wdGlvbnNSZWYsXG4gICAgc2V0TWVudU9wZW4sXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW1lbnVPcGVuICYmIGtleWJvYXJkQWN0aXZlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ21hbnVhbGx5IHR1cm5pbmcgb2ZmIEtleWJvYXJkJyk7XG4gICAgICBzZXRLZXlib2FyZEFjdGl2ZShmYWxzZSk7XG4gICAgfVxuICB9LCBbbWVudU9wZW4sIGtleWJvYXJkQWN0aXZlLCBzZXRLZXlib2FyZEFjdGl2ZV0pO1xuXG4gIGZ1bmN0aW9uIG9wZW5NZW51KGV2ZW50PzogUmVhY3QuU3ludGhldGljRXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnaW5zaWRlIG9wZW5NZW51JywgeyBldmVudCB9KTtcblxuICAgIGNvbnN0IG5vZGVMaXN0ID0gb3B0aW9uc1JlZi5jdXJyZW50Py5xdWVyeVNlbGVjdG9yQWxsKCdhLCBidXR0b24nKTtcblxuICAgIHNldE1lbnVPcGVuKHRydWUpO1xuXG4gICAgaWYgKGV2ZW50Py50eXBlID09PSAna2V5ZG93bicgJiYgZXZlbnQua2V5ID09PSAnRW50ZXInICYmIG5vZGVMaXN0KSB7XG4gICAgICBzZXRLZXlib2FyZEFjdGl2ZSh0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG4gICAgc2V0TWVudU9wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0TWVudUl0ZW0oKSB7XG4gICAgY2xvc2VNZW51KCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxsaT5cbiAgICAgIDxkaXYgcmVmPXtuYXZSZWZ9IGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9fY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtZHJvcGRvd25fX3RyaWdnZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9e29wZW5NZW51fVxuICAgICAgICAgIG9uS2V5RG93bj17b3Blbk1lbnV9XG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIlVzZXItU2V0dGluZ3NcIlxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e21lbnVPcGVuID8gJ3RydWUnIDogJ2ZhbHNlJ31cbiAgICAgICAgPlxuICAgICAgICAgIG1lbnVPcGVuXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8dWxcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtZHJvcGRvd25fX2NvbnRlbnRcIlxuICAgICAgICAgIGRhdGEtb3Blbj17bWVudU9wZW4gPyAndHJ1ZScgOiAnZmFsc2UnfVxuICAgICAgICAgIHJlZj17b3B0aW9uc1JlZn1cbiAgICAgICAgICBpZD1cIlVzZXItU2V0dGluZ3NcIlxuICAgICAgICA+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9faXRlbVwiPlxuICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3RNZW51SXRlbX1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXtzZWxlY3RNZW51SXRlbX1cbiAgICAgICAgICAgICAgdG89XCIvYXV0aC91c2VyL3Byb2ZpbGVcIlxuICAgICAgICAgICAgICBpZD1cInRlc3RpZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFByb2ZpbGVcbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtZHJvcGRvd25fX2l0ZW1cIj5cbiAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgICAgb25DbGljaz17c2VsZWN0TWVudUl0ZW19XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17c2VsZWN0TWVudUl0ZW19XG4gICAgICAgICAgICAgIHRvPVwiL2F1dGgvdXNlci9zZXR0aW5nc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWRyb3Bkb3duX19pdGVtXCI+XG4gICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3NlbGVjdE1lbnVJdGVtfVxuICAgICAgICAgICAgICBvbktleURvd249e3NlbGVjdE1lbnVJdGVtfVxuICAgICAgICAgICAgICB0bz1cIi9hdXRoL3VzZXIvc2NoZWR1bGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTY2hlZHVsZVxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9faXRlbSBsb2dvdXRcIj5cbiAgICAgICAgICAgIDxMb2dvdXQgIHRhYkluZGV4PXstMX0gLz5cbiAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8vIC8qKlxuLy8gICogQHBhcmFtIHtib29sZWFufSBuZXdTdGF0ZSBkZWZhdWx0IGlzIEZBTFNFLCBhY2NlcHRzIG5ldyBib29sZWFuXG4vLyAgKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlVG9nZ2xlKG5ld1N0YXRlOiBudWxsIHwgYm9vbGVhbiA9IG51bGwpIHtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKG5ld1N0YXRlID09PSBudWxsID8gZmFsc2UgOiBuZXdTdGF0ZSk7XG5cbiAgY29uc3Qgc2V0VG9nZ2xlU3RhdHVzID0gKGJvb2w/OiBib29sZWFuKSA9PiB7XG4gICAgaWYgKG5ld1N0YXRlKSB7XG4gICAgICBzZXRUb2dnbGUobmV3U3RhdGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYm9vbCkge1xuICAgICAgc2V0VG9nZ2xlKGJvb2wpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUb2dnbGUoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICByZXR1cm4geyB0b2dnbGUsIHNldFRvZ2dsZVN0YXR1cyB9O1xufVxuXG5leHBvcnQgeyB1c2VUb2dnbGUgfTtcbiIsICJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gVXNlQ2xpY2tPdXRzaWRlKF9jYjogRnVuY3Rpb24sIC4uLnRydXRoeUNoZWNrczogQm9vbGVhbltdKSB7XG4gIGNvbnN0IGRvbVJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF0cnV0aHlDaGVja3MuZXZlcnkoKGNoZWNrKSA9PiBjaGVjayA9PT0gdHJ1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvdXRzaWRlQ2xpY2tIYW5kbGVyKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgIGlmICghZG9tUmVmLmN1cnJlbnQ/LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgICAgX2NiKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvdXRzaWRlQ2xpY2tIYW5kbGVyLCB0cnVlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvdXRzaWRlQ2xpY2tIYW5kbGVyLCB0cnVlKTtcbiAgICB9O1xuICB9LCBbX2NiLCB0cnV0aHlDaGVja3NdKTtcblxuICByZXR1cm4gZG9tUmVmO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VDbGlja091dHNpZGU7XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSAnLi91c2VUb2dnbGUnO1xuXG50eXBlIE5vZGVPcHRpb25zVHlwZSA9IHtcbiAgcHJldjogbnVtYmVyO1xuICBjdXJyZW50OiBudW1iZXI7XG4gIG5leHQ6IG51bWJlcjtcbn07XG5cbmZ1bmN0aW9uIFVzZUtleUJvYXJkTmF2aWdhdGlvbihcbiAga2V5Qm9hcmRBY3RpdmVTdGF0ZTogbnVsbCB8IGJvb2xlYW4gPSBudWxsLFxuICBkb21SZWY6IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8SFRNTEVsZW1lbnQgfCBudWxsPixcbiAgX2NiPzogRnVuY3Rpb24sXG4pIHtcbiAgLy8gZGVidWdnZXI7XG5cbiAgY29uc3QgeyB0b2dnbGU6IGtleWJvYXJkQWN0aXZlLCBzZXRUb2dnbGVTdGF0dXM6IHNldEtleWJvYXJkQWN0aXZlIH0gPVxuICAgIHVzZVRvZ2dsZShrZXlCb2FyZEFjdGl2ZVN0YXRlID8ga2V5Qm9hcmRBY3RpdmVTdGF0ZSA6IGZhbHNlKTtcblxuICBjb25zdCBbbm9kZUxpc3QsIHNldE5vZGVMaXN0XSA9IHVzZVN0YXRlPE5vZGVMaXN0T2Y8RWxlbWVudD4gfCBudWxsPihudWxsKTtcbiAgY29uc3QgW25vZGVTZWxlY3Rvciwgc2V0Tm9kZVNlbGVjdG9yXSA9IHVzZVN0YXRlPE5vZGVPcHRpb25zVHlwZSB8IG51bGw+KFxuICAgIG51bGwsXG4gICk7XG5cbiAgLy8gc2V0cyB0aGUgaW5pdGlhbCBzdGF0ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIHRoZSBpbml0aWFsIFN0YXRlJyk7XG5cbiAgICBpZiAoZG9tUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdIRVJFJywgZG9tUmVmLmN1cnJlbnQpO1xuXG4gICAgICBpZiAobm9kZUxpc3QgPT09IG51bGwpIHtcbiAgICAgICAgc2V0Tm9kZUxpc3QoZG9tUmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnYSwgYnV0dG9uJykpO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZUxpc3QgPT09IG51bGwgfHwgbm9kZUxpc3QubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgIHNldE5vZGVTZWxlY3Rvcih7XG4gICAgICAgIHByZXY6IG5vZGVMaXN0Lmxlbmd0aCAtIDEsXG4gICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgIG5leHQ6IDEsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtkb21SZWYsIG5vZGVMaXN0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncnVubmluZyBoYW5kbGVLZXlQcmVzcyB1c2VFZmZlY3QnLCB7IG5vZGVTZWxlY3RvciB9KTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50OiBnbG9iYWxUaGlzLktleWJvYXJkRXZlbnQpIHtcbiAgICAgIGlmIChrZXlib2FyZEFjdGl2ZSkge1xuICAgICAgICBpZiAobm9kZUxpc3QgPT09IG51bGwgfHwgbm9kZUxpc3QubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgIGlmIChub2RlU2VsZWN0b3IgPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gbm9kZUxpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgbmV3UHJldklkID1cbiAgICAgICAgICBub2RlU2VsZWN0b3I/LnByZXYgPT09IDAgPyBtYXhMZW5ndGggOiBub2RlU2VsZWN0b3I/LnByZXYgLSAxO1xuICAgICAgICBjb25zdCBuZXdOZXh0SWQgPVxuICAgICAgICAgIG5vZGVTZWxlY3Rvcj8ubmV4dCA9PT0gbWF4TGVuZ3RoID8gMCA6IG5vZGVTZWxlY3Rvcj8ubmV4dCArIDE7XG5cbiAgICAgICAgY29uc3QgeyBjb2RlIH0gPSBldmVudDtcblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICBjYXNlIGNvZGUgPT09ICdFbnRlcic6IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFTlRFUiBQUkVTU0VEJyk7XG4gICAgICAgICAgICBzZXRLZXlib2FyZEFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICBpZiAoX2NiKSB7XG4gICAgICAgICAgICAgIF9jYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgY29kZSA9PT0gJ0VzY2FwZSc6IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFc2NhcGUgUFJFU1NFRCcpO1xuICAgICAgICAgICAgc2V0S2V5Ym9hcmRBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKF9jYikge1xuICAgICAgICAgICAgICBfY2IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIGNvZGUgPT09ICdUYWInOlxuICAgICAgICAgIGNhc2UgY29kZSA9PT0gJ0Fycm93RG93bic6XG4gICAgICAgICAgY2FzZSBjb2RlID09PSAnQXJyb3dSaWdodCc6IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb3ZpbmcgZG93bicsIHsgY29kZSB9KTtcblxuICAgICAgICAgICAgc2V0Tm9kZVNlbGVjdG9yKHtcbiAgICAgICAgICAgICAgcHJldjogbm9kZVNlbGVjdG9yLmN1cnJlbnQsXG4gICAgICAgICAgICAgIGN1cnJlbnQ6IG5vZGVTZWxlY3Rvci5uZXh0LFxuICAgICAgICAgICAgICBuZXh0OiBuZXdOZXh0SWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgZXZlbnQuc2hpZnRLZXkgJiYgY29kZSA9PT0gJ1RhYic6XG4gICAgICAgICAgY2FzZSBjb2RlID09PSAnQXJyb3dVcCc6XG4gICAgICAgICAgY2FzZSBjb2RlID09PSAnQXJyb3dMZWZ0Jzoge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdmluZyB1cCcsIHsgY29kZSB9KTtcblxuICAgICAgICAgICAgc2V0Tm9kZVNlbGVjdG9yKHtcbiAgICAgICAgICAgICAgcHJldjogbmV3UHJldklkLFxuICAgICAgICAgICAgICBjdXJyZW50OiBub2RlU2VsZWN0b3IucHJldixcbiAgICAgICAgICAgICAgbmV4dDogbm9kZVNlbGVjdG9yLmN1cnJlbnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcywgdHJ1ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleVByZXNzLCB0cnVlKTtcbiAgICB9O1xuICB9LCBba2V5Ym9hcmRBY3RpdmUsIHNldEtleWJvYXJkQWN0aXZlLCBub2RlTGlzdCwgX2NiLCBub2RlU2VsZWN0b3JdKTtcblxuICAvLyBDaGFuZ2UgZm9jdXMgd2hlbiB0aGUgbGlzdCBzdGF0ZSBjaGFuZ2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2luc2lkZSB0aGUgZm9jdXMgdXNlU3RhdGUnKTtcblxuICAgIGlmIChub2RlTGlzdCAhPT0gbnVsbCAmJiBub2RlU2VsZWN0b3IgIT09IG51bGwgJiYga2V5Ym9hcmRBY3RpdmUpIHtcbiAgICAgIChub2RlTGlzdFtub2RlU2VsZWN0b3IuY3VycmVudF0gYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG4gICAgICBjb25zb2xlLmxvZygnaW5zaWRlIHRoZSBmb2N1cyB1c2VTdGF0ZSBJRiBJRiBJRiBJRiBJRicpO1xuICAgIH1cbiAgfSwgW25vZGVTZWxlY3Rvciwga2V5Ym9hcmRBY3RpdmUsIG5vZGVMaXN0XSk7XG5cbiAgcmV0dXJuIHsga2V5Ym9hcmRBY3RpdmUsIHNldEtleWJvYXJkQWN0aXZlIH07XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFVzZUtleUJvYXJkTmF2aWdhdGlvbjtcbmV4cG9ydCBkZWZhdWx0IFVzZUtleUJvYXJkTmF2aWdhdGlvbjtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBTdHlsZXMgYXJlIGtlcHQgaW5zaWRlIHRoZSBoZWFkZXIuc2Nzc1xuXG5pbnRlcmZhY2UgU2tpcExpbmtQcm9wZXJ0aWVzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50O1xuICBza2lwVG86IHN0cmluZztcbn1cblxuY29uc3QgU2tpcExpbms6IFJlYWN0LkZDPFNraXBMaW5rUHJvcGVydGllcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgb25DbGljayA9IChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb3BzLnNraXBUbyk7XG5cbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICBjb250YWluZXIudGFiSW5kZXggPSAtMTtcbiAgICAgIGNvbnRhaW5lci5mb2N1cygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMDAwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChwcm9wcy5jaGlsZHJlbiwge1xuICAgIG9uQ2xpY2ssXG4gICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsXG4gIH0pO1xufTtcblxuU2tpcExpbmsuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICdza2lwLWxpbmsnLFxuICBza2lwVG86ICdtYWluOmZpcnN0LW9mLXR5cGUnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpcExpbms7XG4iLCAiaW1wb3J0IENhcmRzIGZyb20gJ34vY29tcG9uZW50cy9jYXJkcy9DYXJkcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRzSW5kZXgoKSB7XG4gIHJldHVybiA8Q2FyZHMgLz47XG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcblxudHlwZSBTZXRDYXJkRGF0YSA9IFJlYWN0LkRpc3BhdGNoPFxuICBSZWFjdC5TZXRTdGF0ZUFjdGlvbjx7XG4gICAgb25lOiBzdHJpbmc7XG4gICAgdHdvOiBzdHJpbmc7XG4gICAgdGhyZWU6IHN0cmluZztcbiAgICBmb3VyOiBzdHJpbmc7XG4gIH0+XG4+O1xudHlwZSBDYXJkRGF0YSA9IHtcbiAgb25lOiBzdHJpbmc7XG4gIHR3bzogc3RyaW5nO1xuICB0aHJlZTogc3RyaW5nO1xuICBmb3VyOiBzdHJpbmc7XG59O1xuXG5jb25zdCBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDo0MDAwLycpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkc1BhcmVudCgpIHtcbiAgY29uc3QgW2NhcmREYXRhLCBzZXRDYXJkRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgb25lOiAnJyxcbiAgICB0d286ICcnLFxuICAgIHRocmVlOiAnJyxcbiAgICBmb3VyOiAnJyxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQub24oJ25ld0NhcmRzJywgKGRhdGEpID0+IHtcbiAgICAgIHNldENhcmREYXRhKGRhdGEpO1xuICAgIH0pO1xuICB9LCBbY2FyZERhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2FyZHMgY2FyZERhdGE9e2NhcmREYXRhfSAvPlxuICAgICAgPFNldENhcmRzIGNhcmREYXRhPXtjYXJkRGF0YX0gc2V0Q2FyZERhdGE9e3NldENhcmREYXRhfSAvPlxuICAgIDwvPlxuICApO1xufVxuXG50eXBlIFByb3BzID0ge1xuICBzZXRDYXJkRGF0YTogU2V0Q2FyZERhdGE7XG4gIGNhcmREYXRhOiBDYXJkRGF0YTtcbn07XG5cbi8vIFRPRE86IHB1dCB0aGlzIGJlaGluZCBhbiBBVVRIIHdhbGxcblxuZnVuY3Rpb24gU2V0Q2FyZHMoeyBzZXRDYXJkRGF0YSwgY2FyZERhdGEgfTogUHJvcHMpIHtcbiAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB7IG9uZSwgdHdvLCB0aHJlZSwgZm91ciB9ID0gY2FyZERhdGE7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pikge1xuICAgIGNvbnNvbGUubG9nKHsgZXZlbnQgfSk7XG5cbiAgICBzZXRDYXJkRGF0YSgocHJldkRhdGEpID0+XG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBwcmV2RGF0YSwgeyBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSksXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXRDYXJkcygpIHtcbiAgICBzb2NrZXQuZW1pdCgnc2V0Q2FyZHMnLCBjYXJkRGF0YSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJ2Zvcm0gZXZlbnQgPT4gOicsIGV2ZW50KTtcbiAgICBlbWl0Q2FyZHMoKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxmb3JtIHJlZj17Zm9ybVJlZn0gY2xhc3NOYW1lPVwiaW5wdXQtd3JhcHBlclwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvbmVcIj5vbmU8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cIm9uZVwiXG4gICAgICAgIGlkPVwib25lXCJcbiAgICAgICAgdmFsdWU9e29uZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0d29cIj50d288L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInR3b1wiXG4gICAgICAgIGlkPVwidHdvXCJcbiAgICAgICAgdmFsdWU9e3R3b31cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aHJlZVwiPnRocmVlPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJ0aHJlZVwiXG4gICAgICAgIGlkPVwidGhyZWVcIlxuICAgICAgICB2YWx1ZT17dGhyZWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZm91clwiPmZvdXI8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImZvdXJcIlxuICAgICAgICBpZD1cImZvdXJcIlxuICAgICAgICB2YWx1ZT17Zm91cn1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+c3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuXG5mdW5jdGlvbiBDYXJkcyh7IGNhcmREYXRhIH06IHsgY2FyZERhdGE6IENhcmREYXRhIH0pIHtcbiAgY29uc3QgeyBvbmUsIHR3bywgdGhyZWUsIGZvdXIgfSA9IGNhcmREYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDYXJkc19fY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhcmRcIj57b25lICYmIG9uZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FyZFwiPnt0d28gJiYgdHdvfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDYXJkXCI+e3RocmVlICYmIHRocmVlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDYXJkXCI+e2ZvdXIgJiYgZm91cn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY2hlZHVsZSgpIHtcbiAgcmV0dXJuIDxoMT5TY2hlZHVsZSBQYWdlPC9oMT47XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3MoKSB7XG4gIHJldHVybiA8aDE+U2V0dGluZ3MgUGFnZTwvaDE+O1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIHJldHVybiA8aDE+UHJvZmlsZSBQYWdlPC9oMT47XG59XG4iLCAiaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIocmVxdWVzdCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgLy8gVE9ETzogYWRkIGxvZ2dpbmcgd2hlbiB0aGlzIGhhcHBlbnNcbiAgICByZXR1cm4gcmVkaXJlY3QoJy8nKTtcbiAgfVxuICAvLyBUT0RPOiBmaW5kIGhvbWV3b3JrIHRoYXQgaGFzIHRoZSBzYW1lIHVzZXJJRCBhcyB1c2VyLmlkXG4gIGNvbnN0IGRhdGEgPSB7IHVzZXIgfTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21ld29yaygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlJ1bGVzIHBhZ2U8L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBDaGF0IGZyb20gJ34vY29tcG9uZW50cy9jaGF0L2NoYXQnO1xuaW1wb3J0IHsgTGlua3NGdW5jdGlvbiB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3Qvcm91dGVNb2R1bGVzJztcbmltcG9ydCBDaGF0U3R5bGVzIGZyb20gJ34vc3R5bGVzL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNzcyc7XG5pbXBvcnQgVHV0b3JQYWdlU3R5bGVzIGZyb20gJ34vc3R5bGVzL3BhZ2VzL3R1dG9yaW5nL3R1dG9yaW5nLmNzcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6IENoYXRTdHlsZXMsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6IFR1dG9yUGFnZVN0eWxlcyxcbiAgICB9LFxuICBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHV0b3JpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0dXRvci13cmFwcGVyXCI+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgICA8Q2hhdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyBFcnJvckJvdW5kYXJ5IH0gZnJvbSAncmVhY3QtZXJyb3ItYm91bmRhcnknO1xuaW1wb3J0IEVycm9yRmFsbGJhY2sgZnJvbSAnfi9jb21wb25lbnRzL2Vycm9ycy9FcnJvckZhbGxiYWNrJztcbmltcG9ydCBDaGF0TWVzc2FnZSBmcm9tICd+L2NvbXBvbmVudHMvY2hhdC9jaGF0TWVzc2FnZSc7XG5pbXBvcnQgQ2hhdElucHV0cyBmcm9tICd+L2NvbXBvbmVudHMvY2hhdC9jaGF0SW5wdXRzJztcbmltcG9ydCB0eXBlIHsgbWVzc2FnZSwgc2VydmVyTXNnIH0gZnJvbSAnfi90eXBlcyc7XG5cbmNvbnN0IHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXQoKSB7XG4gIC8vIFRPRE8gLSB1cGRhdGUgdGhpcyB0byBnZXQgVVNFUiBmcm9tIGdsb2JhbCBTdGF0ZTtcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGU8bWVzc2FnZT4oe1xuICAgIHVzZXJOYW1lOiAnJyxcbiAgICBtc2c6ICcnLFxuICB9KTtcbiAgY29uc3QgW2NoYXQsIHNldENoYXRdID0gdXNlU3RhdGU8bWVzc2FnZVtdPihbXSk7XG4gIGNvbnN0IFtzZXJ2ZXJNc2csIHNldFNlcnZlck1zZ10gPSB1c2VTdGF0ZTxzZXJ2ZXJNc2cgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1lc3NhZ2UoKG1lc3NhZ2UpID0+IE9iamVjdC5hc3NpZ24oe30sIG1lc3NhZ2UsIHsgdXNlck5hbWU6IHVzZXJOYW1lIH0pKTtcbiAgfSwgW3VzZXJOYW1lXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQub24oJ3NlcnZlck1zZycsIChtc2cpID0+IHNldFNlcnZlck1zZyhtc2cpKTtcbiAgICBzb2NrZXQub24oJ21lc3NhZ2UnLCAoeyB1c2VyTmFtZSwgbXNnIH0pID0+IHtcbiAgICAgIHNldENoYXQoKHByZXYpID0+IHByZXY/LmNvbmNhdCh7IHVzZXJOYW1lLCBtc2cgfSkpO1xuICAgICAgc2V0TWVzc2FnZSgobWVzc2FnZSkgPT4gT2JqZWN0LmFzc2lnbih7fSwgbWVzc2FnZSwgeyBtc2c6ICcnIH0pKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gVE9ETyAtIHNjcm9sbCB0aGUgY2hhdCB0byB0aGUgbGFzdCBjaGF0XG4gICAgY29uc3QgY2hhdHMgPSBkb2N1bWVudD8ucXVlcnlTZWxlY3RvckFsbCgnLmNoYXRfX21lc3NhZ2UnKTtcbiAgICBjb25zdCBjaGF0Q291bnQgPSBjaGF0cy5sZW5ndGg7XG4gICAgY29uc3QgbGFzdENoYXQgPSBjaGF0c1tjaGF0Q291bnQgLSAxXSBhcyBIVE1MRWxlbWVudDtcbiAgICAvLyBjb25zdCBjaGF0V3JhcHBlciA9IGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKFxuICAgIC8vICAgJy5jaGF0X19jb250ZW50X193cmFwcGVyJyxcbiAgICAvLyApIGFzIEhUTUxFbGVtZW50O1xuICAgIC8vIFRPRE86IGxhc3QgY2hhdCBpZGVudGlmaWVyIGlzIHdvcmtpbmcuIGp1c3QgaGF2ZSB0byBzY3JvbGwgdGhlIGNoYXRcbiAgICAvLyByZWZlciB0byBodHRwczovL2pzZmlkZGxlLm5ldC94ajVjM2pjbi8xL1xuICAgIGNvbnNvbGUubG9nKHsgbGFzdENoYXQgfSk7XG4gICAgLy8gY2hhdFdyYXBwZXI/LnNjcm9sbFRvcChsYXN0Q2hhdC5vdXRlckhlaWdodCgpKTtcbiAgfSwgW2NoYXRdKTtcblxuICBmdW5jdGlvbiBlbWl0TWVzc2FnZSgpIHtcbiAgICBjb25zdCB7IHVzZXJOYW1lLCBtc2cgfSA9IG1lc3NhZ2U7XG4gICAgc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCB7IHVzZXJOYW1lLCBtc2cgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBlcnJvckhhbmRsZXIoZXJyb3I6IEVycm9yLCBlcnJvckluZm86IHsgY29tcG9uZW50U3RhY2s6IHN0cmluZyB9KSB7XG4gICAgY29uc29sZS5sb2coJ0xPR0dJTkcnLCB7IGVycm9yIH0sIHsgZXJyb3JJbmZvIH0pO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEVycm9yQm91bmRhcnlcbiAgICAgIEZhbGxiYWNrQ29tcG9uZW50PXtFcnJvckZhbGxiYWNrfVxuICAgICAgb25FcnJvcj17KGVycm9yLCBlcnJvckluZm8pID0+IGVycm9ySGFuZGxlcihlcnJvciwgZXJyb3JJbmZvKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRfX3dyYXBwZXJcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNoYXRfX3RpdGxlXCI+Q2hhdDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdF9fY29udGVudF9fd3JhcHBlclwiPlxuICAgICAgICAgIHtjaGF0ICYmXG4gICAgICAgICAgICBjaGF0Lm1hcCgoeyB1c2VyTmFtZSwgbXNnIH0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICA8Q2hhdE1lc3NhZ2Uga2V5PXtgY2hhdCR7aWR4fWB9IHVzZXJOYW1lPXt1c2VyTmFtZX0gdGV4dD17bXNnfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+dXNlck5hbWU6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17dXNlck5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPENoYXRJbnB1dHNcbiAgICAgICAgICBlbWl0TWVzc2FnZT17ZW1pdE1lc3NhZ2V9XG4gICAgICAgICAgc2V0TWVzc2FnZT17c2V0TWVzc2FnZX1cbiAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxuICAgICAgICAgIHVzZXJOYW1lPXt1c2VyTmFtZX1cbiAgICAgICAgLz5cblxuICAgICAgICB7c2VydmVyTXNnICYmIHNlcnZlck1zZ31cbiAgICAgIDwvZGl2PlxuICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvckZhbGxiYWNrKCkge1xuICAvLyAoe1xuICAvLyAgIGVycm9yLFxuICAvLyAgIHJlc2V0RXJyb3JCb3VuZGFyeSxcbiAgLy8gfToge1xuICAvLyAgIGVycm9yOiBFcnJvcjtcbiAgLy8gICByZXNldEVycm9yQm91bmRhcnk6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPHQ+PjtcbiAgLy8gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgcm9sZT1cImFsZXJ0XCI+XG4gICAgICA8aDI+U29tZXRoaW5nIFdlbnQgV3JvbmchPC9oMj5cbiAgICAgIHsvKiA8cHJlPntlcnJvci5tZXNzYWdlfTwvcHJlPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldEVycm9yQm91bmRhcnl9PlJlbG9hZDwvYnV0dG9uPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0TWVzc2FnZSh7XG4gIHVzZXJOYW1lLFxuICB0ZXh0LFxufToge1xuICB1c2VyTmFtZTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiAoXG4gICAgPHAgY2xhc3NOYW1lPVwiY2hhdF9fbWVzc2FnZVwiPlxuICAgICAgPHNwYW5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICBmb250U2l6ZTogJzAuOHJlbScsXG4gICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dXNlck5hbWV9XG4gICAgICA8L3NwYW4+XG4gICAgICA6eycgJ31cbiAgICAgIDxzcGFuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgY29sb3I6ICdyZ2IoMCAwIDAgLyA4MCUpJyxcbiAgICAgICAgICBmb250U2l6ZTogJzEuMXJlbScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9zcGFuPlxuICAgIDwvcD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHR5cGUgeyBtZXNzYWdlIH0gZnJvbSAnfi90eXBlcyc7XG5cbnR5cGUgY2hhdElucHV0VHlwZXMgPSB7XG4gIGVtaXRNZXNzYWdlOiAoKSA9PiB2b2lkO1xuICBzZXRNZXNzYWdlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxtZXNzYWdlPj47XG4gIG1lc3NhZ2U6IG1lc3NhZ2U7XG4gIHVzZXJOYW1lOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0SW5wdXRzKHtcbiAgZW1pdE1lc3NhZ2UsXG4gIHNldE1lc3NhZ2UsXG4gIG1lc3NhZ2UsXG4gIHVzZXJOYW1lID0gJycsXG59OiBjaGF0SW5wdXRUeXBlcykge1xuICBjb25zdCBtZXNzYWdlUmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHVzZXJOYW1lID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ25vIHVzZXIgbmFtZScpO1xuICAgIGlmIChtZXNzYWdlUmVmLmN1cnJlbnQgPT09IG51bGwgfHwgbWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlLnRyaW0oKSA9PT0gJycpXG4gICAgICByZXR1cm47XG4gICAgZW1pdE1lc3NhZ2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRleHRDaGFuZ2UoKSB7XG4gICAgLy8gVE9ETzogbWFrZSBpdCBzbyB0aGF0IGl0IGFsbG93cyB0aGUgdXNlciB0byBjbGVhciBBTEwgY29udGVudFxuICAgIGlmIChtZXNzYWdlUmVmLmN1cnJlbnQgPT09IG51bGwgfHwgbWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlLnRyaW0oKSA9PT0gJycpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHVzZXJOYW1lID09PSBudWxsKSByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZygndGV4dCBpcyBjaGFuZ2VkJyk7XG5cbiAgICBzZXRNZXNzYWdlKHtcbiAgICAgIG1zZzogbWVzc2FnZVJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgdXNlck5hbWU6IHVzZXJOYW1lLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBhY3Rpb249XCJcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJjaGF0X19mb3JtXCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+XG4gICAgICAgIG1lc3NhZ2VcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9e2AgbWVzc2FnZSAke1N0cmluZy5mcm9tQ2hhckNvZGUoMTAxNDcpfWB9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgdmFsdWU9e21lc3NhZ2UubXNnfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGV4dENoYW5nZX1cbiAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICByZWY9e21lc3NhZ2VSZWZ9XG4gICAgICAvPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkFib3V0IHBhZ2U8L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCBBZG1pbk5hdiBmcm9tICd+L2NvbXBvbmVudHMvYWRtaW5OYXYvQWRtaW5OYXYnO1xuLy8gaW1wb3J0IHsgdXNlQWN0aW9uRGF0YSB9IGZyb20gJ3JlbWl4Jztcbi8vIGltcG9ydCB7IGJhZFJlcXVlc3QgfSBmcm9tICd+L3V0aWxzL2hlbHBlcnMnO1xuLy8gaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcic7XG5cbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJztcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKHJlcXVlc3QpO1xuXG4gIGlmICghdXNlciB8fCAhdXNlci5pc0FkbWluKSB7XG4gICAgLy8gVE9ETzogYWRkIGxvZ2dpbmcgd2hlbiB0aGlzIGhhcHBlbnNcbiAgICByZXR1cm4gcmVkaXJlY3QoJy8nKTtcbiAgfVxuICBjb25zdCBkYXRhID0geyB1c2VyIH07XG4gIHJldHVybiBkYXRhO1xufTtcblxuLy8gVE9ETzogYWRkIGFjdGlvbiBzbyB0aGF0IGNhbiBjcmVhdGUgdXNlcnMgYW5kIHNob3cgYWxsIHVzZXJzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPEFkbWluTGF5b3V0PlxuICAgICAgPGgxPkFkbWluIGluZGV4PC9oMT5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L0FkbWluTGF5b3V0PlxuICApO1xufVxuXG50eXBlIGFkbWluTGF5b3V0UHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xufTtcbmZ1bmN0aW9uIEFkbWluTGF5b3V0KHsgY2hpbGRyZW4gfTogYWRtaW5MYXlvdXRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8QWRtaW5OYXYgLz5cbiAgICAgIDxhcnRpY2xlPntjaGlsZHJlbn08L2FydGljbGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTmF2TGluayB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5OYXYoKSB7XG4gIHJldHVybiA8TmF2TGluayB0bz1cInVzZXJzXCI+VXNlcnM8L05hdkxpbms+O1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKCkge1xuICByZXR1cm4gPGgyPlVzZXJzIHBhZ2U8L2gyPjtcbn1cbiIsICJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ0ByZW1peC1ydW4vbm9kZSc7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJztcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogeyByZXF1ZXN0OiBSZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGxvZ291dChyZXF1ZXN0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdCgnLycpO1xufTtcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSdWxlcygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlJ1bGVzIHBhZ2U8L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUFjdGlvbkRhdGEgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0Jztcbi8vIGltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgdmFsaWRhdGVJbnB1dCwgYmFkUmVxdWVzdCB9IGZyb20gJ34vdXRpbHMvaGVscGVycyc7XG5pbXBvcnQgeyBsb2dpbiwgY3JlYXRlVXNlclNlc3Npb24gfSBmcm9tICd+L3V0aWxzL3Nlc3Npb24uc2VydmVyJztcblxuZXhwb3J0IGNvbnN0IGFjdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogeyByZXF1ZXN0OiBSZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgLy8gY29uc3QgbG9naW5UeXBlID0gZm9ybS5nZXQoJ2xvZ2luVHlwZScpO1xuICBjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KCd1c2VybmFtZScpPy50b1N0cmluZygpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KCdwYXNzd29yZCcpPy50b1N0cmluZygpO1xuXG4gIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgZmllbGRFcnJvcnM6IHtcbiAgICAgICAgdXNlcm5hbWU6ICd1c2VybmFtZSBpcyByZXF1aXJlZCcsXG4gICAgICAgIHBhc3N3b3JkOiAncGFzc3dvcmQgaXMgcmVxdWlyZWQnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGZpZWxkcyA9IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH07XG4gIC8vIFRPRE86IGFkZCB2YWxpZGF0aW9uIGZvciBlaXRoZXIgdXNlcm5hbWUgT1IgZW1haWxcbiAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgdXNlcm5hbWU6IHZhbGlkYXRlSW5wdXQoJ3VzZXJuYW1lJywgdXNlcm5hbWUsIDMpLFxuICAgIHBhc3N3b3JkOiB2YWxpZGF0ZUlucHV0KCdwYXNzd29yZCcsIHBhc3N3b3JkLCA2KSxcbiAgfTtcblxuICBpZiAoT2JqZWN0LnZhbHVlcyhmaWVsZEVycm9ycykuc29tZShCb29sZWFuKSkge1xuICAgIGNvbnNvbGUubG9nKCc8PSBmaWVsZEVycm9ycyA9PiAnLCBmaWVsZEVycm9ycyk7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pO1xuICB9XG4gIC8vIGZpbmQgdXNlclxuICBjb25zdCB1c2VyID0gYXdhaXQgbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG5cbiAgLy8gY2hlY2sgdXNlciBkZXRhaWxzIGFyZSBva1xuICBpZiAoIXVzZXIpXG4gICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgZmllbGRzLFxuICAgICAgZmllbGRFcnJvcnM6IHsgdXNlcm5hbWU6ICdpbnZhbGlkIGNyZWRlbnRpYWxzJyB9LFxuICAgIH0pO1xuICAvLyBjcmVhdGUgdXNlciBzZXNzaW9uXG4gIHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyLmlkLCAnLycpO1xuXG4gIC8vICAgY2FzZSAncmVnaXN0ZXInOiB7XG4gIC8vICAgICBjb25zb2xlLmxvZygnaW5zaWRlIHRoZSByZWdpc3RlcicpO1xuICAvLyAgICAgLy8gY2hlY2sgaWYgdXNlciBleGlzdHNcbiAgLy8gICAgIGNvbnN0IHVzZXJFeGlzdHMgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyB1c2VybmFtZSB9IH0pO1xuICAvLyAgICAgaWYgKHVzZXJFeGlzdHMpXG4gIC8vICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgLy8gICAgICAgICBmaWVsZHMsXG4gIC8vICAgICAgICAgZmllbGRFcnJvcnM6IHsgdXNlcm5hbWU6IGB1c2VybmFtZSAke3VzZXJuYW1lfSBhbHJlYWR5IGV4aXN0c2AgfSxcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgICAvLyByZWdpc3RlciBhIG5ldyB1c2VyXG4gIC8vICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgcmVnaXN0ZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG4gIC8vICAgICBpZiAoIW5ld1VzZXIpXG4gIC8vICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRzLCBmb3JtRXJyb3I6ICdTb21ldGhpbmcgd2VudCB3cm9uZycgfSk7XG4gIC8vICAgICAvLyBjcmVhdGUgdXNlciBzZXNzaW9uXG4gIC8vICAgICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24obmV3VXNlci5pZCwgJy9wb3N0cycpO1xuICAvLyAgIH1cblxuICAvLyAgIGRlZmF1bHQ6IHtcbiAgLy8gICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRzLCBmb3JtRXJyb3I6ICdsb2dpbiB0eXBlIGlzIG5vdCB2YWxpZCcgfSk7XG4gIC8vICAgfVxuICAvLyB9XG59O1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TG9naW48L2gxPlxuXG4gICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJsb2dpbmZvcm1cIj5cbiAgICAgICAgICA8bGVnZW5kPkxvZ2luPC9sZWdlbmQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbmZvcm1fX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5mb3JtX19jb250ZW50X193cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8udXNlcm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udXNlcm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxuICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnMudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5mb3JtX19jb250ZW50X193cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB1cGRhdGUgdGhpcyB0byByZWZsZWN0IGEgcGFzc3dvcmQgcmVzZXQgb3B0aW9uIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgLy8gYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGlvbkRhdGE/LmZpZWxkcz8ucGFzc3dvcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInJlZ2lvblwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlxuICAgICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0blwiPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiIsICJpbXBvcnQgeyBqc29uIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB0eXBlIHsgYmFkUmVxdWVzdFByb3BzIH0gZnJvbSAnfi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUlucHV0KFxuICBuYW1lOiBzdHJpbmcsXG4gIGlucHV0OiBGb3JtRGF0YUVudHJ5VmFsdWUsXG4gIGxlbmd0aDogbnVtYmVyID0gMSxcbikge1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJyB8fCBpbnB1dC5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICByZXR1cm4gYCR7bmFtZX0gc2hvdWxkIGJlIGF0IGxlYXN0ICR7bGVuZ3RofSBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWRSZXF1ZXN0KGRhdGE6IGJhZFJlcXVlc3RQcm9wcykge1xuICByZXR1cm4ganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xufVxuIiwgIi8vIGNvbnN0IHNvY2tldCA9IGlvLmNvbm5lY3QoXCJodHRwOi8vbG9jYWxob3N0OjQwMDBcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC0yXCI+XG4gICAgICA8aDE+SG9tZSBpbmRleDwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW1pbGlxdWVcbiAgICAgICAgICBwYXJpYXR1ciwgbmloaWwgY29ycnVwdGkgb2JjYWVjYXRpIGR1Y2ltdXMgbnVsbGEgaXN0ZSBlbGlnZW5kaVxuICAgICAgICAgIGRpc3RpbmN0aW8gYXV0ZW0gdmVuaWFtLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbWlsaXF1ZVxuICAgICAgICAgIHBhcmlhdHVyLCBuaWhpbCBjb3JydXB0aSBvYmNhZWNhdGkgZHVjaW11cyBudWxsYSBpc3RlIGVsaWdlbmRpXG4gICAgICAgICAgZGlzdGluY3RpbyBhdXRlbSB2ZW5pYW0uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2ltaWxpcXVlXG4gICAgICAgICAgcGFyaWF0dXIsIG5paGlsIGNvcnJ1cHRpIG9iY2FlY2F0aSBkdWNpbXVzIG51bGxhIGlzdGUgZWxpZ2VuZGlcbiAgICAgICAgICBkaXN0aW5jdGlvIGF1dGVtIHZlbmlhbS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW1pbGlxdWVcbiAgICAgICAgICBwYXJpYXR1ciwgbmloaWwgY29ycnVwdGkgb2JjYWVjYXRpIGR1Y2ltdXMgbnVsbGEgaXN0ZSBlbGlnZW5kaVxuICAgICAgICAgIGRpc3RpbmN0aW8gYXV0ZW0gdmVuaWFtLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic2NDQzZDk0MScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtVkdIWUZKM1IuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVhPSVc2MkpSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUE5NTVZPREwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1JWEVEWEpMRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU03TVUzM1lXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVlFZQkFVU1EuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUpHQzNSSVlaLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2Fib3V0L2luZGV4Jzp7J2lkJzoncm91dGVzL2Fib3V0L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fib3V0JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hYm91dC9pbmRleC01WUdCU0VUUy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2FkbWluL2luZGV4Jzp7J2lkJzoncm91dGVzL2FkbWluL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2FkbWluJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZG1pbi9pbmRleC1CRVVPTTVLNy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTURFRVVNNkIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRtaW4vdXNlcnMnOnsnaWQnOidyb3V0ZXMvYWRtaW4vdXNlcnMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRtaW4vdXNlcnMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRtaW4vdXNlcnMtUVk3Q1VKVVUuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoL2xvZ2luJzp7J2lkJzoncm91dGVzL2F1dGgvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC9sb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL2xvZ2luLUNISUgySUhNLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NREVFVU02Qi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoL2xvZ291dCc6eydpZCc6J3JvdXRlcy9hdXRoL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoL2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL2xvZ291dC1HRDIzRkFOMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTURFRVVNNkIuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoL3VzZXIvcHJvZmlsZSc6eydpZCc6J3JvdXRlcy9hdXRoL3VzZXIvcHJvZmlsZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoL3VzZXIvcHJvZmlsZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL3VzZXIvcHJvZmlsZS01MkZZSDUyRS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvdXNlci9zY2hlZHVsZSc6eydpZCc6J3JvdXRlcy9hdXRoL3VzZXIvc2NoZWR1bGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC91c2VyL3NjaGVkdWxlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvdXNlci9zY2hlZHVsZS1SRUwyTU9RRi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvdXNlci9zZXR0aW5ncyc6eydpZCc6J3JvdXRlcy9hdXRoL3VzZXIvc2V0dGluZ3MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC91c2VyL3NldHRpbmdzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvdXNlci9zZXR0aW5ncy1PRkRMTldQWS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2hvbWV3b3JrL2luZGV4Jzp7J2lkJzoncm91dGVzL2hvbWV3b3JrL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2hvbWV3b3JrJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ob21ld29yay9pbmRleC0ySTVLRzdBTC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTURFRVVNNkIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtT1lJUlhFQ1QuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ydWxlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9ydWxlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidydWxlcycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvcnVsZXMvaW5kZXgtUVlaNFhCVzMuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90dXRvcmluZy9jYXJkcy9pbmRleCc6eydpZCc6J3JvdXRlcy90dXRvcmluZy9jYXJkcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid0dXRvcmluZy9jYXJkcycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdHV0b3JpbmcvY2FyZHMvaW5kZXgtR0E1R0s3Q00uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpSSEtSU0VILmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90dXRvcmluZy9pbmRleCc6eydpZCc6J3JvdXRlcy90dXRvcmluZy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOid0dXRvcmluZycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvdHV0b3JpbmcvaW5kZXgtTzNCUVBUT1guanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpSSEtSU0VILmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNjQ0M0Q5NDEuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFD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
