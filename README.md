#  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Laptop.webp" alt="Laptop" width="35" /> &nbsp; ReactJS Redux <img src="https://skillicons.dev/icons?i=react" height="40" alt="react logo" height="40" width="36"  />

<!----------------------------------------- Description ---------------------------------------->
### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Symbols/Bubbles.png" alt="Bubbles" width="40" height="40" />&nbsp; _Description_

> #### _Redux_ is a predictable state container for JavaScript apps.
- It helps you write applications that behave consistently, run in different environments (_client, server, and native_), and are easy to test.
- It lets your React Components _read data from a Redux store_, and _dispatch actions to the store to update state_.
<br/>

 ###  _Projects_ &nbsp; <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif" alt="🚀" width="28" >  
 > ⒈ { _Redux Counter_, <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _Redux Authentication_ } = <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🏷️{ Managing App-Wide State with _Redux_ } <br/>

  > ⒉ _Redux ShoppingCart_ =  <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🏷️{ _Redux Deep Dive_ } <br/>

<br/><br/>
***
<!--===================== Redux Counter | Redux Authentication =============================-->
### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Laptop.webp" alt="Laptop" width="35" height="30"  /> &nbsp; _Redux Counter_ & _Redux Authentication_  <img src="https://skillicons.dev/icons?i=react" height="40" alt="react logo" width="20"  />
> [!NOTE] 
> _Redux_ is a "State Management System" for Cross-Component or App-Wide State. 
- _Local State_: &nbsp; State belongs to a single component
  - listening to a User-input via _useState & useReducer_  
- _Cross-component State_: &nbsp; State affecting multiple components 
  - Open/Close Modal overlay via _prop drilling_ or "React-Context" & "Redux" 
- _App-wide State_: &nbsp; State affecting the entire App 
  - User Authentication via _prop drilling_ or "React-Context" & "Redux"  <br/><br/>

 > #### For this project, my goal is on Managing App-Wide State with _Redux_. <br/>
 
> [!IMPORTANT]
> _Which Concepts in Have I Covered_:  

#### <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2699_fe0f/512.gif" alt="⚙" width="18"> &nbsp; _Why would you use Redux?_
- _React-Context_ has some potential disadvantages
   1. ` Complex Setup & Management: ` Can lead to _deeply nested JSX Providers_ or _fat "Context Provider"_ Components 
   2. ` Performance: ` It's not optimized for _High-Frequency State Changes_ - Changes that happen more frequently 
#### <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2699_fe0f/512.gif" alt="⚙" width="18"> &nbsp; _How Redux Works?_
  - Components set up "Subscriptions" to → _"Central Store"_ - They subscribe to the Store
  - Then, Components dispatch an → _"Action"_
  - Redux forward that action to → _"Reducer Function"_
  - Reducer Function updates the State in → _"Central Data Store"_ 
  - Subscribing Components are notified that they can → _"Update the UI"_ 
#### <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2699_fe0f/512.gif" alt="⚙" width="18"> &nbsp; _Redux Basics & Using Redux with React_
  - Redux is all about having one ` Central Data(State) Store ` in your Application.
  - _Install_: ` npm install redux react-redux `
  - Creating a Redux Store for React with _` createStore `_
  - Using Redux Data in React Components via _` useSelector `_
  - Dispatching Actions From Inside Components via _useDispatch_
  - Redux with Class-Based Components
  - Attaching Payloads to Actions
  - Working with Multiple State Properties | Counter & showCounter
  - Redux Challenges in bigger Apps:
    1. Clashing Identifiers Name
    2. Unmaintainable big Redux File 
