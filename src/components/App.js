import { LitElement, html, css, unsafeCSS } from 'lit-element'
import banner from '../images/banner.svg'

class MyApp extends LitElement {
  static get properties() {
    return {
      theme: { type: String },
      likeText: { type: String },
    }
  }

  static get styles() {
    return css`
    .default {
      --color-background: #23a0ff;
      --color-primary: #1a8ae0;
    }
    .affection {
      --color-background: #ff2391;
      --color-primary: #e0197d;
    }
    .root {
      display: flex;
      height: 100%;
    }
    .cover {
      width: calc(100% - 450px);
      background-color: var(--color-background);
      transition: all ease-in-out 0.2s;
      position: relative;
    }
    .cover > .banner {
       position: absolute;
       width: 100%;
       height: 100%;
       background-color: var(--color-primary);
       transition: all ease-in-out 0.2s;
       mask-image: url("${unsafeCSS(banner)}");
       mask-repeat: repeat-x;
       mask-position: center 50%;
       mask-size: 1000px 750px;
    }
    .title {
      position: absolute;
      top: 65%;
      left: 100px;
    }
    .title h1 {
      color: #fff;
      font-size: 3.5rem;
      font-family: "Source Han Sans OLD", sans-serif;
      margin: 0;
      line-height: 1.3em;
    }
    .title h2 {
      color: #fff;
      font-size: 1.5rem;
      font-family: "Source Han Sans OLD", sans-serif;
      margin: 0;
      line-height: 1.3em;
    }
    .title h2:before {
      content: "> ";
      font-size: 1.5rem;
      font-family: "Source Han Sans OLD", sans-serif;
    }
    .content {
      font-family: "Fangzheng Jinglei Jianti", sans-serif;
      font-size: 2rem;
      color: #333;
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
      z-index: 2;
    }
    .content ul {
      margin-left: 20px;
      margin-top: 30%;
    }
    .content ul li {
      list-style: none;
      line-height: 2em;
    }
    .content a {
      text-decoration: none;
      color: var(--color-primary);
    }
    @media screen and (max-width: 950px) {
      .root {
        flex-direction: column;
      }
      .cover {
        width: 100%;
        height: calc(100% - 284px);
      }
      .title {
        top: 50%;
        left: 0;
        width: 100%;
        transform: translateY(-50%);        
        text-align: center;
      }
      .title h1 {
        font-size: 3rem;
      }
      .title h2 {
        font-size: 1.25rem;
      }
      .content {
        font-size: 1.75rem;
      }
      .content ul {
        margin-top: 2rem;
        margin-left: 0;
        padding-left: 2rem;
      }
    }
    `
  }

  constructor() {
    super()
    this.theme = 'default'
    this.likeText = '喜欢一下'
  }

  render() {
    return html`
      <div class="root ${this.theme}">
        <div class="cover">
          <div class="banner"></div>
          <div class="title">
            <h1>2645 工作室</h1>
            <h2>萌妹饿了，萌妹想要钱吃饭</h2>
          </div>
        </div>
        <div class="content">
          <ul>
            <li>
              1. 关于：<a href="https://blog.cool2645.com/posts/about-2645"
                >#关于我们</a
              >
            </li>
            <li>
              2. 博客：<a href="https://blog.cool2645.com">#2645实验室</a>
            </li>
            <li>
              3. GitHub：<a
                href="https://github.com/cool2645"
                target="_blank"
                referrerpolicy="no-referrer"
                >#cool2645</a
              >
            </li>
            <li>
              4. 支持：<a href="" @click="${this.sendLike}"
                >#${this.likeText}</a
              >
            </li>
          </ul>
        </div>
      </div>
    `
  }

  sendLike(e) {
    e.preventDefault()
    this.theme = 'affection'
    this.likeText = '感谢喜欢'
  }
}

customElements.define('my-app', MyApp)
