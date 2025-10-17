# Banner Variable Assignment

This repository contains banner variables design using CSS for the styling of each position (top, right, bottom, and center), and size (large).

## It's Content

- `index.html`, a webpage with an header and a btn.
- `css/main.css`, a styling sheet for HTML page.

## How to use

Comment out all the styling for each banner styling to view the base banner styling.
To view each banner variable styling, uncomment the styling for the position or size to view.

### Example of how to use

```
/* Large Size */
 <!-- .banner--large {
   --banner-height: 20rem;
   padding: 12rem 0 15rem 8rem;

   & .banner__title {
     font-size: var(--type-scale-h2);
   }

   & .btn {
     font-size: var(--type-scale-h5);
   }
 } -->

 <!-- /* Bottom Position */
 .banner--bottom {
   padding: 30rem 0 2rem 8rem;
   --banner-vertical-align: flex-end;
 } -->

 /* Top Position */
 .banner--top {
   --banner-text-align: flex-start;
   padding: 7rem 0 15rem 8rem;
 }
The top position style will be see when viewing, because it has been uncomment
```
