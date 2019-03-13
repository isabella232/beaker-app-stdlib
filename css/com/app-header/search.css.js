import {css} from '../../../vendor/lit-element/lit-element.js'
import commoncss from '../../common.css.js'
import searchinputcss from '../search-input.css.js'
import autocompletecss from '../autocomplete.css.js'

const cssStr = css`
${commoncss}
${searchinputcss}
${autocompletecss}

:host {
  --input-bg-color: #fff;
  --input-border-radius: 4px;
}

.search-container,
input.search {
  position: relative;
  width: 100%;
  height: 36px;
  font-size: 15px;
}

.search-container input.search {
  background: var(--input-bg-color);
  border-radius: var(--input-border-radius);
}

.search-container > .fa-search {
  font-size: 15px;
  left: 14px;
  top: 10px;
}

input.search::-webkit-input-placeholder {
  font-size: 15px;
}

.search-container.with-button,
.search-container.with-button input.search {
  height: 40px;
}

.search-container.with-button input.search {
  border-radius: 4px 0 0 4px;
  border-right: 0;
  width: calc(100% - 50px);
}

.btn.search-btn {
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  height: 40px;
  border-radius: 0 4px 4px 0;
  font-size: 20px;
  line-height: 16px;
}

i.fa-arrow-right {
  -webkit-text-stroke: 1px var(--blue);
}

`
export default cssStr
