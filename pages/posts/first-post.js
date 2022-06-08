import Head from "next/head"
import Link from "next/link"

export default function firstPost() {
    return (
        <>
        <Head>
            <title> First post · by ffff</title>
        </Head>
            <h1>Hi my first post here</h1>
            <h4>
                <Link href='/'>
                    <a>Back to home</a>
                </Link>
            </h4>
        </>
    )
}