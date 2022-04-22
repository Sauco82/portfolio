import { intro, intro_container } from "./main-intro.module.scss"

export default function MainIntro(){
  return (
    <div className={intro_container}>
      <h1 className={intro}>
        Hi! I'm <strong className='text-color-purple'>Rafa</strong> and I have spent the last
        <strong className='text-color-soft-red inline-block'>7 years</strong> at <strong className='text-color-orange'>Tolq.com</strong>
        {" "}
        <strong className='text-color-green'>designing</strong> and <strong className='text-color-soft-blue'>implementing</strong> its 3 applications.        
      </h1>

      <h1 className="align-center m-3 mt-5 mb-5">This is my portfolio:</h1>
    </div>
  );
}