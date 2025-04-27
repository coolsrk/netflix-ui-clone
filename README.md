# Netflix UI Clone
This is the repo for Netflix UI clone. This one would be containing all the react important topics covered along with smart search implemented using Chat GPT apis.

[WE ARE LIVE!](https://netflix-ui-clone-37e7a.web.app/)

# Components 
- Login
    - Header
        - Logo
        - Sign In button
    - Sign Up form
    - Sign In Form
    - Adding user object returned by firebase to Redux store
    - Bug Fix: Added feature to navigate to /browse page if user is signed in otherwise navigate to '/' page.
- Browse 
    - Movies 
    - Horizontal scrolling movie list
    - Trailer after hovering
    - Search Box
    - For searched movie or item it should play trailer in the back ground.
    - Design:- 
        - Main Container
            - Movie trailer in background
            - Left middle, movie logo
            - Below that movie description.
        - Secondary Container
            - Movie category * n
                - Card * n
                - On hover should show options 
- Search 
    - Smart search using Chat GPT APIs.

# Features used

- Using TMDB api to get movies data. 
    - Created new app on site and got auth token from there to hit apis.
- 

# Good Practices 

- Handling *onAuthStateChanged()* from Header component:- 
    - Because of useEffect(() => {...}, []) it would call evertime my component loads which would add listener for onAuthStateChanged.
    - But when our component gets unmounted it remains there, it does not get removed. 
    - This happens whenever our Header component renders.
    - To tackle that, we have to clean up the useEffect() so return function at the end inside useEffect().
    - Known as 'unsubscribe' to an action.


# Bug Fixes🐞

 