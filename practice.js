const DOG_URL = "https://dog.ceo/api/breeds/image/random";

/**
 * fetch() comes back with just like a blob of text and
 * you need to process it into a useful thing.
 * As soon as promise resolves then run the function(callback)
 * attached to it.
 * Whenever this fetch comes back, because it takes time to
 * request something from the internet and for it to come
 * back to you. That's called asynchronous.
 */
const promise = fetch(DOG_URL);
const doggos = document.querySelector(".doggos");

/**
 * response is the thing that came back from the URL.
 * response.json() is going to parse it into an object
 * that you can use. response is blob of stuff you got
 * back from fetch(). This blob is actually in JSON format.
 * We need to parse this JSON blob into Javascript object.
 * JSON is a subset of Javascript.
 */
promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse) {
    //console.log(processedResponse);
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);
  });

//console.log("this will log first");