#### <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2699_fe0f/512.gif" alt="⚙" width="18"> &nbsp; _Working with Redux Toolkit_
  - _Install_: ` npm install @reduxjs/toolkit `
  - Adding State Slices using Redux-Toolkit | _` createSlice `_: Preparing Global State
  - Connecting Redux-Toolkit State to the Store | _` configureStore `_: Merging Multiple Reducers into One Reducer
  - Migrating Everything To Redux Toolkit | Configure counterActions to _Dispatching Actions_
  - Working with Multiple Slices | authenticationSlice & counterSlice
  - Reading & Dispatching From A New Slice | authSlice

<br/>

<!-------- try it live -------->
#### _Give it a go in real-time and give me a Star_ &nbsp; <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Glowing%20Star.png" alt="Glowing Star" width="25"  /> <a href="https://redux-auth-counter-shahram.netlify.app/" target="_blank"> &nbsp; _Redux Counter & Authentication_ </a> 


 
<!--------- Video --------->
<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Clapper%20Board.webp" alt="Clapper Board" width="35" />

https://github.com/ShahramShakiba/ReactJS-Redux/assets/110089830/6fe74162-1203-43f4-9d18-01c8ac27c375

  <br/> 

***
<!--===================== Redux ShoppingCart =============================-->
### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Laptop.webp" alt="Laptop" width="35" height="30"  /> &nbsp; _Redux ShoppingCart_  <img src="https://skillicons.dev/icons?i=react" height="40" alt="react logo" width="20"  />
> [!NOTE] 
> #### In _Redux_, Reducers must be pure, _Side Effects free_ & _Synchronous_ functions!
 <br/><br/>

 > #### For this project, my goal is on Managing App-Wide State with _Redux_. <br/>
 
> [!IMPORTANT]
> _Which Concepts in Have I Covered_:  

#### <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2699_fe0f/512.gif" alt="⚙" width="18"> &nbsp; _Handling Async Tasks with Redux_
- _Install_:  ` npm install react-redux ` & ` npm install @reduxjs/toolkit `
- Creating a Redux-Store and Managing UI-Slice & Cart-Slice 
#### <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2699_fe0f/512.gif" alt="⚙" width="18"> &nbsp; _Where to put Side-Effects & Synchronous Codes_
- Inside the Components via useEffect()
  - Using useEffect with Redux to send HTTP Request (PUT)
  - Handling HTTP States & Feedback with Redux <br/><br/>
- Inside the Action Creators
  - We can write our own _Action Creators_ to create ` Thunk `:
    - A function that delays an action until later
    - An action creator function that does _not return the action itself_ but instead _another function_ which _eventually_ returns the action
  - Creating & Using an Action Creator Thunk | sendCartData
  - Creating another Thunk for Fetching Data
#### <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2699_fe0f/512.gif" alt="⚙" width="18"> &nbsp; _The Redux DevTools_
 

<br/>

<!-------- try it live -------->
#### _Give it a go in real-time and give me a Star_ &nbsp; <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Glowing%20Star.png" alt="Glowing Star" width="25"  /> <a href="" target="_blank"> &nbsp; _Redux ShoppingCart_ </a> 


 
<!--------- Video --------->
<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Clapper%20Board.webp" alt="Clapper Board" width="35" />



  <br/> 
  
<!--======================= Social Media ===========================-->
## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Detective%20Light%20Skin%20Tone.png" alt="Man Detective Light Skin Tone" width="65" /> Find me around the Web  
<a href="https://www.linkedin.com/in/shahramshakiba/" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://t.me/ShahramShakibaa" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/telegram/default.svg" width="52" height="40" alt="telegram logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://wa.me/message/LM2IMM3ABZ7ZM1" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/whatsapp/default.svg" width="52" height="40" alt="whatsapp logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://instagram.com/shahram.shakibaa?igshid=MzNlNGNkZWQ4Mg==" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/instagram/default.svg" width="52" height="40" alt="instagram logo"  />
  </a> &nbsp;&nbsp;&nbsp;
  <a href="https://twitter.com/ShahramShakibaa" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/twitter/default.svg" width="52" height="40" alt="twitter logo"  />
  </a>






 
