{/*
 

1. Three tenets of Components

a. Component nesting : a component can be shown
inside of another

b. Component Resuability :
create components that are resuable for the entire application

c. Component configuration:
components must be configurable
each component must be allowed to configured separately



2. important libraries

semantic ui
faker js


3. CREATING A REUSABLE CONFIGURABLE COMPONENT

A. identify the jsx that appears to be duplicated

B. what is the purpose of that block of jsx

C. create a new file to house this new component

D. make the new comp configurable byy using Reacts 'n-props' system.

4. To refer js Variables we use : {}

but to refer to React Components : we use <compName/>


5. React Props (Properties) system

a. it is a  system for passing data from a parent
component to a child component

b. The entire goal is to somehow communicate data from
parent down to a child with ultimate goal of customizing the child

so the only 2 goal of Props is
either to customize how the comps look
or 
how  user interacts with it.

c. A child cannot send data backup to the parent through the
system directly.


step1 : provide info to the child
<CommentDetail author="sam" />

step 2 : child comp then consume that value
const CommentDetail = (props) =>
{
    ...
            <a href="/" className="author">
            {props.author}
*/}