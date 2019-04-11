import { LitElement, html, css } from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import * as appMenu from '/vendor/beaker-app-stdlib/js/com/app-menu.js'
import * as contextMenu from '/vendor/beaker-app-stdlib/js/com/context-menu.js'
import * as toast from '/vendor/beaker-app-stdlib/js/com/toast.js'
import _debounce from '../../vendor/lodash.debounce.js'

const PASTEDAT_KEY = '9056aa61e80e4a1d16c0ac651049dc906fe0ebb6be13aa356df9e81fbce05c77'
const PHOTOALBUM_KEY = '911c291505c8dd262b099880a858cfe9f9971e39a1118cef3b3a529a3ec7548e'

const createContextMenu = (el, items) => contextMenu.create({
  x: el.getBoundingClientRect().right,
  y: el.getBoundingClientRect().bottom,
  right: true,
  withTriangle: true,
  noBorders: true,
  style: 'padding: 4px 0; min-width: 200px; font-size: 14px; color: #000',
  fontAwesomeCSSUrl: '/vendor/beaker-app-stdlib/css/fontawesome.css',
  items
})

class TopRightControls extends LitElement {
  static get properties () {
    return {
      user: {type: Object},
      cacheBuster: {type: Number}
    }
  }

  constructor () {
    super()
    this.user = null
    this.cacheBuster = 0
    window.addEventListener('focus', _debounce(() => {
      // load latest when we're opened, to make sure we stay in sync
      this.cacheBuster = Date.now()
    }, 1e3, {leading: true}))
  }

  get userName () {
    return this.user && this.user.title || 'Anonymous'
  }

  get userUrl () {
    return this.user ? this.user.url : ''
  }

  get userImg () {
    return this.user ? html`<img src="${this.user.url}/thumb?cache=${this.cacheBuster}">` : ''
  }

  render() {
    return html`
      <link rel="stylesheet" href="/vendor/beaker-app-stdlib/css/fontawesome.css">
      <div>
        <a @click=${this.onClickNewMenu} style="font-size: 14px; font-weight: 500; line-height: 14px;">New <i class="fas fa-caret-down"></i></a>
        <a @click=${this.onClickAppMenu}><i class="fas fa-th"></i></a>
        <a @click=${this.onClickProfileMenu} class="profile">${this.userImg}<i class="fas fa-caret-down"></i></a>
      </div>`
  }

  onClickAppMenu (e) {
    e.preventDefault()
    e.stopPropagation()
    appMenu.create({
      x: e.currentTarget.getBoundingClientRect().right,
      y: e.currentTarget.getBoundingClientRect().bottom
    })
  }

  onClickNewMenu (e) {
    e.preventDefault()
    e.stopPropagation()

    const goto = (url) => { window.location = url }
    async function create (templateUrl, title, description) {
      toast.create('Loading...', '', 10e3)
      setTimeout(() => toast.create('Still loading...', '', 10e3), 10e3)
      setTimeout(() => toast.create('Still loading, must be having trouble downloading the template...', '', 10e3), 20e3)
      setTimeout(() => toast.create('Okay wow...', '', 10e3), 30e3)
      setTimeout(() => toast.create('Still loading, is your Internet connected?...', '', 10e3), 40e3)
      setTimeout(() => toast.create('Lets give it 10 more seconds...', '', 10e3), 50e3)
      try {
        var newSite = await DatArchive.fork(templateUrl, {title, description, prompt: false})
        window.location = newSite.url
      } catch (e) {
        console.error(e)
        if (e.name === 'TimeoutError') {
          toast.create('Beaker was unable to download the template for your new site. Please check your Internet connection and try again!', 'error')
        } else {
          toast.create('Unexpected error: ' + e.message, 'error')
        }
      }
    }
    const items = [
      html`<div class="section-header small light">Projects</div>`,
      {icon: false, label: 'Blank website', click: () => goto('beaker://library/?view=new-website')},
      '-',
      html`<div class="section-header small light">Tools</div>`,
      {icon: false, label: 'PasteDat', click: () => create(PASTEDAT_KEY, 'New PasteDat')},
      '-',
      html`<div class="section-header small light">Media</div>`,
      {icon: false, label: 'Photo album', click: () => create(PHOTOALBUM_KEY, `Photo Album (${(new Date()).toLocaleDateString()})`)}
    ]
    createContextMenu(e.currentTarget, items)
  }

  onClickProfileMenu (e) {
    e.preventDefault()
    e.stopPropagation()

    const goto = (url) => { window.location = url }
    const items = [
      html`<div class="section-header light small">Identity</div>`,
      {icon: false, label: 'Your personal site', click: () => goto(this.userUrl)},
      '-',
      html`<div class="section-header light small">Apps</div>`,
      {icon: false, label: 'Beaker.Social profile', click: () => goto(`intent:unwalled.garden/view-feed?url=${encodeURIComponent(this.userUrl)}`)},
      '-',
      html`<div class="section-header light small">Personal data</div>`,
      {icon: false, label: 'Your address book', click: () => goto('beaker://library/?view=addressbook')},
      {icon: false, label: 'Your bookmarks', click: () => goto('beaker://library/?view=bookmarks')},
      {icon: false, label: 'Your websites', click: () => goto('beaker://library/?view=websites')},
      '-',
      {icon: false, label: 'Settings', click: () => goto('beaker://settings/')}
    ]
    createContextMenu(e.currentTarget, items)
  }
}

TopRightControls.styles = css`
div {
  display: flex;
  align-items: center;
  position: fixed;
  top: 8px;
  right: 10px;
  font-size: 16px;
}

a {
  color: gray;
  padding: 10px;
  cursor: pointer;
}

a:hover {
  color: #555;
}

.profile {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  border-radius: 2px;
  padding: 3px 6px;
  margin-left: 5px;
}

.profile:hover {
  color: #333;
  background: #eee;
}

.profile img {
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 5px;
}
`

customElements.define('beaker-top-right-controls', TopRightControls)

