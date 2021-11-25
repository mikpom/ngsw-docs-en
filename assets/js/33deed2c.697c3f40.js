"use strict";(self.webpackChunkngsw_docs_cnv_en=self.webpackChunkngsw_docs_cnv_en||[]).push([[182],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||A[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=function(e){var t,n=e.lazy,r=e.block,c=e.defaultValue,u=e.values,A=e.groupId,p=e.className,d=a.Children.toArray(e.children),g=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),m=null!=c?c:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,f=i(),h=f.tabGroupChoices,k=f.setTabGroupChoices,b=(0,a.useState)(m),y=b[0],v=b[1],E=[];if(null!=A){var C=h[A];null!=C&&C!==y&&g.some((function(e){return e.value===C}))&&v(C)}var O=function(e){var t=e.currentTarget,n=E.indexOf(t),a=g[n].value;v(a),null!=A&&(k(A,a),setTimeout((function(){var e,n,a,r,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},Q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.target)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.target)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},p)},g.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:Q,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},2038:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return A},toc:function(){return p},default:function(){return g}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(5064),l=n(8215),s=["components"],c={sidebar_position:2,sidebar_label:"Quick start for prenatal genetic testing"},u="Quick start for prenatal genetic testing",A={unversionedId:"quick-start-for-prenatal-genetic-testing",id:"quick-start-for-prenatal-genetic-testing",isDocsHomePage:!1,title:"Quick start for prenatal genetic testing",description:"If you would like to perform prenatal genetic testing with Genomenal, then this section is for you.",source:"@site/docs/quick-start-for-prenatal-genetic-testing.md",sourceDirName:".",slug:"/quick-start-for-prenatal-genetic-testing",permalink:"/ngsw-docs-en/quick-start-for-prenatal-genetic-testing",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Quick start for prenatal genetic testing"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/ngsw-docs-en/"},next:{title:"Getting to know the service",permalink:"/ngsw-docs-en/overview"}},p=[{value:"1. Create Patient",id:"1-create-patient",children:[]},{value:"2. Upload Samples",id:"2-upload-samples",children:[]},{value:"3. Start Analysis",id:"3-start-analysis",children:[]},{value:"4. Analysis Results",id:"4-analysis-results",children:[]}],d={toc:p};function g(e){var t=e.components,c=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-start-for-prenatal-genetic-testing"},"Quick start for prenatal genetic testing"),(0,i.kt)("p",null,"If you would like to perform prenatal genetic testing with Genomenal, then this section is for you."),(0,i.kt)("h3",{id:"1-create-patient"},"1. Create Patient"),(0,i.kt)("p",null,"When you first open Genomenal, you will see a login page. Enter your login and password if you already have an account or sign up."),(0,i.kt)("p",null,"Click on \u201c",(0,i.kt)("strong",{parentName:"p"},"Add Patient"),"\u201d to create a patient card."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A Patient, or Proband, is a person from whom samples were taken for analysis."))),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(9615).Z,width:"700"})),(0,i.kt)("p",null,"Only the ",(0,i.kt)("strong",{parentName:"p"},"Patient ID")," field is required. You can fill out the details later on this patient's personal page. Click on \u201c",(0,i.kt)("strong",{parentName:"p"},"Create"),"\u201d."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(1969).Z,height:"400"})),(0,i.kt)("p",null,"You will see the patient page."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(2977).Z,width:"700"})),(0,i.kt)("h3",{id:"2-upload-samples"},"2. Upload Samples"),(0,i.kt)("p",null,"Select sample file(s) to analyze. In the simplest case, the sample is a paired-end sequencing in FASTQ format."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"The sample files can be uploaded:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(o.Z,{defaultValue:"pc",values:[{label:"From computer",value:"pc"},{label:"From FTP, HTTP or Yandex Disk servers",value:"url"},{label:"From the NCBI SRA database",value:"sra"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"pc",mdxType:"TabItem"},(0,i.kt)("p",{align:"center"},"To upload, drag and drop files or folder containing files into the drop-area or click on it to open the File Browser:",(0,i.kt)("br",null),(0,i.kt)("img",{src:n(5995).Z,width:"300"}))),(0,i.kt)(l.Z,{value:"url",mdxType:"TabItem"},(0,i.kt)("p",{align:"center"},"To upload, paste the link to the file or folder containing files on the server into the placeholder:",(0,i.kt)("br",null),(0,i.kt)("img",{src:n(229).Z,width:"250"}),(0,i.kt)("br",null),"and click on the button:",(0,i.kt)("br",null),(0,i.kt)("img",{src:n(4850).Z,width:"250"}))),(0,i.kt)(l.Z,{value:"sra",mdxType:"TabItem"},(0,i.kt)("p",{align:"center"},"To upload, paste the sample ID (SRRXXXXX) from the database into the placeholder:",(0,i.kt)("br",null),(0,i.kt)("img",{src:n(229).Z,width:"250"}),(0,i.kt)("br",null),"and click on the button:",(0,i.kt)("br",null),(0,i.kt)("img",{src:n(4850).Z,width:"250"})))))),(0,i.kt)("p",null,"After uploading samples, you can fill out the patient card. We recommend filling out the card right away and documenting the added samples thoroughly - this will make it easier for you to interpret and navigate later."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(8294).Z,width:"800"})),(0,i.kt)("h3",{id:"3-start-analysis"},"3. Start Analysis"),(0,i.kt)("p",null,"Click on \u201c",(0,i.kt)("strong",{parentName:"p"},"Submit Samples"),"\u201d to start sample analysis."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Attention!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you upload sample files from a computer, and not by a link, then do not close the tab where files are being uploaded until it is completed. Otherwise, the uploading will be interrupted. After the uploading stage, you can close the tab, the browser and turn off the computer - further analysis does not depend on your device."))),(0,i.kt)("p",null,"You can see that the sample analysis is complete when all stage statuses are green or orange:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(1976).Z,width:"150"})),(0,i.kt)("h3",{id:"4-analysis-results"},"4. Analysis Results"),(0,i.kt)("p",null,"When the analysis is complete, you can examine the results. Open the sample page by clicking on sample row:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(1760).Z,width:"700"})),(0,i.kt)("p",null,"Then click on the ",(0,i.kt)("strong",{parentName:"p"},"CNV Report")," tab and explore the report."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(5673).Z,width:"700"})),(0,i.kt)("p",null,"The \u201c",(0,i.kt)("strong",{parentName:"p"},"Result"),"\u201d section includes a report about the presence or absence of a deviation from the normal copy number in any chromosome in the sample."),(0,i.kt)("p",null,"The \u201c",(0,i.kt)("strong",{parentName:"p"},"Interpretation of results and conclusions"),"\u201d section includes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"a table with chromosomes in which structural variation (reduced or increased number of copies) was found;"),(0,i.kt)("li",{parentName:"ol"},"karyogram-like graph with denoted chromosome-level CNVs;"),(0,i.kt)("li",{parentName:"ol"},"information on estimated sequencing depth.")),(0,i.kt)("p",null,"Report can be exported to PDF."),(0,i.kt)("p",null,"In addition, you can view the analysis results of all patient samples. You can find information on how to do this ",(0,i.kt)("a",{parentName:"p",href:"/results/cnv-report/patient-cnv-report"},"here"),"."),(0,i.kt)("p",null,"Further, ",(0,i.kt)("a",{parentName:"p",href:"/sample-examples/normal-no-cnvs"},"here")," you can find examples of prenatal genetic testing results for samples of different quality."))}g.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},229:function(e,t){t.Z="data:image/png;base64,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"},4850:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV0AAABECAYAAAAiJuZQAAAMOklEQVR4Ae2dX2gcxx3H9ZL3POhZz5GgVCBwXhpjPwQiRDH2Q2oTMKIlESqkNqXGtHaVYnO4EUFEEGNFCihQuS3knFa1QcIXLEeE2FxaqY3sOsG1E3OJHdtY1j9bZ5zoV36zN3e/3Zub213tevfO34Fl5nZ3Zuf3ufNH49nZuxZCAgEQAAEQeGIEWp7YlXAhEAABEAABgnTxIQABEACBJ0gA0n2CsHEpEAABEAgk3fX1R7SwcJWmpj+hiZNnaHQsS++OfoANDPAZwGfgqfgMsPPYfexAdiE7MWjyLd18fkFJdub8Z3T9+je0uvqANjY2gl4P54MACIAA0fg40RtvNOT26Le/o/v7fk1f9b5K//rpy/Ttq/3uODi29fWa73Jd6S4uLtOpDz8ili2LFgkEQAAEQhNgGT33HFFLS3Nvzz5LdOuWEZNVuixcHkpfunTVWBk7QQAEQCAQgRMnmlu28o/JsWNGNFbp8ggXwjVyw04QAIEwBHhKQYqpmcscqyHVlC7P4fKUAhIIgAAIREbAK91t29zzoQ06z6vmpzkW+UckiHT5jhzfpcMcbmQfNTQEAiDABLzSrSEmPvXb+z/QO+ce0p7RZXo+s0g//sO9xDa+PveD+8P9MiafsRlHurwUAqNcI1bsBAEQ2AwBn2Iam32YmGD9yJ37V5V8xmaULq9B42VhSCAAAiAQKQEfYjpyei3VwtVS5n66ko/Y+HyjdHnFAqYWXDjxAgRAIAoCdcSU9hGuFq7OXSPeOrFpfEbp8nwuHnzQiJCDAAhERsAiJp4r1TJrpLw8x2uJTfIzSpcf7UUCARAAgcgJWMTEN6kaSba6r9xvlSyxSY6QrqSBMgiAQLwELGLi1QFaZI2Uc79VssQmoUK6kgbKIAAC8RKwiCnpZWFhRc/9VskSm4QK6UoaKIMACMRLwCKmsNJLQz0FzRKbhArpShoogwAIxEvAIqY0yDNsHxQ0S2wSKqQraaAMAiAQLwGLmMIKLw31FDRLbBIqpCtpoAwCIBAvAYuY0iDPsH1Q0CyxSaiQrqSBMgiAQLwELGIKK7w01FPQLLFJqJCupIEyCIBAvAQsYkqDPMP2QUGzxCahQrqSBsogAALxErCIKazw0lBPQbPEJqFCupJGkHLhYzp+6AANzRaC1MK5IPB0E7CIKQ3yDNsH9aZaYpNveiLSPX2ok1rb2ql170m6IXujy1+dpN18vK2TDk7f1XuTy+cGnf62DVK+1Iv8MPePt8o+/x2cpyFVt52G5vzXwpkg0PAELGIKKzyu95M/LtLPx5fpzakHdGLmYdWm2+5++37VMT7/8N/W6OWRpdBPxKn3xRKbfN8SkS7dzFKvlmpuRfaHiFYop6XcnzVL2VMj9pcG6VLhLA3099JALsxIF9KN/T3DBdJJwCImLcYgOct2cr5YN1bd5i/e9/rGXZW/vGb/X1cDy1e1YolNXiUZ6RLR52M9zkjxpUHKC2bFuUHaroTcQ8cvy64mWDZJd1PdgXQ3hQ+VG5eARUxajH5zHrV+cet7Xyx0m/Wkqxtjkes6fnJVzxKbbpfzxKRLaxcp85LzX/Tdf75W6tM1mtjr7OvIfEzCxXT703E62N9DXSzkrT3Ue2icZu/IUIhu5w7Tzld20c4jZ+m2PHTnLA3w/lcOU07VuUu5I/x6Fw3krtGXk0dp99Z2at1/xl1Pt2GQbvW15um98jWKqs3eHVuotW0Ldf9mxNNXs3SLl8dpn2pjD2VmUjCtouNHDgJREbCIyY/c5DlfflcR7s2lH2hw+gGxVE2brscjY9NxHt1OXFx3Rcnt6Xr1clXREptsODnpEtFS7gB1sES7DlDuXvVrp6NFyg+XRsVKuFsc8ap6u2horqLm25N9zui5P+uWZ3k6o4+yN7nVu5Ttd+S+c+8epw/cnreeJmWSbtW1tEh7KTPcV2mT21V9dWJ0mtTnijndQpb6uvjcTuqbDDNloTuLHARSTMAipnpik8d///fKrzbMfPFIzenK42HLPK+7ur6hAK6sb/huV1WwxCbfkUSlS1Qoy297ZpAGqka+RHK6YSiv52NWKiLeMUKflyIKI93Wth7KzBRoqVik4nJF4BISBZJuO7XuOEq5m05bS3MjpZuC7dQ7qUevHumuzdPQDkfO3cPzrhG+qx94AQKNTsAipiCi1KNcFiSPXoPUrXcuj3B1YrnXO5+Pq2SJTbfHecLSJaLLI9StR4OcC4kSFWk248io482LbhndO0P7VL1OGvqPE1IY6W4f+a/kYS4HlO5B183BSgytw/Ol9oV0Z4RwB86m48ahmQL2gsDmCVjE5Edu+hzdER7l6n0y18fr5f/8+nFVfZa4TifO+/tidXW+JTbdHufJS5eKlH/rxdLyq04amJWjzco0QGWUqLtfoOxrjpD1sTDS1XV1q8Y8oHS9y8DKy8sM0u3oKi2faztAudJ3IRv7gJ0g0AwELGKS0qxX1ihqSVEfr5ebpMvX1qnWcW//1PmW2HR7nKdAukSm/747nbRJt/pYI0qX53A71FxuO2FqQX40UW5KAhYxeUVme63ZYKSrSQTNDSNJpwles+uMZqunAS5SpjQtkSk9sVCW7mue9b2XR0rL0KpvpCU90u09VaClucHSFEsnuacmgoLE+SCQcgIRSZdHoJyC3OyySVwea/45XSZXU7pES9O/Kt3976OsuKl/Y7K0QqDrKJVnJPL6ybEeKt90e1yg7H79X/j0SVdPRZTXLXe540z5PyF0DwSCEYhIunL1wrkr0a5eYJFzCnKTTlWwxCYhpXx6gbsqpNn1AvVl3qaB118oLcnyLK8qXqRM6b/qvEyrY+sWdV73oQOlJ+DSK12iyhplXrpmfDxavnMog0AjErCISY42/ZT1CgbGwE+S8SPA/CiwadPt8U0y0/F9f1mliQvudbp+Vy5w2ypZYpNvVQNIl4geF+h0Zk9lfS4L9cU+Ov6pXoJVCan4vywN/EyPbDvVgxI3Cvqx4zRLl/++6LW67dTtZ1VFJWyUQKAxCFjEpMXoN2eBSvHaAOg2/T6R9o9/N+MTaTZCNY8VaWl5hZZqraeV9dZWqOhM+8i9KIMACCRJIELpskhZvN4nyUzh+ZUuP9nWtN+9YAKDfSAAAk1OIGLpapmyfHkUyzfBeBmZd9PnqW8ZMxxn0Tb3t4w1+ecK4YEACNQgEJN0tVSTylW0ltgkjXTM6coeoQwCINC8BCxiSkqYUVxXvWGW2OQbCulKGiiDAAjES8Aipijkl1QbCpolNgkV0pU0UAYBEIiXgEVMSQkziusqaJbYJFRIV9JAGQRAIF4CFjFFIb+k2lDQLLFJqJCupIEyCIBAvAQsYkpKmFFcV0GzxCahQrqSBsogAALxErCIKQr5JdWGgmaJTUKFdCUNlEEABOIlYBFTUsKM4roKmiU2CRXSlTRQBgEQiJeARUzPZ6L9BYgoZOqnDe63SpbYJFRIV9JAGQRAIF4CFjHtGV2u+hUHP9JL+hzut0qW2CRUo3RHx7K0seF8vZk8GWUQAAEQ2BQBi5jeOefvp3GSlqz3+txvlSyxSWZG6U6cPEOrq5UfZ5MVUAYBEACB0AQsYuKvZ/QKrRFec79VssQmeRmlOzX9CV2//o08D2UQAAEQ2DyBOmIam22s0S73t5zqxKbPM0p3YeEqzZz/TJ+DHARAAASiIeBDTEdO+/vZ86RHwdxPV/IRG59vlO76+iPieV1MMbiQ4gUIgMBmCfgUU9pHvK4RrmbiMzajdLmNfH4Bo10NEzkIgEA0BHyKiS/Gc6V8k4pXByS9nIyvz/3g/pTncL1EfMZWU7rc3qkPP6JLl656m8ZrEAABEAhHwKeYwjWebK07v3ydqKWlsnGshmSV7uLiMvFKBojXQA67QAAEghPwSnfbNiLe1+AbC/e79h9VhMvyDSNdJsri5REv31jDHG/wzxhqgAAICAJe6cqRYbOVw0pX4+I5Xr65xvLl5WQsYDxAoekgBwEQ8EXg2DH3aLDZRCvj2ax0GSivauDlZLyOl6cdWMLvjn6ADQzwGcBnwNdn4E9vjdH3zzzzdIj3wgXj3yHrnK6xBnaCAAiAwGYIXLnS8HO4deegp6ZqEoJ0a6LBARAAARCIngCkGz1TtAgCIAACNQlAujXR4AAIgAAIRE8A0o2eKVoEARAAgZoEIN2aaHAABEAABKIn8H9Kn/YcIXpM1wAAAABJRU5ErkJggg=="},9615:function(e,t,n){t.Z=n.p+"assets/images/2-add-patient-button-d581f7a116c75844c384824fd3e2fced.png"},1969:function(e,t,n){t.Z=n.p+"assets/images/3-add-patient-a50173eefe6cf2399bacaf5c90e5e8a8.png"},5673:function(e,t,n){t.Z=n.p+"assets/images/33-cnv-report-chr21-91b5d92bcc22fe1c41d15a7f63ea6a89.png"},2977:function(e,t,n){t.Z=n.p+"assets/images/3a-patient-page-347888cedd330f71c44e13e0c89323f1.png"},1976:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAA1CAYAAAADFnpMAAAEEElEQVR4Ae2csW4TQRCG8yq8AB1PQEdJSkRFn4YC0fEGKRBGSEh0dAGJEgnxBOEJKCwLY0s+IYugAMZm0QStNLe5nTFOMjN3/CtZN3sTZ/7797vT+TzJXsKAAwN1YG+gx4XDggMJcAOCwToAuAe7tDgwwA0GeuPAer1Om81ma72Ae2ur8INdDozH42T5ms1mablcJgJdG4Bbcwh50QFLsHmtpmlUwAG3uHRIag5w4KxjuoJLA3BL7iCnOmANNK9HtyjSANySO8ipDnDYPGJJIOCW3EFOdcADaF5TEvhPcH//9VP6Xcj9hw5w0DxiyXIV7s8nTXpyfJRuHz1MN17cS9dG+yYvLtqqZq0O14K47YAH0LxmW017JsJNYB+8PTSBuQSLyyxz1nOuBXHbAQ6aR9xW056JcNMV2xqkXI/LzPu8tlwL4rYDHkDnmtPptC2mmIlw061IBKC8NOS6hWeYMgcyaB7bnZ9z04dHy3vsDFLeMv/cTrAuLVwX4mT61Ts/gRaLhdpnIl658+J6bDk4HvV5Ta4FcdsBDtxVx5PJJM3n87PektVq1RbSMQPcWzz96fANuxwcuNSuQH71so65d9a1y3pRtETUcdVX6/L3X0pX4O+U0vXnd93ud6MsJIHORwm+5TyijhI+q/mFuwLvvHkEuAH3OQb4SWYFc1ednZ+W0AGMjl+dOzCrKxU30KpmrU4ULRF1dEFnte9CXYEfv3xK9989dgE8ykIS8HzUTgCL/RF1WIFcq8M9KWPxaQn98LfV6dkV/ObLA1PIuVALcKQaUbRE1FGDzmo/96SMVbj5G9AVmExP8PKE42tR5iznXIcVxLU6XEsZq3BH6Ar8+uxW8nxx0ywhKmtF1FGDzmo/96SMRbijdAV6gk21+SiBs5xH1GEFca0O96SMRbijdAUC7r899HzxLE+qshbXUYPOYv8gugIBN+DuOll2fs4dqSsQcAPuEu7BdAUCbsBNcA+yKzAS3Px+E7GtA83pMi1/nGxdVPxAWX6QsJzzIwDc3I1YsSUTVIv+Ouzph9eJnuRpowp3pK5AwK0to1/eGu5c78H7kQp4FW6yK0pXIOD2g1ernGHz2NIVXBoi3FG6AgG3tIS+OQ+oc026RZGGCHeUrkDALS2hby6D5rWVjl6Em94YoSsQcEtL6JvzgjrXlY5ehVt6M3JwIEPmtZVWAHBL7iCnOuAFda4rCQTckjvIqQ5kyLy2kkDALbmDnOqAF9RUl/46TBqAW3IHOdUBT7jpUbU0ALfkDnKqA15w0x+u05M8aQBuyR3kVAcs4aZ/EkXfmtMVm76D0Qbg1hxCvrcOAO7eLh2Eaw4Abs0h5HvrAODu7dJBuOYA4NYcQr63DgDu3i4dhGsOAG7NIeR768Af5DCOJyax5G8AAAAASUVORK5CYII="},1760:function(e,t,n){t.Z=n.p+"assets/images/7b-sample-row-3153b2e3616c1efc4f7ab6a97abff650.png"},8294:function(e,t,n){t.Z=n.p+"assets/images/7c-upload-multiple-samples-49a1745c86a7fd9219c049eac745ed5c.png"},5995:function(e,t){t.Z="data:image/png;base64,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"}}]);