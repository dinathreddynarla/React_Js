# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Functional based components => syntax ,props

Hooks :- state, lifecycle methods, side effects

what is hooks :- hooks is a new way to use state and other react features in functional components
    introduced in es6 -> version 16
    it allows us to handle state and lifecycle methods in functional components
    it is a function that allows us to use state and other react features in functional components


why hooks is a special function :- because it is reusable and we can make customized hook -> custom hooks



types of hooks :- 
    useState :- it is used to add or manage state to functional components  

    --- >
    const [state,setState] = useState(initial Value) /// array
        initail value is optional , it can be array or object or number or string or null or undefined
        it returns an array with two values state and setState
        state is the current state of the component
        setState is a function that updates the state of the component

        







    useEffect :- it is used to handle side effects in functional components
    useContext
    useReducer
    useCallback
    useMemo
    useRef



why hooks :- 

to overcome syntactical complex issues
for easy state management
for easy life cycle methods , side effects
for easy dependency injection
to maintain network calls (memoizing values)
