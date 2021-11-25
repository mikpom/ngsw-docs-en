"use strict";(self.webpackChunkngsw_docs_cnv_en=self.webpackChunkngsw_docs_cnv_en||[]).push([[580],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6051:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:6,sidebar_label:"Copy number variations discovery"},c="Copy number variations discovery",p={unversionedId:"pgt-pipeline/cnv-discovery",id:"pgt-pipeline/cnv-discovery",isDocsHomePage:!1,title:"Copy number variations discovery",description:"This is a key step in discovering how many copies of a DNA region were present in the sequenced genome on average.",source:"@site/docs/pgt-pipeline/cnv-discovery.md",sourceDirName:"pgt-pipeline",slug:"/pgt-pipeline/cnv-discovery",permalink:"/ngsw-docs-en/pgt-pipeline/cnv-discovery",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Copy number variations discovery"},sidebar:"tutorialSidebar",previous:{title:"Variant discovery preprocessing",permalink:"/ngsw-docs-en/pgt-pipeline/variant-discovery-preprocessing"},next:{title:"Example of a sample with no aneuploidy and normal data quality",permalink:"/ngsw-docs-en/sample-examples/normal-no-cnvs"}},l=[{value:"1. Estimate read counts or depths",id:"1-estimate-read-counts-or-depths",children:[]},{value:"2. Calculate coverage in the given regions",id:"2-calculate-coverage-in-the-given-regions",children:[]},{value:"3. Compile a copy-number reference",id:"3-compile-a-copy-number-reference",children:[]},{value:"4. CNV discovery",id:"4-cnv-discovery",children:[]},{value:"5. Annotate CNV VCF",id:"5-annotate-cnv-vcf",children:[]},{value:"6. Evaluating and visualizing biological features",id:"6-evaluating-and-visualizing-biological-features",children:[]},{value:"7. Generate CNV report",id:"7-generate-cnv-report",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"copy-number-variations-discovery"},"Copy number variations discovery"),(0,o.kt)("p",null,"This is a key step in discovering how many copies of a DNA region were present in the sequenced genome on average."),(0,o.kt)("h2",{id:"1-estimate-read-counts-or-depths"},"1. Estimate read counts or depths"),(0,o.kt)("p",null,"Depending on the depth of coverage and the sequencing type (targeted selection or WGS), genome span should be split into regions of appropriate size. Then reads within these regions are quantitated. At this stage, depth analysis is carried out in order to find the optimal genome fragmentation for coverage estimating."),(0,o.kt)("h2",{id:"2-calculate-coverage-in-the-given-regions"},"2. Calculate coverage in the given regions"),(0,o.kt)("p",null,"At this stage, the counting of reads in each of the regions that were determined in the previous stage is undertaken."),(0,o.kt)("h2",{id:"3-compile-a-copy-number-reference"},"3. Compile a copy-number reference"),(0,o.kt)("p",null,"It is necessary to estimate the deviation of the depth from the norm due to intrinsic properties of the region. At this stage, the pipeline takes into account GC content and other characteristics of the regions in order to identify the expected coverage within them."),(0,o.kt)("h2",{id:"4-cnv-discovery"},"4. CNV discovery"),(0,o.kt)("p",null,"This is a key step in copy number variations detection. For single samples (for example, sequencing of only tumor tissue or prenatal genetic testing), ",(0,o.kt)("a",{parentName:"p",href:"https://cnvkit.readthedocs.io/en/stable/"},"CNVkit")," is used. In the case of analysis of paired samples (for example, tumor tissue analyzed against matched non-tumor tissue), ",(0,o.kt)("a",{parentName:"p",href:"https://gatk.broadinstitute.org/"},"GATK")," pipeline is used."),(0,o.kt)("h2",{id:"5-annotate-cnv-vcf"},"5. Annotate CNV VCF"),(0,o.kt)("p",null,"For a complete and effective interpretation of the CNV effect on the phenotype, we annotate each discovered variant. The format and fields of annotation can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://lbgi.fr/AnnotSV/Documentation/README.AnnotSV_latest.pdf"},"the documentation of the AnnotSV tool"),"."),(0,o.kt)("h2",{id:"6-evaluating-and-visualizing-biological-features"},"6. Evaluating and visualizing biological features"),(0,o.kt)("p",null,"Result suitable for interpretation requires data on specific features of the genome instead of chromosome coordinates. At this stage, computed copy number deviations on the genome are used to find CNVs in biological features like chromosome arms or genes, depending on the analysis configuration. Additionally, visualization of the calls is done at this stage."),(0,o.kt)("h2",{id:"7-generate-cnv-report"},"7. Generate CNV report"),(0,o.kt)("p",null,"At this stage, a report on the results of the analysis is generated. The report can be viewed on the ",(0,o.kt)("strong",{parentName:"p"},'"CNV Report"')," tab and constitutes a raw document summarizing variants detected for the processed sample."))}d.isMDXComponent=!0}}]);