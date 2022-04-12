import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/Layout/layout'
import Zag from '../components/zigzag/Zag'
import Zig from '../components/zigzag/Zig'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rafa Latorre's portfolio</title>      
      </Head>

      <main>
        <div className="flex mb-5 mt-5 sm-mt-2 sm-mb-2">
          <h1 className='intro'>
            Hi! I'm <strong className='text-color-purple'>Rafa</strong> and I have spent the last <br />
            <strong className='text-color-soft-red'>7 years</strong> at <strong className='text-color-orange'>Tolq.com</strong> <strong className='text-color-green'>designing</strong> and <strong className='text-color-soft-blue'>implementing</strong> its 3 applications.
            <br />
            <strong>This is my portfolio:</strong>
          </h1>
        </div>

        <Zag img="/datatables.png">
          <h3>Data Tables</h3>
          <p>One of the most frequent needs of nowadays web apps is to show data in a tabular way and Tolq is not an exception.</p>
          <p>At first glance they look like something simple but once you scratch the surface a bit on the surface you can find many interesting details that need to be designed and implemented with utmost care.</p>
          <Link href="/data-tables">
            <a className="btn mt-3">See more</a>
          </Link>
        </Zag>        

        <Zig img="/tui.png">
          <h3>Translation UI</h3>
          <p>The most complex component I have designed is the translation UI, an app to help translators.</p>
          <p>This app features atypical rich text editors, a chat, different sources of translation context and plenty more.</p>
          <Link href="/translation-ui">
            <a className="btn mt-3">See more</a>
          </Link>
        </Zig>        

        <Zag img="/windowing.png">
          <h3>Windowing</h3>
          <p>Anyone who ever used Google maps should be familiar with how it seemingly has an infinite scroll on the 3 coordinates axis, that technique is called "windowing".</p>
          <p>When we have fixed sized items to render the technique is relatively straightfoward, when the size of the items is not only undetermined but can change at any time we got ourselves a huge design challenge.</p>
          <Link href="/infinite-scroll">
            <a className="btn mt-3">See more</a>
          </Link>
        </Zag>
        
      </main>            
    </Layout>
  )
}
