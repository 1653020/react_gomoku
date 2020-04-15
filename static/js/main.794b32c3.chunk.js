(this.webpackJsonpmy_app=this.webpackJsonpmy_app||[]).push([[0],{13:function(e,t,n){},7:function(e,t,n){e.exports=n(8)},8:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),s=n(4),i=n(3),u=n(0),l=n.n(u),o=n(6),c=n.n(o);n(13);function m(e){return l.a.createElement("button",{className:"square "+(e.isWinning?"square--won":""),onClick:e.onClick},e.value)}var h=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"renderSquare",value:function(e){var t=this;return l.a.createElement(m,{key:e,isWinning:this.props.winningSquares.includes(e),value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){for(var e=[],t=0;t<20;t++){for(var n=[],a=0;a<20;a++)n.push(this.renderSquare(20*t+a));e.push(l.a.createElement("div",{key:t,className:"board-row"},n))}return l.a.createElement("div",null," ",e," ")}}]),n}(l.a.Component),v=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={squares:Array(400).fill(null),history:[{squares:Array(400).fill(null)}],xIsNext:!0,stepNumber:0,isAscending:!0},e}return Object(r.a)(n,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();f(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({squares:n,history:t.concat([{squares:n,latestMoveSquare:e}]),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleSortToggle",value:function(){this.setState({isAscending:!this.state.isAscending})}},{key:"render",value:function(){var e,t=this,n=this.state.history,a=this.state.stepNumber,r=n[a],s=f(this.state.squares),i=n.map((function(e,n){var r=e.latestMoveSquare,s=1+r%20,i=1+Math.floor(r/20),u=n?"Go to move #".concat(n," (").concat(s,", ").concat(i,")"):"Go to game start";return l.a.createElement("li",{key:n},l.a.createElement("button",{className:n===a?"move-list-item-selected":"",onClick:function(){return t.jumpTo(n)}},u))}));e=s?"Winner is "+s.winner:this.state.squares.includes(null)?"Next player: "+(this.state.xIsNext?"X":"O"):"Draw";var u=this.state.isAscending;return u||i.reverse(),l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement(h,{winningSquares:s?s.line:[],squares:r.squares,onClick:function(e){return t.handleClick(e)}})),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",{className:"status"},e),l.a.createElement("button",{onClick:function(){return t.handleSortToggle()}},u?"descending":"ascending"),l.a.createElement("ol",null,i)))}}]),n}(l.a.Component);function f(e){for(var t=0;t<20;t++)for(var n=0;n<16;n++)if(e[20*t+n]&&e[20*t+n]===e[20*t+n+1]&&e[20*t+n]===e[20*t+n+2]&&e[20*t+n]===e[20*t+n+3]&&e[20*t+n]===e[20*t+n+4])return{winner:e[20*t+n],line:[20*t+n,20*t+n+1,20*t+n+2,20*t+n+3,20*t+n+4]};for(var a=0;a<20;a++)for(var r=0;r<16;r++)if(e[20*r+a]&&e[20*r+a]===e[20*(r+1)+a]&&e[20*r+a]===e[20*(r+2)+a]&&e[20*r+a]===e[20*(r+3)+a]&&e[20*r+a]===e[20*(r+4)+a])return{winner:e[20*r+a],line:[20*r+a,20*(r+1)+a,20*(r+2)+a,20*(r+3)+a,20*(r+4)+a]};for(var s=0;s<16;s++)for(var i=0;i<16;i++)if(e[20*s+i]&&e[20*s+i]===e[20*(s+1)+i+1]&&e[20*s+i]===e[20*(s+2)+i+2]&&e[20*s+i]===e[20*(s+3)+i+3]&&e[20*s+i]===e[20*(s+4)+i+4])return{winner:e[20*s+i],line:[20*s+i,20*(s+1)+i+1,20*(s+2)+i+2,20*(s+3)+i+3,20*(s+4)+i+4]};for(var u=0;u<16;u++)for(var l=4;l<20;l++)if(e[20*u+l]&&e[20*u+l]===e[20*(u+1)+l-1]&&e[20*u+l]===e[20*(u+2)+l-2]&&e[20*u+l]===e[20*(u+3)+l-3]&&e[20*u+l]===e[20*(u+4)+l-4])return{winner:e[20*u+l],line:[20*u+l,20*(u+1)+l-1,20*(u+2)+l-2,20*(u+3)+l-3,20*(u+4)+l-4]};return null}c.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[7,1,2]]]);
//# sourceMappingURL=main.794b32c3.chunk.js.map