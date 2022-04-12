import {
  zig,
  zag,
  portfolio_article,
  portfolio_article_container,
  img_container,
} from "./zigzag.module.scss"

export const ZigZagHOC = (kind = "zig") => ({children, img}) => {
  return (
    <div className={kind === "zig" ? zig : zag}>
      <div className={portfolio_article_container}>
        <div className={portfolio_article}>
          {children}
        </div>
      </div>
      <div className={img_container}>        
        {img && <img src={img}/>}
      </div>
    </div>
  );
}


export default ZigZagHOC;