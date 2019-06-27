import {css} from '../../../vendor/lit-element/lit-element.js'
import buttons2css from '../../buttons2.css.js'
import reactionscss from '../reactions/reactions.css.js'

const cssStr = css`
${buttons2css}
${reactionscss}

:host {
  --body-font-size: 15px;
  --header-font-size: 12px;
  --title-font-size: 14px;
  --footer-font-size: 12px;
  --inner-width: initial;
  --title-color: #333;
  --header-color: #888;
  --footer-color: #888;
  --footer-background: #fff;

  display: block;
  /*cursor: pointer;*/
  border: 1px solid var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.inner {
  display: flex;
  align-items: center;
  width: var(--inner-width);
}

.content-column {
  flex: 1;
  overflow: hidden;
}

.avatar.icon {
  display: inline-block;
  border-radius: 50%;
  object-fit: cover;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  position: relative;
  top: -1px;
  margin-right: 3px;
}

.header {
  display: flex;
  align-items: center;
  padding: 16px 16px 4px;
  font-size: var(--header-font-size);
  line-height: var(--header-font-size);
  color: var(--header-color);
}

.title {
  font-size: var(--title-font-size);
  color: var(--title-color);
  margin-right: 10px;
  line-height: 17px;
}

.body {
  color: rgba(0, 0, 0, 0.9);
  padding: 6px 18px;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: var(--body-font-size);
  line-height: 1.4;
  white-space: pre-line;
}

.readmore {
  display: inline-block;
  margin: 6px 18px;
}

beaker-reactions {
  display: block;
}

.footer {
  display: flex;
  align-items: center;
  font-size: var(--footer-font-size);
  color: var(--footer-color);
  background: var(--footer-background);
  padding: 10px 16px 12px;
}

.footer a {
  margin: 0 5px;
  color: inherit;
}

.footer a:first-child {
  margin-left: 0;
}

.permalink {
  color: inherit;
}

.embed {
  display: flex;
  padding: 10px 20px;
  border-bottom: 1px solid var(--light-border-color);
}

.embed img {
  display: block;
  width: 90px;
  border-radius: 4px;
}

.embed .embed-details {
  padding: 10px 26px;
}

.embed .embed-details > * {
  margin: 4px 0;
}

.embed .embed-title {
  font-size: 16px;
  font-weight: bold;
}

.embed .embed-description {
  color: var(--color-text--muted);
}
`
export default cssStr
