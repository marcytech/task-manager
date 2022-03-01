import { uuid } from "./uuid"
import { domFactory } from "./domFactory"

export const createApp = (selector, factories) => {
  const appElement = document.querySelector(selector)

  const createComponent = (factory, element = null) => {

    const selector = createSelector(factory.name)
    const componetElement = element ? element : createElement(selector)
    const dom = domFactory(componetElement)

    const contextId = uuid(selector)
    const component = factory(dom)
    component.element = componetElement
    component.selector = selector
    component.contextId = contextId

    return component
  }

  const createSelector = (text) => {
    return text
      .split(/(?=[A-Z])/)
      .join("-")
      .toLowerCase()
  }

  const createElement = (selector) => {
    return document.createElement(selector)
  }

  const applyContext = (text, id) => {
    return text.replace(/ctx/gi, id)
  }

  const bindStyles = (component) => {
    const headElement = document.querySelector("head")
    const styleElement = document.createElement("style")
    const styles = component.styles(component.selector)
    styleElement.innerHTML = applyContext(styles, component.contextId)
    headElement.append(styleElement)
  }

  const bindEvents = (component) => {
    if(!component.hasOwnProperty('events')) return
    if(typeof component.events !== 'function') return
    component.events()
  }

  const renderChildren = (parentComponent) => {
    const childrenExists = parentComponent.hasOwnProperty("children") &&
      typeof parentComponent.children === "function"

      if (!childrenExists) return

     const { children } = parentComponent
     const childrenFactories = children()

     for( let key in childrenFactories) {
         const selector = createSelector( key )
         const childElement = parentComponent.element.querySelector( selector )
         const component = createComponent( childrenFactories[key], childElement)
         render( component, parentComponent.element)

     }
  }

  const render = (component, parentElement = null) => {
    const { template, contextId } = component
    component.element.innerHTML = applyContext(template(), contextId)
    if(!parentElement) appElement.append(component.element)
    bindStyles(component)
    bindEvents(component)
    renderChildren(component)
  }

  const init = () => {
    for (let key in factories) {
      const component = createComponent(factories[key])
      render(component)
    }
  }

  return { init }
}
