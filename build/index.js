var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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

// socketHandlers/messagingHandlers.js
var require_messagingHandlers = __commonJS({
  "socketHandlers/messagingHandlers.js"(exports, module2) {
    init_react();
    module2.exports = (io4, socket3) => {
      const connection = function() {
        console.log(`user: ${socket3.id} connected`);
      };
      const disconnection = function() {
        console.log(`user ${socket3.id} dis-connected`);
      };
      const emitMessage = function({ userName, message }) {
        console.log("emit from Server", { userName, message });
        io4.emit("message", { userName, message });
      };
      const serverMessage = function() {
        io4.emit(`user: ${socket3.id}`);
      };
      socket3.on("connect", connection);
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
      const emitCards = function({ cards }) {
        console.log("HERE => ", { cards });
        io4.emit("newCards", cards);
      };
      const emitSelected = function({ cards }) {
        io4.emit("newCards", { cards });
        console.log({ cards });
      };
      socket3.on("setCards", emitCards);
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
var import_react5 = require("@remix-run/react");

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

// app/utils/useClickOutside.ts
init_react();
var import_react2 = require("react");
function UseClickOutside(_cb, ...truthyChecks) {
  const domRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (!truthyChecks.every(Boolean)) {
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

// app/components/NavLink/NavLink.tsx
init_react();
var import_remix2 = __toESM(require_remix());
function Navlink(_a) {
  var _b = _a, {
    href,
    children,
    className,
    prefetch = "intent"
  } = _b, props = __objRest(_b, [
    "href",
    "children",
    "className",
    "prefetch"
  ]);
  return /* @__PURE__ */ React.createElement(import_remix2.NavLink, __spreadProps(__spreadValues({
    to: href
  }, props), {
    className: className + " nav_link btn row",
    prefetch
  }), children);
}

// app/components/skiplink/skiplink.tsx
init_react();
var import_react3 = __toESM(require("react"));
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
  return import_react3.default.cloneElement(props.children, {
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
var import_react4 = __toESM(require("react"));
function Nav({ user }) {
  return /* @__PURE__ */ import_react4.default.createElement("header", null, /* @__PURE__ */ import_react4.default.createElement(skiplink_default, {
    skipTo: "main",
    className: "skip-link"
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    type: "button"
  }, "Skip Navigation Links")), /* @__PURE__ */ import_react4.default.createElement("nav", {
    className: "nav"
  }, /* @__PURE__ */ import_react4.default.createElement("a", {
    className: "header__logo",
    href: "/"
  }, "Home"), /* @__PURE__ */ import_react4.default.createElement("ul", null, /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement(Navlink, {
    to: "/about"
  }, "About")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement(Navlink, {
    to: "/rules"
  }, "Classroom Rules")), user ? /* @__PURE__ */ import_react4.default.createElement(UserNav, {
    user
  }) : /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement(Navlink, {
    to: "/auth/login"
  }, "Login")))));
}
function UserNav({ user }) {
  return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement(Navlink, {
    to: "/homework"
  }, "Homework")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement(Navlink, {
    to: "/tutoring"
  }, "Tutoring")), /* @__PURE__ */ import_react4.default.createElement(DropDown, {
    user
  }), /* @__PURE__ */ import_react4.default.createElement("li", null));
}
function DropDown({ user }) {
  const { toggle: menuOpen, setToggleStatus: setMenuOpen } = useToggle(false);
  const navRef = useClickOutside_default(setMenuOpen, menuOpen);
  function openMenu() {
    setMenuOpen(true);
  }
  function closeMenu() {
    setMenuOpen(false);
  }
  function selectMenuItem() {
    closeMenu();
  }
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    ref: navRef
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    "aria-haspopup": "true",
    "aria-controls": "nav-dropdown__content",
    "aria-expanded": menuOpen,
    onClick: () => setMenuOpen(),
    className: "nav-dropdown__btn nav-dropdown__trigger"
  }, "Settings"), /* @__PURE__ */ import_react4.default.createElement("div", {
    role: "menu",
    id: "nav-dropdown__content",
    className: "nav-dropdown__content",
    "data-open": menuOpen
  }, /* @__PURE__ */ import_react4.default.createElement(Navlink, {
    role: "menuitem",
    className: "nav-dropdown__content-item",
    to: "/auth/user/profile",
    onClick: selectMenuItem
  }, "Profile"), /* @__PURE__ */ import_react4.default.createElement(Navlink, {
    role: "menuitem",
    className: "nav-dropdown__content-item",
    to: "/auth/user/settings",
    onClick: selectMenuItem
  }, "Settings"), /* @__PURE__ */ import_react4.default.createElement(Navlink, {
    role: "menuitem",
    className: "nav-dropdown__content-item",
    to: "/auth/user/schedule",
    onClick: selectMenuItem
  }, "Schedule"), /* @__PURE__ */ import_react4.default.createElement(Logout, null), user && user.isAdmin && /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "nav-dropdown__seperator"
  }), /* @__PURE__ */ import_react4.default.createElement(Navlink, {
    to: "/admin",
    role: "menuitem",
    className: "nav-dropdown__content-item admin_link"
  }, "Admin"))));
}
function Logout() {
  function handlePropogation(event) {
    console.log("weeee", { event });
  }
  return /* @__PURE__ */ import_react4.default.createElement("form", {
    action: "/auth/logout",
    method: "POST"
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    type: "submit",
    className: "nav-dropdown__content-item  nav_link btn row",
    onKeyDown: handlePropogation,
    onKeyUp: handlePropogation,
    onClick: handlePropogation
  }, "Logout"));
}

