let pattern = "https://www.reddit.com/*";
function redirect(requestDetails) {
  console.log(`Redirecting: ${requestDetails.url}`);
  if (requestDetails.url.includes("old.reddit.com")) {
    return;
  }
  return {
    redirectUrl: requestDetails.url.replace("www","old") 
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["main_frame"]},
  ["blocking"]
);

