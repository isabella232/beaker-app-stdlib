import {css} from '../../../vendor/lit-element/lit-element.js'
import buttonscss from '../../buttons.css.js'
import reactionscss from '../reactions/reactions.css.js'

const cssStr = css`
${buttonscss}
${reactionscss}

:host {
  display: block;
}

a:hover {
  text-decoration: underline;
}

.inner {
  display: flex;
  background: #fff;
  padding: 18px 16px;
}

.avatar-column {
  width: 64px;
}

.content-column {
  flex: 1;
}

.avatar {
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.header {
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: var(--color-text--muted);
}

.title {
  font-size: 15px;
  font-weight: bold;
  color: var(--color-text);
  margin-right: 5px;
}

.permalink {
  color: inherit;
  margin-left: 5px;
}

.body {
  white-space: pre-wrap;
  font-size: 14px;
  line-height: 1.4;
  margin: 4px 0 10px;
  color: var(--color-text--dark);
  word-break: break-word;
}

.bottom-ctrls {
  display: flex;
  align-items: center;
  color: #51555f;
}

.bottom-ctrls > * {
  margin-right: 25px;
}

.bottom-ctrls > div a {
  font-size: 11px;
  color: #505869;
  cursor: pointer;
}

.inner:hover .reaction.add-btn {
  opacity: 1;
}
`
export default cssStr
