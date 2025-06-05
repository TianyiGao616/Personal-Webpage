import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
        © {year} All rights reserved by Tianyi Gao · 
        <a href="https://github.com/TianyiGao616" target="_blank" rel="noopener noreferrer">GitHub</a> · 
        <a href="https://www.linkedin.com/in/tianyi-gao-631126260" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
