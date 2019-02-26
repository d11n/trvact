export default class Page extends TRVEɅCT.Page {
    constructor(props) {
        super(props)
        !this.constructor.isMobXReactObserver
            && observer(this.constructor)
        return this
    }
}

///////////

import { observer } from 'mobx-react'
import TRVEɅCT from 'trveact'