// app/styles/global.css
var global_default = "/build/_assets/global-TA4KY6ZK.css";

// route:/home/e14/projects/Andrew/express_be/app/root.tsx
function links() {
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
}
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
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react5.Outlet, null), /* @__PURE__ */ React.createElement(import_react5.Scripts, null)));
}
function ErrorBoundary({ error }) {
  console.log("HERE HAPPENED", { error });
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, "ERROR boundary in ROOT!"), /* @__PURE__ */ React.createElement("pre", null, error.message)));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react5.Meta, null), /* @__PURE__ */ React.createElement(import_react5.Links, null), /* @__PURE__ */ React.createElement("title", null, title ? title : "Autha Test")), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_react5.Scripts, null), true ? /* @__PURE__ */ React.createElement(import_react5.LiveReload, null) : null));
}
var loader = async ({ request }) => {
  const user = await getUser(request);
  const data = {
    user
  };
  return data;
};
function Layout({ children }) {
  const { user } = (0, import_react5.useLoaderData)();
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
  default: () => CardsIndex,
  links: () => links2
});
init_react();

// app/components/cards/Cards.tsx
init_react();
var import_react6 = require("@remix-run/react");
var import_react7 = __toESM(require("react"));
var import_socket = __toESM(require("socket.io-client"));
var ioHost = "http://localhost:4000";
var socket = (0, import_socket.default)(ioHost);
function useCards() {
  const [cardData, setCardData] = (0, import_react7.useState)({
    one: "",
    two: "",
    three: "",
    four: ""
  });
  function receiveCardData(cards) {
    setCardData(__spreadValues({}, cards));
  }
  function emitCardData() {
    socket.emit("setCards", { cards: cardData });
  }
  return { cardData, setCardData, receiveCardData, emitCardData };
}
function CardsParent() {
  const { receiveCardData, cardData } = useCards();
  (0, import_react7.useEffect)(() => {
    socket.on("newCards", (cards) => {
      receiveCardData(cards);
    });
  }, [socket]);
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(Cards, {
    cardData
  }), /* @__PURE__ */ import_react7.default.createElement(CardControls, null));
}
function CardControls() {
  const { user } = (0, import_react6.useMatches)()[0].data;
  const { emitCardData, cardData, setCardData } = useCards();
  const formRef = (0, import_react7.useRef)(null);
  const { one, two, three, four } = cardData;
  function handleChange(event) {
    setCardData((prevData) => Object.assign({}, prevData, { [event.target.name]: event.target.value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!user.isAdmin)
      throw new Error("You must be an administrator to perform this function");
    emitCardData();
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
    className: "cards__container"
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "cards__container-card"
  }, "1 - ", one && one), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "cards__container-card"
  }, "2 - ", two && two), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "cards__container-card"
  }, "3 - ", three && three), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "cards__container-card"
  }, "4 - ", four && four));
}

