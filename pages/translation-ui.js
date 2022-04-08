import Layout from '../components/Layout/layout'
import Head from 'next/head';
import Zig from '../components/zigzag/Zig';
import Zag from '../components/zigzag/Zag';
import BackHome from '../components/BackHome';
import Intro from '../components/intro/Intro';

export default function TranslationUI(){
  return (
    <>
      <Head>
        <title>Translation UI</title>
      </Head>
      
      <Intro images={[
        "/tui1.png",
        "/tui2.png",
        "/tui3.png",
        "/tui4.png",
        "/tui5.png",
        "/tui6.png",
      ]}>
        <h1>Translation UI</h1>
        <p>Obviously the most important part of a translation company is translating. The Translation UI is the mini app that helps our translators to do so.</p>
        <p>The Translation UI features 2 main areas: the Editor and the Context sidebar.</p>
        <p>The editor shows the source text to translate and gives the inputs to enter the translations. All that with many features to help translating, like automatically higlighted glossary terms, smart autocompletions and HTML helpers.</p>
        <p>The context sidebar gives access to all kinds of extra information to help with the translations like AI generated suggestions, style guides and tools to communicate with the client.</p>
      </Intro>

      <Layout>        
        <div>
          <h1 className="align-center m-5">Trying to be helpful</h1>

          <Zig img="/translatinghtml.png">
            <h3>Translating HTML</h3>
            <p>Our translators often have to face HTML content and they do not have a technical background. Simply returning errors when the inserted HTML was incorrect was not enough and it slowed translations to a crawl. That is why I designed the HTML helper.</p>
            <p>It shows clearly the presence of tags, which ones are missing and which ones are incorrecly placed.</p>
            <p>The interface makes use of distinctive shapes to teach translators the difference between opening, closing and self-closing tags.</p>          
            <p>It provides several affordances like autocompletions, dragging tags with the mouse or copy/pasting content from sources that normally would create a mess on a <code>contenteditable='true'</code> container.</p>
          </Zig>

          <Zag img="/highlight.png">
            <h3>Highlighting mistakes</h3>
            <p>We have the need to regurlarly check the quality of our translations.</p>
            <p>Even though we will always use qualitative measures like experienced translators explaining why translations are good or bad, we also need quantitative ones to analyze trends statistically.</p>
            <p>I designed a process to highlight parts of segments with the types of mistakes which would somtimes result in funny looking underlining rainbows.</p>
            <p>Making the browser show that many underlines and dynamically change the line height to prevent content clipping was no easy feat.</p>
          </Zag>

          <Zig img="/context.png">
            <h3>The context sidebar</h3>
            <p>The context sidebar is designed first to stay out of the way of the main task, translating, but at the same time to stay visible and at hand to help the translator as much as possible.</p>
            <p>Even if the translator chooses not to interact with it, it contains useful advices first and gives back contextual translation tips as soon as a segment gets selected.</p>
            <p>Digging deeper on the sidebar the user can enter in modes that allow them to ask questions to the client about the content, a detailed style guide or a mode to merge segments.</p>
          </Zig>        
        </div>

        <BackHome />     
      </Layout>
    </>
  );
}