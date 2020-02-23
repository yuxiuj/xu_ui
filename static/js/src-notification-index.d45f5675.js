(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/Button/index.jsx":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("./node_modules/classnames/index.js"),A=n.n(a);n("./src/Button/style/css.less");function o(t){var e=t.children,n=t.onClick,a=t.className,o=t.type,i=t.shape,c=t.block;return React.createElement("div",{className:A()("xButton","ripple",o,i,c?"block":"",a),onClick:n},e)}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/Button/index.jsx"}})},"./src/Button/style/css.less":function(t,e,n){},"./src/Icon/index.jsx":function(t,e,n){"use strict";var a=n("./node_modules/react-icons/fa/index.esm.js");n("./src/Icon/style/css.less");function A(t){var e=t.type,n=t.size,A=t.rotation,o=t.style,i=a[e];return React.createElement(i,{size:n,rotation:A,style:o})}e.a=A,A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/Icon/index.jsx"}})},"./src/Icon/style/css.less":function(t,e,n){},"./src/Notification/index.mdx":function(t,e,n){"use strict";n.r(e);var a,A,o,i,c,b,s,r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),g=(n("react"),n("./node_modules/@mdx-js/react/dist/esm.js")),l=n("./node_modules/docz/dist/index.esm.js"),j=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),p=n("./node_modules/rc-notification/es/index.js"),O=n("./src/Icon/index.jsx"),d=n("./node_modules/classnames/index.js"),u=n.n(d),m=(n("./src/Notification/style/css.less"),A={topLeft:{top:"24px",left:"24px"},topRight:{top:"24px",right:"24px"},bottomLeft:{bottom:"24px",left:"24px"},bottomRight:{bottom:"24px",right:"24px"}},o={success:"FaRegCheckCircle",warning:"FaRegMeh",info:"FaRegLightbulb",error:"FaRegTimesCircle"},i=function(t){var e=t.type,n=t.bottom,A=t.className,i=t.description,c=t.duration,b=void 0===c?4.5:c,s=t.getContainer,r=void 0===s?function(){return document.body}:s,g=t.icon,l=t.key,j=t.message,p=t.onClose,d=t.onClick,m=t.top,B=t.closable,N=void 0===B||B,D=t.closeIcon;a.notice({content:React.createElement("div",{className:u()("xNotice",A)},(g||["info","success","error","warning"].indexOf(e)>-1)&&React.createElement("div",{className:u()("iconWrap",e)},g||React.createElement(O.a,{type:o[e]})),React.createElement("div",null,React.createElement("div",{className:"xNoticeTit"},j),React.createElement("div",{className:"xNoticeDesc"},i))),key:l,closable:N,getContainer:r,onClose:function(){p&&p()},onClick:function(){d&&d()},closeIcon:D,duration:b,style:{top:m,bottom:n}})},c=function(t){var e=t.duration,n=t.getContainer,o=t.placement,i=t.closeIcon;p.a.newInstance({style:Object(j.a)({},A[o]),getContainer:n,duration:e||4.5,closeIcon:i},(function(t){return a=t}))},b=function(t){a.removeNotice(t)},s=function(){a.destroy()},(a=null)?{config:c,pop:i,remove:b,destroy:s}:(p.a.newInstance({style:{right:"24px",top:"24px"}},(function(t){return a=t})),{config:c,pop:i,remove:b,destroy:s})),B=m;"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"xNotification",filename:"src/Notification/index.jsx"}});var N=n("./src/Button/index.jsx");n.d(e,"default",(function(){return w}));var D={};function w(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(g.b)("wrapper",Object.assign({},D,n,{components:e,mdxType:"MDXLayout"}),Object(g.b)("h2",{id:"notification\u901a\u77e5\u63d0\u793a"},"Notification\u901a\u77e5\u63d0\u793a"),Object(g.b)("h4",{id:"1\u57fa\u672c\u4f7f\u7528"},"1.\u57fa\u672c\u4f7f\u7528"),Object(g.b)(l.c,{__position:0,__code:"<Button\n  onClick={() => {\n    xNotification.pop({\n      message: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n      description: '\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60',\n    })\n  }}\n>\n  \u9ed8\u8ba4\u901a\u77e5\u4fe1\u606f\n</Button>\n<br />\n<Button\n  type=\"primary\"\n  onClick={() => {\n    xNotification.pop({\n      type: 'success',\n      message: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n      description: '\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60',\n    })\n  }}\n>\n  \u6210\u529f\u901a\u77e5(success)\n</Button>\n<br />\n<Button\n  type=\"pure\"\n  onClick={() => {\n    xNotification.pop({\n      type: 'info',\n      message: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n      description: '\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60',\n    })\n  }}\n>\n  \u4fe1\u606f\u901a\u77e5(info)\n</Button>\n<br />\n<Button\n  type=\"primary\"\n  onClick={() => {\n    xNotification.pop({\n      type: 'warning',\n      message: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n      description: '\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60',\n    })\n  }}\n>\n  \u8b66\u544a\u901a\u77e5(warning)\n</Button>\n<br />\n<Button\n  type=\"warning\"\n  onClick={() => {\n    xNotification.pop({\n      type: 'error',\n      message: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n      description: '\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60',\n    })\n  }}\n>\n  \u9519\u8bef\u4fe1\u606f\u901a\u77e5(error)\n</Button>",__scope:{props:this?this.props:n,Playground:l.c,xNotification:B,Button:N.a,Icon:O.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYsAAORECBIDibtzCNWV2g9OABHISRiJiMjogGVBJFUbBcIg9hr3CCJKLdGjJDohi-JuahuPwxpdHQ6jaPoyQGl0KT1XYQNJTkk1NXaMFUF0FFjlOLDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnJyABYPPYAA2DyvPWMBgIAMW9aBEic_hnEOBEHUwGChH4JYiGoSg4F8hFIuraKaGcCAsMudgAEZAu8-Q9IMqYAEE5ks9gIyg8gbCgdAw1QjlLLEDroxkdgUXMmBuGAbDTMmuB5C3GtgG66A-uCAAyDbxkSeZKGaVbev67gTrlMBkMlNj2nYAB-DY1rDCNBquQ71tQBrqykGQqzfMwYTUzAwDCKApieoaRs-1rl2rBMNIIHAYsyFIrwIJaa1rcSBJXdHqHsKBYm2aawe4YabJh9GayIkiWIonBBRmTrsYpiwjzgCo0icwBi2MACBjAFklQB7r0AM21AAM5QBlI0AQ2ViuZ5nynIfoZgoxAmeluUBcAL_VAAEPQAYf8AWjlAHK_QBt-MANjStcADay9YlrXAAA5QB3WMASudABt4gWtYAThd0LAB34wBuz0AA3kpZVgbldQj7mbRinAA28wAS6MALATAFP3QBD-UAewMmakTHqDDhMPCOTcU7T_1yfRsz5j4EB-35VwBESfgg9x_GdiJwaSesoOLCp5jYlY6g6coBmyYDmsi6q9p6XIBE2f9_vWfZoeeYFkWJYngPZflxWW4p9p1e1_XjbNi3xet-2nf5133e9v3vP7-Q3xV-QQ4pjOa0ABCNAHylOOIxHse4GvinU_49OU6zuwHOBcMZ_3zirQeJcZh9EZCAGuqA8YEwbuDPuAc26kQ7rTemjMQHM0Hk5NA0VF4qynq4DmcpZ5CzFpLC-_djjwDlhABWbEla4OlhvfmmtdaGxNubS2ttHbOzdp7X2xCKZXyDrfJmD8LBJzfoQyg390a_wkqgB-jBAHAOZowPOQdIH8DLnZKucC2G1yQcAYmpM17oJpmxbuvc14WHwXKEYFdUAFDEczUh5D2iUPnjQxx9C4CMOYdQVhdCawcK4dvXhe8D6COPsIs-niawSLYVIkBMj2CADNowAUipv1cQIdxM4lE1hUQJdRmj1G6LYfokAhTimFBMSrMx9cLGNysWw1uTEMHkTsdg1B_dnHtAyEIAQKT0beJnnzKhC9aH92Xkw1eXT16b24TvPh-8BFHxPiI8-a80k3zvujLJgBMVMAPfRcjY4RlGUKUp2485hykHDBGSMUZLSkFDH6ZgvwgFEoxammC2IcXDBoOAWBAK6BAgYMCto1I9NscyKiJpyDmlQICvpkk4X2mUkioSOAPS4tQLpdxPFyBwTZqgb08AtLtHJf4OAVLWYkrwmpYSE1YDfDZjgLEcASVmCauwGxQLmRWQjOdfSFEwaoNgFMdF7dMXmCsqgUICR1iCo7LMWgAhoL5XaoMocMwAAyMAwAECuAapxPcnIACZgqeXmTWWAZrbX2pJejJQK4IgzBFBAFIhALVM29a6iKjqLD9H9eauUdqIork9eTLwEkiAmpdc3EBiaIhEBDQ6pmzqo3tBjZ5ONjqM2RF9ZGwN6aRCZuzWIiNAbo1urjesD66rqCGViNQSwu1uhWQNR_eA9w5RxTFCkewmwdj2AgPRX0jqGkFCciOmAKQ9QwDwIvBRi7XCjqNX6wgHhVUeEXrcssw7t3LssPyeAU6Z0wHdahPSFhZWpCgJQDw8RYIShgCjdq7R73GFMAXIw7B5WxBgIAbx9ADR6oATn1ADpXtjYDAABXymRZQrWoJAFIaE9geHUFsKYcdABiFoAWUTAB2_oAPR1ADkBghmsyGK7emsoPNCKJpyzjjrBqDNGLB0dQ9ZDwBB3oWDhsRDKgArwMAFnagBJOUAM6KgBb1MAJDGgA6lK4-wHjDHgClqINhlVRBAhHEABG2idABzcoAVL1AAXCdBwAX4qADfTLWgBd2K9uZwAIW6AFl5UjWtACqyi5wA8wqAAJfFTam0P0rZoRal2GWMFHYBJyTDhnDOB6BSuAAWUPqcWaEwT41UQFAAD7CcBOwOOgAF40AEmJgBQxUAJ3aWtACj-oASATkv0bQ-gPoncMs6b0-wKO7BAo4AAKzsEAEuegA4FVE4ACqU5NazI4ALjkQOqqgOwQAmEqAFg5Ubcn6u8eAKeRwNBXBoAyNhgAEpYPURqRPdDI4AJjtADL5oAIKDACdDk5wAyfGWbc2t9TnaMt5bE1JwAf2qAHALV7aHtgwESOFrLM52CAGV9XmcdAD0qlbX7gB1_QB9ZKZoPWO5c1KdgrscSu_cABkZ1W6tAdoyltDtd8owGwxK8g7BbuAG_FKOcmlPWcAGeRgBF5Sc4APbVADAMYAX8VAAOpsj4ArTthU4urTuncdWcc55wLoX3rtOhF0xkdghmjOADcMizNn7Ne01659zXm_NC_JRTol2HPvdGi3Jv7CHeTVkFfTdqEZdCYY6Wm9GgrLU7XmGG9gmnffBbgKFo8vu0sUVD81ii7Vus9d95t4CO3nRHDFW7g8SvjxeHQIkX373fdA-z0zKZvvydwBgMXhBddti--9QH19FQPCwHaqiBktfTe6Dje1F3fqVygcRagHAoGEQ4OZlC_QVwYwcED8HqaK1EtMvgI-dBRUlhT-pewDki0g5e_RhGd77BsvZfYAAbXaAorycoB3jyWCMgQYzz_tHnTOdoABdHAnEsA6jABGQeg1hrmmqoNFtGvBPglgytPtNIHvPnAI-O9gAOqZAzDn4_6b4rIWDb7Sx753R77j5Ere4z7vbdrzBH6DzP5oRaJ0LHLSxfSxiSJBwT5ZIJhjSr5HglxL4wCXqiAgAMHLTsBTIPorLUGyDAFMGJbgH8BsFagMLiCBJQRh5sT8H9yCFZJKEpw7iyB57A6t716wBx6jhbYECJ4ZDl54wU7SrwImGl7sBbR7AV6mH3KoTGGV5mGmIV4ExWHbQi5PRMzxoj514wBEoR6ZDh5MwcpVRQQ15-7VrGiUGHL8HrAAY0ZFaABcnoACN-gAb3JLCAAWioAAI6gAQ8qC7E6BZ8ZRFaYzbK4GbGbmZWa2YObOZuaeY-a-ZawdaRx2o0ZFEzSR5sRoRtYq5RwrayaABverZl5v1u0aTtZPHttrtgIGhIdsdljhdjdvdk9vUVHGnijDgJnlXIURMcAGSF-ijMxmDrOFZvUYAPfKNWhqKaUw3q5ahAkRSaNxjxma9xoguxDWjGPcPRSu7Waumu1ROueu9Rhu_mHx62JupeZu7A8xJ2-WVusmNu1YPIbaqAhkXes4YqGJbuBqnuxwXR1ASwUxBhMxpIcECIKMK-fhuBaEVkGJK4jw7AgA0rGAA8CoAJt-ORTmBxFJ-gK4mIb6H65J36LoVk3JwpNAj6NYCKIq_ezoIwDQaJBh-kMAw-FMoRFqBKOAmqCsGQuqcAR-YpKMz-DhTMxJhhp6ZppJTMTWQRLC-JtpzIB-XWvWWh_h7e5MSgHUg-MAbuveMp7U3p38ra9u7aUwXQuUrAvaHU-eOJPeGKLWoY36lAkZPSQ-MZLakpgq5QqIlAyQKeKCcZCqCZ2ZQgiQXh1YwZFgpEEYfpiqg0BqXQBAfQ5gXuGJvu9Mvu4ZyZZe1p8AOZOxHqGZ1YjJgAQZqAA55pNoANhKgAX3qAB52oANHyWs82M5UcC56w0piqA-MA8pip7gQ-_aZksAFqE4e6-ahaSB1qjaEUChDhXpJECIvp8ZUeyq95PpkpjZzZ7uNYbZK4HZK4XZkZjqJZuZQ5V85Zf0WA0kgMwMBEG5LWvy_yecIKag_44KkKwE-gDArK9okB1KdgyKdKc-eFLKPE7Kh5MAXKcAPKg6_K7EJgRQSGexIuaE1O7AgAn9qABomoAC1mgATOlOb06ADRcmkQxapnscwZTplqxlFlJuBoALAqIlHRTGklkWSmUGfY_QRi--eYbikWh-CiWl0FqqUwh-0CXQClexcAfg8wxxUlSmgARvqABtTj0NOuSt0IfpkCwHkBGFHNfCic6JBQDKajBYaBdFHnnBGP2D3F_F-c-l1D1G9EsCLlSWAdSksIPEsJZbMGXn7q-jsKhO1JFXcOsB-UUrWCISlSwbPgylAYvnnPfvLGSHemlT2hlVZdlQ3qcLsHdO0B1TsNdE5OfuJRvjYYgm0sxWHHFQ9MEHfCoe9AhYpESshdgKhRCtoKPqBOBNJNBAOIQTSgRYVeaIPHytilMMBv4OwHFLSqaJKOaO9nAJIEDCRdJGRZNJRdRePHpAkeYMBrgUSukeZZ8cAEpRFuDu9pxt9aJYDfkJVDZZFu9oAOSagA8Dp9hYDZZQApDZZYBJYQ0dFCAGEUQ_HlHsA1YOyABLkYAGV6AN62oRaEb6eGmkf2gA7BaADw-gxXbtTlHkShFQONFagnieleNBVNlXjS1hleRflaKTzaiYZESmuNQCKRda4MQT2s_sVaOJ-YwLLY6PLZmNDTPnrWhCLRRNNEbd0ZlpNNNDTUAlWMGUSnTDtT2nYH2usM4ttT3LtVRSDSkLQnrVcG7TMB7TgF7bQqbWEplO7Y7QPr8UYesOqeHQHZHXTfhmYMGf9PaIZSDDJNQHpPNQxHBRRCJORW9byuhXoBtaGKirWS1l-RYIKPkIrIaBADUOgCqOTFhLdaClcNVM5D3a3RYB9BXWik-WxEPTEGlAar5J2AuuwAAOwhQ2rOQhRz0-Dd0eR901heACBTjmgeUQB5BXDuQ-CH3r0WCb1Thd0hRwCUD4w5AADEbsLsJ9kRWA5omVJwIwVwrkrkq9Pg9k76EYzkSwgD7AwDzkOANqH4K4Z9GQn9l919XAE4KQ_9oDQDQDkDCaEo2wiEbQGAVwt9YABDT9LABUcEiUOVnVT9OI6AEwVwYQEQT9-Mzo5omwp5XdvWT9kZwoHcUA5o8QfqjkvBXA6AsAT9ddLwdpXQcEMQkZT9dkDkXdi9PgzkrdA99Eo9vSLW6jCI5okJrgDe3QE9fkBQO9rD7AC9a9KdZgg9VdFEWjMAOjfhNdfY-U4jYdejV9UA4QMAT99aUaAAHBY-TMGuwD1oEx7tfUKHgz3coyuL0AIFfaeoKGgNqk_fsIw1VOis6E_aVBaL7WY4o9k8BOaCMDAKYz1r3SuOk8w6UxWjVE_bQFgLk34O_Z_TVCFK5Pg4QyuJACDDAyEFADMH4BGD3BKC8IkNwAvegzjIVGM5_eA_U9gBaJgFQA6QI5k945Y_3mozYyPd6Q4xTuaFgIgK4GairriRhTQE5AAOt-iqOV3D3UB2P7Ol6IDDCcNOMjPkCzN1PdPQDaq0MDNDOfNjPcDd3ORTMDyLOWhbBCgtZXDrMqN6TWMPOoDmhAyYDmj6BnMrjuDlwN0RkwDPE4BJhwCItbP3NFm2Pov2PkiRlOO4tRD4vdk6jhBEsktkvIuUsj3UuYt6ACCcsaNUsdj2NYsCC8OXR0sGoMtwu8HdlsukubMCt95ovCvmi0t_jbMosqsYvqvivSMGM4ukqaPz5XAEsssEDytktmCIb57Sh4WyuRnmvPEGrOQACkTj6Mza5MYL7r6BvjVw5oC9brT9H0H0NrwOdrrMDrhLpqkEK4brHrNY_r7AgbPdrrIbK4Prib4apjMTHpmzVjbBTjxDBxZDYAsAWAojRjAUNUNqYTNYb-ug8Bsw2beYXANDbk4UlbQcVTLDtT1U7DQcOTr9QtVw5j3bbCG0b-qA0UrbhYr6p6t91UfjLszkXT6SQcU7l-dg6B4TC7eDPWNq5AgU1UrgT9g5k7OAj-s4u735ETi7QMHYtU57qSm7OAJ6c7d7-77A-Dh7NqNqLdtB-b5MOAbBHBrbcjaA5ommVwXbL7Fgw7eT1UcHQ7RTJTZTFTbCvbNTDaA7PWGbIHEhDCrb2HpjeH8H87kTiDyDiggDwDOAoUPWpSobPySgfyikSFoRxdg6pd0KDAoHecX51QI7WE090DYr1Q69JbpDVwaAVTvV2w69k9_kKQsHIU1U3669pH_bOAgUD9mn6w4nO9HYe9Q69q694nF9PgHjCDqI7gBUFc-g69VA37nTYA69w7QMRACUsnqAmw_QBAFnmD2DyE6AOj97UTmHFgeQGQr984-GiACLNYjJgAgZ6ABG1oABSugA7EY1Y6zqp9AJNXBJN8vr0NMWh8MpACMIglfrBTuGIVzJAGrvo7AhcYDheufOQuzudDkWBTvXtOPNdYNIRtcudUe30xSrvr13xTv6VNfBfDdhejeLv2DORJhTe1d0wwIDdCjn1tPWfwN32jzkBP1LdXB_2uAAOoMgNAMMdMdP2DeteLcRc_sEPdfkwbSIDHOnNHBe4PcLe3VRDkK73xDmiIQmf6DO4uU6E_tHc1RutpWZBokoYujVTVSusQv91DnxGSDsCOUbdfO3rbdb2xe73701S9YGcVmSmMmABACYACl6gAboqABsToAMKKYJvXWxuVuwBqjJVDHbPrRDtgpbVwCn6370SLDVjeqCYjDdkjrEMjTInD5bowVwNgnYdA69H3X32qTj61Ua1cIAgvJD8EIvXPojLjDd7j19XjlD7beACjwbK4fbuHab9Tl5eb6Mean95vyTsXMAkZNAQ6CLUD83ODYX5cQPJnIPYPLAEPBPrlSwbncPrrCP9nyPmYqP6P93ofoXO9MA8w0Q8LlAefBfgXIfLX_3Mvdp5T6bXqiPcA0UAgWa40cQsAEY1UNqSwHfGPewMzZk3vdf9nrjAjdnaJjfsoDHcAiVffyQk_YvvXxzErlw2v2LQT9f4_VwwS8QKpoDPfwL_f7AxLT9jwgAfdGkaAC4SoANOaDlgAgAaD9onD-f0KtU9zVsf_KLVcdnBUUl1rUXMwogC_JCo2wMhH-E0DUBeOmFMCKgn4Dz5-AVwfgD8GLDVA_eWAb0I1WyjrB-AnDfINnSQDsB-AYDQgRgOrD8A5CuA-ASAGaiC1fw0IVATQMwBkhcyuYPIJFmuoWhEBfwUsMQIsD8AogaAOAfgJUCgpUK3AwQQwLoCYB9IEAeAAIINT8A2BAg_gMh1A6iCeBggCloKzYiKCQAAAPW6yECd65AHANVFUGCC2Bt1AyNoJ0FJgcALsHAM5FMHyDNQloSINoOUFYBq4L_eQAhU4G4AMSqFcAb_zLr_8bIIAWgD6CyBwCEBpoWgHnzNC8M5g_AbwbfHkBAA",mdxType:"Playground"},Object(g.b)(N.a,{onClick:function(){B.pop({message:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361",description:"\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60"})},mdxType:"Button"},"\u9ed8\u8ba4\u901a\u77e5\u4fe1\u606f"),Object(g.b)("br",null),Object(g.b)(N.a,{type:"primary",onClick:function(){B.pop({type:"success",message:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361",description:"\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60"})},mdxType:"Button"},"\u6210\u529f\u901a\u77e5(success)"),Object(g.b)("br",null),Object(g.b)(N.a,{type:"pure",onClick:function(){B.pop({type:"info",message:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361",description:"\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60"})},mdxType:"Button"},"\u4fe1\u606f\u901a\u77e5(info)"),Object(g.b)("br",null),Object(g.b)(N.a,{type:"primary",onClick:function(){B.pop({type:"warning",message:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361",description:"\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60"})},mdxType:"Button"},"\u8b66\u544a\u901a\u77e5(warning)"),Object(g.b)("br",null),Object(g.b)(N.a,{type:"warning",onClick:function(){B.pop({type:"error",message:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361",description:"\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60"})},mdxType:"Button"},"\u9519\u8bef\u4fe1\u606f\u901a\u77e5(error)")),Object(g.b)("h4",{id:"2\u81ea\u5b9a\u4e49\u4f4d\u7f6e\u548cicon"},"2.\u81ea\u5b9a\u4e49\u4f4d\u7f6e\u548cicon"),Object(g.b)(l.c,{__position:1,__code:"<Button\n  onClick={() => {\n    xNotification.config({\n      placement: 'topLeft',\n    })\n    xNotification.pop({\n      message: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n      duration: 0,\n      description: '\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60',\n    })\n  }}\n>\n  topLeft\n</Button>\n<i style={{ marginLeft: '16px' }} />\n<Button\n  type=\"primary\"\n  onClick={() => {\n    xNotification.config({\n      placement: 'topRight',\n    })\n    xNotification.pop({\n      type: 'success',\n      message: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n      description: '\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60',\n    })\n  }}\n>\n  topRight\n</Button>\n<i style={{ marginLeft: '16px' }} />\n<Button\n  type=\"pure\"\n  onClick={() => {\n    xNotification.config({\n      placement: 'bottomLeft',\n    })\n    xNotification.pop({\n      type: 'info',\n      message: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n      description: '\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60',\n    })\n  }}\n>\n  bottomLeft\n</Button>\n<i style={{ marginLeft: '16px' }} />\n<Button\n  type=\"primary\"\n  onClick={() => {\n    xNotification.config({\n      placement: 'bottomRight',\n    })\n    xNotification.pop({\n      type: 'warning',\n      message: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n      duration: 0,\n      description: '\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60',\n    })\n  }}\n>\n  bottomRight\n</Button>\n<i style={{ marginLeft: '16px' }} />\n<Button\n  type=\"warning\"\n  onClick={() => {\n    xNotification.pop({\n      type: 'error',\n      icon: <Icon type=\"FaRegSadCry\" />,\n      message: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n      duration: 0,\n      description: '\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60',\n    })\n  }}\n>\n  \u4fee\u6539\u901a\u77e5\u6846icon\n</Button>\n<i style={{ marginLeft: '16px' }} />\n<Button\n  type=\"warning\"\n  onClick={() => {\n    xNotification.destroy()\n  }}\n>\n  \u9500\u6bc1notification\n</Button>",__scope:{props:this?this.props:n,Playground:l.c,xNotification:B,Button:N.a,Icon:O.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYsAAORECBIDibtzCNWV2g9OABHISRiJiMjogGVBJFUbBcIg9hr3CCJKLdGjJDohi-JuahuPwxpdHQ6jaPoyQGl0KT1XYQNJTkk1NXaMFUF0FFjlOLDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnJyABYPPYAA2DyvPWMBgIAMW9aBEic_hnEOBEHUwGChH4JYiGoSg4F8hFIuraKaGcCAsMudgAEZAu8-Q9IMqYAEE5ks9gIyg8gbCgdAw1QjlLLEDroxkdgUXMmBuGAbDTMmuB5C3GtgG66A-uCAAyDbxkSeZKGaVbev67gTrlMBkMlNj2nYAB-DY1rDCNBquQ71tQBrqykGQqzfMwYTUzAwDCKApieoaRs-1rl2rBMNIIHAYsyFIrwIJaa1rcSBJXdHqHsKBYm2aawe4YabJh9GayIkiWIoj5qEgFJOuximLDJCUYBRpyIhmAAZGAwBfbyWfR-Q32FymmNI2JWOoHBBRmJnyfFo84AqNInMAYtjAAgYwBZJUAe69ADNtQADOUAZSNAENlYrxfR9A-hlxz2GcoWrYscpyH6GYKMQZnxfafXAC_1QABD0AGH_AFo5QByv0AbfjADY0oPAA2ssPzaDwAAOUAd1jAErnQAbeP1oOAE4c9CwAd-MAbs9AAN5S2rdF73UI-lm0Yp7m-YF5mpEx6g64TCBxrM2BpqguyHMbggnOq8LPOr9hN2b1v_SVmszPmPgQH7flXAERJ-Cr3H8Z2InBpJ6yq4sKnmOl2ndAZxXndZuCEU5uVuZFCAUkIcvxcr2f0ePqXyLYuXKAVsmV8drzCcvScgCJVavytirNWVV2ja31sbc2UDxau3dp7Q-FNfZ60DqHSOMd46J1TpnbOedC6lxQRTd-b8a4U3bnPf-j9n6iFni3fibdm6dwmj3YAfdV4D35kPOUI8Irj0nqw6eVd55TX4DMPojIQCb1QHjAmu9waAKtl_Gmv9z5P0vlfNmt99BOS8BJIgg9KEizFpoyW2jZby30c7aRTk0DRUsRTGBrh1ZygQYbU2FsnbOzQRAD2bEvYf2Ftg3B4do5xwTmbZO6cs561zvnYuZdAnC2oVk2h6N6EWFMREcxgjm6SGnvQxgXDu5TV4ewfuaBB7D1HtdeQaFxEs0YJIiJ0jF7LzsuvRRESt6qOAMTUmmCtGnx0fTPRGjnaGI5sYuUhTIhMJfpklm2TxaTJ_vY_-jirbOLlCMVeqACjuPRp47x8DdZ-OQRs4WNtMiewdg8lmwTQnUHCUAiwUTg4xIIfExJJCUlkPSRcgaVdWnM3yewFZRA1ksI6WU9hqAKlVMmr3Op_CGmCKaaI1pE8KldPFj0_gJyBBnJnBvIZyjt6E1GXvcZESj62KmXsgBmCLBHPaBkIQAgIUWFiF82sylmRkpAHFMUKQ3DoHsGvfgRK3kePgLAzWtykEBK5ccW2LzHbao-RgllWD_b_PwXEohSTSFpIocqiwWyqG5JrLCwAd_KAE5TQAWAmAFP3QAYhbCpnsi8pnCu6YtqfU1AjThHNLEcS1FUjdoyJABSqlhRBni2GTvRl6iJlst2agHA5RUSUESE9KFTqLCwsAACpgBB61QNTdlAaKZsIkmilcUg4YIyRijJaUgoY_TMF-EAolGL1rzRxcMGg4BYEAroECBgwK2jUrmu2WlOjkHNHWk-ebdJnJ4mKwSGEcAen3TuvCalyBwVVqgb08BV0Xv8HAa9KtT08WEtwmA3xVY4CxHAHdZgmrsB2SuqyEZzr6QomDDRsApibu_sB9gqBQgJHWABjssxaACGgvldqcyhy8zxQfWe3MnIACZgqeQebAAWpHyM7pFpkh-T9CBXFw9y_-NGIoPP6MwjjnkVxKBXPCyNrG4UiCKbxyhVGhHtDIxFfjmT4WIpY8zeFEmuNMek7Jvj5NaEfRQ9QQy_rLAJpwyuMBED7hyilTAFI9hNg7HsBAeivpMnJoKE5azKQ9QwDwFA1xlAPOuGlTzDTHgkMeCgXyoUgXpWWH5PARzzmYB0dQnpCw0HUhQEoB4eIsF2Yo3au0FLxhTBKyMAhkiCJADePoAaPVACc-oAdK9sblYAAK-UyLKFaMyUhoT2B4dQWwpjep9YAWUTAB2_oAPR1ADkBs1msbXV7emstItCKJpyzm9Q12rs2LDzY69ZDwBB3oWDhsRDKgArwMAFnagBJOUAM6KgBb1MAJDGgA6lO2-wXbi3gDwt64hoggQjiAAjbQA9gaADm5QAqXqAAuEurgAvxUAG-mQdAC7sUXCHgAQt0ALLyY2g6AFVlVHgB5hUAAS-r33udfvarQiN7eurYKOwS7V2HDOGcD0S9cBCftY-4atiFPUQFAAD4ncBOwb1gAF40AEmJgBQxUAJ3aQdACj-oASASWcLc608u233Qi_YyOwQAG3mABLo9ggUcAAFZ2CACXPQAcCpncABVK92g7jcAFxyCGkNQHYIATCVACwchb-78u9vAFPI4Ggrg0AZF6wACUsHqHmp3ujjcAEx2gBl80AEFBgBOh2R4AZPiofo89x9_1vW-fneu4AP7VADgFhnzr2wYCJE52t9ggBlfR1t6wA9KpJwL4Adf1i_WSuTACvPOc_dCF8LgvgAMjOl3Lsrc3Weda3vlDvFgwPkHYAnwA34ra_u89mHgAzyMAIvKyPAB7aoAYBjAC_ioAB1NW_AAzdsXrM-5_z-9Wvzfu_D_H-5irtXAOQeADcMyHsOEdF3f2jjH2P8fH4XqT77rZ6agR7U7Xb3aF7Na8jVgAbyztQRi6IpBMqEbowAYibSIPLwoPIk5wBk5HgPLs7UBEG6psTtR6764PI-7AT-7OhHAgaoEHiq7HheDoCJAPL-oPKl4cHMzt4PIT5wAwACF0oEwPLcy4FZYVAeCwDtSogMiSHAG6D8btTIEriwZ2L5qwYIgHIWCzpLIxgcB4EEE1J4FPrwCPhfxFRLDGE3rsAciLRVwibowRj-rsDc7c7sAADa7Q_mXkco5mqq_hvKAg_KwRbmM47QAAujgJxFgDqGABGNIoNMNOaNVINFtJgoYYzg-iYdNGYTenAI-P6gAOqZAzD-HJGOHGoWDOHCxuF3RuFXCMD7rAI1JGYJpeHSJRFtKwoixZE7iyBQpVyGF9G1hjS2FHiLxWEwBxaiAgBjG1F1KqpeLdDlpNqDFjHZGTGJozFajwDkDiDapQTEHmDrHoxfSxgjGbGlLfTcFl6KHSGwDUGji-4EB0EZAiF4yT6QZKLfFCHsBbR7B0o_HWL0bMyn6_G0oqI7CAnbSQlgk1gCazxAFCH7qkHPJsQPLvosZ4ZLDwqpY6bWJ6bVglazZC6ABcnoACN-gAb3JLCAAWioAAI6gAQ8pH4j5E77ZiaRBoQ_Z_bsBA5g4f5w6I4o7o5Y64545Bya5a5kazYckzRkHUA8mq58na7u53aABvenDtjkbnKWPtZDQX7gHgIGhCHmHuAdHvHknqnmKdrswSjDgGwevOyfqcAAsijCtlzjOOwNDmKYAPfKMueGg8eGiKomZiwZimGmepCuS2_8ypz-_Jb-QpX-P-Yp_-BOLpMZK0UhMAIB7AZp4e_ONOUBRe1YPI-mqAhkyBiByBqBuGGBOqmJJBI4BAbxHxAgpIN8iyNANhOZrRaEVkah5Mjw7AgA0rGAA8CoAJt-TJyO7p-gK4mI2WuWXZBWVkc5NAaWNYy6tMzoIwDQlZ7x-kMAuhIasALGR6OAaGHsGQWGcAXh65BAURqELxrZtBxpVwhp7xxpGJdsVwSuFE7hnhlBjxuZyhOmSwEY2hMAqBGhDa7UUFxJm5AGXQuUrA3QIGPBdZ6ho6dsoYHMlAaFksOhmF6wJJehBmUwhaQgyQjB2a5MsFeaBa8ARaJaiFjapEkFOFFEg0uGXQBAfQ5gImyBDy8sXG-FaFRBzF1F_GpF6wI5gAQZqAA55jboANhKgAX3qAB52oANHyQcTu6l2u2l6w25v8u5-5KI7gOhuGOJ1kE4GmameGEmhJ9qEFCF4MDF8GCFm5fFAlaBNYwlK4olK4KFBFwhK4VFxasl70HIpaM8_09ogMwMBExl1Ag6w60846ag_4U6M6wE-gDAZ69oBRKsd6TO5hv6i69ob61Sn6cA36QRekZJ5grWrpp-aEF-gAn9qABomoAC1mgATOnI4L6ADRcjSUUM1VmTsZ6ZXjTlVoALAqo1b2rpy2Xclez2tWfY_Q_S7heYpyVOnh_mW1CVSGUwnhciXQ818pcAfg8wk1VOz2gARvqABtTj0E5het0J4ZkCwHkBGNrmLOWc6FgNJIdSDIaBdABdPBGP2P_HADxesBll1D1G9EsKfr2bkTeksFgeNFdcIXCllrCQOetVDesN5ZSuMWwDkaTjevkaVYUZYdPMEe7GSMlujQmksJdbMNjTIacLsHdO0JzTsNdE5P4TsQ4cCTCQyq1XXPDQ9MELQpcUMe9KlYpPuhldgFldOtoPoaBOBNJNBAOMZvMHYFRHKJDTMOaNIuVbutJOVv4OwHFKuqaJKOaP6nAJIEDC-tJFVZNDVXVZAg1SYPNa0furSedYtQmjdd6f6ltk1QtVmfkJVOHbOP6oAOSagA8Dp9hYDc5QApDc5YDM7R3ylCDvEUTxl8ky4ZyABLkYAGV6Idsd1SaE2WA2mkhegA7BaADw-qNbATPgBfuhDQONDb5Q2RjXHdjYXXbKzdUqhO1CbXneRQeTJLjI6NQC6FZHFF0QmlEUTaOD5S0boGuEvZmMPdNMPWhKPRRNNKfRzqeTUu-r0WYCSfunLHrQmnYFZBokcrrf_PrfADgJTjOE7MPVcB_TMF_bVb_SkE7BfSKkAyAzgLyZ8esNZdA8_TgA3YNnfXpHFZRfzIlfPTPAOkoEOopMlexO-t7T-jlXoFraGOuu5QBbhoKPkC8pADUOgCqOTFhE7ROlcNVM5Lw2w_amYNQxulxWxMIzEGlPQ35O5uwAAOwhQkbOQhRyM-A8MeT8M1heACBTjmgfUQB5BXDuQ-CGPqMFJChTjcMhRwCUD4w5AADEecOcJjomWA5obNJwIwVwrkrkqjPg9kOWEYjsryQTzkOAJGH4gmZjGQnjlj1jXAE4KQ_jgTSTSwzk4T5MOWOwiEbQGAVwtjYA-TTjLABUcEiUONXNTjOI6AEwVwYQEQTj-Mzo5omwdlNUBuTjaFwo0sUA5o8QT89sRAXA6AsATjDDLwYSE484rEaFTj4a3DijPgzkbDH0QjtDojUF5oqJrgMh3QkjnYBQOjLTCjaj6D-a9EYjcGFE5zCIGzOZvlrM-UYzIqWzVjUA4QMATj3GzG7AAAHMc-TMRuwPrn8-gdY9FuwLY7w4syuL0AIFY2WH2JQGgBhk4_sA01VHWs6E46VBaAA-wEc1gFi8BOaCMDAC0_rnwyuGi006SzxjVE47QFgDi34O454zVCFK5HkwUyuJACDFEyEFADMH4BGP_BKC8IkNwAo2kzjIVGK546E_S9gBaJgFQE2fbBi-8ycysyI9QFczADc5PuaFgIgK4ALOrvWblTQE5AAOt-jLNnOrM6vrOomXDDAdN3N7AytmTcNYvQAYY1MCtCsivkBivcA8OpMKuMuWhbBCi_kVaYsnOCP2vauoDmhAyYDmj6BmsrjuArwvKoUwDBk4BJhwBLOJs0PJupsdh6vkhoXus5tRB5shU6jhCFvFulunPltbp2yVvpuZsCBatduXNpt6t9s9OXS1u4b1uxv5utsluatJuDuiPDvmg1t_gLsXNLtVsrvihoVjsxATvZu7rdvmFXD5vNsECzvttmAtY8HSiFF1JNstuCLuvOQACk7r6MMl5MYb77dRnzQi5oCjb7TjH0H0N7Zed7xVM7z7uGb7H7NY_7VwgHvDr7IHK4P78HFgiHDsaH70ekOAMx7rRTbMpTYAsABLAVUjAUNUJGwLNYsRugZRswmHeYXA1Tbko8Tj6MVLzTtL1UbTVc2LrjFUVU-LXHNYG0sRqA0ULHhYWW8Ltj1U3zOczkXLES5xgJP9oQ4CqqsnfloLCn-uJG5AgU1Urg4nAjESknERs4dRIL8nuTQMHYtUFnTlwsknUWRwdn-nDn4LYARnJGJGrDwxOmK4BHRFsx44dR4a5oqmYUdHLMQnuLIiFHESQnJLZLFLESPHNLXz_H-uuH6M4XlWMA-xcAs-dROXLT-XrnVAvnfjrgATigjsgTOAoU-uiJoH-DygaVqKIk1VZwtV5DGtFr86IABH08vl1QwnWE0jmj2j1Q6jxHJTVwaAVLfN2w6jvkez1Ho8NUHM6jVXfHOAgUDjB36w83GQOjHYejlm5G6jl38L1UMTNj4wmQlZ7W-g6jdXYLnLYA6jQnQMAzSQq3qAmw_QBAD3Eo2wWTyE6AGzBnuTkL6jeQV3QhsAkoiA6rSoNYI5gAgZ6ABG1oABSugA7EYy4hwoZ9BwtXCChIsZDqMMsWi9MpD2wIh6ACDqOSd9KrzJC4YZMw9IQYAI--cQs5z_eRUWDWc7Xel8_Q-w9C8_cKcxQqfqO0KSf7Wy-ZOC_w-K-5P2DORJiq_rBc_yLuuPcWM-AvNxO2PgLkBOO6_xOJMpPO8OxtcddOP8_y86-I9-dqfowbSIDGumtecqZy_a9O1RDeK6PxDmiIQ3f6BIEvXPHgu281Rvvo3vcFSrwujVTVSvtStImRVyWSDsCPXG8fBJ87MRNaNXe6P6OtP67nfVhkUTwl-ABACYACl6gAboqABsToAMKKGZkvjpuNuwuGI5lT7HP7hTtgJHVwG3RveHM8oYISjNvlozLyXQcE-7Gr1YIVAgZHowVwNgnYdAnPgfJrGG7rmtQiG8IA0_xT8Ec_I_IzDzLyzz1jbzFTbHeAczwHK4vHeXFDvS3Yw4dKWBGKFuTFp7s8M2aFGgJZmx6CYw-2TeHivCj43cY-cfFgAn2DZJYlgf3NPq-wz7uAs-YYKYLn3z4e8kBcPHRjAHmDRArgdaGgXQMh6ICteyA80Ov3GbktUOK4VEMQOigCAiAVwcrvEGPLVQSMSwcQQXwsBBtZWoA_5pn0eb2w-BlZAQbKDa5wAkanrZIBoIX6S9jW47S4EH0v64YVBcANQcILiCwAmuDsaQR61FZet2ARbJxo8EAB90WNkAC4SoAGnNB6oAEADXgYoL1Rztm-d9RWgxGVqkNBuPtLQBQFG4MBB0hUbYKsSyopURulDMbhon4DmF-AVwfgD8GLDVAruP4RmtlHWD8AOm-QagDkPYD8AQmdQ0odWH4CnFqh_AZqONDwiyFihshTAGSGLS5g8gVOB2haHyF_BSwDQiwPwCiBoAWhKgCdFlXGE1CQAPQugJgH0gQB4A1Q3DPwCGEzCR4BHBYRMMECdsN2VQpAIsIAB6euOoTo3IA4BqoBwxYUMKdoGQZh5wpMDgBzg4BnIDw7YZqEtCRBdhoUfYWmkJLyBUqow3AMgRSGoAKGc6BgDZBAC0AfQWQHIXkNNC0AaBZoHpnMH4BgjWk8gIAA",mdxType:"Playground"},Object(g.b)(N.a,{onClick:function(){B.config({placement:"topLeft"}),B.pop({message:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361",duration:0,description:"\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60"})},mdxType:"Button"},"topLeft"),Object(g.b)("i",{style:{marginLeft:"16px"}}),Object(g.b)(N.a,{type:"primary",onClick:function(){B.config({placement:"topRight"}),B.pop({type:"success",message:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361",description:"\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60"})},mdxType:"Button"},"topRight"),Object(g.b)("i",{style:{marginLeft:"16px"}}),Object(g.b)(N.a,{type:"pure",onClick:function(){B.config({placement:"bottomLeft"}),B.pop({type:"info",message:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361",description:"\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60"})},mdxType:"Button"},"bottomLeft"),Object(g.b)("i",{style:{marginLeft:"16px"}}),Object(g.b)(N.a,{type:"primary",onClick:function(){B.config({placement:"bottomRight"}),B.pop({type:"warning",message:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361",duration:0,description:"\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60"})},mdxType:"Button"},"bottomRight"),Object(g.b)("i",{style:{marginLeft:"16px"}}),Object(g.b)(N.a,{type:"warning",onClick:function(){B.pop({type:"error",icon:Object(g.b)(O.a,{type:"FaRegSadCry",mdxType:"Icon"}),message:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361",duration:0,description:"\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60"})},mdxType:"Button"},"\u4fee\u6539\u901a\u77e5\u6846icon"),Object(g.b)("i",{style:{marginLeft:"16px"}}),Object(g.b)(N.a,{type:"warning",onClick:function(){B.destroy()},mdxType:"Button"},"\u9500\u6bc1notification")),Object(g.b)("h2",{id:"\u4f7f\u7528\u4ecb\u7ecd"},"\u4f7f\u7528\u4ecb\u7ecd"),Object(g.b)("pre",null,Object(g.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { Notification } from '@alex_xu/xui'\n\n// \u4f7f\u7528\nxNotification.pop({\n    type: 'warning',\n    message: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n    duration: 0,\n    description: '\u524d\u7aef\u57fa\u7840\uff0c\u4e2d\u7ea7\u8fdb\u9636\uff0c\u9ad8\u7ea7\u6253\u5361\uff0c\u4e00\u8d77\u73a9\u8f6c\u524d\u7aef\uff0c996\u8fdc\u79bb\u4f60'\n})\n\n// \u5168\u5c40\u914d\u7f6e\nxNotification.config({\n    placement: 'bottomRight'\n})\n")),Object(g.b)("h2",{id:"api\u6587\u6863"},"API\u6587\u6863"),Object(g.b)("h3",{id:"xnotification\u7684\u5168\u5c40\u5c5e\u6027"},"xNotification\u7684\u5168\u5c40\u5c5e\u6027"),Object(g.b)("table",null,Object(g.b)("thead",{parentName:"table"},Object(g.b)("tr",{parentName:"thead"},Object(g.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(g.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(g.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(g.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(g.b)("tbody",{parentName:"table"},Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"bottom"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6d88\u606f\u4ece\u5e95\u90e8\u5f39\u51fa\u65f6\uff0c\u8ddd\u79bb\u5e95\u90e8\u7684\u4f4d\u7f6e\uff0c\u5355\u4f4d\u50cf\u7d20"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"'24px'")),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"duration"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u81ea\u52a8\u5173\u95ed\u5ef6\u65f6\uff0c\u5355\u4f4d\u79d2"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"4.5s")),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"getContainer"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"HTMLNode \u914d\u7f6e\u6e32\u67d3\u8282\u70b9\u7684\u8f93\u51fa\u4f4d\u7f6e"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"() => HTMLNode"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"() => document.body")),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"placement"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5f39\u51fa\u4f4d\u7f6e(topLeft/topRight/bottomLeft/bottomRight)"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"'topRight'")),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"top"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6d88\u606f\u4ece\u9876\u90e8\u5f39\u51fa\u65f6\uff0c\u8ddd\u79bb\u9876\u90e8\u7684\u4f4d\u7f6e\uff0c\u5355\u4f4d\u50cf\u7d20"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"'24px'")),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"closeIcon"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u5173\u95ed\u56fe\u6807"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"HTMLNode"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}))))),Object(g.b)("h3",{id:"notice\u5c5e\u6027"},"notice\u5c5e\u6027"),Object(g.b)("table",null,Object(g.b)("thead",{parentName:"table"},Object(g.b)("tr",{parentName:"thead"},Object(g.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(g.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(g.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(g.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(g.b)("tbody",{parentName:"table"},Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"type"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u901a\u77e5\u7a97\u7c7b\u578b('info"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"success"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"error")),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"btn"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"ReactNode"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"bottom"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6d88\u606f\u4ece\u5e95\u90e8\u5f39\u51fa\u65f6\uff0c\u8ddd\u79bb\u5e95\u90e8\u7684\u4f4d\u7f6e\uff0c\u5355\u4f4d\u50cf\u7d20"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"className"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u5185\u5bb9\u7684class"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"description"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u901a\u77e5\u63d0\u9192\u5185\u5bb9\uff0c\u5fc5\u9009"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"ReactNode")),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"duration"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4 4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\uff0c\u914d\u7f6e\u4e3a null \u5219\u4e0d\u81ea\u52a8\u5173\u95ed"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"4.5")),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"closeIcon"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u5173\u95ed\u56fe\u6807"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"ReactNode"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"getContainer"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u914d\u7f6e\u6e32\u67d3\u8282\u70b9\u7684\u8f93\u51fa\u4f4d\u7f6e"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"HTMLNode"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"icon"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u56fe\u6807"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"ReactNode"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"key"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5f53\u524d\u901a\u77e5\u552f\u4e00\u6807\u5fd7"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"message"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u901a\u77e5\u63d0\u9192\u6807\u9898\uff0c\u5fc5\u9009"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"ReactNode")),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"onClose"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u70b9\u51fb\u9ed8\u8ba4\u5173\u95ed\u6309\u94ae\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"func"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"onClick"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u70b9\u51fb\u901a\u77e5\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"func"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(g.b)("tr",{parentName:"tbody"},Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"top"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6d88\u606f\u4ece\u9876\u90e8\u5f39\u51fa\u65f6\uff0c\u8ddd\u79bb\u9876\u90e8\u7684\u4f4d\u7f6e\uff0c\u5355\u4f4d\u50cf\u7d20"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}),"func"),Object(g.b)("td",Object.assign({parentName:"tr"},{align:null}))))))}w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/Notification/index.mdx"}}),w.isMDXComponent=!0},"./src/Notification/style/css.less":function(t,e,n){}}]);