// app/styles/pages/tutoring/cards.css
var cards_default = "/build/_assets/cards-XXXSBZGQ.css";

// route:/home/e14/projects/Andrew/express_be/app/routes/tutoring/cards/index.tsx
function links2() {
  return [
    {
      rel: "stylesheet",
      href: cards_default
    }
  ];
}
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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Homework page"));
}

// route:/home/e14/projects/Andrew/express_be/app/routes/tutoring/index.tsx
var tutoring_exports = {};
__export(tutoring_exports, {
  default: () => tutoring,
  links: () => links3
});
init_react();
var import_react11 = require("@remix-run/react");

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
  username,
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
  }, username), ":", " ", /* @__PURE__ */ React.createElement("span", {
    style: {
      textTransform: "uppercase",
      color: "rgb(0 0 0 / 80%)",
      fontSize: "1.1rem"
    }
  }, text));
}

// app/components/chat/chatInput.tsx
init_react();
var import_react8 = __toESM(require("react"));
function ChatInput({
  emitMessage,
  setMessage,
  message
}) {
  const messageRef = (0, import_react8.useRef)(null);
  function handleSubmit(event) {
    event.preventDefault();
    if (messageRef.current === null)
      return;
    emitMessage();
  }
  function handleTextChange() {
    if (messageRef.current === null)
      return;
    setMessage(messageRef.current.value);
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
    value: message,
    onChange: () => handleTextChange(),
    name: "message",
    ref: messageRef
  }));
}

// app/components/chat/chat.tsx
var import_react10 = require("@remix-run/react");
var socket2 = (0, import_socket2.default)("http://localhost:4000/");
function useChatRoom() {
  const [userName, setUserName] = (0, import_react9.useState)("");
  const [message, setMessage] = (0, import_react9.useState)("");
  const [chat, setChat] = (0, import_react9.useState)([]);
  function receiveMessage({ userName: userName2, message: message2 }) {
    setChat((prev) => prev == null ? void 0 : prev.concat({ userName: userName2, message: message2 }));
  }
  function emitMessage() {
    if (message.length < 1)
      return;
    if (!userName)
      throw new Error("no user name");
    socket2.emit("message", { userName, message });
    setMessage("");
  }
  return {
    setUserName,
    receiveMessage,
    emitMessage,
    message,
    setMessage,
    chat
  };
}
function ChatParent({ children }) {
  const [showChat, setShowChat] = (0, import_react9.useState)(false);
  (0, import_react9.useEffect)(() => {
    setShowChat(true);
  }, []);
  if (!showChat) {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Loading..."));
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "chat__wrapper"
  }, children);
}
function ChatRoom() {
  const { user } = (0, import_react10.useMatches)()[0].data;
  const {
    setUserName,
    receiveMessage,
    emitMessage,
    message,
    setMessage,
    chat
  } = useChatRoom();
  const containerRef = (0, import_react9.useRef)();
  (0, import_react9.useEffect)(() => {
    setUserName(user.username);
  }, []);
  (0, import_react9.useEffect)(() => {
    socket2.on("message", ({ userName, message: message2 }) => receiveMessage({ userName, message: message2 }));
  }, [socket2]);
  (0, import_react9.useLayoutEffect)(() => {
    scrollToBottom();
  });
  function scrollToBottom() {
    if (containerRef.current === null)
      return;
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", {
    className: "chat__title"
  }, "Chat"), /* @__PURE__ */ React.createElement("div", {
    ref: containerRef,
    className: "chat__content__wrapper"
  }, chat && chat.map(({ userName, message: message2 }, idx) => /* @__PURE__ */ React.createElement(ChatMessage, {
    key: `chat${idx}`,
    username: userName,
    text: message2
  }))), /* @__PURE__ */ React.createElement(ChatInput, {
    emitMessage,
    setMessage,
    message,
    userName: user.username
  }));
}
function Chat() {
  function errorHandler(error, errorInfo) {
    console.log("LOGGING", { error }, { errorInfo });
  }
  return /* @__PURE__ */ React.createElement(import_react_error_boundary.ErrorBoundary, {
    FallbackComponent: ErrorFallback,
    onError: (error, errorInfo) => errorHandler(error, errorInfo)
  }, /* @__PURE__ */ React.createElement(ChatParent, null, /* @__PURE__ */ React.createElement(ChatRoom, null)));
}

