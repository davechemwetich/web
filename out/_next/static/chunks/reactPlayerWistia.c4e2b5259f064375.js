(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8055],{8018:function(e,t,a){var l,n,s=Object.create,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,p=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,u=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t,a,l)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of r(t))h.call(e,n)||n===a||i(e,n,{get:()=>t[n],enumerable:!(l=o(t,n))||l.enumerable});return e},c=(e,t,a)=>(u(e,"symbol"!=typeof t?t+"":t,a),a),d={};((e,t)=>{for(var a in t)i(e,a,{get:t[a],enumerable:!0})})(d,{default:()=>f}),e.exports=y(i({},"__esModule",{value:!0}),d);var b=(n=null!=(l=a(67294))?s(p(l)):{},y(l&&l.__esModule?n:i(n,"default",{value:l,enumerable:!0}),l)),P=a(38045),m=a(71776);class f extends b.Component{constructor(){super(...arguments),c(this,"callPlayer",P.callPlayer),c(this,"playerID",this.props.config.playerId||`wistia-player-${(0,P.randomString)()}`),c(this,"onPlay",(...e)=>this.props.onPlay(...e)),c(this,"onPause",(...e)=>this.props.onPause(...e)),c(this,"onSeek",(...e)=>this.props.onSeek(...e)),c(this,"onEnded",(...e)=>this.props.onEnded(...e)),c(this,"onPlaybackRateChange",(...e)=>this.props.onPlaybackRateChange(...e)),c(this,"mute",()=>{this.callPlayer("mute")}),c(this,"unmute",()=>{this.callPlayer("unmute")})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){let{playing:t,muted:a,controls:l,onReady:n,config:s,onError:i}=this.props;(0,P.getSDK)("https://fast.wistia.com/assets/external/E-v1.js","Wistia").then(e=>{s.customControls&&s.customControls.forEach(t=>e.defineControl(t)),window._wq=window._wq||[],window._wq.push({id:this.playerID,options:{autoPlay:t,silentAutoPlay:"allow",muted:a,controlsVisibleOnLoad:l,fullscreenButton:l,playbar:l,playbackRateControl:l,qualityControl:l,volumeControl:l,settingsControl:l,smallPlayButton:l,...s.options},onReady:e=>{this.player=e,this.unbind(),this.player.bind("play",this.onPlay),this.player.bind("pause",this.onPause),this.player.bind("seek",this.onSeek),this.player.bind("end",this.onEnded),this.player.bind("playbackratechange",this.onPlaybackRateChange),n()}})},i)}unbind(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded),this.player.unbind("playbackratechange",this.onPlaybackRateChange)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.unbind(),this.callPlayer("remove")}seekTo(e,t=!0){this.callPlayer("time",e),t||this.pause()}setVolume(e){this.callPlayer("volume",e)}setPlaybackRate(e){this.callPlayer("playbackRate",e)}getDuration(){return this.callPlayer("duration")}getCurrentTime(){return this.callPlayer("time")}getSecondsLoaded(){return null}render(){let{url:e}=this.props,t=e&&e.match(m.MATCH_URL_WISTIA)[1],a=`wistia_embed wistia_async_${t}`;return b.default.createElement("div",{id:this.playerID,key:t,className:a,style:{width:"100%",height:"100%"}})}}c(f,"displayName","Wistia"),c(f,"canPlay",m.canPlay.wistia),c(f,"loopOnEnded",!0)}}]);