# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


what is UseEffect :- it is used to perform side effects in functional components. It is used to fetch data from an API, update the DOM

what are side effects :- side effects are the operations that are performed in a function that are performed in the background when the component is rendered.

it csn be :-
1. fetching an api || handling http requests
2. timers || subscriptions
3. DOM manipulation

document.title = "title Changed"

fetch(url).then((res)=>res.json()).then((data)=>setState(data))

function incre(){
    setCount(prev => prev+1)
}

incre()


syntax of useeffect :- 
    useEffect(create , deps);

    create -> create Effects -> need to write the logic of which type of side effect it is -> create is a function 
                ->callback function

    deps -> dependencies -> [ ] (dependency array)
            what is deps -> it is an array of values that are used in the component and if any of the values in the array changes then the effect will be re-run
            -> to overcome the problem of infinite loop we use deps
            -> what it does actually , it will only call this(create - > side effect) operation only once when the component is rendered