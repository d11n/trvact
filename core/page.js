export default class Page extends React.Component {
    constructor(props) {
        super()
        this.render_page_content = this.render
        this.render = Page.prototype.render
        // return this
        // ^ returning confuses React
    }
    render() {
        return render_page({ page: this, ...this.props })
    }
}

///////////

function render_page(params) {
    const { page } = params
    const html_class = page.html_class
        || page.constructor.html_class
        || page.constructor.name
    const attributes = {
        role: 'main',
        className: `page ${ html_class }`,
    }
    // if in browser, maybe change <title> (and og? may not matter)
    return <main { ...attributes }>
        { page.render_page_content() }
    </main>
}

///////////

import React from 'react'
