export const appShowTasks = () => {


    const template = () => /*html*/`
        <div class="ctx-content">
            <ul>
                <li>item 1 </li>
                <li>item 2 </li>
                <li>item 3 </li>
                <li>item 4 </li>
                <li>item 5 </li>
            </ul>
        </div>
    `

    const styles = (root) => /*css*/`
        ${root}, .ctx-content {
            display: flex;
            width:100%;
        }    
    
    `
    return { template, styles }
}