import Image from 'next/image';



export default function Home() {
    return (
        <div>
            <main>
                <h3>Purple</h3>
                <h1>Hi</h1>
            </main>

            <a href="https://github.com/Z-Soriano">
                <Image src="/purple.png" alt="GitHub profile for Z-Soriano" width={60} height={60} className="image" />
            </a>
        </div>

    );
}
