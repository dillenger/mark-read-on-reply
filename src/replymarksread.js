// https://webextension-api.thunderbird.net/en/91/compose.html#onbeforesend
// https://webextension-api.thunderbird.net/en/91/compose.html#composedetails

browser.compose.onBeforeSend.addListener((tab, details) => {
    if(details.type == "reply"){ //[Added in TB 88]
	messenger.messages.update(details.relatedMessageId /*Added in TB 91.3.1*/, {
	    read: true,
        });
    }
});

// browser.runtime.onStartup.addListener(() => {
//     browser.compose.onBeforeSend.addListener((tab, details) => {
// 	if(details.type == "reply"){ //[Added in TB 88]
// 	    messages.update(details.relatedMessageId /*Added in TB 95*/, {
// 		read: true,
//             });
// 	}
//     });
// });

// browser.runtime.onInstall.addListener(() => {
//     browser.compose.onBeforeSend.addListener((tab, details) => {
// 	if(details.type == "reply"){ //[Added in TB 88]
// 	    messages.update(details.relatedMessageId /*Added in TB 95*/, {
// 		read: true,
//             });
// 	}
//     });
// });


// // Probably not necessary:

// /* 
//  * Execute the startup handler whenever Thunderbird starts
//  */
// const handleStartup = () => {
//   messenger.messageDisplayScripts.register({
//     js: [{ file: "/src/message-content-script.js" }],
//     css: [{ file: #"/src/message-content-styles.css" }],
//   });
// };

// document.addEventListener("DOMContentLoaded", handleStartup);

// 
