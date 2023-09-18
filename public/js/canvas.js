
  // let sectionElem = document.getElementById("sections-menu");
// let sectionHeight = sectionElem.scrollHeight;
// let timer;
// let parentElem = document.getElementById("wrapper");
// let parentHeight = parentElem.scrollHeight - sectionHeight;
// let childElementsHeight = [];
// getAllChildHeights();

// function getAllChildHeights() {
//     if (document.getElementById("header")) {
//         childElementsHeight.push({
//             tabId: "menu-point-1",
//             height: document.getElementById("header").offsetHeight + 50, // if you have any margin added in the child element, I've added 50px
//             active: true,
//         });
//         document.getElementById("menu-point-1").classList.add("active-tab");
//     }
//     if (document.getElementById("advantages")) {
//         childElementsHeight.push({
//             tabId: "menu-point-2",
//             height:
//                 childElementsHeight[0]["height"] +
//                 document.getElementById("advantages").offsetHeight +
//                 50,
//             active: false,
//         });
//     }
//     if (document.getElementById("child-3")) {
//         childElementsHeight.push({
//             tabId: "tab-3",
//             height:
//                 childElementsHeight[1]["height"] +
//                 document.getElementById("child-3").offsetHeight +
//                 50,
//             active: false,
//         });
//     }
//     if (document.getElementById("child-4")) {
//         childElementsHeight.push({
//             tabId: "tab-4",
//             height:
//                 childElementsHeight[2]["height"] +
//                 document.getElementById("child-4").offsetHeight +
//                 50,
//             active: false,
//         });
//     }
//     if (document.getElementById("child-5")) {
//         childElementsHeight.push({
//             tabId: "tab-5",
//             height:
//                 childElementsHeight[3]["height"] +
//                 document.getElementById("child-5").offsetHeight +
//                 50,
//             active: false,
//         });
//     }
// }

// function debounce(timeout = 50) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//         let elem = document.getElementById("wrapper");
//         let currentScrollPosition = elem.scrollTop;
//         console.log(currentScrollPosition, parentHeight);
//         for (let i = 0; i < childElementsHeight.length; i++) {
//             if (currentScrollPosition > parentHeight - 10) {
//                 childElementsHeight[childElementsHeight.length - 1][
//                     "active"
//                 ] = true;
//                 document
//                     .getElementById(
//                         childElementsHeight[childElementsHeight.length - 1][
//                         "tabId"
//                         ]
//                     )
//                     .classList.add("active-tab");
//                 for (let j = 0; j < childElementsHeight.length; j++) {
//                     if (
//                         childElementsHeight[j]["active"] &&
//                         childElementsHeight[childElementsHeight.length - 1][
//                         "tabId"
//                         ] != childElementsHeight[j]["tabId"]
//                     ) {
//                         childElementsHeight[j]["active"] = false;
//                         document
//                             .getElementById(childElementsHeight[j]["tabId"])
//                             .classList.remove("active-tab");
//                         break;
//                     }
//                 }
//                 break;
//             } else if (
//                 childElementsHeight[i]["height"] > currentScrollPosition
//             ) {
//                 childElementsHeight[i]["active"] = true;
//                 document
//                     .getElementById(childElementsHeight[i]["tabId"])
//                     .classList.add("active-tab");
//                 for (let j = 0; j < childElementsHeight.length; j++) {
//                     if (
//                         childElementsHeight[j]["active"] &&
//                         childElementsHeight[i]["tabId"] !=
//                         childElementsHeight[j]["tabId"]
//                     ) {
//                         childElementsHeight[j]["active"] = false;
//                         document
//                             .getElementById(childElementsHeight[j]["tabId"])
//                             .classList.remove("active-tab");
//                         break;
//                     }
//                 }
//                 break;
//             }
//         }
//     }, timeout);
// }

// function setActive(tabId, elemId) {
//     for (let j = 0; j < childElementsHeight.length; j++) {
//         if (childElementsHeight[j]["active"]) {
//             childElementsHeight[j]["active"] = false;
//             document
//                 .getElementById(childElementsHeight[j]["tabId"])
//                 .classList.remove("active-tab");
//             break;
//         }
//     }
//     document.getElementById(tabId).classList.add("active-tab");
//     document.getElementById(elemId).scrollIntoView();
// }