E-Commerce Online Store

GIT (cloning some repository and adding it to your github)

- git remote: is just a pointer to a repository that is not on our system. Clond repo point to their origin as remote
- git remote remove origin
- git remote add origin <your repote repo link> Add your repository link to commit these files to it

1. First, discuss the design architecture of the page

- Difference between <span> <p> and <div>
  span is inline whereas the other 2 are block elements
  p and div only differ in semantics

- FLEXBOX

Properties of Container (flex container):

display: flex;

flex-direction: row|column|row-reverse|column-reverse

flex-wrap: nowrap (default, all items fitted in 1 line) | wrap | wrap-reverse;

flex-flow: <‘flex-direction’> || <‘flex-wrap’>
This is a shorthand for the flex-direction and flex-wrap properties, which together define the flex container's main and cross axes. The default value is row nowrap.

justify-content: flex-start | flex-end| space-around| center| space-between| space-evenly
This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

align-items: center| baseline| flex-start| flex-end| strech
This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross axis (perpendicular to the main-axis).

align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline |
This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.
