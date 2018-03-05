const m = require('mithril');

console.log("hello world!");

const PendingProcesses = {
  oninit: (vnode) => {
    m.request({
      method: "GET",
      url: "/api/get_full"
    }).then((res) => {
      console.log(res);
    });
  },
  view: (vnode) => {
  }
}

const Faucet = {
  view: (vnode) => {
    return m(m("h1", "Farrah Faucet"))
  }
}

m.route(document.body, "/faucet", {
  "/faucet": Faucet
});