export default function Zig({children, img}){
  return (
    <div className='grid mb-5'>
      <div className='g-col-6 justify-self-end align-self-center mr-3'>            
        {img && <img src={img}/>}
      </div>
      <div className='g-col-6 justify-self-start align-self-center'>
        <div className="portfolio_article">
          {children}
        </div>
      </div>
    </div>
  )
}