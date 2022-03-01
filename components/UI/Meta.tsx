import Head from 'next/head'

const Meta: React.FC<{
    title: string
    description: string
    image: string
    pageTitle: string
}> = (props) => {
    const { description, image, title, pageTitle } = props

    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <meta name="keywords" content={title} />
                <meta name="author" content="OHO Learnings" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <title>{pageTitle}</title>
            </Head>
        </>
    )
}

export default Meta
