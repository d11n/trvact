export default class Svbpage extends TRVEɅCT.Svbpage {
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
