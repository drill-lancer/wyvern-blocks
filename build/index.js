!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.serverSideRender}()},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),a=n(1),o=n(3),l=n(4),i=n.n(l),s={backgroundColor:"#900",color:"#fff",padding:"20px"};Object(c.registerBlockType)("gutenberg-practice-01/test-01",{title:"Example: Basic (esnext)",icon:"universal-access-alt",category:"layout",example:{},edit:function(){return Object(r.createElement)("div",{style:s},"Hello World, step 1 (from the editor).")},save:function(){return Object(r.createElement)("div",{style:s},"Hello World, step 1 (from the frontend).")}}),Object(c.registerBlockType)("gutenberg-practice-01/test-02",{title:"Example: Stylesheets",icon:"universal-access-alt",category:"layout",example:{},edit:function(e){var t=e.className;return Object(r.createElement)("p",{className:t},"Hello World, step 2 (from the editor, in green).")},save:function(e){var t=e.className;return Object(r.createElement)("p",{className:t},"Hello World, step 2 (from the frontend, in red).")}}),Object(c.registerBlockType)("gutenberg-practice-01/test-03",{title:"Example: Editable (esnext)",icon:"universal-access-alt",category:"layout",attributes:{content:{type:"array",source:"children",selector:"p"}},example:{attributes:{content:"Hello World"}},edit:function(e){var t=e.attributes.content,n=e.setAttributes,c=e.className;return Object(r.createElement)(a.RichText,{tagName:"p",className:c,onChange:function(e){n({content:e})},value:t})},save:function(e){return Object(r.createElement)(a.RichText.Content,{tagName:"p",value:e.attributes.content})}}),Object(c.registerBlockType)("gutenberg-practice-01/test-04",{title:"Example: Controls (esnext)",icon:"universal-access-alt",category:"layout",attributes:{content:{type:"array",source:"children",selector:"p"},alignment:{type:"string",default:"none"}},example:{attributes:{content:"Hello World",alignment:"right"}},edit:function(e){var t=e.attributes,n=t.content,c=t.alignment,o=e.className;return Object(r.createElement)("div",null,Object(r.createElement)(a.BlockControls,null,Object(r.createElement)(a.AlignmentToolbar,{value:c,onChange:function(t){e.setAttributes({alignment:void 0===t?"none":t})}})),Object(r.createElement)(a.RichText,{className:o,style:{textAlign:c},tagName:"p",onChange:function(t){e.setAttributes({content:t})},value:n}))},save:function(e){return Object(r.createElement)(a.RichText.Content,{className:"gutenberg-practice-01-align-${props.attributes.alignment}",tagName:"p",value:e.attributes.content})}}),Object(c.registerBlockType)("gutenberg-practice-01/test-05",{title:"Example: last post",icon:"megaphone",category:"widgets",edit:Object(o.withSelect)((function(e){return{posts:e("core").getEntityRecords("postType","post")}}))((function(e){var t=e.posts,n=e.className;if(!t)return"Loading...";if(t&&0===t.length)return"No Posts";var c=t[0];return Object(r.createElement)("a",{className:n,href:c.link},c.title.rendered)}))}),Object(c.registerBlockType)("gutenberg-practice-01/test-06",{title:"Example: last post 2",icon:"megaphone",category:"widgets",edit:function(e){return Object(r.createElement)(i.a,{block:"gutenberg-practice-01/test-06",attributes:e.attributes})}}),Object(c.registerBlockType)("gutenberg-practice-01/test-07",{title:"Example: Inner Blocks",icon:"megaphone",category:"layout",edit:function(e){var t=e.className;return Object(r.createElement)("div",{className:t},Object(r.createElement)(a.InnerBlocks,null))},save:function(e){var t=e.className;return Object(r.createElement)("div",{className:t},Object(r.createElement)(a.InnerBlocks.Content,null))}})}]);