import {css} from '../../../vendor/lit-element/lit-element.js'
import colorscss from '../../colors.css.js'
import searchinputcss from '../search-input.css.js'
import buttons2css from '../../buttons2.css.js'

const cssStr = css`
${colorscss}
${searchinputcss}
${buttons2css}

:host {
  display: block;
  height: 100vh;
}

.header {
  background: #fff;
  height: 45px;
  padding: 20px 20px 5px;
  overflow: hidden ;
}

.path {
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: #555;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
}

.path > div {
  padding: 4px 0px 4px 10px;
}

.path > div:not(:last-child):after {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\\f105";
  color: #aaa;
  font-size: 11px;
  padding-left: 10px;
}

.toolbar {
  display: flex;
  align-items: center;
  height: 30px;
  padding: 4px 10px;
  margin-bottom: 5px;
}

.main.with-header .toolbar {
  padding: 0 20px 10px;
}

.main {
  height: 100vh;
}

.main /*.with-sidebar*/ {
  display: grid;
  grid-template-columns: calc(100vw - 540px) 340px;
}

.list > * {
  display: block;
  height: calc(100vh - 170px);
}

.list.with-path > * {
  height: calc(100vh - 123px);
}

.main > :first-child {
  border-right: 1px solid var(--light-border-color);
}

.sidebar {
  background: #fff;
}

/* header styles */

.header h2 {
  font-size: 27px;
  margin: 0;
  font-weight: 500
}

.header h2 i,
.header h2 .favicon {
  margin-right: 3px;
}

.header h2 .favicon {
  width: 32px;
  height: 32px;
  object-fit: cover;
  vertical-align: bottom;
}

.header p {
  line-height: 1.6;
  color: rgba(0,0,0,.6);
}

/* toolbar styles */

.spacer {
  flex: 1;
}

.search-container,
input.search {
  position: relative;
  font-size: 13px;
}

.search-container input.search {
  background: #fff;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  outline: 0;
  padding-left: 30px;
  height: 26px;
  width: 160px;
}

.search-container > i.fa-search {
  font-size: 13px;
  left: 11px;
  top: 9px;
}


`
export default cssStr
