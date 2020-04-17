(this["webpackJsonpdnd-tracker"]=this["webpackJsonpdnd-tracker"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),i=(a(12),a(1)),s=a(2),l=a(4),u=a(3),h=(a(13),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"updateVal",value:function(e){this.props.app.state.characters[this.props.i][this.props.name.toLowerCase()]+=e,this.props.app.setState({characters:this.props.app.state.characters})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"value-button"},r.a.createElement("button",{onClick:function(){return e.updateVal(-100)}},"-100"),r.a.createElement("button",{onClick:function(){return e.updateVal(-10)}},"-10"),r.a.createElement("button",{onClick:function(){return e.updateVal(-1)}},"-1"),r.a.createElement("div",{className:"value-button--value"},this.props.name,r.a.createElement("br",null),this.props.val),r.a.createElement("button",{onClick:function(){return e.updateVal(1)}},"+1"),r.a.createElement("button",{onClick:function(){return e.updateVal(10)}},"+10"),r.a.createElement("button",{onClick:function(){return e.updateVal(100)}},"+100"))}}]),a}(r.a.Component)),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={characters:[]},n}return Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=localStorage.getItem("characters");t&&this.setState({characters:JSON.parse(t)}),window.addEventListener("beforeunload",(function(){localStorage.setItem("characters",JSON.stringify(e.state.characters))}))}},{key:"removePlayer",value:function(e){window.confirm("Are you sure?")&&(this.state.characters.splice(e,1),this.setState({characters:this.state.characters}))}},{key:"renderCharacters",value:function(){var e=this;return 0===this.state.characters.length?r.a.createElement("p",null,"No characters"):this.state.characters.map((function(t,a){return r.a.createElement("div",{className:"character",key:t.name},r.a.createElement("div",{className:"character-name"},t.name,r.a.createElement("button",{onClick:function(){return e.removePlayer(a)}},"X")),r.a.createElement(h,{i:a,val:t.hp,name:"HP",app:e}),r.a.createElement(h,{i:a,val:t.gold,name:"Gold",app:e}))}))}},{key:"addPlayer",value:function(){var e=prompt("Player name:");e&&(this.state.characters.push({name:e,hp:0,gold:0}),this.setState({characters:this.state.characters}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"action-bar"},r.a.createElement("h2",null,"D&D Tracker")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"characters-list"},this.renderCharacters())),r.a.createElement("button",{className:"fab",onClick:function(){return e.addPlayer()}},"+"))}}]),a}(r.a.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/dnd-tracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/dnd-tracker","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.7f35ce61.chunk.js.map