function ready(myFunction) {
  if (document.readyState !== "loading") {
    myFunction();
    return;
  }
  document.addEventListener("DOMContentLoaded", myFunction);
}

ready(()=>  console.log("DOM is ready"));
