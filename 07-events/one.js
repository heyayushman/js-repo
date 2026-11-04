//* type of event, timestamp, 
//* defaultPrevented, target, currentTarget, event phase, bubbles, cancelable, isTrusted
//* toElement, srcElement, relatedTarget, 
//* pageX, pageY, clientX, clientY, 
//* screenX, screenY, offsetX, offsetY, x, y
//* altKey, keyCode, ctrlKey, shiftKey, metaKey, button, buttons, detail


//? Event propagation: It is the order in which events are received on the page. 
//?                    It has three phases: 1. capturing phase, 
//?                                         2. target phase, and 
//?                                         3. bubbling phase.

//?1. Capturing phase: The event is first captured by the outermost element and propagated to the inner elements. (when it is set to true in addEventListener - top to bottom)
//?2. Target phase: The event reaches the target element and is executed. (when it is set to true in addEventListener)
//?3. Bubbling phase: The event bubbles up from the target element to the outer elements. (when it is set to false in addEventListener - bottom to top)

//? stopPropagation(): It is a method that stops the event from propagating further. It can be used in any phase of the event propagation. (it will stop the event from bubbling up or capturing down). It can be used to prevent the event from being handled by other elements. It can be used in any phase of the event propagation. (it will stop the event from bubbling up or capturing down). It can be used to prevent the event from being handled by other elements.
//! element.addEventListener(event, function, useCapture);

//* Think of two buttons' event listeners attached to the same element:
//? stopPropagation() = Don't go to the parent, but finish executing listeners here.
//? stopImmediatePropagation() = Don't go to the parent, and don't execute any more listeners here.


// document.querySelector('#images').addEventListener('click', (e) => {
//     console.log("clicked inside ul");
// }, false);
// document.querySelector('#img1').addEventListener('click', (e) => {
//     console.log("clicked image one");
//     e.stopImmediatePropagation();
// }, false);



// //? preventDefault()

// document.querySelector('#google').addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("clicked google");
// });


//? remove(): the elements can be removed.

document.querySelector('#images').addEventListener('click', (e) => {
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);

    if( e.target.tagName === 'A') {
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }


    // removeIt.parentNode.removeChild(removeIt);
}, false);