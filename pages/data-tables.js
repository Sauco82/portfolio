import Layout from '../components/Layout/layout'
import Head from 'next/head';
import Zig from '../components/Zig';
import Zag from '../components/Zag';
import BackHome from '../components/BackHome';
import Intro from '../components/Intro';

export default function DataTable(){
  return (
    <>
      <Head>
        <title>Data Tables</title>
      </Head>

      <Intro images={[
        "/datatable1.png",
        "/datatable2.png",
        "/datatable3.png",
        "/datatable4.png",
        "/datatable5.png",
      ]}>
        <h1>Data Tables</h1>
        <p> From a blog site to Google search, almost every single web app in the planet needs to list their content. </p>
        <p>Sometimes the content needs to be pretty, sometimes highly interactive and some other times simply functional.</p>
        <p>Tolq is no exception, and during my time there I have designed (and redesigned) several data tables.</p>    
        <p>As soon as we add filters to the equation several interaction issues arise that we need to design for carefully.</p>
        <p>Below I will show some of those using as example a generic Data Table component I designed and implemented recently.</p>
      </Intro>

      <Layout>
        <h1 className="align-center m-5 mt-4">Designing a great generic Data Table</h1>

        <Zig img="/searchbar.png">
          <h3>Keeping the url synced</h3>
          <p>When the user changes the filters of the listing the url is updated, allowing them to share the current status of their page.</p>
          <p>On top of that the browser history is properly modified, allowing the user to get back to the last state of their page.</p>
          <p>If they keep going back it does not force them to go through every single filter change and takes them to the page they visited before the Datable.</p>
        </Zig>

        <Zag img="/debounce.png">
          <h3>Debounced filters</h3>
          <p>When free text inputs are used the query is not automatically sent, instead the component waits for a few milliseconds to wait the user finish typing.</p>
        </Zag>

        <Zig img="/overflow.png">
          <h3>Overflow managament</h3>
          <p>Scrolling tables horizontally is pretty unergonomic in most computers. It requires to scroll all the way down to the bottom of the table and then drag a not always easy to grab horizontal scrollbar to finally scroll back up to check the result.</p>
          <p>My component detects when the table has enough space to be displayed normally and does so.</p>
          <p>But if the table is too big the style changes showing the "grab" cursor when hovering it and the "grabbing" cursor at clicking. Some mouse event listeners are added allowing the user to scroll horizontally.</p>
        </Zig>

        <Zag img="/configurable.png">
          <h3>Configurable content</h3>
          <p>Even with the included scrolling affordances, seeing all the content one is interested into in a single look is far superior.</p>
          <p>Generally too many items create noise that makes parsing information far more difficult.</p>
          <p>Because of that the Data Table component allows you to select which items you want to see.</p>
        </Zag>
        <BackHome />
      </Layout>
    </>
  );
}