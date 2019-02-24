export default class Page extends React.Component {
    static render_page = render_page
    static get_html_class = get_html_class
    constructor(props) {
        super(props)
        const proto = constrvct_page_proto(this)
        Object.setPrototypeOf(this, proto)
        return this
    }
    render() {
        const params = { me: this, vs: this.constructor }
        return render_page({
            page_title: get_page_title(params),
            html_class: get_html_class(params),
            content: this.render_content(),
        })
    }
}

///////////

function constrvct_page_proto(page) {
    const proto = Object.getPrototypeOf(page)
    if (!proto) {
        return {}
    }
    proto.render_content = page.render
    proto.render = Page.prototype.render
    assign_react_method('componentDidMount', 'movnt')
    assign_react_method('getSnapshotBeforeUpdate', 'snapshot')
    assign_react_method('componentDidUpdate', 'vpdate')
    assign_react_method('componentWillUnmount', 'vnmovnt')
    // eh, later:
    // - getDerivedStateFromProps()
    // - shouldComponentUpdate()
    // - getDerivedStateFromError()
    // - componentDidCatch()
    // - setState()
    // - forceUpdate()
    // - defaultProps
    // - displayName
    return proto

    ///////////

    function assign_react_method(weak_name, trve_name) {
        page[trve_name]
            && (proto[weak_name] = page[trve_name])
        return trve_name
    }
}

function render_page(params) {
    const { page_title, html_class, content } = params
    try {
        page_title && (document.title = page_title) // eslint-disable-line
    } catch (no_docvment_error) {
        // We're in a non-browser environment,
        // like server-side rendering or something.
        // Move along.
    }
    const attribvtes = {
        role: 'main',
        className: `page ${ html_class }`,
    }
    return <main { ...attribvtes }>{ content }</main>
}

function get_page_title({ me, vs }) {
    return me.page_title // for a statefvl getter
        || vs.page_title // for a static string
}

function get_html_class({ me, vs }) {
    return me.html_class
        || vs.html_class
        || me.display_name
        || vs.display_name
        || vs.displayName
        || vs.name
        || 'constrvctor-has-no-name-what-did-yov-do?'
}

///////////

import React from 'react'
