(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(4),r=t.n(o),s=(t(14),t(1)),c=t(2),l=t(6),m=t(5),d=t(7);t(15);var g=function(e){return i.a.createElement("div",{className:"Card",onClick:e.onClick},i.a.createElement("img",{src:e.image,id:e.imageId,className:"Card-img",alt:e.name}))};t(16);var u=function(e){return i.a.createElement("div",{className:"container"},e.children)},h=[{id:1,name:"Buffy",image:"./images/Buffy.png"},{id:2,name:"Willow",image:"./images/Willow.png"},{id:3,name:"Giles",image:"./images/Giles.png"},{id:4,name:"Xander",image:"./images/Xander.png"},{id:5,name:"Spike",image:"./images/Spike.png"},{id:6,name:"Angel",image:"./images/Angel.png"},{id:7,name:"Tara",image:"./images/Tara.png"},{id:8,name:"Cordelia",image:"./images/Cordelia.png"},{id:9,name:"Anya",image:"./images/Anya.png"},{id:10,name:"Oz",image:"./images/Oz.png"},{id:11,name:"Faith",image:"./images/Faith.png"},{id:12,name:"Drusilla",image:"./images/Dru.png"}],f=function(){function e(){Object(s.a)(this,e),this.characters=h,this.selected=new Set,this.board=this.characters.map(function(e){return e}),this.score=0}return Object(c.a)(e,[{key:"reset",value:function(){this.score=0,this.selected.clear(),this.randomizeBoard()}},{key:"randomizeBoard",value:function(){for(var e=[],a=new Set;a.size<this.board.length;)a.add(Math.floor(12*Math.random()));var t=!0,n=!1,i=void 0;try{for(var o,r=a.values()[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){var s=o.value;e.push(this.board[s])}}catch(c){n=!0,i=c}finally{try{t||null==r.return||r.return()}finally{if(n)throw i}}this.board=e}},{key:"select",value:function(e){return!this.selected.has(e)&&(this.selected.add(e),this.score++,!0)}}]),e}(),p=(t(17),{lost:"lost",won:"won"});var w=function(e){return i.a.createElement("div",{className:"Modal"},e.modalType==p.lost?"You Lost!":"You Won!")},v=(t(18),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).game=new f,t.state={score:t.game.score,board:t.game.board,showModal:!1,modalType:p.lost},t.selectCharacter=function(e){e.stopPropagation();var a=e.target.id;console.log(e.target),t.game.select(parseInt(a))?(t.game.randomizeBoard(),t.setGameState(),12===t.score&&t.wonTheGame()):t.wrongAnswer()},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"setGameState",value:function(){this.setState({board:this.game.board,score:this.game.score}),console.log(this.state)}},{key:"wrongAnswer",value:function(){this.game.reset(),this.setGameState(),this.setState({showModal:!0,modalType:p.lost})}},{key:"wonTheGame",value:function(){this.setState({showModal:!0,modalType:p.won})}},{key:"render",value:function(){var e=this;return i.a.createElement(u,null,i.a.createElement("h1",{className:"title"},"Buffy Game"),i.a.createElement("div",{className:"score"},"Score: ",this.state.score),this.state.showModal&&i.a.createElement(w,{modalType:this.state.modalType}),this.state.board.map(function(a){return i.a.createElement(g,{imageId:a.id,key:a.id,name:a.name,image:a.image,onClick:e.selectCharacter})}))}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.0e1490e4.chunk.js.map