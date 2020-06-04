REACT-ROUTER-DOM

ROUTE

path: relative url / means localhost or base URL.
exact: means that path must be exactly matching.
component: It is the component we want to render.
With exact, as long as the path matches it will render the component i.e. all the components which have / in their path which be rendered.

Any component that is passed into Route gets 3 props from the React-Router-dom viz.

1. History
2. Location
3. Match

We get access to them only through the first component. Only way to pass it to all its child components is by PROP TUNNELING, which is usually a bad design pattern(passing a prop down the line only to be used by some child component and children in between don't actually need it other than passing the prop down to its children)
Alternate and better solution is withRouter HOC. A func that takes a component and returns another component.

- path is the pattern it is matching
- isExact is true of path and url are perfect matching
- params is an object of url parameters
- ? after param in path makes it optional hence it is rendered even if the param is not provided

## HISTORY

SWITCH
Makes sure only one component is rendered from all the routes if more than one matches.
<switch>
</switch>
