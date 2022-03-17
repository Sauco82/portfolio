import Layout from '../components/Layout/layout'
import Head from 'next/head';
import Zig from '../components/Zig';
import Zag from '../components/Zag';
import BackHome from '../components/BackHome';
import Intro from '../components/Intro';

export default function TranslationUI(){
  return (
    <>
      <Head>
        <title>Windowing</title>
      </Head>

      <Intro images={["/infinite_cover.png"]}>
        <h1>Windowing</h1>
        <p>This caption at the right shows what we call the Content UI, a view where the client can browse one of their translation requests.</p>
        <p>A translation request can have almost any size from just a few words to the length of the entire works of Miguel de Cervantes.</p>
        <p>Like with books the most important feature of this UI for the user is to be able to read a group of segments without breaking the flow.</p>
        <p>Standard pagination will frequently put a paragraph's segments in different pages obviously breaking the reading flow.</p>
        <p>In this page you'll find some of the highlights of the rabbit hole that was designing and implementing this feature which took me from reasearching how ebooks handle the same challenge to hacking existing windowing solutions.</p>
      </Intro>

      <Layout>
        <h1 className="align-center m-5">To infinity and beyond</h1>

        <Zig img="/infinite_scroll.png">
          <h3>Why not simply use an infinte scroll?</h3>
          <p>Infinite scrolling is a nice pattern to lazily load a gallery of images. That is because in that case the goal of the user is to browse all of them without really caring about going to a specific image.</p>
          <p>But that doesn't work for a user who wants to correct the content from the middle of a 20 pages word document.</p>
          <p>This user will expect to be able to grab the scroll bar, drag it to roughly the middle point and from there find their way out to their target scrolling up or down. In other words, <strong>they need windowing</strong>.</p>
        </Zig>

        <Zag img="/different_sized.png">
          <h3>Why not using same sized segments ?</h3>
          <p>After defining that we need windowing a first exploration of the technique tells us that if all the segments had the same height makes the design pretty trivial.</p>
          <p>It is just a matter of multiplying the number segments times the height and we got our scroll height, scrolling to a particular segment is just a matter of multiplying its index position times the height and voila we are there.</p>
          <p>But it is not that easy. Segments length can vary greatly in the same translation, make them too big and the reading experience becomes janky and more difficult, make them too small and you have to scroll every one of them completely breaking the reading flow.</p>
          <p>Obviously this resulted on me keeping on thinking how to go from traditional windowing to something more complex.</p>
        </Zag>

        <Zig img="/growing.png">
          <h3>The challenges with growing segments</h3>
          <p>Once I thought I had nailed it out I realised that with certain languages, Spanish among them, the same thing could be expressed in different ways that would differ very significantly on length. Also that probably at some point I would like to apply this technique in the Translation UI where the dramatic length change would be even more frequent.</p>
          <p>Since we sync segments with exactly the same copy, this sudden length change could happen in several places at the same time.</p>
          <p>This took me to the drawing table again to figure out how to deprecate old segments heights and keep them always looking nice.</p>
        </Zig>

        <BackHome />
      </Layout>
    </>
  );
}