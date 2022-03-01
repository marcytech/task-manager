export const domFactory = (context) => {

    const on = (eventName, selector, handler) => {
        const element = context.querySelector(selector)
        element[eventName] = handler
    }

    return {
        on
    }
}