// app/styles/components/chat/chat.css
var chat_default = "/build/_assets/chat-YKE5646I.css";

// app/styles/pages/tutoring/tutoring.css
var tutoring_default = "/build/_assets/tutoring-K2ZQVKMW.css";

// route:/home/e14/projects/Andrew/express_be/app/routes/tutoring/index.tsx
function links3() {
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
}
function tutoring() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "tutor-wrapper"
  }, /* @__PURE__ */ React.createElement(import_react11.Outlet, null), /* @__PURE__ */ React.createElement(import_react11.Link, {
    to: "/tutoring/cards"
  }, "Cards"), /* @__PURE__ */ React.createElement(Chat, null));
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
var import_remix3 = __toESM(require_remix());

// app/components/nav/AdminNav.tsx
init_react();
function AdminNav() {
  return /* @__PURE__ */ React.createElement("div", null, "Admin Nav");
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
  return /* @__PURE__ */ React.createElement(AdminLayout, null, /* @__PURE__ */ React.createElement("h1", null, "Admin index"), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null));
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
var import_react12 = require("@remix-run/react");

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
  const actionData = (0, import_react12.useActionData)();
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
var assets_manifest_default = { "version": "6ed9a003", "entry": { "module": "/build/entry.client-WQQOS5CE.js", "imports": ["/build/_shared/chunk-IY44QOT7.js", "/build/_shared/chunk-XDLL7Y2L.js", "/build/_shared/chunk-FN7GJDOI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-H2R3VJ2O.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/about/index": { "id": "routes/about/index", "parentId": "root", "path": "about", "index": true, "caseSensitive": void 0, "module": "/build/routes/about/index-3FEG64SF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/index": { "id": "routes/admin/index", "parentId": "root", "path": "admin", "index": true, "caseSensitive": void 0, "module": "/build/routes/admin/index-3UDPT2HF.js", "imports": ["/build/_shared/chunk-EUWCKCHD.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/users": { "id": "routes/admin/users", "parentId": "root", "path": "admin/users", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/users-JQNKPLRJ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-VTKPPFRZ.js", "imports": ["/build/_shared/chunk-EUWCKCHD.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/logout": { "id": "routes/auth/logout", "parentId": "root", "path": "auth/logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/logout-JALHQ3OH.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/user/profile": { "id": "routes/auth/user/profile", "parentId": "root", "path": "auth/user/profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/user/profile-XMFLGYFS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/user/schedule": { "id": "routes/auth/user/schedule", "parentId": "root", "path": "auth/user/schedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/user/schedule-EMMNCPLA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/user/settings": { "id": "routes/auth/user/settings", "parentId": "root", "path": "auth/user/settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/user/settings-QA37MQK2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/homework/index": { "id": "routes/homework/index", "parentId": "root", "path": "homework", "index": true, "caseSensitive": void 0, "module": "/build/routes/homework/index-IYIJ7JED.js", "imports": ["/build/_shared/chunk-EUWCKCHD.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-A3RXEKH7.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/rules/index": { "id": "routes/rules/index", "parentId": "root", "path": "rules", "index": true, "caseSensitive": void 0, "module": "/build/routes/rules/index-VNCKI7QQ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tutoring/cards/index": { "id": "routes/tutoring/cards/index", "parentId": "root", "path": "tutoring/cards", "index": true, "caseSensitive": void 0, "module": "/build/routes/tutoring/cards/index-CSWZQWDO.js", "imports": ["/build/_shared/chunk-MKWWPU4Z.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tutoring/index": { "id": "routes/tutoring/index", "parentId": "root", "path": "tutoring", "index": true, "caseSensitive": void 0, "module": "/build/routes/tutoring/index-R5EXYG5I.js", "imports": ["/build/_shared/chunk-MKWWPU4Z.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-6ED9A003.js" };

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
var MessageHandlers = require_messagingHandlers();
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
 * @remix-run/node v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
