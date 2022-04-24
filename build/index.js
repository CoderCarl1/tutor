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
var import_react3 = require("@remix-run/react");

// app/components/skiplink/skiplink.tsx
init_react();
var import_react2 = __toESM(require("react"));
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
  return import_react2.default.cloneElement(props.children, {
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
  }, /* @__PURE__ */ import_react4.default.createElement(import_react3.NavLink, {
    className: "header__logo",
    to: "/",
    prefetch: "intent"
  }, "Home"), /* @__PURE__ */ import_react4.default.createElement("ul", null, /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement(import_react3.NavLink, {
    className: "nav_link btn row",
    to: "/about",
    prefetch: "intent"
  }, "About")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement(import_react3.NavLink, {
    className: "nav_link btn row",
    to: "/rules",
    prefetch: "intent"
  }, "Classroom Rules")), user ? /* @__PURE__ */ import_react4.default.createElement(UserNav, {
    user
  }) : /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement(import_react3.NavLink, {
    className: "btn row",
    to: "/auth/login",
    prefetch: "intent"
  }, "Login")))));
}
function UserNav({ user }) {
  function closeDropdown() {
  }
  return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement(import_react3.NavLink, {
    className: "nav_link btn row",
    to: "/homework",
    prefetch: "intent"
  }, "Homework")), /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement(import_react3.NavLink, {
    className: "nav_link btn row",
    to: "/tutoring",
    prefetch: "intent"
  }, "Tutoring")), /* @__PURE__ */ import_react4.default.createElement(DropDown, null), /* @__PURE__ */ import_react4.default.createElement("li", null));
}
function DropDown() {
  const { toggle: menuOpen, setToggleStatus: setMenuOpen } = useToggle(false);
  function openMenu() {
    setMenuOpen(true);
  }
  function selectMenuItem() {
    setMenuOpen(false);
  }
  const navRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    function closeMenu() {
      setMenuOpen(false);
    }
    function outsideClickHandler(event) {
      var _a;
      const target = event.target;
      if (!((_a = navRef.current) == null ? void 0 : _a.contains(target)) && menuOpen) {
        closeMenu();
        return;
      }
    }
    document.addEventListener("mousedown", outsideClickHandler, true);
    return () => {
      document.removeEventListener("mousedown", outsideClickHandler, true);
    };
  }, [menuOpen, setMenuOpen]);
  return /* @__PURE__ */ import_react4.default.createElement("li", null, /* @__PURE__ */ import_react4.default.createElement("div", {
    ref: navRef,
    className: "nav-dropdown__container"
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    className: "nav-dropdown__trigger",
    onClick: () => setMenuOpen()
  }, "Settings TEST menuOpen"), /* @__PURE__ */ import_react4.default.createElement("ul", {
    className: "nav-dropdown__content",
    "data-open": menuOpen ? "true" : "false"
  }, /* @__PURE__ */ import_react4.default.createElement("li", {
    className: "nav-dropdown__item"
  }, /* @__PURE__ */ import_react4.default.createElement(import_react3.NavLink, {
    tabIndex: -1,
    onClick: selectMenuItem,
    to: "/auth/user/profile"
  }, "Profile")), /* @__PURE__ */ import_react4.default.createElement("li", {
    className: "nav-dropdown__item"
  }, /* @__PURE__ */ import_react4.default.createElement(import_react3.NavLink, {
    tabIndex: -1,
    onClick: selectMenuItem,
    to: "/auth/user/settings"
  }, "Settings")), /* @__PURE__ */ import_react4.default.createElement("li", {
    className: "nav-dropdown__item"
  }, /* @__PURE__ */ import_react4.default.createElement(import_react3.NavLink, {
    tabIndex: -1,
    onClick: selectMenuItem,
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
var import_react5 = __toESM(require("react"));
var import_socket = __toESM(require("socket.io-client"));
var socket = (0, import_socket.default)("http://localhost:4000/");
function CardsParent() {
  const [cardData, setCardData] = (0, import_react5.useState)({
    one: "",
    two: "",
    three: "",
    four: ""
  });
  (0, import_react5.useEffect)(() => {
    socket.on("newCards", (data) => {
      setCardData(data);
    });
  }, [cardData]);
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Cards, {
    cardData
  }), /* @__PURE__ */ import_react5.default.createElement(SetCards, {
    cardData,
    setCardData
  }));
}
function SetCards({ setCardData, cardData }) {
  const formRef = (0, import_react5.useRef)(null);
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
  return /* @__PURE__ */ import_react5.default.createElement("form", {
    ref: formRef,
    className: "input-wrapper",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ import_react5.default.createElement("label", {
    htmlFor: "one"
  }, "one"), /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "text",
    name: "one",
    id: "one",
    value: one,
    onChange: (e) => handleChange(e)
  }), /* @__PURE__ */ import_react5.default.createElement("label", {
    htmlFor: "two"
  }, "two"), /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "text",
    name: "two",
    id: "two",
    value: two,
    onChange: (e) => handleChange(e)
  }), /* @__PURE__ */ import_react5.default.createElement("label", {
    htmlFor: "three"
  }, "three"), /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "text",
    name: "three",
    id: "three",
    value: three,
    onChange: (e) => handleChange(e)
  }), /* @__PURE__ */ import_react5.default.createElement("label", {
    htmlFor: "four"
  }, "four"), /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "text",
    name: "four",
    id: "four",
    value: four,
    onChange: (e) => handleChange(e)
  }), /* @__PURE__ */ import_react5.default.createElement("button", {
    type: "submit"
  }, "submit"));
}
function Cards({ cardData }) {
  const { one, two, three, four } = cardData;
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "Cards__container"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "Card"
  }, one && one), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "Card"
  }, two && two), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "Card"
  }, three && three), /* @__PURE__ */ import_react5.default.createElement("div", {
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
var import_react7 = require("react");
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
var import_react6 = __toESM(require("react"));
function ChatInputs({
  emitMessage,
  setMessage,
  message,
  userName = ""
}) {
  const messageRef = (0, import_react6.useRef)(null);
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
  return /* @__PURE__ */ import_react6.default.createElement("form", {
    action: "",
    onSubmit: handleSubmit,
    className: "chat__form"
  }, /* @__PURE__ */ import_react6.default.createElement("label", {
    htmlFor: "message",
    className: "sr-only"
  }, "message"), /* @__PURE__ */ import_react6.default.createElement("input", {
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
  const [userName, setUserName] = (0, import_react7.useState)("");
  const [message, setMessage] = (0, import_react7.useState)({
    userName: "",
    msg: ""
  });
  const [chat, setChat] = (0, import_react7.useState)([]);
  const [serverMsg, setServerMsg] = (0, import_react7.useState)(null);
  (0, import_react7.useEffect)(() => {
    setMessage((message2) => Object.assign({}, message2, { userName }));
  }, [userName]);
  (0, import_react7.useEffect)(() => {
    socket2.on("serverMsg", (msg) => setServerMsg(msg));
    socket2.on("message", ({ userName: userName2, msg }) => {
      setChat((prev) => prev == null ? void 0 : prev.concat({ userName: userName2, msg }));
      setMessage((message2) => Object.assign({}, message2, { msg: "" }));
    });
  }, []);
  (0, import_react7.useEffect)(() => {
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
var import_react8 = require("@remix-run/react");

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
  const actionData = (0, import_react8.useActionData)();
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
var assets_manifest_default = { "version": "8a5b9510", "entry": { "module": "/build/entry.client-VGHYFJ3R.js", "imports": ["/build/_shared/chunk-XOIW62JR.js", "/build/_shared/chunk-PNMMVODL.js", "/build/_shared/chunk-IXEDXJLF.js", "/build/_shared/chunk-M7MU33YW.js", "/build/_shared/chunk-VQYBAUSQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-7P24RBYG.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/about/index": { "id": "routes/about/index", "parentId": "root", "path": "about", "index": true, "caseSensitive": void 0, "module": "/build/routes/about/index-5YGBSETS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/index": { "id": "routes/admin/index", "parentId": "root", "path": "admin", "index": true, "caseSensitive": void 0, "module": "/build/routes/admin/index-BEUOM5K7.js", "imports": ["/build/_shared/chunk-MDEEUM6B.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin/users": { "id": "routes/admin/users", "parentId": "root", "path": "admin/users", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin/users-QY7CUJUU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-CHIH2IHM.js", "imports": ["/build/_shared/chunk-MDEEUM6B.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/logout": { "id": "routes/auth/logout", "parentId": "root", "path": "auth/logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/logout-GD23FAN2.js", "imports": ["/build/_shared/chunk-MDEEUM6B.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/user/profile": { "id": "routes/auth/user/profile", "parentId": "root", "path": "auth/user/profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/user/profile-52FYH52E.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/user/schedule": { "id": "routes/auth/user/schedule", "parentId": "root", "path": "auth/user/schedule", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/user/schedule-REL2MOQF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/user/settings": { "id": "routes/auth/user/settings", "parentId": "root", "path": "auth/user/settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/user/settings-OFDLNWPY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/homework/index": { "id": "routes/homework/index", "parentId": "root", "path": "homework", "index": true, "caseSensitive": void 0, "module": "/build/routes/homework/index-2I5KG7AL.js", "imports": ["/build/_shared/chunk-MDEEUM6B.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-OYIRXECT.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/rules/index": { "id": "routes/rules/index", "parentId": "root", "path": "rules", "index": true, "caseSensitive": void 0, "module": "/build/routes/rules/index-QYZ4XBW3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tutoring/cards/index": { "id": "routes/tutoring/cards/index", "parentId": "root", "path": "tutoring/cards", "index": true, "caseSensitive": void 0, "module": "/build/routes/tutoring/cards/index-GA5GK7CM.js", "imports": ["/build/_shared/chunk-ZRHKRSEH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/tutoring/index": { "id": "routes/tutoring/index", "parentId": "root", "path": "tutoring", "index": true, "caseSensitive": void 0, "module": "/build/routes/tutoring/index-O3BQPTOX.js", "imports": ["/build/_shared/chunk-ZRHKRSEH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-8A5B9510.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zb2NrZXRIYW5kbGVycy9tZXNzYWdpbmdIYW5kbGVyLmpzIiwgIi4uL3NvY2tldEhhbmRsZXJzL2NhcmRIYW5kbGVycy5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb290LnRzeCIsICIuLi9hcHAvdXRpbHMvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vYXBwL3V0aWxzL2RiLnNlcnZlci50cyIsICIuLi9hcHAvY29tcG9uZW50cy9uYXYvTmF2LnRzeCIsICIuLi9hcHAvdXRpbHMvdXNlVG9nZ2xlLnRzIiwgIi4uL2FwcC9jb21wb25lbnRzL3NraXBsaW5rL3NraXBsaW5rLnRzeCIsICJyb3V0ZTovaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy90dXRvcmluZy9jYXJkcy9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY2FyZHMvQ2FyZHMudHN4IiwgInJvdXRlOi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL2F1dGgvdXNlci9zY2hlZHVsZS50c3giLCAicm91dGU6L2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvYXV0aC91c2VyL3NldHRpbmdzLnRzeCIsICJyb3V0ZTovaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9hdXRoL3VzZXIvcHJvZmlsZS50c3giLCAicm91dGU6L2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvaG9tZXdvcmsvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL3R1dG9yaW5nL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Vycm9ycy9FcnJvckZhbGxiYWNrLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXRNZXNzYWdlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXRJbnB1dHMudHN4IiwgInJvdXRlOi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL2Fib3V0L2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9hZG1pbi9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvYWRtaW5OYXYvQWRtaW5OYXYudHN4IiwgInJvdXRlOi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL2FkbWluL3VzZXJzLnRzeCIsICJyb3V0ZTovaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9hdXRoL2xvZ291dC50cyIsICJyb3V0ZTovaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9ydWxlcy9pbmRleC50c3giLCAicm91dGU6L2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvYXV0aC9sb2dpbi50c3giLCAiLi4vYXBwL3V0aWxzL2hlbHBlcnMudHMiLCAicm91dGU6L2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMy4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4zLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgIm1vZHVsZS5leHBvcnRzID0gKGlvLCBzb2NrZXQpID0+IHtcbiAgY29uc3QgY29ubmVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhgdXNlcjogJHtzb2NrZXQuaWR9IGNvbm5lY3RlZGApO1xuICB9O1xuICBjb25zdCBkaXNjb25uZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKGB1c2VyICR7c29ja2V0LmlkfSBkaXMtY29ubmVjdGVkYCk7XG4gIH07XG5cbiAgY29uc3QgZW1pdE1lc3NhZ2UgPSBmdW5jdGlvbiAoeyB1c2VyTmFtZSwgbXNnIH0pIHtcbiAgICBpby5lbWl0KCdtZXNzYWdlJywgeyB1c2VyTmFtZSwgbXNnIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNlcnZlck1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaW8uZW1pdChgdXNlcjogJHtzb2NrZXQuaWR9YCk7XG4gIH07XG5cbiAgc29ja2V0Lm9uKCdjb25uZWN0aW9uJywgY29ubmVjdGlvbik7XG4gIHNvY2tldC5vbignc2VydmVyTXNnJywgc2VydmVyTWVzc2FnZSk7XG4gIHNvY2tldC5vbignbWVzc2FnZScsIGVtaXRNZXNzYWdlKTtcbiAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgZGlzY29ubmVjdGlvbik7XG59O1xuIiwgIm1vZHVsZS5leHBvcnRzID0gKGlvLCBzb2NrZXQpID0+IHtcbiAgY29uc3QgZW1pdFNxdWFyZXMgPSBmdW5jdGlvbiAoc3F1YXJlRGF0YSkge1xuICAgIGlvLmVtaXQoJ25ld1NxdWFyZXMnLCBzcXVhcmVEYXRhKTtcbiAgICBjb25zb2xlLmxvZyh7IHNxdWFyZURhdGEgfSk7XG4gIH07XG5cbiAgY29uc3QgZW1pdFNlbGVjdGVkID0gZnVuY3Rpb24gKHNxdWFyZURhdGEpIHtcbiAgICBpby5lbWl0KCduZXdTcXVhcmVzJywgc3F1YXJlRGF0YSk7XG4gICAgY29uc29sZS5sb2coeyBzcXVhcmVEYXRhIH0pO1xuICB9O1xuXG4gIHNvY2tldC5vbignc2V0U3F1YXJlcycsIGVtaXRTcXVhcmVzKTtcbn07XG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tICdAcmVtaXgtcnVuL2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgc2VydmVyQnVpbGQgZnJvbSAnQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkJztcbi8vIGltcG9ydCB7IGVycm9yTG9nZ2luZywgZ2VuZXJhbExvZ2dpbmcgfSBmcm9tICcuL2FwcC9sb2dnaW5nL2luZGV4JztcbmNvbnN0IE1lc3NhZ2VIYW5kbGVycyA9IHJlcXVpcmUoJy4vc29ja2V0SGFuZGxlcnMvbWVzc2FnaW5nSGFuZGxlcicpO1xuY29uc3QgQ2FyZEhhbmRsZXJzID0gcmVxdWlyZSgnLi9zb2NrZXRIYW5kbGVycy9jYXJkSGFuZGxlcnMnKTtcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQwMDA7XG5cbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbi8vIGh0dHA6Ly9leHByZXNzanMuY29tL2VuL2FkdmFuY2VkL2Jlc3QtcHJhY3RpY2Utc2VjdXJpdHkuaHRtbCNhdC1hLW1pbmltdW0tZGlzYWJsZS14LXBvd2VyZWQtYnktaGVhZGVyXG5hcHAuZGlzYWJsZSgneC1wb3dlcmVkLWJ5Jyk7XG5cbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxuYXBwLnVzZShcbiAgJy9idWlsZCcsXG4gIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMvYnVpbGQnLCB7IGltbXV0YWJsZTogdHJ1ZSwgbWF4QWdlOiAnMXknIH0pLFxuKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxuLy8gbW9yZSBhZ2dyZXNzaXZlIHdpdGggdGhpcyBjYWNoaW5nLlxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJywgeyBtYXhBZ2U6ICcxaCcgfSkpO1xuXG4vLyBMT0dHSU5HXG4vLyBhcHAudXNlKGdlbmVyYWxMb2dnaW5nKTtcbi8vIGFwcC51c2UoZXJyb3JMb2dnaW5nKTtcblxuYXBwLmFsbChcbiAgJyonLFxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gICAgYnVpbGQ6IHNlcnZlckJ1aWxkLFxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxuICB9KSxcbik7XG5cbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJykuY3JlYXRlU2VydmVyKGFwcCk7XG5jb25zdCBpbyA9IHJlcXVpcmUoJ3NvY2tldC5pbycpKGh0dHApO1xuXG5jb25zdCByZWdpc3RlckhhbmRsZXJzID0gKHNvY2tldCkgPT4ge1xuICBNZXNzYWdlSGFuZGxlcnMoaW8sIHNvY2tldCk7XG4gIENhcmRIYW5kbGVycyhpbywgc29ja2V0KTtcbn07XG5cbmlvLm9uKCdjb25uZWN0aW9uJywgcmVnaXN0ZXJIYW5kbGVycyk7XG5cbmh0dHAubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7UE9SVH1gKTtcbn0pO1xuXG4vLyBhcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbi8vICAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcbi8vIH0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL3R1dG9yaW5nL2NhcmRzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9hdXRoL3VzZXIvc2NoZWR1bGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL2F1dGgvdXNlci9zZXR0aW5ncy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvYXV0aC91c2VyL3Byb2ZpbGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL2hvbWV3b3JrL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy90dXRvcmluZy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL2hvbWUvZTE0L3Byb2plY3RzL0FuZHJldy9leHByZXNzX2JlL2FwcC9yb3V0ZXMvYWJvdXQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL2FkbWluL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9hZG1pbi91c2Vycy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL2F1dGgvbG9nb3V0LnRzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZTExIGZyb20gXCIvaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9ydWxlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9ob21lL2UxNC9wcm9qZWN0cy9BbmRyZXcvZXhwcmVzc19iZS9hcHAvcm91dGVzL2F1dGgvbG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCIvaG9tZS9lMTQvcHJvamVjdHMvQW5kcmV3L2V4cHJlc3NfYmUvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3R1dG9yaW5nL2NhcmRzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90dXRvcmluZy9jYXJkcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ0dXRvcmluZy9jYXJkc1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvdXNlci9zY2hlZHVsZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC91c2VyL3NjaGVkdWxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvdXNlci9zY2hlZHVsZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC91c2VyL3NldHRpbmdzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hdXRoL3VzZXIvc2V0dGluZ3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC91c2VyL3NldHRpbmdzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9hdXRoL3VzZXIvcHJvZmlsZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC91c2VyL3Byb2ZpbGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC91c2VyL3Byb2ZpbGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2hvbWV3b3JrL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ob21ld29yay9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJob21ld29ya1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL3R1dG9yaW5nL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy90dXRvcmluZy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJ0dXRvcmluZ1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL2Fib3V0L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hYm91dC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhYm91dFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2FkbWluL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZG1pbi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZG1pblwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2FkbWluL3VzZXJzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZG1pbi91c2Vyc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZG1pbi91c2Vyc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9sb2dvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImF1dGgvbG9nb3V0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvcnVsZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3J1bGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInJ1bGVzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC9sb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTNcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rcywgTGl2ZVJlbG9hZCwgTWV0YSwgT3V0bGV0LCBTY3JpcHRzLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdC9yb3V0ZU1vZHVsZXMnO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJy4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInO1xuaW1wb3J0IE5hdiBmcm9tICd+L2NvbXBvbmVudHMvbmF2L05hdic7XG5pbXBvcnQgZ2xvYmFsIGZyb20gJ34vc3R5bGVzL2dsb2JhbC5jc3MnO1xuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ2ljb24nLFxuICAgICAgaHJlZjogJy9MT0dPMjU2LnBuZycsXG4gICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogZ2xvYmFsLFxuICAgIH0sXG5cbiAgICAvLyB7XG4gICAgLy8gICByZWw6IFwicHJlbG9hZFwiLFxuICAgIC8vICAgaHJlZjogXCIvaW1hZ2VzL2Jhbm5lci5qcGdcIixcbiAgICAvLyAgIGFzOiBcImltYWdlXCIsXG4gICAgLy8gfSxcbiAgXTtcbn07XG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICAvLyBUT0RPOiB1cGRhdGUgdGhlc2VcbiAgY29uc3QgY2hhcnNldCA9ICd1dGYtOCc7XG4gIGNvbnN0IHRpdGxlID0gJ0FIIFR1dG9yaW5nJztcbiAgY29uc3Qgdmlld3BvcnQgPSAnd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSc7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gJ0EgdHV0b3JpbmcgQXBwJztcbiAgY29uc3Qga2V5d29yZHMgPSAndHV0b3JpbmcsIHR1dG9yLCBtYXRocywgbGluZ3Vpc3RpY3MnO1xuXG4gIHJldHVybiB7XG4gICAgY2hhcnNldCxcbiAgICB0aXRsZSxcbiAgICB2aWV3cG9ydCxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBrZXl3b3JkcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH06IHsgcmVxdWVzdDogUmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKHJlcXVlc3QpO1xuICBjb25zdCBkYXRhID0ge1xuICAgIHVzZXIsXG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIC8vIFRPRE86IHVwZGF0ZSB0aGlzXG4gIC8vIDEuIGFwcGVuZCBmb3IgTG9nZ2luZ1xuICAvLyAyLiBtYWtlIG1lYW5pbmdmdWwgcGFnZVxuICBjb25zb2xlLmxvZygnSEVSRSBIQVBQRU5FRCcsIHsgZXJyb3IgfSk7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPkVSUk9SIGJvdW5kYXJ5IGluIFJPT1QhPC9oMT5cbiAgICAgICAgPHByZT57ZXJyb3IubWVzc2FnZX08L3ByZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG50eXBlIGRvY3VtZW50UHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xuICB0aXRsZT86IHN0cmluZztcbn07XG5cbmZ1bmN0aW9uIERvY3VtZW50KHsgY2hpbGRyZW4sIHRpdGxlIH06IGRvY3VtZW50UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgICAgPHRpdGxlPnt0aXRsZSA/IHRpdGxlIDogJ0F1dGhhIFRlc3QnfTwvdGl0bGU+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyA8TGl2ZVJlbG9hZCAvPiA6IG51bGx9XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuXG50eXBlIGxheW91dFByb3BzID0ge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbn07XG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiBsYXlvdXRQcm9wcykge1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICB7dXNlciA/IDxOYXYgdXNlcj17dXNlcn0gLz4gOiA8TmF2IC8+fVxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+Q29weXJpZ2h0ICZjb3B5OyBBSCB0dXRvcmluZyAyMDIyPC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuL2RiLnNlcnZlcic7XG5pbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHR5cGUgeyBsb2dpbkZpZWxkcyB9IGZyb20gJ34vdHlwZXMnO1xuXG4vLyBsb2dpbiBhbiBleGlzdGluZyB1c2VyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfTogbG9naW5GaWVsZHMpIHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJuYW1lLFxuICAgIH0sXG4gIH0pO1xuICBpZiAoIXVzZXIpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGlzQ29ycmVjdFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcbiAgaWYgKCFpc0NvcnJlY3RQYXNzd29yZCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIHVzZXI7XG59XG5cbi8vIHJlZ2lzdGVyIGEgbmV3IHVzZXJcbi8vIFRPRE86IGFkZCBhIHVzZXIgY2hlY2sgdG8gbWFrZSBzdXJlIGxvZ2dlZCBpbiB1c2VyIGlzIGEgUy5VLlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IGxvZ2luRmllbGRzKSB7XG4gIGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgZW1haWw6ICd0YmEnLFxuICAgIHVzZXJuYW1lLFxuICAgIHBhc3N3b3JkSGFzaCxcbiAgICBmaXJzdG5hbWU6ICd0YmEnLFxuICAgIGxhc3RuYW1lOiAndGJhJyxcbiAgfTtcbiAgcmV0dXJuIGRiLnVzZXIuY3JlYXRlKHtcbiAgICBkYXRhLFxuICB9KTtcbn1cblxuLy8gZ2V0IHNlc3Npb24gc2VjcmV0XG5jb25zdCBzZXNzaW9uU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQ7XG5pZiAoIXNlc3Npb25TZWNyZXQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdubyBzZXNzaW9uIHNlY3JldCBmb3VuZCcpO1xufVxuXG4vLyBjcmVhdGUgc2Vzc2lvbiBzdG9yYWdlXG5jb25zdCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiAnQUhfVHV0b3JpbmdfTG9naW4nLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgIHBhdGg6ICcvJyxcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDYwLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICB9LFxufSk7XG5cbi8vIGNyZWF0ZSBzZXNzaW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24odXNlcklkOiBzdHJpbmcsIHJlZGlyZWN0VG86IHN0cmluZykge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKCk7XG4gIHNlc3Npb24uc2V0KCd1c2VySWQnLCB1c2VySWQpO1xuXG4gIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBzdG9yYWdlLmNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG4vLyBnZXQgdXNlciBzZXNzaW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuICByZXR1cm4gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKTtcbn1cblxuLy8gZ2V0IHVzZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldCgndXNlcklkJyk7XG5cbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gJ3N0cmluZycpIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIFRPRE86IGRvIHNvbWV0aGluZyBtZWFuaW5nZnVsbCBoZXJlXG4gICAgY29uc29sZS5sb2coJ0VSUk9SIExPR0lOJywgZXJyKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBsb2dvdXQgdXNlciBhbmQgZGVzdHJveSBzZXNzaW9uXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KCcvYXV0aC9sb2dvdXQnLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCBzdG9yYWdlLmRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxubGV0IGRiOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIF9fZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIGRiLiRjb25uZWN0KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5fX2RiKSB7XG4gICAgZ2xvYmFsLl9fZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgZ2xvYmFsLl9fZGIuJGNvbm5lY3QoKTtcbiAgfVxuICBkYiA9IGdsb2JhbC5fX2RiO1xufVxuXG5leHBvcnQgeyBkYiB9O1xuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgdXNlVG9nZ2xlIGZyb20gJ34vdXRpbHMvdXNlVG9nZ2xlJztcbmltcG9ydCB7IE5hdkxpbmssIExpbmsgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0Jztcbi8vIGltcG9ydCAqIGFzIERyb3Bkb3duTWVudSBmcm9tICdAcmFkaXgtdWkvcmVhY3QtZHJvcGRvd24tbWVudSc7XG5pbXBvcnQgU2tpcExpbmsgZnJvbSAnfi9jb21wb25lbnRzL3NraXBsaW5rL3NraXBsaW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdih7IHVzZXIgfTogeyB1c2VyPzogVXNlciB9KSB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIDxTa2lwTGluayBza2lwVG89XCJtYWluXCIgY2xhc3NOYW1lPVwic2tpcC1saW5rXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlNraXAgTmF2aWdhdGlvbiBMaW5rczwvYnV0dG9uPlxuICAgICAgPC9Ta2lwTGluaz5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cImhlYWRlcl9fbG9nb1wiIHRvPVwiL1wiIHByZWZldGNoPVwiaW50ZW50XCI+XG4gICAgICAgICAgSG9tZVxuICAgICAgICA8L05hdkxpbms+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXZfbGluayBidG4gcm93XCIgdG89XCIvYWJvdXRcIiBwcmVmZXRjaD1cImludGVudFwiPlxuICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2X2xpbmsgYnRuIHJvd1wiIHRvPVwiL3J1bGVzXCIgcHJlZmV0Y2g9XCJpbnRlbnRcIj5cbiAgICAgICAgICAgICAgQ2xhc3Nyb29tIFJ1bGVzXG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgIDxVc2VyTmF2IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwiYnRuIHJvd1wiIHRvPVwiL2F1dGgvbG9naW5cIiBwcmVmZXRjaD1cImludGVudFwiPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBVc2VyTmF2KHsgdXNlciB9OiB7IHVzZXI6IFVzZXIgfSkge1xuICBmdW5jdGlvbiBjbG9zZURyb3Bkb3duKCkge31cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGxpPlxuICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJuYXZfbGluayBidG4gcm93XCIgdG89XCIvaG9tZXdvcmtcIiBwcmVmZXRjaD1cImludGVudFwiPlxuICAgICAgICAgIEhvbWV3b3JrXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cIm5hdl9saW5rIGJ0biByb3dcIiB0bz1cIi90dXRvcmluZ1wiIHByZWZldGNoPVwiaW50ZW50XCI+XG4gICAgICAgICAgVHV0b3JpbmdcbiAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxEcm9wRG93biAvPlxuICAgICAgPGxpPlxuICAgICAgICB7LyogPERyb3Bkb3duTWVudS5Sb290PlxuICAgICAgICAgIDxEcm9wZG93bk1lbnUuVHJpZ2dlciBjbGFzc05hbWU9XCJuYXYtZHJvcGRvd25fX2J0biBuYXYtZHJvcGRvd25fX3RyaWdnZXJcIj5cbiAgICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgICAgPC9Ecm9wZG93bk1lbnUuVHJpZ2dlcj5cblxuICAgICAgICAgIDxEcm9wZG93bk1lbnUuQ29udGVudFxuICAgICAgICAgICAgbG9vcFxuICAgICAgICAgICAgc2lkZU9mZnNldD17M31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9fY29udGVudFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudS5JdGVtIGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9faXRlbVwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9hdXRoL3VzZXIvcHJvZmlsZVwiIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259PlxuICAgICAgICAgICAgICAgIFByb2ZpbGVcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnUuSXRlbT5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnUuSXRlbSBjbGFzc05hbWU9XCJuYXYtZHJvcGRvd25fX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvYXV0aC91c2VyL3NldHRpbmdzXCIgb25DbGljaz17Y2xvc2VEcm9wZG93bn0+XG4gICAgICAgICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnUuSXRlbT5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnUuSXRlbSBjbGFzc05hbWU9XCJuYXYtZHJvcGRvd25fX2l0ZW1cIj5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvYXV0aC91c2VyL3NjaGVkdWxlXCIgb25DbGljaz17Y2xvc2VEcm9wZG93bn0+XG4gICAgICAgICAgICAgICAgU2NoZWR1bGVcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnUuSXRlbT5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnUuU2VwYXJhdG9yIC8+XG4gICAgICAgICAgICB7dXNlci5pc0FkbWluICYmIDxBZG1pbk5hdiAvPn1cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnUuU2VwYXJhdG9yIGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9fc2VwZXJhdG9yXCIgLz5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnUuSXRlbSBjbGFzc05hbWU9XCJuYXYtZHJvcGRvd25fX2l0ZW0gbG9nb3V0XCI+XG4gICAgICAgICAgICAgIDxMb2dvdXQgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51LkFycm93IGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9fYXJyb3dcIiAvPlxuICAgICAgICAgIDwvRHJvcGRvd25NZW51LkNvbnRlbnQ+XG4gICAgICAgIDwvRHJvcGRvd25NZW51LlJvb3Q+ICovfVxuICAgICAgPC9saT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gZnVuY3Rpb24gQWRtaW5OYXYoKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPERyb3Bkb3duTWVudS5JdGVtIGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9faXRlbVwiPlxuLy8gICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwibmF2X2xpbmsgYnRuIHJvd1wiIHRvPVwiL2FkbWluXCIgcHJlZmV0Y2g9XCJpbnRlbnRcIj5cbi8vICAgICAgICAgQWRtaW5cbi8vICAgICAgIDwvTmF2TGluaz5cbi8vICAgICA8L0Ryb3Bkb3duTWVudS5JdGVtPlxuLy8gICApO1xuLy8gfVxuXG5mdW5jdGlvbiBMb2dvdXQoKSB7XG4gIGZ1bmN0aW9uIGhhbmRsZVByb3BvZ2F0aW9uKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkge1xuICAgIGNvbnNvbGUubG9nKCd3ZWVlZScsIHsgZXZlbnQgfSk7XG4gICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGFjdGlvbj1cIi9hdXRoL2xvZ291dFwiIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9fYnRuXCJcbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVQcm9wb2dhdGlvbn1cbiAgICAgICAgb25LZXlVcD17aGFuZGxlUHJvcG9nYXRpb259XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByb3BvZ2F0aW9ufVxuICAgICAgPlxuICAgICAgICBMb2dvdXRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRHJvcERvd24oKSB7XG4gIGNvbnN0IHsgdG9nZ2xlOiBtZW51T3Blbiwgc2V0VG9nZ2xlU3RhdHVzOiBzZXRNZW51T3BlbiB9ID0gdXNlVG9nZ2xlKGZhbHNlKTtcbiAgLy8gY29uc3QgbWVudVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xuICAgIHNldE1lbnVPcGVuKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0TWVudUl0ZW0oKSB7XG4gICAgc2V0TWVudU9wZW4oZmFsc2UpO1xuICB9XG5cbiAgLy8gY29uc3QgaGFuZGxlTWVudVN0YXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKCdmdW5jIGNhbGxlZCcpO1xuICAvLyAgIHNldE1lbnVPcGVuKCk7XG4gIC8vIH0sIFtzZXRNZW51T3Blbl0pO1xuXG4gIGNvbnN0IG5hdlJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgICAgc2V0TWVudU9wZW4oZmFsc2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG91dHNpZGVDbGlja0hhbmRsZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgaWYgKCFuYXZSZWYuY3VycmVudD8uY29udGFpbnModGFyZ2V0KSAmJiBtZW51T3Blbikge1xuICAgICAgICBjbG9zZU1lbnUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG91dHNpZGVDbGlja0hhbmRsZXIsIHRydWUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG91dHNpZGVDbGlja0hhbmRsZXIsIHRydWUpO1xuICAgIH07XG4gIH0sIFttZW51T3Blbiwgc2V0TWVudU9wZW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxsaT5cbiAgICAgIDxkaXYgcmVmPXtuYXZSZWZ9IGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9fY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2LWRyb3Bkb3duX190cmlnZ2VyXCIgb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4oKX0+XG4gICAgICAgICAgU2V0dGluZ3MgVEVTVCBtZW51T3BlblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPHVsXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWRyb3Bkb3duX19jb250ZW50XCJcbiAgICAgICAgICBkYXRhLW9wZW49e21lbnVPcGVuID8gJ3RydWUnIDogJ2ZhbHNlJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtZHJvcGRvd25fX2l0ZW1cIj5cbiAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgICAgb25DbGljaz17c2VsZWN0TWVudUl0ZW19XG4gICAgICAgICAgICAgIHRvPVwiL2F1dGgvdXNlci9wcm9maWxlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHJvZmlsZVxuICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93bl9faXRlbVwiPlxuICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtzZWxlY3RNZW51SXRlbX1cbiAgICAgICAgICAgICAgdG89XCIvYXV0aC91c2VyL3NldHRpbmdzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2V0dGluZ3NcbiAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtZHJvcGRvd25fX2l0ZW1cIj5cbiAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgICAgb25DbGljaz17c2VsZWN0TWVudUl0ZW19XG4gICAgICAgICAgICAgIHRvPVwiL2F1dGgvdXNlci9zY2hlZHVsZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNjaGVkdWxlXG4gICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPC9saT5cblxuICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwibmF2LWRyb3Bkb3duX19pdGVtIGxvZ291dFwiPlxuICAgICAgICAgICAgPExvZ291dCAgdGFiSW5kZXg9ey0xfSAvPlxuICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gLyoqXG4vLyAgKiBAcGFyYW0ge2Jvb2xlYW59IG5ld1N0YXRlIGRlZmF1bHQgaXMgRkFMU0UsIGFjY2VwdHMgbmV3IGJvb2xlYW5cbi8vICAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUb2dnbGUobmV3U3RhdGU6IG51bGwgfCBib29sZWFuID0gbnVsbCkge1xuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUobmV3U3RhdGUgPT09IG51bGwgPyBmYWxzZSA6IG5ld1N0YXRlKTtcblxuICBjb25zdCBzZXRUb2dnbGVTdGF0dXMgPSAoYm9vbD86IGJvb2xlYW4pID0+IHtcbiAgICBpZiAobmV3U3RhdGUpIHtcbiAgICAgIHNldFRvZ2dsZShuZXdTdGF0ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChib29sKSB7XG4gICAgICBzZXRUb2dnbGUoYm9vbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRvZ2dsZSgocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIHJldHVybiB7IHRvZ2dsZSwgc2V0VG9nZ2xlU3RhdHVzIH07XG59XG5cbmV4cG9ydCB7IHVzZVRvZ2dsZSB9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIFN0eWxlcyBhcmUga2VwdCBpbnNpZGUgdGhlIGhlYWRlci5zY3NzXG5cbmludGVyZmFjZSBTa2lwTGlua1Byb3BlcnRpZXMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG4gIHNraXBUbzogc3RyaW5nO1xufVxuXG5jb25zdCBTa2lwTGluazogUmVhY3QuRkM8U2tpcExpbmtQcm9wZXJ0aWVzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBvbkNsaWNrID0gKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvcHMuc2tpcFRvKTtcblxuICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgIGNvbnRhaW5lci50YWJJbmRleCA9IC0xO1xuICAgICAgY29udGFpbmVyLmZvY3VzKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwMDApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KHByb3BzLmNoaWxkcmVuLCB7XG4gICAgb25DbGljayxcbiAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSxcbiAgfSk7XG59O1xuXG5Ta2lwTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJ3NraXAtbGluaycsXG4gIHNraXBUbzogJ21haW46Zmlyc3Qtb2YtdHlwZScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTa2lwTGluaztcbiIsICJpbXBvcnQgQ2FyZHMgZnJvbSAnfi9jb21wb25lbnRzL2NhcmRzL0NhcmRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZHNJbmRleCgpIHtcbiAgcmV0dXJuIDxDYXJkcyAvPjtcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xuXG50eXBlIFNldENhcmREYXRhID0gUmVhY3QuRGlzcGF0Y2g8XG4gIFJlYWN0LlNldFN0YXRlQWN0aW9uPHtcbiAgICBvbmU6IHN0cmluZztcbiAgICB0d286IHN0cmluZztcbiAgICB0aHJlZTogc3RyaW5nO1xuICAgIGZvdXI6IHN0cmluZztcbiAgfT5cbj47XG50eXBlIENhcmREYXRhID0ge1xuICBvbmU6IHN0cmluZztcbiAgdHdvOiBzdHJpbmc7XG4gIHRocmVlOiBzdHJpbmc7XG4gIGZvdXI6IHN0cmluZztcbn07XG5cbmNvbnN0IHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRzUGFyZW50KCkge1xuICBjb25zdCBbY2FyZERhdGEsIHNldENhcmREYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBvbmU6ICcnLFxuICAgIHR3bzogJycsXG4gICAgdGhyZWU6ICcnLFxuICAgIGZvdXI6ICcnLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNvY2tldC5vbignbmV3Q2FyZHMnLCAoZGF0YSkgPT4ge1xuICAgICAgc2V0Q2FyZERhdGEoZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtjYXJkRGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDYXJkcyBjYXJkRGF0YT17Y2FyZERhdGF9IC8+XG4gICAgICA8U2V0Q2FyZHMgY2FyZERhdGE9e2NhcmREYXRhfSBzZXRDYXJkRGF0YT17c2V0Q2FyZERhdGF9IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNldENhcmREYXRhOiBTZXRDYXJkRGF0YTtcbiAgY2FyZERhdGE6IENhcmREYXRhO1xufTtcblxuLy8gVE9ETzogcHV0IHRoaXMgYmVoaW5kIGFuIEFVVEggd2FsbFxuXG5mdW5jdGlvbiBTZXRDYXJkcyh7IHNldENhcmREYXRhLCBjYXJkRGF0YSB9OiBQcm9wcykge1xuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmPEhUTUxGb3JtRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHsgb25lLCB0d28sIHRocmVlLCBmb3VyIH0gPSBjYXJkRGF0YTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgY29uc29sZS5sb2coeyBldmVudCB9KTtcblxuICAgIHNldENhcmREYXRhKChwcmV2RGF0YSkgPT5cbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHByZXZEYXRhLCB7IFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KSxcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZW1pdENhcmRzKCkge1xuICAgIHNvY2tldC5lbWl0KCdzZXRDYXJkcycsIGNhcmREYXRhKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudDogUmVhY3QuRm9ybUV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnZm9ybSBldmVudCA9PiA6JywgZXZlbnQpO1xuICAgIGVtaXRDYXJkcygpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGZvcm0gcmVmPXtmb3JtUmVmfSBjbGFzc05hbWU9XCJpbnB1dC13cmFwcGVyXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm9uZVwiPm9uZTwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwib25lXCJcbiAgICAgICAgaWQ9XCJvbmVcIlxuICAgICAgICB2YWx1ZT17b25lfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cbiAgICAgIC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInR3b1wiPnR3bzwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwidHdvXCJcbiAgICAgICAgaWQ9XCJ0d29cIlxuICAgICAgICB2YWx1ZT17dHdvfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cbiAgICAgIC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInRocmVlXCI+dGhyZWU8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInRocmVlXCJcbiAgICAgICAgaWQ9XCJ0aHJlZVwiXG4gICAgICAgIHZhbHVlPXt0aHJlZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmb3VyXCI+Zm91cjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwiZm91clwiXG4gICAgICAgIGlkPVwiZm91clwiXG4gICAgICAgIHZhbHVlPXtmb3VyfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5zdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhcmRzKHsgY2FyZERhdGEgfTogeyBjYXJkRGF0YTogQ2FyZERhdGEgfSkge1xuICBjb25zdCB7IG9uZSwgdHdvLCB0aHJlZSwgZm91ciB9ID0gY2FyZERhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhcmRzX19jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FyZFwiPntvbmUgJiYgb25lfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDYXJkXCI+e3R3byAmJiB0d299PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhcmRcIj57dGhyZWUgJiYgdGhyZWV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhcmRcIj57Zm91ciAmJiBmb3VyfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjaGVkdWxlKCkge1xuICByZXR1cm4gPGgxPlNjaGVkdWxlIFBhZ2U8L2gxPjtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXR0aW5ncygpIHtcbiAgcmV0dXJuIDxoMT5TZXR0aW5ncyBQYWdlPC9oMT47XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgcmV0dXJuIDxoMT5Qcm9maWxlIFBhZ2U8L2gxPjtcbn1cbiIsICJpbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnfi91dGlscy9zZXNzaW9uLnNlcnZlcic7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlcihyZXF1ZXN0KTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICAvLyBUT0RPOiBhZGQgbG9nZ2luZyB3aGVuIHRoaXMgaGFwcGVuc1xuICAgIHJldHVybiByZWRpcmVjdCgnLycpO1xuICB9XG4gIC8vIFRPRE86IGZpbmQgaG9tZXdvcmsgdGhhdCBoYXMgdGhlIHNhbWUgdXNlcklEIGFzIHVzZXIuaWRcbiAgY29uc3QgZGF0YSA9IHsgdXNlciB9O1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWV3b3JrKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UnVsZXMgcGFnZTwvaDE+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IENoYXQgZnJvbSAnfi9jb21wb25lbnRzL2NoYXQvY2hhdCc7XG5pbXBvcnQgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdC9yb3V0ZU1vZHVsZXMnO1xuaW1wb3J0IENoYXRTdHlsZXMgZnJvbSAnfi9zdHlsZXMvY29tcG9uZW50cy9jaGF0L2NoYXQuY3NzJztcbmltcG9ydCBUdXRvclBhZ2VTdHlsZXMgZnJvbSAnfi9zdHlsZXMvcGFnZXMvdHV0b3JpbmcvdHV0b3JpbmcuY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogQ2hhdFN0eWxlcyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogVHV0b3JQYWdlU3R5bGVzLFxuICAgIH0sXG4gIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0dXRvcmluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInR1dG9yLXdyYXBwZXJcIj5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDxDaGF0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tICdyZWFjdC1lcnJvci1ib3VuZGFyeSc7XG5pbXBvcnQgRXJyb3JGYWxsYmFjayBmcm9tICd+L2NvbXBvbmVudHMvZXJyb3JzL0Vycm9yRmFsbGJhY2snO1xuaW1wb3J0IENoYXRNZXNzYWdlIGZyb20gJ34vY29tcG9uZW50cy9jaGF0L2NoYXRNZXNzYWdlJztcbmltcG9ydCBDaGF0SW5wdXRzIGZyb20gJ34vY29tcG9uZW50cy9jaGF0L2NoYXRJbnB1dHMnO1xuaW1wb3J0IHR5cGUgeyBtZXNzYWdlLCBzZXJ2ZXJNc2cgfSBmcm9tICd+L3R5cGVzJztcblxuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC8nKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdCgpIHtcbiAgLy8gVE9ETyAtIHVwZGF0ZSB0aGlzIHRvIGdldCBVU0VSIGZyb20gZ2xvYmFsIFN0YXRlO1xuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZTxtZXNzYWdlPih7XG4gICAgdXNlck5hbWU6ICcnLFxuICAgIG1zZzogJycsXG4gIH0pO1xuICBjb25zdCBbY2hhdCwgc2V0Q2hhdF0gPSB1c2VTdGF0ZTxtZXNzYWdlW10+KFtdKTtcbiAgY29uc3QgW3NlcnZlck1zZywgc2V0U2VydmVyTXNnXSA9IHVzZVN0YXRlPHNlcnZlck1zZyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TWVzc2FnZSgobWVzc2FnZSkgPT4gT2JqZWN0LmFzc2lnbih7fSwgbWVzc2FnZSwgeyB1c2VyTmFtZTogdXNlck5hbWUgfSkpO1xuICB9LCBbdXNlck5hbWVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNvY2tldC5vbignc2VydmVyTXNnJywgKG1zZykgPT4gc2V0U2VydmVyTXNnKG1zZykpO1xuICAgIHNvY2tldC5vbignbWVzc2FnZScsICh7IHVzZXJOYW1lLCBtc2cgfSkgPT4ge1xuICAgICAgc2V0Q2hhdCgocHJldikgPT4gcHJldj8uY29uY2F0KHsgdXNlck5hbWUsIG1zZyB9KSk7XG4gICAgICBzZXRNZXNzYWdlKChtZXNzYWdlKSA9PiBPYmplY3QuYXNzaWduKHt9LCBtZXNzYWdlLCB7IG1zZzogJycgfSkpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBUT0RPIC0gc2Nyb2xsIHRoZSBjaGF0IHRvIHRoZSBsYXN0IGNoYXRcbiAgICBjb25zdCBjaGF0cyA9IGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhdF9fbWVzc2FnZScpO1xuICAgIGNvbnN0IGNoYXRDb3VudCA9IGNoYXRzLmxlbmd0aDtcbiAgICBjb25zdCBsYXN0Q2hhdCA9IGNoYXRzW2NoYXRDb3VudCAtIDFdIGFzIEhUTUxFbGVtZW50O1xuICAgIC8vIGNvbnN0IGNoYXRXcmFwcGVyID0gZG9jdW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgLy8gICAnLmNoYXRfX2NvbnRlbnRfX3dyYXBwZXInLFxuICAgIC8vICkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgLy8gVE9ETzogbGFzdCBjaGF0IGlkZW50aWZpZXIgaXMgd29ya2luZy4ganVzdCBoYXZlIHRvIHNjcm9sbCB0aGUgY2hhdFxuICAgIC8vIHJlZmVyIHRvIGh0dHBzOi8vanNmaWRkbGUubmV0L3hqNWMzamNuLzEvXG4gICAgY29uc29sZS5sb2coeyBsYXN0Q2hhdCB9KTtcbiAgICAvLyBjaGF0V3JhcHBlcj8uc2Nyb2xsVG9wKGxhc3RDaGF0Lm91dGVySGVpZ2h0KCkpO1xuICB9LCBbY2hhdF0pO1xuXG4gIGZ1bmN0aW9uIGVtaXRNZXNzYWdlKCkge1xuICAgIGNvbnN0IHsgdXNlck5hbWUsIG1zZyB9ID0gbWVzc2FnZTtcbiAgICBzb2NrZXQuZW1pdCgnbWVzc2FnZScsIHsgdXNlck5hbWUsIG1zZyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVycm9ySGFuZGxlcihlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogeyBjb21wb25lbnRTdGFjazogc3RyaW5nIH0pIHtcbiAgICBjb25zb2xlLmxvZygnTE9HR0lORycsIHsgZXJyb3IgfSwgeyBlcnJvckluZm8gfSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JCb3VuZGFyeVxuICAgICAgRmFsbGJhY2tDb21wb25lbnQ9e0Vycm9yRmFsbGJhY2t9XG4gICAgICBvbkVycm9yPXsoZXJyb3IsIGVycm9ySW5mbykgPT4gZXJyb3JIYW5kbGVyKGVycm9yLCBlcnJvckluZm8pfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdF9fd3JhcHBlclwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2hhdF9fdGl0bGVcIj5DaGF0PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0X19jb250ZW50X193cmFwcGVyXCI+XG4gICAgICAgICAge2NoYXQgJiZcbiAgICAgICAgICAgIGNoYXQubWFwKCh7IHVzZXJOYW1lLCBtc2cgfSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxDaGF0TWVzc2FnZSBrZXk9e2BjaGF0JHtpZHh9YH0gdXNlck5hbWU9e3VzZXJOYW1lfSB0ZXh0PXttc2d9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj51c2VyTmFtZTogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAvPlxuICAgICAgICA8Q2hhdElucHV0c1xuICAgICAgICAgIGVtaXRNZXNzYWdlPXtlbWl0TWVzc2FnZX1cbiAgICAgICAgICBzZXRNZXNzYWdlPXtzZXRNZXNzYWdlfVxuICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XG4gICAgICAgICAgdXNlck5hbWU9e3VzZXJOYW1lfVxuICAgICAgICAvPlxuXG4gICAgICAgIHtzZXJ2ZXJNc2cgJiYgc2VydmVyTXNnfVxuICAgICAgPC9kaXY+XG4gICAgPC9FcnJvckJvdW5kYXJ5PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yRmFsbGJhY2soKSB7XG4gIC8vICh7XG4gIC8vICAgZXJyb3IsXG4gIC8vICAgcmVzZXRFcnJvckJvdW5kYXJ5LFxuICAvLyB9OiB7XG4gIC8vICAgZXJyb3I6IEVycm9yO1xuICAvLyAgIHJlc2V0RXJyb3JCb3VuZGFyeTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248dD4+O1xuICAvLyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiByb2xlPVwiYWxlcnRcIj5cbiAgICAgIDxoMj5Tb21ldGhpbmcgV2VudCBXcm9uZyE8L2gyPlxuICAgICAgey8qIDxwcmU+e2Vycm9yLm1lc3NhZ2V9PC9wcmU+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0RXJyb3JCb3VuZGFyeX0+UmVsb2FkPC9idXR0b24+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRNZXNzYWdlKHtcbiAgdXNlck5hbWUsXG4gIHRleHQsXG59OiB7XG4gIHVzZXJOYW1lOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8cCBjbGFzc05hbWU9XCJjaGF0X19tZXNzYWdlXCI+XG4gICAgICA8c3BhblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICAgIGZvbnRTaXplOiAnMC44cmVtJyxcbiAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt1c2VyTmFtZX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDp7JyAnfVxuICAgICAgPHNwYW5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgICBjb2xvcjogJ3JnYigwIDAgMCAvIDgwJSknLFxuICAgICAgICAgIGZvbnRTaXplOiAnMS4xcmVtJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L3NwYW4+XG4gICAgPC9wPlxuICApO1xufVxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IG1lc3NhZ2UgfSBmcm9tICd+L3R5cGVzJztcblxudHlwZSBjaGF0SW5wdXRUeXBlcyA9IHtcbiAgZW1pdE1lc3NhZ2U6ICgpID0+IHZvaWQ7XG4gIHNldE1lc3NhZ2U6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG1lc3NhZ2U+PjtcbiAgbWVzc2FnZTogbWVzc2FnZTtcbiAgdXNlck5hbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRJbnB1dHMoe1xuICBlbWl0TWVzc2FnZSxcbiAgc2V0TWVzc2FnZSxcbiAgbWVzc2FnZSxcbiAgdXNlck5hbWUgPSAnJyxcbn06IGNoYXRJbnB1dFR5cGVzKSB7XG4gIGNvbnN0IG1lc3NhZ2VSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudCB8IG51bGw+KG51bGwpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudDogUmVhY3QuRm9ybUV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodXNlck5hbWUgPT09IG51bGwpIHRocm93IG5ldyBFcnJvcignbm8gdXNlciBuYW1lJyk7XG4gICAgaWYgKG1lc3NhZ2VSZWYuY3VycmVudCA9PT0gbnVsbCB8fCBtZXNzYWdlUmVmLmN1cnJlbnQudmFsdWUudHJpbSgpID09PSAnJylcbiAgICAgIHJldHVybjtcbiAgICBlbWl0TWVzc2FnZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVGV4dENoYW5nZSgpIHtcbiAgICAvLyBUT0RPOiBtYWtlIGl0IHNvIHRoYXQgaXQgYWxsb3dzIHRoZSB1c2VyIHRvIGNsZWFyIEFMTCBjb250ZW50XG4gICAgaWYgKG1lc3NhZ2VSZWYuY3VycmVudCA9PT0gbnVsbCB8fCBtZXNzYWdlUmVmLmN1cnJlbnQudmFsdWUudHJpbSgpID09PSAnJylcbiAgICAgIHJldHVybjtcbiAgICBpZiAodXNlck5hbWUgPT09IG51bGwpIHJldHVybjtcblxuICAgIGNvbnNvbGUubG9nKCd0ZXh0IGlzIGNoYW5nZWQnKTtcblxuICAgIHNldE1lc3NhZ2Uoe1xuICAgICAgbXNnOiBtZXNzYWdlUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICB1c2VyTmFtZTogdXNlck5hbWUsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGFjdGlvbj1cIlwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImNoYXRfX2Zvcm1cIj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cbiAgICAgICAgbWVzc2FnZVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj17YCBtZXNzYWdlICR7U3RyaW5nLmZyb21DaGFyQ29kZSgxMDE0Nyl9YH1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17bWVzc2FnZS5tc2d9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXh0Q2hhbmdlfVxuICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgIHJlZj17bWVzc2FnZVJlZn1cbiAgICAgIC8+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+QWJvdXQgcGFnZTwvaDE+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IEFkbWluTmF2IGZyb20gJ34vY29tcG9uZW50cy9hZG1pbk5hdi9BZG1pbk5hdic7XG4vLyBpbXBvcnQgeyB1c2VBY3Rpb25EYXRhIH0gZnJvbSAncmVtaXgnO1xuLy8gaW1wb3J0IHsgYmFkUmVxdWVzdCB9IGZyb20gJ34vdXRpbHMvaGVscGVycyc7XG4vLyBpbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJztcblxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIocmVxdWVzdCk7XG5cbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmlzQWRtaW4pIHtcbiAgICAvLyBUT0RPOiBhZGQgbG9nZ2luZyB3aGVuIHRoaXMgaGFwcGVuc1xuICAgIHJldHVybiByZWRpcmVjdCgnLycpO1xuICB9XG4gIGNvbnN0IGRhdGEgPSB7IHVzZXIgfTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG4vLyBUT0RPOiBhZGQgYWN0aW9uIHNvIHRoYXQgY2FuIGNyZWF0ZSB1c2VycyBhbmQgc2hvdyBhbGwgdXNlcnNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5JbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8QWRtaW5MYXlvdXQ+XG4gICAgICA8aDE+QWRtaW4gaW5kZXg8L2gxPlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvQWRtaW5MYXlvdXQ+XG4gICk7XG59XG5cbnR5cGUgYWRtaW5MYXlvdXRQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG59O1xuZnVuY3Rpb24gQWRtaW5MYXlvdXQoeyBjaGlsZHJlbiB9OiBhZG1pbkxheW91dFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxBZG1pbk5hdiAvPlxuICAgICAgPGFydGljbGU+e2NoaWxkcmVufTwvYXJ0aWNsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbk5hdigpIHtcbiAgcmV0dXJuIDxOYXZMaW5rIHRvPVwidXNlcnNcIj5Vc2VyczwvTmF2TGluaz47XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoKSB7XG4gIHJldHVybiA8aDI+VXNlcnMgcGFnZTwvaDI+O1xufVxuIiwgImltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJztcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiB7IHJlcXVlc3Q6IFJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gbG9nb3V0KHJlcXVlc3QpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0KCcvJyk7XG59O1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJ1bGVzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UnVsZXMgcGFnZTwvaDE+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgdXNlQWN0aW9uRGF0YSB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuLy8gaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwiQHJlbWl4LXJ1bi9ub2RlXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUlucHV0LCBiYWRSZXF1ZXN0IH0gZnJvbSAnfi91dGlscy9oZWxwZXJzJztcbmltcG9ydCB7IGxvZ2luLCBjcmVhdGVVc2VyU2Vzc2lvbiB9IGZyb20gJ34vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXInO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9OiB7IHJlcXVlc3Q6IFJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICAvLyBjb25zdCBsb2dpblR5cGUgPSBmb3JtLmdldCgnbG9naW5UeXBlJyk7XG4gIGNvbnN0IHVzZXJuYW1lID0gZm9ybS5nZXQoJ3VzZXJuYW1lJyk/LnRvU3RyaW5nKCk7XG4gIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoJ3Bhc3N3b3JkJyk/LnRvU3RyaW5nKCk7XG5cbiAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICBmaWVsZEVycm9yczoge1xuICAgICAgICB1c2VybmFtZTogJ3VzZXJuYW1lIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgcGFzc3dvcmQ6ICdwYXNzd29yZCBpcyByZXF1aXJlZCcsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgZmllbGRzID0geyB1c2VybmFtZSwgcGFzc3dvcmQgfTtcbiAgLy8gVE9ETzogYWRkIHZhbGlkYXRpb24gZm9yIGVpdGhlciB1c2VybmFtZSBPUiBlbWFpbFxuICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICB1c2VybmFtZTogdmFsaWRhdGVJbnB1dCgndXNlcm5hbWUnLCB1c2VybmFtZSwgMyksXG4gICAgcGFzc3dvcmQ6IHZhbGlkYXRlSW5wdXQoJ3Bhc3N3b3JkJywgcGFzc3dvcmQsIDYpLFxuICB9O1xuXG4gIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKSB7XG4gICAgY29uc29sZS5sb2coJzw9IGZpZWxkRXJyb3JzID0+ICcsIGZpZWxkRXJyb3JzKTtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGZpZWxkRXJyb3JzLCBmaWVsZHMgfSk7XG4gIH1cbiAgLy8gZmluZCB1c2VyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcblxuICAvLyBjaGVjayB1c2VyIGRldGFpbHMgYXJlIG9rXG4gIGlmICghdXNlcilcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICBmaWVsZHMsXG4gICAgICBmaWVsZEVycm9yczogeyB1c2VybmFtZTogJ2ludmFsaWQgY3JlZGVudGlhbHMnIH0sXG4gICAgfSk7XG4gIC8vIGNyZWF0ZSB1c2VyIHNlc3Npb25cbiAgcmV0dXJuIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXIuaWQsICcvJyk7XG5cbiAgLy8gICBjYXNlICdyZWdpc3Rlcic6IHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgdGhlIHJlZ2lzdGVyJyk7XG4gIC8vICAgICAvLyBjaGVjayBpZiB1c2VyIGV4aXN0c1xuICAvLyAgICAgY29uc3QgdXNlckV4aXN0cyA9IGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IHVzZXJuYW1lIH0gfSk7XG4gIC8vICAgICBpZiAodXNlckV4aXN0cylcbiAgLy8gICAgICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAvLyAgICAgICAgIGZpZWxkcyxcbiAgLy8gICAgICAgICBmaWVsZEVycm9yczogeyB1c2VybmFtZTogYHVzZXJuYW1lICR7dXNlcm5hbWV9IGFscmVhZHkgZXhpc3RzYCB9LFxuICAvLyAgICAgICB9KTtcbiAgLy8gICAgIC8vIHJlZ2lzdGVyIGEgbmV3IHVzZXJcbiAgLy8gICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCByZWdpc3Rlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcbiAgLy8gICAgIGlmICghbmV3VXNlcilcbiAgLy8gICAgICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZHMsIGZvcm1FcnJvcjogJ1NvbWV0aGluZyB3ZW50IHdyb25nJyB9KTtcbiAgLy8gICAgIC8vIGNyZWF0ZSB1c2VyIHNlc3Npb25cbiAgLy8gICAgIHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbihuZXdVc2VyLmlkLCAnL3Bvc3RzJyk7XG4gIC8vICAgfVxuXG4gIC8vICAgZGVmYXVsdDoge1xuICAvLyAgICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZHMsIGZvcm1FcnJvcjogJ2xvZ2luIHR5cGUgaXMgbm90IHZhbGlkJyB9KTtcbiAgLy8gICB9XG4gIC8vIH1cbn07XG5cbmZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Mb2dpbjwvaDE+XG5cbiAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImxvZ2luZm9ybVwiPlxuICAgICAgICAgIDxsZWdlbmQ+TG9naW48L2xlZ2VuZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luZm9ybV9fY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbmZvcm1fX2NvbnRlbnRfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy51c2VybmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy51c2VybmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwicmVnaW9uXCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCI+XG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycy51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbmZvcm1fX2NvbnRlbnRfX3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHVwZGF0ZSB0aGlzIHRvIHJlZmxlY3QgYSBwYXNzd29yZCByZXNldCBvcHRpb24gc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAvLyBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwicmVnaW9uXCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCI+XG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwgImltcG9ydCB7IGpzb24gfSBmcm9tICdAcmVtaXgtcnVuL25vZGUnO1xuaW1wb3J0IHR5cGUgeyBiYWRSZXF1ZXN0UHJvcHMgfSBmcm9tICd+L3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQoXG4gIG5hbWU6IHN0cmluZyxcbiAgaW5wdXQ6IEZvcm1EYXRhRW50cnlWYWx1ZSxcbiAgbGVuZ3RoOiBudW1iZXIgPSAxLFxuKSB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnIHx8IGlucHV0Lmxlbmd0aCA8IGxlbmd0aCkge1xuICAgIHJldHVybiBgJHtuYW1lfSBzaG91bGQgYmUgYXQgbGVhc3QgJHtsZW5ndGh9IGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhZFJlcXVlc3QoZGF0YTogYmFkUmVxdWVzdFByb3BzKSB7XG4gIHJldHVybiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XG59XG4iLCAiLy8gY29uc3Qgc29ja2V0ID0gaW8uY29ubmVjdChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLTJcIj5cbiAgICAgIDxoMT5Ib21lIGluZGV4PC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbWlsaXF1ZVxuICAgICAgICAgIHBhcmlhdHVyLCBuaWhpbCBjb3JydXB0aSBvYmNhZWNhdGkgZHVjaW11cyBudWxsYSBpc3RlIGVsaWdlbmRpXG4gICAgICAgICAgZGlzdGluY3RpbyBhdXRlbSB2ZW5pYW0uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2ltaWxpcXVlXG4gICAgICAgICAgcGFyaWF0dXIsIG5paGlsIGNvcnJ1cHRpIG9iY2FlY2F0aSBkdWNpbXVzIG51bGxhIGlzdGUgZWxpZ2VuZGlcbiAgICAgICAgICBkaXN0aW5jdGlvIGF1dGVtIHZlbmlhbS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTaW1pbGlxdWVcbiAgICAgICAgICBwYXJpYXR1ciwgbmloaWwgY29ycnVwdGkgb2JjYWVjYXRpIGR1Y2ltdXMgbnVsbGEgaXN0ZSBlbGlnZW5kaVxuICAgICAgICAgIGRpc3RpbmN0aW8gYXV0ZW0gdmVuaWFtLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNpbWlsaXF1ZVxuICAgICAgICAgIHBhcmlhdHVyLCBuaWhpbCBjb3JydXB0aSBvYmNhZWNhdGkgZHVjaW11cyBudWxsYSBpc3RlIGVsaWdlbmRpXG4gICAgICAgICAgZGlzdGluY3RpbyBhdXRlbSB2ZW5pYW0uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzhhNWI5NTEwJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1WR0hZRkozUi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWE9JVzYySlIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QTk1NVk9ETC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUlYRURYSkxGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTTdNVTMzWVcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1WUVlCQVVTUS5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtN1AyNFJCWUcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvYWJvdXQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWJvdXQvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWJvdXQnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fib3V0L2luZGV4LTVZR0JTRVRTLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRtaW4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWRtaW4vaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRtaW4nLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2FkbWluL2luZGV4LUJFVU9NNUs3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NREVFVU02Qi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZG1pbi91c2Vycyc6eydpZCc6J3JvdXRlcy9hZG1pbi91c2VycycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZG1pbi91c2VycycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZG1pbi91c2Vycy1RWTdDVUpVVS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvbG9naW4nOnsnaWQnOidyb3V0ZXMvYXV0aC9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoL2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvbG9naW4tQ0hJSDJJSE0uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1ERUVVTTZCLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2F1dGgvbG9nb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvbG9nb3V0LUdEMjNGQU4yLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NREVFVU02Qi5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvdXNlci9wcm9maWxlJzp7J2lkJzoncm91dGVzL2F1dGgvdXNlci9wcm9maWxlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvdXNlci9wcm9maWxlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvdXNlci9wcm9maWxlLTUyRllINTJFLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC91c2VyL3NjaGVkdWxlJzp7J2lkJzoncm91dGVzL2F1dGgvdXNlci9zY2hlZHVsZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoL3VzZXIvc2NoZWR1bGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC91c2VyL3NjaGVkdWxlLVJFTDJNT1FGLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC91c2VyL3NldHRpbmdzJzp7J2lkJzoncm91dGVzL2F1dGgvdXNlci9zZXR0aW5ncycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoL3VzZXIvc2V0dGluZ3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC91c2VyL3NldHRpbmdzLU9GRExOV1BZLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaG9tZXdvcmsvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaG9tZXdvcmsvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonaG9tZXdvcmsnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2hvbWV3b3JrL2luZGV4LTJJNUtHN0FMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NREVFVU02Qi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1PWUlSWEVDVC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3J1bGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL3J1bGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3J1bGVzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ydWxlcy9pbmRleC1RWVo0WEJXMy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3R1dG9yaW5nL2NhcmRzL2luZGV4Jzp7J2lkJzoncm91dGVzL3R1dG9yaW5nL2NhcmRzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3R1dG9yaW5nL2NhcmRzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy90dXRvcmluZy9jYXJkcy9pbmRleC1HQTVHSzdDTS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWlJIS1JTRUguanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3R1dG9yaW5nL2luZGV4Jzp7J2lkJzoncm91dGVzL3R1dG9yaW5nL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3R1dG9yaW5nJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy90dXRvcmluZy9pbmRleC1PM0JRUFRPWC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWlJIS1JTRUguanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC04QTVCOTUxMC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyx3QkFBd0I7QUFBQSxNQUNyRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZ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
