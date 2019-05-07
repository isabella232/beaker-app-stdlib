import {css} from '../../../vendor/lit-element/lit-element.js'
import inputscss from '../../inputs.css.js'
import buttonscss from '../../buttons.css.js'

const cssStr = css`
${inputscss}
${buttonscss}

:host {
  display: block;
  background: #fff;
  padding: 14px;
}

.input-placeholder,
textarea {
  padding: 8px 10px;
  font-size: 14px;
}

textarea::-webkit-input-placeholder {
  line-height: inherit;
  font-size: 14px;
}

.input-placeholder {
  cursor: text;
  color: #aaa;
  font-weight: 400;
}

textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  height: auto;
  min-height: 55px;
  margin-bottom: 10px;
  resize: none;
  border: 0 !important;
  outline: 0 !important;
  box-shadow: none !important;
}

.actions {
  display: flex;
  align-items: center;
}

.actions .char-count {
  margin-left: auto;
  margin-right: 10px;
}

.actions .char-count.danger {
  color: var(--red);
}
`
export default cssStr
