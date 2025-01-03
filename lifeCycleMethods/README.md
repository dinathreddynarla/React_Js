# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


///  NOTES  

life cycle methods:-

components ->

1. mounting :- the components is being mounted/created or inserted in the dom
--->
        1. Constructor :- initialize states, inherit parent properties || methods , we can bind event

        2. getDerivedStatefromProps :- 
            static getDerivedStatefromProps(props,state){
                this.setState({})
            }

            either it will return object or null (optional)

        3. render // Read Only

        4.componentDidMount

2. updating :- re-rendering the changes as a result int component
3. unmounting :- the component is being removed from the dom
4. error handling :- to handle errors 

ex:-  setInterval ->  1,2,3,4,5,6   1,2,3,4,5,6   1,2,3,4,5,6
        starting the interval ==== mounting
        each time printing === updating
        clear the interval === unmounting

side effects :- http request,function calls , clear intervals or timeouts


functional -> useEffect

class ->    componentDidMount

            shouldComponentUpdate

            componentWillUnmount