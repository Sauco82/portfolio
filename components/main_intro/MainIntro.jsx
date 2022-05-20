import { intro, intro_container, me, hi } from "./main-intro.module.scss"

export default function MainIntro(){
  return (
    <div className={intro_container}>
      <img src="/me.png" alt="That's me!" className={me}/>
      <h1 className={hi}>Hi!</h1> 
      <h1 className={intro}>        
        I'm <strong>Rafa</strong> and I have spent the last
        {" "}
        <strong className='inline-block'>8 years</strong> at <a href="https://tolq.com/">Tolq.com</a>
        {" "}
        <strong className="text-color-soft-blue">designing</strong> and <strong className="text-color-green">implementing</strong> its 
        <br />
        3 applications.        

        <br />
        <br />
        This is a quick portfolio featuring a few of the things I have done:
      </h1>      
    </div>
  );
}