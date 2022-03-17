import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rafa Latorre's portfolio</title>      
      </Head>

      <main>

        <div className="flex justify-center mb-5 mt-5">
          <h1 className='intro'>
            Hi! I'm <strong>Rafa</strong>{' '}
            and I have spent the last <strong>7 years</strong> at <strong>Tolq.com</strong> <strong>designing</strong> and <strong>implementing</strong> its 3 applications.
            <br />
            This is my portfolio:
          </h1>
        </div>


        <div className='grid mb-5'>
          <div className='g-col-6 justify-self-end align-self-center mr-3'>            
            <img src="/datatables.png" />
          </div>
          <div className='g-col-6 justify-self-start align-self-center'>
            <div className="portfolio_article">
              <h3>Data Tables</h3>
              <p>One of the most frequent needs of nowadays web apps is to show data in a tabular way and Tolq is not an exception.</p>
              <p>At first glance they look something simple but once you scratch a bit on the surface you can find many interesting details that need to be designed and implemented with utmost care.</p>
              <Link href="/data-tables">
                <a className="btn mt-3">See more</a>
              </Link>
            </div>
          </div>
        </div>

        <div className='grid mb-5'>
          <div className='g-col-6 justify-self-end align-self-center'>
            <div className="portfolio_article">
              <h3>Translation UI</h3>
              <p>The most complex component I have designed is the translation UI, an app to help translators.</p>
              <p>This app features atypical rich text editors, a chat, different sources of translation context and plenty more.</p>
              <Link href="/translation-ui">
                <a className="btn mt-3">See more</a>
              </Link>
            </div>
          </div>
          <div className='g-col-6 justify-self-start align-self-center ml-3'>
            <img src="/tui.png" />
          </div>
        </div>

        <div className='grid mb-5'>
          <div className='g-col-6 justify-self-end align-self-center mr-4'>
            <img src="/infinite.png"/>
          </div>
          <div className="g-col-6 align-self-center">
            <div className="portfolio_article">
              <h3>Windowing</h3>
              <p>Anyone who ever used Google maps should be familiar with how it seemingly has an infinite scroll on the 3 coordinates axis, that technique is called "windowing".</p>
              <p>When we have fixed sized items to render the technique is relatively straightfoward, when the size of the items is not only undetermined but can change at any time we got ourselves a huge design challenge.</p>
              <Link href="/infinite-scroll">
                <a className="btn mt-3">See more</a>
              </Link>
            </div>
          </div>
        </div>        
      </main>            
    </Layout>
  )
}
