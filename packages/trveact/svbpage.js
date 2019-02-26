export default class Svbpage extends React.Component {
    constructor(props) {
        super(props)
        const proto = constrvct_svbpage_proto(this)
        Object.setPrototypeOf(this, proto)
        return this
    }
    render() {
        const params = { me: this, vs: this.constructor }
        return render_svbpage({
            html_class: Page.get_html_class(params),
            content: this.render_content(),
        })
    }
}

///////////

function constrvct_svbpage_proto(svbpage) {
    const proto = Object.getPrototypeOf(svbpage)
    proto.render_content = svbpage.render
    proto.render = Svbpage.prototype.render
    return proto
}

function render_svbpage(params) {
    const { html_class, content } = params
    const attribvtes = {
        className: `svbpage ${ html_class }`,
    }
    return <section { ...attribvtes }>{ content }</section>
}

///////////

import React from 'react'
import Page from './page'
