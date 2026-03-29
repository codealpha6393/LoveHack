(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={zap:`<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,gitMerge:`<svg viewBox="0 0 24 24"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>`,layoutDashboard:`<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,library:`<svg viewBox="0 0 24 24"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>`,settings:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M5.07 19.07a10 10 0 0 1 0-14.14M22 12A10 10 0 0 1 12 22v0A10 10 0 0 1 2 12v0A10 10 0 0 1 12 2v0A10 10 0 0 1 22 12v0"/></svg>`,sparkles:`<svg viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,arrowRight:`<svg viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,playCircle:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`,bot:`<svg viewBox="0 0 24 24"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>`,layoutTemplate:`<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="5" rx="1"/><rect x="3" y="10" width="11" height="11" rx="1"/><rect x="16" y="10" width="5" height="11" rx="1"/></svg>`,zapFast:`<svg viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,activity:`<svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,trendingUp:`<svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,checkCircle:`<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,check:`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,x:`<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,play:`<svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,sendHorizonal:`<svg viewBox="0 0 24 24"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M6 12h16"/></svg>`,mousePtrClick:`<svg viewBox="0 0 24 24"><path d="M9 4.5a.5.5 0 0 1 1 0v8a.5.5 0 0 1-1 0V4.5Z"/><path d="M5.5 9a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Z"/><path d="m14.5 14.5 5 5"/></svg>`,mail:`<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,database:`<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`,cloud:`<svg viewBox="0 0 24 24"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,user:`<svg viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,key:`<svg viewBox="0 0 24 24"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>`,wand:`<svg viewBox="0 0 24 24"><path d="M15 4V2"/><path d="M15 16v-2"/><path d="M8 9h2"/><path d="M20 9h2"/><path d="M17.8 11.8 19 13"/><path d="M15 9h.01"/><path d="M17.8 6.2 19 5"/><path d="m3 21 9-9"/><path d="M12.2 6.2 11 5"/></svg>`,gitNetwork:`<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><circle cx="6" cy="19" r="3"/><circle cx="18" cy="19" r="3"/><path d="M12 8v3"/><path d="m12 12-4.5 3"/><path d="m12 12 4.5 3"/></svg>`,workflow:`<svg viewBox="0 0 24 24"><rect x="3" y="3" width="4" height="4" rx="1"/><rect x="17" y="3" width="4" height="4" rx="1"/><rect x="17" y="17" width="4" height="4" rx="1"/><rect x="3" y="17" width="4" height="4" rx="1"/><path d="M7 5h10"/><path d="M7 19h10"/><path d="M5 7v10"/><path d="M19 7v10"/></svg>`,trash:`<svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,terminal:`<svg viewBox="0 0 24 24"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,repeat:`<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,filterX:`<svg viewBox="0 0 24 24"><path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"/><path d="m22 3-5 5"/><path d="m17 3 5 5"/></svg>`,alertCircle:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,phone:`<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8c1.91 3.28 4.63 6 7.91 7.91l.44-.44a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17.93Z"/></svg>`,slack:`<svg viewBox="0 0 24 24"><rect x="14.5" y="1.5" width="5" height="5" rx="1"/><path d="M14.5 6.5v5a2.5 2.5 0 0 1-5 0v-5"/><rect x="1.5" y="14.5" width="5" height="5" rx="1"/><path d="M6.5 14.5h5a2.5 2.5 0 0 1 0 5h-5"/><rect x="14.5" y="14.5" width="5" height="5" rx="1"/><path d="M14.5 19.5a2.5 2.5 0 0 0 5 0v-5"/><rect x="1.5" y="1.5" width="5" height="5" rx="1"/><path d="M1.5 6.5h5a2.5 2.5 0 0 1 0 5h-5"/></svg>`};function t(t,n=``){return(e[t]||e.zap).replace(`<svg`,`<svg class="${n}" style="width:1em;height:1em;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;"`)}var n=(()=>{let e=new Map;return{getItem(t){return e.has(t)?e.get(t):null},setItem(t,n){e.set(t,String(n))},removeItem(t){e.delete(t)}}})();function r(e=globalThis.localStorage){return e??n}function i(e,t,n){try{let r=e.getItem(t);return r?JSON.parse(r):n}catch{return n}}function a(e){if(!e)return null;let{password:t,...n}=e;return n}var o={apiKey:`ff_api_key`,featherlessKey:`ff_featherless_key`,aiProvider:`ff_ai_provider`,workflows:`ff_workflows`,execHistory:`ff_exec_history`,theme:`ff_theme`,users:`ff_users`,currentUser:`ff_current_user`};function s(e=r()){return{currentRoute:`/`,apiKey:e.getItem(o.apiKey)||``,get geminiKey(){return this.apiKey},set geminiKey(e){this.apiKey=e},featherlessKey:e.getItem(o.featherlessKey)||``,aiProvider:e.getItem(o.aiProvider)||`gemini`,workflows:i(e,o.workflows,[]),activeWorkflowId:null,execHistory:i(e,o.execHistory,[]),theme:e.getItem(o.theme)||`dark`,users:i(e,o.users,[]),currentUser:i(e,o.currentUser,null)}}function c(e,t=r()){let n=()=>{t.setItem(o.apiKey,e.apiKey),t.setItem(o.featherlessKey,e.featherlessKey),t.setItem(o.aiProvider,e.aiProvider),t.setItem(o.workflows,JSON.stringify(e.workflows)),t.setItem(o.execHistory,JSON.stringify(e.execHistory)),t.setItem(o.theme,e.theme),t.setItem(o.users,JSON.stringify(e.users)),e.currentUser?t.setItem(o.currentUser,JSON.stringify(e.currentUser)):t.removeItem(o.currentUser)};return{saveState:n,isAuthenticated(){return!!e.currentUser?.id},signUp({name:t,email:r,password:i}){let o=(r||``).trim().toLowerCase(),s=(t||``).trim(),c=(i||``).trim();if(!s||!o||!c)return{ok:!1,error:`Name, email, and password are required.`};if(e.users.some(e=>e.email.toLowerCase()===o))return{ok:!1,error:`An account with this email already exists.`};let l={id:crypto.randomUUID(),name:s,email:o,password:c,createdAt:new Date().toISOString()};return e.users.unshift(l),e.currentUser=a(l),n(),{ok:!0,user:e.currentUser}},login({email:t,password:r}){let i=(t||``).trim().toLowerCase(),o=(r||``).trim(),s=e.users.find(e=>e.email.toLowerCase()===i&&e.password===o);return s?(e.currentUser=a(s),n(),{ok:!0,user:e.currentUser}):{ok:!1,error:`Invalid email or password.`}},logout(){e.currentUser=null,n()},updateProfileName(t){let r=(t||``).trim();return e.currentUser?r?(e.currentUser={...e.currentUser,name:r},e.users=e.users.map(t=>t.id===e.currentUser.id?{...t,name:r}:t),n(),{ok:!0,user:e.currentUser}):{ok:!1,error:`Name cannot be empty.`}:{ok:!1,error:`You need to log in first.`}},clearAppData({includeAccounts:e=!1}={}){let n=[o.apiKey,o.featherlessKey,o.aiProvider,o.workflows,o.execHistory,o.theme];e&&n.push(o.users,o.currentUser),n.forEach(e=>t.removeItem(e))}}}var l=s(),u=c(l);function d(){u.saveState()}function f(){return u.isAuthenticated()}function p(e){return u.signUp(e)}function ee(e){return u.login(e)}function te(){return u.logout()}function ne(e){return u.updateProfileName(e)}function re(e){return u.clearAppData(e)}function ie(e,t,n,r){let i=l.workflows.findIndex(t=>t.id===e),a={id:e||crypto.randomUUID(),title:t||`Untitled Workflow`,nodes:JSON.parse(JSON.stringify(n)),connections:JSON.parse(JSON.stringify(r)),updatedAt:new Date().toISOString(),createdAt:i>=0?l.workflows[i].createdAt:new Date().toISOString()};return i>=0?l.workflows[i]=a:l.workflows.push(a),d(),a.id}function ae(e){return l.workflows.find(t=>t.id===e)||null}function oe(e,t,n,r){l.execHistory.unshift({id:crypto.randomUUID(),title:e,nodeCount:t,duration:n,success:r,timestamp:new Date().toISOString()}),l.execHistory.length>50&&(l.execHistory=l.execHistory.slice(0,50)),d()}var se;(function(e){e.STRING=`string`,e.NUMBER=`number`,e.INTEGER=`integer`,e.BOOLEAN=`boolean`,e.ARRAY=`array`,e.OBJECT=`object`})(se||={});var ce;(function(e){e.LANGUAGE_UNSPECIFIED=`language_unspecified`,e.PYTHON=`python`})(ce||={});var le;(function(e){e.OUTCOME_UNSPECIFIED=`outcome_unspecified`,e.OUTCOME_OK=`outcome_ok`,e.OUTCOME_FAILED=`outcome_failed`,e.OUTCOME_DEADLINE_EXCEEDED=`outcome_deadline_exceeded`})(le||={});var ue=[`user`,`model`,`function`,`system`],de;(function(e){e.HARM_CATEGORY_UNSPECIFIED=`HARM_CATEGORY_UNSPECIFIED`,e.HARM_CATEGORY_HATE_SPEECH=`HARM_CATEGORY_HATE_SPEECH`,e.HARM_CATEGORY_SEXUALLY_EXPLICIT=`HARM_CATEGORY_SEXUALLY_EXPLICIT`,e.HARM_CATEGORY_HARASSMENT=`HARM_CATEGORY_HARASSMENT`,e.HARM_CATEGORY_DANGEROUS_CONTENT=`HARM_CATEGORY_DANGEROUS_CONTENT`})(de||={});var fe;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED=`HARM_BLOCK_THRESHOLD_UNSPECIFIED`,e.BLOCK_LOW_AND_ABOVE=`BLOCK_LOW_AND_ABOVE`,e.BLOCK_MEDIUM_AND_ABOVE=`BLOCK_MEDIUM_AND_ABOVE`,e.BLOCK_ONLY_HIGH=`BLOCK_ONLY_HIGH`,e.BLOCK_NONE=`BLOCK_NONE`})(fe||={});var pe;(function(e){e.HARM_PROBABILITY_UNSPECIFIED=`HARM_PROBABILITY_UNSPECIFIED`,e.NEGLIGIBLE=`NEGLIGIBLE`,e.LOW=`LOW`,e.MEDIUM=`MEDIUM`,e.HIGH=`HIGH`})(pe||={});var me;(function(e){e.BLOCKED_REASON_UNSPECIFIED=`BLOCKED_REASON_UNSPECIFIED`,e.SAFETY=`SAFETY`,e.OTHER=`OTHER`})(me||={});var m;(function(e){e.FINISH_REASON_UNSPECIFIED=`FINISH_REASON_UNSPECIFIED`,e.STOP=`STOP`,e.MAX_TOKENS=`MAX_TOKENS`,e.SAFETY=`SAFETY`,e.RECITATION=`RECITATION`,e.LANGUAGE=`LANGUAGE`,e.OTHER=`OTHER`})(m||={});var he;(function(e){e.TASK_TYPE_UNSPECIFIED=`TASK_TYPE_UNSPECIFIED`,e.RETRIEVAL_QUERY=`RETRIEVAL_QUERY`,e.RETRIEVAL_DOCUMENT=`RETRIEVAL_DOCUMENT`,e.SEMANTIC_SIMILARITY=`SEMANTIC_SIMILARITY`,e.CLASSIFICATION=`CLASSIFICATION`,e.CLUSTERING=`CLUSTERING`})(he||={});var ge;(function(e){e.MODE_UNSPECIFIED=`MODE_UNSPECIFIED`,e.AUTO=`AUTO`,e.ANY=`ANY`,e.NONE=`NONE`})(ge||={});var _e;(function(e){e.MODE_UNSPECIFIED=`MODE_UNSPECIFIED`,e.MODE_DYNAMIC=`MODE_DYNAMIC`})(_e||={});var h=class extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}},g=class extends h{constructor(e,t){super(e),this.response=t}},ve=class extends h{constructor(e,t,n,r){super(e),this.status=t,this.statusText=n,this.errorDetails=r}},_=class extends h{},ye=`https://generativelanguage.googleapis.com`,be=`v1beta`,xe=`0.21.0`,Se=`genai-js`,v;(function(e){e.GENERATE_CONTENT=`generateContent`,e.STREAM_GENERATE_CONTENT=`streamGenerateContent`,e.COUNT_TOKENS=`countTokens`,e.EMBED_CONTENT=`embedContent`,e.BATCH_EMBED_CONTENTS=`batchEmbedContents`})(v||={});var Ce=class{constructor(e,t,n,r,i){this.model=e,this.task=t,this.apiKey=n,this.stream=r,this.requestOptions=i}toString(){let e=this.requestOptions?.apiVersion||be,t=`${this.requestOptions?.baseUrl||ye}/${e}/${this.model}:${this.task}`;return this.stream&&(t+=`?alt=sse`),t}};function we(e){let t=[];return e?.apiClient&&t.push(e.apiClient),t.push(`${Se}/${xe}`),t.join(` `)}async function Te(e){let t=new Headers;t.append(`Content-Type`,`application/json`),t.append(`x-goog-api-client`,we(e.requestOptions)),t.append(`x-goog-api-key`,e.apiKey);let n=e.requestOptions?.customHeaders;if(n){if(!(n instanceof Headers))try{n=new Headers(n)}catch(e){throw new _(`unable to convert customHeaders value ${JSON.stringify(n)} to Headers: ${e.message}`)}for(let[e,r]of n.entries()){if(e===`x-goog-api-key`)throw new _(`Cannot set reserved header name ${e}`);if(e===`x-goog-api-client`)throw new _(`Header name ${e} can only be set using the apiClient field`);t.append(e,r)}}return t}async function Ee(e,t,n,r,i,a){let o=new Ce(e,t,n,r,a);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},Ae(a)),{method:`POST`,headers:await Te(o),body:i})}}async function y(e,t,n,r,i,a={},o=fetch){let{url:s,fetchOptions:c}=await Ee(e,t,n,r,i,a);return De(s,c,o)}async function De(e,t,n=fetch){let r;try{r=await n(e,t)}catch(t){Oe(t,e)}return r.ok||await ke(r,e),r}function Oe(e,t){let n=e;throw e instanceof ve||e instanceof _||(n=new h(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack),n}async function ke(e,t){let n=``,r;try{let t=await e.json();n=t.error.message,t.error.details&&(n+=` ${JSON.stringify(t.error.details)}`,r=t.error.details)}catch{}throw new ve(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${n}`,e.status,e.statusText,r)}function Ae(e){let t={};if(e?.signal!==void 0||e?.timeout>=0){let n=new AbortController;e?.timeout>=0&&setTimeout(()=>n.abort(),e.timeout),e?.signal&&e.signal.addEventListener(`abort`,()=>{n.abort()}),t.signal=n.signal}return t}function je(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),b(e.candidates[0]))throw new g(`${x(e)}`,e);return Me(e)}else if(e.promptFeedback)throw new g(`Text not available. ${x(e)}`,e);return``},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),b(e.candidates[0]))throw new g(`${x(e)}`,e);return console.warn(`response.functionCall() is deprecated. Use response.functionCalls() instead.`),Ne(e)[0]}else if(e.promptFeedback)throw new g(`Function call not available. ${x(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),b(e.candidates[0]))throw new g(`${x(e)}`,e);return Ne(e)}else if(e.promptFeedback)throw new g(`Function call not available. ${x(e)}`,e)},e}function Me(e){let t=[];if(e.candidates?.[0].content?.parts)for(let n of e.candidates?.[0].content?.parts)n.text&&t.push(n.text),n.executableCode&&t.push("\n```"+n.executableCode.language+`
`+n.executableCode.code+"\n```\n"),n.codeExecutionResult&&t.push("\n```\n"+n.codeExecutionResult.output+"\n```\n");return t.length>0?t.join(``):``}function Ne(e){let t=[];if(e.candidates?.[0].content?.parts)for(let n of e.candidates?.[0].content?.parts)n.functionCall&&t.push(n.functionCall);if(t.length>0)return t}var Pe=[m.RECITATION,m.SAFETY,m.LANGUAGE];function b(e){return!!e.finishReason&&Pe.includes(e.finishReason)}function x(e){let t=``;if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)t+=`Response was blocked`,e.promptFeedback?.blockReason&&(t+=` due to ${e.promptFeedback.blockReason}`),e.promptFeedback?.blockReasonMessage&&(t+=`: ${e.promptFeedback.blockReasonMessage}`);else if(e.candidates?.[0]){let n=e.candidates[0];b(n)&&(t+=`Candidate was blocked due to ${n.finishReason}`,n.finishMessage&&(t+=`: ${n.finishMessage}`))}return t}function S(e){return this instanceof S?(this.v=e,this):new S(e)}function Fe(e,t,n){if(!Symbol.asyncIterator)throw TypeError(`Symbol.asyncIterator is not defined.`);var r=n.apply(e,t||[]),i,a=[];return i={},o(`next`),o(`throw`),o(`return`),i[Symbol.asyncIterator]=function(){return this},i;function o(e){r[e]&&(i[e]=function(t){return new Promise(function(n,r){a.push([e,t,n,r])>1||s(e,t)})})}function s(e,t){try{c(r[e](t))}catch(e){d(a[0][3],e)}}function c(e){e.value instanceof S?Promise.resolve(e.value.v).then(l,u):d(a[0][2],e)}function l(e){s(`next`,e)}function u(e){s(`throw`,e)}function d(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}}var Ie=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Le(e){let[t,n]=Be(e.body.pipeThrough(new TextDecoderStream(`utf8`,{fatal:!0}))).tee();return{stream:ze(t),response:Re(n)}}async function Re(e){let t=[],n=e.getReader();for(;;){let{done:e,value:r}=await n.read();if(e)return je(Ve(t));t.push(r)}}function ze(e){return Fe(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield S(t.read());if(n)break;yield yield S(je(e))}})}function Be(e){let t=e.getReader();return new ReadableStream({start(e){let n=``;return r();function r(){return t.read().then(({value:t,done:i})=>{if(i){if(n.trim()){e.error(new h(`Failed to parse stream`));return}e.close();return}n+=t;let a=n.match(Ie),o;for(;a;){try{o=JSON.parse(a[1])}catch{e.error(new h(`Error parsing JSON response: "${a[1]}"`));return}e.enqueue(o),n=n.substring(a[0].length),a=n.match(Ie)}return r()})}}})}function Ve(e){let t={promptFeedback:e[e.length-1]?.promptFeedback};for(let n of e){if(n.candidates)for(let e of n.candidates){let n=e.index;if(t.candidates||=[],t.candidates[n]||(t.candidates[n]={index:e.index}),t.candidates[n].citationMetadata=e.citationMetadata,t.candidates[n].groundingMetadata=e.groundingMetadata,t.candidates[n].finishReason=e.finishReason,t.candidates[n].finishMessage=e.finishMessage,t.candidates[n].safetyRatings=e.safetyRatings,e.content&&e.content.parts){t.candidates[n].content||(t.candidates[n].content={role:e.content.role||`user`,parts:[]});let r={};for(let i of e.content.parts)i.text&&(r.text=i.text),i.functionCall&&(r.functionCall=i.functionCall),i.executableCode&&(r.executableCode=i.executableCode),i.codeExecutionResult&&(r.codeExecutionResult=i.codeExecutionResult),Object.keys(r).length===0&&(r.text=``),t.candidates[n].content.parts.push(r)}}n.usageMetadata&&(t.usageMetadata=n.usageMetadata)}return t}async function He(e,t,n,r){return Le(await y(t,v.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),r))}async function Ue(e,t,n,r){return{response:je(await(await y(t,v.GENERATE_CONTENT,e,!1,JSON.stringify(n),r)).json())}}function We(e){if(e!=null){if(typeof e==`string`)return{role:`system`,parts:[{text:e}]};if(e.text)return{role:`system`,parts:[e]};if(e.parts)return e.role?e:{role:`system`,parts:e.parts}}}function C(e){let t=[];if(typeof e==`string`)t=[{text:e}];else for(let n of e)typeof n==`string`?t.push({text:n}):t.push(n);return Ge(t)}function Ge(e){let t={role:`user`,parts:[]},n={role:`function`,parts:[]},r=!1,i=!1;for(let a of e)`functionResponse`in a?(n.parts.push(a),i=!0):(t.parts.push(a),r=!0);if(r&&i)throw new h(`Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.`);if(!r&&!i)throw new h(`No content is provided for sending chat message.`);return r?t:n}function Ke(e,t){let n={model:t?.model,generationConfig:t?.generationConfig,safetySettings:t?.safetySettings,tools:t?.tools,toolConfig:t?.toolConfig,systemInstruction:t?.systemInstruction,cachedContent:t?.cachedContent?.name,contents:[]},r=e.generateContentRequest!=null;if(e.contents){if(r)throw new _(`CountTokensRequest must have one of contents or generateContentRequest, not both.`);n.contents=e.contents}else if(r)n=Object.assign(Object.assign({},n),e.generateContentRequest);else{let t=C(e);n.contents=[t]}return{generateContentRequest:n}}function qe(e){let t;return t=e.contents?e:{contents:[C(e)]},e.systemInstruction&&(t.systemInstruction=We(e.systemInstruction)),t}function Je(e){return typeof e==`string`||Array.isArray(e)?{content:C(e)}:e}var Ye=[`text`,`inlineData`,`functionCall`,`functionResponse`,`executableCode`,`codeExecutionResult`],Xe={user:[`text`,`inlineData`],function:[`functionResponse`],model:[`text`,`functionCall`,`executableCode`,`codeExecutionResult`],system:[`text`]};function Ze(e){let t=!1;for(let n of e){let{role:e,parts:r}=n;if(!t&&e!==`user`)throw new h(`First content should be with role 'user', got ${e}`);if(!ue.includes(e))throw new h(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(ue)}`);if(!Array.isArray(r))throw new h(`Content should have 'parts' property with an array of Parts`);if(r.length===0)throw new h(`Each Content should have at least one part`);let i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of r)for(let t of Ye)t in e&&(i[t]+=1);let a=Xe[e];for(let t of Ye)if(!a.includes(t)&&i[t]>0)throw new h(`Content with role '${e}' can't contain '${t}' part`);t=!0}}var Qe=`SILENT_ERROR`,$e=class{constructor(e,t,n,r={}){this.model=t,this.params=n,this._requestOptions=r,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,n?.history&&(Ze(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){await this._sendPromise;let n=C(e),r={safetySettings:this.params?.safetySettings,generationConfig:this.params?.generationConfig,tools:this.params?.tools,toolConfig:this.params?.toolConfig,systemInstruction:this.params?.systemInstruction,cachedContent:this.params?.cachedContent,contents:[...this._history,n]},i=Object.assign(Object.assign({},this._requestOptions),t),a;return this._sendPromise=this._sendPromise.then(()=>Ue(this._apiKey,this.model,r,i)).then(e=>{if(e.response.candidates&&e.response.candidates.length>0){this._history.push(n);let t=Object.assign({parts:[],role:`model`},e.response.candidates?.[0].content);this._history.push(t)}else{let t=x(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}a=e}),await this._sendPromise,a}async sendMessageStream(e,t={}){await this._sendPromise;let n=C(e),r={safetySettings:this.params?.safetySettings,generationConfig:this.params?.generationConfig,tools:this.params?.tools,toolConfig:this.params?.toolConfig,systemInstruction:this.params?.systemInstruction,cachedContent:this.params?.cachedContent,contents:[...this._history,n]},i=Object.assign(Object.assign({},this._requestOptions),t),a=He(this._apiKey,this.model,r,i);return this._sendPromise=this._sendPromise.then(()=>a).catch(e=>{throw Error(Qe)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history.push(n);let t=Object.assign({},e.candidates[0].content);t.role||=`model`,this._history.push(t)}else{let t=x(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==Qe&&console.error(e)}),a}};async function et(e,t,n,r){return(await y(t,v.COUNT_TOKENS,e,!1,JSON.stringify(n),r)).json()}async function tt(e,t,n,r){return(await y(t,v.EMBED_CONTENT,e,!1,JSON.stringify(n),r)).json()}async function nt(e,t,n,r){let i=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await y(t,v.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:i}),r)).json()}var rt=class{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes(`/`)?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=We(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){let n=qe(e),r=Object.assign(Object.assign({},this._requestOptions),t);return Ue(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent?.name},n),r)}async generateContentStream(e,t={}){let n=qe(e),r=Object.assign(Object.assign({},this._requestOptions),t);return He(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent?.name},n),r)}startChat(e){return new $e(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent?.name},e),this._requestOptions)}async countTokens(e,t={}){let n=Ke(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),r=Object.assign(Object.assign({},this._requestOptions),t);return et(this.apiKey,this.model,n,r)}async embedContent(e,t={}){let n=Je(e),r=Object.assign(Object.assign({},this._requestOptions),t);return tt(this.apiKey,this.model,n,r)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return nt(this.apiKey,this.model,e,n)}},it=class{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new h(`Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })`);return new rt(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new _("Cached content must contain a `name` field.");if(!e.model)throw new _("Cached content must contain a `model` field.");for(let n of[`model`,`systemInstruction`])if(t?.[n]&&e[n]&&t?.[n]!==e[n]){if(n===`model`&&(t.model.startsWith(`models/`)?t.model.replace(`models/`,``):t.model)===(e.model.startsWith(`models/`)?e.model.replace(`models/`,``):e.model))continue;throw new _(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let r=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new rt(this.apiKey,r,n)}},w=l.aiProvider||`gemini`;function T(){try{let e=window.__flowforge_canvas;if(e&&e.nodes&&e.nodes.length>0)return{nodes:e.nodes.map(e=>({id:e.id,type:e.type,label:e.subLabel,desc:e.desc,config:e.config})),connections:e.connections.map(e=>({from:e.from,to:e.to}))}}catch{}return null}function at(e,n){w=l.aiProvider||`gemini`,e.innerHTML=`
    <div class="ai-panel">
      <div class="ai-panel-header">
        <div class="ai-panel-title">
          ${t(`bot`)}
          <h2>AI Assistant</h2>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <button class="ai-provider-toggle" id="ai-toggle-provider" title="Switch AI Provider">
            <span class="ai-badge" id="ai-badge">${w===`gemini`?`GEMINI`:`FEATHERLESS`}</span>
          </button>
          <button class="btn btn-ghost btn-sm" id="ai-close-btn" title="Close AI Panel" style="padding:4px;min-width:24px;">
            ${t(`x`)}
          </button>
        </div>
      </div>

      <!-- Action bar: workflow-aware features -->
      <div class="ai-action-bar" style="display:flex;gap:6px;padding:8px 14px;border-bottom:1px solid rgba(255,255,255,0.06);">
        <button class="btn btn-secondary btn-sm" id="ai-share-wf" title="Send current workflow to AI for analysis">
          ${t(`workflow`)} Analyze Workflow
        </button>
        <button class="btn btn-secondary btn-sm" id="ai-explain-btn" title="Ask AI what this workflow does">
          ${t(`bot`)} Explain
        </button>
        <button class="btn btn-secondary btn-sm" id="ai-optimize-btn" title="Ask AI to optimize workflow">
          ${t(`sparkles`)} Optimize
        </button>
      </div>

      <div class="ai-messages" id="ai-messages">
        <div class="ai-message ai">
          <div class="ai-message-avatar ai">${t(`bot`)}</div>
          <div class="ai-message-bubble">
            👋 Hi! I'm powered by <strong>${w===`gemini`?`Gemini`:`Featherless AI`}</strong>. I can:
            <br/>• <strong>Generate workflows</strong> from plain English
            <br/>• <strong>Analyze</strong> your current canvas workflow
            <br/>• <strong>Explain</strong> what each node does
            <br/>• <strong>Optimize</strong> your workflow for better performance
            <br/><br/>Try: <em>"Build an email pipeline that checks spam, classifies, and auto-replies."</em>
          </div>
        </div>
      </div>

      <div class="ai-input-area">
        <div class="ai-input-wrap">
          <textarea id="ai-textarea" class="ai-textarea" placeholder="Describe your workflow..." rows="2"></textarea>
          <button class="ai-send-btn" id="ai-send" title="Send">
            ${t(`sendHorizonal`)}
          </button>
        </div>
        <div class="ai-input-hint">Press Enter to send · Shift+Enter for newline · Using ${w===`gemini`?`Gemini`:`Featherless AI`}</div>
      </div>
    </div>
  `;let r=e.querySelector(`#ai-messages`),i=e.querySelector(`#ai-textarea`);e.querySelector(`#ai-close-btn`).addEventListener(`click`,()=>{e.style.display=`none`,e.innerHTML=``;let n=document.querySelector(`#btn-ai-panel`);n&&(n.innerHTML=`${t(`sparkles`)} AI Generate`)}),e.querySelector(`#ai-toggle-provider`).addEventListener(`click`,()=>{w=w===`gemini`?`featherless`:`gemini`,l.aiProvider=w,d(),e.querySelector(`#ai-badge`).textContent=w===`gemini`?`GEMINI`:`FEATHERLESS`,e.querySelector(`.ai-input-hint`).textContent=`Press Enter to send · Shift+Enter for newline · Using ${w===`gemini`?`Gemini`:`Featherless AI`}`,O(r,`Switched to <strong>${w===`gemini`?`Gemini AI`:`Featherless AI (Qwen2.5-Coder-32B)`}</strong>.`)}),e.querySelector(`#ai-share-wf`).addEventListener(`click`,()=>{let e=T();if(!e){O(r,`⚠️ No workflow on canvas. Add some nodes first, then I can analyze it.`);return}D(r,`[Shared workflow: ${e.nodes.length} nodes, ${e.connections.length} connections]`),E(`Analyze this workflow and tell me: what it does, any issues, and suggestions for improvement.\n\nWorkflow JSON:\n${JSON.stringify(e,null,2)}`,r,null)}),e.querySelector(`#ai-explain-btn`).addEventListener(`click`,()=>{let e=T();if(!e){O(r,`⚠️ No workflow on canvas to explain.`);return}D(r,`Explain what my workflow does step by step.`),E(`Explain this workflow step by step in simple terms. Describe what each node does and how they connect:\n\n${JSON.stringify(e,null,2)}`,r,null)}),e.querySelector(`#ai-optimize-btn`).addEventListener(`click`,()=>{let e=T();if(!e){O(r,`⚠️ No workflow on canvas to optimize.`);return}D(r,`Optimize my workflow.`),E(`Suggest optimizations for this workflow. Consider: removing redundant steps, adding error handling, improving performance, and adding missing steps:\n\n${JSON.stringify(e,null,2)}\n\nReturn ONLY a JSON array of optimized nodes like: [{"type":"trigger|action|condition|aiAgent|output","label":"Name","desc":"Description"}]`,r,n)}),e.querySelector(`#ai-send`).addEventListener(`click`,()=>ot(i,r,n)),i.addEventListener(`keydown`,e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),ot(i,r,n))})}function ot(e,t,n){let r=e.value.trim();r&&(e.value=``,D(t,r),E(`You are FlowForge AI, a workflow automation assistant. When the user describes a workflow, return ONLY a JSON array of nodes like: [{"type":"trigger|action|condition|aiAgent|output","label":"Name","desc":"Description"}]. For questions or analysis, respond in plain text. Be concise.\n\nUser: ${r}`,t,n))}async function E(e,t,n){let r=ut(t);try{let i;i=w===`gemini`?await st(e):await ct(e),r.remove();let a=i.match(/\[[\s\S]*\]/);if(a&&n)try{let e=JSON.parse(a[0]);if(Array.isArray(e)&&e.length>0&&e[0].type){n(e),O(t,`✅ Generated <strong>${e.length} nodes</strong> on canvas! Click "Run" to execute.`);return}}catch{}O(t,i)}catch(e){r.remove(),O(t,`⚠️ Error: ${e.message||`Unknown error`}. Check your API key in Settings.`)}}async function st(e){let t=l.geminiKey;if(!t)throw Error(`No Gemini API key. Add one in Settings.`);let n=[`gemini-2.5-flash`,`gemini-2.0-flash`,`gemini-flash-latest`,`gemini-pro-latest`],r=new it(t),i;for(let t of n)try{return(await r.getGenerativeModel({model:t}).generateContent(e)).response.text()}catch(e){if(i=e,e.message?.includes(`429`)||e.message?.includes(`quota`)||e.message?.includes(`404`)||e.message?.includes(`not found`))continue;throw e}throw i}async function ct(e){let t=l.featherlessKey;if(!t)throw Error(`No Featherless API key. Add one in Settings.`);let n=await fetch(`https://api.featherless.ai/v1/chat/completions`,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${t}`},body:JSON.stringify({model:`Qwen/Qwen2.5-Coder-32B-Instruct`,messages:[{role:`user`,content:e}],max_tokens:2048,temperature:.7})});if(!n.ok){let e=await n.text();throw Error(`Featherless API error ${n.status}: ${e.slice(0,200)}`)}return(await n.json()).choices?.[0]?.message?.content||`No response.`}function lt(e){return e?`<p style="margin:0;">${e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/```(\w*)\n?([\s\S]*?)```/g,(e,t,n)=>`<pre style="background:rgba(0,0,0,0.3);padding:10px;border-radius:8px;overflow-x:auto;font-size:12px;margin:8px 0;"><code>${n.trim()}</code></pre>`).replace(/`([^`]+)`/g,`<code style="background:rgba(99,102,241,0.15);padding:2px 6px;border-radius:4px;font-size:12px;">$1</code>`).replace(/^### (.+)$/gm,`<h4 style="margin:12px 0 4px;font-size:14px;color:#818cf8;">$1</h4>`).replace(/^## (.+)$/gm,`<h3 style="margin:14px 0 6px;font-size:15px;color:#818cf8;">$1</h3>`).replace(/^# (.+)$/gm,`<h2 style="margin:16px 0 8px;font-size:16px;color:#818cf8;">$1</h2>`).replace(/\*\*\*(.+?)\*\*\*/g,`<strong><em>$1</em></strong>`).replace(/\*\*(.+?)\*\*/g,`<strong>$1</strong>`).replace(/\*(.+?)\*/g,`<em>$1</em>`).replace(/^---$/gm,`<hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:12px 0;">`).replace(/^\d+\.\s+(.+)$/gm,`<li style="margin:3px 0;padding-left:4px;">$1</li>`).replace(/^[\-\*]\s+(.+)$/gm,`<li style="margin:3px 0;padding-left:4px;">$1</li>`).replace(/((?:<li[^>]*>.*<\/li>\s*)+)/g,`<ul style="margin:6px 0;padding-left:18px;list-style:disc;">$1</ul>`).replace(/\n\n/g,`</p><p style="margin:8px 0;">`).replace(/\n/g,`<br>`)}</p>`:``}function D(e,n){let r=document.createElement(`div`);r.className=`ai-message user`,r.innerHTML=`<div class="ai-message-avatar user">${t(`user`)}</div><div class="ai-message-bubble">${n}</div>`,e.appendChild(r),e.scrollTop=e.scrollHeight}function O(e,n){let r=document.createElement(`div`);r.className=`ai-message ai`;let i=n.includes(`**`)||n.includes(`# `)||n.match(/^[\-\*]\s/m)||n.includes("```")?lt(n):n;r.innerHTML=`<div class="ai-message-avatar ai">${t(`bot`)}</div><div class="ai-message-bubble">${i}</div>`,e.appendChild(r),e.scrollTop=e.scrollHeight}function ut(e){let n=document.createElement(`div`);return n.className=`ai-message ai`,n.innerHTML=`<div class="ai-message-avatar ai">${t(`bot`)}</div><div class="ai-message-bubble"><div class="ai-thinking"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div></div></div>`,e.appendChild(n),e.scrollTop=e.scrollHeight,n}var k={trigger:{label:`Trigger`,icon:`zapFast`,color:`#f59e0b`,bg:`rgba(245,158,11,0.15)`,desc:`Starts the workflow`},action:{label:`Action`,icon:`play`,color:`#6366f1`,bg:`rgba(99,102,241,0.15)`,desc:`Performs an operation`},condition:{label:`Condition`,icon:`filterX`,color:`#06b6d4`,bg:`rgba(6,182,212,0.15)`,desc:`Evaluates a rule`},aiAgent:{label:`AI Agent`,icon:`bot`,color:`#8b5cf6`,bg:`rgba(139,92,246,0.15)`,desc:`AI-powered step`},output:{label:`Output`,icon:`cloud`,color:`#10b981`,bg:`rgba(16,185,129,0.15)`,desc:`Sends results`}},dt=[{type:`trigger`,subLabel:`Webhook`,desc:`HTTP request trigger`},{type:`trigger`,subLabel:`Schedule`,desc:`Cron/time trigger`},{type:`action`,subLabel:`Send Email`,desc:`Dispatch an email`},{type:`action`,subLabel:`HTTP Request`,desc:`Call an API endpoint`},{type:`condition`,subLabel:`If / Else`,desc:`Branch on condition`},{type:`aiAgent`,subLabel:`Gemini AI`,desc:`AI inference step`},{type:`aiAgent`,subLabel:`Featherless`,desc:`Open-source AI step`},{type:`output`,subLabel:`Slack Notify`,desc:`Post to Slack`},{type:`output`,subLabel:`Database`,desc:`Write to DB`}],A=[],j=[],M=1,N=null,P=null,F=null,I={x:0,y:0},L=!1,R=null,ft=!1,z=null,B=`Untitled Workflow`,V=1;function pt(e,n){A=[],j=[],M=1,N=null,I={x:0,y:0},V=1,e.innerHTML=`
    <div class="canvas-layout">
      <!-- Left palette sidebar -->
      <div class="canvas-sidebar">
        <div class="canvas-sidebar-header">Node Palette</div>
        ${dt.map(e=>{let n=k[e.type];return`
            <div class="node-palette-item" 
                 draggable="true"
                 data-type="${e.type}"
                 data-sublabel="${e.subLabel}"
                 data-desc="${e.desc}">
              <div class="node-palette-icon" style="background:${n.bg};color:${n.color}">
                ${t(n.icon)}
              </div>
              <div>
                <div class="node-palette-label">${e.subLabel}</div>
                <div class="node-palette-sub">${e.desc}</div>
              </div>
            </div>`}).join(``)}

        <!-- Saved Workflows Manager -->
        <div class="canvas-sidebar-header" style="margin-top:16px;">Saved Workflows</div>
        <div id="saved-workflows-list" class="saved-workflows-list"></div>
      </div>

      <!-- Main canvas area -->
      <div class="canvas-main">
        <div class="canvas-toolbar">
          <div class="canvas-title-group">
            <span class="canvas-title" id="wf-title" contenteditable="true" spellcheck="false">${B}</span>
            <span class="canvas-status-badge" id="wf-status">Draft</span>
          </div>
          <div class="canvas-toolbar-actions">
            <button class="btn btn-secondary btn-sm" id="btn-save" title="Ctrl+S">
              ${t(`database`)} Save
            </button>
            <button class="btn btn-secondary btn-sm" id="btn-export" title="Export JSON">
              ${t(`arrowRight`)} Export
            </button>
            <button class="btn btn-secondary btn-sm" id="btn-import" title="Import JSON">
              ${t(`cloud`)} Import
            </button>
            <input type="file" id="import-wf-file" accept=".json" style="display:none" />
            <button class="btn btn-secondary btn-sm" id="btn-clear-canvas">
              ${t(`trash`)} Clear
            </button>
            <button class="btn btn-secondary btn-sm" id="btn-ai-panel">
              ${t(`sparkles`)} AI Generate
            </button>
            <button class="btn btn-primary btn-sm" id="btn-run">
              ${t(`play`)} Run
            </button>
          </div>
        </div>

        <!-- Zoom controls -->
        <div class="zoom-controls" id="zoom-controls">
          <button class="zoom-btn" id="zoom-in" title="Zoom In">+</button>
          <span class="zoom-level" id="zoom-label">100%</span>
          <button class="zoom-btn" id="zoom-out" title="Zoom Out">−</button>
          <button class="zoom-btn" id="zoom-reset" title="Reset">⟲</button>
        </div>

        <div class="canvas-viewport" id="canvas-vp">
          <div class="canvas-grid"></div>
          <svg id="canvas-svg"></svg>
          <div id="canvas-hint" class="canvas-empty-hint">
            ${t(`gitNetwork`)}
            <h3>Your canvas is empty</h3>
            <p>Drag nodes from the palette, or click<br/>"AI Generate" to auto-build a workflow</p>
          </div>
          <div id="nodes-layer"></div>
        </div>

        <!-- Node Config Panel (hidden by default) -->
        <div class="node-config-panel" id="node-config" style="display:none;">
          <div class="node-config-header">
            <h3 id="config-node-title">Configure Node</h3>
            <button class="node-config-close" id="config-close">${t(`x`)}</button>
          </div>
          <div class="node-config-body" id="config-body"></div>
        </div>

        <!-- Execution Log -->
        <div class="exec-log" id="exec-log">
          <div class="exec-log-line info">[FlowForge] Ready. Add nodes or use AI to generate a workflow.</div>
        </div>
      </div>

      <!-- AI panel (initially hidden) -->
      <div id="ai-panel-slot" style="display:none"></div>
    </div>
  `,mt(e,n),bt(e,n),xt(e),window.__flowforge_canvas={get nodes(){return A},get connections(){return j}}}function mt(e,t){let n=e.querySelector(`#canvas-vp`),r=e.querySelector(`#nodes-layer`),i=e.querySelector(`#canvas-svg`);e.querySelectorAll(`.node-palette-item`).forEach(e=>{e.addEventListener(`dragstart`,t=>{t.dataTransfer.setData(`type`,e.dataset.type),t.dataTransfer.setData(`subLabel`,e.dataset.sublabel),t.dataTransfer.setData(`desc`,e.dataset.desc)})}),n.addEventListener(`dragover`,e=>e.preventDefault()),n.addEventListener(`drop`,t=>{t.preventDefault();let a=n.getBoundingClientRect(),o=(t.clientX-a.left-I.x)/V-100,s=(t.clientY-a.top-I.y)/V-50,c=t.dataTransfer.getData(`type`),l=t.dataTransfer.getData(`subLabel`),u=t.dataTransfer.getData(`desc`);c&&H({type:c,subLabel:l,desc:u,x:o,y:s},r,i,e)}),n.addEventListener(`mousedown`,t=>{(t.target===n||t.target.classList.contains(`canvas-grid`)||t.target.id===`canvas-svg`)&&(L=!0,R={x:t.clientX-I.x,y:t.clientY-I.y},n.style.cursor=`grabbing`,N=null,e.querySelectorAll(`.workflow-node`).forEach(e=>e.classList.remove(`selected`)),e.querySelector(`#node-config`).style.display=`none`)}),window.addEventListener(`mousemove`,e=>{if(L&&(I.x=e.clientX-R.x,I.y=e.clientY-R.y,W(r),U(i)),P){let t=n.getBoundingClientRect(),r=(e.clientX-t.left-I.x)/V-P.ox,a=(e.clientY-t.top-I.y)/V-P.oy,o=A.find(e=>e.id===P.id);if(o){o.x=Math.max(0,r),o.y=Math.max(0,a);let e=document.getElementById(`node-${P.id}`);e&&(e.style.left=o.x+`px`,e.style.top=o.y+`px`),U(i)}}}),window.addEventListener(`mouseup`,()=>{L=!1,P=null,n.style.cursor=`default`}),e.querySelector(`#zoom-in`).addEventListener(`click`,()=>{V=Math.min(2,V+.1),W(r),G(e),U(i)}),e.querySelector(`#zoom-out`).addEventListener(`click`,()=>{V=Math.max(.3,V-.1),W(r),G(e),U(i)}),e.querySelector(`#zoom-reset`).addEventListener(`click`,()=>{V=1,I={x:0,y:0},W(r),G(e),U(i)}),n.addEventListener(`wheel`,t=>{t.preventDefault(),V=Math.max(.3,Math.min(2,V-t.deltaY*.001)),W(r),G(e),U(i)},{passive:!1}),e.querySelector(`#btn-run`).addEventListener(`click`,()=>gt(e)),e.querySelector(`#btn-clear-canvas`).addEventListener(`click`,()=>{A=[],j=[],M=1,z=null,r.innerHTML=``,U(i),K(e),q(e,`info`,`Canvas cleared.`)}),e.querySelector(`#btn-ai-panel`).addEventListener(`click`,()=>St(e,r,i)),e.querySelector(`#btn-save`).addEventListener(`click`,()=>_t(e)),e.querySelector(`#btn-export`).addEventListener(`click`,()=>vt()),e.querySelector(`#btn-import`).addEventListener(`click`,()=>e.querySelector(`#import-wf-file`).click()),e.querySelector(`#import-wf-file`).addEventListener(`change`,t=>yt(t,e,r,i)),e.querySelector(`#config-close`).addEventListener(`click`,()=>{e.querySelector(`#node-config`).style.display=`none`}),document.addEventListener(`keydown`,t=>{t.target.tagName===`INPUT`||t.target.tagName===`TEXTAREA`||t.target.isContentEditable||(t.key===`Delete`&&N&&(A=A.filter(e=>e.id!==N),j=j.filter(e=>e.from!==N&&e.to!==N),document.getElementById(`node-${N}`)?.remove(),N=null,U(i),K(e)),t.ctrlKey&&t.key===`s`&&(t.preventDefault(),_t(e)))})}function H({type:e,subLabel:n,desc:r,x:i=100,y:a=100,config:o={}},s,c,l){let u=M++,d=k[e],f={id:u,type:e,subLabel:n,desc:r,x:i,y:a,config:o};A.push(f);let p=document.createElement(`div`);p.className=`workflow-node`,p.id=`node-${u}`,p.style.left=i+`px`,p.style.top=a+`px`,p.innerHTML=`
    <div class="node-header">
      <div class="node-icon" style="background:${d.bg};color:${d.color}">${t(d.icon)}</div>
      <span class="node-label">${n}</span>
      <div class="node-status-dot idle" id="status-${u}"></div>
      <button class="node-delete-btn" data-id="${u}">${t(`x`)}</button>
    </div>
    <div class="node-body">
      <div class="node-desc">${r||d.desc}</div>
    </div>
    <div class="node-ports">
      <div class="node-port node-port-in" data-node="${u}" data-port="in" title="Input"></div>
      <div class="node-port node-port-out" data-node="${u}" data-port="out" title="Output"></div>
    </div>
  `,s.appendChild(p),p.addEventListener(`mousedown`,e=>{if(e.target.classList.contains(`node-port`)||e.target.closest(`.node-delete-btn`))return;e.stopPropagation(),N=u,l.querySelectorAll(`.workflow-node`).forEach(e=>e.classList.remove(`selected`)),p.classList.add(`selected`),ht(f,l);let t=p.getBoundingClientRect();P={id:u,ox:(e.clientX-t.left)/V,oy:(e.clientY-t.top)/V}}),p.addEventListener(`dblclick`,e=>{e.stopPropagation(),ht(f,l)}),p.querySelector(`.node-delete-btn`).addEventListener(`click`,e=>{e.stopPropagation(),A=A.filter(e=>e.id!==u),j=j.filter(e=>e.from!==u&&e.to!==u),p.remove(),U(c),K(l),l.querySelector(`#node-config`).style.display=`none`}),p.querySelectorAll(`.node-port`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let r=e.dataset.port;F?(r===`in`&&F.nodeId!==u&&(j.some(e=>e.from===F.nodeId&&e.to===u)||(j.push({from:F.nodeId,to:u,id:`${F.nodeId}-${u}`}),q(l,`success`,`Connected "${A.find(e=>e.id===F.nodeId)?.subLabel}" → "${n}"`),U(c))),l.querySelectorAll(`.node-port-out`).forEach(e=>e.style.background=``),F=null):r===`out`&&(F={nodeId:u},e.style.background=`#818cf8`,q(l,`info`,`Connecting from "${n}" — click an input port.`))})}),K(l),U(c)}function ht(e,n){let r=n.querySelector(`#node-config`),i=n.querySelector(`#config-body`),a=n.querySelector(`#config-node-title`),o=k[e.type];a.innerHTML=`${t(o.icon)} Configure: ${e.subLabel}`,r.style.display=`flex`;let s=e.config||{};i.innerHTML=`
    <div class="config-field">
      <label>Display Name</label>
      <input type="text" class="input-text" id="cfg-label" value="${e.subLabel}" />
    </div>
    <div class="config-field">
      <label>Description</label>
      <input type="text" class="input-text" id="cfg-desc" value="${e.desc}" />
    </div>
    ${e.type===`trigger`?`
      <div class="config-field">
        <label>Trigger URL / Cron</label>
        <input type="text" class="input-text mono" id="cfg-trigger" placeholder="https://... or */5 * * * *" value="${s.trigger||``}" />
      </div>
    `:``}
    ${e.type===`action`?`
      <div class="config-field">
        <label>Endpoint / Command</label>
        <input type="text" class="input-text mono" id="cfg-endpoint" placeholder="https://api.example.com/v1/..." value="${s.endpoint||``}" />
      </div>
      <div class="config-field">
        <label>Method</label>
        <select class="input-text" id="cfg-method">
          <option ${s.method===`GET`?`selected`:``}>GET</option>
          <option ${s.method===`POST`?`selected`:``}>POST</option>
          <option ${s.method===`PUT`?`selected`:``}>PUT</option>
          <option ${s.method===`DELETE`?`selected`:``}>DELETE</option>
        </select>
      </div>
    `:``}
    ${e.type===`condition`?`
      <div class="config-field">
        <label>Condition Expression</label>
        <input type="text" class="input-text mono" id="cfg-condition" placeholder="data.status === 'active'" value="${s.condition||``}" />
      </div>
    `:``}
    ${e.type===`aiAgent`?`
      <div class="config-field">
        <label>AI Prompt</label>
        <textarea class="input-text mono" id="cfg-prompt" rows="3" placeholder="Summarize the incoming data...">${s.prompt||``}</textarea>
      </div>
    `:``}
    ${e.type===`output`?`
      <div class="config-field">
        <label>Destination</label>
        <input type="text" class="input-text mono" id="cfg-destination" placeholder="#slack-channel or email@..." value="${s.destination||``}" />
      </div>
    `:``}
    <button class="btn btn-primary btn-sm" id="cfg-apply" style="margin-top:12px;width:100%;">Apply Changes</button>
  `,i.querySelector(`#cfg-apply`).addEventListener(`click`,()=>{e.subLabel=i.querySelector(`#cfg-label`).value,e.desc=i.querySelector(`#cfg-desc`).value,i.querySelector(`#cfg-trigger`)&&(e.config.trigger=i.querySelector(`#cfg-trigger`).value),i.querySelector(`#cfg-endpoint`)&&(e.config.endpoint=i.querySelector(`#cfg-endpoint`).value),i.querySelector(`#cfg-method`)&&(e.config.method=i.querySelector(`#cfg-method`).value),i.querySelector(`#cfg-condition`)&&(e.config.condition=i.querySelector(`#cfg-condition`).value),i.querySelector(`#cfg-prompt`)&&(e.config.prompt=i.querySelector(`#cfg-prompt`).value),i.querySelector(`#cfg-destination`)&&(e.config.destination=i.querySelector(`#cfg-destination`).value);let t=document.getElementById(`node-${e.id}`);t&&(t.querySelector(`.node-label`).textContent=e.subLabel,t.querySelector(`.node-desc`).textContent=e.desc),r.style.display=`none`,q(n,`info`,`Updated node "${e.subLabel}".`)})}function U(e){e.innerHTML=`
    <defs>
      <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="rgba(129,140,248,0.7)"/>
      </marker>
    </defs>
  `,j.forEach(t=>{let n=A.find(e=>e.id===t.from),r=A.find(e=>e.id===t.to);if(!n||!r)return;let i=document.getElementById(`node-${n.id}`),a=document.getElementById(`node-${r.id}`),o=i?i.offsetHeight:90,s=a?a.offsetHeight:90,c=(n.x+200)*V+I.x,l=(n.y+o-14)*V+I.y,u=r.x*V+I.x,d=(r.y+s-14)*V+I.y,f=(c+u)/2,p=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);p.setAttribute(`d`,`M ${c} ${l} C ${f} ${l}, ${f} ${d}, ${u} ${d}`),p.setAttribute(`fill`,`none`),p.setAttribute(`stroke`,`rgba(129,140,248,0.55)`),p.setAttribute(`stroke-width`,`2`),p.setAttribute(`stroke-dasharray`,`5,3`),p.setAttribute(`marker-end`,`url(#arrowhead)`),p.classList.add(`connection-line`),e.appendChild(p)})}async function gt(e){if(A.length===0){q(e,`error`,`No nodes. Add some first.`);return}let t=e.querySelector(`#wf-status`);t.textContent=`Running`,t.style.color=`#fbbf24`,e.querySelector(`#btn-run`).disabled=!0,q(e,`running`,`[${J()}] Workflow execution started — ${A.length} nodes`);let n=Date.now();for(let t of A){let n=document.getElementById(`status-${t.id}`),r=document.getElementById(`node-${t.id}`);n&&(n.className=`node-status-dot running`),r&&r.classList.add(`executing`),q(e,`running`,`[${J()}] Executing: ${t.subLabel} (${t.type})`),await Ct(600+Math.random()*500);let i=Math.random()>.05;n&&(n.className=i?`node-status-dot done`:`node-status-dot error`),r&&(r.classList.remove(`executing`),r.classList.add(i?`success`:`error`)),q(e,i?`success`:`error`,`[${J()}] ${t.subLabel}: ${i?`Completed ✓`:`Failed ✗`}`)}let r=((Date.now()-n)/1e3).toFixed(1);t.textContent=`Done`,t.style.color=`#34d399`,e.querySelector(`#btn-run`).disabled=!1,q(e,`success`,`[${J()}] Workflow finished in ${r}s.`),oe(e.querySelector(`#wf-title`)?.textContent||`Untitled`,A.length,`${r}s`,!0),setTimeout(()=>{t.textContent=`Draft`,t.style.color=``,A.forEach(e=>{let t=document.getElementById(`node-${e.id}`),n=document.getElementById(`status-${e.id}`);t&&t.classList.remove(`success`,`error`,`executing`),n&&(n.className=`node-status-dot idle`)})},4e3)}function _t(e){let n=e.querySelector(`#wf-title`)?.textContent||`Untitled Workflow`;B=n,z=ie(z,n,A,j),q(e,`success`,`[${J()}] Workflow "${n}" saved.`),bt(e);let r=e.querySelector(`#btn-save`);r&&(r.innerHTML=`${t(`check`)} Saved!`,setTimeout(()=>{r.innerHTML=`${t(`database`)} Save`},1500))}function vt(){let e=JSON.stringify({title:B,nodes:A,connections:j},null,2),t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`${B.replace(/\s+/g,`-`).toLowerCase()}.json`,r.click(),URL.revokeObjectURL(n)}function yt(e,t,n,r){let i=e.target.files[0];if(!i)return;let a=new FileReader;a.onload=e=>{try{let i=JSON.parse(e.target.result);if(i.nodes){if(A=[],j=[],n.innerHTML=``,i.nodes.forEach(e=>{H({type:e.type,subLabel:e.subLabel,desc:e.desc,x:e.x,y:e.y,config:e.config||{}},n,r,t)}),i.connections&&(i.connections.forEach(e=>{j.push(e)}),U(r)),i.title){B=i.title;let e=t.querySelector(`#wf-title`);e&&(e.textContent=i.title)}q(t,`success`,`[${J()}] Imported "${i.title||`workflow`}" — ${i.nodes.length} nodes.`)}}catch{q(t,`error`,`Invalid JSON file.`)}},a.readAsText(i)}function bt(e){let t=e.querySelector(`#saved-workflows-list`);if(!t)return;let n=l.workflows;if(n.length===0){t.innerHTML=`<div style="padding:8px 12px;font-size:11px;color:rgba(255,255,255,0.3)">No saved workflows yet.</div>`;return}t.innerHTML=n.map(e=>`
    <div class="saved-wf-item" data-id="${e.id}">
      <div class="saved-wf-name">${e.title}</div>
      <div class="saved-wf-meta">${e.nodes.length} nodes · ${new Date(e.updatedAt).toLocaleDateString()}</div>
    </div>
  `).join(``),t.querySelectorAll(`.saved-wf-item`).forEach(t=>{t.addEventListener(`click`,()=>{let n=ae(t.dataset.id);if(!n)return;let r=e.querySelector(`#nodes-layer`),i=e.querySelector(`#canvas-svg`);A=[],j=[],M=1,r.innerHTML=``,z=n.id,B=n.title;let a=e.querySelector(`#wf-title`);a&&(a.textContent=n.title),n.nodes.forEach(t=>{H({type:t.type,subLabel:t.subLabel,desc:t.desc,x:t.x,y:t.y,config:t.config||{}},r,i,e)}),n.connections.forEach(e=>j.push({...e})),U(i),q(e,`info`,`[${J()}] Loaded "${n.title}".`)})})}function xt(e){let t=sessionStorage.getItem(`ff_load_template`);if(t){sessionStorage.removeItem(`ff_load_template`);try{let n=JSON.parse(t),r=e.querySelector(`#nodes-layer`),i=e.querySelector(`#canvas-svg`);if(n.forEach((t,n)=>{H({type:t.type,subLabel:t.label,desc:t.desc,x:60+n*240,y:160+n%2*120},r,i,e)}),n.length>1){let e=A.slice(-n.length);for(let t=0;t<e.length-1;t++)j.push({from:e[t].id,to:e[t+1].id,id:`t${t}`});U(i)}q(e,`success`,`[${J()}] Loaded template — ${n.length} nodes.`)}catch{}}}function St(e,n,r){let i=e.querySelector(`#ai-panel-slot`);ft=!ft,ft?(i.style.display=`flex`,at(i,t=>{if(t.forEach((t,i)=>{H({type:t.type,subLabel:t.label,desc:t.desc,x:60+i*240,y:100+i%2*120},n,r,e)}),t.length>1){let e=A.slice(-t.length);for(let t=0;t<e.length-1;t++)j.push({from:e[t].id,to:e[t+1].id,id:`g${t}`});U(r)}q(e,`success`,`[${J()}] AI generated ${t.length} nodes.`)}),e.querySelector(`#btn-ai-panel`).innerHTML=`${t(`x`)} Close AI`):(i.style.display=`none`,i.innerHTML=``,e.querySelector(`#btn-ai-panel`).innerHTML=`${t(`sparkles`)} AI Generate`)}function W(e){e.style.transform=`translate(${I.x}px, ${I.y}px) scale(${V})`,e.style.transformOrigin=`0 0`}function G(e){let t=e.querySelector(`#zoom-label`);t&&(t.textContent=`${Math.round(V*100)}%`)}function K(e){let t=e.querySelector(`#canvas-hint`);t&&(t.style.opacity=A.length===0?`1`:`0`)}function q(e,t,n){let r=e.querySelector(`#exec-log`);if(!r)return;let i=document.createElement(`div`);i.className=`exec-log-line ${t}`,i.textContent=n,r.appendChild(i),r.scrollTop=r.scrollHeight}function J(){return new Date().toLocaleTimeString(`en-US`,{hour12:!1})}function Ct(e){return new Promise(t=>setTimeout(t,e))}function wt(e,n){let r=l.execHistory||[],i=r.length,a=r.filter(e=>e.success).length,o=i>0?(a/i*100).toFixed(1):`—`,s=l.workflows.length;e.innerHTML=`
    <div class="dashboard-page">
      <div class="page-header">
        <h1>Dashboard</h1>
        <p>Real-time analytics from your workflow executions.</p>
      </div>

      <!-- Stats -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-card-header">
            <span class="stat-card-label">Total Executions</span>
            <div class="stat-card-icon bg-indigo color-purple">${t(`activity`)}</div>
          </div>
          <div class="stat-card-value">${i.toLocaleString()}</div>
          <div class="stat-card-meta">${i>0?`From live executions`:`Run a workflow to see stats`}</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-header">
            <span class="stat-card-label">Saved Workflows</span>
            <div class="stat-card-icon bg-indigo color-purple">${t(`zap`)}</div>
          </div>
          <div class="stat-card-value">${s}</div>
          <div class="stat-card-meta">${s>0?`${s} workflow(s) on disk`:`Save your first workflow`}</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-header">
            <span class="stat-card-label">Success Rate</span>
            <div class="stat-card-icon bg-green color-green">${t(`checkCircle`)}</div>
          </div>
          <div class="stat-card-value">${o}${i>0?`%`:``}</div>
          <div class="stat-card-meta">${i>0?`${a}/${i} successful`:`No data yet`}</div>
        </div>
      </div>

      <!-- Execution History -->
      <div class="table-card">
        <div class="table-card-header">
          <span class="table-card-title">Execution History</span>
          <button class="btn btn-secondary btn-sm" onclick="window.navigate('/canvas')">
            ${t(`zap`)} New Workflow
          </button>
        </div>
        ${r.length===0?`
          <div style="padding:40px;text-align:center;color:rgba(255,255,255,0.3)">
            ${t(`activity`)}<br/><br/>
            No executions yet. Go to the Canvas and run a workflow!
          </div>
        `:r.slice(0,20).map(e=>{let n=new Date(e.timestamp),r=Tt(n);return`
          <div class="table-row" onclick="window.navigate('/canvas')">
            <div class="table-row-icon ${e.success?`bg-green color-green`:`bg-yellow color-yellow`}">
              ${t(e.success?`check`:`alertCircle`)}
            </div>
            <div class="table-row-info">
              <div class="table-row-name">${e.title}</div>
              <div class="table-row-sub">${e.nodeCount} nodes · Duration: ${e.duration}</div>
            </div>
            <div>
              <span class="badge ${e.success?`badge-success`:`badge-warning`}">
                ${e.success?`● Success`:`● Failed`}
              </span>
            </div>
            <div class="table-row-meta">
              <div class="table-row-meta-main">${r}</div>
              <div class="table-row-meta-sub">${n.toLocaleDateString()}</div>
            </div>
          </div>`}).join(``)}
      </div>

      <!-- Saved Workflows -->
      <div class="table-card">
        <div class="table-card-header">
          <span class="table-card-title">Saved Workflows</span>
        </div>
        ${l.workflows.length===0?`
          <div style="padding:40px;text-align:center;color:rgba(255,255,255,0.3)">
            ${t(`database`)}<br/><br/>
            No saved workflows. Use Ctrl+S in the Canvas to save.
          </div>
        `:l.workflows.map(e=>`
          <div class="table-row" onclick="window.navigate('/canvas')">
            <div class="table-row-icon bg-indigo color-purple">
              ${t(`workflow`)}
            </div>
            <div class="table-row-info">
              <div class="table-row-name">${e.title}</div>
              <div class="table-row-sub">${e.nodes.length} nodes · ${e.connections.length} connections</div>
            </div>
            <div class="table-row-meta">
              <div class="table-row-meta-main">${new Date(e.updatedAt).toLocaleDateString()}</div>
              <div class="table-row-meta-sub">${new Date(e.updatedAt).toLocaleTimeString()}</div>
            </div>
          </div>
        `).join(``)}
      </div>
    </div>
  `}function Tt(e){let t=Math.floor((Date.now()-e.getTime())/1e3);return t<60?`Just now`:t<3600?`${Math.floor(t/60)} min ago`:t<86400?`${Math.floor(t/3600)} hr ago`:`${Math.floor(t/86400)} days ago`}function Et(e){return e===`signup`?{title:`Create your FlowForge account`,subtitle:`Set up a local demo account so the app can remember your name, theme, and workspace entry point.`,submit:`Sign up`,alternate:`Already have an account?`,alternateCta:`Log in`,alternatePath:`/login`}:{title:`Welcome back`,subtitle:`Log in to continue with your saved local profile and jump into the FlowForge workspace.`,submit:`Log in`,alternate:`Need an account?`,alternateCta:`Sign up`,alternatePath:`/signup`}}function Dt(e,n,r=`login`){let i=Et(r);e.innerHTML=`
    <div class="auth-page">
      <div class="auth-card marketing-card">
        <div class="auth-copy">
          <span class="eyebrow">${r===`signup`?`Sign Up`:`Login`}</span>
          <h1>${i.title}</h1>
          <p>${i.subtitle}</p>
        </div>

        <form class="auth-form" id="auth-form">
          <div class="form-field ${r===`signup`?``:`hidden`}">
            <label for="auth-name">Name</label>
            <input id="auth-name" class="input-text" name="name" placeholder="Sandeep" />
          </div>
          <div class="form-field">
            <label for="auth-email">Email</label>
            <input id="auth-email" class="input-text" name="email" type="email" placeholder="you@example.com" />
          </div>
          <div class="form-field">
            <label for="auth-password">Password</label>
            <input id="auth-password" class="input-text" name="password" type="password" placeholder="Enter a password" />
          </div>
          <div class="form-feedback" id="auth-feedback" role="status" aria-live="polite"></div>
          <button class="btn btn-primary auth-submit" type="submit">${t(`arrowRight`)} ${i.submit}</button>
        </form>

        <div class="auth-footer">
          <span>${i.alternate}</span>
          <button class="btn btn-ghost" id="auth-switch">${i.alternateCta}</button>
        </div>
      </div>
    </div>
  `;let a=e.querySelector(`#auth-form`),o=e.querySelector(`#auth-feedback`);a.addEventListener(`submit`,e=>{e.preventDefault();let t={name:a.name?.value||``,email:a.email.value,password:a.password.value},s=r===`signup`?p(t):ee(t);o.textContent=s.ok?`${i.submit} successful.`:s.error,o.classList.toggle(`error`,!s.ok),o.classList.toggle(`success`,s.ok),s.ok&&n(`/users`)}),e.querySelector(`#auth-switch`).addEventListener(`click`,()=>n(i.alternatePath))}var Ot=[{path:`/`,label:`Home`},{path:`/startups`,label:`Startups`},{path:`/features`,label:`Features`},{path:`/use-cases`,label:`Use Cases`},{path:`/sponsors`,label:`Sponsors`},{path:`/demo`,label:`Demo`}],kt=[{title:`Prompt-to-workflow generation`,description:`Turn plain English into connected workflow steps with an AI assistant that understands triggers, conditions, actions, and outputs.`,accent:`purple`},{title:`Visual editing that stays fast`,description:`Refine flows with drag-and-drop nodes, editable labels, live connections, and workspace controls that keep the product demo-ready.`,accent:`blue`},{title:`Execution feedback in real time`,description:`Watch workflows run step by step with status indicators, logs, and dashboard metrics that make the product feel alive.`,accent:`green`},{title:`Local-first persistence`,description:`Workflows, auth sessions, theme preferences, and account updates persist in the browser for an instant no-backend demo.`,accent:`yellow`},{title:`Dual AI provider story`,description:`Show buyers and judges a resilient product narrative with Gemini and Featherless AI available inside one experience.`,accent:`cyan`},{title:`Launch-oriented UX polish`,description:`Dedicated public pages, demo flows, strong CTAs, and clear value props make the app feel like a startup, not a prototype.`,accent:`purple`}],At=[{title:`Customer support triage`,summary:`Route inbound issues, summarize context with AI, and trigger the right follow-up without switching tools.`},{title:`Lead qualification`,summary:`Collect inbound submissions, score them, personalize responses, and push high-intent leads into your CRM flow.`},{title:`Internal ops automation`,summary:`Use workflows for recurring reporting, Slack alerts, approval routing, and AI-assisted decision support.`},{title:`Developer incident response`,summary:`Listen to webhooks, filter severity, generate summaries, and notify the right team with clean, structured execution logs.`}],jt=[{name:`Gemini AI`,role:`Primary generation engine`,detail:`Turns user prompts into workflow structure, reasoning, and assistive product copy.`},{name:`Featherless AI`,role:`Open model fallback`,detail:`Gives the product a second AI path and a stronger reliability story during demos.`},{name:`Stitch AI`,role:`Interface inspiration`,detail:`Influenced premium UI direction, layout thinking, and faster iteration on product presentation.`},{name:`DevSwarm`,role:`Build workflow support`,detail:`Supported rapid iteration and multi-surface product assembly during the hackathon build.`},{name:`gen.xyz`,role:`Launch identity`,detail:`Represents the path from hackathon build to public-facing product branding and launch presence.`}],Mt=[{id:`zapier`,name:`Zapier`,logo:`ZAPIER`,tagline:`Automation for mainstream SaaS operations`,built:`Popularized app-to-app automation with triggers, actions, and broad business connectivity.`,angle:`FlowForge feels lighter and more visual for users who want AI-assisted flow creation instead of a dense integration catalog first.`},{id:`make`,name:`Make`,logo:`MAKE`,tagline:`Scenario-based automation with visual mapping`,built:`Brought a more visual operations style to multi-step automations and scenario modeling.`,angle:`FlowForge pushes further into prompt-driven workflow generation and an approachable launch story for AI-native teams.`},{id:`n8n`,name:`n8n`,logo:`n8n`,tagline:`Developer-friendly open workflow automation`,built:`Made extensible workflow automation popular with self-hosting, custom nodes, and technical teams.`,angle:`FlowForge complements that world with a polished AI-first layer designed for faster onboarding and product demos.`},{id:`pipedream`,name:`Pipedream`,logo:`PIPEDREAM`,tagline:`Code-friendly event workflows`,built:`Connected APIs, serverless steps, and event-driven automation for builders who want flexibility.`,angle:`FlowForge presents the same space through a more guided product shell, clearer marketing narrative, and visual workflow UX.`},{id:`retool-ai`,name:`Retool AI`,logo:`RETOOL AI`,tagline:`Internal tools and AI-powered ops`,built:`Showed how AI layers can accelerate operations, internal tooling, and workflow-oriented product experiences.`,angle:`FlowForge narrows in on visual workflow building with a sharper automation identity and demo-ready public experience.`}],Nt=[{label:`1. Describe the outcome`,detail:`Type a natural-language request such as qualifying leads or routing incidents.`},{label:`2. Generate the flow`,detail:`AI proposes triggers, logic, and outputs as an editable visual workflow.`},{label:`3. Review and launch`,detail:`Inspect execution status, save the workflow, and refine it with templates or manual edits.`}];function Pt(e=kt.length){return kt.slice(0,e).map(e=>`
        <article class="marketing-card feature-tile">
          <div class="feature-tile-icon ${e.accent}">${t(`sparkles`)}</div>
          <h3>${e.title}</h3>
          <p>${e.description}</p>
        </article>
      `).join(``)}function Ft(e=At.length){return At.slice(0,e).map(e=>`
        <article class="marketing-card use-case-card">
          <span class="eyebrow">Use case</span>
          <h3>${e.title}</h3>
          <p>${e.summary}</p>
        </article>
      `).join(``)}function It(e=jt.length){return jt.slice(0,e).map(e=>`
        <article class="marketing-card sponsor-showcase-card">
          <div class="logo-badge">${e.name}</div>
          <h3>${e.role}</h3>
          <p>${e.detail}</p>
        </article>
      `).join(``)}function Lt(){return`
    <section class="marketing-section startup-showcase">
      <div class="section-copy">
        <span class="eyebrow">Domain Leaders</span>
        <h2>Startup references that shaped this product space</h2>
        <p>Explore the companies that built automation, workflow, and AI operations products in this domain, then see how FlowForge positions itself alongside them.</p>
      </div>
      <div class="startup-tabs">${Mt.map((e,t)=>`
      <button class="startup-tab ${t===0?`active`:``}" data-startup-tab="${e.id}">
        ${e.name}
      </button>
    `).join(``)}</div>
      <div class="startup-panels">${Mt.map((e,t)=>`
      <article class="startup-panel ${t===0?`active`:``}" data-startup-panel="${e.id}">
        <div class="startup-panel-header">
          <div class="logo-badge large">${e.logo}</div>
          <div>
            <h3>${e.name}</h3>
            <p>${e.tagline}</p>
          </div>
        </div>
        <div class="startup-panel-grid">
          <div class="marketing-card startup-detail-card">
            <span class="eyebrow">What they built</span>
            <p>${e.built}</p>
          </div>
          <div class="marketing-card startup-detail-card">
            <span class="eyebrow">FlowForge angle</span>
            <p>${e.angle}</p>
          </div>
        </div>
      </article>
    `).join(``)}</div>
    </section>
  `}function Rt(){return`
    <section class="hero-surface">
      <div class="hero-copy">
        <span class="hero-pill">${t(`sparkles`)} AI workflow automation, packaged like a real product</span>
        <h1>Build, demo, and launch AI-powered workflows from one polished surface.</h1>
        <p>FlowForge AI combines prompt-driven workflow generation, visual editing, execution feedback, startup-style storytelling, and local auth to feel launch ready from the first click.</p>
        <div class="hero-actions">
          <button class="btn btn-primary" data-nav="/signup">${t(`arrowRight`)} Create account</button>
          <button class="btn btn-secondary" data-nav="/demo">${t(`play`)} Watch the demo flow</button>
        </div>
      </div>
      <div class="hero-preview marketing-card">
        <div class="preview-window-header">
          <span>FlowForge AI Launch Preview</span>
          <div class="preview-dots"><span></span><span></span><span></span></div>
        </div>
        <div class="preview-workflow">
          <div class="preview-step">
            <strong>Prompt</strong>
            <p>"When a new lead arrives, score it, notify sales, and create a follow-up."</p>
          </div>
          <div class="preview-nodes">
            <span>Trigger</span>
            <span>AI Score</span>
            <span>Condition</span>
            <span>Notify</span>
            <span>CRM Update</span>
          </div>
          <div class="preview-metrics">
            <div><strong>94%</strong><span>success rate</span></div>
            <div><strong>12s</strong><span>avg. run time</span></div>
            <div><strong>2 AI</strong><span>provider options</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="marketing-section">
      <div class="section-copy">
        <span class="eyebrow">Why it matters</span>
        <h2>A better first impression for your workflow product</h2>
        <p>The landing experience now explains the AI story, showcases use cases, compares the market, highlights sponsors, and gives users clear paths into demo, signup, and the builder workspace.</p>
      </div>
      <div class="marketing-grid three-col">${Pt(3)}</div>
    </section>

    <section class="marketing-section">
      <div class="section-copy">
        <span class="eyebrow">Use Cases</span>
        <h2>Built for teams who want automation without the maze</h2>
      </div>
      <div class="marketing-grid two-col">${Ft(4)}</div>
    </section>

    ${Lt()}

    <section class="marketing-section sponsor-band">
      <div class="section-copy">
        <span class="eyebrow">Sponsors</span>
        <h2>Backed by the tools that helped shape the build</h2>
      </div>
      <div class="marketing-grid sponsor-grid">${It(5)}</div>
    </section>

    <section class="marketing-section cta-banner">
      <div>
        <span class="eyebrow">Launch Next</span>
        <h2>Explore the demo, create an account, or jump straight into the canvas.</h2>
      </div>
      <div class="hero-actions">
        <button class="btn btn-primary" data-nav="/demo">${t(`playCircle`)} Open demo page</button>
        <button class="btn btn-secondary" data-nav="/canvas">${t(`zap`)} Go to canvas</button>
      </div>
    </section>
  `}function zt(){return`
    <section class="marketing-section page-intro">
      <span class="eyebrow">Features</span>
      <h1>What makes FlowForge AI feel product-ready</h1>
      <p>Everything in this release is aimed at making the app look and behave like a startup-ready automation platform while preserving the existing builder experience.</p>
    </section>
    <section class="marketing-section">
      <div class="marketing-grid three-col">${Pt()}</div>
    </section>
  `}function Bt(){return`
    <section class="marketing-section page-intro">
      <span class="eyebrow">Use Cases</span>
      <h1>Where this workflow product shines</h1>
      <p>Use these scenarios to explain the product in demos, pitches, or sponsor submissions.</p>
    </section>
    <section class="marketing-section">
      <div class="marketing-grid two-col">${Ft()}</div>
    </section>
  `}function Vt(){return`
    <section class="marketing-section page-intro">
      <span class="eyebrow">Sponsors</span>
      <h1>The stack and supporters behind the launch story</h1>
      <p>Instead of a small footer mention, sponsors now have a proper showcase area that feels intentional in both dark and light mode.</p>
    </section>
    <section class="marketing-section">
      <div class="marketing-grid sponsor-grid">${It()}</div>
    </section>
  `}function Ht(){return`
    <section class="marketing-section page-intro">
      <span class="eyebrow">Startup Landscape</span>
      <h1>Companies that built in this domain</h1>
      <p>These examples help users immediately understand FlowForge’s market category, inspiration, and differentiation.</p>
    </section>
    ${Lt()}
  `}function Y(e,t,n=`home`){e.innerHTML=`<div class="marketing-page">${n===`features`?zt():n===`use-cases`?Bt():n===`sponsors`?Vt():n===`startups`?Ht():Rt()}</div>`,e.querySelectorAll(`[data-nav]`).forEach(e=>{e.addEventListener(`click`,()=>t(e.dataset.nav))}),e.querySelectorAll(`[data-startup-tab]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.startupTab;e.querySelectorAll(`[data-startup-tab]`).forEach(e=>e.classList.remove(`active`)),e.querySelectorAll(`[data-startup-panel]`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),e.querySelector(`[data-startup-panel="${n}"]`)?.classList.add(`active`)})})}function Ut(e,n){e.innerHTML=`
    <div class="marketing-page">
      <section class="marketing-section page-intro">
        <span class="eyebrow">Demo</span>
        <h1>A guided product walkthrough before users enter the builder</h1>
        <p>This page gives FlowForge a real product-demo layer instead of dropping visitors directly onto the canvas.</p>
      </section>

      <section class="demo-grid marketing-section">
        <article class="marketing-card demo-story-card">
          <span class="eyebrow">Flow</span>
          <h2>From prompt to workflow to execution</h2>
          <div class="demo-story-steps">
            ${Nt.map(e=>`
                <div class="demo-story-step">
                  <strong>${e.label}</strong>
                  <p>${e.detail}</p>
                </div>
              `).join(``)}
          </div>
        </article>

        <article class="marketing-card demo-screen-card">
          <div class="preview-window-header">
            <span>Live Product Preview</span>
            <div class="preview-dots"><span></span><span></span><span></span></div>
          </div>
          <div class="demo-screen-content">
            <div class="demo-screen-column">
              <span class="eyebrow">Prompt</span>
              <p>Watch FlowForge transform a plain-language request into a connected workflow in seconds.</p>
            </div>
            <div class="demo-screen-column">
              <span class="eyebrow">Execution</span>
              <p>Each node reports status, creating a much stronger “this is real” feeling for launches and pitches.</p>
            </div>
          </div>
        </article>
      </section>

      <section class="marketing-section cta-banner">
        <div>
          <span class="eyebrow">Next step</span>
          <h2>Try the canvas or create a local account to personalize the experience.</h2>
        </div>
        <div class="hero-actions">
          <button class="btn btn-primary" data-nav="/canvas">${t(`zap`)} Try canvas</button>
          <button class="btn btn-secondary" data-nav="/signup">${t(`user`)} Create account</button>
        </div>
      </section>
    </div>
  `,e.querySelectorAll(`[data-nav]`).forEach(e=>{e.addEventListener(`click`,()=>n(e.dataset.nav))})}function Wt(e,n){e.innerHTML=`
    <div class="settings-page">
      <div class="page-header">
        <h1>Settings</h1>
        <p>Configure providers, manage app data, and control the launch-ready local account experience.</p>
      </div>

      <!-- AI Provider Selection -->
      <div class="settings-section">
        <h2>AI Provider</h2>
        <div class="settings-card">
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${t(`bot`)} Active AI Provider</div>
              <div class="settings-row-desc">Select which AI engine powers your workflow generation.</div>
            </div>
            <div class="provider-toggle-group">
              <button class="provider-btn ${l.aiProvider===`gemini`?`active`:``}" data-provider="gemini">
                ${t(`sparkles`)} Gemini
              </button>
              <button class="provider-btn ${l.aiProvider===`featherless`?`active`:``}" data-provider="featherless">
                ${t(`wand`)} Featherless AI
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Gemini Config -->
      <div class="settings-section">
        <h2>Gemini Configuration</h2>
        <div class="settings-card">
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${t(`key`)} Gemini API Key</div>
              <div class="settings-row-desc">Get a free key at <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color:#818cf8">aistudio.google.com</a></div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;">
              <input type="password" class="input-text mono" id="gemini-key" placeholder="AIza..." value="${l.apiKey}" />
              <button class="btn btn-primary btn-sm" id="save-gemini">Save</button>
            </div>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${t(`activity`)} Model Strategy</div>
              <div class="settings-row-desc">Auto-fallback through available models on your key.</div>
            </div>
            <div class="model-chain">
              <span class="model-chip active">gemini-2.5-flash</span>
              <span class="model-arrow">→</span>
              <span class="model-chip">gemini-2.0-flash</span>
              <span class="model-arrow">→</span>
              <span class="model-chip">gemini-flash-latest</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Featherless AI Config -->
      <div class="settings-section">
        <h2>Featherless AI Configuration</h2>
        <div class="settings-card">
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${t(`key`)} Featherless API Key</div>
              <div class="settings-row-desc">Get a key at <a href="https://featherless.ai" target="_blank" style="color:#818cf8">featherless.ai</a> — LovHack Sponsor</div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;">
              <input type="password" class="input-text mono" id="featherless-key" placeholder="sk-..." value="${l.featherlessKey}" />
              <button class="btn btn-primary btn-sm" id="save-featherless">Save</button>
            </div>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${t(`bot`)} Model</div>
              <div class="settings-row-desc">Open-source model via Featherless AI inference.</div>
            </div>
            <div class="model-chain">
              <span class="model-chip active">Qwen2.5-Coder-32B</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Data Management -->
      <div class="settings-section">
        <h2>Data Management</h2>
        <div class="settings-card">
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${t(`database`)} Export All Workflows</div>
              <div class="settings-row-desc">Download all saved workflows as a JSON file.</div>
            </div>
            <button class="btn btn-secondary btn-sm" id="export-all">
              ${t(`arrowRight`)} Export JSON
            </button>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${t(`cloud`)} Import Workflows</div>
              <div class="settings-row-desc">Load workflows from a previously exported JSON file.</div>
            </div>
            <div>
              <input type="file" id="import-file" accept=".json" style="display:none" />
              <button class="btn btn-secondary btn-sm" id="import-btn">
                ${t(`cloud`)} Import JSON
              </button>
            </div>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${t(`trash`)} Clear All Data</div>
              <div class="settings-row-desc">Remove FlowForge workflows, preferences, and execution history without wiping unrelated browser storage.</div>
            </div>
            <button class="btn btn-sm" id="clear-data" style="background:rgba(239,68,68,0.15);color:#ef4444;border:1px solid rgba(239,68,68,0.3);">
              ${t(`trash`)} Clear
            </button>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <h2>Account</h2>
        <div class="settings-card">
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">${t(`user`)} Active Profile</div>
              <div class="settings-row-desc">${l.currentUser?`${l.currentUser.name} · ${l.currentUser.email}`:`No local user signed in right now.`}</div>
            </div>
            <button class="btn btn-secondary btn-sm" id="manage-account">
              ${t(`arrowRight`)} ${l.currentUser?`Open Users Page`:`Login / Sign Up`}
            </button>
          </div>
        </div>
      </div>

      <!-- About -->
      <div class="settings-section">
        <h2>About FlowForge AI</h2>
        <div class="settings-card">
          <div class="settings-row">
            <div class="settings-row-info"><div class="settings-row-label">Version</div></div>
            <span style="font-size:13px;color:rgba(255,255,255,0.4)">1.0.0 · LovHack Season 2</span>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">Technology</div>
            </div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;max-width:320px;justify-content:flex-end">
              ${[`Gemini AI`,`Featherless AI`,`Stitch AI (Design)`,`Vite`,`Vanilla JS`].map(e=>`<span class="sponsor-pill">${e}</span>`).join(``)}
            </div>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">Hackathon Sponsors</div>
            </div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;max-width:320px;justify-content:flex-end">
              ${[`Featherless AI`,`DevSwarm`,`gen.xyz`,`Miro`,`n8n`,`Nodebase`,`CREAO`].map(e=>`<span class="sponsor-pill">${e}</span>`).join(``)}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,e.querySelectorAll(`.provider-btn`).forEach(t=>{t.addEventListener(`click`,()=>{l.aiProvider=t.dataset.provider,d(),e.querySelectorAll(`.provider-btn`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`)})}),e.querySelector(`#save-gemini`).addEventListener(`click`,()=>{l.apiKey=e.querySelector(`#gemini-key`).value.trim(),d(),Gt(e.querySelector(`#save-gemini`))}),e.querySelector(`#save-featherless`).addEventListener(`click`,()=>{l.featherlessKey=e.querySelector(`#featherless-key`).value.trim(),d(),Gt(e.querySelector(`#save-featherless`))}),e.querySelector(`#export-all`).addEventListener(`click`,()=>{let e=JSON.stringify({workflows:l.workflows,execHistory:l.execHistory},null,2),t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`flowforge-export-${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(n)}),e.querySelector(`#import-btn`).addEventListener(`click`,()=>{e.querySelector(`#import-file`).click()}),e.querySelector(`#import-file`).addEventListener(`change`,e=>{let t=e.target.files[0];if(!t)return;let n=new FileReader;n.onload=e=>{try{let t=JSON.parse(e.target.result);t.workflows&&(l.workflows=[...l.workflows,...t.workflows],d(),alert(`Imported ${t.workflows.length} workflow(s)!`))}catch{alert(`Invalid JSON file.`)}},n.readAsText(t)}),e.querySelector(`#clear-data`).addEventListener(`click`,()=>{confirm(`Delete FlowForge workflows, execution history, AI settings, and theme preferences?`)&&(re({includeAccounts:!1}),location.reload())}),e.querySelector(`#manage-account`).addEventListener(`click`,()=>{n(l.currentUser?`/users`:`/login`)})}function Gt(e){e.textContent=`✓ Saved`,e.style.background=`#34d399`,setTimeout(()=>{e.textContent=`Save`,e.style.background=``},1500)}var Kt=[{icon:`mail`,iconClass:`bg-blue color-blue`,title:`Email Auto-Responder`,desc:`Automatically reply to new emails with a personalized message using AI, then log to a database.`,steps:4,category:`Productivity`,nodes:[{type:`trigger`,label:`Email Trigger`,desc:`Watch inbox for new messages`},{type:`aiAgent`,label:`AI Compose`,desc:`Generate personalized reply`},{type:`action`,label:`Send Reply`,desc:`Dispatch the email response`},{type:`output`,label:`Log to DB`,desc:`Record sent emails to database`}]},{icon:`slack`,iconClass:`bg-purple color-purple`,title:`Slack Alert Pipeline`,desc:`Monitor a webhook endpoint and send filtered alerts to Slack channels based on event severity.`,steps:3,category:`Monitoring`,nodes:[{type:`trigger`,label:`Webhook`,desc:`Receive event via HTTP POST`},{type:`condition`,label:`Severity Check`,desc:`Filter high severity events`},{type:`output`,label:`Slack Notify`,desc:`Post alert to #alerts channel`}]},{icon:`database`,iconClass:`bg-green color-green`,title:`Data Sync Pipeline`,desc:`Schedule a daily data sync that fetches from an API, transforms the payload, and writes to DB.`,steps:4,category:`Data`,nodes:[{type:`trigger`,label:`Cron Schedule`,desc:`Run daily at 8:00 AM`},{type:`action`,label:`Fetch API`,desc:`GET data from remote API`},{type:`aiAgent`,label:`Transform`,desc:`Normalize and enrich data`},{type:`output`,label:`Write DB`,desc:`Insert records into database`}]},{icon:`user`,iconClass:`bg-yellow color-yellow`,title:`Customer Onboarding`,desc:`When a new user signs up, validate their data, send a welcome email, and create their profile.`,steps:5,category:`CRM`,nodes:[{type:`trigger`,label:`Signup Webhook`,desc:`New user registered event`},{type:`condition`,label:`Validate Email`,desc:`Check valid email format`},{type:`action`,label:`Create Profile`,desc:`Insert user in database`},{type:`aiAgent`,label:`Personalize`,desc:`Generate welcome message`},{type:`output`,label:`Welcome Email`,desc:`Send onboarding email`}]}];function qt(e,n){e.innerHTML=`
    <div class="templates-page">
      <div class="page-header">
        <h1>Templates</h1>
        <p>Jump-start with pre-built workflow templates. Click any card to load it on the canvas.</p>
      </div>
      <div class="templates-grid">
        ${Kt.map((e,n)=>`
          <div class="template-card" data-idx="${n}">
            <div class="template-card-icon ${e.iconClass}">${t(e.icon)}</div>
            <h3>${e.title}</h3>
            <p>${e.desc}</p>
            <div class="template-card-footer">
              <span class="template-steps">${e.steps} nodes · ${e.category}</span>
              <button class="btn btn-primary btn-sm" data-idx="${n}">
                Use Template ${t(`arrowRight`)}
              </button>
            </div>
          </div>
        `).join(``)}
      </div>
    </div>
  `,e.querySelectorAll(`[data-idx]`).forEach(e=>{e.addEventListener(`click`,t=>{let r=Kt[parseInt(e.dataset.idx)];r&&(sessionStorage.setItem(`ff_load_template`,JSON.stringify(r.nodes)),n(`/canvas`))})})}function Jt(){return[{label:`Saved workflows`,value:l.workflows.length},{label:`Executions tracked`,value:l.execHistory.length},{label:`Theme`,value:l.theme===`dark`?`Dark`:`Light`}]}function Yt(e,n){let r=l.currentUser;if(!r){n(`/login`);return}e.innerHTML=`
    <div class="users-page">
      <section class="marketing-section page-intro">
        <span class="eyebrow">Account</span>
        <h1>Hello, ${r.name}</h1>
        <p>This local account page lets users review session details, update their display name, and log out without leaving the product shell.</p>
      </section>

      <section class="account-grid marketing-section">
        <article class="marketing-card account-profile-card">
          <div class="account-avatar">${r.name.slice(0,1).toUpperCase()}</div>
          <div class="account-profile-copy">
            <h2>${r.name}</h2>
            <p>${r.email}</p>
            <span class="account-tag">Local demo account</span>
          </div>
        </article>

        <article class="marketing-card account-form-card">
          <h2>Update display name</h2>
          <form id="profile-form" class="account-form">
            <div class="form-field">
              <label for="profile-name">Display name</label>
              <input id="profile-name" class="input-text" value="${r.name}" />
            </div>
            <div class="form-feedback" id="profile-feedback" role="status" aria-live="polite"></div>
            <div class="account-actions">
              <button type="submit" class="btn btn-primary">${t(`check`)} Save changes</button>
              <button type="button" class="btn btn-secondary" id="logout-btn">${t(`x`)} Log out</button>
            </div>
          </form>
        </article>
      </section>

      <section class="marketing-section">
        <div class="marketing-grid three-col">
          ${Jt().map(e=>`
                <article class="marketing-card account-stat-card">
                  <span class="eyebrow">${e.label}</span>
                  <strong>${e.value}</strong>
                </article>
              `).join(``)}
        </div>
      </section>
    </div>
  `;let i=e.querySelector(`#profile-form`),a=e.querySelector(`#profile-feedback`);i.addEventListener(`submit`,t=>{t.preventDefault();let n=ne(e.querySelector(`#profile-name`).value);a.textContent=n.ok?`Profile updated.`:n.error,a.classList.toggle(`error`,!n.ok),a.classList.toggle(`success`,n.ok),n.ok&&(e.querySelector(`.account-avatar`).textContent=l.currentUser.name.slice(0,1).toUpperCase(),e.querySelector(`.account-profile-copy h2`).textContent=l.currentUser.name)}),e.querySelector(`#logout-btn`).addEventListener(`click`,()=>{te(),n(`/login`)})}var Xt=[`/`,`/startups`,`/features`,`/use-cases`,`/sponsors`,`/demo`,`/login`,`/signup`],Zt=[`/canvas`,`/dashboard`,`/templates`,`/settings`],Qt=[`/users`];function $t(e){return e&&e!==`#`?e:`/`}function en(e){let t=$t(e);return Zt.includes(t)?{path:t,layout:`workspace`,requiresAuth:!1}:Qt.includes(t)?{path:t,layout:`account`,requiresAuth:!0}:Xt.includes(t)?{path:t,layout:`public`,requiresAuth:!1}:{path:t,layout:`not-found`,requiresAuth:!1}}function tn(e=l.theme){document.documentElement.setAttribute(`data-theme`,e)}function nn(e=l.theme){return e===`dark`?`Light mode`:`Dark mode`}function rn(){return l.theme=l.theme===`dark`?`light`:`dark`,d(),tn(l.theme),l.theme}var X=null;tn(l.theme);function an(){return window.location.hash.slice(1)||`/`}function Z(e,{replace:t=!1}={}){let n=e||`/`;if(n===X&&!t)return;X=n;let r=t?`replaceState`:`pushState`;window.history[r]({path:n},``,`#${n}`),$(n)}window.navigate=Z;function Q(){return`
    <button class="brand-lockup" data-nav="/">
      <span class="logo-icon">${t(`zap`)}</span>
      <span class="logo-text">FlowForge<span>AI</span></span>
    </button>
  `}function on(e){let n=l.currentUser;return`
    <div class="public-shell">
      <div class="public-shell-bg">
        <div class="bg-orb bg-orb-1"></div>
        <div class="bg-orb bg-orb-2"></div>
        <div class="bg-orb bg-orb-3"></div>
      </div>
      <header class="marketing-header">
        <div class="marketing-header-row">
          ${Q()}
          <nav class="marketing-nav">
            ${Ot.map(t=>`
                <button class="marketing-nav-link ${e===t.path?`active`:``}" data-nav="${t.path}">
                  ${t.label}
                </button>
              `).join(``)}
          </nav>
          <div class="marketing-header-actions">
            <button class="btn btn-ghost" id="theme-toggle">${nn()}</button>
            ${n?`
                  <button class="btn btn-secondary" data-nav="/users">${t(`user`)} ${n.name}</button>
                  <button class="btn btn-primary" data-logout>Log out</button>
                `:`
                  <button class="btn btn-ghost" data-nav="/login">Login</button>
                  <button class="btn btn-primary" data-nav="/signup">Sign up</button>
                `}
          </div>
        </div>
      </header>
      <main id="main-content" class="public-content"></main>
    </div>
  `}function sn(e){let n=l.currentUser,r=n?.name||`Guest Builder`,i=n?`Local Demo Account`:`Launch Preview`;return`
    <div class="layout-app">
      <aside class="sidebar">
        <div class="sidebar-brand">
          ${Q()}
        </div>
        <nav class="sidebar-nav">
          <span class="nav-section-label">Workspace</span>
          ${Zt.map(n=>{let[r,i]={"/canvas":[`Canvas Editor`,`gitMerge`],"/dashboard":[`Dashboard`,`layoutDashboard`],"/templates":[`Templates`,`library`],"/settings":[`Settings`,`settings`]}[n];return`
              <button class="nav-link ${e===n?`active`:``}" data-nav="${n}">
                ${t(i)} ${r}
              </button>
            `}).join(``)}
          <div class="sidebar-divider"></div>
          <span class="nav-section-label">Account</span>
          <button class="nav-link ${e===`/users`?`active`:``}" data-nav="/users">
            ${t(`user`)} Users
          </button>
        </nav>
        <div class="sidebar-footer">
          <button class="theme-toggle" id="theme-toggle">${nn()}</button>
          <div class="sidebar-user">
            <div class="user-avatar">${r.slice(0,1).toUpperCase()}</div>
            <div class="user-info">
              <div class="user-name">${r}</div>
              <div class="user-plan">${i}</div>
            </div>
          </div>
          <div class="workspace-footer-actions">
            ${n?`<button class="btn btn-secondary btn-sm" data-logout>Log out</button>`:`<button class="btn btn-secondary btn-sm" data-nav="/login">Log in</button>`}
          </div>
        </div>
      </aside>
      <div id="main-content" class="page-content"></div>
    </div>
  `}function cn(e){return`
    <div class="public-shell account-shell">
      <div class="public-shell-bg">
        <div class="bg-orb bg-orb-1"></div>
        <div class="bg-orb bg-orb-2"></div>
        <div class="bg-orb bg-orb-3"></div>
      </div>
      <header class="marketing-header">
        <div class="marketing-header-row">
          ${Q()}
          <div class="marketing-header-actions">
            <button class="btn btn-ghost" data-nav="/dashboard">Workspace</button>
            <button class="btn btn-ghost ${e===`/users`?`active-nav-action`:``}" data-nav="/users">Users</button>
            <button class="btn btn-ghost" id="theme-toggle">${nn()}</button>
            <button class="btn btn-primary" data-logout>Log out</button>
          </div>
        </div>
      </header>
      <main id="main-content" class="public-content"></main>
    </div>
  `}function ln(e){e.querySelectorAll(`[data-nav]`).forEach(e=>{e.addEventListener(`click`,()=>Z(e.dataset.nav))}),e.querySelectorAll(`[data-logout]`).forEach(e=>{e.addEventListener(`click`,()=>{te(),d(),Z(`/login`)})});let t=e.querySelector(`#theme-toggle`);t&&t.addEventListener(`click`,()=>{rn(),$(X||an())})}function un(e,t){switch(e){case`/`:Y(t,Z,`home`);break;case`/startups`:Y(t,Z,`startups`);break;case`/features`:Y(t,Z,`features`);break;case`/use-cases`:Y(t,Z,`use-cases`);break;case`/sponsors`:Y(t,Z,`sponsors`);break;case`/demo`:Ut(t,Z);break;case`/login`:Dt(t,Z,`login`);break;case`/signup`:Dt(t,Z,`signup`);break;case`/users`:Yt(t,Z);break;case`/canvas`:pt(t,Z);break;case`/dashboard`:wt(t,Z);break;case`/templates`:qt(t,Z);break;case`/settings`:Wt(t,Z);break;default:t.innerHTML=`
        <div class="not-found-page">
          <h1>Page not found</h1>
          <p>The route <code>${e}</code> does not exist yet.</p>
          <button class="btn btn-primary" data-nav="/">Return home</button>
        </div>
      `,t.querySelector(`[data-nav]`)?.addEventListener(`click`,()=>Z(`/`))}}function $(e){let t=document.getElementById(`app`),n=en(e);if(n.requiresAuth&&!f()){Z(`/login`,{replace:!0});return}n.layout===`workspace`?t.innerHTML=sn(e):n.layout===`account`?t.innerHTML=cn(e):t.innerHTML=on(Xt.includes(e)?e:`/`),ln(t),un(e,t.querySelector(`#main-content`))}window.addEventListener(`popstate`,()=>{let e=an();X=e,$(e)}),X=an(),$(X);