export const domFactory = (context) => {

    const on = (eventName, elements, handler) => {
       elements.forEach(element => {
           element[eventName] = handler
       })
    }

    const queryOnce = (selector) => {
        return context.querySelector(selector)
    }
    const queryAll = (selector) => {
        return Array.from ( context.querySelectorAll(selector))
    }

    return {
        on,
        queryOnce,
        queryAll
    }
}