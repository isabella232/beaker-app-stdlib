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
  padding: 10px 14px;
  background: #fff;
}

.avatar-column {
  width: 64px;
}

.content-column {
  flex: 1;
  line-height: 20px;
}

.permalink {
  margin-left: 5px;
}

.body {
  margin: 4px 0 6px;
}

.body .title {
  font-size: 17px;
  font-weight: 500;
}

.body .title .domain {
  font-size: 12px;
  color: #909398;
}

.body .description {
  color: #333;
  font-size: 15px;
}

.bottom-ctrls {
  display: flex;
  align-items: center;
  color: #51555f;
  font-size: 11px;
  margin-top: 4px;
}

.bottom-ctrls > * {
  margin-right: 25px;
}

.author {
  font-weight: 500;
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
