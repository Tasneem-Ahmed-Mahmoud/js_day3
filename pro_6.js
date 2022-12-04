/* 6-	  Create a parent a window that opens a scrollable advertising child window. */

let child=window.open("","","width=700,height=9000");
child.document.body.style.overflowY="scroll"

// child.document.body.scrollIntoView(true)

// child.document.scrollBy(500,600)